// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import {
  PagePromise,
  ScimConfigurationsPage,
  type ScimConfigurationsPageParams,
} from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class ScimConfigurations extends APIResource {
  /**
   * Creates a new SCIM configuration for automated user provisioning.
   *
   * Use this method to:
   *
   * - Set up SCIM 2.0 provisioning from an identity provider
   * - Generate a bearer token for SCIM API authentication
   * - Link SCIM provisioning to an existing SSO configuration
   *
   * ### Examples
   *
   * - Create basic SCIM configuration:
   *
   *   Creates a SCIM configuration linked to an SSO provider.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   ssoConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const scimConfiguration =
   *   await client.organizations.scimConfigurations.create({
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *     ssoConfigurationId:
   *       'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   });
   * ```
   */
  create(
    body: ScimConfigurationCreateParams,
    options?: RequestOptions,
  ): APIPromise<ScimConfigurationCreateResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/CreateSCIMConfiguration', { body, ...options });
  }

  /**
   * Retrieves a specific SCIM configuration.
   *
   * Use this method to:
   *
   * - View SCIM configuration details
   * - Check if SCIM is enabled
   * - Verify SSO linkage
   *
   * ### Examples
   *
   * - Get SCIM configuration:
   *
   *   Retrieves details of a specific SCIM configuration.
   *
   *   ```yaml
   *   scimConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const scimConfiguration =
   *   await client.organizations.scimConfigurations.retrieve({
   *     scimConfigurationId:
   *       'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   });
   * ```
   */
  retrieve(
    body: ScimConfigurationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ScimConfigurationRetrieveResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/GetSCIMConfiguration', { body, ...options });
  }

  /**
   * Updates a SCIM configuration.
   *
   * Use this method to:
   *
   * - Enable or disable SCIM provisioning
   * - Link or unlink SSO configuration
   * - Update configuration name
   *
   * ### Examples
   *
   * - Disable SCIM:
   *
   *   Disables SCIM provisioning.
   *
   *   ```yaml
   *   scimConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   enabled: false
   *   ```
   *
   * - Link to SSO:
   *
   *   Links SCIM configuration to an SSO provider.
   *
   *   ```yaml
   *   scimConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ssoConfigurationId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *   ```
   *
   * @example
   * ```ts
   * const scimConfiguration =
   *   await client.organizations.scimConfigurations.update({
   *     scimConfigurationId:
   *       'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   });
   * ```
   */
  update(
    body: ScimConfigurationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ScimConfigurationUpdateResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/UpdateSCIMConfiguration', { body, ...options });
  }

  /**
   * Lists SCIM configurations for an organization.
   *
   * Use this method to:
   *
   * - View all SCIM configurations
   * - Monitor provisioning status
   * - Audit SCIM settings
   *
   * ### Examples
   *
   * - List SCIM configurations:
   *
   *   Shows all SCIM configurations for an organization.
   *
   *   ```yaml
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const scimConfiguration of client.organizations.scimConfigurations.list(
   *   { pagination: { pageSize: 20 } },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ScimConfigurationListParams,
    options?: RequestOptions,
  ): PagePromise<ScimConfigurationsScimConfigurationsPage, ScimConfiguration> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.OrganizationService/ListSCIMConfigurations',
      ScimConfigurationsPage<ScimConfiguration>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Removes a SCIM configuration from an organization.
   *
   * Use this method to:
   *
   * - Disable SCIM provisioning completely
   * - Remove unused configurations
   * - Clean up after migration
   *
   * ### Examples
   *
   * - Delete SCIM configuration:
   *
   *   Removes a specific SCIM configuration.
   *
   *   ```yaml
   *   scimConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const scimConfiguration =
   *   await client.organizations.scimConfigurations.delete({
   *     scimConfigurationId:
   *       'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   });
   * ```
   */
  delete(body: ScimConfigurationDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.OrganizationService/DeleteSCIMConfiguration', { body, ...options });
  }

  /**
   * Regenerates the bearer token for a SCIM configuration.
   *
   * Use this method to:
   *
   * - Rotate SCIM credentials
   * - Recover from token compromise
   * - Update IdP configuration
   *
   * ### Examples
   *
   * - Regenerate token:
   *
   *   Creates a new bearer token, invalidating the old one.
   *
   *   ```yaml
   *   scimConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const response =
   *   await client.organizations.scimConfigurations.regenerateToken(
   *     {
   *       scimConfigurationId:
   *         'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *     },
   *   );
   * ```
   */
  regenerateToken(
    body: ScimConfigurationRegenerateTokenParams,
    options?: RequestOptions,
  ): APIPromise<ScimConfigurationRegenerateTokenResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/RegenerateSCIMToken', { body, ...options });
  }
}

export type ScimConfigurationsScimConfigurationsPage = ScimConfigurationsPage<ScimConfiguration>;

/**
 * SCIMConfiguration represents a SCIM 2.0 provisioning configuration
 */
export interface ScimConfiguration {
  /**
   * id is the unique identifier of the SCIM configuration
   */
  id: string;

  /**
   * created_at is when the SCIM configuration was created
   */
  createdAt: string;

  /**
   * organization_id is the ID of the organization this SCIM configuration belongs to
   */
  organizationId: string;

  /**
   * updated_at is when the SCIM configuration was last updated
   */
  updatedAt: string;

  /**
   * enabled indicates if SCIM provisioning is active
   */
  enabled?: boolean;

  /**
   * name is a human-readable name for the SCIM configuration
   */
  name?: string;

  /**
   * sso_configuration_id is the linked SSO configuration (optional)
   */
  ssoConfigurationId?: string;
}

export interface ScimConfigurationCreateResponse {
  /**
   * token is the bearer token for SCIM API authentication. This is only returned
   * once during creation - store it securely.
   */
  token: string;

  /**
   * scim_configuration is the created SCIM configuration
   */
  scimConfiguration: ScimConfiguration;
}

export interface ScimConfigurationRetrieveResponse {
  /**
   * scim_configuration is the SCIM configuration identified by the ID
   */
  scimConfiguration: ScimConfiguration;
}

export interface ScimConfigurationUpdateResponse {
  /**
   * scim_configuration is the updated SCIM configuration
   */
  scimConfiguration: ScimConfiguration;
}

export type ScimConfigurationDeleteResponse = unknown;

export interface ScimConfigurationRegenerateTokenResponse {
  /**
   * token is the new bearer token for SCIM API authentication. This invalidates the
   * previous token - store it securely.
   */
  token: string;
}

export interface ScimConfigurationCreateParams {
  /**
   * organization_id is the ID of the organization to create the SCIM configuration
   * for
   */
  organizationId: string;

  /**
   * sso_configuration_id is the SSO configuration to link (required for user
   * provisioning)
   */
  ssoConfigurationId: string;

  /**
   * name is a human-readable name for the SCIM configuration
   */
  name?: string | null;
}

export interface ScimConfigurationRetrieveParams {
  /**
   * scim_configuration_id is the ID of the SCIM configuration to get
   */
  scimConfigurationId: string;
}

export interface ScimConfigurationUpdateParams {
  /**
   * scim_configuration_id is the ID of the SCIM configuration to update
   */
  scimConfigurationId: string;

  /**
   * enabled controls whether SCIM provisioning is active
   */
  enabled?: boolean | null;

  /**
   * name is a human-readable name for the SCIM configuration
   */
  name?: string | null;

  /**
   * sso_configuration_id is the SSO configuration to link
   */
  ssoConfigurationId?: string | null;
}

export interface ScimConfigurationListParams extends ScimConfigurationsPageParams {
  /**
   * Body param
   */
  pagination?: ScimConfigurationListParams.Pagination;
}

export namespace ScimConfigurationListParams {
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

export interface ScimConfigurationDeleteParams {
  /**
   * scim_configuration_id is the ID of the SCIM configuration to delete
   */
  scimConfigurationId: string;
}

export interface ScimConfigurationRegenerateTokenParams {
  /**
   * scim_configuration_id is the ID of the SCIM configuration to regenerate token
   * for
   */
  scimConfigurationId: string;
}

export declare namespace ScimConfigurations {
  export {
    type ScimConfiguration as ScimConfiguration,
    type ScimConfigurationCreateResponse as ScimConfigurationCreateResponse,
    type ScimConfigurationRetrieveResponse as ScimConfigurationRetrieveResponse,
    type ScimConfigurationUpdateResponse as ScimConfigurationUpdateResponse,
    type ScimConfigurationDeleteResponse as ScimConfigurationDeleteResponse,
    type ScimConfigurationRegenerateTokenResponse as ScimConfigurationRegenerateTokenResponse,
    type ScimConfigurationsScimConfigurationsPage as ScimConfigurationsScimConfigurationsPage,
    type ScimConfigurationCreateParams as ScimConfigurationCreateParams,
    type ScimConfigurationRetrieveParams as ScimConfigurationRetrieveParams,
    type ScimConfigurationUpdateParams as ScimConfigurationUpdateParams,
    type ScimConfigurationListParams as ScimConfigurationListParams,
    type ScimConfigurationDeleteParams as ScimConfigurationDeleteParams,
    type ScimConfigurationRegenerateTokenParams as ScimConfigurationRegenerateTokenParams,
  };
}
