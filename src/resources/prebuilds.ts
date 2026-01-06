// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PrebuildsAPI from './prebuilds';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { PagePromise, PrebuildsPage, type PrebuildsPageParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Prebuilds extends APIResource {
  /**
   * Creates a prebuild for a project.
   *
   * Use this method to:
   *
   * - Create on-demand prebuilds for faster environment startup
   * - Trigger prebuilds after repository changes
   * - Generate prebuilds for specific environment classes
   *
   * The prebuild process creates an environment, runs the devcontainer prebuild
   * lifecycle, and creates a snapshot for future environment provisioning.
   *
   * ### Examples
   *
   * - Create basic prebuild:
   *
   *   Creates a prebuild for a project using default settings.
   *
   *   ```yaml
   *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   spec:
   *     timeout: "3600s" # 60 minutes default
   *   ```
   *
   * - Create prebuild with custom environment class:
   *
   *   Creates a prebuild with a specific environment class and timeout.
   *
   *   ```yaml
   *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   environmentClassId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   spec:
   *     timeout: "3600s" # 1 hour
   *   ```
   *
   * @example
   * ```ts
   * const prebuild = await client.prebuilds.create({
   *   projectId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   spec: { timeout: '3600s' },
   * });
   * ```
   */
  create(body: PrebuildCreateParams, options?: RequestOptions): APIPromise<PrebuildCreateResponse> {
    return this._client.post('/gitpod.v1.PrebuildService/CreatePrebuild', { body, ...options });
  }

  /**
   * Gets details about a specific prebuild.
   *
   * Use this method to:
   *
   * - Check prebuild status and progress
   * - Access prebuild logs for debugging
   *
   * ### Examples
   *
   * - Get prebuild details:
   *
   *   Retrieves comprehensive information about a prebuild.
   *
   *   ```yaml
   *   prebuildId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   ```
   *
   * @example
   * ```ts
   * const prebuild = await client.prebuilds.retrieve({
   *   prebuildId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   * });
   * ```
   */
  retrieve(body: PrebuildRetrieveParams, options?: RequestOptions): APIPromise<PrebuildRetrieveResponse> {
    return this._client.post('/gitpod.v1.PrebuildService/GetPrebuild', { body, ...options });
  }

  /**
   * ListPrebuilds
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const prebuild of client.prebuilds.list()) {
   *   // ...
   * }
   * ```
   */
  list(params: PrebuildListParams, options?: RequestOptions): PagePromise<PrebuildsPrebuildsPage, Prebuild> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList('/gitpod.v1.PrebuildService/ListPrebuilds', PrebuildsPage<Prebuild>, {
      query: { token, pageSize },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Deletes a prebuild.
   *
   * Prebuilds are automatically deleted after some time. Use this method to manually
   * delete a prebuild before automatic cleanup, for example to remove a prebuild
   * that should no longer be used.
   *
   * Deletion is processed asynchronously. The prebuild will be marked for deletion
   * and removed from the system in the background.
   *
   * ### Examples
   *
   * - Delete prebuild:
   *
   *   Marks a prebuild for deletion and removes it from the system.
   *
   *   ```yaml
   *   prebuildId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   ```
   *
   * @example
   * ```ts
   * const prebuild = await client.prebuilds.delete({
   *   prebuildId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   * });
   * ```
   */
  delete(body: PrebuildDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.PrebuildService/DeletePrebuild', { body, ...options });
  }

  /**
   * Cancels a running prebuild.
   *
   * Use this method to:
   *
   * - Stop prebuilds that are no longer needed
   * - Free up resources for other operations
   *
   * ### Examples
   *
   * - Cancel prebuild:
   *
   *   Stops a running prebuild and cleans up resources.
   *
   *   ```yaml
   *   prebuildId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.prebuilds.cancel({
   *   prebuildId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   * });
   * ```
   */
  cancel(body: PrebuildCancelParams, options?: RequestOptions): APIPromise<PrebuildCancelResponse> {
    return this._client.post('/gitpod.v1.PrebuildService/CancelPrebuild', { body, ...options });
  }

  /**
   * Creates a logs access token for a prebuild.
   *
   * Use this method to:
   *
   * - Stream logs from a running prebuild
   * - Access archived logs from completed prebuilds
   *
   * Generated tokens are valid for one hour.
   *
   * ### Examples
   *
   * - Create prebuild logs token:
   *
   *   Generates a token for accessing prebuild logs.
   *
   *   ```yaml
   *   prebuildId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.prebuilds.createLogsToken({
   *   prebuildId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   * });
   * ```
   */
  createLogsToken(
    body: PrebuildCreateLogsTokenParams,
    options?: RequestOptions,
  ): APIPromise<PrebuildCreateLogsTokenResponse> {
    return this._client.post('/gitpod.v1.PrebuildService/CreatePrebuildLogsToken', { body, ...options });
  }
}

export type PrebuildsPrebuildsPage = PrebuildsPage<Prebuild>;

/**
 * Prebuild represents a prebuild for a project that creates a snapshot for faster
 * environment startup times.
 */
export interface Prebuild {
  /**
   * metadata contains organizational and ownership information
   */
  metadata: PrebuildMetadata;

  /**
   * spec contains the configuration used to create this prebuild
   */
  spec: PrebuildSpec;

  /**
   * status contains the current status and progress of the prebuild
   */
  status: PrebuildStatus;

  /**
   * id is the unique identifier for the prebuild
   */
  id?: string;
}

/**
 * PrebuildMetadata contains metadata about the prebuild
 */
export interface PrebuildMetadata {
  /**
   * created_at is when the prebuild was created
   */
  createdAt: string;

  /**
   * creator is the identity of who created the prebuild. For manual prebuilds, this
   * is the user who triggered it. For scheduled prebuilds, this is the configured
   * executor.
   */
  creator: Shared.Subject;

  /**
   * updated_at is when the prebuild was last updated
   */
  updatedAt: string;

  /**
   * environment_class_id is the environment class used to create this prebuild.
   * While the prebuild is created with a specific environment class, environments
   * with different classes (e.g., smaller or larger instance sizes) can be created
   * from the same prebuild, as long as they run on the same runner. If not specified
   * in create requests, uses the project's default environment class.
   */
  environmentClassId?: string;

  /**
   * executor is the identity used to run the prebuild. The executor's SCM
   * credentials are used to clone the repository. If not set, the creator's identity
   * is used.
   */
  executor?: Shared.Subject;

  /**
   * organization_id is the ID of the organization that owns the prebuild
   */
  organizationId?: string;

  /**
   * project_id is the ID of the project this prebuild was created for
   */
  projectId?: string;

  /**
   * trigger describes the trigger that created this prebuild.
   */
  triggeredBy?: PrebuildTrigger;
}

/**
 * PrebuildPhase represents the lifecycle phase of a prebuild
 */
export type PrebuildPhase =
  | 'PREBUILD_PHASE_UNSPECIFIED'
  | 'PREBUILD_PHASE_PENDING'
  | 'PREBUILD_PHASE_STARTING'
  | 'PREBUILD_PHASE_RUNNING'
  | 'PREBUILD_PHASE_STOPPING'
  | 'PREBUILD_PHASE_SNAPSHOTTING'
  | 'PREBUILD_PHASE_COMPLETED'
  | 'PREBUILD_PHASE_FAILED'
  | 'PREBUILD_PHASE_CANCELLING'
  | 'PREBUILD_PHASE_CANCELLED'
  | 'PREBUILD_PHASE_DELETING'
  | 'PREBUILD_PHASE_DELETED';

/**
 * PrebuildSpec contains the configuration used to create a prebuild
 */
export interface PrebuildSpec {
  /**
   * desired_phase is the desired phase of the prebuild. Used to signal cancellation
   * or other state changes. This field is managed by the API and reconciler.
   */
  desiredPhase?: PrebuildPhase;

  /**
   * spec_version is incremented each time the spec is updated. Used for optimistic
   * concurrency control.
   */
  specVersion?: string;

  /**
   * timeout is the maximum time allowed for the prebuild to complete. Defaults to 60
   * minutes if not specified. Maximum allowed timeout is 2 hours.
   */
  timeout?: string;
}

/**
 * PrebuildStatus contains the current status and progress of a prebuild
 */
export interface PrebuildStatus {
  /**
   * phase is the current phase of the prebuild lifecycle
   */
  phase: PrebuildPhase;

  /**
   * completion_time is when the prebuild completed (successfully or with failure)
   */
  completionTime?: string;

  /**
   * environment_id is the ID of the environment used to create this prebuild. This
   * field is set when the prebuild environment is created.
   */
  environmentId?: string;

  /**
   * failure_message contains details about why the prebuild failed
   */
  failureMessage?: string;

  /**
   * log_url provides access to prebuild logs. During prebuild execution, this
   * references the environment logs. After completion, this may reference archived
   * logs.
   */
  logUrl?: string;

  /**
   * snapshot_completion_percentage is the progress of snapshot creation (0-100).
   * Only populated when phase is SNAPSHOTTING and progress is available from the
   * cloud provider. This value may update infrequently or remain at 0 depending on
   * the provider.
   */
  snapshotCompletionPercentage?: number;

  /**
   * status_version is incremented each time the status is updated. Used for
   * optimistic concurrency control.
   */
  statusVersion?: string;

  /**
   * warning_message contains warnings from the prebuild environment that indicate
   * something went wrong but the prebuild could still complete. For example, the
   * devcontainer failed to build but the environment is still usable. These warnings
   * will likely affect any environment started from this prebuild.
   */
  warningMessage?: string;
}

/**
 * PrebuildTrigger indicates how the prebuild was triggered
 */
export type PrebuildTrigger =
  | 'PREBUILD_TRIGGER_UNSPECIFIED'
  | 'PREBUILD_TRIGGER_MANUAL'
  | 'PREBUILD_TRIGGER_SCHEDULED';

export interface PrebuildCreateResponse {
  /**
   * Prebuild represents a prebuild for a project that creates a snapshot for faster
   * environment startup times.
   */
  prebuild: Prebuild;
}

export interface PrebuildRetrieveResponse {
  /**
   * Prebuild represents a prebuild for a project that creates a snapshot for faster
   * environment startup times.
   */
  prebuild: Prebuild;
}

export type PrebuildDeleteResponse = unknown;

export interface PrebuildCancelResponse {
  /**
   * Prebuild represents a prebuild for a project that creates a snapshot for faster
   * environment startup times.
   */
  prebuild: Prebuild;
}

export interface PrebuildCreateLogsTokenResponse {
  /**
   * access_token is the token that can be used to access the logs of the prebuild
   */
  accessToken: string;
}

export interface PrebuildCreateParams {
  /**
   * project_id specifies the project to create a prebuild for
   */
  projectId: string;

  /**
   * spec contains the configuration for creating the prebuild
   */
  spec: PrebuildSpec;

  /**
   * environment_class_id specifies which environment class to use for the prebuild.
   * If not specified, uses the project's default environment class.
   */
  environmentClassId?: string | null;
}

export interface PrebuildRetrieveParams {
  /**
   * prebuild_id specifies the prebuild to retrieve
   */
  prebuildId: string;
}

export interface PrebuildListParams extends PrebuildsPageParams {
  /**
   * Body param: filter contains the filter options for listing prebuilds
   */
  filter?: PrebuildListParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing prebuilds
   */
  pagination?: PrebuildListParams.Pagination;
}

export namespace PrebuildListParams {
  /**
   * filter contains the filter options for listing prebuilds
   */
  export interface Filter {
    /**
     * phases filters prebuilds by their current phase
     */
    phases?: Array<PrebuildsAPI.PrebuildPhase>;

    /**
     * project_ids filters prebuilds to specific projects
     */
    projectIds?: Array<string>;
  }

  /**
   * pagination contains the pagination options for listing prebuilds
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

export interface PrebuildDeleteParams {
  /**
   * prebuild_id specifies the prebuild to delete
   */
  prebuildId: string;
}

export interface PrebuildCancelParams {
  /**
   * prebuild_id specifies the prebuild to cancel
   */
  prebuildId: string;
}

export interface PrebuildCreateLogsTokenParams {
  /**
   * prebuild_id specifies the prebuild for which the logs token should be created.
   *
   * +required
   */
  prebuildId: string;
}

export declare namespace Prebuilds {
  export {
    type Prebuild as Prebuild,
    type PrebuildMetadata as PrebuildMetadata,
    type PrebuildPhase as PrebuildPhase,
    type PrebuildSpec as PrebuildSpec,
    type PrebuildStatus as PrebuildStatus,
    type PrebuildTrigger as PrebuildTrigger,
    type PrebuildCreateResponse as PrebuildCreateResponse,
    type PrebuildRetrieveResponse as PrebuildRetrieveResponse,
    type PrebuildDeleteResponse as PrebuildDeleteResponse,
    type PrebuildCancelResponse as PrebuildCancelResponse,
    type PrebuildCreateLogsTokenResponse as PrebuildCreateLogsTokenResponse,
    type PrebuildsPrebuildsPage as PrebuildsPrebuildsPage,
    type PrebuildCreateParams as PrebuildCreateParams,
    type PrebuildRetrieveParams as PrebuildRetrieveParams,
    type PrebuildListParams as PrebuildListParams,
    type PrebuildDeleteParams as PrebuildDeleteParams,
    type PrebuildCancelParams as PrebuildCancelParams,
    type PrebuildCreateLogsTokenParams as PrebuildCreateLogsTokenParams,
  };
}
