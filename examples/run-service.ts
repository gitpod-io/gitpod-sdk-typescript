import { Gitpod } from '../src/client';
import { findMostUsedEnvironmentClass, EnvironmentState } from '../src/lib/environment';
import { runService } from '../src/lib/automation';
import { EnvironmentSpec } from '../src/resources/environments/environments';
import { verifyContextUrl } from './scm-auth';
import { withCleanup } from './cleanup';

/**
 * Examples:
 * - yarn ts-node examples/run-service.ts
 * - yarn ts-node examples/run-service.ts https://github.com/gitpod-io/empty
 */
async function main() {
  const contextUrl = process.argv[2];

  await withCleanup(async (disposables) => {
    const client = new Gitpod({
      logLevel: 'info',
    });

    const envClass = await findMostUsedEnvironmentClass(client);
    if (!envClass) {
      console.error('Error: No environment class found. Please create one first.');
      process.exit(1);
    }
    console.log(`Found environment class: ${envClass.displayName} (${envClass.description})`);

    const port = 8888;
    const spec: EnvironmentSpec = {
      desiredPhase: 'ENVIRONMENT_PHASE_RUNNING',
      machine: { class: envClass.id },
      ports: [
        {
          name: 'Lama Service',
          port,
          admission: 'ADMISSION_LEVEL_EVERYONE',
        },
      ],
    };

    if (contextUrl) {
      await verifyContextUrl(client, contextUrl, envClass.runnerId);
      spec.content = {
        initializer: {
          specs: [
            {
              contextUrl: {
                url: contextUrl,
              },
            },
          ],
        },
      };
    }

    console.log('Creating environment');
    const { environment } = await client.environments.create({ spec });
    disposables.add(() => client.environments.delete({ environmentId: environment.id }));

    console.log('Waiting for environment to be ready');
    const env = new EnvironmentState(client, environment.id);
    disposables.add(() => env.close());
    await env.waitUntilRunning();

    console.log('Starting Lama Service');
    const lines = await runService(
      client,
      environment.id,
      {
        name: 'Lama Service',
        description: 'Lama Service',
        reference: 'lama-service',
      },
      {
        commands: {
          start: `curl lama.sh | LAMA_PORT=${port} sh`,
          ready: `curl -s http://localhost:${port}`,
        },
      },
    );

    const portUrl = await env.waitForPortUrl(port);
    console.log(`Lama Service is running at ${portUrl}`);

    for await (const line of lines) {
      console.log(line);
    }
  });
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
