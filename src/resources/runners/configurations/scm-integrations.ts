// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { IntegrationsPage, type IntegrationsPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';

export class ScmIntegrations extends APIResource {
  /**
   * Creates a new SCM integration for a runner.
   *
   * Use this method to:
   *
   * - Configure source control access
   * - Set up repository integrations
   * - Enable code synchronization
   *
   * ### Examples
   *
   * - Create GitHub integration:
   *
   *   Sets up GitHub SCM integration.
   *
   *   ```yaml
   *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   scmId: "github"
   *   host: "github.com"
   *   oauthClientId: "client_id"
   *   oauthPlaintextClientSecret: "client_secret"
   *   ```
   */
  create(
    body: ScmIntegrationCreateParams,
    options?: RequestOptions,
  ): APIPromise<ScmIntegrationCreateResponse> {
    return this._client.post('/gitpod.v1.RunnerConfigurationService/CreateSCMIntegration', {
      body,
      ...options,
    });
  }

  /**
   * Gets details about a specific SCM integration.
   *
   * Use this method to:
   *
   * - View integration settings
   * - Check integration status
   * - Verify configuration
   *
   * ### Examples
   *
   * - Get integration details:
   *
   *   Retrieves information about a specific integration.
   *
   *   ```yaml
   *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   */
  retrieve(
    body: ScmIntegrationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ScmIntegrationRetrieveResponse> {
    return this._client.post('/gitpod.v1.RunnerConfigurationService/GetSCMIntegration', { body, ...options });
  }

  /**
   * Updates an existing SCM integration.
   *
   * Use this method to:
   *
   * - Modify integration settings
   * - Update credentials
   * - Change configuration
   *
   * ### Examples
   *
   * - Update integration:
   *
   *   Updates OAuth credentials.
   *
   *   ```yaml
   *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   oauthClientId: "new_client_id"
   *   oauthPlaintextClientSecret: "new_client_secret"
   *   ```
   */
  update(body: ScmIntegrationUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.RunnerConfigurationService/UpdateSCMIntegration', {
      body,
      ...options,
    });
  }

  /**
   * Lists SCM integrations for a runner.
   *
   * Use this method to:
   *
   * - View all integrations
   * - Monitor integration status
   * - Check available SCMs
   *
   * ### Examples
   *
   * - List integrations:
   *
   *   Shows all SCM integrations.
   *
   *   ```yaml
   *   filter:
   *     runnerIds: ["d2c94c27-3b76-4a42-b88c-95a85e392c68"]
   *   pagination:
   *     pageSize: 20
   *   ```
   */
  list(
    params: ScmIntegrationListParams,
    options?: RequestOptions,
  ): PagePromise<ScmIntegrationsIntegrationsPage, ScmIntegration> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.RunnerConfigurationService/ListSCMIntegrations',
      IntegrationsPage<ScmIntegration>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Deletes an SCM integration.
   *
   * Use this method to:
   *
   * - Remove unused integrations
   * - Clean up configurations
   * - Revoke SCM access
   *
   * ### Examples
   *
   * - Delete integration:
   *
   *   Removes an SCM integration.
   *
   *   ```yaml
   *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   */
  delete(body: ScmIntegrationDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.RunnerConfigurationService/DeleteSCMIntegration', {
      body,
      ...options,
    });
  }
}

export type ScmIntegrationsIntegrationsPage = IntegrationsPage<ScmIntegration>;

export interface ScmIntegration {
  /**
   * id is the unique identifier of the SCM integration
   */
  id?: string;

  host?: string;

  oauth?: ScmIntegrationOAuthConfig | null;

  pat?: boolean;

  runnerId?: string;

  /**
   * scm_id references the scm_id in the runner's configuration schema that this
   * integration is for
   */
  scmId?: string;
}

export interface ScmIntegrationOAuthConfig {
  /**
   * client_id is the OAuth app's client ID in clear text.
   */
  clientId?: string;

  /**
   * encrypted_client_secret is the OAuth app's secret encrypted with the runner's
   * public key.
   */
  encryptedClientSecret?: string;
}

export interface ScmIntegrationCreateResponse {
  /**
   * id is a uniquely generated identifier for the SCM integration
   */
  id?: string;
}

export interface ScmIntegrationRetrieveResponse {
  integration?: ScmIntegration;
}

export type ScmIntegrationUpdateResponse = unknown;

export type ScmIntegrationDeleteResponse = unknown;

export interface ScmIntegrationCreateParams {
  host?: string;

  /**
   * oauth_client_id is the OAuth app's client ID, if OAuth is configured. If
   * configured, oauth_plaintext_client_secret must also be set.
   */
  oauthClientId?: string | null;

  /**
   * oauth_plaintext_client_secret is the OAuth app's client secret in clear text.
   * This will first be encrypted with the runner's public key before being stored.
   */
  oauthPlaintextClientSecret?: string | null;

  pat?: boolean;

  runnerId?: string;

  /**
   * scm_id references the scm_id in the runner's configuration schema that this
   * integration is for
   */
  scmId?: string;
}

export interface ScmIntegrationRetrieveParams {
  id?: string;
}

export interface ScmIntegrationUpdateParams {
  id?: string;

  /**
   * oauth_client_id can be set to update the OAuth app's client ID. If an empty
   * string is set, the OAuth configuration will be removed (regardless of whether a
   * client secret is set), and any existing Host Authentication Tokens for the SCM
   * integration's runner and host that were created using the OAuth app will be
   * deleted. This might lead to users being unable to access their repositories
   * until they re-authenticate.
   */
  oauthClientId?: string | null;

  /**
   * oauth_plaintext_client_secret can be set to update the OAuth app's client
   * secret. The cleartext secret will be encrypted with the runner's public key
   * before being stored.
   */
  oauthPlaintextClientSecret?: string | null;

  /**
   * pat can be set to enable or disable Personal Access Tokens support. When
   * disabling PATs, any existing Host Authentication Tokens for the SCM
   * integration's runner and host that were created using a PAT will be deleted.
   * This might lead to users being unable to access their repositories until they
   * re-authenticate.
   */
  pat?: boolean | null;
}

export interface ScmIntegrationListParams extends IntegrationsPageParams {
  /**
   * Body param:
   */
  filter?: ScmIntegrationListParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing scm
   * integrations
   */
  pagination?: ScmIntegrationListParams.Pagination;
}

export namespace ScmIntegrationListParams {
  export interface Filter {
    /**
     * runner_ids filters the response to only SCM integrations of these Runner IDs
     */
    runnerIds?: Array<string>;
  }

  /**
   * pagination contains the pagination options for listing scm integrations
   */
  export interface Pagination {
    /**
     * Token for the next set of results that was returned as next_token of a
     * PaginationResponse
     */
    token?: string;

    /**
     * Page size is the maximum number of results to retrieve per page. Defaults to 25.
     * Maximum 100.
     */
    pageSize?: number;
  }
}

export interface ScmIntegrationDeleteParams {
  id?: string;
}

export declare namespace ScmIntegrations {
  export {
    type ScmIntegration as ScmIntegration,
    type ScmIntegrationOAuthConfig as ScmIntegrationOAuthConfig,
    type ScmIntegrationCreateResponse as ScmIntegrationCreateResponse,
    type ScmIntegrationRetrieveResponse as ScmIntegrationRetrieveResponse,
    type ScmIntegrationUpdateResponse as ScmIntegrationUpdateResponse,
    type ScmIntegrationDeleteResponse as ScmIntegrationDeleteResponse,
    type ScmIntegrationsIntegrationsPage as ScmIntegrationsIntegrationsPage,
    type ScmIntegrationCreateParams as ScmIntegrationCreateParams,
    type ScmIntegrationRetrieveParams as ScmIntegrationRetrieveParams,
    type ScmIntegrationUpdateParams as ScmIntegrationUpdateParams,
    type ScmIntegrationListParams as ScmIntegrationListParams,
    type ScmIntegrationDeleteParams as ScmIntegrationDeleteParams,
  };
}
