import {
    AuthenticationRequiredError,
    CodexRun,
    CodexRunError,
    CodexOpenAIModel,
    CodexReasoningEffort,
    MissingAPIKeyError,
    agentStatusLine,
    consoleLogger,
    createClientFromEnv,
} from "../../lib/index.js";

async function main(): Promise<void> {
    const signal = AbortSignal.timeout(90 * 60 * 1000);
    const ona = createClientFromEnv({
        logger: consoleLogger("debug"),
    });

    const contextUrl = "https://github.com/gitpod-io/template-golang-cli";
    let run: CodexRun;
    try {
        run = await ona.runCodex({
            repositoryUrl: contextUrl,
            task: "Inspect the repository, create ona-codex-agent-notes.md in the workspace with a short summary and one suggested improvement, then finish without asking for confirmation.",
            environmentName: "ona sdk Codex agent example",
            agentName: "Create an SDK example note",
            model: CodexOpenAIModel.CODEX_OPEN_AI_MODEL_GPT_5_6_SOL,
            reasoningEffort: CodexReasoningEffort.HIGH,
            signal,
        });
    } catch (error) {
        if (error instanceof CodexRunError) {
            await cleanupEnvironment(error.run, error.run.environmentId());
        }
        throw error;
    }
    const env = run.environment;
    const agent = run.session;
    const environmentId = run.environmentId();
    try {
        console.error(`environment: ${environmentId}`);
        console.error(`agent_execution_id: ${agent.id()}`);

        const streamController = new AbortController();
        const stream = agent.messageStream({ signal: streamController.signal });
        const firstChunk = await stream.next();
        const streamDone = (async () => {
            if (!firstChunk.done && firstChunk.value) {
                process.stdout.write(firstChunk.value);
            }
            for await (const chunk of stream) {
                process.stdout.write(chunk);
            }
        })();

        let lastLine = "";
        const result = await agent.watchResult({
            signal,
            onUpdate: (execution) => {
                const line = agentStatusLine(execution);
                if (line === lastLine) {
                    return;
                }
                console.error(`agent update: ${line}`);
                lastLine = line;
            },
        });

        streamController.abort();
        await stream.return?.();
        await streamDone.catch(() => undefined);
        console.error(`Codex finished: ${agentStatusLine(result)}`);

        const changes = await env.gitChanges({
            unified: 3,
            signal,
        });
        console.error(`repository: ${changes.status.cloneUrl}`);
        console.error(`branch: ${changes.status.branch}`);
        console.error(`changed_files: ${changes.status.totalChangedFiles}`);
        for (const changed of changes.files) {
            console.error(`${changed.file.changeType} ${changed.file.path} hunks=${changed.diff.hunks.length} binary=${changed.diff.isBinary}`);
        }
    } finally {
        await cleanupEnvironment(run, environmentId);
    }
}

async function cleanupEnvironment(run: CodexRun, environmentId: string): Promise<void> {
    let force = false;
    try {
        await run.stopEnvironment({
            signal: AbortSignal.timeout(10 * 60 * 1000),
        });
    } catch (error) {
        console.error(`stop environment ${environmentId} during cleanup: ${messageOf(error)}`);
        force = true;
    }
    try {
        await run.deleteEnvironment({
            force,
            signal: AbortSignal.timeout(5 * 60 * 1000),
        });
    } catch (error) {
        console.error(`delete environment ${environmentId} during cleanup: ${messageOf(error)}`);
    }
}

function messageOf(error: unknown): string {
    return error instanceof Error ? error.message : String(error);
}

main().catch((error: unknown) => {
    if (error instanceof MissingAPIKeyError) {
        console.error(`set ONA_API_KEY to run this example`);
        process.exitCode = 1;
        return;
    }
    if (error instanceof AuthenticationRequiredError) {
        console.error(`${error.message}
Authenticate with github.com in Settings > Git authentications, then rerun this example.`);
        process.exitCode = 1;
        return;
    }
    console.error(error);
    process.exitCode = 1;
});
