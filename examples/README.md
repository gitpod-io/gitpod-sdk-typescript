# Ona TypeScript SDK Examples

Build the generated public client package and SDK before running an example:

```sh
yarn --cwd api/public-clients/typescript build
ONA_API_KEY=... node --experimental-strip-types api/public-clients/typescript/examples/start_environment_and_run_command/main.ts
ONA_API_KEY=... node --experimental-strip-types api/public-clients/typescript/examples/run_codex_agent_in_environment/main.ts
```

Set `ONA_BASE_URL` to run the examples against local development or the SDK replay proxy.

Both examples create a production environment from `https://github.com/gitpod-io/template-golang-cli`, clean it up at the end, and report SCM authentication errors with an actionable message.
