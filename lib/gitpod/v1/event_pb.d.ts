import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { ReportExecEventRequest } from "./agent_security_pb";
import type { Principal } from "./identity_pb";
import type { PaginationRequest, PaginationResponse, Sort } from "./pagination_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/event.proto.
 */
export declare const file_gitpod_v1_event: GenFile;
/**
 * @generated from message gitpod.v1.WatchEventsRequest
 */
export type WatchEventsRequest = Message<"gitpod.v1.WatchEventsRequest"> & {
    /**
     * Scope defines the kind of events one watches. If no value is provided we default to organization scope.
     *
     * @generated from oneof gitpod.v1.WatchEventsRequest.scope
     */
    scope: {
        /**
         * Organization scope produces events for all projects, runners and environments
         * the caller can see within their organization. No task, task execution or service events
         * are produed.
         *
         * @generated from field: bool organization = 1;
         */
        value: boolean;
        case: "organization";
    } | {
        /**
         * Environment scope produces events for the environment itself, all tasks, task executions,
         * and services associated with that environment.
         *
         * @generated from field: string environment_id = 2;
         */
        value: string;
        case: "environmentId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * Filters to limit which events are delivered on organization-scoped streams.
     * When empty, all events for the scope are delivered.
     * When populated, only events matching at least one filter entry are forwarded.
     * Not supported for environment-scoped streams; setting this field returns an error.
     *
     * @generated from field: repeated gitpod.v1.WatchEventsRequest.ResourceTypeFilter resource_type_filters = 3;
     */
    resourceTypeFilters: WatchEventsRequest_ResourceTypeFilter[];
};
/**
 * Describes the message gitpod.v1.WatchEventsRequest.
 * Use `create(WatchEventsRequestSchema)` to create a new message.
 */
export declare const WatchEventsRequestSchema: GenMessage<WatchEventsRequest>;
/**
 * ResourceTypeFilter restricts which events are delivered for a specific resource type.
 *
 * @generated from message gitpod.v1.WatchEventsRequest.ResourceTypeFilter
 */
export type WatchEventsRequest_ResourceTypeFilter = Message<"gitpod.v1.WatchEventsRequest.ResourceTypeFilter"> & {
    /**
     * The resource type to filter for.
     *
     * @generated from field: gitpod.v1.ResourceType resource_type = 1;
     */
    resourceType: ResourceType;
    /**
     * If non-empty, only events for these specific resource IDs are delivered.
     *
     * @generated from field: repeated string resource_ids = 2;
     */
    resourceIds: string[];
    /**
     * If non-empty, only events where the resource was created by one of these user IDs
     * are delivered. Skipped for DELETE operations (creator info is unavailable after deletion).
     * Events with no creator information are skipped when this filter is set (fail-closed).
     *
     * @generated from field: repeated string creator_ids = 3;
     */
    creatorIds: string[];
};
/**
 * Describes the message gitpod.v1.WatchEventsRequest.ResourceTypeFilter.
 * Use `create(WatchEventsRequest_ResourceTypeFilterSchema)` to create a new message.
 */
export declare const WatchEventsRequest_ResourceTypeFilterSchema: GenMessage<WatchEventsRequest_ResourceTypeFilter>;
/**
 * @generated from message gitpod.v1.WatchEventsResponse
 */
export type WatchEventsResponse = Message<"gitpod.v1.WatchEventsResponse"> & {
    /**
     * @generated from field: gitpod.v1.ResourceOperation operation = 1;
     */
    operation: ResourceOperation;
    /**
     * @generated from field: gitpod.v1.ResourceType resource_type = 2;
     */
    resourceType: ResourceType;
    /**
     * @generated from field: string resource_id = 3;
     */
    resourceId: string;
};
/**
 * Describes the message gitpod.v1.WatchEventsResponse.
 * Use `create(WatchEventsResponseSchema)` to create a new message.
 */
export declare const WatchEventsResponseSchema: GenMessage<WatchEventsResponse>;
/**
 * @generated from message gitpod.v1.ListAuditLogsRequest
 */
export type ListAuditLogsRequest = Message<"gitpod.v1.ListAuditLogsRequest"> & {
    /**
     * pagination contains the pagination options for listing audit logs
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListAuditLogsRequest.Filter filter = 2;
     */
    filter?: ListAuditLogsRequest_Filter;
    /**
     * sort specifies the order of results. When unspecified, results are sorted
     * by creation time descending (newest first).
     * Supported sort fields: createdAt.
     *
     * @generated from field: gitpod.v1.Sort sort = 3;
     */
    sort?: Sort;
};
/**
 * Describes the message gitpod.v1.ListAuditLogsRequest.
 * Use `create(ListAuditLogsRequestSchema)` to create a new message.
 */
export declare const ListAuditLogsRequestSchema: GenMessage<ListAuditLogsRequest>;
/**
 * @generated from message gitpod.v1.ListAuditLogsRequest.Filter
 */
export type ListAuditLogsRequest_Filter = Message<"gitpod.v1.ListAuditLogsRequest.Filter"> & {
    /**
     * @generated from field: repeated string actor_ids = 1;
     */
    actorIds: string[];
    /**
     * @generated from field: repeated gitpod.v1.Principal actor_principals = 2;
     */
    actorPrincipals: Principal[];
    /**
     * @generated from field: repeated string subject_ids = 3;
     */
    subjectIds: string[];
    /**
     * @generated from field: repeated gitpod.v1.ResourceType subject_types = 4;
     */
    subjectTypes: ResourceType[];
    /**
     * from filters audit logs created at or after this timestamp (inclusive).
     *
     * @generated from field: optional google.protobuf.Timestamp from = 5;
     */
    from?: Timestamp;
    /**
     * to filters audit logs created before this timestamp (exclusive).
     *
     * @generated from field: optional google.protobuf.Timestamp to = 6;
     */
    to?: Timestamp;
};
/**
 * Describes the message gitpod.v1.ListAuditLogsRequest.Filter.
 * Use `create(ListAuditLogsRequest_FilterSchema)` to create a new message.
 */
export declare const ListAuditLogsRequest_FilterSchema: GenMessage<ListAuditLogsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListAuditLogsResponse
 */
export type ListAuditLogsResponse = Message<"gitpod.v1.ListAuditLogsResponse"> & {
    /**
     * @generated from field: repeated gitpod.v1.ListAuditLogsResponse.AuditLogEntry entries = 1;
     */
    entries: ListAuditLogsResponse_AuditLogEntry[];
    /**
     * pagination contains the pagination options for listing environments
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 2;
     */
    pagination?: PaginationResponse;
};
/**
 * Describes the message gitpod.v1.ListAuditLogsResponse.
 * Use `create(ListAuditLogsResponseSchema)` to create a new message.
 */
export declare const ListAuditLogsResponseSchema: GenMessage<ListAuditLogsResponse>;
/**
 * @generated from message gitpod.v1.ListAuditLogsResponse.AuditLogEntry
 */
export type ListAuditLogsResponse_AuditLogEntry = Message<"gitpod.v1.ListAuditLogsResponse.AuditLogEntry"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string actor_id = 2;
     */
    actorId: string;
    /**
     * @generated from field: gitpod.v1.Principal actor_principal = 3;
     */
    actorPrincipal: Principal;
    /**
     * @generated from field: string subject_id = 4;
     */
    subjectId: string;
    /**
     * @generated from field: gitpod.v1.ResourceType subject_type = 5;
     */
    subjectType: ResourceType;
    /**
     * @generated from field: string action = 6;
     */
    action: string;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 7;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: gitpod.v1.AuditLogEntryKind kind = 8;
     */
    kind: AuditLogEntryKind;
};
/**
 * Describes the message gitpod.v1.ListAuditLogsResponse.AuditLogEntry.
 * Use `create(ListAuditLogsResponse_AuditLogEntrySchema)` to create a new message.
 */
export declare const ListAuditLogsResponse_AuditLogEntrySchema: GenMessage<ListAuditLogsResponse_AuditLogEntry>;
/**
 * @generated from message gitpod.v1.GetAuditLogRequest
 */
export type GetAuditLogRequest = Message<"gitpod.v1.GetAuditLogRequest"> & {
    /**
     * audit_log_entry_id is the ID of the audit-log entry to retrieve.
     *
     * @generated from field: string audit_log_entry_id = 1;
     */
    auditLogEntryId: string;
};
/**
 * Describes the message gitpod.v1.GetAuditLogRequest.
 * Use `create(GetAuditLogRequestSchema)` to create a new message.
 */
export declare const GetAuditLogRequestSchema: GenMessage<GetAuditLogRequest>;
/**
 * @generated from message gitpod.v1.GetAuditLogResponse
 */
export type GetAuditLogResponse = Message<"gitpod.v1.GetAuditLogResponse"> & {
    /**
     * entry contains the common audit-log fields also returned by ListAuditLogs.
     *
     * @generated from field: gitpod.v1.ListAuditLogsResponse.AuditLogEntry entry = 1;
     */
    entry?: ListAuditLogsResponse_AuditLogEntry;
    /**
     * details contains typed evidence captured with the audit entry.
     * It is absent when the entry has no supported, valid details.
     *
     * @generated from field: gitpod.v1.AuditLogEntryDetails details = 2;
     */
    details?: AuditLogEntryDetails;
};
/**
 * Describes the message gitpod.v1.GetAuditLogResponse.
 * Use `create(GetAuditLogResponseSchema)` to create a new message.
 */
export declare const GetAuditLogResponseSchema: GenMessage<GetAuditLogResponse>;
/**
 * AuditLogEntryDetails contains the typed evidence stored with an audit-log entry.
 *
 * @generated from message gitpod.v1.AuditLogEntryDetails
 */
export type AuditLogEntryDetails = Message<"gitpod.v1.AuditLogEntryDetails"> & {
    /**
     * @generated from oneof gitpod.v1.AuditLogEntryDetails.payload
     */
    payload: {
        /**
         * veto_exec contains Veto Exec event details without process.cmdline.
         *
         * @generated from field: gitpod.v1.ReportExecEventRequest veto_exec = 1;
         */
        value: ReportExecEventRequest;
        case: "vetoExec";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.AuditLogEntryDetails.
 * Use `create(AuditLogEntryDetailsSchema)` to create a new message.
 */
export declare const AuditLogEntryDetailsSchema: GenMessage<AuditLogEntryDetails>;
/**
 * @generated from enum gitpod.v1.ResourceOperation
 */
export declare enum ResourceOperation {
    /**
     * @generated from enum value: RESOURCE_OPERATION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: RESOURCE_OPERATION_CREATE = 1;
     */
    CREATE = 1,
    /**
     * @generated from enum value: RESOURCE_OPERATION_UPDATE = 2;
     */
    UPDATE = 2,
    /**
     * @generated from enum value: RESOURCE_OPERATION_DELETE = 3;
     */
    DELETE = 3,
    /**
     * UPDATE_STATUS is emitted only iff the resource's status has been updated. If the status and something else
     * are updated, a single UPDATE event is emitted.
     *
     * @generated from enum value: RESOURCE_OPERATION_UPDATE_STATUS = 4;
     */
    UPDATE_STATUS = 4
}
/**
 * Describes the enum gitpod.v1.ResourceOperation.
 */
export declare const ResourceOperationSchema: GenEnum<ResourceOperation>;
/**
 * AuditLogEntryKind identifies the coarse query and rendering family of an audit-log entry.
 *
 * @generated from enum gitpod.v1.AuditLogEntryKind
 */
export declare enum AuditLogEntryKind {
    /**
     * @generated from enum value: AUDIT_LOG_ENTRY_KIND_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: AUDIT_LOG_ENTRY_KIND_AGENT_SECURITY_EXEC_BLOCKED = 1 [deprecated = true];
     * @deprecated
     */
    AGENT_SECURITY_EXEC_BLOCKED = 1,
    /**
     * @generated from enum value: AUDIT_LOG_ENTRY_KIND_AGENT_SECURITY_EXEC_AUDITED = 2 [deprecated = true];
     * @deprecated
     */
    AGENT_SECURITY_EXEC_AUDITED = 2,
    /**
     * @generated from enum value: AUDIT_LOG_ENTRY_KIND_RESOURCE_CHANGE = 3;
     */
    RESOURCE_CHANGE = 3,
    /**
     * @generated from enum value: AUDIT_LOG_ENTRY_KIND_CREDENTIAL_ACCESS = 4;
     */
    CREDENTIAL_ACCESS = 4,
    /**
     * @generated from enum value: AUDIT_LOG_ENTRY_KIND_ENVIRONMENT_VETO = 5;
     */
    ENVIRONMENT_VETO = 5
}
/**
 * Describes the enum gitpod.v1.AuditLogEntryKind.
 */
export declare const AuditLogEntryKindSchema: GenEnum<AuditLogEntryKind>;
/**
 * @generated from enum gitpod.v1.ResourceType
 */
export declare enum ResourceType {
    /**
     * @generated from enum value: RESOURCE_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: RESOURCE_TYPE_ENVIRONMENT = 1;
     */
    ENVIRONMENT = 1,
    /**
     * @generated from enum value: RESOURCE_TYPE_RUNNER = 2;
     */
    RUNNER = 2,
    /**
     * @generated from enum value: RESOURCE_TYPE_PROJECT = 3;
     */
    PROJECT = 3,
    /**
     * @generated from enum value: RESOURCE_TYPE_TASK = 4;
     */
    TASK = 4,
    /**
     * @generated from enum value: RESOURCE_TYPE_TASK_EXECUTION = 5;
     */
    TASK_EXECUTION = 5,
    /**
     * @generated from enum value: RESOURCE_TYPE_SERVICE = 6;
     */
    SERVICE = 6,
    /**
     * @generated from enum value: RESOURCE_TYPE_ORGANIZATION = 7;
     */
    ORGANIZATION = 7,
    /**
     * @generated from enum value: RESOURCE_TYPE_USER = 8;
     */
    USER = 8,
    /**
     * @generated from enum value: RESOURCE_TYPE_ENVIRONMENT_CLASS = 9;
     */
    ENVIRONMENT_CLASS = 9,
    /**
     * @generated from enum value: RESOURCE_TYPE_RUNNER_SCM_INTEGRATION = 10;
     */
    RUNNER_SCM_INTEGRATION = 10,
    /**
     * @generated from enum value: RESOURCE_TYPE_HOST_AUTHENTICATION_TOKEN = 11;
     */
    HOST_AUTHENTICATION_TOKEN = 11,
    /**
     * @generated from enum value: RESOURCE_TYPE_GROUP = 12;
     */
    GROUP = 12,
    /**
     * @generated from enum value: RESOURCE_TYPE_PERSONAL_ACCESS_TOKEN = 13;
     */
    PERSONAL_ACCESS_TOKEN = 13,
    /**
     * @generated from enum value: RESOURCE_TYPE_USER_PREFERENCE = 14;
     */
    USER_PREFERENCE = 14,
    /**
     * @generated from enum value: RESOURCE_TYPE_SERVICE_ACCOUNT = 15;
     */
    SERVICE_ACCOUNT = 15,
    /**
     * @generated from enum value: RESOURCE_TYPE_SECRET = 16;
     */
    SECRET = 16,
    /**
     * @generated from enum value: RESOURCE_TYPE_SSO_CONFIG = 17;
     */
    SSO_CONFIG = 17,
    /**
     * @generated from enum value: RESOURCE_TYPE_DOMAIN_VERIFICATION = 18;
     */
    DOMAIN_VERIFICATION = 18,
    /**
     * @generated from enum value: RESOURCE_TYPE_AGENT_EXECUTION = 19;
     */
    AGENT_EXECUTION = 19,
    /**
     * @generated from enum value: RESOURCE_TYPE_RUNNER_LLM_INTEGRATION = 20;
     */
    RUNNER_LLM_INTEGRATION = 20,
    /**
     * @generated from enum value: RESOURCE_TYPE_AGENT = 21;
     */
    AGENT = 21,
    /**
     * @generated from enum value: RESOURCE_TYPE_ENVIRONMENT_SESSION = 22;
     */
    ENVIRONMENT_SESSION = 22,
    /**
     * @generated from enum value: RESOURCE_TYPE_USER_SECRET = 23;
     */
    USER_SECRET = 23,
    /**
     * @generated from enum value: RESOURCE_TYPE_ORGANIZATION_POLICY = 24;
     */
    ORGANIZATION_POLICY = 24,
    /**
     * @generated from enum value: RESOURCE_TYPE_ORGANIZATION_SECRET = 25;
     */
    ORGANIZATION_SECRET = 25,
    /**
     * @generated from enum value: RESOURCE_TYPE_PROJECT_ENVIRONMENT_CLASS = 26;
     */
    PROJECT_ENVIRONMENT_CLASS = 26,
    /**
     * @generated from enum value: RESOURCE_TYPE_BILLING = 27;
     */
    BILLING = 27,
    /**
     * @generated from enum value: RESOURCE_TYPE_PROMPT = 28;
     */
    PROMPT = 28,
    /**
     * @generated from enum value: RESOURCE_TYPE_COUPON = 29;
     */
    COUPON = 29,
    /**
     * @generated from enum value: RESOURCE_TYPE_COUPON_REDEMPTION = 30;
     */
    COUPON_REDEMPTION = 30,
    /**
     * @generated from enum value: RESOURCE_TYPE_ACCOUNT = 31;
     */
    ACCOUNT = 31,
    /**
     * @generated from enum value: RESOURCE_TYPE_INTEGRATION = 32;
     */
    INTEGRATION = 32,
    /**
     * @generated from enum value: RESOURCE_TYPE_WORKFLOW = 33;
     */
    WORKFLOW = 33,
    /**
     * @generated from enum value: RESOURCE_TYPE_WORKFLOW_EXECUTION = 34;
     */
    WORKFLOW_EXECUTION = 34,
    /**
     * @generated from enum value: RESOURCE_TYPE_WORKFLOW_EXECUTION_ACTION = 35;
     */
    WORKFLOW_EXECUTION_ACTION = 35,
    /**
     * @generated from enum value: RESOURCE_TYPE_SNAPSHOT = 36;
     */
    SNAPSHOT = 36,
    /**
     * @generated from enum value: RESOURCE_TYPE_PREBUILD = 37;
     */
    PREBUILD = 37,
    /**
     * @generated from enum value: RESOURCE_TYPE_ORGANIZATION_LLM_INTEGRATION = 38;
     */
    ORGANIZATION_LLM_INTEGRATION = 38,
    /**
     * @generated from enum value: RESOURCE_TYPE_CUSTOM_DOMAIN = 39;
     */
    CUSTOM_DOMAIN = 39,
    /**
     * @generated from enum value: RESOURCE_TYPE_ROLE_ASSIGNMENT_CHANGED = 40;
     */
    ROLE_ASSIGNMENT_CHANGED = 40,
    /**
     * @generated from enum value: RESOURCE_TYPE_GROUP_MEMBERSHIP_CHANGED = 41;
     */
    GROUP_MEMBERSHIP_CHANGED = 41,
    /**
     * @generated from enum value: RESOURCE_TYPE_WEBHOOK = 42;
     */
    WEBHOOK = 42,
    /**
     * @generated from enum value: RESOURCE_TYPE_SCIM_CONFIGURATION = 43;
     */
    SCIM_CONFIGURATION = 43,
    /**
     * @generated from enum value: RESOURCE_TYPE_SERVICE_ACCOUNT_SECRET = 44;
     */
    SERVICE_ACCOUNT_SECRET = 44,
    /**
     * @generated from enum value: RESOURCE_TYPE_ANNOUNCEMENT_BANNER = 45;
     */
    ANNOUNCEMENT_BANNER = 45,
    /**
     * @generated from enum value: RESOURCE_TYPE_SERVICE_ACCOUNT_TOKEN = 46;
     */
    SERVICE_ACCOUNT_TOKEN = 46,
    /**
     * @generated from enum value: RESOURCE_TYPE_ROLE_ASSIGNMENT = 47;
     */
    ROLE_ASSIGNMENT = 47,
    /**
     * @generated from enum value: RESOURCE_TYPE_WARM_POOL = 48;
     */
    WARM_POOL = 48,
    /**
     * @generated from enum value: RESOURCE_TYPE_NOTIFICATION = 49;
     */
    NOTIFICATION = 49,
    /**
     * @generated from enum value: RESOURCE_TYPE_SECURITY_POLICY = 50;
     */
    SECURITY_POLICY = 50
}
/**
 * Describes the enum gitpod.v1.ResourceType.
 */
export declare const ResourceTypeSchema: GenEnum<ResourceType>;
/**
 * @generated from service gitpod.v1.EventService
 */
export declare const EventService: GenService<{
    /**
     * Streams events for all projects, runners, environments, tasks, and services based on the
     * specified scope.
     *
     * Use this method to:
     * - Monitor resource changes in real-time
     * - Track system events
     * - Receive notifications
     *
     * The scope parameter determines which events to watch:
     * - Organization scope (default): Watch all organization-wide events including projects,
     *   runners and environments. Task and service events are not included. Use by setting
     *   organization=true or omitting the scope.
     * - Environment scope: Watch events for a specific environment, including its tasks,
     *   task executions, and services. Use by setting environment_id to the UUID of the
     *   environment to watch.
     *
     * @generated from rpc gitpod.v1.EventService.WatchEvents
     */
    watchEvents: {
        methodKind: "server_streaming";
        input: typeof WatchEventsRequestSchema;
        output: typeof WatchEventsResponseSchema;
    };
    /**
     * Lists audit logs with filtering and pagination options.
     *
     * Use this method to:
     * - View audit history
     * - Track user actions
     * - Monitor system changes
     *
     * ### Examples
     *
     * - List all logs:
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - Filter by actor:
     *
     *   ```yaml
     *   filter:
     *     actorIds: ["d2c94c27-3b76-4a42-b88c-95a85e392c68"]
     *     actorPrincipals: ["PRINCIPAL_USER"]
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - Filter by time range:
     *
     *   ```yaml
     *   filter:
     *     from: "2024-01-01T00:00:00Z"
     *     to: "2024-02-01T00:00:00Z"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.EventService.ListAuditLogs
     */
    listAuditLogs: {
        methodKind: "unary";
        input: typeof ListAuditLogsRequestSchema;
        output: typeof ListAuditLogsResponseSchema;
    };
    /**
     * Gets one audit-log entry, including any typed details stored for it.
     *
     * Use this method to:
     * - Inspect the details of a specific audit-log entry
     * - Retrieve the evidence associated with a Veto Exec audit event
     *
     * ### Examples
     *
     * - Get an audit-log entry:
     *
     *   ```yaml
     *   auditLogEntryId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.EventService.GetAuditLog
     */
    getAuditLog: {
        methodKind: "unary";
        input: typeof GetAuditLogRequestSchema;
        output: typeof GetAuditLogResponseSchema;
    };
}>;
