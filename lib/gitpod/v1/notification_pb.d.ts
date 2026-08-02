import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { AgentMode } from "./agent_pb";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/notification.proto.
 */
export declare const file_gitpod_v1_notification: GenFile;
/**
 * Notification represents an in-app notification for a user.
 *
 * @generated from message gitpod.v1.Notification
 */
export type Notification = Message<"gitpod.v1.Notification"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string user_id = 2;
     */
    userId: string;
    /**
     * @generated from field: gitpod.v1.NotificationType type = 3;
     */
    type: NotificationType;
    /**
     * @generated from field: string title = 4;
     */
    title: string;
    /**
     * @generated from field: string body = 5;
     */
    body: string;
    /**
     * @generated from field: gitpod.v1.NotificationContext context = 6;
     */
    context?: NotificationContext;
    /**
     * @generated from field: google.protobuf.Timestamp read_at = 7;
     */
    readAt?: Timestamp;
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
 * Describes the message gitpod.v1.Notification.
 * Use `create(NotificationSchema)` to create a new message.
 */
export declare const NotificationSchema: GenMessage<Notification>;
/**
 * NotificationContext carries structured metadata for click-through navigation.
 * Context is snapshotted at emit time so deleted resources still have display names.
 *
 * @generated from message gitpod.v1.NotificationContext
 */
export type NotificationContext = Message<"gitpod.v1.NotificationContext"> & {
    /**
     * @generated from oneof gitpod.v1.NotificationContext.context
     */
    context: {
        /**
         * @generated from field: gitpod.v1.NotificationContext.EnvironmentContext environment = 1;
         */
        value: NotificationContext_EnvironmentContext;
        case: "environment";
    } | {
        /**
         * @generated from field: gitpod.v1.NotificationContext.AgentExecutionContext agent_execution = 2;
         */
        value: NotificationContext_AgentExecutionContext;
        case: "agentExecution";
    } | {
        /**
         * @generated from field: gitpod.v1.NotificationContext.ProjectContext project = 3;
         */
        value: NotificationContext_ProjectContext;
        case: "project";
    } | {
        /**
         * @generated from field: gitpod.v1.NotificationContext.WorkflowExecutionContext workflow_execution = 4;
         */
        value: NotificationContext_WorkflowExecutionContext;
        case: "workflowExecution";
    } | {
        /**
         * @generated from field: gitpod.v1.NotificationContext.MemberContext member = 5;
         */
        value: NotificationContext_MemberContext;
        case: "member";
    } | {
        /**
         * @generated from field: gitpod.v1.NotificationContext.BillingContext billing = 6;
         */
        value: NotificationContext_BillingContext;
        case: "billing";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.NotificationContext.
 * Use `create(NotificationContextSchema)` to create a new message.
 */
export declare const NotificationContextSchema: GenMessage<NotificationContext>;
/**
 * @generated from message gitpod.v1.NotificationContext.EnvironmentContext
 */
export type NotificationContext_EnvironmentContext = Message<"gitpod.v1.NotificationContext.EnvironmentContext"> & {
    /**
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
};
/**
 * Describes the message gitpod.v1.NotificationContext.EnvironmentContext.
 * Use `create(NotificationContext_EnvironmentContextSchema)` to create a new message.
 */
export declare const NotificationContext_EnvironmentContextSchema: GenMessage<NotificationContext_EnvironmentContext>;
/**
 * @generated from message gitpod.v1.NotificationContext.AgentExecutionContext
 */
export type NotificationContext_AgentExecutionContext = Message<"gitpod.v1.NotificationContext.AgentExecutionContext"> & {
    /**
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * @generated from field: string agent_execution_id = 2;
     */
    agentExecutionId: string;
    /**
     * @generated from field: string agent_execution_name = 3;
     */
    agentExecutionName: string;
    /**
     * @generated from field: gitpod.v1.AgentMode mode = 4;
     */
    mode: AgentMode;
};
/**
 * Describes the message gitpod.v1.NotificationContext.AgentExecutionContext.
 * Use `create(NotificationContext_AgentExecutionContextSchema)` to create a new message.
 */
export declare const NotificationContext_AgentExecutionContextSchema: GenMessage<NotificationContext_AgentExecutionContext>;
/**
 * @generated from message gitpod.v1.NotificationContext.ProjectContext
 */
export type NotificationContext_ProjectContext = Message<"gitpod.v1.NotificationContext.ProjectContext"> & {
    /**
     * @generated from field: string project_id = 1;
     */
    projectId: string;
    /**
     * @generated from field: string project_name = 2;
     */
    projectName: string;
};
/**
 * Describes the message gitpod.v1.NotificationContext.ProjectContext.
 * Use `create(NotificationContext_ProjectContextSchema)` to create a new message.
 */
export declare const NotificationContext_ProjectContextSchema: GenMessage<NotificationContext_ProjectContext>;
/**
 * @generated from message gitpod.v1.NotificationContext.WorkflowExecutionContext
 */
export type NotificationContext_WorkflowExecutionContext = Message<"gitpod.v1.NotificationContext.WorkflowExecutionContext"> & {
    /**
     * @generated from field: string workflow_id = 1;
     */
    workflowId: string;
    /**
     * @generated from field: string workflow_execution_id = 2;
     */
    workflowExecutionId: string;
    /**
     * @generated from field: string workflow_name = 3;
     */
    workflowName: string;
};
/**
 * Describes the message gitpod.v1.NotificationContext.WorkflowExecutionContext.
 * Use `create(NotificationContext_WorkflowExecutionContextSchema)` to create a new message.
 */
export declare const NotificationContext_WorkflowExecutionContextSchema: GenMessage<NotificationContext_WorkflowExecutionContext>;
/**
 * @generated from message gitpod.v1.NotificationContext.MemberContext
 */
export type NotificationContext_MemberContext = Message<"gitpod.v1.NotificationContext.MemberContext"> & {
    /**
     * @generated from oneof gitpod.v1.NotificationContext.MemberContext.target
     */
    target: {
        /**
         * @generated from field: gitpod.v1.NotificationContext.MemberContext.Group group = 1;
         */
        value: NotificationContext_MemberContext_Group;
        case: "group";
    } | {
        /**
         * @generated from field: gitpod.v1.NotificationContext.MemberContext.Team team = 2;
         */
        value: NotificationContext_MemberContext_Team;
        case: "team";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.NotificationContext.MemberContext.
 * Use `create(NotificationContext_MemberContextSchema)` to create a new message.
 */
export declare const NotificationContext_MemberContextSchema: GenMessage<NotificationContext_MemberContext>;
/**
 * @generated from message gitpod.v1.NotificationContext.MemberContext.Group
 */
export type NotificationContext_MemberContext_Group = Message<"gitpod.v1.NotificationContext.MemberContext.Group"> & {
    /**
     * @generated from field: string group_id = 1;
     */
    groupId: string;
    /**
     * @generated from field: string group_name = 2;
     */
    groupName: string;
};
/**
 * Describes the message gitpod.v1.NotificationContext.MemberContext.Group.
 * Use `create(NotificationContext_MemberContext_GroupSchema)` to create a new message.
 */
export declare const NotificationContext_MemberContext_GroupSchema: GenMessage<NotificationContext_MemberContext_Group>;
/**
 * @generated from message gitpod.v1.NotificationContext.MemberContext.Team
 */
export type NotificationContext_MemberContext_Team = Message<"gitpod.v1.NotificationContext.MemberContext.Team"> & {
    /**
     * @generated from field: string team_id = 1;
     */
    teamId: string;
    /**
     * @generated from field: string team_name = 2;
     */
    teamName: string;
};
/**
 * Describes the message gitpod.v1.NotificationContext.MemberContext.Team.
 * Use `create(NotificationContext_MemberContext_TeamSchema)` to create a new message.
 */
export declare const NotificationContext_MemberContext_TeamSchema: GenMessage<NotificationContext_MemberContext_Team>;
/**
 * BillingContext carries metadata for billing-related notifications.
 * Used for click-through to the team-filtered usage page when a team's
 * credit budget is exhausted.
 *
 * @generated from message gitpod.v1.NotificationContext.BillingContext
 */
export type NotificationContext_BillingContext = Message<"gitpod.v1.NotificationContext.BillingContext"> & {
    /**
     * @generated from field: string team_id = 1;
     */
    teamId: string;
    /**
     * @generated from field: string team_name = 2;
     */
    teamName: string;
    /**
     * Allocated budget in whole credits (microcredits / 1_000_000), for display.
     *
     * @generated from field: int64 credit_budget = 3;
     */
    creditBudget: bigint;
};
/**
 * Describes the message gitpod.v1.NotificationContext.BillingContext.
 * Use `create(NotificationContext_BillingContextSchema)` to create a new message.
 */
export declare const NotificationContext_BillingContextSchema: GenMessage<NotificationContext_BillingContext>;
/**
 * @generated from message gitpod.v1.ListNotificationsRequest
 */
export type ListNotificationsRequest = Message<"gitpod.v1.ListNotificationsRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * Filter by read status. If not set, returns all notifications.
     *
     * @generated from field: optional bool read = 2;
     */
    read?: boolean;
    /**
     * Filter by notification types. If empty, returns all types.
     *
     * @generated from field: repeated gitpod.v1.NotificationType types = 3;
     */
    types: NotificationType[];
};
/**
 * Describes the message gitpod.v1.ListNotificationsRequest.
 * Use `create(ListNotificationsRequestSchema)` to create a new message.
 */
export declare const ListNotificationsRequestSchema: GenMessage<ListNotificationsRequest>;
/**
 * @generated from message gitpod.v1.ListNotificationsResponse
 */
export type ListNotificationsResponse = Message<"gitpod.v1.ListNotificationsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.Notification notifications = 2;
     */
    notifications: Notification[];
    /**
     * Counts for the inbox badge. Always returned regardless of filters.
     *
     * @generated from field: int32 unread_count = 3;
     */
    unreadCount: number;
    /**
     * @generated from field: int32 total_count = 4;
     */
    totalCount: number;
};
/**
 * Describes the message gitpod.v1.ListNotificationsResponse.
 * Use `create(ListNotificationsResponseSchema)` to create a new message.
 */
export declare const ListNotificationsResponseSchema: GenMessage<ListNotificationsResponse>;
/**
 * @generated from message gitpod.v1.GetNotificationRequest
 */
export type GetNotificationRequest = Message<"gitpod.v1.GetNotificationRequest"> & {
    /**
     * @generated from field: string notification_id = 1;
     */
    notificationId: string;
};
/**
 * Describes the message gitpod.v1.GetNotificationRequest.
 * Use `create(GetNotificationRequestSchema)` to create a new message.
 */
export declare const GetNotificationRequestSchema: GenMessage<GetNotificationRequest>;
/**
 * @generated from message gitpod.v1.GetNotificationResponse
 */
export type GetNotificationResponse = Message<"gitpod.v1.GetNotificationResponse"> & {
    /**
     * @generated from field: gitpod.v1.Notification notification = 1;
     */
    notification?: Notification;
};
/**
 * Describes the message gitpod.v1.GetNotificationResponse.
 * Use `create(GetNotificationResponseSchema)` to create a new message.
 */
export declare const GetNotificationResponseSchema: GenMessage<GetNotificationResponse>;
/**
 * @generated from message gitpod.v1.MarkNotificationsReadRequest
 */
export type MarkNotificationsReadRequest = Message<"gitpod.v1.MarkNotificationsReadRequest"> & {
    /**
     * @generated from field: repeated string notification_ids = 1;
     */
    notificationIds: string[];
};
/**
 * Describes the message gitpod.v1.MarkNotificationsReadRequest.
 * Use `create(MarkNotificationsReadRequestSchema)` to create a new message.
 */
export declare const MarkNotificationsReadRequestSchema: GenMessage<MarkNotificationsReadRequest>;
/**
 * @generated from message gitpod.v1.MarkNotificationsReadResponse
 */
export type MarkNotificationsReadResponse = Message<"gitpod.v1.MarkNotificationsReadResponse"> & {};
/**
 * Describes the message gitpod.v1.MarkNotificationsReadResponse.
 * Use `create(MarkNotificationsReadResponseSchema)` to create a new message.
 */
export declare const MarkNotificationsReadResponseSchema: GenMessage<MarkNotificationsReadResponse>;
/**
 * @generated from message gitpod.v1.MarkNotificationsUnreadRequest
 */
export type MarkNotificationsUnreadRequest = Message<"gitpod.v1.MarkNotificationsUnreadRequest"> & {
    /**
     * @generated from field: repeated string notification_ids = 1;
     */
    notificationIds: string[];
};
/**
 * Describes the message gitpod.v1.MarkNotificationsUnreadRequest.
 * Use `create(MarkNotificationsUnreadRequestSchema)` to create a new message.
 */
export declare const MarkNotificationsUnreadRequestSchema: GenMessage<MarkNotificationsUnreadRequest>;
/**
 * @generated from message gitpod.v1.MarkNotificationsUnreadResponse
 */
export type MarkNotificationsUnreadResponse = Message<"gitpod.v1.MarkNotificationsUnreadResponse"> & {};
/**
 * Describes the message gitpod.v1.MarkNotificationsUnreadResponse.
 * Use `create(MarkNotificationsUnreadResponseSchema)` to create a new message.
 */
export declare const MarkNotificationsUnreadResponseSchema: GenMessage<MarkNotificationsUnreadResponse>;
/**
 * @generated from message gitpod.v1.DeleteNotificationsRequest
 */
export type DeleteNotificationsRequest = Message<"gitpod.v1.DeleteNotificationsRequest"> & {
    /**
     * @generated from field: repeated string notification_ids = 1;
     */
    notificationIds: string[];
};
/**
 * Describes the message gitpod.v1.DeleteNotificationsRequest.
 * Use `create(DeleteNotificationsRequestSchema)` to create a new message.
 */
export declare const DeleteNotificationsRequestSchema: GenMessage<DeleteNotificationsRequest>;
/**
 * @generated from message gitpod.v1.DeleteNotificationsResponse
 */
export type DeleteNotificationsResponse = Message<"gitpod.v1.DeleteNotificationsResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteNotificationsResponse.
 * Use `create(DeleteNotificationsResponseSchema)` to create a new message.
 */
export declare const DeleteNotificationsResponseSchema: GenMessage<DeleteNotificationsResponse>;
/**
 * @generated from enum gitpod.v1.NotificationType
 */
export declare enum NotificationType {
    /**
     * @generated from enum value: NOTIFICATION_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_AGENT_COMPLETED = 1;
     */
    AGENT_COMPLETED = 1,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_AGENT_WAITING_FOR_INPUT = 2;
     */
    AGENT_WAITING_FOR_INPUT = 2,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_ENVIRONMENT_ARCHIVED = 3;
     */
    ENVIRONMENT_ARCHIVED = 3,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_ENVIRONMENT_LIFETIME_EXCEEDED = 4;
     */
    ENVIRONMENT_LIFETIME_EXCEEDED = 4,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_BILLING_CREDITS_LOW = 5;
     */
    BILLING_CREDITS_LOW = 5,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_BILLING_PAYMENT_FAILED = 6;
     */
    BILLING_PAYMENT_FAILED = 6,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_BILLING_ACCOUNT_SUSPENDED = 7;
     */
    BILLING_ACCOUNT_SUSPENDED = 7,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_AUTOMATION_COMPLETED = 8;
     */
    AUTOMATION_COMPLETED = 8,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_AUTOMATION_STOPPED = 9;
     */
    AUTOMATION_STOPPED = 9,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_PREBUILD_FAILED = 10;
     */
    PREBUILD_FAILED = 10,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_USER_ADDED_TO_GROUP = 11;
     */
    USER_ADDED_TO_GROUP = 11,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_USER_REMOVED_FROM_GROUP = 12;
     */
    USER_REMOVED_FROM_GROUP = 12,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_PROJECT_SHARED_WITH_GROUP = 13;
     */
    PROJECT_SHARED_WITH_GROUP = 13,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_PROJECT_REMOVED_FROM_GROUP = 14;
     */
    PROJECT_REMOVED_FROM_GROUP = 14,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_USER_ADDED_TO_TEAM = 15;
     */
    USER_ADDED_TO_TEAM = 15,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_USER_REMOVED_FROM_TEAM = 16;
     */
    USER_REMOVED_FROM_TEAM = 16,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_TEAM_CREDIT_BUDGET_EXHAUSTED = 17;
     */
    TEAM_CREDIT_BUDGET_EXHAUSTED = 17,
    /**
     * @generated from enum value: NOTIFICATION_TYPE_DYNAMIC_LLM_REQUEST_HEADER_FAILED = 18;
     */
    DYNAMIC_LLM_REQUEST_HEADER_FAILED = 18
}
/**
 * Describes the enum gitpod.v1.NotificationType.
 */
export declare const NotificationTypeSchema: GenEnum<NotificationType>;
/**
 * NotificationService manages in-app notifications for users.
 *
 * @generated from service gitpod.v1.NotificationService
 */
export declare const NotificationService: GenService<{
    /**
     * Lists notifications for the authenticated user.
     * Response includes unread_count and total_count for the inbox badge.
     *
     * ### Examples
     *
     * - List all notifications:
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - List unread notifications:
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   read: false
     *   ```
     *
     *
     * @generated from rpc gitpod.v1.NotificationService.ListNotifications
     */
    listNotifications: {
        methodKind: "unary";
        input: typeof ListNotificationsRequestSchema;
        output: typeof ListNotificationsResponseSchema;
    };
    /**
     * Returns a single notification by ID.
     *
     * ### Examples
     *
     * - Get notification:
     *
     *   ```yaml
     *   notificationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     *
     * @generated from rpc gitpod.v1.NotificationService.GetNotification
     */
    getNotification: {
        methodKind: "unary";
        input: typeof GetNotificationRequestSchema;
        output: typeof GetNotificationResponseSchema;
    };
    /**
     * Marks notifications as read.
     *
     * ### Examples
     *
     * - Mark a single notification as read:
     *
     *   ```yaml
     *   notificationIds:
     *     - "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * - Mark multiple notifications as read:
     *
     *   ```yaml
     *   notificationIds:
     *     - "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *     - "a1b2c3d4-5e6f-7890-abcd-ef1234567890"
     *   ```
     *
     *
     * @generated from rpc gitpod.v1.NotificationService.MarkNotificationsRead
     */
    markNotificationsRead: {
        methodKind: "unary";
        input: typeof MarkNotificationsReadRequestSchema;
        output: typeof MarkNotificationsReadResponseSchema;
    };
    /**
     * Marks notifications as unread.
     *
     * ### Examples
     *
     * - Mark a single notification as unread:
     *
     *   ```yaml
     *   notificationIds:
     *     - "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * - Mark multiple notifications as unread:
     *
     *   ```yaml
     *   notificationIds:
     *     - "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *     - "a1b2c3d4-5e6f-7890-abcd-ef1234567890"
     *   ```
     *
     *
     * @generated from rpc gitpod.v1.NotificationService.MarkNotificationsUnread
     */
    markNotificationsUnread: {
        methodKind: "unary";
        input: typeof MarkNotificationsUnreadRequestSchema;
        output: typeof MarkNotificationsUnreadResponseSchema;
    };
    /**
     * Deletes notifications.
     *
     * ### Examples
     *
     * - Delete a single notification:
     *
     *   ```yaml
     *   notificationIds:
     *     - "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * - Delete multiple notifications:
     *
     *   ```yaml
     *   notificationIds:
     *     - "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *     - "a1b2c3d4-5e6f-7890-abcd-ef1234567890"
     *   ```
     *
     *
     * @generated from rpc gitpod.v1.NotificationService.DeleteNotifications
     */
    deleteNotifications: {
        methodKind: "unary";
        input: typeof DeleteNotificationsRequestSchema;
        output: typeof DeleteNotificationsResponseSchema;
    };
}>;
