// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { PagePromise, RecordsPage, type RecordsPageParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

/**
 * UsageService provides usage information about environments, users, and projects.
 */
export class Usage extends APIResource {
  /**
   * Lists completed environment runtime records within a specified date range.
   *
   * Returns a list of environment runtime records that were completed within the
   * specified date range. Records of currently running environments are not
   * included.
   *
   * Use this method to:
   *
   * - View environment runtime records
   * - Filter by project
   * - Create custom usage reports
   *
   * ### Example
   *
   * ```yaml
   * filter:
   *   projectId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   dateRange:
   *     startTime: "2024-01-01T00:00:00Z"
   *     endTime: "2024-01-02T00:00:00Z"
   * pagination:
   *   pageSize: 100
   * ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const environmentUsageRecord of client.usage.listEnvironmentRuntimeRecords(
   *   {
   *     filter: {
   *       dateRange: {
   *         endTime: '2024-01-02T00:00:00Z',
   *         startTime: '2024-01-01T00:00:00Z',
   *       },
   *       projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *     },
   *     pagination: { pageSize: 100 },
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  listEnvironmentRuntimeRecords(
    params: UsageListEnvironmentRuntimeRecordsParams,
    options?: RequestOptions,
  ): PagePromise<EnvironmentUsageRecordsRecordsPage, EnvironmentUsageRecord> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.UsageService/ListEnvironmentUsageRecords',
      RecordsPage<EnvironmentUsageRecord>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }
}

export type EnvironmentUsageRecordsRecordsPage = RecordsPage<EnvironmentUsageRecord>;

/**
 * EnvironmentUsageRecord represents a record of an environment from start to stop.
 */
export interface EnvironmentUsageRecord {
  /**
   * Environment usage record ID.
   */
  id?: string;

  /**
   * Time when the environment was created.
   */
  createdAt?: string;

  /**
   * Environment class ID associated with the record.
   */
  environmentClassId?: string;

  /**
   * Environment ID associated with the record.
   */
  environmentId?: string;

  /**
   * Project ID associated with the environment (if available).
   */
  projectId?: string;

  /**
   * Runner ID associated with the environment.
   */
  runnerId?: string;

  /**
   * Time when the environment was stopped.
   */
  stoppedAt?: string;

  /**
   * User ID is the ID of the user who created the environment associated with the
   * record.
   */
  userId?: string;
}

export interface UsageListEnvironmentRuntimeRecordsParams extends RecordsPageParams {
  /**
   * Body param: Filter options.
   */
  filter?: UsageListEnvironmentRuntimeRecordsParams.Filter;

  /**
   * Body param: Pagination options.
   */
  pagination?: UsageListEnvironmentRuntimeRecordsParams.Pagination;
}

export namespace UsageListEnvironmentRuntimeRecordsParams {
  /**
   * Filter options.
   */
  export interface Filter {
    /**
     * Date range to query runtime records within.
     */
    dateRange: Filter.DateRange;

    /**
     * Optional project ID to filter runtime records by.
     */
    projectId?: string;
  }

  export namespace Filter {
    /**
     * Date range to query runtime records within.
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
    type EnvironmentUsageRecord as EnvironmentUsageRecord,
    type EnvironmentUsageRecordsRecordsPage as EnvironmentUsageRecordsRecordsPage,
    type UsageListEnvironmentRuntimeRecordsParams as UsageListEnvironmentRuntimeRecordsParams,
  };
}
