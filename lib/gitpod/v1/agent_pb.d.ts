import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { ServiceMetadata, ServiceSpec } from "./environment_automation_pb";
import type { Subject } from "./identity_pb";
import type { SupportedModel } from "./model_pb";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/agent.proto.
 */
export declare const file_gitpod_v1_agent: GenFile;
/**
 * PullRequest represents pull request metadata from source control systems.
 * This message is used across workflow triggers, executions, and agent contexts
 * to maintain consistent PR information throughout the system.
 *
 * @generated from message gitpod.v1.PullRequest
 */
export type PullRequest = Message<"gitpod.v1.PullRequest"> & {
    /**
     * Unique identifier from the source system (e.g., "123" for GitHub PR #123)
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Pull request title
     *
     * @generated from field: string title = 2;
     */
    title: string;
    /**
     * Source branch name (the branch being merged from)
     *
     * @generated from field: string from_branch = 3;
     */
    fromBranch: string;
    /**
     * Target branch name (the branch being merged into)
     *
     * @generated from field: string to_branch = 4;
     */
    toBranch: string;
    /**
     * Pull request URL (e.g., "https://github.com/owner/repo/pull/123")
     *
     * @generated from field: string url = 5;
     */
    url: string;
    /**
     * Author name as provided by the SCM system
     *
     * @generated from field: string author = 6;
     */
    author: string;
    /**
     * @generated from field: gitpod.v1.PullRequest.Repository repository = 7;
     */
    repository?: PullRequest_Repository;
    /**
     * Whether this is a draft pull request
     *
     * @generated from field: bool draft = 8;
     */
    draft: boolean;
    /**
     * @generated from field: gitpod.v1.PullRequest.State state = 9;
     */
    state: PullRequest_State;
    /**
     * Current revision identity for the PR head commit. Used internally for
     * workflow execution deduplication and excluded from customer SDKs.
     *
     * @generated from field: string head_sha = 10;
     */
    headSha: string;
};
/**
 * Describes the message gitpod.v1.PullRequest.
 * Use `create(PullRequestSchema)` to create a new message.
 */
export declare const PullRequestSchema: GenMessage<PullRequest>;
/**
 * Repository information
 *
 * @generated from message gitpod.v1.PullRequest.Repository
 */
export type PullRequest_Repository = Message<"gitpod.v1.PullRequest.Repository"> & {
    /**
     * @generated from field: string clone_url = 1;
     */
    cloneUrl: string;
    /**
     * @generated from field: string host = 2;
     */
    host: string;
    /**
     * @generated from field: string owner = 3;
     */
    owner: string;
    /**
     * @generated from field: string name = 4;
     */
    name: string;
};
/**
 * Describes the message gitpod.v1.PullRequest.Repository.
 * Use `create(PullRequest_RepositorySchema)` to create a new message.
 */
export declare const PullRequest_RepositorySchema: GenMessage<PullRequest_Repository>;
/**
 * Current state of the pull request
 *
 * @generated from enum gitpod.v1.PullRequest.State
 */
export declare enum PullRequest_State {
    /**
     * @generated from enum value: STATE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: STATE_OPEN = 1;
     */
    OPEN = 1,
    /**
     * @generated from enum value: STATE_CLOSED = 2;
     */
    CLOSED = 2,
    /**
     * @generated from enum value: STATE_MERGED = 3;
     */
    MERGED = 3
}
/**
 * Describes the enum gitpod.v1.PullRequest.State.
 */
export declare const PullRequest_StateSchema: GenEnum<PullRequest_State>;
/**
 * CodexSettings contains settings consumed only by the Codex app agent.
 *
 * @generated from message gitpod.v1.CodexSettings
 */
export type CodexSettings = Message<"gitpod.v1.CodexSettings"> & {
    /**
     * @generated from field: gitpod.v1.CodexOpenAIModel model = 1;
     */
    model: CodexOpenAIModel;
    /**
     * @generated from field: gitpod.v1.CodexReasoningEffort reasoning_effort = 2;
     */
    reasoningEffort: CodexReasoningEffort;
    /**
     * @generated from field: gitpod.v1.CodexServiceTier service_tier = 3;
     */
    serviceTier: CodexServiceTier;
};
/**
 * Describes the message gitpod.v1.CodexSettings.
 * Use `create(CodexSettingsSchema)` to create a new message.
 */
export declare const CodexSettingsSchema: GenMessage<CodexSettings>;
/**
 * @generated from message gitpod.v1.Agent
 */
export type Agent = Message<"gitpod.v1.Agent"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: gitpod.v1.AgentMetadata metadata = 2;
     */
    metadata?: AgentMetadata;
    /**
     * @generated from field: gitpod.v1.RunnerSideAgentSpec spec = 3 [deprecated = true];
     * @deprecated
     */
    spec?: RunnerSideAgentSpec;
    /**
     * @generated from oneof gitpod.v1.Agent.agent_spec
     */
    agentSpec: {
        /**
         * @generated from field: gitpod.v1.RunnerSideAgentSpec runner_side = 4;
         */
        value: RunnerSideAgentSpec;
        case: "runnerSide";
    } | {
        /**
         * @generated from field: gitpod.v1.InEnvironmentAgentSpec in_environment = 5;
         */
        value: InEnvironmentAgentSpec;
        case: "inEnvironment";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.Agent.
 * Use `create(AgentSchema)` to create a new message.
 */
export declare const AgentSchema: GenMessage<Agent>;
/**
 * @generated from message gitpod.v1.AgentMetadata
 */
export type AgentMetadata = Message<"gitpod.v1.AgentMetadata"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
};
/**
 * Describes the message gitpod.v1.AgentMetadata.
 * Use `create(AgentMetadataSchema)` to create a new message.
 */
export declare const AgentMetadataSchema: GenMessage<AgentMetadata>;
/**
 * @generated from message gitpod.v1.AgentCodeContext
 */
export type AgentCodeContext = Message<"gitpod.v1.AgentCodeContext"> & {
    /**
     * @generated from oneof gitpod.v1.AgentCodeContext.context
     */
    context: {
        /**
         * @generated from field: string project_id = 1;
         */
        value: string;
        case: "projectId";
    } | {
        /**
         * @generated from field: string environment_id = 2;
         */
        value: string;
        case: "environmentId";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentCodeContext.ContextURL context_url = 3;
         */
        value: AgentCodeContext_ContextURL;
        case: "contextUrl";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * Pull request context - optional metadata about the PR being worked on
     * This is populated when the agent execution is triggered by a PR workflow
     * or when explicitly provided through the browser extension
     *
     * @generated from field: optional gitpod.v1.PullRequest pull_request = 4;
     */
    pullRequest?: PullRequest;
};
/**
 * Describes the message gitpod.v1.AgentCodeContext.
 * Use `create(AgentCodeContextSchema)` to create a new message.
 */
export declare const AgentCodeContextSchema: GenMessage<AgentCodeContext>;
/**
 * @generated from message gitpod.v1.AgentCodeContext.ContextURL
 */
export type AgentCodeContext_ContextURL = Message<"gitpod.v1.AgentCodeContext.ContextURL"> & {
    /**
     * @generated from field: string url = 1;
     */
    url: string;
    /**
     * @generated from field: string environment_class_id = 2;
     */
    environmentClassId: string;
};
/**
 * Describes the message gitpod.v1.AgentCodeContext.ContextURL.
 * Use `create(AgentCodeContext_ContextURLSchema)` to create a new message.
 */
export declare const AgentCodeContext_ContextURLSchema: GenMessage<AgentCodeContext_ContextURL>;
/**
 * @generated from message gitpod.v1.StartAgentRequest
 */
export type StartAgentRequest = Message<"gitpod.v1.StartAgentRequest"> & {
    /**
     * agent_id identifies the agent to start. If omitted, the backend uses the
     * configured default agent ID, or the Ona in-environment agent when no
     * default is configured.
     *
     * @generated from field: string agent_id = 1;
     */
    agentId: string;
    /**
     * @generated from field: gitpod.v1.AgentCodeContext code_context = 2;
     */
    codeContext?: AgentCodeContext;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * workflow_action_id is an optional reference to the workflow execution action
     * that created this agent execution. Used for tracking and event correlation.
     *
     * @generated from field: optional string workflow_action_id = 4;
     */
    workflowActionId?: string;
    /**
     * mode specifies the operational mode for this agent execution
     * If not specified, defaults to AGENT_MODE_EXECUTION
     *
     * @generated from field: gitpod.v1.AgentMode mode = 5;
     */
    mode: AgentMode;
    /**
     * runner_id specifies a runner for this agent execution.
     * When set, the agent execution is routed to this runner instead of the
     * runner associated with the environment.
     *
     * @generated from field: string runner_id = 6;
     */
    runnerId: string;
    /**
     * annotations are key-value pairs for tracking external context
     * (e.g., integration session IDs, GitHub issue references).
     * Keys should follow domain/name convention (e.g., "agent-client-session/id").
     *
     * @generated from field: map<string, string> annotations = 7;
     */
    annotations: {
        [key: string]: string;
    };
    /**
     * session_id is the ID of the session this agent execution belongs to.
     * If empty, a new session is created implicitly.
     *
     * @generated from field: string session_id = 8;
     */
    sessionId: string;
    /**
     * codex_settings contains desired manual settings for the Codex app agent.
     *
     * @generated from field: gitpod.v1.CodexSettings codex_settings = 9;
     */
    codexSettings?: CodexSettings;
    /**
     * turn_options contains options for the initial turn. It is not persisted as
     * durable execution state.
     *
     * @generated from field: gitpod.v1.TurnOptions turn_options = 10;
     */
    turnOptions?: TurnOptions;
};
/**
 * Describes the message gitpod.v1.StartAgentRequest.
 * Use `create(StartAgentRequestSchema)` to create a new message.
 */
export declare const StartAgentRequestSchema: GenMessage<StartAgentRequest>;
/**
 * @generated from message gitpod.v1.StartAgentResponse
 */
export type StartAgentResponse = Message<"gitpod.v1.StartAgentResponse"> & {
    /**
     * @generated from field: string agent_execution_id = 1;
     */
    agentExecutionId: string;
};
/**
 * Describes the message gitpod.v1.StartAgentResponse.
 * Use `create(StartAgentResponseSchema)` to create a new message.
 */
export declare const StartAgentResponseSchema: GenMessage<StartAgentResponse>;
/**
 * @generated from message gitpod.v1.ListAgentExecutionsRequest
 */
export type ListAgentExecutionsRequest = Message<"gitpod.v1.ListAgentExecutionsRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListAgentExecutionsRequest.Filter filter = 2;
     */
    filter?: ListAgentExecutionsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListAgentExecutionsRequest.
 * Use `create(ListAgentExecutionsRequestSchema)` to create a new message.
 */
export declare const ListAgentExecutionsRequestSchema: GenMessage<ListAgentExecutionsRequest>;
/**
 * @generated from message gitpod.v1.ListAgentExecutionsRequest.Filter
 */
export type ListAgentExecutionsRequest_Filter = Message<"gitpod.v1.ListAgentExecutionsRequest.Filter"> & {
    /**
     * @generated from field: repeated string agent_ids = 1;
     */
    agentIds: string[];
    /**
     * @generated from field: repeated string project_ids = 2;
     */
    projectIds: string[];
    /**
     * @generated from field: repeated string environment_ids = 3;
     */
    environmentIds: string[];
    /**
     * @generated from field: repeated string creator_ids = 4;
     */
    creatorIds: string[];
    /**
     * @generated from field: repeated gitpod.v1.AgentExecution.Phase status_phases = 5;
     */
    statusPhases: AgentExecution_Phase[];
    /**
     * @generated from field: repeated gitpod.v1.AgentExecutionRole roles = 6;
     */
    roles: AgentExecutionRole[];
    /**
     * annotations filters by key-value pairs. Only executions containing
     * all specified annotations (with matching values) are returned.
     *
     * @generated from field: map<string, string> annotations = 7;
     */
    annotations: {
        [key: string]: string;
    };
    /**
     * session_ids filters the response to only executions belonging to the specified sessions
     *
     * @generated from field: repeated string session_ids = 8;
     */
    sessionIds: string[];
    /**
     * agent_execution_ids filters the response to only the specified executions.
     * Useful for checking existence of a known set of execution IDs.
     *
     * @generated from field: repeated string agent_execution_ids = 9;
     */
    agentExecutionIds: string[];
};
/**
 * Describes the message gitpod.v1.ListAgentExecutionsRequest.Filter.
 * Use `create(ListAgentExecutionsRequest_FilterSchema)` to create a new message.
 */
export declare const ListAgentExecutionsRequest_FilterSchema: GenMessage<ListAgentExecutionsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListAgentExecutionsResponse
 */
export type ListAgentExecutionsResponse = Message<"gitpod.v1.ListAgentExecutionsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.AgentExecution agent_executions = 2;
     */
    agentExecutions: AgentExecution[];
};
/**
 * Describes the message gitpod.v1.ListAgentExecutionsResponse.
 * Use `create(ListAgentExecutionsResponseSchema)` to create a new message.
 */
export declare const ListAgentExecutionsResponseSchema: GenMessage<ListAgentExecutionsResponse>;
/**
 * @generated from message gitpod.v1.GetAgentExecutionRequest
 */
export type GetAgentExecutionRequest = Message<"gitpod.v1.GetAgentExecutionRequest"> & {
    /**
     * @generated from field: string agent_execution_id = 1;
     */
    agentExecutionId: string;
};
/**
 * Describes the message gitpod.v1.GetAgentExecutionRequest.
 * Use `create(GetAgentExecutionRequestSchema)` to create a new message.
 */
export declare const GetAgentExecutionRequestSchema: GenMessage<GetAgentExecutionRequest>;
/**
 * @generated from message gitpod.v1.GetAgentExecutionResponse
 */
export type GetAgentExecutionResponse = Message<"gitpod.v1.GetAgentExecutionResponse"> & {
    /**
     * @generated from field: gitpod.v1.AgentExecution agent_execution = 1;
     */
    agentExecution?: AgentExecution;
};
/**
 * Describes the message gitpod.v1.GetAgentExecutionResponse.
 * Use `create(GetAgentExecutionResponseSchema)` to create a new message.
 */
export declare const GetAgentExecutionResponseSchema: GenMessage<GetAgentExecutionResponse>;
/**
 * @generated from message gitpod.v1.DeleteAgentExecutionRequest
 */
export type DeleteAgentExecutionRequest = Message<"gitpod.v1.DeleteAgentExecutionRequest"> & {
    /**
     * @generated from field: string agent_execution_id = 1;
     */
    agentExecutionId: string;
};
/**
 * Describes the message gitpod.v1.DeleteAgentExecutionRequest.
 * Use `create(DeleteAgentExecutionRequestSchema)` to create a new message.
 */
export declare const DeleteAgentExecutionRequestSchema: GenMessage<DeleteAgentExecutionRequest>;
/**
 * @generated from message gitpod.v1.DeleteAgentExecutionResponse
 */
export type DeleteAgentExecutionResponse = Message<"gitpod.v1.DeleteAgentExecutionResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteAgentExecutionResponse.
 * Use `create(DeleteAgentExecutionResponseSchema)` to create a new message.
 */
export declare const DeleteAgentExecutionResponseSchema: GenMessage<DeleteAgentExecutionResponse>;
/**
 * @generated from message gitpod.v1.AgentExecution
 */
export type AgentExecution = Message<"gitpod.v1.AgentExecution"> & {
    /**
     * ID is a unique identifier of this agent run. No other agent run with the
     * same name must be managed by this agent manager
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Metadata is data associated with this agent that's required for other
     * parts of Gitpod to function
     *
     * @generated from field: gitpod.v1.AgentExecution.Metadata metadata = 2;
     */
    metadata?: AgentExecution_Metadata;
    /**
     * Spec is the configuration of the agent that's required for the
     * runner to start the agent
     *
     * @generated from field: gitpod.v1.AgentExecution.Spec spec = 3;
     */
    spec?: AgentExecution_Spec;
    /**
     * Status is the current status of the agent
     *
     * @generated from field: gitpod.v1.AgentExecution.Status status = 4;
     */
    status?: AgentExecution_Status;
};
/**
 * Describes the message gitpod.v1.AgentExecution.
 * Use `create(AgentExecutionSchema)` to create a new message.
 */
export declare const AgentExecutionSchema: GenMessage<AgentExecution>;
/**
 * @generated from message gitpod.v1.AgentExecution.Metadata
 */
export type AgentExecution_Metadata = Message<"gitpod.v1.AgentExecution.Metadata"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: gitpod.v1.Subject creator = 3;
     */
    creator?: Subject;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 5;
     */
    updatedAt?: Timestamp;
    /**
     * role is the role of the agent execution
     *
     * @generated from field: gitpod.v1.AgentExecutionRole role = 6;
     */
    role: AgentExecutionRole;
    /**
     * workflow_action_id is set when this agent execution was created as part of a workflow.
     * Used to correlate agent executions with their parent workflow execution action.
     *
     * @generated from field: optional string workflow_action_id = 7;
     */
    workflowActionId?: string;
    /**
     * annotations are key-value pairs for tracking external context.
     *
     * @generated from field: map<string, string> annotations = 8;
     */
    annotations: {
        [key: string]: string;
    };
    /**
     * session_id is the ID of the session this agent execution belongs to.
     *
     * @generated from field: string session_id = 9;
     */
    sessionId: string;
};
/**
 * Describes the message gitpod.v1.AgentExecution.Metadata.
 * Use `create(AgentExecution_MetadataSchema)` to create a new message.
 */
export declare const AgentExecution_MetadataSchema: GenMessage<AgentExecution_Metadata>;
/**
 * @generated from message gitpod.v1.AgentExecution.Spec
 */
export type AgentExecution_Spec = Message<"gitpod.v1.AgentExecution.Spec"> & {
    /**
     * version of the spec. The value of this field has no semantic
     * meaning (e.g. don't interpret it as as a timestamp),
     * but it can be used to impose a partial order. If a.spec_version <
     * b.spec_version then a was the spec before b.
     *
     * @generated from field: uint64 spec_version = 1;
     */
    specVersion: bigint;
    /**
     * @generated from field: string session = 2;
     */
    session: string;
    /**
     * desired_phase is the desired phase of the agent run
     *
     * @generated from field: gitpod.v1.AgentExecution.Phase desired_phase = 3;
     */
    desiredPhase: AgentExecution_Phase;
    /**
     * @generated from field: string agent_id = 4;
     */
    agentId: string;
    /**
     * @generated from field: gitpod.v1.AgentCodeContext code_context = 5;
     */
    codeContext?: AgentCodeContext;
    /**
     * @generated from field: gitpod.v1.AgentExecution.Spec.Limits limits = 6;
     */
    limits?: AgentExecution_Spec_Limits;
    /**
     * codex_settings contains persisted desired/manual settings for the Codex app agent.
     *
     * @generated from field: gitpod.v1.CodexSettings codex_settings = 9;
     */
    codexSettings?: CodexSettings;
};
/**
 * Describes the message gitpod.v1.AgentExecution.Spec.
 * Use `create(AgentExecution_SpecSchema)` to create a new message.
 */
export declare const AgentExecution_SpecSchema: GenMessage<AgentExecution_Spec>;
/**
 * @generated from message gitpod.v1.AgentExecution.Spec.Limits
 */
export type AgentExecution_Spec_Limits = Message<"gitpod.v1.AgentExecution.Spec.Limits"> & {
    /**
     * @generated from field: int64 max_iterations = 1;
     */
    maxIterations: bigint;
    /**
     * @generated from field: int64 max_output_tokens = 2;
     */
    maxOutputTokens: bigint;
    /**
     * @generated from field: int64 max_input_tokens = 3;
     */
    maxInputTokens: bigint;
};
/**
 * Describes the message gitpod.v1.AgentExecution.Spec.Limits.
 * Use `create(AgentExecution_Spec_LimitsSchema)` to create a new message.
 */
export declare const AgentExecution_Spec_LimitsSchema: GenMessage<AgentExecution_Spec_Limits>;
/**
 * @generated from message gitpod.v1.AgentExecution.Status
 */
export type AgentExecution_Status = Message<"gitpod.v1.AgentExecution.Status"> & {
    /**
     * version of the status. The value of this field has no semantic
     * meaning (e.g. don't interpret it as as a timestamp),
     * but it can be used to impose a partial order. If a.status_version <
     * b.status_version then a was the status before b.
     *
     * @generated from field: uint64 status_version = 1;
     */
    statusVersion: bigint;
    /**
     * @generated from field: string session = 2;
     */
    session: string;
    /**
     * @generated from field: gitpod.v1.AgentExecution.Phase phase = 3;
     */
    phase: AgentExecution_Phase;
    /**
     * failure_message contains the reason the agent run failed to operate.
     *
     * @generated from field: string failure_message = 4;
     */
    failureMessage: string;
    /**
     * warning_message contains warnings, e.g. when the LLM is overloaded.
     *
     * @generated from field: string warning_message = 5;
     */
    warningMessage: string;
    /**
     * failure_reason contains a structured reason code for the failure.
     *
     * @generated from field: gitpod.v1.AgentExecutionFailureReason failure_reason = 6;
     */
    failureReason: AgentExecutionFailureReason;
    /**
     * conversation_url is the URL to the conversation (all messages exchanged between the agent and the user) of the agent run.
     *
     * @generated from field: string conversation_url = 10;
     */
    conversationUrl: string;
    /**
     * transcript_url is the URL to the LLM transcript (all messages exchanged between the agent and the LLM) of the agent run.
     *
     * @generated from field: string transcript_url = 11;
     */
    transcriptUrl: string;
    /**
     * support_bundle_url is the URL to download a diagnostic bundle for this agent execution.
     *
     * @generated from field: string support_bundle_url = 12;
     */
    supportBundleUrl: string;
    /**
     * conversation_urls contains the v2 conversation streaming endpoints. When
     * present, clients should use these URLs instead of conversation_url.
     *
     * @generated from field: gitpod.v1.AgentExecution.Status.ConversationURLs conversation_urls = 13;
     */
    conversationUrls?: AgentExecution_Status_ConversationURLs;
    /**
     * @generated from field: int64 iterations = 20;
     */
    iterations: bigint;
    /**
     * @generated from field: int64 input_tokens_used = 21;
     */
    inputTokensUsed: bigint;
    /**
     * @generated from field: int64 output_tokens_used = 22;
     */
    outputTokensUsed: bigint;
    /**
     * @generated from field: int64 context_window_length = 23;
     */
    contextWindowLength: bigint;
    /**
     * @generated from field: int64 cached_creation_tokens_used = 24;
     */
    cachedCreationTokensUsed: bigint;
    /**
     * @generated from field: int64 cached_input_tokens_used = 25;
     */
    cachedInputTokensUsed: bigint;
    /**
     * context_window_limit is the selected model's maximum context window size in tokens.
     *
     * @generated from field: int64 context_window_limit = 26;
     */
    contextWindowLimit: bigint;
    /**
     * judgement is the judgement of the agent run produced by the judgement prompt.
     *
     * @generated from field: string judgement = 30;
     */
    judgement: string;
    /**
     * current_operation is the current operation of the agent execution.
     *
     * @generated from field: gitpod.v1.AgentExecution.Status.CurrentOperation current_operation = 40;
     */
    currentOperation?: AgentExecution_Status_CurrentOperation;
    /**
     * used_environments is the list of environments that were used by the agent execution.
     *
     * @generated from field: repeated gitpod.v1.AgentExecution.Status.EnvironmentUsage used_environments = 50;
     */
    usedEnvironments: AgentExecution_Status_EnvironmentUsage[];
    /**
     * current_activity is the current activity description of the agent execution.
     *
     * @generated from field: string current_activity = 60;
     */
    currentActivity: string;
    /**
     * outputs is a map of key-value pairs that can be set by the agent during execution.
     * Similar to task execution outputs, but with typed values for structured data.
     *
     * @generated from field: map<string, gitpod.v1.AgentExecution.Status.OutputValue> outputs = 70;
     */
    outputs: {
        [key: string]: AgentExecution_Status_OutputValue;
    };
    /**
     * supported_model is the LLM model being used by the agent execution.
     *
     * @generated from field: gitpod.v1.SupportedModel supported_model = 80;
     */
    supportedModel: SupportedModel;
    /**
     * llm_capabilities describes provider capabilities for the selected LLM integration.
     *
     * @generated from field: gitpod.v1.AgentExecution.Status.LLMCapabilities llm_capabilities = 81;
     */
    llmCapabilities?: AgentExecution_Status_LLMCapabilities;
    /**
     * mode is the current operational mode of the agent execution.
     * This is set by the agent when entering different modes (e.g., Ralph mode via /ona:ralph command).
     *
     * @generated from field: gitpod.v1.AgentMode mode = 90;
     */
    mode: AgentMode;
    /**
     * mcp_integration_statuses contains the status of all MCP integrations used by this agent execution
     *
     * @generated from field: repeated gitpod.v1.AgentExecution.Status.MCPIntegrationStatus mcp_integration_statuses = 100;
     */
    mcpIntegrationStatuses: AgentExecution_Status_MCPIntegrationStatus[];
    /**
     * waiting_info is set when phase is PHASE_WAITING_FOR_INPUT and the agent
     * has registered interests (timers, sub-agent completions, user messages).
     *
     * @generated from field: gitpod.v1.AgentExecution.WaitingInfo waiting_info = 110;
     */
    waitingInfo?: AgentExecution_WaitingInfo;
    /**
     * terminal_id is the ID of the terminal running the agent, if the agent runs as a terminal service (runsOn: terminal).
     *
     * @generated from field: string terminal_id = 130;
     */
    terminalId: string;
    /**
     * goal projects the current agent goal, if any.
     *
     * @generated from field: gitpod.v1.AgentExecution.Status.Goal goal = 140;
     */
    goal?: AgentExecution_Status_Goal;
    /**
     * codex_settings contains runtime effective settings reported by the Codex app agent.
     *
     * @generated from field: gitpod.v1.CodexSettings codex_settings = 150;
     */
    codexSettings?: CodexSettings;
    /**
     * @generated from field: repeated gitpod.v1.AgentExecution.Status.Subagent subagents = 160;
     */
    subagents: AgentExecution_Status_Subagent[];
};
/**
 * Describes the message gitpod.v1.AgentExecution.Status.
 * Use `create(AgentExecution_StatusSchema)` to create a new message.
 */
export declare const AgentExecution_StatusSchema: GenMessage<AgentExecution_Status>;
/**
 * @generated from message gitpod.v1.AgentExecution.Status.ToolUse
 */
export type AgentExecution_Status_ToolUse = Message<"gitpod.v1.AgentExecution.Status.ToolUse"> & {
    /**
     * @generated from field: string tool_name = 1;
     */
    toolName: string;
    /**
     * @generated from field: bool complete = 2;
     */
    complete: boolean;
};
/**
 * Describes the message gitpod.v1.AgentExecution.Status.ToolUse.
 * Use `create(AgentExecution_Status_ToolUseSchema)` to create a new message.
 */
export declare const AgentExecution_Status_ToolUseSchema: GenMessage<AgentExecution_Status_ToolUse>;
/**
 * @generated from message gitpod.v1.AgentExecution.Status.LLM
 */
export type AgentExecution_Status_LLM = Message<"gitpod.v1.AgentExecution.Status.LLM"> & {
    /**
     * @generated from field: bool complete = 1;
     */
    complete: boolean;
};
/**
 * Describes the message gitpod.v1.AgentExecution.Status.LLM.
 * Use `create(AgentExecution_Status_LLMSchema)` to create a new message.
 */
export declare const AgentExecution_Status_LLMSchema: GenMessage<AgentExecution_Status_LLM>;
/**
 * @generated from message gitpod.v1.AgentExecution.Status.CurrentOperation
 */
export type AgentExecution_Status_CurrentOperation = Message<"gitpod.v1.AgentExecution.Status.CurrentOperation"> & {
    /**
     * @generated from field: string session = 1;
     */
    session: string;
    /**
     * retries is the number of times the agent run has retried one or more steps
     *
     * @generated from field: int64 retries = 2;
     */
    retries: bigint;
    /**
     * @generated from oneof gitpod.v1.AgentExecution.Status.CurrentOperation.operation
     */
    operation: {
        /**
         * @generated from field: gitpod.v1.AgentExecution.Status.ToolUse tool_use = 3;
         */
        value: AgentExecution_Status_ToolUse;
        case: "toolUse";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentExecution.Status.LLM llm = 4;
         */
        value: AgentExecution_Status_LLM;
        case: "llm";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.AgentExecution.Status.CurrentOperation.
 * Use `create(AgentExecution_Status_CurrentOperationSchema)` to create a new message.
 */
export declare const AgentExecution_Status_CurrentOperationSchema: GenMessage<AgentExecution_Status_CurrentOperation>;
/**
 * @generated from message gitpod.v1.AgentExecution.Status.EnvironmentUsage
 */
export type AgentExecution_Status_EnvironmentUsage = Message<"gitpod.v1.AgentExecution.Status.EnvironmentUsage"> & {
    /**
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * @generated from field: bool created_by_agent = 2;
     */
    createdByAgent: boolean;
};
/**
 * Describes the message gitpod.v1.AgentExecution.Status.EnvironmentUsage.
 * Use `create(AgentExecution_Status_EnvironmentUsageSchema)` to create a new message.
 */
export declare const AgentExecution_Status_EnvironmentUsageSchema: GenMessage<AgentExecution_Status_EnvironmentUsage>;
/**
 * @generated from message gitpod.v1.AgentExecution.Status.ConversationURLs
 */
export type AgentExecution_Status_ConversationURLs = Message<"gitpod.v1.AgentExecution.Status.ConversationURLs"> & {
    /**
     * history is the v2 durable conversation history endpoint.
     *
     * @generated from field: string history = 1;
     */
    history: string;
    /**
     * live is the v2 live Server-Sent Events endpoint.
     *
     * @generated from field: string live = 2;
     */
    live: string;
    /**
     * blobs is the v2 blob endpoint prefix for offloaded conversation payloads.
     *
     * @generated from field: string blobs = 3;
     */
    blobs: string;
};
/**
 * Describes the message gitpod.v1.AgentExecution.Status.ConversationURLs.
 * Use `create(AgentExecution_Status_ConversationURLsSchema)` to create a new message.
 */
export declare const AgentExecution_Status_ConversationURLsSchema: GenMessage<AgentExecution_Status_ConversationURLs>;
/**
 * @generated from message gitpod.v1.AgentExecution.Status.Subagent
 */
export type AgentExecution_Status_Subagent = Message<"gitpod.v1.AgentExecution.Status.Subagent"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string parent_id = 2;
     */
    parentId: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: string current_activity = 4;
     */
    currentActivity: string;
    /**
     * @generated from field: string status_message = 5;
     */
    statusMessage: string;
    /**
     * @generated from field: gitpod.v1.AgentExecution.Phase phase = 6;
     */
    phase: AgentExecution_Phase;
    /**
     * @generated from field: gitpod.v1.AgentExecution.Status.ConversationURLs conversation_urls = 7;
     */
    conversationUrls?: AgentExecution_Status_ConversationURLs;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 8;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 9;
     */
    updatedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.AgentExecution.Status.Subagent.
 * Use `create(AgentExecution_Status_SubagentSchema)` to create a new message.
 */
export declare const AgentExecution_Status_SubagentSchema: GenMessage<AgentExecution_Status_Subagent>;
/**
 * @generated from message gitpod.v1.AgentExecution.Status.OutputValue
 */
export type AgentExecution_Status_OutputValue = Message<"gitpod.v1.AgentExecution.Status.OutputValue"> & {
    /**
     * @generated from oneof gitpod.v1.AgentExecution.Status.OutputValue.value
     */
    value: {
        /**
         * @generated from field: string string_value = 1;
         */
        value: string;
        case: "stringValue";
    } | {
        /**
         * @generated from field: int64 int_value = 2;
         */
        value: bigint;
        case: "intValue";
    } | {
        /**
         * @generated from field: double float_value = 3;
         */
        value: number;
        case: "floatValue";
    } | {
        /**
         * @generated from field: bool bool_value = 4;
         */
        value: boolean;
        case: "boolValue";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.AgentExecution.Status.OutputValue.
 * Use `create(AgentExecution_Status_OutputValueSchema)` to create a new message.
 */
export declare const AgentExecution_Status_OutputValueSchema: GenMessage<AgentExecution_Status_OutputValue>;
/**
 * @generated from message gitpod.v1.AgentExecution.Status.LLMCapabilities
 */
export type AgentExecution_Status_LLMCapabilities = Message<"gitpod.v1.AgentExecution.Status.LLMCapabilities"> & {
    /**
     * disabled_capabilities lists provider capabilities unavailable for this
     * execution's selected LLM integration.
     *
     * @generated from field: repeated gitpod.v1.LLMDisabledCapability disabled_capabilities = 1;
     */
    disabledCapabilities: LLMDisabledCapability[];
};
/**
 * Describes the message gitpod.v1.AgentExecution.Status.LLMCapabilities.
 * Use `create(AgentExecution_Status_LLMCapabilitiesSchema)` to create a new message.
 */
export declare const AgentExecution_Status_LLMCapabilitiesSchema: GenMessage<AgentExecution_Status_LLMCapabilities>;
/**
 * MCPIntegrationStatus represents the status of a single MCP integration
 * within an agent execution context
 *
 * @generated from message gitpod.v1.AgentExecution.Status.MCPIntegrationStatus
 */
export type AgentExecution_Status_MCPIntegrationStatus = Message<"gitpod.v1.AgentExecution.Status.MCPIntegrationStatus"> & {
    /**
     * id is the unique name of the MCP integration
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * name is the unique name of the MCP integration (e.g., "linear", "notion")
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * phase is the current connection/health phase
     *
     * @generated from field: gitpod.v1.MCPIntegrationPhase phase = 3;
     */
    phase: MCPIntegrationPhase;
    /**
     * failure_message contains the reason the MCP integration failed to connect or operate
     *
     * @generated from field: string failure_message = 4;
     */
    failureMessage: string;
    /**
     * warning_message contains warnings (e.g., rate limiting, degraded performance)
     *
     * @generated from field: string warning_message = 5;
     */
    warningMessage: string;
};
/**
 * Describes the message gitpod.v1.AgentExecution.Status.MCPIntegrationStatus.
 * Use `create(AgentExecution_Status_MCPIntegrationStatusSchema)` to create a new message.
 */
export declare const AgentExecution_Status_MCPIntegrationStatusSchema: GenMessage<AgentExecution_Status_MCPIntegrationStatus>;
/**
 * Goal projects the current agent goal onto the execution status.
 *
 * @generated from message gitpod.v1.AgentExecution.Status.Goal
 */
export type AgentExecution_Status_Goal = Message<"gitpod.v1.AgentExecution.Status.Goal"> & {
    /**
     * objective is the current goal text tracked by the agent.
     *
     * @generated from field: string objective = 1;
     */
    objective: string;
    /**
     * status is the lifecycle state of the current goal.
     *
     * @generated from field: gitpod.v1.AgentExecution.Status.Goal.GoalStatus status = 2;
     */
    status: AgentExecution_Status_Goal_GoalStatus;
    /**
     * updated_at is the most recent goal update timestamp, when available.
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 3;
     */
    updatedAt?: Timestamp;
    /**
     * created_at is when the current goal was created, when available.
     *
     * @generated from field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * time_used is the elapsed wall-clock time reported by the agent for this goal.
     *
     * @generated from field: google.protobuf.Duration time_used = 5;
     */
    timeUsed?: Duration;
    /**
     * tokens_used is the token usage reported by the agent for this goal.
     *
     * @generated from field: int64 tokens_used = 6;
     */
    tokensUsed: bigint;
    /**
     * token_budget is the token budget reported by the agent for this goal, when one exists.
     *
     * @generated from field: optional int64 token_budget = 7;
     */
    tokenBudget?: bigint;
};
/**
 * Describes the message gitpod.v1.AgentExecution.Status.Goal.
 * Use `create(AgentExecution_Status_GoalSchema)` to create a new message.
 */
export declare const AgentExecution_Status_GoalSchema: GenMessage<AgentExecution_Status_Goal>;
/**
 * @generated from enum gitpod.v1.AgentExecution.Status.Goal.GoalStatus
 */
export declare enum AgentExecution_Status_Goal_GoalStatus {
    /**
     * The agent did not report a goal status.
     *
     * @generated from enum value: GOAL_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The goal is active and the agent may continue working toward it.
     *
     * @generated from enum value: GOAL_STATUS_ACTIVE = 1;
     */
    ACTIVE = 1,
    /**
     * The goal is paused and should not continue until resumed.
     *
     * @generated from enum value: GOAL_STATUS_PAUSED = 2;
     */
    PAUSED = 2,
    /**
     * The goal is complete and no further work is required.
     *
     * @generated from enum value: GOAL_STATUS_COMPLETED = 3;
     */
    COMPLETED = 3,
    /**
     * The goal stopped because its configured token budget was exhausted.
     *
     * @generated from enum value: GOAL_STATUS_BUDGET_EXHAUSTED = 4;
     */
    BUDGET_EXHAUSTED = 4,
    /**
     * The goal is blocked because the agent needs user input or an external state change before it can make progress.
     *
     * @generated from enum value: GOAL_STATUS_BLOCKED = 5;
     */
    BLOCKED = 5,
    /**
     * The goal stopped because execution was limited by account, plan, or system usage limits rather than its explicit token budget.
     *
     * @generated from enum value: GOAL_STATUS_USAGE_LIMITED = 6;
     */
    USAGE_LIMITED = 6
}
/**
 * Describes the enum gitpod.v1.AgentExecution.Status.Goal.GoalStatus.
 */
export declare const AgentExecution_Status_Goal_GoalStatusSchema: GenEnum<AgentExecution_Status_Goal_GoalStatus>;
/**
 * WaitingInfo describes what an agent is waiting for when in PHASE_WAITING_FOR_INPUT.
 *
 * @generated from message gitpod.v1.AgentExecution.WaitingInfo
 */
export type AgentExecution_WaitingInfo = Message<"gitpod.v1.AgentExecution.WaitingInfo"> & {
    /**
     * @generated from field: string wait_id = 1;
     */
    waitId: string;
    /**
     * @generated from field: repeated gitpod.v1.AgentExecution.WaitingInfo.Interest interests = 2;
     */
    interests: AgentExecution_WaitingInfo_Interest[];
    /**
     * @generated from field: google.protobuf.Timestamp waiting_since = 3;
     */
    waitingSince?: Timestamp;
};
/**
 * Describes the message gitpod.v1.AgentExecution.WaitingInfo.
 * Use `create(AgentExecution_WaitingInfoSchema)` to create a new message.
 */
export declare const AgentExecution_WaitingInfoSchema: GenMessage<AgentExecution_WaitingInfo>;
/**
 * @generated from message gitpod.v1.AgentExecution.WaitingInfo.TimerInterest
 */
export type AgentExecution_WaitingInfo_TimerInterest = Message<"gitpod.v1.AgentExecution.WaitingInfo.TimerInterest"> & {
    /**
     * duration is the original duration spec (e.g. "5m"), if interval-based.
     *
     * @generated from field: string duration = 1;
     */
    duration: string;
    /**
     * cron is the cron expression, if cron-based.
     *
     * @generated from field: string cron = 2;
     */
    cron: string;
    /**
     * fires_at is the next fire time.
     *
     * @generated from field: google.protobuf.Timestamp fires_at = 3;
     */
    firesAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.AgentExecution.WaitingInfo.TimerInterest.
 * Use `create(AgentExecution_WaitingInfo_TimerInterestSchema)` to create a new message.
 */
export declare const AgentExecution_WaitingInfo_TimerInterestSchema: GenMessage<AgentExecution_WaitingInfo_TimerInterest>;
/**
 * @generated from message gitpod.v1.AgentExecution.WaitingInfo.SubAgentInterest
 */
export type AgentExecution_WaitingInfo_SubAgentInterest = Message<"gitpod.v1.AgentExecution.WaitingInfo.SubAgentInterest"> & {
    /**
     * @generated from field: string execution_id = 1;
     */
    executionId: string;
};
/**
 * Describes the message gitpod.v1.AgentExecution.WaitingInfo.SubAgentInterest.
 * Use `create(AgentExecution_WaitingInfo_SubAgentInterestSchema)` to create a new message.
 */
export declare const AgentExecution_WaitingInfo_SubAgentInterestSchema: GenMessage<AgentExecution_WaitingInfo_SubAgentInterest>;
/**
 * @generated from message gitpod.v1.AgentExecution.WaitingInfo.UserMessageInterest
 */
export type AgentExecution_WaitingInfo_UserMessageInterest = Message<"gitpod.v1.AgentExecution.WaitingInfo.UserMessageInterest"> & {};
/**
 * Describes the message gitpod.v1.AgentExecution.WaitingInfo.UserMessageInterest.
 * Use `create(AgentExecution_WaitingInfo_UserMessageInterestSchema)` to create a new message.
 */
export declare const AgentExecution_WaitingInfo_UserMessageInterestSchema: GenMessage<AgentExecution_WaitingInfo_UserMessageInterest>;
/**
 * @generated from message gitpod.v1.AgentExecution.WaitingInfo.EnvironmentInterest
 */
export type AgentExecution_WaitingInfo_EnvironmentInterest = Message<"gitpod.v1.AgentExecution.WaitingInfo.EnvironmentInterest"> & {
    /**
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * Optional. When empty, any terminal phase (running, stopped, deleted)
     * fires the interest. Valid values: "running", "stopped", "deleted".
     *
     * @generated from field: string phase = 2;
     */
    phase: string;
};
/**
 * Describes the message gitpod.v1.AgentExecution.WaitingInfo.EnvironmentInterest.
 * Use `create(AgentExecution_WaitingInfo_EnvironmentInterestSchema)` to create a new message.
 */
export declare const AgentExecution_WaitingInfo_EnvironmentInterestSchema: GenMessage<AgentExecution_WaitingInfo_EnvironmentInterest>;
/**
 * @generated from message gitpod.v1.AgentExecution.WaitingInfo.DevcontainerRebuildInterest
 */
export type AgentExecution_WaitingInfo_DevcontainerRebuildInterest = Message<"gitpod.v1.AgentExecution.WaitingInfo.DevcontainerRebuildInterest"> & {
    /**
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * session_id is the devcontainer session this wait is targeting.
     *
     * @generated from field: string session_id = 2;
     */
    sessionId: string;
    /**
     * phases are the devcontainer phases that satisfy the wait for the
     * targeted session. For a rebuild completion wait, specify "running" and
     * "failed".
     *
     * @generated from field: repeated string phases = 3;
     */
    phases: string[];
};
/**
 * Describes the message gitpod.v1.AgentExecution.WaitingInfo.DevcontainerRebuildInterest.
 * Use `create(AgentExecution_WaitingInfo_DevcontainerRebuildInterestSchema)` to create a new message.
 */
export declare const AgentExecution_WaitingInfo_DevcontainerRebuildInterestSchema: GenMessage<AgentExecution_WaitingInfo_DevcontainerRebuildInterest>;
/**
 * @generated from message gitpod.v1.AgentExecution.WaitingInfo.Interest
 */
export type AgentExecution_WaitingInfo_Interest = Message<"gitpod.v1.AgentExecution.WaitingInfo.Interest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from oneof gitpod.v1.AgentExecution.WaitingInfo.Interest.interest
     */
    interest: {
        /**
         * @generated from field: gitpod.v1.AgentExecution.WaitingInfo.TimerInterest timer = 2;
         */
        value: AgentExecution_WaitingInfo_TimerInterest;
        case: "timer";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentExecution.WaitingInfo.SubAgentInterest sub_agent = 3;
         */
        value: AgentExecution_WaitingInfo_SubAgentInterest;
        case: "subAgent";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentExecution.WaitingInfo.UserMessageInterest user_message = 4;
         */
        value: AgentExecution_WaitingInfo_UserMessageInterest;
        case: "userMessage";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentExecution.WaitingInfo.EnvironmentInterest environment = 5;
         */
        value: AgentExecution_WaitingInfo_EnvironmentInterest;
        case: "environment";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentExecution.WaitingInfo.DevcontainerRebuildInterest devcontainer_rebuild = 6;
         */
        value: AgentExecution_WaitingInfo_DevcontainerRebuildInterest;
        case: "devcontainerRebuild";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.AgentExecution.WaitingInfo.Interest.
 * Use `create(AgentExecution_WaitingInfo_InterestSchema)` to create a new message.
 */
export declare const AgentExecution_WaitingInfo_InterestSchema: GenMessage<AgentExecution_WaitingInfo_Interest>;
/**
 * @generated from enum gitpod.v1.AgentExecution.Phase
 */
export declare enum AgentExecution_Phase {
    /**
     * The phase is not set.
     *
     * @generated from enum value: PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The agent run is pending.
     *
     * @generated from enum value: PHASE_PENDING = 10;
     */
    PENDING = 10,
    /**
     * The agent run is active.
     *
     * @generated from enum value: PHASE_RUNNING = 20;
     */
    RUNNING = 20,
    /**
     * The agent run is waiting for input.
     *
     * @generated from enum value: PHASE_WAITING_FOR_INPUT = 30;
     */
    WAITING_FOR_INPUT = 30,
    /**
     * The agent run is inactive.
     *
     * @generated from enum value: PHASE_STOPPED = 40;
     */
    STOPPED = 40
}
/**
 * Describes the enum gitpod.v1.AgentExecution.Phase.
 */
export declare const AgentExecution_PhaseSchema: GenEnum<AgentExecution_Phase>;
/**
 * @generated from message gitpod.v1.ClarifyingQuestions
 */
export type ClarifyingQuestions = Message<"gitpod.v1.ClarifyingQuestions"> & {
    /**
     * @generated from field: repeated gitpod.v1.ClarifyingQuestions.Question questions = 1;
     */
    questions: ClarifyingQuestions_Question[];
};
/**
 * Describes the message gitpod.v1.ClarifyingQuestions.
 * Use `create(ClarifyingQuestionsSchema)` to create a new message.
 */
export declare const ClarifyingQuestionsSchema: GenMessage<ClarifyingQuestions>;
/**
 * @generated from message gitpod.v1.ClarifyingQuestions.Choice
 */
export type ClarifyingQuestions_Choice = Message<"gitpod.v1.ClarifyingQuestions.Choice"> & {
    /**
     * @generated from field: string label = 1;
     */
    label: string;
    /**
     * @generated from field: string text = 2;
     */
    text: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
};
/**
 * Describes the message gitpod.v1.ClarifyingQuestions.Choice.
 * Use `create(ClarifyingQuestions_ChoiceSchema)` to create a new message.
 */
export declare const ClarifyingQuestions_ChoiceSchema: GenMessage<ClarifyingQuestions_Choice>;
/**
 * @generated from message gitpod.v1.ClarifyingQuestions.Question
 */
export type ClarifyingQuestions_Question = Message<"gitpod.v1.ClarifyingQuestions.Question"> & {
    /**
     * @generated from field: string question_id = 1;
     */
    questionId: string;
    /**
     * @generated from field: string question = 2;
     */
    question: string;
    /**
     * @generated from field: repeated gitpod.v1.ClarifyingQuestions.Choice choices = 3;
     */
    choices: ClarifyingQuestions_Choice[];
    /**
     * @generated from field: bool allow_other = 4;
     */
    allowOther: boolean;
};
/**
 * Describes the message gitpod.v1.ClarifyingQuestions.Question.
 * Use `create(ClarifyingQuestions_QuestionSchema)` to create a new message.
 */
export declare const ClarifyingQuestions_QuestionSchema: GenMessage<ClarifyingQuestions_Question>;
/**
 * @generated from message gitpod.v1.NextStepsProposal
 */
export type NextStepsProposal = Message<"gitpod.v1.NextStepsProposal"> & {
    /**
     * @generated from field: repeated gitpod.v1.NextStepsProposal.Action actions = 1;
     */
    actions: NextStepsProposal_Action[];
};
/**
 * Describes the message gitpod.v1.NextStepsProposal.
 * Use `create(NextStepsProposalSchema)` to create a new message.
 */
export declare const NextStepsProposalSchema: GenMessage<NextStepsProposal>;
/**
 * @generated from message gitpod.v1.NextStepsProposal.Action
 */
export type NextStepsProposal_Action = Message<"gitpod.v1.NextStepsProposal.Action"> & {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string prompt = 2;
     */
    prompt: string;
    /**
     * @generated from field: string variant = 3;
     */
    variant: string;
};
/**
 * Describes the message gitpod.v1.NextStepsProposal.Action.
 * Use `create(NextStepsProposal_ActionSchema)` to create a new message.
 */
export declare const NextStepsProposal_ActionSchema: GenMessage<NextStepsProposal_Action>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock
 */
export type AgentResponseBlock = Message<"gitpod.v1.AgentResponseBlock"> & {
    /**
     * id is the unique identifier of the response block. A conversation can have multiple blocks with the same ID.
     * Clients are expected to use the ID to update or replace a block.
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * phase is the phase of the response block indicating how to update the previous output block with the same ID.
     *
     * @generated from field: gitpod.v1.AgentResponseBlock.Phase phase = 2;
     */
    phase: AgentResponseBlock_Phase;
    /**
     * @generated from oneof gitpod.v1.AgentResponseBlock.output
     */
    output: {
        /**
         * @generated from field: gitpod.v1.AgentResponseBlock.UserInputBlockSeen user_input_seen = 8;
         */
        value: AgentResponseBlock_UserInputBlockSeen;
        case: "userInputSeen";
    } | {
        /**
         * @generated from field: gitpod.v1.UserInputBlock user_input = 9;
         */
        value: UserInputBlock;
        case: "userInput";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentResponseBlock.UserInputBlockDeleted user_input_deleted = 11;
         */
        value: AgentResponseBlock_UserInputBlockDeleted;
        case: "userInputDeleted";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentResponseBlock.UserInputQueueUpdated user_input_queue_updated = 12;
         */
        value: AgentResponseBlock_UserInputQueueUpdated;
        case: "userInputQueueUpdated";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentResponseBlock.TextOutput text = 10;
         */
        value: AgentResponseBlock_TextOutput;
        case: "text";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentResponseBlock.ActionStarted action_started = 20;
         */
        value: AgentResponseBlock_ActionStarted;
        case: "actionStarted";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentResponseBlock.ActionCompleted action_completed = 21;
         */
        value: AgentResponseBlock_ActionCompleted;
        case: "actionCompleted";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentResponseBlock.FileModification file_modification = 30;
         */
        value: AgentResponseBlock_FileModification;
        case: "fileModification";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentResponseBlock.EnvironmentCreation environment_creation = 40;
         */
        value: AgentResponseBlock_EnvironmentCreation;
        case: "environmentCreation";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentResponseBlock.CodeAnnotation code_annotation = 50;
         */
        value: AgentResponseBlock_CodeAnnotation;
        case: "codeAnnotation";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentResponseBlock.HostAuthenticationRequired host_authentication_required = 60;
         */
        value: AgentResponseBlock_HostAuthenticationRequired;
        case: "hostAuthenticationRequired";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentResponseBlock.TodoGroup todo_group = 65;
         */
        value: AgentResponseBlock_TodoGroup;
        case: "todoGroup";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentResponseBlock.TodoItem todo_item = 70;
         */
        value: AgentResponseBlock_TodoItem;
        case: "todoItem";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentResponseBlock.Thought thought = 80;
         */
        value: AgentResponseBlock_Thought;
        case: "thought";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentResponseBlock.AgentModeChange agent_mode_change = 90;
         */
        value: AgentResponseBlock_AgentModeChange;
        case: "agentModeChange";
    } | {
        /**
         * @generated from field: gitpod.v1.ClarifyingQuestions clarifying_questions = 91;
         */
        value: ClarifyingQuestions;
        case: "clarifyingQuestions";
    } | {
        /**
         * @generated from field: gitpod.v1.NextStepsProposal next_steps_proposal = 92;
         */
        value: NextStepsProposal;
        case: "nextStepsProposal";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentResponseBlock.AvailableCommands available_commands = 93;
         */
        value: AgentResponseBlock_AvailableCommands;
        case: "availableCommands";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * Timestamp when this block was created. Used for debugging and support bundles.
     *
     * @generated from field: google.protobuf.Timestamp created_at = 100;
     */
    createdAt?: Timestamp;
    /**
     * Active todo snapshot group for routing response fragments in snapshot mode.
     *
     * @generated from field: string todo_group_id = 110;
     */
    todoGroupId: string;
    /**
     * Active in-progress todo item for routing response fragments in snapshot mode.
     *
     * @generated from field: string todo_item_id = 111;
     */
    todoItemId: string;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.
 * Use `create(AgentResponseBlockSchema)` to create a new message.
 */
export declare const AgentResponseBlockSchema: GenMessage<AgentResponseBlock>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock.TextOutput
 */
export type AgentResponseBlock_TextOutput = Message<"gitpod.v1.AgentResponseBlock.TextOutput"> & {
    /**
     * @generated from field: gitpod.v1.AgentResponseBlock.TextOutput.Type type = 1;
     */
    type: AgentResponseBlock_TextOutput_Type;
    /**
     * @generated from field: string content = 2;
     */
    content: string;
    /**
     * Sequence ID for deduplication within the same message. Starts from 1, with 0 indicating unset (backwards compatible).
     *
     * @generated from field: uint64 sequence_id = 3;
     */
    sequenceId: bigint;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.TextOutput.
 * Use `create(AgentResponseBlock_TextOutputSchema)` to create a new message.
 */
export declare const AgentResponseBlock_TextOutputSchema: GenMessage<AgentResponseBlock_TextOutput>;
/**
 * @generated from enum gitpod.v1.AgentResponseBlock.TextOutput.Type
 */
export declare enum AgentResponseBlock_TextOutput_Type {
    /**
     * @generated from enum value: TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: TYPE_USER_FACING_OUTPUT = 1;
     */
    USER_FACING_OUTPUT = 1,
    /**
     * @generated from enum value: TYPE_THOUGHTS = 2;
     */
    THOUGHTS = 2
}
/**
 * Describes the enum gitpod.v1.AgentResponseBlock.TextOutput.Type.
 */
export declare const AgentResponseBlock_TextOutput_TypeSchema: GenEnum<AgentResponseBlock_TextOutput_Type>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock.ActionStarted
 */
export type AgentResponseBlock_ActionStarted = Message<"gitpod.v1.AgentResponseBlock.ActionStarted"> & {
    /**
     * @generated from field: string action_id = 1;
     */
    actionId: string;
    /**
     * @generated from field: string intent_description = 2;
     */
    intentDescription: string;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.ActionStarted.
 * Use `create(AgentResponseBlock_ActionStartedSchema)` to create a new message.
 */
export declare const AgentResponseBlock_ActionStartedSchema: GenMessage<AgentResponseBlock_ActionStarted>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock.ActionCompleted
 */
export type AgentResponseBlock_ActionCompleted = Message<"gitpod.v1.AgentResponseBlock.ActionCompleted"> & {
    /**
     * @generated from field: string action_id = 1;
     */
    actionId: string;
    /**
     * @generated from field: string result_description = 2;
     */
    resultDescription: string;
    /**
     * @generated from field: bool failed = 3;
     */
    failed: boolean;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.ActionCompleted.
 * Use `create(AgentResponseBlock_ActionCompletedSchema)` to create a new message.
 */
export declare const AgentResponseBlock_ActionCompletedSchema: GenMessage<AgentResponseBlock_ActionCompleted>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock.FileModification
 */
export type AgentResponseBlock_FileModification = Message<"gitpod.v1.AgentResponseBlock.FileModification"> & {
    /**
     * @generated from field: string action_id = 1;
     */
    actionId: string;
    /**
     * @generated from field: string file_path = 2;
     */
    filePath: string;
    /**
     * Legacy SEARCH/REPLACE format content (deprecated in favor of diff)
     *
     * @generated from field: string content = 3 [deprecated = true];
     * @deprecated
     */
    content: string;
    /**
     * @generated from field: int32 start_line = 4;
     */
    startLine: number;
    /**
     * Enhanced diff format for dashboard consumption.
     * When present, the dashboard will use this instead of parsing the content field.
     * This provides better performance and more accurate diff rendering.
     *
     * @generated from field: gitpod.v1.AgentResponseBlock.FileModification.Diff diff = 5;
     */
    diff?: AgentResponseBlock_FileModification_Diff;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.FileModification.
 * Use `create(AgentResponseBlock_FileModificationSchema)` to create a new message.
 */
export declare const AgentResponseBlock_FileModificationSchema: GenMessage<AgentResponseBlock_FileModification>;
/**
 * DiffGroup represents a contiguous block of lines with the same change type
 *
 * @generated from message gitpod.v1.AgentResponseBlock.FileModification.DiffGroup
 */
export type AgentResponseBlock_FileModification_DiffGroup = Message<"gitpod.v1.AgentResponseBlock.FileModification.DiffGroup"> & {
    /**
     * @generated from field: gitpod.v1.AgentResponseBlock.FileModification.DiffGroup.Type type = 1;
     */
    type: AgentResponseBlock_FileModification_DiffGroup_Type;
    /**
     * The actual lines of code for this group
     *
     * @generated from field: repeated string lines = 2;
     */
    lines: string[];
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.FileModification.DiffGroup.
 * Use `create(AgentResponseBlock_FileModification_DiffGroupSchema)` to create a new message.
 */
export declare const AgentResponseBlock_FileModification_DiffGroupSchema: GenMessage<AgentResponseBlock_FileModification_DiffGroup>;
/**
 * @generated from enum gitpod.v1.AgentResponseBlock.FileModification.DiffGroup.Type
 */
export declare enum AgentResponseBlock_FileModification_DiffGroup_Type {
    /**
     * @generated from enum value: TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Lines that were added in the new version
     *
     * @generated from enum value: TYPE_ADDED = 1;
     */
    ADDED = 1,
    /**
     * Lines that were removed from the old version
     *
     * @generated from enum value: TYPE_REMOVED = 2;
     */
    REMOVED = 2,
    /**
     * Lines that remain unchanged between versions
     *
     * @generated from enum value: TYPE_UNCHANGED = 3;
     */
    UNCHANGED = 3
}
/**
 * Describes the enum gitpod.v1.AgentResponseBlock.FileModification.DiffGroup.Type.
 */
export declare const AgentResponseBlock_FileModification_DiffGroup_TypeSchema: GenEnum<AgentResponseBlock_FileModification_DiffGroup_Type>;
/**
 * Statistics about the changes in the diff
 *
 * @generated from message gitpod.v1.AgentResponseBlock.FileModification.DiffStats
 */
export type AgentResponseBlock_FileModification_DiffStats = Message<"gitpod.v1.AgentResponseBlock.FileModification.DiffStats"> & {
    /**
     * Number of lines added
     *
     * @generated from field: int32 additions = 1;
     */
    additions: number;
    /**
     * Number of lines deleted
     *
     * @generated from field: int32 deletions = 2;
     */
    deletions: number;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.FileModification.DiffStats.
 * Use `create(AgentResponseBlock_FileModification_DiffStatsSchema)` to create a new message.
 */
export declare const AgentResponseBlock_FileModification_DiffStatsSchema: GenMessage<AgentResponseBlock_FileModification_DiffStats>;
/**
 * Diff provides a structured diff format optimized for dashboard consumption.
 * This format allows the dashboard to render diffs efficiently without parsing
 * the legacy SEARCH/REPLACE format in the content field.
 *
 * @generated from message gitpod.v1.AgentResponseBlock.FileModification.Diff
 */
export type AgentResponseBlock_FileModification_Diff = Message<"gitpod.v1.AgentResponseBlock.FileModification.Diff"> & {
    /**
     * Structured diff groups for efficient rendering
     *
     * @generated from field: repeated gitpod.v1.AgentResponseBlock.FileModification.DiffGroup diff_groups = 1;
     */
    diffGroups: AgentResponseBlock_FileModification_DiffGroup[];
    /**
     * Summary statistics for the diff
     *
     * @generated from field: gitpod.v1.AgentResponseBlock.FileModification.DiffStats stats = 2;
     */
    stats?: AgentResponseBlock_FileModification_DiffStats;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.FileModification.Diff.
 * Use `create(AgentResponseBlock_FileModification_DiffSchema)` to create a new message.
 */
export declare const AgentResponseBlock_FileModification_DiffSchema: GenMessage<AgentResponseBlock_FileModification_Diff>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock.EnvironmentCreation
 */
export type AgentResponseBlock_EnvironmentCreation = Message<"gitpod.v1.AgentResponseBlock.EnvironmentCreation"> & {
    /**
     * @generated from field: string action_id = 1;
     */
    actionId: string;
    /**
     * @generated from field: string environment_id = 2;
     */
    environmentId: string;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.EnvironmentCreation.
 * Use `create(AgentResponseBlock_EnvironmentCreationSchema)` to create a new message.
 */
export declare const AgentResponseBlock_EnvironmentCreationSchema: GenMessage<AgentResponseBlock_EnvironmentCreation>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock.HostAuthenticationRequired
 */
export type AgentResponseBlock_HostAuthenticationRequired = Message<"gitpod.v1.AgentResponseBlock.HostAuthenticationRequired"> & {
    /**
     * @generated from field: string action_id = 1;
     */
    actionId: string;
    /**
     * @generated from field: string host = 2;
     */
    host: string;
    /**
     * @generated from field: string runner_id = 3;
     */
    runnerId: string;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.HostAuthenticationRequired.
 * Use `create(AgentResponseBlock_HostAuthenticationRequiredSchema)` to create a new message.
 */
export declare const AgentResponseBlock_HostAuthenticationRequiredSchema: GenMessage<AgentResponseBlock_HostAuthenticationRequired>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock.CodeAnnotation
 */
export type AgentResponseBlock_CodeAnnotation = Message<"gitpod.v1.AgentResponseBlock.CodeAnnotation"> & {
    /**
     * @generated from field: string file_path = 1;
     */
    filePath: string;
    /**
     * @generated from field: int32 start_line = 2;
     */
    startLine: number;
    /**
     * @generated from field: int32 end_line = 3;
     */
    endLine: number;
    /**
     * @generated from field: string description = 4;
     */
    description: string;
    /**
     * @generated from field: string title = 5;
     */
    title: string;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.CodeAnnotation.
 * Use `create(AgentResponseBlock_CodeAnnotationSchema)` to create a new message.
 */
export declare const AgentResponseBlock_CodeAnnotationSchema: GenMessage<AgentResponseBlock_CodeAnnotation>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock.TodoGroup
 */
export type AgentResponseBlock_TodoGroup = Message<"gitpod.v1.AgentResponseBlock.TodoGroup"> & {
    /**
     * Agent-controlled identifier for snapshot replacement semantics.
     *
     * @generated from field: string group_id = 1;
     */
    groupId: string;
    /**
     * Timestamp of the latest snapshot update.
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 2;
     */
    updatedAt?: Timestamp;
    /**
     * Complete todo snapshot for this group.
     *
     * @generated from field: repeated gitpod.v1.AgentResponseBlock.TodoItem todos = 3;
     */
    todos: AgentResponseBlock_TodoItem[];
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.TodoGroup.
 * Use `create(AgentResponseBlock_TodoGroupSchema)` to create a new message.
 */
export declare const AgentResponseBlock_TodoGroupSchema: GenMessage<AgentResponseBlock_TodoGroup>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock.TodoItem
 */
export type AgentResponseBlock_TodoItem = Message<"gitpod.v1.AgentResponseBlock.TodoItem"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string title = 2;
     */
    title: string;
    /**
     * @generated from field: gitpod.v1.AgentResponseBlock.TodoItem.Phase phase = 3;
     */
    phase: AgentResponseBlock_TodoItem_Phase;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.TodoItem.
 * Use `create(AgentResponseBlock_TodoItemSchema)` to create a new message.
 */
export declare const AgentResponseBlock_TodoItemSchema: GenMessage<AgentResponseBlock_TodoItem>;
/**
 * @generated from enum gitpod.v1.AgentResponseBlock.TodoItem.Phase
 */
export declare enum AgentResponseBlock_TodoItem_Phase {
    /**
     * @generated from enum value: PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PHASE_PENDING = 1;
     */
    PENDING = 1,
    /**
     * @generated from enum value: PHASE_IN_PROGRESS = 2;
     */
    IN_PROGRESS = 2,
    /**
     * @generated from enum value: PHASE_DONE = 3;
     */
    DONE = 3,
    /**
     * @generated from enum value: PHASE_CLEARED = 4;
     */
    CLEARED = 4
}
/**
 * Describes the enum gitpod.v1.AgentResponseBlock.TodoItem.Phase.
 */
export declare const AgentResponseBlock_TodoItem_PhaseSchema: GenEnum<AgentResponseBlock_TodoItem_Phase>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock.Thought
 */
export type AgentResponseBlock_Thought = Message<"gitpod.v1.AgentResponseBlock.Thought"> & {
    /**
     * @generated from field: string content = 1;
     */
    content: string;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.Thought.
 * Use `create(AgentResponseBlock_ThoughtSchema)` to create a new message.
 */
export declare const AgentResponseBlock_ThoughtSchema: GenMessage<AgentResponseBlock_Thought>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock.UserInputBlockSeen
 */
export type AgentResponseBlock_UserInputBlockSeen = Message<"gitpod.v1.AgentResponseBlock.UserInputBlockSeen"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.UserInputBlockSeen.
 * Use `create(AgentResponseBlock_UserInputBlockSeenSchema)` to create a new message.
 */
export declare const AgentResponseBlock_UserInputBlockSeenSchema: GenMessage<AgentResponseBlock_UserInputBlockSeen>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock.UserInputBlockDeleted
 */
export type AgentResponseBlock_UserInputBlockDeleted = Message<"gitpod.v1.AgentResponseBlock.UserInputBlockDeleted"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.UserInputBlockDeleted.
 * Use `create(AgentResponseBlock_UserInputBlockDeletedSchema)` to create a new message.
 */
export declare const AgentResponseBlock_UserInputBlockDeletedSchema: GenMessage<AgentResponseBlock_UserInputBlockDeleted>;
/**
 * AgentModeChange signals a mode transition in autonomous agent modes (e.g., Ralph mode).
 * This provides structured signaling instead of parsing magic tokens from text output.
 *
 * @generated from message gitpod.v1.AgentResponseBlock.AgentModeChange
 */
export type AgentResponseBlock_AgentModeChange = Message<"gitpod.v1.AgentResponseBlock.AgentModeChange"> & {
    /**
     * @generated from field: gitpod.v1.AgentResponseBlock.AgentModeChange.State state = 1;
     */
    state: AgentResponseBlock_AgentModeChange_State;
    /**
     * Human-readable message describing the mode change
     *
     * @generated from field: string message = 2;
     */
    message: string;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.AgentModeChange.
 * Use `create(AgentResponseBlock_AgentModeChangeSchema)` to create a new message.
 */
export declare const AgentResponseBlock_AgentModeChangeSchema: GenMessage<AgentResponseBlock_AgentModeChange>;
/**
 * @generated from enum gitpod.v1.AgentResponseBlock.AgentModeChange.State
 */
export declare enum AgentResponseBlock_AgentModeChange_State {
    /**
     * @generated from enum value: STATE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Spec is complete, transitioning to implementation phase (Ralph mode)
     *
     * @generated from enum value: STATE_SPEC_COMPLETE = 1;
     */
    SPEC_COMPLETE = 1,
    /**
     * Implementation iteration complete, more work needed
     *
     * @generated from enum value: STATE_ITERATION_COMPLETE = 2;
     */
    ITERATION_COMPLETE = 2,
    /**
     * Autonomous mode fully complete
     *
     * @generated from enum value: STATE_COMPLETE = 3;
     */
    COMPLETE = 3,
    /**
     * Spec mode complete, transitioning to normal interactive mode
     *
     * @generated from enum value: STATE_ONA_SPEC_COMPLETE = 4;
     */
    ONA_SPEC_COMPLETE = 4
}
/**
 * Describes the enum gitpod.v1.AgentResponseBlock.AgentModeChange.State.
 */
export declare const AgentResponseBlock_AgentModeChange_StateSchema: GenEnum<AgentResponseBlock_AgentModeChange_State>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock.AvailableCommand
 */
export type AgentResponseBlock_AvailableCommand = Message<"gitpod.v1.AgentResponseBlock.AvailableCommand"> & {
    /**
     * The command name without the leading slash (e.g., "go-tests", "create-pr")
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Human-readable description of what the command does
     *
     * @generated from field: string description = 2;
     */
    description: string;
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.AvailableCommand.
 * Use `create(AgentResponseBlock_AvailableCommandSchema)` to create a new message.
 */
export declare const AgentResponseBlock_AvailableCommandSchema: GenMessage<AgentResponseBlock_AvailableCommand>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock.AvailableCommands
 */
export type AgentResponseBlock_AvailableCommands = Message<"gitpod.v1.AgentResponseBlock.AvailableCommands"> & {
    /**
     * @generated from field: repeated gitpod.v1.AgentResponseBlock.AvailableCommand commands = 1;
     */
    commands: AgentResponseBlock_AvailableCommand[];
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.AvailableCommands.
 * Use `create(AgentResponseBlock_AvailableCommandsSchema)` to create a new message.
 */
export declare const AgentResponseBlock_AvailableCommandsSchema: GenMessage<AgentResponseBlock_AvailableCommands>;
/**
 * @generated from message gitpod.v1.AgentResponseBlock.UserInputQueueUpdated
 */
export type AgentResponseBlock_UserInputQueueUpdated = Message<"gitpod.v1.AgentResponseBlock.UserInputQueueUpdated"> & {
    /**
     * queued_user_input_ids is the authoritative queue order after a queue mutation.
     *
     * @generated from field: repeated string queued_user_input_ids = 1;
     */
    queuedUserInputIds: string[];
};
/**
 * Describes the message gitpod.v1.AgentResponseBlock.UserInputQueueUpdated.
 * Use `create(AgentResponseBlock_UserInputQueueUpdatedSchema)` to create a new message.
 */
export declare const AgentResponseBlock_UserInputQueueUpdatedSchema: GenMessage<AgentResponseBlock_UserInputQueueUpdated>;
/**
 * @generated from enum gitpod.v1.AgentResponseBlock.Phase
 */
export declare enum AgentResponseBlock_Phase {
    /**
     * @generated from enum value: PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Update replaces the previous output block with the same ID.
     *
     * @generated from enum value: PHASE_UPDATE = 1;
     */
    UPDATE = 1,
    /**
     * Completed indicates that the output block is complete - it overrides any previous output block with the same ID.
     *
     * @generated from enum value: PHASE_COMPLETED = 2;
     */
    COMPLETED = 2,
    /**
     * Delta indicates that the output block is a delta to the previous output block; append to the previous output block.
     *
     * @generated from enum value: PHASE_DELTA = 3;
     */
    DELTA = 3
}
/**
 * Describes the enum gitpod.v1.AgentResponseBlock.Phase.
 */
export declare const AgentResponseBlock_PhaseSchema: GenEnum<AgentResponseBlock_Phase>;
/**
 * @generated from message gitpod.v1.UserInputBlock
 */
export type UserInputBlock = Message<"gitpod.v1.UserInputBlock"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from oneof gitpod.v1.UserInputBlock.input
     */
    input: {
        /**
         * @generated from field: gitpod.v1.UserInputBlock.TextInput text = 20 [deprecated = true];
         * @deprecated
         */
        value: UserInputBlock_TextInput;
        case: "text";
    } | {
        /**
         * @generated from field: gitpod.v1.UserInputBlock.ImageInput image = 21 [deprecated = true];
         * @deprecated
         */
        value: UserInputBlock_ImageInput;
        case: "image";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: repeated gitpod.v1.UserInputBlock.Input inputs = 30;
     */
    inputs: UserInputBlock_Input[];
    /**
     * Timestamp when this block was created. Used for debugging and support bundles.
     *
     * @generated from field: google.protobuf.Timestamp created_at = 100;
     */
    createdAt?: Timestamp;
    /**
     * Integration-specific metadata for this input.
     *
     * @generated from field: gitpod.v1.UserInputMetadata metadata = 120;
     */
    metadata?: UserInputMetadata;
};
/**
 * Describes the message gitpod.v1.UserInputBlock.
 * Use `create(UserInputBlockSchema)` to create a new message.
 */
export declare const UserInputBlockSchema: GenMessage<UserInputBlock>;
/**
 * @generated from message gitpod.v1.UserInputBlock.TextInput
 */
export type UserInputBlock_TextInput = Message<"gitpod.v1.UserInputBlock.TextInput"> & {
    /**
     * @generated from field: string content = 1;
     */
    content: string;
};
/**
 * Describes the message gitpod.v1.UserInputBlock.TextInput.
 * Use `create(UserInputBlock_TextInputSchema)` to create a new message.
 */
export declare const UserInputBlock_TextInputSchema: GenMessage<UserInputBlock_TextInput>;
/**
 * ImageInput allows sending images to the agent.
 * Client must provide the MIME type; backend validates against magic bytes.
 *
 * @generated from message gitpod.v1.UserInputBlock.ImageInput
 */
export type UserInputBlock_ImageInput = Message<"gitpod.v1.UserInputBlock.ImageInput"> & {
    /**
     * Raw image data (max 4MB). Supported formats: PNG, JPEG.
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * @generated from field: string mime_type = 2;
     */
    mimeType: string;
    /**
     * Content-addressed reference to offloaded image data.
     * Set by the runner when storing in the conversation store; data is cleared.
     * Clients never send this field.
     *
     * @generated from field: string data_ref = 3;
     */
    dataRef: string;
};
/**
 * Describes the message gitpod.v1.UserInputBlock.ImageInput.
 * Use `create(UserInputBlock_ImageInputSchema)` to create a new message.
 */
export declare const UserInputBlock_ImageInputSchema: GenMessage<UserInputBlock_ImageInput>;
/**
 * @generated from message gitpod.v1.UserInputBlock.Input
 */
export type UserInputBlock_Input = Message<"gitpod.v1.UserInputBlock.Input"> & {
    /**
     * @generated from oneof gitpod.v1.UserInputBlock.Input.input
     */
    input: {
        /**
         * @generated from field: gitpod.v1.UserInputBlock.TextInput text = 20;
         */
        value: UserInputBlock_TextInput;
        case: "text";
    } | {
        /**
         * @generated from field: gitpod.v1.UserInputBlock.ImageInput image = 21;
         */
        value: UserInputBlock_ImageInput;
        case: "image";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.UserInputBlock.Input.
 * Use `create(UserInputBlock_InputSchema)` to create a new message.
 */
export declare const UserInputBlock_InputSchema: GenMessage<UserInputBlock_Input>;
/**
 * UserInputMetadata carries integration-specific context for a user input.
 * Internal only — not exposed in public SDKs. External API consumers should
 * not set these fields; they are populated by integration handlers.
 *
 * @generated from message gitpod.v1.UserInputMetadata
 */
export type UserInputMetadata = Message<"gitpod.v1.UserInputMetadata"> & {
    /**
     * Origin of this input — set by integration handlers to their host
     * (e.g. "github.com", "slack.com"). Empty for non-integration callers.
     * This field drives emission gating: when set, agent responses are only
     * emitted to the matching integration. Treated as trusted input from
     * integration handlers; not validated against registered hosts.
     *
     * @generated from field: string source = 1;
     */
    source: string;
    /**
     * modes records the structured modes requested for this user input. When
     * present, clients should prefer these modes over legacy prompt prefixes for
     * rendering user-message labels.
     *
     * @generated from field: repeated gitpod.v1.AgentMode modes = 2;
     */
    modes: AgentMode[];
};
/**
 * Describes the message gitpod.v1.UserInputMetadata.
 * Use `create(UserInputMetadataSchema)` to create a new message.
 */
export declare const UserInputMetadataSchema: GenMessage<UserInputMetadata>;
/**
 * AgentMessage is a message sent between agents (e.g. from a parent agent to a
 * child agent execution, or vice versa).
 *
 * @generated from message gitpod.v1.AgentMessage
 */
export type AgentMessage = Message<"gitpod.v1.AgentMessage"> & {
    /**
     * @generated from field: gitpod.v1.AgentMessage.Type type = 1;
     */
    type: AgentMessage_Type;
    /**
     * Free-form payload of the message.
     *
     * @generated from field: string payload = 2;
     */
    payload: string;
    /**
     * The role of the sender in the agent hierarchy.
     *
     * @generated from field: gitpod.v1.AgentMessage.Role role = 3;
     */
    role: AgentMessage_Role;
    /**
     * The execution ID of the agent that sent this message.
     *
     * @generated from field: string sender_execution_id = 4;
     */
    senderExecutionId: string;
};
/**
 * Describes the message gitpod.v1.AgentMessage.
 * Use `create(AgentMessageSchema)` to create a new message.
 */
export declare const AgentMessageSchema: GenMessage<AgentMessage>;
/**
 * @generated from enum gitpod.v1.AgentMessage.Type
 */
export declare enum AgentMessage_Type {
    /**
     * @generated from enum value: TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Regular inter-agent update message.
     *
     * @generated from enum value: TYPE_UPDATE = 1;
     */
    UPDATE = 1,
    /**
     * Signals that the sending agent has completed its task.
     *
     * @generated from enum value: TYPE_COMPLETE = 2;
     */
    COMPLETE = 2
}
/**
 * Describes the enum gitpod.v1.AgentMessage.Type.
 */
export declare const AgentMessage_TypeSchema: GenEnum<AgentMessage_Type>;
/**
 * Role identifies the sender's relationship in the parent/child hierarchy.
 *
 * @generated from enum gitpod.v1.AgentMessage.Role
 */
export declare enum AgentMessage_Role {
    /**
     * @generated from enum value: ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The sender is the parent agent.
     *
     * @generated from enum value: ROLE_PARENT = 1;
     */
    PARENT = 1,
    /**
     * The sender is a child (sub-agent).
     *
     * @generated from enum value: ROLE_CHILD = 2;
     */
    CHILD = 2
}
/**
 * Describes the enum gitpod.v1.AgentMessage.Role.
 */
export declare const AgentMessage_RoleSchema: GenEnum<AgentMessage_Role>;
/**
 * WakeEvent is sent by the backend to wake an agent when a registered interest fires.
 * Delivered via SendToAgentExecution as a new oneof variant.
 *
 * @generated from message gitpod.v1.WakeEvent
 */
export type WakeEvent = Message<"gitpod.v1.WakeEvent"> & {
    /**
     * The interest ID that fired (from WaitingInfo.Interest.id).
     *
     * @generated from field: string interest_id = 1;
     */
    interestId: string;
    /**
     * Interest-specific payload describing what fired.
     *
     * @generated from oneof gitpod.v1.WakeEvent.payload
     */
    payload: {
        /**
         * @generated from field: gitpod.v1.WakeEvent.TimerFired timer = 2;
         */
        value: WakeEvent_TimerFired;
        case: "timer";
    } | {
        /**
         * @generated from field: gitpod.v1.WakeEvent.LoopRetrigger loop_retrigger = 3;
         */
        value: WakeEvent_LoopRetrigger;
        case: "loopRetrigger";
    } | {
        /**
         * @generated from field: gitpod.v1.WakeEvent.EnvironmentPhaseReached environment = 4;
         */
        value: WakeEvent_EnvironmentPhaseReached;
        case: "environment";
    } | {
        /**
         * @generated from field: gitpod.v1.WakeEvent.DevcontainerPhaseReached devcontainer_rebuild = 5;
         */
        value: WakeEvent_DevcontainerPhaseReached;
        case: "devcontainerRebuild";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.WakeEvent.
 * Use `create(WakeEventSchema)` to create a new message.
 */
export declare const WakeEventSchema: GenMessage<WakeEvent>;
/**
 * @generated from message gitpod.v1.WakeEvent.TimerFired
 */
export type WakeEvent_TimerFired = Message<"gitpod.v1.WakeEvent.TimerFired"> & {
    /**
     * The actual time the timer was evaluated as expired.
     *
     * @generated from field: google.protobuf.Timestamp fired_at = 1;
     */
    firedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.WakeEvent.TimerFired.
 * Use `create(WakeEvent_TimerFiredSchema)` to create a new message.
 */
export declare const WakeEvent_TimerFiredSchema: GenMessage<WakeEvent_TimerFired>;
/**
 * @generated from message gitpod.v1.WakeEvent.LoopRetrigger
 */
export type WakeEvent_LoopRetrigger = Message<"gitpod.v1.WakeEvent.LoopRetrigger"> & {
    /**
     * @generated from field: repeated gitpod.v1.WakeEvent.LoopRetrigger.UnmetCondition unmet_conditions = 1;
     */
    unmetConditions: WakeEvent_LoopRetrigger_UnmetCondition[];
    /**
     * @generated from field: map<string, string> outputs = 2;
     */
    outputs: {
        [key: string]: string;
    };
};
/**
 * Describes the message gitpod.v1.WakeEvent.LoopRetrigger.
 * Use `create(WakeEvent_LoopRetriggerSchema)` to create a new message.
 */
export declare const WakeEvent_LoopRetriggerSchema: GenMessage<WakeEvent_LoopRetrigger>;
/**
 * @generated from message gitpod.v1.WakeEvent.LoopRetrigger.UnmetCondition
 */
export type WakeEvent_LoopRetrigger_UnmetCondition = Message<"gitpod.v1.WakeEvent.LoopRetrigger.UnmetCondition"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string expression = 2;
     */
    expression: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: int32 iteration = 4;
     */
    iteration: number;
    /**
     * @generated from field: int32 max_iterations = 5;
     */
    maxIterations: number;
    /**
     * @generated from field: string reason = 6;
     */
    reason: string;
};
/**
 * Describes the message gitpod.v1.WakeEvent.LoopRetrigger.UnmetCondition.
 * Use `create(WakeEvent_LoopRetrigger_UnmetConditionSchema)` to create a new message.
 */
export declare const WakeEvent_LoopRetrigger_UnmetConditionSchema: GenMessage<WakeEvent_LoopRetrigger_UnmetCondition>;
/**
 * @generated from message gitpod.v1.WakeEvent.EnvironmentPhaseReached
 */
export type WakeEvent_EnvironmentPhaseReached = Message<"gitpod.v1.WakeEvent.EnvironmentPhaseReached"> & {
    /**
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * The phase the environment reached (e.g. "running", "stopped", "deleted").
     *
     * @generated from field: string phase = 2;
     */
    phase: string;
    /**
     * @generated from field: repeated string failure_message = 3;
     */
    failureMessage: string[];
};
/**
 * Describes the message gitpod.v1.WakeEvent.EnvironmentPhaseReached.
 * Use `create(WakeEvent_EnvironmentPhaseReachedSchema)` to create a new message.
 */
export declare const WakeEvent_EnvironmentPhaseReachedSchema: GenMessage<WakeEvent_EnvironmentPhaseReached>;
/**
 * @generated from message gitpod.v1.WakeEvent.DevcontainerPhaseReached
 */
export type WakeEvent_DevcontainerPhaseReached = Message<"gitpod.v1.WakeEvent.DevcontainerPhaseReached"> & {
    /**
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * The devcontainer phase reached by the target session.
     *
     * @generated from field: string phase = 2;
     */
    phase: string;
    /**
     * @generated from field: string session_id = 3;
     */
    sessionId: string;
    /**
     * @generated from field: repeated string failure_message = 4;
     */
    failureMessage: string[];
};
/**
 * Describes the message gitpod.v1.WakeEvent.DevcontainerPhaseReached.
 * Use `create(WakeEvent_DevcontainerPhaseReachedSchema)` to create a new message.
 */
export declare const WakeEvent_DevcontainerPhaseReachedSchema: GenMessage<WakeEvent_DevcontainerPhaseReached>;
/**
 * @generated from message gitpod.v1.SendToAgentExecutionRequest
 */
export type SendToAgentExecutionRequest = Message<"gitpod.v1.SendToAgentExecutionRequest"> & {
    /**
     * @generated from field: string agent_execution_id = 1;
     */
    agentExecutionId: string;
    /**
     * @generated from oneof gitpod.v1.SendToAgentExecutionRequest.input
     */
    input: {
        /**
         * @generated from field: gitpod.v1.UserInputBlock user_input = 2;
         */
        value: UserInputBlock;
        case: "userInput";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentMessage agent_message = 3;
         */
        value: AgentMessage;
        case: "agentMessage";
    } | {
        /**
         * @generated from field: gitpod.v1.WakeEvent wake_event = 4;
         */
        value: WakeEvent;
        case: "wakeEvent";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentControlInput control_input = 6;
         */
        value: AgentControlInput;
        case: "controlInput";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * codex_settings contains per-turn desired settings for Codex app user_input sends.
     *
     * @generated from field: gitpod.v1.CodexSettings codex_settings = 5;
     */
    codexSettings?: CodexSettings;
    /**
     * turn_options contains options that apply to this submitted turn.
     *
     * @generated from field: gitpod.v1.TurnOptions turn_options = 7;
     */
    turnOptions?: TurnOptions;
};
/**
 * Describes the message gitpod.v1.SendToAgentExecutionRequest.
 * Use `create(SendToAgentExecutionRequestSchema)` to create a new message.
 */
export declare const SendToAgentExecutionRequestSchema: GenMessage<SendToAgentExecutionRequest>;
/**
 * @generated from message gitpod.v1.SendToAgentExecutionResponse
 */
export type SendToAgentExecutionResponse = Message<"gitpod.v1.SendToAgentExecutionResponse"> & {};
/**
 * Describes the message gitpod.v1.SendToAgentExecutionResponse.
 * Use `create(SendToAgentExecutionResponseSchema)` to create a new message.
 */
export declare const SendToAgentExecutionResponseSchema: GenMessage<SendToAgentExecutionResponse>;
/**
 * @generated from message gitpod.v1.TurnOptions
 */
export type TurnOptions = Message<"gitpod.v1.TurnOptions"> & {
    /**
     * modes contains requested modes for this turn. Agents decide whether a mode
     * remains active after the submitted turn and report durable state via
     * AgentExecution.Status.
     *
     * @generated from field: repeated gitpod.v1.AgentMode modes = 1;
     */
    modes: AgentMode[];
};
/**
 * Describes the message gitpod.v1.TurnOptions.
 * Use `create(TurnOptionsSchema)` to create a new message.
 */
export declare const TurnOptionsSchema: GenMessage<TurnOptions>;
/**
 * @generated from message gitpod.v1.AgentControlInput
 */
export type AgentControlInput = Message<"gitpod.v1.AgentControlInput"> & {
    /**
     * @generated from oneof gitpod.v1.AgentControlInput.control
     */
    control: {
        /**
         * @generated from field: gitpod.v1.AgentControlInput.Compact compact = 1;
         */
        value: AgentControlInput_Compact;
        case: "compact";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentControlInput.Goal goal = 2;
         */
        value: AgentControlInput_Goal;
        case: "goal";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentControlInput.DeleteQueuedMessage delete_queued_message = 3;
         */
        value: AgentControlInput_DeleteQueuedMessage;
        case: "deleteQueuedMessage";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentControlInput.SteerQueuedMessage steer_queued_message = 4;
         */
        value: AgentControlInput_SteerQueuedMessage;
        case: "steerQueuedMessage";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentControlInput.MoveQueuedMessage move_queued_message = 5;
         */
        value: AgentControlInput_MoveQueuedMessage;
        case: "moveQueuedMessage";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.AgentControlInput.
 * Use `create(AgentControlInputSchema)` to create a new message.
 */
export declare const AgentControlInputSchema: GenMessage<AgentControlInput>;
/**
 * @generated from message gitpod.v1.AgentControlInput.Compact
 */
export type AgentControlInput_Compact = Message<"gitpod.v1.AgentControlInput.Compact"> & {};
/**
 * Describes the message gitpod.v1.AgentControlInput.Compact.
 * Use `create(AgentControlInput_CompactSchema)` to create a new message.
 */
export declare const AgentControlInput_CompactSchema: GenMessage<AgentControlInput_Compact>;
/**
 * @generated from message gitpod.v1.AgentControlInput.DeleteQueuedMessage
 */
export type AgentControlInput_DeleteQueuedMessage = Message<"gitpod.v1.AgentControlInput.DeleteQueuedMessage"> & {
    /**
     * @generated from field: string user_input_id = 1;
     */
    userInputId: string;
};
/**
 * Describes the message gitpod.v1.AgentControlInput.DeleteQueuedMessage.
 * Use `create(AgentControlInput_DeleteQueuedMessageSchema)` to create a new message.
 */
export declare const AgentControlInput_DeleteQueuedMessageSchema: GenMessage<AgentControlInput_DeleteQueuedMessage>;
/**
 * @generated from message gitpod.v1.AgentControlInput.Goal
 */
export type AgentControlInput_Goal = Message<"gitpod.v1.AgentControlInput.Goal"> & {
    /**
     * @generated from oneof gitpod.v1.AgentControlInput.Goal.action
     */
    action: {
        /**
         * @generated from field: gitpod.v1.AgentControlInput.Goal.Pause pause = 1;
         */
        value: AgentControlInput_Goal_Pause;
        case: "pause";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentControlInput.Goal.Resume resume = 2;
         */
        value: AgentControlInput_Goal_Resume;
        case: "resume";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentControlInput.Goal.Complete complete = 3;
         */
        value: AgentControlInput_Goal_Complete;
        case: "complete";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentControlInput.Goal.Clear clear = 4;
         */
        value: AgentControlInput_Goal_Clear;
        case: "clear";
    } | {
        /**
         * @generated from field: gitpod.v1.AgentControlInput.Goal.Set set = 5;
         */
        value: AgentControlInput_Goal_Set;
        case: "set";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.AgentControlInput.Goal.
 * Use `create(AgentControlInput_GoalSchema)` to create a new message.
 */
export declare const AgentControlInput_GoalSchema: GenMessage<AgentControlInput_Goal>;
/**
 * @generated from message gitpod.v1.AgentControlInput.Goal.Pause
 */
export type AgentControlInput_Goal_Pause = Message<"gitpod.v1.AgentControlInput.Goal.Pause"> & {};
/**
 * Describes the message gitpod.v1.AgentControlInput.Goal.Pause.
 * Use `create(AgentControlInput_Goal_PauseSchema)` to create a new message.
 */
export declare const AgentControlInput_Goal_PauseSchema: GenMessage<AgentControlInput_Goal_Pause>;
/**
 * @generated from message gitpod.v1.AgentControlInput.Goal.Resume
 */
export type AgentControlInput_Goal_Resume = Message<"gitpod.v1.AgentControlInput.Goal.Resume"> & {};
/**
 * Describes the message gitpod.v1.AgentControlInput.Goal.Resume.
 * Use `create(AgentControlInput_Goal_ResumeSchema)` to create a new message.
 */
export declare const AgentControlInput_Goal_ResumeSchema: GenMessage<AgentControlInput_Goal_Resume>;
/**
 * @generated from message gitpod.v1.AgentControlInput.Goal.Complete
 */
export type AgentControlInput_Goal_Complete = Message<"gitpod.v1.AgentControlInput.Goal.Complete"> & {};
/**
 * Describes the message gitpod.v1.AgentControlInput.Goal.Complete.
 * Use `create(AgentControlInput_Goal_CompleteSchema)` to create a new message.
 */
export declare const AgentControlInput_Goal_CompleteSchema: GenMessage<AgentControlInput_Goal_Complete>;
/**
 * @generated from message gitpod.v1.AgentControlInput.Goal.Clear
 */
export type AgentControlInput_Goal_Clear = Message<"gitpod.v1.AgentControlInput.Goal.Clear"> & {};
/**
 * Describes the message gitpod.v1.AgentControlInput.Goal.Clear.
 * Use `create(AgentControlInput_Goal_ClearSchema)` to create a new message.
 */
export declare const AgentControlInput_Goal_ClearSchema: GenMessage<AgentControlInput_Goal_Clear>;
/**
 * @generated from message gitpod.v1.AgentControlInput.Goal.Set
 */
export type AgentControlInput_Goal_Set = Message<"gitpod.v1.AgentControlInput.Goal.Set"> & {
    /**
     * @generated from field: string objective = 1;
     */
    objective: string;
    /**
     * @generated from field: optional gitpod.v1.AgentExecution.Status.Goal.GoalStatus status = 2;
     */
    status?: AgentExecution_Status_Goal_GoalStatus;
};
/**
 * Describes the message gitpod.v1.AgentControlInput.Goal.Set.
 * Use `create(AgentControlInput_Goal_SetSchema)` to create a new message.
 */
export declare const AgentControlInput_Goal_SetSchema: GenMessage<AgentControlInput_Goal_Set>;
/**
 * @generated from message gitpod.v1.AgentControlInput.SteerQueuedMessage
 */
export type AgentControlInput_SteerQueuedMessage = Message<"gitpod.v1.AgentControlInput.SteerQueuedMessage"> & {
    /**
     * @generated from field: string user_input_id = 1;
     */
    userInputId: string;
};
/**
 * Describes the message gitpod.v1.AgentControlInput.SteerQueuedMessage.
 * Use `create(AgentControlInput_SteerQueuedMessageSchema)` to create a new message.
 */
export declare const AgentControlInput_SteerQueuedMessageSchema: GenMessage<AgentControlInput_SteerQueuedMessage>;
/**
 * @generated from message gitpod.v1.AgentControlInput.MoveQueuedMessage
 */
export type AgentControlInput_MoveQueuedMessage = Message<"gitpod.v1.AgentControlInput.MoveQueuedMessage"> & {
    /**
     * @generated from field: string user_input_id = 1;
     */
    userInputId: string;
    /**
     * before_user_input_id is the queued user input to insert before. Empty means move to the end.
     *
     * @generated from field: string before_user_input_id = 2;
     */
    beforeUserInputId: string;
};
/**
 * Describes the message gitpod.v1.AgentControlInput.MoveQueuedMessage.
 * Use `create(AgentControlInput_MoveQueuedMessageSchema)` to create a new message.
 */
export declare const AgentControlInput_MoveQueuedMessageSchema: GenMessage<AgentControlInput_MoveQueuedMessage>;
/**
 * PromptValidationErrorDetails is returned as an error detail on INVALID_ARGUMENT
 * when a prompt contains deceptive Unicode characters (e.g. bidi overrides).
 * The frontend uses this to offer a one-click fix.
 *
 * @generated from message gitpod.v1.PromptValidationErrorDetails
 */
export type PromptValidationErrorDetails = Message<"gitpod.v1.PromptValidationErrorDetails"> & {
    /**
     * The prompt content with deceptive characters removed.
     *
     * @generated from field: string cleaned_text = 1;
     */
    cleanedText: string;
    /**
     * The number of deceptive characters that were removed.
     *
     * @generated from field: int32 removed_count = 2;
     */
    removedCount: number;
};
/**
 * Describes the message gitpod.v1.PromptValidationErrorDetails.
 * Use `create(PromptValidationErrorDetailsSchema)` to create a new message.
 */
export declare const PromptValidationErrorDetailsSchema: GenMessage<PromptValidationErrorDetails>;
/**
 * @generated from message gitpod.v1.CreateAgentExecutionConversationTokenRequest
 */
export type CreateAgentExecutionConversationTokenRequest = Message<"gitpod.v1.CreateAgentExecutionConversationTokenRequest"> & {
    /**
     * @generated from field: string agent_execution_id = 1;
     */
    agentExecutionId: string;
};
/**
 * Describes the message gitpod.v1.CreateAgentExecutionConversationTokenRequest.
 * Use `create(CreateAgentExecutionConversationTokenRequestSchema)` to create a new message.
 */
export declare const CreateAgentExecutionConversationTokenRequestSchema: GenMessage<CreateAgentExecutionConversationTokenRequest>;
/**
 * @generated from message gitpod.v1.CreateAgentExecutionConversationTokenResponse
 */
export type CreateAgentExecutionConversationTokenResponse = Message<"gitpod.v1.CreateAgentExecutionConversationTokenResponse"> & {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
};
/**
 * Describes the message gitpod.v1.CreateAgentExecutionConversationTokenResponse.
 * Use `create(CreateAgentExecutionConversationTokenResponseSchema)` to create a new message.
 */
export declare const CreateAgentExecutionConversationTokenResponseSchema: GenMessage<CreateAgentExecutionConversationTokenResponse>;
/**
 * @generated from message gitpod.v1.CreateAgentExecutionTranscriptTokenRequest
 */
export type CreateAgentExecutionTranscriptTokenRequest = Message<"gitpod.v1.CreateAgentExecutionTranscriptTokenRequest"> & {
    /**
     * @generated from field: string agent_execution_id = 1;
     */
    agentExecutionId: string;
};
/**
 * Describes the message gitpod.v1.CreateAgentExecutionTranscriptTokenRequest.
 * Use `create(CreateAgentExecutionTranscriptTokenRequestSchema)` to create a new message.
 */
export declare const CreateAgentExecutionTranscriptTokenRequestSchema: GenMessage<CreateAgentExecutionTranscriptTokenRequest>;
/**
 * @generated from message gitpod.v1.CreateAgentExecutionTranscriptTokenResponse
 */
export type CreateAgentExecutionTranscriptTokenResponse = Message<"gitpod.v1.CreateAgentExecutionTranscriptTokenResponse"> & {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
};
/**
 * Describes the message gitpod.v1.CreateAgentExecutionTranscriptTokenResponse.
 * Use `create(CreateAgentExecutionTranscriptTokenResponseSchema)` to create a new message.
 */
export declare const CreateAgentExecutionTranscriptTokenResponseSchema: GenMessage<CreateAgentExecutionTranscriptTokenResponse>;
/**
 * @generated from message gitpod.v1.RunnerSideAgentSpec
 */
export type RunnerSideAgentSpec = Message<"gitpod.v1.RunnerSideAgentSpec"> & {
    /**
     * The prompts configuration for each supported model. One cannot have multiple prompts for the same model - this will return an invalid argument error.
     *
     * @generated from field: repeated gitpod.v1.RunnerSideAgentSpec.Prompts prompts = 1;
     */
    prompts: RunnerSideAgentSpec_Prompts[];
    /**
     * The list of tools required by this agent to function
     *
     * @generated from field: repeated string required_tools = 2;
     */
    requiredTools: string[];
    /**
     * Ordered list of models the runner should try when creating an LLM client.
     * Populated by the backend based on org tier. If empty, the runner falls
     * back to its built-in PreferredModels list (backward compatibility).
     *
     * @generated from field: repeated gitpod.v1.SupportedModel preferred_models = 3;
     */
    preferredModels: SupportedModel[];
};
/**
 * Describes the message gitpod.v1.RunnerSideAgentSpec.
 * Use `create(RunnerSideAgentSpecSchema)` to create a new message.
 */
export declare const RunnerSideAgentSpecSchema: GenMessage<RunnerSideAgentSpec>;
/**
 * @generated from message gitpod.v1.RunnerSideAgentSpec.Prompts
 */
export type RunnerSideAgentSpec_Prompts = Message<"gitpod.v1.RunnerSideAgentSpec.Prompts"> & {
    /**
     * The model these prompts are for
     *
     * @generated from field: gitpod.v1.SupportedModel model = 1;
     */
    model: SupportedModel;
    /**
     * The system prompt that defines the agent's role and capabilities
     *
     * @generated from field: string system_prompt = 2;
     */
    systemPrompt: string;
    /**
     * The initial message sent to the user. If empty, the agent will start in WAITING_FOR_INPUT state
     *
     * @generated from field: string initial_message = 3;
     */
    initialMessage: string;
    /**
     * The prompt used to evaluate agent's performance and provide final assessment
     *
     * @generated from field: string judgement_prompt = 4;
     */
    judgementPrompt: string;
    /**
     * The prompt used to improve the agent's prompt
     *
     * @generated from field: string improve_prompt = 5;
     */
    improvePrompt: string;
};
/**
 * Describes the message gitpod.v1.RunnerSideAgentSpec.Prompts.
 * Use `create(RunnerSideAgentSpec_PromptsSchema)` to create a new message.
 */
export declare const RunnerSideAgentSpec_PromptsSchema: GenMessage<RunnerSideAgentSpec_Prompts>;
/**
 * @generated from message gitpod.v1.InEnvironmentAgentSpec
 */
export type InEnvironmentAgentSpec = Message<"gitpod.v1.InEnvironmentAgentSpec"> & {
    /**
     * @generated from field: gitpod.v1.ServiceSpec service = 1;
     */
    service?: ServiceSpec;
    /**
     * The list of models supported by this in-environment agent
     *
     * @generated from field: repeated gitpod.v1.SupportedModel required_models = 2;
     */
    requiredModels: SupportedModel[];
    /**
     * service_metadata is optional metadata applied when creating the
     * automation service for this agent inside an environment.
     * Use this to set triggers (e.g. postDevcontainerStart) so the service
     * auto-starts on environment restart.
     *
     * @generated from field: gitpod.v1.ServiceMetadata service_metadata = 3;
     */
    serviceMetadata?: ServiceMetadata;
};
/**
 * Describes the message gitpod.v1.InEnvironmentAgentSpec.
 * Use `create(InEnvironmentAgentSpecSchema)` to create a new message.
 */
export declare const InEnvironmentAgentSpecSchema: GenMessage<InEnvironmentAgentSpec>;
/**
 * @generated from message gitpod.v1.StopAgentExecutionRequest
 */
export type StopAgentExecutionRequest = Message<"gitpod.v1.StopAgentExecutionRequest"> & {
    /**
     * @generated from field: string agent_execution_id = 1;
     */
    agentExecutionId: string;
};
/**
 * Describes the message gitpod.v1.StopAgentExecutionRequest.
 * Use `create(StopAgentExecutionRequestSchema)` to create a new message.
 */
export declare const StopAgentExecutionRequestSchema: GenMessage<StopAgentExecutionRequest>;
/**
 * @generated from message gitpod.v1.StopAgentExecutionResponse
 */
export type StopAgentExecutionResponse = Message<"gitpod.v1.StopAgentExecutionResponse"> & {};
/**
 * Describes the message gitpod.v1.StopAgentExecutionResponse.
 * Use `create(StopAgentExecutionResponseSchema)` to create a new message.
 */
export declare const StopAgentExecutionResponseSchema: GenMessage<StopAgentExecutionResponse>;
/**
 * @generated from message gitpod.v1.MCPIntegration
 */
export type MCPIntegration = Message<"gitpod.v1.MCPIntegration"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string url = 3;
     */
    url: string;
    /**
     * Whether the calling user has authenticated with this integration
     * (i.e. has a host authentication token for it).
     *
     * @generated from field: bool enabled = 4;
     */
    enabled: boolean;
};
/**
 * Describes the message gitpod.v1.MCPIntegration.
 * Use `create(MCPIntegrationSchema)` to create a new message.
 */
export declare const MCPIntegrationSchema: GenMessage<MCPIntegration>;
/**
 * @generated from message gitpod.v1.Prompt
 */
export type Prompt = Message<"gitpod.v1.Prompt"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: gitpod.v1.PromptMetadata metadata = 2;
     */
    metadata?: PromptMetadata;
    /**
     * @generated from field: gitpod.v1.PromptSpec spec = 3;
     */
    spec?: PromptSpec;
};
/**
 * Describes the message gitpod.v1.Prompt.
 * Use `create(PromptSchema)` to create a new message.
 */
export declare const PromptSchema: GenMessage<Prompt>;
/**
 * @generated from message gitpod.v1.PromptMetadata
 */
export type PromptMetadata = Message<"gitpod.v1.PromptMetadata"> & {
    /**
     * organization_id is the ID of the organization that contains the prompt
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * name is the human readable name of the prompt
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * description is a description of what the prompt does
     *
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * creator is the identity of the prompt creator
     *
     * @generated from field: gitpod.v1.Subject creator = 4;
     */
    creator?: Subject;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 6;
     */
    updatedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.PromptMetadata.
 * Use `create(PromptMetadataSchema)` to create a new message.
 */
export declare const PromptMetadataSchema: GenMessage<PromptMetadata>;
/**
 * @generated from message gitpod.v1.PromptSpec
 */
export type PromptSpec = Message<"gitpod.v1.PromptSpec"> & {
    /**
     * prompt is the content of the prompt
     *
     * @generated from field: string prompt = 1;
     */
    prompt: string;
    /**
     * is_template indicates if this prompt is a template
     *
     * @generated from field: bool is_template = 2;
     */
    isTemplate: boolean;
    /**
     * is_command indicates if this prompt is a command
     *
     * @generated from field: bool is_command = 3;
     */
    isCommand: boolean;
    /**
     * command is the unique command string within the organization
     *
     * @generated from field: string command = 4;
     */
    command: string;
    /**
     * is_skill indicates if this prompt is a skill (workflow instructions for agents)
     *
     * @generated from field: bool is_skill = 5;
     */
    isSkill: boolean;
};
/**
 * Describes the message gitpod.v1.PromptSpec.
 * Use `create(PromptSpecSchema)` to create a new message.
 */
export declare const PromptSpecSchema: GenMessage<PromptSpec>;
/**
 * @generated from message gitpod.v1.ListPromptsRequest
 */
export type ListPromptsRequest = Message<"gitpod.v1.ListPromptsRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListPromptsRequest.Filter filter = 2;
     */
    filter?: ListPromptsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListPromptsRequest.
 * Use `create(ListPromptsRequestSchema)` to create a new message.
 */
export declare const ListPromptsRequestSchema: GenMessage<ListPromptsRequest>;
/**
 * @generated from message gitpod.v1.ListPromptsRequest.Filter
 */
export type ListPromptsRequest_Filter = Message<"gitpod.v1.ListPromptsRequest.Filter"> & {
    /**
     * @generated from field: bool is_template = 1;
     */
    isTemplate: boolean;
    /**
     * @generated from field: bool is_command = 2;
     */
    isCommand: boolean;
    /**
     * @generated from field: string command = 3;
     */
    command: string;
    /**
     * @generated from field: string command_prefix = 4;
     */
    commandPrefix: string;
    /**
     * @generated from field: bool is_skill = 5;
     */
    isSkill: boolean;
    /**
     * exclude_prompt_content omits the large spec.prompt text from the response.
     * Other spec fields (is_template, is_command, command, is_skill) are still returned.
     * Use GetPrompt to retrieve the full prompt content when needed.
     *
     * @generated from field: bool exclude_prompt_content = 6;
     */
    excludePromptContent: boolean;
    /**
     * search performs case-insensitive search across prompt name, description, and command.
     *
     * @generated from field: string search = 7;
     */
    search: string;
};
/**
 * Describes the message gitpod.v1.ListPromptsRequest.Filter.
 * Use `create(ListPromptsRequest_FilterSchema)` to create a new message.
 */
export declare const ListPromptsRequest_FilterSchema: GenMessage<ListPromptsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListPromptsResponse
 */
export type ListPromptsResponse = Message<"gitpod.v1.ListPromptsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.Prompt prompts = 2;
     */
    prompts: Prompt[];
};
/**
 * Describes the message gitpod.v1.ListPromptsResponse.
 * Use `create(ListPromptsResponseSchema)` to create a new message.
 */
export declare const ListPromptsResponseSchema: GenMessage<ListPromptsResponse>;
/**
 * @generated from message gitpod.v1.GetPromptRequest
 */
export type GetPromptRequest = Message<"gitpod.v1.GetPromptRequest"> & {
    /**
     * @generated from field: string prompt_id = 1;
     */
    promptId: string;
};
/**
 * Describes the message gitpod.v1.GetPromptRequest.
 * Use `create(GetPromptRequestSchema)` to create a new message.
 */
export declare const GetPromptRequestSchema: GenMessage<GetPromptRequest>;
/**
 * @generated from message gitpod.v1.GetPromptResponse
 */
export type GetPromptResponse = Message<"gitpod.v1.GetPromptResponse"> & {
    /**
     * @generated from field: gitpod.v1.Prompt prompt = 1;
     */
    prompt?: Prompt;
};
/**
 * Describes the message gitpod.v1.GetPromptResponse.
 * Use `create(GetPromptResponseSchema)` to create a new message.
 */
export declare const GetPromptResponseSchema: GenMessage<GetPromptResponse>;
/**
 * @generated from message gitpod.v1.CreatePromptRequest
 */
export type CreatePromptRequest = Message<"gitpod.v1.CreatePromptRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string prompt = 3;
     */
    prompt: string;
    /**
     * @generated from field: bool is_template = 4;
     */
    isTemplate: boolean;
    /**
     * @generated from field: bool is_command = 5;
     */
    isCommand: boolean;
    /**
     * @generated from field: string command = 6;
     */
    command: string;
    /**
     * @generated from field: bool is_skill = 7;
     */
    isSkill: boolean;
};
/**
 * Describes the message gitpod.v1.CreatePromptRequest.
 * Use `create(CreatePromptRequestSchema)` to create a new message.
 */
export declare const CreatePromptRequestSchema: GenMessage<CreatePromptRequest>;
/**
 * @generated from message gitpod.v1.CreatePromptResponse
 */
export type CreatePromptResponse = Message<"gitpod.v1.CreatePromptResponse"> & {
    /**
     * @generated from field: gitpod.v1.Prompt prompt = 1;
     */
    prompt?: Prompt;
};
/**
 * Describes the message gitpod.v1.CreatePromptResponse.
 * Use `create(CreatePromptResponseSchema)` to create a new message.
 */
export declare const CreatePromptResponseSchema: GenMessage<CreatePromptResponse>;
/**
 * @generated from message gitpod.v1.UpdatePromptRequest
 */
export type UpdatePromptRequest = Message<"gitpod.v1.UpdatePromptRequest"> & {
    /**
     * The ID of the prompt to update
     *
     * @generated from field: string prompt_id = 1;
     */
    promptId: string;
    /**
     * Metadata updates
     *
     * @generated from field: optional gitpod.v1.UpdatePromptRequest.Metadata metadata = 2;
     */
    metadata?: UpdatePromptRequest_Metadata;
    /**
     * Spec updates
     *
     * @generated from field: optional gitpod.v1.UpdatePromptRequest.Spec spec = 3;
     */
    spec?: UpdatePromptRequest_Spec;
};
/**
 * Describes the message gitpod.v1.UpdatePromptRequest.
 * Use `create(UpdatePromptRequestSchema)` to create a new message.
 */
export declare const UpdatePromptRequestSchema: GenMessage<UpdatePromptRequest>;
/**
 * @generated from message gitpod.v1.UpdatePromptRequest.Metadata
 */
export type UpdatePromptRequest_Metadata = Message<"gitpod.v1.UpdatePromptRequest.Metadata"> & {
    /**
     * The name of the prompt
     *
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * A description of what the prompt does
     *
     * @generated from field: optional string description = 2;
     */
    description?: string;
};
/**
 * Describes the message gitpod.v1.UpdatePromptRequest.Metadata.
 * Use `create(UpdatePromptRequest_MetadataSchema)` to create a new message.
 */
export declare const UpdatePromptRequest_MetadataSchema: GenMessage<UpdatePromptRequest_Metadata>;
/**
 * @generated from message gitpod.v1.UpdatePromptRequest.Spec
 */
export type UpdatePromptRequest_Spec = Message<"gitpod.v1.UpdatePromptRequest.Spec"> & {
    /**
     * The prompt content
     *
     * @generated from field: optional string prompt = 1;
     */
    prompt?: string;
    /**
     * Whether this prompt is a template
     *
     * @generated from field: optional bool is_template = 2;
     */
    isTemplate?: boolean;
    /**
     * Whether this prompt is a command
     *
     * @generated from field: optional bool is_command = 3;
     */
    isCommand?: boolean;
    /**
     * The command string (unique within organization)
     *
     * @generated from field: optional string command = 4;
     */
    command?: string;
    /**
     * Whether this prompt is a skill
     *
     * @generated from field: optional bool is_skill = 5;
     */
    isSkill?: boolean;
};
/**
 * Describes the message gitpod.v1.UpdatePromptRequest.Spec.
 * Use `create(UpdatePromptRequest_SpecSchema)` to create a new message.
 */
export declare const UpdatePromptRequest_SpecSchema: GenMessage<UpdatePromptRequest_Spec>;
/**
 * @generated from message gitpod.v1.UpdatePromptResponse
 */
export type UpdatePromptResponse = Message<"gitpod.v1.UpdatePromptResponse"> & {
    /**
     * @generated from field: gitpod.v1.Prompt prompt = 1;
     */
    prompt?: Prompt;
};
/**
 * Describes the message gitpod.v1.UpdatePromptResponse.
 * Use `create(UpdatePromptResponseSchema)` to create a new message.
 */
export declare const UpdatePromptResponseSchema: GenMessage<UpdatePromptResponse>;
/**
 * @generated from message gitpod.v1.DeletePromptRequest
 */
export type DeletePromptRequest = Message<"gitpod.v1.DeletePromptRequest"> & {
    /**
     * @generated from field: string prompt_id = 1;
     */
    promptId: string;
};
/**
 * Describes the message gitpod.v1.DeletePromptRequest.
 * Use `create(DeletePromptRequestSchema)` to create a new message.
 */
export declare const DeletePromptRequestSchema: GenMessage<DeletePromptRequest>;
/**
 * @generated from message gitpod.v1.DeletePromptResponse
 */
export type DeletePromptResponse = Message<"gitpod.v1.DeletePromptResponse"> & {};
/**
 * Describes the message gitpod.v1.DeletePromptResponse.
 * Use `create(DeletePromptResponseSchema)` to create a new message.
 */
export declare const DeletePromptResponseSchema: GenMessage<DeletePromptResponse>;
/**
 * AgentMode defines the operational mode of an agent
 *
 * @generated from enum gitpod.v1.AgentMode
 */
export declare enum AgentMode {
    /**
     * Default execution mode - standard agent behavior
     *
     * @generated from enum value: AGENT_MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Execution mode - agent performs tasks and makes changes
     *
     * @generated from enum value: AGENT_MODE_EXECUTION = 1;
     */
    EXECUTION = 1,
    /**
     * Planning mode - agent focuses on analysis and planning
     *
     * @generated from enum value: AGENT_MODE_PLANNING = 2;
     */
    PLANNING = 2,
    /**
     * Ralph mode - autonomous planning and implementation mode
     *
     * @generated from enum value: AGENT_MODE_RALPH = 3;
     */
    RALPH = 3,
    /**
     * Spec mode - planning phase followed by interactive implementation
     *
     * @generated from enum value: AGENT_MODE_SPEC = 4;
     */
    SPEC = 4,
    /**
     * Goal mode - agent treats the user input as a goal objective
     *
     * @generated from enum value: AGENT_MODE_GOAL = 5;
     */
    GOAL = 5
}
/**
 * Describes the enum gitpod.v1.AgentMode.
 */
export declare const AgentModeSchema: GenEnum<AgentMode>;
/**
 * CodexOpenAIModel is the static allowlist of concrete OpenAI models that the
 * Codex app runtime can select through Ona's Codex picker.
 *
 * @generated from enum gitpod.v1.CodexOpenAIModel
 */
export declare enum CodexOpenAIModel {
    /**
     * @generated from enum value: CODEX_OPEN_AI_MODEL_UNSPECIFIED = 0;
     */
    CODEX_OPEN_AI_MODEL_UNSPECIFIED = 0,
    /**
     * @generated from enum value: CODEX_OPEN_AI_MODEL_GPT_5_5 = 1;
     */
    CODEX_OPEN_AI_MODEL_GPT_5_5 = 1,
    /**
     * @generated from enum value: CODEX_OPEN_AI_MODEL_GPT_5_4 = 2;
     */
    CODEX_OPEN_AI_MODEL_GPT_5_4 = 2,
    /**
     * @generated from enum value: CODEX_OPEN_AI_MODEL_GPT_5_4_MINI = 3 [deprecated = true];
     * @deprecated
     */
    CODEX_OPEN_AI_MODEL_GPT_5_4_MINI = 3,
    /**
     * @generated from enum value: CODEX_OPEN_AI_MODEL_GPT_5_3_CODEX = 4 [deprecated = true];
     * @deprecated
     */
    CODEX_OPEN_AI_MODEL_GPT_5_3_CODEX = 4,
    /**
     * @generated from enum value: CODEX_OPEN_AI_MODEL_GPT_5_3_CODEX_SPARK = 5 [deprecated = true];
     * @deprecated
     */
    CODEX_OPEN_AI_MODEL_GPT_5_3_CODEX_SPARK = 5,
    /**
     * @generated from enum value: CODEX_OPEN_AI_MODEL_GPT_5_2 = 6 [deprecated = true];
     * @deprecated
     */
    CODEX_OPEN_AI_MODEL_GPT_5_2 = 6,
    /**
     * @generated from enum value: CODEX_OPEN_AI_MODEL_GPT_5_6_SOL = 7;
     */
    CODEX_OPEN_AI_MODEL_GPT_5_6_SOL = 7,
    /**
     * @generated from enum value: CODEX_OPEN_AI_MODEL_GPT_5_6_TERRA = 8;
     */
    CODEX_OPEN_AI_MODEL_GPT_5_6_TERRA = 8,
    /**
     * @generated from enum value: CODEX_OPEN_AI_MODEL_GPT_5_6_LUNA = 9;
     */
    CODEX_OPEN_AI_MODEL_GPT_5_6_LUNA = 9
}
/**
 * Describes the enum gitpod.v1.CodexOpenAIModel.
 */
export declare const CodexOpenAIModelSchema: GenEnum<CodexOpenAIModel>;
/**
 * CodexReasoningEffort is the static allowlist of reasoning efforts supported
 * by the Codex app runtime.
 *
 * @generated from enum gitpod.v1.CodexReasoningEffort
 */
export declare enum CodexReasoningEffort {
    /**
     * @generated from enum value: CODEX_REASONING_EFFORT_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CODEX_REASONING_EFFORT_LOW = 1;
     */
    LOW = 1,
    /**
     * @generated from enum value: CODEX_REASONING_EFFORT_MEDIUM = 2;
     */
    MEDIUM = 2,
    /**
     * @generated from enum value: CODEX_REASONING_EFFORT_HIGH = 3;
     */
    HIGH = 3,
    /**
     * @generated from enum value: CODEX_REASONING_EFFORT_EXTRA_HIGH = 4;
     */
    EXTRA_HIGH = 4
}
/**
 * Describes the enum gitpod.v1.CodexReasoningEffort.
 */
export declare const CodexReasoningEffortSchema: GenEnum<CodexReasoningEffort>;
/**
 * CodexServiceTier is the static allowlist of service tiers supported by the
 * Codex app runtime.
 *
 * @generated from enum gitpod.v1.CodexServiceTier
 */
export declare enum CodexServiceTier {
    /**
     * @generated from enum value: CODEX_SERVICE_TIER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CODEX_SERVICE_TIER_FAST = 1;
     */
    FAST = 1
}
/**
 * Describes the enum gitpod.v1.CodexServiceTier.
 */
export declare const CodexServiceTierSchema: GenEnum<CodexServiceTier>;
/**
 * LLMDisabledCapability enumerates LLM/runtime capabilities that are unavailable
 * for a selected execution.
 *
 * @generated from enum gitpod.v1.LLMDisabledCapability
 */
export declare enum LLMDisabledCapability {
    /**
     * @generated from enum value: LLM_DISABLED_CAPABILITY_UNSPECIFIED = 0;
     */
    LLM_DISABLED_CAPABILITY_UNSPECIFIED = 0,
    /**
     * Disables model-side web search features exposed by the agent runtime.
     *
     * @generated from enum value: LLM_DISABLED_CAPABILITY_WEB_SEARCH = 1;
     */
    LLM_DISABLED_CAPABILITY_WEB_SEARCH = 1,
    /**
     * Disables low-latency service tiers such as Codex Fast mode.
     *
     * @generated from enum value: LLM_DISABLED_CAPABILITY_FAST_SERVICE_TIER = 2;
     */
    LLM_DISABLED_CAPABILITY_FAST_SERVICE_TIER = 2,
    /**
     * Disables provider-hosted tool search such as Anthropic server-side tool search.
     *
     * @generated from enum value: LLM_DISABLED_CAPABILITY_SERVER_SIDE_TOOL_SEARCH = 3;
     */
    LLM_DISABLED_CAPABILITY_SERVER_SIDE_TOOL_SEARCH = 3,
    /**
     * Disables native Codex goal mode.
     *
     * Disables Codex's Responses Lite request shape for provider compatibility.
     *
     * @generated from enum value: LLM_DISABLED_CAPABILITY_GOAL_MODE = 4;
     */
    LLM_DISABLED_CAPABILITY_GOAL_MODE = 4
}
/**
 * Describes the enum gitpod.v1.LLMDisabledCapability.
 */
export declare const LLMDisabledCapabilitySchema: GenEnum<LLMDisabledCapability>;
/**
 * AgentExecutionFailureReason represents the reason why an agent execution failed
 *
 * @generated from enum gitpod.v1.AgentExecutionFailureReason
 */
export declare enum AgentExecutionFailureReason {
    /**
     * @generated from enum value: AGENT_EXECUTION_FAILURE_REASON_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The agent execution failed due to environment issues
     *
     * @generated from enum value: AGENT_EXECUTION_FAILURE_REASON_ENVIRONMENT = 1;
     */
    ENVIRONMENT = 1,
    /**
     * The agent execution failed due to service issues
     *
     * @generated from enum value: AGENT_EXECUTION_FAILURE_REASON_SERVICE = 2;
     */
    SERVICE = 2,
    /**
     * The agent execution failed due to LLM integration issues
     *
     * @generated from enum value: AGENT_EXECUTION_FAILURE_REASON_LLM_INTEGRATION = 3;
     */
    LLM_INTEGRATION = 3,
    /**
     * Deprecated: The agent execution failed due to internal errors
     * Use AGENT_EXECUTION_FAILURE_REASON_AGENT_EXECUTION instead
     *
     * @generated from enum value: AGENT_EXECUTION_FAILURE_REASON_INTERNAL = 4 [deprecated = true];
     * @deprecated
     */
    INTERNAL = 4,
    /**
     * The agent execution failed due to agent execution errors
     *
     * @generated from enum value: AGENT_EXECUTION_FAILURE_REASON_AGENT_EXECUTION = 5;
     */
    AGENT_EXECUTION = 5
}
/**
 * Describes the enum gitpod.v1.AgentExecutionFailureReason.
 */
export declare const AgentExecutionFailureReasonSchema: GenEnum<AgentExecutionFailureReason>;
/**
 * AgentExecutionRole represents the role of an agent execution
 *
 * @generated from enum gitpod.v1.AgentExecutionRole
 */
export declare enum AgentExecutionRole {
    /**
     * @generated from enum value: AGENT_EXECUTION_ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Default role for agent executions
     *
     * @generated from enum value: AGENT_EXECUTION_ROLE_DEFAULT = 1;
     */
    DEFAULT = 1,
    /**
     * Workflow role for agent executions that are part of a workflow
     *
     * @generated from enum value: AGENT_EXECUTION_ROLE_WORKFLOW = 2;
     */
    WORKFLOW = 2
}
/**
 * Describes the enum gitpod.v1.AgentExecutionRole.
 */
export declare const AgentExecutionRoleSchema: GenEnum<AgentExecutionRole>;
/**
 * MCPIntegrationPhase represents the status of an MCP integration connection
 *
 * @generated from enum gitpod.v1.MCPIntegrationPhase
 */
export declare enum MCPIntegrationPhase {
    /**
     * @generated from enum value: MCP_INTEGRATION_PHASE_UNSPECIFIED = 0;
     */
    MCP_INTEGRATION_PHASE_UNSPECIFIED = 0,
    /**
     * The MCP integration is initializing connection
     *
     * @generated from enum value: MCP_INTEGRATION_PHASE_INITIALIZING = 10;
     */
    MCP_INTEGRATION_PHASE_INITIALIZING = 10,
    /**
     * The MCP integration is connected and operational
     *
     * @generated from enum value: MCP_INTEGRATION_PHASE_READY = 20;
     */
    MCP_INTEGRATION_PHASE_READY = 20,
    /**
     * The MCP integration has failed and requires intervention
     *
     * @generated from enum value: MCP_INTEGRATION_PHASE_FAILED = 30;
     */
    MCP_INTEGRATION_PHASE_FAILED = 30,
    /**
     * The MCP integration is unavailable (server down, network issue)
     *
     * @generated from enum value: MCP_INTEGRATION_PHASE_UNAVAILABLE = 40;
     */
    MCP_INTEGRATION_PHASE_UNAVAILABLE = 40
}
/**
 * Describes the enum gitpod.v1.MCPIntegrationPhase.
 */
export declare const MCPIntegrationPhaseSchema: GenEnum<MCPIntegrationPhase>;
/**
 * @generated from service gitpod.v1.AgentService
 */
export declare const AgentService: GenService<{
    /**
     * Starts (or triggers) an agent run using a provided agent.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.AgentService.StartAgent
     */
    startAgent: {
        methodKind: "unary";
        input: typeof StartAgentRequestSchema;
        output: typeof StartAgentResponseSchema;
    };
    /**
     * Lists all agent runs matching the specified filter.
     *
     * Use this method to track multiple agent runs and their associated resources. Results are ordered by their creation time with the newest first.
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
     * @generated from rpc gitpod.v1.AgentService.ListAgentExecutions
     */
    listAgentExecutions: {
        methodKind: "unary";
        input: typeof ListAgentExecutionsRequestSchema;
        output: typeof ListAgentExecutionsResponseSchema;
    };
    /**
     * Gets details about a specific agent run, including its metadata, specification,
     * and status (phase, error messages, and usage statistics).
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.AgentService.GetAgentExecution
     */
    getAgentExecution: {
        methodKind: "unary";
        input: typeof GetAgentExecutionRequestSchema;
        output: typeof GetAgentExecutionResponseSchema;
    };
    /**
     * Deletes an agent run.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.AgentService.DeleteAgentExecution
     */
    deleteAgentExecution: {
        methodKind: "unary";
        input: typeof DeleteAgentExecutionRequestSchema;
        output: typeof DeleteAgentExecutionResponseSchema;
    };
    /**
     * Sends user input to an active agent run.
     *
     * This method is used to provide interactive or conversation-based input
     * to an agent. The agent can respond with output blocks containing
     * text, file changes, or tool usage requests.
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
     * @generated from rpc gitpod.v1.AgentService.SendToAgentExecution
     */
    sendToAgentExecution: {
        methodKind: "unary";
        input: typeof SendToAgentExecutionRequestSchema;
        output: typeof SendToAgentExecutionResponseSchema;
    };
    /**
     * Creates a token for conversation access with a specific agent run.
     *
     * This method generates a temporary token that can be used to securely
     * connect to an ongoing agent conversation, for example in a web UI.
     *
     * ### Examples
     *
     * - Create a token to join an agent run conversation in a front-end application:
     *
     *   ```yaml
     *   agentExecutionId: "6fa1a3c7-fbb7-49d1-ba56-1890dc7c4c35"
     *   ```
     *
     * @generated from rpc gitpod.v1.AgentService.CreateAgentExecutionConversationToken
     */
    createAgentExecutionConversationToken: {
        methodKind: "unary";
        input: typeof CreateAgentExecutionConversationTokenRequestSchema;
        output: typeof CreateAgentExecutionConversationTokenResponseSchema;
    };
    /**
     * Stops an active agent execution.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.AgentService.StopAgentExecution
     */
    stopAgentExecution: {
        methodKind: "unary";
        input: typeof StopAgentExecutionRequestSchema;
        output: typeof StopAgentExecutionResponseSchema;
    };
    /**
     * Lists all prompts matching the specified criteria.
     *
     * Use this method to find and browse prompts across your organization.
     * Results are ordered by their creation time with the newest first.
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
     * @generated from rpc gitpod.v1.AgentService.ListPrompts
     */
    listPrompts: {
        methodKind: "unary";
        input: typeof ListPromptsRequestSchema;
        output: typeof ListPromptsResponseSchema;
    };
    /**
     * Gets details about a specific prompt including name, description,
     * and prompt content.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.AgentService.GetPrompt
     */
    getPrompt: {
        methodKind: "unary";
        input: typeof GetPromptRequestSchema;
        output: typeof GetPromptResponseSchema;
    };
    /**
     * Creates a new prompt.
     *
     * Use this method to:
     * - Define new prompts for templates or commands
     * - Set up organization-wide prompt libraries
     *
     * @generated from rpc gitpod.v1.AgentService.CreatePrompt
     */
    createPrompt: {
        methodKind: "unary";
        input: typeof CreatePromptRequestSchema;
        output: typeof CreatePromptResponseSchema;
    };
    /**
     * Updates an existing prompt.
     *
     * Use this method to:
     * - Modify prompt content or metadata
     * - Change prompt type (template/command)
     *
     * @generated from rpc gitpod.v1.AgentService.UpdatePrompt
     */
    updatePrompt: {
        methodKind: "unary";
        input: typeof UpdatePromptRequestSchema;
        output: typeof UpdatePromptResponseSchema;
    };
    /**
     * Deletes a prompt.
     *
     * Use this method to:
     * - Remove unused prompts
     *
     * @generated from rpc gitpod.v1.AgentService.DeletePrompt
     */
    deletePrompt: {
        methodKind: "unary";
        input: typeof DeletePromptRequestSchema;
        output: typeof DeletePromptResponseSchema;
    };
}>;
