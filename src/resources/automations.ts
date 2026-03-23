// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AutomationsAPI from './automations';
import * as AgentsAPI from './agents';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import {
  OutputsPage,
  type OutputsPageParams,
  PagePromise,
  WorkflowExecutionActionsPage,
  type WorkflowExecutionActionsPageParams,
  WorkflowExecutionsPage,
  type WorkflowExecutionsPageParams,
  WorkflowsPage,
  type WorkflowsPageParams,
} from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Automations extends APIResource {
  /**
   * Creates a new workflow with specified configuration.
   *
   * Use this method to:
   *
   * - Set up automated workflows
   * - Configure workflow triggers
   * - Define workflow actions and steps
   * - Set execution limits and constraints
   *
   * @example
   * ```ts
   * const automation = await client.automations.create({
   *   action: { limits: {} },
   * });
   * ```
   */
  create(body: AutomationCreateParams, options?: RequestOptions): APIPromise<AutomationCreateResponse> {
    return this._client.post('/gitpod.v1.WorkflowService/CreateWorkflow', { body, ...options });
  }

  /**
   * Gets details about a specific workflow.
   *
   * Use this method to:
   *
   * - View workflow configuration
   * - Check workflow status
   * - Get workflow metadata
   *
   * ### Examples
   *
   * - Get workflow details:
   *
   *   Retrieves information about a specific workflow.
   *
   *   ```yaml
   *   workflowId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   ```
   *
   * @example
   * ```ts
   * const automation = await client.automations.retrieve({
   *   workflowId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   * });
   * ```
   */
  retrieve(body: AutomationRetrieveParams, options?: RequestOptions): APIPromise<AutomationRetrieveResponse> {
    return this._client.post('/gitpod.v1.WorkflowService/GetWorkflow', { body, ...options });
  }

  /**
   * Updates a workflow's configuration using full replacement semantics.
   *
   * Update Behavior:
   *
   * - All provided fields completely replace existing values
   * - Optional fields that are not provided remain unchanged
   * - Complex fields (triggers, action) are replaced entirely, not merged
   * - To remove optional fields, explicitly set them to empty/default values
   *
   * Use this method to:
   *
   * - Modify workflow settings
   * - Update triggers and actions
   * - Change execution limits
   * - Update workflow steps
   *
   * ### Examples
   *
   * - Update workflow name:
   *
   *   Changes the workflow's display name.
   *
   *   ```yaml
   *   workflowId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   name: "Updated Workflow Name"
   *   ```
   *
   * - Replace all triggers:
   *
   *   Completely replaces the workflow's trigger configuration.
   *
   *   ```yaml
   *   workflowId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   triggers:
   *     - manual: {}
   *       context:
   *         projects:
   *           projectIds: ["new-project-id"]
   *   ```
   *
   * - Update execution limits:
   *
   *   Completely replaces the workflow's action configuration.
   *
   *   ```yaml
   *   workflowId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   action:
   *     limits:
   *       maxParallel: 10
   *       maxTotal: 100
   *     steps:
   *       - task:
   *           command: "npm test"
   *   ```
   *
   * @example
   * ```ts
   * const automation = await client.automations.update({
   *   triggers: [
   *     {
   *       context: {
   *         projects: { projectIds: ['new-project-id'] },
   *       },
   *       manual: {},
   *     },
   *   ],
   *   workflowId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   * });
   * ```
   */
  update(body: AutomationUpdateParams, options?: RequestOptions): APIPromise<AutomationUpdateResponse> {
    return this._client.post('/gitpod.v1.WorkflowService/UpdateWorkflow', { body, ...options });
  }

  /**
   * ListWorkflows
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const workflow of client.automations.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: AutomationListParams,
    options?: RequestOptions,
  ): PagePromise<WorkflowsWorkflowsPage, Workflow> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList('/gitpod.v1.WorkflowService/ListWorkflows', WorkflowsPage<Workflow>, {
      query: { token, pageSize },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Deletes a workflow permanently.
   *
   * Use this method to:
   *
   * - Remove unused workflows
   * - Clean up test workflows
   * - Delete obsolete configurations
   *
   * ### Examples
   *
   * - Delete workflow:
   *
   *   Permanently removes a workflow.
   *
   *   ```yaml
   *   workflowId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   ```
   *
   * @example
   * ```ts
   * const automation = await client.automations.delete({
   *   workflowId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   * });
   * ```
   */
  delete(body: AutomationDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.WorkflowService/DeleteWorkflow', { body, ...options });
  }

  /**
   * Cancels a running workflow execution.
   *
   * Use this method to:
   *
   * - Stop long-running executions
   * - Cancel failed executions
   * - Manage resource usage
   *
   * ### Examples
   *
   * - Cancel execution:
   *
   *   Stops a running workflow execution.
   *
   *   ```yaml
   *   workflowExecutionId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.automations.cancelExecution({
   *   workflowExecutionId:
   *     'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   * });
   * ```
   */
  cancelExecution(body: AutomationCancelExecutionParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.WorkflowService/CancelWorkflowExecution', { body, ...options });
  }

  /**
   * Cancels a running workflow execution action.
   *
   * Use this method to:
   *
   * - Stop long-running actions
   * - Cancel failed actions
   * - Manage resource usage
   *
   * ### Examples
   *
   * - Cancel execution action:
   *
   *   Stops a running workflow execution action.
   *
   *   ```yaml
   *   workflowExecutionActionId: "a1b2c3d4-5e6f-7890-abcd-ef1234567890"
   *   ```
   *
   * @example
   * ```ts
   * const response =
   *   await client.automations.cancelExecutionAction({
   *     workflowExecutionActionId:
   *       'a1b2c3d4-5e6f-7890-abcd-ef1234567890',
   *   });
   * ```
   */
  cancelExecutionAction(
    body: AutomationCancelExecutionActionParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.WorkflowService/CancelWorkflowExecutionAction', {
      body,
      ...options,
    });
  }

  /**
   * Lists workflow execution actions with optional filtering.
   *
   * Use this method to:
   *
   * - Monitor individual action execution status
   * - Debug action failures
   * - Track resource usage per action
   *
   * ### Examples
   *
   * - List execution actions for workflow execution:
   *
   *   Shows all execution actions for a specific workflow execution.
   *
   *   ```yaml
   *   filter:
   *     workflowExecutionIds: ["d2c94c27-3b76-4a42-b88c-95a85e392c68"]
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const workflowExecutionAction of client.automations.listExecutionActions(
   *   {
   *     filter: {
   *       workflowExecutionIds: [
   *         'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *       ],
   *     },
   *     pagination: { pageSize: 20 },
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  listExecutionActions(
    params: AutomationListExecutionActionsParams,
    options?: RequestOptions,
  ): PagePromise<WorkflowExecutionActionsWorkflowExecutionActionsPage, WorkflowExecutionAction> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.WorkflowService/ListWorkflowExecutionActions',
      WorkflowExecutionActionsPage<WorkflowExecutionAction>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Lists outputs produced by workflow execution actions.
   *
   * Use this method to:
   *
   * - Retrieve test results, coverage metrics, or other structured data from
   *   executions
   * - Aggregate outputs across multiple workflow executions
   * - Build dashboards or reports from execution data
   *
   * ### Examples
   *
   * - List outputs for a workflow execution:
   *
   *   Retrieves all outputs produced by actions in the specified execution.
   *
   *   ```yaml
   *   filter:
   *     workflowExecutionIds: ["d2c94c27-3b76-4a42-b88c-95a85e392c68"]
   *   pagination:
   *     pageSize: 50
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const automationListExecutionOutputsResponse of client.automations.listExecutionOutputs(
   *   {
   *     filter: {
   *       workflowExecutionIds: [
   *         'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *       ],
   *     },
   *     pagination: { pageSize: 50 },
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  listExecutionOutputs(
    params: AutomationListExecutionOutputsParams,
    options?: RequestOptions,
  ): PagePromise<AutomationListExecutionOutputsResponsesOutputsPage, AutomationListExecutionOutputsResponse> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.WorkflowService/ListWorkflowExecutionOutputs',
      OutputsPage<AutomationListExecutionOutputsResponse>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Lists workflow executions with optional filtering.
   *
   * Use this method to:
   *
   * - Monitor workflow execution history
   * - Track execution status
   * - Debug workflow issues
   *
   * ### Examples
   *
   * - List executions for workflow:
   *
   *   Shows all executions for a specific workflow.
   *
   *   ```yaml
   *   filter:
   *     workflowIds: ["b0e12f6c-4c67-429d-a4a6-d9838b5da047"]
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const workflowExecution of client.automations.listExecutions(
   *   {
   *     filter: {
   *       workflowIds: ['b0e12f6c-4c67-429d-a4a6-d9838b5da047'],
   *     },
   *     pagination: { pageSize: 20 },
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  listExecutions(
    params: AutomationListExecutionsParams,
    options?: RequestOptions,
  ): PagePromise<WorkflowExecutionsWorkflowExecutionsPage, WorkflowExecution> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.WorkflowService/ListWorkflowExecutions',
      WorkflowExecutionsPage<WorkflowExecution>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Gets details about a specific workflow execution.
   *
   * Use this method to:
   *
   * - Check execution status
   * - View execution results
   * - Monitor execution progress
   *
   * ### Examples
   *
   * - Get execution details:
   *
   *   Retrieves information about a specific execution.
   *
   *   ```yaml
   *   workflowExecutionId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.automations.retrieveExecution(
   *   {
   *     workflowExecutionId:
   *       'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   },
   * );
   * ```
   */
  retrieveExecution(
    body: AutomationRetrieveExecutionParams,
    options?: RequestOptions,
  ): APIPromise<AutomationRetrieveExecutionResponse> {
    return this._client.post('/gitpod.v1.WorkflowService/GetWorkflowExecution', { body, ...options });
  }

  /**
   * Gets details about a specific workflow execution action.
   *
   * Use this method to:
   *
   * - Check execution action status
   * - View execution action results
   * - Monitor execution action progress
   *
   * ### Examples
   *
   * - Get execution action details:
   *
   *   Retrieves information about a specific execution action.
   *
   *   ```yaml
   *   workflowExecutionActionId: "a1b2c3d4-5e6f-7890-abcd-ef1234567890"
   *   ```
   *
   * @example
   * ```ts
   * const response =
   *   await client.automations.retrieveExecutionAction({
   *     workflowExecutionActionId:
   *       'a1b2c3d4-5e6f-7890-abcd-ef1234567890',
   *   });
   * ```
   */
  retrieveExecutionAction(
    body: AutomationRetrieveExecutionActionParams,
    options?: RequestOptions,
  ): APIPromise<AutomationRetrieveExecutionActionResponse> {
    return this._client.post('/gitpod.v1.WorkflowService/GetWorkflowExecutionAction', { body, ...options });
  }

  /**
   * Starts a workflow execution.
   *
   * Use this method to:
   *
   * - Start workflow execution on demand
   * - Test workflow configurations
   * - Run workflows outside of automatic triggers
   *
   * ### Examples
   *
   * - Start workflow:
   *
   *   Starts a workflow execution manually.
   *
   *   ```yaml
   *   workflowId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.automations.startExecution({
   *   workflowId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   * });
   * ```
   */
  startExecution(
    body: AutomationStartExecutionParams,
    options?: RequestOptions,
  ): APIPromise<AutomationStartExecutionResponse> {
    return this._client.post('/gitpod.v1.WorkflowService/StartWorkflow', { body, ...options });
  }
}

export type WorkflowsWorkflowsPage = WorkflowsPage<Workflow>;

export type WorkflowExecutionActionsWorkflowExecutionActionsPage =
  WorkflowExecutionActionsPage<WorkflowExecutionAction>;

export type AutomationListExecutionOutputsResponsesOutputsPage =
  OutputsPage<AutomationListExecutionOutputsResponse>;

export type WorkflowExecutionsWorkflowExecutionsPage = WorkflowExecutionsPage<WorkflowExecution>;

/**
 * Workflow represents a workflow configuration.
 */
export interface Workflow {
  id?: string;

  /**
   * WorkflowMetadata contains workflow metadata.
   */
  metadata?: Workflow.Metadata;

  spec?: Workflow.Spec;

  /**
   * Webhook URL for triggering this workflow via HTTP POST Format:
   * {base_url}/workflows/{workflow_id}/webhooks
   */
  webhookUrl?: string;
}

export namespace Workflow {
  /**
   * WorkflowMetadata contains workflow metadata.
   */
  export interface Metadata {
    /**
     * A Timestamp represents a point in time independent of any time zone or local
     * calendar, encoded as a count of seconds and fractions of seconds at nanosecond
     * resolution. The count is relative to an epoch at UTC midnight on January 1,
     * 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar
     * backwards to year one.
     *
     * All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
     * second table is needed for interpretation, using a
     * [24-hour linear smear](https://developers.google.com/time/smear).
     *
     * The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
     * restricting to that range, we ensure that we can convert to and from
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
     *
     * # Examples
     *
     * Example 1: Compute Timestamp from POSIX `time()`.
     *
     *      Timestamp timestamp;
     *      timestamp.set_seconds(time(NULL));
     *      timestamp.set_nanos(0);
     *
     * Example 2: Compute Timestamp from POSIX `gettimeofday()`.
     *
     *      struct timeval tv;
     *      gettimeofday(&tv, NULL);
     *
     *      Timestamp timestamp;
     *      timestamp.set_seconds(tv.tv_sec);
     *      timestamp.set_nanos(tv.tv_usec * 1000);
     *
     * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
     *
     *      FILETIME ft;
     *      GetSystemTimeAsFileTime(&ft);
     *      UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;
     *
     *      // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
     *      // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
     *      Timestamp timestamp;
     *      timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
     *      timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
     *
     * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.
     *
     *      long millis = System.currentTimeMillis();
     *
     *      Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
     *          .setNanos((int) ((millis % 1000) * 1000000)).build();
     *
     * Example 5: Compute Timestamp from Java `Instant.now()`.
     *
     *      Instant now = Instant.now();
     *
     *      Timestamp timestamp =
     *          Timestamp.newBuilder().setSeconds(now.getEpochSecond())
     *              .setNanos(now.getNano()).build();
     *
     * Example 6: Compute Timestamp from current time in Python.
     *
     *      timestamp = Timestamp()
     *      timestamp.GetCurrentTime()
     *
     * # JSON Mapping
     *
     * In JSON format, the Timestamp type is encoded as a string in the
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format is
     * "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z" where {year} is always
     * expressed using four digits while {month}, {day}, {hour}, {min}, and {sec} are
     * zero-padded to two digits each. The fractional seconds, which can go up to 9
     * digits (i.e. up to 1 nanosecond resolution), are optional. The "Z" suffix
     * indicates the timezone ("UTC"); the timezone is required. A proto3 JSON
     * serializer should always use UTC (as indicated by "Z") when printing the
     * Timestamp type and a proto3 JSON parser should be able to accept both UTC and
     * other timezones (as indicated by an offset).
     *
     * For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past 01:30 UTC on
     * January 15, 2017.
     *
     * In JavaScript, one can convert a Date object to this format using the standard
     * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
     * method. In Python, a standard `datetime.datetime` object can be converted to
     * this format using
     * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with the
     * time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use the
     * Joda Time's
     * [`ISODateTimeFormat.dateTime()`](<http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()>)
     * to obtain a formatter capable of generating timestamps in this format.
     */
    createdAt?: string;

    creator?: Shared.Subject;

    description?: string;

    executor?: Shared.Subject;

    name?: string;

    /**
     * A Timestamp represents a point in time independent of any time zone or local
     * calendar, encoded as a count of seconds and fractions of seconds at nanosecond
     * resolution. The count is relative to an epoch at UTC midnight on January 1,
     * 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar
     * backwards to year one.
     *
     * All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
     * second table is needed for interpretation, using a
     * [24-hour linear smear](https://developers.google.com/time/smear).
     *
     * The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
     * restricting to that range, we ensure that we can convert to and from
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
     *
     * # Examples
     *
     * Example 1: Compute Timestamp from POSIX `time()`.
     *
     *      Timestamp timestamp;
     *      timestamp.set_seconds(time(NULL));
     *      timestamp.set_nanos(0);
     *
     * Example 2: Compute Timestamp from POSIX `gettimeofday()`.
     *
     *      struct timeval tv;
     *      gettimeofday(&tv, NULL);
     *
     *      Timestamp timestamp;
     *      timestamp.set_seconds(tv.tv_sec);
     *      timestamp.set_nanos(tv.tv_usec * 1000);
     *
     * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
     *
     *      FILETIME ft;
     *      GetSystemTimeAsFileTime(&ft);
     *      UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;
     *
     *      // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
     *      // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
     *      Timestamp timestamp;
     *      timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
     *      timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
     *
     * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.
     *
     *      long millis = System.currentTimeMillis();
     *
     *      Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
     *          .setNanos((int) ((millis % 1000) * 1000000)).build();
     *
     * Example 5: Compute Timestamp from Java `Instant.now()`.
     *
     *      Instant now = Instant.now();
     *
     *      Timestamp timestamp =
     *          Timestamp.newBuilder().setSeconds(now.getEpochSecond())
     *              .setNanos(now.getNano()).build();
     *
     * Example 6: Compute Timestamp from current time in Python.
     *
     *      timestamp = Timestamp()
     *      timestamp.GetCurrentTime()
     *
     * # JSON Mapping
     *
     * In JSON format, the Timestamp type is encoded as a string in the
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format is
     * "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z" where {year} is always
     * expressed using four digits while {month}, {day}, {hour}, {min}, and {sec} are
     * zero-padded to two digits each. The fractional seconds, which can go up to 9
     * digits (i.e. up to 1 nanosecond resolution), are optional. The "Z" suffix
     * indicates the timezone ("UTC"); the timezone is required. A proto3 JSON
     * serializer should always use UTC (as indicated by "Z") when printing the
     * Timestamp type and a proto3 JSON parser should be able to accept both UTC and
     * other timezones (as indicated by an offset).
     *
     * For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past 01:30 UTC on
     * January 15, 2017.
     *
     * In JavaScript, one can convert a Date object to this format using the standard
     * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
     * method. In Python, a standard `datetime.datetime` object can be converted to
     * this format using
     * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with the
     * time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use the
     * Joda Time's
     * [`ISODateTimeFormat.dateTime()`](<http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()>)
     * to obtain a formatter capable of generating timestamps in this format.
     */
    updatedAt?: string;
  }

  export interface Spec {
    /**
     * WorkflowAction defines the actions to be executed in a workflow.
     */
    action?: AutomationsAPI.WorkflowAction;

    /**
     * WorkflowAction defines the actions to be executed in a workflow.
     */
    report?: AutomationsAPI.WorkflowAction;

    triggers?: Array<AutomationsAPI.WorkflowTrigger>;
  }
}

/**
 * WorkflowAction defines the actions to be executed in a workflow.
 */
export interface WorkflowAction {
  /**
   * Limits defines execution limits for workflow actions. Concurrent actions limit
   * cannot exceed total actions limit:
   *
   * ```
   * this.max_parallel <= this.max_total
   * ```
   */
  limits: WorkflowAction.Limits;

  /**
   * Automation must have between 1 and 50 steps:
   *
   * ```
   * size(this) >= 1 && size(this) <= 50
   * ```
   */
  steps?: Array<WorkflowStep>;
}

export namespace WorkflowAction {
  /**
   * Limits defines execution limits for workflow actions. Concurrent actions limit
   * cannot exceed total actions limit:
   *
   * ```
   * this.max_parallel <= this.max_total
   * ```
   */
  export interface Limits {
    /**
     * Maximum parallel actions must be between 1 and 25:
     *
     * ```
     * this >= 1 && this <= 25
     * ```
     */
    maxParallel?: number;

    /**
     * Maximum total actions must be between 1 and 100:
     *
     * ```
     * this >= 1 && this <= 100
     * ```
     */
    maxTotal?: number;

    /**
     * PerExecution defines limits per execution action.
     */
    perExecution?: Limits.PerExecution;
  }

  export namespace Limits {
    /**
     * PerExecution defines limits per execution action.
     */
    export interface PerExecution {
      /**
       * Maximum time allowed for a single execution action. Use standard duration format
       * (e.g., "30m" for 30 minutes, "2h" for 2 hours).
       */
      maxTime?: string;
    }
  }
}

/**
 * WorkflowExecution represents a workflow execution instance.
 */
export interface WorkflowExecution {
  id?: string;

  /**
   * WorkflowExecutionMetadata contains workflow execution metadata.
   */
  metadata?: WorkflowExecution.Metadata;

  /**
   * WorkflowExecutionSpec contains the specification used for this execution.
   */
  spec?: WorkflowExecution.Spec;

  /**
   * WorkflowExecutionStatus contains the current status of a workflow execution.
   */
  status?: WorkflowExecution.Status;
}

export namespace WorkflowExecution {
  /**
   * WorkflowExecutionMetadata contains workflow execution metadata.
   */
  export interface Metadata {
    creator?: Shared.Subject;

    executor?: Shared.Subject;

    /**
     * A Timestamp represents a point in time independent of any time zone or local
     * calendar, encoded as a count of seconds and fractions of seconds at nanosecond
     * resolution. The count is relative to an epoch at UTC midnight on January 1,
     * 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar
     * backwards to year one.
     *
     * All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
     * second table is needed for interpretation, using a
     * [24-hour linear smear](https://developers.google.com/time/smear).
     *
     * The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
     * restricting to that range, we ensure that we can convert to and from
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
     *
     * # Examples
     *
     * Example 1: Compute Timestamp from POSIX `time()`.
     *
     *      Timestamp timestamp;
     *      timestamp.set_seconds(time(NULL));
     *      timestamp.set_nanos(0);
     *
     * Example 2: Compute Timestamp from POSIX `gettimeofday()`.
     *
     *      struct timeval tv;
     *      gettimeofday(&tv, NULL);
     *
     *      Timestamp timestamp;
     *      timestamp.set_seconds(tv.tv_sec);
     *      timestamp.set_nanos(tv.tv_usec * 1000);
     *
     * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
     *
     *      FILETIME ft;
     *      GetSystemTimeAsFileTime(&ft);
     *      UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;
     *
     *      // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
     *      // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
     *      Timestamp timestamp;
     *      timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
     *      timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
     *
     * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.
     *
     *      long millis = System.currentTimeMillis();
     *
     *      Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
     *          .setNanos((int) ((millis % 1000) * 1000000)).build();
     *
     * Example 5: Compute Timestamp from Java `Instant.now()`.
     *
     *      Instant now = Instant.now();
     *
     *      Timestamp timestamp =
     *          Timestamp.newBuilder().setSeconds(now.getEpochSecond())
     *              .setNanos(now.getNano()).build();
     *
     * Example 6: Compute Timestamp from current time in Python.
     *
     *      timestamp = Timestamp()
     *      timestamp.GetCurrentTime()
     *
     * # JSON Mapping
     *
     * In JSON format, the Timestamp type is encoded as a string in the
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format is
     * "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z" where {year} is always
     * expressed using four digits while {month}, {day}, {hour}, {min}, and {sec} are
     * zero-padded to two digits each. The fractional seconds, which can go up to 9
     * digits (i.e. up to 1 nanosecond resolution), are optional. The "Z" suffix
     * indicates the timezone ("UTC"); the timezone is required. A proto3 JSON
     * serializer should always use UTC (as indicated by "Z") when printing the
     * Timestamp type and a proto3 JSON parser should be able to accept both UTC and
     * other timezones (as indicated by an offset).
     *
     * For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past 01:30 UTC on
     * January 15, 2017.
     *
     * In JavaScript, one can convert a Date object to this format using the standard
     * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
     * method. In Python, a standard `datetime.datetime` object can be converted to
     * this format using
     * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with the
     * time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use the
     * Joda Time's
     * [`ISODateTimeFormat.dateTime()`](<http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()>)
     * to obtain a formatter capable of generating timestamps in this format.
     */
    finishedAt?: string;

    /**
     * A Timestamp represents a point in time independent of any time zone or local
     * calendar, encoded as a count of seconds and fractions of seconds at nanosecond
     * resolution. The count is relative to an epoch at UTC midnight on January 1,
     * 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar
     * backwards to year one.
     *
     * All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
     * second table is needed for interpretation, using a
     * [24-hour linear smear](https://developers.google.com/time/smear).
     *
     * The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
     * restricting to that range, we ensure that we can convert to and from
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
     *
     * # Examples
     *
     * Example 1: Compute Timestamp from POSIX `time()`.
     *
     *      Timestamp timestamp;
     *      timestamp.set_seconds(time(NULL));
     *      timestamp.set_nanos(0);
     *
     * Example 2: Compute Timestamp from POSIX `gettimeofday()`.
     *
     *      struct timeval tv;
     *      gettimeofday(&tv, NULL);
     *
     *      Timestamp timestamp;
     *      timestamp.set_seconds(tv.tv_sec);
     *      timestamp.set_nanos(tv.tv_usec * 1000);
     *
     * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
     *
     *      FILETIME ft;
     *      GetSystemTimeAsFileTime(&ft);
     *      UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;
     *
     *      // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
     *      // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
     *      Timestamp timestamp;
     *      timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
     *      timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
     *
     * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.
     *
     *      long millis = System.currentTimeMillis();
     *
     *      Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
     *          .setNanos((int) ((millis % 1000) * 1000000)).build();
     *
     * Example 5: Compute Timestamp from Java `Instant.now()`.
     *
     *      Instant now = Instant.now();
     *
     *      Timestamp timestamp =
     *          Timestamp.newBuilder().setSeconds(now.getEpochSecond())
     *              .setNanos(now.getNano()).build();
     *
     * Example 6: Compute Timestamp from current time in Python.
     *
     *      timestamp = Timestamp()
     *      timestamp.GetCurrentTime()
     *
     * # JSON Mapping
     *
     * In JSON format, the Timestamp type is encoded as a string in the
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format is
     * "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z" where {year} is always
     * expressed using four digits while {month}, {day}, {hour}, {min}, and {sec} are
     * zero-padded to two digits each. The fractional seconds, which can go up to 9
     * digits (i.e. up to 1 nanosecond resolution), are optional. The "Z" suffix
     * indicates the timezone ("UTC"); the timezone is required. A proto3 JSON
     * serializer should always use UTC (as indicated by "Z") when printing the
     * Timestamp type and a proto3 JSON parser should be able to accept both UTC and
     * other timezones (as indicated by an offset).
     *
     * For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past 01:30 UTC on
     * January 15, 2017.
     *
     * In JavaScript, one can convert a Date object to this format using the standard
     * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
     * method. In Python, a standard `datetime.datetime` object can be converted to
     * this format using
     * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with the
     * time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use the
     * Joda Time's
     * [`ISODateTimeFormat.dateTime()`](<http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()>)
     * to obtain a formatter capable of generating timestamps in this format.
     */
    startedAt?: string;

    workflowId?: string;
  }

  /**
   * WorkflowExecutionSpec contains the specification used for this execution.
   */
  export interface Spec {
    /**
     * WorkflowAction defines the actions to be executed in a workflow.
     */
    action?: AutomationsAPI.WorkflowAction;

    /**
     * WorkflowAction defines the actions to be executed in a workflow.
     */
    report?: AutomationsAPI.WorkflowAction;

    /**
     * WorkflowExecutionTrigger represents a workflow execution trigger instance.
     */
    trigger?: Spec.Trigger;
  }

  export namespace Spec {
    /**
     * WorkflowExecutionTrigger represents a workflow execution trigger instance.
     */
    export interface Trigger {
      /**
       * Context from the workflow trigger - copied at execution time for immutability.
       * This allows the reconciler to create actions without fetching the workflow
       * definition.
       */
      context: AutomationsAPI.WorkflowTriggerContext;

      /**
       * Manual trigger - empty message since no additional data needed
       */
      manual?: unknown;

      /**
       * PullRequest represents pull request metadata from source control systems. This
       * message is used across workflow triggers, executions, and agent contexts to
       * maintain consistent PR information throughout the system.
       */
      pullRequest?: Trigger.PullRequest;

      /**
       * Time trigger - just the timestamp when it was triggered
       */
      time?: Trigger.Time;
    }

    export namespace Trigger {
      /**
       * PullRequest represents pull request metadata from source control systems. This
       * message is used across workflow triggers, executions, and agent contexts to
       * maintain consistent PR information throughout the system.
       */
      export interface PullRequest {
        /**
         * Unique identifier from the source system (e.g., "123" for GitHub PR #123)
         */
        id?: string;

        /**
         * Author name as provided by the SCM system
         */
        author?: string;

        /**
         * Whether this is a draft pull request
         */
        draft?: boolean;

        /**
         * Source branch name (the branch being merged from)
         */
        fromBranch?: string;

        /**
         * Repository information
         */
        repository?: PullRequest.Repository;

        /**
         * Current state of the pull request
         */
        state?: Shared.State;

        /**
         * Pull request title
         */
        title?: string;

        /**
         * Target branch name (the branch being merged into)
         */
        toBranch?: string;

        /**
         * Pull request URL (e.g., "https://github.com/owner/repo/pull/123")
         */
        url?: string;
      }

      export namespace PullRequest {
        /**
         * Repository information
         */
        export interface Repository {
          cloneUrl?: string;

          host?: string;

          name?: string;

          owner?: string;
        }
      }

      /**
       * Time trigger - just the timestamp when it was triggered
       */
      export interface Time {
        /**
         * A Timestamp represents a point in time independent of any time zone or local
         * calendar, encoded as a count of seconds and fractions of seconds at nanosecond
         * resolution. The count is relative to an epoch at UTC midnight on January 1,
         * 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar
         * backwards to year one.
         *
         * All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
         * second table is needed for interpretation, using a
         * [24-hour linear smear](https://developers.google.com/time/smear).
         *
         * The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
         * restricting to that range, we ensure that we can convert to and from
         * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
         *
         * # Examples
         *
         * Example 1: Compute Timestamp from POSIX `time()`.
         *
         *      Timestamp timestamp;
         *      timestamp.set_seconds(time(NULL));
         *      timestamp.set_nanos(0);
         *
         * Example 2: Compute Timestamp from POSIX `gettimeofday()`.
         *
         *      struct timeval tv;
         *      gettimeofday(&tv, NULL);
         *
         *      Timestamp timestamp;
         *      timestamp.set_seconds(tv.tv_sec);
         *      timestamp.set_nanos(tv.tv_usec * 1000);
         *
         * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
         *
         *      FILETIME ft;
         *      GetSystemTimeAsFileTime(&ft);
         *      UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;
         *
         *      // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
         *      // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
         *      Timestamp timestamp;
         *      timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
         *      timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
         *
         * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.
         *
         *      long millis = System.currentTimeMillis();
         *
         *      Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
         *          .setNanos((int) ((millis % 1000) * 1000000)).build();
         *
         * Example 5: Compute Timestamp from Java `Instant.now()`.
         *
         *      Instant now = Instant.now();
         *
         *      Timestamp timestamp =
         *          Timestamp.newBuilder().setSeconds(now.getEpochSecond())
         *              .setNanos(now.getNano()).build();
         *
         * Example 6: Compute Timestamp from current time in Python.
         *
         *      timestamp = Timestamp()
         *      timestamp.GetCurrentTime()
         *
         * # JSON Mapping
         *
         * In JSON format, the Timestamp type is encoded as a string in the
         * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format is
         * "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z" where {year} is always
         * expressed using four digits while {month}, {day}, {hour}, {min}, and {sec} are
         * zero-padded to two digits each. The fractional seconds, which can go up to 9
         * digits (i.e. up to 1 nanosecond resolution), are optional. The "Z" suffix
         * indicates the timezone ("UTC"); the timezone is required. A proto3 JSON
         * serializer should always use UTC (as indicated by "Z") when printing the
         * Timestamp type and a proto3 JSON parser should be able to accept both UTC and
         * other timezones (as indicated by an offset).
         *
         * For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past 01:30 UTC on
         * January 15, 2017.
         *
         * In JavaScript, one can convert a Date object to this format using the standard
         * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
         * method. In Python, a standard `datetime.datetime` object can be converted to
         * this format using
         * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with the
         * time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use the
         * Joda Time's
         * [`ISODateTimeFormat.dateTime()`](<http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()>)
         * to obtain a formatter capable of generating timestamps in this format.
         */
        triggeredAt?: string;
      }
    }
  }

  /**
   * WorkflowExecutionStatus contains the current status of a workflow execution.
   */
  export interface Status {
    doneActionCount?: number;

    failedActionCount?: number;

    /**
     * Structured failures that caused the workflow execution to fail. Provides
     * detailed error codes, messages, and retry information.
     */
    failures?: Array<Status.Failure>;

    pendingActionCount?: number;

    phase?:
      | 'WORKFLOW_EXECUTION_PHASE_UNSPECIFIED'
      | 'WORKFLOW_EXECUTION_PHASE_PENDING'
      | 'WORKFLOW_EXECUTION_PHASE_RUNNING'
      | 'WORKFLOW_EXECUTION_PHASE_STOPPING'
      | 'WORKFLOW_EXECUTION_PHASE_STOPPED'
      | 'WORKFLOW_EXECUTION_PHASE_DELETING'
      | 'WORKFLOW_EXECUTION_PHASE_DELETED'
      | 'WORKFLOW_EXECUTION_PHASE_COMPLETED';

    runningActionCount?: number;

    stoppedActionCount?: number;

    /**
     * Structured warnings about the workflow execution. Provides detailed warning
     * codes and messages.
     */
    warnings?: Array<Status.Warning>;
  }

  export namespace Status {
    /**
     * WorkflowError provides structured error information for workflow failures. This
     * enables the reconciler to make informed retry decisions and the frontend to
     * display actionable error messages.
     */
    export interface Failure {
      /**
       * Error code identifying the type of error.
       */
      code?:
        | 'WORKFLOW_ERROR_CODE_UNSPECIFIED'
        | 'WORKFLOW_ERROR_CODE_ENVIRONMENT_ERROR'
        | 'WORKFLOW_ERROR_CODE_AGENT_ERROR';

      /**
       * Human-readable error message.
       */
      message?: string;

      /**
       * Additional metadata about the error. Common keys include:
       *
       * - environment_id: ID of the environment
       * - task_id: ID of the task
       * - service_id: ID of the service
       * - workflow_id: ID of the workflow
       * - workflow_execution_id: ID of the workflow execution
       */
      meta?: { [key: string]: string };

      /**
       * Reason explaining why the error occurred. Examples: "not_found", "stopped",
       * "deleted", "creation_failed", "start_failed"
       */
      reason?: string;

      /**
       * Retry configuration. If not set, the error is considered non-retriable.
       */
      retry?: Failure.Retry | null;
    }

    export namespace Failure {
      /**
       * Retry configuration. If not set, the error is considered non-retriable.
       */
      export interface Retry {
        /**
         * Whether the error is retriable.
         */
        retriable?: boolean;

        /**
         * Suggested duration to wait before retrying. Only meaningful when retriable is
         * true.
         */
        retryAfter?: string;
      }
    }

    /**
     * WorkflowError provides structured error information for workflow failures. This
     * enables the reconciler to make informed retry decisions and the frontend to
     * display actionable error messages.
     */
    export interface Warning {
      /**
       * Error code identifying the type of error.
       */
      code?:
        | 'WORKFLOW_ERROR_CODE_UNSPECIFIED'
        | 'WORKFLOW_ERROR_CODE_ENVIRONMENT_ERROR'
        | 'WORKFLOW_ERROR_CODE_AGENT_ERROR';

      /**
       * Human-readable error message.
       */
      message?: string;

      /**
       * Additional metadata about the error. Common keys include:
       *
       * - environment_id: ID of the environment
       * - task_id: ID of the task
       * - service_id: ID of the service
       * - workflow_id: ID of the workflow
       * - workflow_execution_id: ID of the workflow execution
       */
      meta?: { [key: string]: string };

      /**
       * Reason explaining why the error occurred. Examples: "not_found", "stopped",
       * "deleted", "creation_failed", "start_failed"
       */
      reason?: string;

      /**
       * Retry configuration. If not set, the error is considered non-retriable.
       */
      retry?: Warning.Retry | null;
    }

    export namespace Warning {
      /**
       * Retry configuration. If not set, the error is considered non-retriable.
       */
      export interface Retry {
        /**
         * Whether the error is retriable.
         */
        retriable?: boolean;

        /**
         * Suggested duration to wait before retrying. Only meaningful when retriable is
         * true.
         */
        retryAfter?: string;
      }
    }
  }
}

/**
 * WorkflowExecutionAction represents a workflow execution action instance.
 */
export interface WorkflowExecutionAction {
  id?: string;

  /**
   * WorkflowExecutionActionMetadata contains workflow execution action metadata.
   */
  metadata?: WorkflowExecutionAction.Metadata;

  /**
   * WorkflowExecutionActionSpec contains the specification for this execution
   * action.
   */
  spec?: WorkflowExecutionAction.Spec;

  /**
   * WorkflowExecutionActionStatus contains the current status of a workflow
   * execution action.
   */
  status?: WorkflowExecutionAction.Status;
}

export namespace WorkflowExecutionAction {
  /**
   * WorkflowExecutionActionMetadata contains workflow execution action metadata.
   */
  export interface Metadata {
    /**
     * Human-readable name for this action based on its context. Examples:
     * "gitpod-io/gitpod-next" for repository context, "My Project" for project
     * context. Will be empty string for actions created before this field was added.
     */
    actionName?: string;

    /**
     * A Timestamp represents a point in time independent of any time zone or local
     * calendar, encoded as a count of seconds and fractions of seconds at nanosecond
     * resolution. The count is relative to an epoch at UTC midnight on January 1,
     * 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar
     * backwards to year one.
     *
     * All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
     * second table is needed for interpretation, using a
     * [24-hour linear smear](https://developers.google.com/time/smear).
     *
     * The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
     * restricting to that range, we ensure that we can convert to and from
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
     *
     * # Examples
     *
     * Example 1: Compute Timestamp from POSIX `time()`.
     *
     *      Timestamp timestamp;
     *      timestamp.set_seconds(time(NULL));
     *      timestamp.set_nanos(0);
     *
     * Example 2: Compute Timestamp from POSIX `gettimeofday()`.
     *
     *      struct timeval tv;
     *      gettimeofday(&tv, NULL);
     *
     *      Timestamp timestamp;
     *      timestamp.set_seconds(tv.tv_sec);
     *      timestamp.set_nanos(tv.tv_usec * 1000);
     *
     * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
     *
     *      FILETIME ft;
     *      GetSystemTimeAsFileTime(&ft);
     *      UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;
     *
     *      // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
     *      // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
     *      Timestamp timestamp;
     *      timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
     *      timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
     *
     * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.
     *
     *      long millis = System.currentTimeMillis();
     *
     *      Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
     *          .setNanos((int) ((millis % 1000) * 1000000)).build();
     *
     * Example 5: Compute Timestamp from Java `Instant.now()`.
     *
     *      Instant now = Instant.now();
     *
     *      Timestamp timestamp =
     *          Timestamp.newBuilder().setSeconds(now.getEpochSecond())
     *              .setNanos(now.getNano()).build();
     *
     * Example 6: Compute Timestamp from current time in Python.
     *
     *      timestamp = Timestamp()
     *      timestamp.GetCurrentTime()
     *
     * # JSON Mapping
     *
     * In JSON format, the Timestamp type is encoded as a string in the
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format is
     * "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z" where {year} is always
     * expressed using four digits while {month}, {day}, {hour}, {min}, and {sec} are
     * zero-padded to two digits each. The fractional seconds, which can go up to 9
     * digits (i.e. up to 1 nanosecond resolution), are optional. The "Z" suffix
     * indicates the timezone ("UTC"); the timezone is required. A proto3 JSON
     * serializer should always use UTC (as indicated by "Z") when printing the
     * Timestamp type and a proto3 JSON parser should be able to accept both UTC and
     * other timezones (as indicated by an offset).
     *
     * For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past 01:30 UTC on
     * January 15, 2017.
     *
     * In JavaScript, one can convert a Date object to this format using the standard
     * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
     * method. In Python, a standard `datetime.datetime` object can be converted to
     * this format using
     * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with the
     * time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use the
     * Joda Time's
     * [`ISODateTimeFormat.dateTime()`](<http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()>)
     * to obtain a formatter capable of generating timestamps in this format.
     */
    finishedAt?: string;

    /**
     * A Timestamp represents a point in time independent of any time zone or local
     * calendar, encoded as a count of seconds and fractions of seconds at nanosecond
     * resolution. The count is relative to an epoch at UTC midnight on January 1,
     * 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar
     * backwards to year one.
     *
     * All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
     * second table is needed for interpretation, using a
     * [24-hour linear smear](https://developers.google.com/time/smear).
     *
     * The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
     * restricting to that range, we ensure that we can convert to and from
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
     *
     * # Examples
     *
     * Example 1: Compute Timestamp from POSIX `time()`.
     *
     *      Timestamp timestamp;
     *      timestamp.set_seconds(time(NULL));
     *      timestamp.set_nanos(0);
     *
     * Example 2: Compute Timestamp from POSIX `gettimeofday()`.
     *
     *      struct timeval tv;
     *      gettimeofday(&tv, NULL);
     *
     *      Timestamp timestamp;
     *      timestamp.set_seconds(tv.tv_sec);
     *      timestamp.set_nanos(tv.tv_usec * 1000);
     *
     * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
     *
     *      FILETIME ft;
     *      GetSystemTimeAsFileTime(&ft);
     *      UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;
     *
     *      // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
     *      // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
     *      Timestamp timestamp;
     *      timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
     *      timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
     *
     * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.
     *
     *      long millis = System.currentTimeMillis();
     *
     *      Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
     *          .setNanos((int) ((millis % 1000) * 1000000)).build();
     *
     * Example 5: Compute Timestamp from Java `Instant.now()`.
     *
     *      Instant now = Instant.now();
     *
     *      Timestamp timestamp =
     *          Timestamp.newBuilder().setSeconds(now.getEpochSecond())
     *              .setNanos(now.getNano()).build();
     *
     * Example 6: Compute Timestamp from current time in Python.
     *
     *      timestamp = Timestamp()
     *      timestamp.GetCurrentTime()
     *
     * # JSON Mapping
     *
     * In JSON format, the Timestamp type is encoded as a string in the
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format is
     * "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z" where {year} is always
     * expressed using four digits while {month}, {day}, {hour}, {min}, and {sec} are
     * zero-padded to two digits each. The fractional seconds, which can go up to 9
     * digits (i.e. up to 1 nanosecond resolution), are optional. The "Z" suffix
     * indicates the timezone ("UTC"); the timezone is required. A proto3 JSON
     * serializer should always use UTC (as indicated by "Z") when printing the
     * Timestamp type and a proto3 JSON parser should be able to accept both UTC and
     * other timezones (as indicated by an offset).
     *
     * For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past 01:30 UTC on
     * January 15, 2017.
     *
     * In JavaScript, one can convert a Date object to this format using the standard
     * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
     * method. In Python, a standard `datetime.datetime` object can be converted to
     * this format using
     * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with the
     * time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use the
     * Joda Time's
     * [`ISODateTimeFormat.dateTime()`](<http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()>)
     * to obtain a formatter capable of generating timestamps in this format.
     */
    startedAt?: string;

    workflowExecutionId?: string;

    workflowId?: string;
  }

  /**
   * WorkflowExecutionActionSpec contains the specification for this execution
   * action.
   */
  export interface Spec {
    /**
     * Context for the execution action - specifies where and how the action executes.
     * This is resolved from the workflow trigger context and contains the specific
     * project, repository, or agent context for this execution instance.
     */
    context?: AgentsAPI.AgentCodeContext;

    /**
     * PerExecution defines limits per execution action.
     */
    limits?: Spec.Limits;
  }

  export namespace Spec {
    /**
     * PerExecution defines limits per execution action.
     */
    export interface Limits {
      /**
       * Maximum time allowed for a single execution action. Use standard duration format
       * (e.g., "30m" for 30 minutes, "2h" for 2 hours).
       */
      maxTime?: string;
    }
  }

  /**
   * WorkflowExecutionActionStatus contains the current status of a workflow
   * execution action.
   */
  export interface Status {
    agentExecutionId?: string;

    environmentId?: string;

    /**
     * Structured failures that caused the workflow execution action to fail. Provides
     * detailed error codes, messages, and retry information.
     */
    failures?: Array<Status.Failure>;

    /**
     * WorkflowExecutionActionPhase defines the phases of workflow execution action.
     */
    phase?:
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_UNSPECIFIED'
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_PENDING'
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_RUNNING'
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_STOPPING'
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_STOPPED'
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_DELETING'
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_DELETED'
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_DONE';

    /**
     * Step-level progress tracking
     */
    stepStatuses?: Array<Status.StepStatus>;

    /**
     * Structured warnings about the workflow execution action. Provides detailed
     * warning codes and messages.
     */
    warnings?: Array<Status.Warning>;
  }

  export namespace Status {
    /**
     * WorkflowError provides structured error information for workflow failures. This
     * enables the reconciler to make informed retry decisions and the frontend to
     * display actionable error messages.
     */
    export interface Failure {
      /**
       * Error code identifying the type of error.
       */
      code?:
        | 'WORKFLOW_ERROR_CODE_UNSPECIFIED'
        | 'WORKFLOW_ERROR_CODE_ENVIRONMENT_ERROR'
        | 'WORKFLOW_ERROR_CODE_AGENT_ERROR';

      /**
       * Human-readable error message.
       */
      message?: string;

      /**
       * Additional metadata about the error. Common keys include:
       *
       * - environment_id: ID of the environment
       * - task_id: ID of the task
       * - service_id: ID of the service
       * - workflow_id: ID of the workflow
       * - workflow_execution_id: ID of the workflow execution
       */
      meta?: { [key: string]: string };

      /**
       * Reason explaining why the error occurred. Examples: "not_found", "stopped",
       * "deleted", "creation_failed", "start_failed"
       */
      reason?: string;

      /**
       * Retry configuration. If not set, the error is considered non-retriable.
       */
      retry?: Failure.Retry | null;
    }

    export namespace Failure {
      /**
       * Retry configuration. If not set, the error is considered non-retriable.
       */
      export interface Retry {
        /**
         * Whether the error is retriable.
         */
        retriable?: boolean;

        /**
         * Suggested duration to wait before retrying. Only meaningful when retriable is
         * true.
         */
        retryAfter?: string;
      }
    }

    /**
     * WorkflowExecutionActionStepStatus represents the status of a single step
     * execution.
     */
    export interface StepStatus {
      /**
       * Structured error that caused the step to fail. Provides detailed error code,
       * message, and retry information.
       */
      error?: StepStatus.Error;

      /**
       * A Timestamp represents a point in time independent of any time zone or local
       * calendar, encoded as a count of seconds and fractions of seconds at nanosecond
       * resolution. The count is relative to an epoch at UTC midnight on January 1,
       * 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar
       * backwards to year one.
       *
       * All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
       * second table is needed for interpretation, using a
       * [24-hour linear smear](https://developers.google.com/time/smear).
       *
       * The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
       * restricting to that range, we ensure that we can convert to and from
       * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
       *
       * # Examples
       *
       * Example 1: Compute Timestamp from POSIX `time()`.
       *
       *      Timestamp timestamp;
       *      timestamp.set_seconds(time(NULL));
       *      timestamp.set_nanos(0);
       *
       * Example 2: Compute Timestamp from POSIX `gettimeofday()`.
       *
       *      struct timeval tv;
       *      gettimeofday(&tv, NULL);
       *
       *      Timestamp timestamp;
       *      timestamp.set_seconds(tv.tv_sec);
       *      timestamp.set_nanos(tv.tv_usec * 1000);
       *
       * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
       *
       *      FILETIME ft;
       *      GetSystemTimeAsFileTime(&ft);
       *      UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;
       *
       *      // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
       *      // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
       *      Timestamp timestamp;
       *      timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
       *      timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
       *
       * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.
       *
       *      long millis = System.currentTimeMillis();
       *
       *      Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
       *          .setNanos((int) ((millis % 1000) * 1000000)).build();
       *
       * Example 5: Compute Timestamp from Java `Instant.now()`.
       *
       *      Instant now = Instant.now();
       *
       *      Timestamp timestamp =
       *          Timestamp.newBuilder().setSeconds(now.getEpochSecond())
       *              .setNanos(now.getNano()).build();
       *
       * Example 6: Compute Timestamp from current time in Python.
       *
       *      timestamp = Timestamp()
       *      timestamp.GetCurrentTime()
       *
       * # JSON Mapping
       *
       * In JSON format, the Timestamp type is encoded as a string in the
       * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format is
       * "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z" where {year} is always
       * expressed using four digits while {month}, {day}, {hour}, {min}, and {sec} are
       * zero-padded to two digits each. The fractional seconds, which can go up to 9
       * digits (i.e. up to 1 nanosecond resolution), are optional. The "Z" suffix
       * indicates the timezone ("UTC"); the timezone is required. A proto3 JSON
       * serializer should always use UTC (as indicated by "Z") when printing the
       * Timestamp type and a proto3 JSON parser should be able to accept both UTC and
       * other timezones (as indicated by an offset).
       *
       * For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past 01:30 UTC on
       * January 15, 2017.
       *
       * In JavaScript, one can convert a Date object to this format using the standard
       * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
       * method. In Python, a standard `datetime.datetime` object can be converted to
       * this format using
       * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with the
       * time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use the
       * Joda Time's
       * [`ISODateTimeFormat.dateTime()`](<http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()>)
       * to obtain a formatter capable of generating timestamps in this format.
       */
      finishedAt?: string;

      phase?:
        | 'STEP_PHASE_UNSPECIFIED'
        | 'STEP_PHASE_PENDING'
        | 'STEP_PHASE_RUNNING'
        | 'STEP_PHASE_DONE'
        | 'STEP_PHASE_FAILED'
        | 'STEP_PHASE_CANCELLED';

      /**
       * A Timestamp represents a point in time independent of any time zone or local
       * calendar, encoded as a count of seconds and fractions of seconds at nanosecond
       * resolution. The count is relative to an epoch at UTC midnight on January 1,
       * 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar
       * backwards to year one.
       *
       * All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
       * second table is needed for interpretation, using a
       * [24-hour linear smear](https://developers.google.com/time/smear).
       *
       * The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
       * restricting to that range, we ensure that we can convert to and from
       * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
       *
       * # Examples
       *
       * Example 1: Compute Timestamp from POSIX `time()`.
       *
       *      Timestamp timestamp;
       *      timestamp.set_seconds(time(NULL));
       *      timestamp.set_nanos(0);
       *
       * Example 2: Compute Timestamp from POSIX `gettimeofday()`.
       *
       *      struct timeval tv;
       *      gettimeofday(&tv, NULL);
       *
       *      Timestamp timestamp;
       *      timestamp.set_seconds(tv.tv_sec);
       *      timestamp.set_nanos(tv.tv_usec * 1000);
       *
       * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
       *
       *      FILETIME ft;
       *      GetSystemTimeAsFileTime(&ft);
       *      UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;
       *
       *      // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
       *      // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
       *      Timestamp timestamp;
       *      timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
       *      timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
       *
       * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.
       *
       *      long millis = System.currentTimeMillis();
       *
       *      Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
       *          .setNanos((int) ((millis % 1000) * 1000000)).build();
       *
       * Example 5: Compute Timestamp from Java `Instant.now()`.
       *
       *      Instant now = Instant.now();
       *
       *      Timestamp timestamp =
       *          Timestamp.newBuilder().setSeconds(now.getEpochSecond())
       *              .setNanos(now.getNano()).build();
       *
       * Example 6: Compute Timestamp from current time in Python.
       *
       *      timestamp = Timestamp()
       *      timestamp.GetCurrentTime()
       *
       * # JSON Mapping
       *
       * In JSON format, the Timestamp type is encoded as a string in the
       * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format is
       * "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z" where {year} is always
       * expressed using four digits while {month}, {day}, {hour}, {min}, and {sec} are
       * zero-padded to two digits each. The fractional seconds, which can go up to 9
       * digits (i.e. up to 1 nanosecond resolution), are optional. The "Z" suffix
       * indicates the timezone ("UTC"); the timezone is required. A proto3 JSON
       * serializer should always use UTC (as indicated by "Z") when printing the
       * Timestamp type and a proto3 JSON parser should be able to accept both UTC and
       * other timezones (as indicated by an offset).
       *
       * For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past 01:30 UTC on
       * January 15, 2017.
       *
       * In JavaScript, one can convert a Date object to this format using the standard
       * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
       * method. In Python, a standard `datetime.datetime` object can be converted to
       * this format using
       * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with the
       * time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use the
       * Joda Time's
       * [`ISODateTimeFormat.dateTime()`](<http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()>)
       * to obtain a formatter capable of generating timestamps in this format.
       */
      startedAt?: string;

      /**
       * The step definition captured at execution time for immutability. This ensures
       * the UI shows the correct step even if the workflow definition changes.
       */
      step?: AutomationsAPI.WorkflowStep;

      /**
       * Index of the step in the workflow action steps array
       */
      stepIndex?: number;
    }

    export namespace StepStatus {
      /**
       * Structured error that caused the step to fail. Provides detailed error code,
       * message, and retry information.
       */
      export interface Error {
        /**
         * Error code identifying the type of error.
         */
        code?:
          | 'WORKFLOW_ERROR_CODE_UNSPECIFIED'
          | 'WORKFLOW_ERROR_CODE_ENVIRONMENT_ERROR'
          | 'WORKFLOW_ERROR_CODE_AGENT_ERROR';

        /**
         * Human-readable error message.
         */
        message?: string;

        /**
         * Additional metadata about the error. Common keys include:
         *
         * - environment_id: ID of the environment
         * - task_id: ID of the task
         * - service_id: ID of the service
         * - workflow_id: ID of the workflow
         * - workflow_execution_id: ID of the workflow execution
         */
        meta?: { [key: string]: string };

        /**
         * Reason explaining why the error occurred. Examples: "not_found", "stopped",
         * "deleted", "creation_failed", "start_failed"
         */
        reason?: string;

        /**
         * Retry configuration. If not set, the error is considered non-retriable.
         */
        retry?: Error.Retry | null;
      }

      export namespace Error {
        /**
         * Retry configuration. If not set, the error is considered non-retriable.
         */
        export interface Retry {
          /**
           * Whether the error is retriable.
           */
          retriable?: boolean;

          /**
           * Suggested duration to wait before retrying. Only meaningful when retriable is
           * true.
           */
          retryAfter?: string;
        }
      }
    }

    /**
     * WorkflowError provides structured error information for workflow failures. This
     * enables the reconciler to make informed retry decisions and the frontend to
     * display actionable error messages.
     */
    export interface Warning {
      /**
       * Error code identifying the type of error.
       */
      code?:
        | 'WORKFLOW_ERROR_CODE_UNSPECIFIED'
        | 'WORKFLOW_ERROR_CODE_ENVIRONMENT_ERROR'
        | 'WORKFLOW_ERROR_CODE_AGENT_ERROR';

      /**
       * Human-readable error message.
       */
      message?: string;

      /**
       * Additional metadata about the error. Common keys include:
       *
       * - environment_id: ID of the environment
       * - task_id: ID of the task
       * - service_id: ID of the service
       * - workflow_id: ID of the workflow
       * - workflow_execution_id: ID of the workflow execution
       */
      meta?: { [key: string]: string };

      /**
       * Reason explaining why the error occurred. Examples: "not_found", "stopped",
       * "deleted", "creation_failed", "start_failed"
       */
      reason?: string;

      /**
       * Retry configuration. If not set, the error is considered non-retriable.
       */
      retry?: Warning.Retry | null;
    }

    export namespace Warning {
      /**
       * Retry configuration. If not set, the error is considered non-retriable.
       */
      export interface Retry {
        /**
         * Whether the error is retriable.
         */
        retriable?: boolean;

        /**
         * Suggested duration to wait before retrying. Only meaningful when retriable is
         * true.
         */
        retryAfter?: string;
      }
    }
  }
}

/**
 * WorkflowStep defines a single step in a workflow action.
 */
export interface WorkflowStep {
  /**
   * WorkflowAgentStep represents an agent step that executes with a prompt.
   */
  agent?: WorkflowStep.Agent;

  /**
   * WorkflowPullRequestStep represents a pull request creation step.
   */
  pullRequest?: WorkflowStep.PullRequest;

  report?: WorkflowStep.Report;

  /**
   * WorkflowTaskStep represents a task step that executes a command.
   */
  task?: WorkflowStep.Task;
}

export namespace WorkflowStep {
  /**
   * WorkflowAgentStep represents an agent step that executes with a prompt.
   */
  export interface Agent {
    /**
     * Prompt must be between 1 and 20,000 characters:
     *
     * ```
     * size(this) >= 1 && size(this) <= 20000
     * ```
     */
    prompt?: string;
  }

  /**
   * WorkflowPullRequestStep represents a pull request creation step.
   */
  export interface PullRequest {
    /**
     * Branch name must be between 1 and 255 characters:
     *
     * ```
     * size(this) >= 1 && size(this) <= 255
     * ```
     */
    branch?: string;

    /**
     * Description must be at most 20,000 characters:
     *
     * ```
     * size(this) <= 20000
     * ```
     */
    description?: string;

    draft?: boolean;

    /**
     * Title must be between 1 and 500 characters:
     *
     * ```
     * size(this) >= 1 && size(this) <= 500
     * ```
     */
    title?: string;
  }

  export interface Report {
    /**
     * Report must have at least one output:
     *
     * ```
     * size(this) >= 1
     * ```
     */
    outputs?: Array<Report.Output>;
  }

  export namespace Report {
    export interface Output {}
  }

  /**
   * WorkflowTaskStep represents a task step that executes a command.
   */
  export interface Task {
    /**
     * Command must be between 1 and 20,000 characters:
     *
     * ```
     * size(this) >= 1 && size(this) <= 20000
     * ```
     */
    command?: string;
  }
}

/**
 * WorkflowTrigger defines when a workflow should be executed.
 *
 * Each trigger type defines a specific condition that will cause the workflow to
 * execute:
 *
 * - Manual: Triggered explicitly by user action via StartWorkflow RPC
 * - Time: Triggered automatically based on cron schedule
 * - PullRequest: Triggered automatically when specified PR events occur
 *
 * Trigger Semantics:
 *
 * - Each trigger instance can create multiple workflow executions
 * - Multiple triggers of the same workflow can fire simultaneously
 * - Each trigger execution is independent and tracked separately
 * - Triggers are evaluated in the context specified by WorkflowTriggerContext
 */
export interface WorkflowTrigger {
  /**
   * WorkflowTriggerContext defines the context in which a workflow should run.
   *
   * Context determines where and how the workflow executes:
   *
   * - Projects: Execute in specific project environments
   * - Repositories: Execute in environments created from repository URLs
   * - Agent: Execute in agent-managed environments with custom prompts
   * - FromTrigger: Use context derived from the trigger event (PR-specific)
   *
   * Context Usage by Trigger Type:
   *
   * - Manual: Can use any context type
   * - Time: Typically uses Projects or Repositories context
   * - PullRequest: Can use any context, FromTrigger uses PR repository context
   */
  context: WorkflowTriggerContext;

  /**
   * Manual trigger - executed when StartWorkflow RPC is called. No additional
   * configuration needed.
   */
  manual?: unknown;

  /**
   * Pull request trigger - executed when specified PR events occur. Only triggers
   * for PRs in repositories matching the trigger context.
   */
  pullRequest?: WorkflowTrigger.PullRequest;

  /**
   * Time-based trigger - executed automatically based on cron schedule. Uses
   * standard cron expression format (minute hour day month weekday).
   */
  time?: WorkflowTrigger.Time;
}

export namespace WorkflowTrigger {
  /**
   * Pull request trigger - executed when specified PR events occur. Only triggers
   * for PRs in repositories matching the trigger context.
   */
  export interface PullRequest {
    events?: Array<
      | 'PULL_REQUEST_EVENT_UNSPECIFIED'
      | 'PULL_REQUEST_EVENT_OPENED'
      | 'PULL_REQUEST_EVENT_UPDATED'
      | 'PULL_REQUEST_EVENT_APPROVED'
      | 'PULL_REQUEST_EVENT_MERGED'
      | 'PULL_REQUEST_EVENT_CLOSED'
      | 'PULL_REQUEST_EVENT_READY_FOR_REVIEW'
    >;

    /**
     * webhook_id is the optional ID of a webhook that this trigger is bound to. When
     * set, the trigger will be activated when the webhook receives events. This allows
     * multiple workflows to share a single webhook endpoint.
     */
    webhookId?: string | null;
  }

  /**
   * Time-based trigger - executed automatically based on cron schedule. Uses
   * standard cron expression format (minute hour day month weekday).
   */
  export interface Time {
    /**
     * Cron expression must be between 1 and 100 characters:
     *
     * ```
     * size(this) >= 1 && size(this) <= 100
     * ```
     */
    cronExpression?: string;
  }
}

/**
 * WorkflowTriggerContext defines the context in which a workflow should run.
 *
 * Context determines where and how the workflow executes:
 *
 * - Projects: Execute in specific project environments
 * - Repositories: Execute in environments created from repository URLs
 * - Agent: Execute in agent-managed environments with custom prompts
 * - FromTrigger: Use context derived from the trigger event (PR-specific)
 *
 * Context Usage by Trigger Type:
 *
 * - Manual: Can use any context type
 * - Time: Typically uses Projects or Repositories context
 * - PullRequest: Can use any context, FromTrigger uses PR repository context
 */
export interface WorkflowTriggerContext {
  /**
   * Execute workflow in agent-managed environments. Agent receives the specified
   * prompt and manages execution context.
   */
  agent?: WorkflowTriggerContext.Agent;

  /**
   * Use context derived from the trigger event. Currently only supported for
   * PullRequest triggers - uses PR repository context.
   */
  fromTrigger?: unknown;

  /**
   * Execute workflow in specific project environments. Creates environments for each
   * specified project.
   */
  projects?: WorkflowTriggerContext.Projects;

  /**
   * Execute workflow in environments created from repository URLs. Supports both
   * explicit repository URLs and search patterns.
   */
  repositories?: WorkflowTriggerContext.Repositories;
}

export namespace WorkflowTriggerContext {
  /**
   * Execute workflow in agent-managed environments. Agent receives the specified
   * prompt and manages execution context.
   */
  export interface Agent {
    /**
     * Agent prompt must be between 1 and 20,000 characters:
     *
     * ```
     * size(this) >= 1 && size(this) <= 20000
     * ```
     */
    prompt?: string;
  }

  /**
   * Execute workflow in specific project environments. Creates environments for each
   * specified project.
   */
  export interface Projects {
    projectIds?: Array<string>;
  }

  /**
   * Execute workflow in environments created from repository URLs. Supports both
   * explicit repository URLs and search patterns.
   */
  export interface Repositories {
    environmentClassId?: string;

    /**
     * RepositorySelector defines how to select repositories for workflow execution.
     * Combines a search string with an SCM host to identify repositories.
     */
    repoSelector?: Repositories.RepoSelector;

    /**
     * RepositoryURLs contains a list of explicit repository URLs. Creates one action
     * per repository URL.
     */
    repositoryUrls?: Repositories.RepositoryURLs;
  }

  export namespace Repositories {
    /**
     * RepositorySelector defines how to select repositories for workflow execution.
     * Combines a search string with an SCM host to identify repositories.
     */
    export interface RepoSelector {
      /**
       * Search string to match repositories using SCM-specific search patterns. For
       * GitHub: supports GitHub search syntax (e.g., "org:gitpod-io language:go",
       * "user:octocat stars:>100") For GitLab: supports GitLab search syntax See SCM
       * provider documentation for supported search patterns.
       */
      repoSearchString?: string;

      /**
       * SCM host where the search should be performed (e.g., "github.com", "gitlab.com")
       */
      scmHost?: string;
    }

    /**
     * RepositoryURLs contains a list of explicit repository URLs. Creates one action
     * per repository URL.
     */
    export interface RepositoryURLs {
      repoUrls?: Array<string>;
    }
  }
}

export interface AutomationCreateResponse {
  /**
   * Workflow represents a workflow configuration.
   */
  workflow?: Workflow;
}

export interface AutomationRetrieveResponse {
  /**
   * Workflow represents a workflow configuration.
   */
  workflow?: Workflow;
}

export interface AutomationUpdateResponse {
  /**
   * Workflow represents a workflow configuration.
   */
  workflow?: Workflow;
}

export type AutomationDeleteResponse = unknown;

export type AutomationCancelExecutionResponse = unknown;

export type AutomationCancelExecutionActionResponse = unknown;

export interface AutomationListExecutionOutputsResponse {
  actionId?: string;

  values?: { [key: string]: AutomationListExecutionOutputsResponse.Values };
}

export namespace AutomationListExecutionOutputsResponse {
  export interface Values {
    boolValue?: boolean;

    floatValue?: number;

    intValue?: string;

    stringValue?: string;
  }
}

export interface AutomationRetrieveExecutionResponse {
  /**
   * WorkflowExecution represents a workflow execution instance.
   */
  workflowExecution?: WorkflowExecution;
}

export interface AutomationRetrieveExecutionActionResponse {
  /**
   * WorkflowExecutionAction represents a workflow execution action instance.
   */
  workflowExecutionAction?: WorkflowExecutionAction;
}

export interface AutomationStartExecutionResponse {
  /**
   * WorkflowExecution represents a workflow execution instance.
   */
  workflowExecution?: WorkflowExecution;
}

export interface AutomationCreateParams {
  /**
   * WorkflowAction defines the actions to be executed in a workflow.
   */
  action: WorkflowAction;

  /**
   * Description must be at most 500 characters:
   *
   * ```
   * size(this) <= 500
   * ```
   */
  description?: string;

  /**
   * Optional executor for the workflow. If not provided, defaults to the creator.
   * Must be either the caller themselves or a service account.
   */
  executor?: Shared.Subject | null;

  /**
   * Name must be between 1 and 80 characters:
   *
   * ```
   * size(this) >= 1 && size(this) <= 80
   * ```
   */
  name?: string;

  /**
   * WorkflowAction defines the actions to be executed in a workflow.
   */
  report?: WorkflowAction;

  /**
   * Automation must have between 1 and 10 triggers:
   *
   * ```
   * size(this) >= 1 && size(this) <= 10
   * ```
   */
  triggers?: Array<WorkflowTrigger>;
}

export interface AutomationRetrieveParams {
  workflowId?: string;
}

export interface AutomationUpdateParams {
  /**
   * WorkflowAction defines the actions to be executed in a workflow.
   */
  action?: WorkflowAction | null;

  /**
   * Description must be at most 500 characters:
   *
   * ```
   * size(this) <= 500
   * ```
   */
  description?: string | null;

  executor?: Shared.Subject | null;

  /**
   * Name must be between 1 and 80 characters:
   *
   * ```
   * size(this) >= 1 && size(this) <= 80
   * ```
   */
  name?: string | null;

  /**
   * WorkflowAction defines the actions to be executed in a workflow.
   */
  report?: WorkflowAction | null;

  /**
   * Automation can have at most 10 triggers:
   *
   * ```
   * size(this) <= 10
   * ```
   */
  triggers?: Array<WorkflowTrigger>;

  workflowId?: string;
}

export interface AutomationListParams extends WorkflowsPageParams {
  /**
   * Body param
   */
  filter?: AutomationListParams.Filter;

  /**
   * Body param
   */
  pagination?: AutomationListParams.Pagination;
}

export namespace AutomationListParams {
  export interface Filter {
    /**
     * creator_ids filters workflows by creator user IDs
     */
    creatorIds?: Array<string>;

    /**
     * has_failed_execution_since filters workflows that have at least one failed
     * execution with create_time >= the specified timestamp. A failed execution is one
     * that is COMPLETED with failed_action_count > 0, or STOPPED with
     * failed_action_count > 0 or a non-empty failure_message. This filter is mutually
     * exclusive with status_phases.
     */
    hasFailedExecutionSince?: string;

    /**
     * search performs case-insensitive search across workflow name, description, and
     * ID
     */
    search?: string;

    /**
     * status_phases filters workflows by the phase of their latest execution. Only
     * workflows whose most recent execution matches one of the specified phases are
     * returned.
     */
    statusPhases?: Array<
      | 'WORKFLOW_EXECUTION_PHASE_UNSPECIFIED'
      | 'WORKFLOW_EXECUTION_PHASE_PENDING'
      | 'WORKFLOW_EXECUTION_PHASE_RUNNING'
      | 'WORKFLOW_EXECUTION_PHASE_STOPPING'
      | 'WORKFLOW_EXECUTION_PHASE_STOPPED'
      | 'WORKFLOW_EXECUTION_PHASE_DELETING'
      | 'WORKFLOW_EXECUTION_PHASE_DELETED'
      | 'WORKFLOW_EXECUTION_PHASE_COMPLETED'
    >;

    workflowIds?: Array<string>;
  }

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

export interface AutomationDeleteParams {
  /**
   * force indicates whether to immediately delete the workflow and all related
   * resources. When true, performs cascading deletion of:
   *
   * - All workflow executions
   * - All workflow execution actions
   * - All environments created by workflow actions
   * - All agent executions created by workflow actions
   * - The workflow itself When false (default), marks workflow executions for
   *   deletion and relies on background reconciliation to clean up resources.
   */
  force?: boolean;

  workflowId?: string;
}

export interface AutomationCancelExecutionParams {
  workflowExecutionId?: string;
}

export interface AutomationCancelExecutionActionParams {
  workflowExecutionActionId?: string;
}

export interface AutomationListExecutionActionsParams extends WorkflowExecutionActionsPageParams {
  /**
   * Body param
   */
  filter?: AutomationListExecutionActionsParams.Filter;

  /**
   * Body param
   */
  pagination?: AutomationListExecutionActionsParams.Pagination;
}

export namespace AutomationListExecutionActionsParams {
  export interface Filter {
    phases?: Array<
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_UNSPECIFIED'
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_PENDING'
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_RUNNING'
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_STOPPING'
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_STOPPED'
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_DELETING'
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_DELETED'
      | 'WORKFLOW_EXECUTION_ACTION_PHASE_DONE'
    >;

    workflowExecutionActionIds?: Array<string>;

    workflowExecutionIds?: Array<string>;

    workflowIds?: Array<string>;
  }

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

export interface AutomationListExecutionOutputsParams extends OutputsPageParams {
  /**
   * Body param
   */
  filter?: AutomationListExecutionOutputsParams.Filter;

  /**
   * Body param
   */
  pagination?: AutomationListExecutionOutputsParams.Pagination;
}

export namespace AutomationListExecutionOutputsParams {
  export interface Filter {
    workflowExecutionIds?: Array<string>;
  }

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

export interface AutomationListExecutionsParams extends WorkflowExecutionsPageParams {
  /**
   * Body param
   */
  filter?: AutomationListExecutionsParams.Filter;

  /**
   * Body param
   */
  pagination?: AutomationListExecutionsParams.Pagination;

  /**
   * Body param: sort specifies the order of results. When unspecified, results are
   * sorted by operational priority (running first, then failed, then completed, then
   * others). Supported sort fields: startedAt, finishedAt, createdAt.
   */
  sort?: Shared.Sort;
}

export namespace AutomationListExecutionsParams {
  export interface Filter {
    hasFailedActions?: boolean | null;

    /**
     * search performs case-insensitive search across workflow execution ID and trigger
     * type
     */
    search?: string;

    statusPhases?: Array<
      | 'WORKFLOW_EXECUTION_PHASE_UNSPECIFIED'
      | 'WORKFLOW_EXECUTION_PHASE_PENDING'
      | 'WORKFLOW_EXECUTION_PHASE_RUNNING'
      | 'WORKFLOW_EXECUTION_PHASE_STOPPING'
      | 'WORKFLOW_EXECUTION_PHASE_STOPPED'
      | 'WORKFLOW_EXECUTION_PHASE_DELETING'
      | 'WORKFLOW_EXECUTION_PHASE_DELETED'
      | 'WORKFLOW_EXECUTION_PHASE_COMPLETED'
    >;

    workflowExecutionIds?: Array<string>;

    workflowIds?: Array<string>;
  }

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

export interface AutomationRetrieveExecutionParams {
  workflowExecutionId?: string;
}

export interface AutomationRetrieveExecutionActionParams {
  workflowExecutionActionId?: string;
}

export interface AutomationStartExecutionParams {
  /**
   * Optional context override for the execution. When provided, replaces the
   * workflow's default trigger context. User must have appropriate permissions on
   * the overridden resources. Supports Projects, Repositories, and Agent context
   * types. FromTrigger context type is not supported for manual overrides.
   */
  contextOverride?: WorkflowTriggerContext | null;

  /**
   * Parameters to substitute into workflow steps using Go template syntax. Use
   * {{ .Parameters.key_name }} in templatable fields (task.command, agent.prompt,
   * pull*request.title/description/branch, trigger context agent.prompt). Keys must
   * match pattern ^[a-zA-Z*][a-zA-Z0-9_]\*$ Maximum 10 parameters allowed. Empty map
   * is treated as no parameters provided.
   */
  parameters?: { [key: string]: string };

  workflowId?: string;
}

export declare namespace Automations {
  export {
    type Workflow as Workflow,
    type WorkflowAction as WorkflowAction,
    type WorkflowExecution as WorkflowExecution,
    type WorkflowExecutionAction as WorkflowExecutionAction,
    type WorkflowStep as WorkflowStep,
    type WorkflowTrigger as WorkflowTrigger,
    type WorkflowTriggerContext as WorkflowTriggerContext,
    type AutomationCreateResponse as AutomationCreateResponse,
    type AutomationRetrieveResponse as AutomationRetrieveResponse,
    type AutomationUpdateResponse as AutomationUpdateResponse,
    type AutomationDeleteResponse as AutomationDeleteResponse,
    type AutomationCancelExecutionResponse as AutomationCancelExecutionResponse,
    type AutomationCancelExecutionActionResponse as AutomationCancelExecutionActionResponse,
    type AutomationListExecutionOutputsResponse as AutomationListExecutionOutputsResponse,
    type AutomationRetrieveExecutionResponse as AutomationRetrieveExecutionResponse,
    type AutomationRetrieveExecutionActionResponse as AutomationRetrieveExecutionActionResponse,
    type AutomationStartExecutionResponse as AutomationStartExecutionResponse,
    type WorkflowsWorkflowsPage as WorkflowsWorkflowsPage,
    type WorkflowExecutionActionsWorkflowExecutionActionsPage as WorkflowExecutionActionsWorkflowExecutionActionsPage,
    type AutomationListExecutionOutputsResponsesOutputsPage as AutomationListExecutionOutputsResponsesOutputsPage,
    type WorkflowExecutionsWorkflowExecutionsPage as WorkflowExecutionsWorkflowExecutionsPage,
    type AutomationCreateParams as AutomationCreateParams,
    type AutomationRetrieveParams as AutomationRetrieveParams,
    type AutomationUpdateParams as AutomationUpdateParams,
    type AutomationListParams as AutomationListParams,
    type AutomationDeleteParams as AutomationDeleteParams,
    type AutomationCancelExecutionParams as AutomationCancelExecutionParams,
    type AutomationCancelExecutionActionParams as AutomationCancelExecutionActionParams,
    type AutomationListExecutionActionsParams as AutomationListExecutionActionsParams,
    type AutomationListExecutionOutputsParams as AutomationListExecutionOutputsParams,
    type AutomationListExecutionsParams as AutomationListExecutionsParams,
    type AutomationRetrieveExecutionParams as AutomationRetrieveExecutionParams,
    type AutomationRetrieveExecutionActionParams as AutomationRetrieveExecutionActionParams,
    type AutomationStartExecutionParams as AutomationStartExecutionParams,
  };
}
