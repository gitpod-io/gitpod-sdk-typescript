// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PrebuildsAPI from './prebuilds';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import {
  PagePromise,
  PrebuildsPage,
  type PrebuildsPageParams,
  WarmPoolsPage,
  type WarmPoolsPageParams,
} from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

/**
 * PrebuildService manages prebuilds for projects to enable faster environment startup times.
 *  Prebuilds create snapshots of environments that can be used to provision new environments quickly.
 */
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

  /**
   * Creates a warm pool for a project and environment class.
   *
   * A warm pool maintains pre-created environment instances from a prebuild snapshot
   * so that new environments can start near-instantly.
   *
   * Only one warm pool is allowed per <project, environment_class> pair. The
   * environment class must have prebuilds enabled on the project.
   *
   * The pool's snapshot is managed automatically: when a new prebuild completes for
   * the same project and environment class, the pool's snapshot is updated and the
   * runner rotates instances.
   *
   * ### Examples
   *
   * - Create warm pool:
   *
   *   Creates a warm pool with 2 instances for a project and environment class.
   *
   *   ```yaml
   *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   environmentClassId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   desiredSize: 2
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.prebuilds.createWarmPool({
   *   environmentClassId:
   *     'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   projectId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   desiredSize: 2,
   * });
   * ```
   */
  createWarmPool(
    body: PrebuildCreateWarmPoolParams,
    options?: RequestOptions,
  ): APIPromise<PrebuildCreateWarmPoolResponse> {
    return this._client.post('/gitpod.v1.PrebuildService/CreateWarmPool', { body, ...options });
  }

  /**
   * Deletes a warm pool.
   *
   * Deletion is processed asynchronously. The pool is marked for deletion and the
   * runner drains instances in the background.
   *
   * Warm pools are also automatically deleted when prebuilds are disabled on the
   * project or the environment class is removed from the prebuild configuration.
   *
   * ### Examples
   *
   * - Delete warm pool:
   *
   *   ```yaml
   *   warmPoolId: "a1b2c3d4-5678-9abc-def0-1234567890ab"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.prebuilds.deleteWarmPool({
   *   warmPoolId: 'a1b2c3d4-5678-9abc-def0-1234567890ab',
   * });
   * ```
   */
  deleteWarmPool(body: PrebuildDeleteWarmPoolParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.PrebuildService/DeleteWarmPool', { body, ...options });
  }

  /**
   * Lists warm pools with optional filtering.
   *
   * Use this method to:
   *
   * - View all warm pools for a project
   * - Monitor warm pool status across environment classes
   *
   * ### Examples
   *
   * - List warm pools for a project:
   *
   *   ```yaml
   *   filter:
   *     projectIds: ["b0e12f6c-4c67-429d-a4a6-d9838b5da047"]
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const warmPool of client.prebuilds.listWarmPools(
   *   {
   *     filter: {
   *       projectIds: ['b0e12f6c-4c67-429d-a4a6-d9838b5da047'],
   *     },
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  listWarmPools(
    params: PrebuildListWarmPoolsParams,
    options?: RequestOptions,
  ): PagePromise<WarmPoolsWarmPoolsPage, WarmPool> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList('/gitpod.v1.PrebuildService/ListWarmPools', WarmPoolsPage<WarmPool>, {
      query: { token, pageSize },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Gets details about a specific warm pool.
   *
   * Use this method to:
   *
   * - Check warm pool status and phase
   * - View the current snapshot being warmed
   * - Monitor pool health
   *
   * ### Examples
   *
   * - Get warm pool:
   *
   *   ```yaml
   *   warmPoolId: "a1b2c3d4-5678-9abc-def0-1234567890ab"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.prebuilds.retrieveWarmPool({
   *   warmPoolId: 'a1b2c3d4-5678-9abc-def0-1234567890ab',
   * });
   * ```
   */
  retrieveWarmPool(
    body: PrebuildRetrieveWarmPoolParams,
    options?: RequestOptions,
  ): APIPromise<PrebuildRetrieveWarmPoolResponse> {
    return this._client.post('/gitpod.v1.PrebuildService/GetWarmPool', { body, ...options });
  }

  /**
   * Updates a warm pool's configuration.
   *
   * Use this method to change the desired pool size.
   *
   * ### Examples
   *
   * - Update pool size:
   *
   *   ```yaml
   *   warmPoolId: "a1b2c3d4-5678-9abc-def0-1234567890ab"
   *   desiredSize: 5
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.prebuilds.updateWarmPool({
   *   warmPoolId: 'a1b2c3d4-5678-9abc-def0-1234567890ab',
   *   desiredSize: 5,
   * });
   * ```
   */
  updateWarmPool(
    body: PrebuildUpdateWarmPoolParams,
    options?: RequestOptions,
  ): APIPromise<PrebuildUpdateWarmPoolResponse> {
    return this._client.post('/gitpod.v1.PrebuildService/UpdateWarmPool', { body, ...options });
  }
}

export type PrebuildsPrebuildsPage = PrebuildsPage<Prebuild>;

export type WarmPoolsWarmPoolsPage = WarmPoolsPage<WarmPool>;

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
   * snapshot_size_bytes is the size of the snapshot in bytes. Only populated when
   * the snapshot is available (phase is COMPLETED).
   */
  snapshotSizeBytes?: string;

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

/**
 * WarmPool maintains pre-created environment instances from a prebuild snapshot
 * for near-instant environment startup. One warm pool exists per <project,
 * environment_class> pair.
 */
export interface WarmPool {
  /**
   * metadata contains organizational and ownership information
   */
  metadata: WarmPoolMetadata;

  /**
   * spec contains the desired configuration for this warm pool
   */
  spec: WarmPoolSpec;

  /**
   * status contains the current status reported by the runner
   */
  status: WarmPoolStatus;

  /**
   * id is the unique identifier for the warm pool
   */
  id?: string;
}

/**
 * WarmPoolMetadata contains metadata about the warm pool
 */
export interface WarmPoolMetadata {
  /**
   * created_at is when the warm pool was created
   */
  createdAt: string;

  /**
   * updated_at is when the warm pool was last updated
   */
  updatedAt: string;

  /**
   * environment_class_id is the environment class whose instances are warmed
   */
  environmentClassId?: string;

  /**
   * organization_id is the ID of the organization that owns the warm pool
   */
  organizationId?: string;

  /**
   * project_id is the ID of the project this warm pool belongs to
   */
  projectId?: string;

  /**
   * runner_id is the runner that manages this warm pool. Derived from the
   * environment class.
   */
  runnerId?: string;
}

/**
 * WarmPoolPhase represents the lifecycle phase of a warm pool
 */
export type WarmPoolPhase =
  | 'WARM_POOL_PHASE_UNSPECIFIED'
  | 'WARM_POOL_PHASE_PENDING'
  | 'WARM_POOL_PHASE_READY'
  | 'WARM_POOL_PHASE_DEGRADED'
  | 'WARM_POOL_PHASE_DELETING'
  | 'WARM_POOL_PHASE_DELETED';

/**
 * WarmPoolSpec contains the desired configuration for a warm pool
 */
export interface WarmPoolSpec {
  /**
   * desired_phase is the intended lifecycle phase for this warm pool. Managed by the
   * API and reconciler.
   */
  desiredPhase?: WarmPoolPhase;

  /**
   * @deprecated desired_size is the number of warm instances to maintain.
   * Deprecated: Use min_size and max_size instead for dynamic scaling. Existing
   * pools will be migrated to min_size=max_size=desired_size.
   */
  desiredSize?: number;

  /**
   * max_size is the maximum number of warm instances to maintain. The pool will
   * never scale above this value. Must be >= min_size and <= 20.
   */
  maxSize?: number | null;

  /**
   * min_size is the minimum number of warm instances to maintain. The pool will
   * never scale below this value. Must be >= 0 and <= max_size. Set to 0 to allow
   * full scale-down.
   */
  minSize?: number | null;

  /**
   * snapshot_id is the prebuild snapshot to warm up in the pool. Updated by the
   * reconciler when a new prebuild completes for this project and environment class.
   * Empty when no completed prebuild exists yet.
   */
  snapshotId?: string | null;

  /**
   * spec_version is incremented each time the spec is updated. Used for optimistic
   * concurrency control.
   */
  specVersion?: string;
}

/**
 * WarmPoolStatus contains the current status of a warm pool as reported by the
 * runner
 */
export interface WarmPoolStatus {
  /**
   * phase is the current phase of the warm pool lifecycle
   */
  phase: WarmPoolPhase;

  /**
   * failure_message contains details about why the warm pool is degraded or failed
   */
  failureMessage?: string;

  /**
   * running_instances is the number of running warm instances in the pool, ready to
   * be claimed for near-instant environment startup.
   */
  runningInstances?: number;

  /**
   * status_version is incremented each time the status is updated. Used for
   * optimistic concurrency control.
   */
  statusVersion?: string;

  /**
   * stopped_instances is the number of pre-provisioned but stopped instances in the
   * pool. When a running instance is claimed, stopped instances are used to backfill
   * the running pool faster than provisioning from scratch. Stopped instances only
   * incur storage costs, allowing a larger total pool at lower cost than keeping all
   * instances running.
   */
  stoppedInstances?: number;
}

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

export interface PrebuildCreateWarmPoolResponse {
  /**
   * WarmPool maintains pre-created environment instances from a prebuild snapshot
   * for near-instant environment startup. One warm pool exists per <project,
   * environment_class> pair.
   */
  warmPool: WarmPool;
}

export type PrebuildDeleteWarmPoolResponse = unknown;

export interface PrebuildRetrieveWarmPoolResponse {
  /**
   * WarmPool maintains pre-created environment instances from a prebuild snapshot
   * for near-instant environment startup. One warm pool exists per <project,
   * environment_class> pair.
   */
  warmPool: WarmPool;
}

export interface PrebuildUpdateWarmPoolResponse {
  /**
   * WarmPool maintains pre-created environment instances from a prebuild snapshot
   * for near-instant environment startup. One warm pool exists per <project,
   * environment_class> pair.
   */
  warmPool: WarmPool;
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
     * creator_ids filters prebuilds by who created them
     */
    creatorIds?: Array<string>;

    /**
     * executor_ids filters prebuilds by whose credentials were used to run them
     */
    executorIds?: Array<string>;

    /**
     * phases filters prebuilds by their current phase
     */
    phases?: Array<PrebuildsAPI.PrebuildPhase>;

    /**
     * project_ids filters prebuilds to specific projects
     */
    projectIds?: Array<string>;

    /**
     * triggered_by filters prebuilds by how they were triggered
     */
    triggeredBy?: Array<PrebuildsAPI.PrebuildTrigger>;
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

export interface PrebuildCreateWarmPoolParams {
  /**
   * environment_class_id specifies which environment class to warm. Must be listed
   * in the project's prebuild configuration environment_class_ids.
   */
  environmentClassId: string;

  /**
   * project_id specifies the project this warm pool belongs to. The project must
   * have prebuilds enabled.
   */
  projectId: string;

  /**
   * @deprecated desired_size is the number of warm instances to maintain.
   * Deprecated: Use min_size and max_size instead for dynamic scaling.
   */
  desiredSize?: number;

  /**
   * max_size is the maximum number of warm instances to maintain. The pool will
   * never scale above this value. Must be >= min_size and <= 20.
   */
  maxSize?: number | null;

  /**
   * min_size is the minimum number of warm instances to maintain. The pool will
   * never scale below this value. Must be >= 0 and <= max_size. Set to 0 to allow
   * full scale-down.
   */
  minSize?: number | null;
}

export interface PrebuildDeleteWarmPoolParams {
  /**
   * warm_pool_id specifies the warm pool to delete
   */
  warmPoolId: string;
}

export interface PrebuildListWarmPoolsParams extends WarmPoolsPageParams {
  /**
   * Body param: filter contains the filter options for listing warm pools
   */
  filter?: PrebuildListWarmPoolsParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing warm pools
   */
  pagination?: PrebuildListWarmPoolsParams.Pagination;
}

export namespace PrebuildListWarmPoolsParams {
  /**
   * filter contains the filter options for listing warm pools
   */
  export interface Filter {
    /**
     * environment_class_ids filters warm pools to specific environment classes
     */
    environmentClassIds?: Array<string>;

    /**
     * project_ids filters warm pools to specific projects
     */
    projectIds?: Array<string>;
  }

  /**
   * pagination contains the pagination options for listing warm pools
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

export interface PrebuildRetrieveWarmPoolParams {
  /**
   * warm_pool_id specifies the warm pool to retrieve
   */
  warmPoolId: string;
}

export interface PrebuildUpdateWarmPoolParams {
  /**
   * warm_pool_id specifies the warm pool to update
   */
  warmPoolId: string;

  /**
   * @deprecated desired_size updates the number of warm instances to maintain.
   * Deprecated: Use min_size and max_size instead for dynamic scaling.
   */
  desiredSize?: number | null;

  /**
   * max_size updates the maximum number of warm instances to maintain. The pool will
   * never scale above this value. Must be >= min_size and <= 20.
   */
  maxSize?: number | null;

  /**
   * min_size updates the minimum number of warm instances to maintain. The pool will
   * never scale below this value. Must be >= 0 and <= max_size. Set to 0 to allow
   * full scale-down.
   */
  minSize?: number | null;
}

export declare namespace Prebuilds {
  export {
    type Prebuild as Prebuild,
    type PrebuildMetadata as PrebuildMetadata,
    type PrebuildPhase as PrebuildPhase,
    type PrebuildSpec as PrebuildSpec,
    type PrebuildStatus as PrebuildStatus,
    type PrebuildTrigger as PrebuildTrigger,
    type WarmPool as WarmPool,
    type WarmPoolMetadata as WarmPoolMetadata,
    type WarmPoolPhase as WarmPoolPhase,
    type WarmPoolSpec as WarmPoolSpec,
    type WarmPoolStatus as WarmPoolStatus,
    type PrebuildCreateResponse as PrebuildCreateResponse,
    type PrebuildRetrieveResponse as PrebuildRetrieveResponse,
    type PrebuildDeleteResponse as PrebuildDeleteResponse,
    type PrebuildCancelResponse as PrebuildCancelResponse,
    type PrebuildCreateLogsTokenResponse as PrebuildCreateLogsTokenResponse,
    type PrebuildCreateWarmPoolResponse as PrebuildCreateWarmPoolResponse,
    type PrebuildDeleteWarmPoolResponse as PrebuildDeleteWarmPoolResponse,
    type PrebuildRetrieveWarmPoolResponse as PrebuildRetrieveWarmPoolResponse,
    type PrebuildUpdateWarmPoolResponse as PrebuildUpdateWarmPoolResponse,
    type PrebuildsPrebuildsPage as PrebuildsPrebuildsPage,
    type WarmPoolsWarmPoolsPage as WarmPoolsWarmPoolsPage,
    type PrebuildCreateParams as PrebuildCreateParams,
    type PrebuildRetrieveParams as PrebuildRetrieveParams,
    type PrebuildListParams as PrebuildListParams,
    type PrebuildDeleteParams as PrebuildDeleteParams,
    type PrebuildCancelParams as PrebuildCancelParams,
    type PrebuildCreateLogsTokenParams as PrebuildCreateLogsTokenParams,
    type PrebuildCreateWarmPoolParams as PrebuildCreateWarmPoolParams,
    type PrebuildDeleteWarmPoolParams as PrebuildDeleteWarmPoolParams,
    type PrebuildListWarmPoolsParams as PrebuildListWarmPoolsParams,
    type PrebuildRetrieveWarmPoolParams as PrebuildRetrieveWarmPoolParams,
    type PrebuildUpdateWarmPoolParams as PrebuildUpdateWarmPoolParams,
  };
}
