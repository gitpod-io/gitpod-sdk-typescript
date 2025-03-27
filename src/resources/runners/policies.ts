// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, PoliciesPage, type PoliciesPageParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Policies extends APIResource {
  /**
   * Creates a new policy for a runner.
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
   *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   groupId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *   role: RUNNER_ROLE_ADMIN
   *   ```
   */
  create(body: PolicyCreateParams, options?: RequestOptions): APIPromise<PolicyCreateResponse> {
    return this._client.post('/gitpod.v1.RunnerService/CreateRunnerPolicy', { body, ...options });
  }

  /**
   * Updates an existing runner policy.
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
   *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   groupId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *   role: RUNNER_ROLE_USER
   *   ```
   */
  update(body: PolicyUpdateParams, options?: RequestOptions): APIPromise<PolicyUpdateResponse> {
    return this._client.post('/gitpod.v1.RunnerService/UpdateRunnerPolicy', { body, ...options });
  }

  /**
   * Lists policies for a runner.
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
   *   Shows all policies for a runner.
   *
   *   ```yaml
   *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   pagination:
   *     pageSize: 20
   *   ```
   */
  list(
    params: PolicyListParams,
    options?: RequestOptions,
  ): PagePromise<RunnerPoliciesPoliciesPage, RunnerPolicy> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.RunnerService/ListRunnerPolicies',
      PoliciesPage<RunnerPolicy>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Deletes a runner policy.
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
   *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   groupId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *   ```
   */
  delete(body: PolicyDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.RunnerService/DeleteRunnerPolicy', { body, ...options });
  }
}

export type RunnerPoliciesPoliciesPage = PoliciesPage<RunnerPolicy>;

export interface RunnerPolicy {
  groupId?: string;

  /**
   * role is the role assigned to the group
   */
  role?: RunnerRole;
}

export type RunnerRole = 'RUNNER_ROLE_UNSPECIFIED' | 'RUNNER_ROLE_ADMIN' | 'RUNNER_ROLE_USER';

export interface PolicyCreateResponse {
  policy: RunnerPolicy;
}

export interface PolicyUpdateResponse {
  policy: RunnerPolicy;
}

export type PolicyDeleteResponse = unknown;

export interface PolicyCreateParams {
  /**
   * group_id specifies the group_id identifier
   */
  groupId?: string;

  role?: RunnerRole;

  /**
   * runner_id specifies the project identifier
   */
  runnerId?: string;
}

export interface PolicyUpdateParams {
  /**
   * group_id specifies the group_id identifier
   */
  groupId?: string;

  role?: RunnerRole;

  /**
   * runner_id specifies the project identifier
   */
  runnerId?: string;
}

export interface PolicyListParams extends PoliciesPageParams {
  /**
   * Body param: pagination contains the pagination options for listing project
   * policies
   */
  pagination?: PolicyListParams.Pagination;

  /**
   * Body param: runner_id specifies the project identifier
   */
  runnerId?: string;
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
   * runner_id specifies the project identifier
   */
  runnerId?: string;
}

export declare namespace Policies {
  export {
    type RunnerPolicy as RunnerPolicy,
    type RunnerRole as RunnerRole,
    type PolicyCreateResponse as PolicyCreateResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyDeleteResponse as PolicyDeleteResponse,
    type RunnerPoliciesPoliciesPage as RunnerPoliciesPoliciesPage,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
  };
}
