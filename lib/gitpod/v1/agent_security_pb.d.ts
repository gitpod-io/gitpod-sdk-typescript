import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { KernelControlsAction } from "./environment_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/agent_security.proto.
 */
export declare const file_gitpod_v1_agent_security: GenFile;
/**
 * ReportExecEventRequest contains a Veto Exec event reported by an environment.
 *
 * @generated from message gitpod.v1.ReportExecEventRequest
 */
export type ReportExecEventRequest = Message<"gitpod.v1.ReportExecEventRequest"> & {
    /**
     * environment_id is the environment where the event occurred.
     *
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * executable is the digest of the binary content (e.g., "sha256:a1b2c3d4...").
     * 256 allows for longer hash algorithms or prefixed identifiers.
     * May be empty when the event source cannot compute the hash.
     *
     * @generated from field: string executable = 2;
     */
    executable: string;
    /**
     * filename is the kernel-resolved path of the binary.
     * Kernel PATH_MAX = 4096 (include/uapi/linux/limits.h).
     * May be empty if the event source could not resolve it.
     *
     * @generated from field: string filename = 3;
     */
    filename: string;
    /**
     * action is the enforcement action taken (block or audit).
     *
     * @generated from field: gitpod.v1.KernelControlsAction action = 4;
     */
    action: KernelControlsAction;
    /**
     * process contains metadata about the process that triggered the event.
     *
     * @generated from field: gitpod.v1.Process process = 5;
     */
    process?: Process;
    /**
     * timestamp is when the event occurred in the environment.
     *
     * @generated from field: google.protobuf.Timestamp timestamp = 6;
     */
    timestamp?: Timestamp;
};
/**
 * Describes the message gitpod.v1.ReportExecEventRequest.
 * Use `create(ReportExecEventRequestSchema)` to create a new message.
 */
export declare const ReportExecEventRequestSchema: GenMessage<ReportExecEventRequest>;
/**
 * Process describes process metadata for a security event.
 *
 * PID fields use int32 to match the kernel's pid_t (signed int).
 * Linux PID max is 4,194,304 (2^22), well within int32 range.
 * Postgres has no unsigned integer type: Ent maps uint32 to bigint
 * (8 bytes) while int32 maps to integer (4 bytes). Using int32
 * aligns proto, Go, and Postgres types without wasting storage.
 *
 * @generated from message gitpod.v1.Process
 */
export type Process = Message<"gitpod.v1.Process"> & {
    /**
     * pid is the userspace process ID (kernel thread group ID, tgid).
     *
     * @generated from field: int32 pid = 1;
     */
    pid: number;
    /**
     * tid is the userspace thread ID (kernel pid).
     *
     * @generated from field: int32 tid = 2;
     */
    tid: number;
    /**
     * name is the process name (comm).
     * 2x kernel TASK_COMM_LEN=16
     *
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * started_at is when the process started.
     *
     * @generated from field: google.protobuf.Timestamp started_at = 5;
     */
    startedAt?: Timestamp;
    /**
     * ppid is the parent process ID.
     *
     * @generated from field: int32 ppid = 6;
     */
    ppid: number;
    /**
     * pgid is the process group ID.
     *
     * @generated from field: int32 pgid = 7;
     */
    pgid: number;
    /**
     * sid is the session ID.
     *
     * @generated from field: int32 sid = 8;
     */
    sid: number;
};
/**
 * Describes the message gitpod.v1.Process.
 * Use `create(ProcessSchema)` to create a new message.
 */
export declare const ProcessSchema: GenMessage<Process>;
