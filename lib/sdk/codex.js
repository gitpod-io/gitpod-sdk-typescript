"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodexRunError = exports.CodexRun = void 0;
exports.runCodex = runCodex;
const agent_pb_1 = require("../gitpod/v1/agent_pb");
const errors_1 = require("./errors");
class CodexRun {
    constructor(client, environment, agentSession) {
        this.client = client;
        this.environment = environment;
        this.agentSession = agentSession;
    }
    get session() {
        if (!this.agentSession) {
            throw new errors_1.ValidationError("codex.run.session", "Codex session is not initialized");
        }
        return this.agentSession;
    }
    environmentId() {
        return this.environment.id();
    }
    id() {
        return this.agentSession?.id() ?? "";
    }
    sendMessage(text, options = {}) {
        return this.session.sendMessage(text, options);
    }
    messageStream(options = {}) {
        return this.session.messageStream(options);
    }
    watchResult(options = {}) {
        return this.session.watchResult(options);
    }
    stopEnvironment(options = {}) {
        return this.client.environments().stop(this.environmentId(), options);
    }
    deleteEnvironment(options = {}) {
        return this.client.environments().delete(this.environmentId(), options);
    }
}
exports.CodexRun = CodexRun;
class CodexRunError extends errors_1.SDKError {
    constructor(run, cause) {
        super("codex.run", (0, errors_1.messageOf)(cause), cause);
        Object.defineProperty(this, "run", { value: run, enumerable: false });
    }
}
exports.CodexRunError = CodexRunError;
async function runCodex(client, options) {
    if (!options.task?.trim()) {
        throw new errors_1.ValidationError("codex.run", "task is required");
    }
    const environments = client.environments();
    const environment = options.repositoryUrl?.trim()
        ? await environments.create({
            contextUrl: options.repositoryUrl,
            name: options.environmentName,
            signal: options.signal,
        })
        : await environments.createScratch({ name: options.environmentName, signal: options.signal });
    try {
        const session = await environment.startCodex({
            prompt: options.task,
            name: options.agentName,
            model: options.model ?? agent_pb_1.CodexOpenAIModel.CODEX_OPEN_AI_MODEL_UNSPECIFIED,
            reasoningEffort: options.reasoningEffort ?? agent_pb_1.CodexReasoningEffort.UNSPECIFIED,
            signal: options.signal,
        });
        return new CodexRun(client, environment, session);
    }
    catch (error) {
        throw new CodexRunError(new CodexRun(client, environment), error);
    }
}
