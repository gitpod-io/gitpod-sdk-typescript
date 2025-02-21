import { Gitpod } from '../src/client';
import { findMostUsedEnvironmentClass, waitForEnvironmentRunning } from '../src/lib/environment';
import { runCommand } from '../src/lib/automation';
import { EnvironmentSpec } from '../src/resources/environments/environments';
import { verifyContextUrl } from './scm-auth';
import { withCleanup } from './cleanup';

/**
 * Examples:
 * - yarn ts-node examples/run-command.ts 'echo "Hello World!"'
 * - yarn ts-node examples/run-command.ts 'echo "Hello World!"' https://github.com/gitpod-io/empty
 */
async function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.log('Usage: yarn ts-node examples/run-command.ts "<COMMAND>" [CONTEXT_URL]');
    process.exit(1);
  }

  const command = args[0];
  const contextUrl = args[1];

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

    const spec: EnvironmentSpec = {
      desiredPhase: 'ENVIRONMENT_PHASE_RUNNING',
      machine: { class: envClass.id },
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
    await waitForEnvironmentRunning(client, environment.id);

    console.log('Running command');
    const lines = await runCommand(client, environment.id, command!);
    for await (const line of lines) {
      console.log(line);
    }
  });
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
