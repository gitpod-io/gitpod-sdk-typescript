// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SSOConfigurationsPage, type SSOConfigurationsPageParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class SSOConfigurations extends APIResource {
  /**
   * Creates or updates SSO configuration for organizational authentication.
   *
   * Use this method to:
   *
   * - Configure OIDC-based SSO providers
   * - Set up built-in providers (Google, GitHub, etc.)
   * - Define custom identity providers
   * - Manage authentication policies
   *
   * ### Examples
   *
   * - Configure built-in Google SSO:
   *
   *   Sets up SSO using Google Workspace.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   clientId: "012345678-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com"
   *   clientSecret: "GOCSPX-abcdefghijklmnopqrstuvwxyz123456"
   *   issuerUrl: "https://accounts.google.com"
   *   emailDomain: "acme-corp.com"
   *   ```
   *
   * - Configure custom OIDC provider:
   *
   *   Sets up SSO with a custom identity provider.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   clientId: "acme-corp-gitpod"
   *   clientSecret: "secret-token-value"
   *   issuerUrl: "https://sso.acme-corp.com"
   *   emailDomain: "acme-corp.com"
   *   ```
   *
   * @example
   * ```ts
   * const ssoConfiguration =
   *   await client.organizations.ssoConfigurations.create({
   *     clientId:
   *       '012345678-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com',
   *     clientSecret: 'GOCSPX-abcdefghijklmnopqrstuvwxyz123456',
   *     issuerUrl: 'https://accounts.google.com',
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *     emailDomain: 'acme-corp.com',
   *   });
   * ```
   */
  create(
    body: SSOConfigurationCreateParams,
    options?: RequestOptions,
  ): APIPromise<SSOConfigurationCreateResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/CreateSSOConfiguration', { body, ...options });
  }

  /**
   * Retrieves a specific SSO configuration.
   *
   * Use this method to:
   *
   * - View SSO provider details
   * - Check configuration status
   * - Verify SSO settings
   *
   * ### Examples
   *
   * - Get SSO configuration:
   *
   *   Retrieves details of a specific SSO configuration.
   *
   *   ```yaml
   *   ssoConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const ssoConfiguration =
   *   await client.organizations.ssoConfigurations.retrieve({
   *     ssoConfigurationId:
   *       'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   });
   * ```
   */
  retrieve(
    body: SSOConfigurationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SSOConfigurationRetrieveResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/GetSSOConfiguration', { body, ...options });
  }

  /**
   * Updates SSO provider settings and authentication rules.
   *
   * Use this method to:
   *
   * - Rotate client credentials
   * - Update provider endpoints
   * - Modify claim mappings
   * - Change authentication policies
   * - Toggle SSO enforcement
   *
   * ### Examples
   *
   * - Update credentials:
   *
   *   Rotates client ID and secret.
   *
   *   ```yaml
   *   ssoConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   clientId: "new-client-id"
   *   clientSecret: "new-client-secret"
   *   ```
   *
   * - Update provider status:
   *
   *   Activates or deactivates SSO provider.
   *
   *   ```yaml
   *   ssoConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   state: SSO_CONFIGURATION_STATE_ACTIVE
   *   ```
   *
   * @example
   * ```ts
   * const ssoConfiguration =
   *   await client.organizations.ssoConfigurations.update({
   *     ssoConfigurationId:
   *       'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *     clientId: 'new-client-id',
   *     clientSecret: 'new-client-secret',
   *   });
   * ```
   */
  update(body: SSOConfigurationUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.OrganizationService/UpdateSSOConfiguration', { body, ...options });
  }

  /**
   * Lists and filters SSO configurations for an organization.
   *
   * Use this method to:
   *
   * - View all SSO providers
   * - Monitor authentication status
   * - Audit security settings
   * - Manage provider configurations
   *
   * ### Examples
   *
   * - List active configurations:
   *
   *   Shows all active SSO providers.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * - List by provider type:
   *
   *   Shows custom SSO configurations.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   pagination:
   *     pageSize: 20
   *     token: "next-page-token-from-previous-response"
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ssoConfiguration of client.organizations.ssoConfigurations.list(
   *   {
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *     pagination: { pageSize: 20 },
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SSOConfigurationListParams,
    options?: RequestOptions,
  ): PagePromise<SSOConfigurationsSSOConfigurationsPage, SSOConfiguration> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.OrganizationService/ListSSOConfigurations',
      SSOConfigurationsPage<SSOConfiguration>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Removes an SSO configuration from an organization.
   *
   * Use this method to:
   *
   * - Disable SSO authentication
   * - Remove outdated providers
   * - Clean up unused configurations
   *
   * ### Examples
   *
   * - Delete SSO configuration:
   *
   *   Removes a specific SSO configuration.
   *
   *   ```yaml
   *   ssoConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const ssoConfiguration =
   *   await client.organizations.ssoConfigurations.delete({
   *     ssoConfigurationId:
   *       'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   });
   * ```
   */
  delete(body: SSOConfigurationDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.OrganizationService/DeleteSSOConfiguration', { body, ...options });
  }
}

export type SSOConfigurationsSSOConfigurationsPage = SSOConfigurationsPage<SSOConfiguration>;

export type ProviderType = 'PROVIDER_TYPE_UNSPECIFIED' | 'PROVIDER_TYPE_BUILTIN' | 'PROVIDER_TYPE_CUSTOM';

export interface SSOConfiguration {
  /**
   * id is the unique identifier of the SSO configuration
   */
  id: string;

  /**
   * issuer_url is the URL of the IdP issuer
   */
  issuerUrl: string;

  organizationId: string;

  /**
   * provider_type defines the type of the SSO configuration
   */
  providerType: ProviderType;

  /**
   * state is the state of the SSO configuration
   */
  state: SSOConfigurationState;

  /**
   * claims are key/value pairs that defines a mapping of claims issued by the IdP.
   */
  claims?: { [key: string]: string };

  /**
   * client_id is the client ID of the OIDC application set on the IdP
   */
  clientId?: string;

  displayName?: string;

  emailDomain?: string;

  emailDomains?: Array<string>;
}

export type SSOConfigurationState =
  | 'SSO_CONFIGURATION_STATE_UNSPECIFIED'
  | 'SSO_CONFIGURATION_STATE_INACTIVE'
  | 'SSO_CONFIGURATION_STATE_ACTIVE';

export interface SSOConfigurationCreateResponse {
  /**
   * sso_configuration is the created SSO configuration
   */
  ssoConfiguration: SSOConfiguration;
}

export interface SSOConfigurationRetrieveResponse {
  /**
   * sso_configuration is the SSO configuration identified by the ID
   */
  ssoConfiguration: SSOConfiguration;
}

export type SSOConfigurationUpdateResponse = unknown;

export type SSOConfigurationDeleteResponse = unknown;

export interface SSOConfigurationCreateParams {
  /**
   * client_id is the client ID of the OIDC application set on the IdP
   */
  clientId: string;

  /**
   * client_secret is the client secret of the OIDC application set on the IdP
   */
  clientSecret: string;

  /**
   * issuer_url is the URL of the IdP issuer
   */
  issuerUrl: string;

  organizationId: string;

  displayName?: string;

  /**
   * email_domain is the domain that is allowed to sign in to the organization
   */
  emailDomain?: string | null;

  emailDomains?: Array<string>;
}

export interface SSOConfigurationRetrieveParams {
  /**
   * sso_configuration_id is the ID of the SSO configuration to get
   */
  ssoConfigurationId: string;
}

export interface SSOConfigurationUpdateParams {
  /**
   * sso_configuration_id is the ID of the SSO configuration to update
   */
  ssoConfigurationId: string;

  /**
   * claims are key/value pairs that defines a mapping of claims issued by the IdP.
   */
  claims?: { [key: string]: string };

  /**
   * client_id is the client ID of the SSO provider
   */
  clientId?: string | null;

  /**
   * client_secret is the client secret of the SSO provider
   */
  clientSecret?: string | null;

  displayName?: string | null;

  emailDomain?: string | null;

  emailDomains?: Array<string>;

  /**
   * issuer_url is the URL of the IdP issuer
   */
  issuerUrl?: string | null;

  /**
   * state is the state of the SSO configuration
   */
  state?: SSOConfigurationState | null;
}

export interface SSOConfigurationListParams extends SSOConfigurationsPageParams {
  /**
   * Body param: organization_id is the ID of the organization to list SSO
   * configurations for.
   */
  organizationId: string;

  /**
   * Body param:
   */
  pagination?: SSOConfigurationListParams.Pagination;
}

export namespace SSOConfigurationListParams {
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

export interface SSOConfigurationDeleteParams {
  ssoConfigurationId: string;
}

export declare namespace SSOConfigurations {
  export {
    type ProviderType as ProviderType,
    type SSOConfiguration as SSOConfiguration,
    type SSOConfigurationState as SSOConfigurationState,
    type SSOConfigurationCreateResponse as SSOConfigurationCreateResponse,
    type SSOConfigurationRetrieveResponse as SSOConfigurationRetrieveResponse,
    type SSOConfigurationUpdateResponse as SSOConfigurationUpdateResponse,
    type SSOConfigurationDeleteResponse as SSOConfigurationDeleteResponse,
    type SSOConfigurationsSSOConfigurationsPage as SSOConfigurationsSSOConfigurationsPage,
    type SSOConfigurationCreateParams as SSOConfigurationCreateParams,
    type SSOConfigurationRetrieveParams as SSOConfigurationRetrieveParams,
    type SSOConfigurationUpdateParams as SSOConfigurationUpdateParams,
    type SSOConfigurationListParams as SSOConfigurationListParams,
    type SSOConfigurationDeleteParams as SSOConfigurationDeleteParams,
  };
}
