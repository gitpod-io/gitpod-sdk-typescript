// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RunnersAPI from './runners';
import * as Shared from '../shared';
import * as PoliciesAPI from './policies';
import {
  Policies,
  PolicyCreateParams,
  PolicyCreateResponse,
  PolicyDeleteParams,
  PolicyDeleteResponse,
  PolicyListParams,
  PolicyUpdateParams,
  PolicyUpdateResponse,
  RunnerPoliciesPoliciesPage,
  RunnerPolicy,
  RunnerRole,
} from './policies';
import * as ConfigurationsAPI from './configurations/configurations';
import {
  ConfigurationValidateParams,
  ConfigurationValidateResponse,
  Configurations,
  EnvironmentClassValidationResult,
  FieldValidationError,
  ScmIntegrationValidationResult,
} from './configurations/configurations';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, RunnersPage, type RunnersPageParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Runners extends APIResource {
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);

  /**
   * Creates a new runner registration with the server. Registrations are very
   * short-lived and must be renewed every 30 seconds.
   *
   * Use this method to:
   *
   * - Register organization runners
   * - Set up runner configurations
   * - Initialize runner credentials
   * - Configure auto-updates
   *
   * ### Examples
   *
   * - Create cloud runner:
   *
   *   Creates a new runner in AWS EC2.
   *
   *   ```yaml
   *   name: "Production Runner"
   *   provider: RUNNER_PROVIDER_AWS_EC2
   *   spec:
   *     desiredPhase: RUNNER_PHASE_ACTIVE
   *     configuration:
   *       region: "us-west"
   *       releaseChannel: RUNNER_RELEASE_CHANNEL_STABLE
   *       autoUpdate: true
   *   ```
   *
   * - Create local runner:
   *
   *   Creates a new local runner on Linux.
   *
   *   ```yaml
   *   name: "Local Development Runner"
   *   provider: RUNNER_PROVIDER_LINUX_HOST
   *   spec:
   *     desiredPhase: RUNNER_PHASE_ACTIVE
   *     configuration:
   *       releaseChannel: RUNNER_RELEASE_CHANNEL_LATEST
   *       autoUpdate: true
   *   ```
   *
   * @example
   * ```ts
   * const runner = await client.runners.create({
   *   name: 'Production Runner',
   *   provider: 'RUNNER_PROVIDER_AWS_EC2',
   *   spec: {
   *     configuration: {
   *       autoUpdate: true,
   *       region: 'us-west',
   *       releaseChannel: 'RUNNER_RELEASE_CHANNEL_STABLE',
   *     },
   *     desiredPhase: 'RUNNER_PHASE_ACTIVE',
   *   },
   * });
   * ```
   */
  create(body: RunnerCreateParams, options?: RequestOptions): APIPromise<RunnerCreateResponse> {
    return this._client.post('/gitpod.v1.RunnerService/CreateRunner', { body, ...options });
  }

  /**
   * Gets details about a specific runner.
   *
   * Use this method to:
   *
   * - Check runner status
   * - View runner configuration
   * - Monitor runner health
   * - Verify runner capabilities
   *
   * ### Examples
   *
   * - Get runner details:
   *
   *   Retrieves information about a specific runner.
   *
   *   ```yaml
   *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const runner = await client.runners.retrieve({
   *   runnerId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   * });
   * ```
   */
  retrieve(body: RunnerRetrieveParams, options?: RequestOptions): APIPromise<RunnerRetrieveResponse> {
    return this._client.post('/gitpod.v1.RunnerService/GetRunner', { body, ...options });
  }

  /**
   * Updates a runner's configuration.
   *
   * Use this method to:
   *
   * - Modify runner settings
   * - Update release channels
   * - Change runner status
   * - Configure auto-update settings
   *
   * ### Examples
   *
   * - Update configuration:
   *
   *   Changes runner settings.
   *
   *   ```yaml
   *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   name: "Updated Runner Name"
   *   spec:
   *     configuration:
   *       releaseChannel: RUNNER_RELEASE_CHANNEL_LATEST
   *       autoUpdate: true
   *   ```
   *
   * @example
   * ```ts
   * const runner = await client.runners.update({
   *   name: 'Updated Runner Name',
   *   runnerId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   spec: {
   *     configuration: {
   *       autoUpdate: true,
   *       releaseChannel: 'RUNNER_RELEASE_CHANNEL_LATEST',
   *     },
   *   },
   * });
   * ```
   */
  update(body: RunnerUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.RunnerService/UpdateRunner', { body, ...options });
  }

  /**
   * Lists all registered runners with optional filtering.
   *
   * Use this method to:
   *
   * - View all available runners
   * - Filter by runner type
   * - Monitor runner status
   * - Check runner availability
   *
   * ### Examples
   *
   * - List all runners:
   *
   *   Shows all runners with pagination.
   *
   *   ```yaml
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * - Filter by provider:
   *
   *   Lists only AWS EC2 runners.
   *
   *   ```yaml
   *   filter:
   *     providers: ["RUNNER_PROVIDER_AWS_EC2"]
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const runner of client.runners.list({
   *   filter: { providers: ['RUNNER_PROVIDER_AWS_EC2'] },
   *   pagination: { pageSize: 20 },
   * })) {
   *   // ...
   * }
   * ```
   */
  list(params: RunnerListParams, options?: RequestOptions): PagePromise<RunnersRunnersPage, Runner> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList('/gitpod.v1.RunnerService/ListRunners', RunnersPage<Runner>, {
      query: { token, pageSize },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Deletes a runner permanently.
   *
   * Use this method to:
   *
   * - Remove unused runners
   * - Clean up runner registrations
   * - Delete obsolete runners
   *
   * ### Examples
   *
   * - Delete runner:
   *
   *   Permanently removes a runner.
   *
   *   ```yaml
   *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const runner = await client.runners.delete({
   *   runnerId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   * });
   * ```
   */
  delete(body: RunnerDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.RunnerService/DeleteRunner', { body, ...options });
  }

  /**
   * Checks if a user is authenticated for a specific host.
   *
   * Use this method to:
   *
   * - Verify authentication status
   * - Get authentication URLs
   * - Check PAT support
   *
   * ### Examples
   *
   * - Check authentication:
   *
   *   Verifies authentication for a host.
   *
   *   ```yaml
   *   host: "github.com"
   *   ```
   *
   * @example
   * ```ts
   * const response =
   *   await client.runners.checkAuthenticationForHost({
   *     host: 'github.com',
   *   });
   * ```
   */
  checkAuthenticationForHost(
    body: RunnerCheckAuthenticationForHostParams,
    options?: RequestOptions,
  ): APIPromise<RunnerCheckAuthenticationForHostResponse> {
    return this._client.post('/gitpod.v1.RunnerService/CheckAuthenticationForHost', { body, ...options });
  }

  /**
   * Creates an access token for runner logs and debug information.
   *
   * Generated tokens are valid for one hour and provide runner-specific access
   * permissions. The token is scoped to a specific runner and can be used to access
   * support bundles.
   *
   * ### Examples
   *
   * - Generate runner logs token:
   *
   *   ```yaml
   *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.runners.createLogsToken({
   *   runnerId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   * });
   * ```
   */
  createLogsToken(
    body: RunnerCreateLogsTokenParams,
    options?: RequestOptions,
  ): APIPromise<RunnerCreateLogsTokenResponse> {
    return this._client.post('/gitpod.v1.RunnerService/CreateRunnerLogsToken', { body, ...options });
  }

  /**
   * Creates a new authentication token for a runner.
   *
   * Use this method to:
   *
   * - Generate runner credentials
   * - Renew expired tokens
   * - Set up runner authentication
   *
   * Note: This does not expire previously issued tokens.
   *
   * ### Examples
   *
   * - Create token:
   *
   *   Creates a new token for runner authentication.
   *
   *   ```yaml
   *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.runners.createRunnerToken({
   *   runnerId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   * });
   * ```
   */
  createRunnerToken(
    body: RunnerCreateRunnerTokenParams,
    options?: RequestOptions,
  ): APIPromise<RunnerCreateRunnerTokenResponse> {
    return this._client.post('/gitpod.v1.RunnerService/CreateRunnerToken', { body, ...options });
  }

  /**
   * Parses a context URL and returns the parsed result.
   *
   * Use this method to:
   *
   * - Validate context URLs
   * - Check repository access
   * - Verify branch existence
   *
   * Returns:
   *
   * - FAILED_PRECONDITION if authentication is required
   * - PERMISSION_DENIED if access is not allowed
   * - INVALID_ARGUMENT if URL is invalid
   * - NOT_FOUND if repository/branch doesn't exist
   *
   * ### Examples
   *
   * - Parse URL:
   *
   *   Parses and validates a context URL.
   *
   *   ```yaml
   *   contextUrl: "https://github.com/org/repo/tree/main"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.runners.parseContextURL({
   *   contextUrl: 'https://github.com/org/repo/tree/main',
   * });
   * ```
   */
  parseContextURL(
    body: RunnerParseContextURLParams,
    options?: RequestOptions,
  ): APIPromise<RunnerParseContextURLResponse> {
    return this._client.post('/gitpod.v1.RunnerService/ParseContextURL', { body, ...options });
  }

  /**
   * Searches for repositories across all authenticated SCM hosts.
   *
   * Use this method to:
   *
   * - List available repositories
   * - Search repositories by name or content
   * - Discover repositories for environment creation
   *
   * Returns repositories from all authenticated SCM hosts in natural sort order. If
   * no repositories are found, returns an empty list.
   *
   * ### Examples
   *
   * - List all repositories:
   *
   *   Returns up to 25 repositories from all authenticated hosts.
   *
   *   ```yaml
   *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * - Search repositories:
   *
   *   Searches for repositories matching the query across all hosts.
   *
   *   ```yaml
   *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   searchString: "my-project"
   *   limit: 10
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.runners.searchRepositories({
   *   runnerId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   * });
   * ```
   */
  searchRepositories(
    body: RunnerSearchRepositoriesParams,
    options?: RequestOptions,
  ): APIPromise<RunnerSearchRepositoriesResponse> {
    return this._client.post('/gitpod.v1.RunnerService/SearchRepositories', { body, ...options });
  }
}

export type RunnersRunnersPage = RunnersPage<Runner>;

export interface GatewayInfo {
  /**
   * Gateway represents a system gateway that provides access to services
   */
  gateway?: Shared.Gateway;

  /**
   * latency is the round-trip time of the runner to the gateway in milliseconds.
   */
  latency?: string;
}

export type LogLevel =
  | 'LOG_LEVEL_UNSPECIFIED'
  | 'LOG_LEVEL_DEBUG'
  | 'LOG_LEVEL_INFO'
  | 'LOG_LEVEL_WARN'
  | 'LOG_LEVEL_ERROR';

export interface MetricsConfiguration {
  /**
   * enabled indicates whether the runner should collect metrics
   */
  enabled?: boolean;

  /**
   * password is the password to use for the metrics collector
   */
  password?: string;

  /**
   * url is the URL of the metrics collector
   */
  url?: string;

  /**
   * username is the username to use for the metrics collector
   */
  username?: string;
}

export interface Runner {
  /**
   * Time when the Runner was created.
   */
  createdAt?: string;

  /**
   * creator is the identity of the creator of the environment
   */
  creator?: Shared.Subject;

  /**
   * The runner's kind
   */
  kind?: RunnerKind;

  /**
   * The runner's name which is shown to users
   */
  name?: string;

  /**
   * The runner's provider
   */
  provider?: RunnerProvider;

  runnerId?: string;

  /**
   * The runner manager id specifies the runner manager for the managed runner. This
   * field is only set for managed runners.
   */
  runnerManagerId?: string;

  /**
   * The runner's specification
   */
  spec?: RunnerSpec;

  /**
   * The runner's status
   */
  status?: RunnerStatus;

  /**
   * Time when the Runner was last udpated.
   */
  updatedAt?: string;
}

export type RunnerCapability =
  | 'RUNNER_CAPABILITY_UNSPECIFIED'
  | 'RUNNER_CAPABILITY_FETCH_LOCAL_SCM_INTEGRATIONS'
  | 'RUNNER_CAPABILITY_SECRET_CONTAINER_REGISTRY'
  | 'RUNNER_CAPABILITY_AGENT_EXECUTION'
  | 'RUNNER_CAPABILITY_ALLOW_ENV_TOKEN_POPULATION'
  | 'RUNNER_CAPABILITY_DEFAULT_DEV_CONTAINER_IMAGE'
  | 'RUNNER_CAPABILITY_ENVIRONMENT_SNAPSHOT';

export interface RunnerConfiguration {
  /**
   * auto_update indicates whether the runner should automatically update itself.
   */
  autoUpdate?: boolean;

  /**
   * devcontainer_image_cache_enabled controls whether the devcontainer build cache
   * is enabled for this runner. Only takes effect on supported runners, currently
   * only AWS EC2 and Gitpod-managed runners.
   */
  devcontainerImageCacheEnabled?: boolean;

  /**
   * log_level is the log level for the runner
   */
  logLevel?: LogLevel;

  /**
   * metrics contains configuration for the runner's metrics collection
   */
  metrics?: MetricsConfiguration;

  /**
   * Region to deploy the runner in, if applicable. This is mainly used for remote
   * runners, and is only a hint. The runner may be deployed in a different region.
   * See the runner's status for the actual region.
   */
  region?: string;

  /**
   * The release channel the runner is on
   */
  releaseChannel?: RunnerReleaseChannel;
}

/**
 * RunnerKind represents the kind of a runner
 */
export type RunnerKind =
  | 'RUNNER_KIND_UNSPECIFIED'
  | 'RUNNER_KIND_LOCAL'
  | 'RUNNER_KIND_REMOTE'
  | 'RUNNER_KIND_LOCAL_CONFIGURATION';

/**
 * RunnerPhase represents the phase a runner is in
 */
export type RunnerPhase =
  | 'RUNNER_PHASE_UNSPECIFIED'
  | 'RUNNER_PHASE_CREATED'
  | 'RUNNER_PHASE_INACTIVE'
  | 'RUNNER_PHASE_ACTIVE'
  | 'RUNNER_PHASE_DELETING'
  | 'RUNNER_PHASE_DELETED'
  | 'RUNNER_PHASE_DEGRADED';

/**
 * RunnerProvider identifies the specific implementation type of a runner. Each
 * provider maps to a specific kind of runner (local or remote), as specified below
 * for each provider.
 */
export type RunnerProvider =
  | 'RUNNER_PROVIDER_UNSPECIFIED'
  | 'RUNNER_PROVIDER_AWS_EC2'
  | 'RUNNER_PROVIDER_LINUX_HOST'
  | 'RUNNER_PROVIDER_DESKTOP_MAC'
  | 'RUNNER_PROVIDER_MANAGED'
  | 'RUNNER_PROVIDER_GCP';

export type RunnerReleaseChannel =
  | 'RUNNER_RELEASE_CHANNEL_UNSPECIFIED'
  | 'RUNNER_RELEASE_CHANNEL_STABLE'
  | 'RUNNER_RELEASE_CHANNEL_LATEST';

export interface RunnerSpec {
  /**
   * The runner's configuration
   */
  configuration?: RunnerConfiguration;

  /**
   * RunnerPhase represents the phase a runner is in
   */
  desiredPhase?: RunnerPhase;

  /**
   * The runner's variant
   */
  variant?: RunnerVariant;
}

/**
 * RunnerStatus represents the status of a runner
 */
export interface RunnerStatus {
  /**
   * additional_info contains additional information about the runner, e.g. a
   * CloudFormation stack URL.
   */
  additionalInfo?: Array<Shared.FieldValue>;

  /**
   * capabilities is a list of capabilities the runner supports.
   */
  capabilities?: Array<RunnerCapability>;

  /**
   * gateway_info is information about the gateway to which the runner is connected.
   */
  gatewayInfo?: GatewayInfo;

  /**
   * llm_url is the URL of the LLM service to which the runner is connected.
   */
  llmUrl?: string;

  logUrl?: string;

  /**
   * The runner's reported message which is shown to users. This message adds more
   * context to the runner's phase.
   */
  message?: string;

  /**
   * The runner's reported phase
   */
  phase?: RunnerPhase;

  /**
   * public_key is the runner's public key used for encryption (32 bytes)
   */
  publicKey?: string;

  /**
   * region is the region the runner is running in, if applicable.
   */
  region?: string;

  /**
   * support_bundle_url is the URL at which the runner support bundle can be
   * accessed. This URL provides access to pprof profiles and other debug
   * information. Only available for standalone runners.
   */
  supportBundleUrl?: string;

  systemDetails?: string;

  /**
   * Time when the status was last updated.
   */
  updatedAt?: string;

  version?: string;
}

export type RunnerVariant =
  | 'RUNNER_VARIANT_UNSPECIFIED'
  | 'RUNNER_VARIANT_STANDARD'
  | 'RUNNER_VARIANT_ENTERPRISE';

export type SearchMode = 'SEARCH_MODE_UNSPECIFIED' | 'SEARCH_MODE_KEYWORD' | 'SEARCH_MODE_NATIVE';

export interface RunnerCreateResponse {
  runner: Runner;

  /**
   * @deprecated deprecated, will be removed. Use exchange_token instead.
   */
  accessToken?: string;

  /**
   * exchange_token is a one-time use token that should be exchanged by the runner
   * for an access token, using the IdentityService.ExchangeToken rpc. The token
   * expires after 24 hours.
   */
  exchangeToken?: string;
}

export interface RunnerRetrieveResponse {
  runner: Runner;
}

export type RunnerUpdateResponse = unknown;

export type RunnerDeleteResponse = unknown;

export interface RunnerCheckAuthenticationForHostResponse {
  authenticated?: boolean;

  /**
   * @deprecated
   */
  authenticationUrl?: string;

  /**
   * @deprecated
   */
  patSupported?: boolean;

  /**
   * scm_id is the unique identifier of the SCM provider
   */
  scmId?: string;

  /**
   * scm_name is the human-readable name of the SCM provider (e.g., "GitHub",
   * "GitLab")
   */
  scmName?: string;

  /**
   * supports_oauth2 indicates that the host supports OAuth2 authentication
   */
  supportsOauth2?: RunnerCheckAuthenticationForHostResponse.SupportsOauth2;

  /**
   * supports_pat indicates that the host supports Personal Access Token
   * authentication
   */
  supportsPat?: RunnerCheckAuthenticationForHostResponse.SupportsPat;
}

export namespace RunnerCheckAuthenticationForHostResponse {
  /**
   * supports_oauth2 indicates that the host supports OAuth2 authentication
   */
  export interface SupportsOauth2 {
    /**
     * auth_url is the URL where users can authenticate
     */
    authUrl?: string;

    /**
     * docs_url is the URL to the documentation explaining this authentication method
     */
    docsUrl?: string;
  }

  /**
   * supports_pat indicates that the host supports Personal Access Token
   * authentication
   */
  export interface SupportsPat {
    /**
     * create_url is the URL where users can create a new Personal Access Token
     */
    createUrl?: string;

    /**
     * docs_url is the URL to the documentation explaining PAT usage for this host
     */
    docsUrl?: string;

    /**
     * example is an example of a Personal Access Token
     */
    example?: string;

    /**
     * required_scopes is the list of permissions required for the Personal Access
     * Token
     */
    requiredScopes?: Array<string>;
  }
}

export interface RunnerCreateLogsTokenResponse {
  /**
   * access_token is the token that can be used to access the logs and support bundle
   * of the runner
   */
  accessToken: string;
}

export interface RunnerCreateRunnerTokenResponse {
  /**
   * @deprecated deprecated, will be removed. Use exchange_token instead.
   */
  accessToken?: string;

  /**
   * exchange_token is a one-time use token that should be exchanged by the runner
   * for an access token, using the IdentityService.ExchangeToken rpc. The token
   * expires after 24 hours.
   */
  exchangeToken?: string;
}

export interface RunnerParseContextURLResponse {
  git?: RunnerParseContextURLResponse.Git;

  issue?: RunnerParseContextURLResponse.Issue;

  originalContextUrl?: string;

  /**
   * @deprecated Deprecated: Use top-level PullRequest message instead
   */
  pr?: RunnerParseContextURLResponse.Pr;

  /**
   * project_ids is a list of projects to which the context URL belongs to.
   */
  projectIds?: Array<string>;

  /**
   * PullRequest represents pull request metadata from source control systems. This
   * message is used across workflow triggers, executions, and agent contexts to
   * maintain consistent PR information throughout the system.
   */
  pullRequest?: RunnerParseContextURLResponse.PullRequest;

  /**
   * scm_id is the unique identifier of the SCM provider (e.g., "github", "gitlab",
   * "bitbucket")
   */
  scmId?: string;
}

export namespace RunnerParseContextURLResponse {
  export interface Git {
    branch?: string;

    cloneUrl?: string;

    commit?: string;

    host?: string;

    owner?: string;

    repo?: string;

    tag?: string;

    upstreamRemoteUrl?: string;
  }

  export interface Issue {
    /**
     * id is the source system's ID of this issue, e.g. BNFRD-6100
     */
    id?: string;

    title?: string;
  }

  /**
   * @deprecated Deprecated: Use top-level PullRequest message instead
   */
  export interface Pr {
    id?: string;

    fromBranch?: string;

    title?: string;

    toBranch?: string;
  }

  /**
   * PullRequest represents pull request metadata from source control systems. This
   * message is used across workflow triggers, executions, and agent contexts to
   * maintain consistent PR information throughout the system.
   */
  export interface PullRequest {
    /**
     * Unique identifier from the source system (e.g., "123" for GitHub PR #123)
     */
    id?: string;

    /**
     * Author name as provided by the SCM system
     */
    author?: string;

    /**
     * Source branch name (the branch being merged from)
     */
    fromBranch?: string;

    /**
     * Repository information
     */
    repository?: PullRequest.Repository;

    /**
     * Pull request title
     */
    title?: string;

    /**
     * Target branch name (the branch being merged into)
     */
    toBranch?: string;

    /**
     * Pull request URL (e.g., "https://github.com/owner/repo/pull/123")
     */
    url?: string;
  }

  export namespace PullRequest {
    /**
     * Repository information
     */
    export interface Repository {
      cloneUrl?: string;

      host?: string;

      name?: string;

      owner?: string;
    }
  }
}

export interface RunnerSearchRepositoriesResponse {
  /**
   * Deprecated: Use pagination token instead. Total pages can be extracted from
   * token.
   */
  lastPage?: number;

  /**
   * Pagination information for the response. Token format:
   * "NEXT_PAGE/TOTAL_PAGES/TOTAL_COUNT" (e.g., "2/40/1000"). Use -1 for unknown
   * values (e.g., "2/-1/-1" when totals unavailable). Empty token means no more
   * pages.
   */
  pagination?: RunnerSearchRepositoriesResponse.Pagination;

  /**
   * List of repositories matching the search criteria
   */
  repositories?: Array<RunnerSearchRepositoriesResponse.Repository>;
}

export namespace RunnerSearchRepositoriesResponse {
  /**
   * Pagination information for the response. Token format:
   * "NEXT_PAGE/TOTAL_PAGES/TOTAL_COUNT" (e.g., "2/40/1000"). Use -1 for unknown
   * values (e.g., "2/-1/-1" when totals unavailable). Empty token means no more
   * pages.
   */
  export interface Pagination {
    /**
     * Token passed for retrieving the next set of results. Empty if there are no more
     * results
     */
    nextToken?: string;
  }

  export interface Repository {
    /**
     * Repository name (e.g., "my-project")
     */
    name?: string;

    /**
     * Repository URL (e.g., "https://github.com/owner/my-project")
     */
    url?: string;
  }
}

export interface RunnerCreateParams {
  /**
   * The runner's kind This field is optional and here for backwards-compatibility.
   * Use the provider field instead. If provider is set, the runner's kind will be
   * deduced from the provider. Only one of kind and provider must be set.
   */
  kind?: RunnerKind;

  /**
   * The runner name for humans
   */
  name?: string;

  /**
   * The specific implementation type of the runner This field is optional for
   * backwards compatibility but will be required in the future. When specified, kind
   * must not be specified (will be deduced from provider)
   */
  provider?: RunnerProvider;

  /**
   * The runner manager id specifies the runner manager for the managed runner. This
   * field is mandatory for managed runners, otheriwse should not be set.
   */
  runnerManagerId?: string;

  spec?: RunnerSpec;
}

export interface RunnerRetrieveParams {
  runnerId?: string;
}

export interface RunnerUpdateParams {
  /**
   * The runner's name which is shown to users
   */
  name?: string | null;

  /**
   * runner_id specifies which runner to be updated.
   *
   * +required
   */
  runnerId?: string;

  spec?: RunnerUpdateParams.Spec | null;
}

export namespace RunnerUpdateParams {
  export interface Spec {
    configuration?: Spec.Configuration | null;

    /**
     * desired_phase can currently only be updated on local-configuration runners, to
     * toggle whether local runners are allowed for running environments in the
     * organization. Set to:
     *
     * - ACTIVE to enable local runners.
     * - INACTIVE to disable all local runners. Existing local runners and their
     *   environments will stop, and cannot be started again until the desired_phase is
     *   set to ACTIVE. Use this carefully, as it will affect all users in the
     *   organization who use local runners.
     */
    desiredPhase?: RunnersAPI.RunnerPhase | null;
  }

  export namespace Spec {
    export interface Configuration {
      /**
       * auto_update indicates whether the runner should automatically update itself.
       */
      autoUpdate?: boolean | null;

      /**
       * devcontainer_image_cache_enabled controls whether the shared devcontainer build
       * cache is enabled for this runner.
       */
      devcontainerImageCacheEnabled?: boolean | null;

      /**
       * log_level is the log level for the runner
       */
      logLevel?: RunnersAPI.LogLevel | null;

      /**
       * metrics contains configuration for the runner's metrics collection
       */
      metrics?: Configuration.Metrics | null;

      /**
       * The release channel the runner is on
       */
      releaseChannel?: RunnersAPI.RunnerReleaseChannel | null;
    }

    export namespace Configuration {
      /**
       * metrics contains configuration for the runner's metrics collection
       */
      export interface Metrics {
        /**
         * enabled indicates whether the runner should collect metrics
         */
        enabled?: boolean | null;

        /**
         * password is the password to use for the metrics collector
         */
        password?: string | null;

        /**
         * url is the URL of the metrics collector
         */
        url?: string | null;

        /**
         * username is the username to use for the metrics collector
         */
        username?: string | null;
      }
    }
  }
}

export interface RunnerListParams extends RunnersPageParams {
  /**
   * Body param:
   */
  filter?: RunnerListParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing runners
   */
  pagination?: RunnerListParams.Pagination;
}

export namespace RunnerListParams {
  export interface Filter {
    /**
     * creator_ids filters the response to only runner created by specified users
     */
    creatorIds?: Array<string>;

    /**
     * kinds filters the response to only runners of the specified kinds
     */
    kinds?: Array<RunnersAPI.RunnerKind>;

    /**
     * providers filters the response to only runners of the specified providers
     */
    providers?: Array<RunnersAPI.RunnerProvider>;
  }

  /**
   * pagination contains the pagination options for listing runners
   */
  export interface Pagination {
    /**
     * Token for the next set of results that was returned as next_token of a
     * PaginationResponse
     */
    token?: string;

    /**
     * Page size is the maximum number of results to retrieve per page. Defaults to 25.
     * Maximum 100.
     */
    pageSize?: number;
  }
}

export interface RunnerDeleteParams {
  /**
   * force indicates whether the runner should be deleted forcefully. When force
   * deleting a Runner, all Environments on the runner are also force deleted and
   * regular Runner lifecycle is not respected. Force deleting can result in data
   * loss.
   */
  force?: boolean;

  runnerId?: string;
}

export interface RunnerCheckAuthenticationForHostParams {
  host?: string;

  runnerId?: string;
}

export interface RunnerCreateLogsTokenParams {
  /**
   * runner_id specifies the runner for which the logs token should be created.
   *
   * +required
   */
  runnerId?: string;
}

export interface RunnerCreateRunnerTokenParams {
  runnerId?: string;
}

export interface RunnerParseContextURLParams {
  contextUrl?: string;

  runnerId?: string;
}

export interface RunnerSearchRepositoriesParams {
  /**
   * @deprecated Maximum number of repositories to return. Default: 25, Maximum: 100
   * Deprecated: Use pagination.page_size instead
   */
  limit?: number;

  /**
   * Pagination parameters for repository search
   */
  pagination?: RunnerSearchRepositoriesParams.Pagination;

  runnerId?: string;

  /**
   * The SCM's host to retrieve repositories from
   */
  scmHost?: string;

  /**
   * Search mode determines how search_string is interpreted
   */
  searchMode?: SearchMode;

  /**
   * Search query - interpretation depends on search_mode
   */
  searchString?: string;
}

export namespace RunnerSearchRepositoriesParams {
  /**
   * Pagination parameters for repository search
   */
  export interface Pagination {
    /**
     * Token for the next set of results that was returned as next_token of a
     * PaginationResponse
     */
    token?: string;

    /**
     * Page size is the maximum number of results to retrieve per page. Defaults to 25.
     * Maximum 100.
     */
    pageSize?: number;
  }
}

Runners.Configurations = Configurations;
Runners.Policies = Policies;

export declare namespace Runners {
  export {
    type GatewayInfo as GatewayInfo,
    type LogLevel as LogLevel,
    type MetricsConfiguration as MetricsConfiguration,
    type Runner as Runner,
    type RunnerCapability as RunnerCapability,
    type RunnerConfiguration as RunnerConfiguration,
    type RunnerKind as RunnerKind,
    type RunnerPhase as RunnerPhase,
    type RunnerProvider as RunnerProvider,
    type RunnerReleaseChannel as RunnerReleaseChannel,
    type RunnerSpec as RunnerSpec,
    type RunnerStatus as RunnerStatus,
    type RunnerVariant as RunnerVariant,
    type SearchMode as SearchMode,
    type RunnerCreateResponse as RunnerCreateResponse,
    type RunnerRetrieveResponse as RunnerRetrieveResponse,
    type RunnerUpdateResponse as RunnerUpdateResponse,
    type RunnerDeleteResponse as RunnerDeleteResponse,
    type RunnerCheckAuthenticationForHostResponse as RunnerCheckAuthenticationForHostResponse,
    type RunnerCreateLogsTokenResponse as RunnerCreateLogsTokenResponse,
    type RunnerCreateRunnerTokenResponse as RunnerCreateRunnerTokenResponse,
    type RunnerParseContextURLResponse as RunnerParseContextURLResponse,
    type RunnerSearchRepositoriesResponse as RunnerSearchRepositoriesResponse,
    type RunnersRunnersPage as RunnersRunnersPage,
    type RunnerCreateParams as RunnerCreateParams,
    type RunnerRetrieveParams as RunnerRetrieveParams,
    type RunnerUpdateParams as RunnerUpdateParams,
    type RunnerListParams as RunnerListParams,
    type RunnerDeleteParams as RunnerDeleteParams,
    type RunnerCheckAuthenticationForHostParams as RunnerCheckAuthenticationForHostParams,
    type RunnerCreateLogsTokenParams as RunnerCreateLogsTokenParams,
    type RunnerCreateRunnerTokenParams as RunnerCreateRunnerTokenParams,
    type RunnerParseContextURLParams as RunnerParseContextURLParams,
    type RunnerSearchRepositoriesParams as RunnerSearchRepositoriesParams,
  };

  export {
    Configurations as Configurations,
    type EnvironmentClassValidationResult as EnvironmentClassValidationResult,
    type FieldValidationError as FieldValidationError,
    type ScmIntegrationValidationResult as ScmIntegrationValidationResult,
    type ConfigurationValidateResponse as ConfigurationValidateResponse,
    type ConfigurationValidateParams as ConfigurationValidateParams,
  };

  export {
    Policies as Policies,
    type RunnerPolicy as RunnerPolicy,
    type RunnerRole as RunnerRole,
    type PolicyCreateResponse as PolicyCreateResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyDeleteResponse as PolicyDeleteResponse,
    type RunnerPoliciesPoliciesPage as RunnerPoliciesPoliciesPage,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
  };
}
