// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { TaskExecutionsTaskExecutionsPage } from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, TaskExecutionsPage, type TaskExecutionsPageParams } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';

export class Executions extends APIResource {
  /**
   * Gets details about a specific task execution.
   *
   * Use this method to:
   *
   * - Monitor execution progress
   * - View execution logs
   * - Check execution status
   * - Debug failed executions
   *
   * ### Examples
   *
   * - Get execution details:
   *
   *   Retrieves information about a specific task execution.
   *
   *   ```yaml
   *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   */
  retrieve(body: ExecutionRetrieveParams, options?: RequestOptions): APIPromise<ExecutionRetrieveResponse> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/GetTaskExecution', {
      body,
      ...options,
    });
  }

  /**
   * Lists executions of automation tasks.
   *
   * Use this method to:
   *
   * - View task execution history
   * - Monitor running tasks
   * - Track task completion status
   *
   * ### Examples
   *
   * - List all executions:
   *
   *   Shows execution history for all tasks.
   *
   *   ```yaml
   *   filter:
   *     environmentIds: ["07e03a28-65a5-4d98-b532-8ea67b188048"]
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * - Filter by phase:
   *
   *   Lists executions in specific phases.
   *
   *   ```yaml
   *   filter:
   *     phases: ["TASK_EXECUTION_PHASE_RUNNING", "TASK_EXECUTION_PHASE_FAILED"]
   *   pagination:
   *     pageSize: 20
   *   ```
   */
  list(
    params: ExecutionListParams,
    options?: RequestOptions,
  ): PagePromise<TaskExecutionsTaskExecutionsPage, Shared.TaskExecution> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.EnvironmentAutomationService/ListTaskExecutions',
      TaskExecutionsPage<Shared.TaskExecution>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Stops a running task execution.
   *
   * Use this method to:
   *
   * - Cancel long-running tasks
   * - Stop failed executions
   * - Interrupt task processing
   *
   * ### Examples
   *
   * - Stop execution:
   *
   *   Stops a running task execution.
   *
   *   ```yaml
   *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   */
  stop(body: ExecutionStopParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/StopTaskExecution', {
      body,
      ...options,
    });
  }
}

export interface ExecutionRetrieveResponse {
  taskExecution: Shared.TaskExecution;
}

export type ExecutionStopResponse = unknown;

export interface ExecutionRetrieveParams {
  id?: string;
}

export interface ExecutionListParams extends TaskExecutionsPageParams {
  /**
   * Body param: filter contains the filter options for listing task runs
   */
  filter?: ExecutionListParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing task runs
   */
  pagination?: ExecutionListParams.Pagination;
}

export namespace ExecutionListParams {
  /**
   * filter contains the filter options for listing task runs
   */
  export interface Filter {
    /**
     * environment_ids filters the response to only task runs of these environments
     */
    environmentIds?: Array<string>;

    /**
     * phases filters the response to only task runs in these phases
     */
    phases?: Array<Shared.TaskExecutionPhase>;

    /**
     * task_ids filters the response to only task runs of these tasks
     */
    taskIds?: Array<string>;

    /**
     * task_references filters the response to only task runs with this reference
     */
    taskReferences?: Array<string>;
  }

  /**
   * pagination contains the pagination options for listing task runs
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

export interface ExecutionStopParams {
  id?: string;
}

export declare namespace Executions {
  export {
    type ExecutionRetrieveResponse as ExecutionRetrieveResponse,
    type ExecutionStopResponse as ExecutionStopResponse,
    type ExecutionRetrieveParams as ExecutionRetrieveParams,
    type ExecutionListParams as ExecutionListParams,
    type ExecutionStopParams as ExecutionStopParams,
  };
}

export { type TaskExecutionsTaskExecutionsPage };
