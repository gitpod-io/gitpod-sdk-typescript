// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
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
import { APIPromise } from '../../api-promise';
import { PagePromise, RunnersPage, type RunnersPageParams } from '../../pagination';
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
   */
  checkAuthenticationForHost(
    body: RunnerCheckAuthenticationForHostParams,
    options?: RequestOptions,
  ): APIPromise<RunnerCheckAuthenticationForHostResponse> {
    return this._client.post('/gitpod.v1.RunnerService/CheckAuthenticationForHost', { body, ...options });
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
   */
  parseContextURL(
    body: RunnerParseContextURLParams,
    options?: RequestOptions,
  ): APIPromise<RunnerParseContextURLResponse> {
    return this._client.post('/gitpod.v1.RunnerService/ParseContextURL', { body, ...options });
  }
}

export type RunnersRunnersPage = RunnersPage<Runner>;

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
  | 'RUNNER_CAPABILITY_SECRET_CONTAINER_REGISTRY';

export interface RunnerConfiguration {
  /**
   * auto_update indicates whether the runner should automatically update itself.
   */
  autoUpdate?: boolean;

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
  | 'RUNNER_PROVIDER_DESKTOP_MAC';

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
   * region is the region the runner is running in, if applicable.
   */
  region?: string;

  systemDetails?: string;

  /**
   * Time when the status was last udpated.
   */
  updatedAt?: string;

  version?: string;
}

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

  originalContextUrl?: string;
}

export namespace RunnerParseContextURLResponse {
  export interface Git {
    branch?: string;

    cloneUrl?: string;

    commit?: string;

    host?: string;

    owner?: string;

    repo?: string;

    upstreamRemoteUrl?: string;
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
       * The release channel the runner is on
       */
      releaseChannel?: RunnersAPI.RunnerReleaseChannel | null;
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

export interface RunnerCreateRunnerTokenParams {
  runnerId?: string;
}

export interface RunnerParseContextURLParams {
  contextUrl?: string;

  runnerId?: string;
}

Runners.Configurations = Configurations;
Runners.Policies = Policies;

export declare namespace Runners {
  export {
    type Runner as Runner,
    type RunnerCapability as RunnerCapability,
    type RunnerConfiguration as RunnerConfiguration,
    type RunnerKind as RunnerKind,
    type RunnerPhase as RunnerPhase,
    type RunnerProvider as RunnerProvider,
    type RunnerReleaseChannel as RunnerReleaseChannel,
    type RunnerSpec as RunnerSpec,
    type RunnerStatus as RunnerStatus,
    type RunnerCreateResponse as RunnerCreateResponse,
    type RunnerRetrieveResponse as RunnerRetrieveResponse,
    type RunnerUpdateResponse as RunnerUpdateResponse,
    type RunnerDeleteResponse as RunnerDeleteResponse,
    type RunnerCheckAuthenticationForHostResponse as RunnerCheckAuthenticationForHostResponse,
    type RunnerCreateRunnerTokenResponse as RunnerCreateRunnerTokenResponse,
    type RunnerParseContextURLResponse as RunnerParseContextURLResponse,
    type RunnersRunnersPage as RunnersRunnersPage,
    type RunnerCreateParams as RunnerCreateParams,
    type RunnerRetrieveParams as RunnerRetrieveParams,
    type RunnerUpdateParams as RunnerUpdateParams,
    type RunnerListParams as RunnerListParams,
    type RunnerDeleteParams as RunnerDeleteParams,
    type RunnerCheckAuthenticationForHostParams as RunnerCheckAuthenticationForHostParams,
    type RunnerCreateRunnerTokenParams as RunnerCreateRunnerTokenParams,
    type RunnerParseContextURLParams as RunnerParseContextURLParams,
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
