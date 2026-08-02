import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/actionable_error.proto.
 */
export declare const file_gitpod_v1_actionable_error: GenFile;
/**
 * ActionableErrorDetails provides structured error information that can be
 * attached to any Connect RPC error via err.AddDetail(). The frontend uses
 * this to render actionable UI (buttons, links, guidance) instead of raw
 * error strings.
 *
 * This is a standalone detail message — it does not modify the environment
 * status proto or any existing message. It follows the same pattern as
 * ParseContextURLPreconditionFailureDetails and PolicyEnforcedFailedPreconditionDetails.
 *
 * @generated from message gitpod.v1.ActionableErrorDetails
 */
export type ActionableErrorDetails = Message<"gitpod.v1.ActionableErrorDetails"> & {
    /**
     * Machine-readable error code for programmatic handling.
     * Convention: COMPONENT_CATEGORY_SPECIFIC (e.g. CONTENT_GIT_ACCESS_DENIED).
     *
     * @generated from field: string error_code = 1;
     */
    errorCode: string;
    /**
     * Human-readable message for end-users, replacing the raw error string.
     *
     * @generated from field: string user_message = 2;
     */
    userMessage: string;
    /**
     * Domain-specific metadata relevant to this error type.
     * Keys are domain-specific (e.g. "git_host", "repository_url", "policy_name").
     *
     * @generated from field: map<string, string> metadata = 3;
     */
    metadata: {
        [key: string]: string;
    };
    /**
     * Actions the user can take to resolve the error.
     *
     * @generated from field: repeated gitpod.v1.ErrorAction actions = 4;
     */
    actions: ErrorAction[];
};
/**
 * Describes the message gitpod.v1.ActionableErrorDetails.
 * Use `create(ActionableErrorDetailsSchema)` to create a new message.
 */
export declare const ActionableErrorDetailsSchema: GenMessage<ActionableErrorDetails>;
/**
 * ErrorAction describes a single action a user can take to resolve an error.
 *
 * @generated from message gitpod.v1.ErrorAction
 */
export type ErrorAction = Message<"gitpod.v1.ErrorAction"> & {
    /**
     * Machine-readable action identifier (e.g. "configure_git_auth", "view_docs").
     *
     * @generated from field: string action_id = 1;
     */
    actionId: string;
    /**
     * Human-readable button label (e.g. "Configure Git Authentication").
     *
     * @generated from field: string label = 2;
     */
    label: string;
    /**
     * Navigation target for this action.
     *
     * @generated from oneof gitpod.v1.ErrorAction.target
     */
    target: {
        /**
         * Internal dashboard route (e.g. "/settings/git-authentication").
         *
         * @generated from field: string dashboard_path = 3;
         */
        value: string;
        case: "dashboardPath";
    } | {
        /**
         * External URL (e.g. "https://ona.com/docs/...").
         *
         * @generated from field: string external_url = 4;
         */
        value: string;
        case: "externalUrl";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.ErrorAction.
 * Use `create(ErrorActionSchema)` to create a new message.
 */
export declare const ErrorActionSchema: GenMessage<ErrorAction>;
