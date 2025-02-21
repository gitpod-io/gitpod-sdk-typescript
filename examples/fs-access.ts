import { Gitpod } from '../src/client';
import { findMostUsedEnvironmentClass, EnvironmentState } from '../src/lib/environment';
import { EnvironmentSpec } from '../src/resources/environments/environments';
import { verifyContextUrl } from './scm-auth';
import { generateKeyPairSync } from 'crypto';
import { Client, SFTPWrapper } from 'ssh2';
import { withCleanup } from './cleanup';
import * as sshpk from 'sshpk';

/**
 * Examples:
 * - yarn ts-node examples/fs-access.ts
 * - yarn ts-node examples/fs-access.ts https://github.com/gitpod-io/empty
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

    console.log('Generating SSH key pair');
    const { publicKey: pemPublicKey, privateKey: pemPrivateKey } = generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
      },
    });

    // Convert PEM keys to OpenSSH format
    const keyObject = sshpk.parseKey(pemPublicKey, 'pem');
    const publicKey = keyObject.toString('ssh');

    const privateKeyObject = sshpk.parsePrivateKey(pemPrivateKey, 'pem');
    const privateKey = privateKeyObject.toString('ssh');

    console.log('Creating environment with SSH access');
    const keyId = 'fs-access-example';
    const spec: EnvironmentSpec = {
      desiredPhase: 'ENVIRONMENT_PHASE_RUNNING',
      machine: { class: envClass.id },
      sshPublicKeys: [
        {
          id: keyId,
          value: publicKey,
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

    const env = new EnvironmentState(client, environment.id);
    disposables.add(() => env.close());

    console.log('Waiting for environment to be running');
    await env.waitUntilRunning();

    console.log('Waiting for SSH key to be applied');
    await env.waitForSshKeyApplied(keyId, publicKey);

    console.log('Waiting for SSH URL');
    const sshUrl = await env.waitForSshUrl();

    console.log(`Setting up SSH connection to ${sshUrl}`);
    // Parse ssh://username@host:port format
    const urlParts = sshUrl.split('://')[1];
    if (!urlParts) {
      throw new Error('Invalid SSH URL format');
    }

    const [username, rest] = urlParts.split('@');
    if (!username || !rest) {
      throw new Error('Invalid SSH URL format: missing username or host');
    }

    const [host, portStr] = rest.split(':');
    if (!host || !portStr) {
      throw new Error('Invalid SSH URL format: missing host or port');
    }

    const port = parseInt(portStr, 10);
    if (isNaN(port)) {
      throw new Error('Invalid SSH URL format: invalid port number');
    }

    const ssh = new Client();
    disposables.add(() => ssh.end());

    await new Promise<void>((resolve, reject) => {
      ssh.on('ready', resolve);
      ssh.on('error', reject);

      ssh.connect({
        host,
        port,
        username,
        privateKey,
      });
    });

    console.log('Creating SFTP client');
    const sftp = await new Promise<SFTPWrapper>((resolve, reject) => {
      ssh.sftp((err, sftp) => {
        if (err) reject(err);
        else resolve(sftp);
      });
    });
    disposables.add(() => sftp.end());

    console.log('Writing test file');
    const testContent = 'Hello from Gitpod TypeScript SDK!';
    await new Promise<void>((resolve, reject) => {
      sftp.writeFile('test.txt', Buffer.from(testContent), (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    const content = await new Promise<string>((resolve, reject) => {
      sftp.readFile('test.txt', (err, data) => {
        if (err) reject(err);
        else resolve(data.toString());
      });
    });
    console.log(`File content: ${content}`);
  });
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
