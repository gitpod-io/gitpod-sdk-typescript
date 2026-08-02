import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file gitpod/v1/model.proto.
 */
export declare const file_gitpod_v1_model: GenFile;
/**
 * SupportedModel enumerates the LLM models available for agent executions
 *
 * @generated from enum gitpod.v1.SupportedModel
 */
export declare enum SupportedModel {
    /**
     * @generated from enum value: SUPPORTED_MODEL_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SUPPORTED_MODEL_SONNET_3_5 = 1;
     */
    SONNET_3_5 = 1,
    /**
     * @generated from enum value: SUPPORTED_MODEL_SONNET_3_7 = 2;
     */
    SONNET_3_7 = 2,
    /**
     * @generated from enum value: SUPPORTED_MODEL_SONNET_3_7_EXTENDED = 3;
     */
    SONNET_3_7_EXTENDED = 3,
    /**
     * @generated from enum value: SUPPORTED_MODEL_SONNET_4 = 4;
     */
    SONNET_4 = 4,
    /**
     * @generated from enum value: SUPPORTED_MODEL_SONNET_4_EXTENDED = 5;
     */
    SONNET_4_EXTENDED = 5,
    /**
     * @generated from enum value: SUPPORTED_MODEL_SONNET_4_5 = 8;
     */
    SONNET_4_5 = 8,
    /**
     * @generated from enum value: SUPPORTED_MODEL_SONNET_4_5_EXTENDED = 9;
     */
    SONNET_4_5_EXTENDED = 9,
    /**
     * @generated from enum value: SUPPORTED_MODEL_SONNET_4_6 = 18;
     */
    SONNET_4_6 = 18,
    /**
     * @generated from enum value: SUPPORTED_MODEL_SONNET_4_6_EXTENDED = 19;
     */
    SONNET_4_6_EXTENDED = 19,
    /**
     * @generated from enum value: SUPPORTED_MODEL_SONNET_5 = 32;
     */
    SONNET_5 = 32,
    /**
     * @generated from enum value: SUPPORTED_MODEL_OPUS_4 = 6;
     */
    OPUS_4 = 6,
    /**
     * @generated from enum value: SUPPORTED_MODEL_OPUS_4_EXTENDED = 7;
     */
    OPUS_4_EXTENDED = 7,
    /**
     * @generated from enum value: SUPPORTED_MODEL_OPUS_4_5 = 14;
     */
    OPUS_4_5 = 14,
    /**
     * @generated from enum value: SUPPORTED_MODEL_OPUS_4_5_EXTENDED = 15;
     */
    OPUS_4_5_EXTENDED = 15,
    /**
     * @generated from enum value: SUPPORTED_MODEL_OPUS_4_6 = 16;
     */
    OPUS_4_6 = 16,
    /**
     * @generated from enum value: SUPPORTED_MODEL_OPUS_4_6_EXTENDED = 17;
     */
    OPUS_4_6_EXTENDED = 17,
    /**
     * @generated from enum value: SUPPORTED_MODEL_OPUS_4_7 = 22;
     */
    OPUS_4_7 = 22,
    /**
     * @generated from enum value: SUPPORTED_MODEL_OPUS_4_8 = 31;
     */
    OPUS_4_8 = 31,
    /**
     * @generated from enum value: SUPPORTED_MODEL_HAIKU_4_5 = 21;
     */
    HAIKU_4_5 = 21,
    /**
     * @generated from enum value: SUPPORTED_MODEL_OPENAI_4O = 10;
     */
    OPENAI_4O = 10,
    /**
     * @generated from enum value: SUPPORTED_MODEL_OPENAI_4O_MINI = 11;
     */
    OPENAI_4O_MINI = 11,
    /**
     * @generated from enum value: SUPPORTED_MODEL_OPENAI_O1 = 12;
     */
    OPENAI_O1 = 12,
    /**
     * @generated from enum value: SUPPORTED_MODEL_OPENAI_O1_MINI = 13;
     */
    OPENAI_O1_MINI = 13,
    /**
     * SUPPORTED_MODEL_OPENAI_AUTO flags a request as OpenAI-bound without
     * encoding a specific model slug. The actual model is chosen by the client
     * (today: native Codex via ~/.codex/config.toml) and captured from the
     * upstream Responses-API response.model field for metering and rate-card
     * lookup. This keeps the proto stable across OpenAI model-catalog churn.
     *
     * Reserved numbers 24-30 are intentionally left free for future OpenAI
     * routing sentinels if we ever need to distinguish sub-families.
     *
     * @generated from enum value: SUPPORTED_MODEL_OPENAI_AUTO = 23;
     */
    OPENAI_AUTO = 23
}
/**
 * Describes the enum gitpod.v1.SupportedModel.
 */
export declare const SupportedModelSchema: GenEnum<SupportedModel>;
/**
 * LLMIntegrationPhase represents the current status/phase of an LLM integration
 *
 * @generated from enum gitpod.v1.LLMIntegrationPhase
 */
export declare enum LLMIntegrationPhase {
    /**
     * @generated from enum value: LLM_INTEGRATION_PHASE_UNSPECIFIED = 0;
     */
    LLM_INTEGRATION_PHASE_UNSPECIFIED = 0,
    /**
     * The integration can be used to make requests
     *
     * @generated from enum value: LLM_INTEGRATION_PHASE_AVAILABLE = 1;
     */
    LLM_INTEGRATION_PHASE_AVAILABLE = 1,
    /**
     * The integration cannot be used, likely due to insufficient funds
     *
     * @generated from enum value: LLM_INTEGRATION_PHASE_UNAVAILABLE = 2;
     */
    LLM_INTEGRATION_PHASE_UNAVAILABLE = 2,
    /**
     * The integration cannot be used because the user disabled it
     *
     * @generated from enum value: LLM_INTEGRATION_PHASE_DISABLED = 3;
     */
    LLM_INTEGRATION_PHASE_DISABLED = 3
}
/**
 * Describes the enum gitpod.v1.LLMIntegrationPhase.
 */
export declare const LLMIntegrationPhaseSchema: GenEnum<LLMIntegrationPhase>;
