import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Subject } from "./identity_pb";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/prebuild.proto.
 */
export declare const file_gitpod_v1_prebuild: GenFile;
/**
 * @generated from message gitpod.v1.CreatePrebuildRequest
 */
export type CreatePrebuildRequest = Message<"gitpod.v1.CreatePrebuildRequest"> & {
    /**
     * project_id specifies the project to create a prebuild for
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
    /**
     * environment_class_id specifies which environment class to use for the prebuild.
     * If not specified, uses the project's default environment class.
     *
     * @generated from field: optional string environment_class_id = 2;
     */
    environmentClassId?: string;
    /**
     * spec contains the configuration for creating the prebuild
     *
     * @generated from field: gitpod.v1.PrebuildSpec spec = 3;
     */
    spec?: PrebuildSpec;
};
/**
 * Describes the message gitpod.v1.CreatePrebuildRequest.
 * Use `create(CreatePrebuildRequestSchema)` to create a new message.
 */
export declare const CreatePrebuildRequestSchema: GenMessage<CreatePrebuildRequest>;
/**
 * @generated from message gitpod.v1.CreatePrebuildResponse
 */
export type CreatePrebuildResponse = Message<"gitpod.v1.CreatePrebuildResponse"> & {
    /**
     * @generated from field: gitpod.v1.Prebuild prebuild = 1;
     */
    prebuild?: Prebuild;
};
/**
 * Describes the message gitpod.v1.CreatePrebuildResponse.
 * Use `create(CreatePrebuildResponseSchema)` to create a new message.
 */
export declare const CreatePrebuildResponseSchema: GenMessage<CreatePrebuildResponse>;
/**
 * @generated from message gitpod.v1.ListPrebuildsRequest
 */
export type ListPrebuildsRequest = Message<"gitpod.v1.ListPrebuildsRequest"> & {
    /**
     * pagination contains the pagination options for listing prebuilds
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * filter contains the filter options for listing prebuilds
     *
     * @generated from field: gitpod.v1.ListPrebuildsRequest.Filter filter = 2;
     */
    filter?: ListPrebuildsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListPrebuildsRequest.
 * Use `create(ListPrebuildsRequestSchema)` to create a new message.
 */
export declare const ListPrebuildsRequestSchema: GenMessage<ListPrebuildsRequest>;
/**
 * @generated from message gitpod.v1.ListPrebuildsRequest.Filter
 */
export type ListPrebuildsRequest_Filter = Message<"gitpod.v1.ListPrebuildsRequest.Filter"> & {
    /**
     * project_ids filters prebuilds to specific projects
     *
     * @generated from field: repeated string project_ids = 1;
     */
    projectIds: string[];
    /**
     * phases filters prebuilds by their current phase
     *
     * @generated from field: repeated gitpod.v1.PrebuildPhase phases = 2;
     */
    phases: PrebuildPhase[];
    /**
     * triggered_by filters prebuilds by how they were triggered
     *
     * @generated from field: repeated gitpod.v1.PrebuildMetadata.PrebuildTrigger triggered_by = 3;
     */
    triggeredBy: PrebuildMetadata_PrebuildTrigger[];
    /**
     * creator_ids filters prebuilds by who created them
     *
     * @generated from field: repeated string creator_ids = 4;
     */
    creatorIds: string[];
    /**
     * executor_ids filters prebuilds by whose credentials were used to run them
     *
     * @generated from field: repeated string executor_ids = 5;
     */
    executorIds: string[];
};
/**
 * Describes the message gitpod.v1.ListPrebuildsRequest.Filter.
 * Use `create(ListPrebuildsRequest_FilterSchema)` to create a new message.
 */
export declare const ListPrebuildsRequest_FilterSchema: GenMessage<ListPrebuildsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListPrebuildsResponse
 */
export type ListPrebuildsResponse = Message<"gitpod.v1.ListPrebuildsResponse"> & {
    /**
     * pagination contains the pagination response
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * prebuilds are the prebuilds that matched the query
     *
     * @generated from field: repeated gitpod.v1.Prebuild prebuilds = 2;
     */
    prebuilds: Prebuild[];
};
/**
 * Describes the message gitpod.v1.ListPrebuildsResponse.
 * Use `create(ListPrebuildsResponseSchema)` to create a new message.
 */
export declare const ListPrebuildsResponseSchema: GenMessage<ListPrebuildsResponse>;
/**
 * @generated from message gitpod.v1.GetPrebuildRequest
 */
export type GetPrebuildRequest = Message<"gitpod.v1.GetPrebuildRequest"> & {
    /**
     * prebuild_id specifies the prebuild to retrieve
     *
     * @generated from field: string prebuild_id = 1;
     */
    prebuildId: string;
};
/**
 * Describes the message gitpod.v1.GetPrebuildRequest.
 * Use `create(GetPrebuildRequestSchema)` to create a new message.
 */
export declare const GetPrebuildRequestSchema: GenMessage<GetPrebuildRequest>;
/**
 * @generated from message gitpod.v1.GetPrebuildResponse
 */
export type GetPrebuildResponse = Message<"gitpod.v1.GetPrebuildResponse"> & {
    /**
     * @generated from field: gitpod.v1.Prebuild prebuild = 1;
     */
    prebuild?: Prebuild;
};
/**
 * Describes the message gitpod.v1.GetPrebuildResponse.
 * Use `create(GetPrebuildResponseSchema)` to create a new message.
 */
export declare const GetPrebuildResponseSchema: GenMessage<GetPrebuildResponse>;
/**
 * @generated from message gitpod.v1.CancelPrebuildRequest
 */
export type CancelPrebuildRequest = Message<"gitpod.v1.CancelPrebuildRequest"> & {
    /**
     * prebuild_id specifies the prebuild to cancel
     *
     * @generated from field: string prebuild_id = 1;
     */
    prebuildId: string;
};
/**
 * Describes the message gitpod.v1.CancelPrebuildRequest.
 * Use `create(CancelPrebuildRequestSchema)` to create a new message.
 */
export declare const CancelPrebuildRequestSchema: GenMessage<CancelPrebuildRequest>;
/**
 * @generated from message gitpod.v1.CancelPrebuildResponse
 */
export type CancelPrebuildResponse = Message<"gitpod.v1.CancelPrebuildResponse"> & {
    /**
     * @generated from field: gitpod.v1.Prebuild prebuild = 1;
     */
    prebuild?: Prebuild;
};
/**
 * Describes the message gitpod.v1.CancelPrebuildResponse.
 * Use `create(CancelPrebuildResponseSchema)` to create a new message.
 */
export declare const CancelPrebuildResponseSchema: GenMessage<CancelPrebuildResponse>;
/**
 * @generated from message gitpod.v1.DeletePrebuildRequest
 */
export type DeletePrebuildRequest = Message<"gitpod.v1.DeletePrebuildRequest"> & {
    /**
     * prebuild_id specifies the prebuild to delete
     *
     * @generated from field: string prebuild_id = 1;
     */
    prebuildId: string;
};
/**
 * Describes the message gitpod.v1.DeletePrebuildRequest.
 * Use `create(DeletePrebuildRequestSchema)` to create a new message.
 */
export declare const DeletePrebuildRequestSchema: GenMessage<DeletePrebuildRequest>;
/**
 * @generated from message gitpod.v1.DeletePrebuildResponse
 */
export type DeletePrebuildResponse = Message<"gitpod.v1.DeletePrebuildResponse"> & {};
/**
 * Describes the message gitpod.v1.DeletePrebuildResponse.
 * Use `create(DeletePrebuildResponseSchema)` to create a new message.
 */
export declare const DeletePrebuildResponseSchema: GenMessage<DeletePrebuildResponse>;
/**
 * @generated from message gitpod.v1.CreatePrebuildLogsTokenRequest
 */
export type CreatePrebuildLogsTokenRequest = Message<"gitpod.v1.CreatePrebuildLogsTokenRequest"> & {
    /**
     * prebuild_id specifies the prebuild for which the logs token should be created.
     *
     * +required
     *
     * @generated from field: string prebuild_id = 1;
     */
    prebuildId: string;
};
/**
 * Describes the message gitpod.v1.CreatePrebuildLogsTokenRequest.
 * Use `create(CreatePrebuildLogsTokenRequestSchema)` to create a new message.
 */
export declare const CreatePrebuildLogsTokenRequestSchema: GenMessage<CreatePrebuildLogsTokenRequest>;
/**
 * @generated from message gitpod.v1.CreatePrebuildLogsTokenResponse
 */
export type CreatePrebuildLogsTokenResponse = Message<"gitpod.v1.CreatePrebuildLogsTokenResponse"> & {
    /**
     * access_token is the token that can be used to access the logs of the prebuild
     *
     * @generated from field: string access_token = 1;
     */
    accessToken: string;
};
/**
 * Describes the message gitpod.v1.CreatePrebuildLogsTokenResponse.
 * Use `create(CreatePrebuildLogsTokenResponseSchema)` to create a new message.
 */
export declare const CreatePrebuildLogsTokenResponseSchema: GenMessage<CreatePrebuildLogsTokenResponse>;
/**
 * Prebuild represents a prebuild for a project that creates a snapshot
 * for faster environment startup times.
 *
 * @generated from message gitpod.v1.Prebuild
 */
export type Prebuild = Message<"gitpod.v1.Prebuild"> & {
    /**
     * id is the unique identifier for the prebuild
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * metadata contains organizational and ownership information
     *
     * @generated from field: gitpod.v1.PrebuildMetadata metadata = 2;
     */
    metadata?: PrebuildMetadata;
    /**
     * spec contains the configuration used to create this prebuild
     *
     * @generated from field: gitpod.v1.PrebuildSpec spec = 3;
     */
    spec?: PrebuildSpec;
    /**
     * status contains the current status and progress of the prebuild
     *
     * @generated from field: gitpod.v1.PrebuildStatus status = 4;
     */
    status?: PrebuildStatus;
};
/**
 * Describes the message gitpod.v1.Prebuild.
 * Use `create(PrebuildSchema)` to create a new message.
 */
export declare const PrebuildSchema: GenMessage<Prebuild>;
/**
 * PrebuildMetadata contains metadata about the prebuild
 *
 * @generated from message gitpod.v1.PrebuildMetadata
 */
export type PrebuildMetadata = Message<"gitpod.v1.PrebuildMetadata"> & {
    /**
     * organization_id is the ID of the organization that owns the prebuild
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * project_id is the ID of the project this prebuild was created for
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * environment_class_id is the environment class used to create this prebuild.
     * While the prebuild is created with a specific environment class, environments
     * with different classes (e.g., smaller or larger instance sizes) can be created
     * from the same prebuild, as long as they run on the same runner.
     * If not specified in create requests, uses the project's default environment class.
     *
     * @generated from field: string environment_class_id = 3;
     */
    environmentClassId: string;
    /**
     * creator is the identity of who created the prebuild.
     * For manual prebuilds, this is the user who triggered it.
     * For scheduled prebuilds, this is the configured executor.
     *
     * @generated from field: gitpod.v1.Subject creator = 4;
     */
    creator?: Subject;
    /**
     * created_at is when the prebuild was created
     *
     * @generated from field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
    /**
     * updated_at is when the prebuild was last updated
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 6;
     */
    updatedAt?: Timestamp;
    /**
     * trigger describes the trigger that created this prebuild.
     *
     * @generated from field: gitpod.v1.PrebuildMetadata.PrebuildTrigger triggered_by = 7;
     */
    triggeredBy: PrebuildMetadata_PrebuildTrigger;
    /**
     * executor is the identity used to run the prebuild.
     * The executor's SCM credentials are used to clone the repository.
     * If not set, the creator's identity is used.
     *
     * @generated from field: gitpod.v1.Subject executor = 8;
     */
    executor?: Subject;
};
/**
 * Describes the message gitpod.v1.PrebuildMetadata.
 * Use `create(PrebuildMetadataSchema)` to create a new message.
 */
export declare const PrebuildMetadataSchema: GenMessage<PrebuildMetadata>;
/**
 * PrebuildTrigger indicates how the prebuild was triggered
 *
 * @generated from enum gitpod.v1.PrebuildMetadata.PrebuildTrigger
 */
export declare enum PrebuildMetadata_PrebuildTrigger {
    /**
     * PREBUILD_TRIGGER_UNSPECIFIED is the default value and should not be used
     *
     * @generated from enum value: PREBUILD_TRIGGER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * PREBUILD_TRIGGER_MANUAL indicates the prebuild was manually triggered by a user
     *
     * @generated from enum value: PREBUILD_TRIGGER_MANUAL = 1;
     */
    MANUAL = 1,
    /**
     * PREBUILD_TRIGGER_SCHEDULED indicates the prebuild was triggered by a scheduled job
     *
     * @generated from enum value: PREBUILD_TRIGGER_SCHEDULED = 2;
     */
    SCHEDULED = 2
}
/**
 * Describes the enum gitpod.v1.PrebuildMetadata.PrebuildTrigger.
 */
export declare const PrebuildMetadata_PrebuildTriggerSchema: GenEnum<PrebuildMetadata_PrebuildTrigger>;
/**
 * PrebuildSpec contains the configuration used to create a prebuild
 *
 * @generated from message gitpod.v1.PrebuildSpec
 */
export type PrebuildSpec = Message<"gitpod.v1.PrebuildSpec"> & {
    /**
     * spec_version is incremented each time the spec is updated.
     * Used for optimistic concurrency control.
     *
     * @generated from field: uint64 spec_version = 1;
     */
    specVersion: bigint;
    /**
     * desired_phase is the desired phase of the prebuild.
     * Used to signal cancellation or other state changes.
     * This field is managed by the API and reconciler.
     *
     * @generated from field: gitpod.v1.PrebuildPhase desired_phase = 2;
     */
    desiredPhase: PrebuildPhase;
    /**
     * timeout is the maximum time allowed for the prebuild to complete.
     * Defaults to 60 minutes if not specified.
     * Maximum allowed timeout is 2 hours.
     *
     * @generated from field: google.protobuf.Duration timeout = 3;
     */
    timeout?: Duration;
};
/**
 * Describes the message gitpod.v1.PrebuildSpec.
 * Use `create(PrebuildSpecSchema)` to create a new message.
 */
export declare const PrebuildSpecSchema: GenMessage<PrebuildSpec>;
/**
 * PrebuildStatus contains the current status and progress of a prebuild
 *
 * @generated from message gitpod.v1.PrebuildStatus
 */
export type PrebuildStatus = Message<"gitpod.v1.PrebuildStatus"> & {
    /**
     * phase is the current phase of the prebuild lifecycle
     *
     * @generated from field: gitpod.v1.PrebuildPhase phase = 1;
     */
    phase: PrebuildPhase;
    /**
     * completion_time is when the prebuild completed (successfully or with failure)
     *
     * @generated from field: google.protobuf.Timestamp completion_time = 2;
     */
    completionTime?: Timestamp;
    /**
     * failure_message contains details about why the prebuild failed
     *
     * @generated from field: string failure_message = 3;
     */
    failureMessage: string;
    /**
     * log_url provides access to prebuild logs.
     * During prebuild execution, this references the environment logs.
     * After completion, this may reference archived logs.
     *
     * @generated from field: string log_url = 4;
     */
    logUrl: string;
    /**
     * environment_id is the ID of the environment used to create this prebuild.
     * This field is set when the prebuild environment is created.
     *
     * @generated from field: string environment_id = 5;
     */
    environmentId: string;
    /**
     * status_version is incremented each time the status is updated.
     * Used for optimistic concurrency control.
     *
     * @generated from field: uint64 status_version = 6;
     */
    statusVersion: bigint;
    /**
     * warning_message contains warnings from the prebuild environment that indicate something went wrong
     * but the prebuild could still complete. For example, the devcontainer failed to build but the environment
     * is still usable. These warnings will likely affect any environment started from this prebuild.
     *
     * @generated from field: string warning_message = 7;
     */
    warningMessage: string;
    /**
     * snapshot_completion_percentage is the progress of snapshot creation (0-100).
     * Only populated when phase is SNAPSHOTTING and progress is available from the cloud provider.
     * This value may update infrequently or remain at 0 depending on the provider.
     *
     * @generated from field: int32 snapshot_completion_percentage = 8;
     */
    snapshotCompletionPercentage: number;
    /**
     * snapshot_size_bytes is the size of the snapshot in bytes.
     * Only populated when the snapshot is available (phase is COMPLETED).
     *
     * @generated from field: int64 snapshot_size_bytes = 9;
     */
    snapshotSizeBytes: bigint;
};
/**
 * Describes the message gitpod.v1.PrebuildStatus.
 * Use `create(PrebuildStatusSchema)` to create a new message.
 */
export declare const PrebuildStatusSchema: GenMessage<PrebuildStatus>;
/**
 * @generated from message gitpod.v1.CreateWarmPoolRequest
 */
export type CreateWarmPoolRequest = Message<"gitpod.v1.CreateWarmPoolRequest"> & {
    /**
     * project_id specifies the project this warm pool belongs to.
     * The project must have prebuilds enabled.
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
    /**
     * environment_class_id specifies which environment class to warm.
     * Must be listed in the project's prebuild configuration environment_class_ids.
     *
     * @generated from field: string environment_class_id = 2;
     */
    environmentClassId: string;
    /**
     * desired_size is the number of warm instances to maintain.
     * Deprecated: Use min_size and max_size instead for dynamic scaling.
     *
     * @generated from field: int32 desired_size = 3 [deprecated = true];
     * @deprecated
     */
    desiredSize: number;
    /**
     * min_size is the minimum number of warm instances to maintain.
     * The pool will never scale below this value.
     * Must be >= 0 and <= max_size. Set to 0 to allow full scale-down.
     *
     * @generated from field: optional int32 min_size = 4;
     */
    minSize?: number;
    /**
     * max_size is the maximum number of warm instances to maintain.
     * The pool will never scale above this value.
     * Must be >= min_size and <= 20.
     *
     * @generated from field: optional int32 max_size = 5;
     */
    maxSize?: number;
};
/**
 * Describes the message gitpod.v1.CreateWarmPoolRequest.
 * Use `create(CreateWarmPoolRequestSchema)` to create a new message.
 */
export declare const CreateWarmPoolRequestSchema: GenMessage<CreateWarmPoolRequest>;
/**
 * @generated from message gitpod.v1.CreateWarmPoolResponse
 */
export type CreateWarmPoolResponse = Message<"gitpod.v1.CreateWarmPoolResponse"> & {
    /**
     * @generated from field: gitpod.v1.WarmPool warm_pool = 1;
     */
    warmPool?: WarmPool;
};
/**
 * Describes the message gitpod.v1.CreateWarmPoolResponse.
 * Use `create(CreateWarmPoolResponseSchema)` to create a new message.
 */
export declare const CreateWarmPoolResponseSchema: GenMessage<CreateWarmPoolResponse>;
/**
 * @generated from message gitpod.v1.GetWarmPoolRequest
 */
export type GetWarmPoolRequest = Message<"gitpod.v1.GetWarmPoolRequest"> & {
    /**
     * warm_pool_id specifies the warm pool to retrieve
     *
     * @generated from field: string warm_pool_id = 1;
     */
    warmPoolId: string;
};
/**
 * Describes the message gitpod.v1.GetWarmPoolRequest.
 * Use `create(GetWarmPoolRequestSchema)` to create a new message.
 */
export declare const GetWarmPoolRequestSchema: GenMessage<GetWarmPoolRequest>;
/**
 * @generated from message gitpod.v1.GetWarmPoolResponse
 */
export type GetWarmPoolResponse = Message<"gitpod.v1.GetWarmPoolResponse"> & {
    /**
     * @generated from field: gitpod.v1.WarmPool warm_pool = 1;
     */
    warmPool?: WarmPool;
};
/**
 * Describes the message gitpod.v1.GetWarmPoolResponse.
 * Use `create(GetWarmPoolResponseSchema)` to create a new message.
 */
export declare const GetWarmPoolResponseSchema: GenMessage<GetWarmPoolResponse>;
/**
 * @generated from message gitpod.v1.ListWarmPoolsRequest
 */
export type ListWarmPoolsRequest = Message<"gitpod.v1.ListWarmPoolsRequest"> & {
    /**
     * pagination contains the pagination options for listing warm pools
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * filter contains the filter options for listing warm pools
     *
     * @generated from field: gitpod.v1.ListWarmPoolsRequest.Filter filter = 2;
     */
    filter?: ListWarmPoolsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListWarmPoolsRequest.
 * Use `create(ListWarmPoolsRequestSchema)` to create a new message.
 */
export declare const ListWarmPoolsRequestSchema: GenMessage<ListWarmPoolsRequest>;
/**
 * @generated from message gitpod.v1.ListWarmPoolsRequest.Filter
 */
export type ListWarmPoolsRequest_Filter = Message<"gitpod.v1.ListWarmPoolsRequest.Filter"> & {
    /**
     * project_ids filters warm pools to specific projects
     *
     * @generated from field: repeated string project_ids = 1;
     */
    projectIds: string[];
    /**
     * environment_class_ids filters warm pools to specific environment classes
     *
     * @generated from field: repeated string environment_class_ids = 2;
     */
    environmentClassIds: string[];
};
/**
 * Describes the message gitpod.v1.ListWarmPoolsRequest.Filter.
 * Use `create(ListWarmPoolsRequest_FilterSchema)` to create a new message.
 */
export declare const ListWarmPoolsRequest_FilterSchema: GenMessage<ListWarmPoolsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListWarmPoolsResponse
 */
export type ListWarmPoolsResponse = Message<"gitpod.v1.ListWarmPoolsResponse"> & {
    /**
     * pagination contains the pagination response
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * warm_pools are the warm pools that matched the query
     *
     * @generated from field: repeated gitpod.v1.WarmPool warm_pools = 2;
     */
    warmPools: WarmPool[];
};
/**
 * Describes the message gitpod.v1.ListWarmPoolsResponse.
 * Use `create(ListWarmPoolsResponseSchema)` to create a new message.
 */
export declare const ListWarmPoolsResponseSchema: GenMessage<ListWarmPoolsResponse>;
/**
 * @generated from message gitpod.v1.UpdateWarmPoolRequest
 */
export type UpdateWarmPoolRequest = Message<"gitpod.v1.UpdateWarmPoolRequest"> & {
    /**
     * warm_pool_id specifies the warm pool to update
     *
     * @generated from field: string warm_pool_id = 1;
     */
    warmPoolId: string;
    /**
     * desired_size updates the number of warm instances to maintain.
     * Deprecated: Use min_size and max_size instead for dynamic scaling.
     *
     * @generated from field: optional int32 desired_size = 2 [deprecated = true];
     * @deprecated
     */
    desiredSize?: number;
    /**
     * min_size updates the minimum number of warm instances to maintain.
     * The pool will never scale below this value.
     * Must be >= 0 and <= max_size. Set to 0 to allow full scale-down.
     *
     * @generated from field: optional int32 min_size = 3;
     */
    minSize?: number;
    /**
     * max_size updates the maximum number of warm instances to maintain.
     * The pool will never scale above this value.
     * Must be >= min_size and <= 20.
     *
     * @generated from field: optional int32 max_size = 4;
     */
    maxSize?: number;
};
/**
 * Describes the message gitpod.v1.UpdateWarmPoolRequest.
 * Use `create(UpdateWarmPoolRequestSchema)` to create a new message.
 */
export declare const UpdateWarmPoolRequestSchema: GenMessage<UpdateWarmPoolRequest>;
/**
 * @generated from message gitpod.v1.UpdateWarmPoolResponse
 */
export type UpdateWarmPoolResponse = Message<"gitpod.v1.UpdateWarmPoolResponse"> & {
    /**
     * @generated from field: gitpod.v1.WarmPool warm_pool = 1;
     */
    warmPool?: WarmPool;
};
/**
 * Describes the message gitpod.v1.UpdateWarmPoolResponse.
 * Use `create(UpdateWarmPoolResponseSchema)` to create a new message.
 */
export declare const UpdateWarmPoolResponseSchema: GenMessage<UpdateWarmPoolResponse>;
/**
 * @generated from message gitpod.v1.DeleteWarmPoolRequest
 */
export type DeleteWarmPoolRequest = Message<"gitpod.v1.DeleteWarmPoolRequest"> & {
    /**
     * warm_pool_id specifies the warm pool to delete
     *
     * @generated from field: string warm_pool_id = 1;
     */
    warmPoolId: string;
};
/**
 * Describes the message gitpod.v1.DeleteWarmPoolRequest.
 * Use `create(DeleteWarmPoolRequestSchema)` to create a new message.
 */
export declare const DeleteWarmPoolRequestSchema: GenMessage<DeleteWarmPoolRequest>;
/**
 * @generated from message gitpod.v1.DeleteWarmPoolResponse
 */
export type DeleteWarmPoolResponse = Message<"gitpod.v1.DeleteWarmPoolResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteWarmPoolResponse.
 * Use `create(DeleteWarmPoolResponseSchema)` to create a new message.
 */
export declare const DeleteWarmPoolResponseSchema: GenMessage<DeleteWarmPoolResponse>;
/**
 * WarmPool maintains pre-created environment instances from a prebuild snapshot
 * for near-instant environment startup.
 * One warm pool exists per <project, environment_class> pair.
 *
 * @generated from message gitpod.v1.WarmPool
 */
export type WarmPool = Message<"gitpod.v1.WarmPool"> & {
    /**
     * id is the unique identifier for the warm pool
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * metadata contains organizational and ownership information
     *
     * @generated from field: gitpod.v1.WarmPoolMetadata metadata = 2;
     */
    metadata?: WarmPoolMetadata;
    /**
     * spec contains the desired configuration for this warm pool
     *
     * @generated from field: gitpod.v1.WarmPoolSpec spec = 3;
     */
    spec?: WarmPoolSpec;
    /**
     * status contains the current status reported by the runner
     *
     * @generated from field: gitpod.v1.WarmPoolStatus status = 4;
     */
    status?: WarmPoolStatus;
};
/**
 * Describes the message gitpod.v1.WarmPool.
 * Use `create(WarmPoolSchema)` to create a new message.
 */
export declare const WarmPoolSchema: GenMessage<WarmPool>;
/**
 * WarmPoolMetadata contains metadata about the warm pool
 *
 * @generated from message gitpod.v1.WarmPoolMetadata
 */
export type WarmPoolMetadata = Message<"gitpod.v1.WarmPoolMetadata"> & {
    /**
     * organization_id is the ID of the organization that owns the warm pool
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * project_id is the ID of the project this warm pool belongs to
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * environment_class_id is the environment class whose instances are warmed
     *
     * @generated from field: string environment_class_id = 3;
     */
    environmentClassId: string;
    /**
     * runner_id is the runner that manages this warm pool.
     * Derived from the environment class.
     *
     * @generated from field: string runner_id = 4;
     */
    runnerId: string;
    /**
     * created_at is when the warm pool was created
     *
     * @generated from field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
    /**
     * updated_at is when the warm pool was last updated
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 6;
     */
    updatedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.WarmPoolMetadata.
 * Use `create(WarmPoolMetadataSchema)` to create a new message.
 */
export declare const WarmPoolMetadataSchema: GenMessage<WarmPoolMetadata>;
/**
 * WarmPoolSpec contains the desired configuration for a warm pool
 *
 * @generated from message gitpod.v1.WarmPoolSpec
 */
export type WarmPoolSpec = Message<"gitpod.v1.WarmPoolSpec"> & {
    /**
     * spec_version is incremented each time the spec is updated.
     * Used for optimistic concurrency control.
     *
     * @generated from field: uint64 spec_version = 1;
     */
    specVersion: bigint;
    /**
     * desired_size is the number of warm instances to maintain.
     * Deprecated: Use min_size and max_size instead for dynamic scaling.
     * Existing pools will be migrated to min_size=max_size=desired_size.
     *
     * @generated from field: int32 desired_size = 2 [deprecated = true];
     * @deprecated
     */
    desiredSize: number;
    /**
     * snapshot_id is the prebuild snapshot to warm up in the pool.
     * Updated by the reconciler when a new prebuild completes for this
     * project and environment class. Empty when no completed prebuild exists yet.
     *
     * @generated from field: optional string snapshot_id = 3;
     */
    snapshotId?: string;
    /**
     * desired_phase is the intended lifecycle phase for this warm pool.
     * Managed by the API and reconciler.
     *
     * @generated from field: gitpod.v1.WarmPoolPhase desired_phase = 4;
     */
    desiredPhase: WarmPoolPhase;
    /**
     * min_size is the minimum number of warm instances to maintain.
     * The pool will never scale below this value.
     * Must be >= 0 and <= max_size. Set to 0 to allow full scale-down.
     *
     * @generated from field: optional int32 min_size = 5;
     */
    minSize?: number;
    /**
     * max_size is the maximum number of warm instances to maintain.
     * The pool will never scale above this value.
     * Must be >= min_size and <= 20.
     *
     * @generated from field: optional int32 max_size = 6;
     */
    maxSize?: number;
};
/**
 * Describes the message gitpod.v1.WarmPoolSpec.
 * Use `create(WarmPoolSpecSchema)` to create a new message.
 */
export declare const WarmPoolSpecSchema: GenMessage<WarmPoolSpec>;
/**
 * WarmPoolStatus contains the current status of a warm pool as reported by the runner
 *
 * @generated from message gitpod.v1.WarmPoolStatus
 */
export type WarmPoolStatus = Message<"gitpod.v1.WarmPoolStatus"> & {
    /**
     * phase is the current phase of the warm pool lifecycle
     *
     * @generated from field: gitpod.v1.WarmPoolPhase phase = 1;
     */
    phase: WarmPoolPhase;
    /**
     * failure_message contains details about why the warm pool is degraded or failed
     *
     * @generated from field: string failure_message = 2;
     */
    failureMessage: string;
    /**
     * status_version is incremented each time the status is updated.
     * Used for optimistic concurrency control.
     *
     * @generated from field: uint64 status_version = 3;
     */
    statusVersion: bigint;
    /**
     * running_instances is the number of running warm instances in the pool,
     * ready to be claimed for near-instant environment startup.
     *
     * @generated from field: int32 running_instances = 4;
     */
    runningInstances: number;
    /**
     * stopped_instances is the number of pre-provisioned but stopped instances
     * in the pool. When a running instance is claimed, stopped instances are
     * used to backfill the running pool faster than provisioning from scratch.
     * Stopped instances only incur storage costs, allowing a larger total pool
     * at lower cost than keeping all instances running.
     *
     * @generated from field: int32 stopped_instances = 5;
     */
    stoppedInstances: number;
    /**
     * desired_size is the current target number of instances the autoscaler
     * has decided on. Unlike running_instances, this value is stable and
     * does not fluctuate as instances are claimed and backfilled.
     *
     * @generated from field: int32 desired_size = 6;
     */
    desiredSize: number;
};
/**
 * Describes the message gitpod.v1.WarmPoolStatus.
 * Use `create(WarmPoolStatusSchema)` to create a new message.
 */
export declare const WarmPoolStatusSchema: GenMessage<WarmPoolStatus>;
/**
 * PrebuildPhase represents the lifecycle phase of a prebuild
 *
 * @generated from enum gitpod.v1.PrebuildPhase
 */
export declare enum PrebuildPhase {
    /**
     * PREBUILD_PHASE_UNSPECIFIED is the default value and should not be used
     *
     * @generated from enum value: PREBUILD_PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * PREBUILD_PHASE_PENDING indicates the prebuild has been created but the environment has not yet started
     *
     * @generated from enum value: PREBUILD_PHASE_PENDING = 10;
     */
    PENDING = 10,
    /**
     * PREBUILD_PHASE_STARTING indicates the prebuild is being started
     *
     * @generated from enum value: PREBUILD_PHASE_STARTING = 20;
     */
    STARTING = 20,
    /**
     * PREBUILD_PHASE_RUNNING indicates the prebuild is running and tasks are executing
     *
     * @generated from enum value: PREBUILD_PHASE_RUNNING = 30;
     */
    RUNNING = 30,
    /**
     * PREBUILD_PHASE_STOPPING indicates the prebuild is being stopped after completion
     *
     * @generated from enum value: PREBUILD_PHASE_STOPPING = 40;
     */
    STOPPING = 40,
    /**
     * PREBUILD_PHASE_SNAPSHOTTING indicates the environment has stopped and a snapshot is being created
     *
     * @generated from enum value: PREBUILD_PHASE_SNAPSHOTTING = 50;
     */
    SNAPSHOTTING = 50,
    /**
     * PREBUILD_PHASE_COMPLETED indicates the prebuild completed successfully and the snapshot is available
     *
     * @generated from enum value: PREBUILD_PHASE_COMPLETED = 60;
     */
    COMPLETED = 60,
    /**
     * PREBUILD_PHASE_FAILED indicates the prebuild failed at any stage
     *
     * @generated from enum value: PREBUILD_PHASE_FAILED = 70;
     */
    FAILED = 70,
    /**
     * PREBUILD_PHASE_CANCELLING indicates the prebuild is being cancelled (cleanup in progress)
     *
     * @generated from enum value: PREBUILD_PHASE_CANCELLING = 75;
     */
    CANCELLING = 75,
    /**
     * PREBUILD_PHASE_CANCELLED indicates the prebuild was manually cancelled
     *
     * @generated from enum value: PREBUILD_PHASE_CANCELLED = 80;
     */
    CANCELLED = 80,
    /**
     * PREBUILD_PHASE_DELETING indicates the prebuild is being deleted (cleanup in progress)
     *
     * @generated from enum value: PREBUILD_PHASE_DELETING = 85;
     */
    DELETING = 85,
    /**
     * PREBUILD_PHASE_DELETED indicates the prebuild is being deleted
     *
     * @generated from enum value: PREBUILD_PHASE_DELETED = 90;
     */
    DELETED = 90
}
/**
 * Describes the enum gitpod.v1.PrebuildPhase.
 */
export declare const PrebuildPhaseSchema: GenEnum<PrebuildPhase>;
/**
 * WarmPoolPhase represents the lifecycle phase of a warm pool
 *
 * @generated from enum gitpod.v1.WarmPoolPhase
 */
export declare enum WarmPoolPhase {
    /**
     * WARM_POOL_PHASE_UNSPECIFIED is the default value and should not be used
     *
     * @generated from enum value: WARM_POOL_PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * WARM_POOL_PHASE_PENDING indicates the warm pool has been created but no snapshot is assigned yet
     *
     * @generated from enum value: WARM_POOL_PHASE_PENDING = 10;
     */
    PENDING = 10,
    /**
     * WARM_POOL_PHASE_READY indicates the runner has acknowledged the pool and instances are available
     *
     * @generated from enum value: WARM_POOL_PHASE_READY = 20;
     */
    READY = 20,
    /**
     * WARM_POOL_PHASE_DEGRADED indicates the runner reported a problem with the pool
     *
     * @generated from enum value: WARM_POOL_PHASE_DEGRADED = 30;
     */
    DEGRADED = 30,
    /**
     * WARM_POOL_PHASE_DELETING indicates the warm pool is being deleted and instances are draining
     *
     * @generated from enum value: WARM_POOL_PHASE_DELETING = 40;
     */
    DELETING = 40,
    /**
     * WARM_POOL_PHASE_DELETED indicates the warm pool has been fully cleaned up
     *
     * @generated from enum value: WARM_POOL_PHASE_DELETED = 50;
     */
    DELETED = 50
}
/**
 * Describes the enum gitpod.v1.WarmPoolPhase.
 */
export declare const WarmPoolPhaseSchema: GenEnum<WarmPoolPhase>;
/**
 * PrebuildService manages prebuilds for projects to enable faster environment startup times.
 * Prebuilds create snapshots of environments that can be used to provision new environments quickly.
 *
 * @generated from service gitpod.v1.PrebuildService
 */
export declare const PrebuildService: GenService<{
    /**
     * Creates a prebuild for a project.
     *
     * Use this method to:
     * - Create on-demand prebuilds for faster environment startup
     * - Trigger prebuilds after repository changes
     * - Generate prebuilds for specific environment classes
     *
     * The prebuild process creates an environment, runs the devcontainer prebuild lifecycle,
     * and creates a snapshot for future environment provisioning.
     *
     * ### Examples
     *
     * - Create basic prebuild:
     *
     *   Creates a prebuild for a project using default settings.
     *
     *   ```yaml
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   spec:
     *     timeout: "3600s"  # 60 minutes default
     *   ```
     *
     * - Create prebuild with custom environment class:
     *
     *   Creates a prebuild with a specific environment class and timeout.
     *
     *   ```yaml
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   environmentClassId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   spec:
     *     timeout: "3600s"  # 1 hour
     *   ```
     *
     * @generated from rpc gitpod.v1.PrebuildService.CreatePrebuild
     */
    createPrebuild: {
        methodKind: "unary";
        input: typeof CreatePrebuildRequestSchema;
        output: typeof CreatePrebuildResponseSchema;
    };
    /**
     * @generated from rpc gitpod.v1.PrebuildService.ListPrebuilds
     */
    listPrebuilds: {
        methodKind: "unary";
        input: typeof ListPrebuildsRequestSchema;
        output: typeof ListPrebuildsResponseSchema;
    };
    /**
     * Gets details about a specific prebuild.
     *
     * Use this method to:
     * - Check prebuild status and progress
     * - Access prebuild logs for debugging
     *
     * ### Examples
     *
     * - Get prebuild details:
     *
     *   Retrieves comprehensive information about a prebuild.
     *
     *   ```yaml
     *   prebuildId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   ```
     *
     * @generated from rpc gitpod.v1.PrebuildService.GetPrebuild
     */
    getPrebuild: {
        methodKind: "unary";
        input: typeof GetPrebuildRequestSchema;
        output: typeof GetPrebuildResponseSchema;
    };
    /**
     * Cancels a running prebuild.
     *
     * Use this method to:
     * - Stop prebuilds that are no longer needed
     * - Free up resources for other operations
     *
     * ### Examples
     *
     * - Cancel prebuild:
     *
     *   Stops a running prebuild and cleans up resources.
     *
     *   ```yaml
     *   prebuildId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   ```
     *
     * @generated from rpc gitpod.v1.PrebuildService.CancelPrebuild
     */
    cancelPrebuild: {
        methodKind: "unary";
        input: typeof CancelPrebuildRequestSchema;
        output: typeof CancelPrebuildResponseSchema;
    };
    /**
     * Deletes a prebuild.
     *
     * Prebuilds are automatically deleted after some time. Use this method to
     * manually delete a prebuild before automatic cleanup, for example to remove
     * a prebuild that should no longer be used.
     *
     * Deletion is processed asynchronously. The prebuild will be marked for deletion
     * and removed from the system in the background.
     *
     * ### Examples
     *
     * - Delete prebuild:
     *
     *   Marks a prebuild for deletion and removes it from the system.
     *
     *   ```yaml
     *   prebuildId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   ```
     *
     * @generated from rpc gitpod.v1.PrebuildService.DeletePrebuild
     */
    deletePrebuild: {
        methodKind: "unary";
        input: typeof DeletePrebuildRequestSchema;
        output: typeof DeletePrebuildResponseSchema;
    };
    /**
     * Creates a logs access token for a prebuild.
     *
     * Use this method to:
     * - Stream logs from a running prebuild
     * - Access archived logs from completed prebuilds
     *
     * Generated tokens are valid for one hour.
     *
     * ### Examples
     *
     * - Create prebuild logs token:
     *
     *   Generates a token for accessing prebuild logs.
     *
     *   ```yaml
     *   prebuildId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   ```
     *
     * @generated from rpc gitpod.v1.PrebuildService.CreatePrebuildLogsToken
     */
    createPrebuildLogsToken: {
        methodKind: "unary";
        input: typeof CreatePrebuildLogsTokenRequestSchema;
        output: typeof CreatePrebuildLogsTokenResponseSchema;
    };
    /**
     * Creates a warm pool for a project and environment class.
     *
     * A warm pool maintains pre-created environment instances from a prebuild snapshot
     * so that new environments can start near-instantly.
     *
     * Only one warm pool is allowed per <project, environment_class> pair.
     * The environment class must have prebuilds enabled on the project.
     *
     * The pool's snapshot is managed automatically: when a new prebuild completes
     * for the same project and environment class, the pool's snapshot is updated
     * and the runner rotates instances.
     *
     * ### Examples
     *
     * - Create warm pool:
     *
     *   Creates a warm pool with 2 instances for a project and environment class.
     *
     *   ```yaml
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   environmentClassId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   desiredSize: 2
     *   ```
     *
     * @generated from rpc gitpod.v1.PrebuildService.CreateWarmPool
     */
    createWarmPool: {
        methodKind: "unary";
        input: typeof CreateWarmPoolRequestSchema;
        output: typeof CreateWarmPoolResponseSchema;
    };
    /**
     * Gets details about a specific warm pool.
     *
     * Use this method to:
     * - Check warm pool status and phase
     * - View the current snapshot being warmed
     * - Monitor pool health
     *
     * ### Examples
     *
     * - Get warm pool:
     *
     *   ```yaml
     *   warmPoolId: "a1b2c3d4-5678-9abc-def0-1234567890ab"
     *   ```
     *
     * @generated from rpc gitpod.v1.PrebuildService.GetWarmPool
     */
    getWarmPool: {
        methodKind: "unary";
        input: typeof GetWarmPoolRequestSchema;
        output: typeof GetWarmPoolResponseSchema;
    };
    /**
     * Lists warm pools with optional filtering.
     *
     * Use this method to:
     * - View all warm pools for a project
     * - Monitor warm pool status across environment classes
     *
     * ### Examples
     *
     * - List warm pools for a project:
     *
     *   ```yaml
     *   filter:
     *     projectIds: ["b0e12f6c-4c67-429d-a4a6-d9838b5da047"]
     *   ```
     *
     * @generated from rpc gitpod.v1.PrebuildService.ListWarmPools
     */
    listWarmPools: {
        methodKind: "unary";
        input: typeof ListWarmPoolsRequestSchema;
        output: typeof ListWarmPoolsResponseSchema;
    };
    /**
     * Updates a warm pool's configuration.
     *
     * Use this method to change the desired pool size.
     *
     * ### Examples
     *
     * - Update pool size:
     *
     *   ```yaml
     *   warmPoolId: "a1b2c3d4-5678-9abc-def0-1234567890ab"
     *   desiredSize: 5
     *   ```
     *
     * @generated from rpc gitpod.v1.PrebuildService.UpdateWarmPool
     */
    updateWarmPool: {
        methodKind: "unary";
        input: typeof UpdateWarmPoolRequestSchema;
        output: typeof UpdateWarmPoolResponseSchema;
    };
    /**
     * Deletes a warm pool.
     *
     * Deletion is processed asynchronously. The pool is marked for deletion
     * and the runner drains instances in the background.
     *
     * Warm pools are also automatically deleted when prebuilds are disabled
     * on the project or the environment class is removed from the prebuild
     * configuration.
     *
     * ### Examples
     *
     * - Delete warm pool:
     *
     *   ```yaml
     *   warmPoolId: "a1b2c3d4-5678-9abc-def0-1234567890ab"
     *   ```
     *
     * @generated from rpc gitpod.v1.PrebuildService.DeleteWarmPool
     */
    deleteWarmPool: {
        methodKind: "unary";
        input: typeof DeleteWarmPoolRequestSchema;
        output: typeof DeleteWarmPoolResponseSchema;
    };
}>;
