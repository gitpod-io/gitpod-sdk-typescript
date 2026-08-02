import { type Environment as EnvironmentMessage } from "../gitpod/v1/environment_pb";
import { type GetGitDiffResponse, type ReadFileResponse, type WriteFileResponse, WriteMode } from "../supervisor/v1/environmentopts_pb";
import type { OnaClient } from "./client";
import { AgentSession, type StartCodexOptions } from "./agents";
export { WriteMode as WriteFileMode };
export interface CreateEnvironmentOptions {
    contextUrl: string;
    name?: string;
    signal?: AbortSignal;
}
export interface ListEnvironmentsOptions {
    signal?: AbortSignal;
    pageSize?: number;
}
export interface DeleteEnvironmentOptions {
    force?: boolean;
    signal?: AbortSignal;
}
export interface RunCommandOptions {
    command: string;
    workingDirectory?: string;
    timeoutSeconds?: number;
    signal?: AbortSignal;
}
export interface RunCommandResult {
    environmentId: string;
    exitCode: number;
    stdout: string;
    stderr: string;
}
export interface ReadFileOptions {
    offset?: bigint | number;
    length?: bigint | number;
    signal?: AbortSignal;
}
export interface WriteFileOptions {
    mode?: WriteMode;
    signal?: AbortSignal;
}
export interface GitChangesOptions {
    unified?: number;
    baseRef?: string;
    signal?: AbortSignal;
}
export interface EnvironmentGitChanges {
    status: NonNullable<Awaited<ReturnType<Environment["gitStatus"]>>>;
    files: Array<{
        file: NonNullable<Awaited<ReturnType<Environment["gitStatus"]>>>["changedFiles"][number];
        diff: GetGitDiffResponse;
    }>;
}
export declare class EnvironmentClient {
    private readonly client;
    constructor(client: OnaClient);
    create(options: CreateEnvironmentOptions): Promise<Environment>;
    createScratch(options?: {
        name?: string;
        signal?: AbortSignal;
    }): Promise<Environment>;
    get(environmentId: string, options?: {
        signal?: AbortSignal;
    }): Promise<Environment>;
    list(options?: ListEnvironmentsOptions): AsyncGenerator<Environment, void, void>;
    stop(environmentId: string, options?: {
        signal?: AbortSignal;
    }): Promise<void>;
    delete(environmentId: string, options?: DeleteEnvironmentOptions): Promise<void>;
    start(environmentId: string, options?: {
        signal?: AbortSignal;
    }): Promise<Environment>;
    getHandle(environmentId: string, signal?: AbortSignal): Promise<EnvironmentHandle>;
    private environment;
    private waitForEnvironment;
    private resolveContext;
    private requireSCMAuthentication;
    private defaultEnvironmentClass;
    private environmentClassRunnerID;
    private preferredProjectID;
    private createFromContextURL;
    private createFromProject;
    private projectRemoteURIForParsedContext;
}
export declare class Environment {
    private readonly client;
    private readonly environmentClient;
    private readonly handle;
    private ops?;
    constructor(client: OnaClient, environmentClient: EnvironmentClient, handle: EnvironmentHandle);
    id(): string;
    proto(): EnvironmentMessage;
    workspaceDir(): string;
    refresh(options?: {
        signal?: AbortSignal;
    }): Promise<EnvironmentMessage>;
    runCommand(options: RunCommandOptions): Promise<RunCommandResult>;
    readFile(path: string, options?: ReadFileOptions): Promise<ReadFileResponse>;
    writeFile(path: string, content: Uint8Array | string, options?: WriteFileOptions): Promise<WriteFileResponse>;
    gitChanges(options?: GitChangesOptions): Promise<EnvironmentGitChanges>;
    startCodex(options: StartCodexOptions): Promise<AgentSession>;
    gitStatus(signal?: AbortSignal): Promise<import("../gitpod/v1/environment_pb").EnvironmentGitStatus>;
    private opsClient;
    private mapOpsError;
}
type EnvironmentHandle = {
    id: string;
    environment: EnvironmentMessage;
};
