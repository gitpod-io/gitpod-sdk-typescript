// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class CustomDomains extends APIResource {
  /**
   * Creates a custom domain configuration for an organization.
   *
   * Use this method to configure custom domains for organization workspaces
   *
   * ### Examples
   *
   * - Configure AWS custom domain:
   *
   *   Sets up a custom domain with AWS provider.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   domainName: "workspaces.acme-corp.com"
   *   provider: CUSTOM_DOMAIN_PROVIDER_AWS
   *   awsAccountId: "123456789012"
   *   ```
   *
   * @example
   * ```ts
   * const customDomain =
   *   await client.organizations.customDomains.create({
   *     domainName: 'workspaces.acme-corp.com',
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *     awsAccountId: '123456789012',
   *     provider: 'CUSTOM_DOMAIN_PROVIDER_AWS',
   *   });
   * ```
   */
  create(body: CustomDomainCreateParams, options?: RequestOptions): APIPromise<CustomDomainCreateResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/CreateCustomDomain', { body, ...options });
  }

  /**
   * Retrieves a specific custom domain configuration.
   *
   * Use this method to view custom domain details
   *
   * ### Examples
   *
   * - Get custom domain configuration:
   *
   *   Retrieves details of a specific custom domain.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   ```
   *
   * @example
   * ```ts
   * const customDomain =
   *   await client.organizations.customDomains.retrieve({
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   });
   * ```
   */
  retrieve(
    body: CustomDomainRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CustomDomainRetrieveResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/GetCustomDomain', { body, ...options });
  }

  /**
   * Updates custom domain configuration settings.
   *
   * Use this method to:
   *
   * - Update cloud provider settings
   * - Change AWS account ID
   * - Modify domain configuration
   *
   * ### Examples
   *
   * - Update AWS account ID:
   *
   *   Changes the AWS account ID for the custom domain.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   domainName: "workspaces.acme-corp.com"
   *   awsAccountId: "987654321098"
   *   ```
   *
   * @example
   * ```ts
   * const customDomain =
   *   await client.organizations.customDomains.update({
   *     domainName: 'workspaces.acme-corp.com',
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *     awsAccountId: '987654321098',
   *   });
   * ```
   */
  update(body: CustomDomainUpdateParams, options?: RequestOptions): APIPromise<CustomDomainUpdateResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/UpdateCustomDomain', { body, ...options });
  }

  /**
   * Removes a custom domain configuration from an organization.
   *
   * Use this method to:
   *
   * - Disable custom domain functionality
   * - Remove outdated configurations
   * - Clean up unused domains
   *
   * ### Examples
   *
   * - Delete custom domain configuration:
   *
   *   Removes a specific custom domain configuration.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   ```
   *
   * @example
   * ```ts
   * const customDomain =
   *   await client.organizations.customDomains.delete({
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   });
   * ```
   */
  delete(body: CustomDomainDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.OrganizationService/DeleteCustomDomain', { body, ...options });
  }
}

/**
 * CustomDomain represents a custom domain configuration for an organization
 */
export interface CustomDomain {
  /**
   * id is the unique identifier of the custom domain
   */
  id: string;

  /**
   * created_at is when the custom domain was created
   */
  createdAt: string;

  /**
   * domain_name is the custom domain name
   */
  domainName: string;

  /**
   * organization_id is the ID of the organization this custom domain belongs to
   */
  organizationId: string;

  /**
   * updated_at is when the custom domain was last updated
   */
  updatedAt: string;

  /**
   * @deprecated aws_account_id is the AWS account ID (deprecated: use
   * cloud_account_id)
   */
  awsAccountId?: string;

  /**
   * cloud_account_id is the unified cloud account identifier (AWS Account ID or GCP
   * Project ID)
   */
  cloudAccountId?: string;

  /**
   * provider is the cloud provider for this custom domain
   */
  provider?: CustomDomainProvider;
}

/**
 * CustomDomainProvider represents the cloud provider for custom domain
 * configuration
 */
export type CustomDomainProvider =
  | 'CUSTOM_DOMAIN_PROVIDER_UNSPECIFIED'
  | 'CUSTOM_DOMAIN_PROVIDER_AWS'
  | 'CUSTOM_DOMAIN_PROVIDER_GCP';

/**
 * CreateCustomDomainResponse is the response message for creating a custom domain
 */
export interface CustomDomainCreateResponse {
  /**
   * custom_domain is the created custom domain
   */
  customDomain: CustomDomain;
}

export interface CustomDomainRetrieveResponse {
  /**
   * CustomDomain represents a custom domain configuration for an organization
   */
  customDomain: CustomDomain;
}

/**
 * UpdateCustomDomainResponse is the response message for updating a custom domain
 */
export interface CustomDomainUpdateResponse {
  /**
   * custom_domain is the updated custom domain
   */
  customDomain: CustomDomain;
}

/**
 * DeleteCustomDomainResponse is the response message for deleting a custom domain
 */
export type CustomDomainDeleteResponse = unknown;

export interface CustomDomainCreateParams {
  /**
   * domain_name is the custom domain name
   */
  domainName: string;

  /**
   * organization_id is the ID of the organization to create the custom domain for
   */
  organizationId: string;

  /**
   * @deprecated aws_account_id is the AWS account ID (deprecated: use
   * cloud_account_id)
   */
  awsAccountId?: string | null;

  /**
   * cloud_account_id is the unified cloud account identifier (AWS Account ID or GCP
   * Project ID)
   */
  cloudAccountId?: string | null;

  /**
   * provider is the cloud provider for this custom domain
   */
  provider?: CustomDomainProvider;
}

export interface CustomDomainRetrieveParams {
  /**
   * organization_id is the ID of the organization to retrieve custom domain for
   */
  organizationId: string;
}

export interface CustomDomainUpdateParams {
  /**
   * domain_name is the custom domain name
   */
  domainName: string;

  /**
   * organization_id is the ID of the organization to update custom domain for
   */
  organizationId: string;

  /**
   * @deprecated aws_account_id is the AWS account ID (deprecated: use
   * cloud_account_id)
   */
  awsAccountId?: string | null;

  /**
   * cloud_account_id is the unified cloud account identifier (AWS Account ID or GCP
   * Project ID)
   */
  cloudAccountId?: string | null;

  /**
   * provider is the cloud provider for this custom domain
   */
  provider?: CustomDomainProvider | null;
}

export interface CustomDomainDeleteParams {
  /**
   * organization_id is the ID of the organization to delete custom domain for
   */
  organizationId: string;
}

export declare namespace CustomDomains {
  export {
    type CustomDomain as CustomDomain,
    type CustomDomainProvider as CustomDomainProvider,
    type CustomDomainCreateResponse as CustomDomainCreateResponse,
    type CustomDomainRetrieveResponse as CustomDomainRetrieveResponse,
    type CustomDomainUpdateResponse as CustomDomainUpdateResponse,
    type CustomDomainDeleteResponse as CustomDomainDeleteResponse,
    type CustomDomainCreateParams as CustomDomainCreateParams,
    type CustomDomainRetrieveParams as CustomDomainRetrieveParams,
    type CustomDomainUpdateParams as CustomDomainUpdateParams,
    type CustomDomainDeleteParams as CustomDomainDeleteParams,
  };
}
