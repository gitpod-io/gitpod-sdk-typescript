import { create } from "@bufbuild/protobuf";
import { timestampFromDate } from "@bufbuild/protobuf/wkt";
import { ContextURLInitializerSchema, CreateEnvironmentFromProjectRequestSchema, CreateEnvironmentRequestSchema, CreateEnvironmentAccessTokenRequestSchema, DeleteEnvironmentRequestSchema, EnvironmentInitializer_SpecSchema, EnvironmentInitializerSchema, EnvironmentPhase, EnvironmentSpec_ContentSchema, EnvironmentSpec_MachineSchema, EnvironmentSpecSchema, EnvironmentRole, GetEnvironmentRequestSchema, GitInitializer_CloneTargetMode, GitInitializerSchema, ListEnvironmentsRequest_ArchivalStatus, ListEnvironmentsRequest_FilterSchema, ListEnvironmentsRequestSchema, StartEnvironmentRequestSchema, StopEnvironmentRequestSchema, } from "../gitpod/v1/environment_pb.js";
import { ResourceType, WatchEventsRequest_ResourceTypeFilterSchema, WatchEventsRequestSchema } from "../gitpod/v1/event_pb.js";
import { GetAuthenticatedIdentityRequestSchema } from "../gitpod/v1/identity_pb.js";
import { GetProjectRequestSchema } from "../gitpod/v1/project_pb.js";
import { PaginationRequestSchema } from "../gitpod/v1/pagination_pb.js";
import { GetEnvironmentClassRequestSchema, ListEnvironmentClassesRequest_FilterSchema, ListEnvironmentClassesRequestSchema, } from "../gitpod/v1/runner_configuration_pb.js";
import { CheckAuthenticationForHostRequestSchema, ParseContextURLRequestSchema, } from "../gitpod/v1/runner_pb.js";
import { DateRangeSchema, GetTopProjectsRequestSchema } from "../gitpod/v1/usage_pb.js";
import { ExecRequestSchema, GetGitDiffRequestSchema, GetGitStatusRequestSchema, ReadFileRequestSchema, WriteFileRequestSchema, WriteMode, } from "../supervisor/v1/environmentopts_pb.js";
import { AuthenticationRequiredError, CapabilityUnavailableError, EnvironmentPolicyError, EnvironmentUnreachableError, NotFoundError, UnavailableError, ValidationError, mapError, messageOf, } from "./errors.js";
import { debug } from "./logging.js";
import { startCodexInEnvironment } from "./agents.js";
export { WriteMode as WriteFileMode };
const defaultPageSize = 100;
const defaultProjectUsageLookbackMs = 90 * 24 * 60 * 60 * 1000;
export class EnvironmentClient {
    constructor(client) {
        this.client = client;
    }
    async create(options) {
        const operation = "environments.create";
        if (!options.contextUrl) {
            throw new ValidationError(operation, "context URL is required");
        }
        debug(this.client.logger, "creating environment", {
            operation,
            context_url: safeURLForLog(options.contextUrl),
            name: options.name,
        });
        const resolved = await this.resolveContext(options.contextUrl, options.signal);
        let environmentClassId = firstRecommendedEnvironmentClass(resolved);
        let runnerId = "";
        let selectionSource = "recommended";
        if (!environmentClassId) {
            const selected = await this.defaultEnvironmentClass(options.signal);
            environmentClassId = selected.environmentClassId;
            runnerId = selected.runnerId;
            selectionSource = "default";
        }
        if (!runnerId) {
            runnerId = await this.environmentClassRunnerID(environmentClassId, options.signal);
        }
        await this.requireSCMAuthentication(runnerId, options.contextUrl, options.signal);
        const projectId = await this.preferredProjectID(resolved.projectIds, options.signal);
        if (projectId) {
            debug(this.client.logger, "creating environment from project", {
                operation,
                project_id: projectId,
                project_candidates: resolved.projectIds.length,
            });
            const created = await this.createFromProject(projectId, resolved, options.name, options.signal);
            return await this.environment(created, true, options.signal);
        }
        debug(this.client.logger, "selected environment class", {
            operation,
            environment_class_id: environmentClassId,
            selection_source: selectionSource,
            recommended_count: resolved.recommendedEnvironmentClasses.length,
        });
        const created = await this.createFromContextURL(options.contextUrl, environmentClassId, options.name, options.signal);
        return await this.environment(created, true, options.signal);
    }
    async createScratch(options = {}) {
        const operation = "environments.create_scratch";
        const selected = await this.defaultEnvironmentClass(options.signal);
        const response = await this.client.services.environment.createEnvironment(create(CreateEnvironmentRequestSchema, {
            spec: create(EnvironmentSpecSchema, {
                desiredPhase: EnvironmentPhase.RUNNING,
                machine: create(EnvironmentSpec_MachineSchema, { class: selected.environmentClassId }),
            }),
            name: options.name,
        }), { signal: options.signal }).catch((error) => {
            throw mapError(operation, error);
        });
        if (!response.environment) {
            throw new CapabilityUnavailableError(operation, "create response did not include an environment");
        }
        return await this.environment(handleFor(response.environment), true, options.signal);
    }
    async get(environmentId, options = {}) {
        const handle = await this.getHandle(environmentId, options.signal);
        return new Environment(this.client, this, handle);
    }
    async *list(options = {}) {
        const operation = "environments.list";
        const identity = await this.client.services.identity.getAuthenticatedIdentity(create(GetAuthenticatedIdentityRequestSchema), { signal: options.signal }).catch((error) => {
            throw mapError(operation, error);
        });
        const creatorId = identity.subject?.id;
        if (!creatorId) {
            throw new CapabilityUnavailableError(operation, "authenticated identity did not include a subject ID");
        }
        let token = "";
        let count = 0;
        for (;;) {
            debug(this.client.logger, "listing environments", {
                operation,
                creator_id: creatorId,
                page_size: options.pageSize ?? defaultPageSize,
                has_page_token: token !== "",
            });
            const response = await this.client.services.environment.listEnvironments(create(ListEnvironmentsRequestSchema, {
                pagination: create(PaginationRequestSchema, {
                    pageSize: options.pageSize ?? defaultPageSize,
                    token,
                }),
                filter: create(ListEnvironmentsRequest_FilterSchema, {
                    creatorIds: [creatorId],
                    roles: [EnvironmentRole.DEFAULT],
                    archivalStatus: ListEnvironmentsRequest_ArchivalStatus.ALL,
                }),
            }), { signal: options.signal }).catch((error) => {
                throw mapError(operation, error);
            });
            for (const environment of response.environments) {
                count++;
                yield new Environment(this.client, this, handleFor(environment));
            }
            const nextToken = response.pagination?.nextToken ?? "";
            debug(this.client.logger, "listed environment page", {
                operation,
                creator_id: creatorId,
                page_count: response.environments.length,
                total_count: count,
                has_next_page: nextToken !== "",
            });
            if (!nextToken) {
                break;
            }
            token = nextToken;
        }
    }
    async stop(environmentId, options = {}) {
        const operation = "environments.stop";
        if (!environmentId) {
            throw new ValidationError(operation, "environment ID is required");
        }
        debug(this.client.logger, "stopping environment", { operation, environment_id: environmentId });
        await this.client.services.environment.stopEnvironment(create(StopEnvironmentRequestSchema, { environmentId }), { signal: options.signal }).catch((error) => {
            throw mapError(operation, error);
        });
        await this.waitForEnvironment(environmentId, operation, options.signal, (environment) => {
            const phase = environment.status?.phase;
            return phase === EnvironmentPhase.STOPPED || phase === EnvironmentPhase.DELETED;
        });
    }
    async delete(environmentId, options = {}) {
        const operation = "environments.delete";
        if (!environmentId) {
            throw new ValidationError(operation, "environment ID is required");
        }
        debug(this.client.logger, "deleting environment", {
            operation,
            environment_id: environmentId,
            force: options.force === true,
        });
        await this.client.services.environment.deleteEnvironment(create(DeleteEnvironmentRequestSchema, {
            environmentId,
            force: options.force === true,
        }), { signal: options.signal }).catch((error) => {
            throw mapError(operation, error);
        });
        debug(this.client.logger, "environment deleted", {
            operation,
            environment_id: environmentId,
            force: options.force === true,
        });
    }
    async start(environmentId, options = {}) {
        const operation = "environments.start";
        if (!environmentId) {
            throw new ValidationError(operation, "environment ID is required");
        }
        debug(this.client.logger, "starting environment", { operation, environment_id: environmentId });
        await this.client.services.environment.startEnvironment(create(StartEnvironmentRequestSchema, { environmentId }), { signal: options.signal }).catch((error) => {
            throw mapError(operation, error);
        });
        const environment = await this.waitForEnvironment(environmentId, "environments.wait_running", options.signal, (current) => {
            return current.status?.phase === EnvironmentPhase.RUNNING;
        });
        return new Environment(this.client, this, handleFor(environment));
    }
    async getHandle(environmentId, signal) {
        const operation = "environments.get";
        if (!environmentId) {
            throw new ValidationError(operation, "environment ID is required");
        }
        const response = await this.client.services.environment.getEnvironment(create(GetEnvironmentRequestSchema, { environmentId }), { signal }).catch((error) => {
            throw mapError(operation, error);
        });
        if (!response.environment) {
            throw new NotFoundError(operation, `environment ${environmentId} was not returned`);
        }
        return handleFor(response.environment);
    }
    async environment(handle, waitForRunning, signal) {
        if (waitForRunning) {
            const latest = await this.waitForEnvironment(handle.id, "environments.wait_running", signal, (environment) => {
                return environment.status?.phase === EnvironmentPhase.RUNNING;
            });
            handle.environment = latest;
        }
        return new Environment(this.client, this, handle);
    }
    async waitForEnvironment(environmentId, operation, signal, done) {
        let current = (await this.getHandle(environmentId, signal)).environment;
        logEnvironmentPhase(this.client, operation, current);
        const failure = environmentFailureError(operation, current);
        if (failure) {
            throw failure;
        }
        if (done(current)) {
            return current;
        }
        if (operation === "environments.wait_running" && isTerminalBeforeRunning(current.status?.phase)) {
            throw new UnavailableError(operation, `environment ${environmentId} reached ${environmentPhaseLabel(current.status?.phase)} before running`);
        }
        const events = this.client.services.event.watchEvents(create(WatchEventsRequestSchema, {
            scope: { case: "organization", value: true },
            resourceTypeFilters: [
                create(WatchEventsRequest_ResourceTypeFilterSchema, {
                    resourceType: ResourceType.ENVIRONMENT,
                    resourceIds: [environmentId],
                }),
            ],
        }), { signal });
        for await (const event of events) {
            if (event.resourceId !== environmentId || event.resourceType !== ResourceType.ENVIRONMENT) {
                continue;
            }
            current = (await this.getHandle(environmentId, signal)).environment;
            logEnvironmentPhase(this.client, operation, current);
            const eventFailure = environmentFailureError(operation, current);
            if (eventFailure) {
                throw eventFailure;
            }
            if (done(current)) {
                return current;
            }
            if (operation === "environments.wait_running" && isTerminalBeforeRunning(current.status?.phase)) {
                throw new UnavailableError(operation, `environment ${environmentId} reached ${environmentPhaseLabel(current.status?.phase)} before running`);
            }
        }
        throw new UnavailableError(operation, `environment ${environmentId} event stream ended before the target phase`);
    }
    async resolveContext(contextUrl, signal) {
        const operation = "scm.resolve_context";
        debug(this.client.logger, "resolving context URL", {
            operation,
            context_url: safeURLForLog(contextUrl),
        });
        const response = await this.client.services.runner.parseContextURL(create(ParseContextURLRequestSchema, { contextUrl }), { signal }).catch((error) => {
            throw mapError(operation, error);
        });
        debug(this.client.logger, "resolved context URL", {
            operation,
            context_url: safeURLForLog(response.originalContextUrl),
            scm_id: response.scmId,
            git_host: response.git?.host,
            git_owner: response.git?.owner,
            git_repo: response.git?.repo,
            project_count: response.projectIds.length,
            recommended_environment_class_count: response.recommendedEnvironmentClasses.length,
        });
        return response;
    }
    async requireSCMAuthentication(runnerId, contextUrl, signal) {
        const operation = "scm.check_authentication_for_host";
        const host = hostFromURL(contextUrl);
        const response = await this.client.services.runner.checkAuthenticationForHost(create(CheckAuthenticationForHostRequestSchema, { runnerId, host }), { signal }).catch((error) => {
            throw mapError(operation, error);
        });
        if (!response.authenticated) {
            debug(this.client.logger, "SCM authentication required", {
                operation,
                runner_id: runnerId,
                host,
                scm_id: response.scmId,
                scm_name: response.scmName,
                supports_oauth2: response.supportsOauth2 !== undefined,
                supports_pat: response.supportsPat !== undefined || response.patSupported,
            });
            throw new AuthenticationRequiredError(operation, `authentication required for ${host}`);
        }
        debug(this.client.logger, "SCM authentication available", {
            operation,
            runner_id: runnerId,
            host,
            scm_id: response.scmId,
            scm_name: response.scmName,
        });
    }
    async defaultEnvironmentClass(signal) {
        const operation = "environments.default_class";
        const response = await this.client.services.environment.listEnvironmentClasses(create(ListEnvironmentClassesRequestSchema, {
            pagination: create(PaginationRequestSchema, { pageSize: defaultPageSize }),
            filter: create(ListEnvironmentClassesRequest_FilterSchema, {
                enabled: true,
                canCreateEnvironments: true,
            }),
        }), { signal }).catch((error) => {
            throw mapError(operation, error);
        });
        const selected = response.environmentClasses.find((environmentClass) => environmentClass.id);
        if (!selected) {
            throw new CapabilityUnavailableError(operation, "no environment class available for creating environments");
        }
        debug(this.client.logger, "selected default environment class", {
            operation,
            environment_class_id: selected.id,
            runner_id: selected.runnerId,
        });
        return { environmentClassId: selected.id, runnerId: selected.runnerId };
    }
    async environmentClassRunnerID(environmentClassId, signal) {
        const operation = "environments.environment_class_runner";
        const response = await this.client.services.runnerConfiguration.getEnvironmentClass(create(GetEnvironmentClassRequestSchema, { environmentClassId }), { signal }).catch((error) => {
            throw mapError(operation, error);
        });
        const runnerId = response.environmentClass?.runnerId ?? "";
        if (!runnerId) {
            throw new CapabilityUnavailableError(operation, `environment class ${environmentClassId} did not include a runner ID`);
        }
        return runnerId;
    }
    async preferredProjectID(projectIds, signal) {
        const operation = "environments.preferred_project";
        const candidates = new Set(projectIds.filter((projectId) => projectId !== ""));
        const fallback = candidates.values().next().value ?? "";
        if (candidates.size <= 1) {
            return fallback;
        }
        const now = new Date();
        const response = await this.client.services.usage.getTopProjects(create(GetTopProjectsRequestSchema, {
            pagination: create(PaginationRequestSchema, { pageSize: defaultPageSize }),
            dateRange: create(DateRangeSchema, {
                startTime: timestampFromDate(new Date(now.getTime() - defaultProjectUsageLookbackMs)),
                endTime: timestampFromDate(now),
            }),
        }), { signal }).catch(() => undefined);
        for (const project of response?.projects ?? []) {
            if (candidates.has(project.projectId)) {
                debug(this.client.logger, "selected project for context URL", {
                    operation,
                    project_id: project.projectId,
                    selection_source: "usage",
                    candidate_count: candidates.size,
                });
                return project.projectId;
            }
        }
        debug(this.client.logger, "selected project for context URL", {
            operation,
            project_id: fallback,
            selection_source: "first_match",
            candidate_count: candidates.size,
        });
        return fallback;
    }
    async createFromContextURL(contextUrl, environmentClass, name, signal) {
        const operation = "environments.create_from_context_url";
        const response = await this.client.services.environment.createEnvironment(create(CreateEnvironmentRequestSchema, {
            spec: create(EnvironmentSpecSchema, {
                desiredPhase: EnvironmentPhase.RUNNING,
                machine: environmentClass ? create(EnvironmentSpec_MachineSchema, { class: environmentClass }) : undefined,
                content: create(EnvironmentSpec_ContentSchema, {
                    initializer: create(EnvironmentInitializerSchema, {
                        specs: [
                            create(EnvironmentInitializer_SpecSchema, {
                                spec: {
                                    case: "contextUrl",
                                    value: create(ContextURLInitializerSchema, { url: contextUrl }),
                                },
                            }),
                        ],
                    }),
                }),
            }),
            name,
        }), { signal }).catch((error) => {
            throw mapError(operation, error);
        });
        if (!response.environment) {
            throw new CapabilityUnavailableError(operation, "create response did not include an environment");
        }
        return handleFor(response.environment);
    }
    async createFromProject(projectId, resolved, name, signal) {
        const operation = "environments.create_from_project";
        const gitRemoteURI = await this.projectRemoteURIForParsedContext(projectId, resolved.git, signal);
        const response = await this.client.services.environment.createEnvironmentFromProject(create(CreateEnvironmentFromProjectRequestSchema, {
            projectId,
            spec: environmentSpecFromProject(resolved, gitRemoteURI),
            name,
        }), { signal }).catch((error) => {
            throw mapError(operation, error);
        });
        if (!response.environment) {
            throw new CapabilityUnavailableError(operation, "create-from-project response did not include an environment");
        }
        return handleFor(response.environment);
    }
    async projectRemoteURIForParsedContext(projectId, gitContext, signal) {
        const fallback = gitContext?.cloneUrl ?? "";
        if (!projectId || !fallback) {
            return fallback;
        }
        const response = await this.client.services.project.getProject(create(GetProjectRequestSchema, { projectId }), { signal }).catch(() => undefined);
        const target = normalizedRepositoryIdentifier(fallback);
        for (const spec of response?.project?.initializer?.specs ?? []) {
            const remoteURI = spec.spec.case === "git" ? spec.spec.value.remoteUri : "";
            if (remoteURI && normalizedRepositoryIdentifier(remoteURI) === target) {
                return remoteURI;
            }
        }
        return fallback;
    }
}
export class Environment {
    constructor(client, environmentClient, handle) {
        this.client = client;
        this.environmentClient = environmentClient;
        this.handle = handle;
    }
    id() {
        return this.handle.id;
    }
    proto() {
        return this.handle.environment;
    }
    workspaceDir() {
        return this.handle.environment.status?.devcontainer?.remoteWorkspaceFolder
            || this.handle.environment.status?.content?.contentLocationInMachine
            || "";
    }
    async refresh(options = {}) {
        const next = await this.environmentClient.getHandle(this.id(), options.signal);
        this.handle.environment = next.environment;
        return this.handle.environment;
    }
    async runCommand(options) {
        const operation = "environments.run_command";
        if (!options.command) {
            throw new ValidationError(operation, "command is required");
        }
        const ops = await this.opsClient(options.signal);
        const operationId = randomID();
        debug(this.client.logger, "running command in environment", {
            operation,
            environment_id: this.id(),
            operation_id: operationId,
            working_directory: options.workingDirectory,
            timeout_seconds: options.timeoutSeconds,
            command_bytes: options.command.length,
        });
        const response = await ops.exec(create(ExecRequestSchema, {
            operationId,
            command: options.command,
            workingDirectory: options.workingDirectory ?? "",
            timeoutSeconds: options.timeoutSeconds ?? 0,
        }), { signal: options.signal }).catch((error) => {
            throw this.mapOpsError("ops.run_command", error);
        });
        debug(this.client.logger, "environment command finished", {
            operation,
            environment_id: this.id(),
            operation_id: operationId,
            exit_code: response.exitCode,
            stdout_bytes: response.stdout.length,
            stderr_bytes: response.stderr.length,
        });
        return {
            environmentId: this.id(),
            exitCode: response.exitCode,
            stdout: response.stdout,
            stderr: response.stderr,
        };
    }
    async readFile(path, options = {}) {
        const operation = "environments.read_file";
        if (!path) {
            throw new ValidationError(operation, "path is required");
        }
        const ops = await this.opsClient(options.signal);
        const response = await ops.readFile(create(ReadFileRequestSchema, {
            path,
            offset: toBigInt(options.offset),
            length: toBigInt(options.length),
        }), { signal: options.signal }).catch((error) => {
            throw this.mapOpsError("ops.read_file", error);
        });
        return response;
    }
    async writeFile(path, content, options = {}) {
        const operation = "environments.write_file";
        if (!path) {
            throw new ValidationError(operation, "path is required");
        }
        const data = typeof content === "string" ? new TextEncoder().encode(content) : content;
        const ops = await this.opsClient(options.signal);
        const response = await ops.writeFile(create(WriteFileRequestSchema, {
            path,
            content: data,
            mode: options.mode ?? WriteMode.UNSPECIFIED,
        }), { signal: options.signal }).catch((error) => {
            throw this.mapOpsError("ops.write_file", error);
        });
        return response;
    }
    async gitChanges(options = {}) {
        const status = await this.gitStatus(options.signal);
        const files = [];
        const ops = await this.opsClient(options.signal);
        for (const file of status.changedFiles) {
            const diff = await ops.getGitDiff(create(GetGitDiffRequestSchema, {
                path: file.path,
                unified: options.unified ?? 0,
                baseRef: options.baseRef ?? "",
            }), { signal: options.signal }).catch((error) => {
                throw this.mapOpsError("ops.git_diff", error);
            });
            files.push({ file, diff });
        }
        return { status, files };
    }
    startCodex(options) {
        return startCodexInEnvironment(this.client, this.id(), options);
    }
    async gitStatus(signal) {
        const ops = await this.opsClient(signal);
        const response = await ops.getGitStatus(create(GetGitStatusRequestSchema), { signal }).catch((error) => {
            throw this.mapOpsError("ops.git_status", error);
        });
        if (!response.status) {
            throw new CapabilityUnavailableError("ops.git_status", "git status response did not include status");
        }
        return response.status;
    }
    async opsClient(signal) {
        if (this.ops) {
            return this.ops;
        }
        const operation = "ops.for_environment";
        const environment = (await this.environmentClient.getHandle(this.id(), signal)).environment;
        const opsUrl = environment.status?.environmentUrls?.ops ?? "";
        if (!opsUrl) {
            throw new CapabilityUnavailableError(operation, "environment ops URL is not available");
        }
        const token = await this.client.services.environment.createEnvironmentAccessToken(create(CreateEnvironmentAccessTokenRequestSchema, { environmentId: this.id() }), { signal }).catch((error) => {
            throw mapError(operation, error);
        });
        if (!token.accessToken) {
            throw new CapabilityUnavailableError(operation, "environment access token response did not include an access token");
        }
        this.ops = this.client.opsClient(opsUrl, token.accessToken);
        return this.ops;
    }
    mapOpsError(operation, error) {
        if (isEnvironmentOpsReachabilityError(error)) {
            const opsUrl = this.handle.environment.status?.environmentUrls?.ops ?? "";
            return new EnvironmentUnreachableError(operation, `cannot reach environment ${this.id()} ops service at ${safeURLForLog(opsUrl)}: ${messageOf(error)}`, error);
        }
        return mapError(operation, error);
    }
}
function handleFor(environment) {
    return { id: environment.id, environment };
}
function environmentSpecFromProject(resolved, gitRemoteURI) {
    const initializer = gitInitializerFromParsedContext(resolved.git, gitRemoteURI);
    if (!initializer) {
        return undefined;
    }
    return create(EnvironmentSpecSchema, {
        content: create(EnvironmentSpec_ContentSchema, {
            initializer: create(EnvironmentInitializerSchema, {
                specs: [
                    create(EnvironmentInitializer_SpecSchema, {
                        spec: { case: "git", value: initializer },
                    }),
                ],
            }),
        }),
    });
}
function gitInitializerFromParsedContext(gitContext, remoteURI) {
    if (!gitContext) {
        return undefined;
    }
    const resolvedRemoteURI = remoteURI || gitContext.cloneUrl;
    if (!resolvedRemoteURI) {
        return undefined;
    }
    let target = gitContext.commit;
    let targetMode = GitInitializer_CloneTargetMode.REMOTE_COMMIT;
    if (!target) {
        target = gitContext.tag;
        targetMode = GitInitializer_CloneTargetMode.REMOTE_TAG;
    }
    if (!target) {
        target = gitContext.branch;
        targetMode = GitInitializer_CloneTargetMode.REMOTE_BRANCH;
    }
    if (!target) {
        return undefined;
    }
    return create(GitInitializerSchema, {
        remoteUri: resolvedRemoteURI,
        targetMode,
        cloneTarget: target,
        checkoutLocation: gitContext.repo,
        upstreamRemoteUri: gitContext.upstreamRemoteUrl,
    });
}
function firstRecommendedEnvironmentClass(resolved) {
    return resolved.recommendedEnvironmentClasses.find((environmentClass) => environmentClass !== "") ?? "";
}
function hostFromURL(rawURL) {
    try {
        const parsed = new URL(rawURL);
        if (!parsed.host) {
            throw new Error("context URL must include a host");
        }
        return parsed.host;
    }
    catch (error) {
        throw new ValidationError("environments.require_scm_authentication", `parse context URL: ${messageOf(error)}`, error);
    }
}
function normalizedRepositoryIdentifier(raw) {
    const trimmed = raw.trim().replace(/\/+$/, "").replace(/\.git$/, "");
    if (trimmed.startsWith("git@")) {
        const withoutPrefix = trimmed.slice("git@".length);
        const separator = withoutPrefix.indexOf(":");
        if (separator >= 0) {
            return `${withoutPrefix.slice(0, separator).toLowerCase()}/${withoutPrefix.slice(separator + 1).replace(/\/+$/, "").replace(/\.git$/, "")}`;
        }
    }
    try {
        const parsed = new URL(trimmed);
        return `${parsed.host.toLowerCase()}/${parsed.pathname.replace(/^\/+|\/+$/g, "").replace(/\.git$/, "")}`;
    }
    catch {
        return trimmed;
    }
}
function environmentFailureError(operation, environment) {
    const failures = environment.status?.failureMessage ?? [];
    if (failures.length === 0) {
        return undefined;
    }
    return new EnvironmentPolicyError(operation, `environment ${environment.id} failed: ${failures.join("; ")}`);
}
function isTerminalBeforeRunning(phase) {
    return phase === EnvironmentPhase.STOPPED || phase === EnvironmentPhase.DELETED;
}
function environmentPhaseLabel(phase) {
    switch (phase) {
        case EnvironmentPhase.CREATING:
            return "creating";
        case EnvironmentPhase.STARTING:
            return "starting";
        case EnvironmentPhase.RUNNING:
            return "running";
        case EnvironmentPhase.UPDATING:
            return "updating";
        case EnvironmentPhase.STOPPING:
            return "stopping";
        case EnvironmentPhase.STOPPED:
            return "stopped";
        case EnvironmentPhase.DELETING:
            return "deleting";
        case EnvironmentPhase.DELETED:
            return "deleted";
        default:
            return "unspecified";
    }
}
function logEnvironmentPhase(client, operation, environment) {
    debug(client.logger, "environment phase changed", {
        operation,
        environment_id: environment.id,
        phase: environmentPhaseLabel(environment.status?.phase),
    });
}
function toBigInt(value) {
    if (value === undefined) {
        return BigInt(0);
    }
    return typeof value === "bigint" ? value : BigInt(value);
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
function isEnvironmentOpsReachabilityError(error) {
    const message = messageOf(error).toLowerCase();
    return message.includes("deadline exceeded")
        || message.includes("unavailable")
        || message.includes("failed to fetch")
        || message.includes("fetch failed")
        || message.includes("networkerror")
        || message.includes("no such host")
        || message.includes("name not resolved")
        || message.includes("enotfound")
        || message.includes("econnrefused")
        || message.includes("connection refused")
        || message.includes("network is unreachable")
        || message.includes("timeout")
        || message.includes("timed out")
        || message.includes("i/o timeout");
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
