import {
    AuthenticationRequiredError,
    MissingAPIKeyError,
    WriteFileMode,
    consoleLogger,
    createClientFromEnv,
    type RunCommandResult,
} from "../../lib/index.js";

async function main(): Promise<void> {
    const signal = AbortSignal.timeout(30 * 60 * 1000);
    const ona = createClientFromEnv({
        logger: consoleLogger("debug"),
    });

    const contextUrl = "https://github.com/gitpod-io/template-golang-cli";
    const env = await ona.environments().create({
        contextUrl,
        name: "ona sdk environment interactions example",
        signal,
    });
    const environmentId = env.id();
    try {
        const workspaceDir = env.workspaceDir();
        if (!workspaceDir) {
            throw new Error(`environment ${environmentId} did not report a workspace directory`);
        }

        const quotedWorkspaceDir = shellQuote(workspaceDir);
        const command = `set -u
cd ${quotedWorkspaceDir}
printf 'workspace_dir=%s\\n' ${quotedWorkspaceDir}
echo "pwd=$(pwd)"
echo "user=$(whoami)"
echo "kernel=$(uname -srm)"
echo "files:"
find . -maxdepth 2 -type f 2>/dev/null | sed -n '1,20p'
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "git_remote=$(git remote get-url origin 2>/dev/null || true)"
  git status --short
else
  echo "not inside a git work tree" >&2
fi
echo "stderr is captured too" >&2`;

        const result = await env.runCommand({
            workingDirectory: workspaceDir,
            command,
            timeoutSeconds: 600,
            signal,
        });
        printExecResult(result);
        if (result.exitCode !== 0) {
            throw new Error(`command exited with code ${result.exitCode}`);
        }

        const readPath = joinPath(workspaceDir, "README.md");
        const readme = await env.readFile(readPath, {
            length: 32 * 1024,
            signal,
        });
        if (readme.result.case === "content") {
            console.log(`read ${readme.result.value.data.length} bytes from ${readPath}`);
        }

        const writePath = joinPath(workspaceDir, "ona-sdk-example.txt");
        const writeContent = "created by the Ona SDK environment interactions example\n";
        const written = await env.writeFile(writePath, writeContent, {
            mode: WriteFileMode.CREATE_OR_TRUNCATE,
            signal,
        });
        console.log(`wrote ${written.bytesWritten} bytes to ${writePath}`);

        const verified = await env.readFile(writePath, {
            length: writeContent.length,
            signal,
        });
        if (verified.result.case === "content") {
            console.log(`verified file content: ${new TextDecoder().decode(verified.result.value.data)}`);
        }
    } finally {
        await cleanupEnvironment(ona, environmentId);
    }
}

async function cleanupEnvironment(ona: ReturnType<typeof createClientFromEnv>, environmentId: string): Promise<void> {
    let force = false;
    try {
        await ona.environments().stop(environmentId, {
            signal: AbortSignal.timeout(10 * 60 * 1000),
        });
    } catch (error) {
        console.error(`stop environment ${environmentId} during cleanup: ${messageOf(error)}`);
        force = true;
    }
    try {
        await ona.environments().delete(environmentId, {
            force,
            signal: AbortSignal.timeout(5 * 60 * 1000),
        });
    } catch (error) {
        console.error(`delete environment ${environmentId} during cleanup: ${messageOf(error)}`);
    }
}

function printExecResult(result: RunCommandResult): void {
    console.log(`environment: ${result.environmentId}`);
    console.log(`exit_code: ${result.exitCode}`);
    console.log("stdout:");
    console.log(result.stdout || "<empty>");
    console.log("stderr:");
    console.log(result.stderr || "<empty>");
}

function joinPath(base: string, name: string): string {
    return `${base.replace(/\/+$/, "")}/${name}`;
}

function shellQuote(value: string): string {
    return `'${value.replace(/'/g, "'\"'\"'")}'`;
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
