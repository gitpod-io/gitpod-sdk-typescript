import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { SupportedModel } from "./model_pb";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { RunnerKind } from "./runner_configuration_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/usage.proto.
 */
export declare const file_gitpod_v1_usage: GenFile;
/**
 * DateRange specifies a time period for queries.
 *
 * @generated from message gitpod.v1.DateRange
 */
export type DateRange = Message<"gitpod.v1.DateRange"> & {
    /**
     * Start time of the date range (inclusive).
     *
     * @generated from field: google.protobuf.Timestamp start_time = 1;
     */
    startTime?: Timestamp;
    /**
     * End time of the date range (exclusive).
     *
     * @generated from field: google.protobuf.Timestamp end_time = 2;
     */
    endTime?: Timestamp;
};
/**
 * Describes the message gitpod.v1.DateRange.
 * Use `create(DateRangeSchema)` to create a new message.
 */
export declare const DateRangeSchema: GenMessage<DateRange>;
/**
 * @generated from message gitpod.v1.TimeSeriesPoint
 */
export type TimeSeriesPoint = Message<"gitpod.v1.TimeSeriesPoint"> & {
    /**
     * Timestamp for this data point.
     *
     * @generated from field: google.protobuf.Timestamp time = 1;
     */
    time?: Timestamp;
    /**
     * The numerical value for this data point.
     *
     * @generated from field: int32 value = 2;
     */
    value: number;
};
/**
 * Describes the message gitpod.v1.TimeSeriesPoint.
 * Use `create(TimeSeriesPointSchema)` to create a new message.
 */
export declare const TimeSeriesPointSchema: GenMessage<TimeSeriesPoint>;
/**
 * EnvironmentUsageRecord represents a record of an environment from start to stop.
 *
 * @generated from message gitpod.v1.EnvironmentUsageRecord
 */
export type EnvironmentUsageRecord = Message<"gitpod.v1.EnvironmentUsageRecord"> & {
    /**
     * Environment usage record ID.
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Environment ID associated with the record.
     *
     * @generated from field: string environment_id = 2;
     */
    environmentId: string;
    /**
     * User ID is the ID of the user who created the environment associated with the record.
     *
     * @generated from field: string user_id = 3;
     */
    userId: string;
    /**
     * Project ID associated with the environment (if available).
     *
     * @generated from field: string project_id = 4;
     */
    projectId: string;
    /**
     * Runner ID associated with the environment.
     *
     * @generated from field: string runner_id = 5;
     */
    runnerId: string;
    /**
     * Environment class ID associated with the record.
     *
     * @generated from field: string environment_class_id = 6;
     */
    environmentClassId: string;
    /**
     * Time when the environment was created.
     *
     * @generated from field: google.protobuf.Timestamp created_at = 7;
     */
    createdAt?: Timestamp;
    /**
     * Time when the environment was stopped.
     *
     * @generated from field: google.protobuf.Timestamp stopped_at = 8;
     */
    stoppedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.EnvironmentUsageRecord.
 * Use `create(EnvironmentUsageRecordSchema)` to create a new message.
 */
export declare const EnvironmentUsageRecordSchema: GenMessage<EnvironmentUsageRecord>;
/**
 * @generated from message gitpod.v1.GetActiveUsersCountRequest
 */
export type GetActiveUsersCountRequest = Message<"gitpod.v1.GetActiveUsersCountRequest"> & {
    /**
     * Date range to query metrics within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 1;
     */
    dateRange?: DateRange;
    /**
     * Optional project ID to filter metrics by.
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * Optional team ID to scope results to members of a specific team.
     *
     * @generated from field: string team_id = 3;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetActiveUsersCountRequest.
 * Use `create(GetActiveUsersCountRequestSchema)` to create a new message.
 */
export declare const GetActiveUsersCountRequestSchema: GenMessage<GetActiveUsersCountRequest>;
/**
 * @generated from message gitpod.v1.GetActiveUsersCountResponse
 */
export type GetActiveUsersCountResponse = Message<"gitpod.v1.GetActiveUsersCountResponse"> & {
    /**
     * Count of active users in the date range.
     *
     * @generated from field: int64 count = 1;
     */
    count: bigint;
    /**
     * Fractional change in active users vs previous period.
     * Computed as (current - previous) / previous.
     *
     * @generated from field: double trend = 2;
     */
    trend: number;
};
/**
 * Describes the message gitpod.v1.GetActiveUsersCountResponse.
 * Use `create(GetActiveUsersCountResponseSchema)` to create a new message.
 */
export declare const GetActiveUsersCountResponseSchema: GenMessage<GetActiveUsersCountResponse>;
/**
 * @generated from message gitpod.v1.GetTopActiveUsersRequest
 */
export type GetTopActiveUsersRequest = Message<"gitpod.v1.GetTopActiveUsersRequest"> & {
    /**
     * Optional project ID to filter metrics by.
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
    /**
     * Date range to query metrics within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 2;
     */
    dateRange?: DateRange;
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 3;
     */
    pagination?: PaginationRequest;
    /**
     * Optional team ID to scope results to members of a specific team.
     *
     * @generated from field: string team_id = 4;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetTopActiveUsersRequest.
 * Use `create(GetTopActiveUsersRequestSchema)` to create a new message.
 */
export declare const GetTopActiveUsersRequestSchema: GenMessage<GetTopActiveUsersRequest>;
/**
 * @generated from message gitpod.v1.GetTopActiveUsersResponse
 */
export type GetTopActiveUsersResponse = Message<"gitpod.v1.GetTopActiveUsersResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * List of users sorted by total runtime (descending).
     *
     * @generated from field: repeated gitpod.v1.GetTopActiveUsersResponse.UserRuntimeInfo users = 2;
     */
    users: GetTopActiveUsersResponse_UserRuntimeInfo[];
};
/**
 * Describes the message gitpod.v1.GetTopActiveUsersResponse.
 * Use `create(GetTopActiveUsersResponseSchema)` to create a new message.
 */
export declare const GetTopActiveUsersResponseSchema: GenMessage<GetTopActiveUsersResponse>;
/**
 * @generated from message gitpod.v1.GetTopActiveUsersResponse.UserRuntimeInfo
 */
export type GetTopActiveUsersResponse_UserRuntimeInfo = Message<"gitpod.v1.GetTopActiveUsersResponse.UserRuntimeInfo"> & {
    /**
     * User ID.
     *
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * User name if available.
     *
     * @generated from field: string user_name = 2;
     */
    userName: string;
    /**
     * User avatar if available.
     *
     * @generated from field: string user_avatar_url = 3;
     */
    userAvatarUrl: string;
    /**
     * Total environment runtime in seconds.
     *
     * @generated from field: double total_runtime_seconds = 4;
     */
    totalRuntimeSeconds: number;
};
/**
 * Describes the message gitpod.v1.GetTopActiveUsersResponse.UserRuntimeInfo.
 * Use `create(GetTopActiveUsersResponse_UserRuntimeInfoSchema)` to create a new message.
 */
export declare const GetTopActiveUsersResponse_UserRuntimeInfoSchema: GenMessage<GetTopActiveUsersResponse_UserRuntimeInfo>;
/**
 * @generated from message gitpod.v1.GetActiveUsersTimeSeriesRequest
 */
export type GetActiveUsersTimeSeriesRequest = Message<"gitpod.v1.GetActiveUsersTimeSeriesRequest"> & {
    /**
     * Optional project ID to filter metrics by.
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
    /**
     * Date range to query metrics within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 2;
     */
    dateRange?: DateRange;
    /**
     * Time resolution for the series data.
     *
     * @generated from field: gitpod.v1.Resolution resolution = 3;
     */
    resolution: Resolution;
    /**
     * Optional team ID to scope results to members of a specific team.
     *
     * @generated from field: string team_id = 4;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetActiveUsersTimeSeriesRequest.
 * Use `create(GetActiveUsersTimeSeriesRequestSchema)` to create a new message.
 */
export declare const GetActiveUsersTimeSeriesRequestSchema: GenMessage<GetActiveUsersTimeSeriesRequest>;
/**
 * @generated from message gitpod.v1.GetActiveUsersTimeSeriesResponse
 */
export type GetActiveUsersTimeSeriesResponse = Message<"gitpod.v1.GetActiveUsersTimeSeriesResponse"> & {
    /**
     * Weekly active users time series [WAU]
     *
     * @generated from field: repeated gitpod.v1.TimeSeriesPoint weekly_active_users = 1;
     */
    weeklyActiveUsers: TimeSeriesPoint[];
    /**
     * Weekly active returning users time series [WAU2+]
     *
     * @generated from field: repeated gitpod.v1.TimeSeriesPoint weekly_active_returning_users = 2;
     */
    weeklyActiveReturningUsers: TimeSeriesPoint[];
};
/**
 * Describes the message gitpod.v1.GetActiveUsersTimeSeriesResponse.
 * Use `create(GetActiveUsersTimeSeriesResponseSchema)` to create a new message.
 */
export declare const GetActiveUsersTimeSeriesResponseSchema: GenMessage<GetActiveUsersTimeSeriesResponse>;
/**
 * @generated from message gitpod.v1.ListEnvironmentUsageRecordsRequest
 */
export type ListEnvironmentUsageRecordsRequest = Message<"gitpod.v1.ListEnvironmentUsageRecordsRequest"> & {
    /**
     * Pagination options.
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * Filter options.
     *
     * @generated from field: gitpod.v1.ListEnvironmentUsageRecordsRequest.Filter filter = 2;
     */
    filter?: ListEnvironmentUsageRecordsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListEnvironmentUsageRecordsRequest.
 * Use `create(ListEnvironmentUsageRecordsRequestSchema)` to create a new message.
 */
export declare const ListEnvironmentUsageRecordsRequestSchema: GenMessage<ListEnvironmentUsageRecordsRequest>;
/**
 * @generated from message gitpod.v1.ListEnvironmentUsageRecordsRequest.Filter
 */
export type ListEnvironmentUsageRecordsRequest_Filter = Message<"gitpod.v1.ListEnvironmentUsageRecordsRequest.Filter"> & {
    /**
     * Optional project ID to filter runtime records by.
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
    /**
     * Date range to query runtime records within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 2;
     */
    dateRange?: DateRange;
};
/**
 * Describes the message gitpod.v1.ListEnvironmentUsageRecordsRequest.Filter.
 * Use `create(ListEnvironmentUsageRecordsRequest_FilterSchema)` to create a new message.
 */
export declare const ListEnvironmentUsageRecordsRequest_FilterSchema: GenMessage<ListEnvironmentUsageRecordsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListEnvironmentUsageRecordsResponse
 */
export type ListEnvironmentUsageRecordsResponse = Message<"gitpod.v1.ListEnvironmentUsageRecordsResponse"> & {
    /**
     * Pagination response.
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * List of environment runtime records.
     *
     * @generated from field: repeated gitpod.v1.EnvironmentUsageRecord records = 2;
     */
    records: EnvironmentUsageRecord[];
};
/**
 * Describes the message gitpod.v1.ListEnvironmentUsageRecordsResponse.
 * Use `create(ListEnvironmentUsageRecordsResponseSchema)` to create a new message.
 */
export declare const ListEnvironmentUsageRecordsResponseSchema: GenMessage<ListEnvironmentUsageRecordsResponse>;
/**
 * @generated from message gitpod.v1.GetActiveEnvironmentsCountRequest
 */
export type GetActiveEnvironmentsCountRequest = Message<"gitpod.v1.GetActiveEnvironmentsCountRequest"> & {
    /**
     * Date range to query metrics within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 1;
     */
    dateRange?: DateRange;
    /**
     * Optional project ID to filter metrics by.
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * Optional team ID to scope results to members of a specific team.
     *
     * @generated from field: string team_id = 3;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetActiveEnvironmentsCountRequest.
 * Use `create(GetActiveEnvironmentsCountRequestSchema)` to create a new message.
 */
export declare const GetActiveEnvironmentsCountRequestSchema: GenMessage<GetActiveEnvironmentsCountRequest>;
/**
 * @generated from message gitpod.v1.GetActiveEnvironmentsCountResponse
 */
export type GetActiveEnvironmentsCountResponse = Message<"gitpod.v1.GetActiveEnvironmentsCountResponse"> & {
    /**
     * Count of active environments in the date range.
     *
     * @generated from field: int64 count = 1;
     */
    count: bigint;
    /**
     * Fractional change in active environments vs previous period.
     * Computed as (current - previous) / previous.
     *
     * @generated from field: double trend = 2;
     */
    trend: number;
};
/**
 * Describes the message gitpod.v1.GetActiveEnvironmentsCountResponse.
 * Use `create(GetActiveEnvironmentsCountResponseSchema)` to create a new message.
 */
export declare const GetActiveEnvironmentsCountResponseSchema: GenMessage<GetActiveEnvironmentsCountResponse>;
/**
 * @generated from message gitpod.v1.GetActiveEnvironmentsTimeSeriesRequest
 */
export type GetActiveEnvironmentsTimeSeriesRequest = Message<"gitpod.v1.GetActiveEnvironmentsTimeSeriesRequest"> & {
    /**
     * Date range to query metrics within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 1;
     */
    dateRange?: DateRange;
    /**
     * Optional project ID to filter metrics by.
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * Time resolution for the series data.
     *
     * @generated from field: gitpod.v1.Resolution resolution = 3;
     */
    resolution: Resolution;
    /**
     * Optional team ID to scope results to members of a specific team.
     *
     * @generated from field: string team_id = 4;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetActiveEnvironmentsTimeSeriesRequest.
 * Use `create(GetActiveEnvironmentsTimeSeriesRequestSchema)` to create a new message.
 */
export declare const GetActiveEnvironmentsTimeSeriesRequestSchema: GenMessage<GetActiveEnvironmentsTimeSeriesRequest>;
/**
 * @generated from message gitpod.v1.GetActiveEnvironmentsTimeSeriesResponse
 */
export type GetActiveEnvironmentsTimeSeriesResponse = Message<"gitpod.v1.GetActiveEnvironmentsTimeSeriesResponse"> & {
    /**
     * Active environments time series
     *
     * @generated from field: repeated gitpod.v1.TimeSeriesPoint active_environments = 1;
     */
    activeEnvironments: TimeSeriesPoint[];
};
/**
 * Describes the message gitpod.v1.GetActiveEnvironmentsTimeSeriesResponse.
 * Use `create(GetActiveEnvironmentsTimeSeriesResponseSchema)` to create a new message.
 */
export declare const GetActiveEnvironmentsTimeSeriesResponseSchema: GenMessage<GetActiveEnvironmentsTimeSeriesResponse>;
/**
 * @generated from message gitpod.v1.GetEnvironmentRuntimeRequest
 */
export type GetEnvironmentRuntimeRequest = Message<"gitpod.v1.GetEnvironmentRuntimeRequest"> & {
    /**
     * Date range to query metrics within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 1;
     */
    dateRange?: DateRange;
    /**
     * Optional project ID to filter metrics by.
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * Optional team ID to scope results to members of a specific team.
     *
     * @generated from field: string team_id = 3;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetEnvironmentRuntimeRequest.
 * Use `create(GetEnvironmentRuntimeRequestSchema)` to create a new message.
 */
export declare const GetEnvironmentRuntimeRequestSchema: GenMessage<GetEnvironmentRuntimeRequest>;
/**
 * @generated from message gitpod.v1.GetEnvironmentRuntimeResponse
 */
export type GetEnvironmentRuntimeResponse = Message<"gitpod.v1.GetEnvironmentRuntimeResponse"> & {
    /**
     * Total runtime in seconds.
     *
     * @generated from field: int64 total_runtime_seconds = 1;
     */
    totalRuntimeSeconds: bigint;
    /**
     * Fractional change in total runtime vs previous period.
     * Computed as (current - previous) / previous.
     *
     * @generated from field: double trend = 2;
     */
    trend: number;
};
/**
 * Describes the message gitpod.v1.GetEnvironmentRuntimeResponse.
 * Use `create(GetEnvironmentRuntimeResponseSchema)` to create a new message.
 */
export declare const GetEnvironmentRuntimeResponseSchema: GenMessage<GetEnvironmentRuntimeResponse>;
/**
 * @generated from message gitpod.v1.GetEnvironmentRuntimeTimeSeriesRequest
 */
export type GetEnvironmentRuntimeTimeSeriesRequest = Message<"gitpod.v1.GetEnvironmentRuntimeTimeSeriesRequest"> & {
    /**
     * Date range to query metrics within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 1;
     */
    dateRange?: DateRange;
    /**
     * Optional project ID to filter metrics by.
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * Time resolution for the series data.
     *
     * @generated from field: gitpod.v1.Resolution resolution = 3;
     */
    resolution: Resolution;
    /**
     * Optional team ID to scope results to members of a specific team.
     *
     * @generated from field: string team_id = 4;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetEnvironmentRuntimeTimeSeriesRequest.
 * Use `create(GetEnvironmentRuntimeTimeSeriesRequestSchema)` to create a new message.
 */
export declare const GetEnvironmentRuntimeTimeSeriesRequestSchema: GenMessage<GetEnvironmentRuntimeTimeSeriesRequest>;
/**
 * @generated from message gitpod.v1.GetEnvironmentRuntimeTimeSeriesResponse
 */
export type GetEnvironmentRuntimeTimeSeriesResponse = Message<"gitpod.v1.GetEnvironmentRuntimeTimeSeriesResponse"> & {
    /**
     * Total runtime time series
     *
     * @generated from field: repeated gitpod.v1.TimeSeriesPoint total_runtime = 1;
     */
    totalRuntime: TimeSeriesPoint[];
};
/**
 * Describes the message gitpod.v1.GetEnvironmentRuntimeTimeSeriesResponse.
 * Use `create(GetEnvironmentRuntimeTimeSeriesResponseSchema)` to create a new message.
 */
export declare const GetEnvironmentRuntimeTimeSeriesResponseSchema: GenMessage<GetEnvironmentRuntimeTimeSeriesResponse>;
/**
 * @generated from message gitpod.v1.GetTopProjectsRequest
 */
export type GetTopProjectsRequest = Message<"gitpod.v1.GetTopProjectsRequest"> & {
    /**
     * Pagination options.
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * Date range to query metrics within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 2;
     */
    dateRange?: DateRange;
    /**
     * Optional team ID to scope results to members of a specific team.
     *
     * @generated from field: string team_id = 3;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetTopProjectsRequest.
 * Use `create(GetTopProjectsRequestSchema)` to create a new message.
 */
export declare const GetTopProjectsRequestSchema: GenMessage<GetTopProjectsRequest>;
/**
 * @generated from message gitpod.v1.GetTopProjectsResponse
 */
export type GetTopProjectsResponse = Message<"gitpod.v1.GetTopProjectsResponse"> & {
    /**
     * List of projects sorted by total runtime (descending).
     *
     * @generated from field: repeated gitpod.v1.GetTopProjectsResponse.ProjectRuntimeInfo projects = 1;
     */
    projects: GetTopProjectsResponse_ProjectRuntimeInfo[];
    /**
     * Pagination response.
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 2;
     */
    pagination?: PaginationResponse;
};
/**
 * Describes the message gitpod.v1.GetTopProjectsResponse.
 * Use `create(GetTopProjectsResponseSchema)` to create a new message.
 */
export declare const GetTopProjectsResponseSchema: GenMessage<GetTopProjectsResponse>;
/**
 * @generated from message gitpod.v1.GetTopProjectsResponse.ProjectRuntimeInfo
 */
export type GetTopProjectsResponse_ProjectRuntimeInfo = Message<"gitpod.v1.GetTopProjectsResponse.ProjectRuntimeInfo"> & {
    /**
     * Project ID.
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
    /**
     * Project name if available.
     *
     * @generated from field: string project_name = 2;
     */
    projectName: string;
    /**
     * Total runtime in seconds.
     *
     * @generated from field: int64 total_runtime_seconds = 3;
     */
    totalRuntimeSeconds: bigint;
};
/**
 * Describes the message gitpod.v1.GetTopProjectsResponse.ProjectRuntimeInfo.
 * Use `create(GetTopProjectsResponse_ProjectRuntimeInfoSchema)` to create a new message.
 */
export declare const GetTopProjectsResponse_ProjectRuntimeInfoSchema: GenMessage<GetTopProjectsResponse_ProjectRuntimeInfo>;
/**
 * @generated from message gitpod.v1.GetTopEnvironmentClassesRequest
 */
export type GetTopEnvironmentClassesRequest = Message<"gitpod.v1.GetTopEnvironmentClassesRequest"> & {
    /**
     * Pagination options.
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * Date range to query metrics within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 2;
     */
    dateRange?: DateRange;
    /**
     * Optional project ID to filter metrics by.
     *
     * @generated from field: string project_id = 3;
     */
    projectId: string;
    /**
     * Optional team ID to scope results to members of a specific team.
     *
     * @generated from field: string team_id = 4;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetTopEnvironmentClassesRequest.
 * Use `create(GetTopEnvironmentClassesRequestSchema)` to create a new message.
 */
export declare const GetTopEnvironmentClassesRequestSchema: GenMessage<GetTopEnvironmentClassesRequest>;
/**
 * @generated from message gitpod.v1.GetTopEnvironmentClassesResponse
 */
export type GetTopEnvironmentClassesResponse = Message<"gitpod.v1.GetTopEnvironmentClassesResponse"> & {
    /**
     * List of environment classes sorted by total runtime (descending). All environment classes belonging to local runners are grouped together.
     *
     * @generated from field: repeated gitpod.v1.GetTopEnvironmentClassesResponse.EnvironmentClassRuntimeInfo environment_classes = 1;
     */
    environmentClasses: GetTopEnvironmentClassesResponse_EnvironmentClassRuntimeInfo[];
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 2;
     */
    pagination?: PaginationResponse;
};
/**
 * Describes the message gitpod.v1.GetTopEnvironmentClassesResponse.
 * Use `create(GetTopEnvironmentClassesResponseSchema)` to create a new message.
 */
export declare const GetTopEnvironmentClassesResponseSchema: GenMessage<GetTopEnvironmentClassesResponse>;
/**
 * @generated from message gitpod.v1.GetTopEnvironmentClassesResponse.EnvironmentClassRuntimeInfo
 */
export type GetTopEnvironmentClassesResponse_EnvironmentClassRuntimeInfo = Message<"gitpod.v1.GetTopEnvironmentClassesResponse.EnvironmentClassRuntimeInfo"> & {
    /**
     * Environment class ID. Not set for local runners.
     *
     * @generated from field: string environment_class_id = 1;
     */
    environmentClassId: string;
    /**
     * Type of runner that created the environment class.
     *
     * @generated from field: gitpod.v1.RunnerKind runner_kind = 2;
     */
    runnerKind: RunnerKind;
    /**
     * Name of the runner that created the environment class.
     *
     * @generated from field: string runner_name = 3;
     */
    runnerName: string;
    /**
     * Environment class name if available.
     *
     * @generated from field: string environment_class_name = 4;
     */
    environmentClassName: string;
    /**
     * Total runtime in seconds.
     *
     * @generated from field: int64 total_runtime_seconds = 5;
     */
    totalRuntimeSeconds: bigint;
};
/**
 * Describes the message gitpod.v1.GetTopEnvironmentClassesResponse.EnvironmentClassRuntimeInfo.
 * Use `create(GetTopEnvironmentClassesResponse_EnvironmentClassRuntimeInfoSchema)` to create a new message.
 */
export declare const GetTopEnvironmentClassesResponse_EnvironmentClassRuntimeInfoSchema: GenMessage<GetTopEnvironmentClassesResponse_EnvironmentClassRuntimeInfo>;
/**
 * @generated from message gitpod.v1.GetAdoptionUsageSummaryRequest
 */
export type GetAdoptionUsageSummaryRequest = Message<"gitpod.v1.GetAdoptionUsageSummaryRequest"> & {
    /**
     * Date range to query metrics within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 1;
     */
    dateRange?: DateRange;
    /**
     * Optional project ID to filter metrics by.
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * Optional user ID to filter metrics for a specific user (personal insights view).
     *
     * @generated from field: string user_id = 3;
     */
    userId: string;
    /**
     * Optional team ID to scope results to members of a specific team.
     *
     * @generated from field: string team_id = 4;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetAdoptionUsageSummaryRequest.
 * Use `create(GetAdoptionUsageSummaryRequestSchema)` to create a new message.
 */
export declare const GetAdoptionUsageSummaryRequestSchema: GenMessage<GetAdoptionUsageSummaryRequest>;
/**
 * @generated from message gitpod.v1.GetAdoptionUsageSummaryResponse
 */
export type GetAdoptionUsageSummaryResponse = Message<"gitpod.v1.GetAdoptionUsageSummaryResponse"> & {
    /**
     * Average environment runtime in seconds per active user.
     *
     * @generated from field: double env_runtime_per_user_seconds = 1;
     */
    envRuntimePerUserSeconds: number;
    /**
     * Fractional change in env_runtime_per_user_seconds vs previous period.
     * Computed as (current - previous) / previous.
     *
     * @generated from field: double env_runtime_per_user_trend = 2;
     */
    envRuntimePerUserTrend: number;
    /**
     * Count of active users in the date range.
     *
     * @generated from field: int64 active_users_count = 3;
     */
    activeUsersCount: bigint;
    /**
     * Fractional change in active_users_count vs previous period.
     * Computed as (current - previous) / previous.
     *
     * @generated from field: double active_users_trend = 4;
     */
    activeUsersTrend: number;
    /**
     * Count of power users in the date range.
     *
     * @generated from field: int64 power_users_count = 5;
     */
    powerUsersCount: bigint;
    /**
     * Fractional change in power_users_count vs previous period.
     * Computed as (current - previous) / previous.
     *
     * @generated from field: double power_users_trend = 6;
     */
    powerUsersTrend: number;
    /**
     * Threshold in seconds used to determine power users.
     * Displayed to users so they understand the definition.
     *
     * @generated from field: int64 power_users_threshold_seconds = 7;
     */
    powerUsersThresholdSeconds: bigint;
    /**
     * Count of environment sessions (total starts) in the date range.
     *
     * @generated from field: int64 sessions_count = 8;
     */
    sessionsCount: bigint;
    /**
     * Fractional change in sessions_count vs previous period.
     * Computed as (current - previous) / previous.
     *
     * @generated from field: double sessions_trend = 9;
     */
    sessionsTrend: number;
    /**
     * Sparkline data for the card's trend line (typically ~4 weekly points).
     *
     * @generated from field: repeated gitpod.v1.TimeSeriesPoint sparkline = 10;
     */
    sparkline: TimeSeriesPoint[];
};
/**
 * Describes the message gitpod.v1.GetAdoptionUsageSummaryResponse.
 * Use `create(GetAdoptionUsageSummaryResponseSchema)` to create a new message.
 */
export declare const GetAdoptionUsageSummaryResponseSchema: GenMessage<GetAdoptionUsageSummaryResponse>;
/**
 * @generated from message gitpod.v1.GetEnvironmentSessionsTimeSeriesRequest
 */
export type GetEnvironmentSessionsTimeSeriesRequest = Message<"gitpod.v1.GetEnvironmentSessionsTimeSeriesRequest"> & {
    /**
     * Date range to query metrics within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 1;
     */
    dateRange?: DateRange;
    /**
     * Optional project ID to filter metrics by.
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * Time resolution for the series data.
     *
     * @generated from field: gitpod.v1.Resolution resolution = 3;
     */
    resolution: Resolution;
    /**
     * Optional team ID to scope results to members of a specific team.
     *
     * @generated from field: string team_id = 4;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetEnvironmentSessionsTimeSeriesRequest.
 * Use `create(GetEnvironmentSessionsTimeSeriesRequestSchema)` to create a new message.
 */
export declare const GetEnvironmentSessionsTimeSeriesRequestSchema: GenMessage<GetEnvironmentSessionsTimeSeriesRequest>;
/**
 * @generated from message gitpod.v1.GetEnvironmentSessionsTimeSeriesResponse
 */
export type GetEnvironmentSessionsTimeSeriesResponse = Message<"gitpod.v1.GetEnvironmentSessionsTimeSeriesResponse"> & {
    /**
     * Environment sessions time series. Counts total environment starts per time bucket,
     * as opposed to GetActiveEnvironmentsTimeSeries which counts distinct environment IDs.
     *
     * @generated from field: repeated gitpod.v1.TimeSeriesPoint sessions = 1;
     */
    sessions: TimeSeriesPoint[];
};
/**
 * Describes the message gitpod.v1.GetEnvironmentSessionsTimeSeriesResponse.
 * Use `create(GetEnvironmentSessionsTimeSeriesResponseSchema)` to create a new message.
 */
export declare const GetEnvironmentSessionsTimeSeriesResponseSchema: GenMessage<GetEnvironmentSessionsTimeSeriesResponse>;
/**
 * ToolBreakdown contains stats for a single AI tool (or human).
 *
 * @generated from message gitpod.v1.ToolBreakdown
 */
export type ToolBreakdown = Message<"gitpod.v1.ToolBreakdown"> & {
    /**
     * The tool these stats are for.
     *
     * @generated from field: gitpod.v1.CoAuthorTool tool = 1;
     */
    tool: CoAuthorTool;
    /**
     * Number of commits attributed to this tool.
     *
     * @generated from field: int64 commits = 2;
     */
    commits: bigint;
    /**
     * Lines added by this tool.
     *
     * @generated from field: int64 lines_added = 3;
     */
    linesAdded: bigint;
    /**
     * Lines removed by this tool.
     *
     * @generated from field: int64 lines_removed = 4;
     */
    linesRemoved: bigint;
    /**
     * Distinct authors who used this tool.
     *
     * @generated from field: int64 distinct_authors = 5;
     */
    distinctAuthors: bigint;
};
/**
 * Describes the message gitpod.v1.ToolBreakdown.
 * Use `create(ToolBreakdownSchema)` to create a new message.
 */
export declare const ToolBreakdownSchema: GenMessage<ToolBreakdown>;
/**
 * CoAuthorSummary contains aggregate totals for a date range.
 *
 * @generated from message gitpod.v1.CoAuthorSummary
 */
export type CoAuthorSummary = Message<"gitpod.v1.CoAuthorSummary"> & {
    /**
     * Total number of commits in the date range.
     *
     * @generated from field: int64 total_commits = 1;
     */
    totalCommits: bigint;
    /**
     * Total lines added across all commits.
     *
     * @generated from field: int64 total_lines_added = 2;
     */
    totalLinesAdded: bigint;
    /**
     * Total lines removed across all commits.
     *
     * @generated from field: int64 total_lines_removed = 3;
     */
    totalLinesRemoved: bigint;
    /**
     * Number of distinct authors (by author_hash).
     *
     * @generated from field: int64 distinct_authors = 4;
     */
    distinctAuthors: bigint;
    /**
     * Per-tool breakdown of contribution stats.
     *
     * @generated from field: repeated gitpod.v1.ToolBreakdown by_tool = 5;
     */
    byTool: ToolBreakdown[];
    /**
     * Fractional change in total_commits compared to the previous period of equal
     * length. Computed as (current - previous) / previous. Zero when there is no
     * previous data.
     *
     * @generated from field: double total_commits_trend = 6;
     */
    totalCommitsTrend: number;
    /**
     * Fractional change in total_lines_added compared to the previous period.
     *
     * @generated from field: double total_lines_added_trend = 7;
     */
    totalLinesAddedTrend: number;
    /**
     * Fractional change in total_lines_removed compared to the previous period.
     *
     * @generated from field: double total_lines_removed_trend = 8;
     */
    totalLinesRemovedTrend: number;
    /**
     * Fractional change in distinct_authors compared to the previous period.
     *
     * @generated from field: double distinct_authors_trend = 9;
     */
    distinctAuthorsTrend: number;
};
/**
 * Describes the message gitpod.v1.CoAuthorSummary.
 * Use `create(CoAuthorSummarySchema)` to create a new message.
 */
export declare const CoAuthorSummarySchema: GenMessage<CoAuthorSummary>;
/**
 * CoAuthorTimeBucket contains stats for a single time period.
 *
 * @generated from message gitpod.v1.CoAuthorTimeBucket
 */
export type CoAuthorTimeBucket = Message<"gitpod.v1.CoAuthorTimeBucket"> & {
    /**
     * Start of this time bucket.
     *
     * @generated from field: google.protobuf.Timestamp start_time = 1;
     */
    startTime?: Timestamp;
    /**
     * Per-tool breakdown for this bucket.
     *
     * @generated from field: repeated gitpod.v1.ToolBreakdown by_tool = 2;
     */
    byTool: ToolBreakdown[];
    /**
     * Total lines added in this bucket (across all tools).
     *
     * @generated from field: int64 total_lines_added = 3;
     */
    totalLinesAdded: bigint;
    /**
     * Total lines removed in this bucket (across all tools).
     *
     * @generated from field: int64 total_lines_removed = 4;
     */
    totalLinesRemoved: bigint;
    /**
     * Ratio of AI-assisted lines added to total lines added (0.0–1.0).
     *
     * @generated from field: double ai_ratio = 5;
     */
    aiRatio: number;
    /**
     * Total number of commits in this bucket (across all tools).
     *
     * @generated from field: int64 total_commits = 6;
     */
    totalCommits: bigint;
    /**
     * Number of distinct authors (by author_hash) in this bucket.
     *
     * @generated from field: int64 distinct_authors = 7;
     */
    distinctAuthors: bigint;
};
/**
 * Describes the message gitpod.v1.CoAuthorTimeBucket.
 * Use `create(CoAuthorTimeBucketSchema)` to create a new message.
 */
export declare const CoAuthorTimeBucketSchema: GenMessage<CoAuthorTimeBucket>;
/**
 * AgentTraceSummary contains aggregate totals for a date range.
 *
 * @generated from message gitpod.v1.AgentTraceSummary
 */
export type AgentTraceSummary = Message<"gitpod.v1.AgentTraceSummary"> & {
    /**
     * Total number of agent trace sessions in the date range.
     *
     * @generated from field: int64 total_sessions = 1;
     */
    totalSessions: bigint;
    /**
     * Total lines added across all sessions.
     *
     * @generated from field: int64 total_lines_added = 2;
     */
    totalLinesAdded: bigint;
    /**
     * Total lines removed across all sessions.
     *
     * @generated from field: int64 total_lines_removed = 3;
     */
    totalLinesRemoved: bigint;
    /**
     * Per-model breakdown of session stats.
     *
     * @generated from field: repeated gitpod.v1.AgentTraceModelBreakdown by_model = 4;
     */
    byModel: AgentTraceModelBreakdown[];
    /**
     * Fractional change in total_sessions compared to the previous period of
     * equal length. Computed as (current - previous) / previous. Zero when there
     * is no previous data.
     *
     * @generated from field: double total_sessions_trend = 5;
     */
    totalSessionsTrend: number;
    /**
     * Fractional change in total_lines_added compared to the previous period.
     *
     * @generated from field: double total_lines_added_trend = 6;
     */
    totalLinesAddedTrend: number;
    /**
     * Fractional change in total_lines_removed compared to the previous period.
     *
     * @generated from field: double total_lines_removed_trend = 7;
     */
    totalLinesRemovedTrend: number;
};
/**
 * Describes the message gitpod.v1.AgentTraceSummary.
 * Use `create(AgentTraceSummarySchema)` to create a new message.
 */
export declare const AgentTraceSummarySchema: GenMessage<AgentTraceSummary>;
/**
 * AgentTraceModelBreakdown contains stats for a single LLM model.
 *
 * @generated from message gitpod.v1.AgentTraceModelBreakdown
 */
export type AgentTraceModelBreakdown = Message<"gitpod.v1.AgentTraceModelBreakdown"> & {
    /**
     * The model these stats are for.
     *
     * @generated from field: gitpod.v1.SupportedModel model = 1;
     */
    model: SupportedModel;
    /**
     * Number of sessions that used this model.
     *
     * @generated from field: int64 sessions = 2;
     */
    sessions: bigint;
    /**
     * Lines added by sessions using this model.
     *
     * @generated from field: int64 lines_added = 3;
     */
    linesAdded: bigint;
    /**
     * Lines removed by sessions using this model.
     *
     * @generated from field: int64 lines_removed = 4;
     */
    linesRemoved: bigint;
};
/**
 * Describes the message gitpod.v1.AgentTraceModelBreakdown.
 * Use `create(AgentTraceModelBreakdownSchema)` to create a new message.
 */
export declare const AgentTraceModelBreakdownSchema: GenMessage<AgentTraceModelBreakdown>;
/**
 * AgentTraceTimeBucket contains stats for a single time period.
 *
 * @generated from message gitpod.v1.AgentTraceTimeBucket
 */
export type AgentTraceTimeBucket = Message<"gitpod.v1.AgentTraceTimeBucket"> & {
    /**
     * Start of this time bucket.
     *
     * @generated from field: google.protobuf.Timestamp start_time = 1;
     */
    startTime?: Timestamp;
    /**
     * Number of agent trace sessions in this bucket.
     *
     * @generated from field: int64 total_sessions = 2;
     */
    totalSessions: bigint;
    /**
     * Total lines added in this bucket.
     *
     * @generated from field: int64 total_lines_added = 3;
     */
    totalLinesAdded: bigint;
    /**
     * Total lines removed in this bucket.
     *
     * @generated from field: int64 total_lines_removed = 4;
     */
    totalLinesRemoved: bigint;
    /**
     * Per-model breakdown for this bucket.
     *
     * @generated from field: repeated gitpod.v1.AgentTraceModelBreakdown by_model = 5;
     */
    byModel: AgentTraceModelBreakdown[];
};
/**
 * Describes the message gitpod.v1.AgentTraceTimeBucket.
 * Use `create(AgentTraceTimeBucketSchema)` to create a new message.
 */
export declare const AgentTraceTimeBucketSchema: GenMessage<AgentTraceTimeBucket>;
/**
 * PrSummary contains aggregate PR speed metrics for a date range.
 *
 * @generated from message gitpod.v1.PrSummary
 */
export type PrSummary = Message<"gitpod.v1.PrSummary"> & {
    /**
     * Median lead time for changes in seconds (first commit → merge).
     *
     * @generated from field: double lead_time_seconds = 1;
     */
    leadTimeSeconds: number;
    /**
     * Fractional change in lead_time_seconds vs previous period.
     * Computed as (current - previous) / previous.
     *
     * @generated from field: double lead_time_trend = 2;
     */
    leadTimeTrend: number;
    /**
     * Total PRs merged in the date range.
     *
     * @generated from field: int64 prs_merged_count = 3;
     */
    prsMergedCount: bigint;
    /**
     * Fractional change in prs_merged_count vs previous period.
     * Computed as (current - previous) / previous.
     *
     * @generated from field: double prs_merged_trend = 4;
     */
    prsMergedTrend: number;
    /**
     * Median time to first approval in seconds.
     * Zero when no PRs in the range had approvals.
     *
     * @generated from field: double time_to_first_approval_seconds = 5;
     */
    timeToFirstApprovalSeconds: number;
    /**
     * Fractional change in time_to_first_approval_seconds vs previous period.
     * Computed as (current - previous) / previous.
     *
     * @generated from field: double time_to_first_approval_trend = 6;
     */
    timeToFirstApprovalTrend: number;
    /**
     * PRs merged to the default branch per week.
     *
     * @generated from field: double deployment_frequency = 7;
     */
    deploymentFrequency: number;
    /**
     * Fractional change in deployment_frequency vs previous period.
     * Computed as (current - previous) / previous.
     *
     * @generated from field: double deployment_frequency_trend = 8;
     */
    deploymentFrequencyTrend: number;
};
/**
 * Describes the message gitpod.v1.PrSummary.
 * Use `create(PrSummarySchema)` to create a new message.
 */
export declare const PrSummarySchema: GenMessage<PrSummary>;
/**
 * PrTimeBucket contains PR speed metrics for a single time period.
 *
 * @generated from message gitpod.v1.PrTimeBucket
 */
export type PrTimeBucket = Message<"gitpod.v1.PrTimeBucket"> & {
    /**
     * Start of this time bucket.
     *
     * @generated from field: google.protobuf.Timestamp start_time = 1;
     */
    startTime?: Timestamp;
    /**
     * Median lead time in seconds for PRs merged in this bucket.
     *
     * @generated from field: double lead_time_seconds = 2;
     */
    leadTimeSeconds: number;
    /**
     * Number of PRs merged in this bucket.
     *
     * @generated from field: int64 prs_merged_count = 3;
     */
    prsMergedCount: bigint;
    /**
     * Median time to first approval in seconds for PRs in this bucket.
     * Zero when no PRs in the bucket had approvals.
     *
     * @generated from field: double time_to_first_approval_seconds = 4;
     */
    timeToFirstApprovalSeconds: number;
    /**
     * Total number of deploys (merged PRs) in this bucket.
     *
     * @generated from field: int64 deploys = 5;
     */
    deploys: bigint;
};
/**
 * Describes the message gitpod.v1.PrTimeBucket.
 * Use `create(PrTimeBucketSchema)` to create a new message.
 */
export declare const PrTimeBucketSchema: GenMessage<PrTimeBucket>;
/**
 * @generated from message gitpod.v1.GetCoAuthorSummaryRequest
 */
export type GetCoAuthorSummaryRequest = Message<"gitpod.v1.GetCoAuthorSummaryRequest"> & {
    /**
     * Date range to query within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 1;
     */
    dateRange?: DateRange;
    /**
     * Optional project ID to scope results.
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * Optional user ID to scope results to a specific user.
     * Mutually exclusive with team_id.
     *
     * @generated from field: string user_id = 3;
     */
    userId: string;
    /**
     * Optional team ID to scope results to a specific team.
     * Mutually exclusive with user_id.
     *
     * @generated from field: string team_id = 4;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetCoAuthorSummaryRequest.
 * Use `create(GetCoAuthorSummaryRequestSchema)` to create a new message.
 */
export declare const GetCoAuthorSummaryRequestSchema: GenMessage<GetCoAuthorSummaryRequest>;
/**
 * @generated from message gitpod.v1.GetCoAuthorSummaryResponse
 */
export type GetCoAuthorSummaryResponse = Message<"gitpod.v1.GetCoAuthorSummaryResponse"> & {
    /**
     * Summary totals and trends for the requested date range.
     *
     * @generated from field: gitpod.v1.CoAuthorSummary summary = 1;
     */
    summary?: CoAuthorSummary;
    /**
     * Sparkline data for card rendering.
     *
     * @generated from field: repeated gitpod.v1.TimeSeriesPoint sparkline = 2;
     */
    sparkline: TimeSeriesPoint[];
};
/**
 * Describes the message gitpod.v1.GetCoAuthorSummaryResponse.
 * Use `create(GetCoAuthorSummaryResponseSchema)` to create a new message.
 */
export declare const GetCoAuthorSummaryResponseSchema: GenMessage<GetCoAuthorSummaryResponse>;
/**
 * @generated from message gitpod.v1.GetCoAuthorTimeSeriesRequest
 */
export type GetCoAuthorTimeSeriesRequest = Message<"gitpod.v1.GetCoAuthorTimeSeriesRequest"> & {
    /**
     * Date range to query within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 1;
     */
    dateRange?: DateRange;
    /**
     * Optional project ID to scope results.
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * Time resolution for the series data.
     *
     * @generated from field: gitpod.v1.Resolution resolution = 3;
     */
    resolution: Resolution;
    /**
     * Optional user ID to scope results to a specific user.
     * Mutually exclusive with team_id.
     *
     * @generated from field: string user_id = 4;
     */
    userId: string;
    /**
     * Optional team ID to scope results to a specific team.
     * Mutually exclusive with user_id.
     *
     * @generated from field: string team_id = 5;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetCoAuthorTimeSeriesRequest.
 * Use `create(GetCoAuthorTimeSeriesRequestSchema)` to create a new message.
 */
export declare const GetCoAuthorTimeSeriesRequestSchema: GenMessage<GetCoAuthorTimeSeriesRequest>;
/**
 * @generated from message gitpod.v1.GetCoAuthorTimeSeriesResponse
 */
export type GetCoAuthorTimeSeriesResponse = Message<"gitpod.v1.GetCoAuthorTimeSeriesResponse"> & {
    /**
     * Time series of contribution stats, bucketed by the requested resolution.
     *
     * @generated from field: repeated gitpod.v1.CoAuthorTimeBucket time_series = 1;
     */
    timeSeries: CoAuthorTimeBucket[];
};
/**
 * Describes the message gitpod.v1.GetCoAuthorTimeSeriesResponse.
 * Use `create(GetCoAuthorTimeSeriesResponseSchema)` to create a new message.
 */
export declare const GetCoAuthorTimeSeriesResponseSchema: GenMessage<GetCoAuthorTimeSeriesResponse>;
/**
 * @generated from message gitpod.v1.GetAgentTraceSummaryRequest
 */
export type GetAgentTraceSummaryRequest = Message<"gitpod.v1.GetAgentTraceSummaryRequest"> & {
    /**
     * Date range to query within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 1;
     */
    dateRange?: DateRange;
    /**
     * Optional project ID to scope results.
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * Optional user ID to scope results to a specific user.
     * Mutually exclusive with team_id.
     *
     * @generated from field: string user_id = 3;
     */
    userId: string;
    /**
     * Optional team ID to scope results to a specific team.
     * Mutually exclusive with user_id.
     *
     * @generated from field: string team_id = 4;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetAgentTraceSummaryRequest.
 * Use `create(GetAgentTraceSummaryRequestSchema)` to create a new message.
 */
export declare const GetAgentTraceSummaryRequestSchema: GenMessage<GetAgentTraceSummaryRequest>;
/**
 * @generated from message gitpod.v1.GetAgentTraceSummaryResponse
 */
export type GetAgentTraceSummaryResponse = Message<"gitpod.v1.GetAgentTraceSummaryResponse"> & {
    /**
     * Summary totals and trends for the requested date range.
     *
     * @generated from field: gitpod.v1.AgentTraceSummary summary = 1;
     */
    summary?: AgentTraceSummary;
    /**
     * Sparkline data for card rendering.
     *
     * @generated from field: repeated gitpod.v1.TimeSeriesPoint sparkline = 2;
     */
    sparkline: TimeSeriesPoint[];
};
/**
 * Describes the message gitpod.v1.GetAgentTraceSummaryResponse.
 * Use `create(GetAgentTraceSummaryResponseSchema)` to create a new message.
 */
export declare const GetAgentTraceSummaryResponseSchema: GenMessage<GetAgentTraceSummaryResponse>;
/**
 * @generated from message gitpod.v1.GetAgentTraceTimeSeriesRequest
 */
export type GetAgentTraceTimeSeriesRequest = Message<"gitpod.v1.GetAgentTraceTimeSeriesRequest"> & {
    /**
     * Date range to query within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 1;
     */
    dateRange?: DateRange;
    /**
     * Optional project ID to scope results.
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * Time resolution for the series data.
     *
     * @generated from field: gitpod.v1.Resolution resolution = 3;
     */
    resolution: Resolution;
    /**
     * Optional user ID to scope results to a specific user.
     * Mutually exclusive with team_id.
     *
     * @generated from field: string user_id = 4;
     */
    userId: string;
    /**
     * Optional team ID to scope results to a specific team.
     * Mutually exclusive with user_id.
     *
     * @generated from field: string team_id = 5;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetAgentTraceTimeSeriesRequest.
 * Use `create(GetAgentTraceTimeSeriesRequestSchema)` to create a new message.
 */
export declare const GetAgentTraceTimeSeriesRequestSchema: GenMessage<GetAgentTraceTimeSeriesRequest>;
/**
 * @generated from message gitpod.v1.GetAgentTraceTimeSeriesResponse
 */
export type GetAgentTraceTimeSeriesResponse = Message<"gitpod.v1.GetAgentTraceTimeSeriesResponse"> & {
    /**
     * Time series of agent trace stats, bucketed by the requested resolution.
     *
     * @generated from field: repeated gitpod.v1.AgentTraceTimeBucket time_series = 1;
     */
    timeSeries: AgentTraceTimeBucket[];
};
/**
 * Describes the message gitpod.v1.GetAgentTraceTimeSeriesResponse.
 * Use `create(GetAgentTraceTimeSeriesResponseSchema)` to create a new message.
 */
export declare const GetAgentTraceTimeSeriesResponseSchema: GenMessage<GetAgentTraceTimeSeriesResponse>;
/**
 * @generated from message gitpod.v1.GetPrSummaryRequest
 */
export type GetPrSummaryRequest = Message<"gitpod.v1.GetPrSummaryRequest"> & {
    /**
     * Date range to query within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 1;
     */
    dateRange?: DateRange;
    /**
     * Optional project ID to scope results.
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * Optional user ID to scope results to a specific user.
     * Mutually exclusive with team_id.
     *
     * @generated from field: string user_id = 3;
     */
    userId: string;
    /**
     * Optional team ID to scope results to a specific team.
     * Mutually exclusive with user_id.
     *
     * @generated from field: string team_id = 4;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetPrSummaryRequest.
 * Use `create(GetPrSummaryRequestSchema)` to create a new message.
 */
export declare const GetPrSummaryRequestSchema: GenMessage<GetPrSummaryRequest>;
/**
 * @generated from message gitpod.v1.GetPrSummaryResponse
 */
export type GetPrSummaryResponse = Message<"gitpod.v1.GetPrSummaryResponse"> & {
    /**
     * Summary totals and trends for the requested date range.
     *
     * @generated from field: gitpod.v1.PrSummary summary = 1;
     */
    summary?: PrSummary;
    /**
     * Sparkline data for card rendering.
     *
     * @generated from field: repeated gitpod.v1.TimeSeriesPoint sparkline = 2;
     */
    sparkline: TimeSeriesPoint[];
};
/**
 * Describes the message gitpod.v1.GetPrSummaryResponse.
 * Use `create(GetPrSummaryResponseSchema)` to create a new message.
 */
export declare const GetPrSummaryResponseSchema: GenMessage<GetPrSummaryResponse>;
/**
 * @generated from message gitpod.v1.GetPrTimeSeriesRequest
 */
export type GetPrTimeSeriesRequest = Message<"gitpod.v1.GetPrTimeSeriesRequest"> & {
    /**
     * Date range to query within.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 1;
     */
    dateRange?: DateRange;
    /**
     * Optional project ID to scope results.
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * Time resolution for the series data.
     *
     * @generated from field: gitpod.v1.Resolution resolution = 3;
     */
    resolution: Resolution;
    /**
     * Optional user ID to scope results to a specific user.
     * Mutually exclusive with team_id.
     *
     * @generated from field: string user_id = 4;
     */
    userId: string;
    /**
     * Optional team ID to scope results to a specific team.
     * Mutually exclusive with user_id.
     *
     * @generated from field: string team_id = 5;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetPrTimeSeriesRequest.
 * Use `create(GetPrTimeSeriesRequestSchema)` to create a new message.
 */
export declare const GetPrTimeSeriesRequestSchema: GenMessage<GetPrTimeSeriesRequest>;
/**
 * @generated from message gitpod.v1.GetPrTimeSeriesResponse
 */
export type GetPrTimeSeriesResponse = Message<"gitpod.v1.GetPrTimeSeriesResponse"> & {
    /**
     * Time series of PR speed metrics, bucketed by the requested resolution.
     *
     * @generated from field: repeated gitpod.v1.PrTimeBucket time_series = 1;
     */
    timeSeries: PrTimeBucket[];
};
/**
 * Describes the message gitpod.v1.GetPrTimeSeriesResponse.
 * Use `create(GetPrTimeSeriesResponseSchema)` to create a new message.
 */
export declare const GetPrTimeSeriesResponseSchema: GenMessage<GetPrTimeSeriesResponse>;
/**
 * Resolution specifies the time granularity for time series data.
 *
 * @generated from enum gitpod.v1.Resolution
 */
export declare enum Resolution {
    /**
     * @generated from enum value: RESOLUTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: RESOLUTION_HOURLY = 1;
     */
    HOURLY = 1,
    /**
     * @generated from enum value: RESOLUTION_DAILY = 2;
     */
    DAILY = 2,
    /**
     * @generated from enum value: RESOLUTION_WEEKLY = 3;
     */
    WEEKLY = 3,
    /**
     * @generated from enum value: RESOLUTION_MONTHLY = 4;
     */
    MONTHLY = 4
}
/**
 * Describes the enum gitpod.v1.Resolution.
 */
export declare const ResolutionSchema: GenEnum<Resolution>;
/**
 * CoAuthorTool identifies the AI tool that co-authored a commit.
 * UNSPECIFIED (0) is the proto default and must not appear in reported data.
 * Use HUMAN for commits with no AI co-author.
 *
 * @generated from enum gitpod.v1.CoAuthorTool
 */
export declare enum CoAuthorTool {
    /**
     * @generated from enum value: CO_AUTHOR_TOOL_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Commit has no Co-authored-by trailer at all (solo commit).
     *
     * @generated from enum value: CO_AUTHOR_TOOL_NO_COAUTHOR = 1;
     */
    NO_COAUTHOR = 1,
    /**
     * Commit has a Co-authored-by trailer, but the co-author is human.
     *
     * @generated from enum value: CO_AUTHOR_TOOL_HUMAN_COAUTHOR = 2;
     */
    HUMAN_COAUTHOR = 2,
    /**
     * Ona agent.
     *
     * @generated from enum value: CO_AUTHOR_TOOL_ONA = 3;
     */
    ONA = 3,
    /**
     * GitHub Copilot.
     *
     * @generated from enum value: CO_AUTHOR_TOOL_GITHUB_COPILOT = 4;
     */
    GITHUB_COPILOT = 4,
    /**
     * Cursor.
     *
     * @generated from enum value: CO_AUTHOR_TOOL_CURSOR = 5;
     */
    CURSOR = 5,
    /**
     * An AI tool not in the known list.
     *
     * @generated from enum value: CO_AUTHOR_TOOL_OTHER = 6;
     */
    OTHER = 6,
    /**
     * Claude (Anthropic).
     *
     * @generated from enum value: CO_AUTHOR_TOOL_CLAUDE = 7;
     */
    CLAUDE = 7,
    /**
     * Codex.
     *
     * @generated from enum value: CO_AUTHOR_TOOL_CODEX = 8;
     */
    CODEX = 8
}
/**
 * Describes the enum gitpod.v1.CoAuthorTool.
 */
export declare const CoAuthorToolSchema: GenEnum<CoAuthorTool>;
/**
 * UsageService provides usage information about environments, users, and projects.
 *
 * @generated from service gitpod.v1.UsageService
 */
export declare const UsageService: GenService<{
    /**
     * Gets the count of active users.
     *
     * Returns the count of unique users who were active within the specified date range.
     *
     * @generated from rpc gitpod.v1.UsageService.GetActiveUsersCount
     */
    getActiveUsersCount: {
        methodKind: "unary";
        input: typeof GetActiveUsersCountRequestSchema;
        output: typeof GetActiveUsersCountResponseSchema;
    };
    /**
     * Gets the top active users based on total runtime.
     *
     * Returns a list of users sorted by their total environment runtime within the specified date range.
     * Each result includes the user ID, name (if available), and their total environment runtime in seconds.
     *
     * @generated from rpc gitpod.v1.UsageService.GetTopActiveUsers
     */
    getTopActiveUsers: {
        methodKind: "unary";
        input: typeof GetTopActiveUsersRequestSchema;
        output: typeof GetTopActiveUsersResponseSchema;
    };
    /**
     * Gets active users time series in the specified date range, aggregated by the specified resolution.
     *
     * Returns a time series of active user counts within the specified date range, aggregated by the specified resolution.
     * Each data point includes the timestamp and the count of unique users who were active at that time.
     *
     * @generated from rpc gitpod.v1.UsageService.GetActiveUsersTimeSeries
     */
    getActiveUsersTimeSeries: {
        methodKind: "unary";
        input: typeof GetActiveUsersTimeSeriesRequestSchema;
        output: typeof GetActiveUsersTimeSeriesResponseSchema;
    };
    /**
     * Lists completed environment runtime records within a specified date range.
     *
     * Returns a list of environment runtime records that were completed within the specified date range. Records of currently running environments are not included.
     *
     * Use this method to:
     * - View environment runtime records
     * - Filter by project
     * - Create custom usage reports
     *
     * ### Example
     *
     * ```yaml
     * filter:
     *   projectId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   dateRange:
     *     startTime: "2024-01-01T00:00:00Z"
     *     endTime: "2024-01-02T00:00:00Z"
     * pagination:
     *   pageSize: 100
     * ```
     *
     * @generated from rpc gitpod.v1.UsageService.ListEnvironmentUsageRecords
     */
    listEnvironmentUsageRecords: {
        methodKind: "unary";
        input: typeof ListEnvironmentUsageRecordsRequestSchema;
        output: typeof ListEnvironmentUsageRecordsResponseSchema;
    };
    /**
     * Gets the count of active environments in the specified date range.
     *
     * @generated from rpc gitpod.v1.UsageService.GetActiveEnvironmentsCount
     */
    getActiveEnvironmentsCount: {
        methodKind: "unary";
        input: typeof GetActiveEnvironmentsCountRequestSchema;
        output: typeof GetActiveEnvironmentsCountResponseSchema;
    };
    /**
     * Gets the active environments time series in the specified date range, aggregated by the specified resolution.
     *
     * @generated from rpc gitpod.v1.UsageService.GetActiveEnvironmentsTimeSeries
     */
    getActiveEnvironmentsTimeSeries: {
        methodKind: "unary";
        input: typeof GetActiveEnvironmentsTimeSeriesRequestSchema;
        output: typeof GetActiveEnvironmentsTimeSeriesResponseSchema;
    };
    /**
     * Gets the total runtime of all environments in the specified date range.
     *
     * @generated from rpc gitpod.v1.UsageService.GetEnvironmentRuntime
     */
    getEnvironmentRuntime: {
        methodKind: "unary";
        input: typeof GetEnvironmentRuntimeRequestSchema;
        output: typeof GetEnvironmentRuntimeResponseSchema;
    };
    /**
     * Gets the total runtime time series in the specified date range, aggregated by the specified resolution.
     *
     * @generated from rpc gitpod.v1.UsageService.GetEnvironmentRuntimeTimeSeries
     */
    getEnvironmentRuntimeTimeSeries: {
        methodKind: "unary";
        input: typeof GetEnvironmentRuntimeTimeSeriesRequestSchema;
        output: typeof GetEnvironmentRuntimeTimeSeriesResponseSchema;
    };
    /**
     * Gets the top projects by total environment runtime in the specified date range.
     *
     * @generated from rpc gitpod.v1.UsageService.GetTopProjects
     */
    getTopProjects: {
        methodKind: "unary";
        input: typeof GetTopProjectsRequestSchema;
        output: typeof GetTopProjectsResponseSchema;
    };
    /**
     * Gets the top environment classes by total runtime in the specified date range.
     *
     * @generated from rpc gitpod.v1.UsageService.GetTopEnvironmentClasses
     */
    getTopEnvironmentClasses: {
        methodKind: "unary";
        input: typeof GetTopEnvironmentClassesRequestSchema;
        output: typeof GetTopEnvironmentClassesResponseSchema;
    };
    /**
     * Gets a summary of adoption and usage metrics.
     *
     * Returns all scalar values, trends, and a sparkline for the Adoption & Usage
     * insight category. For full-resolution time series, use the individual time
     * series RPCs.
     *
     * Use this method to:
     * - Build adoption and usage insight cards
     * - Filter adoption metrics by project, user, or team
     * - Compare the requested date range against the previous period
     *
     * ### Example
     *
     * ```yaml
     * dateRange:
     *   startTime: "2024-01-01T00:00:00Z"
     *   endTime: "2024-02-01T00:00:00Z"
     * projectId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     * ```
     *
     * @generated from rpc gitpod.v1.UsageService.GetAdoptionUsageSummary
     */
    getAdoptionUsageSummary: {
        methodKind: "unary";
        input: typeof GetAdoptionUsageSummaryRequestSchema;
        output: typeof GetAdoptionUsageSummaryResponseSchema;
    };
    /**
     * Gets the environment sessions time series in the specified date range, aggregated by the specified resolution.
     *
     * Environment sessions count total environment starts (environment.started events),
     * as opposed to GetActiveEnvironmentsTimeSeries which counts distinct environment IDs.
     *
     * @generated from rpc gitpod.v1.UsageService.GetEnvironmentSessionsTimeSeries
     */
    getEnvironmentSessionsTimeSeries: {
        methodKind: "unary";
        input: typeof GetEnvironmentSessionsTimeSeriesRequestSchema;
        output: typeof GetEnvironmentSessionsTimeSeriesResponseSchema;
    };
    /**
     * Gets aggregated co-author summary for the organization or a specific project.
     *
     * Use this method to:
     * - Measure AI-assisted commits and line changes
     * - Scope co-author insights to a project, user, or team
     * - Compare the requested date range against the previous period
     *
     * ### Example
     *
     * ```yaml
     * dateRange:
     *   startTime: "2024-01-01T00:00:00Z"
     *   endTime: "2024-02-01T00:00:00Z"
     * projectId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     * ```
     *
     * @generated from rpc gitpod.v1.UsageService.GetCoAuthorSummary
     */
    getCoAuthorSummary: {
        methodKind: "unary";
        input: typeof GetCoAuthorSummaryRequestSchema;
        output: typeof GetCoAuthorSummaryResponseSchema;
    };
    /**
     * Gets co-author contribution data as a time series.
     *
     * Use this method to:
     * - Chart AI-assisted commits and line changes over time
     * - Select hourly, daily, weekly, or monthly buckets
     * - Scope co-author insights to a project, user, or team
     *
     * ### Example
     *
     * ```yaml
     * dateRange:
     *   startTime: "2024-01-01T00:00:00Z"
     *   endTime: "2024-02-01T00:00:00Z"
     * resolution: RESOLUTION_WEEKLY
     * projectId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     * ```
     *
     * @generated from rpc gitpod.v1.UsageService.GetCoAuthorTimeSeries
     */
    getCoAuthorTimeSeries: {
        methodKind: "unary";
        input: typeof GetCoAuthorTimeSeriesRequestSchema;
        output: typeof GetCoAuthorTimeSeriesResponseSchema;
    };
    /**
     * Gets aggregated agent trace summary for the organization or a specific project.
     *
     * Use this method to:
     * - Measure agent sessions and line changes
     * - Break down agent activity by model
     * - Scope agent trace insights to a project, user, or team
     *
     * ### Example
     *
     * ```yaml
     * dateRange:
     *   startTime: "2024-01-01T00:00:00Z"
     *   endTime: "2024-02-01T00:00:00Z"
     * projectId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     * ```
     *
     * @generated from rpc gitpod.v1.UsageService.GetAgentTraceSummary
     */
    getAgentTraceSummary: {
        methodKind: "unary";
        input: typeof GetAgentTraceSummaryRequestSchema;
        output: typeof GetAgentTraceSummaryResponseSchema;
    };
    /**
     * Gets agent trace data as a time series.
     *
     * Use this method to:
     * - Chart agent sessions and line changes over time
     * - Select hourly, daily, weekly, or monthly buckets
     * - Scope agent trace insights to a project, user, or team
     *
     * ### Example
     *
     * ```yaml
     * dateRange:
     *   startTime: "2024-01-01T00:00:00Z"
     *   endTime: "2024-02-01T00:00:00Z"
     * resolution: RESOLUTION_WEEKLY
     * projectId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     * ```
     *
     * @generated from rpc gitpod.v1.UsageService.GetAgentTraceTimeSeries
     */
    getAgentTraceTimeSeries: {
        methodKind: "unary";
        input: typeof GetAgentTraceTimeSeriesRequestSchema;
        output: typeof GetAgentTraceTimeSeriesResponseSchema;
    };
    /**
     * Gets aggregated PR speed summary for the organization or a specific project.
     *
     * Use this method to:
     * - Measure pull request lead time and review latency
     * - Calculate deployment frequency from merged pull requests
     * - Scope PR speed insights to a project, user, or team
     *
     * ### Example
     *
     * ```yaml
     * dateRange:
     *   startTime: "2024-01-01T00:00:00Z"
     *   endTime: "2024-02-01T00:00:00Z"
     * projectId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     * ```
     *
     * @generated from rpc gitpod.v1.UsageService.GetPrSummary
     */
    getPrSummary: {
        methodKind: "unary";
        input: typeof GetPrSummaryRequestSchema;
        output: typeof GetPrSummaryResponseSchema;
    };
    /**
     * Gets PR speed metrics as a time series.
     *
     * Use this method to:
     * - Chart pull request lead time, review latency, and deploy counts
     * - Select hourly, daily, weekly, or monthly buckets
     * - Scope PR speed insights to a project, user, or team
     *
     * ### Example
     *
     * ```yaml
     * dateRange:
     *   startTime: "2024-01-01T00:00:00Z"
     *   endTime: "2024-02-01T00:00:00Z"
     * resolution: RESOLUTION_WEEKLY
     * projectId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     * ```
     *
     * @generated from rpc gitpod.v1.UsageService.GetPrTimeSeries
     */
    getPrTimeSeries: {
        methodKind: "unary";
        input: typeof GetPrTimeSeriesRequestSchema;
        output: typeof GetPrTimeSeriesResponseSchema;
    };
}>;
