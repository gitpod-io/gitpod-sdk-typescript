// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import { EnvironmentClassesEnvironmentClassesPage } from '../shared';
import * as RunnersAPI from '../runners/runners';
import { EnvironmentClassesPage, type EnvironmentClassesPageParams, PagePromise } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';

export class Classes extends APIResource {
  /**
   * ListEnvironmentClasses returns the list of environment classes with runner
   * details a user is able to use based on the query buf:lint:ignore
   * RPC_REQUEST_RESPONSE_UNIQUE
   */
  list(
    params: ClassListParams,
    options?: RequestOptions,
  ): PagePromise<EnvironmentClassesEnvironmentClassesPage, Shared.EnvironmentClass> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.EnvironmentService/ListEnvironmentClasses',
      EnvironmentClassesPage<Shared.EnvironmentClass>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }
}

export interface ClassListParams extends EnvironmentClassesPageParams {
  /**
   * Body param:
   */
  filter?: ClassListParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing environment
   * classes
   */
  pagination?: ClassListParams.Pagination;
}

export namespace ClassListParams {
  export interface Filter {
    /**
     * can_create_environments filters the response to only environment classes that
     * can be used to create new environments by the caller. Unlike enabled, which
     * indicates general availability, this ensures the caller only sees environment
     * classes they are allowed to use.
     */
    canCreateEnvironments?: boolean | null;

    /**
     * enabled filters the response to only enabled or disabled environment classes. If
     * not set, all environment classes are returned.
     */
    enabled?: boolean | null;

    /**
     * runner_ids filters the response to only EnvironmentClasses of these Runner IDs
     */
    runnerIds?: Array<string>;

    /**
     * runner_kind filters the response to only environment classes from runners of
     * these kinds.
     */
    runnerKinds?: Array<RunnersAPI.RunnerKind>;

    /**
     * runner_providers filters the response to only environment classes from runners
     * of these providers.
     */
    runnerProviders?: Array<RunnersAPI.RunnerProvider>;
  }

  /**
   * pagination contains the pagination options for listing environment classes
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

export declare namespace Classes {
  export { type ClassListParams as ClassListParams };
}

export { type EnvironmentClassesEnvironmentClassesPage };
