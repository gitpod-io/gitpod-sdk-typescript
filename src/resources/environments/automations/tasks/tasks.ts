// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Shared from '../../../shared';
import { TasksTasksPage } from '../../../shared';
import * as ExecutionsAPI from './executions';
import {
  ExecutionListParams,
  ExecutionRetrieveParams,
  ExecutionRetrieveResponse,
  ExecutionStopParams,
  ExecutionStopResponse,
  Executions,
} from './executions';
import { APIPromise } from '../../../../api-promise';
import { PagePromise, TasksPage, type TasksPageParams } from '../../../../pagination';
import { RequestOptions } from '../../../../internal/request-options';

export class Tasks extends APIResource {
  executions: ExecutionsAPI.Executions = new ExecutionsAPI.Executions(this._client);

  /**
   * CreateTask
   */
  create(body: TaskCreateParams, options?: RequestOptions): APIPromise<TaskCreateResponse> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/CreateTask', { body, ...options });
  }

  /**
   * GetTask
   */
  retrieve(body: TaskRetrieveParams, options?: RequestOptions): APIPromise<TaskRetrieveResponse> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/GetTask', { body, ...options });
  }

  /**
   * UpdateTask
   */
  update(body: TaskUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/UpdateTask', { body, ...options });
  }

  /**
   * ListTasks
   */
  list(params: TaskListParams, options?: RequestOptions): PagePromise<TasksTasksPage, Shared.Task> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.EnvironmentAutomationService/ListTasks',
      TasksPage<Shared.Task>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * DeleteTask
   */
  delete(body: TaskDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/DeleteTask', { body, ...options });
  }

  /**
   * StartTask starts a task, i.e. creates a task execution. This call does not block
   * until the task is started; the task will be started asynchronously.
   */
  start(body: TaskStartParams, options?: RequestOptions): APIPromise<TaskStartResponse> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/StartTask', { body, ...options });
  }
}

export interface TaskCreateResponse {
  task?: Shared.Task;
}

export interface TaskRetrieveResponse {
  task?: Shared.Task;
}

export type TaskUpdateResponse = unknown;

export type TaskDeleteResponse = unknown;

export interface TaskStartResponse {
  taskExecution?: Shared.TaskExecution;
}

export interface TaskCreateParams {
  dependsOn?: Array<string>;

  environmentId?: string;

  metadata?: Shared.TaskMetadata;

  spec?: Shared.TaskSpec;
}

export interface TaskRetrieveParams {
  id?: string;
}

export interface TaskUpdateParams {
  id?: string;

  /**
   * dependencies specifies the IDs of the automations this task depends on.
   */
  dependsOn?: Array<string>;

  metadata?: TaskUpdateParams.Metadata;

  spec?: TaskUpdateParams.Spec;
}

export namespace TaskUpdateParams {
  export interface Metadata {
    description?: string | null;

    name?: string | null;

    triggeredBy?: Metadata.TriggeredBy | null;
  }

  export namespace Metadata {
    export interface TriggeredBy {
      trigger?: Array<Shared.AutomationTrigger>;
    }
  }

  export interface Spec {
    command?: string | null;

    runsOn?: Shared.RunsOn | null;
  }
}

export interface TaskListParams extends TasksPageParams {
  /**
   * Body param: filter contains the filter options for listing tasks
   */
  filter?: TaskListParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing tasks
   */
  pagination?: TaskListParams.Pagination;
}

export namespace TaskListParams {
  /**
   * filter contains the filter options for listing tasks
   */
  export interface Filter {
    /**
     * environment_ids filters the response to only tasks of these environments
     */
    environmentIds?: Array<string>;

    /**
     * references filters the response to only services with these references
     */
    references?: Array<string>;

    /**
     * task_ids filters the response to only tasks with these IDs
     */
    taskIds?: Array<string>;
  }

  /**
   * pagination contains the pagination options for listing tasks
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

export interface TaskDeleteParams {
  id?: string;
}

export interface TaskStartParams {
  id?: string;
}

Tasks.Executions = Executions;

export declare namespace Tasks {
  export {
    type TaskCreateResponse as TaskCreateResponse,
    type TaskRetrieveResponse as TaskRetrieveResponse,
    type TaskUpdateResponse as TaskUpdateResponse,
    type TaskDeleteResponse as TaskDeleteResponse,
    type TaskStartResponse as TaskStartResponse,
    type TaskCreateParams as TaskCreateParams,
    type TaskRetrieveParams as TaskRetrieveParams,
    type TaskUpdateParams as TaskUpdateParams,
    type TaskListParams as TaskListParams,
    type TaskDeleteParams as TaskDeleteParams,
    type TaskStartParams as TaskStartParams,
  };

  export {
    Executions as Executions,
    type ExecutionRetrieveResponse as ExecutionRetrieveResponse,
    type ExecutionStopResponse as ExecutionStopResponse,
    type ExecutionRetrieveParams as ExecutionRetrieveParams,
    type ExecutionListParams as ExecutionListParams,
    type ExecutionStopParams as ExecutionStopParams,
  };
}

export { type TasksTasksPage };
