import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Subject } from "./identity_pb";
import type { PaginationRequest, PaginationResponse, SortOrder } from "./pagination_pb";
import type { DateRange } from "./usage_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/billing.proto.
 */
export declare const file_gitpod_v1_billing: GenFile;
/**
 * @generated from message gitpod.v1.BillingRecord
 */
export type BillingRecord = Message<"gitpod.v1.BillingRecord"> & {
    /**
     * id is the unique identifier for the billing record
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: gitpod.v1.BillingRecordMetadata metadata = 2;
     */
    metadata?: BillingRecordMetadata;
    /**
     * @generated from field: gitpod.v1.BillingRecordSpec spec = 3;
     */
    spec?: BillingRecordSpec;
    /**
     * @generated from field: gitpod.v1.BillingRecordStatus status = 4;
     */
    status?: BillingRecordStatus;
};
/**
 * Describes the message gitpod.v1.BillingRecord.
 * Use `create(BillingRecordSchema)` to create a new message.
 */
export declare const BillingRecordSchema: GenMessage<BillingRecord>;
/**
 * @generated from message gitpod.v1.BillingRecordMetadata
 */
export type BillingRecordMetadata = Message<"gitpod.v1.BillingRecordMetadata"> & {
    /**
     * organization_id is the ID of the organization that owns the record
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * realm is the billing realm (sandbox or production)
     *
     * @generated from field: gitpod.v1.BillingRealm realm = 2;
     */
    realm: BillingRealm;
    /**
     * created_at is the time the record was created
     *
     * @generated from field: google.protobuf.Timestamp created_at = 3;
     */
    createdAt?: Timestamp;
    /**
     * updated_at is the time the record was last updated
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 4;
     */
    updatedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.BillingRecordMetadata.
 * Use `create(BillingRecordMetadataSchema)` to create a new message.
 */
export declare const BillingRecordMetadataSchema: GenMessage<BillingRecordMetadata>;
/**
 * @generated from message gitpod.v1.BillingRecordSpec
 */
export type BillingRecordSpec = Message<"gitpod.v1.BillingRecordSpec"> & {
    /**
     * plan contains the plan details
     *
     * @generated from field: gitpod.v1.BillingPlanSpec plan = 1;
     */
    plan?: BillingPlanSpec;
};
/**
 * Describes the message gitpod.v1.BillingRecordSpec.
 * Use `create(BillingRecordSpecSchema)` to create a new message.
 */
export declare const BillingRecordSpecSchema: GenMessage<BillingRecordSpec>;
/**
 * @generated from message gitpod.v1.BillingPlanSpec
 */
export type BillingPlanSpec = Message<"gitpod.v1.BillingPlanSpec"> & {
    /**
     * kind contains the kind of plan
     *
     * @generated from field: gitpod.v1.BillingPlanKind kind = 1;
     */
    kind: BillingPlanKind;
    /**
     * amount_cents contains the amount of cents to charge the organization
     *
     * @generated from field: int64 amount_cents_usd = 2;
     */
    amountCentsUsd: bigint;
    /**
     * version contains the version of the plan
     *
     * @generated from field: string version_id = 3;
     */
    versionId: string;
};
/**
 * Describes the message gitpod.v1.BillingPlanSpec.
 * Use `create(BillingPlanSpecSchema)` to create a new message.
 */
export declare const BillingPlanSpecSchema: GenMessage<BillingPlanSpec>;
/**
 * @generated from message gitpod.v1.BillingRecordStatus
 */
export type BillingRecordStatus = Message<"gitpod.v1.BillingRecordStatus"> & {
    /**
     * plan contains the plan status
     *
     * @generated from field: gitpod.v1.BillingPlanStatus plan = 1;
     */
    plan?: BillingPlanStatus;
    /**
     * card_verification contains the status of the card verification
     *
     * @generated from field: gitpod.v1.PaymentMethodVerificationStatus payment_method_verification = 2;
     */
    paymentMethodVerification?: PaymentMethodVerificationStatus;
    /**
     * credit contains the status of the credit balance
     *
     * @generated from field: gitpod.v1.CreditStatus credit = 3;
     */
    credit: CreditStatus;
    /**
     * error contains any error message
     *
     * @generated from field: string error = 4;
     */
    error: string;
};
/**
 * Describes the message gitpod.v1.BillingRecordStatus.
 * Use `create(BillingRecordStatusSchema)` to create a new message.
 */
export declare const BillingRecordStatusSchema: GenMessage<BillingRecordStatus>;
/**
 * @generated from message gitpod.v1.BillingPlanStatus
 */
export type BillingPlanStatus = Message<"gitpod.v1.BillingPlanStatus"> & {
    /**
     * kind contains the kind of plan
     *
     * @generated from field: gitpod.v1.BillingPlanKind kind = 1;
     */
    kind: BillingPlanKind;
    /**
     * amount_cents contains the amount of cents to charge the organization
     *
     * @generated from field: int64 amount_cents_usd = 2;
     */
    amountCentsUsd: bigint;
    /**
     * ending_at contains the date and time when the plan ends
     *
     * @generated from field: google.protobuf.Timestamp ending_at = 3;
     */
    endingAt?: Timestamp;
    /**
     * version contains the version of the plan
     *
     * @generated from field: string version_id = 4;
     */
    versionId: string;
};
/**
 * Describes the message gitpod.v1.BillingPlanStatus.
 * Use `create(BillingPlanStatusSchema)` to create a new message.
 */
export declare const BillingPlanStatusSchema: GenMessage<BillingPlanStatus>;
/**
 * @generated from message gitpod.v1.PaymentMethodVerificationStatus
 */
export type PaymentMethodVerificationStatus = Message<"gitpod.v1.PaymentMethodVerificationStatus"> & {
    /**
     * status contains the status of the card verification
     *
     * @generated from field: gitpod.v1.CreditCardVerificationStatus card_verification_status = 1;
     */
    cardVerificationStatus: CreditCardVerificationStatus;
    /**
     * error contains any error message
     *
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message gitpod.v1.PaymentMethodVerificationStatus.
 * Use `create(PaymentMethodVerificationStatusSchema)` to create a new message.
 */
export declare const PaymentMethodVerificationStatusSchema: GenMessage<PaymentMethodVerificationStatus>;
/**
 * TopupPaymentFailureInfo contains information about a failed topup payment
 *
 * @generated from message gitpod.v1.TopupPaymentFailureInfo
 */
export type TopupPaymentFailureInfo = Message<"gitpod.v1.TopupPaymentFailureInfo"> & {
    /**
     * failed_at is when the topup payment failure occurred
     *
     * @generated from field: google.protobuf.Timestamp failed_at = 1;
     */
    failedAt?: Timestamp;
    /**
     * error_message describes why the topup payment failed
     *
     * @generated from field: string error_message = 2;
     */
    errorMessage: string;
};
/**
 * Describes the message gitpod.v1.TopupPaymentFailureInfo.
 * Use `create(TopupPaymentFailureInfoSchema)` to create a new message.
 */
export declare const TopupPaymentFailureInfoSchema: GenMessage<TopupPaymentFailureInfo>;
/**
 * @generated from message gitpod.v1.PaymentFailureInfo
 */
export type PaymentFailureInfo = Message<"gitpod.v1.PaymentFailureInfo"> & {
    /**
     * state indicates the current state of the payment failure
     *
     * @generated from field: gitpod.v1.PaymentFailureState state = 1;
     */
    state: PaymentFailureState;
    /**
     * grace_period_ends_at is when the grace period ends
     *
     * @generated from field: google.protobuf.Timestamp grace_period_ends_at = 2;
     */
    gracePeriodEndsAt?: Timestamp;
    /**
     * failed_at is when the payment failure occurred
     *
     * @generated from field: google.protobuf.Timestamp failed_at = 3;
     */
    failedAt?: Timestamp;
    /**
     * failure_reason describes why the payment failed
     *
     * @generated from field: string failure_reason = 4;
     */
    failureReason: string;
};
/**
 * Describes the message gitpod.v1.PaymentFailureInfo.
 * Use `create(PaymentFailureInfoSchema)` to create a new message.
 */
export declare const PaymentFailureInfoSchema: GenMessage<PaymentFailureInfo>;
/**
 * @generated from message gitpod.v1.Subscription
 */
export type Subscription = Message<"gitpod.v1.Subscription"> & {
    /**
     * contract_id is the unique identifier for the contract
     *
     * @generated from field: string contract_id = 1;
     */
    contractId: string;
    /**
     * organization_id is the ID of the organization that owns the subscription
     *
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * subscription_type is the type of subscription
     *
     * @generated from field: gitpod.v1.SubscriptionType subscription_type = 3;
     */
    subscriptionType: SubscriptionType;
    /**
     * status is the current status of the subscription
     *
     * @generated from field: gitpod.v1.SubscriptionStatus status = 4;
     */
    status: SubscriptionStatus;
    /**
     * starts_at is when the subscription was created
     *
     * @generated from field: google.protobuf.Timestamp starts_at = 6;
     */
    startsAt?: Timestamp;
    /**
     * cancelled_at is when the subscription was cancelled (if applicable)
     *
     * @generated from field: google.protobuf.Timestamp cancelled_at = 7;
     */
    cancelledAt?: Timestamp;
    /**
     * ends_at is when the subscription access will end (if cancelled)
     *
     * @generated from field: google.protobuf.Timestamp ends_at = 9;
     */
    endsAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.Subscription.
 * Use `create(SubscriptionSchema)` to create a new message.
 */
export declare const SubscriptionSchema: GenMessage<Subscription>;
/**
 * Coupon represents a promotional code that can be redeemed for credits
 *
 * @generated from message gitpod.v1.Coupon
 */
export type Coupon = Message<"gitpod.v1.Coupon"> & {
    /**
     * id is the unique identifier for the coupon
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * code is the unique coupon code that customers can redeem
     *
     * @generated from field: string code = 2;
     */
    code: string;
    /**
     * config is the configuration for this coupon
     *
     * @generated from field: gitpod.v1.CouponConfig config = 3;
     */
    config?: CouponConfig;
    /**
     * max_uses is the maximum number of times this coupon can be redeemed
     *
     * @generated from field: int32 max_uses = 4;
     */
    maxUses: number;
    /**
     * max_uses_per_org is the maximum number of times this coupon can be redeemed per organization
     *
     * @generated from field: optional int32 max_uses_per_org = 5;
     */
    maxUsesPerOrg?: number;
    /**
     * expires_at is when this coupon expires (optional)
     *
     * @generated from field: optional google.protobuf.Timestamp expires_at = 6;
     */
    expiresAt?: Timestamp;
    /**
     * description is a human-readable description of the coupon
     *
     * @generated from field: optional string description = 7;
     */
    description?: string;
    /**
     * created_at is when the coupon was created
     *
     * @generated from field: google.protobuf.Timestamp created_at = 8;
     */
    createdAt?: Timestamp;
    /**
     * updated_at is when the coupon was last updated
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 9;
     */
    updatedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.Coupon.
 * Use `create(CouponSchema)` to create a new message.
 */
export declare const CouponSchema: GenMessage<Coupon>;
/**
 * @generated from message gitpod.v1.CouponConfig
 */
export type CouponConfig = Message<"gitpod.v1.CouponConfig"> & {
    /**
     * one_time_ocu_grant is the amount of OCU this coupon grants
     *
     * @generated from field: optional int64 one_time_ocu_grant = 1;
     */
    oneTimeOcuGrant?: bigint;
    /**
     * percentage_off is the percentage off this coupon grants
     *
     * @generated from field: optional int64 percentage_off = 2;
     */
    percentageOff?: bigint;
    /**
     * duration_months is the duration of the coupon in months
     *
     * @generated from field: optional int64 duration_months = 3;
     */
    durationMonths?: bigint;
    /**
     * auto_terminate is whether the subscription should be terminated after the duration has passed
     *
     * @generated from field: bool auto_terminate = 4;
     */
    autoTerminate: boolean;
};
/**
 * Describes the message gitpod.v1.CouponConfig.
 * Use `create(CouponConfigSchema)` to create a new message.
 */
export declare const CouponConfigSchema: GenMessage<CouponConfig>;
/**
 * BillingAddress represents a billing address for an organization
 *
 * @generated from message gitpod.v1.BillingAddress
 */
export type BillingAddress = Message<"gitpod.v1.BillingAddress"> & {
    /**
     * line1 is the first line of the address (street address)
     *
     * @generated from field: string line1 = 1;
     */
    line1: string;
    /**
     * line2 is the second line of the address (apartment, suite, etc.)
     *
     * @generated from field: string line2 = 2;
     */
    line2: string;
    /**
     * city is the city name
     *
     * @generated from field: string city = 3;
     */
    city: string;
    /**
     * state is the state or province
     *
     * @generated from field: string state = 4;
     */
    state: string;
    /**
     * postal_code is the postal or ZIP code
     *
     * @generated from field: string postal_code = 5;
     */
    postalCode: string;
    /**
     * country is the two-letter country code (ISO 3166-1 alpha-2)
     *
     * @generated from field: string country = 6;
     */
    country: string;
};
/**
 * Describes the message gitpod.v1.BillingAddress.
 * Use `create(BillingAddressSchema)` to create a new message.
 */
export declare const BillingAddressSchema: GenMessage<BillingAddress>;
/**
 * Daily OCU consumption for a single metric category.
 *
 * @generated from message gitpod.v1.MetricConsumptionTimeSeries
 */
export type MetricConsumptionTimeSeries = Message<"gitpod.v1.MetricConsumptionTimeSeries"> & {
    /**
     * Human-readable label (e.g. "Environment Usage", "LLM Cache Reads", "Total").
     *
     * @generated from field: string display_name = 1;
     */
    displayName: string;
    /**
     * Category for grouping and filtering.
     *
     * @generated from field: gitpod.v1.MetricConsumptionTimeSeries.Kind kind = 2;
     */
    kind: MetricConsumptionTimeSeries_Kind;
    /**
     * Daily data points.
     *
     * @generated from field: repeated gitpod.v1.CreditUsageDataPoint series = 3;
     */
    series: CreditUsageDataPoint[];
};
/**
 * Describes the message gitpod.v1.MetricConsumptionTimeSeries.
 * Use `create(MetricConsumptionTimeSeriesSchema)` to create a new message.
 */
export declare const MetricConsumptionTimeSeriesSchema: GenMessage<MetricConsumptionTimeSeries>;
/**
 * @generated from enum gitpod.v1.MetricConsumptionTimeSeries.Kind
 */
export declare enum MetricConsumptionTimeSeries_Kind {
    /**
     * @generated from enum value: KIND_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: KIND_ALL = 1;
     */
    ALL = 1,
    /**
     * @generated from enum value: KIND_ENVIRONMENT = 2;
     */
    ENVIRONMENT = 2,
    /**
     * @generated from enum value: KIND_LLM = 3;
     */
    LLM = 3
}
/**
 * Describes the enum gitpod.v1.MetricConsumptionTimeSeries.Kind.
 */
export declare const MetricConsumptionTimeSeries_KindSchema: GenEnum<MetricConsumptionTimeSeries_Kind>;
/**
 * A single data point in a credit consumption time series.
 *
 * @generated from message gitpod.v1.CreditUsageDataPoint
 */
export type CreditUsageDataPoint = Message<"gitpod.v1.CreditUsageDataPoint"> & {
    /**
     * Start of the day (UTC midnight).
     *
     * @generated from field: google.protobuf.Timestamp time = 1;
     */
    time?: Timestamp;
    /**
     * Cost in Ona Compute Units.
     *
     * @generated from field: double ocu = 2;
     */
    ocu: number;
};
/**
 * Describes the message gitpod.v1.CreditUsageDataPoint.
 * Use `create(CreditUsageDataPointSchema)` to create a new message.
 */
export declare const CreditUsageDataPointSchema: GenMessage<CreditUsageDataPoint>;
/**
 * AutoTopupSettings configures automatic credit top-ups for an organization.
 *
 * @generated from message gitpod.v1.AutoTopupSettings
 */
export type AutoTopupSettings = Message<"gitpod.v1.AutoTopupSettings"> & {
    /**
     * Whether auto-topup is enabled.
     *
     * @generated from field: bool enabled = 1;
     */
    enabled: boolean;
    /**
     * OCU amount per top-up. Must be one of: 40, 100, 200, 400, 1000.
     *
     * @generated from field: double amount_credits = 2;
     */
    amountCredits: number;
    /**
     * Maximum number of automatic top-ups per day (safety cap, 0 means no cap).
     *
     * @generated from field: int32 max_daily_topups = 3;
     */
    maxDailyTopups: number;
};
/**
 * Describes the message gitpod.v1.AutoTopupSettings.
 * Use `create(AutoTopupSettingsSchema)` to create a new message.
 */
export declare const AutoTopupSettingsSchema: GenMessage<AutoTopupSettings>;
/**
 * CreditUsageReportFilter narrows the data returned by GetCreditUsageReport.
 * Wrapping filters in a message (rather than adding bare fields) lets future
 * filters (team, environment, resource kind) be added without further breaking
 * changes.
 *
 * @generated from message gitpod.v1.CreditUsageReportFilter
 */
export type CreditUsageReportFilter = Message<"gitpod.v1.CreditUsageReportFilter"> & {
    /**
     * Restrict the per-user breakdown to a single subject. The subject must be
     * PRINCIPAL_USER or PRINCIPAL_SERVICE_ACCOUNT and belong to the request's
     * organization. When unset, the report returns the default top-N users +
     * "Others" breakdown.
     *
     * When this field is set:
     * - daily_usage[*].user_usage contains rows only for the requested subject;
     *   no "Others" aggregation bucket is produced.
     * - daily_usage[*].org_usage, team_usage, environment_usage, and
     *   conversation_usage are omitted (empty). Callers that need those
     *   sections should issue an unfiltered call.
     * - period_start and updated_at remain populated.
     *
     * @generated from field: optional gitpod.v1.Subject subject = 1;
     */
    subject?: Subject;
};
/**
 * Describes the message gitpod.v1.CreditUsageReportFilter.
 * Use `create(CreditUsageReportFilterSchema)` to create a new message.
 */
export declare const CreditUsageReportFilterSchema: GenMessage<CreditUsageReportFilter>;
/**
 * @generated from message gitpod.v1.GetCreditUsageReportRequest
 */
export type GetCreditUsageReportRequest = Message<"gitpod.v1.GetCreditUsageReportRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * Date range for the report. Both start and end dates are inclusive.
     * Time-of-day is ignored; dates are truncated to midnight in the specified timezone.
     * The range must not exceed 31 days.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 2;
     */
    dateRange?: DateRange;
    /**
     * IANA timezone name (e.g. "America/New_York", "Europe/Berlin") used to
     * bucket daily usage. When empty, defaults to "UTC".
     *
     * @generated from field: string timezone = 3;
     */
    timezone: string;
    /**
     * Optional filter narrowing the returned data. When unset or empty, the
     * response preserves the default behavior (top-N users + "Others"). See
     * CreditUsageReportFilter for per-field response-scoping semantics.
     *
     * @generated from field: gitpod.v1.CreditUsageReportFilter filter = 4;
     */
    filter?: CreditUsageReportFilter;
};
/**
 * Describes the message gitpod.v1.GetCreditUsageReportRequest.
 * Use `create(GetCreditUsageReportRequestSchema)` to create a new message.
 */
export declare const GetCreditUsageReportRequestSchema: GenMessage<GetCreditUsageReportRequest>;
/**
 * @generated from message gitpod.v1.GetCreditUsageReportResponse
 */
export type GetCreditUsageReportResponse = Message<"gitpod.v1.GetCreditUsageReportResponse"> & {
    /**
     * When the report data was last computed.
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 1;
     */
    updatedAt?: Timestamp;
    /**
     * One entry per day in the requested date range.
     *
     * @generated from field: repeated gitpod.v1.DailyCreditUsage daily_usage = 2;
     */
    dailyUsage: DailyCreditUsage[];
    /**
     * Start of the billing period for this organization.
     * Used by the frontend to filter out months before usage tracking began.
     *
     * @generated from field: optional google.protobuf.Timestamp period_start = 3;
     */
    periodStart?: Timestamp;
};
/**
 * Describes the message gitpod.v1.GetCreditUsageReportResponse.
 * Use `create(GetCreditUsageReportResponseSchema)` to create a new message.
 */
export declare const GetCreditUsageReportResponseSchema: GenMessage<GetCreditUsageReportResponse>;
/**
 * DailyCreditUsage contains credit usage for a single day.
 *
 * @generated from message gitpod.v1.DailyCreditUsage
 */
export type DailyCreditUsage = Message<"gitpod.v1.DailyCreditUsage"> & {
    /**
     * Start of the day (midnight in the requested timezone).
     *
     * @generated from field: google.protobuf.Timestamp date = 1;
     */
    date?: Timestamp;
    /**
     * Org-wide usage broken down by type.
     *
     * @generated from field: repeated gitpod.v1.CreditsByType org_usage = 2;
     */
    orgUsage: CreditsByType[];
    /**
     * Per-user usage for this day (top users + "Others").
     *
     * @generated from field: repeated gitpod.v1.UserCreditUsage user_usage = 3;
     */
    userUsage: UserCreditUsage[];
    /**
     * Per-team usage for this day (top teams + "Others").
     * Empty team_id represents the "Others" aggregation bucket.
     *
     * @generated from field: repeated gitpod.v1.TeamCreditUsage team_usage = 4;
     */
    teamUsage: TeamCreditUsage[];
    /**
     * Per-environment usage for this day (top environments + "Others").
     * Empty environment_id represents the "Others" aggregation bucket.
     *
     * @generated from field: repeated gitpod.v1.EnvironmentCreditUsage environment_usage = 5;
     */
    environmentUsage: EnvironmentCreditUsage[];
    /**
     * Per-agent-execution usage for this day (top conversations + "Others").
     * Empty agent_execution_id represents the "Others" aggregation bucket.
     *
     * @generated from field: repeated gitpod.v1.AgentExecutionCreditUsage conversation_usage = 6;
     */
    conversationUsage: AgentExecutionCreditUsage[];
    /**
     * Org-wide intelligence usage broken down by model.
     *
     * @generated from field: repeated gitpod.v1.EnterpriseAIUsageByModel usage_by_model = 7;
     */
    usageByModel: EnterpriseAIUsageByModel[];
};
/**
 * Describes the message gitpod.v1.DailyCreditUsage.
 * Use `create(DailyCreditUsageSchema)` to create a new message.
 */
export declare const DailyCreditUsageSchema: GenMessage<DailyCreditUsage>;
/**
 * CreditsByType contains credits consumed for a single usage type.
 *
 * @generated from message gitpod.v1.CreditsByType
 */
export type CreditsByType = Message<"gitpod.v1.CreditsByType"> & {
    /**
     * @generated from field: gitpod.v1.UsageType usage_type = 1;
     */
    usageType: UsageType;
    /**
     * @generated from field: double credits = 2;
     */
    credits: number;
};
/**
 * Describes the message gitpod.v1.CreditsByType.
 * Use `create(CreditsByTypeSchema)` to create a new message.
 */
export declare const CreditsByTypeSchema: GenMessage<CreditsByType>;
/**
 * UserCreditUsage contains a single user's credit usage, broken down by type.
 *
 * @generated from message gitpod.v1.UserCreditUsage
 */
export type UserCreditUsage = Message<"gitpod.v1.UserCreditUsage"> & {
    /**
     * Empty when representing the "Others" aggregation bucket.
     *
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string display_name = 2;
     */
    displayName: string;
    /**
     * @generated from field: repeated gitpod.v1.CreditsByType usage = 3;
     */
    usage: CreditsByType[];
    /**
     * Intelligence usage broken down by model.
     *
     * @generated from field: repeated gitpod.v1.EnterpriseAIUsageByModel usage_by_model = 4;
     */
    usageByModel: EnterpriseAIUsageByModel[];
};
/**
 * Describes the message gitpod.v1.UserCreditUsage.
 * Use `create(UserCreditUsageSchema)` to create a new message.
 */
export declare const UserCreditUsageSchema: GenMessage<UserCreditUsage>;
/**
 * TeamCreditUsage contains a single team's credit usage for a day, broken down by type.
 *
 * @generated from message gitpod.v1.TeamCreditUsage
 */
export type TeamCreditUsage = Message<"gitpod.v1.TeamCreditUsage"> & {
    /**
     * Empty when representing the "Others" aggregation bucket.
     *
     * @generated from field: string team_id = 1;
     */
    teamId: string;
    /**
     * @generated from field: string display_name = 2;
     */
    displayName: string;
    /**
     * @generated from field: repeated gitpod.v1.CreditsByType usage = 3;
     */
    usage: CreditsByType[];
};
/**
 * Describes the message gitpod.v1.TeamCreditUsage.
 * Use `create(TeamCreditUsageSchema)` to create a new message.
 */
export declare const TeamCreditUsageSchema: GenMessage<TeamCreditUsage>;
/**
 * EnvironmentCreditUsage contains a single environment's credit usage for a day, broken down by type.
 *
 * @generated from message gitpod.v1.EnvironmentCreditUsage
 */
export type EnvironmentCreditUsage = Message<"gitpod.v1.EnvironmentCreditUsage"> & {
    /**
     * Empty when representing the "Others" aggregation bucket.
     *
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * @generated from field: string display_name = 2;
     */
    displayName: string;
    /**
     * @generated from field: repeated gitpod.v1.CreditsByType usage = 3;
     */
    usage: CreditsByType[];
};
/**
 * Describes the message gitpod.v1.EnvironmentCreditUsage.
 * Use `create(EnvironmentCreditUsageSchema)` to create a new message.
 */
export declare const EnvironmentCreditUsageSchema: GenMessage<EnvironmentCreditUsage>;
/**
 * AgentExecutionCreditUsage contains a single agent execution's credit usage for a day, broken down by type.
 *
 * @generated from message gitpod.v1.AgentExecutionCreditUsage
 */
export type AgentExecutionCreditUsage = Message<"gitpod.v1.AgentExecutionCreditUsage"> & {
    /**
     * Empty when representing the "Others" aggregation bucket.
     *
     * @generated from field: string agent_execution_id = 1;
     */
    agentExecutionId: string;
    /**
     * @generated from field: string display_name = 2;
     */
    displayName: string;
    /**
     * @generated from field: repeated gitpod.v1.CreditsByType usage = 3;
     */
    usage: CreditsByType[];
};
/**
 * Describes the message gitpod.v1.AgentExecutionCreditUsage.
 * Use `create(AgentExecutionCreditUsageSchema)` to create a new message.
 */
export declare const AgentExecutionCreditUsageSchema: GenMessage<AgentExecutionCreditUsage>;
/**
 * @generated from message gitpod.v1.GetCreditUsageExportRequest
 */
export type GetCreditUsageExportRequest = Message<"gitpod.v1.GetCreditUsageExportRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * Date range to export. Both start and end dates are inclusive; time-of-day
     * is ignored. Unlike GetCreditUsageReport, the range may cover up to a year.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 2;
     */
    dateRange?: DateRange;
    /**
     * How to group the export data. Defaults to DAILY_SUMMARY.
     *
     * @generated from field: gitpod.v1.CreditUsageExportGroupBy group_by = 3;
     */
    groupBy: CreditUsageExportGroupBy;
};
/**
 * Describes the message gitpod.v1.GetCreditUsageExportRequest.
 * Use `create(GetCreditUsageExportRequestSchema)` to create a new message.
 */
export declare const GetCreditUsageExportRequestSchema: GenMessage<GetCreditUsageExportRequest>;
/**
 * @generated from message gitpod.v1.GetCreditUsageExportResponse
 */
export type GetCreditUsageExportResponse = Message<"gitpod.v1.GetCreditUsageExportResponse"> & {
    /**
     * Signed download URL for the CSV export. Valid for five minutes, and only
     * for the principal that requested it.
     *
     * @generated from field: string download_url = 1;
     */
    downloadUrl: string;
};
/**
 * Describes the message gitpod.v1.GetCreditUsageExportResponse.
 * Use `create(GetCreditUsageExportResponseSchema)` to create a new message.
 */
export declare const GetCreditUsageExportResponseSchema: GenMessage<GetCreditUsageExportResponse>;
/**
 * @generated from message gitpod.v1.EnterpriseAITokenUsage
 */
export type EnterpriseAITokenUsage = Message<"gitpod.v1.EnterpriseAITokenUsage"> & {
    /**
     * @generated from field: int64 input_tokens = 1;
     */
    inputTokens: bigint;
    /**
     * @generated from field: int64 output_tokens = 2;
     */
    outputTokens: bigint;
    /**
     * @generated from field: int64 cache_tokens = 3;
     */
    cacheTokens: bigint;
    /**
     * @generated from field: int64 total_tokens = 4;
     */
    totalTokens: bigint;
};
/**
 * Describes the message gitpod.v1.EnterpriseAITokenUsage.
 * Use `create(EnterpriseAITokenUsageSchema)` to create a new message.
 */
export declare const EnterpriseAITokenUsageSchema: GenMessage<EnterpriseAITokenUsage>;
/**
 * @generated from message gitpod.v1.EnterpriseAIUsage
 */
export type EnterpriseAIUsage = Message<"gitpod.v1.EnterpriseAIUsage"> & {
    /**
     * @generated from field: double credits = 1;
     */
    credits: number;
    /**
     * @generated from field: int64 cost_microunits = 2;
     */
    costMicrounits: bigint;
    /**
     * @generated from field: gitpod.v1.BillingCurrency currency = 3;
     */
    currency: BillingCurrency;
    /**
     * @generated from field: gitpod.v1.EnterpriseAITokenUsage tokens = 4;
     */
    tokens?: EnterpriseAITokenUsage;
};
/**
 * Describes the message gitpod.v1.EnterpriseAIUsage.
 * Use `create(EnterpriseAIUsageSchema)` to create a new message.
 */
export declare const EnterpriseAIUsageSchema: GenMessage<EnterpriseAIUsage>;
/**
 * @generated from message gitpod.v1.EnterpriseAIUsageBudget
 */
export type EnterpriseAIUsageBudget = Message<"gitpod.v1.EnterpriseAIUsageBudget"> & {
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUsageBudgetSource source = 1;
     */
    source: EnterpriseAIUsageBudgetSource;
    /**
     * @generated from field: optional int64 monthly_credit_limit = 2;
     */
    monthlyCreditLimit?: bigint;
    /**
     * @generated from field: optional int64 monthly_cost_limit_microunits = 3;
     */
    monthlyCostLimitMicrounits?: bigint;
    /**
     * @generated from field: gitpod.v1.BillingCurrency currency = 4;
     */
    currency: BillingCurrency;
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUsage month_to_date_usage = 5;
     */
    monthToDateUsage?: EnterpriseAIUsage;
    /**
     * @generated from field: double utilization_percent = 6;
     */
    utilizationPercent: number;
};
/**
 * Describes the message gitpod.v1.EnterpriseAIUsageBudget.
 * Use `create(EnterpriseAIUsageBudgetSchema)` to create a new message.
 */
export declare const EnterpriseAIUsageBudgetSchema: GenMessage<EnterpriseAIUsageBudget>;
/**
 * @generated from message gitpod.v1.EnterpriseAIUsageByTokenType
 */
export type EnterpriseAIUsageByTokenType = Message<"gitpod.v1.EnterpriseAIUsageByTokenType"> & {
    /**
     * @generated from field: gitpod.v1.BYOKRateCardTokenType token_type = 1;
     */
    tokenType: BYOKRateCardTokenType;
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUsage usage = 2;
     */
    usage?: EnterpriseAIUsage;
};
/**
 * Describes the message gitpod.v1.EnterpriseAIUsageByTokenType.
 * Use `create(EnterpriseAIUsageByTokenTypeSchema)` to create a new message.
 */
export declare const EnterpriseAIUsageByTokenTypeSchema: GenMessage<EnterpriseAIUsageByTokenType>;
/**
 * @generated from message gitpod.v1.EnterpriseAIUsageByModel
 */
export type EnterpriseAIUsageByModel = Message<"gitpod.v1.EnterpriseAIUsageByModel"> & {
    /**
     * @generated from field: string model = 1;
     */
    model: string;
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUsage usage = 2;
     */
    usage?: EnterpriseAIUsage;
    /**
     * @generated from field: repeated gitpod.v1.EnterpriseAIUsageByTokenType usage_by_token_type = 3;
     */
    usageByTokenType: EnterpriseAIUsageByTokenType[];
    /**
     * Usage excluded from spend because no matching BYOK rate was configured.
     *
     * @generated from field: gitpod.v1.EnterpriseAIUsage unpriced_usage = 4;
     */
    unpricedUsage?: EnterpriseAIUsage;
    /**
     * @generated from field: repeated gitpod.v1.EnterpriseAIUsageByTokenType unpriced_usage_by_token_type = 5;
     */
    unpricedUsageByTokenType: EnterpriseAIUsageByTokenType[];
};
/**
 * Describes the message gitpod.v1.EnterpriseAIUsageByModel.
 * Use `create(EnterpriseAIUsageByModelSchema)` to create a new message.
 */
export declare const EnterpriseAIUsageByModelSchema: GenMessage<EnterpriseAIUsageByModel>;
/**
 * @generated from message gitpod.v1.TeamEnterpriseAIUsage
 */
export type TeamEnterpriseAIUsage = Message<"gitpod.v1.TeamEnterpriseAIUsage"> & {
    /**
     * @generated from field: string team_id = 1;
     */
    teamId: string;
    /**
     * @generated from field: string display_name = 2;
     */
    displayName: string;
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUsage usage = 3;
     */
    usage?: EnterpriseAIUsage;
    /**
     * budget is unset when no monthly budget applies to this team.
     *
     * @generated from field: gitpod.v1.EnterpriseAIUsageBudget budget = 4;
     */
    budget?: EnterpriseAIUsageBudget;
    /**
     * @generated from field: repeated gitpod.v1.EnterpriseAIUsageByTokenType usage_by_token_type = 5;
     */
    usageByTokenType: EnterpriseAIUsageByTokenType[];
};
/**
 * Describes the message gitpod.v1.TeamEnterpriseAIUsage.
 * Use `create(TeamEnterpriseAIUsageSchema)` to create a new message.
 */
export declare const TeamEnterpriseAIUsageSchema: GenMessage<TeamEnterpriseAIUsage>;
/**
 * @generated from message gitpod.v1.UserEnterpriseAIUsage
 */
export type UserEnterpriseAIUsage = Message<"gitpod.v1.UserEnterpriseAIUsage"> & {
    /**
     * Empty when representing the "Others" aggregation bucket.
     *
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string display_name = 2;
     */
    displayName: string;
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUsage usage = 3;
     */
    usage?: EnterpriseAIUsage;
};
/**
 * Describes the message gitpod.v1.UserEnterpriseAIUsage.
 * Use `create(UserEnterpriseAIUsageSchema)` to create a new message.
 */
export declare const UserEnterpriseAIUsageSchema: GenMessage<UserEnterpriseAIUsage>;
/**
 * @generated from message gitpod.v1.UserCostBudgetUsage
 */
export type UserCostBudgetUsage = Message<"gitpod.v1.UserCostBudgetUsage"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string display_name = 2;
     */
    displayName: string;
    /**
     * Usage within the requested date range. Reflects true month-to-date
     * usage when the range starts on the first day of the month.
     *
     * @generated from field: gitpod.v1.EnterpriseAIUsage month_to_date_usage = 3;
     */
    monthToDateUsage?: EnterpriseAIUsage;
    /**
     * @generated from field: optional int64 monthly_cost_limit_microunits = 4;
     */
    monthlyCostLimitMicrounits?: bigint;
    /**
     * @generated from field: gitpod.v1.BillingCurrency currency = 5;
     */
    currency: BillingCurrency;
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUserBudgetPolicySource budget_source = 6;
     */
    budgetSource: EnterpriseAIUserBudgetPolicySource;
    /**
     * @generated from field: bool no_cap = 7;
     */
    noCap: boolean;
    /**
     * @generated from field: double utilization_percent = 8;
     */
    utilizationPercent: number;
    /**
     * @generated from field: bool over_budget = 9;
     */
    overBudget: boolean;
    /**
     * @generated from field: bool is_service_account = 10;
     */
    isServiceAccount: boolean;
};
/**
 * Describes the message gitpod.v1.UserCostBudgetUsage.
 * Use `create(UserCostBudgetUsageSchema)` to create a new message.
 */
export declare const UserCostBudgetUsageSchema: GenMessage<UserCostBudgetUsage>;
/**
 * @generated from message gitpod.v1.DailyEnterpriseAIUsage
 */
export type DailyEnterpriseAIUsage = Message<"gitpod.v1.DailyEnterpriseAIUsage"> & {
    /**
     * @generated from field: google.protobuf.Timestamp date = 1;
     */
    date?: Timestamp;
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUsage usage = 2;
     */
    usage?: EnterpriseAIUsage;
    /**
     * budget is unset when no monthly budget applies to the organization.
     *
     * @generated from field: gitpod.v1.EnterpriseAIUsageBudget budget = 3;
     */
    budget?: EnterpriseAIUsageBudget;
    /**
     * @generated from field: repeated gitpod.v1.UserEnterpriseAIUsage user_usage = 4;
     */
    userUsage: UserEnterpriseAIUsage[];
    /**
     * @generated from field: repeated gitpod.v1.TeamEnterpriseAIUsage team_usage = 5;
     */
    teamUsage: TeamEnterpriseAIUsage[];
    /**
     * Usage for this day broken down by model. When the request filters by
     * subject, contains only that subject's model usage.
     *
     * @generated from field: repeated gitpod.v1.EnterpriseAIUsageByModel usage_by_model = 6;
     */
    usageByModel: EnterpriseAIUsageByModel[];
};
/**
 * Describes the message gitpod.v1.DailyEnterpriseAIUsage.
 * Use `create(DailyEnterpriseAIUsageSchema)` to create a new message.
 */
export declare const DailyEnterpriseAIUsageSchema: GenMessage<DailyEnterpriseAIUsage>;
/**
 * @generated from message gitpod.v1.GetEnterpriseAIUsageSummaryRequest
 */
export type GetEnterpriseAIUsageSummaryRequest = Message<"gitpod.v1.GetEnterpriseAIUsageSummaryRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * Date range for the summary. Both start and end dates are inclusive.
     * Time-of-day is ignored; dates are truncated to midnight in the specified timezone.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 2;
     */
    dateRange?: DateRange;
    /**
     * IANA timezone name used to bucket usage. When empty, defaults to "UTC".
     *
     * @generated from field: string timezone = 3;
     */
    timezone: string;
};
/**
 * Describes the message gitpod.v1.GetEnterpriseAIUsageSummaryRequest.
 * Use `create(GetEnterpriseAIUsageSummaryRequestSchema)` to create a new message.
 */
export declare const GetEnterpriseAIUsageSummaryRequestSchema: GenMessage<GetEnterpriseAIUsageSummaryRequest>;
/**
 * @generated from message gitpod.v1.GetEnterpriseAIUsageSummaryResponse
 */
export type GetEnterpriseAIUsageSummaryResponse = Message<"gitpod.v1.GetEnterpriseAIUsageSummaryResponse"> & {
    /**
     * calculated_at is the time through which usage has been calculated.
     * Usage after this timestamp may still be processing.
     *
     * @generated from field: google.protobuf.Timestamp calculated_at = 1;
     */
    calculatedAt?: Timestamp;
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUsage usage = 2;
     */
    usage?: EnterpriseAIUsage;
    /**
     * budget is unset when no monthly budget applies to the organization.
     *
     * @generated from field: gitpod.v1.EnterpriseAIUsageBudget budget = 3;
     */
    budget?: EnterpriseAIUsageBudget;
    /**
     * @generated from field: repeated gitpod.v1.EnterpriseAIUsageByModel usage_by_model = 4;
     */
    usageByModel: EnterpriseAIUsageByModel[];
};
/**
 * Describes the message gitpod.v1.GetEnterpriseAIUsageSummaryResponse.
 * Use `create(GetEnterpriseAIUsageSummaryResponseSchema)` to create a new message.
 */
export declare const GetEnterpriseAIUsageSummaryResponseSchema: GenMessage<GetEnterpriseAIUsageSummaryResponse>;
/**
 * @generated from message gitpod.v1.ListEnterpriseAITeamUsageRequest
 */
export type ListEnterpriseAITeamUsageRequest = Message<"gitpod.v1.ListEnterpriseAITeamUsageRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * Date range for the team usage list. Both start and end dates are inclusive.
     * Time-of-day is ignored; dates are truncated to midnight in the specified timezone.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 3;
     */
    dateRange?: DateRange;
    /**
     * IANA timezone name used to bucket usage. When empty, defaults to "UTC".
     *
     * @generated from field: string timezone = 4;
     */
    timezone: string;
    /**
     * @generated from field: gitpod.v1.ListEnterpriseAITeamUsageRequest.Filter filter = 5;
     */
    filter?: ListEnterpriseAITeamUsageRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListEnterpriseAITeamUsageRequest.
 * Use `create(ListEnterpriseAITeamUsageRequestSchema)` to create a new message.
 */
export declare const ListEnterpriseAITeamUsageRequestSchema: GenMessage<ListEnterpriseAITeamUsageRequest>;
/**
 * @generated from message gitpod.v1.ListEnterpriseAITeamUsageRequest.Filter
 */
export type ListEnterpriseAITeamUsageRequest_Filter = Message<"gitpod.v1.ListEnterpriseAITeamUsageRequest.Filter"> & {
    /**
     * @generated from field: repeated string team_ids = 1;
     */
    teamIds: string[];
};
/**
 * Describes the message gitpod.v1.ListEnterpriseAITeamUsageRequest.Filter.
 * Use `create(ListEnterpriseAITeamUsageRequest_FilterSchema)` to create a new message.
 */
export declare const ListEnterpriseAITeamUsageRequest_FilterSchema: GenMessage<ListEnterpriseAITeamUsageRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListEnterpriseAITeamUsageResponse
 */
export type ListEnterpriseAITeamUsageResponse = Message<"gitpod.v1.ListEnterpriseAITeamUsageResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.TeamEnterpriseAIUsage team_usage = 2;
     */
    teamUsage: TeamEnterpriseAIUsage[];
    /**
     * calculated_at is the time through which usage has been calculated.
     * Usage after this timestamp may still be processing.
     *
     * @generated from field: google.protobuf.Timestamp calculated_at = 3;
     */
    calculatedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.ListEnterpriseAITeamUsageResponse.
 * Use `create(ListEnterpriseAITeamUsageResponseSchema)` to create a new message.
 */
export declare const ListEnterpriseAITeamUsageResponseSchema: GenMessage<ListEnterpriseAITeamUsageResponse>;
/**
 * @generated from message gitpod.v1.ListEnterpriseAIUserUsageRequest
 */
export type ListEnterpriseAIUserUsageRequest = Message<"gitpod.v1.ListEnterpriseAIUserUsageRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * Date range for the user usage list. Both start and end dates are inclusive.
     * Time-of-day is ignored; dates are truncated to midnight in the specified timezone.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 3;
     */
    dateRange?: DateRange;
    /**
     * IANA timezone name used to bucket usage. When empty, defaults to "UTC".
     *
     * @generated from field: string timezone = 4;
     */
    timezone: string;
    /**
     * sort controls the ordering of results. Defaults to total spend descending.
     *
     * @generated from field: gitpod.v1.ListEnterpriseAIUserUsageRequest.Sort sort = 5;
     */
    sort?: ListEnterpriseAIUserUsageRequest_Sort;
    /**
     * Optional filter narrowing the returned user usage. When set to a subject,
     * the response contains only usage for that user or service account.
     *
     * @generated from field: gitpod.v1.ListEnterpriseAIUserUsageRequest.Filter filter = 6;
     */
    filter?: ListEnterpriseAIUserUsageRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListEnterpriseAIUserUsageRequest.
 * Use `create(ListEnterpriseAIUserUsageRequestSchema)` to create a new message.
 */
export declare const ListEnterpriseAIUserUsageRequestSchema: GenMessage<ListEnterpriseAIUserUsageRequest>;
/**
 * @generated from message gitpod.v1.ListEnterpriseAIUserUsageRequest.Sort
 */
export type ListEnterpriseAIUserUsageRequest_Sort = Message<"gitpod.v1.ListEnterpriseAIUserUsageRequest.Sort"> & {
    /**
     * @generated from field: gitpod.v1.ListEnterpriseAIUserUsageRequest.SortField field = 1;
     */
    field: ListEnterpriseAIUserUsageRequest_SortField;
    /**
     * @generated from field: gitpod.v1.SortOrder order = 2;
     */
    order: SortOrder;
};
/**
 * Describes the message gitpod.v1.ListEnterpriseAIUserUsageRequest.Sort.
 * Use `create(ListEnterpriseAIUserUsageRequest_SortSchema)` to create a new message.
 */
export declare const ListEnterpriseAIUserUsageRequest_SortSchema: GenMessage<ListEnterpriseAIUserUsageRequest_Sort>;
/**
 * @generated from message gitpod.v1.ListEnterpriseAIUserUsageRequest.Filter
 */
export type ListEnterpriseAIUserUsageRequest_Filter = Message<"gitpod.v1.ListEnterpriseAIUserUsageRequest.Filter"> & {
    /**
     * Restrict the user usage list to a single subject. The subject must be
     * PRINCIPAL_USER or PRINCIPAL_SERVICE_ACCOUNT and belong to the request's
     * organization.
     *
     * @generated from field: optional gitpod.v1.Subject subject = 1;
     */
    subject?: Subject;
};
/**
 * Describes the message gitpod.v1.ListEnterpriseAIUserUsageRequest.Filter.
 * Use `create(ListEnterpriseAIUserUsageRequest_FilterSchema)` to create a new message.
 */
export declare const ListEnterpriseAIUserUsageRequest_FilterSchema: GenMessage<ListEnterpriseAIUserUsageRequest_Filter>;
/**
 * @generated from enum gitpod.v1.ListEnterpriseAIUserUsageRequest.SortField
 */
export declare enum ListEnterpriseAIUserUsageRequest_SortField {
    /**
     * @generated from enum value: SORT_FIELD_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Sort by month-to-date total spend.
     *
     * @generated from enum value: SORT_FIELD_USAGE = 1;
     */
    USAGE = 1,
    /**
     * Sort by display name.
     *
     * @generated from enum value: SORT_FIELD_DISPLAY_NAME = 2;
     */
    DISPLAY_NAME = 2,
    /**
     * Sort by effective monthly cost budget (users without a budget sort last).
     *
     * @generated from enum value: SORT_FIELD_BUDGET = 3;
     */
    BUDGET = 3,
    /**
     * Sort by budget utilization percentage (users without a budget sort last).
     *
     * @generated from enum value: SORT_FIELD_BUDGET_USED = 4;
     */
    BUDGET_USED = 4
}
/**
 * Describes the enum gitpod.v1.ListEnterpriseAIUserUsageRequest.SortField.
 */
export declare const ListEnterpriseAIUserUsageRequest_SortFieldSchema: GenEnum<ListEnterpriseAIUserUsageRequest_SortField>;
/**
 * @generated from message gitpod.v1.ListEnterpriseAIUserUsageResponse
 */
export type ListEnterpriseAIUserUsageResponse = Message<"gitpod.v1.ListEnterpriseAIUserUsageResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.UserCostBudgetUsage user_usage = 2;
     */
    userUsage: UserCostBudgetUsage[];
    /**
     * Total number of users with usage in the billing period, across all pages.
     *
     * @generated from field: int32 total_count = 3;
     */
    totalCount: number;
    /**
     * calculated_at is the time through which usage has been calculated.
     * Usage after this timestamp may still be processing.
     *
     * @generated from field: google.protobuf.Timestamp calculated_at = 4;
     */
    calculatedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.ListEnterpriseAIUserUsageResponse.
 * Use `create(ListEnterpriseAIUserUsageResponseSchema)` to create a new message.
 */
export declare const ListEnterpriseAIUserUsageResponseSchema: GenMessage<ListEnterpriseAIUserUsageResponse>;
/**
 * @generated from message gitpod.v1.GetEnterpriseAIUsageTimeSeriesRequest
 */
export type GetEnterpriseAIUsageTimeSeriesRequest = Message<"gitpod.v1.GetEnterpriseAIUsageTimeSeriesRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * Date range for the daily usage series. Both start and end dates are inclusive.
     * Time-of-day is ignored; dates are truncated to midnight in the specified timezone.
     *
     * @generated from field: gitpod.v1.DateRange date_range = 2;
     */
    dateRange?: DateRange;
    /**
     * IANA timezone name used to bucket daily usage. When empty, defaults to "UTC".
     *
     * @generated from field: string timezone = 3;
     */
    timezone: string;
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUsageTimeSeriesFilter filter = 4;
     */
    filter?: EnterpriseAIUsageTimeSeriesFilter;
};
/**
 * Describes the message gitpod.v1.GetEnterpriseAIUsageTimeSeriesRequest.
 * Use `create(GetEnterpriseAIUsageTimeSeriesRequestSchema)` to create a new message.
 */
export declare const GetEnterpriseAIUsageTimeSeriesRequestSchema: GenMessage<GetEnterpriseAIUsageTimeSeriesRequest>;
/**
 * @generated from message gitpod.v1.EnterpriseAIUsageTimeSeriesFilter
 */
export type EnterpriseAIUsageTimeSeriesFilter = Message<"gitpod.v1.EnterpriseAIUsageTimeSeriesFilter"> & {
    /**
     * Restrict the per-user breakdown to a single subject.
     *
     * @generated from field: optional gitpod.v1.Subject subject = 1;
     */
    subject?: Subject;
};
/**
 * Describes the message gitpod.v1.EnterpriseAIUsageTimeSeriesFilter.
 * Use `create(EnterpriseAIUsageTimeSeriesFilterSchema)` to create a new message.
 */
export declare const EnterpriseAIUsageTimeSeriesFilterSchema: GenMessage<EnterpriseAIUsageTimeSeriesFilter>;
/**
 * @generated from message gitpod.v1.GetEnterpriseAIUsageTimeSeriesResponse
 */
export type GetEnterpriseAIUsageTimeSeriesResponse = Message<"gitpod.v1.GetEnterpriseAIUsageTimeSeriesResponse"> & {
    /**
     * calculated_at is the time through which usage has been calculated.
     * Usage after this timestamp may still be processing.
     *
     * @generated from field: google.protobuf.Timestamp calculated_at = 1;
     */
    calculatedAt?: Timestamp;
    /**
     * @generated from field: repeated gitpod.v1.DailyEnterpriseAIUsage daily_usage = 2;
     */
    dailyUsage: DailyEnterpriseAIUsage[];
};
/**
 * Describes the message gitpod.v1.GetEnterpriseAIUsageTimeSeriesResponse.
 * Use `create(GetEnterpriseAIUsageTimeSeriesResponseSchema)` to create a new message.
 */
export declare const GetEnterpriseAIUsageTimeSeriesResponseSchema: GenMessage<GetEnterpriseAIUsageTimeSeriesResponse>;
/**
 * @generated from message gitpod.v1.UsageEventCorrectionResult
 */
export type UsageEventCorrectionResult = Message<"gitpod.v1.UsageEventCorrectionResult"> & {
    /**
     * @generated from field: string idempotency_key = 1;
     */
    idempotencyKey: string;
    /**
     * @generated from field: bool success = 2;
     */
    success: boolean;
    /**
     * Error message if correction failed (e.g., event not found, already cancelled).
     *
     * @generated from field: string error = 3;
     */
    error: string;
};
/**
 * Describes the message gitpod.v1.UsageEventCorrectionResult.
 * Use `create(UsageEventCorrectionResultSchema)` to create a new message.
 */
export declare const UsageEventCorrectionResultSchema: GenMessage<UsageEventCorrectionResult>;
/**
 * @generated from message gitpod.v1.UsageEventInput
 */
export type UsageEventInput = Message<"gitpod.v1.UsageEventInput"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * Must be a known event type: "environment_usage" or "llm_usage".
     *
     * @generated from field: string event_name = 2;
     */
    eventName: string;
    /**
     * Unix epoch seconds. Raw int64 (not google.protobuf.Timestamp) to match
     * the storage model and allow direct CSV round-tripping.
     *
     * @generated from field: int64 timestamp = 3;
     */
    timestamp: bigint;
    /**
     * @generated from field: int64 value = 4;
     */
    value: bigint;
    /**
     * @generated from field: optional string user_id = 5;
     */
    userId?: string;
    /**
     * JSON-encoded payload metadata. Validated per event_name by the service.
     *
     * @generated from field: string payload_json = 6;
     */
    payloadJson: string;
};
/**
 * Describes the message gitpod.v1.UsageEventInput.
 * Use `create(UsageEventInputSchema)` to create a new message.
 */
export declare const UsageEventInputSchema: GenMessage<UsageEventInput>;
/**
 * @generated from message gitpod.v1.UsageEventInsertResult
 */
export type UsageEventInsertResult = Message<"gitpod.v1.UsageEventInsertResult"> & {
    /**
     * Original input fields echoed back.
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: string event_name = 2;
     */
    eventName: string;
    /**
     * Unix epoch seconds (echoed from input).
     *
     * @generated from field: int64 timestamp = 3;
     */
    timestamp: bigint;
    /**
     * @generated from field: int64 value = 4;
     */
    value: bigint;
    /**
     * @generated from field: string user_id = 5;
     */
    userId: string;
    /**
     * @generated from field: string payload_json = 6;
     */
    payloadJson: string;
    /**
     * "ok", "skipped", or "error".
     *
     * @generated from field: string status = 7;
     */
    status: string;
    /**
     * Generated idempotency key (empty for validation errors before key generation).
     *
     * @generated from field: string idempotency_key = 8;
     */
    idempotencyKey: string;
    /**
     * Error/skip reason (empty for status "ok").
     *
     * @generated from field: string message = 9;
     */
    message: string;
};
/**
 * Describes the message gitpod.v1.UsageEventInsertResult.
 * Use `create(UsageEventInsertResultSchema)` to create a new message.
 */
export declare const UsageEventInsertResultSchema: GenMessage<UsageEventInsertResult>;
/**
 * @generated from message gitpod.v1.BYOKRateCardRate
 */
export type BYOKRateCardRate = Message<"gitpod.v1.BYOKRateCardRate"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * @generated from field: string model = 3;
     */
    model: string;
    /**
     * @generated from field: gitpod.v1.BYOKRateCardTokenType token_type = 4;
     */
    tokenType: BYOKRateCardTokenType;
    /**
     * rate_microunits_per_million_tokens is the currency-denominated price per
     * one million tokens, stored in micro-units of the currency.
     *
     * @generated from field: int64 rate_microunits_per_million_tokens = 5;
     */
    rateMicrounitsPerMillionTokens: bigint;
    /**
     * @generated from field: gitpod.v1.BillingCurrency currency = 6;
     */
    currency: BillingCurrency;
    /**
     * @generated from field: google.protobuf.Timestamp effective_at = 7;
     */
    effectiveAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 8;
     */
    createdAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.BYOKRateCardRate.
 * Use `create(BYOKRateCardRateSchema)` to create a new message.
 */
export declare const BYOKRateCardRateSchema: GenMessage<BYOKRateCardRate>;
/**
 * @generated from message gitpod.v1.EnterpriseAIUserBudgetPolicy
 */
export type EnterpriseAIUserBudgetPolicy = Message<"gitpod.v1.EnterpriseAIUserBudgetPolicy"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUserBudgetMode mode = 3;
     */
    mode: EnterpriseAIUserBudgetMode;
    /**
     * @generated from field: optional string user_id = 4;
     */
    userId?: string;
    /**
     * monthly_credit_limit is the credit/Ona Intelligence monthly budget in whole credits.
     *
     * @generated from field: optional int64 monthly_credit_limit = 5;
     */
    monthlyCreditLimit?: bigint;
    /**
     * monthly_cost_limit_microunits is the BYOK monthly budget in micro-units of currency.
     *
     * @generated from field: optional int64 monthly_cost_limit_microunits = 6;
     */
    monthlyCostLimitMicrounits?: bigint;
    /**
     * @generated from field: gitpod.v1.BillingCurrency currency = 7;
     */
    currency: BillingCurrency;
    /**
     * @generated from field: bool no_cap = 8;
     */
    noCap: boolean;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 9;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 10;
     */
    updatedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.EnterpriseAIUserBudgetPolicy.
 * Use `create(EnterpriseAIUserBudgetPolicySchema)` to create a new message.
 */
export declare const EnterpriseAIUserBudgetPolicySchema: GenMessage<EnterpriseAIUserBudgetPolicy>;
/**
 * @generated from message gitpod.v1.EffectiveEnterpriseAIUserBudgetPolicy
 */
export type EffectiveEnterpriseAIUserBudgetPolicy = Message<"gitpod.v1.EffectiveEnterpriseAIUserBudgetPolicy"> & {
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUserBudgetPolicySource source = 1;
     */
    source: EnterpriseAIUserBudgetPolicySource;
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUserBudgetPolicy policy = 2;
     */
    policy?: EnterpriseAIUserBudgetPolicy;
};
/**
 * Describes the message gitpod.v1.EffectiveEnterpriseAIUserBudgetPolicy.
 * Use `create(EffectiveEnterpriseAIUserBudgetPolicySchema)` to create a new message.
 */
export declare const EffectiveEnterpriseAIUserBudgetPolicySchema: GenMessage<EffectiveEnterpriseAIUserBudgetPolicy>;
/**
 * @generated from message gitpod.v1.GetEnterpriseAIUserBudgetPolicyRequest
 */
export type GetEnterpriseAIUserBudgetPolicyRequest = Message<"gitpod.v1.GetEnterpriseAIUserBudgetPolicyRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUserBudgetMode mode = 2;
     */
    mode: EnterpriseAIUserBudgetMode;
    /**
     * @generated from field: optional string user_id = 3;
     */
    userId?: string;
};
/**
 * Describes the message gitpod.v1.GetEnterpriseAIUserBudgetPolicyRequest.
 * Use `create(GetEnterpriseAIUserBudgetPolicyRequestSchema)` to create a new message.
 */
export declare const GetEnterpriseAIUserBudgetPolicyRequestSchema: GenMessage<GetEnterpriseAIUserBudgetPolicyRequest>;
/**
 * @generated from message gitpod.v1.GetEnterpriseAIUserBudgetPolicyResponse
 */
export type GetEnterpriseAIUserBudgetPolicyResponse = Message<"gitpod.v1.GetEnterpriseAIUserBudgetPolicyResponse"> & {
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUserBudgetPolicy policy = 1;
     */
    policy?: EnterpriseAIUserBudgetPolicy;
    /**
     * @generated from field: gitpod.v1.EffectiveEnterpriseAIUserBudgetPolicy effective_policy = 2;
     */
    effectivePolicy?: EffectiveEnterpriseAIUserBudgetPolicy;
};
/**
 * Describes the message gitpod.v1.GetEnterpriseAIUserBudgetPolicyResponse.
 * Use `create(GetEnterpriseAIUserBudgetPolicyResponseSchema)` to create a new message.
 */
export declare const GetEnterpriseAIUserBudgetPolicyResponseSchema: GenMessage<GetEnterpriseAIUserBudgetPolicyResponse>;
/**
 * @generated from message gitpod.v1.SetEnterpriseAIUserBudgetPolicyRequest
 */
export type SetEnterpriseAIUserBudgetPolicyRequest = Message<"gitpod.v1.SetEnterpriseAIUserBudgetPolicyRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUserBudgetMode mode = 2;
     */
    mode: EnterpriseAIUserBudgetMode;
    /**
     * @generated from field: optional string user_id = 3;
     */
    userId?: string;
    /**
     * monthly_credit_limit is the credit/Ona Intelligence monthly budget in whole credits.
     *
     * @generated from field: optional int64 monthly_credit_limit = 4;
     */
    monthlyCreditLimit?: bigint;
    /**
     * monthly_cost_limit_microunits is the BYOK monthly budget in micro-units of currency.
     *
     * @generated from field: optional int64 monthly_cost_limit_microunits = 5;
     */
    monthlyCostLimitMicrounits?: bigint;
    /**
     * @generated from field: gitpod.v1.BillingCurrency currency = 6;
     */
    currency: BillingCurrency;
    /**
     * @generated from field: bool no_cap = 7;
     */
    noCap: boolean;
};
/**
 * Describes the message gitpod.v1.SetEnterpriseAIUserBudgetPolicyRequest.
 * Use `create(SetEnterpriseAIUserBudgetPolicyRequestSchema)` to create a new message.
 */
export declare const SetEnterpriseAIUserBudgetPolicyRequestSchema: GenMessage<SetEnterpriseAIUserBudgetPolicyRequest>;
/**
 * @generated from message gitpod.v1.SetEnterpriseAIUserBudgetPolicyResponse
 */
export type SetEnterpriseAIUserBudgetPolicyResponse = Message<"gitpod.v1.SetEnterpriseAIUserBudgetPolicyResponse"> & {
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUserBudgetPolicy policy = 1;
     */
    policy?: EnterpriseAIUserBudgetPolicy;
};
/**
 * Describes the message gitpod.v1.SetEnterpriseAIUserBudgetPolicyResponse.
 * Use `create(SetEnterpriseAIUserBudgetPolicyResponseSchema)` to create a new message.
 */
export declare const SetEnterpriseAIUserBudgetPolicyResponseSchema: GenMessage<SetEnterpriseAIUserBudgetPolicyResponse>;
/**
 * @generated from message gitpod.v1.DeleteEnterpriseAIUserBudgetPolicyRequest
 */
export type DeleteEnterpriseAIUserBudgetPolicyRequest = Message<"gitpod.v1.DeleteEnterpriseAIUserBudgetPolicyRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUserBudgetMode mode = 2;
     */
    mode: EnterpriseAIUserBudgetMode;
    /**
     * @generated from field: optional string user_id = 3;
     */
    userId?: string;
};
/**
 * Describes the message gitpod.v1.DeleteEnterpriseAIUserBudgetPolicyRequest.
 * Use `create(DeleteEnterpriseAIUserBudgetPolicyRequestSchema)` to create a new message.
 */
export declare const DeleteEnterpriseAIUserBudgetPolicyRequestSchema: GenMessage<DeleteEnterpriseAIUserBudgetPolicyRequest>;
/**
 * @generated from message gitpod.v1.DeleteEnterpriseAIUserBudgetPolicyResponse
 */
export type DeleteEnterpriseAIUserBudgetPolicyResponse = Message<"gitpod.v1.DeleteEnterpriseAIUserBudgetPolicyResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteEnterpriseAIUserBudgetPolicyResponse.
 * Use `create(DeleteEnterpriseAIUserBudgetPolicyResponseSchema)` to create a new message.
 */
export declare const DeleteEnterpriseAIUserBudgetPolicyResponseSchema: GenMessage<DeleteEnterpriseAIUserBudgetPolicyResponse>;
/**
 * @generated from message gitpod.v1.GetCumulativeCreditUsageRequest
 */
export type GetCumulativeCreditUsageRequest = Message<"gitpod.v1.GetCumulativeCreditUsageRequest"> & {
    /**
     * organization_id is the ID of the organization to get cumulative usage for.
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * as_of is the point in time to compute cumulative usage up to.
     * Defaults to now if not set.
     *
     * @generated from field: optional google.protobuf.Timestamp as_of = 2;
     */
    asOf?: Timestamp;
};
/**
 * Describes the message gitpod.v1.GetCumulativeCreditUsageRequest.
 * Use `create(GetCumulativeCreditUsageRequestSchema)` to create a new message.
 */
export declare const GetCumulativeCreditUsageRequestSchema: GenMessage<GetCumulativeCreditUsageRequest>;
/**
 * @generated from message gitpod.v1.GetCumulativeCreditUsageResponse
 */
export type GetCumulativeCreditUsageResponse = Message<"gitpod.v1.GetCumulativeCreditUsageResponse"> & {
    /**
     * Org-wide cumulative usage, broken down by type and total.
     *
     * @generated from field: gitpod.v1.CumulativeCreditUsage org_usage = 1;
     */
    orgUsage?: CumulativeCreditUsage;
    /**
     * Per-team cumulative usage with credit allocation comparison.
     * Returns all teams (no top-N limit).
     *
     * @generated from field: repeated gitpod.v1.TeamCumulativeCreditUsage team_usage = 2;
     */
    teamUsage: TeamCumulativeCreditUsage[];
    /**
     * Usage by members not assigned to any team.
     *
     * @generated from field: gitpod.v1.CumulativeCreditUsage unteamed_usage = 3;
     */
    unteamedUsage?: CumulativeCreditUsage;
    /**
     * Start of the cumulative calculation period.
     * Cumulative totals are computed from this date forward.
     *
     * @generated from field: google.protobuf.Timestamp period_start = 4;
     */
    periodStart?: Timestamp;
    /**
     * Per-user month-to-date usage for every user with usage in the period.
     * The budget fields on each entry are populated only when a monthly budget
     * applies to that user. This list is not paginated or capped; for large
     * organizations prefer ListEnterpriseUserCreditUsage.
     *
     * @generated from field: repeated gitpod.v1.UserCreditBudgetUsage user_usage = 5;
     */
    userUsage: UserCreditBudgetUsage[];
};
/**
 * Describes the message gitpod.v1.GetCumulativeCreditUsageResponse.
 * Use `create(GetCumulativeCreditUsageResponseSchema)` to create a new message.
 */
export declare const GetCumulativeCreditUsageResponseSchema: GenMessage<GetCumulativeCreditUsageResponse>;
/**
 * CumulativeCreditUsage contains cumulative credit consumption totals.
 *
 * @generated from message gitpod.v1.CumulativeCreditUsage
 */
export type CumulativeCreditUsage = Message<"gitpod.v1.CumulativeCreditUsage"> & {
    /**
     * Total credits consumed.
     *
     * @generated from field: double total_credits = 1;
     */
    totalCredits: number;
    /**
     * Credits consumed broken down by usage type.
     *
     * @generated from field: repeated gitpod.v1.CreditsByType usage_by_type = 2;
     */
    usageByType: CreditsByType[];
};
/**
 * Describes the message gitpod.v1.CumulativeCreditUsage.
 * Use `create(CumulativeCreditUsageSchema)` to create a new message.
 */
export declare const CumulativeCreditUsageSchema: GenMessage<CumulativeCreditUsage>;
/**
 * TeamCumulativeCreditUsage contains a team's cumulative credit usage and allocation.
 *
 * @generated from message gitpod.v1.TeamCumulativeCreditUsage
 */
export type TeamCumulativeCreditUsage = Message<"gitpod.v1.TeamCumulativeCreditUsage"> & {
    /**
     * @generated from field: string team_id = 1;
     */
    teamId: string;
    /**
     * @generated from field: string display_name = 2;
     */
    displayName: string;
    /**
     * Cumulative credit usage for this team.
     *
     * @generated from field: gitpod.v1.CumulativeCreditUsage usage = 3;
     */
    usage?: CumulativeCreditUsage;
    /**
     * The team's credit allocation (budget) in whole credits, if set.
     * Not set means no allocation has been configured for this team.
     *
     * @generated from field: optional int64 credit_budget = 4;
     */
    creditBudget?: bigint;
};
/**
 * Describes the message gitpod.v1.TeamCumulativeCreditUsage.
 * Use `create(TeamCumulativeCreditUsageSchema)` to create a new message.
 */
export declare const TeamCumulativeCreditUsageSchema: GenMessage<TeamCumulativeCreditUsage>;
/**
 * @generated from message gitpod.v1.UserCreditBudgetUsage
 */
export type UserCreditBudgetUsage = Message<"gitpod.v1.UserCreditBudgetUsage"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string display_name = 2;
     */
    displayName: string;
    /**
     * @generated from field: gitpod.v1.CumulativeCreditUsage month_to_date_usage = 3;
     */
    monthToDateUsage?: CumulativeCreditUsage;
    /**
     * @generated from field: optional int64 credit_budget = 4;
     */
    creditBudget?: bigint;
    /**
     * @generated from field: gitpod.v1.EnterpriseAIUserBudgetPolicySource budget_source = 5;
     */
    budgetSource: EnterpriseAIUserBudgetPolicySource;
    /**
     * @generated from field: bool no_cap = 6;
     */
    noCap: boolean;
    /**
     * @generated from field: double utilization_percent = 7;
     */
    utilizationPercent: number;
    /**
     * @generated from field: bool over_budget = 8;
     */
    overBudget: boolean;
    /**
     * True when user_id refers to a service account rather than a human user.
     * The dashboard uses this to mark non-human accounts in admin tables.
     *
     * @generated from field: bool is_service_account = 9;
     */
    isServiceAccount: boolean;
    /**
     * Month-to-date intelligence usage broken down by model.
     *
     * @generated from field: repeated gitpod.v1.EnterpriseAIUsageByModel usage_by_model = 10;
     */
    usageByModel: EnterpriseAIUsageByModel[];
};
/**
 * Describes the message gitpod.v1.UserCreditBudgetUsage.
 * Use `create(UserCreditBudgetUsageSchema)` to create a new message.
 */
export declare const UserCreditBudgetUsageSchema: GenMessage<UserCreditBudgetUsage>;
/**
 * @generated from message gitpod.v1.ListEnterpriseUserCreditUsageRequest
 */
export type ListEnterpriseUserCreditUsageRequest = Message<"gitpod.v1.ListEnterpriseUserCreditUsageRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * organization_id is the ID of the organization to list user credit usage for.
     *
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * as_of is the point in time to compute month-to-date usage up to.
     * Defaults to now if not set.
     *
     * @generated from field: optional google.protobuf.Timestamp as_of = 3;
     */
    asOf?: Timestamp;
    /**
     * sort controls the ordering of results. Defaults to total credits descending.
     *
     * @generated from field: gitpod.v1.ListEnterpriseUserCreditUsageRequest.Sort sort = 4;
     */
    sort?: ListEnterpriseUserCreditUsageRequest_Sort;
};
/**
 * Describes the message gitpod.v1.ListEnterpriseUserCreditUsageRequest.
 * Use `create(ListEnterpriseUserCreditUsageRequestSchema)` to create a new message.
 */
export declare const ListEnterpriseUserCreditUsageRequestSchema: GenMessage<ListEnterpriseUserCreditUsageRequest>;
/**
 * @generated from message gitpod.v1.ListEnterpriseUserCreditUsageRequest.Sort
 */
export type ListEnterpriseUserCreditUsageRequest_Sort = Message<"gitpod.v1.ListEnterpriseUserCreditUsageRequest.Sort"> & {
    /**
     * @generated from field: gitpod.v1.ListEnterpriseUserCreditUsageRequest.SortField field = 1;
     */
    field: ListEnterpriseUserCreditUsageRequest_SortField;
    /**
     * @generated from field: gitpod.v1.SortOrder order = 2;
     */
    order: SortOrder;
};
/**
 * Describes the message gitpod.v1.ListEnterpriseUserCreditUsageRequest.Sort.
 * Use `create(ListEnterpriseUserCreditUsageRequest_SortSchema)` to create a new message.
 */
export declare const ListEnterpriseUserCreditUsageRequest_SortSchema: GenMessage<ListEnterpriseUserCreditUsageRequest_Sort>;
/**
 * @generated from enum gitpod.v1.ListEnterpriseUserCreditUsageRequest.SortField
 */
export declare enum ListEnterpriseUserCreditUsageRequest_SortField {
    /**
     * @generated from enum value: SORT_FIELD_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Sort by month-to-date total credits consumed.
     *
     * @generated from enum value: SORT_FIELD_USAGE = 1;
     */
    USAGE = 1,
    /**
     * Sort by display name.
     *
     * @generated from enum value: SORT_FIELD_DISPLAY_NAME = 2;
     */
    DISPLAY_NAME = 2,
    /**
     * Sort by effective credit budget (users without a budget sort last).
     *
     * @generated from enum value: SORT_FIELD_BUDGET = 3;
     */
    BUDGET = 3,
    /**
     * Sort by budget utilization percentage (users without a budget sort last).
     *
     * @generated from enum value: SORT_FIELD_BUDGET_USED = 4;
     */
    BUDGET_USED = 4
}
/**
 * Describes the enum gitpod.v1.ListEnterpriseUserCreditUsageRequest.SortField.
 */
export declare const ListEnterpriseUserCreditUsageRequest_SortFieldSchema: GenEnum<ListEnterpriseUserCreditUsageRequest_SortField>;
/**
 * @generated from message gitpod.v1.ListEnterpriseUserCreditUsageResponse
 */
export type ListEnterpriseUserCreditUsageResponse = Message<"gitpod.v1.ListEnterpriseUserCreditUsageResponse"> & {
    /**
     * Per-user month-to-date usage with effective monthly budget comparison.
     * Ordered according to the request's sort field, defaulting to total credits descending.
     *
     * @generated from field: repeated gitpod.v1.UserCreditBudgetUsage user_usage = 1;
     */
    userUsage: UserCreditBudgetUsage[];
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 2;
     */
    pagination?: PaginationResponse;
    /**
     * Total number of users with usage in the billing period, across all pages.
     *
     * @generated from field: int32 total_count = 3;
     */
    totalCount: number;
};
/**
 * Describes the message gitpod.v1.ListEnterpriseUserCreditUsageResponse.
 * Use `create(ListEnterpriseUserCreditUsageResponseSchema)` to create a new message.
 */
export declare const ListEnterpriseUserCreditUsageResponseSchema: GenMessage<ListEnterpriseUserCreditUsageResponse>;
/**
 * TeamCreditAllocationInfo represents a team's monthly budget allocation.
 *
 * @generated from message gitpod.v1.TeamCreditAllocationInfo
 */
export type TeamCreditAllocationInfo = Message<"gitpod.v1.TeamCreditAllocationInfo"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string team_id = 2;
     */
    teamId: string;
    /**
     * @generated from field: string organization_id = 3;
     */
    organizationId: string;
    /**
     * credit_budget is the allocated credit budget in whole credits.
     *
     * @generated from field: int64 credit_budget = 4;
     */
    creditBudget: bigint;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 6;
     */
    updatedAt?: Timestamp;
    /**
     * cost_budget_microunits is the BYOK cost budget in micro-units of the currency.
     *
     * @generated from field: optional int64 cost_budget_microunits = 7;
     */
    costBudgetMicrounits?: bigint;
    /**
     * @generated from field: gitpod.v1.BillingCurrency cost_budget_currency = 8;
     */
    costBudgetCurrency: BillingCurrency;
};
/**
 * Describes the message gitpod.v1.TeamCreditAllocationInfo.
 * Use `create(TeamCreditAllocationInfoSchema)` to create a new message.
 */
export declare const TeamCreditAllocationInfoSchema: GenMessage<TeamCreditAllocationInfo>;
/**
 * @generated from message gitpod.v1.CreateTeamCreditAllocationRequest
 */
export type CreateTeamCreditAllocationRequest = Message<"gitpod.v1.CreateTeamCreditAllocationRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: string team_id = 2;
     */
    teamId: string;
    /**
     * credit_budget is the allocated credit budget in whole credits.
     *
     * @generated from field: int64 credit_budget = 3;
     */
    creditBudget: bigint;
    /**
     * cost_budget_microunits is the BYOK cost budget in micro-units of the currency.
     *
     * @generated from field: optional int64 cost_budget_microunits = 4;
     */
    costBudgetMicrounits?: bigint;
    /**
     * @generated from field: gitpod.v1.BillingCurrency cost_budget_currency = 5;
     */
    costBudgetCurrency: BillingCurrency;
};
/**
 * Describes the message gitpod.v1.CreateTeamCreditAllocationRequest.
 * Use `create(CreateTeamCreditAllocationRequestSchema)` to create a new message.
 */
export declare const CreateTeamCreditAllocationRequestSchema: GenMessage<CreateTeamCreditAllocationRequest>;
/**
 * @generated from message gitpod.v1.CreateTeamCreditAllocationResponse
 */
export type CreateTeamCreditAllocationResponse = Message<"gitpod.v1.CreateTeamCreditAllocationResponse"> & {
    /**
     * @generated from field: gitpod.v1.TeamCreditAllocationInfo allocation = 1;
     */
    allocation?: TeamCreditAllocationInfo;
};
/**
 * Describes the message gitpod.v1.CreateTeamCreditAllocationResponse.
 * Use `create(CreateTeamCreditAllocationResponseSchema)` to create a new message.
 */
export declare const CreateTeamCreditAllocationResponseSchema: GenMessage<CreateTeamCreditAllocationResponse>;
/**
 * @generated from message gitpod.v1.GetTeamCreditAllocationRequest
 */
export type GetTeamCreditAllocationRequest = Message<"gitpod.v1.GetTeamCreditAllocationRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: string team_id = 2;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetTeamCreditAllocationRequest.
 * Use `create(GetTeamCreditAllocationRequestSchema)` to create a new message.
 */
export declare const GetTeamCreditAllocationRequestSchema: GenMessage<GetTeamCreditAllocationRequest>;
/**
 * @generated from message gitpod.v1.GetTeamCreditAllocationResponse
 */
export type GetTeamCreditAllocationResponse = Message<"gitpod.v1.GetTeamCreditAllocationResponse"> & {
    /**
     * @generated from field: gitpod.v1.TeamCreditAllocationInfo allocation = 1;
     */
    allocation?: TeamCreditAllocationInfo;
};
/**
 * Describes the message gitpod.v1.GetTeamCreditAllocationResponse.
 * Use `create(GetTeamCreditAllocationResponseSchema)` to create a new message.
 */
export declare const GetTeamCreditAllocationResponseSchema: GenMessage<GetTeamCreditAllocationResponse>;
/**
 * @generated from message gitpod.v1.UpdateTeamCreditAllocationRequest
 */
export type UpdateTeamCreditAllocationRequest = Message<"gitpod.v1.UpdateTeamCreditAllocationRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: string team_id = 2;
     */
    teamId: string;
    /**
     * credit_budget is the allocated credit budget in whole credits.
     *
     * @generated from field: int64 credit_budget = 3;
     */
    creditBudget: bigint;
    /**
     * cost_budget_microunits is the BYOK cost budget in micro-units of the currency.
     *
     * @generated from field: optional int64 cost_budget_microunits = 4;
     */
    costBudgetMicrounits?: bigint;
    /**
     * @generated from field: gitpod.v1.BillingCurrency cost_budget_currency = 5;
     */
    costBudgetCurrency: BillingCurrency;
    /**
     * clear_cost_budget removes the BYOK cost budget.
     *
     * @generated from field: bool clear_cost_budget = 6;
     */
    clearCostBudget: boolean;
    /**
     * preserve_credit_budget keeps the existing credit budget when updating only BYOK cost budget fields.
     *
     * @generated from field: bool preserve_credit_budget = 7;
     */
    preserveCreditBudget: boolean;
};
/**
 * Describes the message gitpod.v1.UpdateTeamCreditAllocationRequest.
 * Use `create(UpdateTeamCreditAllocationRequestSchema)` to create a new message.
 */
export declare const UpdateTeamCreditAllocationRequestSchema: GenMessage<UpdateTeamCreditAllocationRequest>;
/**
 * @generated from message gitpod.v1.UpdateTeamCreditAllocationResponse
 */
export type UpdateTeamCreditAllocationResponse = Message<"gitpod.v1.UpdateTeamCreditAllocationResponse"> & {
    /**
     * @generated from field: gitpod.v1.TeamCreditAllocationInfo allocation = 1;
     */
    allocation?: TeamCreditAllocationInfo;
};
/**
 * Describes the message gitpod.v1.UpdateTeamCreditAllocationResponse.
 * Use `create(UpdateTeamCreditAllocationResponseSchema)` to create a new message.
 */
export declare const UpdateTeamCreditAllocationResponseSchema: GenMessage<UpdateTeamCreditAllocationResponse>;
/**
 * @generated from message gitpod.v1.DeleteTeamCreditAllocationRequest
 */
export type DeleteTeamCreditAllocationRequest = Message<"gitpod.v1.DeleteTeamCreditAllocationRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: string team_id = 2;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.DeleteTeamCreditAllocationRequest.
 * Use `create(DeleteTeamCreditAllocationRequestSchema)` to create a new message.
 */
export declare const DeleteTeamCreditAllocationRequestSchema: GenMessage<DeleteTeamCreditAllocationRequest>;
/**
 * @generated from message gitpod.v1.DeleteTeamCreditAllocationResponse
 */
export type DeleteTeamCreditAllocationResponse = Message<"gitpod.v1.DeleteTeamCreditAllocationResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteTeamCreditAllocationResponse.
 * Use `create(DeleteTeamCreditAllocationResponseSchema)` to create a new message.
 */
export declare const DeleteTeamCreditAllocationResponseSchema: GenMessage<DeleteTeamCreditAllocationResponse>;
/**
 * Specifies a single environment and the time range of events to correct.
 *
 * @generated from message gitpod.v1.EnvironmentCorrectionSpec
 */
export type EnvironmentCorrectionSpec = Message<"gitpod.v1.EnvironmentCorrectionSpec"> & {
    /**
     * Environment ID to correct usage events for.
     *
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * Only correct events with timestamps at or after this time.
     *
     * @generated from field: google.protobuf.Timestamp start_time = 2;
     */
    startTime?: Timestamp;
    /**
     * Only correct events with timestamps at or before this time.
     *
     * @generated from field: google.protobuf.Timestamp end_time = 3;
     */
    endTime?: Timestamp;
    /**
     * Organization ID that owns the environment. Required so the server query
     * can use the (organization_id, event_name, timestamp) composite index
     * instead of falling back to a full-table scan driven by the idempotency
     * key prefix.
     *
     * @generated from field: string organization_id = 4;
     */
    organizationId: string;
};
/**
 * Describes the message gitpod.v1.EnvironmentCorrectionSpec.
 * Use `create(EnvironmentCorrectionSpecSchema)` to create a new message.
 */
export declare const EnvironmentCorrectionSpecSchema: GenMessage<EnvironmentCorrectionSpec>;
/**
 * @generated from message gitpod.v1.EnvironmentUsageSummary
 */
export type EnvironmentUsageSummary = Message<"gitpod.v1.EnvironmentUsageSummary"> & {
    /**
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * @generated from field: int32 event_count = 2;
     */
    eventCount: number;
    /**
     * @generated from field: int64 total_value = 3;
     */
    totalValue: bigint;
};
/**
 * Describes the message gitpod.v1.EnvironmentUsageSummary.
 * Use `create(EnvironmentUsageSummarySchema)` to create a new message.
 */
export declare const EnvironmentUsageSummarySchema: GenMessage<EnvironmentUsageSummary>;
/**
 * @generated from enum gitpod.v1.BillingPlanKind
 */
export declare enum BillingPlanKind {
    /**
     * @generated from enum value: BILLING_PLAN_KIND_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: BILLING_PLAN_KIND_FREE = 1;
     */
    FREE = 1,
    /**
     * @generated from enum value: BILLING_PLAN_KIND_CORE = 2;
     */
    CORE = 2
}
/**
 * Describes the enum gitpod.v1.BillingPlanKind.
 */
export declare const BillingPlanKindSchema: GenEnum<BillingPlanKind>;
/**
 * @generated from enum gitpod.v1.CreditCardVerificationStatus
 */
export declare enum CreditCardVerificationStatus {
    /**
     * @generated from enum value: CREDIT_CARD_VERIFICATION_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CREDIT_CARD_VERIFICATION_STATUS_PENDING = 1;
     */
    PENDING = 1,
    /**
     * @generated from enum value: CREDIT_CARD_VERIFICATION_STATUS_REQUIRES_CONFIRMATION = 2;
     */
    REQUIRES_CONFIRMATION = 2,
    /**
     * @generated from enum value: CREDIT_CARD_VERIFICATION_STATUS_INVALID_CVC = 3;
     */
    INVALID_CVC = 3,
    /**
     * @generated from enum value: CREDIT_CARD_VERIFICATION_STATUS_INVALID_NUMBER = 4;
     */
    INVALID_NUMBER = 4,
    /**
     * @generated from enum value: CREDIT_CARD_VERIFICATION_STATUS_INSUFFICIENT_FUNDS = 5;
     */
    INSUFFICIENT_FUNDS = 5,
    /**
     * @generated from enum value: CREDIT_CARD_VERIFICATION_STATUS_EXPIRED_CARD = 6;
     */
    EXPIRED_CARD = 6,
    /**
     * catch all for all other errors
     *
     * @generated from enum value: CREDIT_CARD_VERIFICATION_STATUS_FAILED = 7;
     */
    FAILED = 7,
    /**
     * @generated from enum value: CREDIT_CARD_VERIFICATION_STATUS_SUCCESS = 8;
     */
    SUCCESS = 8,
    /**
     * @generated from enum value: CREDIT_CARD_VERIFICATION_STATUS_NOT_REQUIRED = 9;
     */
    NOT_REQUIRED = 9
}
/**
 * Describes the enum gitpod.v1.CreditCardVerificationStatus.
 */
export declare const CreditCardVerificationStatusSchema: GenEnum<CreditCardVerificationStatus>;
/**
 * @generated from enum gitpod.v1.PaymentFailureState
 */
export declare enum PaymentFailureState {
    /**
     * @generated from enum value: PAYMENT_FAILURE_STATE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PAYMENT_FAILURE_STATE_IN_GRACE = 1;
     */
    IN_GRACE = 1,
    /**
     * @generated from enum value: PAYMENT_FAILURE_STATE_SUSPENDED = 2;
     */
    SUSPENDED = 2,
    /**
     * @generated from enum value: PAYMENT_FAILURE_STATE_RESOLVED = 3;
     */
    RESOLVED = 3,
    /**
     * PENDING_FIRST_PAYMENT marks a subscription whose first payment is being
     * captured asynchronously after optimistic creation. Spending is allowed.
     *
     * @generated from enum value: PAYMENT_FAILURE_STATE_PENDING_FIRST_PAYMENT = 4;
     */
    PENDING_FIRST_PAYMENT = 4
}
/**
 * Describes the enum gitpod.v1.PaymentFailureState.
 */
export declare const PaymentFailureStateSchema: GenEnum<PaymentFailureState>;
/**
 * @generated from enum gitpod.v1.CreditStatus
 */
export declare enum CreditStatus {
    /**
     * @generated from enum value: CREDIT_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CREDIT_STATUS_OUT_OF_CREDITS = 1;
     */
    OUT_OF_CREDITS = 1,
    /**
     * @generated from enum value: CREDIT_STATUS_LOW_ON_CREDITS = 2;
     */
    LOW_ON_CREDITS = 2,
    /**
     * @generated from enum value: CREDIT_STATUS_HAS_CREDITS = 3;
     */
    HAS_CREDITS = 3
}
/**
 * Describes the enum gitpod.v1.CreditStatus.
 */
export declare const CreditStatusSchema: GenEnum<CreditStatus>;
/**
 * @generated from enum gitpod.v1.PaymentMethodStatus
 */
export declare enum PaymentMethodStatus {
    /**
     * @generated from enum value: PAYMENT_METHOD_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PAYMENT_METHOD_STATUS_NOT_SET_UP = 1;
     */
    NOT_SET_UP = 1,
    /**
     * @generated from enum value: PAYMENT_METHOD_STATUS_VERIFIED = 2;
     */
    VERIFIED = 2
}
/**
 * Describes the enum gitpod.v1.PaymentMethodStatus.
 */
export declare const PaymentMethodStatusSchema: GenEnum<PaymentMethodStatus>;
/**
 * @generated from enum gitpod.v1.BillingRealm
 */
export declare enum BillingRealm {
    /**
     * @generated from enum value: BILLING_REALM_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: BILLING_REALM_SANDBOX = 1;
     */
    SANDBOX = 1,
    /**
     * @generated from enum value: BILLING_REALM_PRODUCTION = 2;
     */
    PRODUCTION = 2
}
/**
 * Describes the enum gitpod.v1.BillingRealm.
 */
export declare const BillingRealmSchema: GenEnum<BillingRealm>;
/**
 * @generated from enum gitpod.v1.SubscriptionType
 */
export declare enum SubscriptionType {
    /**
     * @generated from enum value: SUBSCRIPTION_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SUBSCRIPTION_TYPE_CORE = 1;
     */
    CORE = 1
}
/**
 * Describes the enum gitpod.v1.SubscriptionType.
 */
export declare const SubscriptionTypeSchema: GenEnum<SubscriptionType>;
/**
 * @generated from enum gitpod.v1.SubscriptionStatus
 */
export declare enum SubscriptionStatus {
    /**
     * @generated from enum value: SUBSCRIPTION_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SUBSCRIPTION_STATUS_ACTIVE = 1;
     */
    ACTIVE = 1,
    /**
     * @generated from enum value: SUBSCRIPTION_STATUS_CANCELLED = 2;
     */
    CANCELLED = 2,
    /**
     * @generated from enum value: SUBSCRIPTION_STATUS_EXPIRED = 3;
     */
    EXPIRED = 3,
    /**
     * @generated from enum value: SUBSCRIPTION_STATUS_PENDING = 4;
     */
    PENDING = 4
}
/**
 * Describes the enum gitpod.v1.SubscriptionStatus.
 */
export declare const SubscriptionStatusSchema: GenEnum<SubscriptionStatus>;
/**
 * UsageType identifies the category of usage.
 *
 * @generated from enum gitpod.v1.UsageType
 */
export declare enum UsageType {
    /**
     * @generated from enum value: USAGE_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: USAGE_TYPE_ENVIRONMENT = 1;
     */
    ENVIRONMENT = 1,
    /**
     * @generated from enum value: USAGE_TYPE_AGENTIC = 2;
     */
    AGENTIC = 2
}
/**
 * Describes the enum gitpod.v1.UsageType.
 */
export declare const UsageTypeSchema: GenEnum<UsageType>;
/**
 * How to group the credit usage export data.
 *
 * @generated from enum gitpod.v1.CreditUsageExportGroupBy
 */
export declare enum CreditUsageExportGroupBy {
    /**
     * Defaults to DAILY_SUMMARY.
     *
     * @generated from enum value: CREDIT_USAGE_EXPORT_GROUP_BY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Daily summary grouped by user.
     *
     * @generated from enum value: CREDIT_USAGE_EXPORT_GROUP_BY_DAILY_SUMMARY = 1;
     */
    DAILY_SUMMARY = 1,
    /**
     * Breakdown by environment and agent execution.
     *
     * @generated from enum value: CREDIT_USAGE_EXPORT_GROUP_BY_RESOURCE = 2;
     */
    RESOURCE = 2
}
/**
 * Describes the enum gitpod.v1.CreditUsageExportGroupBy.
 */
export declare const CreditUsageExportGroupBySchema: GenEnum<CreditUsageExportGroupBy>;
/**
 * @generated from enum gitpod.v1.EnterpriseAIUsageBudgetSource
 */
export declare enum EnterpriseAIUsageBudgetSource {
    /**
     * @generated from enum value: ENTERPRISE_AI_USAGE_BUDGET_SOURCE_UNSPECIFIED = 0;
     */
    ENTERPRISE_AI_USAGE_BUDGET_SOURCE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: ENTERPRISE_AI_USAGE_BUDGET_SOURCE_ORGANIZATION = 1;
     */
    ENTERPRISE_AI_USAGE_BUDGET_SOURCE_ORGANIZATION = 1,
    /**
     * @generated from enum value: ENTERPRISE_AI_USAGE_BUDGET_SOURCE_TEAM = 2;
     */
    ENTERPRISE_AI_USAGE_BUDGET_SOURCE_TEAM = 2
}
/**
 * Describes the enum gitpod.v1.EnterpriseAIUsageBudgetSource.
 */
export declare const EnterpriseAIUsageBudgetSourceSchema: GenEnum<EnterpriseAIUsageBudgetSource>;
/**
 * @generated from enum gitpod.v1.BYOKRateCardTokenType
 */
export declare enum BYOKRateCardTokenType {
    /**
     * @generated from enum value: BYOK_RATE_CARD_TOKEN_TYPE_UNSPECIFIED = 0;
     */
    BYOK_RATE_CARD_TOKEN_TYPE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: BYOK_RATE_CARD_TOKEN_TYPE_INPUT = 1;
     */
    BYOK_RATE_CARD_TOKEN_TYPE_INPUT = 1,
    /**
     * @generated from enum value: BYOK_RATE_CARD_TOKEN_TYPE_OUTPUT = 2;
     */
    BYOK_RATE_CARD_TOKEN_TYPE_OUTPUT = 2,
    /**
     * @generated from enum value: BYOK_RATE_CARD_TOKEN_TYPE_CACHE_READ = 3;
     */
    BYOK_RATE_CARD_TOKEN_TYPE_CACHE_READ = 3,
    /**
     * @generated from enum value: BYOK_RATE_CARD_TOKEN_TYPE_CACHE_WRITE = 4;
     */
    BYOK_RATE_CARD_TOKEN_TYPE_CACHE_WRITE = 4
}
/**
 * Describes the enum gitpod.v1.BYOKRateCardTokenType.
 */
export declare const BYOKRateCardTokenTypeSchema: GenEnum<BYOKRateCardTokenType>;
/**
 * @generated from enum gitpod.v1.BillingCurrency
 */
export declare enum BillingCurrency {
    /**
     * @generated from enum value: BILLING_CURRENCY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: BILLING_CURRENCY_USD = 1;
     */
    USD = 1,
    /**
     * @generated from enum value: BILLING_CURRENCY_EUR = 2;
     */
    EUR = 2,
    /**
     * @generated from enum value: BILLING_CURRENCY_GBP = 3;
     */
    GBP = 3
}
/**
 * Describes the enum gitpod.v1.BillingCurrency.
 */
export declare const BillingCurrencySchema: GenEnum<BillingCurrency>;
/**
 * @generated from enum gitpod.v1.EnterpriseAIUserBudgetMode
 */
export declare enum EnterpriseAIUserBudgetMode {
    /**
     * @generated from enum value: ENTERPRISE_AI_USER_BUDGET_MODE_UNSPECIFIED = 0;
     */
    ENTERPRISE_AI_USER_BUDGET_MODE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: ENTERPRISE_AI_USER_BUDGET_MODE_CREDITS = 1;
     */
    ENTERPRISE_AI_USER_BUDGET_MODE_CREDITS = 1,
    /**
     * @generated from enum value: ENTERPRISE_AI_USER_BUDGET_MODE_BYOK = 2;
     */
    ENTERPRISE_AI_USER_BUDGET_MODE_BYOK = 2
}
/**
 * Describes the enum gitpod.v1.EnterpriseAIUserBudgetMode.
 */
export declare const EnterpriseAIUserBudgetModeSchema: GenEnum<EnterpriseAIUserBudgetMode>;
/**
 * @generated from enum gitpod.v1.EnterpriseAIUserBudgetPolicySource
 */
export declare enum EnterpriseAIUserBudgetPolicySource {
    /**
     * @generated from enum value: ENTERPRISE_AI_USER_BUDGET_POLICY_SOURCE_UNSPECIFIED = 0;
     */
    ENTERPRISE_AI_USER_BUDGET_POLICY_SOURCE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: ENTERPRISE_AI_USER_BUDGET_POLICY_SOURCE_NONE = 1;
     */
    ENTERPRISE_AI_USER_BUDGET_POLICY_SOURCE_NONE = 1,
    /**
     * @generated from enum value: ENTERPRISE_AI_USER_BUDGET_POLICY_SOURCE_ORGANIZATION = 2;
     */
    ENTERPRISE_AI_USER_BUDGET_POLICY_SOURCE_ORGANIZATION = 2,
    /**
     * @generated from enum value: ENTERPRISE_AI_USER_BUDGET_POLICY_SOURCE_USER = 3;
     */
    ENTERPRISE_AI_USER_BUDGET_POLICY_SOURCE_USER = 3
}
/**
 * Describes the enum gitpod.v1.EnterpriseAIUserBudgetPolicySource.
 */
export declare const EnterpriseAIUserBudgetPolicySourceSchema: GenEnum<EnterpriseAIUserBudgetPolicySource>;
/**
 * BillingService provides billing and subscription management functionality.
 *
 * @generated from service gitpod.v1.BillingService
 */
export declare const BillingService: GenService<{
    /**
     * Returns a daily credit usage report for an enterprise organization.
     *
     * Each day reports org-wide credits by usage type, plus per-user, per-team,
     * per-environment, and per-conversation breakdowns (top consumers with the
     * remainder aggregated into an "Others" bucket) and a per-model breakdown
     * of intelligence usage.
     *
     * Use this method to:
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
     * Requires `billing:read_usage` permission on the organization. A user
     * without it can read their own usage by setting filter.subject to their
     * own user identity; this self-access path is not available to service
     * accounts.
     *
     * @generated from rpc gitpod.v1.BillingService.GetCreditUsageReport
     */
    getCreditUsageReport: {
        methodKind: "unary";
        input: typeof GetCreditUsageReportRequestSchema;
        output: typeof GetCreditUsageReportResponseSchema;
    };
    /**
     * Returns a signed download URL for a CSV export of credit usage.
     *
     * The URL points to an HTTP endpoint that streams gzip-compressed CSV and
     * is valid for five minutes. The download must be made by the same principal
     * that requested it, carrying its own bearer token. The export range may
     * cover up to a year.
     *
     * For organizations without enterprise credit usage enabled (no billing
     * contract start date), the export instead contains BYOK cost usage with a
     * different column set, and groupBy=RESOURCE is rejected.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.BillingService.GetCreditUsageExport
     */
    getCreditUsageExport: {
        methodKind: "unary";
        input: typeof GetCreditUsageExportRequestSchema;
        output: typeof GetCreditUsageExportResponseSchema;
    };
    /**
     * Returns organization-level enterprise AI usage totals for reporting.
     *
     * Reports BYOK (bring-your-own-key) token spend: cost in the
     * organization's billing currency plus token counts, with a per-model
     * breakdown. Credit-based usage from managed models is not included and
     * the credits field is not populated by this endpoint.
     *
     * Use this method to:
     * - Report total BYOK AI spend (cost and tokens) for a date range
     * - Break down organization usage by model
     *
     * Only available for enterprise organizations.
     *
     * ### Examples
     *
     * - Get usage totals for January:
     *
     *   Returns organization-wide BYOK spend for the month. Both dates are
     *   inclusive and the range must not exceed 31 days.
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
     * @generated from rpc gitpod.v1.BillingService.GetEnterpriseAIUsageSummary
     */
    getEnterpriseAIUsageSummary: {
        methodKind: "unary";
        input: typeof GetEnterpriseAIUsageSummaryRequestSchema;
        output: typeof GetEnterpriseAIUsageSummaryResponseSchema;
    };
    /**
     * Lists enterprise AI usage grouped by team.
     *
     * Reports BYOK token spend per team (cost and tokens) with each team's
     * monthly budget when one applies. The credits field is not populated by
     * this endpoint.
     *
     * Use this method to:
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
     *   Returns BYOK spend per team with monthly budgets. Both dates are
     *   inclusive and the range must not exceed 31 days.
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
     * @generated from rpc gitpod.v1.BillingService.ListEnterpriseAITeamUsage
     */
    listEnterpriseAITeamUsage: {
        methodKind: "unary";
        input: typeof ListEnterpriseAITeamUsageRequestSchema;
        output: typeof ListEnterpriseAITeamUsageResponseSchema;
    };
    /**
     * Lists enterprise AI usage grouped by user with effective monthly budget data.
     *
     * Reports BYOK token spend (cost and tokens) for each user and service
     * account with attributed usage in the date range, including each
     * subject's effective monthly budget. Usage not attributed to a user or
     * service account is excluded, so the sum across subjects can be less
     * than the organization totals from GetEnterpriseAIUsageSummary. The
     * credits field is not populated by this endpoint.
     *
     * Budget fields (month_to_date_usage, utilization_percent, over_budget)
     * are computed from usage inside the requested date range measured
     * against the monthly limit. Send a range that starts on the first day
     * of the month for true month-to-date figures.
     *
     * Use this method to:
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
     *   Returns per-user BYOK spend with effective budgets, highest spend
     *   first. Both dates are inclusive and the range must not exceed 31 days.
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
     * Requires `billing:read_usage` permission on the organization. Callers
     * without it can read their own usage by setting filter.subject to
     * themselves.
     *
     * @generated from rpc gitpod.v1.BillingService.ListEnterpriseAIUserUsage
     */
    listEnterpriseAIUserUsage: {
        methodKind: "unary";
        input: typeof ListEnterpriseAIUserUsageRequestSchema;
        output: typeof ListEnterpriseAIUserUsageResponseSchema;
    };
    /**
     * Returns daily enterprise AI usage totals for the organization.
     *
     * Each day reports BYOK token spend (cost and tokens) with per-user,
     * per-team, and per-model breakdowns. Per-user entries cover the top
     * spenders with the remainder aggregated into an "Others" bucket; usage
     * not attributed to a user or service account appears only in the daily
     * totals. The credits field is not populated by this endpoint.
     *
     * When filter.subject is set the response contains only that subject's
     * usage: daily totals and the team breakdown are omitted, and the model
     * breakdown covers the subject only.
     *
     * Use this method to:
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
     *   Returns one entry per day with per-user, per-team, and per-model
     *   breakdowns. Both dates are inclusive and the range must not exceed
     *   31 days.
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
     * @generated from rpc gitpod.v1.BillingService.GetEnterpriseAIUsageTimeSeries
     */
    getEnterpriseAIUsageTimeSeries: {
        methodKind: "unary";
        input: typeof GetEnterpriseAIUsageTimeSeriesRequestSchema;
        output: typeof GetEnterpriseAIUsageTimeSeriesResponseSchema;
    };
    /**
     * Gets the configured and effective monthly budget policy for a user or org.
     *
     * When user_id is provided, the response includes any direct user override
     * and the effective policy after applying the organization default. When
     * user_id is omitted, both fields describe the organization default.
     *
     * ### Authorization
     *
     * Requires `billing:read_usage` permission on the organization.
     *
     * @generated from rpc gitpod.v1.BillingService.GetEnterpriseAIUserBudgetPolicy
     */
    getEnterpriseAIUserBudgetPolicy: {
        methodKind: "unary";
        input: typeof GetEnterpriseAIUserBudgetPolicyRequestSchema;
        output: typeof GetEnterpriseAIUserBudgetPolicyResponseSchema;
    };
    /**
     * Sets the organization default or a per-user monthly budget policy.
     *
     * A user policy overrides the organization default. Set no_cap to exempt a
     * user from the default monthly budget.
     *
     * ### Authorization
     *
     * Requires `billing:update` permission on the organization.
     *
     * @generated from rpc gitpod.v1.BillingService.SetEnterpriseAIUserBudgetPolicy
     */
    setEnterpriseAIUserBudgetPolicy: {
        methodKind: "unary";
        input: typeof SetEnterpriseAIUserBudgetPolicyRequestSchema;
        output: typeof SetEnterpriseAIUserBudgetPolicyResponseSchema;
    };
    /**
     * Deletes the organization default or a per-user monthly budget policy.
     *
     * ### Authorization
     *
     * Requires `billing:delete` permission on the organization.
     *
     * @generated from rpc gitpod.v1.BillingService.DeleteEnterpriseAIUserBudgetPolicy
     */
    deleteEnterpriseAIUserBudgetPolicy: {
        methodKind: "unary";
        input: typeof DeleteEnterpriseAIUserBudgetPolicyRequestSchema;
        output: typeof DeleteEnterpriseAIUserBudgetPolicyResponseSchema;
    };
    /**
     * Returns cumulative credit usage for an organization and its teams.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.BillingService.GetCumulativeCreditUsage
     */
    getCumulativeCreditUsage: {
        methodKind: "unary";
        input: typeof GetCumulativeCreditUsageRequestSchema;
        output: typeof GetCumulativeCreditUsageResponseSchema;
    };
    /**
     * Lists per-user month-to-date credit usage with effective monthly budgets.
     *
     * Results are ordered by total credits descending so the highest spenders
     * appear first, with user_id as a stable tiebreaker. Use cursor pagination
     * to walk the full set for large organizations.
     *
     * The default SORT_FIELD_USAGE ordering supports cursor pagination over any
     * number of users. Sorting by display name, budget, or budget utilization
     * computes the order in memory and is limited to organizations with at most
     * 10,000 users; beyond that, use SORT_FIELD_USAGE. Because month-to-date
     * figures are recomputed per request, hold a date range stable across a
     * paginated walk to keep page tokens valid.
     *
     * Use this method to:
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
     * @generated from rpc gitpod.v1.BillingService.ListEnterpriseUserCreditUsage
     */
    listEnterpriseUserCreditUsage: {
        methodKind: "unary";
        input: typeof ListEnterpriseUserCreditUsageRequestSchema;
        output: typeof ListEnterpriseUserCreditUsageResponseSchema;
    };
    /**
     * Creates a credit allocation (budget) for a team.
     *
     * Allocations are soft budgets for reporting and alerting — not enforced at usage time.
     * Over-allocation (sum of team budgets > org grant) is allowed.
     *
     * ### Examples
     *
     * - Create a team allocation:
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   teamId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   creditBudget: "500"
     *   ```
     *
     * ### Authorization
     *
     * Requires `billing:create` permission on the organization.
     *
     * @generated from rpc gitpod.v1.BillingService.CreateTeamCreditAllocation
     */
    createTeamCreditAllocation: {
        methodKind: "unary";
        input: typeof CreateTeamCreditAllocationRequestSchema;
        output: typeof CreateTeamCreditAllocationResponseSchema;
    };
    /**
     * Gets the credit allocation for a team.
     *
     * ### Examples
     *
     * - Get a team's allocation:
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   teamId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * ### Authorization
     *
     * Requires `billing:read` permission on the organization.
     *
     * @generated from rpc gitpod.v1.BillingService.GetTeamCreditAllocation
     */
    getTeamCreditAllocation: {
        methodKind: "unary";
        input: typeof GetTeamCreditAllocationRequestSchema;
        output: typeof GetTeamCreditAllocationResponseSchema;
    };
    /**
     * Updates the credit allocation for a team.
     *
     * ### Examples
     *
     * - Update a team's budget:
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   teamId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   creditBudget: "750"
     *   ```
     *
     * ### Authorization
     *
     * Requires `billing:update` permission on the organization.
     *
     * @generated from rpc gitpod.v1.BillingService.UpdateTeamCreditAllocation
     */
    updateTeamCreditAllocation: {
        methodKind: "unary";
        input: typeof UpdateTeamCreditAllocationRequestSchema;
        output: typeof UpdateTeamCreditAllocationResponseSchema;
    };
    /**
     * Deletes the credit allocation for a team.
     *
     * ### Examples
     *
     * - Delete a team's allocation:
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   teamId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * ### Authorization
     *
     * Requires `billing:delete` permission on the organization.
     *
     * @generated from rpc gitpod.v1.BillingService.DeleteTeamCreditAllocation
     */
    deleteTeamCreditAllocation: {
        methodKind: "unary";
        input: typeof DeleteTeamCreditAllocationRequestSchema;
        output: typeof DeleteTeamCreditAllocationResponseSchema;
    };
}>;
