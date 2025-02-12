// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Shared from './shared';
import { APIPromise } from '../api-promise';
import { PagePromise, SecretsPage, type SecretsPageParams } from '../pagination';
import { RequestOptions } from '../internal/request-options';

export class Secrets extends APIResource {
  /**
   * CreateSecret creates a new secret.
   */
  create(body: SecretCreateParams, options?: RequestOptions): APIPromise<SecretCreateResponse> {
    return this._client.post('/gitpod.v1.SecretService/CreateSecret', { body, ...options });
  }

  /**
   * ListSecrets lists secrets.
   */
  list(params: SecretListParams, options?: RequestOptions): PagePromise<SecretsSecretsPage, Secret> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList('/gitpod.v1.SecretService/ListSecrets', SecretsPage<Secret>, {
      query: { token, pageSize },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * DeleteSecret deletes a secret.
   */
  delete(body: SecretDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.SecretService/DeleteSecret', { body, ...options });
  }

  /**
   * GetSecretValue retrieves the value of a secret Only Environments can perform
   * this operation, and only for secrets specified on the EnvironmentSpec.
   */
  getValue(body: SecretGetValueParams, options?: RequestOptions): APIPromise<SecretGetValueResponse> {
    return this._client.post('/gitpod.v1.SecretService/GetSecretValue', { body, ...options });
  }

  /**
   * UpdateSecretValue updates the value of a secret.
   */
  updateValue(body: SecretUpdateValueParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.SecretService/UpdateSecretValue', { body, ...options });
  }
}

export type SecretsSecretsPage = SecretsPage<Secret>;

export interface Secret {
  id?: string;

  /**
   * secret will be mounted as a registry secret
   */
  containerRegistryBasicAuthHost?: string;

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
   * creator is the identity of the creator of the secret
   */
  creator?: Shared.Subject;

  /**
   * secret will be created as an Environment Variable with the same name as the
   * secret
   */
  environmentVariable?: boolean;

  /**
   * absolute path to the file where the secret is mounted
   */
  filePath?: string;

  /**
   * Name of the secret for humans.
   */
  name?: string;

  /**
   * The Project ID this Secret belongs to
   */
  projectId?: string;

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

export interface SecretCreateResponse {
  secret?: Secret;
}

export type SecretDeleteResponse = unknown;

export interface SecretGetValueResponse {
  value?: string;
}

export type SecretUpdateValueResponse = unknown;

export interface SecretCreateParams {
  /**
   * secret will be mounted as a docker config in the environment VM, mount will have
   * the docker host value must be a valid registry hostname with optional port:
   *
   * ```
   * this.matches('^[a-zA-Z0-9][a-zA-Z0-9.-]*[a-zA-Z0-9](:[0-9]+)?$')
   * ```
   */
  containerRegistryBasicAuthHost?: string;

  /**
   * secret will be created as an Environment Variable with the same name as the
   * secret
   */
  environmentVariable?: boolean;

  /**
   * absolute path to the file where the secret is mounted value must be an absolute
   * path (start with a /):
   *
   * ```
   * this.matches('^/(?:[^/]* /)*.*$')
   * ```
   */
  filePath?: string;

  name?: string;

  /**
   * project_id is the ProjectID this Secret belongs to
   */
  projectId?: string;

  /**
   * value is the plaintext value of the secret
   */
  value?: string;
}

export interface SecretListParams extends SecretsPageParams {
  /**
   * Body param:
   */
  filter?: SecretListParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing environments
   */
  pagination?: SecretListParams.Pagination;
}

export namespace SecretListParams {
  export interface Filter {
    /**
     * project_ids filters the response to only Secrets used by these Project IDs
     */
    projectIds?: Array<string>;
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

export interface SecretDeleteParams {
  secretId?: string;
}

export interface SecretGetValueParams {
  secretId?: string;
}

export interface SecretUpdateValueParams {
  secretId?: string;

  /**
   * value is the plaintext value of the secret
   */
  value?: string;
}

export declare namespace Secrets {
  export {
    type Secret as Secret,
    type SecretCreateResponse as SecretCreateResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretGetValueResponse as SecretGetValueResponse,
    type SecretUpdateValueResponse as SecretUpdateValueResponse,
    type SecretsSecretsPage as SecretsSecretsPage,
    type SecretCreateParams as SecretCreateParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretGetValueParams as SecretGetValueParams,
    type SecretUpdateValueParams as SecretUpdateValueParams,
  };
}
