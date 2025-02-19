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
   * RunnerKind represents the kind of a runner
   */
  kind?: RunnerKind;

  /**
   * The runner's name which is shown to users
   */
  name?: string;

  /**
   * RunnerProvider identifies the specific implementation type of a runner. Each
   * provider maps to a specific kind of runner (local or remote), as specified below
   * for each provider.
   */
  provider?: RunnerProvider;

  runnerId?: string;

  /**
   * The runner's specification
   */
  spec?: RunnerSpec;

  /**
   * RunnerStatus represents the status of a runner
   */
  status?: RunnerStatus;

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
   * RunnerPhase represents the phase a runner is in
   */
  phase?: RunnerPhase;

  /**
   * region is the region the runner is running in, if applicable.
   */
  region?: string;

  systemDetails?: string;

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

  version?: string;
}

export interface RunnerCreateResponse {
  runner: Runner;

  /**
   * deprecated, will be removed. Use exchange_token instead.
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

  authenticationUrl?: string;

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
   * deprecated, will be removed. Use exchange_token instead.
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
   * RunnerKind represents the kind of a runner
   */
  kind?: RunnerKind;

  /**
   * The runner name for humans
   */
  name?: string;

  /**
   * RunnerProvider identifies the specific implementation type of a runner. Each
   * provider maps to a specific kind of runner (local or remote), as specified below
   * for each provider.
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
     * RunnerPhase represents the phase a runner is in
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
