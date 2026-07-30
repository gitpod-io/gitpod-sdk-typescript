// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import {
  PagePromise,
  TeamUsagePage,
  type TeamUsagePageParams,
  UserUsagePage,
  type UserUsagePageParams,
} from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

/**
 * BillingService provides billing and subscription management functionality.
 */
export class Billing extends APIResource {
  /**
   * Returns a signed download URL for a CSV export of credit usage.
   *
   * The URL points to an HTTP endpoint that streams gzip-compressed CSV and is valid
   * for five minutes. The download must be made by the same principal that requested
   * it, carrying its own bearer token. The export range may cover up to a year.
   *
   * For organizations without enterprise credit usage enabled (no billing contract
   * start date), the export instead contains BYOK cost usage with a different column
   * set, and groupBy=RESOURCE is rejected.
   *
   * Use this method to:
   *
   * - Export per-user daily credit usage for external reporting
   * - Export a per-environment and per-conversation resource breakdown
   *
   * ### Examples
   *
   * - Export January's daily summary:
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   dateRange:
   *     startTime: "2024-01-01T00:00:00Z"
   *     endTime: "2024-01-31T00:00:00Z"
   *   groupBy: CREDIT_USAGE_EXPORT_GROUP_BY_DAILY_SUMMARY
   *   ```
   *
   * ### Authorization
   *
   * Requires `billing:read_usage` permission on the organization.
   *
   * @example
   * ```ts
   * const response = await client.billing.getCreditUsageExport({
   *   dateRange: {
   *     endTime: '2024-01-31T00:00:00Z',
   *     startTime: '2024-01-01T00:00:00Z',
   *   },
   *   organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   groupBy: 'CREDIT_USAGE_EXPORT_GROUP_BY_DAILY_SUMMARY',
   * });
   * ```
   */
  getCreditUsageExport(
    body: BillingGetCreditUsageExportParams,
    options?: RequestOptions,
  ): APIPromise<BillingGetCreditUsageExportResponse> {
    return this._client.post('/gitpod.v1.BillingService/GetCreditUsageExport', { body, ...options });
  }

  /**
   * Returns a daily credit usage report for an enterprise organization.
   *
   * Each day reports org-wide credits by usage type, plus per-user, per-team,
   * per-environment, and per-conversation breakdowns (top consumers with the
   * remainder aggregated into an "Others" bucket) and a per-model breakdown of
   * intelligence usage.
   *
   * Use this method to:
   *
   * - Chart daily credit consumption over a date range
   * - Attribute credit usage to users, teams, environments, and conversations
   * - Restrict the report to a single user or service account
   *
   * ### Examples
   *
   * - Get the report for January:
   *
   *   Both dates are inclusive and the range must not exceed 31 days.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   dateRange:
   *     startTime: "2024-01-01T00:00:00Z"
   *     endTime: "2024-01-31T00:00:00Z"
   *   ```
   *
   * ### Authorization
   *
   * Requires `billing:read_usage` permission on the organization. A user without it
   * can read their own usage by setting filter.subject to their own user identity;
   * this self-access path is not available to service accounts.
   *
   * @example
   * ```ts
   * const response = await client.billing.getCreditUsageReport({
   *   dateRange: {
   *     endTime: '2024-01-31T00:00:00Z',
   *     startTime: '2024-01-01T00:00:00Z',
   *   },
   *   organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   * });
   * ```
   */
  getCreditUsageReport(
    body: BillingGetCreditUsageReportParams,
    options?: RequestOptions,
  ): APIPromise<BillingGetCreditUsageReportResponse> {
    return this._client.post('/gitpod.v1.BillingService/GetCreditUsageReport', { body, ...options });
  }

  /**
   * Returns cumulative credit usage for an organization and its teams.
   *
   * Use this method to:
   *
   * - Get the total cumulative credit consumption as of a point in time
   * - Get per-team cumulative usage with credit allocation (budget) comparison
   * - Display team credit summaries on the usage page and team detail page
   * - Display user budget utilization when user budgets are enabled
   *
   * ### Examples
   *
   * - Get current cumulative usage:
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   ```
   *
   * - Get cumulative usage as of a specific date:
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   asOf: "2026-03-31T23:59:59Z"
   *   ```
   *
   * ### Authorization
   *
   * Requires `billing:read_usage` permission on the organization.
   *
   * @example
   * ```ts
   * const response =
   *   await client.billing.getCumulativeCreditUsage({
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *     asOf: '2026-03-31T23:59:59Z',
   *   });
   * ```
   */
  getCumulativeCreditUsage(
    body: BillingGetCumulativeCreditUsageParams,
    options?: RequestOptions,
  ): APIPromise<BillingGetCumulativeCreditUsageResponse> {
    return this._client.post('/gitpod.v1.BillingService/GetCumulativeCreditUsage', { body, ...options });
  }

  /**
   * Returns organization-level enterprise AI usage totals for reporting.
   *
   * Reports BYOK (bring-your-own-key) token spend: cost in the organization's
   * billing currency plus token counts, with a per-model breakdown. Credit-based
   * usage from managed models is not included and the credits field is not populated
   * by this endpoint.
   *
   * Use this method to:
   *
   * - Report total BYOK AI spend (cost and tokens) for a date range
   * - Break down organization usage by model
   *
   * Only available for enterprise organizations.
   *
   * ### Examples
   *
   * - Get usage totals for January:
   *
   *   Returns organization-wide BYOK spend for the month. Both dates are inclusive
   *   and the range must not exceed 31 days.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   dateRange:
   *     startTime: "2024-01-01T00:00:00Z"
   *     endTime: "2024-01-31T00:00:00Z"
   *   ```
   *
   * ### Authorization
   *
   * Requires `billing:read_usage` permission on the organization.
   *
   * @example
   * ```ts
   * const response =
   *   await client.billing.getEnterpriseAIUsageSummary({
   *     dateRange: {
   *       endTime: '2024-01-31T00:00:00Z',
   *       startTime: '2024-01-01T00:00:00Z',
   *     },
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   });
   * ```
   */
  getEnterpriseAIUsageSummary(
    body: BillingGetEnterpriseAIUsageSummaryParams,
    options?: RequestOptions,
  ): APIPromise<BillingGetEnterpriseAIUsageSummaryResponse> {
    return this._client.post('/gitpod.v1.BillingService/GetEnterpriseAIUsageSummary', { body, ...options });
  }

  /**
   * Returns daily enterprise AI usage totals for the organization.
   *
   * Each day reports BYOK token spend (cost and tokens) with per-user, per-team, and
   * per-model breakdowns. Per-user entries cover the top spenders with the remainder
   * aggregated into an "Others" bucket; usage not attributed to a user or service
   * account appears only in the daily totals. The credits field is not populated by
   * this endpoint.
   *
   * When filter.subject is set the response contains only that subject's usage:
   * daily totals and the team breakdown are omitted, and the model breakdown covers
   * the subject only.
   *
   * Use this method to:
   *
   * - Chart daily BYOK AI spend over a date range
   * - Feed daily per-user usage into external dashboards
   * - Restrict the response to a single user or service account
   *
   * Only available for enterprise organizations.
   *
   * ### Examples
   *
   * - Get daily usage for January:
   *
   *   Returns one entry per day with per-user, per-team, and per-model breakdowns.
   *   Both dates are inclusive and the range must not exceed 31 days.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   dateRange:
   *     startTime: "2024-01-01T00:00:00Z"
   *     endTime: "2024-01-31T00:00:00Z"
   *   ```
   *
   * ### Authorization
   *
   * Requires `billing:read_usage` permission on the organization.
   *
   * @example
   * ```ts
   * const response =
   *   await client.billing.getEnterpriseAIUsageTimeSeries({
   *     dateRange: {
   *       endTime: '2024-01-31T00:00:00Z',
   *       startTime: '2024-01-01T00:00:00Z',
   *     },
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   });
   * ```
   */
  getEnterpriseAIUsageTimeSeries(
    body: BillingGetEnterpriseAIUsageTimeSeriesParams,
    options?: RequestOptions,
  ): APIPromise<BillingGetEnterpriseAIUsageTimeSeriesResponse> {
    return this._client.post('/gitpod.v1.BillingService/GetEnterpriseAIUsageTimeSeries', {
      body,
      ...options,
    });
  }

  /**
   * Lists enterprise AI usage grouped by team.
   *
   * Reports BYOK token spend per team (cost and tokens) with each team's monthly
   * budget when one applies. The credits field is not populated by this endpoint.
   *
   * Use this method to:
   *
   * - Compare BYOK AI spend across teams
   * - Track team budget utilization
   * - Filter usage to specific teams
   *
   * Only available for enterprise organizations.
   *
   * ### Examples
   *
   * - List team usage for January:
   *
   *   Returns BYOK spend per team with monthly budgets. Both dates are inclusive and
   *   the range must not exceed 31 days.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   dateRange:
   *     startTime: "2024-01-01T00:00:00Z"
   *     endTime: "2024-01-31T00:00:00Z"
   *   ```
   *
   * ### Authorization
   *
   * Requires `billing:read_usage` permission on the organization.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const teamEnterpriseAIUsage of client.billing.listEnterpriseAITeamUsage(
   *   {
   *     dateRange: {
   *       endTime: '2024-01-31T00:00:00Z',
   *       startTime: '2024-01-01T00:00:00Z',
   *     },
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  listEnterpriseAITeamUsage(
    params: BillingListEnterpriseAITeamUsageParams,
    options?: RequestOptions,
  ): PagePromise<TeamEnterpriseAIUsagesTeamUsagePage, TeamEnterpriseAIUsage> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.BillingService/ListEnterpriseAITeamUsage',
      TeamUsagePage<TeamEnterpriseAIUsage>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Lists enterprise AI usage grouped by user with effective monthly budget data.
   *
   * Reports BYOK token spend (cost and tokens) for each user and service account
   * with attributed usage in the date range, including each subject's effective
   * monthly budget. Usage not attributed to a user or service account is excluded,
   * so the sum across subjects can be less than the organization totals from
   * GetEnterpriseAIUsageSummary. The credits field is not populated by this
   * endpoint.
   *
   * Budget fields (month_to_date_usage, utilization_percent, over_budget) are
   * computed from usage inside the requested date range measured against the monthly
   * limit. Send a range that starts on the first day of the month for true
   * month-to-date figures.
   *
   * Use this method to:
   *
   * - Export per-user BYOK AI spend to external reporting
   * - Identify the highest spenders in the organization
   * - Track per-user budget utilization and over-budget users
   *
   * Only available for enterprise organizations.
   *
   * ### Examples
   *
   * - List user usage for January:
   *
   *   Returns per-user BYOK spend with effective budgets, highest spend first. Both
   *   dates are inclusive and the range must not exceed 31 days.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   dateRange:
   *     startTime: "2024-01-01T00:00:00Z"
   *     endTime: "2024-01-31T00:00:00Z"
   *   ```
   *
   * ### Authorization
   *
   * Requires `billing:read_usage` permission on the organization. Callers without it
   * can read their own usage by setting filter.subject to themselves.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const userCostBudgetUsage of client.billing.listEnterpriseAIUserUsage(
   *   {
   *     dateRange: {
   *       endTime: '2024-01-31T00:00:00Z',
   *       startTime: '2024-01-01T00:00:00Z',
   *     },
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  listEnterpriseAIUserUsage(
    params: BillingListEnterpriseAIUserUsageParams,
    options?: RequestOptions,
  ): PagePromise<UserCostBudgetUsagesUserUsagePage, UserCostBudgetUsage> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.BillingService/ListEnterpriseAIUserUsage',
      UserUsagePage<UserCostBudgetUsage>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Lists per-user month-to-date credit usage with effective monthly budgets.
   *
   * Results are ordered by total credits descending so the highest spenders appear
   * first, with user_id as a stable tiebreaker. Use cursor pagination to walk the
   * full set for large organizations.
   *
   * The default SORT_FIELD_USAGE ordering supports cursor pagination over any number
   * of users. Sorting by display name, budget, or budget utilization computes the
   * order in memory and is limited to organizations with at most 10,000 users;
   * beyond that, use SORT_FIELD_USAGE. Because month-to-date figures are recomputed
   * per request, hold a date range stable across a paginated walk to keep page
   * tokens valid.
   *
   * Use this method to:
   *
   * - Export per-user credit usage to external reporting
   * - Identify the highest spenders in the organization
   * - Track per-user budget utilization and over-budget users
   *
   * ### Examples
   *
   * - List user usage for the current month:
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   pagination:
   *     pageSize: 50
   *   ```
   *
   * ### Authorization
   *
   * Requires `billing:read_usage` permission on the organization.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const userCreditBudgetUsage of client.billing.listEnterpriseUserCreditUsage(
   *   {
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *     pagination: { pageSize: 50 },
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  listEnterpriseUserCreditUsage(
    params: BillingListEnterpriseUserCreditUsageParams,
    options?: RequestOptions,
  ): PagePromise<UserCreditBudgetUsagesUserUsagePage, UserCreditBudgetUsage> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.BillingService/ListEnterpriseUserCreditUsage',
      UserUsagePage<UserCreditBudgetUsage>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }
}

export type TeamEnterpriseAIUsagesTeamUsagePage = TeamUsagePage<TeamEnterpriseAIUsage>;

export type UserCostBudgetUsagesUserUsagePage = UserUsagePage<UserCostBudgetUsage>;

export type UserCreditBudgetUsagesUserUsagePage = UserUsagePage<UserCreditBudgetUsage>;

/**
 * AgentExecutionCreditUsage contains a single agent execution's credit usage for a
 * day, broken down by type.
 */
export interface AgentExecutionCreditUsage {
  /**
   * Empty when representing the "Others" aggregation bucket.
   */
  agentExecutionId?: string;

  displayName?: string;

  usage?: Array<CreditsByType>;
}

export type BillingCurrency =
  | 'BILLING_CURRENCY_UNSPECIFIED'
  | 'BILLING_CURRENCY_USD'
  | 'BILLING_CURRENCY_EUR'
  | 'BILLING_CURRENCY_GBP';

export type ByokRateCardTokenType =
  | 'BYOK_RATE_CARD_TOKEN_TYPE_UNSPECIFIED'
  | 'BYOK_RATE_CARD_TOKEN_TYPE_INPUT'
  | 'BYOK_RATE_CARD_TOKEN_TYPE_OUTPUT'
  | 'BYOK_RATE_CARD_TOKEN_TYPE_CACHE_READ'
  | 'BYOK_RATE_CARD_TOKEN_TYPE_CACHE_WRITE';

/**
 * How to group the credit usage export data.
 */
export type CreditUsageExportGroupBy =
  | 'CREDIT_USAGE_EXPORT_GROUP_BY_UNSPECIFIED'
  | 'CREDIT_USAGE_EXPORT_GROUP_BY_DAILY_SUMMARY'
  | 'CREDIT_USAGE_EXPORT_GROUP_BY_RESOURCE';

/**
 * CreditUsageReportFilter narrows the data returned by GetCreditUsageReport.
 * Wrapping filters in a message (rather than adding bare fields) lets future
 * filters (team, environment, resource kind) be added without further breaking
 * changes.
 */
export interface CreditUsageReportFilter {
  /**
   * Restrict the per-user breakdown to a single subject. The subject must be
   * PRINCIPAL_USER or PRINCIPAL_SERVICE_ACCOUNT and belong to the request's
   * organization. When unset, the report returns the default top-N users + "Others"
   * breakdown.
   *
   * When this field is set:
   *
   * - daily_usage[*].user_usage contains rows only for the requested subject; no
   *   "Others" aggregation bucket is produced.
   * - daily_usage[*].org_usage, team_usage, environment_usage, and
   *   conversation_usage are omitted (empty). Callers that need those sections
   *   should issue an unfiltered call.
   * - period_start and updated_at remain populated.
   */
  subject?: Shared.Subject | null;
}

/**
 * CreditsByType contains credits consumed for a single usage type.
 */
export interface CreditsByType {
  credits?: number;

  /**
   * UsageType identifies the category of usage.
   */
  usageType?: UsageType;
}

/**
 * CumulativeCreditUsage contains cumulative credit consumption totals.
 */
export interface CumulativeCreditUsage {
  /**
   * Total credits consumed.
   */
  totalCredits?: number;

  /**
   * Credits consumed broken down by usage type.
   */
  usageByType?: Array<CreditsByType>;
}

/**
 * DailyCreditUsage contains credit usage for a single day.
 */
export interface DailyCreditUsage {
  /**
   * Per-agent-execution usage for this day (top conversations + "Others"). Empty
   * agent_execution_id represents the "Others" aggregation bucket.
   */
  conversationUsage?: Array<AgentExecutionCreditUsage>;

  /**
   * Start of the day (midnight in the requested timezone).
   */
  date?: string;

  /**
   * Per-environment usage for this day (top environments + "Others"). Empty
   * environment_id represents the "Others" aggregation bucket.
   */
  environmentUsage?: Array<EnvironmentCreditUsage>;

  /**
   * Org-wide usage broken down by type.
   */
  orgUsage?: Array<CreditsByType>;

  /**
   * Per-team usage for this day (top teams + "Others"). Empty team_id represents the
   * "Others" aggregation bucket.
   */
  teamUsage?: Array<TeamCreditUsage>;

  /**
   * Org-wide intelligence usage broken down by model.
   */
  usageByModel?: Array<EnterpriseAIUsageByModel>;

  /**
   * Per-user usage for this day (top users + "Others").
   */
  userUsage?: Array<UserCreditUsage>;
}

export interface DailyEnterpriseAIUsage {
  /**
   * A Timestamp represents a point in time independent of any time zone or local
   * calendar, encoded as a count of seconds and fractions of seconds at nanosecond
   * resolution. The count is relative to an epoch at UTC midnight on January 1,
   * 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar
   * backwards to year one.
   *
   * All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
   * second table is needed for interpretation, using a
   * [24-hour linear smear](https://developers.google.com/time/smear).
   *
   * The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
   * restricting to that range, we ensure that we can convert to and from
   * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
   *
   * # Examples
   *
   * Example 1: Compute Timestamp from POSIX `time()`.
   *
   *      Timestamp timestamp;
   *      timestamp.set_seconds(time(NULL));
   *      timestamp.set_nanos(0);
   *
   * Example 2: Compute Timestamp from POSIX `gettimeofday()`.
   *
   *      struct timeval tv;
   *      gettimeofday(&tv, NULL);
   *
   *      Timestamp timestamp;
   *      timestamp.set_seconds(tv.tv_sec);
   *      timestamp.set_nanos(tv.tv_usec * 1000);
   *
   * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
   *
   *      FILETIME ft;
   *      GetSystemTimeAsFileTime(&ft);
   *      UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;
   *
   *      // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
   *      // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
   *      Timestamp timestamp;
   *      timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
   *      timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
   *
   * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.
   *
   *      long millis = System.currentTimeMillis();
   *
   *      Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
   *          .setNanos((int) ((millis % 1000) * 1000000)).build();
   *
   * Example 5: Compute Timestamp from Java `Instant.now()`.
   *
   *      Instant now = Instant.now();
   *
   *      Timestamp timestamp =
   *          Timestamp.newBuilder().setSeconds(now.getEpochSecond())
   *              .setNanos(now.getNano()).build();
   *
   * Example 6: Compute Timestamp from current time in Python.
   *
   *      timestamp = Timestamp()
   *      timestamp.GetCurrentTime()
   *
   * # JSON Mapping
   *
   * In JSON format, the Timestamp type is encoded as a string in the
   * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format is
   * "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z" where {year} is always
   * expressed using four digits while {month}, {day}, {hour}, {min}, and {sec} are
   * zero-padded to two digits each. The fractional seconds, which can go up to 9
   * digits (i.e. up to 1 nanosecond resolution), are optional. The "Z" suffix
   * indicates the timezone ("UTC"); the timezone is required. A proto3 JSON
   * serializer should always use UTC (as indicated by "Z") when printing the
   * Timestamp type and a proto3 JSON parser should be able to accept both UTC and
   * other timezones (as indicated by an offset).
   *
   * For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past 01:30 UTC on
   * January 15, 2017.
   *
   * In JavaScript, one can convert a Date object to this format using the standard
   * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
   * method. In Python, a standard `datetime.datetime` object can be converted to
   * this format using
   * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with the
   * time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use the
   * Joda Time's
   * [`ISODateTimeFormat.dateTime()`](<http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()>)
   * to obtain a formatter capable of generating timestamps in this format.
   */
  date: string;

  /**
   * budget is unset when no monthly budget applies to the organization.
   */
  budget?: EnterpriseAIUsageBudget;

  teamUsage?: Array<TeamEnterpriseAIUsage>;

  usage?: EnterpriseAIUsage;

  /**
   * Usage for this day broken down by model. When the request filters by subject,
   * contains only that subject's model usage.
   */
  usageByModel?: Array<EnterpriseAIUsageByModel>;

  userUsage?: Array<UserEnterpriseAIUsage>;
}

export interface EnterpriseAITokenUsage {
  cacheTokens?: string;

  inputTokens?: string;

  outputTokens?: string;

  totalTokens?: string;
}

export interface EnterpriseAIUsage {
  costMicrounits?: string;

  credits?: number;

  currency?: BillingCurrency;

  tokens?: EnterpriseAITokenUsage;
}

export interface EnterpriseAIUsageBudget {
  currency?: BillingCurrency;

  monthlyCostLimitMicrounits?: string | null;

  monthlyCreditLimit?: string | null;

  monthToDateUsage?: EnterpriseAIUsage;

  source?: EnterpriseAIUsageBudgetSource;

  utilizationPercent?: number;
}

export type EnterpriseAIUsageBudgetSource =
  | 'ENTERPRISE_AI_USAGE_BUDGET_SOURCE_UNSPECIFIED'
  | 'ENTERPRISE_AI_USAGE_BUDGET_SOURCE_ORGANIZATION'
  | 'ENTERPRISE_AI_USAGE_BUDGET_SOURCE_TEAM';

export interface EnterpriseAIUsageByModel {
  model?: string;

  /**
   * Usage excluded from spend because no matching BYOK rate was configured.
   */
  unpricedUsage?: EnterpriseAIUsage;

  unpricedUsageByTokenType?: Array<EnterpriseAIUsageByTokenType>;

  usage?: EnterpriseAIUsage;

  usageByTokenType?: Array<EnterpriseAIUsageByTokenType>;
}

export interface EnterpriseAIUsageByTokenType {
  tokenType?: ByokRateCardTokenType;

  usage?: EnterpriseAIUsage;
}

export interface EnterpriseAIUsageTimeSeriesFilter {
  /**
   * Restrict the per-user breakdown to a single subject.
   */
  subject?: Shared.Subject | null;
}

export type EnterpriseAIUserBudgetPolicySource =
  | 'ENTERPRISE_AI_USER_BUDGET_POLICY_SOURCE_UNSPECIFIED'
  | 'ENTERPRISE_AI_USER_BUDGET_POLICY_SOURCE_NONE'
  | 'ENTERPRISE_AI_USER_BUDGET_POLICY_SOURCE_ORGANIZATION'
  | 'ENTERPRISE_AI_USER_BUDGET_POLICY_SOURCE_USER';

/**
 * EnvironmentCreditUsage contains a single environment's credit usage for a day,
 * broken down by type.
 */
export interface EnvironmentCreditUsage {
  displayName?: string;

  /**
   * Empty when representing the "Others" aggregation bucket.
   */
  environmentId?: string;

  usage?: Array<CreditsByType>;
}

/**
 * TeamCreditUsage contains a single team's credit usage for a day, broken down by
 * type.
 */
export interface TeamCreditUsage {
  displayName?: string;

  /**
   * Empty when representing the "Others" aggregation bucket.
   */
  teamId?: string;

  usage?: Array<CreditsByType>;
}

/**
 * TeamCumulativeCreditUsage contains a team's cumulative credit usage and
 * allocation.
 */
export interface TeamCumulativeCreditUsage {
  /**
   * The team's credit allocation (budget) in whole credits, if set. Not set means no
   * allocation has been configured for this team.
   */
  creditBudget?: string | null;

  displayName?: string;

  teamId?: string;

  /**
   * Cumulative credit usage for this team.
   */
  usage?: CumulativeCreditUsage;
}

export interface TeamEnterpriseAIUsage {
  /**
   * budget is unset when no monthly budget applies to this team.
   */
  budget?: EnterpriseAIUsageBudget;

  displayName?: string;

  teamId?: string;

  usage?: EnterpriseAIUsage;

  usageByTokenType?: Array<EnterpriseAIUsageByTokenType>;
}

/**
 * UsageType identifies the category of usage.
 */
export type UsageType = 'USAGE_TYPE_UNSPECIFIED' | 'USAGE_TYPE_ENVIRONMENT' | 'USAGE_TYPE_AGENTIC';

export interface UserCostBudgetUsage {
  budgetSource?: EnterpriseAIUserBudgetPolicySource;

  currency?: BillingCurrency;

  displayName?: string;

  isServiceAccount?: boolean;

  monthlyCostLimitMicrounits?: string | null;

  /**
   * Usage within the requested date range. Reflects true month-to-date usage when
   * the range starts on the first day of the month.
   */
  monthToDateUsage?: EnterpriseAIUsage;

  noCap?: boolean;

  overBudget?: boolean;

  userId?: string;

  utilizationPercent?: number;
}

export interface UserCreditBudgetUsage {
  budgetSource?: EnterpriseAIUserBudgetPolicySource;

  creditBudget?: string | null;

  displayName?: string;

  /**
   * True when user_id refers to a service account rather than a human user. The
   * dashboard uses this to mark non-human accounts in admin tables.
   */
  isServiceAccount?: boolean;

  /**
   * CumulativeCreditUsage contains cumulative credit consumption totals.
   */
  monthToDateUsage?: CumulativeCreditUsage;

  noCap?: boolean;

  overBudget?: boolean;

  /**
   * Month-to-date intelligence usage broken down by model.
   */
  usageByModel?: Array<EnterpriseAIUsageByModel>;

  userId?: string;

  utilizationPercent?: number;
}

/**
 * UserCreditUsage contains a single user's credit usage, broken down by type.
 */
export interface UserCreditUsage {
  displayName?: string;

  usage?: Array<CreditsByType>;

  /**
   * Intelligence usage broken down by model.
   */
  usageByModel?: Array<EnterpriseAIUsageByModel>;

  /**
   * Empty when representing the "Others" aggregation bucket.
   */
  userId?: string;
}

export interface UserEnterpriseAIUsage {
  displayName?: string;

  usage?: EnterpriseAIUsage;

  /**
   * Empty when representing the "Others" aggregation bucket.
   */
  userId?: string;
}

export interface BillingGetCreditUsageExportResponse {
  /**
   * Signed download URL for the CSV export. Valid for five minutes, and only for the
   * principal that requested it.
   */
  downloadUrl?: string;
}

export interface BillingGetCreditUsageReportResponse {
  /**
   * One entry per day in the requested date range.
   */
  dailyUsage?: Array<DailyCreditUsage>;

  /**
   * Start of the billing period for this organization. Used by the frontend to
   * filter out months before usage tracking began.
   */
  periodStart?: string | null;

  /**
   * When the report data was last computed.
   */
  updatedAt?: string;
}

export interface BillingGetCumulativeCreditUsageResponse {
  /**
   * Org-wide cumulative usage, broken down by type and total.
   */
  orgUsage?: CumulativeCreditUsage;

  /**
   * Start of the cumulative calculation period. Cumulative totals are computed from
   * this date forward.
   */
  periodStart?: string;

  /**
   * Per-team cumulative usage with credit allocation comparison. Returns all teams
   * (no top-N limit).
   */
  teamUsage?: Array<TeamCumulativeCreditUsage>;

  /**
   * Usage by members not assigned to any team.
   */
  unteamedUsage?: CumulativeCreditUsage;

  /**
   * Per-user month-to-date usage for every user with usage in the period. The budget
   * fields on each entry are populated only when a monthly budget applies to that
   * user. This list is not paginated or capped; for large organizations prefer
   * ListEnterpriseUserCreditUsage.
   */
  userUsage?: Array<UserCreditBudgetUsage>;
}

export interface BillingGetEnterpriseAIUsageSummaryResponse {
  /**
   * budget is unset when no monthly budget applies to the organization.
   */
  budget?: EnterpriseAIUsageBudget;

  /**
   * calculated_at is the time through which usage has been calculated. Usage after
   * this timestamp may still be processing.
   */
  calculatedAt?: string;

  usage?: EnterpriseAIUsage;

  usageByModel?: Array<EnterpriseAIUsageByModel>;
}

export interface BillingGetEnterpriseAIUsageTimeSeriesResponse {
  /**
   * calculated_at is the time through which usage has been calculated. Usage after
   * this timestamp may still be processing.
   */
  calculatedAt?: string;

  dailyUsage?: Array<DailyEnterpriseAIUsage>;
}

export interface BillingGetCreditUsageExportParams {
  /**
   * Date range to export. Both start and end dates are inclusive; time-of-day is
   * ignored. Unlike GetCreditUsageReport, the range may cover up to a year.
   */
  dateRange: Shared.DateRange;

  organizationId: string;

  /**
   * How to group the export data. Defaults to DAILY_SUMMARY.
   */
  groupBy?: CreditUsageExportGroupBy;
}

export interface BillingGetCreditUsageReportParams {
  /**
   * Date range for the report. Both start and end dates are inclusive. Time-of-day
   * is ignored; dates are truncated to midnight in the specified timezone. The range
   * must not exceed 31 days.
   */
  dateRange: Shared.DateRange;

  organizationId: string;

  /**
   * Optional filter narrowing the returned data. When unset or empty, the response
   * preserves the default behavior (top-N users + "Others"). See
   * CreditUsageReportFilter for per-field response-scoping semantics.
   */
  filter?: CreditUsageReportFilter;

  /**
   * IANA timezone name (e.g. "America/New_York", "Europe/Berlin") used to bucket
   * daily usage. When empty, defaults to "UTC".
   */
  timezone?: string;
}

export interface BillingGetCumulativeCreditUsageParams {
  /**
   * organization_id is the ID of the organization to get cumulative usage for.
   */
  organizationId: string;

  /**
   * as_of is the point in time to compute cumulative usage up to. Defaults to now if
   * not set.
   */
  asOf?: string | null;
}

export interface BillingGetEnterpriseAIUsageSummaryParams {
  /**
   * Date range for the summary. Both start and end dates are inclusive. Time-of-day
   * is ignored; dates are truncated to midnight in the specified timezone.
   */
  dateRange: Shared.DateRange;

  organizationId: string;

  /**
   * IANA timezone name used to bucket usage. When empty, defaults to "UTC".
   */
  timezone?: string;
}

export interface BillingGetEnterpriseAIUsageTimeSeriesParams {
  /**
   * Date range for the daily usage series. Both start and end dates are inclusive.
   * Time-of-day is ignored; dates are truncated to midnight in the specified
   * timezone.
   */
  dateRange: Shared.DateRange;

  organizationId: string;

  filter?: EnterpriseAIUsageTimeSeriesFilter;

  /**
   * IANA timezone name used to bucket daily usage. When empty, defaults to "UTC".
   */
  timezone?: string;
}

export interface BillingListEnterpriseAITeamUsageParams extends TeamUsagePageParams {
  /**
   * Body param: Date range for the team usage list. Both start and end dates are
   * inclusive. Time-of-day is ignored; dates are truncated to midnight in the
   * specified timezone.
   */
  dateRange: Shared.DateRange;

  /**
   * Body param
   */
  organizationId: string;

  /**
   * Body param
   */
  filter?: BillingListEnterpriseAITeamUsageParams.Filter;

  /**
   * Body param
   */
  pagination?: BillingListEnterpriseAITeamUsageParams.Pagination;

  /**
   * Body param: IANA timezone name used to bucket usage. When empty, defaults to
   * "UTC".
   */
  timezone?: string;
}

export namespace BillingListEnterpriseAITeamUsageParams {
  export interface Filter {
    teamIds?: Array<string>;
  }

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

export interface BillingListEnterpriseAIUserUsageParams extends UserUsagePageParams {
  /**
   * Body param: Date range for the user usage list. Both start and end dates are
   * inclusive. Time-of-day is ignored; dates are truncated to midnight in the
   * specified timezone.
   */
  dateRange: Shared.DateRange;

  /**
   * Body param
   */
  organizationId: string;

  /**
   * Body param: Optional filter narrowing the returned user usage. When set to a
   * subject, the response contains only usage for that user or service account.
   */
  filter?: BillingListEnterpriseAIUserUsageParams.Filter;

  /**
   * Body param
   */
  pagination?: BillingListEnterpriseAIUserUsageParams.Pagination;

  /**
   * Body param: sort controls the ordering of results. Defaults to total spend
   * descending.
   */
  sort?: BillingListEnterpriseAIUserUsageParams.Sort;

  /**
   * Body param: IANA timezone name used to bucket usage. When empty, defaults to
   * "UTC".
   */
  timezone?: string;
}

export namespace BillingListEnterpriseAIUserUsageParams {
  /**
   * Optional filter narrowing the returned user usage. When set to a subject, the
   * response contains only usage for that user or service account.
   */
  export interface Filter {
    /**
     * Restrict the user usage list to a single subject. The subject must be
     * PRINCIPAL_USER or PRINCIPAL_SERVICE_ACCOUNT and belong to the request's
     * organization.
     */
    subject?: Shared.Subject | null;
  }

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

  /**
   * sort controls the ordering of results. Defaults to total spend descending.
   */
  export interface Sort {
    field?:
      | 'SORT_FIELD_UNSPECIFIED'
      | 'SORT_FIELD_USAGE'
      | 'SORT_FIELD_DISPLAY_NAME'
      | 'SORT_FIELD_BUDGET'
      | 'SORT_FIELD_BUDGET_USED';

    order?: Shared.SortOrder;
  }
}

export interface BillingListEnterpriseUserCreditUsageParams extends UserUsagePageParams {
  /**
   * Body param: organization_id is the ID of the organization to list user credit
   * usage for.
   */
  organizationId: string;

  /**
   * Body param: as_of is the point in time to compute month-to-date usage up to.
   * Defaults to now if not set.
   */
  asOf?: string | null;

  /**
   * Body param
   */
  pagination?: BillingListEnterpriseUserCreditUsageParams.Pagination;

  /**
   * Body param: sort controls the ordering of results. Defaults to total credits
   * descending.
   */
  sort?: BillingListEnterpriseUserCreditUsageParams.Sort;
}

export namespace BillingListEnterpriseUserCreditUsageParams {
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

  /**
   * sort controls the ordering of results. Defaults to total credits descending.
   */
  export interface Sort {
    field?:
      | 'SORT_FIELD_UNSPECIFIED'
      | 'SORT_FIELD_USAGE'
      | 'SORT_FIELD_DISPLAY_NAME'
      | 'SORT_FIELD_BUDGET'
      | 'SORT_FIELD_BUDGET_USED';

    order?: Shared.SortOrder;
  }
}

export declare namespace Billing {
  export {
    type AgentExecutionCreditUsage as AgentExecutionCreditUsage,
    type BillingCurrency as BillingCurrency,
    type ByokRateCardTokenType as ByokRateCardTokenType,
    type CreditUsageExportGroupBy as CreditUsageExportGroupBy,
    type CreditUsageReportFilter as CreditUsageReportFilter,
    type CreditsByType as CreditsByType,
    type CumulativeCreditUsage as CumulativeCreditUsage,
    type DailyCreditUsage as DailyCreditUsage,
    type DailyEnterpriseAIUsage as DailyEnterpriseAIUsage,
    type EnterpriseAITokenUsage as EnterpriseAITokenUsage,
    type EnterpriseAIUsage as EnterpriseAIUsage,
    type EnterpriseAIUsageBudget as EnterpriseAIUsageBudget,
    type EnterpriseAIUsageBudgetSource as EnterpriseAIUsageBudgetSource,
    type EnterpriseAIUsageByModel as EnterpriseAIUsageByModel,
    type EnterpriseAIUsageByTokenType as EnterpriseAIUsageByTokenType,
    type EnterpriseAIUsageTimeSeriesFilter as EnterpriseAIUsageTimeSeriesFilter,
    type EnterpriseAIUserBudgetPolicySource as EnterpriseAIUserBudgetPolicySource,
    type EnvironmentCreditUsage as EnvironmentCreditUsage,
    type TeamCreditUsage as TeamCreditUsage,
    type TeamCumulativeCreditUsage as TeamCumulativeCreditUsage,
    type TeamEnterpriseAIUsage as TeamEnterpriseAIUsage,
    type UsageType as UsageType,
    type UserCostBudgetUsage as UserCostBudgetUsage,
    type UserCreditBudgetUsage as UserCreditBudgetUsage,
    type UserCreditUsage as UserCreditUsage,
    type UserEnterpriseAIUsage as UserEnterpriseAIUsage,
    type BillingGetCreditUsageExportResponse as BillingGetCreditUsageExportResponse,
    type BillingGetCreditUsageReportResponse as BillingGetCreditUsageReportResponse,
    type BillingGetCumulativeCreditUsageResponse as BillingGetCumulativeCreditUsageResponse,
    type BillingGetEnterpriseAIUsageSummaryResponse as BillingGetEnterpriseAIUsageSummaryResponse,
    type BillingGetEnterpriseAIUsageTimeSeriesResponse as BillingGetEnterpriseAIUsageTimeSeriesResponse,
    type TeamEnterpriseAIUsagesTeamUsagePage as TeamEnterpriseAIUsagesTeamUsagePage,
    type UserCostBudgetUsagesUserUsagePage as UserCostBudgetUsagesUserUsagePage,
    type UserCreditBudgetUsagesUserUsagePage as UserCreditBudgetUsagesUserUsagePage,
    type BillingGetCreditUsageExportParams as BillingGetCreditUsageExportParams,
    type BillingGetCreditUsageReportParams as BillingGetCreditUsageReportParams,
    type BillingGetCumulativeCreditUsageParams as BillingGetCumulativeCreditUsageParams,
    type BillingGetEnterpriseAIUsageSummaryParams as BillingGetEnterpriseAIUsageSummaryParams,
    type BillingGetEnterpriseAIUsageTimeSeriesParams as BillingGetEnterpriseAIUsageTimeSeriesParams,
    type BillingListEnterpriseAITeamUsageParams as BillingListEnterpriseAITeamUsageParams,
    type BillingListEnterpriseAIUserUsageParams as BillingListEnterpriseAIUserUsageParams,
    type BillingListEnterpriseUserCreditUsageParams as BillingListEnterpriseUserCreditUsageParams,
  };
}
