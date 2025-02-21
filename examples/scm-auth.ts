import { APIError } from '../src';
import { Gitpod } from '../src/client';
import { setScmPat } from '../src/lib/runner';
import { RunnerCheckAuthenticationForHostResponse } from '../src/resources/runners/runners';

/**
 * Verify and handle authentication for a repository context URL.
 *
 * This function checks if the user has access to the specified repository and manages
 * the authentication process if needed. Git access to the repository is required for
 * environments to function properly.
 *
 * As an alternative, you can authenticate once via the Gitpod dashboard:
 * 1. Start a new environment
 * 2. Complete the browser-based authentication flow
 *
 * See https://www.gitpod.io/docs/flex/source-control for more details.
 *
 * @param client The Gitpod client instance
 * @param contextUrl The context URL to verify
 * @param runnerId The ID of the runner to verify access for
 */
export async function verifyContextUrl(client: Gitpod, contextUrl: string, runnerId: string): Promise<void> {
  const host = new URL(contextUrl).hostname;
  if (!host) {
    console.error('Error: Invalid context URL');
    process.exit(1);
  }

  const user = (await client.users.getAuthenticatedUser({})).user;

  // Main authentication loop
  let firstAttempt = true;
  while (true) {
    try {
      // Try to access the context URL
      await client.runners.parseContextURL({ contextUrl, runnerId });
      console.log('\n✓ Authentication verified successfully');
      return;
    } catch (error) {
      if (!(error instanceof APIError) || error.code !== 'failed_precondition') {
        throw error;
      }
    }

    // Show authentication required message only on first attempt
    if (firstAttempt) {
      console.log(`\nAuthentication required for ${host}`);
      firstAttempt = false;
    }

    // Get authentication options for the host
    const authResp = await client.runners.checkAuthenticationForHost({
      host,
      runnerId,
    });

    // Handle re-authentication case
    if (authResp.authenticated && !firstAttempt) {
      console.log('\nIt looks like you are already authenticated.');
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      const answer = await new Promise<string>((resolve) => {
        readline.question('Would you like to re-authenticate? (y/n): ', (answer: string) => {
          readline.close();
          resolve(answer.toLowerCase().trim());
        });
      });

      if (answer !== 'y') {
        console.log('\nAuthentication cancelled');
        process.exit(1);
      } else {
        console.log('\nRetrying authentication...');
        continue;
      }
    }

    const authMethods: Array<[string, string]> = [];
    if (authResp.supportsOauth2) {
      authMethods.push(['OAuth', 'Recommended']);
    }
    if (authResp.supportsPat) {
      authMethods.push(['Personal Access Token (PAT)', '']);
    }

    if (!authMethods.length) {
      console.error(`\nError: No authentication method available for ${host}`);
      process.exit(1);
    }

    // Present authentication options
    let methodIndex = 0;
    if (authMethods.length > 1) {
      console.log('\nAvailable authentication methods:');
      authMethods.forEach((method, index) => {
        const [methodName, note] = method;
        const noteText = note ? ` (${note})` : '';
        console.log(`${index + 1}. ${methodName}${noteText}`);
      });

      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      const choice = await new Promise<string>((resolve) => {
        readline.question(`\nChoose authentication method (1-${authMethods.length}): `, (answer: string) => {
          readline.close();
          resolve(answer.trim());
        });
      });

      try {
        methodIndex = parseInt(choice) - 1;
        if (!(methodIndex >= 0 && methodIndex < authMethods.length)) {
          throw new Error();
        }
      } catch {
        methodIndex = 0; // Default to OAuth if invalid input
      }
    }

    // Handle chosen authentication method
    const method = authMethods[methodIndex];
    if (!method) {
      throw new Error('Invalid authentication method');
    }
    const [chosenMethod] = method;

    if (chosenMethod === 'Personal Access Token (PAT)') {
      if (!authResp.supportsPat) {
        throw new Error('PAT authentication not supported');
      }
      await handlePatAuth(client, user.id, runnerId, host, authResp.supportsPat);
    } else {
      if (!authResp.supportsOauth2) {
        throw new Error('OAuth authentication not supported');
      }
      console.log('\nPlease visit the following URL to authenticate:');
      console.log(authResp.supportsOauth2.authUrl);
      if (authResp.supportsOauth2.docsUrl) {
        console.log(`\nFor detailed instructions, visit: ${authResp.supportsOauth2.docsUrl}`);
      }
      console.log('\nWaiting for authentication to complete...');

      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      await new Promise<void>((resolve) => {
        readline.question('Press Enter after completing authentication in your browser...', () => {
          readline.close();
          resolve();
        });
      });
    }
  }
}

/**
 * Handle Personal Access Token (PAT) authentication for a source control host.
 * @param client The Gitpod client instance
 * @param userId ID of the user to set the token for
 * @param runnerId ID of the runner to associate the token with
 * @param host Source control host (e.g. github.com, gitlab.com)
 * @param supportsPat PAT support information from the host
 */
async function handlePatAuth(
  client: Gitpod,
  userId: string,
  runnerId: string,
  host: string,
  supportsPat: RunnerCheckAuthenticationForHostResponse.SupportsPat,
): Promise<void> {
  console.log('\nTo create a Personal Access Token:');

  if (supportsPat.createUrl) {
    console.log(`1. Visit: ${supportsPat.createUrl}`);
  } else {
    console.log(`1. Go to ${host} > Settings > Developer Settings`);
  }

  if (supportsPat.requiredScopes && supportsPat.requiredScopes.length > 0) {
    const requiredScopes = supportsPat.requiredScopes.join(', ');
    console.log(`2. Create a new token with the following scopes: ${requiredScopes}`);
  } else {
    console.log('2. Create a new token');
  }

  if (supportsPat.example) {
    console.log(`3. Copy the generated token (example: ${supportsPat.example})`);
  } else {
    console.log('3. Copy the generated token');
  }

  if (supportsPat.docsUrl) {
    console.log(`\nFor detailed instructions, visit: ${supportsPat.docsUrl}`);
  }

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const pat = await new Promise<string>((resolve) => {
    readline.question('\nEnter your Personal Access Token: ', (answer: string) => {
      readline.close();
      resolve(answer.trim());
    });
  });

  if (!pat) {
    return;
  }

  await setScmPat(client, userId, runnerId, host, pat);
}
