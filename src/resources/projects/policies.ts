// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, PoliciesPage, type PoliciesPageParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Policies extends APIResource {
  /**
   * Creates a new policy for a project.
   *
   * Use this method to:
   *
   * - Set up access controls
   * - Define group permissions
   * - Configure role-based access
   *
   * ### Examples
   *
   * - Create admin policy:
   *
   *   Grants admin access to a group.
   *
   *   ```yaml
   *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   groupId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *   role: PROJECT_ROLE_ADMIN
   *   ```
   */
  create(body: PolicyCreateParams, options?: RequestOptions): APIPromise<PolicyCreateResponse> {
    return this._client.post('/gitpod.v1.ProjectService/CreateProjectPolicy', { body, ...options });
  }

  /**
   * Updates an existing project policy.
   *
   * Use this method to:
   *
   * - Modify access levels
   * - Change group roles
   * - Update permissions
   *
   * ### Examples
   *
   * - Update policy role:
   *
   *   Changes a group's access level.
   *
   *   ```yaml
   *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   groupId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *   role: PROJECT_ROLE_EDITOR
   *   ```
   */
  update(body: PolicyUpdateParams, options?: RequestOptions): APIPromise<PolicyUpdateResponse> {
    return this._client.post('/gitpod.v1.ProjectService/UpdateProjectPolicy', { body, ...options });
  }

  /**
   * Lists policies for a project.
   *
   * Use this method to:
   *
   * - View access controls
   * - Check policy configurations
   * - Audit permissions
   *
   * ### Examples
   *
   * - List policies:
   *
   *   Shows all policies for a project.
   *
   *   ```yaml
   *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   pagination:
   *     pageSize: 20
   *   ```
   */
  list(
    params: PolicyListParams,
    options?: RequestOptions,
  ): PagePromise<ProjectPoliciesPoliciesPage, ProjectPolicy> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.ProjectService/ListProjectPolicies',
      PoliciesPage<ProjectPolicy>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Deletes a project policy.
   *
   * Use this method to:
   *
   * - Remove access controls
   * - Revoke permissions
   * - Clean up policies
   *
   * ### Examples
   *
   * - Delete policy:
   *
   *   Removes a group's access policy.
   *
   *   ```yaml
   *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   groupId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *   ```
   */
  delete(body: PolicyDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.ProjectService/DeleteProjectPolicy', { body, ...options });
  }
}

export type ProjectPoliciesPoliciesPage = PoliciesPage<ProjectPolicy>;

export interface ProjectPolicy {
  groupId?: string;

  /**
   * role is the role assigned to the group
   */
  role?: ProjectRole;
}

export type ProjectRole =
  | 'PROJECT_ROLE_UNSPECIFIED'
  | 'PROJECT_ROLE_ADMIN'
  | 'PROJECT_ROLE_USER'
  | 'PROJECT_ROLE_EDITOR';

export interface PolicyCreateResponse {
  policy?: ProjectPolicy;
}

export interface PolicyUpdateResponse {
  policy?: ProjectPolicy;
}

export type PolicyDeleteResponse = unknown;

export interface PolicyCreateParams {
  /**
   * group_id specifies the group_id identifier
   */
  groupId?: string;

  /**
   * project_id specifies the project identifier
   */
  projectId?: string;

  role?: ProjectRole;
}

export interface PolicyUpdateParams {
  /**
   * group_id specifies the group_id identifier
   */
  groupId?: string;

  /**
   * project_id specifies the project identifier
   */
  projectId?: string;

  role?: ProjectRole;
}

export interface PolicyListParams extends PoliciesPageParams {
  /**
   * Body param: pagination contains the pagination options for listing project
   * policies
   */
  pagination?: PolicyListParams.Pagination;

  /**
   * Body param: project_id specifies the project identifier
   */
  projectId?: string;
}

export namespace PolicyListParams {
  /**
   * pagination contains the pagination options for listing project policies
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

export interface PolicyDeleteParams {
  /**
   * group_id specifies the group_id identifier
   */
  groupId?: string;

  /**
   * project_id specifies the project identifier
   */
  projectId?: string;
}

export declare namespace Policies {
  export {
    type ProjectPolicy as ProjectPolicy,
    type ProjectRole as ProjectRole,
    type PolicyCreateResponse as PolicyCreateResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyDeleteResponse as PolicyDeleteResponse,
    type ProjectPoliciesPoliciesPage as ProjectPoliciesPoliciesPage,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
  };
}
