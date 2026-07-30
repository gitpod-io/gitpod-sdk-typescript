// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { PagePromise, RecordsPage, type RecordsPageParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

/**
 * UsageService provides usage information about environments, users, and projects.
 */
export class Usage extends APIResource {
  /**
   * Gets a summary of adoption and usage metrics.
   *
   * Returns all scalar values, trends, and a sparkline for the Adoption & Usage
   * insight category. For full-resolution time series, use the individual time
   * series RPCs.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const response = await client.usage.getAdoptionUsageSummary(
   *   {
   *     dateRange: {
   *       endTime: '2024-02-01T00:00:00Z',
   *       startTime: '2024-01-01T00:00:00Z',
   *     },
   *     projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   },
   * );
   * ```
   */
  getAdoptionUsageSummary(
    body: UsageGetAdoptionUsageSummaryParams,
    options?: RequestOptions,
  ): APIPromise<UsageGetAdoptionUsageSummaryResponse> {
    return this._client.post('/gitpod.v1.UsageService/GetAdoptionUsageSummary', { body, ...options });
  }

  /**
   * Gets aggregated agent trace summary for the organization or a specific project.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const response = await client.usage.getAgentTraceSummary({
   *   dateRange: {
   *     endTime: '2024-02-01T00:00:00Z',
   *     startTime: '2024-01-01T00:00:00Z',
   *   },
   *   projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   * });
   * ```
   */
  getAgentTraceSummary(
    body: UsageGetAgentTraceSummaryParams,
    options?: RequestOptions,
  ): APIPromise<UsageGetAgentTraceSummaryResponse> {
    return this._client.post('/gitpod.v1.UsageService/GetAgentTraceSummary', { body, ...options });
  }

  /**
   * Gets agent trace data as a time series.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const response = await client.usage.getAgentTraceTimeSeries(
   *   {
   *     dateRange: {
   *       endTime: '2024-02-01T00:00:00Z',
   *       startTime: '2024-01-01T00:00:00Z',
   *     },
   *     projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *     resolution: 'RESOLUTION_WEEKLY',
   *   },
   * );
   * ```
   */
  getAgentTraceTimeSeries(
    body: UsageGetAgentTraceTimeSeriesParams,
    options?: RequestOptions,
  ): APIPromise<UsageGetAgentTraceTimeSeriesResponse> {
    return this._client.post('/gitpod.v1.UsageService/GetAgentTraceTimeSeries', { body, ...options });
  }

  /**
   * Gets aggregated co-author summary for the organization or a specific project.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const response = await client.usage.getCoAuthorSummary({
   *   dateRange: {
   *     endTime: '2024-02-01T00:00:00Z',
   *     startTime: '2024-01-01T00:00:00Z',
   *   },
   *   projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   * });
   * ```
   */
  getCoAuthorSummary(
    body: UsageGetCoAuthorSummaryParams,
    options?: RequestOptions,
  ): APIPromise<UsageGetCoAuthorSummaryResponse> {
    return this._client.post('/gitpod.v1.UsageService/GetCoAuthorSummary', { body, ...options });
  }

  /**
   * Gets co-author contribution data as a time series.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const response = await client.usage.getCoAuthorTimeSeries({
   *   dateRange: {
   *     endTime: '2024-02-01T00:00:00Z',
   *     startTime: '2024-01-01T00:00:00Z',
   *   },
   *   projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   resolution: 'RESOLUTION_WEEKLY',
   * });
   * ```
   */
  getCoAuthorTimeSeries(
    body: UsageGetCoAuthorTimeSeriesParams,
    options?: RequestOptions,
  ): APIPromise<UsageGetCoAuthorTimeSeriesResponse> {
    return this._client.post('/gitpod.v1.UsageService/GetCoAuthorTimeSeries', { body, ...options });
  }

  /**
   * Gets aggregated PR speed summary for the organization or a specific project.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const response = await client.usage.getPrSummary({
   *   dateRange: {
   *     endTime: '2024-02-01T00:00:00Z',
   *     startTime: '2024-01-01T00:00:00Z',
   *   },
   *   projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   * });
   * ```
   */
  getPrSummary(
    body: UsageGetPrSummaryParams,
    options?: RequestOptions,
  ): APIPromise<UsageGetPrSummaryResponse> {
    return this._client.post('/gitpod.v1.UsageService/GetPrSummary', { body, ...options });
  }

  /**
   * Gets PR speed metrics as a time series.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const response = await client.usage.getPrTimeSeries({
   *   dateRange: {
   *     endTime: '2024-02-01T00:00:00Z',
   *     startTime: '2024-01-01T00:00:00Z',
   *   },
   *   projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   resolution: 'RESOLUTION_WEEKLY',
   * });
   * ```
   */
  getPrTimeSeries(
    body: UsageGetPrTimeSeriesParams,
    options?: RequestOptions,
  ): APIPromise<UsageGetPrTimeSeriesResponse> {
    return this._client.post('/gitpod.v1.UsageService/GetPrTimeSeries', { body, ...options });
  }

  /**
   * Lists completed environment runtime records within a specified date range.
   *
   * Returns a list of environment runtime records that were completed within the
   * specified date range. Records of currently running environments are not
   * included.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const environmentUsageRecord of client.usage.listEnvironmentRuntimeRecords(
   *   {
   *     filter: {
   *       dateRange: {
   *         endTime: '2024-01-02T00:00:00Z',
   *         startTime: '2024-01-01T00:00:00Z',
   *       },
   *       projectId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *     },
   *     pagination: { pageSize: 100 },
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  listEnvironmentRuntimeRecords(
    params: UsageListEnvironmentRuntimeRecordsParams,
    options?: RequestOptions,
  ): PagePromise<EnvironmentUsageRecordsRecordsPage, EnvironmentUsageRecord> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.UsageService/ListEnvironmentUsageRecords',
      RecordsPage<EnvironmentUsageRecord>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }
}

export type EnvironmentUsageRecordsRecordsPage = RecordsPage<EnvironmentUsageRecord>;

/**
 * AgentTraceModelBreakdown contains stats for a single LLM model.
 */
export interface AgentTraceModelBreakdown {
  /**
   * Lines added by sessions using this model.
   */
  linesAdded?: string;

  /**
   * Lines removed by sessions using this model.
   */
  linesRemoved?: string;

  /**
   * The model these stats are for.
   */
  model?: SupportedModel;

  /**
   * Number of sessions that used this model.
   */
  sessions?: string;
}

/**
 * AgentTraceSummary contains aggregate totals for a date range.
 */
export interface AgentTraceSummary {
  /**
   * Per-model breakdown of session stats.
   */
  byModel?: Array<AgentTraceModelBreakdown>;

  /**
   * Total lines added across all sessions.
   */
  totalLinesAdded?: string;

  /**
   * Fractional change in total_lines_added compared to the previous period.
   */
  totalLinesAddedTrend?: number;

  /**
   * Total lines removed across all sessions.
   */
  totalLinesRemoved?: string;

  /**
   * Fractional change in total_lines_removed compared to the previous period.
   */
  totalLinesRemovedTrend?: number;

  /**
   * Total number of agent trace sessions in the date range.
   */
  totalSessions?: string;

  /**
   * Fractional change in total_sessions compared to the previous period of equal
   * length. Computed as (current - previous) / previous. Zero when there is no
   * previous data.
   */
  totalSessionsTrend?: number;
}

/**
 * AgentTraceTimeBucket contains stats for a single time period.
 */
export interface AgentTraceTimeBucket {
  /**
   * Per-model breakdown for this bucket.
   */
  byModel?: Array<AgentTraceModelBreakdown>;

  /**
   * Start of this time bucket.
   */
  startTime?: string;

  /**
   * Total lines added in this bucket.
   */
  totalLinesAdded?: string;

  /**
   * Total lines removed in this bucket.
   */
  totalLinesRemoved?: string;

  /**
   * Number of agent trace sessions in this bucket.
   */
  totalSessions?: string;
}

/**
 * CoAuthorSummary contains aggregate totals for a date range.
 */
export interface CoAuthorSummary {
  /**
   * Per-tool breakdown of contribution stats.
   */
  byTool?: Array<ToolBreakdown>;

  /**
   * Number of distinct authors (by author_hash).
   */
  distinctAuthors?: string;

  /**
   * Fractional change in distinct_authors compared to the previous period.
   */
  distinctAuthorsTrend?: number;

  /**
   * Total number of commits in the date range.
   */
  totalCommits?: string;

  /**
   * Fractional change in total_commits compared to the previous period of equal
   * length. Computed as (current - previous) / previous. Zero when there is no
   * previous data.
   */
  totalCommitsTrend?: number;

  /**
   * Total lines added across all commits.
   */
  totalLinesAdded?: string;

  /**
   * Fractional change in total_lines_added compared to the previous period.
   */
  totalLinesAddedTrend?: number;

  /**
   * Total lines removed across all commits.
   */
  totalLinesRemoved?: string;

  /**
   * Fractional change in total_lines_removed compared to the previous period.
   */
  totalLinesRemovedTrend?: number;
}

/**
 * CoAuthorTimeBucket contains stats for a single time period.
 */
export interface CoAuthorTimeBucket {
  /**
   * Ratio of AI-assisted lines added to total lines added (0.0–1.0).
   */
  aiRatio?: number;

  /**
   * Per-tool breakdown for this bucket.
   */
  byTool?: Array<ToolBreakdown>;

  /**
   * Number of distinct authors (by author_hash) in this bucket.
   */
  distinctAuthors?: string;

  /**
   * Start of this time bucket.
   */
  startTime?: string;

  /**
   * Total number of commits in this bucket (across all tools).
   */
  totalCommits?: string;

  /**
   * Total lines added in this bucket (across all tools).
   */
  totalLinesAdded?: string;

  /**
   * Total lines removed in this bucket (across all tools).
   */
  totalLinesRemoved?: string;
}

/**
 * CoAuthorTool identifies the AI tool that co-authored a commit. UNSPECIFIED (0)
 * is the proto default and must not appear in reported data. Use HUMAN for commits
 * with no AI co-author.
 */
export type CoAuthorTool =
  | 'CO_AUTHOR_TOOL_UNSPECIFIED'
  | 'CO_AUTHOR_TOOL_NO_COAUTHOR'
  | 'CO_AUTHOR_TOOL_HUMAN_COAUTHOR'
  | 'CO_AUTHOR_TOOL_ONA'
  | 'CO_AUTHOR_TOOL_GITHUB_COPILOT'
  | 'CO_AUTHOR_TOOL_CURSOR'
  | 'CO_AUTHOR_TOOL_OTHER'
  | 'CO_AUTHOR_TOOL_CLAUDE'
  | 'CO_AUTHOR_TOOL_CODEX';

/**
 * EnvironmentUsageRecord represents a record of an environment from start to stop.
 */
export interface EnvironmentUsageRecord {
  /**
   * Environment usage record ID.
   */
  id?: string;

  /**
   * Time when the environment was created.
   */
  createdAt?: string;

  /**
   * Environment class ID associated with the record.
   */
  environmentClassId?: string;

  /**
   * Environment ID associated with the record.
   */
  environmentId?: string;

  /**
   * Project ID associated with the environment (if available).
   */
  projectId?: string;

  /**
   * Runner ID associated with the environment.
   */
  runnerId?: string;

  /**
   * Time when the environment was stopped.
   */
  stoppedAt?: string;

  /**
   * User ID is the ID of the user who created the environment associated with the
   * record.
   */
  userId?: string;
}

/**
 * PrSummary contains aggregate PR speed metrics for a date range.
 */
export interface PrSummary {
  /**
   * PRs merged to the default branch per week.
   */
  deploymentFrequency?: number;

  /**
   * Fractional change in deployment_frequency vs previous period. Computed as
   * (current - previous) / previous.
   */
  deploymentFrequencyTrend?: number;

  /**
   * Median lead time for changes in seconds (first commit → merge).
   */
  leadTimeSeconds?: number;

  /**
   * Fractional change in lead_time_seconds vs previous period. Computed as
   * (current - previous) / previous.
   */
  leadTimeTrend?: number;

  /**
   * Total PRs merged in the date range.
   */
  prsMergedCount?: string;

  /**
   * Fractional change in prs_merged_count vs previous period. Computed as (current -
   * previous) / previous.
   */
  prsMergedTrend?: number;

  /**
   * Median time to first approval in seconds. Zero when no PRs in the range had
   * approvals.
   */
  timeToFirstApprovalSeconds?: number;

  /**
   * Fractional change in time_to_first_approval_seconds vs previous period. Computed
   * as (current - previous) / previous.
   */
  timeToFirstApprovalTrend?: number;
}

/**
 * PrTimeBucket contains PR speed metrics for a single time period.
 */
export interface PrTimeBucket {
  /**
   * Total number of deploys (merged PRs) in this bucket.
   */
  deploys?: string;

  /**
   * Median lead time in seconds for PRs merged in this bucket.
   */
  leadTimeSeconds?: number;

  /**
   * Number of PRs merged in this bucket.
   */
  prsMergedCount?: string;

  /**
   * Start of this time bucket.
   */
  startTime?: string;

  /**
   * Median time to first approval in seconds for PRs in this bucket. Zero when no
   * PRs in the bucket had approvals.
   */
  timeToFirstApprovalSeconds?: number;
}

/**
 * Resolution specifies the time granularity for time series data.
 */
export type Resolution =
  | 'RESOLUTION_UNSPECIFIED'
  | 'RESOLUTION_HOURLY'
  | 'RESOLUTION_DAILY'
  | 'RESOLUTION_WEEKLY'
  | 'RESOLUTION_MONTHLY';

/**
 * SupportedModel enumerates the LLM models available for agent executions
 */
export type SupportedModel =
  | 'SUPPORTED_MODEL_UNSPECIFIED'
  | 'SUPPORTED_MODEL_SONNET_3_5'
  | 'SUPPORTED_MODEL_SONNET_3_7'
  | 'SUPPORTED_MODEL_SONNET_3_7_EXTENDED'
  | 'SUPPORTED_MODEL_SONNET_4'
  | 'SUPPORTED_MODEL_SONNET_4_EXTENDED'
  | 'SUPPORTED_MODEL_SONNET_4_5'
  | 'SUPPORTED_MODEL_SONNET_4_5_EXTENDED'
  | 'SUPPORTED_MODEL_SONNET_4_6'
  | 'SUPPORTED_MODEL_SONNET_4_6_EXTENDED'
  | 'SUPPORTED_MODEL_SONNET_5'
  | 'SUPPORTED_MODEL_OPUS_4'
  | 'SUPPORTED_MODEL_OPUS_4_EXTENDED'
  | 'SUPPORTED_MODEL_OPUS_4_5'
  | 'SUPPORTED_MODEL_OPUS_4_5_EXTENDED'
  | 'SUPPORTED_MODEL_OPUS_4_6'
  | 'SUPPORTED_MODEL_OPUS_4_6_EXTENDED'
  | 'SUPPORTED_MODEL_OPUS_4_7'
  | 'SUPPORTED_MODEL_OPUS_4_8'
  | 'SUPPORTED_MODEL_HAIKU_4_5'
  | 'SUPPORTED_MODEL_OPENAI_4O'
  | 'SUPPORTED_MODEL_OPENAI_4O_MINI'
  | 'SUPPORTED_MODEL_OPENAI_O1'
  | 'SUPPORTED_MODEL_OPENAI_O1_MINI'
  | 'SUPPORTED_MODEL_OPENAI_AUTO';

export interface TimeSeriesPoint {
  /**
   * Timestamp for this data point.
   */
  time?: string;

  /**
   * The numerical value for this data point.
   */
  value?: number;
}

/**
 * ToolBreakdown contains stats for a single AI tool (or human).
 */
export interface ToolBreakdown {
  /**
   * Number of commits attributed to this tool.
   */
  commits?: string;

  /**
   * Distinct authors who used this tool.
   */
  distinctAuthors?: string;

  /**
   * Lines added by this tool.
   */
  linesAdded?: string;

  /**
   * Lines removed by this tool.
   */
  linesRemoved?: string;

  /**
   * The tool these stats are for.
   */
  tool?: CoAuthorTool;
}

export interface UsageGetAdoptionUsageSummaryResponse {
  /**
   * Count of active users in the date range.
   */
  activeUsersCount?: string;

  /**
   * Fractional change in active_users_count vs previous period. Computed as
   * (current - previous) / previous.
   */
  activeUsersTrend?: number;

  /**
   * Average environment runtime in seconds per active user.
   */
  envRuntimePerUserSeconds?: number;

  /**
   * Fractional change in env_runtime_per_user_seconds vs previous period. Computed
   * as (current - previous) / previous.
   */
  envRuntimePerUserTrend?: number;

  /**
   * Count of power users in the date range.
   */
  powerUsersCount?: string;

  /**
   * Threshold in seconds used to determine power users. Displayed to users so they
   * understand the definition.
   */
  powerUsersThresholdSeconds?: string;

  /**
   * Fractional change in power_users_count vs previous period. Computed as
   * (current - previous) / previous.
   */
  powerUsersTrend?: number;

  /**
   * Count of environment sessions (total starts) in the date range.
   */
  sessionsCount?: string;

  /**
   * Fractional change in sessions_count vs previous period. Computed as (current -
   * previous) / previous.
   */
  sessionsTrend?: number;

  /**
   * Sparkline data for the card's trend line (typically ~4 weekly points).
   */
  sparkline?: Array<TimeSeriesPoint>;
}

export interface UsageGetAgentTraceSummaryResponse {
  /**
   * Sparkline data for card rendering.
   */
  sparkline?: Array<TimeSeriesPoint>;

  /**
   * Summary totals and trends for the requested date range.
   */
  summary?: AgentTraceSummary;
}

export interface UsageGetAgentTraceTimeSeriesResponse {
  /**
   * Time series of agent trace stats, bucketed by the requested resolution.
   */
  timeSeries?: Array<AgentTraceTimeBucket>;
}

export interface UsageGetCoAuthorSummaryResponse {
  /**
   * Sparkline data for card rendering.
   */
  sparkline?: Array<TimeSeriesPoint>;

  /**
   * Summary totals and trends for the requested date range.
   */
  summary?: CoAuthorSummary;
}

export interface UsageGetCoAuthorTimeSeriesResponse {
  /**
   * Time series of contribution stats, bucketed by the requested resolution.
   */
  timeSeries?: Array<CoAuthorTimeBucket>;
}

export interface UsageGetPrSummaryResponse {
  /**
   * Sparkline data for card rendering.
   */
  sparkline?: Array<TimeSeriesPoint>;

  /**
   * Summary totals and trends for the requested date range.
   */
  summary?: PrSummary;
}

export interface UsageGetPrTimeSeriesResponse {
  /**
   * Time series of PR speed metrics, bucketed by the requested resolution.
   */
  timeSeries?: Array<PrTimeBucket>;
}

export interface UsageGetAdoptionUsageSummaryParams {
  /**
   * Date range to query metrics within.
   */
  dateRange: Shared.DateRange;

  /**
   * Optional project ID to filter metrics by.
   */
  projectId?: string;

  /**
   * Optional team ID to scope results to members of a specific team.
   */
  teamId?: string;

  /**
   * Optional user ID to filter metrics for a specific user (personal insights view).
   */
  userId?: string;
}

export interface UsageGetAgentTraceSummaryParams {
  /**
   * Date range to query within.
   */
  dateRange: Shared.DateRange;

  /**
   * Optional project ID to scope results.
   */
  projectId?: string;

  /**
   * Optional team ID to scope results to a specific team. Mutually exclusive with
   * user_id.
   */
  teamId?: string;

  /**
   * Optional user ID to scope results to a specific user. Mutually exclusive with
   * team_id.
   */
  userId?: string;
}

export interface UsageGetAgentTraceTimeSeriesParams {
  /**
   * Date range to query within.
   */
  dateRange: Shared.DateRange;

  /**
   * Optional project ID to scope results.
   */
  projectId?: string;

  /**
   * Time resolution for the series data.
   */
  resolution?: Resolution;

  /**
   * Optional team ID to scope results to a specific team. Mutually exclusive with
   * user_id.
   */
  teamId?: string;

  /**
   * Optional user ID to scope results to a specific user. Mutually exclusive with
   * team_id.
   */
  userId?: string;
}

export interface UsageGetCoAuthorSummaryParams {
  /**
   * Date range to query within.
   */
  dateRange: Shared.DateRange;

  /**
   * Optional project ID to scope results.
   */
  projectId?: string;

  /**
   * Optional team ID to scope results to a specific team. Mutually exclusive with
   * user_id.
   */
  teamId?: string;

  /**
   * Optional user ID to scope results to a specific user. Mutually exclusive with
   * team_id.
   */
  userId?: string;
}

export interface UsageGetCoAuthorTimeSeriesParams {
  /**
   * Date range to query within.
   */
  dateRange: Shared.DateRange;

  /**
   * Optional project ID to scope results.
   */
  projectId?: string;

  /**
   * Time resolution for the series data.
   */
  resolution?: Resolution;

  /**
   * Optional team ID to scope results to a specific team. Mutually exclusive with
   * user_id.
   */
  teamId?: string;

  /**
   * Optional user ID to scope results to a specific user. Mutually exclusive with
   * team_id.
   */
  userId?: string;
}

export interface UsageGetPrSummaryParams {
  /**
   * Date range to query within.
   */
  dateRange: Shared.DateRange;

  /**
   * Optional project ID to scope results.
   */
  projectId?: string;

  /**
   * Optional team ID to scope results to a specific team. Mutually exclusive with
   * user_id.
   */
  teamId?: string;

  /**
   * Optional user ID to scope results to a specific user. Mutually exclusive with
   * team_id.
   */
  userId?: string;
}

export interface UsageGetPrTimeSeriesParams {
  /**
   * Date range to query within.
   */
  dateRange: Shared.DateRange;

  /**
   * Optional project ID to scope results.
   */
  projectId?: string;

  /**
   * Time resolution for the series data.
   */
  resolution?: Resolution;

  /**
   * Optional team ID to scope results to a specific team. Mutually exclusive with
   * user_id.
   */
  teamId?: string;

  /**
   * Optional user ID to scope results to a specific user. Mutually exclusive with
   * team_id.
   */
  userId?: string;
}

export interface UsageListEnvironmentRuntimeRecordsParams extends RecordsPageParams {
  /**
   * Body param: Filter options.
   */
  filter?: UsageListEnvironmentRuntimeRecordsParams.Filter;

  /**
   * Body param: Pagination options.
   */
  pagination?: UsageListEnvironmentRuntimeRecordsParams.Pagination;
}

export namespace UsageListEnvironmentRuntimeRecordsParams {
  /**
   * Filter options.
   */
  export interface Filter {
    /**
     * Date range to query runtime records within.
     */
    dateRange: Shared.DateRange;

    /**
     * Optional project ID to filter runtime records by.
     */
    projectId?: string;
  }

  /**
   * Pagination options.
   */
  export interface Pagination {
    /**
     * Token for the next set of results that was returned as next_token of a
     * PaginationResponse
     */
    token?: string;

    /**
     * Page size is the maximum number of results to retrieve per page. Defaults to 25.
     * Maximum 100.
     */
    pageSize?: number;
  }
}

export declare namespace Usage {
  export {
    type AgentTraceModelBreakdown as AgentTraceModelBreakdown,
    type AgentTraceSummary as AgentTraceSummary,
    type AgentTraceTimeBucket as AgentTraceTimeBucket,
    type CoAuthorSummary as CoAuthorSummary,
    type CoAuthorTimeBucket as CoAuthorTimeBucket,
    type CoAuthorTool as CoAuthorTool,
    type EnvironmentUsageRecord as EnvironmentUsageRecord,
    type PrSummary as PrSummary,
    type PrTimeBucket as PrTimeBucket,
    type Resolution as Resolution,
    type SupportedModel as SupportedModel,
    type TimeSeriesPoint as TimeSeriesPoint,
    type ToolBreakdown as ToolBreakdown,
    type UsageGetAdoptionUsageSummaryResponse as UsageGetAdoptionUsageSummaryResponse,
    type UsageGetAgentTraceSummaryResponse as UsageGetAgentTraceSummaryResponse,
    type UsageGetAgentTraceTimeSeriesResponse as UsageGetAgentTraceTimeSeriesResponse,
    type UsageGetCoAuthorSummaryResponse as UsageGetCoAuthorSummaryResponse,
    type UsageGetCoAuthorTimeSeriesResponse as UsageGetCoAuthorTimeSeriesResponse,
    type UsageGetPrSummaryResponse as UsageGetPrSummaryResponse,
    type UsageGetPrTimeSeriesResponse as UsageGetPrTimeSeriesResponse,
    type EnvironmentUsageRecordsRecordsPage as EnvironmentUsageRecordsRecordsPage,
    type UsageGetAdoptionUsageSummaryParams as UsageGetAdoptionUsageSummaryParams,
    type UsageGetAgentTraceSummaryParams as UsageGetAgentTraceSummaryParams,
    type UsageGetAgentTraceTimeSeriesParams as UsageGetAgentTraceTimeSeriesParams,
    type UsageGetCoAuthorSummaryParams as UsageGetCoAuthorSummaryParams,
    type UsageGetCoAuthorTimeSeriesParams as UsageGetCoAuthorTimeSeriesParams,
    type UsageGetPrSummaryParams as UsageGetPrSummaryParams,
    type UsageGetPrTimeSeriesParams as UsageGetPrTimeSeriesParams,
    type UsageListEnvironmentRuntimeRecordsParams as UsageListEnvironmentRuntimeRecordsParams,
  };
}
