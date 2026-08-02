import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Duration } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/workflow_error.proto.
 */
export declare const file_gitpod_v1_workflow_error: GenFile;
/**
 * WorkflowError provides structured error information for workflow failures.
 * This enables the reconciler to make informed retry decisions and the frontend
 * to display actionable error messages.
 *
 * @generated from message gitpod.v1.WorkflowError
 */
export type WorkflowError = Message<"gitpod.v1.WorkflowError"> & {
    /**
     * Error code identifying the type of error.
     *
     * @generated from field: gitpod.v1.WorkflowErrorCode code = 1;
     */
    code: WorkflowErrorCode;
    /**
     * Human-readable error message.
     *
     * @generated from field: string message = 2;
     */
    message: string;
    /**
     * Additional metadata about the error.
     * Common keys include:
     * - environment_id: ID of the environment
     * - task_id: ID of the task
     * - service_id: ID of the service
     * - workflow_id: ID of the workflow
     * - workflow_execution_id: ID of the workflow execution
     *
     * @generated from field: map<string, string> meta = 3;
     */
    meta: {
        [key: string]: string;
    };
    /**
     * Retry configuration. If not set, the error is considered non-retriable.
     *
     * @generated from field: optional gitpod.v1.WorkflowError.Retry retry = 4;
     */
    retry?: WorkflowError_Retry;
    /**
     * Reason explaining why the error occurred.
     * Examples: "not_found", "stopped", "deleted", "creation_failed", "start_failed"
     *
     * @generated from field: string reason = 5;
     */
    reason: string;
};
/**
 * Describes the message gitpod.v1.WorkflowError.
 * Use `create(WorkflowErrorSchema)` to create a new message.
 */
export declare const WorkflowErrorSchema: GenMessage<WorkflowError>;
/**
 * Retry configuration for the error.
 *
 * @generated from message gitpod.v1.WorkflowError.Retry
 */
export type WorkflowError_Retry = Message<"gitpod.v1.WorkflowError.Retry"> & {
    /**
     * Whether the error is retriable.
     *
     * @generated from field: bool retriable = 1;
     */
    retriable: boolean;
    /**
     * Suggested duration to wait before retrying.
     * Only meaningful when retriable is true.
     *
     * @generated from field: google.protobuf.Duration retry_after = 2;
     */
    retryAfter?: Duration;
};
/**
 * Describes the message gitpod.v1.WorkflowError.Retry.
 * Use `create(WorkflowError_RetrySchema)` to create a new message.
 */
export declare const WorkflowError_RetrySchema: GenMessage<WorkflowError_Retry>;
/**
 * WorkflowErrorCode defines error codes specific to workflows.
 * These codes help distinguish retriable vs non-retriable errors and provide actionable information
 * to both the reconciler and the frontend.
 *
 * Error code ranges:
 * - 0: Unspecified
 * - 1-999: Reserved for future use
 * - 1000-1999: Environment-related errors
 * - 2000-2999: Agent-related errors
 * - 3000-3999: Resource-related errors
 *
 * @generated from enum gitpod.v1.WorkflowErrorCode
 */
export declare enum WorkflowErrorCode {
    /**
     * @generated from enum value: WORKFLOW_ERROR_CODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * An error occurred with the environment.
     * Check the reason field for details (e.g., not found, stopped, deleted, creation failed).
     *
     * @generated from enum value: WORKFLOW_ERROR_CODE_ENVIRONMENT_ERROR = 1000;
     */
    ENVIRONMENT_ERROR = 1000,
    /**
     * An error occurred with the agent execution.
     * Check the reason field for details (e.g., not found, start failed).
     *
     * @generated from enum value: WORKFLOW_ERROR_CODE_AGENT_ERROR = 2000;
     */
    AGENT_ERROR = 2000
}
/**
 * Describes the enum gitpod.v1.WorkflowErrorCode.
 */
export declare const WorkflowErrorCodeSchema: GenEnum<WorkflowErrorCode>;
