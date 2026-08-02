import type { AgentExecution } from "../gitpod/v1/agent_pb";
import { CodexOpenAIModel, CodexReasoningEffort } from "../gitpod/v1/agent_pb";
import type { OnaClient } from "./client";
import { type AgentExecutionUpdate, AgentSession } from "./agents";
import { type DeleteEnvironmentOptions, Environment } from "./environments";
import { SDKError } from "./errors";
export interface RunCodexOptions {
    repositoryUrl?: string;
    task: string;
    environmentName?: string;
    agentName?: string;
    model?: CodexOpenAIModel;
    reasoningEffort?: CodexReasoningEffort;
    signal?: AbortSignal;
}
export declare class CodexRun {
    private readonly client;
    readonly environment: Environment;
    private readonly agentSession?;
    constructor(client: OnaClient, environment: Environment, agentSession?: AgentSession | undefined);
    get session(): AgentSession;
    environmentId(): string;
    id(): string;
    sendMessage(text: string, options?: {
        signal?: AbortSignal;
    }): Promise<void>;
    messageStream(options?: {
        signal?: AbortSignal;
    }): AsyncGenerator<string, void, void>;
    watchResult(options?: {
        signal?: AbortSignal;
        onUpdate?: AgentExecutionUpdate;
    }): Promise<AgentExecution>;
    stopEnvironment(options?: {
        signal?: AbortSignal;
    }): Promise<void>;
    deleteEnvironment(options?: DeleteEnvironmentOptions): Promise<void>;
}
export declare class CodexRunError extends SDKError {
    readonly run: CodexRun;
    constructor(run: CodexRun, cause: unknown);
}
export declare function runCodex(client: OnaClient, options: RunCodexOptions): Promise<CodexRun>;
