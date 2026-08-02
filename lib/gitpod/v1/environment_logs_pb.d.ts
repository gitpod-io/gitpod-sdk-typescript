import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/environment_logs.proto.
 */
export declare const file_gitpod_v1_environment_logs: GenFile;
/**
 * CreateLogSection defines the structure of JSON metadata for a create log section entry.
 * Example log line:
 * [section-create] {"id":"foo","title":"Foo"}
 *
 * @generated from message gitpod.v1.CreateLogSection
 */
export type CreateLogSection = Message<"gitpod.v1.CreateLogSection"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * title is an (optional) human-readable title for the log section.
     *
     * @generated from field: string title = 2;
     */
    title: string;
    /**
     * continuous indicates if the log section is continuous. Continuous log sections
     * are expected to remain open over the lifetime of an environment, e.g. system logs.
     *
     * @generated from field: bool continuous = 3;
     */
    continuous: boolean;
};
/**
 * Describes the message gitpod.v1.CreateLogSection.
 * Use `create(CreateLogSectionSchema)` to create a new message.
 */
export declare const CreateLogSectionSchema: GenMessage<CreateLogSection>;
/**
 * EndLogSection defines the structure of JSON metadata for an end log section entry.
 * Example log line:
 * [section-end] {"id":"section-id","outcome":"LOG_SECTION_OUTCOME_SUCCESS","secondsElapsed":1.3}
 *
 * @generated from message gitpod.v1.EndLogSection
 */
export type EndLogSection = Message<"gitpod.v1.EndLogSection"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * outcome indicates the outcome of the log section.
     *
     * @generated from field: gitpod.v1.LogSectionOutcome outcome = 2;
     */
    outcome: LogSectionOutcome;
    /**
     * seconds_elapsed is the number of seconds that have elapsed since the start of the log section.
     *
     * @generated from field: float seconds_elapsed = 3;
     */
    secondsElapsed: number;
};
/**
 * Describes the message gitpod.v1.EndLogSection.
 * Use `create(EndLogSectionSchema)` to create a new message.
 */
export declare const EndLogSectionSchema: GenMessage<EndLogSection>;
/**
 * @generated from enum gitpod.v1.LogSectionOutcome
 */
export declare enum LogSectionOutcome {
    /**
     * @generated from enum value: LOG_SECTION_OUTCOME_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: LOG_SECTION_OUTCOME_SUCCESS = 1;
     */
    SUCCESS = 1,
    /**
     * @generated from enum value: LOG_SECTION_OUTCOME_FAILURE = 2;
     */
    FAILURE = 2,
    /**
     * @generated from enum value: LOG_SECTION_OUTCOME_CANCELLED = 3;
     */
    CANCELLED = 3
}
/**
 * Describes the enum gitpod.v1.LogSectionOutcome.
 */
export declare const LogSectionOutcomeSchema: GenEnum<LogSectionOutcome>;
