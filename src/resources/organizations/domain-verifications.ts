// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { DomainVerificationsPage, type DomainVerificationsPageParams, PagePromise } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';

export class DomainVerifications extends APIResource {
  /**
   * Initiates domain verification process to enable organization features.
   *
   * Use this method to:
   *
   * - Start domain ownership verification
   * - Enable automatic team joining
   * - Set up SSO restrictions
   * - Configure email-based policies
   *
   * ### Examples
   *
   * - Verify primary domain:
   *
   *   Starts verification for main company domain.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   domain: "acme-corp.com"
   *   ```
   *
   * - Verify subsidiary domain:
   *
   *   Adds verification for additional company domain.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   domain: "acme-subsidiary.com"
   *   ```
   */
  create(
    body: DomainVerificationCreateParams,
    options?: RequestOptions,
  ): APIPromise<DomainVerificationCreateResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/CreateDomainVerification', { body, ...options });
  }

  /**
   * Retrieves the status of a domain verification request.
   *
   * Use this method to:
   *
   * - Check verification progress
   * - View verification requirements
   * - Monitor domain status
   *
   * ### Examples
   *
   * - Get verification status:
   *
   *   Checks the current state of a domain verification.
   *
   *   ```yaml
   *   domainVerificationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   */
  retrieve(
    body: DomainVerificationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<DomainVerificationRetrieveResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/GetDomainVerification', { body, ...options });
  }

  /**
   * Lists and monitors domain verification status across an organization.
   *
   * Use this method to:
   *
   * - Track verification progress
   * - View all verified domains
   * - Monitor pending verifications
   * - Audit domain settings
   *
   * ### Examples
   *
   * - List all verifications:
   *
   *   Shows all domain verifications regardless of status.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * - List with pagination:
   *
   *   Retrieves next page of verifications.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   pagination:
   *     pageSize: 20
   *     token: "next-page-token-from-previous-response"
   *   ```
   */
  list(
    params: DomainVerificationListParams,
    options?: RequestOptions,
  ): PagePromise<DomainVerificationsDomainVerificationsPage, DomainVerification> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.OrganizationService/ListDomainVerifications',
      DomainVerificationsPage<DomainVerification>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Removes a domain verification request.
   *
   * Use this method to:
   *
   * - Cancel pending verifications
   * - Remove verified domains
   * - Clean up unused domain records
   *
   * ### Examples
   *
   * - Delete verification:
   *
   *   Removes a domain verification request.
   *
   *   ```yaml
   *   domainVerificationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   */
  delete(body: DomainVerificationDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.OrganizationService/DeleteDomainVerification', { body, ...options });
  }

  /**
   * Verifies domain ownership for an organization.
   *
   * Use this method to:
   *
   * - Complete domain verification process
   * - Enable domain-based features
   * - Validate DNS configuration
   *
   * ### Examples
   *
   * - Verify domain ownership:
   *
   *   Verifies ownership after DNS records are configured.
   *
   *   ```yaml
   *   domainVerificationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   */
  verify(
    body: DomainVerificationVerifyParams,
    options?: RequestOptions,
  ): APIPromise<DomainVerificationVerifyResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/VerifyDomain', { body, ...options });
  }
}

export type DomainVerificationsDomainVerificationsPage = DomainVerificationsPage<DomainVerification>;

export interface DomainVerification {
  id: string;

  domain: string;

  organizationId: string;

  state: DomainVerificationState;

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

  verificationToken?: string;

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
  verifiedAt?: string;
}

export type DomainVerificationState =
  | 'DOMAIN_VERIFICATION_STATE_UNSPECIFIED'
  | 'DOMAIN_VERIFICATION_STATE_PENDING'
  | 'DOMAIN_VERIFICATION_STATE_VERIFIED';

export interface DomainVerificationCreateResponse {
  domainVerification: DomainVerification;
}

export interface DomainVerificationRetrieveResponse {
  domainVerification: DomainVerification;
}

export type DomainVerificationDeleteResponse = unknown;

export interface DomainVerificationVerifyResponse {
  domainVerification: DomainVerification;
}

export interface DomainVerificationCreateParams {
  domain: string;

  organizationId: string;
}

export interface DomainVerificationRetrieveParams {
  domainVerificationId: string;
}

export interface DomainVerificationListParams extends DomainVerificationsPageParams {
  /**
   * Body param:
   */
  organizationId: string;

  /**
   * Body param:
   */
  pagination?: DomainVerificationListParams.Pagination;
}

export namespace DomainVerificationListParams {
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

export interface DomainVerificationDeleteParams {
  domainVerificationId: string;
}

export interface DomainVerificationVerifyParams {
  domainVerificationId: string;
}

export declare namespace DomainVerifications {
  export {
    type DomainVerification as DomainVerification,
    type DomainVerificationState as DomainVerificationState,
    type DomainVerificationCreateResponse as DomainVerificationCreateResponse,
    type DomainVerificationRetrieveResponse as DomainVerificationRetrieveResponse,
    type DomainVerificationDeleteResponse as DomainVerificationDeleteResponse,
    type DomainVerificationVerifyResponse as DomainVerificationVerifyResponse,
    type DomainVerificationsDomainVerificationsPage as DomainVerificationsDomainVerificationsPage,
    type DomainVerificationCreateParams as DomainVerificationCreateParams,
    type DomainVerificationRetrieveParams as DomainVerificationRetrieveParams,
    type DomainVerificationListParams as DomainVerificationListParams,
    type DomainVerificationDeleteParams as DomainVerificationDeleteParams,
    type DomainVerificationVerifyParams as DomainVerificationVerifyParams,
  };
}
