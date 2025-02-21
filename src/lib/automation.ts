import { Gitpod } from '../client';
import { ServiceMetadata, ServiceSpec } from '../resources/environments/automations/services';

const TASK_REFERENCE = 'gitpod-typescript-sdk';

export async function runService(
  client: Gitpod,
  environmentId: string,
  metadata: ServiceMetadata,
  spec: ServiceSpec,
): Promise<AsyncGenerator<string>> {
  const reference = metadata.reference;
  if (!reference) {
    throw new Error('metadata.reference is required');
  }

  const services = (
    await client.environments.automations.services.list({
      filter: {
        references: [reference],
        environmentIds: [environmentId],
      },
    })
  ).services;

  let service = services[0];
  if (!service) {
    const response = await client.environments.automations.services.create({
      environmentId,
      spec,
      metadata,
    });
    service = response.service;
  }

  await client.environments.automations.services.start({ id: service.id });
  const logUrl = await waitForServiceLogUrl(client, environmentId, service.id);
  return streamLogs(client, environmentId, logUrl);
}

export async function runCommand(
  client: Gitpod,
  environmentId: string,
  command: string,
): Promise<AsyncGenerator<string>> {
  const tasks = (
    await client.environments.automations.tasks.list({
      filter: {
        references: [TASK_REFERENCE],
        environmentIds: [environmentId],
      },
    })
  ).tasks;

  let task = tasks[0];
  if (!task) {
    const response = await client.environments.automations.tasks.create({
      spec: { command },
      environmentId,
      metadata: {
        name: 'Gitpod TypeScript SDK Task',
        description: 'Gitpod TypeScript SDK Task',
        reference: TASK_REFERENCE,
      },
    });
    task = response.task;
  } else {
    await client.environments.automations.tasks.update({
      id: task.id,
      spec: { command },
    });
  }

  const taskExecution = (await client.environments.automations.tasks.start({ id: task.id })).taskExecution;
  const logUrl = await waitForTaskLogUrl(client, environmentId, taskExecution.id);
  return streamLogs(client, environmentId, logUrl);
}

async function waitForTaskLogUrl(
  client: Gitpod,
  environmentId: string,
  taskExecutionId: string,
): Promise<string> {
  async function getLogUrl(): Promise<string | undefined> {
    const execution = (
      await client.environments.automations.tasks.executions.retrieve({ id: taskExecutionId })
    ).taskExecution;
    if (!execution?.status) {
      return undefined;
    }
    return execution.status.logUrl;
  }

  return waitForLogUrl(client, environmentId, taskExecutionId, getLogUrl, 'RESOURCE_TYPE_TASK_EXECUTION');
}

async function waitForServiceLogUrl(
  client: Gitpod,
  environmentId: string,
  serviceId: string,
): Promise<string> {
  async function getLogUrl(): Promise<string | undefined> {
    const service = (await client.environments.automations.services.retrieve({ id: serviceId })).service;
    if (!service?.status) {
      return undefined;
    }
    if (service.status.phase !== 'SERVICE_PHASE_RUNNING') {
      return undefined;
    }
    return service.status.logUrl;
  }

  return waitForLogUrl(client, environmentId, serviceId, getLogUrl, 'RESOURCE_TYPE_SERVICE');
}

async function waitForLogUrl(
  client: Gitpod,
  environmentId: string,
  resourceId: string,
  getLogUrlFn: () => Promise<string | undefined>,
  resourceType: string,
): Promise<string> {
  let logUrl = await getLogUrlFn();
  if (logUrl) {
    return logUrl;
  }

  const controller = new AbortController();
  const eventStream = await client.events.watch({ environmentId }, { signal: controller.signal });
  try {
    logUrl = await getLogUrlFn();
    if (logUrl) {
      return logUrl;
    }

    for await (const event of eventStream) {
      if (event.resourceType === resourceType && event.resourceId === resourceId) {
        logUrl = await getLogUrlFn();
        if (logUrl) {
          return logUrl;
        }
      }
    }
  } finally {
    controller.abort();
  }

  throw new Error('Failed to get log URL');
}

async function* streamLogs(client: Gitpod, environmentId: string, logUrl: string): AsyncGenerator<string> {
  const logsAccessToken = (await client.environments.createLogsToken({ environmentId })).accessToken;
  const headers = { Authorization: `Bearer ${logsAccessToken}` };

  let retries = 3;
  while (retries > 0) {
    try {
      const response = await fetch(logUrl, { headers });
      if (response.status === 502) {
        retries--;
        if (retries === 0) {
          throw new Error('Failed to stream logs after 3 retries');
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
        continue;
      }

      if (!response.body) {
        throw new Error('No response body');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        let newlineIndex;
        while ((newlineIndex = buffer.indexOf('\n')) !== -1) {
          const line = buffer.slice(0, newlineIndex);
          buffer = buffer.slice(newlineIndex + 1);
          if (line) {
            yield line;
          }
        }
      }

      if (buffer) {
        yield buffer;
      }
      break;
    } catch (error) {
      if (retries > 0 && error instanceof Error && 'status' in error && error.status === 502) {
        retries--;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        continue;
      }
      throw error;
    }
  }
}
