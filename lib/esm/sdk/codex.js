import { CodexOpenAIModel, CodexReasoningEffort } from "../gitpod/v1/agent_pb.js";
import { SDKError, ValidationError, messageOf } from "./errors.js";
export class CodexRun {
    constructor(client, environment, agentSession) {
        this.client = client;
        this.environment = environment;
        this.agentSession = agentSession;
    }
    get session() {
        if (!this.agentSession) {
            throw new ValidationError("codex.run.session", "Codex session is not initialized");
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
export class CodexRunError extends SDKError {
    constructor(run, cause) {
        super("codex.run", messageOf(cause), cause);
        Object.defineProperty(this, "run", { value: run, enumerable: false });
    }
}
export async function runCodex(client, options) {
    if (!options.task?.trim()) {
        throw new ValidationError("codex.run", "task is required");
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
            model: options.model ?? CodexOpenAIModel.CODEX_OPEN_AI_MODEL_UNSPECIFIED,
            reasoningEffort: options.reasoningEffort ?? CodexReasoningEffort.UNSPECIFIED,
            signal: options.signal,
        });
        return new CodexRun(client, environment, session);
    }
    catch (error) {
        throw new CodexRunError(new CodexRun(client, environment), error);
    }
}
