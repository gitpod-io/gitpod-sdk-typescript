import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { PullRequest } from "./agent_pb";
import type { Gateway } from "./gateway_pb";
import type { Subject } from "./identity_pb";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { FieldValue, RunnerKind, RunnerProvider } from "./runner_configuration_pb";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/runner.proto.
 */
export declare const file_gitpod_v1_runner: GenFile;
/**
 * @generated from message gitpod.v1.CreateRunnerRequest
 */
export type CreateRunnerRequest = Message<"gitpod.v1.CreateRunnerRequest"> & {
    /**
     * The runner name for humans
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * The runner's kind
     * This field is optional and here for backwards-compatibility. Use the provider field instead.
     * If provider is set, the runner's kind will be deduced from the provider.
     * Only one of kind and provider must be set.
     *
     * @generated from field: gitpod.v1.RunnerKind kind = 2;
     */
    kind: RunnerKind;
    /**
     * @generated from field: gitpod.v1.RunnerSpec spec = 3;
     */
    spec?: RunnerSpec;
    /**
     * The specific implementation type of the runner
     * This field is optional for backwards compatibility but will be required in the future.
     * When specified, kind must not be specified (will be deduced from provider)
     *
     * @generated from field: gitpod.v1.RunnerProvider provider = 4;
     */
    provider: RunnerProvider;
    /**
     * The runner manager id specifies the runner manager for the managed runner.
     * This field is mandatory for managed runners, otheriwse should not be set.
     *
     * @generated from field: string runner_manager_id = 5;
     */
    runnerManagerId: string;
};
/**
 * Describes the message gitpod.v1.CreateRunnerRequest.
 * Use `create(CreateRunnerRequestSchema)` to create a new message.
 */
export declare const CreateRunnerRequestSchema: GenMessage<CreateRunnerRequest>;
/**
 * @generated from message gitpod.v1.CreateRunnerResponse
 */
export type CreateRunnerResponse = Message<"gitpod.v1.CreateRunnerResponse"> & {
    /**
     * @generated from field: gitpod.v1.Runner runner = 1;
     */
    runner?: Runner;
    /**
     * deprecated, will be removed. Use exchange_token instead.
     *
     * @generated from field: string access_token = 2 [deprecated = true];
     * @deprecated
     */
    accessToken: string;
    /**
     * exchange_token is a one-time use token that should be exchanged by the runner for an access token,
     * using the IdentityService.ExchangeToken rpc. The token expires after 24 hours.
     *
     * @generated from field: string exchange_token = 3;
     */
    exchangeToken: string;
};
/**
 * Describes the message gitpod.v1.CreateRunnerResponse.
 * Use `create(CreateRunnerResponseSchema)` to create a new message.
 */
export declare const CreateRunnerResponseSchema: GenMessage<CreateRunnerResponse>;
/**
 * @generated from message gitpod.v1.GetRunnerRequest
 */
export type GetRunnerRequest = Message<"gitpod.v1.GetRunnerRequest"> & {
    /**
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
};
/**
 * Describes the message gitpod.v1.GetRunnerRequest.
 * Use `create(GetRunnerRequestSchema)` to create a new message.
 */
export declare const GetRunnerRequestSchema: GenMessage<GetRunnerRequest>;
/**
 * @generated from message gitpod.v1.GetRunnerResponse
 */
export type GetRunnerResponse = Message<"gitpod.v1.GetRunnerResponse"> & {
    /**
     * @generated from field: gitpod.v1.Runner runner = 1;
     */
    runner?: Runner;
};
/**
 * Describes the message gitpod.v1.GetRunnerResponse.
 * Use `create(GetRunnerResponseSchema)` to create a new message.
 */
export declare const GetRunnerResponseSchema: GenMessage<GetRunnerResponse>;
/**
 * @generated from message gitpod.v1.ListRunnersRequest
 */
export type ListRunnersRequest = Message<"gitpod.v1.ListRunnersRequest"> & {
    /**
     * pagination contains the pagination options for listing runners
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListRunnersRequest.Filter filter = 2;
     */
    filter?: ListRunnersRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListRunnersRequest.
 * Use `create(ListRunnersRequestSchema)` to create a new message.
 */
export declare const ListRunnersRequestSchema: GenMessage<ListRunnersRequest>;
/**
 * @generated from message gitpod.v1.ListRunnersRequest.Filter
 */
export type ListRunnersRequest_Filter = Message<"gitpod.v1.ListRunnersRequest.Filter"> & {
    /**
     * creator_ids filters the response to only runner created by specified users
     *
     * @generated from field: repeated string creator_ids = 1;
     */
    creatorIds: string[];
    /**
     * kinds filters the response to only runners of the specified kinds
     *
     * @generated from field: repeated gitpod.v1.RunnerKind kinds = 2;
     */
    kinds: RunnerKind[];
    /**
     * providers filters the response to only runners of the specified providers
     *
     * @generated from field: repeated gitpod.v1.RunnerProvider providers = 3;
     */
    providers: RunnerProvider[];
};
/**
 * Describes the message gitpod.v1.ListRunnersRequest.Filter.
 * Use `create(ListRunnersRequest_FilterSchema)` to create a new message.
 */
export declare const ListRunnersRequest_FilterSchema: GenMessage<ListRunnersRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListRunnersResponse
 */
export type ListRunnersResponse = Message<"gitpod.v1.ListRunnersResponse"> & {
    /**
     * pagination contains the pagination options for listing runners
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * The runners registered in the scope
     *
     * @generated from field: repeated gitpod.v1.Runner runners = 2;
     */
    runners: Runner[];
};
/**
 * Describes the message gitpod.v1.ListRunnersResponse.
 * Use `create(ListRunnersResponseSchema)` to create a new message.
 */
export declare const ListRunnersResponseSchema: GenMessage<ListRunnersResponse>;
/**
 * @generated from message gitpod.v1.UpdateRunnerRequest
 */
export type UpdateRunnerRequest = Message<"gitpod.v1.UpdateRunnerRequest"> & {
    /**
     * runner_id specifies which runner to be updated.
     *
     * +required
     *
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * The runner's name which is shown to users
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * @generated from field: optional gitpod.v1.UpdateRunnerRequest.Spec spec = 3;
     */
    spec?: UpdateRunnerRequest_Spec;
};
/**
 * Describes the message gitpod.v1.UpdateRunnerRequest.
 * Use `create(UpdateRunnerRequestSchema)` to create a new message.
 */
export declare const UpdateRunnerRequestSchema: GenMessage<UpdateRunnerRequest>;
/**
 * @generated from message gitpod.v1.UpdateRunnerRequest.RunnerConfiguration
 */
export type UpdateRunnerRequest_RunnerConfiguration = Message<"gitpod.v1.UpdateRunnerRequest.RunnerConfiguration"> & {
    /**
     * The release channel the runner is on
     *
     * @generated from field: optional gitpod.v1.RunnerReleaseChannel release_channel = 1;
     */
    releaseChannel?: RunnerReleaseChannel;
    /**
     * auto_update indicates whether the runner should automatically update itself.
     *
     * @generated from field: optional bool auto_update = 2;
     */
    autoUpdate?: boolean;
    /**
     * metrics contains configuration for the runner's metrics collection
     *
     * @generated from field: optional gitpod.v1.UpdateRunnerRequest.MetricsConfiguration metrics = 3;
     */
    metrics?: UpdateRunnerRequest_MetricsConfiguration;
    /**
     * log_level is the log level for the runner
     *
     * @generated from field: optional gitpod.v1.LogLevel log_level = 4;
     */
    logLevel?: LogLevel;
    /**
     * devcontainer_image_cache_enabled controls whether the shared devcontainer build cache is enabled for this runner.
     *
     * @generated from field: optional bool devcontainer_image_cache_enabled = 5;
     */
    devcontainerImageCacheEnabled?: boolean;
    /**
     * update_window defines the daily time window (UTC) during which auto-updates are allowed.
     * start_hour is required. If end_hour is omitted, it defaults to start_hour + 2.
     * Send an empty UpdateWindow (no start_hour or end_hour) to clear a custom window
     * and allow updates at any time.
     *
     * @generated from field: optional gitpod.v1.UpdateWindow update_window = 6;
     */
    updateWindow?: UpdateWindow;
    /**
     * honeycomb_api_key is the plaintext API key for Honeycomb tracing.
     * The backend encrypts it with the runner's public key before storing.
     * This is an internal-only field used for debugging.
     *
     * @generated from field: optional string honeycomb_api_key = 7;
     */
    honeycombApiKey?: string;
    /**
     * continuous_profiling enables continuous profiling on the runner.
     * This is an internal-only field used for debugging.
     *
     * @generated from field: optional bool continuous_profiling = 8;
     */
    continuousProfiling?: boolean;
};
/**
 * Describes the message gitpod.v1.UpdateRunnerRequest.RunnerConfiguration.
 * Use `create(UpdateRunnerRequest_RunnerConfigurationSchema)` to create a new message.
 */
export declare const UpdateRunnerRequest_RunnerConfigurationSchema: GenMessage<UpdateRunnerRequest_RunnerConfiguration>;
/**
 * @generated from message gitpod.v1.UpdateRunnerRequest.MetricsConfiguration
 */
export type UpdateRunnerRequest_MetricsConfiguration = Message<"gitpod.v1.UpdateRunnerRequest.MetricsConfiguration"> & {
    /**
     * enabled indicates whether the runner should collect metrics
     *
     * @generated from field: optional bool enabled = 1;
     */
    enabled?: boolean;
    /**
     * url is the URL of the metrics collector
     *
     * @generated from field: optional string url = 2;
     */
    url?: string;
    /**
     * username is the username to use for the metrics collector
     *
     * @generated from field: optional string username = 3;
     */
    username?: string;
    /**
     * password is the password to use for the metrics collector
     *
     * @generated from field: optional string password = 4;
     */
    password?: string;
    /**
     * When true, the runner pushes metrics to the management plane via
     * ReportRunnerMetrics instead of directly to the remote_write endpoint.
     *
     * @generated from field: optional bool managed_metrics_enabled = 5;
     */
    managedMetricsEnabled?: boolean;
    /**
     * When true, the runner also forwards verbose
     * metrics (e.g. aws_sdk_go_*) via the managed metrics pipeline.
     * Disabled by default to control metrics volume. Internal-only, set via CLI.
     *
     * @generated from field: optional bool include_verbose_metrics = 6;
     */
    includeVerboseMetrics?: boolean;
};
/**
 * Describes the message gitpod.v1.UpdateRunnerRequest.MetricsConfiguration.
 * Use `create(UpdateRunnerRequest_MetricsConfigurationSchema)` to create a new message.
 */
export declare const UpdateRunnerRequest_MetricsConfigurationSchema: GenMessage<UpdateRunnerRequest_MetricsConfiguration>;
/**
 * @generated from message gitpod.v1.UpdateRunnerRequest.Spec
 */
export type UpdateRunnerRequest_Spec = Message<"gitpod.v1.UpdateRunnerRequest.Spec"> & {
    /**
     * @generated from field: optional gitpod.v1.UpdateRunnerRequest.RunnerConfiguration configuration = 1;
     */
    configuration?: UpdateRunnerRequest_RunnerConfiguration;
    /**
     * desired_phase can currently only be updated on local-configuration runners,
     * to toggle whether local runners are allowed for running environments in the
     * organization.
     * Set to:
     * - ACTIVE to enable local runners.
     * - INACTIVE to disable all local runners. Existing local runners and their
     *   environments will stop, and cannot be started again until the desired_phase
     *   is set to ACTIVE. Use this carefully, as it will affect all users in the
     *   organization who use local runners.
     *
     * @generated from field: optional gitpod.v1.RunnerPhase desired_phase = 2;
     */
    desiredPhase?: RunnerPhase;
};
/**
 * Describes the message gitpod.v1.UpdateRunnerRequest.Spec.
 * Use `create(UpdateRunnerRequest_SpecSchema)` to create a new message.
 */
export declare const UpdateRunnerRequest_SpecSchema: GenMessage<UpdateRunnerRequest_Spec>;
/**
 * @generated from message gitpod.v1.UpdateRunnerResponse
 */
export type UpdateRunnerResponse = Message<"gitpod.v1.UpdateRunnerResponse"> & {};
/**
 * Describes the message gitpod.v1.UpdateRunnerResponse.
 * Use `create(UpdateRunnerResponseSchema)` to create a new message.
 */
export declare const UpdateRunnerResponseSchema: GenMessage<UpdateRunnerResponse>;
/**
 * @generated from message gitpod.v1.DeleteRunnerRequest
 */
export type DeleteRunnerRequest = Message<"gitpod.v1.DeleteRunnerRequest"> & {
    /**
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * force indicates whether the runner should be deleted forcefully.
     * When force deleting a Runner, all Environments on the runner are also force deleted and
     * regular Runner lifecycle is not respected.
     * Force deleting can result in data loss.
     *
     * @generated from field: bool force = 2;
     */
    force: boolean;
};
/**
 * Describes the message gitpod.v1.DeleteRunnerRequest.
 * Use `create(DeleteRunnerRequestSchema)` to create a new message.
 */
export declare const DeleteRunnerRequestSchema: GenMessage<DeleteRunnerRequest>;
/**
 * @generated from message gitpod.v1.DeleteRunnerResponse
 */
export type DeleteRunnerResponse = Message<"gitpod.v1.DeleteRunnerResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteRunnerResponse.
 * Use `create(DeleteRunnerResponseSchema)` to create a new message.
 */
export declare const DeleteRunnerResponseSchema: GenMessage<DeleteRunnerResponse>;
/**
 * @generated from message gitpod.v1.CreateRunnerTokenRequest
 */
export type CreateRunnerTokenRequest = Message<"gitpod.v1.CreateRunnerTokenRequest"> & {
    /**
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
};
/**
 * Describes the message gitpod.v1.CreateRunnerTokenRequest.
 * Use `create(CreateRunnerTokenRequestSchema)` to create a new message.
 */
export declare const CreateRunnerTokenRequestSchema: GenMessage<CreateRunnerTokenRequest>;
/**
 * @generated from message gitpod.v1.CreateRunnerTokenResponse
 */
export type CreateRunnerTokenResponse = Message<"gitpod.v1.CreateRunnerTokenResponse"> & {
    /**
     * deprecated, will be removed. Use exchange_token instead.
     *
     * @generated from field: string access_token = 1 [deprecated = true];
     * @deprecated
     */
    accessToken: string;
    /**
     * exchange_token is a one-time use token that should be exchanged by the runner for an access token,
     * using the IdentityService.ExchangeToken rpc. The token expires after 24 hours.
     *
     * @generated from field: string exchange_token = 2;
     */
    exchangeToken: string;
};
/**
 * Describes the message gitpod.v1.CreateRunnerTokenResponse.
 * Use `create(CreateRunnerTokenResponseSchema)` to create a new message.
 */
export declare const CreateRunnerTokenResponseSchema: GenMessage<CreateRunnerTokenResponse>;
/**
 * @generated from message gitpod.v1.CreateRunnerLogsTokenRequest
 */
export type CreateRunnerLogsTokenRequest = Message<"gitpod.v1.CreateRunnerLogsTokenRequest"> & {
    /**
     * runner_id specifies the runner for which the logs token should be created.
     *
     * +required
     *
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
};
/**
 * Describes the message gitpod.v1.CreateRunnerLogsTokenRequest.
 * Use `create(CreateRunnerLogsTokenRequestSchema)` to create a new message.
 */
export declare const CreateRunnerLogsTokenRequestSchema: GenMessage<CreateRunnerLogsTokenRequest>;
/**
 * @generated from message gitpod.v1.CreateRunnerLogsTokenResponse
 */
export type CreateRunnerLogsTokenResponse = Message<"gitpod.v1.CreateRunnerLogsTokenResponse"> & {
    /**
     * access_token is the token that can be used to access the logs and support bundle of the runner
     *
     * @generated from field: string access_token = 1;
     */
    accessToken: string;
};
/**
 * Describes the message gitpod.v1.CreateRunnerLogsTokenResponse.
 * Use `create(CreateRunnerLogsTokenResponseSchema)` to create a new message.
 */
export declare const CreateRunnerLogsTokenResponseSchema: GenMessage<CreateRunnerLogsTokenResponse>;
/**
 * @generated from message gitpod.v1.ParseContextURLRequest
 */
export type ParseContextURLRequest = Message<"gitpod.v1.ParseContextURLRequest"> & {
    /**
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * @generated from field: string context_url = 2;
     */
    contextUrl: string;
};
/**
 * Describes the message gitpod.v1.ParseContextURLRequest.
 * Use `create(ParseContextURLRequestSchema)` to create a new message.
 */
export declare const ParseContextURLRequestSchema: GenMessage<ParseContextURLRequest>;
/**
 * @generated from message gitpod.v1.ParseContextURLResponse
 */
export type ParseContextURLResponse = Message<"gitpod.v1.ParseContextURLResponse"> & {
    /**
     * @generated from field: string original_context_url = 1;
     */
    originalContextUrl: string;
    /**
     * @generated from field: gitpod.v1.ParseContextURLResponse.GitContext git = 2;
     */
    git?: ParseContextURLResponse_GitContext;
    /**
     * @generated from field: gitpod.v1.ParseContextURLResponse.PullRequest pr = 4 [deprecated = true];
     * @deprecated
     */
    pr?: ParseContextURLResponse_PullRequest;
    /**
     * @generated from field: gitpod.v1.ParseContextURLResponse.Issue issue = 5;
     */
    issue?: ParseContextURLResponse_Issue;
    /**
     * @generated from field: gitpod.v1.PullRequest pull_request = 6;
     */
    pullRequest?: PullRequest;
    /**
     * project_ids is a list of projects to which the context URL belongs to.
     *
     * @generated from field: repeated string project_ids = 3;
     */
    projectIds: string[];
    /**
     * scm_id is the unique identifier of the SCM provider (e.g., "github", "gitlab", "bitbucket")
     *
     * @generated from field: string scm_id = 7;
     */
    scmId: string;
    /**
     * recommended_environment_classes is an ordered list of environment class IDs
     * that are suitable for creating an environment for this context URL.
     *
     * @generated from field: repeated string recommended_environment_classes = 8;
     */
    recommendedEnvironmentClasses: string[];
};
/**
 * Describes the message gitpod.v1.ParseContextURLResponse.
 * Use `create(ParseContextURLResponseSchema)` to create a new message.
 */
export declare const ParseContextURLResponseSchema: GenMessage<ParseContextURLResponse>;
/**
 * @generated from message gitpod.v1.ParseContextURLResponse.GitContext
 */
export type ParseContextURLResponse_GitContext = Message<"gitpod.v1.ParseContextURLResponse.GitContext"> & {
    /**
     * @generated from field: string clone_url = 1;
     */
    cloneUrl: string;
    /**
     * @generated from field: string branch = 2;
     */
    branch: string;
    /**
     * @generated from field: string commit = 3;
     */
    commit: string;
    /**
     * @generated from field: string host = 4;
     */
    host: string;
    /**
     * @generated from field: string owner = 5;
     */
    owner: string;
    /**
     * @generated from field: string repo = 6;
     */
    repo: string;
    /**
     * @generated from field: string upstream_remote_url = 7;
     */
    upstreamRemoteUrl: string;
    /**
     * @generated from field: string tag = 8;
     */
    tag: string;
};
/**
 * Describes the message gitpod.v1.ParseContextURLResponse.GitContext.
 * Use `create(ParseContextURLResponse_GitContextSchema)` to create a new message.
 */
export declare const ParseContextURLResponse_GitContextSchema: GenMessage<ParseContextURLResponse_GitContext>;
/**
 * Deprecated: Use top-level PullRequest message instead
 *
 * @generated from message gitpod.v1.ParseContextURLResponse.PullRequest
 */
export type ParseContextURLResponse_PullRequest = Message<"gitpod.v1.ParseContextURLResponse.PullRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string title = 2;
     */
    title: string;
    /**
     * @generated from field: string from_branch = 3;
     */
    fromBranch: string;
    /**
     * @generated from field: string to_branch = 4;
     */
    toBranch: string;
};
/**
 * Describes the message gitpod.v1.ParseContextURLResponse.PullRequest.
 * Use `create(ParseContextURLResponse_PullRequestSchema)` to create a new message.
 */
export declare const ParseContextURLResponse_PullRequestSchema: GenMessage<ParseContextURLResponse_PullRequest>;
/**
 * @generated from message gitpod.v1.ParseContextURLResponse.Issue
 */
export type ParseContextURLResponse_Issue = Message<"gitpod.v1.ParseContextURLResponse.Issue"> & {
    /**
     * id is the source system's ID of this issue, e.g. BNFRD-6100
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string title = 2;
     */
    title: string;
};
/**
 * Describes the message gitpod.v1.ParseContextURLResponse.Issue.
 * Use `create(ParseContextURLResponse_IssueSchema)` to create a new message.
 */
export declare const ParseContextURLResponse_IssueSchema: GenMessage<ParseContextURLResponse_Issue>;
/**
 * @generated from message gitpod.v1.ParseContextURLPreconditionFailureDetails
 */
export type ParseContextURLPreconditionFailureDetails = Message<"gitpod.v1.ParseContextURLPreconditionFailureDetails"> & {
    /**
     * @generated from field: string authentication_required_url = 1;
     */
    authenticationRequiredUrl: string;
    /**
     * @generated from field: string scm_id = 2;
     */
    scmId: string;
    /**
     * if trying to parse a context URL without specifying a runner, runner_ids will be populated
     * with possible runners that can be authenticated against to access the context URL.
     * This is only populated if no authenticated runner against the context URL is found for the user.
     *
     * @generated from field: repeated string runner_ids = 3;
     */
    runnerIds: string[];
};
/**
 * Describes the message gitpod.v1.ParseContextURLPreconditionFailureDetails.
 * Use `create(ParseContextURLPreconditionFailureDetailsSchema)` to create a new message.
 */
export declare const ParseContextURLPreconditionFailureDetailsSchema: GenMessage<ParseContextURLPreconditionFailureDetails>;
/**
 * @generated from message gitpod.v1.SearchRepositoriesRequest
 */
export type SearchRepositoriesRequest = Message<"gitpod.v1.SearchRepositoriesRequest"> & {
    /**
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * Search query - interpretation depends on search_mode
     *
     * @generated from field: string search_string = 2;
     */
    searchString: string;
    /**
     * Maximum number of repositories to return.
     * Default: 25, Maximum: 100
     * Deprecated: Use pagination.page_size instead
     *
     * @generated from field: int32 limit = 3 [deprecated = true];
     * @deprecated
     */
    limit: number;
    /**
     * Pagination parameters for repository search
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 4;
     */
    pagination?: PaginationRequest;
    /**
     * The SCM's host to retrieve repositories from
     *
     * @generated from field: string scm_host = 5;
     */
    scmHost: string;
    /**
     * Search mode determines how search_string is interpreted
     *
     * @generated from field: gitpod.v1.SearchMode search_mode = 6;
     */
    searchMode: SearchMode;
};
/**
 * Describes the message gitpod.v1.SearchRepositoriesRequest.
 * Use `create(SearchRepositoriesRequestSchema)` to create a new message.
 */
export declare const SearchRepositoriesRequestSchema: GenMessage<SearchRepositoriesRequest>;
/**
 * @generated from message gitpod.v1.SearchRepositoriesResponse
 */
export type SearchRepositoriesResponse = Message<"gitpod.v1.SearchRepositoriesResponse"> & {
    /**
     * List of repositories matching the search criteria
     *
     * @generated from field: repeated gitpod.v1.SearchRepositoriesResponse.Repository repositories = 1;
     */
    repositories: SearchRepositoriesResponse_Repository[];
    /**
     * Pagination information for the response.
     * Token format: "NEXT_PAGE/TOTAL_PAGES/TOTAL_COUNT" (e.g., "2/40/1000").
     * Use -1 for unknown values (e.g., "2/-1/-1" when totals unavailable).
     * Empty token means no more pages.
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 2;
     */
    pagination?: PaginationResponse;
    /**
     * Deprecated: Use pagination token instead. Total pages can be extracted from token.
     *
     * @generated from field: int32 last_page = 3 [deprecated = true];
     * @deprecated
     */
    lastPage: number;
};
/**
 * Describes the message gitpod.v1.SearchRepositoriesResponse.
 * Use `create(SearchRepositoriesResponseSchema)` to create a new message.
 */
export declare const SearchRepositoriesResponseSchema: GenMessage<SearchRepositoriesResponse>;
/**
 * @generated from message gitpod.v1.SearchRepositoriesResponse.Repository
 */
export type SearchRepositoriesResponse_Repository = Message<"gitpod.v1.SearchRepositoriesResponse.Repository"> & {
    /**
     * Repository name (e.g., "my-project")
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Repository URL (e.g., "https://github.com/owner/my-project")
     *
     * @generated from field: string url = 2;
     */
    url: string;
};
/**
 * Describes the message gitpod.v1.SearchRepositoriesResponse.Repository.
 * Use `create(SearchRepositoriesResponse_RepositorySchema)` to create a new message.
 */
export declare const SearchRepositoriesResponse_RepositorySchema: GenMessage<SearchRepositoriesResponse_Repository>;
/**
 * @generated from message gitpod.v1.ListSCMOrganizationsRequest
 */
export type ListSCMOrganizationsRequest = Message<"gitpod.v1.ListSCMOrganizationsRequest"> & {
    /**
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * The SCM host to list organizations from (e.g., "github.com", "gitlab.com")
     *
     * @generated from field: string scm_host = 2;
     */
    scmHost: string;
    /**
     * Optional substring filter applied to the organization name.
     * - GitLab: forwarded to the upstream `search` parameter (server-side, case-insensitive substring on name/path).
     * - GitHub and Bitbucket: not implemented as they don't support searching
     * Empty value means no filter.
     *
     * @generated from field: string query = 3;
     */
    query: string;
    /**
     * Pagination parameters. When unset, defaults to the standard PaginationRequest defaults
     * (page_size 25, max 100). Tokens are opaque and provider-specific.
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 4;
     */
    pagination?: PaginationRequest;
};
/**
 * Describes the message gitpod.v1.ListSCMOrganizationsRequest.
 * Use `create(ListSCMOrganizationsRequestSchema)` to create a new message.
 */
export declare const ListSCMOrganizationsRequestSchema: GenMessage<ListSCMOrganizationsRequest>;
/**
 * @generated from message gitpod.v1.ListSCMOrganizationsResponse
 */
export type ListSCMOrganizationsResponse = Message<"gitpod.v1.ListSCMOrganizationsResponse"> & {
    /**
     * List of organizations the user belongs to
     *
     * @generated from field: repeated gitpod.v1.ListSCMOrganizationsResponse.SCMOrganization organizations = 1;
     */
    organizations: ListSCMOrganizationsResponse_SCMOrganization[];
    /**
     * Pagination cursor for fetching the next page. Empty `next_token` means no more results.
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 2;
     */
    pagination?: PaginationResponse;
};
/**
 * Describes the message gitpod.v1.ListSCMOrganizationsResponse.
 * Use `create(ListSCMOrganizationsResponseSchema)` to create a new message.
 */
export declare const ListSCMOrganizationsResponseSchema: GenMessage<ListSCMOrganizationsResponse>;
/**
 * @generated from message gitpod.v1.ListSCMOrganizationsResponse.SCMOrganization
 */
export type ListSCMOrganizationsResponse_SCMOrganization = Message<"gitpod.v1.ListSCMOrganizationsResponse.SCMOrganization"> & {
    /**
     * Organization name/slug (e.g., "gitpod-io")
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Organization URL (e.g., "https://github.com/gitpod-io")
     *
     * @generated from field: string url = 2;
     */
    url: string;
    /**
     * Deprecated: this field is unused by all known consumers and is
     * scheduled for removal in a future release. Do not read it.
     *
     * Originally intended to gate organization-level webhook creation in the
     * dashboard, but that gating was never implemented. Populating this field
     * on the GitLab path requires a second fully-paginated ListGroups call,
     * which is the main reason we are deprecating it.
     *
     * @generated from field: bool is_admin = 3 [deprecated = true];
     * @deprecated
     */
    isAdmin: boolean;
};
/**
 * Describes the message gitpod.v1.ListSCMOrganizationsResponse.SCMOrganization.
 * Use `create(ListSCMOrganizationsResponse_SCMOrganizationSchema)` to create a new message.
 */
export declare const ListSCMOrganizationsResponse_SCMOrganizationSchema: GenMessage<ListSCMOrganizationsResponse_SCMOrganization>;
/**
 * @generated from message gitpod.v1.CheckAuthenticationForHostRequest
 */
export type CheckAuthenticationForHostRequest = Message<"gitpod.v1.CheckAuthenticationForHostRequest"> & {
    /**
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * @generated from field: string host = 2;
     */
    host: string;
};
/**
 * Describes the message gitpod.v1.CheckAuthenticationForHostRequest.
 * Use `create(CheckAuthenticationForHostRequestSchema)` to create a new message.
 */
export declare const CheckAuthenticationForHostRequestSchema: GenMessage<CheckAuthenticationForHostRequest>;
/**
 * @generated from message gitpod.v1.CheckAuthenticationForHostResponse
 */
export type CheckAuthenticationForHostResponse = Message<"gitpod.v1.CheckAuthenticationForHostResponse"> & {
    /**
     * @generated from field: bool authenticated = 1;
     */
    authenticated: boolean;
    /**
     * @generated from field: string authentication_url = 2 [deprecated = true];
     * @deprecated
     */
    authenticationUrl: string;
    /**
     * @generated from field: bool pat_supported = 3 [deprecated = true];
     * @deprecated
     */
    patSupported: boolean;
    /**
     * scm_id is the unique identifier of the SCM provider
     *
     * @generated from field: string scm_id = 4;
     */
    scmId: string;
    /**
     * scm_name is the human-readable name of the SCM provider (e.g., "GitHub", "GitLab")
     *
     * @generated from field: string scm_name = 5;
     */
    scmName: string;
    /**
     * supports_oauth2 indicates that the host supports OAuth2 authentication
     *
     * @generated from field: gitpod.v1.CheckAuthenticationForHostResponse.AuthenticationMethodOAuth2 supports_oauth2 = 6;
     */
    supportsOauth2?: CheckAuthenticationForHostResponse_AuthenticationMethodOAuth2;
    /**
     * supports_pat indicates that the host supports Personal Access Token authentication
     *
     * @generated from field: gitpod.v1.CheckAuthenticationForHostResponse.AuthenticationMethodPersonalAccessToken supports_pat = 7;
     */
    supportsPat?: CheckAuthenticationForHostResponse_AuthenticationMethodPersonalAccessToken;
};
/**
 * Describes the message gitpod.v1.CheckAuthenticationForHostResponse.
 * Use `create(CheckAuthenticationForHostResponseSchema)` to create a new message.
 */
export declare const CheckAuthenticationForHostResponseSchema: GenMessage<CheckAuthenticationForHostResponse>;
/**
 * @generated from message gitpod.v1.CheckAuthenticationForHostResponse.AuthenticationMethodOAuth2
 */
export type CheckAuthenticationForHostResponse_AuthenticationMethodOAuth2 = Message<"gitpod.v1.CheckAuthenticationForHostResponse.AuthenticationMethodOAuth2"> & {
    /**
     * auth_url is the URL where users can authenticate
     *
     * @generated from field: string auth_url = 1;
     */
    authUrl: string;
    /**
     * docs_url is the URL to the documentation explaining this authentication method
     *
     * @generated from field: string docs_url = 2;
     */
    docsUrl: string;
};
/**
 * Describes the message gitpod.v1.CheckAuthenticationForHostResponse.AuthenticationMethodOAuth2.
 * Use `create(CheckAuthenticationForHostResponse_AuthenticationMethodOAuth2Schema)` to create a new message.
 */
export declare const CheckAuthenticationForHostResponse_AuthenticationMethodOAuth2Schema: GenMessage<CheckAuthenticationForHostResponse_AuthenticationMethodOAuth2>;
/**
 * @generated from message gitpod.v1.CheckAuthenticationForHostResponse.AuthenticationMethodPersonalAccessToken
 */
export type CheckAuthenticationForHostResponse_AuthenticationMethodPersonalAccessToken = Message<"gitpod.v1.CheckAuthenticationForHostResponse.AuthenticationMethodPersonalAccessToken"> & {
    /**
     * create_url is the URL where users can create a new Personal Access Token
     *
     * @generated from field: string create_url = 1;
     */
    createUrl: string;
    /**
     * docs_url is the URL to the documentation explaining PAT usage for this host
     *
     * @generated from field: string docs_url = 2;
     */
    docsUrl: string;
    /**
     * example is an example of a Personal Access Token
     *
     * @generated from field: string example = 3;
     */
    example: string;
    /**
     * required_scopes is the list of permissions required for the Personal Access Token
     *
     * @generated from field: repeated string required_scopes = 4;
     */
    requiredScopes: string[];
};
/**
 * Describes the message gitpod.v1.CheckAuthenticationForHostResponse.AuthenticationMethodPersonalAccessToken.
 * Use `create(CheckAuthenticationForHostResponse_AuthenticationMethodPersonalAccessTokenSchema)` to create a new message.
 */
export declare const CheckAuthenticationForHostResponse_AuthenticationMethodPersonalAccessTokenSchema: GenMessage<CheckAuthenticationForHostResponse_AuthenticationMethodPersonalAccessToken>;
/**
 * @generated from message gitpod.v1.CheckRepositoryAccessRequest
 */
export type CheckRepositoryAccessRequest = Message<"gitpod.v1.CheckRepositoryAccessRequest"> & {
    /**
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * repository_url is the URL of the repository to check access for.
     * Can be a clone URL (https://github.com/org/repo.git) or web URL (https://github.com/org/repo).
     *
     * @generated from field: string repository_url = 2;
     */
    repositoryUrl: string;
};
/**
 * Describes the message gitpod.v1.CheckRepositoryAccessRequest.
 * Use `create(CheckRepositoryAccessRequestSchema)` to create a new message.
 */
export declare const CheckRepositoryAccessRequestSchema: GenMessage<CheckRepositoryAccessRequest>;
/**
 * @generated from message gitpod.v1.CheckRepositoryAccessResponse
 */
export type CheckRepositoryAccessResponse = Message<"gitpod.v1.CheckRepositoryAccessResponse"> & {
    /**
     * has_access indicates whether the principal has read access to the repository.
     *
     * @generated from field: bool has_access = 1;
     */
    hasAccess: boolean;
    /**
     * error_message provides details when access check fails.
     * Empty when has_access is true.
     *
     * @generated from field: string error_message = 2;
     */
    errorMessage: string;
};
/**
 * Describes the message gitpod.v1.CheckRepositoryAccessResponse.
 * Use `create(CheckRepositoryAccessResponseSchema)` to create a new message.
 */
export declare const CheckRepositoryAccessResponseSchema: GenMessage<CheckRepositoryAccessResponse>;
/**
 * ListRunnerPoliciesRequest lists policies for a project.
 *
 * @generated from message gitpod.v1.ListRunnerPoliciesRequest
 */
export type ListRunnerPoliciesRequest = Message<"gitpod.v1.ListRunnerPoliciesRequest"> & {
    /**
     * pagination contains the pagination options for listing project policies
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * runner_id specifies the project identifier
     *
     * @generated from field: string runner_id = 2;
     */
    runnerId: string;
};
/**
 * Describes the message gitpod.v1.ListRunnerPoliciesRequest.
 * Use `create(ListRunnerPoliciesRequestSchema)` to create a new message.
 */
export declare const ListRunnerPoliciesRequestSchema: GenMessage<ListRunnerPoliciesRequest>;
/**
 * @generated from message gitpod.v1.ListRunnerPoliciesResponse
 */
export type ListRunnerPoliciesResponse = Message<"gitpod.v1.ListRunnerPoliciesResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.RunnerPolicy policies = 2;
     */
    policies: RunnerPolicy[];
};
/**
 * Describes the message gitpod.v1.ListRunnerPoliciesResponse.
 * Use `create(ListRunnerPoliciesResponseSchema)` to create a new message.
 */
export declare const ListRunnerPoliciesResponseSchema: GenMessage<ListRunnerPoliciesResponse>;
/**
 * CreateRunnerPolicyRequest creates a Runner Policy.
 *
 * @generated from message gitpod.v1.CreateRunnerPolicyRequest
 */
export type CreateRunnerPolicyRequest = Message<"gitpod.v1.CreateRunnerPolicyRequest"> & {
    /**
     * runner_id specifies the project identifier
     *
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * group_id specifies the group_id identifier
     *
     * @generated from field: string group_id = 2;
     */
    groupId: string;
    /**
     * @generated from field: gitpod.v1.RunnerRole role = 3;
     */
    role: RunnerRole;
};
/**
 * Describes the message gitpod.v1.CreateRunnerPolicyRequest.
 * Use `create(CreateRunnerPolicyRequestSchema)` to create a new message.
 */
export declare const CreateRunnerPolicyRequestSchema: GenMessage<CreateRunnerPolicyRequest>;
/**
 * @generated from message gitpod.v1.CreateRunnerPolicyResponse
 */
export type CreateRunnerPolicyResponse = Message<"gitpod.v1.CreateRunnerPolicyResponse"> & {
    /**
     * @generated from field: gitpod.v1.RunnerPolicy policy = 1;
     */
    policy?: RunnerPolicy;
};
/**
 * Describes the message gitpod.v1.CreateRunnerPolicyResponse.
 * Use `create(CreateRunnerPolicyResponseSchema)` to create a new message.
 */
export declare const CreateRunnerPolicyResponseSchema: GenMessage<CreateRunnerPolicyResponse>;
/**
 * UpdateRunnerPolicyRequest updates a Project Policy.
 *
 * @generated from message gitpod.v1.UpdateRunnerPolicyRequest
 */
export type UpdateRunnerPolicyRequest = Message<"gitpod.v1.UpdateRunnerPolicyRequest"> & {
    /**
     * runner_id specifies the project identifier
     *
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * group_id specifies the group_id identifier
     *
     * @generated from field: string group_id = 2;
     */
    groupId: string;
    /**
     * @generated from field: gitpod.v1.RunnerRole role = 3;
     */
    role: RunnerRole;
};
/**
 * Describes the message gitpod.v1.UpdateRunnerPolicyRequest.
 * Use `create(UpdateRunnerPolicyRequestSchema)` to create a new message.
 */
export declare const UpdateRunnerPolicyRequestSchema: GenMessage<UpdateRunnerPolicyRequest>;
/**
 * @generated from message gitpod.v1.UpdateRunnerPolicyResponse
 */
export type UpdateRunnerPolicyResponse = Message<"gitpod.v1.UpdateRunnerPolicyResponse"> & {
    /**
     * @generated from field: gitpod.v1.RunnerPolicy policy = 1;
     */
    policy?: RunnerPolicy;
};
/**
 * Describes the message gitpod.v1.UpdateRunnerPolicyResponse.
 * Use `create(UpdateRunnerPolicyResponseSchema)` to create a new message.
 */
export declare const UpdateRunnerPolicyResponseSchema: GenMessage<UpdateRunnerPolicyResponse>;
/**
 * DeleteRunnerPolicyRequest deletes a Project Policy.
 *
 * @generated from message gitpod.v1.DeleteRunnerPolicyRequest
 */
export type DeleteRunnerPolicyRequest = Message<"gitpod.v1.DeleteRunnerPolicyRequest"> & {
    /**
     * runner_id specifies the project identifier
     *
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * group_id specifies the group_id identifier
     *
     * @generated from field: string group_id = 2;
     */
    groupId: string;
};
/**
 * Describes the message gitpod.v1.DeleteRunnerPolicyRequest.
 * Use `create(DeleteRunnerPolicyRequestSchema)` to create a new message.
 */
export declare const DeleteRunnerPolicyRequestSchema: GenMessage<DeleteRunnerPolicyRequest>;
/**
 * @generated from message gitpod.v1.DeleteRunnerPolicyResponse
 */
export type DeleteRunnerPolicyResponse = Message<"gitpod.v1.DeleteRunnerPolicyResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteRunnerPolicyResponse.
 * Use `create(DeleteRunnerPolicyResponseSchema)` to create a new message.
 */
export declare const DeleteRunnerPolicyResponseSchema: GenMessage<DeleteRunnerPolicyResponse>;
/**
 * @generated from message gitpod.v1.Runner
 */
export type Runner = Message<"gitpod.v1.Runner"> & {
    /**
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * Time when the Runner was created.
     *
     * @generated from field: google.protobuf.Timestamp created_at = 2;
     */
    createdAt?: Timestamp;
    /**
     * Time when the Runner was last udpated.
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 3;
     */
    updatedAt?: Timestamp;
    /**
     * The runner's name which is shown to users
     *
     * @generated from field: string name = 4;
     */
    name: string;
    /**
     * The runner's specification
     *
     * @generated from field: gitpod.v1.RunnerSpec spec = 5;
     */
    spec?: RunnerSpec;
    /**
     * The runner's status
     *
     * @generated from field: gitpod.v1.RunnerStatus status = 6;
     */
    status?: RunnerStatus;
    /**
     * creator is the identity of the creator of the environment
     *
     * @generated from field: gitpod.v1.Subject creator = 7;
     */
    creator?: Subject;
    /**
     * The runner's kind
     *
     * @generated from field: gitpod.v1.RunnerKind kind = 8;
     */
    kind: RunnerKind;
    /**
     * The runner's provider
     *
     * @generated from field: gitpod.v1.RunnerProvider provider = 9;
     */
    provider: RunnerProvider;
    /**
     * The runner manager id specifies the runner manager for the managed runner.
     * This field is only set for managed runners.
     *
     * @generated from field: string runner_manager_id = 10;
     */
    runnerManagerId: string;
};
/**
 * Describes the message gitpod.v1.Runner.
 * Use `create(RunnerSchema)` to create a new message.
 */
export declare const RunnerSchema: GenMessage<Runner>;
/**
 * @generated from message gitpod.v1.RunnerSpec
 */
export type RunnerSpec = Message<"gitpod.v1.RunnerSpec"> & {
    /**
     * @generated from field: gitpod.v1.RunnerPhase desired_phase = 1;
     */
    desiredPhase: RunnerPhase;
    /**
     * The runner's configuration
     *
     * @generated from field: gitpod.v1.RunnerConfiguration configuration = 2;
     */
    configuration?: RunnerConfiguration;
    /**
     * The runner's variant
     *
     * @generated from field: gitpod.v1.RunnerVariant variant = 3;
     */
    variant: RunnerVariant;
};
/**
 * Describes the message gitpod.v1.RunnerSpec.
 * Use `create(RunnerSpecSchema)` to create a new message.
 */
export declare const RunnerSpecSchema: GenMessage<RunnerSpec>;
/**
 * @generated from message gitpod.v1.RunnerConfiguration
 */
export type RunnerConfiguration = Message<"gitpod.v1.RunnerConfiguration"> & {
    /**
     * Region to deploy the runner in, if applicable.
     * This is mainly used for remote runners, and is only a hint. The runner may be
     * deployed in a different region. See the runner's status for the actual region.
     *
     * @generated from field: string region = 1;
     */
    region: string;
    /**
     * The release channel the runner is on
     *
     * @generated from field: gitpod.v1.RunnerReleaseChannel release_channel = 2;
     */
    releaseChannel: RunnerReleaseChannel;
    /**
     * auto_update indicates whether the runner should automatically update itself.
     *
     * @generated from field: bool auto_update = 3;
     */
    autoUpdate: boolean;
    /**
     * metrics contains configuration for the runner's metrics collection
     *
     * @generated from field: gitpod.v1.MetricsConfiguration metrics = 4;
     */
    metrics?: MetricsConfiguration;
    /**
     * log_level is the log level for the runner
     *
     * @generated from field: gitpod.v1.LogLevel log_level = 5;
     */
    logLevel: LogLevel;
    /**
     * devcontainer_image_cache_enabled controls whether the devcontainer build cache is
     * enabled for this runner.
     * Only takes effect on supported runners, currently only AWS EC2 and Gitpod-managed runners.
     *
     * @generated from field: bool devcontainer_image_cache_enabled = 6;
     */
    devcontainerImageCacheEnabled: boolean;
    /**
     * update_window defines the daily time window (UTC) during which auto-updates are allowed.
     * If not set, updates are allowed at any time.
     *
     * @generated from field: gitpod.v1.UpdateWindow update_window = 7;
     */
    updateWindow?: UpdateWindow;
    /**
     * encrypted_honeycomb_api_key is the Honeycomb API key encrypted with the runner's public key.
     * This is an internal-only field used for debugging and is not exposed in the dashboard UI.
     *
     * @generated from field: bytes encrypted_honeycomb_api_key = 8;
     */
    encryptedHoneycombApiKey: Uint8Array;
    /**
     * continuous_profiling indicates whether continuous profiling is enabled.
     * This is an internal-only field used for debugging and is not exposed in the dashboard UI.
     *
     * @generated from field: bool continuous_profiling = 9;
     */
    continuousProfiling: boolean;
};
/**
 * Describes the message gitpod.v1.RunnerConfiguration.
 * Use `create(RunnerConfigurationSchema)` to create a new message.
 */
export declare const RunnerConfigurationSchema: GenMessage<RunnerConfiguration>;
/**
 * UpdateWindow defines a daily time window (UTC) during which auto-updates are allowed.
 * The window must be at least 2 hours long.
 * Overnight windows are supported (e.g., start_hour=22, end_hour=4).
 *
 * @generated from message gitpod.v1.UpdateWindow
 */
export type UpdateWindow = Message<"gitpod.v1.UpdateWindow"> & {
    /**
     * start_hour is the beginning of the update window as a UTC hour (0-23).
     * +required
     *
     * @generated from field: optional uint32 start_hour = 1;
     */
    startHour?: number;
    /**
     * end_hour is the end of the update window as a UTC hour (0-23).
     * If not set, defaults to start_hour + 2.
     *
     * @generated from field: optional uint32 end_hour = 2;
     */
    endHour?: number;
};
/**
 * Describes the message gitpod.v1.UpdateWindow.
 * Use `create(UpdateWindowSchema)` to create a new message.
 */
export declare const UpdateWindowSchema: GenMessage<UpdateWindow>;
/**
 * @generated from message gitpod.v1.MetricsConfiguration
 */
export type MetricsConfiguration = Message<"gitpod.v1.MetricsConfiguration"> & {
    /**
     * enabled indicates whether the runner should collect metrics
     *
     * @generated from field: bool enabled = 1;
     */
    enabled: boolean;
    /**
     * url is the URL of the metrics collector
     *
     * @generated from field: string url = 2;
     */
    url: string;
    /**
     * username is the username to use for the metrics collector
     *
     * @generated from field: string username = 3;
     */
    username: string;
    /**
     * password is the password to use for the metrics collector
     *
     * @generated from field: string password = 4;
     */
    password: string;
    /**
     * When true, the runner pushes metrics to the management plane via
     * ReportRunnerMetrics instead of directly to the remote_write endpoint.
     *
     * @generated from field: bool managed_metrics_enabled = 5;
     */
    managedMetricsEnabled: boolean;
    /**
     * When true, the runner also forwards verbose
     * metrics (e.g. aws_sdk_go_*) via the managed metrics pipeline.
     * Disabled by default to control metrics volume. Internal-only, set via CLI.
     *
     * @generated from field: bool include_verbose_metrics = 6;
     */
    includeVerboseMetrics: boolean;
};
/**
 * Describes the message gitpod.v1.MetricsConfiguration.
 * Use `create(MetricsConfigurationSchema)` to create a new message.
 */
export declare const MetricsConfigurationSchema: GenMessage<MetricsConfiguration>;
/**
 * RunnerStatus represents the status of a runner
 *
 * @generated from message gitpod.v1.RunnerStatus
 */
export type RunnerStatus = Message<"gitpod.v1.RunnerStatus"> & {
    /**
     * Time when the status was last updated.
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 1;
     */
    updatedAt?: Timestamp;
    /**
     * @generated from field: string version = 2;
     */
    version: string;
    /**
     * @generated from field: string system_details = 3;
     */
    systemDetails: string;
    /**
     * The runner's reported phase
     *
     * @generated from field: gitpod.v1.RunnerPhase phase = 4;
     */
    phase: RunnerPhase;
    /**
     * @generated from field: string log_url = 5;
     */
    logUrl: string;
    /**
     * The runner's reported message which is shown to users.
     * This message adds more context to the runner's phase.
     *
     * @generated from field: string message = 6;
     */
    message: string;
    /**
     * region is the region the runner is running in, if applicable.
     *
     * @generated from field: string region = 7;
     */
    region: string;
    /**
     * additional_info contains additional information about the runner,
     * e.g. a CloudFormation stack URL.
     *
     * @generated from field: repeated gitpod.v1.FieldValue additional_info = 8;
     */
    additionalInfo: FieldValue[];
    /**
     * capabilities is a list of capabilities the runner supports.
     *
     * @generated from field: repeated gitpod.v1.RunnerCapability capabilities = 9;
     */
    capabilities: RunnerCapability[];
    /**
     * gateway_info is information about the gateway to which the runner is connected.
     *
     * @generated from field: gitpod.v1.GatewayInfo gateway_info = 10;
     */
    gatewayInfo?: GatewayInfo;
    /**
     * llm_url is the URL of the LLM service to which the runner is connected.
     *
     * @generated from field: string llm_url = 11;
     */
    llmUrl: string;
    /**
     * public_key is the runner's public key used for encryption (32 bytes)
     *
     * @generated from field: bytes public_key = 12;
     */
    publicKey: Uint8Array;
    /**
     * support_bundle_url is the URL at which the runner support bundle can be accessed.
     * This URL provides access to pprof profiles and other debug information.
     * Only available for standalone runners.
     *
     * @generated from field: string support_bundle_url = 13;
     */
    supportBundleUrl: string;
};
/**
 * Describes the message gitpod.v1.RunnerStatus.
 * Use `create(RunnerStatusSchema)` to create a new message.
 */
export declare const RunnerStatusSchema: GenMessage<RunnerStatus>;
/**
 * @generated from message gitpod.v1.GatewayInfo
 */
export type GatewayInfo = Message<"gitpod.v1.GatewayInfo"> & {
    /**
     * @generated from field: gitpod.v1.Gateway gateway = 1;
     */
    gateway?: Gateway;
    /**
     * latency is the round-trip time of the runner to the gateway in milliseconds.
     *
     * @generated from field: google.protobuf.Duration latency = 2;
     */
    latency?: Duration;
};
/**
 * Describes the message gitpod.v1.GatewayInfo.
 * Use `create(GatewayInfoSchema)` to create a new message.
 */
export declare const GatewayInfoSchema: GenMessage<GatewayInfo>;
/**
 * @generated from message gitpod.v1.RunnerPolicy
 */
export type RunnerPolicy = Message<"gitpod.v1.RunnerPolicy"> & {
    /**
     * @generated from field: string group_id = 1;
     */
    groupId: string;
    /**
     * role is the role assigned to the group
     *
     * @generated from field: gitpod.v1.RunnerRole role = 2;
     */
    role: RunnerRole;
};
/**
 * Describes the message gitpod.v1.RunnerPolicy.
 * Use `create(RunnerPolicySchema)` to create a new message.
 */
export declare const RunnerPolicySchema: GenMessage<RunnerPolicy>;
/**
 * @generated from enum gitpod.v1.LogLevel
 */
export declare enum LogLevel {
    /**
     * @generated from enum value: LOG_LEVEL_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: LOG_LEVEL_DEBUG = 1;
     */
    DEBUG = 1,
    /**
     * @generated from enum value: LOG_LEVEL_INFO = 2;
     */
    INFO = 2,
    /**
     * @generated from enum value: LOG_LEVEL_WARN = 3;
     */
    WARN = 3,
    /**
     * @generated from enum value: LOG_LEVEL_ERROR = 4;
     */
    ERROR = 4
}
/**
 * Describes the enum gitpod.v1.LogLevel.
 */
export declare const LogLevelSchema: GenEnum<LogLevel>;
/**
 * @generated from enum gitpod.v1.SearchMode
 */
export declare enum SearchMode {
    /**
     * SEARCH_MODE_UNSPECIFIED defaults to KEYWORD for backward compatibility
     *
     * @generated from enum value: SEARCH_MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * KEYWORD mode: Simple keyword search with automatic augmentation
     * - GitHub: Adds "user:<username>" and "is:public" qualifiers
     * - Bitbucket: Searches by name across user's accessible repositories
     * - GitLab: Not yet implemented
     *
     * @generated from enum value: SEARCH_MODE_KEYWORD = 1;
     */
    KEYWORD = 1,
    /**
     * NATIVE mode: Pass search_string directly to SCM's search API
     * - GitHub: Use GitHub's repository search syntax
     *   Examples: "org:gitpod-io language:go", "stars:>100 fork:true"
     * - Bitbucket: Use Bitbucket's query language
     *   Examples: "name~\"api\" AND project.key=\"PROJ\""
     * - GitLab: Use GitLab's search parameters
     *   Examples: "scope=projects&search=kubernetes"
     *
     * @generated from enum value: SEARCH_MODE_NATIVE = 2;
     */
    NATIVE = 2
}
/**
 * Describes the enum gitpod.v1.SearchMode.
 */
export declare const SearchModeSchema: GenEnum<SearchMode>;
/**
 * @generated from enum gitpod.v1.RunnerVariant
 */
export declare enum RunnerVariant {
    /**
     * @generated from enum value: RUNNER_VARIANT_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: RUNNER_VARIANT_STANDARD = 1;
     */
    STANDARD = 1,
    /**
     * @generated from enum value: RUNNER_VARIANT_ENTERPRISE = 2;
     */
    ENTERPRISE = 2
}
/**
 * Describes the enum gitpod.v1.RunnerVariant.
 */
export declare const RunnerVariantSchema: GenEnum<RunnerVariant>;
/**
 * @generated from enum gitpod.v1.RunnerReleaseChannel
 */
export declare enum RunnerReleaseChannel {
    /**
     * Invalid release channel
     *
     * @generated from enum value: RUNNER_RELEASE_CHANNEL_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The runner is on the stable release channel
     *
     * @generated from enum value: RUNNER_RELEASE_CHANNEL_STABLE = 1;
     */
    STABLE = 1,
    /**
     * The runner is on the latest release channel
     *
     * @generated from enum value: RUNNER_RELEASE_CHANNEL_LATEST = 2;
     */
    LATEST = 2
}
/**
 * Describes the enum gitpod.v1.RunnerReleaseChannel.
 */
export declare const RunnerReleaseChannelSchema: GenEnum<RunnerReleaseChannel>;
/**
 * RunnerPhase represents the phase a runner is in
 *
 * @generated from enum gitpod.v1.RunnerPhase
 */
export declare enum RunnerPhase {
    /**
     * Invalid phase
     *
     * @generated from enum value: RUNNER_PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The runner was created but not yet signed up
     *
     * @generated from enum value: RUNNER_PHASE_CREATED = 1;
     */
    CREATED = 1,
    /**
     * The runner was signed up and is ready to be used, but has not communicated with us yet
     *
     * @generated from enum value: RUNNER_PHASE_INACTIVE = 2;
     */
    INACTIVE = 2,
    /**
     * The runner was signed up and is ready to be used
     *
     * @generated from enum value: RUNNER_PHASE_ACTIVE = 3;
     */
    ACTIVE = 3,
    /**
     * The runner is in the process of being deleted.
     *
     * @generated from enum value: RUNNER_PHASE_DELETING = 4;
     */
    DELETING = 4,
    /**
     * The runner has been deleted.
     *
     * @generated from enum value: RUNNER_PHASE_DELETED = 5;
     */
    DELETED = 5,
    /**
     * The runner is in a degraded state.
     *
     * @generated from enum value: RUNNER_PHASE_DEGRADED = 6;
     */
    DEGRADED = 6
}
/**
 * Describes the enum gitpod.v1.RunnerPhase.
 */
export declare const RunnerPhaseSchema: GenEnum<RunnerPhase>;
/**
 * @generated from enum gitpod.v1.RunnerCapability
 */
export declare enum RunnerCapability {
    /**
     * @generated from enum value: RUNNER_CAPABILITY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * RUNNER_CAPABILITY_FETCH_LOCAL_SCM_INTEGRATIONS is used by local runners to indicate they support fetching SCM Integrations.
     *
     * @generated from enum value: RUNNER_CAPABILITY_FETCH_LOCAL_SCM_INTEGRATIONS = 1;
     */
    FETCH_LOCAL_SCM_INTEGRATIONS = 1,
    /**
     * RUNNER_CAPABILITY_SECRET_CONTAINER_REGISTRY is used by runners to indicate they support secret container registries.
     *
     * @generated from enum value: RUNNER_CAPABILITY_SECRET_CONTAINER_REGISTRY = 2;
     */
    SECRET_CONTAINER_REGISTRY = 2,
    /**
     * RUNNER_CAPABILITY_AGENT_EXECUTION is used by runners to indicate they support agent execution.
     *
     * @generated from enum value: RUNNER_CAPABILITY_AGENT_EXECUTION = 3;
     */
    AGENT_EXECUTION = 3,
    /**
     * RUNNER_CAPABILITY_ALLOW_ENV_TOKEN_POPULATION is used by runners to indicate they support population of the environment token.
     *
     * @generated from enum value: RUNNER_CAPABILITY_ALLOW_ENV_TOKEN_POPULATION = 4;
     */
    ALLOW_ENV_TOKEN_POPULATION = 4,
    /**
     * RUNNER_CAPABILITY_DEFAULT_DEV_CONTAINER_IMAGE is used by runners to indicate they support the default dev container image.
     *
     * @generated from enum value: RUNNER_CAPABILITY_DEFAULT_DEV_CONTAINER_IMAGE = 5;
     */
    DEFAULT_DEV_CONTAINER_IMAGE = 5,
    /**
     * RUNNER_CAPABILITY_ENVIRONMENT_SNAPSHOT is used by runners to indicate they support taking a snapshot of an environment.
     *
     * @generated from enum value: RUNNER_CAPABILITY_ENVIRONMENT_SNAPSHOT = 6;
     */
    ENVIRONMENT_SNAPSHOT = 6,
    /**
     * RUNNER_CAPABILITY_PREBUILDS_BEFORE_SNAPSHOT_TRIGGER is used by runners to indicate they support the before_snapshot automation trigger.
     * This trigger fires after prebuild tasks complete but before the snapshot is taken.
     *
     * @generated from enum value: RUNNER_CAPABILITY_PREBUILDS_BEFORE_SNAPSHOT_TRIGGER = 7;
     */
    PREBUILDS_BEFORE_SNAPSHOT_TRIGGER = 7,
    /**
     * RUNNER_CAPABILITY_LIST_SCM_ORGANIZATIONS is used by runners to indicate they support listing SCM organizations.
     *
     * @generated from enum value: RUNNER_CAPABILITY_LIST_SCM_ORGANIZATIONS = 8;
     */
    LIST_SCM_ORGANIZATIONS = 8,
    /**
     * RUNNER_CAPABILITY_CHECK_REPOSITORY_ACCESS is used by runners to indicate they support checking repository access.
     *
     * @generated from enum value: RUNNER_CAPABILITY_CHECK_REPOSITORY_ACCESS = 9;
     */
    CHECK_REPOSITORY_ACCESS = 9,
    /**
     * RUNNER_CAPABILITY_RUNNER_SIDE_AGENT is used by runners to indicate they support runner-side agent execution.
     *
     * @generated from enum value: RUNNER_CAPABILITY_RUNNER_SIDE_AGENT = 10;
     */
    RUNNER_SIDE_AGENT = 10,
    /**
     * RUNNER_CAPABILITY_WARM_POOL is used by runners to indicate they support warm pools.
     *
     * @generated from enum value: RUNNER_CAPABILITY_WARM_POOL = 11;
     */
    WARM_POOL = 11,
    /**
     * RUNNER_CAPABILITY_ASG_WARM_POOL is used by runners to indicate they support ASG-backed warm pools.
     * This is set when the CloudFormation stack includes ASG permissions and the runner has the
     * asgWarmPoolEnabled flag set.
     *
     * @generated from enum value: RUNNER_CAPABILITY_ASG_WARM_POOL = 12;
     */
    ASG_WARM_POOL = 12,
    /**
     * RUNNER_CAPABILITY_PORT_AUTHENTICATION indicates the runner supports port
     * authentication. This requires three conditions:
     *   1. Runner code: port spec server on :7070 (met by this binary version)
     *   2. Infrastructure: proxy configured with --management-plane-api-url and
     *      port 7070 reachable from proxy (varies per runner type)
     *   3. Proxy code: port auth support (co-deployed with runner, implied by 1+2)
     *
     * @generated from enum value: RUNNER_CAPABILITY_PORT_AUTHENTICATION = 13;
     */
    PORT_AUTHENTICATION = 13,
    /**
     * RUNNER_CAPABILITY_HORIZONTAL_SCALING indicates the runner supports
     * horizontal scaling with shard-aware request routing. When set, the
     * management plane uses per-shard Redis Streams instead of broadcasting
     * requests to all replicas via Pub/Sub.
     *
     * @generated from enum value: RUNNER_CAPABILITY_HORIZONTAL_SCALING = 14;
     */
    HORIZONTAL_SCALING = 14,
    /**
     * RUNNER_CAPABILITY_AGENT_EXECUTION_CNF indicates the runner can attach the
     * custom CNF proof required by CNF-bound delegated actor tokens.
     *
     * @generated from enum value: RUNNER_CAPABILITY_AGENT_EXECUTION_CNF = 15;
     */
    AGENT_EXECUTION_CNF = 15,
    /**
     * RUNNER_CAPABILITY_REDIS_STREAM indicates the runner supports consuming
     * requests and events via durable Redis Streams (per-shard and broadcast)
     * instead of the legacy Redis Pub/Sub channel.
     *
     * @generated from enum value: RUNNER_CAPABILITY_REDIS_STREAM = 16;
     */
    REDIS_STREAM = 16,
    /**
     * RUNNER_CAPABILITY_DYNAMIC_LLM_REQUEST_HEADERS indicates the runner can
     * distinguish CEL-backed LLM headers from literal proxy fallbacks and
     * forward CEL expressions to supported in-environment agents.
     *
     * @generated from enum value: RUNNER_CAPABILITY_DYNAMIC_LLM_REQUEST_HEADERS = 18;
     */
    DYNAMIC_LLM_REQUEST_HEADERS = 18
}
/**
 * Describes the enum gitpod.v1.RunnerCapability.
 */
export declare const RunnerCapabilitySchema: GenEnum<RunnerCapability>;
/**
 * @generated from enum gitpod.v1.RunnerRole
 */
export declare enum RunnerRole {
    /**
     * @generated from enum value: RUNNER_ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: RUNNER_ROLE_ADMIN = 1;
     */
    ADMIN = 1,
    /**
     * @generated from enum value: RUNNER_ROLE_USER = 2;
     */
    USER = 2
}
/**
 * Describes the enum gitpod.v1.RunnerRole.
 */
export declare const RunnerRoleSchema: GenEnum<RunnerRole>;
/**
 * @generated from service gitpod.v1.RunnerService
 */
export declare const RunnerService: GenService<{
    /**
     * Creates a new runner registration with the server. Registrations are very short-lived and must be renewed every 30 seconds.
     *
     * Use this method to:
     * - Register organization runners
     * - Set up runner configurations
     * - Initialize runner credentials
     * - Configure auto-updates
     *
     * ### Examples
     *
     * - Create an AWS runner:
     *
     *   Creates a new runner in AWS EC2.
     *
     *   ```yaml
     *   name: "AWS Runner"
     *   provider: RUNNER_PROVIDER_AWS_EC2
     *   spec:
     *     desiredPhase: RUNNER_PHASE_ACTIVE
     *     configuration:
     *       region: "us-west"
     *       releaseChannel: RUNNER_RELEASE_CHANNEL_STABLE
     *       autoUpdate: true
     *   ```
     *
     * - Create a GCP runner:
     *
     *   Creates a new runner on Google Cloud Platform.
     *
     *   ```yaml
     *   name: "GCP Runner"
     *   provider: RUNNER_PROVIDER_GCP
     *   spec:
     *     desiredPhase: RUNNER_PHASE_ACTIVE
     *     configuration:
     *       region: "us-central1"
     *       releaseChannel: RUNNER_RELEASE_CHANNEL_STABLE
     *       autoUpdate: true
     *   ```
     *
     * - Create local runner (deprecated):
     *
     *   Creates a new local runner on Linux. Local runners are deprecated;
     *   use RUNNER_PROVIDER_AWS_EC2 or RUNNER_PROVIDER_GCP instead.
     *
     *   ```yaml
     *   name: "Local Development Runner"
     *   provider: RUNNER_PROVIDER_LINUX_HOST
     *   spec:
     *     desiredPhase: RUNNER_PHASE_ACTIVE
     *     configuration:
     *       releaseChannel: RUNNER_RELEASE_CHANNEL_LATEST
     *       autoUpdate: true
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.CreateRunner
     */
    createRunner: {
        methodKind: "unary";
        input: typeof CreateRunnerRequestSchema;
        output: typeof CreateRunnerResponseSchema;
    };
    /**
     * Gets details about a specific runner.
     *
     * Use this method to:
     * - Check runner status
     * - View runner configuration
     * - Monitor runner health
     * - Verify runner capabilities
     *
     * ### Examples
     *
     * - Get runner details:
     *
     *   Retrieves information about a specific runner.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.GetRunner
     */
    getRunner: {
        methodKind: "unary";
        input: typeof GetRunnerRequestSchema;
        output: typeof GetRunnerResponseSchema;
    };
    /**
     * Lists all registered runners with optional filtering.
     *
     * Use this method to:
     * - View all available runners
     * - Filter by runner type
     * - Monitor runner status
     * - Check runner availability
     *
     * ### Examples
     *
     * - List all runners:
     *
     *   Shows all runners with pagination.
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - Filter by provider:
     *
     *   Lists only AWS EC2 runners.
     *
     *   ```yaml
     *   filter:
     *     providers: ["RUNNER_PROVIDER_AWS_EC2"]
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.ListRunners
     */
    listRunners: {
        methodKind: "unary";
        input: typeof ListRunnersRequestSchema;
        output: typeof ListRunnersResponseSchema;
    };
    /**
     * Updates a runner's configuration.
     *
     * Use this method to:
     * - Modify runner settings
     * - Update release channels
     * - Change runner status
     * - Configure auto-update settings
     *
     * ### Examples
     *
     * - Update configuration:
     *
     *   Changes runner settings.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   name: "Updated Runner Name"
     *   spec:
     *     configuration:
     *       releaseChannel: RUNNER_RELEASE_CHANNEL_LATEST
     *       autoUpdate: true
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.UpdateRunner
     */
    updateRunner: {
        methodKind: "unary";
        input: typeof UpdateRunnerRequestSchema;
        output: typeof UpdateRunnerResponseSchema;
    };
    /**
     * Deletes a runner permanently.
     *
     * Use this method to:
     * - Remove unused runners
     * - Clean up runner registrations
     * - Delete obsolete runners
     *
     * ### Examples
     *
     * - Delete runner:
     *
     *   Permanently removes a runner.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.DeleteRunner
     */
    deleteRunner: {
        methodKind: "unary";
        input: typeof DeleteRunnerRequestSchema;
        output: typeof DeleteRunnerResponseSchema;
    };
    /**
     * Creates a new authentication token for a runner.
     *
     * Use this method to:
     * - Generate runner credentials
     * - Renew expired tokens
     * - Set up runner authentication
     *
     * Note: This does not expire previously issued tokens.
     *
     * ### Examples
     *
     * - Create token:
     *
     *   Creates a new token for runner authentication.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.CreateRunnerToken
     */
    createRunnerToken: {
        methodKind: "unary";
        input: typeof CreateRunnerTokenRequestSchema;
        output: typeof CreateRunnerTokenResponseSchema;
    };
    /**
     * Creates an access token for runner logs and debug information.
     *
     * Generated tokens are valid for one hour and provide runner-specific access permissions.
     * The token is scoped to a specific runner and can be used to access support bundles.
     *
     * ### Examples
     *
     * - Generate runner logs token:
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.CreateRunnerLogsToken
     */
    createRunnerLogsToken: {
        methodKind: "unary";
        input: typeof CreateRunnerLogsTokenRequestSchema;
        output: typeof CreateRunnerLogsTokenResponseSchema;
    };
    /**
     * Parses a context URL and returns the parsed result.
     *
     * Use this method to:
     * - Validate context URLs
     * - Check repository access
     * - Verify branch existence
     *
     * Returns:
     * - FAILED_PRECONDITION if authentication is required
     * - PERMISSION_DENIED if access is not allowed
     * - INVALID_ARGUMENT if URL is invalid
     * - NOT_FOUND if repository/branch doesn't exist
     *
     * ### Examples
     *
     * - Parse URL:
     *
     *   Parses and validates a context URL.
     *
     *   ```yaml
     *   contextUrl: "https://github.com/org/repo/tree/main"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.ParseContextURL
     */
    parseContextURL: {
        methodKind: "unary";
        input: typeof ParseContextURLRequestSchema;
        output: typeof ParseContextURLResponseSchema;
    };
    /**
     * Searches for repositories across all authenticated SCM hosts.
     *
     * Use this method to:
     * - List available repositories
     * - Search repositories by name or content
     * - Discover repositories for environment creation
     *
     * Returns repositories from all authenticated SCM hosts in natural sort order.
     * If no repositories are found, returns an empty list.
     *
     * ### Examples
     *
     * - List all repositories:
     *
     *   Returns up to 25 repositories from all authenticated hosts.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * - Search repositories:
     *
     *   Searches for repositories matching the query across all hosts.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   searchString: "my-project"
     *   limit: 10
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.SearchRepositories
     */
    searchRepositories: {
        methodKind: "unary";
        input: typeof SearchRepositoriesRequestSchema;
        output: typeof SearchRepositoriesResponseSchema;
    };
    /**
     * Lists SCM organizations the user belongs to.
     *
     * Use this method to:
     * - Get all organizations for a user on a specific SCM host
     * - Check organization admin permissions for webhook creation
     *
     * ### Examples
     *
     * - List GitHub organizations:
     *
     *   Lists all organizations the user belongs to on GitHub.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   scmHost: "github.com"
     *   ```
     *
     * - Search GitLab groups:
     *
     *   Returns the first page of GitLab groups matching the substring.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   scmHost: "gitlab.com"
     *   query: "platform"
     *   pagination:
     *     pageSize: 25
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.ListSCMOrganizations
     */
    listSCMOrganizations: {
        methodKind: "unary";
        input: typeof ListSCMOrganizationsRequestSchema;
        output: typeof ListSCMOrganizationsResponseSchema;
    };
    /**
     * Checks if a user is authenticated for a specific host.
     *
     * Use this method to:
     * - Verify authentication status
     * - Get authentication URLs
     * - Check PAT support
     *
     * ### Examples
     *
     * - Check authentication:
     *
     *   Verifies authentication for a host.
     *
     *   ```yaml
     *   host: "github.com"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.CheckAuthenticationForHost
     */
    checkAuthenticationForHost: {
        methodKind: "unary";
        input: typeof CheckAuthenticationForHostRequestSchema;
        output: typeof CheckAuthenticationForHostResponseSchema;
    };
    /**
     * Checks if a principal has read access to a repository.
     *
     * Use this method to:
     * - Validate repository access before workflow execution
     * - Verify executor credentials for automation bindings
     *
     * Returns:
     * - has_access: true if the principal can read the repository
     * - FAILED_PRECONDITION if authentication is required
     * - INVALID_ARGUMENT if the repository URL is invalid
     *
     * ### Examples
     *
     * - Check access:
     *
     *   Verifies read access to a repository.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   repositoryUrl: "https://github.com/org/repo"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.CheckRepositoryAccess
     */
    checkRepositoryAccess: {
        methodKind: "unary";
        input: typeof CheckRepositoryAccessRequestSchema;
        output: typeof CheckRepositoryAccessResponseSchema;
    };
    /**
     * Lists policies for a runner.
     *
     * Use this method to:
     * - View access controls
     * - Check policy configurations
     * - Audit permissions
     *
     * ### Examples
     *
     * - List policies:
     *
     *   Shows all policies for a runner.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.ListRunnerPolicies
     */
    listRunnerPolicies: {
        methodKind: "unary";
        input: typeof ListRunnerPoliciesRequestSchema;
        output: typeof ListRunnerPoliciesResponseSchema;
    };
    /**
     * Creates a new policy for a runner.
     *
     * Use this method to:
     * - Set up access controls
     * - Define group permissions
     * - Configure role-based access
     *
     * ### Examples
     *
     * - Create admin policy:
     *
     *   Grants admin access to a group.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   groupId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   role: RUNNER_ROLE_ADMIN
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.CreateRunnerPolicy
     */
    createRunnerPolicy: {
        methodKind: "unary";
        input: typeof CreateRunnerPolicyRequestSchema;
        output: typeof CreateRunnerPolicyResponseSchema;
    };
    /**
     * Updates an existing runner policy.
     *
     * Use this method to:
     * - Modify access levels
     * - Change group roles
     * - Update permissions
     *
     * ### Examples
     *
     * - Update policy role:
     *
     *   Changes a group's access level.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   groupId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   role: RUNNER_ROLE_USER
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.UpdateRunnerPolicy
     */
    updateRunnerPolicy: {
        methodKind: "unary";
        input: typeof UpdateRunnerPolicyRequestSchema;
        output: typeof UpdateRunnerPolicyResponseSchema;
    };
    /**
     * Deletes a runner policy.
     *
     * Use this method to:
     * - Remove access controls
     * - Revoke permissions
     * - Clean up policies
     *
     * ### Examples
     *
     * - Delete policy:
     *
     *   Removes a group's access policy.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   groupId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerService.DeleteRunnerPolicy
     */
    deleteRunnerPolicy: {
        methodKind: "unary";
        input: typeof DeleteRunnerPolicyRequestSchema;
        output: typeof DeleteRunnerPolicyResponseSchema;
    };
}>;
