// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { PagePromise, PoliciesPage, type PoliciesPageParams } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';

export class Policies extends APIResource {
  /**
   * CreateRunnerPolicy creates a new runner policy.
   */
  create(body: PolicyCreateParams, options?: RequestOptions): APIPromise<PolicyCreateResponse> {
    return this._client.post('/gitpod.v1.RunnerService/CreateRunnerPolicy', { body, ...options });
  }

  /**
   * UpdateRunnerPolicy an existing runner policy.
   */
  update(body: PolicyUpdateParams, options?: RequestOptions): APIPromise<PolicyUpdateResponse> {
    return this._client.post('/gitpod.v1.RunnerService/UpdateRunnerPolicy', { body, ...options });
  }

  /**
   * ListRunnerPolicies lists runner policies.
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
   * DeleteRunnerPolicy deletes a runner policy.
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
