import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { CoAuthorTool } from "./usage_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/insights.proto.
 */
export declare const file_gitpod_v1_insights: GenFile;
/**
 * CommitCoAuthorStat represents co-author data for a single commit.
 *
 * @generated from message gitpod.v1.CommitCoAuthorStat
 */
export type CommitCoAuthorStat = Message<"gitpod.v1.CommitCoAuthorStat"> & {
    /**
     * SHA of the commit. Used with project_id as the idempotency key.
     *
     * @generated from field: string commit_hash = 1;
     */
    commitHash: string;
    /**
     * Author date of the commit.
     *
     * @generated from field: google.protobuf.Timestamp commit_date = 2;
     */
    commitDate?: Timestamp;
    /**
     * Which tool co-authored this commit, NO_COAUTHOR for solo commits,
     * or HUMAN_COAUTHOR for human pair-programming.
     * UNSPECIFIED is rejected — callers must always set a concrete value.
     *
     * @generated from field: gitpod.v1.CoAuthorTool tool = 3;
     */
    tool: CoAuthorTool;
    /**
     * Lines added in this commit.
     *
     * @generated from field: int64 lines_added = 4;
     */
    linesAdded: bigint;
    /**
     * Lines removed in this commit.
     *
     * @generated from field: int64 lines_removed = 5;
     */
    linesRemoved: bigint;
    /**
     * One-way hash of the author email. Enables distinct author counts
     * without storing PII.
     *
     * @generated from field: string author_hash = 6;
     */
    authorHash: string;
    /**
     * Raw co-author email address from the Co-authored-by trailer.
     * Empty when there is no co-author trailer. Stored verbatim so the
     * backend can reclassify historical data when new AI tools are added.
     *
     * @generated from field: string raw_coauthor = 7;
     */
    rawCoauthor: string;
    /**
     * Stable numeric user ID from the SCM provider for the commit author
     * (e.g. GitHub user.id resolved via the commit API). Used by the backend
     * to resolve the commit author to an Ona user via HostAuthenticationToken.
     * Empty when the CLI cannot resolve the email or the provider doesn't
     * support it.
     *
     * @generated from field: string author_scm_id = 8;
     */
    authorScmId: string;
};
/**
 * Describes the message gitpod.v1.CommitCoAuthorStat.
 * Use `create(CommitCoAuthorStatSchema)` to create a new message.
 */
export declare const CommitCoAuthorStatSchema: GenMessage<CommitCoAuthorStat>;
/**
 * EnableProjectInsightsRequest enables co-author insights for a project.
 *
 * @generated from message gitpod.v1.EnableProjectInsightsRequest
 */
export type EnableProjectInsightsRequest = Message<"gitpod.v1.EnableProjectInsightsRequest"> & {
    /**
     * Project to enable insights for.
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
};
/**
 * Describes the message gitpod.v1.EnableProjectInsightsRequest.
 * Use `create(EnableProjectInsightsRequestSchema)` to create a new message.
 */
export declare const EnableProjectInsightsRequestSchema: GenMessage<EnableProjectInsightsRequest>;
/**
 * @generated from message gitpod.v1.EnableProjectInsightsResponse
 */
export type EnableProjectInsightsResponse = Message<"gitpod.v1.EnableProjectInsightsResponse"> & {};
/**
 * Describes the message gitpod.v1.EnableProjectInsightsResponse.
 * Use `create(EnableProjectInsightsResponseSchema)` to create a new message.
 */
export declare const EnableProjectInsightsResponseSchema: GenMessage<EnableProjectInsightsResponse>;
/**
 * InsightsHealthIssue describes one reason why insights for a project is
 * either not runnable (prerequisite) or last failed (runtime). The
 * error_code field comes from the shared errorcodes registry; the frontend
 * renders it via the same map used for environment errors.
 *
 * @generated from message gitpod.v1.InsightsHealthIssue
 */
export type InsightsHealthIssue = Message<"gitpod.v1.InsightsHealthIssue"> & {
    /**
     * @generated from field: gitpod.v1.InsightsHealthIssue.Category category = 1;
     */
    category: InsightsHealthIssue_Category;
    /**
     * Stable machine identifier of the issue (e.g.
     * "PROJECT_NO_ENVIRONMENT_CLASS"). The frontend looks this up in the
     * generated error-codes map.
     *
     * @generated from field: string error_code = 2;
     */
    errorCode: string;
    /**
     * Rendering hints (e.g. environment_class_id, runner_id, attempted_at).
     * Keys are defined by the code that produces the issue.
     *
     * @generated from field: map<string, string> metadata = 3;
     */
    metadata: {
        [key: string]: string;
    };
    /**
     * When this issue was observed. For prerequisites it's "now"; for
     * runtime errors it's the failed execution's end time.
     *
     * @generated from field: google.protobuf.Timestamp detected_at = 4;
     */
    detectedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.InsightsHealthIssue.
 * Use `create(InsightsHealthIssueSchema)` to create a new message.
 */
export declare const InsightsHealthIssueSchema: GenMessage<InsightsHealthIssue>;
/**
 * Category distinguishes the source of the issue. The frontend may use
 * this to choose copy ("Insights can't run yet…" vs "Last insights run
 * failed…").
 *
 * @generated from enum gitpod.v1.InsightsHealthIssue.Category
 */
export declare enum InsightsHealthIssue_Category {
    /**
     * @generated from enum value: CATEGORY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The issue is a prerequisite that has not been met. Prerequisites are
     * deterministic, derived from project/org configuration, and checked
     * synchronously before a workflow execution is attempted.
     *
     * @generated from enum value: CATEGORY_PREREQUISITE = 1;
     */
    PREREQUISITE = 1,
    /**
     * The issue is a runtime failure observed after a workflow execution
     * was attempted. Runtime errors depend on runner-side state.
     *
     * @generated from enum value: CATEGORY_RUNTIME = 2;
     */
    RUNTIME = 2
}
/**
 * Describes the enum gitpod.v1.InsightsHealthIssue.Category.
 */
export declare const InsightsHealthIssue_CategorySchema: GenEnum<InsightsHealthIssue_Category>;
/**
 * DisableProjectInsightsRequest disables co-author insights for a project.
 *
 * @generated from message gitpod.v1.DisableProjectInsightsRequest
 */
export type DisableProjectInsightsRequest = Message<"gitpod.v1.DisableProjectInsightsRequest"> & {
    /**
     * Project to disable insights for.
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
};
/**
 * Describes the message gitpod.v1.DisableProjectInsightsRequest.
 * Use `create(DisableProjectInsightsRequestSchema)` to create a new message.
 */
export declare const DisableProjectInsightsRequestSchema: GenMessage<DisableProjectInsightsRequest>;
/**
 * @generated from message gitpod.v1.DisableProjectInsightsResponse
 */
export type DisableProjectInsightsResponse = Message<"gitpod.v1.DisableProjectInsightsResponse"> & {};
/**
 * Describes the message gitpod.v1.DisableProjectInsightsResponse.
 * Use `create(DisableProjectInsightsResponseSchema)` to create a new message.
 */
export declare const DisableProjectInsightsResponseSchema: GenMessage<DisableProjectInsightsResponse>;
/**
 * GetProjectInsightsStatusRequest checks whether insights is enabled for a project.
 *
 * @generated from message gitpod.v1.GetProjectInsightsStatusRequest
 */
export type GetProjectInsightsStatusRequest = Message<"gitpod.v1.GetProjectInsightsStatusRequest"> & {
    /**
     * Project to check.
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
};
/**
 * Describes the message gitpod.v1.GetProjectInsightsStatusRequest.
 * Use `create(GetProjectInsightsStatusRequestSchema)` to create a new message.
 */
export declare const GetProjectInsightsStatusRequestSchema: GenMessage<GetProjectInsightsStatusRequest>;
/**
 * @generated from message gitpod.v1.GetProjectInsightsStatusResponse
 */
export type GetProjectInsightsStatusResponse = Message<"gitpod.v1.GetProjectInsightsStatusResponse"> & {
    /**
     * Whether co-author insights is enabled for the project.
     *
     * @generated from field: bool enabled = 1;
     */
    enabled: boolean;
    /**
     * When the insights workflow last completed successfully.
     * Nil when enabled is true but no data has been collected yet (pending state).
     *
     * @generated from field: google.protobuf.Timestamp last_ran_at = 2;
     */
    lastRanAt?: Timestamp;
    /**
     * Issues preventing the workflow from running. Empty when enabled is
     * false, or when enabled and prerequisites are met. The frontend should
     * render the first issue prominently. Today only carries
     * CATEGORY_PREREQUISITE; CATEGORY_RUNTIME will be added later.
     *
     * @generated from field: repeated gitpod.v1.InsightsHealthIssue insights_health = 3;
     */
    insightsHealth: InsightsHealthIssue[];
    /**
     * Upper bound of the most recent batch successfully written for this
     * project. Nil when no data has been collected yet (first-time enable
     * or never run). The CLI reads this to decide where to resume
     * collection.
     *
     * @generated from field: google.protobuf.Timestamp data_collected_through = 4;
     */
    dataCollectedThrough?: Timestamp;
};
/**
 * Describes the message gitpod.v1.GetProjectInsightsStatusResponse.
 * Use `create(GetProjectInsightsStatusResponseSchema)` to create a new message.
 */
export declare const GetProjectInsightsStatusResponseSchema: GenMessage<GetProjectInsightsStatusResponse>;
/**
 * PullRequestStat represents speed metrics for a single merged pull request.
 *
 * @generated from message gitpod.v1.PullRequestStat
 */
export type PullRequestStat = Message<"gitpod.v1.PullRequestStat"> & {
    /**
     * PR/MR number from the SCM provider. Together with project_id forms the
     * idempotency key for upserts.
     *
     * @generated from field: int32 pr_number = 1;
     */
    prNumber: number;
    /**
     * Raw SCM username of the PR author (e.g. GitHub user.login, GitLab author.username).
     *
     * @generated from field: string author_login = 2;
     */
    authorLogin: string;
    /**
     * When the PR was opened.
     *
     * @generated from field: google.protobuf.Timestamp created_at = 3;
     */
    createdAt?: Timestamp;
    /**
     * When the PR was merged.
     *
     * @generated from field: google.protobuf.Timestamp merged_at = 4;
     */
    mergedAt?: Timestamp;
    /**
     * Author date of the earliest commit on the PR branch.
     *
     * @generated from field: google.protobuf.Timestamp first_commit_at = 5;
     */
    firstCommitAt?: Timestamp;
    /**
     * Timestamp of the earliest approving review. Unset when the PR had no approvals.
     *
     * @generated from field: google.protobuf.Timestamp first_approval_at = 6;
     */
    firstApprovalAt?: Timestamp;
    /**
     * Branch the PR was merged into (e.g. "main").
     *
     * @generated from field: string target_branch = 7;
     */
    targetBranch: string;
    /**
     * SCM platform the PR was fetched from.
     *
     * @generated from field: gitpod.v1.ScmProvider scm_provider = 8;
     */
    scmProvider: ScmProvider;
    /**
     * Stable numeric user ID from the SCM provider (e.g. GitHub user.id,
     * GitLab author.id, Bitbucket author.uuid). Used by the backend to
     * resolve the PR author to an Ona user via HostAuthenticationToken.
     * Empty when the provider doesn't supply it or the CLI is too old.
     *
     * @generated from field: string author_scm_id = 9;
     */
    authorScmId: string;
};
/**
 * Describes the message gitpod.v1.PullRequestStat.
 * Use `create(PullRequestStatSchema)` to create a new message.
 */
export declare const PullRequestStatSchema: GenMessage<PullRequestStat>;
/**
 * GetInsightsSummaryRequest returns project-level insights adoption for the org.
 *
 * @generated from message gitpod.v1.GetInsightsSummaryRequest
 */
export type GetInsightsSummaryRequest = Message<"gitpod.v1.GetInsightsSummaryRequest"> & {
    /**
     * Organization to query.
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
};
/**
 * Describes the message gitpod.v1.GetInsightsSummaryRequest.
 * Use `create(GetInsightsSummaryRequestSchema)` to create a new message.
 */
export declare const GetInsightsSummaryRequestSchema: GenMessage<GetInsightsSummaryRequest>;
/**
 * @generated from message gitpod.v1.GetInsightsSummaryResponse
 */
export type GetInsightsSummaryResponse = Message<"gitpod.v1.GetInsightsSummaryResponse"> & {
    /**
     * Number of projects with insights enabled.
     *
     * @generated from field: int64 enabled_project_count = 1;
     */
    enabledProjectCount: bigint;
    /**
     * Total number of projects in the organization.
     *
     * @generated from field: int64 total_project_count = 2;
     */
    totalProjectCount: bigint;
};
/**
 * Describes the message gitpod.v1.GetInsightsSummaryResponse.
 * Use `create(GetInsightsSummaryResponseSchema)` to create a new message.
 */
export declare const GetInsightsSummaryResponseSchema: GenMessage<GetInsightsSummaryResponse>;
/**
 * ScmProvider identifies the SCM platform a pull request was fetched from.
 *
 * @generated from enum gitpod.v1.ScmProvider
 */
export declare enum ScmProvider {
    /**
     * @generated from enum value: SCM_PROVIDER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * GitHub.
     *
     * @generated from enum value: SCM_PROVIDER_GITHUB = 1;
     */
    GITHUB = 1,
    /**
     * GitLab.
     *
     * @generated from enum value: SCM_PROVIDER_GITLAB = 2;
     */
    GITLAB = 2,
    /**
     * Bitbucket.
     *
     * @generated from enum value: SCM_PROVIDER_BITBUCKET = 3;
     */
    BITBUCKET = 3
}
/**
 * Describes the enum gitpod.v1.ScmProvider.
 */
export declare const ScmProviderSchema: GenEnum<ScmProvider>;
/**
 * CollectionOutcome describes the result of a single CLI collection batch.
 * Persisted in project_insights_settings so operators can diagnose NULL
 * watermarks from the DB alone.
 *
 * @generated from enum gitpod.v1.CollectionOutcome
 */
export declare enum CollectionOutcome {
    /**
     * @generated from enum value: COLLECTION_OUTCOME_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Data collected and reported normally.
     *
     * @generated from enum value: COLLECTION_OUTCOME_SUCCESS = 1;
     */
    SUCCESS = 1,
    /**
     * No commits or PRs found in the collection window. The watermark still
     * advances so the empty window is not re-fetched.
     *
     * @generated from enum value: COLLECTION_OUTCOME_EMPTY_WINDOW = 2;
     */
    EMPTY_WINDOW = 2,
    /**
     * The CLI failed to read git log (e.g. corrupt repo, missing branch).
     *
     * @generated from enum value: COLLECTION_OUTCOME_GIT_LOG_ERROR = 3;
     */
    GIT_LOG_ERROR = 3,
    /**
     * The CLI failed to fetch PR data from the SCM API (e.g. auth failure,
     * rate limit, network error).
     *
     * @generated from enum value: COLLECTION_OUTCOME_PR_FETCH_ERROR = 4;
     */
    PR_FETCH_ERROR = 4,
    /**
     * The CLI failed during setup before the collection loop started
     * (e.g. credential resolution, project resolution, git remote parsing).
     *
     * @generated from enum value: COLLECTION_OUTCOME_SETUP_ERROR = 5;
     */
    SETUP_ERROR = 5,
    /**
     * Catch-all for unexpected errors not covered by a specific variant.
     *
     * @generated from enum value: COLLECTION_OUTCOME_UNKNOWN_ERROR = 6;
     */
    UNKNOWN_ERROR = 6
}
/**
 * Describes the enum gitpod.v1.CollectionOutcome.
 */
export declare const CollectionOutcomeSchema: GenEnum<CollectionOutcome>;
/**
 * InsightsService provides AI code attribution analytics for projects.
 * The CLI reports per-commit co-author data from git history, and the
 * dashboard reads aggregated stats.
 *
 * @generated from service gitpod.v1.InsightsService
 */
export declare const InsightsService: GenService<{
    /**
     * Enables co-author insights for a project. Idempotent.
     *
     * @generated from rpc gitpod.v1.InsightsService.EnableProjectInsights
     */
    enableProjectInsights: {
        methodKind: "unary";
        input: typeof EnableProjectInsightsRequestSchema;
        output: typeof EnableProjectInsightsResponseSchema;
    };
    /**
     * Disables co-author insights for a project. Idempotent.
     * Removes the associated workflow (if any) and sets enabled to false.
     *
     * @generated from rpc gitpod.v1.InsightsService.DisableProjectInsights
     */
    disableProjectInsights: {
        methodKind: "unary";
        input: typeof DisableProjectInsightsRequestSchema;
        output: typeof DisableProjectInsightsResponseSchema;
    };
    /**
     * Returns whether co-author insights is enabled for a project.
     *
     * @generated from rpc gitpod.v1.InsightsService.GetProjectInsightsStatus
     */
    getProjectInsightsStatus: {
        methodKind: "unary";
        input: typeof GetProjectInsightsStatusRequestSchema;
        output: typeof GetProjectInsightsStatusResponseSchema;
    };
    /**
     * Returns how many projects have insights enabled vs total projects in the org.
     *
     * @generated from rpc gitpod.v1.InsightsService.GetInsightsSummary
     */
    getInsightsSummary: {
        methodKind: "unary";
        input: typeof GetInsightsSummaryRequestSchema;
        output: typeof GetInsightsSummaryResponseSchema;
    };
}>;
