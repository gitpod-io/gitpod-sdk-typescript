import { create, fromBinary } from "@bufbuild/protobuf";
import { AgentCodeContextSchema, AgentExecutionFailureReason, AgentExecution_Phase, AgentMessageSchema, AgentResponseBlock_Phase, AgentResponseBlock_TextOutput_Type, AgentResponseBlockSchema, CreateAgentExecutionConversationTokenRequestSchema, GetAgentExecutionRequestSchema, SendToAgentExecutionRequestSchema, StartAgentRequestSchema, UserInputBlock_InputSchema, UserInputBlock_TextInputSchema, UserInputBlockSchema, CodexOpenAIModel, CodexReasoningEffort, CodexSettingsSchema, } from "../gitpod/v1/agent_pb.js";
import { ResourceType, WatchEventsRequest_ResourceTypeFilterSchema, WatchEventsRequestSchema } from "../gitpod/v1/event_pb.js";
import { CapabilityUnavailableError, SDKError, UnavailableError, ValidationError, mapError, messageOf } from "./errors.js";
import { debug, error as logError } from "./logging.js";
const codexAppInEnvironmentAgentID = "00000000-0000-0000-0000-000000007800";
const agentConversationTagAgentResponse = 1;
const agentConversationTagUserInput = 2;
const agentConversationTagAgentMessage = 3;
export class AgentSession {
    constructor(client, agentExecutionId) {
        this.client = client;
        this.agentExecutionId = agentExecutionId;
    }
    id() {
        return this.agentExecutionId;
    }
    execution() {
        return this.latest;
    }
    async sendMessage(text, options = {}) {
        await this.sendText(text, randomID(), options.signal);
    }
    async *messageStream(options = {}) {
        const operation = "agents.message_stream";
        let liveURL = this.latest?.status?.conversationUrls?.live ?? "";
        if (!liveURL) {
            const execution = await this.getExecution(operation, options.signal);
            this.latest = execution;
            liveURL = execution.status?.conversationUrls?.live ?? "";
        }
        if (!liveURL) {
            throw new CapabilityUnavailableError(operation, "agent execution does not expose a v2 live conversation URL");
        }
        const tokenResponse = await this.client.services.agent.createAgentExecutionConversationToken(create(CreateAgentExecutionConversationTokenRequestSchema, {
            agentExecutionId: this.agentExecutionId,
        }), { signal: options.signal }).catch((error) => {
            throw mapError(operation, error);
        });
        if (!tokenResponse.token) {
            throw new CapabilityUnavailableError(operation, "agent conversation token response did not include a token");
        }
        const fetchImpl = this.client.fetch ?? globalThis.fetch;
        if (!fetchImpl) {
            throw new CapabilityUnavailableError(operation, "fetch is not available for opening the live agent message stream");
        }
        debug(this.client.logger, "opening agent message stream", {
            operation,
            agent_execution_id: this.agentExecutionId,
        });
        const headers = new Headers({
            Authorization: `Bearer ${tokenResponse.token}`,
            Accept: "text/event-stream",
        });
        try {
            headers.set("User-Agent", this.client.userAgent);
        }
        catch {
            headers.set("X-Ona-User-Agent", this.client.userAgent);
        }
        const response = await fetchImpl(liveURL, {
            method: "GET",
            signal: options.signal,
            headers,
        }).catch((error) => {
            throw new UnavailableError(operation, `connect to live agent message stream at ${safeURLForLog(liveURL)}: ${messageOf(error)}`, error);
        });
        if (response.status === 404) {
            throw new CapabilityUnavailableError(operation, `v2 live agent message stream is not available at ${safeURLForLog(liveURL)}`);
        }
        if (!response.ok) {
            throw new UnavailableError(operation, `live agent message stream at ${safeURLForLog(liveURL)} returned HTTP ${response.status}`);
        }
        if (!response.body) {
            throw new CapabilityUnavailableError(operation, "live agent message stream response did not include a body");
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        const renderer = new AgentMarkdownStreamRenderer();
        let buffer = "";
        try {
            for (;;) {
                const { done, value } = await reader.read();
                if (value) {
                    buffer += decoder.decode(value, { stream: !done }).replace(/\r\n/g, "\n");
                    for (;;) {
                        const separator = buffer.indexOf("\n\n");
                        if (separator < 0) {
                            break;
                        }
                        const rawEvent = buffer.slice(0, separator);
                        buffer = buffer.slice(separator + 2);
                        const rendered = renderer.consumeEvent(rawEvent);
                        if (rendered.done) {
                            if (rendered.text) {
                                yield rendered.text;
                            }
                            return;
                        }
                        if (rendered.text) {
                            yield rendered.text;
                        }
                    }
                }
                if (done) {
                    if (buffer.trim()) {
                        const rendered = renderer.consumeEvent(buffer);
                        if (rendered.text) {
                            yield rendered.text;
                        }
                    }
                    const tail = renderer.closeOpenTextBlock();
                    if (tail) {
                        yield tail;
                    }
                    return;
                }
            }
        }
        finally {
            await reader.cancel().catch(() => undefined);
        }
    }
    async watchResult(options = {}) {
        return await this.watchUntil("agents.watch_result", options.signal, options.onUpdate, (execution) => {
            const phase = execution.status?.phase;
            return phase === AgentExecution_Phase.STOPPED || phase === AgentExecution_Phase.WAITING_FOR_INPUT;
        });
    }
    async waitRunning(signal) {
        return await this.watchUntil("agents.wait_running", signal, undefined, (execution) => {
            const phase = execution.status?.phase;
            switch (phase) {
                case AgentExecution_Phase.RUNNING:
                    return true;
                case AgentExecution_Phase.STOPPED:
                case AgentExecution_Phase.WAITING_FOR_INPUT:
                    throw new UnavailableError("agents.wait_running", `agent execution ${execution.id} reached ${agentPhaseLabel(phase)} before running; last status: ${agentStatusLine(execution)}`);
                default:
                    return false;
            }
        });
    }
    async sendText(text, inputId, signal) {
        const operation = "agents.send_message";
        if (!text) {
            throw new ValidationError(operation, "text is required");
        }
        debug(this.client.logger, "sending agent text input", {
            operation,
            agent_execution_id: this.agentExecutionId,
            input_id: inputId,
            text_bytes: text.length,
        });
        await this.client.services.agent.sendToAgentExecution(create(SendToAgentExecutionRequestSchema, {
            agentExecutionId: this.agentExecutionId,
            input: {
                case: "userInput",
                value: create(UserInputBlockSchema, {
                    id: inputId,
                    inputs: [
                        create(UserInputBlock_InputSchema, {
                            input: {
                                case: "text",
                                value: create(UserInputBlock_TextInputSchema, { content: text }),
                            },
                        }),
                    ],
                }),
            },
        }), { signal }).catch((error) => {
            throw mapError(operation, error);
        });
        debug(this.client.logger, "agent text input sent", {
            operation,
            agent_execution_id: this.agentExecutionId,
            input_id: inputId,
        });
    }
    async watchUntil(operation, signal, onUpdate, done) {
        let current = await this.observe(operation, onUpdate, signal);
        if (done(current)) {
            return current;
        }
        debug(this.client.logger, "watching agent execution", {
            operation,
            agent_execution_id: this.agentExecutionId,
        });
        const events = this.client.services.event.watchEvents(create(WatchEventsRequestSchema, {
            scope: { case: "organization", value: true },
            resourceTypeFilters: [
                create(WatchEventsRequest_ResourceTypeFilterSchema, {
                    resourceType: ResourceType.AGENT_EXECUTION,
                    resourceIds: [this.agentExecutionId],
                }),
            ],
        }), { signal });
        for await (const event of events) {
            if (event.resourceType !== ResourceType.AGENT_EXECUTION || event.resourceId !== this.agentExecutionId) {
                continue;
            }
            current = await this.observe(operation, onUpdate, signal);
            if (done(current)) {
                return current;
            }
        }
        throw new UnavailableError(operation, `agent execution ${this.agentExecutionId} event stream ended before completion`);
    }
    async observe(operation, onUpdate, signal) {
        const execution = await this.getExecution(operation, signal);
        this.latest = execution;
        debug(this.client.logger, "agent execution updated", agentExecutionLogFields(operation, execution));
        if (onUpdate) {
            await onUpdate(execution);
        }
        const failure = agentFailureError(operation, execution);
        if (failure) {
            throw failure;
        }
        return execution;
    }
    async getExecution(operation, signal) {
        const response = await this.client.services.agent.getAgentExecution(create(GetAgentExecutionRequestSchema, { agentExecutionId: this.agentExecutionId }), { signal }).catch((error) => {
            throw mapError(operation, error);
        });
        if (!response.agentExecution) {
            throw new CapabilityUnavailableError(operation, `agent execution ${this.agentExecutionId} was not returned`);
        }
        return response.agentExecution;
    }
}
export async function startCodexInEnvironment(client, environmentId, options) {
    const operation = "codex.start";
    if (!environmentId) {
        throw new ValidationError(operation, "environment ID is required");
    }
    if (!options.prompt || !options.prompt.trim()) {
        throw new ValidationError(operation, "prompt is required");
    }
    validateCodexSettings(operation, options.model, options.reasoningEffort);
    const hasSettings = (options.model ?? CodexOpenAIModel.CODEX_OPEN_AI_MODEL_UNSPECIFIED) !== CodexOpenAIModel.CODEX_OPEN_AI_MODEL_UNSPECIFIED
        || (options.reasoningEffort ?? CodexReasoningEffort.UNSPECIFIED) !== CodexReasoningEffort.UNSPECIFIED;
    debug(client.logger, "starting Codex agent", {
        operation,
        environment_id: environmentId,
        name: options.name,
        prompt_bytes: options.prompt.length,
    });
    const response = await client.services.agent.startAgent(create(StartAgentRequestSchema, {
        agentId: codexAppInEnvironmentAgentID,
        codeContext: create(AgentCodeContextSchema, {
            context: { case: "environmentId", value: environmentId },
        }),
        name: options.name ?? "",
        codexSettings: hasSettings ? create(CodexSettingsSchema, {
            model: options.model,
            reasoningEffort: options.reasoningEffort,
        }) : undefined,
    }), { signal: options.signal }).catch((error) => {
        throw mapError(operation, error);
    });
    if (!response.agentExecutionId) {
        throw new CapabilityUnavailableError(operation, "start agent response did not include an agent execution ID");
    }
    const session = new AgentSession(client, response.agentExecutionId);
    debug(client.logger, "Codex agent started", {
        operation,
        environment_id: environmentId,
        agent_execution_id: session.id(),
    });
    await session.sendMessage(options.prompt, { signal: options.signal });
    try {
        await session.waitRunning(options.signal);
    }
    catch (error) {
        logError(client.logger, "Codex agent did not reach running", {
            operation,
            environment_id: environmentId,
            agent_execution_id: session.id(),
            status: session.execution() ? agentStatusLine(session.execution()) : "",
            err: messageOf(error),
        });
        throw error;
    }
    debug(client.logger, "Codex agent is running", {
        operation,
        environment_id: environmentId,
        agent_execution_id: session.id(),
    });
    return session;
}
function validateCodexSettings(operation, model, reasoningEffort) {
    if (model !== undefined && !Object.values(CodexOpenAIModel).includes(model)) {
        throw new ValidationError(operation, `model ${model} is not supported`);
    }
    if (reasoningEffort !== undefined && !Object.values(CodexReasoningEffort).includes(reasoningEffort)) {
        throw new ValidationError(operation, `reasoning effort ${reasoningEffort} is not supported`);
    }
}
export function agentStatusLine(execution) {
    const status = execution.status;
    const parts = [`phase=${agentPhaseLabel(status?.phase)}`];
    if (status?.currentActivity) {
        parts.push(`activity=${JSON.stringify(status.currentActivity)}`);
    }
    const operation = agentCurrentOperation(status);
    if (operation) {
        parts.push(`operation=${JSON.stringify(operation)}`);
    }
    if (status?.warningMessage) {
        parts.push(`warning=${JSON.stringify(status.warningMessage)}`);
    }
    if (isSpecifiedFailureReason(status?.failureReason)) {
        parts.push(`failure_reason=${agentFailureReasonLabel(status.failureReason)}`);
    }
    if (status?.failureMessage) {
        parts.push(`failure=${JSON.stringify(status.failureMessage)}`);
    }
    if (status?.supportBundleUrl) {
        parts.push(`support_bundle=${safeURLForLog(status.supportBundleUrl)}`);
    }
    return parts.join(" ");
}
class AgentMarkdownStreamRenderer {
    constructor() {
        this.textBlocks = new Map();
        this.openTextBlockId = "";
    }
    consumeEvent(rawEvent) {
        const parsed = parseSSEEvent(rawEvent);
        if (parsed.event === "end") {
            return { text: this.closeOpenTextBlock(), done: true };
        }
        if (parsed.event !== "block" || !parsed.data) {
            return { text: "", done: false };
        }
        const payload = JSON.parse(parsed.data);
        if (!payload.frame) {
            return { text: "", done: false };
        }
        return { text: this.renderFrame(base64ToBytes(payload.frame)), done: false };
    }
    closeOpenTextBlock() {
        if (!this.openTextBlockId) {
            return "";
        }
        this.openTextBlockId = "";
        return markdownBlock("");
    }
    renderFrame(frame) {
        if (frame.length === 0) {
            return "";
        }
        const payload = frame.slice(1);
        switch (frame[0]) {
            case agentConversationTagAgentResponse:
                return this.renderAgentResponseBlock(fromBinary(AgentResponseBlockSchema, payload));
            case agentConversationTagUserInput: {
                const block = fromBinary(UserInputBlockSchema, payload);
                return this.closeOpenTextBlock() + renderUserInputBlockMarkdown(block);
            }
            case agentConversationTagAgentMessage: {
                const message = fromBinary(AgentMessageSchema, payload);
                return this.closeOpenTextBlock() + renderBlockquoteMarkdown(message.payload);
            }
            default:
                return "";
        }
    }
    renderAgentResponseBlock(block) {
        if (block.output.case !== "text") {
            return "";
        }
        const text = block.output.value;
        if (!text.content || text.type === AgentResponseBlock_TextOutput_Type.THOUGHTS) {
            return "";
        }
        const blockId = block.id;
        const isDelta = block.phase === AgentResponseBlock_Phase.DELTA || block.phase === AgentResponseBlock_Phase.UPDATE;
        const prefix = this.openTextBlockId && this.openTextBlockId !== blockId ? this.closeOpenTextBlock() : "";
        if (!blockId) {
            return prefix + markdownBlock(text.content);
        }
        const state = this.textBlocks.get(blockId) ?? { sawDelta: false, lastSequenceId: BigInt(0) };
        if (isDelta) {
            if (text.sequenceId > BigInt(0) && text.sequenceId <= state.lastSequenceId) {
                return "";
            }
            state.sawDelta = true;
            state.lastSequenceId = text.sequenceId > state.lastSequenceId ? text.sequenceId : state.lastSequenceId;
            this.textBlocks.set(blockId, state);
            this.openTextBlockId = blockId;
            return prefix + text.content;
        }
        this.textBlocks.delete(blockId);
        this.openTextBlockId = "";
        if (state.sawDelta) {
            return markdownBlock("");
        }
        return prefix + markdownBlock(text.content);
    }
}
function parseSSEEvent(rawEvent) {
    let event = "";
    const data = [];
    for (const line of rawEvent.split("\n")) {
        if (!line || line.startsWith(":")) {
            continue;
        }
        const separator = line.indexOf(":");
        if (separator < 0) {
            continue;
        }
        const field = line.slice(0, separator);
        const value = line.slice(separator + 1).replace(/^ /, "");
        if (field === "event") {
            event = value;
        }
        else if (field === "data") {
            data.push(value);
        }
    }
    return { event, data: data.join("") };
}
function renderUserInputBlockMarkdown(block) {
    let output = "";
    if (block.input.case === "text") {
        output += renderBlockquoteMarkdown(block.input.value.content);
    }
    for (const input of block.inputs) {
        if (input.input.case === "text") {
            output += renderBlockquoteMarkdown(input.input.value.content);
        }
        else if (input.input.case === "image") {
            output += renderBlockquoteMarkdown("[image]");
        }
    }
    return output;
}
function renderBlockquoteMarkdown(content) {
    if (!content) {
        return "";
    }
    return `${content.split("\n").map((line) => `> ${line}`).join("\n")}\n\n`;
}
function markdownBlock(content) {
    if (!content) {
        return "\n\n";
    }
    if (content.endsWith("\n\n")) {
        return content;
    }
    if (content.endsWith("\n")) {
        return `${content}\n`;
    }
    return `${content}\n\n`;
}
function agentFailureError(operation, execution) {
    const failure = execution.status?.failureMessage ?? "";
    if (!failure) {
        return undefined;
    }
    return new UnavailableError(operation, `agent execution ${execution.id} failed: ${failure}; last status: ${agentStatusLine(execution)}`);
}
function agentExecutionLogFields(operation, execution) {
    const status = execution.status;
    return {
        operation,
        agent_execution_id: execution.id,
        status: agentStatusLine(execution),
        phase: agentPhaseLabel(status?.phase),
        activity: status?.currentActivity,
        warning: status?.warningMessage,
        failure_reason: isSpecifiedFailureReason(status?.failureReason) ? agentFailureReasonLabel(status.failureReason) : "",
        failure_message: status?.failureMessage,
        support_bundle_url: safeURLForLog(status?.supportBundleUrl ?? ""),
    };
}
function agentCurrentOperation(status) {
    const operation = status?.currentOperation?.operation;
    if (operation?.case === "toolUse") {
        if (!operation.value.toolName) {
            return "";
        }
        return operation.value.complete ? `completed tool ${operation.value.toolName}` : `using tool ${operation.value.toolName}`;
    }
    if (operation?.case === "llm") {
        return operation.value.complete ? "completed model request" : "calling model";
    }
    return "";
}
function agentPhaseLabel(phase) {
    switch (phase) {
        case AgentExecution_Phase.PENDING:
            return "pending";
        case AgentExecution_Phase.RUNNING:
            return "running";
        case AgentExecution_Phase.WAITING_FOR_INPUT:
            return "waiting for input";
        case AgentExecution_Phase.STOPPED:
            return "stopped";
        default:
            return "unspecified";
    }
}
function agentFailureReasonLabel(reason) {
    switch (reason) {
        case AgentExecutionFailureReason.ENVIRONMENT:
            return "environment";
        case AgentExecutionFailureReason.SERVICE:
            return "service";
        case AgentExecutionFailureReason.LLM_INTEGRATION:
            return "llm_integration";
        case AgentExecutionFailureReason.INTERNAL:
            return "internal";
        case AgentExecutionFailureReason.AGENT_EXECUTION:
            return "agent_execution";
        default:
            return "unspecified";
    }
}
function isSpecifiedFailureReason(reason) {
    return reason !== undefined && reason !== AgentExecutionFailureReason.UNSPECIFIED;
}
function base64ToBytes(value) {
    const runtime = globalThis;
    if (runtime.Buffer) {
        return runtime.Buffer.from(value, "base64");
    }
    if (!globalThis.atob) {
        throw new SDKError("agents.message_stream", "base64 decoding is not available");
    }
    const binary = globalThis.atob(value);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}
function randomID() {
    if (globalThis.crypto?.randomUUID) {
        return globalThis.crypto.randomUUID();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
        const value = Math.floor(Math.random() * 16);
        return (char === "x" ? value : (value & 0x3) | 0x8).toString(16);
    });
}
function safeURLForLog(rawURL) {
    const trimmed = rawURL.trim();
    if (!trimmed) {
        return "";
    }
    try {
        const parsed = new URL(trimmed);
        parsed.username = "";
        parsed.password = "";
        parsed.search = "";
        parsed.hash = "";
        return parsed.toString();
    }
    catch {
        return trimmed;
    }
}
