// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, SecurityPoliciesPage, type SecurityPoliciesPageParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class SecurityPolicies extends APIResource {
  /**
   * Creates a new security policy.
   *
   * Use this method to:
   *
   * - Define environment access controls
   * - Configure audited or blocked operations
   * - Manage organization security posture
   *
   * ### Examples
   *
   * - Create security policy:
   *
   *   Creates an audit-first Veto Exec policy with one audited bare name and one
   *   blocked absolute path. Creation stores an inactive definition; assigning it as
   *   the organization default validates materializability.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   metadata:
   *     name: "Veto Exec audit-first"
   *   spec:
   *     executables:
   *       defaultEffect: EFFECT_ALLOW
   *       rules:
   *         - path: "npx"
   *           effect: EFFECT_AUDIT
   *         - path: "/usr/bin/curl"
   *           effect: EFFECT_BLOCK
   *   ```
   *
   * @example
   * ```ts
   * const securityPolicy = await client.securityPolicies.create(
   *   {
   *     metadata: { name: 'Veto Exec audit-first' },
   *     spec: {
   *       executables: {
   *         defaultEffect: 'EFFECT_ALLOW',
   *         rules: [
   *           { effect: 'EFFECT_AUDIT', path: 'npx' },
   *           { effect: 'EFFECT_BLOCK', path: '/usr/bin/curl' },
   *         ],
   *       },
   *     },
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   },
   * );
   * ```
   */
  create(
    body: SecurityPolicyCreateParams,
    options?: RequestOptions,
  ): APIPromise<SecurityPolicyCreateResponse> {
    return this._client.post('/gitpod.v1.SecurityService/CreateSecurityPolicy', { body, ...options });
  }

  /**
   * Gets details about a specific security policy.
   *
   * Use this method to:
   *
   * - View security policy configuration
   * - Inspect enforcement rules
   *
   * ### Examples
   *
   * - Get security policy:
   *
   *   Retrieves a security policy by ID.
   *
   *   ```yaml
   *   securityPolicyId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const securityPolicy =
   *   await client.securityPolicies.retrieve({
   *     securityPolicyId:
   *       'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   });
   * ```
   */
  retrieve(
    body: SecurityPolicyRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SecurityPolicyRetrieveResponse> {
    return this._client.post('/gitpod.v1.SecurityService/GetSecurityPolicy', { body, ...options });
  }

  /**
   * Updates a security policy.
   *
   * Use this method to:
   *
   * - Rename a security policy
   * - Change enforcement rules
   * - Update auditing behavior
   *
   * ### Examples
   *
   * - Update security policy:
   *
   *   Promotes one executable rule from audit to block while leaving unmatched
   *   executables allowed. Updating an assigned policy validates materializability;
   *   updating an unassigned policy only stores its spec.
   *
   *   ```yaml
   *   securityPolicyId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   spec:
   *     executables:
   *       defaultEffect: EFFECT_ALLOW
   *       rules:
   *         - path: "npx"
   *           effect: EFFECT_BLOCK
   *         - path: "/usr/bin/curl"
   *           effect: EFFECT_BLOCK
   *   ```
   *
   * @example
   * ```ts
   * const securityPolicy = await client.securityPolicies.update(
   *   {
   *     securityPolicyId:
   *       'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *     spec: {
   *       executables: {
   *         defaultEffect: 'EFFECT_ALLOW',
   *         rules: [
   *           { effect: 'EFFECT_BLOCK', path: 'npx' },
   *           { effect: 'EFFECT_BLOCK', path: '/usr/bin/curl' },
   *         ],
   *       },
   *     },
   *   },
   * );
   * ```
   */
  update(
    body: SecurityPolicyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SecurityPolicyUpdateResponse> {
    return this._client.post('/gitpod.v1.SecurityService/UpdateSecurityPolicy', { body, ...options });
  }

  /**
   * Lists security policies.
   *
   * Use this method to:
   *
   * - View all security policies in an organization
   * - Audit configured security controls
   *
   * ### Examples
   *
   * - List organization policies:
   *
   *   Shows security policies with pagination.
   *
   *   ```yaml
   *   filter:
   *     organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const securityPolicy of client.securityPolicies.list(
   *   {
   *     filter: {
   *       organizationId:
   *         'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *     },
   *     pagination: { pageSize: 20 },
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SecurityPolicyListParams,
    options?: RequestOptions,
  ): PagePromise<SecurityPoliciesSecurityPoliciesPage, SecurityPolicy> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.SecurityService/ListSecurityPolicies',
      SecurityPoliciesPage<SecurityPolicy>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Deletes a security policy.
   *
   * Use this method to:
   *
   * - Remove obsolete security policies
   * - Clean up unused policy definitions
   *
   * ### Examples
   *
   * - Delete security policy:
   *
   *   Permanently removes a security policy.
   *
   *   ```yaml
   *   securityPolicyId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * @example
   * ```ts
   * const securityPolicy = await client.securityPolicies.delete(
   *   {
   *     securityPolicyId:
   *       'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   },
   * );
   * ```
   */
  delete(body: SecurityPolicyDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.SecurityService/DeleteSecurityPolicy', { body, ...options });
  }
}

export type SecurityPoliciesSecurityPoliciesPage = SecurityPoliciesPage<SecurityPolicy>;

export interface SecurityPolicy {
  metadata: SecurityPolicy.Metadata;

  /**
   * Mandate/deploy security agents, e.g. CrowdStrike. Mandate credential
   * security/proxy use. These can be modeled later as explicit fields if needed.
   */
  spec: SecurityPolicy.Spec;

  id?: string;

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

export namespace SecurityPolicy {
  export interface Metadata {
    name?: string;
  }

  /**
   * Mandate/deploy security agents, e.g. CrowdStrike. Mandate credential
   * security/proxy use. These can be modeled later as explicit fields if needed.
   */
  export interface Spec {
    /**
     * executables is the public Veto Exec GA policy surface.
     */
    executables?: Spec.Executables;
  }

  export namespace Spec {
    /**
     * executables is the public Veto Exec GA policy surface.
     */
    export interface Executables {
      /**
       * default_effect controls executables that do not match a rule. For Veto Exec,
       * omit this field or set it to EFFECT_ALLOW. EFFECT_UNSPECIFIED is normalized to
       * EFFECT_ALLOW.
       */
      defaultEffect?: 'EFFECT_UNSPECIFIED' | 'EFFECT_ALLOW' | 'EFFECT_BLOCK' | 'EFFECT_AUDIT';

      /**
       * rules contains executable-specific audit or block decisions.
       */
      rules?: Array<Executables.Rule>;
    }

    export namespace Executables {
      export interface Rule {
        /**
         * effect must be EFFECT_AUDIT or EFFECT_BLOCK. EFFECT_ALLOW is not supported on an
         * executable rule.
         */
        effect?: 'EFFECT_UNSPECIFIED' | 'EFFECT_ALLOW' | 'EFFECT_BLOCK' | 'EFFECT_AUDIT';

        /**
         * path is either an absolute executable path, such as /usr/bin/curl, or a bare
         * executable name, such as npx. Bare names are expanded by runtime discovery.
         * Surrounding whitespace is ignored. Empty or whitespace-only selectors and
         * relative paths with directory separators are invalid. Enforcement uses
         * executable content hashes, so different paths with identical content share one
         * runtime decision and block wins conflicts.
         */
        path?: string;
      }
    }
  }
}

export interface SecurityPolicyCreateResponse {
  securityPolicy: SecurityPolicy;
}

export interface SecurityPolicyRetrieveResponse {
  securityPolicy: SecurityPolicy;
}

export interface SecurityPolicyUpdateResponse {
  securityPolicy: SecurityPolicy;
}

export type SecurityPolicyDeleteResponse = unknown;

export interface SecurityPolicyCreateParams {
  metadata: SecurityPolicyCreateParams.Metadata;

  /**
   * Mandate/deploy security agents, e.g. CrowdStrike. Mandate credential
   * security/proxy use. These can be modeled later as explicit fields if needed.
   */
  spec: SecurityPolicyCreateParams.Spec;

  organizationId?: string;
}

export namespace SecurityPolicyCreateParams {
  export interface Metadata {
    name?: string;
  }

  /**
   * Mandate/deploy security agents, e.g. CrowdStrike. Mandate credential
   * security/proxy use. These can be modeled later as explicit fields if needed.
   */
  export interface Spec {
    /**
     * executables is the public Veto Exec GA policy surface.
     */
    executables?: Spec.Executables;
  }

  export namespace Spec {
    /**
     * executables is the public Veto Exec GA policy surface.
     */
    export interface Executables {
      /**
       * default_effect controls executables that do not match a rule. For Veto Exec,
       * omit this field or set it to EFFECT_ALLOW. EFFECT_UNSPECIFIED is normalized to
       * EFFECT_ALLOW.
       */
      defaultEffect?: 'EFFECT_UNSPECIFIED' | 'EFFECT_ALLOW' | 'EFFECT_BLOCK' | 'EFFECT_AUDIT';

      /**
       * rules contains executable-specific audit or block decisions.
       */
      rules?: Array<Executables.Rule>;
    }

    export namespace Executables {
      export interface Rule {
        /**
         * effect must be EFFECT_AUDIT or EFFECT_BLOCK. EFFECT_ALLOW is not supported on an
         * executable rule.
         */
        effect?: 'EFFECT_UNSPECIFIED' | 'EFFECT_ALLOW' | 'EFFECT_BLOCK' | 'EFFECT_AUDIT';

        /**
         * path is either an absolute executable path, such as /usr/bin/curl, or a bare
         * executable name, such as npx. Bare names are expanded by runtime discovery.
         * Surrounding whitespace is ignored. Empty or whitespace-only selectors and
         * relative paths with directory separators are invalid. Enforcement uses
         * executable content hashes, so different paths with identical content share one
         * runtime decision and block wins conflicts.
         */
        path?: string;
      }
    }
  }
}

export interface SecurityPolicyRetrieveParams {
  securityPolicyId?: string;
}

export interface SecurityPolicyUpdateParams {
  metadata?: SecurityPolicyUpdateParams.Metadata;

  securityPolicyId?: string;

  /**
   * Mandate/deploy security agents, e.g. CrowdStrike. Mandate credential
   * security/proxy use. These can be modeled later as explicit fields if needed.
   */
  spec?: SecurityPolicyUpdateParams.Spec;
}

export namespace SecurityPolicyUpdateParams {
  export interface Metadata {
    name?: string;
  }

  /**
   * Mandate/deploy security agents, e.g. CrowdStrike. Mandate credential
   * security/proxy use. These can be modeled later as explicit fields if needed.
   */
  export interface Spec {
    /**
     * executables is the public Veto Exec GA policy surface.
     */
    executables?: Spec.Executables;
  }

  export namespace Spec {
    /**
     * executables is the public Veto Exec GA policy surface.
     */
    export interface Executables {
      /**
       * default_effect controls executables that do not match a rule. For Veto Exec,
       * omit this field or set it to EFFECT_ALLOW. EFFECT_UNSPECIFIED is normalized to
       * EFFECT_ALLOW.
       */
      defaultEffect?: 'EFFECT_UNSPECIFIED' | 'EFFECT_ALLOW' | 'EFFECT_BLOCK' | 'EFFECT_AUDIT';

      /**
       * rules contains executable-specific audit or block decisions.
       */
      rules?: Array<Executables.Rule>;
    }

    export namespace Executables {
      export interface Rule {
        /**
         * effect must be EFFECT_AUDIT or EFFECT_BLOCK. EFFECT_ALLOW is not supported on an
         * executable rule.
         */
        effect?: 'EFFECT_UNSPECIFIED' | 'EFFECT_ALLOW' | 'EFFECT_BLOCK' | 'EFFECT_AUDIT';

        /**
         * path is either an absolute executable path, such as /usr/bin/curl, or a bare
         * executable name, such as npx. Bare names are expanded by runtime discovery.
         * Surrounding whitespace is ignored. Empty or whitespace-only selectors and
         * relative paths with directory separators are invalid. Enforcement uses
         * executable content hashes, so different paths with identical content share one
         * runtime decision and block wins conflicts.
         */
        path?: string;
      }
    }
  }
}

export interface SecurityPolicyListParams extends SecurityPoliciesPageParams {
  /**
   * Body param
   */
  filter?: SecurityPolicyListParams.Filter;

  /**
   * Body param
   */
  pagination?: SecurityPolicyListParams.Pagination;
}

export namespace SecurityPolicyListParams {
  export interface Filter {
    organizationId?: string;

    search?: string;

    securityPolicyIds?: Array<string>;
  }

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

export interface SecurityPolicyDeleteParams {
  securityPolicyId?: string;
}

export declare namespace SecurityPolicies {
  export {
    type SecurityPolicy as SecurityPolicy,
    type SecurityPolicyCreateResponse as SecurityPolicyCreateResponse,
    type SecurityPolicyRetrieveResponse as SecurityPolicyRetrieveResponse,
    type SecurityPolicyUpdateResponse as SecurityPolicyUpdateResponse,
    type SecurityPolicyDeleteResponse as SecurityPolicyDeleteResponse,
    type SecurityPoliciesSecurityPoliciesPage as SecurityPoliciesSecurityPoliciesPage,
    type SecurityPolicyCreateParams as SecurityPolicyCreateParams,
    type SecurityPolicyRetrieveParams as SecurityPolicyRetrieveParams,
    type SecurityPolicyUpdateParams as SecurityPolicyUpdateParams,
    type SecurityPolicyListParams as SecurityPolicyListParams,
    type SecurityPolicyDeleteParams as SecurityPolicyDeleteParams,
  };
}
