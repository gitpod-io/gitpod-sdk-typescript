// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { PagePromise, SSOConfigurationsPage, type SSOConfigurationsPageParams } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';

export class SSOConfigurations extends APIResource {
  /**
   * CreateSSOConfiguration creates a new SSO configuration for the organization.
   */
  create(
    body: SSOConfigurationCreateParams,
    options?: RequestOptions,
  ): APIPromise<SSOConfigurationCreateResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/CreateSSOConfiguration', { body, ...options });
  }

  /**
   * GetSSOConfiguration returns an SSO configuration.
   */
  retrieve(
    body: SSOConfigurationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SSOConfigurationRetrieveResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/GetSSOConfiguration', { body, ...options });
  }

  /**
   * UpdateSSOConfiguration updates the SSO configuration for the organization.
   */
  update(body: SSOConfigurationUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.OrganizationService/UpdateSSOConfiguration', { body, ...options });
  }

  /**
   * ListSSOConfigurations lists all SSO configurations matching provided filters.
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
   * DeleteSSOConfiguration deletes an SSO configuration.
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
  id?: string;

  /**
   * claims are key/value pairs that defines a mapping of claims issued by the IdP.
   */
  claims?: Record<string, string>;

  /**
   * client_id is the client ID of the OIDC application set on the IdP
   */
  clientId?: string;

  emailDomain?: string;

  /**
   * issuer_url is the URL of the IdP issuer
   */
  issuerUrl?: string;

  organizationId?: string;

  /**
   * provider_type defines the type of the SSO configuration
   */
  providerType?: ProviderType;

  /**
   * state is the state of the SSO configuration
   */
  state?: SSOConfigurationState;
}

export type SSOConfigurationState =
  | 'SSO_CONFIGURATION_STATE_UNSPECIFIED'
  | 'SSO_CONFIGURATION_STATE_INACTIVE'
  | 'SSO_CONFIGURATION_STATE_ACTIVE';

export interface SSOConfigurationCreateResponse {
  /**
   * sso_configuration is the created SSO configuration
   */
  ssoConfiguration?: SSOConfiguration;
}

export interface SSOConfigurationRetrieveResponse {
  /**
   * sso_configuration is the SSO configuration identified by the ID
   */
  ssoConfiguration?: SSOConfiguration;
}

export type SSOConfigurationUpdateResponse = unknown;

export type SSOConfigurationDeleteResponse = unknown;

export interface SSOConfigurationCreateParams {
  /**
   * client_id is the client ID of the OIDC application set on the IdP
   */
  clientId?: string;

  /**
   * client_secret is the client secret of the OIDC application set on the IdP
   */
  clientSecret?: string;

  /**
   * email_domain is the domain that is allowed to sign in to the organization
   */
  emailDomain?: string;

  /**
   * issuer_url is the URL of the IdP issuer
   */
  issuerUrl?: string;

  organizationId?: string;
}

export interface SSOConfigurationRetrieveParams {
  /**
   * sso_configuration_id is the ID of the SSO configuration to get
   */
  ssoConfigurationId?: string;
}

export interface SSOConfigurationUpdateParams {
  /**
   * claims are key/value pairs that defines a mapping of claims issued by the IdP.
   */
  claims?: Record<string, string>;

  /**
   * client_id is the client ID of the SSO provider
   */
  clientId?: string | null;

  /**
   * client_secret is the client secret of the SSO provider
   */
  clientSecret?: string | null;

  emailDomain?: string | null;

  /**
   * issuer_url is the URL of the IdP issuer
   */
  issuerUrl?: string | null;

  /**
   * sso_configuration_id is the ID of the SSO configuration to update
   */
  ssoConfigurationId?: string;

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
  organizationId?: string;

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
  ssoConfigurationId?: string;
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
