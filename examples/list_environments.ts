// yarn tsn -T examples/list_environments.ts

import Gitpod from '@gitpod/sdk';

const client = new Gitpod({
  bearerToken: process.env['GITPOD_API_KEY'],
});

async function main() {
  console.log('Listing environments...\n');

  // Using for-await to automatically handle pagination
  for await (const environment of client.environments.list({
    pageSize: 100,
    token: '',
  })) {
    // Print key information about each environment
    console.log(`Environment ID: ${environment.id}`);
    console.log(`Status: ${environment?.status?.phase}`);
    console.log(`Created: ${environment?.metadata?.createdAt}`);

    if (environment?.metadata?.projectId) {
      console.log(`Project ID: ${environment?.metadata?.projectId}`);
    }

    // Print repository information if available
    const contextUrl = environment?.spec?.content?.initializer?.specs?.[0]?.contextUrl?.url;
    if (contextUrl) {
      console.log(`Repository: ${contextUrl}`);
    }

    // Print machine class
    if (environment?.spec?.machine?.class) {
      console.log(`Machine Class: ${environment?.spec?.machine?.class}`);
    }

    console.log('---\n');
  }
}

main().catch(console.error);
