# Ona TypeScript SDK

The public TypeScript SDK exposes task-oriented workflows and every public API service from the package root. Generated protobuf types remain available from generated subpaths.

## Install the SDK

```sh
npm install @gitpod/sdk
```

Set `ONA_API_KEY` to an Ona personal access token before running an example. `createClientFromEnv` also accepts the legacy `GITPOD_API_KEY`; if both are set, `ONA_API_KEY` takes precedence.

## Run a Codex task

Run a Codex task in a repository with one call:

```typescript
import { CodexOpenAIModel, CodexReasoningEffort, CodexRunError, createClientFromEnv, type CodexRun } from "@gitpod/sdk";

const ona = createClientFromEnv();
let run: CodexRun;
try {
    run = await ona.runCodex({
        repositoryUrl: "https://github.com/gitpod-io/template-golang-cli",
        task: "Inspect the repository and improve its README.",
        model: CodexOpenAIModel.CODEX_OPEN_AI_MODEL_GPT_5_6_SOL,
        reasoningEffort: CodexReasoningEffort.HIGH,
    });

} catch (error) {
    if (error instanceof CodexRunError) {
        await error.run.deleteEnvironment({ force: true });
    }
    throw error;
}

try {
    for await (const chunk of run.messageStream()) process.stdout.write(chunk);
    await run.watchResult();
} finally {
    await run.deleteEnvironment({ force: true });
}
```

Omit `repositoryUrl` for an empty scratch workspace. The message stream is live-only, and the caller must explicitly stop or delete the created environment.

## Run a command in an environment

```typescript
import { createClientFromEnv } from "@gitpod/sdk";

const ona = createClientFromEnv();
const env = await ona.environments().create({
    contextUrl: "https://github.com/gitpod-io/template-golang-cli",
});

try {
    const result = await env.runCommand({
        command: "pwd && git status --short",
        workingDirectory: env.workspaceDir(),
    });
    console.log(result.stdout);
} finally {
    await ona.environments().delete(env.id(), { force: true });
}
```

## Configure authentication and the API endpoint

The SDK uses `https://app.ona.com/api` by default. Set `ONA_BASE_URL` for a custom management-plane domain or use `createClient({ apiKey, baseUrl })` to pass values explicitly.

## Import generated API types

Use `ona.services` to call a public RPC with its generated request type:

```typescript
import { create } from "@bufbuild/protobuf";
import { createClientFromEnv } from "@gitpod/sdk";
import { ListEnvironmentsRequestSchema } from "@gitpod/sdk/gitpod/v1/environment_pb";

const ona = createClientFromEnv();
const request = create(ListEnvironmentsRequestSchema);
const response = await ona.services.environment.listEnvironments(request);
```

Import generated public protobuf types, schemas, and service descriptors from subpaths such as `@gitpod/sdk/gitpod/v1/environment_pb`.

Runnable examples live in `examples/`.
