import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { CountRequest, CountResponse } from "./count_pb";
import type { AutomationTrigger } from "./environment_automation_pb";
import type { Subject } from "./identity_pb";
import type { PaginationRequest, PaginationResponse, SortOrder } from "./pagination_pb";
import type { ListEnvironmentClassesRequestSchema, ListEnvironmentClassesResponseSchema, RunnerKind } from "./runner_configuration_pb";
import type { Secret_CredentialProxy, Secret_Source } from "./secret_pb";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/environment.proto.
 */
export declare const file_gitpod_v1_environment: GenFile;
/**
 * @generated from message gitpod.v1.MarkEnvironmentActiveRequest
 */
export type MarkEnvironmentActiveRequest = Message<"gitpod.v1.MarkEnvironmentActiveRequest"> & {
    /**
     * The ID of the environment to update activity for.
     *
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * activity_signal specifies the activity.
     *
     * @generated from field: gitpod.v1.EnvironmentActivitySignal activity_signal = 2;
     */
    activitySignal?: EnvironmentActivitySignal;
};
/**
 * Describes the message gitpod.v1.MarkEnvironmentActiveRequest.
 * Use `create(MarkEnvironmentActiveRequestSchema)` to create a new message.
 */
export declare const MarkEnvironmentActiveRequestSchema: GenMessage<MarkEnvironmentActiveRequest>;
/**
 * EnvironmentActivitySignal used to signal activity for an environment.
 *
 * @generated from message gitpod.v1.EnvironmentActivitySignal
 */
export type EnvironmentActivitySignal = Message<"gitpod.v1.EnvironmentActivitySignal"> & {
    /**
     * source of the activity signal, such as "VS Code", "SSH", or "Automations".
     * It should be a human-readable string that describes the source of the activity signal.
     *
     * @generated from field: string source = 1;
     */
    source: string;
    /**
     * timestamp of when the activity was observed by the source.
     * Only reported every 5 minutes.
     * Zero value means no activity was observed.
     *
     * @generated from field: google.protobuf.Timestamp timestamp = 2;
     */
    timestamp?: Timestamp;
};
/**
 * Describes the message gitpod.v1.EnvironmentActivitySignal.
 * Use `create(EnvironmentActivitySignalSchema)` to create a new message.
 */
export declare const EnvironmentActivitySignalSchema: GenMessage<EnvironmentActivitySignal>;
/**
 * @generated from message gitpod.v1.MarkEnvironmentActiveResponse
 */
export type MarkEnvironmentActiveResponse = Message<"gitpod.v1.MarkEnvironmentActiveResponse"> & {};
/**
 * Describes the message gitpod.v1.MarkEnvironmentActiveResponse.
 * Use `create(MarkEnvironmentActiveResponseSchema)` to create a new message.
 */
export declare const MarkEnvironmentActiveResponseSchema: GenMessage<MarkEnvironmentActiveResponse>;
/**
 * @generated from message gitpod.v1.GetEnvironmentRequest
 */
export type GetEnvironmentRequest = Message<"gitpod.v1.GetEnvironmentRequest"> & {
    /**
     * environment_id specifies the environment to get
     *
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
};
/**
 * Describes the message gitpod.v1.GetEnvironmentRequest.
 * Use `create(GetEnvironmentRequestSchema)` to create a new message.
 */
export declare const GetEnvironmentRequestSchema: GenMessage<GetEnvironmentRequest>;
/**
 * @generated from message gitpod.v1.GetEnvironmentResponse
 */
export type GetEnvironmentResponse = Message<"gitpod.v1.GetEnvironmentResponse"> & {
    /**
     * @generated from field: gitpod.v1.Environment environment = 1;
     */
    environment?: Environment;
};
/**
 * Describes the message gitpod.v1.GetEnvironmentResponse.
 * Use `create(GetEnvironmentResponseSchema)` to create a new message.
 */
export declare const GetEnvironmentResponseSchema: GenMessage<GetEnvironmentResponse>;
/**
 * @generated from message gitpod.v1.ListEnvironmentsRequest
 */
export type ListEnvironmentsRequest = Message<"gitpod.v1.ListEnvironmentsRequest"> & {
    /**
     * pagination contains the pagination options for listing environments
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListEnvironmentsRequest.Filter filter = 3;
     */
    filter?: ListEnvironmentsRequest_Filter;
    /**
     * count controls whether the response includes a bounded total count.
     *
     * @generated from field: gitpod.v1.CountRequest count = 4;
     */
    count?: CountRequest;
    /**
     * sort specifies the order of results. When unspecified, environments are sorted by ID descending.
     *
     * @generated from field: gitpod.v1.ListEnvironmentsRequest.Sort sort = 5;
     */
    sort?: ListEnvironmentsRequest_Sort;
};
/**
 * Describes the message gitpod.v1.ListEnvironmentsRequest.
 * Use `create(ListEnvironmentsRequestSchema)` to create a new message.
 */
export declare const ListEnvironmentsRequestSchema: GenMessage<ListEnvironmentsRequest>;
/**
 * @generated from message gitpod.v1.ListEnvironmentsRequest.Sort
 */
export type ListEnvironmentsRequest_Sort = Message<"gitpod.v1.ListEnvironmentsRequest.Sort"> & {
    /**
     * @generated from field: gitpod.v1.ListEnvironmentsRequest.SortField field = 1;
     */
    field: ListEnvironmentsRequest_SortField;
    /**
     * @generated from field: gitpod.v1.SortOrder order = 2;
     */
    order: SortOrder;
};
/**
 * Describes the message gitpod.v1.ListEnvironmentsRequest.Sort.
 * Use `create(ListEnvironmentsRequest_SortSchema)` to create a new message.
 */
export declare const ListEnvironmentsRequest_SortSchema: GenMessage<ListEnvironmentsRequest_Sort>;
/**
 * @generated from message gitpod.v1.ListEnvironmentsRequest.Filter
 */
export type ListEnvironmentsRequest_Filter = Message<"gitpod.v1.ListEnvironmentsRequest.Filter"> & {
    /**
     * runner_ids filters the response to only Environments running on these Runner IDs
     *
     * @generated from field: repeated string runner_ids = 1;
     */
    runnerIds: string[];
    /**
     * actual_phases is a list of phases the environment must be in for it to be returned in the API call
     *
     * @generated from field: repeated gitpod.v1.EnvironmentPhase status_phases = 2;
     */
    statusPhases: EnvironmentPhase[];
    /**
     * creator_ids filters the response to only Environments created by specified members
     *
     * @generated from field: repeated string creator_ids = 3;
     */
    creatorIds: string[];
    /**
     * project_ids filters the response to only Environments associated with the specified projects
     *
     * @generated from field: repeated string project_ids = 4;
     */
    projectIds: string[];
    /**
     * runner_kinds filters the response to only Environments running on these Runner Kinds
     *
     * @generated from field: repeated gitpod.v1.RunnerKind runner_kinds = 5;
     */
    runnerKinds: RunnerKind[];
    /**
     * archival_status filters the response based on environment archive status
     *
     * @generated from field: optional gitpod.v1.ListEnvironmentsRequest.ArchivalStatus archival_status = 6;
     */
    archivalStatus?: ListEnvironmentsRequest_ArchivalStatus;
    /**
     * created_before filters environments created before this timestamp
     *
     * @generated from field: optional google.protobuf.Timestamp created_before = 7;
     */
    createdBefore?: Timestamp;
    /**
     * roles filters the response to only Environments with the specified roles
     *
     * @generated from field: repeated gitpod.v1.EnvironmentRole roles = 8;
     */
    roles: EnvironmentRole[];
    /**
     * lockdown_before filters environments whose lockdown_at is before this timestamp.
     * Only environments with lockdown_at set are matched.
     *
     * @generated from field: optional google.protobuf.Timestamp lockdown_before = 10;
     */
    lockdownBefore?: Timestamp;
    /**
     * search performs case-insensitive search across environment ID, name, repository URL, and branch
     *
     * @generated from field: string search = 11;
     */
    search: string;
    /**
     * session_ids filters the response to only environments belonging to the specified sessions
     *
     * @generated from field: repeated string session_ids = 12;
     */
    sessionIds: string[];
};
/**
 * Describes the message gitpod.v1.ListEnvironmentsRequest.Filter.
 * Use `create(ListEnvironmentsRequest_FilterSchema)` to create a new message.
 */
export declare const ListEnvironmentsRequest_FilterSchema: GenMessage<ListEnvironmentsRequest_Filter>;
/**
 * @generated from enum gitpod.v1.ListEnvironmentsRequest.ArchivalStatus
 */
export declare enum ListEnvironmentsRequest_ArchivalStatus {
    /**
     * @generated from enum value: ARCHIVAL_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: ARCHIVAL_STATUS_ACTIVE = 1;
     */
    ACTIVE = 1,
    /**
     * @generated from enum value: ARCHIVAL_STATUS_ARCHIVED = 2;
     */
    ARCHIVED = 2,
    /**
     * @generated from enum value: ARCHIVAL_STATUS_ALL = 3;
     */
    ALL = 3
}
/**
 * Describes the enum gitpod.v1.ListEnvironmentsRequest.ArchivalStatus.
 */
export declare const ListEnvironmentsRequest_ArchivalStatusSchema: GenEnum<ListEnvironmentsRequest_ArchivalStatus>;
/**
 * @generated from enum gitpod.v1.ListEnvironmentsRequest.SortField
 */
export declare enum ListEnvironmentsRequest_SortField {
    /**
     * @generated from enum value: SORT_FIELD_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Sort by environment ID.
     *
     * @generated from enum value: SORT_FIELD_ID = 1;
     */
    ID = 1,
    /**
     * Sort by the time the environment was archived.
     *
     * @generated from enum value: SORT_FIELD_ARCHIVED_AT = 2;
     */
    ARCHIVED_AT = 2
}
/**
 * Describes the enum gitpod.v1.ListEnvironmentsRequest.SortField.
 */
export declare const ListEnvironmentsRequest_SortFieldSchema: GenEnum<ListEnvironmentsRequest_SortField>;
/**
 * @generated from message gitpod.v1.ListEnvironmentsResponse
 */
export type ListEnvironmentsResponse = Message<"gitpod.v1.ListEnvironmentsResponse"> & {
    /**
     * pagination contains the pagination options for listing environments
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * environments are the environments that matched the query
     *
     * @generated from field: repeated gitpod.v1.Environment environments = 2;
     */
    environments: Environment[];
    /**
     * count is the bounded total count of matching environments, present only
     * when requested via CountRequest.include on the first page.
     *
     * @generated from field: gitpod.v1.CountResponse count = 3;
     */
    count?: CountResponse;
};
/**
 * Describes the message gitpod.v1.ListEnvironmentsResponse.
 * Use `create(ListEnvironmentsResponseSchema)` to create a new message.
 */
export declare const ListEnvironmentsResponseSchema: GenMessage<ListEnvironmentsResponse>;
/**
 * Required fields:
 * - metadata.organization_id
 * - metadata.configuration_id
 *
 * @generated from message gitpod.v1.CreateEnvironmentRequest
 */
export type CreateEnvironmentRequest = Message<"gitpod.v1.CreateEnvironmentRequest"> & {
    /**
     * spec is the configuration of the environment that's required for the to
     * start the environment
     *
     * @generated from field: gitpod.v1.EnvironmentSpec spec = 1;
     */
    spec?: EnvironmentSpec;
    /**
     * name is a user-defined identifier for the environment.
     * If not specified, the system will generate a name.
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * session_id is the ID of the session this environment belongs to.
     * If empty, a new session is created implicitly.
     *
     * @generated from field: string session_id = 3;
     */
    sessionId: string;
    /**
     * annotations are key/value pairs attached to the environment metadata.
     *
     * @generated from field: map<string, string> annotations = 4;
     */
    annotations: {
        [key: string]: string;
    };
};
/**
 * Describes the message gitpod.v1.CreateEnvironmentRequest.
 * Use `create(CreateEnvironmentRequestSchema)` to create a new message.
 */
export declare const CreateEnvironmentRequestSchema: GenMessage<CreateEnvironmentRequest>;
/**
 * @generated from message gitpod.v1.CreateEnvironmentResponse
 */
export type CreateEnvironmentResponse = Message<"gitpod.v1.CreateEnvironmentResponse"> & {
    /**
     * @generated from field: gitpod.v1.Environment environment = 1;
     */
    environment?: Environment;
};
/**
 * Describes the message gitpod.v1.CreateEnvironmentResponse.
 * Use `create(CreateEnvironmentResponseSchema)` to create a new message.
 */
export declare const CreateEnvironmentResponseSchema: GenMessage<CreateEnvironmentResponse>;
/**
 * @generated from message gitpod.v1.CreateEnvironmentFromProjectRequest
 */
export type CreateEnvironmentFromProjectRequest = Message<"gitpod.v1.CreateEnvironmentFromProjectRequest"> & {
    /**
     * @generated from field: string project_id = 1;
     */
    projectId: string;
    /**
     * Spec is the configuration of the environment that's required for the
     * runner to start the environment
     * Configuration already defined in the Project will override parts of the spec, if set
     *
     * @generated from field: gitpod.v1.EnvironmentSpec spec = 3;
     */
    spec?: EnvironmentSpec;
    /**
     * name is a user-defined identifier for the environment.
     * If not specified, the system will generate a name.
     *
     * @generated from field: optional string name = 4;
     */
    name?: string;
    /**
     * annotations are key/value pairs attached to the environment metadata.
     *
     * @generated from field: map<string, string> annotations = 5;
     */
    annotations: {
        [key: string]: string;
    };
    /**
     * session_id is the ID of the session this environment belongs to.
     * If empty, a new session is created implicitly.
     *
     * @generated from field: string session_id = 6;
     */
    sessionId: string;
};
/**
 * Describes the message gitpod.v1.CreateEnvironmentFromProjectRequest.
 * Use `create(CreateEnvironmentFromProjectRequestSchema)` to create a new message.
 */
export declare const CreateEnvironmentFromProjectRequestSchema: GenMessage<CreateEnvironmentFromProjectRequest>;
/**
 * @generated from message gitpod.v1.CreateEnvironmentFromProjectResponse
 */
export type CreateEnvironmentFromProjectResponse = Message<"gitpod.v1.CreateEnvironmentFromProjectResponse"> & {
    /**
     * @generated from field: gitpod.v1.Environment environment = 1;
     */
    environment?: Environment;
};
/**
 * Describes the message gitpod.v1.CreateEnvironmentFromProjectResponse.
 * Use `create(CreateEnvironmentFromProjectResponseSchema)` to create a new message.
 */
export declare const CreateEnvironmentFromProjectResponseSchema: GenMessage<CreateEnvironmentFromProjectResponse>;
/**
 * `CreateEnvironmentPreconditionFailureDetails` contains details about why a
 * `CreateEnvironment` or `CreateEnvironmentFromProject` request failed with failed_precondition.
 * The `missing_authentication_tokens_for_hosts` field lists the hosts for which the required authentication tokens were missing.
 *
 * @generated from message gitpod.v1.CreateEnvironmentPreconditionFailureDetails
 */
export type CreateEnvironmentPreconditionFailureDetails = Message<"gitpod.v1.CreateEnvironmentPreconditionFailureDetails"> & {
    /**
     * @generated from field: repeated string missing_authentication_tokens_for_hosts = 1;
     */
    missingAuthenticationTokensForHosts: string[];
};
/**
 * Describes the message gitpod.v1.CreateEnvironmentPreconditionFailureDetails.
 * Use `create(CreateEnvironmentPreconditionFailureDetailsSchema)` to create a new message.
 */
export declare const CreateEnvironmentPreconditionFailureDetailsSchema: GenMessage<CreateEnvironmentPreconditionFailureDetails>;
/**
 * `CreateEnvironmentFromProjectBadRequestEnvironmentClassDetails` contains details about possible environment class IDs to use with this project.
 *
 * @generated from message gitpod.v1.CreateEnvironmentFromProjectBadRequestEnvironmentClassDetails
 */
export type CreateEnvironmentFromProjectBadRequestEnvironmentClassDetails = Message<"gitpod.v1.CreateEnvironmentFromProjectBadRequestEnvironmentClassDetails"> & {
    /**
     * environment_class_ids are the available environment class IDs to use with this project.
     *
     * @generated from field: repeated string environment_class_ids = 1;
     */
    environmentClassIds: string[];
};
/**
 * Describes the message gitpod.v1.CreateEnvironmentFromProjectBadRequestEnvironmentClassDetails.
 * Use `create(CreateEnvironmentFromProjectBadRequestEnvironmentClassDetailsSchema)` to create a new message.
 */
export declare const CreateEnvironmentFromProjectBadRequestEnvironmentClassDetailsSchema: GenMessage<CreateEnvironmentFromProjectBadRequestEnvironmentClassDetails>;
/**
 * @generated from message gitpod.v1.UnarchiveEnvironmentRequest
 */
export type UnarchiveEnvironmentRequest = Message<"gitpod.v1.UnarchiveEnvironmentRequest"> & {
    /**
     * environment_id specifies the environment to unarchive.
     *
     * +required
     *
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
};
/**
 * Describes the message gitpod.v1.UnarchiveEnvironmentRequest.
 * Use `create(UnarchiveEnvironmentRequestSchema)` to create a new message.
 */
export declare const UnarchiveEnvironmentRequestSchema: GenMessage<UnarchiveEnvironmentRequest>;
/**
 * @generated from message gitpod.v1.UnarchiveEnvironmentResponse
 */
export type UnarchiveEnvironmentResponse = Message<"gitpod.v1.UnarchiveEnvironmentResponse"> & {};
/**
 * Describes the message gitpod.v1.UnarchiveEnvironmentResponse.
 * Use `create(UnarchiveEnvironmentResponseSchema)` to create a new message.
 */
export declare const UnarchiveEnvironmentResponseSchema: GenMessage<UnarchiveEnvironmentResponse>;
/**
 * @generated from message gitpod.v1.ArchiveEnvironmentRequest
 */
export type ArchiveEnvironmentRequest = Message<"gitpod.v1.ArchiveEnvironmentRequest"> & {
    /**
     * environment_id specifies the environment to archive.
     *
     * +required
     *
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
};
/**
 * Describes the message gitpod.v1.ArchiveEnvironmentRequest.
 * Use `create(ArchiveEnvironmentRequestSchema)` to create a new message.
 */
export declare const ArchiveEnvironmentRequestSchema: GenMessage<ArchiveEnvironmentRequest>;
/**
 * @generated from message gitpod.v1.ArchiveEnvironmentResponse
 */
export type ArchiveEnvironmentResponse = Message<"gitpod.v1.ArchiveEnvironmentResponse"> & {};
/**
 * Describes the message gitpod.v1.ArchiveEnvironmentResponse.
 * Use `create(ArchiveEnvironmentResponseSchema)` to create a new message.
 */
export declare const ArchiveEnvironmentResponseSchema: GenMessage<ArchiveEnvironmentResponse>;
/**
 * +resource get environment
 *
 * @generated from message gitpod.v1.Environment
 */
export type Environment = Message<"gitpod.v1.Environment"> & {
    /**
     * ID is a unique identifier of this environment. No other environment with the
     * same name must be managed by this environment manager
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Metadata is data associated with this environment that's required for other
     * parts of Gitpod to function
     *
     * @generated from field: gitpod.v1.EnvironmentMetadata metadata = 2;
     */
    metadata?: EnvironmentMetadata;
    /**
     * Spec is the configuration of the environment that's required for the
     * runner to start the environment
     *
     * @generated from field: gitpod.v1.EnvironmentSpec spec = 3;
     */
    spec?: EnvironmentSpec;
    /**
     * Status is the current status of the environment
     *
     * @generated from field: gitpod.v1.EnvironmentStatus status = 4;
     */
    status?: EnvironmentStatus;
};
/**
 * Describes the message gitpod.v1.Environment.
 * Use `create(EnvironmentSchema)` to create a new message.
 */
export declare const EnvironmentSchema: GenMessage<Environment>;
/**
 * EnvironmentMetadata is data associated with an environment that's required for
 * other parts of the system to function
 *
 * @generated from message gitpod.v1.EnvironmentMetadata
 */
export type EnvironmentMetadata = Message<"gitpod.v1.EnvironmentMetadata"> & {
    /**
     * organization_id is the ID of the organization that contains the environment
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * annotations are key/value pairs that gets attached to the environment.
     * +internal - not yet implemented
     *
     * @generated from field: map<string, string> annotations = 2;
     */
    annotations: {
        [key: string]: string;
    };
    /**
     * name is the name of the environment as specified by the user
     *
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * creator is the identity of the creator of the environment
     *
     * @generated from field: gitpod.v1.Subject creator = 4;
     */
    creator?: Subject;
    /**
     * original_context_url is the normalized URL from which the environment was
     * created
     *
     * @generated from field: string original_context_url = 5;
     */
    originalContextUrl: string;
    /**
     * Time when the Environment was created.
     *
     * @generated from field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
    /**
     * If the Environment was started from a project, the project_id will reference the project.
     *
     * @generated from field: string project_id = 7;
     */
    projectId: string;
    /**
     * Runner is the ID of the runner that runs this environment.
     *
     * @generated from field: string runner_id = 9;
     */
    runnerId: string;
    /**
     * Time when the Environment was last started (i.e. CreateEnvironment or StartEnvironment were called).
     *
     * @generated from field: google.protobuf.Timestamp last_started_at = 10;
     */
    lastStartedAt?: Timestamp;
    /**
     * Time when the Environment was archived. If not set, the environment is not archived.
     *
     * @generated from field: google.protobuf.Timestamp archived_at = 11;
     */
    archivedAt?: Timestamp;
    /**
     * role is the role of the environment
     *
     * @generated from field: gitpod.v1.EnvironmentRole role = 12;
     */
    role: EnvironmentRole;
    /**
     * prebuild_id is the ID of the prebuild this environment was created from.
     * Only set if the environment was created from a prebuild.
     *
     * @generated from field: optional string prebuild_id = 13;
     */
    prebuildId?: string;
    /**
     * lockdown_at is the time at which the environment becomes locked down due
     * to the organization's maximum environment lifetime policy. Nil when no
     * lifetime policy applies.
     *
     * @generated from field: google.protobuf.Timestamp lockdown_at = 14;
     */
    lockdownAt?: Timestamp;
    /**
     * session_id is the ID of the session this environment belongs to.
     *
     * @generated from field: string session_id = 15;
     */
    sessionId: string;
};
/**
 * Describes the message gitpod.v1.EnvironmentMetadata.
 * Use `create(EnvironmentMetadataSchema)` to create a new message.
 */
export declare const EnvironmentMetadataSchema: GenMessage<EnvironmentMetadata>;
/**
 * VetoFilePathEntry defines one path-based file policy entry.
 *
 * @generated from message gitpod.v1.VetoFilePathEntry
 */
export type VetoFilePathEntry = Message<"gitpod.v1.VetoFilePathEntry"> & {
    /**
     * path is the absolute file path to match.
     *
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * surface specifies which file operation classes this entry targets.
     * UNSPECIFIED inherits from the policy default.
     *
     * @generated from field: gitpod.v1.VetoFileSurface surface = 2;
     */
    surface: VetoFileSurface;
    /**
     * effect specifies whether selected operations are blocked or audited.
     * UNSPECIFIED inherits from the policy default.
     *
     * @generated from field: gitpod.v1.KernelControlsAction effect = 3;
     */
    effect: KernelControlsAction;
    /**
     * track_changes enables WATCH_* responder-refresh events for this entry.
     *
     * @generated from field: bool track_changes = 4;
     */
    trackChanges: boolean;
};
/**
 * Describes the message gitpod.v1.VetoFilePathEntry.
 * Use `create(VetoFilePathEntrySchema)` to create a new message.
 */
export declare const VetoFilePathEntrySchema: GenMessage<VetoFilePathEntry>;
/**
 * VetoFilePathPolicy defines path-based file-content access control.
 *
 * @generated from message gitpod.v1.VetoFilePathPolicy
 */
export type VetoFilePathPolicy = Message<"gitpod.v1.VetoFilePathPolicy"> & {
    /**
     * entries is the list of per-path file policies.
     *
     * @generated from field: repeated gitpod.v1.VetoFilePathEntry entries = 1;
     */
    entries: VetoFilePathEntry[];
    /**
     * default_surface is used when an entry surface is UNSPECIFIED. UNSPECIFIED defaults to ACCESS.
     *
     * @generated from field: gitpod.v1.VetoFileSurface default_surface = 2;
     */
    defaultSurface: VetoFileSurface;
    /**
     * default_effect is used when an entry effect is UNSPECIFIED. UNSPECIFIED defaults to BLOCK.
     *
     * @generated from field: gitpod.v1.KernelControlsAction default_effect = 3;
     */
    defaultEffect: KernelControlsAction;
};
/**
 * Describes the message gitpod.v1.VetoFilePathPolicy.
 * Use `create(VetoFilePathPolicySchema)` to create a new message.
 */
export declare const VetoFilePathPolicySchema: GenMessage<VetoFilePathPolicy>;
/**
 * VetoFileBlockDevicesPolicy defines block-device open control.
 *
 * @generated from message gitpod.v1.VetoFileBlockDevicesPolicy
 */
export type VetoFileBlockDevicesPolicy = Message<"gitpod.v1.VetoFileBlockDevicesPolicy"> & {
    /**
     * enabled controls whether opening block devices is denied or audited.
     *
     * @generated from field: bool enabled = 1;
     */
    enabled: boolean;
    /**
     * action specifies how block-device open violations are handled. UNSPECIFIED defaults to BLOCK.
     *
     * @generated from field: gitpod.v1.KernelControlsAction action = 2;
     */
    action: KernelControlsAction;
};
/**
 * Describes the message gitpod.v1.VetoFileBlockDevicesPolicy.
 * Use `create(VetoFileBlockDevicesPolicySchema)` to create a new message.
 */
export declare const VetoFileBlockDevicesPolicySchema: GenMessage<VetoFileBlockDevicesPolicy>;
/**
 * Veto controls kernel-level blocking mechanisms
 *
 * @generated from message gitpod.v1.Veto
 */
export type Veto = Message<"gitpod.v1.Veto"> & {
    /**
     * exec controls executable blocking
     *
     * @generated from field: gitpod.v1.Veto.Exec exec = 1;
     */
    exec?: Veto_Exec;
    /**
     * file controls file-level access mechanisms.
     *
     * @generated from field: gitpod.v1.Veto.File file = 2;
     */
    file?: Veto_File;
};
/**
 * Describes the message gitpod.v1.Veto.
 * Use `create(VetoSchema)` to create a new message.
 */
export declare const VetoSchema: GenMessage<Veto>;
/**
 * Exec controls executable blocking
 *
 * @generated from message gitpod.v1.Veto.Exec
 */
export type Veto_Exec = Message<"gitpod.v1.Veto.Exec"> & {
    /**
     * enabled controls whether executable blocking is active
     *
     * @generated from field: bool enabled = 1;
     */
    enabled: boolean;
    /**
     * denylist is the list of executable paths or names to block
     *
     * @generated from field: repeated string denylist = 2;
     */
    denylist: string[];
    /**
     * action specifies what action kernel-level controls take on policy violations
     *
     * @generated from field: gitpod.v1.KernelControlsAction action = 3;
     */
    action: KernelControlsAction;
    /**
     * resolve_bare_names enables the discovery agent to resolve bare executable
     * names in the denylist to full filesystem paths. Gated by a feature flag
     * for incremental rollout.
     *
     * @generated from field: bool resolve_bare_names = 4;
     */
    resolveBareNames: boolean;
    /**
     * untouchable enables file I/O blocking on denylisted files. When true,
     * every read()/write() on a denylisted file is blocked via the
     * security_file_permission LSM hook. Gated by a feature flag.
     *
     * @generated from field: bool untouchable = 5;
     */
    untouchable: boolean;
    /**
     * watch enables the BPF file watcher that emits events when denylisted
     * files are modified, unlinked, or renamed. Used by the self-healing
     * responder to keep the hash denylist up to date.
     *
     * @generated from field: bool watch = 6;
     */
    watch: boolean;
    /**
     * deny_block_devices blocks opening of block devices (S_ISBLK) system-wide
     * inside the environment.
     * Deprecated: use veto.file.block_devices instead.
     *
     * @generated from field: bool deny_block_devices = 7 [deprecated = true];
     * @deprecated
     */
    denyBlockDevices: boolean;
};
/**
 * Describes the message gitpod.v1.Veto.Exec.
 * Use `create(Veto_ExecSchema)` to create a new message.
 */
export declare const Veto_ExecSchema: GenMessage<Veto_Exec>;
/**
 * File controls file-level access mechanisms.
 *
 * @generated from message gitpod.v1.Veto.File
 */
export type Veto_File = Message<"gitpod.v1.Veto.File"> & {
    /**
     * enabled controls whether file-native policy is active.
     *
     * @generated from field: bool enabled = 1;
     */
    enabled: boolean;
    /**
     * paths controls path-based file-content access.
     *
     * @generated from field: gitpod.v1.VetoFilePathPolicy paths = 2;
     */
    paths?: VetoFilePathPolicy;
    /**
     * block_devices controls block-device open access.
     *
     * @generated from field: gitpod.v1.VetoFileBlockDevicesPolicy block_devices = 3;
     */
    blockDevices?: VetoFileBlockDevicesPolicy;
    /**
     * supervisor_protection controls internal supervisor binary mutation protection.
     *
     * @generated from field: gitpod.v1.Veto.File.SupervisorProtection supervisor_protection = 4;
     */
    supervisorProtection?: Veto_File_SupervisorProtection;
};
/**
 * Describes the message gitpod.v1.Veto.File.
 * Use `create(Veto_FileSchema)` to create a new message.
 */
export declare const Veto_FileSchema: GenMessage<Veto_File>;
/**
 * SupervisorProtection controls internal protection for the supervisor binary.
 * This is materialized by the backend from supervisor_self_protection_mode and is not customer policy.
 *
 * @generated from message gitpod.v1.Veto.File.SupervisorProtection
 */
export type Veto_File_SupervisorProtection = Message<"gitpod.v1.Veto.File.SupervisorProtection"> & {
    /**
     * enabled controls whether the supervisor binary internal source is active.
     *
     * @generated from field: optional bool enabled = 1;
     */
    enabled?: boolean;
    /**
     * effect specifies whether covered supervisor binary mutations are blocked or audited.
     * UNSPECIFIED defaults to BLOCK when enabled is true.
     *
     * @generated from field: gitpod.v1.KernelControlsAction effect = 2;
     */
    effect: KernelControlsAction;
};
/**
 * Describes the message gitpod.v1.Veto.File.SupervisorProtection.
 * Use `create(Veto_File_SupervisorProtectionSchema)` to create a new message.
 */
export declare const Veto_File_SupervisorProtectionSchema: GenMessage<Veto_File_SupervisorProtection>;
/**
 * KernelControlsConfig configures kernel-level controls for the environment
 *
 * @generated from message gitpod.v1.KernelControlsConfig
 */
export type KernelControlsConfig = Message<"gitpod.v1.KernelControlsConfig"> & {
    /**
     * veto controls blocking mechanisms
     *
     * @generated from field: gitpod.v1.Veto veto = 1;
     */
    veto?: Veto;
    /**
     * bpf_debug_level controls the verbosity of BPF trace_pipe output
     * for all BPF-based agents in this environment.
     *
     * @generated from field: gitpod.v1.BPFDebugLevel bpf_debug_level = 2;
     */
    bpfDebugLevel: BPFDebugLevel;
};
/**
 * Describes the message gitpod.v1.KernelControlsConfig.
 * Use `create(KernelControlsConfigSchema)` to create a new message.
 */
export declare const KernelControlsConfigSchema: GenMessage<KernelControlsConfig>;
/**
 * EnvironmentSpec specifies the configuration of an environment for an environment
 * start
 *
 * @generated from message gitpod.v1.EnvironmentSpec
 */
export type EnvironmentSpec = Message<"gitpod.v1.EnvironmentSpec"> & {
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
     * Phase is the desired phase of the environment
     *
     * @generated from field: gitpod.v1.EnvironmentPhase desired_phase = 2;
     */
    desiredPhase: EnvironmentPhase;
    /**
     * machine is the machine spec of the environment
     *
     * @generated from field: gitpod.v1.EnvironmentSpec.Machine machine = 3;
     */
    machine?: EnvironmentSpec_Machine;
    /**
     * content is the content spec of the environment
     *
     * @generated from field: gitpod.v1.EnvironmentSpec.Content content = 4;
     */
    content?: EnvironmentSpec_Content;
    /**
     * secrets are confidential data that is mounted into the environment
     *
     * @generated from field: repeated gitpod.v1.EnvironmentSpec.Secret secrets = 5;
     */
    secrets: EnvironmentSpec_Secret[];
    /**
     * ports is the set of ports which ought to be exposed to your network
     *
     * @generated from field: repeated gitpod.v1.EnvironmentSpec.EnvironmentPort ports = 6;
     */
    ports: EnvironmentSpec_EnvironmentPort[];
    /**
     * Timeout configures the environment timeout
     *
     * @generated from field: gitpod.v1.EnvironmentSpec.Timeout timeout = 7;
     */
    timeout?: EnvironmentSpec_Timeout;
    /**
     * admission controlls who can access the environment and its ports.
     *
     * @generated from field: gitpod.v1.AdmissionLevel admission = 8;
     */
    admission: AdmissionLevel;
    /**
     * devcontainer is the devcontainer spec of the environment
     *
     * @generated from field: gitpod.v1.EnvironmentSpec.DevContainer devcontainer = 9;
     */
    devcontainer?: EnvironmentSpec_DevContainer;
    /**
     * ssh_public_keys are the public keys used to ssh into the environment
     *
     * @generated from field: repeated gitpod.v1.EnvironmentSpec.SSHPublicKey ssh_public_keys = 10;
     */
    sshPublicKeys: EnvironmentSpec_SSHPublicKey[];
    /**
     * automations_file is the automations file spec of the environment
     *
     * @generated from field: gitpod.v1.EnvironmentSpec.AutomationsFile automations_file = 11;
     */
    automationsFile?: EnvironmentSpec_AutomationsFile;
    /**
     * workflow_action_id is an optional reference to the workflow execution action
     * that created this environment. Used for tracking and event correlation.
     *
     * @generated from field: optional string workflow_action_id = 12;
     */
    workflowActionId?: string;
    /**
     * kernel_controls_config configures kernel-level controls for this environment
     *
     * @generated from field: gitpod.v1.KernelControlsConfig kernel_controls_config = 13;
     */
    kernelControlsConfig?: KernelControlsConfig;
    /**
     * security_policy_id references the security policy used for this environment.
     * If empty, the environment has no security policy.
     *
     * @generated from field: string security_policy_id = 14;
     */
    securityPolicyId: string;
};
/**
 * Describes the message gitpod.v1.EnvironmentSpec.
 * Use `create(EnvironmentSpecSchema)` to create a new message.
 */
export declare const EnvironmentSpecSchema: GenMessage<EnvironmentSpec>;
/**
 * Timeout configures the environment timeout
 *
 * @generated from message gitpod.v1.EnvironmentSpec.Timeout
 */
export type EnvironmentSpec_Timeout = Message<"gitpod.v1.EnvironmentSpec.Timeout"> & {
    /**
     * inacitivity is the maximum time of disconnection before the environment is
     * stopped or paused. Minimum duration is 30 minutes. Set to 0 to disable.
     *
     * @generated from field: google.protobuf.Duration disconnected = 2;
     */
    disconnected?: Duration;
};
/**
 * Describes the message gitpod.v1.EnvironmentSpec.Timeout.
 * Use `create(EnvironmentSpec_TimeoutSchema)` to create a new message.
 */
export declare const EnvironmentSpec_TimeoutSchema: GenMessage<EnvironmentSpec_Timeout>;
/**
 * @generated from message gitpod.v1.EnvironmentSpec.Machine
 */
export type EnvironmentSpec_Machine = Message<"gitpod.v1.EnvironmentSpec.Machine"> & {
    /**
     * @generated from field: string session = 1;
     */
    session: string;
    /**
     * Class denotes the class of the environment we ought to start
     *
     * @generated from field: string class = 2;
     */
    class: string;
    /**
     * prefer_dual_disk indicates the management plane wants this environment
     * to use a dual-disk layout (separate system and data disks). The runner
     * may ignore this if it does not support dual-disk.
     *
     * @generated from field: bool prefer_dual_disk = 3;
     */
    preferDualDisk: boolean;
};
/**
 * Describes the message gitpod.v1.EnvironmentSpec.Machine.
 * Use `create(EnvironmentSpec_MachineSchema)` to create a new message.
 */
export declare const EnvironmentSpec_MachineSchema: GenMessage<EnvironmentSpec_Machine>;
/**
 * @generated from message gitpod.v1.EnvironmentSpec.Content
 */
export type EnvironmentSpec_Content = Message<"gitpod.v1.EnvironmentSpec.Content"> & {
    /**
     * @generated from field: string session = 1;
     */
    session: string;
    /**
     * initializer configures how the environment is to be initialized
     *
     * @generated from field: gitpod.v1.EnvironmentInitializer initializer = 2;
     */
    initializer?: EnvironmentInitializer;
    /**
     * The Git username
     *
     * @generated from field: string git_username = 3;
     */
    gitUsername: string;
    /**
     * The Git email address
     *
     * @generated from field: string git_email = 4;
     */
    gitEmail: string;
};
/**
 * Describes the message gitpod.v1.EnvironmentSpec.Content.
 * Use `create(EnvironmentSpec_ContentSchema)` to create a new message.
 */
export declare const EnvironmentSpec_ContentSchema: GenMessage<EnvironmentSpec_Content>;
/**
 * @generated from message gitpod.v1.EnvironmentSpec.DevContainer
 */
export type EnvironmentSpec_DevContainer = Message<"gitpod.v1.EnvironmentSpec.DevContainer"> & {
    /**
     * @generated from field: string session = 1;
     */
    session: string;
    /**
     * devcontainer_file_path is the path to the devcontainer file relative to the repo root
     *
     * @generated from field: string devcontainer_file_path = 2;
     */
    devcontainerFilePath: string;
    /**
     * Experimental: dotfiles is the dotfiles configuration of the devcontainer
     *
     * @generated from field: gitpod.v1.EnvironmentSpec.DevContainer.Dotfiles dotfiles = 3;
     */
    dotfiles?: EnvironmentSpec_DevContainer_Dotfiles;
    /**
     * default_devcontainer_image is the default image that is used to start the devcontainer if no devcontainer config file is found
     *
     * @generated from field: string default_devcontainer_image = 4;
     */
    defaultDevcontainerImage: string;
    /**
     * lifecycle_stage controls which devcontainer lifecycle commands are executed.
     * Defaults to FULL if not specified.
     *
     * @generated from field: gitpod.v1.EnvironmentSpec.DevContainer.LifecycleStage lifecycle_stage = 5;
     */
    lifecycleStage: EnvironmentSpec_DevContainer_LifecycleStage;
};
/**
 * Describes the message gitpod.v1.EnvironmentSpec.DevContainer.
 * Use `create(EnvironmentSpec_DevContainerSchema)` to create a new message.
 */
export declare const EnvironmentSpec_DevContainerSchema: GenMessage<EnvironmentSpec_DevContainer>;
/**
 * @generated from message gitpod.v1.EnvironmentSpec.DevContainer.Dotfiles
 */
export type EnvironmentSpec_DevContainer_Dotfiles = Message<"gitpod.v1.EnvironmentSpec.DevContainer.Dotfiles"> & {
    /**
     * URL of a dotfiles Git repository (e.g. https://github.com/owner/repository)
     *
     * @generated from field: string repository = 1;
     */
    repository: string;
};
/**
 * Describes the message gitpod.v1.EnvironmentSpec.DevContainer.Dotfiles.
 * Use `create(EnvironmentSpec_DevContainer_DotfilesSchema)` to create a new message.
 */
export declare const EnvironmentSpec_DevContainer_DotfilesSchema: GenMessage<EnvironmentSpec_DevContainer_Dotfiles>;
/**
 * LifecycleStage controls which devcontainer lifecycle commands are executed.
 * See https://containers.dev/implementors/json_reference/#lifecycle-scripts
 *
 * @generated from enum gitpod.v1.EnvironmentSpec.DevContainer.LifecycleStage
 */
export declare enum EnvironmentSpec_DevContainer_LifecycleStage {
    /**
     * LIFECYCLE_STAGE_UNSPECIFIED defaults to FULL for backward compatibility
     *
     * @generated from enum value: LIFECYCLE_STAGE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * LIFECYCLE_STAGE_FULL runs all devcontainer lifecycle commands (default):
     * initializeCommand, onCreateCommand, updateContentCommand, postCreateCommand,
     * postStartCommand, and postAttachCommand.
     *
     * @generated from enum value: LIFECYCLE_STAGE_FULL = 1;
     */
    FULL = 1,
    /**
     * LIFECYCLE_STAGE_PREBUILD runs only the lifecycle commands suitable for prebuilding:
     * initializeCommand, onCreateCommand, and updateContentCommand.
     * Skips postCreateCommand, postStartCommand, and postAttachCommand which are
     * intended to run when a user connects to the container.
     *
     * @generated from enum value: LIFECYCLE_STAGE_PREBUILD = 2;
     */
    PREBUILD = 2
}
/**
 * Describes the enum gitpod.v1.EnvironmentSpec.DevContainer.LifecycleStage.
 */
export declare const EnvironmentSpec_DevContainer_LifecycleStageSchema: GenEnum<EnvironmentSpec_DevContainer_LifecycleStage>;
/**
 * @generated from message gitpod.v1.EnvironmentSpec.Secret
 */
export type EnvironmentSpec_Secret = Message<"gitpod.v1.EnvironmentSpec.Secret"> & {
    /**
     * name is the human readable description of the secret
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * source is the source of the secret, for now control-plane or runner
     *
     * @generated from field: string source = 2;
     */
    source: string;
    /**
     * source_ref into the source, in case of control-plane this is uuid of the secret
     *
     * @generated from field: string source_ref = 3;
     */
    sourceRef: string;
    /**
     * mount specifies how the secret is materiaized in the environment
     *
     * @generated from oneof gitpod.v1.EnvironmentSpec.Secret.mount
     */
    mount: {
        /**
         * file_path is the path inside the devcontainer where the secret is mounted
         *
         * @generated from field: string file_path = 10;
         */
        value: string;
        case: "filePath";
    } | {
        /**
         * @generated from field: string environment_variable = 11;
         */
        value: string;
        case: "environmentVariable";
    } | {
        /**
         * @generated from field: string git_credential_host = 12;
         */
        value: string;
        case: "gitCredentialHost";
    } | {
        /**
         * container_registry_basic_auth_host is the hostname of the container registry that supports basic auth
         *
         * @generated from field: string container_registry_basic_auth_host = 13;
         */
        value: string;
        case: "containerRegistryBasicAuthHost";
    } | {
        /**
         * api_only indicates the secret is only available via API/CLI.
         * These secrets are resolved but NOT automatically injected into services or devcontainers.
         *
         * @generated from field: bool api_only = 14;
         */
        value: boolean;
        case: "apiOnly";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * session indicated the current session of the secret.
     * When the session does not change, secrets are not reloaded in the environment.
     *
     * @generated from field: string session = 4;
     */
    session: string;
    /**
     * id is the unique identifier of the secret.
     *
     * @generated from field: string id = 5;
     */
    id: string;
    /**
     * scope indicates where this secret originated from.
     * Used to filter secrets during build (only org and project secrets are injected).
     *
     * @generated from field: gitpod.v1.EnvironmentSpec.Secret.Scope scope = 6;
     */
    scope: EnvironmentSpec_Secret_Scope;
    /**
     * credential_proxy configures transparent credential injection via the
     * credential proxy. When set, the credential proxy intercepts HTTPS
     * traffic to the target hosts and replaces the dummy secret value with
     * the real value in the specified HTTP header. The real secret value is
     * never exposed in the environment.
     * This field is orthogonal to mount — a secret can be both mounted (e.g.
     * as a git credential) and proxied at the same time.
     *
     * @generated from field: gitpod.v1.Secret.CredentialProxy credential_proxy = 15;
     */
    credentialProxy?: Secret_CredentialProxy;
    /**
     * source_details contains the typed source configuration for
     * management-plane secrets.
     *
     * @generated from field: gitpod.v1.Secret.Source source_details = 16;
     */
    sourceDetails?: Secret_Source;
};
/**
 * Describes the message gitpod.v1.EnvironmentSpec.Secret.
 * Use `create(EnvironmentSpec_SecretSchema)` to create a new message.
 */
export declare const EnvironmentSpec_SecretSchema: GenMessage<EnvironmentSpec_Secret>;
/**
 * Scope indicates the origin of the secret for filtering purposes.
 *
 * @generated from enum gitpod.v1.EnvironmentSpec.Secret.Scope
 */
export declare enum EnvironmentSpec_Secret_Scope {
    /**
     * @generated from enum value: SCOPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SCOPE_ORGANIZATION = 1;
     */
    ORGANIZATION = 1,
    /**
     * @generated from enum value: SCOPE_PROJECT = 2;
     */
    PROJECT = 2,
    /**
     * @generated from enum value: SCOPE_USER = 3;
     */
    USER = 3,
    /**
     * @generated from enum value: SCOPE_SERVICE_ACCOUNT = 4;
     */
    SERVICE_ACCOUNT = 4,
    /**
     * @generated from enum value: SCOPE_RUNNER = 5;
     */
    RUNNER = 5
}
/**
 * Describes the enum gitpod.v1.EnvironmentSpec.Secret.Scope.
 */
export declare const EnvironmentSpec_Secret_ScopeSchema: GenEnum<EnvironmentSpec_Secret_Scope>;
/**
 * @generated from message gitpod.v1.EnvironmentSpec.EnvironmentPort
 */
export type EnvironmentSpec_EnvironmentPort = Message<"gitpod.v1.EnvironmentSpec.EnvironmentPort"> & {
    /**
     * port number
     *
     * @generated from field: int32 port = 1;
     */
    port: number;
    /**
     * policy of this port
     *
     * @generated from field: gitpod.v1.AdmissionLevel admission = 2;
     */
    admission: AdmissionLevel;
    /**
     * name of this port
     *
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * protocol for communication (Gateway proxy → user environment service).
     * this setting only affects the protocol used between Gateway and user environment services.
     *
     * @generated from field: gitpod.v1.EnvironmentSpec.EnvironmentPort.Protocol protocol = 4;
     */
    protocol: EnvironmentSpec_EnvironmentPort_Protocol;
    /**
     * auth_nonce is a monotonically increasing counter incremented by the
     * backend whenever the port's admission level changes. Used by the proxy
     * to invalidate browser auth cookies without requiring a backend round-trip.
     *
     * @generated from field: uint64 auth_nonce = 5;
     */
    authNonce: bigint;
};
/**
 * Describes the message gitpod.v1.EnvironmentSpec.EnvironmentPort.
 * Use `create(EnvironmentSpec_EnvironmentPortSchema)` to create a new message.
 */
export declare const EnvironmentSpec_EnvironmentPortSchema: GenMessage<EnvironmentSpec_EnvironmentPort>;
/**
 * Protocol describes the communication protocol between Gateway and user environment services.
 *
 * @generated from enum gitpod.v1.EnvironmentSpec.EnvironmentPort.Protocol
 */
export declare enum EnvironmentSpec_EnvironmentPort_Protocol {
    /**
     * defaults to HTTP for backward compatibility
     *
     * @generated from enum value: PROTOCOL_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PROTOCOL_HTTP = 1;
     */
    HTTP = 1,
    /**
     * @generated from enum value: PROTOCOL_HTTPS = 2;
     */
    HTTPS = 2
}
/**
 * Describes the enum gitpod.v1.EnvironmentSpec.EnvironmentPort.Protocol.
 */
export declare const EnvironmentSpec_EnvironmentPort_ProtocolSchema: GenEnum<EnvironmentSpec_EnvironmentPort_Protocol>;
/**
 * @generated from message gitpod.v1.EnvironmentSpec.SSHPublicKey
 */
export type EnvironmentSpec_SSHPublicKey = Message<"gitpod.v1.EnvironmentSpec.SSHPublicKey"> & {
    /**
     * id is the unique identifier of the public key
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * value is the actual public key in the public key file format
     *
     * @generated from field: string value = 2;
     */
    value: string;
};
/**
 * Describes the message gitpod.v1.EnvironmentSpec.SSHPublicKey.
 * Use `create(EnvironmentSpec_SSHPublicKeySchema)` to create a new message.
 */
export declare const EnvironmentSpec_SSHPublicKeySchema: GenMessage<EnvironmentSpec_SSHPublicKey>;
/**
 * @generated from message gitpod.v1.EnvironmentSpec.AutomationsFile
 */
export type EnvironmentSpec_AutomationsFile = Message<"gitpod.v1.EnvironmentSpec.AutomationsFile"> & {
    /**
     * @generated from field: string session = 1;
     */
    session: string;
    /**
     * automations_file_path is the path to the automations file that is applied in the environment,
     * relative to the repo root.
     *
     * @generated from field: string automations_file_path = 2;
     */
    automationsFilePath: string;
    /**
     * trigger_filter specifies which automation triggers should execute.
     * When set, only automations matching these triggers will run.
     * If empty/unset, all triggers are evaluated normally.
     *
     * @generated from field: repeated gitpod.v1.AutomationTrigger trigger_filter = 3;
     */
    triggerFilter: AutomationTrigger[];
};
/**
 * Describes the message gitpod.v1.EnvironmentSpec.AutomationsFile.
 * Use `create(EnvironmentSpec_AutomationsFileSchema)` to create a new message.
 */
export declare const EnvironmentSpec_AutomationsFileSchema: GenMessage<EnvironmentSpec_AutomationsFile>;
/**
 * EnvironmentStatus describes an environment status
 *
 * @generated from message gitpod.v1.EnvironmentStatus
 */
export type EnvironmentStatus = Message<"gitpod.v1.EnvironmentStatus"> & {
    /**
     * version of the status update. Environment instances themselves are
     * unversioned, but their status has different versions. The value of this
     * field has no semantic meaning (e.g. don't interpret it as as a timestamp),
     * but it can be used to impose a partial order. If a.status_version <
     * b.status_version then a was the status before b.
     *
     * @generated from field: uint64 status_version = 1;
     */
    statusVersion: bigint;
    /**
     * runner_ack contains the acknowledgement from the runner that is has
     * received the environment spec.
     *
     * @generated from field: gitpod.v1.EnvironmentStatus.RunnerACK runner_ack = 2;
     */
    runnerAck?: EnvironmentStatus_RunnerACK;
    /**
     * the phase of an environment is a simple, high-level summary of where the
     * environment is in its lifecycle
     *
     * @generated from field: gitpod.v1.EnvironmentPhase phase = 3;
     */
    phase: EnvironmentPhase;
    /**
     * failure_message summarises why the environment failed to operate. If this is non-empty
     * the environment has failed to operate and will likely transition to a stopped state.
     *
     * @generated from field: repeated string failure_message = 4;
     */
    failureMessage: string[];
    /**
     * environment_url contains the URL at which the environment can be accessed.
     * This field is only set if the environment is running.
     *
     * @generated from field: gitpod.v1.EnvironmentStatus.EnvironmentURLs environment_urls = 5;
     */
    environmentUrls?: EnvironmentStatus_EnvironmentURLs;
    /**
     * machine contains the status of the environment machine
     *
     * @generated from field: gitpod.v1.EnvironmentStatus.Machine machine = 6;
     */
    machine?: EnvironmentStatus_Machine;
    /**
     * secrets contains the status of the environment secrets
     *
     * @generated from field: repeated gitpod.v1.EnvironmentStatus.Secret secrets = 7;
     */
    secrets: EnvironmentStatus_Secret[];
    /**
     * content contains the status of the environment content.
     *
     * @generated from field: gitpod.v1.EnvironmentStatus.Content content = 8;
     */
    content?: EnvironmentStatus_Content;
    /**
     * devcontainer contains the status of the devcontainer.
     *
     * @generated from field: gitpod.v1.EnvironmentStatus.DevContainer devcontainer = 9;
     */
    devcontainer?: EnvironmentStatus_DevContainer;
    /**
     * ssh_public_keys contains the status of the environment ssh public keys
     *
     * @generated from field: repeated gitpod.v1.EnvironmentStatus.SSHPublicKey ssh_public_keys = 10;
     */
    sshPublicKeys: EnvironmentStatus_SSHPublicKey[];
    /**
     * warning_message contains warnings, e.g. when the environment is present but not in the expected state.
     *
     * @generated from field: repeated string warning_message = 11;
     */
    warningMessage: string[];
    /**
     * automations_file contains the status of the automations file.
     *
     * @generated from field: gitpod.v1.EnvironmentStatus.AutomationsFile automations_file = 12;
     */
    automationsFile?: EnvironmentStatus_AutomationsFile;
    /**
     * activity_signal is the last activity signal for the environment.
     *
     * @generated from field: gitpod.v1.EnvironmentActivitySignal activity_signal = 13;
     */
    activitySignal?: EnvironmentActivitySignal;
};
/**
 * Describes the message gitpod.v1.EnvironmentStatus.
 * Use `create(EnvironmentStatusSchema)` to create a new message.
 */
export declare const EnvironmentStatusSchema: GenMessage<EnvironmentStatus>;
/**
 * @generated from message gitpod.v1.EnvironmentStatus.EnvironmentPortURL
 */
export type EnvironmentStatus_EnvironmentPortURL = Message<"gitpod.v1.EnvironmentStatus.EnvironmentPortURL"> & {
    /**
     * port is the port number of the environment port
     *
     * @generated from field: int32 port = 1;
     */
    port: number;
    /**
     * url is the URL at which the environment port can be accessed
     *
     * @generated from field: string url = 2;
     */
    url: string;
};
/**
 * Describes the message gitpod.v1.EnvironmentStatus.EnvironmentPortURL.
 * Use `create(EnvironmentStatus_EnvironmentPortURLSchema)` to create a new message.
 */
export declare const EnvironmentStatus_EnvironmentPortURLSchema: GenMessage<EnvironmentStatus_EnvironmentPortURL>;
/**
 * @generated from message gitpod.v1.EnvironmentStatus.EnvironmentSSHURL
 */
export type EnvironmentStatus_EnvironmentSSHURL = Message<"gitpod.v1.EnvironmentStatus.EnvironmentSSHURL"> & {
    /**
     * @generated from field: string url = 1;
     */
    url: string;
};
/**
 * Describes the message gitpod.v1.EnvironmentStatus.EnvironmentSSHURL.
 * Use `create(EnvironmentStatus_EnvironmentSSHURLSchema)` to create a new message.
 */
export declare const EnvironmentStatus_EnvironmentSSHURLSchema: GenMessage<EnvironmentStatus_EnvironmentSSHURL>;
/**
 * @generated from message gitpod.v1.EnvironmentStatus.EnvironmentURLs
 */
export type EnvironmentStatus_EnvironmentURLs = Message<"gitpod.v1.EnvironmentStatus.EnvironmentURLs"> & {
    /**
     * SSH is the URL at which the environment can be accessed via SSH.
     *
     * @generated from field: gitpod.v1.EnvironmentStatus.EnvironmentSSHURL ssh = 1;
     */
    ssh?: EnvironmentStatus_EnvironmentSSHURL;
    /**
     * @generated from field: repeated gitpod.v1.EnvironmentStatus.EnvironmentPortURL ports = 2;
     */
    ports: EnvironmentStatus_EnvironmentPortURL[];
    /**
     * logs is the URL at which the environment logs can be accessed.
     *
     * @generated from field: string logs = 3;
     */
    logs: string;
    /**
     * support_bundle is the URL at which the environment support bundle can be accessed.
     *
     * @generated from field: string support_bundle = 4;
     */
    supportBundle: string;
    /**
     * ops is the URL at which the environment ops service can be accessed.
     *
     * @generated from field: string ops = 5;
     */
    ops: string;
    /**
     * vm_live_usage is the URL at which the environment's live VM resource usage can be accessed.
     *
     * @generated from field: string vm_live_usage = 6;
     */
    vmLiveUsage: string;
};
/**
 * Describes the message gitpod.v1.EnvironmentStatus.EnvironmentURLs.
 * Use `create(EnvironmentStatus_EnvironmentURLsSchema)` to create a new message.
 */
export declare const EnvironmentStatus_EnvironmentURLsSchema: GenMessage<EnvironmentStatus_EnvironmentURLs>;
/**
 * @generated from message gitpod.v1.EnvironmentStatus.Machine
 */
export type EnvironmentStatus_Machine = Message<"gitpod.v1.EnvironmentStatus.Machine"> & {
    /**
     * session is the session that is currently active in the machine.
     *
     * @generated from field: string session = 1;
     */
    session: string;
    /**
     * phase is the current phase of the environment machine
     *
     * @generated from field: gitpod.v1.EnvironmentStatus.Machine.Phase phase = 2;
     */
    phase: EnvironmentStatus_Machine_Phase;
    /**
     * failure_message contains the reason the machine failed to operate.
     *
     * @generated from field: string failure_message = 3;
     */
    failureMessage: string;
    /**
     * timeout contains the reason the environment has timed out. If this field is
     * empty, the environment has not timed out.
     *
     * @generated from field: string timeout = 4;
     */
    timeout: string;
    /**
     * versions contains the versions of components in the machine.
     *
     * @generated from field: gitpod.v1.EnvironmentStatus.Machine.Versions versions = 5;
     */
    versions?: EnvironmentStatus_Machine_Versions;
    /**
     * warning_message contains warnings, e.g. when the machine is present but not in the expected state.
     *
     * @generated from field: string warning_message = 6;
     */
    warningMessage: string;
    /**
     * dual_disk indicates the environment is running with a dual-disk layout
     * (separate system and data disks). Set by the runner based on actual
     * machine configuration.
     *
     * @generated from field: bool dual_disk = 7;
     */
    dualDisk: boolean;
};
/**
 * Describes the message gitpod.v1.EnvironmentStatus.Machine.
 * Use `create(EnvironmentStatus_MachineSchema)` to create a new message.
 */
export declare const EnvironmentStatus_MachineSchema: GenMessage<EnvironmentStatus_Machine>;
/**
 * @generated from message gitpod.v1.EnvironmentStatus.Machine.Versions
 */
export type EnvironmentStatus_Machine_Versions = Message<"gitpod.v1.EnvironmentStatus.Machine.Versions"> & {
    /**
     * @generated from field: string supervisor_version = 1;
     */
    supervisorVersion: string;
    /**
     * @generated from field: string supervisor_commit = 2;
     */
    supervisorCommit: string;
    /**
     * @generated from field: string ami_id = 3;
     */
    amiId: string;
};
/**
 * Describes the message gitpod.v1.EnvironmentStatus.Machine.Versions.
 * Use `create(EnvironmentStatus_Machine_VersionsSchema)` to create a new message.
 */
export declare const EnvironmentStatus_Machine_VersionsSchema: GenMessage<EnvironmentStatus_Machine_Versions>;
/**
 * @generated from enum gitpod.v1.EnvironmentStatus.Machine.Phase
 */
export declare enum EnvironmentStatus_Machine_Phase {
    /**
     * @generated from enum value: PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PHASE_CREATING = 10;
     */
    CREATING = 10,
    /**
     * @generated from enum value: PHASE_STARTING = 20;
     */
    STARTING = 20,
    /**
     * @generated from enum value: PHASE_RUNNING = 30;
     */
    RUNNING = 30,
    /**
     * @generated from enum value: PHASE_STOPPING = 40;
     */
    STOPPING = 40,
    /**
     * @generated from enum value: PHASE_STOPPED = 50;
     */
    STOPPED = 50,
    /**
     * @generated from enum value: PHASE_DELETING = 60;
     */
    DELETING = 60,
    /**
     * @generated from enum value: PHASE_DELETED = 70;
     */
    DELETED = 70
}
/**
 * Describes the enum gitpod.v1.EnvironmentStatus.Machine.Phase.
 */
export declare const EnvironmentStatus_Machine_PhaseSchema: GenEnum<EnvironmentStatus_Machine_Phase>;
/**
 * @generated from message gitpod.v1.EnvironmentStatus.Content
 */
export type EnvironmentStatus_Content = Message<"gitpod.v1.EnvironmentStatus.Content"> & {
    /**
     * session is the session that is currently active in the environment.
     *
     * @generated from field: string session = 1;
     */
    session: string;
    /**
     * phase is the current phase of the environment content
     *
     * @generated from field: gitpod.v1.EnvironmentStatus.ContentPhase phase = 2;
     */
    phase: EnvironmentStatus_ContentPhase;
    /**
     * git is the Git working copy status of the environment.
     * Note: this is a best-effort field and more often than not will not be
     * present. Its absence does not indicate the absence of a working copy.
     *
     * @generated from field: gitpod.v1.EnvironmentGitStatus git = 3;
     */
    git?: EnvironmentGitStatus;
    /**
     * content_location_in_machine is the location of the content in the machine
     *
     * @generated from field: string content_location_in_machine = 4;
     */
    contentLocationInMachine: string;
    /**
     * failure_message contains the reason the content initialization failed.
     *
     * @generated from field: string failure_message = 5;
     */
    failureMessage: string;
    /**
     * warning_message contains warnings, e.g. when the content is present but not in the expected state.
     *
     * @generated from field: string warning_message = 6;
     */
    warningMessage: string;
};
/**
 * Describes the message gitpod.v1.EnvironmentStatus.Content.
 * Use `create(EnvironmentStatus_ContentSchema)` to create a new message.
 */
export declare const EnvironmentStatus_ContentSchema: GenMessage<EnvironmentStatus_Content>;
/**
 * @generated from message gitpod.v1.EnvironmentStatus.Secret
 */
export type EnvironmentStatus_Secret = Message<"gitpod.v1.EnvironmentStatus.Secret"> & {
    /**
     * id is the unique identifier of the secret.
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: gitpod.v1.EnvironmentStatus.ContentPhase phase = 2;
     */
    phase: EnvironmentStatus_ContentPhase;
    /**
     * @generated from field: string secret_name = 3;
     */
    secretName: string;
    /**
     * failure_message contains the reason the secret failed to be materialize.
     *
     * @generated from field: string failure_message = 4;
     */
    failureMessage: string;
    /**
     * warning_message contains warnings, e.g. when the secret is present but not in the expected state.
     *
     * @generated from field: string warning_message = 5;
     */
    warningMessage: string;
    /**
     * session is the session that is currently active in the environment.
     *
     * @generated from field: string session = 6;
     */
    session: string;
};
/**
 * Describes the message gitpod.v1.EnvironmentStatus.Secret.
 * Use `create(EnvironmentStatus_SecretSchema)` to create a new message.
 */
export declare const EnvironmentStatus_SecretSchema: GenMessage<EnvironmentStatus_Secret>;
/**
 * @generated from message gitpod.v1.EnvironmentStatus.DevContainer
 */
export type EnvironmentStatus_DevContainer = Message<"gitpod.v1.EnvironmentStatus.DevContainer"> & {
    /**
     * session is the session that is currently active in the devcontainer.
     *
     * @generated from field: string session = 1;
     */
    session: string;
    /**
     * phase is the current phase of the devcontainer
     *
     * @generated from field: gitpod.v1.EnvironmentStatus.DevContainer.Phase phase = 2;
     */
    phase: EnvironmentStatus_DevContainer_Phase;
    /**
     * devcontainer_file_path is the path to the devcontainer file relative to the repo root
     *
     * @generated from field: string devcontainer_file_path = 3;
     */
    devcontainerFilePath: string;
    /**
     * devcontainerconfig_in_sync indicates if the devcontainer is up to date w.r.t. the devcontainer config file.
     *
     * @generated from field: bool devcontainerconfig_in_sync = 4;
     */
    devcontainerconfigInSync: boolean;
    /**
     * secrets_in_sync indicates if the secrets are up to date w.r.t. the running devcontainer.
     *
     * @generated from field: bool secrets_in_sync = 5;
     */
    secretsInSync: boolean;
    /**
     * failure_message contains the reason the devcontainer failed to operate.
     *
     * @generated from field: string failure_message = 6;
     */
    failureMessage: string;
    /**
     * remote_user is the user that is used to connect to the devcontainer
     *
     * @generated from field: string remote_user = 7;
     */
    remoteUser: string;
    /**
     * remote_workspace_folder is the folder that is used to connect to the devcontainer
     *
     * @generated from field: string remote_workspace_folder = 8;
     */
    remoteWorkspaceFolder: string;
    /**
     * container_name is the name of the container that is used to connect to the devcontainer
     *
     * @generated from field: string container_name = 9;
     */
    containerName: string;
    /**
     * container_id is the ID of the container.
     *
     * @generated from field: string container_id = 10;
     */
    containerId: string;
    /**
     * warning_message contains warnings, e.g. when the devcontainer is present but not in the expected state.
     *
     * @generated from field: string warning_message = 12;
     */
    warningMessage: string;
    /**
     * devcontainer_file_presence indicates how the devcontainer file is present in the repo.
     *
     * @generated from field: gitpod.v1.EnvironmentStatus.DevContainer.Presence devcontainer_file_presence = 13;
     */
    devcontainerFilePresence: EnvironmentStatus_DevContainer_Presence;
};
/**
 * Describes the message gitpod.v1.EnvironmentStatus.DevContainer.
 * Use `create(EnvironmentStatus_DevContainerSchema)` to create a new message.
 */
export declare const EnvironmentStatus_DevContainerSchema: GenMessage<EnvironmentStatus_DevContainer>;
/**
 * @generated from enum gitpod.v1.EnvironmentStatus.DevContainer.Phase
 */
export declare enum EnvironmentStatus_DevContainer_Phase {
    /**
     * @generated from enum value: PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PHASE_CREATING = 10;
     */
    CREATING = 10,
    /**
     * @generated from enum value: PHASE_RUNNING = 20;
     */
    RUNNING = 20,
    /**
     * @generated from enum value: PHASE_STOPPED = 30;
     */
    STOPPED = 30,
    /**
     * @generated from enum value: PHASE_FAILED = 40;
     */
    FAILED = 40
}
/**
 * Describes the enum gitpod.v1.EnvironmentStatus.DevContainer.Phase.
 */
export declare const EnvironmentStatus_DevContainer_PhaseSchema: GenEnum<EnvironmentStatus_DevContainer_Phase>;
/**
 * @generated from enum gitpod.v1.EnvironmentStatus.DevContainer.Presence
 */
export declare enum EnvironmentStatus_DevContainer_Presence {
    /**
     * @generated from enum value: PRESENCE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PRESENCE_GENERATED = 1;
     */
    GENERATED = 1,
    /**
     * @generated from enum value: PRESENCE_DISCOVERED = 2;
     */
    DISCOVERED = 2,
    /**
     * @generated from enum value: PRESENCE_SPECIFIED = 3;
     */
    SPECIFIED = 3
}
/**
 * Describes the enum gitpod.v1.EnvironmentStatus.DevContainer.Presence.
 */
export declare const EnvironmentStatus_DevContainer_PresenceSchema: GenEnum<EnvironmentStatus_DevContainer_Presence>;
/**
 * RunnerACK is the acknowledgement from the runner that is has received the
 * environment spec.
 *
 * @generated from message gitpod.v1.EnvironmentStatus.RunnerACK
 */
export type EnvironmentStatus_RunnerACK = Message<"gitpod.v1.EnvironmentStatus.RunnerACK"> & {
    /**
     * @generated from field: uint64 spec_version = 1;
     */
    specVersion: bigint;
    /**
     * @generated from field: gitpod.v1.EnvironmentStatus.RunnerACK.StatusCode status_code = 2;
     */
    statusCode: EnvironmentStatus_RunnerACK_StatusCode;
    /**
     * @generated from field: string message = 3;
     */
    message: string;
};
/**
 * Describes the message gitpod.v1.EnvironmentStatus.RunnerACK.
 * Use `create(EnvironmentStatus_RunnerACKSchema)` to create a new message.
 */
export declare const EnvironmentStatus_RunnerACKSchema: GenMessage<EnvironmentStatus_RunnerACK>;
/**
 * @generated from enum gitpod.v1.EnvironmentStatus.RunnerACK.StatusCode
 */
export declare enum EnvironmentStatus_RunnerACK_StatusCode {
    /**
     * @generated from enum value: STATUS_CODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: STATUS_CODE_OK = 1;
     */
    OK = 1,
    /**
     * @generated from enum value: STATUS_CODE_INVALID_RESOURCE = 2;
     */
    INVALID_RESOURCE = 2,
    /**
     * @generated from enum value: STATUS_CODE_FAILED_PRECONDITION = 3;
     */
    FAILED_PRECONDITION = 3
}
/**
 * Describes the enum gitpod.v1.EnvironmentStatus.RunnerACK.StatusCode.
 */
export declare const EnvironmentStatus_RunnerACK_StatusCodeSchema: GenEnum<EnvironmentStatus_RunnerACK_StatusCode>;
/**
 * @generated from message gitpod.v1.EnvironmentStatus.SSHPublicKey
 */
export type EnvironmentStatus_SSHPublicKey = Message<"gitpod.v1.EnvironmentStatus.SSHPublicKey"> & {
    /**
     * id is the unique identifier of the public key
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * phase is the current phase of the public key
     *
     * @generated from field: gitpod.v1.EnvironmentStatus.ContentPhase phase = 2;
     */
    phase: EnvironmentStatus_ContentPhase;
};
/**
 * Describes the message gitpod.v1.EnvironmentStatus.SSHPublicKey.
 * Use `create(EnvironmentStatus_SSHPublicKeySchema)` to create a new message.
 */
export declare const EnvironmentStatus_SSHPublicKeySchema: GenMessage<EnvironmentStatus_SSHPublicKey>;
/**
 * @generated from message gitpod.v1.EnvironmentStatus.AutomationsFile
 */
export type EnvironmentStatus_AutomationsFile = Message<"gitpod.v1.EnvironmentStatus.AutomationsFile"> & {
    /**
     * session is the automations file session that is currently applied in the environment.
     *
     * @generated from field: string session = 1;
     */
    session: string;
    /**
     * automations_file_path is the path to the automations file relative to the repo root.
     *
     * @generated from field: string automations_file_path = 2;
     */
    automationsFilePath: string;
    /**
     * phase is the current phase of the automations file.
     *
     * @generated from field: gitpod.v1.EnvironmentStatus.ContentPhase phase = 3;
     */
    phase: EnvironmentStatus_ContentPhase;
    /**
     * failure_message contains the reason the automations file failed to be applied.
     * This is only set if the phase is FAILED.
     *
     * @generated from field: string failure_message = 4;
     */
    failureMessage: string;
    /**
     * automations_file_presence indicates how an automations file is present in the environment.
     *
     * @generated from field: gitpod.v1.EnvironmentStatus.AutomationsFile.Presence automations_file_presence = 5;
     */
    automationsFilePresence: EnvironmentStatus_AutomationsFile_Presence;
    /**
     * warning_message contains warnings, e.g. when no triggers are defined in the automations file.
     *
     * @generated from field: string warning_message = 6;
     */
    warningMessage: string;
};
/**
 * Describes the message gitpod.v1.EnvironmentStatus.AutomationsFile.
 * Use `create(EnvironmentStatus_AutomationsFileSchema)` to create a new message.
 */
export declare const EnvironmentStatus_AutomationsFileSchema: GenMessage<EnvironmentStatus_AutomationsFile>;
/**
 * @generated from enum gitpod.v1.EnvironmentStatus.AutomationsFile.Presence
 */
export declare enum EnvironmentStatus_AutomationsFile_Presence {
    /**
     * @generated from enum value: PRESENCE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PRESENCE_ABSENT = 1;
     */
    ABSENT = 1,
    /**
     * @generated from enum value: PRESENCE_DISCOVERED = 2;
     */
    DISCOVERED = 2,
    /**
     * @generated from enum value: PRESENCE_SPECIFIED = 3;
     */
    SPECIFIED = 3
}
/**
 * Describes the enum gitpod.v1.EnvironmentStatus.AutomationsFile.Presence.
 */
export declare const EnvironmentStatus_AutomationsFile_PresenceSchema: GenEnum<EnvironmentStatus_AutomationsFile_Presence>;
/**
 * @generated from enum gitpod.v1.EnvironmentStatus.ContentPhase
 */
export declare enum EnvironmentStatus_ContentPhase {
    /**
     * @generated from enum value: CONTENT_PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CONTENT_PHASE_CREATING = 10;
     */
    CREATING = 10,
    /**
     * @generated from enum value: CONTENT_PHASE_INITIALIZING = 20;
     */
    INITIALIZING = 20,
    /**
     * @generated from enum value: CONTENT_PHASE_READY = 30;
     */
    READY = 30,
    /**
     * @generated from enum value: CONTENT_PHASE_UPDATING = 35;
     */
    UPDATING = 35,
    /**
     * @generated from enum value: CONTENT_PHASE_FAILED = 40;
     */
    FAILED = 40,
    /**
     * @generated from enum value: CONTENT_PHASE_UNAVAILABLE = 45;
     */
    UNAVAILABLE = 45
}
/**
 * Describes the enum gitpod.v1.EnvironmentStatus.ContentPhase.
 */
export declare const EnvironmentStatus_ContentPhaseSchema: GenEnum<EnvironmentStatus_ContentPhase>;
/**
 * @generated from message gitpod.v1.EnvironmentGitStatus
 */
export type EnvironmentGitStatus = Message<"gitpod.v1.EnvironmentGitStatus"> & {
    /**
     * clone_url is the repository url as you would pass it to "git clone".
     * Only HTTPS clone URLs are supported.
     *
     * @generated from field: string clone_url = 1;
     */
    cloneUrl: string;
    /**
     * branch is branch we're currently on
     *
     * @generated from field: string branch = 2;
     */
    branch: string;
    /**
     * latest_commit is the most recent commit on the current branch
     *
     * @generated from field: string latest_commit = 3;
     */
    latestCommit: string;
    /**
     * unpushed_commits is an array of unpushed changes in the environment, possibly
     * truncated
     *
     * @generated from field: repeated string unpushed_commits = 4;
     */
    unpushedCommits: string[];
    /**
     * the total number of unpushed changes
     *
     * @generated from field: int32 total_unpushed_commits = 5;
     */
    totalUnpushedCommits: number;
    /**
     * changed_files is an array of changed files in the environment, possibly
     * truncated
     *
     * @generated from field: repeated gitpod.v1.FileChange changed_files = 6;
     */
    changedFiles: FileChange[];
    /**
     * @generated from field: int32 total_changed_files = 7;
     */
    totalChangedFiles: number;
};
/**
 * Describes the message gitpod.v1.EnvironmentGitStatus.
 * Use `create(EnvironmentGitStatusSchema)` to create a new message.
 */
export declare const EnvironmentGitStatusSchema: GenMessage<EnvironmentGitStatus>;
/**
 * @generated from message gitpod.v1.FileChange
 */
export type FileChange = Message<"gitpod.v1.FileChange"> & {
    /**
     * path is the path of the file
     *
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * @generated from field: gitpod.v1.FileChange.ChangeType change_type = 2;
     */
    changeType: FileChange_ChangeType;
    /**
     * old_path is the previous path of the file before a rename or copy.
     * Only set when change_type is RENAMED or COPIED.
     *
     * @generated from field: string old_path = 3;
     */
    oldPath: string;
};
/**
 * Describes the message gitpod.v1.FileChange.
 * Use `create(FileChangeSchema)` to create a new message.
 */
export declare const FileChangeSchema: GenMessage<FileChange>;
/**
 * ChangeType is the type of change that happened to the file
 *
 * @generated from enum gitpod.v1.FileChange.ChangeType
 */
export declare enum FileChange_ChangeType {
    /**
     * @generated from enum value: CHANGE_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CHANGE_TYPE_ADDED = 1;
     */
    ADDED = 1,
    /**
     * @generated from enum value: CHANGE_TYPE_MODIFIED = 2;
     */
    MODIFIED = 2,
    /**
     * @generated from enum value: CHANGE_TYPE_DELETED = 3;
     */
    DELETED = 3,
    /**
     * @generated from enum value: CHANGE_TYPE_RENAMED = 4;
     */
    RENAMED = 4,
    /**
     * @generated from enum value: CHANGE_TYPE_COPIED = 5;
     */
    COPIED = 5,
    /**
     * @generated from enum value: CHANGE_TYPE_UPDATED_BUT_UNMERGED = 6;
     */
    UPDATED_BUT_UNMERGED = 6,
    /**
     * @generated from enum value: CHANGE_TYPE_UNTRACKED = 7;
     */
    UNTRACKED = 7
}
/**
 * Describes the enum gitpod.v1.FileChange.ChangeType.
 */
export declare const FileChange_ChangeTypeSchema: GenEnum<FileChange_ChangeType>;
/**
 * EnvironmentInitializer specifies how an environment is to be initialized
 *
 * @generated from message gitpod.v1.EnvironmentInitializer
 */
export type EnvironmentInitializer = Message<"gitpod.v1.EnvironmentInitializer"> & {
    /**
     * @generated from field: repeated gitpod.v1.EnvironmentInitializer.Spec specs = 1;
     */
    specs: EnvironmentInitializer_Spec[];
};
/**
 * Describes the message gitpod.v1.EnvironmentInitializer.
 * Use `create(EnvironmentInitializerSchema)` to create a new message.
 */
export declare const EnvironmentInitializerSchema: GenMessage<EnvironmentInitializer>;
/**
 * @generated from message gitpod.v1.EnvironmentInitializer.Spec
 */
export type EnvironmentInitializer_Spec = Message<"gitpod.v1.EnvironmentInitializer.Spec"> & {
    /**
     * @generated from oneof gitpod.v1.EnvironmentInitializer.Spec.spec
     */
    spec: {
        /**
         * @generated from field: gitpod.v1.GitInitializer git = 1;
         */
        value: GitInitializer;
        case: "git";
    } | {
        /**
         * @generated from field: gitpod.v1.ContextURLInitializer context_url = 2;
         */
        value: ContextURLInitializer;
        case: "contextUrl";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.EnvironmentInitializer.Spec.
 * Use `create(EnvironmentInitializer_SpecSchema)` to create a new message.
 */
export declare const EnvironmentInitializer_SpecSchema: GenMessage<EnvironmentInitializer_Spec>;
/**
 * @generated from message gitpod.v1.ContextURLInitializer
 */
export type ContextURLInitializer = Message<"gitpod.v1.ContextURLInitializer"> & {
    /**
     * url is the URL from which the environment is created
     *
     * @generated from field: string url = 1;
     */
    url: string;
};
/**
 * Describes the message gitpod.v1.ContextURLInitializer.
 * Use `create(ContextURLInitializerSchema)` to create a new message.
 */
export declare const ContextURLInitializerSchema: GenMessage<ContextURLInitializer>;
/**
 * @generated from message gitpod.v1.GitInitializer
 */
export type GitInitializer = Message<"gitpod.v1.GitInitializer"> & {
    /**
     * remote_uri is the Git remote origin
     *
     * @generated from field: string remote_uri = 1;
     */
    remoteUri: string;
    /**
     * upstream_Remote_uri is the fork upstream of a repository
     *
     * @generated from field: string upstream_remote_uri = 2;
     */
    upstreamRemoteUri: string;
    /**
     * the target mode determines what gets checked out
     *
     * @generated from field: gitpod.v1.GitInitializer.CloneTargetMode target_mode = 3;
     */
    targetMode: GitInitializer_CloneTargetMode;
    /**
     * the value for the clone target mode - use depends on the target mode
     *
     * @generated from field: string clone_target = 4;
     */
    cloneTarget: string;
    /**
     * a path relative to the environment root in which the code will be checked out
     * to
     *
     * @generated from field: string checkout_location = 5;
     */
    checkoutLocation: string;
};
/**
 * Describes the message gitpod.v1.GitInitializer.
 * Use `create(GitInitializerSchema)` to create a new message.
 */
export declare const GitInitializerSchema: GenMessage<GitInitializer>;
/**
 * CloneTargetMode is the target state in which we want to leave a
 * GitEnvironment
 *
 * @generated from enum gitpod.v1.GitInitializer.CloneTargetMode
 */
export declare enum GitInitializer_CloneTargetMode {
    /**
     * @generated from enum value: CLONE_TARGET_MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * REMOTE_HEAD has the local WS point at the remote branch head
     *
     * @generated from enum value: CLONE_TARGET_MODE_REMOTE_HEAD = 1;
     */
    REMOTE_HEAD = 1,
    /**
     * REMOTE_COMMIT has the local WS point at a specific commit
     *
     * @generated from enum value: CLONE_TARGET_MODE_REMOTE_COMMIT = 2;
     */
    REMOTE_COMMIT = 2,
    /**
     * REMOTE_BRANCH has the local WS point at a remote branch
     *
     * @generated from enum value: CLONE_TARGET_MODE_REMOTE_BRANCH = 3;
     */
    REMOTE_BRANCH = 3,
    /**
     * LOCAL_BRANCH creates a local branch in the environment
     *
     * @generated from enum value: CLONE_TARGET_MODE_LOCAL_BRANCH = 4;
     */
    LOCAL_BRANCH = 4,
    /**
     * REMOTE_TAG has the local WS point at a specific tag
     *
     * @generated from enum value: CLONE_TARGET_MODE_REMOTE_TAG = 5;
     */
    REMOTE_TAG = 5
}
/**
 * Describes the enum gitpod.v1.GitInitializer.CloneTargetMode.
 */
export declare const GitInitializer_CloneTargetModeSchema: GenEnum<GitInitializer_CloneTargetMode>;
/**
 * @generated from message gitpod.v1.StartEnvironmentRequest
 */
export type StartEnvironmentRequest = Message<"gitpod.v1.StartEnvironmentRequest"> & {
    /**
     * environment_id specifies which environment should be started.
     *
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
};
/**
 * Describes the message gitpod.v1.StartEnvironmentRequest.
 * Use `create(StartEnvironmentRequestSchema)` to create a new message.
 */
export declare const StartEnvironmentRequestSchema: GenMessage<StartEnvironmentRequest>;
/**
 * @generated from message gitpod.v1.StartEnvironmentResponse
 */
export type StartEnvironmentResponse = Message<"gitpod.v1.StartEnvironmentResponse"> & {};
/**
 * Describes the message gitpod.v1.StartEnvironmentResponse.
 * Use `create(StartEnvironmentResponseSchema)` to create a new message.
 */
export declare const StartEnvironmentResponseSchema: GenMessage<StartEnvironmentResponse>;
/**
 * @generated from message gitpod.v1.StopEnvironmentRequest
 */
export type StopEnvironmentRequest = Message<"gitpod.v1.StopEnvironmentRequest"> & {
    /**
     * environment_id specifies which environment should be stopped.
     *
     * +required
     *
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
};
/**
 * Describes the message gitpod.v1.StopEnvironmentRequest.
 * Use `create(StopEnvironmentRequestSchema)` to create a new message.
 */
export declare const StopEnvironmentRequestSchema: GenMessage<StopEnvironmentRequest>;
/**
 * @generated from message gitpod.v1.StopEnvironmentResponse
 */
export type StopEnvironmentResponse = Message<"gitpod.v1.StopEnvironmentResponse"> & {};
/**
 * Describes the message gitpod.v1.StopEnvironmentResponse.
 * Use `create(StopEnvironmentResponseSchema)` to create a new message.
 */
export declare const StopEnvironmentResponseSchema: GenMessage<StopEnvironmentResponse>;
/**
 * @generated from message gitpod.v1.UpdateEnvironmentRequest
 */
export type UpdateEnvironmentRequest = Message<"gitpod.v1.UpdateEnvironmentRequest"> & {
    /**
     * environment_id specifies which environment should be updated.
     *
     * +required
     *
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * @generated from field: optional gitpod.v1.UpdateEnvironmentRequest.Metadata metadata = 2;
     */
    metadata?: UpdateEnvironmentRequest_Metadata;
    /**
     * @generated from field: optional gitpod.v1.UpdateEnvironmentRequest.Spec spec = 3;
     */
    spec?: UpdateEnvironmentRequest_Spec;
};
/**
 * Describes the message gitpod.v1.UpdateEnvironmentRequest.
 * Use `create(UpdateEnvironmentRequestSchema)` to create a new message.
 */
export declare const UpdateEnvironmentRequestSchema: GenMessage<UpdateEnvironmentRequest>;
/**
 * @generated from message gitpod.v1.UpdateEnvironmentRequest.Content
 */
export type UpdateEnvironmentRequest_Content = Message<"gitpod.v1.UpdateEnvironmentRequest.Content"> & {
    /**
     * session should be changed to trigger a content reinitialization
     *
     * @generated from field: optional string session = 1;
     */
    session?: string;
    /**
     * initializer configures how the environment is to be initialized
     *
     * @generated from field: optional gitpod.v1.EnvironmentInitializer initializer = 2;
     */
    initializer?: EnvironmentInitializer;
    /**
     * The Git username
     *
     * @generated from field: optional string git_username = 3;
     */
    gitUsername?: string;
    /**
     * The Git email address
     *
     * @generated from field: optional string git_email = 4;
     */
    gitEmail?: string;
};
/**
 * Describes the message gitpod.v1.UpdateEnvironmentRequest.Content.
 * Use `create(UpdateEnvironmentRequest_ContentSchema)` to create a new message.
 */
export declare const UpdateEnvironmentRequest_ContentSchema: GenMessage<UpdateEnvironmentRequest_Content>;
/**
 * @generated from message gitpod.v1.UpdateEnvironmentRequest.SSHPublicKey
 */
export type UpdateEnvironmentRequest_SSHPublicKey = Message<"gitpod.v1.UpdateEnvironmentRequest.SSHPublicKey"> & {
    /**
     * id is the unique identifier of the public key
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * value is the actual public key in the public key file format
     * if not provided, the public key will be removed
     *
     * @generated from field: optional string value = 2;
     */
    value?: string;
};
/**
 * Describes the message gitpod.v1.UpdateEnvironmentRequest.SSHPublicKey.
 * Use `create(UpdateEnvironmentRequest_SSHPublicKeySchema)` to create a new message.
 */
export declare const UpdateEnvironmentRequest_SSHPublicKeySchema: GenMessage<UpdateEnvironmentRequest_SSHPublicKey>;
/**
 * @generated from message gitpod.v1.UpdateEnvironmentRequest.DevContainer
 */
export type UpdateEnvironmentRequest_DevContainer = Message<"gitpod.v1.UpdateEnvironmentRequest.DevContainer"> & {
    /**
     * session should be changed to trigger a devcontainer rebuild
     *
     * @generated from field: optional string session = 1;
     */
    session?: string;
    /**
     * devcontainer_file_path is the path to the devcontainer file relative to the repo root
     *
     * @generated from field: optional string devcontainer_file_path = 2;
     */
    devcontainerFilePath?: string;
};
/**
 * Describes the message gitpod.v1.UpdateEnvironmentRequest.DevContainer.
 * Use `create(UpdateEnvironmentRequest_DevContainerSchema)` to create a new message.
 */
export declare const UpdateEnvironmentRequest_DevContainerSchema: GenMessage<UpdateEnvironmentRequest_DevContainer>;
/**
 * @generated from message gitpod.v1.UpdateEnvironmentRequest.Timeout
 */
export type UpdateEnvironmentRequest_Timeout = Message<"gitpod.v1.UpdateEnvironmentRequest.Timeout"> & {
    /**
     * inacitivity is the maximum time of disconnection before the environment is
     * stopped or paused. Minimum duration is 30 minutes. Set to 0 to disable.
     *
     * @generated from field: optional google.protobuf.Duration disconnected = 1;
     */
    disconnected?: Duration;
};
/**
 * Describes the message gitpod.v1.UpdateEnvironmentRequest.Timeout.
 * Use `create(UpdateEnvironmentRequest_TimeoutSchema)` to create a new message.
 */
export declare const UpdateEnvironmentRequest_TimeoutSchema: GenMessage<UpdateEnvironmentRequest_Timeout>;
/**
 * @generated from message gitpod.v1.UpdateEnvironmentRequest.AutomationsFile
 */
export type UpdateEnvironmentRequest_AutomationsFile = Message<"gitpod.v1.UpdateEnvironmentRequest.AutomationsFile"> & {
    /**
     * @generated from field: optional string session = 1;
     */
    session?: string;
    /**
     * automations_file_path is the path to the automations file that is applied in the environment,
     * relative to the repo root.
     *
     * @generated from field: optional string automations_file_path = 2;
     */
    automationsFilePath?: string;
};
/**
 * Describes the message gitpod.v1.UpdateEnvironmentRequest.AutomationsFile.
 * Use `create(UpdateEnvironmentRequest_AutomationsFileSchema)` to create a new message.
 */
export declare const UpdateEnvironmentRequest_AutomationsFileSchema: GenMessage<UpdateEnvironmentRequest_AutomationsFile>;
/**
 * @generated from message gitpod.v1.UpdateEnvironmentRequest.Metadata
 */
export type UpdateEnvironmentRequest_Metadata = Message<"gitpod.v1.UpdateEnvironmentRequest.Metadata"> & {
    /**
     * name is the user-defined display name of the environment
     *
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * lockdown_at sets or clears the lockdown time for this environment.
     * Only org admins can set this field. When set to a future time, the
     * environment will become blocked at that time. When cleared (set to
     * epoch zero), the lockdown is removed. Setting to a past time is rejected.
     *
     * @generated from field: optional google.protobuf.Timestamp lockdown_at = 2;
     */
    lockdownAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.UpdateEnvironmentRequest.Metadata.
 * Use `create(UpdateEnvironmentRequest_MetadataSchema)` to create a new message.
 */
export declare const UpdateEnvironmentRequest_MetadataSchema: GenMessage<UpdateEnvironmentRequest_Metadata>;
/**
 * @generated from message gitpod.v1.UpdateEnvironmentRequest.Spec
 */
export type UpdateEnvironmentRequest_Spec = Message<"gitpod.v1.UpdateEnvironmentRequest.Spec"> & {
    /**
     * @generated from field: optional gitpod.v1.UpdateEnvironmentRequest.Content content = 2;
     */
    content?: UpdateEnvironmentRequest_Content;
    /**
     * ssh_public_keys are the public keys to update
     * empty array means nothing to update
     *
     * @generated from field: repeated gitpod.v1.UpdateEnvironmentRequest.SSHPublicKey ssh_public_keys = 3;
     */
    sshPublicKeys: UpdateEnvironmentRequest_SSHPublicKey[];
    /**
     * @generated from field: optional gitpod.v1.UpdateEnvironmentRequest.DevContainer devcontainer = 4;
     */
    devcontainer?: UpdateEnvironmentRequest_DevContainer;
    /**
     * ports controls port sharing
     *
     * @generated from field: repeated gitpod.v1.EnvironmentSpec.EnvironmentPort ports = 5;
     */
    ports: EnvironmentSpec_EnvironmentPort[];
    /**
     * Timeout configures the environment timeout
     *
     * @generated from field: optional gitpod.v1.UpdateEnvironmentRequest.Timeout timeout = 6;
     */
    timeout?: UpdateEnvironmentRequest_Timeout;
    /**
     * automations_file is the automations file spec of the environment
     *
     * @generated from field: optional gitpod.v1.UpdateEnvironmentRequest.AutomationsFile automations_file = 7;
     */
    automationsFile?: UpdateEnvironmentRequest_AutomationsFile;
    /**
     * kernel_controls_config configures kernel-level controls for this environment
     *
     * @generated from field: optional gitpod.v1.KernelControlsConfig kernel_controls_config = 8;
     */
    kernelControlsConfig?: KernelControlsConfig;
};
/**
 * Describes the message gitpod.v1.UpdateEnvironmentRequest.Spec.
 * Use `create(UpdateEnvironmentRequest_SpecSchema)` to create a new message.
 */
export declare const UpdateEnvironmentRequest_SpecSchema: GenMessage<UpdateEnvironmentRequest_Spec>;
/**
 * @generated from message gitpod.v1.UpdateEnvironmentResponse
 */
export type UpdateEnvironmentResponse = Message<"gitpod.v1.UpdateEnvironmentResponse"> & {};
/**
 * Describes the message gitpod.v1.UpdateEnvironmentResponse.
 * Use `create(UpdateEnvironmentResponseSchema)` to create a new message.
 */
export declare const UpdateEnvironmentResponseSchema: GenMessage<UpdateEnvironmentResponse>;
/**
 * @generated from message gitpod.v1.DeleteEnvironmentRequest
 */
export type DeleteEnvironmentRequest = Message<"gitpod.v1.DeleteEnvironmentRequest"> & {
    /**
     * environment_id specifies the environment that is going to delete.
     *
     * +required
     *
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * force indicates whether the environment should be deleted forcefully
     * When force deleting an Environment, the Environment is removed immediately and
     * environment lifecycle is not respected.
     * Force deleting can result in data loss on the environment.
     *
     * @generated from field: bool force = 2;
     */
    force: boolean;
};
/**
 * Describes the message gitpod.v1.DeleteEnvironmentRequest.
 * Use `create(DeleteEnvironmentRequestSchema)` to create a new message.
 */
export declare const DeleteEnvironmentRequestSchema: GenMessage<DeleteEnvironmentRequest>;
/**
 * @generated from message gitpod.v1.DeleteEnvironmentResponse
 */
export type DeleteEnvironmentResponse = Message<"gitpod.v1.DeleteEnvironmentResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteEnvironmentResponse.
 * Use `create(DeleteEnvironmentResponseSchema)` to create a new message.
 */
export declare const DeleteEnvironmentResponseSchema: GenMessage<DeleteEnvironmentResponse>;
/**
 * @generated from message gitpod.v1.CreateEnvironmentLogsTokenRequest
 */
export type CreateEnvironmentLogsTokenRequest = Message<"gitpod.v1.CreateEnvironmentLogsTokenRequest"> & {
    /**
     * environment_id specifies the environment for which the logs token should be created.
     *
     * +required
     *
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
};
/**
 * Describes the message gitpod.v1.CreateEnvironmentLogsTokenRequest.
 * Use `create(CreateEnvironmentLogsTokenRequestSchema)` to create a new message.
 */
export declare const CreateEnvironmentLogsTokenRequestSchema: GenMessage<CreateEnvironmentLogsTokenRequest>;
/**
 * @generated from message gitpod.v1.CreateEnvironmentLogsTokenResponse
 */
export type CreateEnvironmentLogsTokenResponse = Message<"gitpod.v1.CreateEnvironmentLogsTokenResponse"> & {
    /**
     * access_token is the token that can be used to access the logs of the environment
     *
     * @generated from field: string access_token = 1;
     */
    accessToken: string;
};
/**
 * Describes the message gitpod.v1.CreateEnvironmentLogsTokenResponse.
 * Use `create(CreateEnvironmentLogsTokenResponseSchema)` to create a new message.
 */
export declare const CreateEnvironmentLogsTokenResponseSchema: GenMessage<CreateEnvironmentLogsTokenResponse>;
/**
 * @generated from message gitpod.v1.CreateEnvironmentAccessTokenRequest
 */
export type CreateEnvironmentAccessTokenRequest = Message<"gitpod.v1.CreateEnvironmentAccessTokenRequest"> & {
    /**
     * environment_id specifies the environment for which the access token should be created.
     *
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
};
/**
 * Describes the message gitpod.v1.CreateEnvironmentAccessTokenRequest.
 * Use `create(CreateEnvironmentAccessTokenRequestSchema)` to create a new message.
 */
export declare const CreateEnvironmentAccessTokenRequestSchema: GenMessage<CreateEnvironmentAccessTokenRequest>;
/**
 * @generated from message gitpod.v1.CreateEnvironmentAccessTokenResponse
 */
export type CreateEnvironmentAccessTokenResponse = Message<"gitpod.v1.CreateEnvironmentAccessTokenResponse"> & {
    /**
     * access_token is the token that can be used for environment authentication
     *
     * @generated from field: string access_token = 1;
     */
    accessToken: string;
};
/**
 * Describes the message gitpod.v1.CreateEnvironmentAccessTokenResponse.
 * Use `create(CreateEnvironmentAccessTokenResponseSchema)` to create a new message.
 */
export declare const CreateEnvironmentAccessTokenResponseSchema: GenMessage<CreateEnvironmentAccessTokenResponse>;
/**
 * @generated from message gitpod.v1.CreatePortAccessTokenRequest
 */
export type CreatePortAccessTokenRequest = Message<"gitpod.v1.CreatePortAccessTokenRequest"> & {
    /**
     * environment_id specifies the environment for which the port access token should be created.
     *
     * +required
     *
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * port specifies the port number for which the access token should be created.
     *
     * +required
     *
     * @generated from field: int32 port = 2;
     */
    port: number;
};
/**
 * Describes the message gitpod.v1.CreatePortAccessTokenRequest.
 * Use `create(CreatePortAccessTokenRequestSchema)` to create a new message.
 */
export declare const CreatePortAccessTokenRequestSchema: GenMessage<CreatePortAccessTokenRequest>;
/**
 * @generated from message gitpod.v1.CreatePortAccessTokenResponse
 */
export type CreatePortAccessTokenResponse = Message<"gitpod.v1.CreatePortAccessTokenResponse"> & {
    /**
     * access_token is the token that can be used to access the port.
     *
     * @generated from field: string access_token = 1;
     */
    accessToken: string;
};
/**
 * Describes the message gitpod.v1.CreatePortAccessTokenResponse.
 * Use `create(CreatePortAccessTokenResponseSchema)` to create a new message.
 */
export declare const CreatePortAccessTokenResponseSchema: GenMessage<CreatePortAccessTokenResponse>;
/**
 * @generated from message gitpod.v1.AllowPortAccessRequest
 */
export type AllowPortAccessRequest = Message<"gitpod.v1.AllowPortAccessRequest"> & {
    /**
     * environment_id specifies the environment to check access for.
     *
     * +required
     *
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * port specifies the port number to check access for.
     *
     * +required
     *
     * @generated from field: int32 port = 2;
     */
    port: number;
};
/**
 * Describes the message gitpod.v1.AllowPortAccessRequest.
 * Use `create(AllowPortAccessRequestSchema)` to create a new message.
 */
export declare const AllowPortAccessRequestSchema: GenMessage<AllowPortAccessRequest>;
/**
 * @generated from message gitpod.v1.AllowPortAccessResponse
 */
export type AllowPortAccessResponse = Message<"gitpod.v1.AllowPortAccessResponse"> & {
    /**
     * allowed indicates whether the caller is permitted to access the port.
     *
     * @generated from field: bool allowed = 1;
     */
    allowed: boolean;
};
/**
 * Describes the message gitpod.v1.AllowPortAccessResponse.
 * Use `create(AllowPortAccessResponseSchema)` to create a new message.
 */
export declare const AllowPortAccessResponseSchema: GenMessage<AllowPortAccessResponse>;
/**
 * KernelControlsAction defines how a kernel-level policy violation is handled.
 *
 * @generated from enum gitpod.v1.KernelControlsAction
 */
export declare enum KernelControlsAction {
    /**
     * KERNEL_CONTROLS_ACTION_UNSPECIFIED defaults to BLOCK.
     *
     * @generated from enum value: KERNEL_CONTROLS_ACTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * KERNEL_CONTROLS_ACTION_BLOCK denies the operation.
     *
     * @generated from enum value: KERNEL_CONTROLS_ACTION_BLOCK = 1;
     */
    BLOCK = 1,
    /**
     * KERNEL_CONTROLS_ACTION_AUDIT logs the operation without blocking it.
     *
     * @generated from enum value: KERNEL_CONTROLS_ACTION_AUDIT = 2;
     */
    AUDIT = 2
}
/**
 * Describes the enum gitpod.v1.KernelControlsAction.
 */
export declare const KernelControlsActionSchema: GenEnum<KernelControlsAction>;
/**
 * VetoFileSurface defines which file operation classes a path entry targets.
 *
 * @generated from enum gitpod.v1.VetoFileSurface
 */
export declare enum VetoFileSurface {
    /**
     * VETO_FILE_SURFACE_UNSPECIFIED inherits from the policy default.
     *
     * @generated from enum value: VETO_FILE_SURFACE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * VETO_FILE_SURFACE_ACCESS targets reads, writes, mutating opens, and shared writable mappings.
     *
     * @generated from enum value: VETO_FILE_SURFACE_ACCESS = 1;
     */
    ACCESS = 1,
    /**
     * VETO_FILE_SURFACE_CONTENT_MUTATION targets covered current-inode content mutation attempts.
     *
     * @generated from enum value: VETO_FILE_SURFACE_CONTENT_MUTATION = 2;
     */
    CONTENT_MUTATION = 2,
    /**
     * VETO_FILE_SURFACE_CONTENT_READ targets file-content access attempts represented by
     * AccessFileContent: regular reads and read-like file-backed mmap/mprotect
     * attempts. It does not select mutation-only operation classes.
     *
     * @generated from enum value: VETO_FILE_SURFACE_CONTENT_READ = 3;
     */
    CONTENT_READ = 3
}
/**
 * Describes the enum gitpod.v1.VetoFileSurface.
 */
export declare const VetoFileSurfaceSchema: GenEnum<VetoFileSurface>;
/**
 * BPFDebugLevel controls the verbosity of BPF trace_pipe output (bpf_printk).
 * Applies to all BPF-based agents (veto exec, future agents).
 *
 * @generated from enum gitpod.v1.BPFDebugLevel
 */
export declare enum BPFDebugLevel {
    /**
     * BPF_DEBUG_LEVEL_UNSPECIFIED disables all bpf_printk output (default).
     *
     * @generated from enum value: BPF_DEBUG_LEVEL_UNSPECIFIED = 0;
     */
    BPF_DEBUG_LEVEL_UNSPECIFIED = 0,
    /**
     * BPF_DEBUG_LEVEL_INFO enables decision-level prints (e.g., veto allow/block).
     *
     * @generated from enum value: BPF_DEBUG_LEVEL_INFO = 1;
     */
    BPF_DEBUG_LEVEL_INFO = 1,
    /**
     * BPF_DEBUG_LEVEL_VERBOSE enables all debug prints including data fillers.
     *
     * @generated from enum value: BPF_DEBUG_LEVEL_VERBOSE = 2;
     */
    BPF_DEBUG_LEVEL_VERBOSE = 2
}
/**
 * Describes the enum gitpod.v1.BPFDebugLevel.
 */
export declare const BPFDebugLevelSchema: GenEnum<BPFDebugLevel>;
/**
 * Admission level describes who can access an environment instance and its ports.
 *
 * @generated from enum gitpod.v1.AdmissionLevel
 */
export declare enum AdmissionLevel {
    /**
     * @generated from enum value: ADMISSION_LEVEL_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * ADMISSION_LEVEL_OWNER_ONLY means the environment can only be accessed by the creator.
     * Deprecated: Use ADMISSION_LEVEL_CREATOR_ONLY instead.
     *
     * @generated from enum value: ADMISSION_LEVEL_OWNER_ONLY = 1 [deprecated = true];
     * @deprecated
     */
    OWNER_ONLY = 1,
    /**
     * ADMISSION_LEVEL_EVERYONE means the environment (including ports) can be
     * accessed by everyone.
     *
     * @generated from enum value: ADMISSION_LEVEL_EVERYONE = 2;
     */
    EVERYONE = 2,
    /**
     * ADMISSION_LEVEL_ORGANIZATION means the environment (including ports) can be
     * accessed by all members of the organization.
     *
     * @generated from enum value: ADMISSION_LEVEL_ORGANIZATION = 3;
     */
    ORGANIZATION = 3,
    /**
     * ADMISSION_LEVEL_CREATOR_ONLY means the environment (including ports) can only
     * be accessed by the user who created the environment.
     *
     * @generated from enum value: ADMISSION_LEVEL_CREATOR_ONLY = 4;
     */
    CREATOR_ONLY = 4
}
/**
 * Describes the enum gitpod.v1.AdmissionLevel.
 */
export declare const AdmissionLevelSchema: GenEnum<AdmissionLevel>;
/**
 * @generated from enum gitpod.v1.EnvironmentPhase
 */
export declare enum EnvironmentPhase {
    /**
     * Unknown indicates an issue within the environment manager in that it cannot
     * determine the actual phase of an environment. This phase is usually
     * accompanied by an error.
     *
     * @generated from enum value: ENVIRONMENT_PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Creating means that the environment is first created. We organise the SCM credentials,
     * parse context URL if need be, and allocate the unit of compute.
     *
     * @generated from enum value: ENVIRONMENT_PHASE_CREATING = 10;
     */
    CREATING = 10,
    /**
     * Starting means that the environment is currently being started. This includes
     * starting the unit of compute (machine), resolving secrets, setting up the Git config,
     * initiaing the content, and starting the devcontainer.
     *
     * @generated from enum value: ENVIRONMENT_PHASE_STARTING = 20;
     */
    STARTING = 20,
    /**
     * Running means the environment is able to actively perform work, either by
     * serving a user through Theia, or as a headless environment.
     *
     * @generated from enum value: ENVIRONMENT_PHASE_RUNNING = 40;
     */
    RUNNING = 40,
    /**
     * Updating means the environment is currently being updated. This includes
     * content updates, devcontainer updates, secret updates and SSH public key updates.
     * This phase implies that the environment is running.
     *
     * @generated from enum value: ENVIRONMENT_PHASE_UPDATING = 45;
     */
    UPDATING = 45,
    /**
     * Stopping means that the environment is currently shutting down. It could go
     * to stopped every moment.
     *
     * @generated from enum value: ENVIRONMENT_PHASE_STOPPING = 50;
     */
    STOPPING = 50,
    /**
     * Stopped means the environment ended regularly because it was shut down.
     *
     * @generated from enum value: ENVIRONMENT_PHASE_STOPPED = 60;
     */
    STOPPED = 60,
    /**
     * Deleting means the environment is currently being deleted. It could go to
     * deleted any moment. This phase implies that the environment is stopped.
     *
     * @generated from enum value: ENVIRONMENT_PHASE_DELETING = 70;
     */
    DELETING = 70,
    /**
     * Deleted means the environment was deleted and cannot be started again.
     * This phase implies that the environment is stopped.
     *
     * @generated from enum value: ENVIRONMENT_PHASE_DELETED = 80;
     */
    DELETED = 80
}
/**
 * Describes the enum gitpod.v1.EnvironmentPhase.
 */
export declare const EnvironmentPhaseSchema: GenEnum<EnvironmentPhase>;
/**
 * EnvironmentRole represents the role of an environment
 *
 * @generated from enum gitpod.v1.EnvironmentRole
 */
export declare enum EnvironmentRole {
    /**
     * @generated from enum value: ENVIRONMENT_ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Default role for environments
     *
     * @generated from enum value: ENVIRONMENT_ROLE_DEFAULT = 1;
     */
    DEFAULT = 1,
    /**
     * Prebuild role for environments that are prebuilds
     *
     * @generated from enum value: ENVIRONMENT_ROLE_PREBUILD = 2;
     */
    PREBUILD = 2,
    /**
     * Workflow role for environments that are part of a workflow
     *
     * @generated from enum value: ENVIRONMENT_ROLE_WORKFLOW = 3;
     */
    WORKFLOW = 3
}
/**
 * Describes the enum gitpod.v1.EnvironmentRole.
 */
export declare const EnvironmentRoleSchema: GenEnum<EnvironmentRole>;
/**
 * @generated from service gitpod.v1.EnvironmentService
 */
export declare const EnvironmentService: GenService<{
    /**
     * Gets details about a specific environment including its status, configuration, and context URL.
     *
     * Use this method to:
     * - Check if an environment is ready to use
     * - Get connection details for IDE and exposed ports
     * - Monitor environment health and resource usage
     * - Debug environment setup issues
     *
     * ### Examples
     *
     * - Get environment details:
     *
     *   Retrieves detailed information about a specific environment using its unique identifier.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentService.GetEnvironment
     */
    getEnvironment: {
        methodKind: "unary";
        input: typeof GetEnvironmentRequestSchema;
        output: typeof GetEnvironmentResponseSchema;
    };
    /**
     * Lists all environments matching the specified criteria.
     *
     * Use this method to find and monitor environments across your organization.
     * Results are ordered by creation time with newest environments first.
     *
     * ### Examples
     *
     * - List running environments for a project:
     *
     *   Retrieves all running environments for a specific project with pagination.
     *
     *   ```yaml
     *   filter:
     *     statusPhases: ["ENVIRONMENT_PHASE_RUNNING"]
     *     projectIds: ["b0e12f6c-4c67-429d-a4a6-d9838b5da047"]
     *   pagination:
     *     pageSize: 10
     *   ```
     *
     * - List all environments for a specific runner:
     *
     *   Filters environments by runner ID and creator ID.
     *
     *   ```yaml
     *   filter:
     *     runnerIds: ["e6aa9c54-89d3-42c1-ac31-bd8d8f1concentrate"]
     *     creatorIds: ["f53d2330-3795-4c5d-a1f3-453121af9c60"]
     *   ```
     *
     * - List stopped and deleted environments:
     *
     *   Retrieves all environments in stopped or deleted state.
     *
     *   ```yaml
     *   filter:
     *     statusPhases: ["ENVIRONMENT_PHASE_STOPPED", "ENVIRONMENT_PHASE_DELETED"]
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentService.ListEnvironments
     */
    listEnvironments: {
        methodKind: "unary";
        input: typeof ListEnvironmentsRequestSchema;
        output: typeof ListEnvironmentsResponseSchema;
    };
    /**
     * Lists available environment classes with their specifications and resource limits.
     *
     * Use this method to understand what types of environments you can create and their
     * capabilities. Environment classes define the compute resources and features available
     * to your environments.
     *
     * ### Examples
     *
     * - List all available classes:
     *
     *   Retrieves a list of all environment classes with their specifications.
     *
     *   ```yaml
     *   {}
     *   ```
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     *
     * @generated from rpc gitpod.v1.EnvironmentService.ListEnvironmentClasses
     */
    listEnvironmentClasses: {
        methodKind: "unary";
        input: typeof ListEnvironmentClassesRequestSchema;
        output: typeof ListEnvironmentClassesResponseSchema;
    };
    /**
     * Creates a development environment from a context URL (e.g. Git repository) and starts it.
     *
     * The `class` field must be a valid environment class ID. You can find a list of
     * available environment classes with the `ListEnvironmentClasses` method.
     *
     * ### Examples
     *
     * - Create from context URL:
     *
     *   Creates an environment from a Git repository URL with default settings.
     *
     *   ```yaml
     *   spec:
     *     machine:
     *       class: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *     content:
     *       initializer:
     *         specs:
     *           - contextUrl:
     *               url: "https://github.com/gitpod-io/gitpod"
     *   ```
     *
     * - Create from Git repository:
     *
     *   Creates an environment from a Git repository with specific branch targeting.
     *
     *   ```yaml
     *   spec:
     *     machine:
     *       class: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *     content:
     *       initializer:
     *         specs:
     *           - git:
     *               remoteUri: "https://github.com/gitpod-io/gitpod"
     *               cloneTarget: "main"
     *               targetMode: "CLONE_TARGET_MODE_REMOTE_BRANCH"
     *   ```
     *
     * - Create with custom timeout and ports:
     *
     *   Creates an environment with custom inactivity timeout and exposed port configuration.
     *
     *   ```yaml
     *   spec:
     *     machine:
     *       class: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *     content:
     *       initializer:
     *         specs:
     *           - contextUrl:
     *               url: "https://github.com/gitpod-io/gitpod"
     *     timeout:
     *       disconnected: "7200s"  # 2 hours in seconds
     *     ports:
     *       - port: 3000
     *         admission: "ADMISSION_LEVEL_EVERYONE"
     *         name: "Web App"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentService.CreateEnvironment
     */
    createEnvironment: {
        methodKind: "unary";
        input: typeof CreateEnvironmentRequestSchema;
        output: typeof CreateEnvironmentResponseSchema;
    };
    /**
     * Creates an environment from an existing project configuration and starts it.
     *
     * This method uses project settings as defaults but allows overriding specific
     * configurations. Project settings take precedence over default configurations,
     * while custom specifications in the request override project settings.
     *
     * ### Examples
     *
     * - Create with project defaults:
     *
     *   Creates an environment using all default settings from the project configuration.
     *
     *   ```yaml
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * - Create with custom compute resources:
     *
     *   Creates an environment from project with custom machine class and timeout settings.
     *
     *   ```yaml
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   spec:
     *     machine:
     *       class: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *     timeout:
     *       disconnected: "14400s"  # 4 hours in seconds
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentService.CreateEnvironmentFromProject
     */
    createEnvironmentFromProject: {
        methodKind: "unary";
        input: typeof CreateEnvironmentFromProjectRequestSchema;
        output: typeof CreateEnvironmentFromProjectResponseSchema;
    };
    /**
     * Starts a stopped environment.
     *
     * Use this method to resume work on a previously stopped environment. The environment
     * retains its configuration and workspace content from when it was stopped.
     *
     * ### Examples
     *
     * - Start an environment:
     *
     *   Resumes a previously stopped environment with its existing configuration.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentService.StartEnvironment
     */
    startEnvironment: {
        methodKind: "unary";
        input: typeof StartEnvironmentRequestSchema;
        output: typeof StartEnvironmentResponseSchema;
    };
    /**
     * Stops a running environment.
     *
     * Use this method to pause work while preserving the environment's state.
     * The environment can be resumed later using StartEnvironment.
     *
     * ### Examples
     *
     * - Stop an environment:
     *
     *   Gracefully stops a running environment while preserving its state.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentService.StopEnvironment
     */
    stopEnvironment: {
        methodKind: "unary";
        input: typeof StopEnvironmentRequestSchema;
        output: typeof StopEnvironmentResponseSchema;
    };
    /**
     * Updates an environment's configuration while it is running.
     *
     * Updates are limited to:
     * - Git credentials (username, email)
     * - SSH public keys
     * - Content initialization
     * - Port configurations
     * - Automation files
     * - Environment timeouts
     *
     * ### Examples
     *
     * - Update Git credentials:
     *
     *   Updates the Git configuration for the environment.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   spec:
     *     content:
     *       gitUsername: "example-user"
     *       gitEmail: "user@example.com"
     *   ```
     *
     * - Add SSH public key:
     *
     *   Adds a new SSH public key for authentication.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   spec:
     *     sshPublicKeys:
     *       - id: "0194b7c1-c954-718d-91a4-9a742aa5fc11"
     *         value: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI..."
     *   ```
     *
     * - Update content session:
     *
     *   Updates the content session identifier for the environment.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   spec:
     *     content:
     *       session: "0194b7c1-c954-718d-91a4-9a742aa5fc11"
     *   ```
     *
     * Note: Machine class changes require stopping the environment and creating a new one.
     *
     * @generated from rpc gitpod.v1.EnvironmentService.UpdateEnvironment
     */
    updateEnvironment: {
        methodKind: "unary";
        input: typeof UpdateEnvironmentRequestSchema;
        output: typeof UpdateEnvironmentResponseSchema;
    };
    /**
     * Permanently deletes an environment.
     *
     * Running environments are automatically stopped before deletion. If force
     * is true, the environment is deleted immediately without graceful shutdown.
     *
     * ### Examples
     *
     * - Delete with graceful shutdown:
     *
     *   Deletes an environment after gracefully stopping it.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   force: false
     *   ```
     *
     * - Force delete:
     *
     *   Immediately deletes an environment without waiting for graceful shutdown.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   force: true
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentService.DeleteEnvironment
     */
    deleteEnvironment: {
        methodKind: "unary";
        input: typeof DeleteEnvironmentRequestSchema;
        output: typeof DeleteEnvironmentResponseSchema;
    };
    /**
     * Creates an access token for retrieving environment logs.
     *
     * Generated tokens are valid for one hour and provide read-only access
     * to the environment's logs.
     *
     * ### Examples
     *
     * - Generate logs token:
     *
     *   Creates a temporary access token for retrieving environment logs.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentService.CreateEnvironmentLogsToken
     */
    createEnvironmentLogsToken: {
        methodKind: "unary";
        input: typeof CreateEnvironmentLogsTokenRequestSchema;
        output: typeof CreateEnvironmentLogsTokenResponseSchema;
    };
    /**
     * Creates an access token for the environment.
     *
     * Generated tokens are valid for one hour and provide environment-specific access permissions.
     * The token is scoped to a specific environment.
     *
     * ### Examples
     *
     * - Generate environment token:
     *
     *   Creates a temporary access token for accessing an environment.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentService.CreateEnvironmentAccessToken
     */
    createEnvironmentAccessToken: {
        methodKind: "unary";
        input: typeof CreateEnvironmentAccessTokenRequestSchema;
        output: typeof CreateEnvironmentAccessTokenResponseSchema;
    };
    /**
     * Creates an access token for a specific port on an environment.
     *
     * The token grants access to the specified port based on the port's admission level.
     * Tokens are short-lived (~1 hour) with refresh tokens for long-running connections.
     *
     * ### Examples
     *
     * - Generate port access token:
     *
     *   Creates a token for accessing port 8080 on an environment.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   port: 8080
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentService.CreatePortAccessToken
     */
    createPortAccessToken: {
        methodKind: "unary";
        input: typeof CreatePortAccessTokenRequestSchema;
        output: typeof CreatePortAccessTokenResponseSchema;
    };
    /**
     * Deprecated: Use local validation with the environment state cache instead.
     *
     * Checks if the authenticated caller can access a specific port on an environment.
     * This is called by the Runner Proxy to validate access tokens against current state.
     * The caller's identity is extracted from the JWT in the request context.
     *
     * ### Examples
     *
     * - Check port access:
     *
     *   Verifies if the caller can access port 8080 on an environment.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   port: 8080
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentService.AllowPortAccess
     * @deprecated
     */
    allowPortAccess: {
        methodKind: "unary";
        input: typeof AllowPortAccessRequestSchema;
        output: typeof AllowPortAccessResponseSchema;
    };
    /**
     * Records environment activity to prevent automatic shutdown.
     *
     * Activity signals should be sent every 5 minutes while the environment
     * is actively being used. The source must be between 3-80 characters.
     *
     * ### Examples
     *
     * - Signal VS Code activity:
     *
     *   Records VS Code editor activity to prevent environment shutdown.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   activitySignal:
     *     source: "VS Code"
     *     timestamp: "2025-02-12T14:30:00Z"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentService.MarkEnvironmentActive
     */
    markEnvironmentActive: {
        methodKind: "unary";
        input: typeof MarkEnvironmentActiveRequestSchema;
        output: typeof MarkEnvironmentActiveResponseSchema;
    };
    /**
     * Unarchives an environment.
     *
     * ### Examples
     *
     * - Unarchive an environment:
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentService.UnarchiveEnvironment
     */
    unarchiveEnvironment: {
        methodKind: "unary";
        input: typeof UnarchiveEnvironmentRequestSchema;
        output: typeof UnarchiveEnvironmentResponseSchema;
    };
    /**
     * Archives an environment immediately.
     *
     * ### Examples
     *
     * - Archive an environment:
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentService.ArchiveEnvironment
     */
    archiveEnvironment: {
        methodKind: "unary";
        input: typeof ArchiveEnvironmentRequestSchema;
        output: typeof ArchiveEnvironmentResponseSchema;
    };
}>;
