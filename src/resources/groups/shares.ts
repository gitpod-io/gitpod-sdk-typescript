// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Shares extends APIResource {
  /**
   * Shares a resource directly with a principal (user or service account).
   *
   * Use this method to:
   *
   * - Grant a user or service account direct access to a runner, project, or other
   *   resource
   * - Share resources without creating and managing groups manually
   *
   * ### Examples
   *
   * - Share a runner with a user:
   *
   *   Grants admin access to a runner for a specific user.
   *
   *   ```yaml
   *   resourceType: RESOURCE_TYPE_RUNNER
   *   resourceId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   principal: PRINCIPAL_USER
   *   principalId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *   role: RESOURCE_ROLE_RUNNER_ADMIN
   *   ```
   *
   * - Share a runner with a service account:
   *
   *   Grants user access to a runner for a service account.
   *
   *   ```yaml
   *   resourceType: RESOURCE_TYPE_RUNNER
   *   resourceId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   principal: PRINCIPAL_SERVICE_ACCOUNT
   *   principalId: "a1b2c3d4-5678-90ab-cdef-1234567890ab"
   *   role: RESOURCE_ROLE_RUNNER_USER
   *   ```
   *
   * ### Authorization
   *
   * Requires admin role on the specific resource.
   *
   * @example
   * ```ts
   * const share = await client.groups.shares.create({
   *   principal: 'PRINCIPAL_SERVICE_ACCOUNT',
   *   principalId: 'a1b2c3d4-5678-90ab-cdef-1234567890ab',
   *   resourceId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   resourceType: 'RESOURCE_TYPE_RUNNER',
   *   role: 'RESOURCE_ROLE_RUNNER_USER',
   * });
   * ```
   */
  create(body: ShareCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.GroupService/ShareResourceWithPrincipal', { body, ...options });
  }

  /**
   * Removes direct access for a principal (user or service account) from a resource.
   *
   * Use this method to:
   *
   * - Revoke a principal's direct access to a resource
   * - Remove sharing without affecting group-based access
   *
   * ### Examples
   *
   * - Remove user access from a runner:
   *
   *   Revokes a user's direct access to a runner.
   *
   *   ```yaml
   *   resourceType: RESOURCE_TYPE_RUNNER
   *   resourceId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   principal: PRINCIPAL_USER
   *   principalId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *   ```
   *
   * ### Authorization
   *
   * Requires admin role on the specific resource.
   *
   * @example
   * ```ts
   * const share = await client.groups.shares.delete({
   *   principal: 'PRINCIPAL_USER',
   *   principalId: 'f53d2330-3795-4c5d-a1f3-453121af9c60',
   *   resourceId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   resourceType: 'RESOURCE_TYPE_RUNNER',
   * });
   * ```
   */
  delete(body: ShareDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.GroupService/UnshareResourceWithPrincipal', { body, ...options });
  }
}

/**
 * Empty response on success
 */
export type ShareCreateResponse = unknown;

/**
 * Empty response on success
 */
export type ShareDeleteResponse = unknown;

export interface ShareCreateParams {
  /**
   * Type of principal to share with (user or service account)
   */
  principal?: Shared.Principal;

  /**
   * ID of the principal (user or service account) to share with
   */
  principalId?: string;

  /**
   * ID of the resource to share
   */
  resourceId?: string;

  /**
   * Type of resource to share (runner, project, etc.)
   */
  resourceType?: Shared.ResourceType;

  /**
   * Role to grant the principal on the resource
   */
  role?: Shared.ResourceRole;
}

export interface ShareDeleteParams {
  /**
   * Type of principal to remove access from (user or service account)
   */
  principal?: Shared.Principal;

  /**
   * ID of the principal (user or service account) to remove access from
   */
  principalId?: string;

  /**
   * ID of the resource to unshare
   */
  resourceId?: string;

  /**
   * Type of resource to unshare
   */
  resourceType?: Shared.ResourceType;
}

export declare namespace Shares {
  export {
    type ShareCreateResponse as ShareCreateResponse,
    type ShareDeleteResponse as ShareDeleteResponse,
    type ShareCreateParams as ShareCreateParams,
    type ShareDeleteParams as ShareDeleteParams,
  };
}
