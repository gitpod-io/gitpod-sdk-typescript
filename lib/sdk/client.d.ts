import { type Client as ConnectClient, type Transport } from "@connectrpc/connect";
import { AgentService } from "../gitpod/v1/agent_pb";
import { EnvironmentService } from "../gitpod/v1/environment_pb";
import { EventService } from "../gitpod/v1/event_pb";
import { IdentityService } from "../gitpod/v1/identity_pb";
import { ProjectService } from "../gitpod/v1/project_pb";
import { RunnerConfigurationService } from "../gitpod/v1/runner_configuration_pb";
import { RunnerService } from "../gitpod/v1/runner_pb";
import { UsageService } from "../gitpod/v1/usage_pb";
import { EnvironmentOpsService } from "../supervisor/v1/environmentopts_pb";
import { EnvironmentClient } from "./environments";
import { type CodexRun, type RunCodexOptions } from "./codex";
import type { Logger } from "./logging";
export interface ClientOptions {
    apiKey?: string;
    baseUrl?: string;
    transport?: Transport;
    fetch?: typeof globalThis.fetch;
    logger?: Logger;
    userAgent?: string;
    defaultTimeoutMs?: number;
}
export type ServiceClients = {
    agent: ConnectClient<typeof AgentService>;
    environment: ConnectClient<typeof EnvironmentService>;
    event: ConnectClient<typeof EventService>;
    identity: ConnectClient<typeof IdentityService>;
    project: ConnectClient<typeof ProjectService>;
    runner: ConnectClient<typeof RunnerService>;
    runnerConfiguration: ConnectClient<typeof RunnerConfigurationService>;
    usage: ConnectClient<typeof UsageService>;
};
export declare class OnaClient {
    readonly services: ServiceClients;
    readonly logger: Logger;
    readonly userAgent: string;
    readonly fetch?: typeof globalThis.fetch;
    private readonly apiKey?;
    private readonly defaultTimeoutMs?;
    constructor(options?: ClientOptions);
    environments(): EnvironmentClient;
    runCodex(options: RunCodexOptions): Promise<CodexRun>;
    opsClient(baseUrl: string, accessToken: string): ConnectClient<typeof EnvironmentOpsService>;
}
export declare function createClient(options?: ClientOptions): OnaClient;
export declare function createClientFromEnv(options?: Omit<ClientOptions, "apiKey">): OnaClient;
