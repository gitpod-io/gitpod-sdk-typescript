import { Gitpod } from '../client';
import { Environment } from '../resources/environments/environments';
import { EnvironmentClass } from '../resources/shared';

/**
 * Maintains the current state of an environment and updates it via event stream.
 * Uses event emitter pattern for state updates.
 */
export class EnvironmentState {
  private environment?: Environment;
  private ready: Promise<void>;
  private resolveReady!: () => void;
  private listeners: Array<(env: Environment) => void> = [];
  private shouldStop = false;
  private controller: AbortController | undefined;
  private updateTask: Promise<void>;

  constructor(
    private client: Gitpod,
    private environmentId: string,
  ) {
    this.ready = new Promise((resolve) => {
      this.resolveReady = resolve;
    });
    this.updateTask = this.startUpdateLoop();
  }

  async getEnvironment(): Promise<Environment> {
    await this.ready;
    if (!this.environment) {
      throw new Error('Environment not initialized');
    }
    return this.environment;
  }

  private async updateEnvironment(): Promise<void> {
    try {
      const resp = await this.client.environments.retrieve({ environmentId: this.environmentId });
      const env = resp.environment;
      this.environment = env;
      this.resolveReady();

      for (const listener of [...this.listeners]) {
        try {
          listener(env);
        } catch (error) {
          console.error('Failed to call listener:', error);
        }
      }
    } catch (error) {
      console.error('Failed to update environment:', error);
    }
  }

  private async startUpdateLoop(): Promise<void> {
    let retryDelay = 1000; // Initial retry delay in milliseconds
    const maxDelay = 32000; // Maximum retry delay

    await this.updateEnvironment();

    while (!this.shouldStop) {
      try {
        if (this.shouldStop) return;

        this.controller = new AbortController();
        const eventStream = await this.client.events.watch(
          {
            environmentId: this.environmentId,
          },
          {
            signal: this.controller.signal,
          },
        );

        retryDelay = 1000; // Reset delay on successful connection
        if (this.shouldStop) return;

        await this.updateEnvironment();
        if (this.shouldStop) return;

        try {
          for await (const event of eventStream) {
            if (this.shouldStop) return;

            if (
              event.resourceType === 'RESOURCE_TYPE_ENVIRONMENT' &&
              event.resourceId === this.environmentId
            ) {
              await this.updateEnvironment();
            }
          }
        } finally {
          this.controller?.abort();
          this.controller = undefined;
        }
      } catch (error) {
        if (this.shouldStop || (error instanceof Error && error.name === 'AbortError')) {
          return;
        }

        console.error(`Error in event stream, retrying in ${retryDelay}ms:`, error);
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
        retryDelay = Math.min(retryDelay * 2, maxDelay);
      }
    }
  }

  async close(): Promise<void> {
    this.shouldStop = true;
    this.controller?.abort();
    await this.updateTask;
  }

  async waitUntil<T>(checkFn: (env: Environment) => T | undefined): Promise<T> {
    const initialEnv = await this.getEnvironment();
    const initialCheck = checkFn(initialEnv);
    if (initialCheck !== undefined) {
      return initialCheck;
    }

    return new Promise<T>((resolve) => {
      const listener = (env: Environment) => {
        const result = checkFn(env);
        if (result !== undefined) {
          this.listeners = this.listeners.filter((l) => l !== listener);
          resolve(result);
        }
      };
      this.listeners.push(listener);
    });
  }

  isRunning(env: Environment): boolean {
    if (!env.status) {
      return false;
    }

    if (env.status.failureMessage) {
      throw new Error(`Environment ${env.id} failed: ${env.status.failureMessage.join('; ')}`);
    } else if (
      [
        'ENVIRONMENT_PHASE_STOPPING',
        'ENVIRONMENT_PHASE_STOPPED',
        'ENVIRONMENT_PHASE_DELETING',
        'ENVIRONMENT_PHASE_DELETED',
      ].includes(env.status.phase || '')
    ) {
      throw new Error(`Environment ${env.id} is in unexpected phase: ${env.status.phase}`);
    }

    return env.status.phase === 'ENVIRONMENT_PHASE_RUNNING';
  }

  getSshUrl(env: Environment): string | undefined {
    return env.status?.environmentUrls?.ssh?.url;
  }

  getPortUrl(env: Environment, port: number): string | undefined {
    return env.status?.environmentUrls?.ports?.find((p) => p.port === port)?.url;
  }

  checkSshKeyApplied(env: Environment, keyId: string, keyValue: string): boolean {
    if (!env.spec?.sshPublicKeys) {
      return false;
    }

    const key = env.spec.sshPublicKeys.find((k) => k.id === keyId);
    if (!key) {
      throw new Error(`SSH key '${keyId}' not found in environment spec`);
    }

    if (key.value !== keyValue) {
      throw new Error(`SSH key '${keyId}' has incorrect value`);
    }

    if (!env.status?.sshPublicKeys) {
      return false;
    }

    const keyStatus = env.status.sshPublicKeys.find((ks) => ks.id === keyId);
    if (!keyStatus) {
      return false;
    }

    if (keyStatus.phase === 'CONTENT_PHASE_FAILED') {
      throw new Error(`SSH key '${keyId}' failed to apply`);
    }

    return keyStatus.phase === 'CONTENT_PHASE_READY';
  }

  async waitUntilRunning(): Promise<void> {
    await this.waitUntil((env) => (this.isRunning(env) ? true : undefined));
  }

  async waitForSshUrl(): Promise<string> {
    const url = await this.waitUntil((env) => this.getSshUrl(env));
    return url;
  }

  async waitForPortUrl(port: number): Promise<string> {
    const url = await this.waitUntil((env) => this.getPortUrl(env, port));
    return url;
  }

  async waitForSshKeyApplied(keyId: string, keyValue: string): Promise<void> {
    await this.waitUntil((env) => (this.checkSshKeyApplied(env, keyId, keyValue) ? true : undefined));
  }
}

export async function waitForEnvironmentRunning(client: Gitpod, environmentId: string): Promise<void> {
  const env = new EnvironmentState(client, environmentId);
  try {
    await env.waitUntilRunning();
  } finally {
    await env.close();
  }
}

export async function findMostUsedEnvironmentClass(client: Gitpod): Promise<EnvironmentClass | undefined> {
  const classUsage = new Map<string, number>();
  let envsResp = await client.environments.list({});

  while (envsResp) {
    for (const env of envsResp.environments) {
      const envClass = env.spec?.machine?.class;
      if (envClass) {
        classUsage.set(envClass, (classUsage.get(envClass) || 0) + 1);
      }
    }
    if (envsResp.pagination?.nextToken) {
      envsResp = await client.environments.list({ token: envsResp.pagination.nextToken });
    } else {
      break;
    }
  }

  const sortedClasses = Array.from(classUsage.entries()).sort(([, a], [, b]) => b - a);
  const environmentClassId = sortedClasses[0]?.[0];
  if (!environmentClassId) {
    return undefined;
  }

  return findEnvironmentClassById(client, environmentClassId);
}

export async function findEnvironmentClassById(
  client: Gitpod,
  environmentClassId: string,
): Promise<EnvironmentClass | undefined> {
  let classesResp = await client.environments.classes.list({ filter: { canCreateEnvironments: true } });

  while (classesResp) {
    for (const cls of classesResp.environmentClasses) {
      if (cls.id === environmentClassId) {
        return cls;
      }
    }
    if (classesResp.pagination?.nextToken) {
      classesResp = await client.environments.classes.list({ token: classesResp.pagination.nextToken });
    } else {
      break;
    }
  }
  return undefined;
}
