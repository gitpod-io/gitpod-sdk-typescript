import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { AgentCodeContext, AgentExecution_Status_OutputValue, CodexSettings, PullRequest } from "./agent_pb";
import type { CountRequest, CountResponse } from "./count_pb";
import type { Subject } from "./identity_pb";
import type { PaginationRequest, PaginationResponse, Sort, SortOrder } from "./pagination_pb";
import type { DateRange } from "./usage_pb";
import type { WorkflowError } from "./workflow_error_pb";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/workflow.proto.
 */
export declare const file_gitpod_v1_workflow: GenFile;
/**
 * CreateWorkflowRequest creates a new workflow.
 *
 * @generated from message gitpod.v1.CreateWorkflowRequest
 */
export type CreateWorkflowRequest = Message<"gitpod.v1.CreateWorkflowRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated gitpod.v1.WorkflowTrigger triggers = 3;
     */
    triggers: WorkflowTrigger[];
    /**
     * @generated from field: gitpod.v1.WorkflowAction action = 4;
     */
    action?: WorkflowAction;
    /**
     * @generated from field: gitpod.v1.WorkflowAction report = 5;
     */
    report?: WorkflowAction;
    /**
     * Optional executor for the workflow. If not provided, defaults to the creator.
     * Must be either the caller themselves or a service account.
     *
     * @generated from field: optional gitpod.v1.Subject executor = 6;
     */
    executor?: Subject;
    /**
     * Agent that runs this workflow. When empty, the agent is resolved at run
     * time (defaults to the Ona agent).
     *
     * @generated from field: string agent_id = 7;
     */
    agentId: string;
    /**
     * Codex app agent settings. Only meaningful when agent_id refers to the
     * Codex app agent.
     *
     * @generated from field: gitpod.v1.CodexSettings codex_settings = 8;
     */
    codexSettings?: CodexSettings;
};
/**
 * Describes the message gitpod.v1.CreateWorkflowRequest.
 * Use `create(CreateWorkflowRequestSchema)` to create a new message.
 */
export declare const CreateWorkflowRequestSchema: GenMessage<CreateWorkflowRequest>;
/**
 * @generated from message gitpod.v1.CreateWorkflowResponse
 */
export type CreateWorkflowResponse = Message<"gitpod.v1.CreateWorkflowResponse"> & {
    /**
     * @generated from field: gitpod.v1.Workflow workflow = 1;
     */
    workflow?: Workflow;
};
/**
 * Describes the message gitpod.v1.CreateWorkflowResponse.
 * Use `create(CreateWorkflowResponseSchema)` to create a new message.
 */
export declare const CreateWorkflowResponseSchema: GenMessage<CreateWorkflowResponse>;
/**
 * GetWorkflowRequest gets details about a specific workflow.
 *
 * @generated from message gitpod.v1.GetWorkflowRequest
 */
export type GetWorkflowRequest = Message<"gitpod.v1.GetWorkflowRequest"> & {
    /**
     * @generated from field: string workflow_id = 1;
     */
    workflowId: string;
};
/**
 * Describes the message gitpod.v1.GetWorkflowRequest.
 * Use `create(GetWorkflowRequestSchema)` to create a new message.
 */
export declare const GetWorkflowRequestSchema: GenMessage<GetWorkflowRequest>;
/**
 * @generated from message gitpod.v1.GetWorkflowResponse
 */
export type GetWorkflowResponse = Message<"gitpod.v1.GetWorkflowResponse"> & {
    /**
     * @generated from field: gitpod.v1.Workflow workflow = 1;
     */
    workflow?: Workflow;
};
/**
 * Describes the message gitpod.v1.GetWorkflowResponse.
 * Use `create(GetWorkflowResponseSchema)` to create a new message.
 */
export declare const GetWorkflowResponseSchema: GenMessage<GetWorkflowResponse>;
/**
 * UpdateWorkflowRequest updates a workflow's configuration.
 *
 * @generated from message gitpod.v1.UpdateWorkflowRequest
 */
export type UpdateWorkflowRequest = Message<"gitpod.v1.UpdateWorkflowRequest"> & {
    /**
     * @generated from field: string workflow_id = 1;
     */
    workflowId: string;
    /**
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * @generated from field: optional string description = 3;
     */
    description?: string;
    /**
     * @generated from field: repeated gitpod.v1.WorkflowTrigger triggers = 4;
     */
    triggers: WorkflowTrigger[];
    /**
     * @generated from field: optional gitpod.v1.WorkflowAction action = 5;
     */
    action?: WorkflowAction;
    /**
     * @generated from field: optional gitpod.v1.WorkflowAction report = 6;
     */
    report?: WorkflowAction;
    /**
     * @generated from field: optional gitpod.v1.Subject executor = 7;
     */
    executor?: Subject;
    /**
     * When set, enables or disables the workflow. A disabled workflow will not
     * be triggered by any automatic trigger and manual starts are rejected.
     *
     * @generated from field: optional bool disabled = 8;
     */
    disabled?: boolean;
    /**
     * Agent that runs this workflow. When empty, the agent is resolved at run
     * time (defaults to the Ona agent).
     *
     * @generated from field: optional string agent_id = 9;
     */
    agentId?: string;
    /**
     * Codex app agent settings. Only meaningful when agent_id refers to the
     * Codex app agent.
     *
     * @generated from field: optional gitpod.v1.CodexSettings codex_settings = 10;
     */
    codexSettings?: CodexSettings;
};
/**
 * Describes the message gitpod.v1.UpdateWorkflowRequest.
 * Use `create(UpdateWorkflowRequestSchema)` to create a new message.
 */
export declare const UpdateWorkflowRequestSchema: GenMessage<UpdateWorkflowRequest>;
/**
 * @generated from message gitpod.v1.UpdateWorkflowResponse
 */
export type UpdateWorkflowResponse = Message<"gitpod.v1.UpdateWorkflowResponse"> & {
    /**
     * @generated from field: gitpod.v1.Workflow workflow = 1;
     */
    workflow?: Workflow;
};
/**
 * Describes the message gitpod.v1.UpdateWorkflowResponse.
 * Use `create(UpdateWorkflowResponseSchema)` to create a new message.
 */
export declare const UpdateWorkflowResponseSchema: GenMessage<UpdateWorkflowResponse>;
/**
 * ListWorkflowsRequest lists workflows with optional filtering.
 *
 * @generated from message gitpod.v1.ListWorkflowsRequest
 */
export type ListWorkflowsRequest = Message<"gitpod.v1.ListWorkflowsRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListWorkflowsRequest.Filter filter = 2;
     */
    filter?: ListWorkflowsRequest_Filter;
    /**
     * sort specifies the order of results. When unspecified, results are sorted
     * alphabetically by name ascending.
     *
     * @generated from field: gitpod.v1.ListWorkflowsRequest.Sort sort = 3;
     */
    sort?: ListWorkflowsRequest_Sort;
    /**
     * count controls whether the response includes a bounded total count.
     *
     * @generated from field: gitpod.v1.CountRequest count = 4;
     */
    count?: CountRequest;
};
/**
 * Describes the message gitpod.v1.ListWorkflowsRequest.
 * Use `create(ListWorkflowsRequestSchema)` to create a new message.
 */
export declare const ListWorkflowsRequestSchema: GenMessage<ListWorkflowsRequest>;
/**
 * @generated from message gitpod.v1.ListWorkflowsRequest.Filter
 */
export type ListWorkflowsRequest_Filter = Message<"gitpod.v1.ListWorkflowsRequest.Filter"> & {
    /**
     * @generated from field: repeated string workflow_ids = 1;
     */
    workflowIds: string[];
    /**
     * search performs case-insensitive search across workflow name, description, and ID
     *
     * @generated from field: string search = 2;
     */
    search: string;
    /**
     * creator_ids filters workflows by creator user IDs
     *
     * @generated from field: repeated string creator_ids = 3;
     */
    creatorIds: string[];
    /**
     * status_phases filters workflows by the phase of their latest execution.
     * Only workflows whose most recent execution matches one of the specified phases are returned.
     *
     * @generated from field: repeated gitpod.v1.WorkflowExecutionPhase status_phases = 4;
     */
    statusPhases: WorkflowExecutionPhase[];
    /**
     * has_failed_execution_since filters workflows that have at least one failed execution
     * with create_time >= the specified timestamp. A failed execution is one that is COMPLETED
     * with failed_action_count > 0, or STOPPED with failed_action_count > 0 or a non-empty
     * failure_message. This filter is mutually exclusive with status_phases.
     *
     * @generated from field: google.protobuf.Timestamp has_failed_execution_since = 5;
     */
    hasFailedExecutionSince?: Timestamp;
    /**
     * disabled filters workflows by their disabled state.
     * When set to true, only disabled workflows are returned.
     * When set to false, only enabled workflows are returned.
     * When unset, all workflows are returned regardless of disabled state.
     *
     * @generated from field: optional bool disabled = 6;
     */
    disabled?: boolean;
};
/**
 * Describes the message gitpod.v1.ListWorkflowsRequest.Filter.
 * Use `create(ListWorkflowsRequest_FilterSchema)` to create a new message.
 */
export declare const ListWorkflowsRequest_FilterSchema: GenMessage<ListWorkflowsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListWorkflowsRequest.Sort
 */
export type ListWorkflowsRequest_Sort = Message<"gitpod.v1.ListWorkflowsRequest.Sort"> & {
    /**
     * @generated from field: gitpod.v1.ListWorkflowsRequest.SortField field = 1;
     */
    field: ListWorkflowsRequest_SortField;
    /**
     * @generated from field: gitpod.v1.SortOrder order = 2;
     */
    order: SortOrder;
};
/**
 * Describes the message gitpod.v1.ListWorkflowsRequest.Sort.
 * Use `create(ListWorkflowsRequest_SortSchema)` to create a new message.
 */
export declare const ListWorkflowsRequest_SortSchema: GenMessage<ListWorkflowsRequest_Sort>;
/**
 * @generated from enum gitpod.v1.ListWorkflowsRequest.SortField
 */
export declare enum ListWorkflowsRequest_SortField {
    /**
     * @generated from enum value: SORT_FIELD_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Sort alphabetically by workflow name.
     *
     * @generated from enum value: SORT_FIELD_NAME = 1;
     */
    NAME = 1,
    /**
     * Sort by the most recent terminal execution's finished_at.
     * Workflows with no executions appear last.
     *
     * @generated from enum value: SORT_FIELD_RECENTLY_COMPLETED = 2;
     */
    RECENTLY_COMPLETED = 2
}
/**
 * Describes the enum gitpod.v1.ListWorkflowsRequest.SortField.
 */
export declare const ListWorkflowsRequest_SortFieldSchema: GenEnum<ListWorkflowsRequest_SortField>;
/**
 * @generated from message gitpod.v1.ListWorkflowsResponse
 */
export type ListWorkflowsResponse = Message<"gitpod.v1.ListWorkflowsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.Workflow workflows = 2;
     */
    workflows: Workflow[];
    /**
     * count is the bounded total count of matching workflows, present only when
     * requested via CountRequest.include on the first page.
     *
     * @generated from field: gitpod.v1.CountResponse count = 3;
     */
    count?: CountResponse;
};
/**
 * Describes the message gitpod.v1.ListWorkflowsResponse.
 * Use `create(ListWorkflowsResponseSchema)` to create a new message.
 */
export declare const ListWorkflowsResponseSchema: GenMessage<ListWorkflowsResponse>;
/**
 * DeleteWorkflowRequest deletes a workflow permanently.
 *
 * @generated from message gitpod.v1.DeleteWorkflowRequest
 */
export type DeleteWorkflowRequest = Message<"gitpod.v1.DeleteWorkflowRequest"> & {
    /**
     * @generated from field: string workflow_id = 1;
     */
    workflowId: string;
    /**
     * force indicates whether to immediately delete the workflow and all related resources.
     * When true, performs cascading deletion of:
     * - All workflow executions
     * - All workflow execution actions
     * - All environments created by workflow actions
     * - All agent executions created by workflow actions
     * - The workflow itself
     * When false (default), marks workflow executions for deletion and relies on
     * background reconciliation to clean up resources.
     *
     * @generated from field: bool force = 2;
     */
    force: boolean;
};
/**
 * Describes the message gitpod.v1.DeleteWorkflowRequest.
 * Use `create(DeleteWorkflowRequestSchema)` to create a new message.
 */
export declare const DeleteWorkflowRequestSchema: GenMessage<DeleteWorkflowRequest>;
/**
 * @generated from message gitpod.v1.DeleteWorkflowResponse
 */
export type DeleteWorkflowResponse = Message<"gitpod.v1.DeleteWorkflowResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteWorkflowResponse.
 * Use `create(DeleteWorkflowResponseSchema)` to create a new message.
 */
export declare const DeleteWorkflowResponseSchema: GenMessage<DeleteWorkflowResponse>;
/**
 * GetWorkflowWebhookSecretRequest retrieves the webhook secret for a workflow.
 *
 * @generated from message gitpod.v1.GetWorkflowWebhookSecretRequest
 */
export type GetWorkflowWebhookSecretRequest = Message<"gitpod.v1.GetWorkflowWebhookSecretRequest"> & {
    /**
     * @generated from field: string workflow_id = 1;
     */
    workflowId: string;
};
/**
 * Describes the message gitpod.v1.GetWorkflowWebhookSecretRequest.
 * Use `create(GetWorkflowWebhookSecretRequestSchema)` to create a new message.
 */
export declare const GetWorkflowWebhookSecretRequestSchema: GenMessage<GetWorkflowWebhookSecretRequest>;
/**
 * @generated from message gitpod.v1.GetWorkflowWebhookSecretResponse
 */
export type GetWorkflowWebhookSecretResponse = Message<"gitpod.v1.GetWorkflowWebhookSecretResponse"> & {
    /**
     * The decrypted webhook secret
     *
     * @generated from field: string secret = 1;
     */
    secret: string;
};
/**
 * Describes the message gitpod.v1.GetWorkflowWebhookSecretResponse.
 * Use `create(GetWorkflowWebhookSecretResponseSchema)` to create a new message.
 */
export declare const GetWorkflowWebhookSecretResponseSchema: GenMessage<GetWorkflowWebhookSecretResponse>;
/**
 * @generated from message gitpod.v1.RotateWorkflowWebhookSecretRequest
 */
export type RotateWorkflowWebhookSecretRequest = Message<"gitpod.v1.RotateWorkflowWebhookSecretRequest"> & {
    /**
     * @generated from field: string workflow_id = 1;
     */
    workflowId: string;
};
/**
 * Describes the message gitpod.v1.RotateWorkflowWebhookSecretRequest.
 * Use `create(RotateWorkflowWebhookSecretRequestSchema)` to create a new message.
 */
export declare const RotateWorkflowWebhookSecretRequestSchema: GenMessage<RotateWorkflowWebhookSecretRequest>;
/**
 * @generated from message gitpod.v1.RotateWorkflowWebhookSecretResponse
 */
export type RotateWorkflowWebhookSecretResponse = Message<"gitpod.v1.RotateWorkflowWebhookSecretResponse"> & {
    /**
     * The new webhook secret (decrypted)
     *
     * @generated from field: string secret = 1;
     */
    secret: string;
};
/**
 * Describes the message gitpod.v1.RotateWorkflowWebhookSecretResponse.
 * Use `create(RotateWorkflowWebhookSecretResponseSchema)` to create a new message.
 */
export declare const RotateWorkflowWebhookSecretResponseSchema: GenMessage<RotateWorkflowWebhookSecretResponse>;
/**
 * StartWorkflowRequest starts a workflow execution.
 *
 * @generated from message gitpod.v1.StartWorkflowRequest
 */
export type StartWorkflowRequest = Message<"gitpod.v1.StartWorkflowRequest"> & {
    /**
     * @generated from field: string workflow_id = 1;
     */
    workflowId: string;
    /**
     * Optional context override for the execution.
     * When provided, replaces the workflow's default trigger context.
     * User must have appropriate permissions on the overridden resources.
     * Supports Projects, Repositories, and Agent context types.
     * FromTrigger context type is not supported for manual overrides.
     *
     * @generated from field: optional gitpod.v1.WorkflowTriggerContext context_override = 2;
     */
    contextOverride?: WorkflowTriggerContext;
    /**
     * Parameters to substitute into workflow steps using Go template syntax.
     * Use {{ .Parameters.key_name }} in templatable fields (task.command, agent.prompt,
     * pull_request.title/description/branch, trigger context agent.prompt).
     * Keys must match pattern ^[a-zA-Z_][a-zA-Z0-9_]*$
     * Maximum 10 parameters allowed.
     * Empty map is treated as no parameters provided.
     *
     * @generated from field: map<string, string> parameters = 3;
     */
    parameters: {
        [key: string]: string;
    };
};
/**
 * Describes the message gitpod.v1.StartWorkflowRequest.
 * Use `create(StartWorkflowRequestSchema)` to create a new message.
 */
export declare const StartWorkflowRequestSchema: GenMessage<StartWorkflowRequest>;
/**
 * @generated from message gitpod.v1.StartWorkflowResponse
 */
export type StartWorkflowResponse = Message<"gitpod.v1.StartWorkflowResponse"> & {
    /**
     * @generated from field: gitpod.v1.WorkflowExecution workflow_execution = 1;
     */
    workflowExecution?: WorkflowExecution;
};
/**
 * Describes the message gitpod.v1.StartWorkflowResponse.
 * Use `create(StartWorkflowResponseSchema)` to create a new message.
 */
export declare const StartWorkflowResponseSchema: GenMessage<StartWorkflowResponse>;
/**
 * ListWorkflowExecutionsRequest lists workflow executions with optional filtering.
 *
 * @generated from message gitpod.v1.ListWorkflowExecutionsRequest
 */
export type ListWorkflowExecutionsRequest = Message<"gitpod.v1.ListWorkflowExecutionsRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListWorkflowExecutionsRequest.Filter filter = 2;
     */
    filter?: ListWorkflowExecutionsRequest_Filter;
    /**
     * sort specifies the order of results. When unspecified, results are sorted by
     * operational priority (running first, then failed, then completed, then others).
     * Supported sort fields: startedAt, finishedAt, createdAt.
     *
     * @generated from field: gitpod.v1.Sort sort = 3;
     */
    sort?: Sort;
};
/**
 * Describes the message gitpod.v1.ListWorkflowExecutionsRequest.
 * Use `create(ListWorkflowExecutionsRequestSchema)` to create a new message.
 */
export declare const ListWorkflowExecutionsRequestSchema: GenMessage<ListWorkflowExecutionsRequest>;
/**
 * @generated from message gitpod.v1.ListWorkflowExecutionsRequest.Filter
 */
export type ListWorkflowExecutionsRequest_Filter = Message<"gitpod.v1.ListWorkflowExecutionsRequest.Filter"> & {
    /**
     * @generated from field: repeated string workflow_execution_ids = 1;
     */
    workflowExecutionIds: string[];
    /**
     * @generated from field: repeated string workflow_ids = 2;
     */
    workflowIds: string[];
    /**
     * @generated from field: repeated gitpod.v1.WorkflowExecutionPhase status_phases = 3;
     */
    statusPhases: WorkflowExecutionPhase[];
    /**
     * @generated from field: optional bool has_failed_actions = 4;
     */
    hasFailedActions?: boolean;
    /**
     * search performs case-insensitive search across workflow execution ID and trigger type
     *
     * @generated from field: string search = 5;
     */
    search: string;
};
/**
 * Describes the message gitpod.v1.ListWorkflowExecutionsRequest.Filter.
 * Use `create(ListWorkflowExecutionsRequest_FilterSchema)` to create a new message.
 */
export declare const ListWorkflowExecutionsRequest_FilterSchema: GenMessage<ListWorkflowExecutionsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListWorkflowExecutionsResponse
 */
export type ListWorkflowExecutionsResponse = Message<"gitpod.v1.ListWorkflowExecutionsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.WorkflowExecution workflow_executions = 2;
     */
    workflowExecutions: WorkflowExecution[];
};
/**
 * Describes the message gitpod.v1.ListWorkflowExecutionsResponse.
 * Use `create(ListWorkflowExecutionsResponseSchema)` to create a new message.
 */
export declare const ListWorkflowExecutionsResponseSchema: GenMessage<ListWorkflowExecutionsResponse>;
/**
 * GetWorkflowExecutionRequest gets details about a specific workflow execution.
 *
 * @generated from message gitpod.v1.GetWorkflowExecutionRequest
 */
export type GetWorkflowExecutionRequest = Message<"gitpod.v1.GetWorkflowExecutionRequest"> & {
    /**
     * @generated from field: string workflow_execution_id = 1;
     */
    workflowExecutionId: string;
};
/**
 * Describes the message gitpod.v1.GetWorkflowExecutionRequest.
 * Use `create(GetWorkflowExecutionRequestSchema)` to create a new message.
 */
export declare const GetWorkflowExecutionRequestSchema: GenMessage<GetWorkflowExecutionRequest>;
/**
 * @generated from message gitpod.v1.GetWorkflowExecutionResponse
 */
export type GetWorkflowExecutionResponse = Message<"gitpod.v1.GetWorkflowExecutionResponse"> & {
    /**
     * @generated from field: gitpod.v1.WorkflowExecution workflow_execution = 1;
     */
    workflowExecution?: WorkflowExecution;
};
/**
 * Describes the message gitpod.v1.GetWorkflowExecutionResponse.
 * Use `create(GetWorkflowExecutionResponseSchema)` to create a new message.
 */
export declare const GetWorkflowExecutionResponseSchema: GenMessage<GetWorkflowExecutionResponse>;
/**
 * CancelWorkflowExecutionRequest cancels a running workflow execution.
 *
 * @generated from message gitpod.v1.CancelWorkflowExecutionRequest
 */
export type CancelWorkflowExecutionRequest = Message<"gitpod.v1.CancelWorkflowExecutionRequest"> & {
    /**
     * @generated from field: string workflow_execution_id = 1;
     */
    workflowExecutionId: string;
};
/**
 * Describes the message gitpod.v1.CancelWorkflowExecutionRequest.
 * Use `create(CancelWorkflowExecutionRequestSchema)` to create a new message.
 */
export declare const CancelWorkflowExecutionRequestSchema: GenMessage<CancelWorkflowExecutionRequest>;
/**
 * @generated from message gitpod.v1.CancelWorkflowExecutionResponse
 */
export type CancelWorkflowExecutionResponse = Message<"gitpod.v1.CancelWorkflowExecutionResponse"> & {};
/**
 * Describes the message gitpod.v1.CancelWorkflowExecutionResponse.
 * Use `create(CancelWorkflowExecutionResponseSchema)` to create a new message.
 */
export declare const CancelWorkflowExecutionResponseSchema: GenMessage<CancelWorkflowExecutionResponse>;
/**
 * ListWorkflowExecutionActionsRequest lists workflow execution actions with optional filtering.
 *
 * @generated from message gitpod.v1.ListWorkflowExecutionActionsRequest
 */
export type ListWorkflowExecutionActionsRequest = Message<"gitpod.v1.ListWorkflowExecutionActionsRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListWorkflowExecutionActionsRequest.Filter filter = 2;
     */
    filter?: ListWorkflowExecutionActionsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListWorkflowExecutionActionsRequest.
 * Use `create(ListWorkflowExecutionActionsRequestSchema)` to create a new message.
 */
export declare const ListWorkflowExecutionActionsRequestSchema: GenMessage<ListWorkflowExecutionActionsRequest>;
/**
 * @generated from message gitpod.v1.ListWorkflowExecutionActionsRequest.Filter
 */
export type ListWorkflowExecutionActionsRequest_Filter = Message<"gitpod.v1.ListWorkflowExecutionActionsRequest.Filter"> & {
    /**
     * @generated from field: repeated string workflow_execution_action_ids = 1;
     */
    workflowExecutionActionIds: string[];
    /**
     * @generated from field: repeated string workflow_execution_ids = 2;
     */
    workflowExecutionIds: string[];
    /**
     * @generated from field: repeated string workflow_ids = 3;
     */
    workflowIds: string[];
    /**
     * @generated from field: repeated gitpod.v1.WorkflowExecutionActionPhase phases = 4;
     */
    phases: WorkflowExecutionActionPhase[];
};
/**
 * Describes the message gitpod.v1.ListWorkflowExecutionActionsRequest.Filter.
 * Use `create(ListWorkflowExecutionActionsRequest_FilterSchema)` to create a new message.
 */
export declare const ListWorkflowExecutionActionsRequest_FilterSchema: GenMessage<ListWorkflowExecutionActionsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListWorkflowExecutionActionsResponse
 */
export type ListWorkflowExecutionActionsResponse = Message<"gitpod.v1.ListWorkflowExecutionActionsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.WorkflowExecutionAction workflow_execution_actions = 2;
     */
    workflowExecutionActions: WorkflowExecutionAction[];
};
/**
 * Describes the message gitpod.v1.ListWorkflowExecutionActionsResponse.
 * Use `create(ListWorkflowExecutionActionsResponseSchema)` to create a new message.
 */
export declare const ListWorkflowExecutionActionsResponseSchema: GenMessage<ListWorkflowExecutionActionsResponse>;
/**
 * GetWorkflowExecutionActionRequest gets details about a specific workflow execution action.
 *
 * @generated from message gitpod.v1.GetWorkflowExecutionActionRequest
 */
export type GetWorkflowExecutionActionRequest = Message<"gitpod.v1.GetWorkflowExecutionActionRequest"> & {
    /**
     * @generated from field: string workflow_execution_action_id = 1;
     */
    workflowExecutionActionId: string;
};
/**
 * Describes the message gitpod.v1.GetWorkflowExecutionActionRequest.
 * Use `create(GetWorkflowExecutionActionRequestSchema)` to create a new message.
 */
export declare const GetWorkflowExecutionActionRequestSchema: GenMessage<GetWorkflowExecutionActionRequest>;
/**
 * @generated from message gitpod.v1.GetWorkflowExecutionActionResponse
 */
export type GetWorkflowExecutionActionResponse = Message<"gitpod.v1.GetWorkflowExecutionActionResponse"> & {
    /**
     * @generated from field: gitpod.v1.WorkflowExecutionAction workflow_execution_action = 1;
     */
    workflowExecutionAction?: WorkflowExecutionAction;
};
/**
 * Describes the message gitpod.v1.GetWorkflowExecutionActionResponse.
 * Use `create(GetWorkflowExecutionActionResponseSchema)` to create a new message.
 */
export declare const GetWorkflowExecutionActionResponseSchema: GenMessage<GetWorkflowExecutionActionResponse>;
/**
 * CancelWorkflowExecutionActionRequest cancels a running workflow execution action.
 *
 * @generated from message gitpod.v1.CancelWorkflowExecutionActionRequest
 */
export type CancelWorkflowExecutionActionRequest = Message<"gitpod.v1.CancelWorkflowExecutionActionRequest"> & {
    /**
     * @generated from field: string workflow_execution_action_id = 1;
     */
    workflowExecutionActionId: string;
};
/**
 * Describes the message gitpod.v1.CancelWorkflowExecutionActionRequest.
 * Use `create(CancelWorkflowExecutionActionRequestSchema)` to create a new message.
 */
export declare const CancelWorkflowExecutionActionRequestSchema: GenMessage<CancelWorkflowExecutionActionRequest>;
/**
 * @generated from message gitpod.v1.CancelWorkflowExecutionActionResponse
 */
export type CancelWorkflowExecutionActionResponse = Message<"gitpod.v1.CancelWorkflowExecutionActionResponse"> & {};
/**
 * Describes the message gitpod.v1.CancelWorkflowExecutionActionResponse.
 * Use `create(CancelWorkflowExecutionActionResponseSchema)` to create a new message.
 */
export declare const CancelWorkflowExecutionActionResponseSchema: GenMessage<CancelWorkflowExecutionActionResponse>;
/**
 * Workflow represents a workflow configuration.
 *
 * @generated from message gitpod.v1.Workflow
 */
export type Workflow = Message<"gitpod.v1.Workflow"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: gitpod.v1.Workflow.Metadata metadata = 2;
     */
    metadata?: Workflow_Metadata;
    /**
     * @generated from field: gitpod.v1.Workflow.Spec spec = 3;
     */
    spec?: Workflow_Spec;
    /**
     * Webhook URL for triggering this workflow via HTTP POST
     * Format: {base_url}/workflows/{workflow_id}/webhooks
     *
     * @generated from field: string webhook_url = 4;
     */
    webhookUrl: string;
};
/**
 * Describes the message gitpod.v1.Workflow.
 * Use `create(WorkflowSchema)` to create a new message.
 */
export declare const WorkflowSchema: GenMessage<Workflow>;
/**
 * WorkflowMetadata contains workflow metadata.
 *
 * @generated from message gitpod.v1.Workflow.Metadata
 */
export type Workflow_Metadata = Message<"gitpod.v1.Workflow.Metadata"> & {
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
     * @generated from field: gitpod.v1.Subject executor = 6;
     */
    executor?: Subject;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 5;
     */
    updatedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.Workflow.Metadata.
 * Use `create(Workflow_MetadataSchema)` to create a new message.
 */
export declare const Workflow_MetadataSchema: GenMessage<Workflow_Metadata>;
/**
 * @generated from message gitpod.v1.Workflow.Spec
 */
export type Workflow_Spec = Message<"gitpod.v1.Workflow.Spec"> & {
    /**
     * @generated from field: repeated gitpod.v1.WorkflowTrigger triggers = 3;
     */
    triggers: WorkflowTrigger[];
    /**
     * @generated from field: gitpod.v1.WorkflowAction action = 4;
     */
    action?: WorkflowAction;
    /**
     * @generated from field: gitpod.v1.WorkflowAction report = 5;
     */
    report?: WorkflowAction;
    /**
     * Marks workflow as pending deletion
     *
     * @generated from field: bool deleting = 6;
     */
    deleting: boolean;
    /**
     * When true, the workflow will not be triggered by any automatic trigger
     * (cron, webhook, pull request). Manual starts via StartWorkflow are also
     * rejected while disabled.
     *
     * @generated from field: bool disabled = 7;
     */
    disabled: boolean;
    /**
     * Agent that runs this workflow. When empty, the agent is resolved at run
     * time (defaults to the Ona agent), preserving behavior for workflows
     * created before agent selection existed.
     *
     * @generated from field: string agent_id = 8;
     */
    agentId: string;
    /**
     * Codex app agent settings (model, reasoning effort, service tier). Only
     * meaningful when agent_id refers to the Codex app agent.
     *
     * @generated from field: gitpod.v1.CodexSettings codex_settings = 9;
     */
    codexSettings?: CodexSettings;
};
/**
 * Describes the message gitpod.v1.Workflow.Spec.
 * Use `create(Workflow_SpecSchema)` to create a new message.
 */
export declare const Workflow_SpecSchema: GenMessage<Workflow_Spec>;
/**
 * WorkflowTrigger defines when a workflow should be executed.
 *
 * Each trigger type defines a specific condition that will cause the workflow to execute:
 * - Manual: Triggered explicitly by user action via StartWorkflow RPC
 * - Time: Triggered automatically based on cron schedule
 * - PullRequest: Triggered automatically when specified PR events occur
 *
 * Trigger Semantics:
 * - Each trigger instance can create multiple workflow executions
 * - Multiple triggers of the same workflow can fire simultaneously
 * - Each trigger execution is independent and tracked separately
 * - Triggers are evaluated in the context specified by WorkflowTriggerContext
 *
 * @generated from message gitpod.v1.WorkflowTrigger
 */
export type WorkflowTrigger = Message<"gitpod.v1.WorkflowTrigger"> & {
    /**
     * @generated from oneof gitpod.v1.WorkflowTrigger.trigger
     */
    trigger: {
        /**
         * @generated from field: gitpod.v1.WorkflowTrigger.Manual manual = 1;
         */
        value: WorkflowTrigger_Manual;
        case: "manual";
    } | {
        /**
         * @generated from field: gitpod.v1.WorkflowTrigger.Time time = 2;
         */
        value: WorkflowTrigger_Time;
        case: "time";
    } | {
        /**
         * @generated from field: gitpod.v1.WorkflowTrigger.PullRequest pull_request = 3;
         */
        value: WorkflowTrigger_PullRequest;
        case: "pullRequest";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: gitpod.v1.WorkflowTriggerContext context = 4;
     */
    context?: WorkflowTriggerContext;
};
/**
 * Describes the message gitpod.v1.WorkflowTrigger.
 * Use `create(WorkflowTriggerSchema)` to create a new message.
 */
export declare const WorkflowTriggerSchema: GenMessage<WorkflowTrigger>;
/**
 * Manual trigger - executed when StartWorkflow RPC is called.
 * No additional configuration needed.
 *
 * @generated from message gitpod.v1.WorkflowTrigger.Manual
 */
export type WorkflowTrigger_Manual = Message<"gitpod.v1.WorkflowTrigger.Manual"> & {};
/**
 * Describes the message gitpod.v1.WorkflowTrigger.Manual.
 * Use `create(WorkflowTrigger_ManualSchema)` to create a new message.
 */
export declare const WorkflowTrigger_ManualSchema: GenMessage<WorkflowTrigger_Manual>;
/**
 * Time-based trigger - executed automatically based on cron schedule.
 * Uses standard cron expression format (minute hour day month weekday).
 *
 * @generated from message gitpod.v1.WorkflowTrigger.Time
 */
export type WorkflowTrigger_Time = Message<"gitpod.v1.WorkflowTrigger.Time"> & {
    /**
     * @generated from field: string cron_expression = 1;
     */
    cronExpression: string;
};
/**
 * Describes the message gitpod.v1.WorkflowTrigger.Time.
 * Use `create(WorkflowTrigger_TimeSchema)` to create a new message.
 */
export declare const WorkflowTrigger_TimeSchema: GenMessage<WorkflowTrigger_Time>;
/**
 * Pull request trigger - executed when specified PR events occur.
 * Only triggers for PRs in repositories matching the trigger context.
 *
 * @generated from message gitpod.v1.WorkflowTrigger.PullRequest
 */
export type WorkflowTrigger_PullRequest = Message<"gitpod.v1.WorkflowTrigger.PullRequest"> & {
    /**
     * @generated from field: repeated gitpod.v1.WorkflowTrigger.PullRequestEvent events = 1;
     */
    events: WorkflowTrigger_PullRequestEvent[];
    /**
     * webhook_id is the optional ID of a webhook that this trigger is bound to.
     * When set, the trigger will be activated when the webhook receives events.
     * This allows multiple workflows to share a single webhook endpoint.
     *
     * @generated from field: optional string webhook_id = 2;
     */
    webhookId?: string;
    /**
     * integration_id is the optional ID of an integration that acts as the source of webhook events.
     * When set, the trigger will be activated when the webhook receives events.
     *
     * @generated from field: optional string integration_id = 3;
     */
    integrationId?: string;
};
/**
 * Describes the message gitpod.v1.WorkflowTrigger.PullRequest.
 * Use `create(WorkflowTrigger_PullRequestSchema)` to create a new message.
 */
export declare const WorkflowTrigger_PullRequestSchema: GenMessage<WorkflowTrigger_PullRequest>;
/**
 * WorkflowPREvent defines pull request events that can trigger workflows.
 *
 * @generated from enum gitpod.v1.WorkflowTrigger.PullRequestEvent
 */
export declare enum WorkflowTrigger_PullRequestEvent {
    /**
     * @generated from enum value: PULL_REQUEST_EVENT_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PULL_REQUEST_EVENT_OPENED = 1;
     */
    OPENED = 1,
    /**
     * @generated from enum value: PULL_REQUEST_EVENT_UPDATED = 2;
     */
    UPDATED = 2,
    /**
     * @generated from enum value: PULL_REQUEST_EVENT_APPROVED = 3;
     */
    APPROVED = 3,
    /**
     * @generated from enum value: PULL_REQUEST_EVENT_MERGED = 4;
     */
    MERGED = 4,
    /**
     * @generated from enum value: PULL_REQUEST_EVENT_CLOSED = 5;
     */
    CLOSED = 5,
    /**
     * @generated from enum value: PULL_REQUEST_EVENT_READY_FOR_REVIEW = 6;
     */
    READY_FOR_REVIEW = 6,
    /**
     * @generated from enum value: PULL_REQUEST_EVENT_REVIEW_REQUESTED = 7;
     */
    REVIEW_REQUESTED = 7
}
/**
 * Describes the enum gitpod.v1.WorkflowTrigger.PullRequestEvent.
 */
export declare const WorkflowTrigger_PullRequestEventSchema: GenEnum<WorkflowTrigger_PullRequestEvent>;
/**
 * WorkflowTriggerContext defines the context in which a workflow should run.
 *
 * Context determines where and how the workflow executes:
 * - Projects: Execute in specific project environments
 * - Repositories: Execute in environments created from repository URLs
 * - Agent: Execute in agent-managed environments with custom prompts
 * - FromTrigger: Use context derived from the trigger event (PR-specific)
 *
 * Context Usage by Trigger Type:
 * - Manual: Can use any context type
 * - Time: Typically uses Projects or Repositories context
 * - PullRequest: Can use any context, FromTrigger uses PR repository context
 * - Incident: Typically uses Projects or Repositories context (no inherent repo context)
 *
 * @generated from message gitpod.v1.WorkflowTriggerContext
 */
export type WorkflowTriggerContext = Message<"gitpod.v1.WorkflowTriggerContext"> & {
    /**
     * @generated from oneof gitpod.v1.WorkflowTriggerContext.context
     */
    context: {
        /**
         * @generated from field: gitpod.v1.WorkflowTriggerContext.Projects projects = 1;
         */
        value: WorkflowTriggerContext_Projects;
        case: "projects";
    } | {
        /**
         * @generated from field: gitpod.v1.WorkflowTriggerContext.Repositories repositories = 2;
         */
        value: WorkflowTriggerContext_Repositories;
        case: "repositories";
    } | {
        /**
         * @generated from field: gitpod.v1.WorkflowTriggerContext.Agent agent = 3;
         */
        value: WorkflowTriggerContext_Agent;
        case: "agent";
    } | {
        /**
         * @generated from field: gitpod.v1.WorkflowTriggerContext.FromTrigger from_trigger = 4;
         */
        value: WorkflowTriggerContext_FromTrigger;
        case: "fromTrigger";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.WorkflowTriggerContext.
 * Use `create(WorkflowTriggerContextSchema)` to create a new message.
 */
export declare const WorkflowTriggerContextSchema: GenMessage<WorkflowTriggerContext>;
/**
 * Execute workflow in specific project environments.
 * Creates environments for each specified project.
 *
 * @generated from message gitpod.v1.WorkflowTriggerContext.Projects
 */
export type WorkflowTriggerContext_Projects = Message<"gitpod.v1.WorkflowTriggerContext.Projects"> & {
    /**
     * @generated from field: repeated string project_ids = 1;
     */
    projectIds: string[];
};
/**
 * Describes the message gitpod.v1.WorkflowTriggerContext.Projects.
 * Use `create(WorkflowTriggerContext_ProjectsSchema)` to create a new message.
 */
export declare const WorkflowTriggerContext_ProjectsSchema: GenMessage<WorkflowTriggerContext_Projects>;
/**
 * Execute workflow in environments created from repository URLs.
 * Supports both explicit repository URLs and search patterns.
 *
 * @generated from message gitpod.v1.WorkflowTriggerContext.Repositories
 */
export type WorkflowTriggerContext_Repositories = Message<"gitpod.v1.WorkflowTriggerContext.Repositories"> & {
    /**
     * @generated from oneof gitpod.v1.WorkflowTriggerContext.Repositories.repository_selector
     */
    repositorySelector: {
        /**
         * @generated from field: gitpod.v1.WorkflowTriggerContext.Repositories.RepositoryURLs repository_urls = 1;
         */
        value: WorkflowTriggerContext_Repositories_RepositoryURLs;
        case: "repositoryUrls";
    } | {
        /**
         * @generated from field: gitpod.v1.WorkflowTriggerContext.Repositories.RepositorySelector repo_selector = 2;
         */
        value: WorkflowTriggerContext_Repositories_RepositorySelector;
        case: "repoSelector";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: string environment_class_id = 3;
     */
    environmentClassId: string;
};
/**
 * Describes the message gitpod.v1.WorkflowTriggerContext.Repositories.
 * Use `create(WorkflowTriggerContext_RepositoriesSchema)` to create a new message.
 */
export declare const WorkflowTriggerContext_RepositoriesSchema: GenMessage<WorkflowTriggerContext_Repositories>;
/**
 * RepositoryURLs contains a list of explicit repository URLs.
 * Creates one action per repository URL.
 *
 * @generated from message gitpod.v1.WorkflowTriggerContext.Repositories.RepositoryURLs
 */
export type WorkflowTriggerContext_Repositories_RepositoryURLs = Message<"gitpod.v1.WorkflowTriggerContext.Repositories.RepositoryURLs"> & {
    /**
     * @generated from field: repeated string repo_urls = 1;
     */
    repoUrls: string[];
};
/**
 * Describes the message gitpod.v1.WorkflowTriggerContext.Repositories.RepositoryURLs.
 * Use `create(WorkflowTriggerContext_Repositories_RepositoryURLsSchema)` to create a new message.
 */
export declare const WorkflowTriggerContext_Repositories_RepositoryURLsSchema: GenMessage<WorkflowTriggerContext_Repositories_RepositoryURLs>;
/**
 * RepositorySelector defines how to select repositories for workflow execution.
 * Combines a search string with an SCM host to identify repositories.
 *
 * @generated from message gitpod.v1.WorkflowTriggerContext.Repositories.RepositorySelector
 */
export type WorkflowTriggerContext_Repositories_RepositorySelector = Message<"gitpod.v1.WorkflowTriggerContext.Repositories.RepositorySelector"> & {
    /**
     * Search string to match repositories using SCM-specific search patterns.
     * For GitHub: supports GitHub search syntax (e.g., "org:gitpod-io language:go", "user:octocat stars:>100")
     * For GitLab: supports GitLab search syntax
     * See SCM provider documentation for supported search patterns.
     *
     * @generated from field: string repo_search_string = 1;
     */
    repoSearchString: string;
    /**
     * SCM host where the search should be performed (e.g., "github.com", "gitlab.com")
     *
     * @generated from field: string scm_host = 2;
     */
    scmHost: string;
};
/**
 * Describes the message gitpod.v1.WorkflowTriggerContext.Repositories.RepositorySelector.
 * Use `create(WorkflowTriggerContext_Repositories_RepositorySelectorSchema)` to create a new message.
 */
export declare const WorkflowTriggerContext_Repositories_RepositorySelectorSchema: GenMessage<WorkflowTriggerContext_Repositories_RepositorySelector>;
/**
 * Execute workflow in agent-managed environments.
 * Agent receives the specified prompt and manages execution context.
 *
 * @generated from message gitpod.v1.WorkflowTriggerContext.Agent
 */
export type WorkflowTriggerContext_Agent = Message<"gitpod.v1.WorkflowTriggerContext.Agent"> & {
    /**
     * @generated from field: string prompt = 1;
     */
    prompt: string;
};
/**
 * Describes the message gitpod.v1.WorkflowTriggerContext.Agent.
 * Use `create(WorkflowTriggerContext_AgentSchema)` to create a new message.
 */
export declare const WorkflowTriggerContext_AgentSchema: GenMessage<WorkflowTriggerContext_Agent>;
/**
 * Use context derived from the trigger event.
 * Currently only supported for PullRequest triggers - uses PR repository context.
 *
 * @generated from message gitpod.v1.WorkflowTriggerContext.FromTrigger
 */
export type WorkflowTriggerContext_FromTrigger = Message<"gitpod.v1.WorkflowTriggerContext.FromTrigger"> & {};
/**
 * Describes the message gitpod.v1.WorkflowTriggerContext.FromTrigger.
 * Use `create(WorkflowTriggerContext_FromTriggerSchema)` to create a new message.
 */
export declare const WorkflowTriggerContext_FromTriggerSchema: GenMessage<WorkflowTriggerContext_FromTrigger>;
/**
 * WorkflowAction defines the actions to be executed in a workflow.
 *
 * @generated from message gitpod.v1.WorkflowAction
 */
export type WorkflowAction = Message<"gitpod.v1.WorkflowAction"> & {
    /**
     * @generated from field: gitpod.v1.WorkflowAction.Limits limits = 1;
     */
    limits?: WorkflowAction_Limits;
    /**
     * @generated from field: repeated gitpod.v1.WorkflowStep steps = 2;
     */
    steps: WorkflowStep[];
};
/**
 * Describes the message gitpod.v1.WorkflowAction.
 * Use `create(WorkflowActionSchema)` to create a new message.
 */
export declare const WorkflowActionSchema: GenMessage<WorkflowAction>;
/**
 * Limits defines execution limits for workflow actions.
 *
 * @generated from message gitpod.v1.WorkflowAction.Limits
 */
export type WorkflowAction_Limits = Message<"gitpod.v1.WorkflowAction.Limits"> & {
    /**
     * @generated from field: int32 max_parallel = 1;
     */
    maxParallel: number;
    /**
     * @generated from field: int32 max_total = 2;
     */
    maxTotal: number;
    /**
     * @generated from field: gitpod.v1.WorkflowAction.Limits.PerExecution per_execution = 3;
     */
    perExecution?: WorkflowAction_Limits_PerExecution;
};
/**
 * Describes the message gitpod.v1.WorkflowAction.Limits.
 * Use `create(WorkflowAction_LimitsSchema)` to create a new message.
 */
export declare const WorkflowAction_LimitsSchema: GenMessage<WorkflowAction_Limits>;
/**
 * PerExecution defines limits per execution action.
 *
 * @generated from message gitpod.v1.WorkflowAction.Limits.PerExecution
 */
export type WorkflowAction_Limits_PerExecution = Message<"gitpod.v1.WorkflowAction.Limits.PerExecution"> & {
    /**
     * Maximum time allowed for a single execution action.
     * Use standard duration format (e.g., "30m" for 30 minutes, "2h" for 2 hours).
     *
     * @generated from field: google.protobuf.Duration max_time = 1;
     */
    maxTime?: Duration;
};
/**
 * Describes the message gitpod.v1.WorkflowAction.Limits.PerExecution.
 * Use `create(WorkflowAction_Limits_PerExecutionSchema)` to create a new message.
 */
export declare const WorkflowAction_Limits_PerExecutionSchema: GenMessage<WorkflowAction_Limits_PerExecution>;
/**
 * WorkflowStep defines a single step in a workflow action.
 *
 * @generated from message gitpod.v1.WorkflowStep
 */
export type WorkflowStep = Message<"gitpod.v1.WorkflowStep"> & {
    /**
     * @generated from oneof gitpod.v1.WorkflowStep.step
     */
    step: {
        /**
         * @generated from field: gitpod.v1.WorkflowStep.Task task = 1;
         */
        value: WorkflowStep_Task;
        case: "task";
    } | {
        /**
         * @generated from field: gitpod.v1.WorkflowStep.Agent agent = 2;
         */
        value: WorkflowStep_Agent;
        case: "agent";
    } | {
        /**
         * @generated from field: gitpod.v1.WorkflowStep.PullRequest pull_request = 3;
         */
        value: WorkflowStep_PullRequest;
        case: "pullRequest";
    } | {
        /**
         * @generated from field: gitpod.v1.WorkflowStep.Report report = 4;
         */
        value: WorkflowStep_Report;
        case: "report";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.WorkflowStep.
 * Use `create(WorkflowStepSchema)` to create a new message.
 */
export declare const WorkflowStepSchema: GenMessage<WorkflowStep>;
/**
 * WorkflowTaskStep represents a task step that executes a command.
 *
 * @generated from message gitpod.v1.WorkflowStep.Task
 */
export type WorkflowStep_Task = Message<"gitpod.v1.WorkflowStep.Task"> & {
    /**
     * @generated from field: string command = 1;
     */
    command: string;
};
/**
 * Describes the message gitpod.v1.WorkflowStep.Task.
 * Use `create(WorkflowStep_TaskSchema)` to create a new message.
 */
export declare const WorkflowStep_TaskSchema: GenMessage<WorkflowStep_Task>;
/**
 * WorkflowAgentStep represents an agent step that executes with a prompt.
 *
 * @generated from message gitpod.v1.WorkflowStep.Agent
 */
export type WorkflowStep_Agent = Message<"gitpod.v1.WorkflowStep.Agent"> & {
    /**
     * @generated from field: string prompt = 1;
     */
    prompt: string;
};
/**
 * Describes the message gitpod.v1.WorkflowStep.Agent.
 * Use `create(WorkflowStep_AgentSchema)` to create a new message.
 */
export declare const WorkflowStep_AgentSchema: GenMessage<WorkflowStep_Agent>;
/**
 * WorkflowPullRequestStep represents a pull request creation step.
 *
 * @generated from message gitpod.v1.WorkflowStep.PullRequest
 */
export type WorkflowStep_PullRequest = Message<"gitpod.v1.WorkflowStep.PullRequest"> & {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string branch = 3;
     */
    branch: string;
    /**
     * @generated from field: bool draft = 4;
     */
    draft: boolean;
};
/**
 * Describes the message gitpod.v1.WorkflowStep.PullRequest.
 * Use `create(WorkflowStep_PullRequestSchema)` to create a new message.
 */
export declare const WorkflowStep_PullRequestSchema: GenMessage<WorkflowStep_PullRequest>;
/**
 * @generated from message gitpod.v1.WorkflowStep.Report
 */
export type WorkflowStep_Report = Message<"gitpod.v1.WorkflowStep.Report"> & {
    /**
     * @generated from field: repeated gitpod.v1.WorkflowStep.Report.OutputSpec outputs = 1;
     */
    outputs: WorkflowStep_Report_OutputSpec[];
};
/**
 * Describes the message gitpod.v1.WorkflowStep.Report.
 * Use `create(WorkflowStep_ReportSchema)` to create a new message.
 */
export declare const WorkflowStep_ReportSchema: GenMessage<WorkflowStep_Report>;
/**
 * @generated from message gitpod.v1.WorkflowStep.Report.StringSchema
 */
export type WorkflowStep_Report_StringSchema = Message<"gitpod.v1.WorkflowStep.Report.StringSchema"> & {
    /**
     * @generated from field: string pattern = 1;
     */
    pattern: string;
};
/**
 * Describes the message gitpod.v1.WorkflowStep.Report.StringSchema.
 * Use `create(WorkflowStep_Report_StringSchemaSchema)` to create a new message.
 */
export declare const WorkflowStep_Report_StringSchemaSchema: GenMessage<WorkflowStep_Report_StringSchema>;
/**
 * @generated from message gitpod.v1.WorkflowStep.Report.IntegerSchema
 */
export type WorkflowStep_Report_IntegerSchema = Message<"gitpod.v1.WorkflowStep.Report.IntegerSchema"> & {
    /**
     * @generated from field: optional int32 min = 1;
     */
    min?: number;
    /**
     * @generated from field: optional int32 max = 2;
     */
    max?: number;
};
/**
 * Describes the message gitpod.v1.WorkflowStep.Report.IntegerSchema.
 * Use `create(WorkflowStep_Report_IntegerSchemaSchema)` to create a new message.
 */
export declare const WorkflowStep_Report_IntegerSchemaSchema: GenMessage<WorkflowStep_Report_IntegerSchema>;
/**
 * @generated from message gitpod.v1.WorkflowStep.Report.FloatSchema
 */
export type WorkflowStep_Report_FloatSchema = Message<"gitpod.v1.WorkflowStep.Report.FloatSchema"> & {
    /**
     * @generated from field: optional float min = 1;
     */
    min?: number;
    /**
     * @generated from field: optional float max = 2;
     */
    max?: number;
};
/**
 * Describes the message gitpod.v1.WorkflowStep.Report.FloatSchema.
 * Use `create(WorkflowStep_Report_FloatSchemaSchema)` to create a new message.
 */
export declare const WorkflowStep_Report_FloatSchemaSchema: GenMessage<WorkflowStep_Report_FloatSchema>;
/**
 * @generated from message gitpod.v1.WorkflowStep.Report.BooleanSchema
 */
export type WorkflowStep_Report_BooleanSchema = Message<"gitpod.v1.WorkflowStep.Report.BooleanSchema"> & {};
/**
 * Describes the message gitpod.v1.WorkflowStep.Report.BooleanSchema.
 * Use `create(WorkflowStep_Report_BooleanSchemaSchema)` to create a new message.
 */
export declare const WorkflowStep_Report_BooleanSchemaSchema: GenMessage<WorkflowStep_Report_BooleanSchema>;
/**
 * @generated from message gitpod.v1.WorkflowStep.Report.OutputSpec
 */
export type WorkflowStep_Report_OutputSpec = Message<"gitpod.v1.WorkflowStep.Report.OutputSpec"> & {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string key = 2;
     */
    key: string;
    /**
     * @generated from oneof gitpod.v1.WorkflowStep.Report.OutputSpec.schema
     */
    schema: {
        /**
         * @generated from field: gitpod.v1.WorkflowStep.Report.StringSchema string = 10;
         */
        value: WorkflowStep_Report_StringSchema;
        case: "string";
    } | {
        /**
         * @generated from field: gitpod.v1.WorkflowStep.Report.IntegerSchema integer = 11;
         */
        value: WorkflowStep_Report_IntegerSchema;
        case: "integer";
    } | {
        /**
         * @generated from field: gitpod.v1.WorkflowStep.Report.FloatSchema float = 12;
         */
        value: WorkflowStep_Report_FloatSchema;
        case: "float";
    } | {
        /**
         * @generated from field: gitpod.v1.WorkflowStep.Report.BooleanSchema boolean = 13;
         */
        value: WorkflowStep_Report_BooleanSchema;
        case: "boolean";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * Optional CEL expression that decides if the value is acceptable,
     * e.g. is the test coverage high enough. Has one variable (value), must eval to boolean.
     *
     * @generated from field: optional string acceptance_criteria = 5;
     */
    acceptanceCriteria?: string;
    /**
     * @generated from oneof gitpod.v1.WorkflowStep.Report.OutputSpec.extraction
     */
    extraction: {
        /**
         * @generated from field: string prompt = 20;
         */
        value: string;
        case: "prompt";
    } | {
        /**
         * @generated from field: string command = 21;
         */
        value: string;
        case: "command";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.WorkflowStep.Report.OutputSpec.
 * Use `create(WorkflowStep_Report_OutputSpecSchema)` to create a new message.
 */
export declare const WorkflowStep_Report_OutputSpecSchema: GenMessage<WorkflowStep_Report_OutputSpec>;
/**
 * WorkflowExecutionTrigger represents a workflow execution trigger instance.
 *
 * @generated from message gitpod.v1.WorkflowExecutionTrigger
 */
export type WorkflowExecutionTrigger = Message<"gitpod.v1.WorkflowExecutionTrigger"> & {
    /**
     * @generated from oneof gitpod.v1.WorkflowExecutionTrigger.trigger
     */
    trigger: {
        /**
         * @generated from field: gitpod.v1.WorkflowExecutionTrigger.Manual manual = 1;
         */
        value: WorkflowExecutionTrigger_Manual;
        case: "manual";
    } | {
        /**
         * @generated from field: gitpod.v1.WorkflowExecutionTrigger.Time time = 2;
         */
        value: WorkflowExecutionTrigger_Time;
        case: "time";
    } | {
        /**
         * @generated from field: gitpod.v1.PullRequest pull_request = 3;
         */
        value: PullRequest;
        case: "pullRequest";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * Context from the workflow trigger - copied at execution time for immutability.
     * This allows the reconciler to create actions without fetching the workflow definition.
     *
     * @generated from field: gitpod.v1.WorkflowTriggerContext context = 4;
     */
    context?: WorkflowTriggerContext;
};
/**
 * Describes the message gitpod.v1.WorkflowExecutionTrigger.
 * Use `create(WorkflowExecutionTriggerSchema)` to create a new message.
 */
export declare const WorkflowExecutionTriggerSchema: GenMessage<WorkflowExecutionTrigger>;
/**
 * Manual trigger - empty message since no additional data needed
 *
 * @generated from message gitpod.v1.WorkflowExecutionTrigger.Manual
 */
export type WorkflowExecutionTrigger_Manual = Message<"gitpod.v1.WorkflowExecutionTrigger.Manual"> & {};
/**
 * Describes the message gitpod.v1.WorkflowExecutionTrigger.Manual.
 * Use `create(WorkflowExecutionTrigger_ManualSchema)` to create a new message.
 */
export declare const WorkflowExecutionTrigger_ManualSchema: GenMessage<WorkflowExecutionTrigger_Manual>;
/**
 * Time trigger - just the timestamp when it was triggered
 *
 * @generated from message gitpod.v1.WorkflowExecutionTrigger.Time
 */
export type WorkflowExecutionTrigger_Time = Message<"gitpod.v1.WorkflowExecutionTrigger.Time"> & {
    /**
     * @generated from field: google.protobuf.Timestamp triggered_at = 1;
     */
    triggeredAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.WorkflowExecutionTrigger.Time.
 * Use `create(WorkflowExecutionTrigger_TimeSchema)` to create a new message.
 */
export declare const WorkflowExecutionTrigger_TimeSchema: GenMessage<WorkflowExecutionTrigger_Time>;
/**
 * WorkflowExecution represents a workflow execution instance.
 *
 * @generated from message gitpod.v1.WorkflowExecution
 */
export type WorkflowExecution = Message<"gitpod.v1.WorkflowExecution"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: gitpod.v1.WorkflowExecution.Metadata metadata = 2;
     */
    metadata?: WorkflowExecution_Metadata;
    /**
     * @generated from field: gitpod.v1.WorkflowExecution.Spec spec = 3;
     */
    spec?: WorkflowExecution_Spec;
    /**
     * @generated from field: gitpod.v1.WorkflowExecution.Status status = 4;
     */
    status?: WorkflowExecution_Status;
};
/**
 * Describes the message gitpod.v1.WorkflowExecution.
 * Use `create(WorkflowExecutionSchema)` to create a new message.
 */
export declare const WorkflowExecutionSchema: GenMessage<WorkflowExecution>;
/**
 * WorkflowExecutionMetadata contains workflow execution metadata.
 *
 * @generated from message gitpod.v1.WorkflowExecution.Metadata
 */
export type WorkflowExecution_Metadata = Message<"gitpod.v1.WorkflowExecution.Metadata"> & {
    /**
     * @generated from field: string workflow_id = 1;
     */
    workflowId: string;
    /**
     * @generated from field: google.protobuf.Timestamp started_at = 2;
     */
    startedAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp finished_at = 3;
     */
    finishedAt?: Timestamp;
    /**
     * @generated from field: gitpod.v1.Subject creator = 4;
     */
    creator?: Subject;
    /**
     * @generated from field: gitpod.v1.Subject executor = 5;
     */
    executor?: Subject;
};
/**
 * Describes the message gitpod.v1.WorkflowExecution.Metadata.
 * Use `create(WorkflowExecution_MetadataSchema)` to create a new message.
 */
export declare const WorkflowExecution_MetadataSchema: GenMessage<WorkflowExecution_Metadata>;
/**
 * WorkflowExecutionSpec contains the specification used for this execution.
 *
 * @generated from message gitpod.v1.WorkflowExecution.Spec
 */
export type WorkflowExecution_Spec = Message<"gitpod.v1.WorkflowExecution.Spec"> & {
    /**
     * @generated from field: string session = 1;
     */
    session: string;
    /**
     * @generated from field: gitpod.v1.WorkflowExecutionPhase desired_phase = 2;
     */
    desiredPhase: WorkflowExecutionPhase;
    /**
     * @generated from field: gitpod.v1.WorkflowExecutionTrigger trigger = 3;
     */
    trigger?: WorkflowExecutionTrigger;
    /**
     * @generated from field: gitpod.v1.WorkflowAction action = 4;
     */
    action?: WorkflowAction;
    /**
     * @generated from field: gitpod.v1.WorkflowAction report = 5;
     */
    report?: WorkflowAction;
};
/**
 * Describes the message gitpod.v1.WorkflowExecution.Spec.
 * Use `create(WorkflowExecution_SpecSchema)` to create a new message.
 */
export declare const WorkflowExecution_SpecSchema: GenMessage<WorkflowExecution_Spec>;
/**
 * WorkflowExecutionStatus contains the current status of a workflow execution.
 *
 * @generated from message gitpod.v1.WorkflowExecution.Status
 */
export type WorkflowExecution_Status = Message<"gitpod.v1.WorkflowExecution.Status"> & {
    /**
     * @generated from field: string session = 1;
     */
    session: string;
    /**
     * @generated from field: gitpod.v1.WorkflowExecutionPhase phase = 2;
     */
    phase: WorkflowExecutionPhase;
    /**
     * @generated from field: int32 pending_action_count = 10;
     */
    pendingActionCount: number;
    /**
     * @generated from field: int32 running_action_count = 11;
     */
    runningActionCount: number;
    /**
     * @generated from field: int32 failed_action_count = 12;
     */
    failedActionCount: number;
    /**
     * @generated from field: int32 done_action_count = 13;
     */
    doneActionCount: number;
    /**
     * @generated from field: int32 stopped_action_count = 18;
     */
    stoppedActionCount: number;
    /**
     * FailureMessage summarises why the workflow execution failed to operate. If this is non-empty
     * the workflow execution has failed to operate and will likely transition to a stopped state.
     * Deprecated: Use failures instead for structured error information.
     *
     * @generated from field: string failure_message = 14 [deprecated = true];
     * @deprecated
     */
    failureMessage: string;
    /**
     * WarningMessage summarises why the workflow execution is in a warning state. If this is non-empty
     * the workflow execution is in a warning state and likely does not match the users expectations.
     * Deprecated: Use warnings field instead for structured warning information.
     *
     * @generated from field: string warning_message = 15 [deprecated = true];
     * @deprecated
     */
    warningMessage: string;
    /**
     * Structured failures that caused the workflow execution to fail.
     * Provides detailed error codes, messages, and retry information.
     *
     * @generated from field: repeated gitpod.v1.WorkflowError failures = 16;
     */
    failures: WorkflowError[];
    /**
     * Structured warnings about the workflow execution.
     * Provides detailed warning codes and messages.
     *
     * @generated from field: repeated gitpod.v1.WorkflowError warnings = 17;
     */
    warnings: WorkflowError[];
};
/**
 * Describes the message gitpod.v1.WorkflowExecution.Status.
 * Use `create(WorkflowExecution_StatusSchema)` to create a new message.
 */
export declare const WorkflowExecution_StatusSchema: GenMessage<WorkflowExecution_Status>;
/**
 * WorkflowExecutionAction represents a workflow execution action instance.
 *
 * @generated from message gitpod.v1.WorkflowExecutionAction
 */
export type WorkflowExecutionAction = Message<"gitpod.v1.WorkflowExecutionAction"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: gitpod.v1.WorkflowExecutionAction.Metadata metadata = 2;
     */
    metadata?: WorkflowExecutionAction_Metadata;
    /**
     * @generated from field: gitpod.v1.WorkflowExecutionAction.Spec spec = 3;
     */
    spec?: WorkflowExecutionAction_Spec;
    /**
     * @generated from field: gitpod.v1.WorkflowExecutionAction.Status status = 4;
     */
    status?: WorkflowExecutionAction_Status;
};
/**
 * Describes the message gitpod.v1.WorkflowExecutionAction.
 * Use `create(WorkflowExecutionActionSchema)` to create a new message.
 */
export declare const WorkflowExecutionActionSchema: GenMessage<WorkflowExecutionAction>;
/**
 * WorkflowExecutionActionMetadata contains workflow execution action metadata.
 *
 * @generated from message gitpod.v1.WorkflowExecutionAction.Metadata
 */
export type WorkflowExecutionAction_Metadata = Message<"gitpod.v1.WorkflowExecutionAction.Metadata"> & {
    /**
     * @generated from field: string workflow_execution_id = 1;
     */
    workflowExecutionId: string;
    /**
     * @generated from field: string workflow_id = 2;
     */
    workflowId: string;
    /**
     * @generated from field: google.protobuf.Timestamp started_at = 3;
     */
    startedAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp finished_at = 4;
     */
    finishedAt?: Timestamp;
    /**
     * Human-readable name for this action based on its context.
     * Examples: "gitpod-io/gitpod-next" for repository context, "My Project" for project context.
     * Will be empty string for actions created before this field was added.
     *
     * @generated from field: string action_name = 5;
     */
    actionName: string;
};
/**
 * Describes the message gitpod.v1.WorkflowExecutionAction.Metadata.
 * Use `create(WorkflowExecutionAction_MetadataSchema)` to create a new message.
 */
export declare const WorkflowExecutionAction_MetadataSchema: GenMessage<WorkflowExecutionAction_Metadata>;
/**
 * WorkflowExecutionActionSpec contains the specification for this execution action.
 *
 * @generated from message gitpod.v1.WorkflowExecutionAction.Spec
 */
export type WorkflowExecutionAction_Spec = Message<"gitpod.v1.WorkflowExecutionAction.Spec"> & {
    /**
     * @generated from field: string session = 1;
     */
    session: string;
    /**
     * @generated from field: gitpod.v1.WorkflowExecutionActionPhase desired_phase = 2;
     */
    desiredPhase: WorkflowExecutionActionPhase;
    /**
     * Context for the execution action - specifies where and how the action executes.
     * This is resolved from the workflow trigger context and contains the specific
     * project, repository, or agent context for this execution instance.
     *
     * @generated from field: gitpod.v1.AgentCodeContext context = 3;
     */
    context?: AgentCodeContext;
    /**
     * @generated from field: gitpod.v1.WorkflowAction.Limits.PerExecution limits = 4;
     */
    limits?: WorkflowAction_Limits_PerExecution;
};
/**
 * Describes the message gitpod.v1.WorkflowExecutionAction.Spec.
 * Use `create(WorkflowExecutionAction_SpecSchema)` to create a new message.
 */
export declare const WorkflowExecutionAction_SpecSchema: GenMessage<WorkflowExecutionAction_Spec>;
/**
 * WorkflowExecutionActionStatus contains the current status of a workflow execution action.
 *
 * @generated from message gitpod.v1.WorkflowExecutionAction.Status
 */
export type WorkflowExecutionAction_Status = Message<"gitpod.v1.WorkflowExecutionAction.Status"> & {
    /**
     * @generated from field: string session = 1;
     */
    session: string;
    /**
     * @generated from field: gitpod.v1.WorkflowExecutionActionPhase phase = 2;
     */
    phase: WorkflowExecutionActionPhase;
    /**
     * Step-level progress tracking
     *
     * @generated from field: repeated gitpod.v1.WorkflowExecutionAction.Status.StepStatus step_statuses = 3;
     */
    stepStatuses: WorkflowExecutionAction_Status_StepStatus[];
    /**
     * @generated from field: string environment_id = 10;
     */
    environmentId: string;
    /**
     * @generated from field: string agent_execution_id = 12;
     */
    agentExecutionId: string;
    /**
     * FailureMessage summarises why the workflow execution action failed to operate. If this is non-empty
     * the workflow execution action has failed to operate and will likely transition to a stopped state.
     * Deprecated: Use failures instead for structured error information.
     *
     * @generated from field: string failure_message = 11 [deprecated = true];
     * @deprecated
     */
    failureMessage: string;
    /**
     * WarningMessage summarises why the workflow execution action is in a warning state. If this is non-empty
     * the workflow execution action is in a warning state and likely does not match the users expectations.
     * Deprecated: Use warnings field instead for structured warning information.
     *
     * @generated from field: string warning_message = 13 [deprecated = true];
     * @deprecated
     */
    warningMessage: string;
    /**
     * Structured failures that caused the workflow execution action to fail.
     * Provides detailed error codes, messages, and retry information.
     *
     * @generated from field: repeated gitpod.v1.WorkflowError failures = 14;
     */
    failures: WorkflowError[];
    /**
     * Structured warnings about the workflow execution action.
     * Provides detailed warning codes and messages.
     *
     * @generated from field: repeated gitpod.v1.WorkflowError warnings = 15;
     */
    warnings: WorkflowError[];
};
/**
 * Describes the message gitpod.v1.WorkflowExecutionAction.Status.
 * Use `create(WorkflowExecutionAction_StatusSchema)` to create a new message.
 */
export declare const WorkflowExecutionAction_StatusSchema: GenMessage<WorkflowExecutionAction_Status>;
/**
 * WorkflowExecutionActionStepStatus represents the status of a single step execution.
 *
 * @generated from message gitpod.v1.WorkflowExecutionAction.Status.StepStatus
 */
export type WorkflowExecutionAction_Status_StepStatus = Message<"gitpod.v1.WorkflowExecutionAction.Status.StepStatus"> & {
    /**
     * Index of the step in the workflow action steps array
     *
     * @generated from field: int32 step_index = 1;
     */
    stepIndex: number;
    /**
     * @generated from field: gitpod.v1.WorkflowExecutionAction.Status.StepStatus.StepPhase phase = 2;
     */
    phase: WorkflowExecutionAction_Status_StepStatus_StepPhase;
    /**
     * Deprecated: Use error field instead for structured error information.
     *
     * @generated from field: string failure_message = 3 [deprecated = true];
     * @deprecated
     */
    failureMessage: string;
    /**
     * @generated from field: google.protobuf.Timestamp started_at = 4;
     */
    startedAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp finished_at = 5;
     */
    finishedAt?: Timestamp;
    /**
     * The step definition captured at execution time for immutability.
     * This ensures the UI shows the correct step even if the workflow definition changes.
     *
     * @generated from field: gitpod.v1.WorkflowStep step = 6;
     */
    step?: WorkflowStep;
    /**
     * Structured error that caused the step to fail.
     * Provides detailed error code, message, and retry information.
     *
     * @generated from field: gitpod.v1.WorkflowError error = 7;
     */
    error?: WorkflowError;
};
/**
 * Describes the message gitpod.v1.WorkflowExecutionAction.Status.StepStatus.
 * Use `create(WorkflowExecutionAction_Status_StepStatusSchema)` to create a new message.
 */
export declare const WorkflowExecutionAction_Status_StepStatusSchema: GenMessage<WorkflowExecutionAction_Status_StepStatus>;
/**
 * @generated from enum gitpod.v1.WorkflowExecutionAction.Status.StepStatus.StepPhase
 */
export declare enum WorkflowExecutionAction_Status_StepStatus_StepPhase {
    /**
     * @generated from enum value: STEP_PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: STEP_PHASE_PENDING = 1;
     */
    PENDING = 1,
    /**
     * @generated from enum value: STEP_PHASE_RUNNING = 2;
     */
    RUNNING = 2,
    /**
     * @generated from enum value: STEP_PHASE_DONE = 3;
     */
    DONE = 3,
    /**
     * @generated from enum value: STEP_PHASE_FAILED = 4;
     */
    FAILED = 4,
    /**
     * @generated from enum value: STEP_PHASE_CANCELLED = 5;
     */
    CANCELLED = 5
}
/**
 * Describes the enum gitpod.v1.WorkflowExecutionAction.Status.StepStatus.StepPhase.
 */
export declare const WorkflowExecutionAction_Status_StepStatus_StepPhaseSchema: GenEnum<WorkflowExecutionAction_Status_StepStatus_StepPhase>;
/**
 * @generated from message gitpod.v1.ListWorkflowExecutionOutputsRequest
 */
export type ListWorkflowExecutionOutputsRequest = Message<"gitpod.v1.ListWorkflowExecutionOutputsRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListWorkflowExecutionOutputsRequest.Filter filter = 2;
     */
    filter?: ListWorkflowExecutionOutputsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListWorkflowExecutionOutputsRequest.
 * Use `create(ListWorkflowExecutionOutputsRequestSchema)` to create a new message.
 */
export declare const ListWorkflowExecutionOutputsRequestSchema: GenMessage<ListWorkflowExecutionOutputsRequest>;
/**
 * @generated from message gitpod.v1.ListWorkflowExecutionOutputsRequest.Filter
 */
export type ListWorkflowExecutionOutputsRequest_Filter = Message<"gitpod.v1.ListWorkflowExecutionOutputsRequest.Filter"> & {
    /**
     * @generated from field: repeated string workflow_execution_ids = 1;
     */
    workflowExecutionIds: string[];
};
/**
 * Describes the message gitpod.v1.ListWorkflowExecutionOutputsRequest.Filter.
 * Use `create(ListWorkflowExecutionOutputsRequest_FilterSchema)` to create a new message.
 */
export declare const ListWorkflowExecutionOutputsRequest_FilterSchema: GenMessage<ListWorkflowExecutionOutputsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListWorkflowExecutionOutputsResponse
 */
export type ListWorkflowExecutionOutputsResponse = Message<"gitpod.v1.ListWorkflowExecutionOutputsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.ListWorkflowExecutionOutputsResponse.ActionOutput outputs = 2;
     */
    outputs: ListWorkflowExecutionOutputsResponse_ActionOutput[];
};
/**
 * Describes the message gitpod.v1.ListWorkflowExecutionOutputsResponse.
 * Use `create(ListWorkflowExecutionOutputsResponseSchema)` to create a new message.
 */
export declare const ListWorkflowExecutionOutputsResponseSchema: GenMessage<ListWorkflowExecutionOutputsResponse>;
/**
 * @generated from message gitpod.v1.ListWorkflowExecutionOutputsResponse.ActionOutput
 */
export type ListWorkflowExecutionOutputsResponse_ActionOutput = Message<"gitpod.v1.ListWorkflowExecutionOutputsResponse.ActionOutput"> & {
    /**
     * @generated from field: string action_id = 1;
     */
    actionId: string;
    /**
     * @generated from field: map<string, gitpod.v1.AgentExecution.Status.OutputValue> values = 2;
     */
    values: {
        [key: string]: AgentExecution_Status_OutputValue;
    };
};
/**
 * Describes the message gitpod.v1.ListWorkflowExecutionOutputsResponse.ActionOutput.
 * Use `create(ListWorkflowExecutionOutputsResponse_ActionOutputSchema)` to create a new message.
 */
export declare const ListWorkflowExecutionOutputsResponse_ActionOutputSchema: GenMessage<ListWorkflowExecutionOutputsResponse_ActionOutput>;
/**
 * GetWorkflowExecutionSummaryRequest returns aggregate counts of workflow executions.
 *
 * @generated from message gitpod.v1.GetWorkflowExecutionSummaryRequest
 */
export type GetWorkflowExecutionSummaryRequest = Message<"gitpod.v1.GetWorkflowExecutionSummaryRequest"> & {
    /**
     * @generated from field: gitpod.v1.GetWorkflowExecutionSummaryRequest.Filter filter = 1;
     */
    filter?: GetWorkflowExecutionSummaryRequest_Filter;
};
/**
 * Describes the message gitpod.v1.GetWorkflowExecutionSummaryRequest.
 * Use `create(GetWorkflowExecutionSummaryRequestSchema)` to create a new message.
 */
export declare const GetWorkflowExecutionSummaryRequestSchema: GenMessage<GetWorkflowExecutionSummaryRequest>;
/**
 * @generated from message gitpod.v1.GetWorkflowExecutionSummaryRequest.Filter
 */
export type GetWorkflowExecutionSummaryRequest_Filter = Message<"gitpod.v1.GetWorkflowExecutionSummaryRequest.Filter"> & {
    /**
     * Date range to query executions within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 1;
     */
    dateRange?: DateRange;
    /**
     * Optional workflow IDs to scope the summary to specific workflows.
     *
     * @generated from field: repeated string workflow_ids = 2;
     */
    workflowIds: string[];
};
/**
 * Describes the message gitpod.v1.GetWorkflowExecutionSummaryRequest.Filter.
 * Use `create(GetWorkflowExecutionSummaryRequest_FilterSchema)` to create a new message.
 */
export declare const GetWorkflowExecutionSummaryRequest_FilterSchema: GenMessage<GetWorkflowExecutionSummaryRequest_Filter>;
/**
 * @generated from message gitpod.v1.GetWorkflowExecutionSummaryResponse
 */
export type GetWorkflowExecutionSummaryResponse = Message<"gitpod.v1.GetWorkflowExecutionSummaryResponse"> & {
    /**
     * Number of executions in COMPLETED phase with no failed actions (failed_action_count == 0).
     *
     * @generated from field: int64 successful_count = 1;
     */
    successfulCount: bigint;
    /**
     * Number of failed executions: COMPLETED with failed_action_count > 0, or STOPPED with
     * failed_action_count > 0 or a non-empty failure_message (matches dashboard "Failed" labeling).
     *
     * @generated from field: int64 failed_count = 2;
     */
    failedCount: bigint;
    /**
     * Total number of executions in the time range, regardless of phase.
     *
     * @generated from field: int64 total_count = 3;
     */
    totalCount: bigint;
    /**
     * Total number of workflows that exist in the organization.
     * This count is independent of the date range filter.
     *
     * @generated from field: int64 total_workflows_in_organization = 4;
     */
    totalWorkflowsInOrganization: bigint;
};
/**
 * Describes the message gitpod.v1.GetWorkflowExecutionSummaryResponse.
 * Use `create(GetWorkflowExecutionSummaryResponseSchema)` to create a new message.
 */
export declare const GetWorkflowExecutionSummaryResponseSchema: GenMessage<GetWorkflowExecutionSummaryResponse>;
/**
 * @generated from enum gitpod.v1.WorkflowExecutionPhase
 */
export declare enum WorkflowExecutionPhase {
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_PHASE_PENDING = 1;
     */
    PENDING = 1,
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_PHASE_RUNNING = 2;
     */
    RUNNING = 2,
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_PHASE_STOPPING = 3;
     */
    STOPPING = 3,
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_PHASE_STOPPED = 4;
     */
    STOPPED = 4,
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_PHASE_DELETING = 5;
     */
    DELETING = 5,
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_PHASE_DELETED = 6;
     */
    DELETED = 6,
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_PHASE_COMPLETED = 7;
     */
    COMPLETED = 7
}
/**
 * Describes the enum gitpod.v1.WorkflowExecutionPhase.
 */
export declare const WorkflowExecutionPhaseSchema: GenEnum<WorkflowExecutionPhase>;
/**
 * WorkflowExecutionActionPhase defines the phases of workflow execution action.
 *
 * @generated from enum gitpod.v1.WorkflowExecutionActionPhase
 */
export declare enum WorkflowExecutionActionPhase {
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_ACTION_PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_ACTION_PHASE_PENDING = 1;
     */
    PENDING = 1,
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_ACTION_PHASE_RUNNING = 2;
     */
    RUNNING = 2,
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_ACTION_PHASE_STOPPING = 3;
     */
    STOPPING = 3,
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_ACTION_PHASE_STOPPED = 4;
     */
    STOPPED = 4,
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_ACTION_PHASE_DELETING = 5;
     */
    DELETING = 5,
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_ACTION_PHASE_DELETED = 6;
     */
    DELETED = 6,
    /**
     * @generated from enum value: WORKFLOW_EXECUTION_ACTION_PHASE_DONE = 7;
     */
    DONE = 7
}
/**
 * Describes the enum gitpod.v1.WorkflowExecutionActionPhase.
 */
export declare const WorkflowExecutionActionPhaseSchema: GenEnum<WorkflowExecutionActionPhase>;
/**
 * @generated from service gitpod.v1.WorkflowService
 */
export declare const WorkflowService: GenService<{
    /**
     * Creates a new workflow with specified configuration.
     *
     * Use this method to:
     * - Set up automated workflows
     * - Configure workflow triggers
     * - Define workflow actions and steps
     * - Set execution limits and constraints
     *
     * @generated from rpc gitpod.v1.WorkflowService.CreateWorkflow
     */
    createWorkflow: {
        methodKind: "unary";
        input: typeof CreateWorkflowRequestSchema;
        output: typeof CreateWorkflowResponseSchema;
    };
    /**
     * Gets details about a specific workflow.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.WorkflowService.GetWorkflow
     */
    getWorkflow: {
        methodKind: "unary";
        input: typeof GetWorkflowRequestSchema;
        output: typeof GetWorkflowResponseSchema;
    };
    /**
     * Updates a workflow's configuration using full replacement semantics.
     *
     * Update Behavior:
     * - All provided fields completely replace existing values
     * - Optional fields that are not provided remain unchanged
     * - Complex fields (triggers, action) are replaced entirely, not merged
     * - To remove optional fields, explicitly set them to empty/default values
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.WorkflowService.UpdateWorkflow
     */
    updateWorkflow: {
        methodKind: "unary";
        input: typeof UpdateWorkflowRequestSchema;
        output: typeof UpdateWorkflowResponseSchema;
    };
    /**
     * @generated from rpc gitpod.v1.WorkflowService.ListWorkflows
     */
    listWorkflows: {
        methodKind: "unary";
        input: typeof ListWorkflowsRequestSchema;
        output: typeof ListWorkflowsResponseSchema;
    };
    /**
     * Deletes a workflow permanently.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.WorkflowService.DeleteWorkflow
     */
    deleteWorkflow: {
        methodKind: "unary";
        input: typeof DeleteWorkflowRequestSchema;
        output: typeof DeleteWorkflowResponseSchema;
    };
    /**
     * Starts a workflow execution.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.WorkflowService.StartWorkflow
     */
    startWorkflow: {
        methodKind: "unary";
        input: typeof StartWorkflowRequestSchema;
        output: typeof StartWorkflowResponseSchema;
    };
    /**
     * Lists workflow executions with optional filtering.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.WorkflowService.ListWorkflowExecutions
     */
    listWorkflowExecutions: {
        methodKind: "unary";
        input: typeof ListWorkflowExecutionsRequestSchema;
        output: typeof ListWorkflowExecutionsResponseSchema;
    };
    /**
     * Gets details about a specific workflow execution.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.WorkflowService.GetWorkflowExecution
     */
    getWorkflowExecution: {
        methodKind: "unary";
        input: typeof GetWorkflowExecutionRequestSchema;
        output: typeof GetWorkflowExecutionResponseSchema;
    };
    /**
     * Cancels a running workflow execution.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.WorkflowService.CancelWorkflowExecution
     */
    cancelWorkflowExecution: {
        methodKind: "unary";
        input: typeof CancelWorkflowExecutionRequestSchema;
        output: typeof CancelWorkflowExecutionResponseSchema;
    };
    /**
     * Lists workflow execution actions with optional filtering.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.WorkflowService.ListWorkflowExecutionActions
     */
    listWorkflowExecutionActions: {
        methodKind: "unary";
        input: typeof ListWorkflowExecutionActionsRequestSchema;
        output: typeof ListWorkflowExecutionActionsResponseSchema;
    };
    /**
     * Lists outputs produced by workflow execution actions.
     *
     * Use this method to:
     * - Retrieve test results, coverage metrics, or other structured data from executions
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
     * @generated from rpc gitpod.v1.WorkflowService.ListWorkflowExecutionOutputs
     */
    listWorkflowExecutionOutputs: {
        methodKind: "unary";
        input: typeof ListWorkflowExecutionOutputsRequestSchema;
        output: typeof ListWorkflowExecutionOutputsResponseSchema;
    };
    /**
     * Gets details about a specific workflow execution action.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.WorkflowService.GetWorkflowExecutionAction
     */
    getWorkflowExecutionAction: {
        methodKind: "unary";
        input: typeof GetWorkflowExecutionActionRequestSchema;
        output: typeof GetWorkflowExecutionActionResponseSchema;
    };
    /**
     * Cancels a running workflow execution action.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.WorkflowService.CancelWorkflowExecutionAction
     */
    cancelWorkflowExecutionAction: {
        methodKind: "unary";
        input: typeof CancelWorkflowExecutionActionRequestSchema;
        output: typeof CancelWorkflowExecutionActionResponseSchema;
    };
    /**
     * Gets the webhook secret for a workflow.
     *
     * This operation is audited for security purposes.
     *
     * Use this method to:
     * - Retrieve webhook secret for configuration
     * - Set up webhook integrations
     * - Verify webhook signatures
     *
     * ### Examples
     *
     * - Get webhook secret:
     *
     *   Retrieves the webhook secret for a workflow.
     *
     *   ```yaml
     *   workflowId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.WorkflowService.GetWorkflowWebhookSecret
     */
    getWorkflowWebhookSecret: {
        methodKind: "unary";
        input: typeof GetWorkflowWebhookSecretRequestSchema;
        output: typeof GetWorkflowWebhookSecretResponseSchema;
    };
    /**
     * Rotates the webhook secret for a workflow.
     *
     * Use this method to:
     * - Generate a new webhook secret
     * - Invalidate the old webhook secret
     *
     * ### Examples
     *
     * - Rotate webhook secret:
     *
     *   Generates a new webhook secret for the workflow.
     *
     *   ```yaml
     *   workflowId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.WorkflowService.RotateWorkflowWebhookSecret
     */
    rotateWorkflowWebhookSecret: {
        methodKind: "unary";
        input: typeof RotateWorkflowWebhookSecretRequestSchema;
        output: typeof RotateWorkflowWebhookSecretResponseSchema;
    };
    /**
     * Returns aggregate counts of workflow executions within a time range.
     *
     * Use this method to:
     * - Get a summary of successful, failed, and total executions
     * - Build dashboard views of automation activity
     *
     * ### Examples
     *
     * - Get execution summary for the last 7 days:
     *
     *   ```yaml
     *   filter:
     *     dateRange:
     *       startTime: "2026-03-05T00:00:00Z"
     *       endTime: "2026-03-12T00:00:00Z"
     *   ```
     *
     * - Get execution summary for specific workflows:
     *
     *   ```yaml
     *   filter:
     *     dateRange:
     *       startTime: "2026-03-01T00:00:00Z"
     *       endTime: "2026-03-12T00:00:00Z"
     *     workflowIds: ["b0e12f6c-4c67-429d-a4a6-d9838b5da047"]
     *   ```
     *
     * @generated from rpc gitpod.v1.WorkflowService.GetWorkflowExecutionSummary
     */
    getWorkflowExecutionSummary: {
        methodKind: "unary";
        input: typeof GetWorkflowExecutionSummaryRequestSchema;
        output: typeof GetWorkflowExecutionSummaryResponseSchema;
    };
}>;
