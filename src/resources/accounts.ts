// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import {
  JoinableOrganizationsPage,
  type JoinableOrganizationsPageParams,
  LoginProvidersPage,
  type LoginProvidersPageParams,
  LoginsPage,
  type LoginsPageParams,
  PagePromise,
} from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Accounts extends APIResource {
  /**
   * Gets information about the currently authenticated account.
   *
   * Use this method to:
   *
   * - Retrieve account profile information
   * - Check organization memberships
   * - View account settings
   * - Get joinable organizations
   *
   * ### Examples
   *
   * - Get account details:
   *
   *   Retrieves information about the authenticated account.
   *
   *   ```yaml
   *   {}
   *   ```
   *
   * @example
   * ```ts
   * const account = await client.accounts.retrieve();
   * ```
   */
  retrieve(body: AccountRetrieveParams, options?: RequestOptions): APIPromise<AccountRetrieveResponse> {
    return this._client.post('/gitpod.v1.AccountService/GetAccount', { body, ...options });
  }

  /**
   * Deletes an account permanently.
   *
   * Use this method to:
   *
   * - Remove unused accounts
   * - Clean up test accounts
   * - Complete account deletion requests
   *
   * The account must not be an active member of any organization.
   *
   * ### Examples
   *
   * - Delete account:
   *
   *   Permanently removes an account.
   *
   *   ```yaml
   *   accountId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *   ```
   *
   * @example
   * ```ts
   * const account = await client.accounts.delete({
   *   accountId: 'f53d2330-3795-4c5d-a1f3-453121af9c60',
   * });
   * ```
   */
  delete(body: AccountDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.AccountService/DeleteAccount', { body, ...options });
  }

  /**
   * Gets the SSO login URL for a specific email domain.
   *
   * Use this method to:
   *
   * - Initiate SSO authentication
   * - Get organization-specific login URLs
   * - Handle SSO redirects
   *
   * ### Examples
   *
   * - Get login URL:
   *
   *   Retrieves SSO URL for email domain.
   *
   *   ```yaml
   *   email: "user@company.com"
   *   ```
   *
   * - Get URL with return path:
   *
   *   Gets SSO URL with specific return location.
   *
   *   ```yaml
   *   email: "user@company.com"
   *   returnTo: "https://gitpod.io/workspaces"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.accounts.getSSOLoginURL({
   *   email: 'user@company.com',
   * });
   * ```
   */
  getSSOLoginURL(
    body: AccountGetSSOLoginURLParams,
    options?: RequestOptions,
  ): APIPromise<AccountGetSSOLoginURLResponse> {
    return this._client.post('/gitpod.v1.AccountService/GetSSOLoginURL', { body, ...options });
  }

  /**
   * Lists organizations that the currently authenticated account can join.
   *
   * Use this method to:
   *
   * - Discover organizations associated with the account's email domain.
   * - Allow users to join existing organizations.
   * - Display potential organizations during onboarding.
   *
   * ### Examples
   *
   * - List joinable organizations:
   *
   *   Retrieves a list of organizations the account can join.
   *
   *   ```yaml
   *   {}
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const joinableOrganization of client.accounts.listJoinableOrganizations()) {
   *   // ...
   * }
   * ```
   */
  listJoinableOrganizations(
    params: AccountListJoinableOrganizationsParams,
    options?: RequestOptions,
  ): PagePromise<JoinableOrganizationsJoinableOrganizationsPage, JoinableOrganization> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.AccountService/ListJoinableOrganizations',
      JoinableOrganizationsPage<JoinableOrganization>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Lists available login providers with optional filtering.
   *
   * Use this method to:
   *
   * - View supported authentication methods
   * - Get provider-specific login URLs
   * - Filter providers by invite
   *
   * ### Examples
   *
   * - List all providers:
   *
   *   Shows all available login providers.
   *
   *   ```yaml
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * - List for specific invite:
   *
   *   Shows providers available for an invite.
   *
   *   ```yaml
   *   filter:
   *     inviteId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const loginProvider of client.accounts.listLoginProviders(
   *   { pagination: { pageSize: 20 } },
   * )) {
   *   // ...
   * }
   * ```
   */
  listLoginProviders(
    params: AccountListLoginProvidersParams,
    options?: RequestOptions,
  ): PagePromise<LoginProvidersLoginProvidersPage, LoginProvider> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.AccountService/ListLoginProviders',
      LoginProvidersPage<LoginProvider>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * ListSSOLogins
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const accountListSSOLoginsResponse of client.accounts.listSSOLogins(
   *   { email: 'dev@stainless.com' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listSSOLogins(
    params: AccountListSSOLoginsParams,
    options?: RequestOptions,
  ): PagePromise<AccountListSSOLoginsResponsesLoginsPage, AccountListSSOLoginsResponse> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.AccountService/ListSSOLogins',
      LoginsPage<AccountListSSOLoginsResponse>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }
}

export type JoinableOrganizationsJoinableOrganizationsPage = JoinableOrganizationsPage<JoinableOrganization>;

export type LoginProvidersLoginProvidersPage = LoginProvidersPage<LoginProvider>;

export type AccountListSSOLoginsResponsesLoginsPage = LoginsPage<AccountListSSOLoginsResponse>;

export interface Account {
  id: string;

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
  createdAt: string;

  email: string;

  name: string;

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
  updatedAt: string;

  avatarUrl?: string;

  /**
   * @deprecated joinables is deprecated. Use ListJoinableOrganizations instead.
   */
  joinables?: Array<JoinableOrganization>;

  memberships?: Array<AccountMembership>;

  /**
   * organization_id is the ID of the organization the account is owned by if it's
   * created through custom SSO
   */
  organizationId?: string | null;

  /**
   * public_email_provider is true if the email for the Account matches a known
   * public email provider
   */
  publicEmailProvider?: boolean;
}

export interface AccountMembership {
  /**
   * organization_id is the id of the organization the user is a member of
   */
  organizationId: string;

  /**
   * organization_name is the name of the organization the user is a member of
   */
  organizationName: string;

  /**
   * user_id is the ID the user has in the organization
   */
  userId: string;

  /**
   * user_role is the role the user has in the organization
   */
  userRole: Shared.OrganizationRole;

  /**
   * organization_member_count is the member count of the organization the user is a
   * member of
   */
  organizationMemberCount?: number;

  /**
   * organization_tier is the tier of the organization (Free, Core, Enterprise)
   */
  organizationTier?: Shared.OrganizationTier;
}

export interface JoinableOrganization {
  /**
   * organization_id is the id of the organization the user can join
   */
  organizationId: string;

  /**
   * organization_name is the name of the organization the user can join
   */
  organizationName: string;

  /**
   * organization_member_count is the member count of the organization the user can
   * join
   */
  organizationMemberCount?: number;
}

export interface LoginProvider {
  /**
   * provider is the provider used by this login method, e.g. "github", "google",
   * "custom"
   */
  provider: string;

  /**
   * login_url is the URL to redirect the browser agent to for login, when provider
   * is "custom"
   */
  loginUrl?: string;
}

export interface AccountRetrieveResponse {
  account: Account;
}

export type AccountDeleteResponse = unknown;

export interface AccountGetSSOLoginURLResponse {
  /**
   * login_url is the URL to redirect the user to for SSO login
   */
  loginUrl: string;
}

export interface AccountListSSOLoginsResponse {
  /**
   * provider is the provider used by this login method, e.g. "github", "google",
   * "custom"
   */
  displayName: string;

  /**
   * login_url is the URL to redirect the user to for SSO login
   */
  loginUrl: string;
}

export interface AccountRetrieveParams {
  empty?: boolean;
}

export interface AccountDeleteParams {
  accountId: string;

  /**
   * reason is an optional field for the reason for account deletion
   */
  reason?: string | null;
}

export interface AccountGetSSOLoginURLParams {
  /**
   * email is the email the user wants to login with
   */
  email: string;

  /**
   * return_to is the URL the user will be redirected to after login
   */
  returnTo?: string | null;
}

export interface AccountListJoinableOrganizationsParams extends JoinableOrganizationsPageParams {
  /**
   * Body param: pagination contains the pagination options for listing joinable
   * organizations
   */
  pagination?: AccountListJoinableOrganizationsParams.Pagination;
}

export namespace AccountListJoinableOrganizationsParams {
  /**
   * pagination contains the pagination options for listing joinable organizations
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

export interface AccountListLoginProvidersParams extends LoginProvidersPageParams {
  /**
   * Body param: filter contains the filter options for listing login methods
   */
  filter?: AccountListLoginProvidersParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing login methods
   */
  pagination?: AccountListLoginProvidersParams.Pagination;
}

export namespace AccountListLoginProvidersParams {
  /**
   * filter contains the filter options for listing login methods
   */
  export interface Filter {
    /**
     * email is the email address to filter SSO providers by
     */
    email?: string | null;

    /**
     * invite_id is the ID of the invite URL the user wants to login with
     */
    inviteId?: string | null;
  }

  /**
   * pagination contains the pagination options for listing login methods
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

export interface AccountListSSOLoginsParams extends LoginsPageParams {
  /**
   * Body param: email is the email the user wants to login with
   */
  email: string;

  /**
   * Body param: pagination contains the pagination options for listing SSO logins
   */
  pagination?: AccountListSSOLoginsParams.Pagination;

  /**
   * Body param: return_to is the URL the user will be redirected to after login
   */
  returnTo?: string | null;
}

export namespace AccountListSSOLoginsParams {
  /**
   * pagination contains the pagination options for listing SSO logins
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

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountMembership as AccountMembership,
    type JoinableOrganization as JoinableOrganization,
    type LoginProvider as LoginProvider,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountDeleteResponse as AccountDeleteResponse,
    type AccountGetSSOLoginURLResponse as AccountGetSSOLoginURLResponse,
    type AccountListSSOLoginsResponse as AccountListSSOLoginsResponse,
    type JoinableOrganizationsJoinableOrganizationsPage as JoinableOrganizationsJoinableOrganizationsPage,
    type LoginProvidersLoginProvidersPage as LoginProvidersLoginProvidersPage,
    type AccountListSSOLoginsResponsesLoginsPage as AccountListSSOLoginsResponsesLoginsPage,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountDeleteParams as AccountDeleteParams,
    type AccountGetSSOLoginURLParams as AccountGetSSOLoginURLParams,
    type AccountListJoinableOrganizationsParams as AccountListJoinableOrganizationsParams,
    type AccountListLoginProvidersParams as AccountListLoginProvidersParams,
    type AccountListSSOLoginsParams as AccountListSSOLoginsParams,
  };
}
