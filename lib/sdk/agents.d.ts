import { type AgentExecution, CodexOpenAIModel, CodexReasoningEffort } from "../gitpod/v1/agent_pb";
import type { OnaClient } from "./client";
export interface StartCodexOptions {
    prompt: string;
    name?: string;
    model?: CodexOpenAIModel;
    reasoningEffort?: CodexReasoningEffort;
    signal?: AbortSignal;
}
export interface AgentSessionOptions {
    signal?: AbortSignal;
}
export interface WatchAgentResultOptions {
    signal?: AbortSignal;
    onUpdate?: AgentExecutionUpdate;
}
export interface MessageStreamOptions {
    signal?: AbortSignal;
}
export type AgentExecutionUpdate = (execution: AgentExecution) => void | Promise<void>;
export declare class AgentSession {
    private readonly client;
    private readonly agentExecutionId;
    private latest?;
    constructor(client: OnaClient, agentExecutionId: string);
    id(): string;
    execution(): AgentExecution | undefined;
    sendMessage(text: string, options?: AgentSessionOptions): Promise<void>;
    messageStream(options?: MessageStreamOptions): AsyncGenerator<string, void, void>;
    watchResult(options?: WatchAgentResultOptions): Promise<AgentExecution>;
    waitRunning(signal?: AbortSignal): Promise<AgentExecution>;
    private sendText;
    private watchUntil;
    private observe;
    private getExecution;
}
export declare function startCodexInEnvironment(client: OnaClient, environmentId: string, options: StartCodexOptions): Promise<AgentSession>;
export declare function agentStatusLine(execution: AgentExecution): string;
