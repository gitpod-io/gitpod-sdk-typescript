// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { PagePromise, SessionsPage, type SessionsPageParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Usage extends APIResource {
  /**
   * Lists environment sessions within a specified date range.
   *
   * Returns a list of environment sessions that were active within the specified
   * date range.
   */
  listEnvironmentSessions(
    params: UsageListEnvironmentSessionsParams,
    options?: RequestOptions,
  ): PagePromise<EnvironmentSessionsSessionsPage, EnvironmentSession> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.UsageService/ListEnvironmentSessions',
      SessionsPage<EnvironmentSession>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }
}

export type EnvironmentSessionsSessionsPage = SessionsPage<EnvironmentSession>;

export interface EnvironmentSession {
  /**
   * Environment session ID.
   */
  id?: string;

  /**
   * Time when the session was created.
   */
  createdAt?: string;

  /**
   * Environment class ID associated with the session.
   */
  environmentClassId?: string;

  /**
   * Environment ID associated with the session.
   */
  environmentId?: string;

  /**
   * Project ID associated with the session.
   */
  projectId?: string;

  /**
   * Runner ID associated with the session.
   */
  runnerId?: string;

  /**
   * Time when the session was stopped.
   */
  stoppedAt?: string;

  /**
   * User ID who created the session.
   */
  userId?: string;
}

export interface UsageListEnvironmentSessionsParams extends SessionsPageParams {
  /**
   * Body param: Filter options.
   */
  filter?: UsageListEnvironmentSessionsParams.Filter;

  /**
   * Body param: Pagination options.
   */
  pagination?: UsageListEnvironmentSessionsParams.Pagination;
}

export namespace UsageListEnvironmentSessionsParams {
  /**
   * Filter options.
   */
  export interface Filter {
    /**
     * Date range to query sessions within.
     */
    dateRange: Filter.DateRange;

    /**
     * Optional project ID to filter sessions by.
     */
    projectId?: string;
  }

  export namespace Filter {
    /**
     * Date range to query sessions within.
     */
    export interface DateRange {
      /**
       * End time of the date range (exclusive).
       */
      endTime: string;

      /**
       * Start time of the date range (inclusive).
       */
      startTime: string;
    }
  }

  /**
   * Pagination options.
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

export declare namespace Usage {
  export {
    type EnvironmentSession as EnvironmentSession,
    type EnvironmentSessionsSessionsPage as EnvironmentSessionsSessionsPage,
    type UsageListEnvironmentSessionsParams as UsageListEnvironmentSessionsParams,
  };
}
