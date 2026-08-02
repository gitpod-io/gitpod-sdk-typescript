# Ona TypeScript SDK

The public TypeScript SDK exposes production-ready workflows from the package root. Raw generated public clients remain available from generated subpaths for lower-level access.

Run a Codex task in a repository with one call:

```typescript
import { CodexOpenAIModel, CodexReasoningEffort, createClientFromEnv } from "@gitpod/sdk";

const ona = createClientFromEnv();
const run = await ona.runCodex({
    repositoryUrl: "https://github.com/gitpod-io/template-golang-cli",
    task: "Inspect the repository and improve its README.",
    model: CodexOpenAIModel.CODEX_OPEN_AI_MODEL_GPT_5_6_SOL,
    reasoningEffort: CodexReasoningEffort.HIGH,
});

for await (const chunk of run.messageStream()) {
    process.stdout.write(chunk);
}
const result = await run.watchResult();
await run.deleteEnvironment({ force: true });
```

Omit `repositoryUrl` for an empty scratch workspace. The message stream is live-only, and the caller must explicitly stop or delete the created environment.

```typescript
import { createClientFromEnv } from "@gitpod/sdk";

const ona = createClientFromEnv();
const env = await ona.environments().create({
    contextUrl: "https://github.com/gitpod-io/template-golang-cli",
});

const result = await env.runCommand({
    command: "pwd && git status --short",
    workingDirectory: env.workspaceDir(),
});

console.log(result.stdout);
```

Install the package with `npm install @gitpod/sdk`.

`createClientFromEnv` reads `ONA_API_KEY` and falls back to `GITPOD_API_KEY`. If both are set, `ONA_API_KEY` takes precedence. It uses `https://app.ona.com/api` by default and accepts `ONA_BASE_URL` for a custom management-plane domain, local development, or replay verification. Use `createClient({ apiKey, baseUrl })` to pass values explicitly.

Import generated public protobuf types and service descriptors from subpaths such as `@gitpod/sdk/gitpod/v1/environment_pb`.

Runnable examples live in `examples/`.
