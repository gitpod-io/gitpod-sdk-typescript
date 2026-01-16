// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as EnvironmentClasesAPI from './environment-clases';
import {
  EnvironmentClaseListParams,
  EnvironmentClaseUpdateParams,
  EnvironmentClaseUpdateResponse,
  EnvironmentClases,
} from './environment-clases';
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
  ProjectPoliciesPoliciesPage,
  ProjectPolicy,
  ProjectRole,
} from './policies';
import * as RunnersAPI from '../runners/runners';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, ProjectsPage, type ProjectsPageParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Projects extends APIResource {
  environmentClases: EnvironmentClasesAPI.EnvironmentClases = new EnvironmentClasesAPI.EnvironmentClases(
    this._client,
  );
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);

  /**
   * Creates a new project with specified configuration.
   *
   * Use this method to:
   *
   * - Set up development projects
   * - Configure project environments
   * - Define project settings
   * - Initialize project content
   *
   * ### Examples
   *
   * - Create basic project:
   *
   *   Creates a project with minimal configuration.
   *
   *   ```yaml
   *   name: "Web Application"
   *   initializer:
   *     specs:
   *       - git:
   *           remoteUri: "https://github.com/org/repo"
   *   ```
   *
   * - Create project with devcontainer:
   *
   *   Creates a project with custom development container.
   *
   *   ```yaml
   *   name: "Backend Service"
   *   initializer:
   *     specs:
   *       - git:
   *           remoteUri: "https://github.com/org/backend"
   *   devcontainerFilePath: ".devcontainer/devcontainer.json"
   *   automationsFilePath: ".gitpod/automations.yaml"
   *   ```
   *
   * @example
   * ```ts
   * const project = await client.projects.create({
   *   initializer: {
   *     specs: [
   *       { git: { remoteUri: 'https://github.com/org/repo' } },
   *     ],
   *   },
   *   name: 'Web Application',
   * });
   * ```
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectCreateResponse> {
    return this._client.post('/gitpod.v1.ProjectService/CreateProject', { body, ...options });
  }

  /**
   * Gets details about a specific project.
   *
   * Use this method to:
   *
   * - View project configuration
   * - Check project status
   * - Get project metadata
   *
   * ### Examples
   *
   * - Get project details:
   *
   *   Retrieves information about a specific project.
   *
   *   ```yaml
   *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   ```
   *
   * @example
   * ```ts
   * const project = await client.projects.retrieve({
   *   projectId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   * });
   * ```
   */
  retrieve(body: ProjectRetrieveParams, options?: RequestOptions): APIPromise<ProjectRetrieveResponse> {
    return this._client.post('/gitpod.v1.ProjectService/GetProject', { body, ...options });
  }

  /**
   * Updates a project's configuration.
   *
   * Use this method to:
   *
   * - Modify project settings
   * - Update environment class
   * - Change project name
   * - Configure initializers
   * - Configure prebuild settings
   *
   * ### Examples
   *
   * - Update project name:
   *
   *   Changes the project's display name.
   *
   *   ```yaml
   *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   name: "New Project Name"
   *   ```
   *
   * - Enable prebuilds with daily schedule:
   *
   *   Configures prebuilds to run daily at 2 AM UTC.
   *
   *   ```yaml
   *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   prebuildConfiguration:
   *     enabled: true
   *     environmentClassIds:
   *       - "b0e12f6c-4c67-429d-a4a6-d9838b5da041"
   *     timeout: "3600s"
   *     trigger:
   *       dailySchedule:
   *         hourUtc: 2
   *   ```
   *
   * @example
   * ```ts
   * const project = await client.projects.update({
   *   prebuildConfiguration: {
   *     enabled: true,
   *     environmentClassIds: [
   *       'b0e12f6c-4c67-429d-a4a6-d9838b5da041',
   *     ],
   *     timeout: '3600s',
   *     trigger: { dailySchedule: { hourUtc: 2 } },
   *   },
   *   projectId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   * });
   * ```
   */
  update(body: ProjectUpdateParams, options?: RequestOptions): APIPromise<ProjectUpdateResponse> {
    return this._client.post('/gitpod.v1.ProjectService/UpdateProject', { body, ...options });
  }

  /**
   * Lists projects with optional filtering.
   *
   * Use this method to:
   *
   * - View all accessible projects
   * - Browse project configurations
   * - Monitor project status
   *
   * ### Examples
   *
   * - List projects:
   *
   *   Shows all projects with pagination.
   *
   *   ```yaml
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const project of client.projects.list({
   *   pagination: { pageSize: 20 },
   * })) {
   *   // ...
   * }
   * ```
   */
  list(params: ProjectListParams, options?: RequestOptions): PagePromise<ProjectsProjectsPage, Project> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList('/gitpod.v1.ProjectService/ListProjects', ProjectsPage<Project>, {
      query: { token, pageSize },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Deletes a project permanently.
   *
   * Use this method to:
   *
   * - Remove unused projects
   * - Clean up test projects
   * - Delete obsolete configurations
   *
   * ### Examples
   *
   * - Delete project:
   *
   *   Permanently removes a project.
   *
   *   ```yaml
   *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   ```
   *
   * @example
   * ```ts
   * const project = await client.projects.delete({
   *   projectId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   * });
   * ```
   */
  delete(body: ProjectDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.ProjectService/DeleteProject', { body, ...options });
  }

  /**
   * Creates a new project using an existing environment as a template.
   *
   * Use this method to:
   *
   * - Clone environment configurations
   * - Create projects from templates
   * - Share environment setups
   *
   * ### Examples
   *
   * - Create from environment:
   *
   *   Creates a project based on existing environment.
   *
   *   ```yaml
   *   name: "Frontend Project"
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   ```
   *
   * @example
   * ```ts
   * const response =
   *   await client.projects.createFromEnvironment({
   *     environmentId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   *     name: 'Frontend Project',
   *   });
   * ```
   */
  createFromEnvironment(
    body: ProjectCreateFromEnvironmentParams,
    options?: RequestOptions,
  ): APIPromise<ProjectCreateFromEnvironmentResponse> {
    return this._client.post('/gitpod.v1.ProjectService/CreateProjectFromEnvironment', { body, ...options });
  }
}

export type ProjectsProjectsPage = ProjectsPage<Project>;

/**
 * EnvironmentInitializer specifies how an environment is to be initialized
 */
export interface EnvironmentInitializer {
  specs?: Array<EnvironmentInitializer.Spec>;
}

export namespace EnvironmentInitializer {
  export interface Spec {
    contextUrl?: Spec.ContextURL;

    git?: Spec.Git;
  }

  export namespace Spec {
    export interface ContextURL {
      /**
       * url is the URL from which the environment is created
       */
      url?: string;
    }

    export interface Git {
      /**
       * a path relative to the environment root in which the code will be checked out to
       */
      checkoutLocation?: string;

      /**
       * the value for the clone target mode - use depends on the target mode
       */
      cloneTarget?: string;

      /**
       * remote_uri is the Git remote origin
       */
      remoteUri?: string;

      /**
       * the target mode determines what gets checked out
       */
      targetMode?:
        | 'CLONE_TARGET_MODE_UNSPECIFIED'
        | 'CLONE_TARGET_MODE_REMOTE_HEAD'
        | 'CLONE_TARGET_MODE_REMOTE_COMMIT'
        | 'CLONE_TARGET_MODE_REMOTE_BRANCH'
        | 'CLONE_TARGET_MODE_LOCAL_BRANCH'
        | 'CLONE_TARGET_MODE_REMOTE_TAG';

      /**
       * upstream_Remote_uri is the fork upstream of a repository
       */
      upstreamRemoteUri?: string;
    }
  }
}

export interface Project {
  /**
   * @deprecated Use `environment_classes` instead.
   */
  environmentClass: Shared.ProjectEnvironmentClass;

  /**
   * id is the unique identifier for the project
   */
  id?: string;

  /**
   * automations_file_path is the path to the automations file relative to the repo
   * root
   */
  automationsFilePath?: string;

  /**
   * desired_phase is the desired phase of the project When set to DELETED, the
   * project is pending deletion
   */
  desiredPhase?: ProjectPhase;

  /**
   * devcontainer_file_path is the path to the devcontainer file relative to the repo
   * root
   */
  devcontainerFilePath?: string;

  /**
   * environment_classes is the list of environment classes for the project
   */
  environmentClasses?: Array<Shared.ProjectEnvironmentClass>;

  /**
   * initializer is the content initializer
   */
  initializer?: EnvironmentInitializer;

  metadata?: ProjectMetadata;

  /**
   * prebuild_configuration defines how prebuilds are created for this project.
   */
  prebuildConfiguration?: ProjectPrebuildConfiguration;

  /**
   * recommended_editors specifies the editors recommended for this project.
   */
  recommendedEditors?: RecommendedEditors;

  /**
   * technical_description is a detailed technical description of the project This
   * field is not returned by default in GetProject or ListProjects responses
   */
  technicalDescription?: string;

  usedBy?: Project.UsedBy;
}

export namespace Project {
  export interface UsedBy {
    /**
     * Subjects are the 10 most recent subjects who have used the project to create an
     * environment
     */
    subjects?: Array<Shared.Subject>;

    /**
     * Total number of unique subjects who have used the project
     */
    totalSubjects?: number;
  }
}

export interface ProjectMetadata {
  /**
   * A Timestamp represents a point in time independent of any time zone or local
   * calendar, encoded as a count of seconds and fractions of seconds at nanosecond
   * resolution. The count is relative to an epoch at UTC midnight on January 1,
   * 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar
   * backwards to year one.
   *
   * All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
   * second table is needed for interpretation, using a
   * [24-hour linear smear](https://developers.google.com/time/smear).
   *
   * The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
   * restricting to that range, we ensure that we can convert to and from
   * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
   *
   * # Examples
   *
   * Example 1: Compute Timestamp from POSIX `time()`.
   *
   *      Timestamp timestamp;
   *      timestamp.set_seconds(time(NULL));
   *      timestamp.set_nanos(0);
   *
   * Example 2: Compute Timestamp from POSIX `gettimeofday()`.
   *
   *      struct timeval tv;
   *      gettimeofday(&tv, NULL);
   *
   *      Timestamp timestamp;
   *      timestamp.set_seconds(tv.tv_sec);
   *      timestamp.set_nanos(tv.tv_usec * 1000);
   *
   * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
   *
   *      FILETIME ft;
   *      GetSystemTimeAsFileTime(&ft);
   *      UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;
   *
   *      // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
   *      // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
   *      Timestamp timestamp;
   *      timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
   *      timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
   *
   * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.
   *
   *      long millis = System.currentTimeMillis();
   *
   *      Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
   *          .setNanos((int) ((millis % 1000) * 1000000)).build();
   *
   * Example 5: Compute Timestamp from Java `Instant.now()`.
   *
   *      Instant now = Instant.now();
   *
   *      Timestamp timestamp =
   *          Timestamp.newBuilder().setSeconds(now.getEpochSecond())
   *              .setNanos(now.getNano()).build();
   *
   * Example 6: Compute Timestamp from current time in Python.
   *
   *      timestamp = Timestamp()
   *      timestamp.GetCurrentTime()
   *
   * # JSON Mapping
   *
   * In JSON format, the Timestamp type is encoded as a string in the
   * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format is
   * "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z" where {year} is always
   * expressed using four digits while {month}, {day}, {hour}, {min}, and {sec} are
   * zero-padded to two digits each. The fractional seconds, which can go up to 9
   * digits (i.e. up to 1 nanosecond resolution), are optional. The "Z" suffix
   * indicates the timezone ("UTC"); the timezone is required. A proto3 JSON
   * serializer should always use UTC (as indicated by "Z") when printing the
   * Timestamp type and a proto3 JSON parser should be able to accept both UTC and
   * other timezones (as indicated by an offset).
   *
   * For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past 01:30 UTC on
   * January 15, 2017.
   *
   * In JavaScript, one can convert a Date object to this format using the standard
   * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
   * method. In Python, a standard `datetime.datetime` object can be converted to
   * this format using
   * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with the
   * time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use the
   * Joda Time's
   * [`ISODateTimeFormat.dateTime()`](<http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()>)
   * to obtain a formatter capable of generating timestamps in this format.
   */
  createdAt?: string;

  /**
   * creator is the identity of the project creator
   */
  creator?: Shared.Subject;

  /**
   * name is the human readable name of the project
   */
  name?: string;

  /**
   * organization_id is the ID of the organization that contains the environment
   */
  organizationId?: string;

  /**
   * A Timestamp represents a point in time independent of any time zone or local
   * calendar, encoded as a count of seconds and fractions of seconds at nanosecond
   * resolution. The count is relative to an epoch at UTC midnight on January 1,
   * 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar
   * backwards to year one.
   *
   * All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
   * second table is needed for interpretation, using a
   * [24-hour linear smear](https://developers.google.com/time/smear).
   *
   * The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
   * restricting to that range, we ensure that we can convert to and from
   * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
   *
   * # Examples
   *
   * Example 1: Compute Timestamp from POSIX `time()`.
   *
   *      Timestamp timestamp;
   *      timestamp.set_seconds(time(NULL));
   *      timestamp.set_nanos(0);
   *
   * Example 2: Compute Timestamp from POSIX `gettimeofday()`.
   *
   *      struct timeval tv;
   *      gettimeofday(&tv, NULL);
   *
   *      Timestamp timestamp;
   *      timestamp.set_seconds(tv.tv_sec);
   *      timestamp.set_nanos(tv.tv_usec * 1000);
   *
   * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
   *
   *      FILETIME ft;
   *      GetSystemTimeAsFileTime(&ft);
   *      UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;
   *
   *      // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
   *      // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
   *      Timestamp timestamp;
   *      timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
   *      timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
   *
   * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.
   *
   *      long millis = System.currentTimeMillis();
   *
   *      Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
   *          .setNanos((int) ((millis % 1000) * 1000000)).build();
   *
   * Example 5: Compute Timestamp from Java `Instant.now()`.
   *
   *      Instant now = Instant.now();
   *
   *      Timestamp timestamp =
   *          Timestamp.newBuilder().setSeconds(now.getEpochSecond())
   *              .setNanos(now.getNano()).build();
   *
   * Example 6: Compute Timestamp from current time in Python.
   *
   *      timestamp = Timestamp()
   *      timestamp.GetCurrentTime()
   *
   * # JSON Mapping
   *
   * In JSON format, the Timestamp type is encoded as a string in the
   * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the format is
   * "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z" where {year} is always
   * expressed using four digits while {month}, {day}, {hour}, {min}, and {sec} are
   * zero-padded to two digits each. The fractional seconds, which can go up to 9
   * digits (i.e. up to 1 nanosecond resolution), are optional. The "Z" suffix
   * indicates the timezone ("UTC"); the timezone is required. A proto3 JSON
   * serializer should always use UTC (as indicated by "Z") when printing the
   * Timestamp type and a proto3 JSON parser should be able to accept both UTC and
   * other timezones (as indicated by an offset).
   *
   * For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past 01:30 UTC on
   * January 15, 2017.
   *
   * In JavaScript, one can convert a Date object to this format using the standard
   * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
   * method. In Python, a standard `datetime.datetime` object can be converted to
   * this format using
   * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with the
   * time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use the
   * Joda Time's
   * [`ISODateTimeFormat.dateTime()`](<http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()>)
   * to obtain a formatter capable of generating timestamps in this format.
   */
  updatedAt?: string;
}

export type ProjectPhase = 'PROJECT_PHASE_UNSPECIFIED' | 'PROJECT_PHASE_ACTIVE' | 'PROJECT_PHASE_DELETED';

/**
 * ProjectPrebuildConfiguration defines how prebuilds are created for a project.
 * Prebuilds create environment snapshots that enable faster environment startup
 * times.
 */
export interface ProjectPrebuildConfiguration {
  /**
   * enabled controls whether prebuilds are created for this project. When disabled,
   * no automatic prebuilds will be triggered.
   */
  enabled?: boolean;

  /**
   * enable_jetbrains_warmup controls whether JetBrains IDE warmup runs during
   * prebuilds.
   */
  enableJetbrainsWarmup?: boolean;

  /**
   * environment_class_ids specifies which environment classes should have prebuilds
   * created. If empty, no prebuilds are created.
   */
  environmentClassIds?: Array<string>;

  /**
   * executor specifies who runs prebuilds for this project. The executor's SCM
   * credentials are used to clone the repository. If not set, defaults to the
   * project creator.
   */
  executor?: Shared.Subject;

  /**
   * timeout is the maximum duration allowed for a prebuild to complete. If not
   * specified, defaults to 1 hour. Must be between 5 minutes and 2 hours.
   */
  timeout?: string;

  /**
   * trigger defines when prebuilds should be created.
   */
  trigger?: ProjectPrebuildConfiguration.Trigger;
}

export namespace ProjectPrebuildConfiguration {
  /**
   * trigger defines when prebuilds should be created.
   */
  export interface Trigger {
    /**
     * daily_schedule triggers a prebuild once per day at the specified hour (UTC). The
     * actual start time may vary slightly to distribute system load.
     */
    dailySchedule: Trigger.DailySchedule;
  }

  export namespace Trigger {
    /**
     * daily_schedule triggers a prebuild once per day at the specified hour (UTC). The
     * actual start time may vary slightly to distribute system load.
     */
    export interface DailySchedule {
      /**
       * hour_utc is the hour of day (0-23) in UTC when the prebuild should start. The
       * actual start time may be adjusted by a few minutes to balance system load.
       */
      hourUtc?: number;
    }
  }
}

/**
 * RecommendedEditors contains the map of recommended editors and their versions.
 */
export interface RecommendedEditors {
  /**
   * editors maps editor aliases to their recommended versions. Key is the editor
   * alias (e.g., "intellij", "goland", "vscode"). Value contains the list of
   * recommended versions for that editor. If versions list is empty, all available
   * versions are recommended. Example: {"intellij": {versions: ["2025.1",
   * "2024.3"]}, "goland": {}}
   */
  editors?: { [key: string]: RecommendedEditors.Editors };
}

export namespace RecommendedEditors {
  /**
   * EditorVersions contains the recommended versions for an editor.
   */
  export interface Editors {
    /**
     * versions is the list of recommended versions for this editor. If empty, all
     * available versions are recommended. Examples for JetBrains: ["2025.1", "2024.3"]
     */
    versions?: Array<string>;
  }
}

export interface ProjectCreateResponse {
  project?: Project;
}

export interface ProjectRetrieveResponse {
  project?: Project;
}

export interface ProjectUpdateResponse {
  project?: Project;
}

export type ProjectDeleteResponse = unknown;

export interface ProjectCreateFromEnvironmentResponse {
  project?: Project;
}

export interface ProjectCreateParams {
  /**
   * initializer is the content initializer
   */
  initializer: EnvironmentInitializer;

  /**
   * automations_file_path is the path to the automations file relative to the repo
   * root path must not be absolute (start with a /):
   *
   * ```
   * this.matches('^$|^[^/].*')
   * ```
   */
  automationsFilePath?: string;

  /**
   * devcontainer_file_path is the path to the devcontainer file relative to the repo
   * root path must not be absolute (start with a /):
   *
   * ```
   * this.matches('^$|^[^/].*')
   * ```
   */
  devcontainerFilePath?: string;

  name?: string;

  /**
   * prebuild_configuration defines how prebuilds are created for this project. If
   * not set, prebuilds are disabled for the project.
   */
  prebuildConfiguration?: ProjectPrebuildConfiguration;

  /**
   * technical_description is a detailed technical description of the project This
   * field is not returned by default in GetProject or ListProjects responses 8KB max
   */
  technicalDescription?: string;
}

export interface ProjectRetrieveParams {
  /**
   * project_id specifies the project identifier
   */
  projectId?: string;
}

export interface ProjectUpdateParams {
  /**
   * automations_file_path is the path to the automations file relative to the repo
   * root path must not be absolute (start with a /):
   *
   * ```
   * this.matches('^$|^[^/].*')
   * ```
   */
  automationsFilePath?: string | null;

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
   * initializer is the content initializer
   */
  initializer?: EnvironmentInitializer | null;

  name?: string | null;

  /**
   * prebuild_configuration defines how prebuilds are created for this project. If
   * not provided, the existing prebuild configuration is not modified. To disable
   * prebuilds, set enabled to false.
   */
  prebuildConfiguration?: ProjectPrebuildConfiguration | null;

  /**
   * project_id specifies the project identifier
   */
  projectId?: string;

  /**
   * recommended_editors specifies the editors recommended for this project. If not
   * provided, the existing recommended editors are not modified. To clear all
   * recommended editors, set to an empty RecommendedEditors message.
   */
  recommendedEditors?: RecommendedEditors | null;

  /**
   * technical_description is a detailed technical description of the project This
   * field is not returned by default in GetProject or ListProjects responses 8KB max
   */
  technicalDescription?: string | null;
}

export interface ProjectListParams extends ProjectsPageParams {
  /**
   * Body param
   */
  filter?: ProjectListParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing organizations
   */
  pagination?: ProjectListParams.Pagination;
}

export namespace ProjectListParams {
  export interface Filter {
    /**
     * project_ids filters the response to only projects with these IDs
     */
    projectIds?: Array<string>;

    /**
     * runner_ids filters the response to only projects that use environment classes
     * from these runners
     */
    runnerIds?: Array<string>;

    /**
     * runner_kinds filters the response to only projects that use environment classes
     * from runners of these kinds
     */
    runnerKinds?: Array<RunnersAPI.RunnerKind>;

    /**
     * search performs case-insensitive search across project name, project ID, and
     * repository name
     */
    search?: string;
  }

  /**
   * pagination contains the pagination options for listing organizations
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

export interface ProjectDeleteParams {
  /**
   * project_id specifies the project identifier
   */
  projectId?: string;
}

export interface ProjectCreateFromEnvironmentParams {
  /**
   * environment_id specifies the environment identifier
   */
  environmentId?: string;

  name?: string;
}

Projects.EnvironmentClases = EnvironmentClases;
Projects.Policies = Policies;

export declare namespace Projects {
  export {
    type EnvironmentInitializer as EnvironmentInitializer,
    type Project as Project,
    type ProjectMetadata as ProjectMetadata,
    type ProjectPhase as ProjectPhase,
    type ProjectPrebuildConfiguration as ProjectPrebuildConfiguration,
    type RecommendedEditors as RecommendedEditors,
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectUpdateResponse as ProjectUpdateResponse,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectCreateFromEnvironmentResponse as ProjectCreateFromEnvironmentResponse,
    type ProjectsProjectsPage as ProjectsProjectsPage,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectRetrieveParams as ProjectRetrieveParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectCreateFromEnvironmentParams as ProjectCreateFromEnvironmentParams,
  };

  export {
    EnvironmentClases as EnvironmentClases,
    type EnvironmentClaseUpdateResponse as EnvironmentClaseUpdateResponse,
    type EnvironmentClaseUpdateParams as EnvironmentClaseUpdateParams,
    type EnvironmentClaseListParams as EnvironmentClaseListParams,
  };

  export {
    Policies as Policies,
    type ProjectPolicy as ProjectPolicy,
    type ProjectRole as ProjectRole,
    type PolicyCreateResponse as PolicyCreateResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyDeleteResponse as PolicyDeleteResponse,
    type ProjectPoliciesPoliciesPage as ProjectPoliciesPoliciesPage,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
  };
}
