import { Gitpod } from '../client';

/**
 * Set a Personal Access Token (PAT) for source control authentication.
 *
 * This will delete any existing tokens for the given host and create a new one.
 *
 * @param client The Gitpod client instance
 * @param userId ID of the user to set the token for
 * @param runnerId ID of the runner to associate the token with
 * @param host Source control host (e.g. github.com, gitlab.com)
 * @param pat The Personal Access Token string
 */
export async function setScmPat(
  client: Gitpod,
  userId: string,
  runnerId: string,
  host: string,
  pat: string,
): Promise<void> {
  const tokensResponse = await client.runners.configurations.hostAuthenticationTokens.list({
    filter: {
      userId,
      runnerId,
    },
  });

  if (tokensResponse?.tokens) {
    for (const token of tokensResponse.tokens) {
      if (token.host === host) {
        await client.runners.configurations.hostAuthenticationTokens.delete({
          id: token.id,
        });
      }
    }
  }

  await client.runners.configurations.hostAuthenticationTokens.create({
    token: pat,
    host,
    runnerId,
    userId,
    source: 'HOST_AUTHENTICATION_TOKEN_SOURCE_PAT',
  });
}
