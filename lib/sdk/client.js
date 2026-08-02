"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnaClient = void 0;
exports.createClient = createClient;
exports.createClientFromEnv = createClientFromEnv;
const connect_1 = require("@connectrpc/connect");
const connect_web_1 = require("@connectrpc/connect-web");
const agent_pb_1 = require("../gitpod/v1/agent_pb");
const environment_pb_1 = require("../gitpod/v1/environment_pb");
const event_pb_1 = require("../gitpod/v1/event_pb");
const identity_pb_1 = require("../gitpod/v1/identity_pb");
const project_pb_1 = require("../gitpod/v1/project_pb");
const runner_configuration_pb_1 = require("../gitpod/v1/runner_configuration_pb");
const runner_pb_1 = require("../gitpod/v1/runner_pb");
const usage_pb_1 = require("../gitpod/v1/usage_pb");
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
            agent: (0, connect_1.createClient)(agent_pb_1.AgentService, transport),
            environment: (0, connect_1.createClient)(environment_pb_1.EnvironmentService, transport),
            event: (0, connect_1.createClient)(event_pb_1.EventService, transport),
            identity: (0, connect_1.createClient)(identity_pb_1.IdentityService, transport),
            project: (0, connect_1.createClient)(project_pb_1.ProjectService, transport),
            runner: (0, connect_1.createClient)(runner_pb_1.RunnerService, transport),
            runnerConfiguration: (0, connect_1.createClient)(runner_configuration_pb_1.RunnerConfigurationService, transport),
            usage: (0, connect_1.createClient)(usage_pb_1.UsageService, transport),
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
