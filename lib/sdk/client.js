"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnaClient = void 0;
exports.createClient = createClient;
exports.createClientFromEnv = createClientFromEnv;
const connect_1 = require("@connectrpc/connect");
const connect_web_1 = require("@connectrpc/connect-web");
const account_pb_1 = require("../gitpod/v1/account_pb");
const agent_pb_1 = require("../gitpod/v1/agent_pb");
const billing_pb_1 = require("../gitpod/v1/billing_pb");
const editor_pb_1 = require("../gitpod/v1/editor_pb");
const environment_automation_pb_1 = require("../gitpod/v1/environment_automation_pb");
const environment_pb_1 = require("../gitpod/v1/environment_pb");
const event_pb_1 = require("../gitpod/v1/event_pb");
const gateway_pb_1 = require("../gitpod/v1/gateway_pb");
const group_pb_1 = require("../gitpod/v1/group_pb");
const identity_pb_1 = require("../gitpod/v1/identity_pb");
const insights_pb_1 = require("../gitpod/v1/insights_pb");
const integration_pb_1 = require("../gitpod/v1/integration_pb");
const notification_pb_1 = require("../gitpod/v1/notification_pb");
const organization_pb_1 = require("../gitpod/v1/organization_pb");
const prebuild_pb_1 = require("../gitpod/v1/prebuild_pb");
const project_pb_1 = require("../gitpod/v1/project_pb");
const runner_configuration_pb_1 = require("../gitpod/v1/runner_configuration_pb");
const runner_pb_1 = require("../gitpod/v1/runner_pb");
const secret_pb_1 = require("../gitpod/v1/secret_pb");
const security_pb_1 = require("../gitpod/v1/security_pb");
const service_account_pb_1 = require("../gitpod/v1/service_account_pb");
const team_pb_1 = require("../gitpod/v1/team_pb");
const usage_pb_1 = require("../gitpod/v1/usage_pb");
const user_pb_1 = require("../gitpod/v1/user_pb");
const webhook_pb_1 = require("../gitpod/v1/webhook_pb");
const workflow_pb_1 = require("../gitpod/v1/workflow_pb");
const environmentopts_pb_1 = require("../supervisor/v1/environmentopts_pb");
const environments_1 = require("./environments");
const codex_1 = require("./codex");
const errors_1 = require("./errors");
const logging_1 = require("./logging");
const user_agent_1 = require("./user-agent");
const MAX_REDIRECTS = 5;
class OnaClient {
    constructor(options = {}) {
        this.apiKey = options.apiKey?.trim();
        this.logger = options.logger ?? logging_1.noopLogger;
        this.userAgent = (0, user_agent_1.sdkUserAgent)(options.userAgent);
        this.fetch = options.fetch;
        this.defaultTimeoutMs = options.defaultTimeoutMs;
        const transport = options.transport ?? (0, connect_web_1.createConnectTransport)({
            baseUrl: options.baseUrl ?? errors_1.DEFAULT_BASE_URL,
            fetch: followPermanentRedirects(options.fetch),
            defaultTimeoutMs: options.defaultTimeoutMs,
            useBinaryFormat: true,
            interceptors: [sdkHeadersInterceptor(this.apiKey, this.userAgent)],
        });
        this.services = {
            account: (0, connect_1.createClient)(account_pb_1.AccountService, transport),
            agent: (0, connect_1.createClient)(agent_pb_1.AgentService, transport),
            billing: (0, connect_1.createClient)(billing_pb_1.BillingService, transport),
            editor: (0, connect_1.createClient)(editor_pb_1.EditorService, transport),
            environment: (0, connect_1.createClient)(environment_pb_1.EnvironmentService, transport),
            environmentAutomation: (0, connect_1.createClient)(environment_automation_pb_1.EnvironmentAutomationService, transport),
            event: (0, connect_1.createClient)(event_pb_1.EventService, transport),
            gateway: (0, connect_1.createClient)(gateway_pb_1.GatewayService, transport),
            group: (0, connect_1.createClient)(group_pb_1.GroupService, transport),
            identity: (0, connect_1.createClient)(identity_pb_1.IdentityService, transport),
            insights: (0, connect_1.createClient)(insights_pb_1.InsightsService, transport),
            integration: (0, connect_1.createClient)(integration_pb_1.IntegrationService, transport),
            notification: (0, connect_1.createClient)(notification_pb_1.NotificationService, transport),
            organization: (0, connect_1.createClient)(organization_pb_1.OrganizationService, transport),
            prebuild: (0, connect_1.createClient)(prebuild_pb_1.PrebuildService, transport),
            project: (0, connect_1.createClient)(project_pb_1.ProjectService, transport),
            runner: (0, connect_1.createClient)(runner_pb_1.RunnerService, transport),
            runnerConfiguration: (0, connect_1.createClient)(runner_configuration_pb_1.RunnerConfigurationService, transport),
            secret: (0, connect_1.createClient)(secret_pb_1.SecretService, transport),
            security: (0, connect_1.createClient)(security_pb_1.SecurityService, transport),
            serviceAccount: (0, connect_1.createClient)(service_account_pb_1.ServiceAccountService, transport),
            team: (0, connect_1.createClient)(team_pb_1.TeamService, transport),
            usage: (0, connect_1.createClient)(usage_pb_1.UsageService, transport),
            user: (0, connect_1.createClient)(user_pb_1.UserService, transport),
            webhook: (0, connect_1.createClient)(webhook_pb_1.WebhookService, transport),
            workflow: (0, connect_1.createClient)(workflow_pb_1.WorkflowService, transport),
        };
    }
    environments() {
        return new environments_1.EnvironmentClient(this);
    }
    runCodex(options) {
        return (0, codex_1.runCodex)(this, options);
    }
    opsClient(baseUrl, accessToken) {
        const transport = (0, connect_web_1.createConnectTransport)({
            baseUrl,
            fetch: followPermanentRedirects(this.fetch),
            defaultTimeoutMs: this.defaultTimeoutMs,
            useBinaryFormat: true,
            interceptors: [sdkHeadersInterceptor(accessToken, this.userAgent)],
        });
        return (0, connect_1.createClient)(environmentopts_pb_1.EnvironmentOpsService, transport);
    }
}
exports.OnaClient = OnaClient;
function createClient(options = {}) {
    return new OnaClient(options);
}
function createClientFromEnv(options = {}) {
    const apiKey = readEnvironmentVariable(errors_1.API_KEY_ENV_VAR) || readEnvironmentVariable(errors_1.LEGACY_API_KEY_ENV_VAR);
    if (!apiKey) {
        throw new errors_1.MissingAPIKeyError();
    }
    const envBaseUrl = readEnvironmentVariable(errors_1.BASE_URL_ENV_VAR);
    const baseUrl = options.baseUrl ?? (envBaseUrl || errors_1.DEFAULT_BASE_URL);
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
