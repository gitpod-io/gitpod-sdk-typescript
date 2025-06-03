// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
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
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, TasksPage, type TasksPageParams } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';

export class Tasks extends APIResource {
  executions: ExecutionsAPI.Executions = new ExecutionsAPI.Executions(this._client);

  /**
   * Creates a new automation task.
   *
   * Use this method to:
   *
   * - Define one-off or scheduled tasks
   * - Set up build or test automation
   * - Configure task dependencies
   * - Specify execution environments
   *
   * ### Examples
   *
   * - Create basic task:
   *
   *   Creates a simple build task.
   *
   *   ```yaml
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   metadata:
   *     reference: "build"
   *     name: "Build Project"
   *     description: "Builds the project artifacts"
   *     triggeredBy:
   *       - postEnvironmentStart: true
   *   spec:
   *     command: "npm run build"
   *   ```
   *
   * - Create task with dependencies:
   *
   *   Creates a task that depends on other services.
   *
   *   ```yaml
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   metadata:
   *     reference: "test"
   *     name: "Run Tests"
   *     description: "Runs the test suite"
   *   spec:
   *     command: "npm test"
   *   dependsOn: ["d2c94c27-3b76-4a42-b88c-95a85e392c68"]
   *   ```
   *
   * @example
   * ```ts
   * const task =
   *   await client.environments.automations.tasks.create({
   *     environmentId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   *     metadata: {
   *       description: 'Builds the project artifacts',
   *       name: 'Build Project',
   *       reference: 'build',
   *       triggeredBy: [{ postEnvironmentStart: true }],
   *     },
   *     spec: { command: 'npm run build' },
   *   });
   * ```
   */
  create(body: TaskCreateParams, options?: RequestOptions): APIPromise<TaskCreateResponse> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/CreateTask', { body, ...options });
  }

  /**
   * Gets details about a specific automation task.
   *
   * Use this method to:
   *
   * - Check task configuration
   * - View task dependencies
   * - Monitor task status
   *
   * ### Examples
   *
   * - Get task details:
   *
   *   Retrieves information about a specific task.
   *
   *   ```yaml
   *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const task =
   *   await client.environments.automations.tasks.retrieve({
   *     id: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   });
   * ```
   */
  retrieve(body: TaskRetrieveParams, options?: RequestOptions): APIPromise<TaskRetrieveResponse> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/GetTask', { body, ...options });
  }

  /**
   * Updates an automation task configuration.
   *
   * Use this method to:
   *
   * - Modify task commands
   * - Update task triggers
   * - Change dependencies
   * - Adjust execution settings
   *
   * ### Examples
   *
   * - Update command:
   *
   *   Changes the task's command.
   *
   *   ```yaml
   *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   spec:
   *     command: "npm run test:coverage"
   *   ```
   *
   * - Update triggers:
   *
   *   Modifies when the task runs.
   *
   *   ```yaml
   *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   metadata:
   *     triggeredBy:
   *       trigger:
   *         - postEnvironmentStart: true
   *   ```
   *
   * @example
   * ```ts
   * const task =
   *   await client.environments.automations.tasks.update({
   *     id: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *     spec: { command: 'npm run test:coverage' },
   *   });
   * ```
   */
  update(body: TaskUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/UpdateTask', { body, ...options });
  }

  /**
   * Lists automation tasks with optional filtering.
   *
   * Use this method to:
   *
   * - View all tasks in an environment
   * - Filter tasks by reference
   * - Monitor task status
   *
   * ### Examples
   *
   * - List environment tasks:
   *
   *   Shows all tasks for an environment.
   *
   *   ```yaml
   *   filter:
   *     environmentIds: ["07e03a28-65a5-4d98-b532-8ea67b188048"]
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * - Filter by reference:
   *
   *   Lists tasks matching specific references.
   *
   *   ```yaml
   *   filter:
   *     references: ["build", "test"]
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const task of client.environments.automations.tasks.list(
   *   {
   *     filter: { references: ['build', 'test'] },
   *     pagination: { pageSize: 20 },
   *   },
   * )) {
   *   // ...
   * }
   * ```
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
   * Deletes an automation task.
   *
   * Use this method to:
   *
   * - Remove unused tasks
   * - Clean up task configurations
   * - Delete obsolete automations
   *
   * ### Examples
   *
   * - Delete task:
   *
   *   Removes a task and its configuration.
   *
   *   ```yaml
   *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const task =
   *   await client.environments.automations.tasks.delete({
   *     id: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   });
   * ```
   */
  delete(body: TaskDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/DeleteTask', { body, ...options });
  }

  /**
   * Starts a task by creating a new task execution. This call does not block until
   * the task is started; the task will be started asynchronously.
   *
   * Use this method to:
   *
   * - Trigger task execution
   * - Run one-off tasks
   * - Start scheduled tasks immediately
   *
   * ### Examples
   *
   * - Start task:
   *
   *   Creates a new execution of a task.
   *
   *   ```yaml
   *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const response =
   *   await client.environments.automations.tasks.start({
   *     id: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   });
   * ```
   */
  start(body: TaskStartParams, options?: RequestOptions): APIPromise<TaskStartResponse> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/StartTask', { body, ...options });
  }
}

export interface TaskCreateResponse {
  task: Shared.Task;
}

export interface TaskRetrieveResponse {
  task: Shared.Task;
}

export type TaskUpdateResponse = unknown;

export type TaskDeleteResponse = unknown;

export interface TaskStartResponse {
  taskExecution: Shared.TaskExecution;
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
