import { createClient as createConnectClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { AccountService } from "../gitpod/v1/account_pb.js";
import { AgentService } from "../gitpod/v1/agent_pb.js";
import { BillingService } from "../gitpod/v1/billing_pb.js";
import { EditorService } from "../gitpod/v1/editor_pb.js";
import { EnvironmentAutomationService } from "../gitpod/v1/environment_automation_pb.js";
import { EnvironmentService } from "../gitpod/v1/environment_pb.js";
import { EventService } from "../gitpod/v1/event_pb.js";
import { GatewayService } from "../gitpod/v1/gateway_pb.js";
import { GroupService } from "../gitpod/v1/group_pb.js";
import { IdentityService } from "../gitpod/v1/identity_pb.js";
import { InsightsService } from "../gitpod/v1/insights_pb.js";
import { IntegrationService } from "../gitpod/v1/integration_pb.js";
import { NotificationService } from "../gitpod/v1/notification_pb.js";
import { OrganizationService } from "../gitpod/v1/organization_pb.js";
import { PrebuildService } from "../gitpod/v1/prebuild_pb.js";
import { ProjectService } from "../gitpod/v1/project_pb.js";
import { RunnerConfigurationService } from "../gitpod/v1/runner_configuration_pb.js";
import { RunnerService } from "../gitpod/v1/runner_pb.js";
import { SecretService } from "../gitpod/v1/secret_pb.js";
import { SecurityService } from "../gitpod/v1/security_pb.js";
import { ServiceAccountService } from "../gitpod/v1/service_account_pb.js";
import { TeamService } from "../gitpod/v1/team_pb.js";
import { UsageService } from "../gitpod/v1/usage_pb.js";
import { UserService } from "../gitpod/v1/user_pb.js";
import { WebhookService } from "../gitpod/v1/webhook_pb.js";
import { WorkflowService } from "../gitpod/v1/workflow_pb.js";
import { EnvironmentOpsService } from "../supervisor/v1/environmentopts_pb.js";
import { EnvironmentClient } from "./environments.js";
import { runCodex } from "./codex.js";
import { API_KEY_ENV_VAR, BASE_URL_ENV_VAR, DEFAULT_BASE_URL, LEGACY_API_KEY_ENV_VAR, MissingAPIKeyError, } from "./errors.js";
import { noopLogger } from "./logging.js";
import { sdkUserAgent } from "./user-agent.js";
const MAX_REDIRECTS = 5;
export class OnaClient {
    constructor(options = {}) {
        this.apiKey = options.apiKey?.trim();
        this.logger = options.logger ?? noopLogger;
        this.userAgent = sdkUserAgent(options.userAgent);
        this.fetch = options.fetch;
        this.defaultTimeoutMs = options.defaultTimeoutMs;
        const transport = options.transport ?? createConnectTransport({
            baseUrl: options.baseUrl ?? DEFAULT_BASE_URL,
            fetch: followPermanentRedirects(options.fetch),
            defaultTimeoutMs: options.defaultTimeoutMs,
            useBinaryFormat: true,
            interceptors: [sdkHeadersInterceptor(this.apiKey, this.userAgent)],
        });
        this.services = {
            account: createConnectClient(AccountService, transport),
            agent: createConnectClient(AgentService, transport),
            billing: createConnectClient(BillingService, transport),
            editor: createConnectClient(EditorService, transport),
            environment: createConnectClient(EnvironmentService, transport),
            environmentAutomation: createConnectClient(EnvironmentAutomationService, transport),
            event: createConnectClient(EventService, transport),
            gateway: createConnectClient(GatewayService, transport),
            group: createConnectClient(GroupService, transport),
            identity: createConnectClient(IdentityService, transport),
            insights: createConnectClient(InsightsService, transport),
            integration: createConnectClient(IntegrationService, transport),
            notification: createConnectClient(NotificationService, transport),
            organization: createConnectClient(OrganizationService, transport),
            prebuild: createConnectClient(PrebuildService, transport),
            project: createConnectClient(ProjectService, transport),
            runner: createConnectClient(RunnerService, transport),
            runnerConfiguration: createConnectClient(RunnerConfigurationService, transport),
            secret: createConnectClient(SecretService, transport),
            security: createConnectClient(SecurityService, transport),
            serviceAccount: createConnectClient(ServiceAccountService, transport),
            team: createConnectClient(TeamService, transport),
            usage: createConnectClient(UsageService, transport),
            user: createConnectClient(UserService, transport),
            webhook: createConnectClient(WebhookService, transport),
            workflow: createConnectClient(WorkflowService, transport),
        };
    }
    environments() {
        return new EnvironmentClient(this);
    }
    runCodex(options) {
        return runCodex(this, options);
    }
    opsClient(baseUrl, accessToken) {
        const transport = createConnectTransport({
            baseUrl,
            fetch: followPermanentRedirects(this.fetch),
            defaultTimeoutMs: this.defaultTimeoutMs,
            useBinaryFormat: true,
            interceptors: [sdkHeadersInterceptor(accessToken, this.userAgent)],
        });
        return createConnectClient(EnvironmentOpsService, transport);
    }
}
export function createClient(options = {}) {
    return new OnaClient(options);
}
export function createClientFromEnv(options = {}) {
    const apiKey = readEnvironmentVariable(API_KEY_ENV_VAR) || readEnvironmentVariable(LEGACY_API_KEY_ENV_VAR);
    if (!apiKey) {
        throw new MissingAPIKeyError();
    }
    const envBaseUrl = readEnvironmentVariable(BASE_URL_ENV_VAR);
    const baseUrl = options.baseUrl ?? (envBaseUrl || DEFAULT_BASE_URL);
    return new OnaClient({ ...options, apiKey, baseUrl });
}
function followPermanentRedirects(fetchImpl) {
    return async (input, init) => {
        const fetch = fetchImpl ?? globalThis.fetch;
        let url = requestURL(input);
        for (let redirects = 0;; redirects++) {
            const response = await fetch(url, { ...init, redirect: "manual" });
            if (response.status !== 307 && response.status !== 308) {
                return response;
            }
            const location = response.headers.get("Location");
            if (!location) {
                return response;
            }
            if (redirects >= MAX_REDIRECTS) {
                throw new TypeError("Too many redirects");
            }
            await response.body?.cancel();
            url = new URL(location, url).href;
        }
    };
}
function requestURL(input) {
    if (typeof input === "string") {
        return input;
    }
    if (input instanceof URL) {
        return input.href;
    }
    return input.url;
}
function sdkHeadersInterceptor(token, userAgent) {
    return (next) => async (request) => {
        if (token) {
            request.header.set("Authorization", `Bearer ${token}`);
        }
        try {
            request.header.set("User-Agent", userAgent);
        }
        catch {
            request.header.set("X-Ona-User-Agent", userAgent);
        }
        return await next(request);
    };
}
function readEnvironmentVariable(name) {
    const runtime = globalThis;
    return runtime.process?.env?.[name]?.trim() ?? "";
}
