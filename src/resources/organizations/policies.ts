// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Policies extends APIResource {
  /**
   * Gets organization policy settings by organization ID.
   *
   * Use this method to:
   *
   * - Retrieve current policy settings for an organization
   * - View resource limits and restrictions
   * - Check allowed editors and other configurations
   *
   * ### Examples
   *
   * - Get organization policies:
   *
   *   Retrieves policy settings for a specific organization.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   ```
   *
   * @example
   * ```ts
   * const policy = await client.organizations.policies.retrieve(
   *   {
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   },
   * );
   * ```
   */
  retrieve(body: PolicyRetrieveParams, options?: RequestOptions): APIPromise<PolicyRetrieveResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/GetOrganizationPolicies', { body, ...options });
  }

  /**
   * Updates organization policy settings.
   *
   * Use this method to:
   *
   * - Configure editor restrictions
   * - Set environment resource limits
   * - Define project creation permissions
   * - Customize default configurations
   *
   * ### Examples
   *
   * - Update editor policies:
   *
   *   Restricts available editors and sets a default.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   allowedEditorIds:
   *     - "vscode"
   *     - "jetbrains"
   *   defaultEditorId: "vscode"
   *   ```
   *
   * - Set environment limits:
   *
   *   Configures limits for environment usage.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   maximumEnvironmentTimeout: "3600s"
   *   maximumRunningEnvironmentsPerUser: "5"
   *   maximumEnvironmentsPerUser: "20"
   *   ```
   *
   * @example
   * ```ts
   * const policy = await client.organizations.policies.update({
   *   organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   maximumEnvironmentsPerUser: '20',
   *   maximumEnvironmentTimeout: '3600s',
   *   maximumRunningEnvironmentsPerUser: '5',
   * });
   * ```
   */
  update(body: PolicyUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.OrganizationService/UpdateOrganizationPolicies', {
      body,
      ...options,
    });
  }
}

export interface OrganizationPolicies {
  /**
   * allowed_editor_ids is the list of editor IDs that are allowed to be used in the
   * organization
   */
  allowedEditorIds: Array<string>;

  /**
   * allow_local_runners controls whether local runners are allowed to be used in the
   * organization
   */
  allowLocalRunners: boolean;

  /**
   * default_editor_id is the default editor ID to be used when a user doesn't
   * specify one
   */
  defaultEditorId: string;

  /**
   * default_environment_image is the default container image when none is defined in
   * repo
   */
  defaultEnvironmentImage: string;

  /**
   * maximum_environments_per_user limits total environments (running or stopped) per
   * user
   */
  maximumEnvironmentsPerUser: string;

  /**
   * maximum_running_environments_per_user limits simultaneously running environments
   * per user
   */
  maximumRunningEnvironmentsPerUser: string;

  /**
   * members_create_projects controls whether members can create projects
   */
  membersCreateProjects: boolean;

  /**
   * members_require_projects controls whether environments can only be created from
   * projects by non-admin users
   */
  membersRequireProjects: boolean;

  /**
   * organization_id is the ID of the organization
   */
  organizationId: string;

  /**
   * port_sharing_disabled controls whether port sharing is disabled in the
   * organization
   */
  portSharingDisabled: boolean;

  /**
   * maximum_environment_timeout controls the maximum timeout allowed for
   * environments in seconds. 0 means no limit (never). Minimum duration is 30
   * minutes.
   */
  maximumEnvironmentTimeout?: string;
}

export interface PolicyRetrieveResponse {
  policies: OrganizationPolicies;
}

export type PolicyUpdateResponse = unknown;

export interface PolicyRetrieveParams {
  /**
   * organization_id is the ID of the organization to retrieve policies for
   */
  organizationId: string;
}

export interface PolicyUpdateParams {
  /**
   * organization_id is the ID of the organization to update policies for
   */
  organizationId: string;

  /**
   * allowed_editor_ids is the list of editor IDs that are allowed to be used in the
   * organization
   */
  allowedEditorIds?: Array<string>;

  /**
   * allow_local_runners controls whether local runners are allowed to be used in the
   * organization
   */
  allowLocalRunners?: boolean | null;

  /**
   * default_editor_id is the default editor ID to be used when a user doesn't
   * specify one
   */
  defaultEditorId?: string | null;

  /**
   * default_environment_image is the default container image when none is defined in
   * repo
   */
  defaultEnvironmentImage?: string | null;

  /**
   * maximum_environments_per_user limits total environments (running or stopped) per
   * user
   */
  maximumEnvironmentsPerUser?: string | null;

  /**
   * maximum_environment_timeout controls the maximum timeout allowed for
   * environments in seconds. 0 means no limit (never). Minimum duration is 30
   * minutes.
   */
  maximumEnvironmentTimeout?: string | null;

  /**
   * maximum_running_environments_per_user limits simultaneously running environments
   * per user
   */
  maximumRunningEnvironmentsPerUser?: string | null;

  /**
   * members_create_projects controls whether members can create projects
   */
  membersCreateProjects?: boolean | null;

  /**
   * members_require_projects controls whether environments can only be created from
   * projects by non-admin users
   */
  membersRequireProjects?: boolean | null;

  /**
   * port_sharing_disabled controls whether port sharing is disabled in the
   * organization
   */
  portSharingDisabled?: boolean | null;
}

export declare namespace Policies {
  export {
    type OrganizationPolicies as OrganizationPolicies,
    type PolicyRetrieveResponse as PolicyRetrieveResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyRetrieveParams as PolicyRetrieveParams,
    type PolicyUpdateParams as PolicyUpdateParams,
  };
}
