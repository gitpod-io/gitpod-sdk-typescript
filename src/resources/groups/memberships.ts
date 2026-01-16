// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { MembersPage, type MembersPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Memberships extends APIResource {
  /**
   * Creates a membership for a user in a group.
   *
   * Use this method to:
   *
   * - Add users to groups
   * - Grant group-based permissions to users
   *
   * ### Examples
   *
   * - Add a user to a group:
   *
   *   Creates a membership for a user in a group.
   *
   *   ```yaml
   *   groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   subject:
   *     id: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *     principal: PRINCIPAL_USER
   *   ```
   *
   * ### Authorization
   *
   * Requires `org:admin` permission on the organization or `group:admin` permission
   * on the specific group.
   *
   * @example
   * ```ts
   * const membership = await client.groups.memberships.create({
   *   groupId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   subject: {
   *     id: 'f53d2330-3795-4c5d-a1f3-453121af9c60',
   *     principal: 'PRINCIPAL_USER',
   *   },
   * });
   * ```
   */
  create(body: MembershipCreateParams, options?: RequestOptions): APIPromise<MembershipCreateResponse> {
    return this._client.post('/gitpod.v1.GroupService/CreateMembership', { body, ...options });
  }

  /**
   * Gets a specific membership by group ID and subject.
   *
   * Use this method to:
   *
   * - Check if a user or service account is a member of a group
   * - Verify group membership for access control
   *
   * ### Examples
   *
   * - Check user membership:
   *
   *   Checks if a user is a member of a specific group.
   *
   *   ```yaml
   *   groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   subject:
   *     id: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *     principal: PRINCIPAL_USER
   *   ```
   *
   * ### Authorization
   *
   * All organization members can check group membership (transparency model).
   *
   * @example
   * ```ts
   * const membership = await client.groups.memberships.retrieve(
   *   {
   *     subject: {
   *       id: 'f53d2330-3795-4c5d-a1f3-453121af9c60',
   *       principal: 'PRINCIPAL_USER',
   *     },
   *     groupId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   },
   * );
   * ```
   */
  retrieve(body: MembershipRetrieveParams, options?: RequestOptions): APIPromise<MembershipRetrieveResponse> {
    return this._client.post('/gitpod.v1.GroupService/GetMembership', { body, ...options });
  }

  /**
   * Lists all memberships of a group.
   *
   * Use this method to:
   *
   * - View all members of a group
   * - Audit group membership
   *
   * ### Examples
   *
   * - List group members:
   *
   *   Shows all members of a specific group.
   *
   *   ```yaml
   *   groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * ### Authorization
   *
   * All organization members can view group membership (transparency model).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const groupMembership of client.groups.memberships.list(
   *   {
   *     groupId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *     pagination: { pageSize: 20 },
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: MembershipListParams,
    options?: RequestOptions,
  ): PagePromise<GroupMembershipsMembersPage, GroupMembership> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList('/gitpod.v1.GroupService/ListMemberships', MembersPage<GroupMembership>, {
      query: { token, pageSize },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Deletes a membership for a user in a group.
   *
   * Use this method to:
   *
   * - Remove users from groups
   * - Revoke group-based permissions
   *
   * ### Examples
   *
   * - Remove a user from a group:
   *
   *   Deletes a membership by its ID.
   *
   *   ```yaml
   *   membershipId: "a1b2c3d4-5678-90ab-cdef-1234567890ab"
   *   ```
   *
   * ### Authorization
   *
   * Requires `org:admin` permission on the organization or `group:admin` permission
   * on the specific group.
   *
   * @example
   * ```ts
   * const membership = await client.groups.memberships.delete({
   *   membershipId: 'a1b2c3d4-5678-90ab-cdef-1234567890ab',
   * });
   * ```
   */
  delete(body: MembershipDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.GroupService/DeleteMembership', { body, ...options });
  }
}

export type GroupMembershipsMembersPage = MembersPage<GroupMembership>;

/**
 * GroupMembership represents a subject's membership in a group
 */
export interface GroupMembership {
  /**
   * Unique identifier for the group membership
   */
  id?: string;

  /**
   * Subject's avatar URL
   */
  avatarUrl?: string;

  /**
   * Group identifier
   */
  groupId?: string;

  /**
   * Subject's display name
   */
  name?: string;

  /**
   * Subject (user, runner, environment, service account, etc.)
   */
  subject?: Shared.Subject;
}

export interface MembershipCreateResponse {
  /**
   * GroupMembership represents a subject's membership in a group
   */
  member?: GroupMembership;
}

export interface MembershipRetrieveResponse {
  /**
   * The membership if found, nil if subject is not a member
   */
  member?: GroupMembership;
}

/**
 * Empty response
 */
export type MembershipDeleteResponse = unknown;

export interface MembershipCreateParams {
  groupId?: string;

  /**
   * Subject to add to the group
   */
  subject?: Shared.Subject;
}

export interface MembershipRetrieveParams {
  /**
   * Subject to check membership for
   */
  subject: Shared.Subject;

  groupId?: string;
}

export interface MembershipListParams extends MembersPageParams {
  /**
   * Body param
   */
  groupId?: string;

  /**
   * Body param: pagination contains the pagination options for listing memberships
   */
  pagination?: MembershipListParams.Pagination;
}

export namespace MembershipListParams {
  /**
   * pagination contains the pagination options for listing memberships
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

export interface MembershipDeleteParams {
  /**
   * The membership to delete
   */
  membershipId?: string;
}

export declare namespace Memberships {
  export {
    type GroupMembership as GroupMembership,
    type MembershipCreateResponse as MembershipCreateResponse,
    type MembershipRetrieveResponse as MembershipRetrieveResponse,
    type MembershipDeleteResponse as MembershipDeleteResponse,
    type GroupMembershipsMembersPage as GroupMembershipsMembersPage,
    type MembershipCreateParams as MembershipCreateParams,
    type MembershipRetrieveParams as MembershipRetrieveParams,
    type MembershipListParams as MembershipListParams,
    type MembershipDeleteParams as MembershipDeleteParams,
  };
}
