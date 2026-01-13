// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AgentsAPI from './agents';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import {
  AgentExecutionsPage,
  type AgentExecutionsPageParams,
  PagePromise,
  PromptsPage,
  type PromptsPageParams,
} from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Agents extends APIResource {
  /**
   * Creates a token for conversation access with a specific agent run.
   *
   * This method generates a temporary token that can be used to securely connect to
   * an ongoing agent conversation, for example in a web UI.
   *
   * ### Examples
   *
   * - Create a token to join an agent run conversation in a front-end application:
   *
   *   ```yaml
   *   agentExecutionId: "6fa1a3c7-fbb7-49d1-ba56-1890dc7c4c35"
   *   ```
   *
   * @example
   * ```ts
   * const response =
   *   await client.agents.createExecutionConversationToken({
   *     agentExecutionId:
   *       '6fa1a3c7-fbb7-49d1-ba56-1890dc7c4c35',
   *   });
   * ```
   */
  createExecutionConversationToken(
    body: AgentCreateExecutionConversationTokenParams,
    options?: RequestOptions,
  ): APIPromise<AgentCreateExecutionConversationTokenResponse> {
    return this._client.post('/gitpod.v1.AgentService/CreateAgentExecutionConversationToken', {
      body,
      ...options,
    });
  }

  /**
   * Creates a new prompt.
   *
   * Use this method to:
   *
   * - Define new prompts for templates or commands
   * - Set up organization-wide prompt libraries
   *
   * @example
   * ```ts
   * const response = await client.agents.createPrompt();
   * ```
   */
  createPrompt(
    body: AgentCreatePromptParams,
    options?: RequestOptions,
  ): APIPromise<AgentCreatePromptResponse> {
    return this._client.post('/gitpod.v1.AgentService/CreatePrompt', { body, ...options });
  }

  /**
   * Deletes an agent run.
   *
   * Use this method to:
   *
   * - Clean up agent runs that are no longer needed
   *
   * ### Examples
   *
   * - Delete an agent run by ID:
   *
   *   ```yaml
   *   agentExecutionId: "6fa1a3c7-fbb7-49d1-ba56-1890dc7c4c35"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.agents.deleteExecution({
   *   agentExecutionId: '6fa1a3c7-fbb7-49d1-ba56-1890dc7c4c35',
   * });
   * ```
   */
  deleteExecution(body: AgentDeleteExecutionParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.AgentService/DeleteAgentExecution', { body, ...options });
  }

  /**
   * Deletes a prompt.
   *
   * Use this method to:
   *
   * - Remove unused prompts
   *
   * @example
   * ```ts
   * const response = await client.agents.deletePrompt();
   * ```
   */
  deletePrompt(body: AgentDeletePromptParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.AgentService/DeletePrompt', { body, ...options });
  }

  /**
   * Lists all agent runs matching the specified filter.
   *
   * Use this method to track multiple agent runs and their associated resources.
   * Results are ordered by their creation time with the newest first.
   *
   * ### Examples
   *
   * - List agent runs by agent ID:
   *
   *   ```yaml
   *   filter:
   *     agentIds: ["b8a64cfa-43e2-4b9d-9fb3-07edc63f5971"]
   *   pagination:
   *     pageSize: 10
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const agentExecution of client.agents.listExecutions(
   *   {
   *     filter: {
   *       agentIds: ['b8a64cfa-43e2-4b9d-9fb3-07edc63f5971'],
   *     },
   *     pagination: { pageSize: 10 },
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  listExecutions(
    params: AgentListExecutionsParams,
    options?: RequestOptions,
  ): PagePromise<AgentExecutionsAgentExecutionsPage, AgentExecution> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.AgentService/ListAgentExecutions',
      AgentExecutionsPage<AgentExecution>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Lists all prompts matching the specified criteria.
   *
   * Use this method to find and browse prompts across your organization. Results are
   * ordered by their creation time with the newest first.
   *
   * ### Examples
   *
   * - List all prompts:
   *
   *   Retrieves all prompts with pagination.
   *
   *   ```yaml
   *   pagination:
   *     pageSize: 10
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const prompt of client.agents.listPrompts({
   *   pagination: { pageSize: 10 },
   * })) {
   *   // ...
   * }
   * ```
   */
  listPrompts(
    params: AgentListPromptsParams,
    options?: RequestOptions,
  ): PagePromise<PromptsPromptsPage, Prompt> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList('/gitpod.v1.AgentService/ListPrompts', PromptsPage<Prompt>, {
      query: { token, pageSize },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Gets details about a specific agent run, including its metadata, specification,
   * and status (phase, error messages, and usage statistics).
   *
   * Use this method to:
   *
   * - Monitor the run's progress
   * - Retrieve the agent's conversation URL
   * - Check if an agent run is actively producing output
   *
   * ### Examples
   *
   * - Get agent run details by ID:
   *
   *   ```yaml
   *   agentExecutionId: "6fa1a3c7-fbb7-49d1-ba56-1890dc7c4c35"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.agents.retrieveExecution({
   *   agentExecutionId: '6fa1a3c7-fbb7-49d1-ba56-1890dc7c4c35',
   * });
   * ```
   */
  retrieveExecution(
    body: AgentRetrieveExecutionParams,
    options?: RequestOptions,
  ): APIPromise<AgentRetrieveExecutionResponse> {
    return this._client.post('/gitpod.v1.AgentService/GetAgentExecution', { body, ...options });
  }

  /**
   * Gets details about a specific prompt including name, description, and prompt
   * content.
   *
   * Use this method to:
   *
   * - Retrieve prompt details for editing
   * - Get prompt content for execution
   *
   * ### Examples
   *
   * - Get prompt details:
   *
   *   ```yaml
   *   promptId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.agents.retrievePrompt({
   *   promptId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   * });
   * ```
   */
  retrievePrompt(
    body: AgentRetrievePromptParams,
    options?: RequestOptions,
  ): APIPromise<AgentRetrievePromptResponse> {
    return this._client.post('/gitpod.v1.AgentService/GetPrompt', { body, ...options });
  }

  /**
   * Sends user input to an active agent run.
   *
   * This method is used to provide interactive or conversation-based input to an
   * agent. The agent can respond with output blocks containing text, file changes,
   * or tool usage requests.
   *
   * ### Examples
   *
   * - Send a text message to an agent:
   *
   *   ```yaml
   *   agentExecutionId: "6fa1a3c7-fbb7-49d1-ba56-1890dc7c4c35"
   *   userInput:
   *     text:
   *       content: "Generate a report based on the latest logs."
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.agents.sendToExecution({
   *   agentExecutionId: '6fa1a3c7-fbb7-49d1-ba56-1890dc7c4c35',
   *   userInput: {
   *     text: {
   *       content:
   *         'Generate a report based on the latest logs.',
   *     },
   *   },
   * });
   * ```
   */
  sendToExecution(body: AgentSendToExecutionParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.AgentService/SendToAgentExecution', { body, ...options });
  }

  /**
   * Starts (or triggers) an agent run using a provided agent.
   *
   * Use this method to:
   *
   * - Launch an agent based on a known agent
   *
   * ### Examples
   *
   * - Start an agent with a project ID:
   *
   *   ```yaml
   *   agentId: "b8a64cfa-43e2-4b9d-9fb3-07edc63f5971"
   *   codeContext:
   *     projectId: "2d22e4eb-31da-467f-882c-27e21550992f"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.agents.startExecution({
   *   agentId: 'b8a64cfa-43e2-4b9d-9fb3-07edc63f5971',
   *   codeContext: {
   *     projectId: '2d22e4eb-31da-467f-882c-27e21550992f',
   *   },
   * });
   * ```
   */
  startExecution(
    body: AgentStartExecutionParams,
    options?: RequestOptions,
  ): APIPromise<AgentStartExecutionResponse> {
    return this._client.post('/gitpod.v1.AgentService/StartAgent', { body, ...options });
  }

  /**
   * Stops an active agent execution.
   *
   * Use this method to:
   *
   * - Stop an agent that is currently running
   * - Prevent further processing or resource usage
   *
   * ### Examples
   *
   * - Stop an agent execution by ID:
   *
   *   ```yaml
   *   agentExecutionId: "6fa1a3c7-fbb7-49d1-ba56-1890dc7c4c35"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.agents.stopExecution({
   *   agentExecutionId: '6fa1a3c7-fbb7-49d1-ba56-1890dc7c4c35',
   * });
   * ```
   */
  stopExecution(body: AgentStopExecutionParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.AgentService/StopAgentExecution', { body, ...options });
  }

  /**
   * Updates an existing prompt.
   *
   * Use this method to:
   *
   * - Modify prompt content or metadata
   * - Change prompt type (template/command)
   *
   * @example
   * ```ts
   * const response = await client.agents.updatePrompt();
   * ```
   */
  updatePrompt(
    body: AgentUpdatePromptParams,
    options?: RequestOptions,
  ): APIPromise<AgentUpdatePromptResponse> {
    return this._client.post('/gitpod.v1.AgentService/UpdatePrompt', { body, ...options });
  }
}

export type AgentExecutionsAgentExecutionsPage = AgentExecutionsPage<AgentExecution>;

export type PromptsPromptsPage = PromptsPage<Prompt>;

export interface AgentCodeContext {
  contextUrl?: AgentCodeContext.ContextURL;

  environmentId?: string;

  projectId?: string;

  /**
   * Pull request context - optional metadata about the PR being worked on This is
   * populated when the agent execution is triggered by a PR workflow or when
   * explicitly provided through the browser extension
   */
  pullRequest?: AgentCodeContext.PullRequest | null;
}

export namespace AgentCodeContext {
  export interface ContextURL {
    environmentClassId?: string;

    url?: string;
  }

  /**
   * Pull request context - optional metadata about the PR being worked on This is
   * populated when the agent execution is triggered by a PR workflow or when
   * explicitly provided through the browser extension
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
     * Source branch name (the branch being merged from)
     */
    fromBranch?: string;

    /**
     * Repository information
     */
    repository?: PullRequest.Repository;

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
}

export interface AgentExecution {
  /**
   * ID is a unique identifier of this agent run. No other agent run with the same
   * name must be managed by this agent manager
   */
  id?: string;

  /**
   * Metadata is data associated with this agent that's required for other parts of
   * Gitpod to function
   */
  metadata?: AgentExecution.Metadata;

  /**
   * Spec is the configuration of the agent that's required for the runner to start
   * the agent
   */
  spec?: AgentExecution.Spec;

  /**
   * Status is the current status of the agent
   */
  status?: AgentExecution.Status;
}

export namespace AgentExecution {
  /**
   * Metadata is data associated with this agent that's required for other parts of
   * Gitpod to function
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

    name?: string;

    /**
     * role is the role of the agent execution
     */
    role?:
      | 'AGENT_EXECUTION_ROLE_UNSPECIFIED'
      | 'AGENT_EXECUTION_ROLE_DEFAULT'
      | 'AGENT_EXECUTION_ROLE_WORKFLOW';

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

    /**
     * workflow_action_id is set when this agent execution was created as part of a
     * workflow. Used to correlate agent executions with their parent workflow
     * execution action.
     */
    workflowActionId?: string | null;
  }

  /**
   * Spec is the configuration of the agent that's required for the runner to start
   * the agent
   */
  export interface Spec {
    agentId?: string;

    codeContext?: AgentsAPI.AgentCodeContext;

    /**
     * desired_phase is the desired phase of the agent run
     */
    desiredPhase?:
      | 'PHASE_UNSPECIFIED'
      | 'PHASE_PENDING'
      | 'PHASE_RUNNING'
      | 'PHASE_WAITING_FOR_INPUT'
      | 'PHASE_STOPPED';

    limits?: Spec.Limits;

    /**
     * mode is the operational mode for this agent execution
     */
    mode?: AgentsAPI.AgentMode;

    session?: string;

    /**
     * version of the spec. The value of this field has no semantic meaning (e.g. don't
     * interpret it as as a timestamp), but it can be used to impose a partial order.
     * If a.spec_version < b.spec_version then a was the spec before b.
     */
    specVersion?: string;
  }

  export namespace Spec {
    export interface Limits {
      maxInputTokens?: string;

      maxIterations?: string;

      maxOutputTokens?: string;
    }
  }

  /**
   * Status is the current status of the agent
   */
  export interface Status {
    cachedCreationTokensUsed?: string;

    cachedInputTokensUsed?: string;

    contextWindowLength?: string;

    /**
     * conversation_url is the URL to the conversation (all messages exchanged between
     * the agent and the user) of the agent run.
     */
    conversationUrl?: string;

    /**
     * current_activity is the current activity description of the agent execution.
     */
    currentActivity?: string;

    /**
     * current_operation is the current operation of the agent execution.
     */
    currentOperation?: Status.CurrentOperation;

    /**
     * failure_message contains the reason the agent run failed to operate.
     */
    failureMessage?: string;

    /**
     * failure_reason contains a structured reason code for the failure.
     */
    failureReason?:
      | 'AGENT_EXECUTION_FAILURE_REASON_UNSPECIFIED'
      | 'AGENT_EXECUTION_FAILURE_REASON_ENVIRONMENT'
      | 'AGENT_EXECUTION_FAILURE_REASON_SERVICE'
      | 'AGENT_EXECUTION_FAILURE_REASON_LLM_INTEGRATION'
      | 'AGENT_EXECUTION_FAILURE_REASON_INTERNAL'
      | 'AGENT_EXECUTION_FAILURE_REASON_AGENT_EXECUTION';

    inputTokensUsed?: string;

    iterations?: string;

    /**
     * judgement is the judgement of the agent run produced by the judgement prompt.
     */
    judgement?: string;

    /**
     * outputs is a map of key-value pairs that can be set by the agent during
     * execution. Similar to task execution outputs, but with typed values for
     * structured data.
     */
    outputs?: { [key: string]: Status.Outputs };

    outputTokensUsed?: string;

    phase?:
      | 'PHASE_UNSPECIFIED'
      | 'PHASE_PENDING'
      | 'PHASE_RUNNING'
      | 'PHASE_WAITING_FOR_INPUT'
      | 'PHASE_STOPPED';

    session?: string;

    /**
     * version of the status. The value of this field has no semantic meaning (e.g.
     * don't interpret it as as a timestamp), but it can be used to impose a partial
     * order. If a.status_version < b.status_version then a was the status before b.
     */
    statusVersion?: string;

    /**
     * supported_model is the LLM model being used by the agent execution.
     */
    supportedModel?:
      | 'SUPPORTED_MODEL_UNSPECIFIED'
      | 'SUPPORTED_MODEL_SONNET_3_5'
      | 'SUPPORTED_MODEL_SONNET_3_7'
      | 'SUPPORTED_MODEL_SONNET_3_7_EXTENDED'
      | 'SUPPORTED_MODEL_SONNET_4'
      | 'SUPPORTED_MODEL_SONNET_4_EXTENDED'
      | 'SUPPORTED_MODEL_SONNET_4_5'
      | 'SUPPORTED_MODEL_SONNET_4_5_EXTENDED'
      | 'SUPPORTED_MODEL_OPUS_4'
      | 'SUPPORTED_MODEL_OPUS_4_EXTENDED'
      | 'SUPPORTED_MODEL_OPUS_4_5'
      | 'SUPPORTED_MODEL_OPUS_4_5_EXTENDED'
      | 'SUPPORTED_MODEL_OPENAI_4O'
      | 'SUPPORTED_MODEL_OPENAI_4O_MINI'
      | 'SUPPORTED_MODEL_OPENAI_O1'
      | 'SUPPORTED_MODEL_OPENAI_O1_MINI';

    /**
     * transcript_url is the URL to the LLM transcript (all messages exchanged between
     * the agent and the LLM) of the agent run.
     */
    transcriptUrl?: string;

    /**
     * used_environments is the list of environments that were used by the agent
     * execution.
     */
    usedEnvironments?: Array<Status.UsedEnvironment>;

    /**
     * warning_message contains warnings, e.g. when the LLM is overloaded.
     */
    warningMessage?: string;
  }

  export namespace Status {
    /**
     * current_operation is the current operation of the agent execution.
     */
    export interface CurrentOperation {
      llm?: CurrentOperation.Llm;

      /**
       * retries is the number of times the agent run has retried one or more steps
       */
      retries?: string;

      session?: string;

      toolUse?: CurrentOperation.ToolUse;
    }

    export namespace CurrentOperation {
      export interface Llm {
        complete?: boolean;
      }

      export interface ToolUse {
        complete?: boolean;

        toolName?: string;
      }
    }

    export interface Outputs {
      boolValue?: boolean;

      floatValue?: number;

      intValue?: string;

      stringValue?: string;
    }

    export interface UsedEnvironment {
      createdByAgent?: boolean;

      environmentId?: string;
    }
  }
}

/**
 * AgentMode defines the operational mode of an agent
 */
export type AgentMode = 'AGENT_MODE_UNSPECIFIED' | 'AGENT_MODE_EXECUTION' | 'AGENT_MODE_PLANNING';

export interface Prompt {
  id?: string;

  metadata?: PromptMetadata;

  spec?: PromptSpec;
}

export interface PromptMetadata {
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

  /**
   * creator is the identity of the prompt creator
   */
  creator?: Shared.Subject;

  /**
   * description is a description of what the prompt does
   */
  description?: string;

  /**
   * name is the human readable name of the prompt
   */
  name?: string;

  /**
   * organization_id is the ID of the organization that contains the prompt
   */
  organizationId?: string;

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

export interface PromptSpec {
  /**
   * command is the unique command string within the organization
   */
  command?: string;

  /**
   * is_command indicates if this prompt is a command
   */
  isCommand?: boolean;

  /**
   * is_skill indicates if this prompt is a skill (workflow instructions for agents)
   */
  isSkill?: boolean;

  /**
   * is_template indicates if this prompt is a template
   */
  isTemplate?: boolean;

  /**
   * prompt is the content of the prompt
   */
  prompt?: string;
}

export interface UserInputBlock {
  id?: string;

  /**
   * Timestamp when this block was created. Used for debugging and support bundles.
   */
  createdAt?: string;

  /**
   * ImageInput allows sending images to the agent. Media type is inferred from magic
   * bytes by the backend.
   */
  image?: UserInputBlock.Image;

  text?: UserInputBlock.Text;
}

export namespace UserInputBlock {
  /**
   * ImageInput allows sending images to the agent. Media type is inferred from magic
   * bytes by the backend.
   */
  export interface Image {
    /**
     * Raw image data (max 4MB). Supported formats: PNG, JPEG, WebP.
     */
    data?: string;
  }

  export interface Text {
    content?: string;
  }
}

export interface AgentCreateExecutionConversationTokenResponse {
  token?: string;
}

export interface AgentCreatePromptResponse {
  prompt?: Prompt;
}

export type AgentDeleteExecutionResponse = unknown;

export type AgentDeletePromptResponse = unknown;

export interface AgentRetrieveExecutionResponse {
  agentExecution?: AgentExecution;
}

export interface AgentRetrievePromptResponse {
  prompt?: Prompt;
}

export type AgentSendToExecutionResponse = unknown;

export interface AgentStartExecutionResponse {
  agentExecutionId?: string;
}

export type AgentStopExecutionResponse = unknown;

export interface AgentUpdatePromptResponse {
  prompt?: Prompt;
}

export interface AgentCreateExecutionConversationTokenParams {
  agentExecutionId?: string;
}

export interface AgentCreatePromptParams {
  command?: string;

  description?: string;

  isCommand?: boolean;

  isSkill?: boolean;

  isTemplate?: boolean;

  name?: string;

  prompt?: string;
}

export interface AgentDeleteExecutionParams {
  agentExecutionId?: string;
}

export interface AgentDeletePromptParams {
  promptId?: string;
}

export interface AgentListExecutionsParams extends AgentExecutionsPageParams {
  /**
   * Body param
   */
  filter?: AgentListExecutionsParams.Filter;

  /**
   * Body param
   */
  pagination?: AgentListExecutionsParams.Pagination;
}

export namespace AgentListExecutionsParams {
  export interface Filter {
    agentIds?: Array<string>;

    creatorIds?: Array<string>;

    environmentIds?: Array<string>;

    projectIds?: Array<string>;

    roles?: Array<
      'AGENT_EXECUTION_ROLE_UNSPECIFIED' | 'AGENT_EXECUTION_ROLE_DEFAULT' | 'AGENT_EXECUTION_ROLE_WORKFLOW'
    >;

    statusPhases?: Array<
      'PHASE_UNSPECIFIED' | 'PHASE_PENDING' | 'PHASE_RUNNING' | 'PHASE_WAITING_FOR_INPUT' | 'PHASE_STOPPED'
    >;
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

export interface AgentListPromptsParams extends PromptsPageParams {
  /**
   * Body param
   */
  filter?: AgentListPromptsParams.Filter;

  /**
   * Body param
   */
  pagination?: AgentListPromptsParams.Pagination;
}

export namespace AgentListPromptsParams {
  export interface Filter {
    command?: string;

    commandPrefix?: string;

    isCommand?: boolean;

    isSkill?: boolean;

    isTemplate?: boolean;
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

export interface AgentRetrieveExecutionParams {
  agentExecutionId?: string;
}

export interface AgentRetrievePromptParams {
  promptId?: string;
}

export interface AgentSendToExecutionParams {
  agentExecutionId?: string;

  userInput?: UserInputBlock;
}

export interface AgentStartExecutionParams {
  agentId?: string;

  codeContext?: AgentCodeContext;

  /**
   * mode specifies the operational mode for this agent execution If not specified,
   * defaults to AGENT_MODE_EXECUTION
   */
  mode?: AgentMode;

  name?: string;

  /**
   * workflow_action_id is an optional reference to the workflow execution action
   * that created this agent execution. Used for tracking and event correlation.
   */
  workflowActionId?: string | null;
}

export interface AgentStopExecutionParams {
  agentExecutionId?: string;
}

export interface AgentUpdatePromptParams {
  /**
   * Metadata updates
   */
  metadata?: AgentUpdatePromptParams.Metadata | null;

  /**
   * The ID of the prompt to update
   */
  promptId?: string;

  /**
   * Spec updates
   */
  spec?: AgentUpdatePromptParams.Spec | null;
}

export namespace AgentUpdatePromptParams {
  /**
   * Metadata updates
   */
  export interface Metadata {
    /**
     * A description of what the prompt does
     */
    description?: string | null;

    /**
     * The name of the prompt
     */
    name?: string | null;
  }

  /**
   * Spec updates
   */
  export interface Spec {
    /**
     * The command string (unique within organization)
     */
    command?: string | null;

    /**
     * Whether this prompt is a command
     */
    isCommand?: boolean | null;

    /**
     * Whether this prompt is a skill
     */
    isSkill?: boolean | null;

    /**
     * Whether this prompt is a template
     */
    isTemplate?: boolean | null;

    /**
     * The prompt content
     */
    prompt?: string | null;
  }
}

export declare namespace Agents {
  export {
    type AgentCodeContext as AgentCodeContext,
    type AgentExecution as AgentExecution,
    type AgentMode as AgentMode,
    type Prompt as Prompt,
    type PromptMetadata as PromptMetadata,
    type PromptSpec as PromptSpec,
    type UserInputBlock as UserInputBlock,
    type AgentCreateExecutionConversationTokenResponse as AgentCreateExecutionConversationTokenResponse,
    type AgentCreatePromptResponse as AgentCreatePromptResponse,
    type AgentDeleteExecutionResponse as AgentDeleteExecutionResponse,
    type AgentDeletePromptResponse as AgentDeletePromptResponse,
    type AgentRetrieveExecutionResponse as AgentRetrieveExecutionResponse,
    type AgentRetrievePromptResponse as AgentRetrievePromptResponse,
    type AgentSendToExecutionResponse as AgentSendToExecutionResponse,
    type AgentStartExecutionResponse as AgentStartExecutionResponse,
    type AgentStopExecutionResponse as AgentStopExecutionResponse,
    type AgentUpdatePromptResponse as AgentUpdatePromptResponse,
    type AgentExecutionsAgentExecutionsPage as AgentExecutionsAgentExecutionsPage,
    type PromptsPromptsPage as PromptsPromptsPage,
    type AgentCreateExecutionConversationTokenParams as AgentCreateExecutionConversationTokenParams,
    type AgentCreatePromptParams as AgentCreatePromptParams,
    type AgentDeleteExecutionParams as AgentDeleteExecutionParams,
    type AgentDeletePromptParams as AgentDeletePromptParams,
    type AgentListExecutionsParams as AgentListExecutionsParams,
    type AgentListPromptsParams as AgentListPromptsParams,
    type AgentRetrieveExecutionParams as AgentRetrieveExecutionParams,
    type AgentRetrievePromptParams as AgentRetrievePromptParams,
    type AgentSendToExecutionParams as AgentSendToExecutionParams,
    type AgentStartExecutionParams as AgentStartExecutionParams,
    type AgentStopExecutionParams as AgentStopExecutionParams,
    type AgentUpdatePromptParams as AgentUpdatePromptParams,
  };
}
