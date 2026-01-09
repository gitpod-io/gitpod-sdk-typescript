// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RoleAssignmentsAPI from './role-assignments';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { AssignmentsPage, type AssignmentsPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class RoleAssignments extends APIResource {
  /**
   * Creates a role assignment for a group on a resource.
   *
   * Use this method to:
   *
   * - Assign specific roles to groups on runners, projects, or environments
   * - Grant group-based access to resources
   *
   * ### Examples
   *
   * - Assign admin role on a runner:
   *
   *   Grants the group admin access to a runner.
   *
   *   ```yaml
   *   groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   resourceType: RESOURCE_TYPE_RUNNER
   *   resourceId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *   resourceRole: RESOURCE_ROLE_RUNNER_ADMIN
   *   ```
   *
   * - Assign user role on a project:
   *
   *   Grants the group user access to a project.
   *
   *   ```yaml
   *   groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   resourceType: RESOURCE_TYPE_PROJECT
   *   resourceId: "a1b2c3d4-5678-90ab-cdef-1234567890ab"
   *   resourceRole: RESOURCE_ROLE_PROJECT_USER
   *   ```
   *
   * ### Authorization
   *
   * Requires admin role on the specific resource.
   *
   * @example
   * ```ts
   * const roleAssignment =
   *   await client.groups.roleAssignments.create({
   *     groupId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *     resourceId: 'f53d2330-3795-4c5d-a1f3-453121af9c60',
   *     resourceRole: 'RESOURCE_ROLE_RUNNER_ADMIN',
   *     resourceType: 'RESOURCE_TYPE_RUNNER',
   *   });
   * ```
   */
  create(
    body: RoleAssignmentCreateParams,
    options?: RequestOptions,
  ): APIPromise<RoleAssignmentCreateResponse> {
    return this._client.post('/gitpod.v1.GroupService/CreateRoleAssignment', { body, ...options });
  }

  /**
   * Lists role assignments for a group or resource.
   *
   * Use this method to:
   *
   * - View all role assignments for a group
   * - Audit resource access
   * - Check which groups have access to resources
   *
   * ### Examples
   *
   * - List role assignments for a group:
   *
   *   Shows all role assignments for a specific group.
   *
   *   ```yaml
   *   filter:
   *     groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * - List role assignments by resource type:
   *
   *   Shows all role assignments for runners.
   *
   *   ```yaml
   *   filter:
   *     resourceTypes:
   *       - RESOURCE_TYPE_RUNNER
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * ### Authorization
   *
   * All organization members can view role assignments (transparency model).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const roleAssignment of client.groups.roleAssignments.list(
   *   {
   *     filter: { resourceTypes: ['RESOURCE_TYPE_RUNNER'] },
   *     pagination: { pageSize: 20 },
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RoleAssignmentListParams,
    options?: RequestOptions,
  ): PagePromise<RoleAssignmentsAssignmentsPage, RoleAssignment> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.GroupService/ListRoleAssignments',
      AssignmentsPage<RoleAssignment>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Deletes a role assignment.
   *
   * Use this method to:
   *
   * - Remove group access to resources
   * - Revoke role-based permissions
   *
   * ### Examples
   *
   * - Delete a role assignment:
   *
   *   Removes a role assignment by its ID.
   *
   *   ```yaml
   *   assignmentId: "a1b2c3d4-5678-90ab-cdef-1234567890ab"
   *   ```
   *
   * ### Authorization
   *
   * Requires admin role on the specific resource.
   *
   * @example
   * ```ts
   * const roleAssignment =
   *   await client.groups.roleAssignments.delete({
   *     assignmentId: 'a1b2c3d4-5678-90ab-cdef-1234567890ab',
   *   });
   * ```
   */
  delete(body: RoleAssignmentDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.GroupService/DeleteRoleAssignment', { body, ...options });
  }
}

export type RoleAssignmentsAssignmentsPage = AssignmentsPage<RoleAssignment>;

/**
 * ResourceRole represents roles that can be assigned to groups on resources These
 * map directly to the roles defined in backend/db/rule/rbac/role/role.go
 */
export type ResourceRole =
  | 'RESOURCE_ROLE_UNSPECIFIED'
  | 'RESOURCE_ROLE_ORG_ADMIN'
  | 'RESOURCE_ROLE_ORG_MEMBER'
  | 'RESOURCE_ROLE_GROUP_ADMIN'
  | 'RESOURCE_ROLE_GROUP_VIEWER'
  | 'RESOURCE_ROLE_USER_IDENTITY'
  | 'RESOURCE_ROLE_USER_VIEWER'
  | 'RESOURCE_ROLE_USER_ADMIN'
  | 'RESOURCE_ROLE_ENVIRONMENT_IDENTITY'
  | 'RESOURCE_ROLE_ENVIRONMENT_ADMIN'
  | 'RESOURCE_ROLE_ENVIRONMENT_USER'
  | 'RESOURCE_ROLE_ENVIRONMENT_VIEWER'
  | 'RESOURCE_ROLE_ENVIRONMENT_RUNNER'
  | 'RESOURCE_ROLE_RUNNER_IDENTITY'
  | 'RESOURCE_ROLE_RUNNER_ADMIN'
  | 'RESOURCE_ROLE_RUNNER_LOCAL_ADMIN'
  | 'RESOURCE_ROLE_RUNNER_MANAGED_ADMIN'
  | 'RESOURCE_ROLE_RUNNER_USER'
  | 'RESOURCE_ROLE_RUNNER_CONFIGURATION_READER'
  | 'RESOURCE_ROLE_HOST_AUTHENTICATION_TOKEN_ADMIN'
  | 'RESOURCE_ROLE_HOST_AUTHENTICATION_TOKEN_UPDATER'
  | 'RESOURCE_ROLE_PROJECT_ADMIN'
  | 'RESOURCE_ROLE_PROJECT_USER'
  | 'RESOURCE_ROLE_PROJECT_EDITOR'
  | 'RESOURCE_ROLE_ENVIRONMENT_SERVICE_ADMIN'
  | 'RESOURCE_ROLE_ENVIRONMENT_SERVICE_VIEWER'
  | 'RESOURCE_ROLE_ENVIRONMENT_SERVICE_USER'
  | 'RESOURCE_ROLE_ENVIRONMENT_SERVICE_ENV'
  | 'RESOURCE_ROLE_ENVIRONMENT_TASK_ADMIN'
  | 'RESOURCE_ROLE_ENVIRONMENT_TASK_VIEWER'
  | 'RESOURCE_ROLE_ENVIRONMENT_TASK_USER'
  | 'RESOURCE_ROLE_ENVIRONMENT_TASK_ENV'
  | 'RESOURCE_ROLE_SERVICE_ACCOUNT_IDENTITY'
  | 'RESOURCE_ROLE_SERVICE_ACCOUNT_ADMIN'
  | 'RESOURCE_ROLE_AGENT_EXECUTION_IDENTITY'
  | 'RESOURCE_ROLE_AGENT_EXECUTION_USER'
  | 'RESOURCE_ROLE_AGENT_EXECUTION_ADMIN'
  | 'RESOURCE_ROLE_AGENT_EXECUTION_RUNNER'
  | 'RESOURCE_ROLE_AGENT_EXECUTION_OUTPUTS_REPORTER'
  | 'RESOURCE_ROLE_AGENT_ADMIN'
  | 'RESOURCE_ROLE_AGENT_VIEWER'
  | 'RESOURCE_ROLE_AGENT_EXECUTOR'
  | 'RESOURCE_ROLE_WORKFLOW_ADMIN'
  | 'RESOURCE_ROLE_WORKFLOW_USER'
  | 'RESOURCE_ROLE_WORKFLOW_VIEWER'
  | 'RESOURCE_ROLE_WORKFLOW_EXECUTOR'
  | 'RESOURCE_ROLE_SNAPSHOT_ADMIN'
  | 'RESOURCE_ROLE_SNAPSHOT_RUNNER'
  | 'RESOURCE_ROLE_WEBHOOK_ADMIN'
  | 'RESOURCE_ROLE_WEBHOOK_VIEWER';

/**
 * RoleAssignment represents a role assigned to a group on a specific resource
 */
export interface RoleAssignment {
  /**
   * Unique identifier for the role assignment
   */
  id?: string;

  /**
   * Group identifier
   */
  groupId?: string;

  /**
   * Organization identifier
   */
  organizationId?: string;

  /**
   * Resource identifier
   */
  resourceId?: string;

  /**
   * Role assigned to the group on this resource
   */
  resourceRole?: ResourceRole;

  /**
   * Type of resource (runner, project, environment, etc.)
   */
  resourceType?: Shared.ResourceType;
}

export interface RoleAssignmentCreateResponse {
  /**
   * RoleAssignment represents a role assigned to a group on a specific resource
   */
  assignment?: RoleAssignment;
}

/**
 * Empty response
 */
export type RoleAssignmentDeleteResponse = unknown;

export interface RoleAssignmentCreateParams {
  groupId?: string;

  resourceId?: string;

  /**
   * ResourceRole represents roles that can be assigned to groups on resources These
   * map directly to the roles defined in backend/db/rule/rbac/role/role.go
   */
  resourceRole?: ResourceRole;

  resourceType?: Shared.ResourceType;
}

export interface RoleAssignmentListParams extends AssignmentsPageParams {
  /**
   * Body param: Filter parameters
   */
  filter?: RoleAssignmentListParams.Filter;

  /**
   * Body param: Pagination parameters
   */
  pagination?: RoleAssignmentListParams.Pagination;
}

export namespace RoleAssignmentListParams {
  /**
   * Filter parameters
   */
  export interface Filter {
    /**
     * group_id filters the response to only role assignments for this specific group
     * Empty string is allowed and means no filtering by group
     */
    groupId?: string;

    /**
     * resource_roles filters the response to only role assignments with these specific
     * roles
     */
    resourceRoles?: Array<RoleAssignmentsAPI.ResourceRole>;

    /**
     * resource_types filters the response to only role assignments for these resource
     * types
     */
    resourceTypes?: Array<Shared.ResourceType>;

    /**
     * user_id filters the response to only role assignments for groups that this user
     * is a member of Empty string is allowed and means no filtering by user
     */
    userId?: string;
  }

  /**
   * Pagination parameters
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

export interface RoleAssignmentDeleteParams {
  assignmentId?: string;
}

export declare namespace RoleAssignments {
  export {
    type ResourceRole as ResourceRole,
    type RoleAssignment as RoleAssignment,
    type RoleAssignmentCreateResponse as RoleAssignmentCreateResponse,
    type RoleAssignmentDeleteResponse as RoleAssignmentDeleteResponse,
    type RoleAssignmentsAssignmentsPage as RoleAssignmentsAssignmentsPage,
    type RoleAssignmentCreateParams as RoleAssignmentCreateParams,
    type RoleAssignmentListParams as RoleAssignmentListParams,
    type RoleAssignmentDeleteParams as RoleAssignmentDeleteParams,
  };
}
