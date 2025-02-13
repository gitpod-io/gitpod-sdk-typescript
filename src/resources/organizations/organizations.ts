// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import * as DomainVerificationsAPI from './domain-verifications';
import {
  DomainVerification,
  DomainVerificationCreateParams,
  DomainVerificationCreateResponse,
  DomainVerificationDeleteParams,
  DomainVerificationDeleteResponse,
  DomainVerificationListParams,
  DomainVerificationRetrieveParams,
  DomainVerificationRetrieveResponse,
  DomainVerificationState,
  DomainVerificationVerifyParams,
  DomainVerificationVerifyResponse,
  DomainVerifications,
  DomainVerificationsDomainVerificationsPage,
} from './domain-verifications';
import * as InvitesAPI from './invites';
import {
  InviteCreateParams,
  InviteCreateResponse,
  InviteGetSummaryParams,
  InviteGetSummaryResponse,
  InviteRetrieveParams,
  InviteRetrieveResponse,
  Invites,
  OrganizationInvite,
} from './invites';
import * as SSOConfigurationsAPI from './sso-configurations';
import {
  ProviderType,
  SSOConfiguration,
  SSOConfigurationCreateParams,
  SSOConfigurationCreateResponse,
  SSOConfigurationDeleteParams,
  SSOConfigurationDeleteResponse,
  SSOConfigurationListParams,
  SSOConfigurationRetrieveParams,
  SSOConfigurationRetrieveResponse,
  SSOConfigurationState,
  SSOConfigurationUpdateParams,
  SSOConfigurationUpdateResponse,
  SSOConfigurations,
  SSOConfigurationsSSOConfigurationsPage,
} from './sso-configurations';
import { APIPromise } from '../../api-promise';
import {
  MembersPage,
  type MembersPageParams,
  OrganizationsPage,
  type OrganizationsPageParams,
  PagePromise,
} from '../../pagination';
import { RequestOptions } from '../../internal/request-options';

export class Organizations extends APIResource {
  domainVerifications: DomainVerificationsAPI.DomainVerifications =
    new DomainVerificationsAPI.DomainVerifications(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  ssoConfigurations: SSOConfigurationsAPI.SSOConfigurations = new SSOConfigurationsAPI.SSOConfigurations(
    this._client,
  );

  /**
   * CreateOrganization creates a new Organization.
   */
  create(body: OrganizationCreateParams, options?: RequestOptions): APIPromise<OrganizationCreateResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/CreateOrganization', { body, ...options });
  }

  /**
   * GetOrganization retrieves a single Organization.
   */
  retrieve(
    body: OrganizationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationRetrieveResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/GetOrganization', { body, ...options });
  }

  /**
   * UpdateOrganization updates the properties of an Organization.
   */
  update(body: OrganizationUpdateParams, options?: RequestOptions): APIPromise<OrganizationUpdateResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/UpdateOrganization', { body, ...options });
  }

  /**
   * ListOrganizations lists all organization the caller has access to.
   */
  list(
    params: OrganizationListParams,
    options?: RequestOptions,
  ): PagePromise<OrganizationsOrganizationsPage, Organization> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.OrganizationService/ListOrganizations',
      OrganizationsPage<Organization>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * DeleteOrganization deletes the specified organization.
   */
  delete(body: OrganizationDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.OrganizationService/DeleteOrganization', { body, ...options });
  }

  /**
   * JoinOrganization lets accounts join an Organization.
   */
  join(body: OrganizationJoinParams, options?: RequestOptions): APIPromise<OrganizationJoinResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/JoinOrganization', { body, ...options });
  }

  /**
   * LeaveOrganization lets the passed user leave an Organization.
   */
  leave(body: OrganizationLeaveParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.OrganizationService/LeaveOrganization', { body, ...options });
  }

  /**
   * ListMembers lists all members of the specified organization.
   */
  listMembers(
    params: OrganizationListMembersParams,
    options?: RequestOptions,
  ): PagePromise<OrganizationMembersMembersPage, OrganizationMember> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.OrganizationService/ListMembers',
      MembersPage<OrganizationMember>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * SetRole
   */
  setRole(body: OrganizationSetRoleParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.OrganizationService/SetRole', { body, ...options });
  }
}

export type OrganizationsOrganizationsPage = OrganizationsPage<Organization>;

export type OrganizationMembersMembersPage = MembersPage<OrganizationMember>;

export interface InviteDomains {
  /**
   * domains is the list of domains that are allowed to join the organization
   */
  domains?: Array<string>;
}

export interface Organization {
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

  inviteDomains?: InviteDomains;
}

export interface OrganizationMember {
  email: string;

  fullName: string;

  /**
   * login_provider is the login provider the user uses to sign in
   */
  loginProvider: string;

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
  memberSince: string;

  role: Shared.OrganizationRole;

  status: Shared.UserStatus;

  userId: string;

  avatarUrl?: string;
}

export type Scope = 'SCOPE_UNSPECIFIED' | 'SCOPE_MEMBER' | 'SCOPE_ALL';

export interface OrganizationCreateResponse {
  /**
   * organization is the created organization
   */
  organization: Organization;

  /**
   * member is the member that joined the org on creation. Only set if specified
   * "join_organization" is "true" in the request.
   */
  member?: OrganizationMember;
}

export interface OrganizationRetrieveResponse {
  /**
   * organization is the requested organization
   */
  organization: Organization;
}

export interface OrganizationUpdateResponse {
  /**
   * organization is the updated organization
   */
  organization: Organization;
}

export type OrganizationDeleteResponse = unknown;

export interface OrganizationJoinResponse {
  /**
   * member is the member that was created by joining the organization.
   */
  member: OrganizationMember;
}

export type OrganizationLeaveResponse = unknown;

export type OrganizationSetRoleResponse = unknown;

export interface OrganizationCreateParams {
  /**
   * name is the organization name
   */
  name: string;

  /**
   * Should other Accounts with the same domain be automatically invited to the
   * organization?
   */
  inviteAccountsWithMatchingDomain?: boolean;

  /**
   * join_organization decides whether the Identity issuing this request joins the
   * org on creation
   */
  joinOrganization?: boolean;
}

export interface OrganizationRetrieveParams {
  /**
   * organization_id is the unique identifier of the Organization to retreive.
   */
  organizationId: string;
}

export interface OrganizationUpdateParams {
  /**
   * organization_id is the ID of the organization to update the settings for.
   */
  organizationId: string;

  /**
   * invite_domains is the domain allowlist of the organization
   */
  inviteDomains?: InviteDomains | null;

  /**
   * name is the new name of the organization
   */
  name?: string | null;
}

export interface OrganizationListParams extends OrganizationsPageParams {
  /**
   * Body param: pagination contains the pagination options for listing organizations
   */
  pagination?: OrganizationListParams.Pagination;

  /**
   * Body param: scope is the scope of the organizations to list
   */
  scope?: Scope;
}

export namespace OrganizationListParams {
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

export interface OrganizationDeleteParams {
  /**
   * organization_id is the ID of the organization to delete
   */
  organizationId: string;
}

export interface OrganizationJoinParams {
  /**
   * invite_id is the unique identifier of the invite to join the organization.
   */
  inviteId?: string;

  /**
   * organization_id is the unique identifier of the Organization to join.
   */
  organizationId?: string;
}

export interface OrganizationLeaveParams {
  userId: string;
}

export interface OrganizationListMembersParams extends MembersPageParams {
  /**
   * Body param: organization_id is the ID of the organization to list members for
   */
  organizationId: string;

  /**
   * Body param: pagination contains the pagination options for listing members
   */
  pagination?: OrganizationListMembersParams.Pagination;
}

export namespace OrganizationListMembersParams {
  /**
   * pagination contains the pagination options for listing members
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

export interface OrganizationSetRoleParams {
  organizationId: string;

  userId: string;

  role?: Shared.OrganizationRole;
}

Organizations.DomainVerifications = DomainVerifications;
Organizations.Invites = Invites;
Organizations.SSOConfigurations = SSOConfigurations;

export declare namespace Organizations {
  export {
    type InviteDomains as InviteDomains,
    type Organization as Organization,
    type OrganizationMember as OrganizationMember,
    type Scope as Scope,
    type OrganizationCreateResponse as OrganizationCreateResponse,
    type OrganizationRetrieveResponse as OrganizationRetrieveResponse,
    type OrganizationUpdateResponse as OrganizationUpdateResponse,
    type OrganizationDeleteResponse as OrganizationDeleteResponse,
    type OrganizationJoinResponse as OrganizationJoinResponse,
    type OrganizationLeaveResponse as OrganizationLeaveResponse,
    type OrganizationSetRoleResponse as OrganizationSetRoleResponse,
    type OrganizationsOrganizationsPage as OrganizationsOrganizationsPage,
    type OrganizationMembersMembersPage as OrganizationMembersMembersPage,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationRetrieveParams as OrganizationRetrieveParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
    type OrganizationDeleteParams as OrganizationDeleteParams,
    type OrganizationJoinParams as OrganizationJoinParams,
    type OrganizationLeaveParams as OrganizationLeaveParams,
    type OrganizationListMembersParams as OrganizationListMembersParams,
    type OrganizationSetRoleParams as OrganizationSetRoleParams,
  };

  export {
    DomainVerifications as DomainVerifications,
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

  export {
    Invites as Invites,
    type OrganizationInvite as OrganizationInvite,
    type InviteCreateResponse as InviteCreateResponse,
    type InviteRetrieveResponse as InviteRetrieveResponse,
    type InviteGetSummaryResponse as InviteGetSummaryResponse,
    type InviteCreateParams as InviteCreateParams,
    type InviteRetrieveParams as InviteRetrieveParams,
    type InviteGetSummaryParams as InviteGetSummaryParams,
  };

  export {
    SSOConfigurations as SSOConfigurations,
    type ProviderType as ProviderType,
    type SSOConfiguration as SSOConfiguration,
    type SSOConfigurationState as SSOConfigurationState,
    type SSOConfigurationCreateResponse as SSOConfigurationCreateResponse,
    type SSOConfigurationRetrieveResponse as SSOConfigurationRetrieveResponse,
    type SSOConfigurationUpdateResponse as SSOConfigurationUpdateResponse,
    type SSOConfigurationDeleteResponse as SSOConfigurationDeleteResponse,
    type SSOConfigurationsSSOConfigurationsPage as SSOConfigurationsSSOConfigurationsPage,
    type SSOConfigurationCreateParams as SSOConfigurationCreateParams,
    type SSOConfigurationRetrieveParams as SSOConfigurationRetrieveParams,
    type SSOConfigurationUpdateParams as SSOConfigurationUpdateParams,
    type SSOConfigurationListParams as SSOConfigurationListParams,
    type SSOConfigurationDeleteParams as SSOConfigurationDeleteParams,
  };
}
