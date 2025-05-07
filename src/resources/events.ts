// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EventsAPI from './events';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { EntriesPage, type EntriesPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { JSONLDecoder } from '../internal/decoders/jsonl';

export class Events extends APIResource {
  /**
   * Lists audit logs with filtering and pagination options.
   *
   * Use this method to:
   *
   * - View audit history
   * - Track user actions
   * - Monitor system changes
   *
   * ### Examples
   *
   * - List all logs:
   *
   *   ```yaml
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * - Filter by actor:
   *
   *   ```yaml
   *   filter:
   *     actorIds: ["d2c94c27-3b76-4a42-b88c-95a85e392c68"]
   *     actorPrincipals: ["PRINCIPAL_USER"]
   *   pagination:
   *     pageSize: 20
   *   ```
   */
  list(
    params: EventListParams,
    options?: RequestOptions,
  ): PagePromise<EventListResponsesEntriesPage, EventListResponse> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList('/gitpod.v1.EventService/ListAuditLogs', EntriesPage<EventListResponse>, {
      query: { token, pageSize },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Streams events for all projects, runners, environments, tasks, and services
   * based on the specified scope.
   *
   * Use this method to:
   *
   * - Monitor resource changes in real-time
   * - Track system events
   * - Receive notifications
   *
   * The scope parameter determines which events to watch:
   *
   * - Organization scope (default): Watch all organization-wide events including
   *   projects, runners and environments. Task and service events are not included.
   *   Use by setting organization=true or omitting the scope.
   * - Environment scope: Watch events for a specific environment, including its
   *   tasks, task executions, and services. Use by setting environment_id to the
   *   UUID of the environment to watch.
   */
  watch(body: EventWatchParams, options?: RequestOptions): APIPromise<JSONLDecoder<EventWatchResponse>> {
    return this._client
      .post('/gitpod.v1.EventService/WatchEvents', {
        body,
        ...options,
        headers: buildHeaders([
          { 'Content-Type': 'application/jsonl', Accept: 'application/jsonl' },
          options?.headers,
        ]),
        stream: true,
        __binaryResponse: true,
      })
      ._thenUnwrap((_, props) => JSONLDecoder.fromResponse(props.response, props.controller)) as APIPromise<
      JSONLDecoder<EventWatchResponse>
    >;
  }
}

export type EventListResponsesEntriesPage = EntriesPage<EventListResponse>;

export type ResourceOperation =
  | 'RESOURCE_OPERATION_UNSPECIFIED'
  | 'RESOURCE_OPERATION_CREATE'
  | 'RESOURCE_OPERATION_UPDATE'
  | 'RESOURCE_OPERATION_DELETE'
  | 'RESOURCE_OPERATION_UPDATE_STATUS';

export type ResourceType =
  | 'RESOURCE_TYPE_UNSPECIFIED'
  | 'RESOURCE_TYPE_ENVIRONMENT'
  | 'RESOURCE_TYPE_RUNNER'
  | 'RESOURCE_TYPE_PROJECT'
  | 'RESOURCE_TYPE_TASK'
  | 'RESOURCE_TYPE_TASK_EXECUTION'
  | 'RESOURCE_TYPE_SERVICE'
  | 'RESOURCE_TYPE_ORGANIZATION'
  | 'RESOURCE_TYPE_USER'
  | 'RESOURCE_TYPE_ENVIRONMENT_CLASS'
  | 'RESOURCE_TYPE_RUNNER_SCM_INTEGRATION'
  | 'RESOURCE_TYPE_HOST_AUTHENTICATION_TOKEN'
  | 'RESOURCE_TYPE_GROUP'
  | 'RESOURCE_TYPE_PERSONAL_ACCESS_TOKEN'
  | 'RESOURCE_TYPE_USER_PREFERENCE'
  | 'RESOURCE_TYPE_SERVICE_ACCOUNT'
  | 'RESOURCE_TYPE_SECRET'
  | 'RESOURCE_TYPE_SSO_CONFIG'
  | 'RESOURCE_TYPE_DOMAIN_VERIFICATION'
  | 'RESOURCE_TYPE_AGENT_EXECUTION'
  | 'RESOURCE_TYPE_RUNNER_LLM_INTEGRATION'
  | 'RESOURCE_TYPE_AGENT'
  | 'RESOURCE_TYPE_ENVIRONMENT_SESSION'
  | 'RESOURCE_TYPE_USER_SECRET'
  | 'RESOURCE_TYPE_ORGANIZATION_POLICY';

export interface EventListResponse {
  id?: string;

  action?: string;

  actorId?: string;

  actorPrincipal?: Shared.Principal;

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

  subjectId?: string;

  subjectType?: ResourceType;
}

export interface EventWatchResponse {
  operation?: ResourceOperation;

  resourceId?: string;

  resourceType?: ResourceType;
}

export interface EventListParams extends EntriesPageParams {
  /**
   * Body param:
   */
  filter?: EventListParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing environments
   */
  pagination?: EventListParams.Pagination;
}

export namespace EventListParams {
  export interface Filter {
    actorIds?: Array<string>;

    actorPrincipals?: Array<Shared.Principal>;

    subjectIds?: Array<string>;

    subjectTypes?: Array<EventsAPI.ResourceType>;
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

export interface EventWatchParams {
  /**
   * Environment scope produces events for the environment itself, all tasks, task
   * executions, and services associated with that environment.
   */
  environmentId?: string;

  /**
   * Organization scope produces events for all projects, runners and environments
   * the caller can see within their organization. No task, task execution or service
   * events are produed.
   */
  organization?: boolean;
}

export declare namespace Events {
  export {
    type ResourceOperation as ResourceOperation,
    type ResourceType as ResourceType,
    type EventListResponse as EventListResponse,
    type EventWatchResponse as EventWatchResponse,
    type EventListResponsesEntriesPage as EventListResponsesEntriesPage,
    type EventListParams as EventListParams,
    type EventWatchParams as EventWatchParams,
  };
}
