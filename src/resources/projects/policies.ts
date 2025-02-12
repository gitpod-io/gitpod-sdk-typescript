// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { PagePromise, PoliciesPage, type PoliciesPageParams } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';

export class Policies extends APIResource {
  /**
   * CreateProjectPolicy creates a Project Policy.
   */
  create(body: PolicyCreateParams, options?: RequestOptions): APIPromise<PolicyCreateResponse> {
    return this._client.post('/gitpod.v1.ProjectService/CreateProjectPolicy', { body, ...options });
  }

  /**
   * UpdateProjectPolicy updates a Project Policy.
   */
  update(body: PolicyUpdateParams, options?: RequestOptions): APIPromise<PolicyUpdateResponse> {
    return this._client.post('/gitpod.v1.ProjectService/UpdateProjectPolicy', { body, ...options });
  }

  /**
   * ListProjectPolicies lists policies for a project.
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
   * DeleteProjectPolicy deletes a Project Policy.
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
