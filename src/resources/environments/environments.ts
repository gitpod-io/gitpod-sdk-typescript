// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
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
import { APIPromise } from '../../api-promise';
import { EnvironmentsPage, type EnvironmentsPageParams, PagePromise } from '../../pagination';
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
   */
  delete(body: EnvironmentDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentService/DeleteEnvironment', { body, ...options });
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
   */
  stop(body: EnvironmentStopParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentService/StopEnvironment', { body, ...options });
  }
}

export type EnvironmentsEnvironmentsPage = EnvironmentsPage<Environment>;

/**
 * Admission level describes who can access an environment instance and its ports.
 */
export type AdmissionLevel =
  | 'ADMISSION_LEVEL_UNSPECIFIED'
  | 'ADMISSION_LEVEL_OWNER_ONLY'
  | 'ADMISSION_LEVEL_EVERYONE';

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
   * EnvironmentMetadata is data associated with an environment that's required for
   * other parts of the system to function
   */
  metadata?: EnvironmentMetadata;

  /**
   * EnvironmentSpec specifies the configuration of an environment for an environment
   * start
   */
  spec?: EnvironmentSpec;

  /**
   * EnvironmentStatus describes an environment status
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
  annotations?: Record<string, string>;

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
   * creator is the identity of the creator of the environment
   */
  creator?: Shared.Subject;

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
   * If the Environment was started from a project, the project_id will reference the
   * project.
   */
  projectId?: string;

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
 * EnvironmentSpec specifies the configuration of an environment for an environment
 * start
 */
export interface EnvironmentSpec {
  /**
   * Admission level describes who can access an environment instance and its ports.
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
   * machine is the machine spec of the environment
   */
  machine?: EnvironmentSpec.Machine;

  /**
   * ports is the set of ports which ought to be exposed to the internet
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
     * EnvironmentInitializer specifies how an environment is to be initialized
     */
    initializer?: ProjectsAPI.EnvironmentInitializer;

    session?: string;
  }

  /**
   * devcontainer is the devcontainer spec of the environment
   */
  export interface Devcontainer {
    /**
     * devcontainer_file_path is the path to the devcontainer file relative to the repo
     * root path must not be absolute (start with a /):
     *
     * ```
     * this.matches('^$|^[^/].*')
     * ```
     */
    devcontainerFilePath?: string;

    session?: string;
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
     * Admission level describes who can access an environment instance and its ports.
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
  }

  export interface Secret {
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
     * A Duration represents a signed, fixed-length span of time represented as a count
     * of seconds and fractions of seconds at nanosecond resolution. It is independent
     * of any calendar and concepts like "day" or "month". It is related to Timestamp
     * in that the difference between two Timestamp values is a Duration and it can be
     * added or subtracted from a Timestamp. Range is approximately +-10,000 years.
     *
     * # Examples
     *
     * Example 1: Compute Duration from two Timestamps in pseudo code.
     *
     *      Timestamp start = ...;
     *      Timestamp end = ...;
     *      Duration duration = ...;
     *
     *      duration.seconds = end.seconds - start.seconds;
     *      duration.nanos = end.nanos - start.nanos;
     *
     *      if (duration.seconds < 0 && duration.nanos > 0) {
     *        duration.seconds += 1;
     *        duration.nanos -= 1000000000;
     *      } else if (duration.seconds > 0 && duration.nanos < 0) {
     *        duration.seconds -= 1;
     *        duration.nanos += 1000000000;
     *      }
     *
     * Example 2: Compute Timestamp from Timestamp + Duration in pseudo code.
     *
     *      Timestamp start = ...;
     *      Duration duration = ...;
     *      Timestamp end = ...;
     *
     *      end.seconds = start.seconds + duration.seconds;
     *      end.nanos = start.nanos + duration.nanos;
     *
     *      if (end.nanos < 0) {
     *        end.seconds -= 1;
     *        end.nanos += 1000000000;
     *      } else if (end.nanos >= 1000000000) {
     *        end.seconds += 1;
     *        end.nanos -= 1000000000;
     *      }
     *
     * Example 3: Compute Duration from datetime.timedelta in Python.
     *
     *      td = datetime.timedelta(days=3, minutes=10)
     *      duration = Duration()
     *      duration.FromTimedelta(td)
     *
     * # JSON Mapping
     *
     * In JSON format, the Duration type is encoded as a string rather than an object,
     * where the string ends in the suffix "s" (indicating seconds) and is preceded by
     * the number of seconds, with nanoseconds expressed as fractional seconds. For
     * example, 3 seconds with 0 nanoseconds should be encoded in JSON format as "3s",
     * while 3 seconds and 1 nanosecond should be expressed in JSON format as
     * "3.000000001s", and 3 seconds and 1 microsecond should be expressed in JSON
     * format as "3.000001s".
     */
    disconnected?: string;
  }
}

/**
 * EnvironmentStatus describes an environment status
 */
export interface EnvironmentStatus {
  /**
   * EnvironmentActivitySignal used to signal activity for an environment.
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
   * RunnerACK is the acknowledgement from the runner that is has received the
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
      | 'CONTENT_PHASE_FAILED';

    /**
     * session is the automations file session that is currently applied in the
     * environment.
     */
    session?: string;
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
      | 'CONTENT_PHASE_FAILED';

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

    ports?: Array<EnvironmentURLs.Port>;

    /**
     * SSH is the URL at which the environment can be accessed via SSH.
     */
    ssh?: EnvironmentURLs.SSH;
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
      supervisorCommit?: string;

      supervisorVersion?: string;
    }
  }

  /**
   * RunnerACK is the acknowledgement from the runner that is has received the
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
     * failure_message contains the reason the secret failed to be materialize.
     */
    failureMessage?: string;

    phase?:
      | 'CONTENT_PHASE_UNSPECIFIED'
      | 'CONTENT_PHASE_CREATING'
      | 'CONTENT_PHASE_INITIALIZING'
      | 'CONTENT_PHASE_READY'
      | 'CONTENT_PHASE_UPDATING'
      | 'CONTENT_PHASE_FAILED';

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
      | 'CONTENT_PHASE_FAILED';
  }
}

export interface EnvironmentCreateResponse {
  /**
   * +resource get environment
   */
  environment?: Environment;
}

export interface EnvironmentRetrieveResponse {
  /**
   * +resource get environment
   */
  environment?: Environment;
}

export type EnvironmentUpdateResponse = unknown;

export type EnvironmentDeleteResponse = unknown;

export interface EnvironmentCreateFromProjectResponse {
  /**
   * +resource get environment
   */
  environment?: Environment;
}

export interface EnvironmentCreateLogsTokenResponse {
  /**
   * access_token is the token that can be used to access the logs of the environment
   */
  accessToken?: string;
}

export type EnvironmentMarkActiveResponse = unknown;

export type EnvironmentStartResponse = unknown;

export type EnvironmentStopResponse = unknown;

export interface EnvironmentCreateParams {
  /**
   * EnvironmentSpec specifies the configuration of an environment for an environment
   * start
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

  metadata?: unknown | null;

  spec?: EnvironmentUpdateParams.Spec | null;
}

export namespace EnvironmentUpdateParams {
  export interface Spec {
    /**
     * automations_file is the automations file spec of the environment
     */
    automationsFile?: Spec.AutomationsFile | null;

    content?: Spec.Content | null;

    devcontainer?: Spec.Devcontainer | null;

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
       * EnvironmentInitializer specifies how an environment is to be initialized
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
       * Admission level describes who can access an environment instance and its ports.
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
       * A Duration represents a signed, fixed-length span of time represented as a count
       * of seconds and fractions of seconds at nanosecond resolution. It is independent
       * of any calendar and concepts like "day" or "month". It is related to Timestamp
       * in that the difference between two Timestamp values is a Duration and it can be
       * added or subtracted from a Timestamp. Range is approximately +-10,000 years.
       *
       * # Examples
       *
       * Example 1: Compute Duration from two Timestamps in pseudo code.
       *
       *      Timestamp start = ...;
       *      Timestamp end = ...;
       *      Duration duration = ...;
       *
       *      duration.seconds = end.seconds - start.seconds;
       *      duration.nanos = end.nanos - start.nanos;
       *
       *      if (duration.seconds < 0 && duration.nanos > 0) {
       *        duration.seconds += 1;
       *        duration.nanos -= 1000000000;
       *      } else if (duration.seconds > 0 && duration.nanos < 0) {
       *        duration.seconds -= 1;
       *        duration.nanos += 1000000000;
       *      }
       *
       * Example 2: Compute Timestamp from Timestamp + Duration in pseudo code.
       *
       *      Timestamp start = ...;
       *      Duration duration = ...;
       *      Timestamp end = ...;
       *
       *      end.seconds = start.seconds + duration.seconds;
       *      end.nanos = start.nanos + duration.nanos;
       *
       *      if (end.nanos < 0) {
       *        end.seconds -= 1;
       *        end.nanos += 1000000000;
       *      } else if (end.nanos >= 1000000000) {
       *        end.seconds += 1;
       *        end.nanos -= 1000000000;
       *      }
       *
       * Example 3: Compute Duration from datetime.timedelta in Python.
       *
       *      td = datetime.timedelta(days=3, minutes=10)
       *      duration = Duration()
       *      duration.FromTimedelta(td)
       *
       * # JSON Mapping
       *
       * In JSON format, the Duration type is encoded as a string rather than an object,
       * where the string ends in the suffix "s" (indicating seconds) and is preceded by
       * the number of seconds, with nanoseconds expressed as fractional seconds. For
       * example, 3 seconds with 0 nanoseconds should be encoded in JSON format as "3s",
       * while 3 seconds and 1 nanosecond should be expressed in JSON format as
       * "3.000000001s", and 3 seconds and 1 microsecond should be expressed in JSON
       * format as "3.000001s".
       */
      disconnected?: string | null;
    }
  }
}

export interface EnvironmentListParams extends EnvironmentsPageParams {
  /**
   * Body param:
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

export interface EnvironmentCreateFromProjectParams {
  projectId?: string;

  /**
   * EnvironmentSpec specifies the configuration of an environment for an environment
   * start
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
   * EnvironmentActivitySignal used to signal activity for an environment.
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

Environments.Automations = Automations;
Environments.Classes = Classes;

export declare namespace Environments {
  export {
    type AdmissionLevel as AdmissionLevel,
    type Environment as Environment,
    type EnvironmentActivitySignal as EnvironmentActivitySignal,
    type EnvironmentMetadata as EnvironmentMetadata,
    type EnvironmentPhase as EnvironmentPhase,
    type EnvironmentSpec as EnvironmentSpec,
    type EnvironmentStatus as EnvironmentStatus,
    type EnvironmentCreateResponse as EnvironmentCreateResponse,
    type EnvironmentRetrieveResponse as EnvironmentRetrieveResponse,
    type EnvironmentUpdateResponse as EnvironmentUpdateResponse,
    type EnvironmentDeleteResponse as EnvironmentDeleteResponse,
    type EnvironmentCreateFromProjectResponse as EnvironmentCreateFromProjectResponse,
    type EnvironmentCreateLogsTokenResponse as EnvironmentCreateLogsTokenResponse,
    type EnvironmentMarkActiveResponse as EnvironmentMarkActiveResponse,
    type EnvironmentStartResponse as EnvironmentStartResponse,
    type EnvironmentStopResponse as EnvironmentStopResponse,
    type EnvironmentsEnvironmentsPage as EnvironmentsEnvironmentsPage,
    type EnvironmentCreateParams as EnvironmentCreateParams,
    type EnvironmentRetrieveParams as EnvironmentRetrieveParams,
    type EnvironmentUpdateParams as EnvironmentUpdateParams,
    type EnvironmentListParams as EnvironmentListParams,
    type EnvironmentDeleteParams as EnvironmentDeleteParams,
    type EnvironmentCreateFromProjectParams as EnvironmentCreateFromProjectParams,
    type EnvironmentCreateLogsTokenParams as EnvironmentCreateLogsTokenParams,
    type EnvironmentMarkActiveParams as EnvironmentMarkActiveParams,
    type EnvironmentStartParams as EnvironmentStartParams,
    type EnvironmentStopParams as EnvironmentStopParams,
  };

  export {
    Automations as Automations,
    type AutomationsAPIAutomationsFile as AutomationsFile,
    type AutomationUpsertResponse as AutomationUpsertResponse,
    type AutomationUpsertParams as AutomationUpsertParams,
  };

  export { Classes as Classes, type ClassListParams as ClassListParams };
}
