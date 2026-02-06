// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnvironmentsAPI from './environments';
import * as Shared from '../shared';
import * as ClassesAPI from './classes';
import { ClassListParams, Classes } from './classes';
import * as ProjectsAPI from '../projects/projects';
import * as RunnersAPI from '../runners/runners';
import * as AutomationsAPI from './automations/automations';
import {
  AutomationUpsertParams,
  AutomationUpsertResponse,
  Automations,
  AutomationsFile as AutomationsAPIAutomationsFile,
} from './automations/automations';
import { APIPromise } from '../../core/api-promise';
import { EnvironmentsPage, type EnvironmentsPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Environments extends APIResource {
  automations: AutomationsAPI.Automations = new AutomationsAPI.Automations(this._client);
  classes: ClassesAPI.Classes = new ClassesAPI.Classes(this._client);

  /**
   * Creates a development environment from a context URL (e.g. Git repository) and
   * starts it.
   *
   * The `class` field must be a valid environment class ID. You can find a list of
   * available environment classes with the `ListEnvironmentClasses` method.
   *
   * ### Examples
   *
   * - Create from context URL:
   *
   *   Creates an environment from a Git repository URL with default settings.
   *
   *   ```yaml
   *   spec:
   *     machine:
   *       class: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *     content:
   *       initializer:
   *         specs:
   *           - contextUrl:
   *               url: "https://github.com/gitpod-io/gitpod"
   *   ```
   *
   * - Create from Git repository:
   *
   *   Creates an environment from a Git repository with specific branch targeting.
   *
   *   ```yaml
   *   spec:
   *     machine:
   *       class: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *     content:
   *       initializer:
   *         specs:
   *           - git:
   *               remoteUri: "https://github.com/gitpod-io/gitpod"
   *               cloneTarget: "main"
   *               targetMode: "CLONE_TARGET_MODE_REMOTE_BRANCH"
   *   ```
   *
   * - Create with custom timeout and ports:
   *
   *   Creates an environment with custom inactivity timeout and exposed port
   *   configuration.
   *
   *   ```yaml
   *   spec:
   *     machine:
   *       class: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *     content:
   *       initializer:
   *         specs:
   *           - contextUrl:
   *               url: "https://github.com/gitpod-io/gitpod"
   *     timeout:
   *       disconnected: "7200s" # 2 hours in seconds
   *     ports:
   *       - port: 3000
   *         admission: "ADMISSION_LEVEL_EVERYONE"
   *         name: "Web App"
   *   ```
   *
   * @example
   * ```ts
   * const environment = await client.environments.create({
   *   spec: {
   *     content: {
   *       initializer: {
   *         specs: [
   *           {
   *             contextUrl: {
   *               url: 'https://github.com/gitpod-io/gitpod',
   *             },
   *           },
   *         ],
   *       },
   *     },
   *     machine: {
   *       class: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *     },
   *   },
   * });
   * ```
   */
  create(body: EnvironmentCreateParams, options?: RequestOptions): APIPromise<EnvironmentCreateResponse> {
    return this._client.post('/gitpod.v1.EnvironmentService/CreateEnvironment', { body, ...options });
  }

  /**
   * Gets details about a specific environment including its status, configuration,
   * and context URL.
   *
   * Use this method to:
   *
   * - Check if an environment is ready to use
   * - Get connection details for IDE and exposed ports
   * - Monitor environment health and resource usage
   * - Debug environment setup issues
   *
   * ### Examples
   *
   * - Get environment details:
   *
   *   Retrieves detailed information about a specific environment using its unique
   *   identifier.
   *
   *   ```yaml
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   ```
   *
   * @example
   * ```ts
   * const environment = await client.environments.retrieve({
   *   environmentId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   * });
   * ```
   */
  retrieve(
    body: EnvironmentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentRetrieveResponse> {
    return this._client.post('/gitpod.v1.EnvironmentService/GetEnvironment', { body, ...options });
  }

  /**
   * Updates an environment's configuration while it is running.
   *
   * Updates are limited to:
   *
   * - Git credentials (username, email)
   * - SSH public keys
   * - Content initialization
   * - Port configurations
   * - Automation files
   * - Environment timeouts
   *
   * ### Examples
   *
   * - Update Git credentials:
   *
   *   Updates the Git configuration for the environment.
   *
   *   ```yaml
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   spec:
   *     content:
   *       gitUsername: "example-user"
   *       gitEmail: "user@example.com"
   *   ```
   *
   * - Add SSH public key:
   *
   *   Adds a new SSH public key for authentication.
   *
   *   ```yaml
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   spec:
   *     sshPublicKeys:
   *       - id: "0194b7c1-c954-718d-91a4-9a742aa5fc11"
   *         value: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI..."
   *   ```
   *
   * - Update content session:
   *
   *   Updates the content session identifier for the environment.
   *
   *   ```yaml
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   spec:
   *     content:
   *       session: "0194b7c1-c954-718d-91a4-9a742aa5fc11"
   *   ```
   *
   * Note: Machine class changes require stopping the environment and creating a new
   * one.
   *
   * @example
   * ```ts
   * const environment = await client.environments.update({
   *   environmentId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   *   spec: {
   *     sshPublicKeys: [
   *       {
   *         id: '0194b7c1-c954-718d-91a4-9a742aa5fc11',
   *         value: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI...',
   *       },
   *     ],
   *   },
   * });
   * ```
   */
  update(body: EnvironmentUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentService/UpdateEnvironment', { body, ...options });
  }

  /**
   * Lists all environments matching the specified criteria.
   *
   * Use this method to find and monitor environments across your organization.
   * Results are ordered by creation time with newest environments first.
   *
   * ### Examples
   *
   * - List running environments for a project:
   *
   *   Retrieves all running environments for a specific project with pagination.
   *
   *   ```yaml
   *   filter:
   *     statusPhases: ["ENVIRONMENT_PHASE_RUNNING"]
   *     projectIds: ["b0e12f6c-4c67-429d-a4a6-d9838b5da047"]
   *   pagination:
   *     pageSize: 10
   *   ```
   *
   * - List all environments for a specific runner:
   *
   *   Filters environments by runner ID and creator ID.
   *
   *   ```yaml
   *   filter:
   *     runnerIds: ["e6aa9c54-89d3-42c1-ac31-bd8d8f1concentrate"]
   *     creatorIds: ["f53d2330-3795-4c5d-a1f3-453121af9c60"]
   *   ```
   *
   * - List stopped and deleted environments:
   *
   *   Retrieves all environments in stopped or deleted state.
   *
   *   ```yaml
   *   filter:
   *     statusPhases: ["ENVIRONMENT_PHASE_STOPPED", "ENVIRONMENT_PHASE_DELETED"]
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const environment of client.environments.list({
   *   filter: {
   *     creatorIds: ['f53d2330-3795-4c5d-a1f3-453121af9c60'],
   *     runnerIds: [
   *       'e6aa9c54-89d3-42c1-ac31-bd8d8f1concentrate',
   *     ],
   *   },
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    params: EnvironmentListParams,
    options?: RequestOptions,
  ): PagePromise<EnvironmentsEnvironmentsPage, Environment> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.EnvironmentService/ListEnvironments',
      EnvironmentsPage<Environment>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Permanently deletes an environment.
   *
   * Running environments are automatically stopped before deletion. If force is
   * true, the environment is deleted immediately without graceful shutdown.
   *
   * ### Examples
   *
   * - Delete with graceful shutdown:
   *
   *   Deletes an environment after gracefully stopping it.
   *
   *   ```yaml
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   force: false
   *   ```
   *
   * - Force delete:
   *
   *   Immediately deletes an environment without waiting for graceful shutdown.
   *
   *   ```yaml
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   force: true
   *   ```
   *
   * @example
   * ```ts
   * const environment = await client.environments.delete({
   *   environmentId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   * });
   * ```
   */
  delete(body: EnvironmentDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentService/DeleteEnvironment', { body, ...options });
  }

  /**
   * Creates an access token for the environment.
   *
   * Generated tokens are valid for one hour and provide environment-specific access
   * permissions. The token is scoped to a specific environment.
   *
   * ### Examples
   *
   * - Generate environment token:
   *
   *   Creates a temporary access token for accessing an environment.
   *
   *   ```yaml
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   ```
   *
   * @example
   * ```ts
   * const response =
   *   await client.environments.createEnvironmentToken({
   *     environmentId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   *   });
   * ```
   */
  createEnvironmentToken(
    body: EnvironmentCreateEnvironmentTokenParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentCreateEnvironmentTokenResponse> {
    return this._client.post('/gitpod.v1.EnvironmentService/CreateEnvironmentAccessToken', {
      body,
      ...options,
    });
  }

  /**
   * Creates an environment from an existing project configuration and starts it.
   *
   * This method uses project settings as defaults but allows overriding specific
   * configurations. Project settings take precedence over default configurations,
   * while custom specifications in the request override project settings.
   *
   * ### Examples
   *
   * - Create with project defaults:
   *
   *   Creates an environment using all default settings from the project
   *   configuration.
   *
   *   ```yaml
   *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   ```
   *
   * - Create with custom compute resources:
   *
   *   Creates an environment from project with custom machine class and timeout
   *   settings.
   *
   *   ```yaml
   *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   spec:
   *     machine:
   *       class: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *     timeout:
   *       disconnected: "14400s" # 4 hours in seconds
   *   ```
   *
   * @example
   * ```ts
   * const response =
   *   await client.environments.createFromProject({
   *     projectId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *     spec: {
   *       machine: {
   *         class: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *       },
   *       timeout: { disconnected: '14400s' },
   *     },
   *   });
   * ```
   */
  createFromProject(
    body: EnvironmentCreateFromProjectParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentCreateFromProjectResponse> {
    return this._client.post('/gitpod.v1.EnvironmentService/CreateEnvironmentFromProject', {
      body,
      ...options,
    });
  }

  /**
   * Creates an access token for retrieving environment logs.
   *
   * Generated tokens are valid for one hour and provide read-only access to the
   * environment's logs.
   *
   * ### Examples
   *
   * - Generate logs token:
   *
   *   Creates a temporary access token for retrieving environment logs.
   *
   *   ```yaml
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.environments.createLogsToken({
   *   environmentId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   * });
   * ```
   */
  createLogsToken(
    body: EnvironmentCreateLogsTokenParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentCreateLogsTokenResponse> {
    return this._client.post('/gitpod.v1.EnvironmentService/CreateEnvironmentLogsToken', {
      body,
      ...options,
    });
  }

  /**
   * Records environment activity to prevent automatic shutdown.
   *
   * Activity signals should be sent every 5 minutes while the environment is
   * actively being used. The source must be between 3-80 characters.
   *
   * ### Examples
   *
   * - Signal VS Code activity:
   *
   *   Records VS Code editor activity to prevent environment shutdown.
   *
   *   ```yaml
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   activitySignal:
   *     source: "VS Code"
   *     timestamp: "2025-02-12T14:30:00Z"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.environments.markActive({
   *   activitySignal: {
   *     source: 'VS Code',
   *     timestamp: '2025-02-12T14:30:00Z',
   *   },
   *   environmentId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   * });
   * ```
   */
  markActive(body: EnvironmentMarkActiveParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentService/MarkEnvironmentActive', { body, ...options });
  }

  /**
   * Starts a stopped environment.
   *
   * Use this method to resume work on a previously stopped environment. The
   * environment retains its configuration and workspace content from when it was
   * stopped.
   *
   * ### Examples
   *
   * - Start an environment:
   *
   *   Resumes a previously stopped environment with its existing configuration.
   *
   *   ```yaml
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.environments.start({
   *   environmentId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   * });
   * ```
   */
  start(body: EnvironmentStartParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentService/StartEnvironment', { body, ...options });
  }

  /**
   * Stops a running environment.
   *
   * Use this method to pause work while preserving the environment's state. The
   * environment can be resumed later using StartEnvironment.
   *
   * ### Examples
   *
   * - Stop an environment:
   *
   *   Gracefully stops a running environment while preserving its state.
   *
   *   ```yaml
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.environments.stop({
   *   environmentId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   * });
   * ```
   */
  stop(body: EnvironmentStopParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentService/StopEnvironment', { body, ...options });
  }

  /**
   * Unarchives an environment.
   *
   * ### Examples
   *
   * - Unarchive an environment:
   *
   *   ```yaml
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.environments.unarchive({
   *   environmentId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   * });
   * ```
   */
  unarchive(body: EnvironmentUnarchiveParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentService/UnarchiveEnvironment', { body, ...options });
  }
}

export type EnvironmentsEnvironmentsPage = EnvironmentsPage<Environment>;

/**
 * Admission level describes who can access an environment instance and its ports.
 */
export type AdmissionLevel =
  | 'ADMISSION_LEVEL_UNSPECIFIED'
  | 'ADMISSION_LEVEL_OWNER_ONLY'
  | 'ADMISSION_LEVEL_EVERYONE'
  | 'ADMISSION_LEVEL_ORGANIZATION'
  | 'ADMISSION_LEVEL_CREATOR_ONLY';

/**
 * +resource get environment
 */
export interface Environment {
  /**
   * ID is a unique identifier of this environment. No other environment with the
   * same name must be managed by this environment manager
   */
  id: string;

  /**
   * Metadata is data associated with this environment that's required for other
   * parts of Gitpod to function
   */
  metadata?: EnvironmentMetadata;

  /**
   * Spec is the configuration of the environment that's required for the runner to
   * start the environment
   */
  spec?: EnvironmentSpec;

  /**
   * Status is the current status of the environment
   */
  status?: EnvironmentStatus;
}

/**
 * EnvironmentActivitySignal used to signal activity for an environment.
 */
export interface EnvironmentActivitySignal {
  /**
   * source of the activity signal, such as "VS Code", "SSH", or "Automations". It
   * should be a human-readable string that describes the source of the activity
   * signal.
   */
  source?: string;

  /**
   * timestamp of when the activity was observed by the source. Only reported every 5
   * minutes. Zero value means no activity was observed.
   */
  timestamp?: string;
}

/**
 * EnvironmentMetadata is data associated with an environment that's required for
 * other parts of the system to function
 */
export interface EnvironmentMetadata {
  /**
   * annotations are key/value pairs that gets attached to the environment.
   * +internal - not yet implemented
   */
  annotations?: { [key: string]: string };

  /**
   * Time when the Environment was archived. If not set, the environment is not
   * archived.
   */
  archivedAt?: string;

  /**
   * Time when the Environment was created.
   */
  createdAt?: string;

  /**
   * creator is the identity of the creator of the environment
   */
  creator?: Shared.Subject;

  /**
   * Time when the Environment was last started (i.e. CreateEnvironment or
   * StartEnvironment were called).
   */
  lastStartedAt?: string;

  /**
   * name is the name of the environment as specified by the user
   */
  name?: string;

  /**
   * organization_id is the ID of the organization that contains the environment
   */
  organizationId?: string;

  /**
   * original_context_url is the normalized URL from which the environment was
   * created
   */
  originalContextUrl?: string;

  /**
   * prebuild_id is the ID of the prebuild this environment was created from. Only
   * set if the environment was created from a prebuild.
   */
  prebuildId?: string | null;

  /**
   * If the Environment was started from a project, the project_id will reference the
   * project.
   */
  projectId?: string;

  /**
   * role is the role of the environment
   */
  role?: EnvironmentRole;

  /**
   * Runner is the ID of the runner that runs this environment.
   */
  runnerId?: string;
}

export type EnvironmentPhase =
  | 'ENVIRONMENT_PHASE_UNSPECIFIED'
  | 'ENVIRONMENT_PHASE_CREATING'
  | 'ENVIRONMENT_PHASE_STARTING'
  | 'ENVIRONMENT_PHASE_RUNNING'
  | 'ENVIRONMENT_PHASE_UPDATING'
  | 'ENVIRONMENT_PHASE_STOPPING'
  | 'ENVIRONMENT_PHASE_STOPPED'
  | 'ENVIRONMENT_PHASE_DELETING'
  | 'ENVIRONMENT_PHASE_DELETED';

/**
 * EnvironmentRole represents the role of an environment
 */
export type EnvironmentRole =
  | 'ENVIRONMENT_ROLE_UNSPECIFIED'
  | 'ENVIRONMENT_ROLE_DEFAULT'
  | 'ENVIRONMENT_ROLE_PREBUILD'
  | 'ENVIRONMENT_ROLE_WORKFLOW';

/**
 * EnvironmentSpec specifies the configuration of an environment for an environment
 * start
 */
export interface EnvironmentSpec {
  /**
   * admission controlls who can access the environment and its ports.
   */
  admission?: AdmissionLevel;

  /**
   * automations_file is the automations file spec of the environment
   */
  automationsFile?: EnvironmentSpec.AutomationsFile;

  /**
   * content is the content spec of the environment
   */
  content?: EnvironmentSpec.Content;

  /**
   * Phase is the desired phase of the environment
   */
  desiredPhase?: EnvironmentPhase;

  /**
   * devcontainer is the devcontainer spec of the environment
   */
  devcontainer?: EnvironmentSpec.Devcontainer;

  /**
   * kernel_controls_config configures kernel-level controls for this environment
   */
  kernelControlsConfig?: KernelControlsConfig;

  /**
   * machine is the machine spec of the environment
   */
  machine?: EnvironmentSpec.Machine;

  /**
   * ports is the set of ports which ought to be exposed to your network
   */
  ports?: Array<EnvironmentSpec.Port>;

  /**
   * secrets are confidential data that is mounted into the environment
   */
  secrets?: Array<EnvironmentSpec.Secret>;

  /**
   * version of the spec. The value of this field has no semantic meaning (e.g. don't
   * interpret it as as a timestamp), but it can be used to impose a partial order.
   * If a.spec_version < b.spec_version then a was the spec before b.
   */
  specVersion?: string;

  /**
   * ssh_public_keys are the public keys used to ssh into the environment
   */
  sshPublicKeys?: Array<EnvironmentSpec.SSHPublicKey>;

  /**
   * Timeout configures the environment timeout
   */
  timeout?: EnvironmentSpec.Timeout;

  /**
   * workflow_action_id is an optional reference to the workflow execution action
   * that created this environment. Used for tracking and event correlation.
   */
  workflowActionId?: string | null;
}

export namespace EnvironmentSpec {
  /**
   * automations_file is the automations file spec of the environment
   */
  export interface AutomationsFile {
    /**
     * automations_file_path is the path to the automations file that is applied in the
     * environment, relative to the repo root. path must not be absolute (start with a
     * /):
     *
     * ```
     * this.matches('^$|^[^/].*')
     * ```
     */
    automationsFilePath?: string;

    session?: string;

    /**
     * trigger_filter specifies which automation triggers should execute. When set,
     * only automations matching these triggers will run. If empty/unset, all triggers
     * are evaluated normally.
     */
    triggerFilter?: Array<Shared.AutomationTrigger>;
  }

  /**
   * content is the content spec of the environment
   */
  export interface Content {
    /**
     * The Git email address
     */
    gitEmail?: string;

    /**
     * The Git username
     */
    gitUsername?: string;

    /**
     * initializer configures how the environment is to be initialized
     */
    initializer?: ProjectsAPI.EnvironmentInitializer;

    session?: string;
  }

  /**
   * devcontainer is the devcontainer spec of the environment
   */
  export interface Devcontainer {
    /**
     * default_devcontainer_image is the default image that is used to start the
     * devcontainer if no devcontainer config file is found
     */
    defaultDevcontainerImage?: string;

    /**
     * devcontainer_file_path is the path to the devcontainer file relative to the repo
     * root path must not be absolute (start with a /):
     *
     * ```
     * this.matches('^$|^[^/].*')
     * ```
     */
    devcontainerFilePath?: string;

    /**
     * Experimental: dotfiles is the dotfiles configuration of the devcontainer
     */
    dotfiles?: Devcontainer.Dotfiles;

    /**
     * lifecycle_stage controls which devcontainer lifecycle commands are executed.
     * Defaults to FULL if not specified.
     */
    lifecycleStage?: 'LIFECYCLE_STAGE_UNSPECIFIED' | 'LIFECYCLE_STAGE_FULL' | 'LIFECYCLE_STAGE_PREBUILD';

    session?: string;
  }

  export namespace Devcontainer {
    /**
     * Experimental: dotfiles is the dotfiles configuration of the devcontainer
     */
    export interface Dotfiles {
      /**
       * URL of a dotfiles Git repository (e.g. https://github.com/owner/repository)
       */
      repository: string;
    }
  }

  /**
   * machine is the machine spec of the environment
   */
  export interface Machine {
    /**
     * Class denotes the class of the environment we ought to start
     */
    class?: string;

    session?: string;
  }

  export interface Port {
    /**
     * policy of this port
     */
    admission?: EnvironmentsAPI.AdmissionLevel;

    /**
     * name of this port
     */
    name?: string;

    /**
     * port number
     */
    port?: number;

    /**
     * protocol for communication (Gateway proxy → user environment service). this
     * setting only affects the protocol used between Gateway and user environment
     * services.
     */
    protocol?: 'PROTOCOL_UNSPECIFIED' | 'PROTOCOL_HTTP' | 'PROTOCOL_HTTPS';
  }

  export interface Secret {
    /**
     * id is the unique identifier of the secret.
     */
    id?: string;

    /**
     * api_only indicates the secret is only available via API/CLI. These secrets are
     * resolved but NOT automatically injected into services or devcontainers.
     */
    apiOnly?: boolean;

    /**
     * container_registry_basic_auth_host is the hostname of the container registry
     * that supports basic auth
     */
    containerRegistryBasicAuthHost?: string;

    environmentVariable?: string;

    /**
     * file_path is the path inside the devcontainer where the secret is mounted
     */
    filePath?: string;

    gitCredentialHost?: string;

    /**
     * name is the human readable description of the secret
     */
    name?: string;

    /**
     * session indicated the current session of the secret. When the session does not
     * change, secrets are not reloaded in the environment.
     */
    session?: string;

    /**
     * source is the source of the secret, for now control-plane or runner
     */
    source?: string;

    /**
     * source_ref into the source, in case of control-plane this is uuid of the secret
     */
    sourceRef?: string;
  }

  export interface SSHPublicKey {
    /**
     * id is the unique identifier of the public key
     */
    id?: string;

    /**
     * value is the actual public key in the public key file format
     */
    value?: string;
  }

  /**
   * Timeout configures the environment timeout
   */
  export interface Timeout {
    /**
     * inacitivity is the maximum time of disconnection before the environment is
     * stopped or paused. Minimum duration is 30 minutes. Set to 0 to disable.
     */
    disconnected?: string;
  }
}

/**
 * EnvironmentStatus describes an environment status
 */
export interface EnvironmentStatus {
  /**
   * activity_signal is the last activity signal for the environment.
   */
  activitySignal?: EnvironmentActivitySignal;

  /**
   * automations_file contains the status of the automations file.
   */
  automationsFile?: EnvironmentStatus.AutomationsFile;

  /**
   * content contains the status of the environment content.
   */
  content?: EnvironmentStatus.Content;

  /**
   * devcontainer contains the status of the devcontainer.
   */
  devcontainer?: EnvironmentStatus.Devcontainer;

  /**
   * environment_url contains the URL at which the environment can be accessed. This
   * field is only set if the environment is running.
   */
  environmentUrls?: EnvironmentStatus.EnvironmentURLs;

  /**
   * failure_message summarises why the environment failed to operate. If this is
   * non-empty the environment has failed to operate and will likely transition to a
   * stopped state.
   */
  failureMessage?: Array<string>;

  /**
   * machine contains the status of the environment machine
   */
  machine?: EnvironmentStatus.Machine;

  /**
   * the phase of an environment is a simple, high-level summary of where the
   * environment is in its lifecycle
   */
  phase?: EnvironmentPhase;

  /**
   * runner_ack contains the acknowledgement from the runner that is has received the
   * environment spec.
   */
  runnerAck?: EnvironmentStatus.RunnerAck;

  /**
   * secrets contains the status of the environment secrets
   */
  secrets?: Array<EnvironmentStatus.Secret>;

  /**
   * ssh_public_keys contains the status of the environment ssh public keys
   */
  sshPublicKeys?: Array<EnvironmentStatus.SSHPublicKey>;

  /**
   * version of the status update. Environment instances themselves are unversioned,
   * but their status has different versions. The value of this field has no semantic
   * meaning (e.g. don't interpret it as as a timestamp), but it can be used to
   * impose a partial order. If a.status_version < b.status_version then a was the
   * status before b.
   */
  statusVersion?: string;

  /**
   * warning_message contains warnings, e.g. when the environment is present but not
   * in the expected state.
   */
  warningMessage?: Array<string>;
}

export namespace EnvironmentStatus {
  /**
   * automations_file contains the status of the automations file.
   */
  export interface AutomationsFile {
    /**
     * automations_file_path is the path to the automations file relative to the repo
     * root.
     */
    automationsFilePath?: string;

    /**
     * automations_file_presence indicates how an automations file is present in the
     * environment.
     */
    automationsFilePresence?:
      | 'PRESENCE_UNSPECIFIED'
      | 'PRESENCE_ABSENT'
      | 'PRESENCE_DISCOVERED'
      | 'PRESENCE_SPECIFIED';

    /**
     * failure_message contains the reason the automations file failed to be applied.
     * This is only set if the phase is FAILED.
     */
    failureMessage?: string;

    /**
     * phase is the current phase of the automations file.
     */
    phase?:
      | 'CONTENT_PHASE_UNSPECIFIED'
      | 'CONTENT_PHASE_CREATING'
      | 'CONTENT_PHASE_INITIALIZING'
      | 'CONTENT_PHASE_READY'
      | 'CONTENT_PHASE_UPDATING'
      | 'CONTENT_PHASE_FAILED'
      | 'CONTENT_PHASE_UNAVAILABLE';

    /**
     * session is the automations file session that is currently applied in the
     * environment.
     */
    session?: string;

    /**
     * warning_message contains warnings, e.g. when no triggers are defined in the
     * automations file.
     */
    warningMessage?: string;
  }

  /**
   * content contains the status of the environment content.
   */
  export interface Content {
    /**
     * content_location_in_machine is the location of the content in the machine
     */
    contentLocationInMachine?: string;

    /**
     * failure_message contains the reason the content initialization failed.
     */
    failureMessage?: string;

    /**
     * git is the Git working copy status of the environment. Note: this is a
     * best-effort field and more often than not will not be present. Its absence does
     * not indicate the absence of a working copy.
     */
    git?: Content.Git;

    /**
     * phase is the current phase of the environment content
     */
    phase?:
      | 'CONTENT_PHASE_UNSPECIFIED'
      | 'CONTENT_PHASE_CREATING'
      | 'CONTENT_PHASE_INITIALIZING'
      | 'CONTENT_PHASE_READY'
      | 'CONTENT_PHASE_UPDATING'
      | 'CONTENT_PHASE_FAILED'
      | 'CONTENT_PHASE_UNAVAILABLE';

    /**
     * session is the session that is currently active in the environment.
     */
    session?: string;

    /**
     * warning_message contains warnings, e.g. when the content is present but not in
     * the expected state.
     */
    warningMessage?: string;
  }

  export namespace Content {
    /**
     * git is the Git working copy status of the environment. Note: this is a
     * best-effort field and more often than not will not be present. Its absence does
     * not indicate the absence of a working copy.
     */
    export interface Git {
      /**
       * branch is branch we're currently on
       */
      branch?: string;

      /**
       * changed_files is an array of changed files in the environment, possibly
       * truncated
       */
      changedFiles?: Array<Git.ChangedFile>;

      /**
       * clone_url is the repository url as you would pass it to "git clone". Only HTTPS
       * clone URLs are supported.
       */
      cloneUrl?: string;

      /**
       * latest_commit is the most recent commit on the current branch
       */
      latestCommit?: string;

      totalChangedFiles?: number;

      /**
       * the total number of unpushed changes
       */
      totalUnpushedCommits?: number;

      /**
       * unpushed_commits is an array of unpushed changes in the environment, possibly
       * truncated
       */
      unpushedCommits?: Array<string>;
    }

    export namespace Git {
      export interface ChangedFile {
        /**
         * ChangeType is the type of change that happened to the file
         */
        changeType?:
          | 'CHANGE_TYPE_UNSPECIFIED'
          | 'CHANGE_TYPE_ADDED'
          | 'CHANGE_TYPE_MODIFIED'
          | 'CHANGE_TYPE_DELETED'
          | 'CHANGE_TYPE_RENAMED'
          | 'CHANGE_TYPE_COPIED'
          | 'CHANGE_TYPE_UPDATED_BUT_UNMERGED'
          | 'CHANGE_TYPE_UNTRACKED';

        /**
         * path is the path of the file
         */
        path?: string;
      }
    }
  }

  /**
   * devcontainer contains the status of the devcontainer.
   */
  export interface Devcontainer {
    /**
     * container_id is the ID of the container.
     */
    containerId?: string;

    /**
     * container_name is the name of the container that is used to connect to the
     * devcontainer
     */
    containerName?: string;

    /**
     * devcontainerconfig_in_sync indicates if the devcontainer is up to date w.r.t.
     * the devcontainer config file.
     */
    devcontainerconfigInSync?: boolean;

    /**
     * devcontainer_file_path is the path to the devcontainer file relative to the repo
     * root
     */
    devcontainerFilePath?: string;

    /**
     * devcontainer_file_presence indicates how the devcontainer file is present in the
     * repo.
     */
    devcontainerFilePresence?:
      | 'PRESENCE_UNSPECIFIED'
      | 'PRESENCE_GENERATED'
      | 'PRESENCE_DISCOVERED'
      | 'PRESENCE_SPECIFIED';

    /**
     * failure_message contains the reason the devcontainer failed to operate.
     */
    failureMessage?: string;

    /**
     * phase is the current phase of the devcontainer
     */
    phase?: 'PHASE_UNSPECIFIED' | 'PHASE_CREATING' | 'PHASE_RUNNING' | 'PHASE_STOPPED' | 'PHASE_FAILED';

    /**
     * remote_user is the user that is used to connect to the devcontainer
     */
    remoteUser?: string;

    /**
     * remote_workspace_folder is the folder that is used to connect to the
     * devcontainer
     */
    remoteWorkspaceFolder?: string;

    /**
     * secrets_in_sync indicates if the secrets are up to date w.r.t. the running
     * devcontainer.
     */
    secretsInSync?: boolean;

    /**
     * session is the session that is currently active in the devcontainer.
     */
    session?: string;

    /**
     * warning_message contains warnings, e.g. when the devcontainer is present but not
     * in the expected state.
     */
    warningMessage?: string;
  }

  /**
   * environment_url contains the URL at which the environment can be accessed. This
   * field is only set if the environment is running.
   */
  export interface EnvironmentURLs {
    /**
     * logs is the URL at which the environment logs can be accessed.
     */
    logs?: string;

    /**
     * ops is the URL at which the environment ops service can be accessed.
     */
    ops?: string;

    ports?: Array<EnvironmentURLs.Port>;

    /**
     * SSH is the URL at which the environment can be accessed via SSH.
     */
    ssh?: EnvironmentURLs.SSH;

    /**
     * support_bundle is the URL at which the environment support bundle can be
     * accessed.
     */
    supportBundle?: string;
  }

  export namespace EnvironmentURLs {
    export interface Port {
      /**
       * port is the port number of the environment port
       */
      port?: number;

      /**
       * url is the URL at which the environment port can be accessed
       */
      url?: string;
    }

    /**
     * SSH is the URL at which the environment can be accessed via SSH.
     */
    export interface SSH {
      url?: string;
    }
  }

  /**
   * machine contains the status of the environment machine
   */
  export interface Machine {
    /**
     * failure_message contains the reason the machine failed to operate.
     */
    failureMessage?: string;

    /**
     * phase is the current phase of the environment machine
     */
    phase?:
      | 'PHASE_UNSPECIFIED'
      | 'PHASE_CREATING'
      | 'PHASE_STARTING'
      | 'PHASE_RUNNING'
      | 'PHASE_STOPPING'
      | 'PHASE_STOPPED'
      | 'PHASE_DELETING'
      | 'PHASE_DELETED';

    /**
     * session is the session that is currently active in the machine.
     */
    session?: string;

    /**
     * timeout contains the reason the environment has timed out. If this field is
     * empty, the environment has not timed out.
     */
    timeout?: string;

    /**
     * versions contains the versions of components in the machine.
     */
    versions?: Machine.Versions;

    /**
     * warning_message contains warnings, e.g. when the machine is present but not in
     * the expected state.
     */
    warningMessage?: string;
  }

  export namespace Machine {
    /**
     * versions contains the versions of components in the machine.
     */
    export interface Versions {
      amiId?: string;

      supervisorCommit?: string;

      supervisorVersion?: string;
    }
  }

  /**
   * runner_ack contains the acknowledgement from the runner that is has received the
   * environment spec.
   */
  export interface RunnerAck {
    message?: string;

    specVersion?: string;

    statusCode?:
      | 'STATUS_CODE_UNSPECIFIED'
      | 'STATUS_CODE_OK'
      | 'STATUS_CODE_INVALID_RESOURCE'
      | 'STATUS_CODE_FAILED_PRECONDITION';
  }

  export interface Secret {
    /**
     * id is the unique identifier of the secret.
     */
    id?: string;

    /**
     * failure_message contains the reason the secret failed to be materialize.
     */
    failureMessage?: string;

    phase?:
      | 'CONTENT_PHASE_UNSPECIFIED'
      | 'CONTENT_PHASE_CREATING'
      | 'CONTENT_PHASE_INITIALIZING'
      | 'CONTENT_PHASE_READY'
      | 'CONTENT_PHASE_UPDATING'
      | 'CONTENT_PHASE_FAILED'
      | 'CONTENT_PHASE_UNAVAILABLE';

    secretName?: string;

    /**
     * session is the session that is currently active in the environment.
     */
    session?: string;

    /**
     * warning_message contains warnings, e.g. when the secret is present but not in
     * the expected state.
     */
    warningMessage?: string;
  }

  export interface SSHPublicKey {
    /**
     * id is the unique identifier of the public key
     */
    id?: string;

    /**
     * phase is the current phase of the public key
     */
    phase?:
      | 'CONTENT_PHASE_UNSPECIFIED'
      | 'CONTENT_PHASE_CREATING'
      | 'CONTENT_PHASE_INITIALIZING'
      | 'CONTENT_PHASE_READY'
      | 'CONTENT_PHASE_UPDATING'
      | 'CONTENT_PHASE_FAILED'
      | 'CONTENT_PHASE_UNAVAILABLE';
  }
}

/**
 * KernelControlsConfig configures kernel-level controls for the environment
 */
export interface KernelControlsConfig {
  /**
   * veto controls blocking mechanisms
   */
  veto?: Veto;
}

/**
 * Veto controls kernel-level blocking mechanisms
 */
export interface Veto {
  /**
   * exec controls executable blocking
   */
  exec?: Veto.Exec;
}

export namespace Veto {
  /**
   * exec controls executable blocking
   */
  export interface Exec {
    /**
     * denylist is the list of executable paths or names to block
     */
    denylist?: Array<string>;

    /**
     * enabled controls whether executable blocking is active
     */
    enabled?: boolean;
  }
}

export interface EnvironmentCreateResponse {
  /**
   * +resource get environment
   */
  environment: Environment;
}

export interface EnvironmentRetrieveResponse {
  /**
   * +resource get environment
   */
  environment: Environment;
}

export type EnvironmentUpdateResponse = unknown;

export type EnvironmentDeleteResponse = unknown;

export interface EnvironmentCreateEnvironmentTokenResponse {
  /**
   * access_token is the token that can be used for environment authentication
   */
  accessToken: string;
}

export interface EnvironmentCreateFromProjectResponse {
  /**
   * +resource get environment
   */
  environment: Environment;
}

export interface EnvironmentCreateLogsTokenResponse {
  /**
   * access_token is the token that can be used to access the logs of the environment
   */
  accessToken: string;
}

export type EnvironmentMarkActiveResponse = unknown;

export type EnvironmentStartResponse = unknown;

export type EnvironmentStopResponse = unknown;

export type EnvironmentUnarchiveResponse = unknown;

export interface EnvironmentCreateParams {
  /**
   * name is a user-defined identifier for the environment. If not specified, the
   * system will generate a name.
   */
  name?: string | null;

  /**
   * spec is the configuration of the environment that's required for the to start
   * the environment
   */
  spec?: EnvironmentSpec;
}

export interface EnvironmentRetrieveParams {
  /**
   * environment_id specifies the environment to get
   */
  environmentId: string;
}

export interface EnvironmentUpdateParams {
  /**
   * environment_id specifies which environment should be updated.
   *
   * +required
   */
  environmentId?: string;

  metadata?: EnvironmentUpdateParams.Metadata | null;

  spec?: EnvironmentUpdateParams.Spec | null;
}

export namespace EnvironmentUpdateParams {
  export interface Metadata {
    /**
     * name is the user-defined display name of the environment
     */
    name?: string | null;
  }

  export interface Spec {
    /**
     * automations_file is the automations file spec of the environment
     */
    automationsFile?: Spec.AutomationsFile | null;

    content?: Spec.Content | null;

    devcontainer?: Spec.Devcontainer | null;

    /**
     * kernel_controls_config configures kernel-level controls for this environment
     */
    kernelControlsConfig?: EnvironmentsAPI.KernelControlsConfig | null;

    /**
     * ports controls port sharing
     */
    ports?: Array<Spec.Port>;

    /**
     * ssh_public_keys are the public keys to update empty array means nothing to
     * update
     */
    sshPublicKeys?: Array<Spec.SSHPublicKey>;

    /**
     * Timeout configures the environment timeout
     */
    timeout?: Spec.Timeout | null;
  }

  export namespace Spec {
    /**
     * automations_file is the automations file spec of the environment
     */
    export interface AutomationsFile {
      /**
       * automations_file_path is the path to the automations file that is applied in the
       * environment, relative to the repo root. path must not be absolute (start with a
       * /):
       *
       * ```
       * this.matches('^$|^[^/].*')
       * ```
       */
      automationsFilePath?: string | null;

      session?: string | null;
    }

    export interface Content {
      /**
       * The Git email address
       */
      gitEmail?: string | null;

      /**
       * The Git username
       */
      gitUsername?: string | null;

      /**
       * initializer configures how the environment is to be initialized
       */
      initializer?: ProjectsAPI.EnvironmentInitializer | null;

      /**
       * session should be changed to trigger a content reinitialization
       */
      session?: string | null;
    }

    export interface Devcontainer {
      /**
       * devcontainer_file_path is the path to the devcontainer file relative to the repo
       * root path must not be absolute (start with a /):
       *
       * ```
       * this.matches('^$|^[^/].*')
       * ```
       */
      devcontainerFilePath?: string | null;

      /**
       * session should be changed to trigger a devcontainer rebuild
       */
      session?: string | null;
    }

    export interface Port {
      /**
       * policy of this port
       */
      admission?: EnvironmentsAPI.AdmissionLevel;

      /**
       * name of this port
       */
      name?: string;

      /**
       * port number
       */
      port?: number;

      /**
       * protocol for communication (Gateway proxy → user environment service). this
       * setting only affects the protocol used between Gateway and user environment
       * services.
       */
      protocol?: 'PROTOCOL_UNSPECIFIED' | 'PROTOCOL_HTTP' | 'PROTOCOL_HTTPS';
    }

    export interface SSHPublicKey {
      /**
       * id is the unique identifier of the public key
       */
      id?: string;

      /**
       * value is the actual public key in the public key file format if not provided,
       * the public key will be removed
       */
      value?: string | null;
    }

    /**
     * Timeout configures the environment timeout
     */
    export interface Timeout {
      /**
       * inacitivity is the maximum time of disconnection before the environment is
       * stopped or paused. Minimum duration is 30 minutes. Set to 0 to disable.
       */
      disconnected?: string | null;
    }
  }
}

export interface EnvironmentListParams extends EnvironmentsPageParams {
  /**
   * Body param
   */
  filter?: EnvironmentListParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing environments
   */
  pagination?: EnvironmentListParams.Pagination;
}

export namespace EnvironmentListParams {
  export interface Filter {
    /**
     * archival_status filters the response based on environment archive status
     */
    archivalStatus?:
      | 'ARCHIVAL_STATUS_UNSPECIFIED'
      | 'ARCHIVAL_STATUS_ACTIVE'
      | 'ARCHIVAL_STATUS_ARCHIVED'
      | 'ARCHIVAL_STATUS_ALL'
      | null;

    /**
     * created_before filters environments created before this timestamp
     */
    createdBefore?: string | null;

    /**
     * creator_ids filters the response to only Environments created by specified
     * members
     */
    creatorIds?: Array<string>;

    /**
     * project_ids filters the response to only Environments associated with the
     * specified projects
     */
    projectIds?: Array<string>;

    /**
     * roles filters the response to only Environments with the specified roles
     */
    roles?: Array<EnvironmentsAPI.EnvironmentRole>;

    /**
     * runner_ids filters the response to only Environments running on these Runner IDs
     */
    runnerIds?: Array<string>;

    /**
     * runner_kinds filters the response to only Environments running on these Runner
     * Kinds
     */
    runnerKinds?: Array<RunnersAPI.RunnerKind>;

    /**
     * actual_phases is a list of phases the environment must be in for it to be
     * returned in the API call
     */
    statusPhases?: Array<EnvironmentsAPI.EnvironmentPhase>;
  }

  /**
   * pagination contains the pagination options for listing environments
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

export interface EnvironmentDeleteParams {
  /**
   * environment_id specifies the environment that is going to delete.
   *
   * +required
   */
  environmentId?: string;

  /**
   * force indicates whether the environment should be deleted forcefully When force
   * deleting an Environment, the Environment is removed immediately and environment
   * lifecycle is not respected. Force deleting can result in data loss on the
   * environment.
   */
  force?: boolean;
}

export interface EnvironmentCreateEnvironmentTokenParams {
  /**
   * environment_id specifies the environment for which the access token should be
   * created.
   */
  environmentId: string;
}

export interface EnvironmentCreateFromProjectParams {
  /**
   * name is a user-defined identifier for the environment. If not specified, the
   * system will generate a name.
   */
  name?: string | null;

  projectId?: string;

  /**
   * Spec is the configuration of the environment that's required for the runner to
   * start the environment Configuration already defined in the Project will override
   * parts of the spec, if set
   */
  spec?: EnvironmentSpec;
}

export interface EnvironmentCreateLogsTokenParams {
  /**
   * environment_id specifies the environment for which the logs token should be
   * created.
   *
   * +required
   */
  environmentId?: string;
}

export interface EnvironmentMarkActiveParams {
  /**
   * activity_signal specifies the activity.
   */
  activitySignal?: EnvironmentActivitySignal;

  /**
   * The ID of the environment to update activity for.
   */
  environmentId?: string;
}

export interface EnvironmentStartParams {
  /**
   * environment_id specifies which environment should be started.
   */
  environmentId?: string;
}

export interface EnvironmentStopParams {
  /**
   * environment_id specifies which environment should be stopped.
   *
   * +required
   */
  environmentId?: string;
}

export interface EnvironmentUnarchiveParams {
  /**
   * environment_id specifies the environment to unarchive.
   *
   * +required
   */
  environmentId?: string;
}

Environments.Automations = Automations;
Environments.Classes = Classes;

export declare namespace Environments {
  export {
    type AdmissionLevel as AdmissionLevel,
    type Environment as Environment,
    type EnvironmentActivitySignal as EnvironmentActivitySignal,
    type EnvironmentMetadata as EnvironmentMetadata,
    type EnvironmentPhase as EnvironmentPhase,
    type EnvironmentRole as EnvironmentRole,
    type EnvironmentSpec as EnvironmentSpec,
    type EnvironmentStatus as EnvironmentStatus,
    type KernelControlsConfig as KernelControlsConfig,
    type Veto as Veto,
    type EnvironmentCreateResponse as EnvironmentCreateResponse,
    type EnvironmentRetrieveResponse as EnvironmentRetrieveResponse,
    type EnvironmentUpdateResponse as EnvironmentUpdateResponse,
    type EnvironmentDeleteResponse as EnvironmentDeleteResponse,
    type EnvironmentCreateEnvironmentTokenResponse as EnvironmentCreateEnvironmentTokenResponse,
    type EnvironmentCreateFromProjectResponse as EnvironmentCreateFromProjectResponse,
    type EnvironmentCreateLogsTokenResponse as EnvironmentCreateLogsTokenResponse,
    type EnvironmentMarkActiveResponse as EnvironmentMarkActiveResponse,
    type EnvironmentStartResponse as EnvironmentStartResponse,
    type EnvironmentStopResponse as EnvironmentStopResponse,
    type EnvironmentUnarchiveResponse as EnvironmentUnarchiveResponse,
    type EnvironmentsEnvironmentsPage as EnvironmentsEnvironmentsPage,
    type EnvironmentCreateParams as EnvironmentCreateParams,
    type EnvironmentRetrieveParams as EnvironmentRetrieveParams,
    type EnvironmentUpdateParams as EnvironmentUpdateParams,
    type EnvironmentListParams as EnvironmentListParams,
    type EnvironmentDeleteParams as EnvironmentDeleteParams,
    type EnvironmentCreateEnvironmentTokenParams as EnvironmentCreateEnvironmentTokenParams,
    type EnvironmentCreateFromProjectParams as EnvironmentCreateFromProjectParams,
    type EnvironmentCreateLogsTokenParams as EnvironmentCreateLogsTokenParams,
    type EnvironmentMarkActiveParams as EnvironmentMarkActiveParams,
    type EnvironmentStartParams as EnvironmentStartParams,
    type EnvironmentStopParams as EnvironmentStopParams,
    type EnvironmentUnarchiveParams as EnvironmentUnarchiveParams,
  };

  export {
    Automations as Automations,
    type AutomationsAPIAutomationsFile as AutomationsFile,
    type AutomationUpsertResponse as AutomationUpsertResponse,
    type AutomationUpsertParams as AutomationUpsertParams,
  };

  export { Classes as Classes, type ClassListParams as ClassListParams };
}
