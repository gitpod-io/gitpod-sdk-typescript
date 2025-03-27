// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { EnvironmentClassesEnvironmentClassesPage } from '../../shared';
import * as RunnersAPI from '../runners';
import { APIPromise } from '../../../core/api-promise';
import {
  EnvironmentClassesPage,
  type EnvironmentClassesPageParams,
  PagePromise,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';

export class EnvironmentClasses extends APIResource {
  /**
   * Creates a new environment class for a runner.
   *
   * Use this method to:
   *
   * - Define compute resources
   * - Configure environment settings
   * - Set up runtime options
   *
   * ### Examples
   *
   * - Create environment class:
   *
   *   Creates a new environment configuration.
   *
   *   ```yaml
   *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   displayName: "Large Instance"
   *   description: "8 CPU, 16GB RAM"
   *   configuration:
   *     - key: "cpu"
   *       value: "8"
   *     - key: "memory"
   *       value: "16384"
   *   ```
   */
  create(
    body: EnvironmentClassCreateParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentClassCreateResponse> {
    return this._client.post('/gitpod.v1.RunnerConfigurationService/CreateEnvironmentClass', {
      body,
      ...options,
    });
  }

  /**
   * Gets details about a specific environment class.
   *
   * Use this method to:
   *
   * - View class configuration
   * - Check resource settings
   * - Verify availability
   *
   * ### Examples
   *
   * - Get class details:
   *
   *   Retrieves information about a specific class.
   *
   *   ```yaml
   *   environmentClassId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   */
  retrieve(
    body: EnvironmentClassRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentClassRetrieveResponse> {
    return this._client.post('/gitpod.v1.RunnerConfigurationService/GetEnvironmentClass', {
      body,
      ...options,
    });
  }

  /**
   * Updates an environment class.
   *
   * Use this method to:
   *
   * - Modify class settings
   * - Update resource limits
   * - Change availability
   *
   * ### Examples
   *
   * - Update class:
   *
   *   Changes class configuration.
   *
   *   ```yaml
   *   environmentClassId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   displayName: "Updated Large Instance"
   *   description: "16 CPU, 32GB RAM"
   *   enabled: true
   *   ```
   */
  update(body: EnvironmentClassUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.RunnerConfigurationService/UpdateEnvironmentClass', {
      body,
      ...options,
    });
  }

  /**
   * Lists environment classes with optional filtering.
   *
   * Use this method to:
   *
   * - View available classes
   * - Filter by capability
   * - Check enabled status
   *
   * ### Examples
   *
   * - List all classes:
   *
   *   Shows all environment classes.
   *
   *   ```yaml
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * - Filter enabled classes:
   *
   *   Lists only enabled environment classes.
   *
   *   ```yaml
   *   filter:
   *     enabled: true
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   *   buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   */
  list(
    params: EnvironmentClassListParams,
    options?: RequestOptions,
  ): PagePromise<EnvironmentClassesEnvironmentClassesPage, Shared.EnvironmentClass> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.RunnerConfigurationService/ListEnvironmentClasses',
      EnvironmentClassesPage<Shared.EnvironmentClass>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }
}

export interface EnvironmentClassCreateResponse {
  id?: string;
}

export interface EnvironmentClassRetrieveResponse {
  environmentClass?: Shared.EnvironmentClass;
}

export type EnvironmentClassUpdateResponse = unknown;

export interface EnvironmentClassCreateParams {
  configuration?: Array<Shared.FieldValue>;

  description?: string;

  displayName?: string;

  runnerId?: string;
}

export interface EnvironmentClassRetrieveParams {
  environmentClassId?: string;
}

export interface EnvironmentClassUpdateParams {
  description?: string | null;

  displayName?: string | null;

  enabled?: boolean | null;

  environmentClassId?: string;
}

export interface EnvironmentClassListParams extends EnvironmentClassesPageParams {
  /**
   * Body param:
   */
  filter?: EnvironmentClassListParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing environment
   * classes
   */
  pagination?: EnvironmentClassListParams.Pagination;
}

export namespace EnvironmentClassListParams {
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

export declare namespace EnvironmentClasses {
  export {
    type EnvironmentClassCreateResponse as EnvironmentClassCreateResponse,
    type EnvironmentClassRetrieveResponse as EnvironmentClassRetrieveResponse,
    type EnvironmentClassUpdateResponse as EnvironmentClassUpdateResponse,
    type EnvironmentClassCreateParams as EnvironmentClassCreateParams,
    type EnvironmentClassRetrieveParams as EnvironmentClassRetrieveParams,
    type EnvironmentClassUpdateParams as EnvironmentClassUpdateParams,
    type EnvironmentClassListParams as EnvironmentClassListParams,
  };
}

export { type EnvironmentClassesEnvironmentClassesPage };
