// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MembershipsAPI from './memberships';
import {
  GroupMembership,
  GroupMembershipsMembersPage,
  MembershipCreateParams,
  MembershipCreateResponse,
  MembershipDeleteParams,
  MembershipDeleteResponse,
  MembershipListParams,
  MembershipRetrieveParams,
  MembershipRetrieveResponse,
  Memberships,
} from './memberships';
import * as RoleAssignmentsAPI from './role-assignments';
import {
  RoleAssignment,
  RoleAssignmentCreateParams,
  RoleAssignmentCreateResponse,
  RoleAssignmentDeleteParams,
  RoleAssignmentDeleteResponse,
  RoleAssignmentListParams,
  RoleAssignments,
  RoleAssignmentsAssignmentsPage,
} from './role-assignments';
import * as SharesAPI from './shares';
import {
  ShareCreateParams,
  ShareCreateResponse,
  ShareDeleteParams,
  ShareDeleteResponse,
  Shares,
} from './shares';
import { APIPromise } from '../../core/api-promise';
import { GroupsPage, type GroupsPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Groups extends APIResource {
  memberships: MembershipsAPI.Memberships = new MembershipsAPI.Memberships(this._client);
  roleAssignments: RoleAssignmentsAPI.RoleAssignments = new RoleAssignmentsAPI.RoleAssignments(this._client);
  shares: SharesAPI.Shares = new SharesAPI.Shares(this._client);

  /**
   * Creates a new group within an organization.
   *
   * Use this method to:
   *
   * - Create teams for access control
   * - Organize users by department or function
   * - Set up role-based access groups
   *
   * ### Examples
   *
   * - Create a basic group:
   *
   *   Creates a group with name and description.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   name: "Backend Team"
   *   description: "Backend engineering team"
   *   ```
   *
   * ### Authorization
   *
   * Requires `org:admin` role on the organization.
   *
   * @example
   * ```ts
   * const group = await client.groups.create({
   *   description: 'Backend engineering team',
   *   name: 'Backend Team',
   *   organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   * });
   * ```
   */
  create(body: GroupCreateParams, options?: RequestOptions): APIPromise<GroupCreateResponse> {
    return this._client.post('/gitpod.v1.GroupService/CreateGroup', { body, ...options });
  }

  /**
   * Gets information about a specific group.
   *
   * Use this method to:
   *
   * - Retrieve group details and metadata
   * - Check group configuration
   * - View member count
   *
   * ### Examples
   *
   * - Get group details:
   *
   *   Retrieves information about a specific group.
   *
   *   ```yaml
   *   groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * ### Authorization
   *
   * All organization members can view group information (transparency model).
   *
   * @example
   * ```ts
   * const group = await client.groups.retrieve({
   *   groupId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   * });
   * ```
   */
  retrieve(body: GroupRetrieveParams, options?: RequestOptions): APIPromise<GroupRetrieveResponse> {
    return this._client.post('/gitpod.v1.GroupService/GetGroup', { body, ...options });
  }

  /**
   * Updates group information.
   *
   * Use this method to:
   *
   * - Rename a group
   * - Update group description
   *
   * ### Examples
   *
   * - Update group name:
   *
   *   Changes the name of an existing group.
   *
   *   ```yaml
   *   groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   name: "Platform Team"
   *   description: "Platform engineering team"
   *   ```
   *
   * ### Authorization
   *
   * Requires `org:admin` permission on the organization or `group:admin` permission
   * on the specific group.
   *
   * @example
   * ```ts
   * const group = await client.groups.update({
   *   description: 'Platform engineering team',
   *   groupId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   name: 'Platform Team',
   * });
   * ```
   */
  update(body: GroupUpdateParams, options?: RequestOptions): APIPromise<GroupUpdateResponse> {
    return this._client.post('/gitpod.v1.GroupService/UpdateGroup', { body, ...options });
  }

  /**
   * Lists groups with optional pagination.
   *
   * Use this method to:
   *
   * - View all groups in an organization
   * - Check group memberships
   * - Monitor group configurations
   * - Audit group access
   *
   * ### Examples
   *
   * - List all groups:
   *
   *   Shows all groups with pagination.
   *
   *   ```yaml
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * - List with custom page size:
   *
   *   Shows groups with specified page size.
   *
   *   ```yaml
   *   pagination:
   *     pageSize: 50
   *     token: "next-page-token-from-previous-response"
   *   ```
   *
   * ### Authorization
   *
   * All organization members can list groups (transparency model).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const group of client.groups.list({
   *   pagination: { pageSize: 20 },
   * })) {
   *   // ...
   * }
   * ```
   */
  list(params: GroupListParams, options?: RequestOptions): PagePromise<GroupsGroupsPage, Group> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList('/gitpod.v1.GroupService/ListGroups', GroupsPage<Group>, {
      query: { token, pageSize },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Deletes a group and removes all its resource assignments.
   *
   * When a group is deleted, all resource assignments revert to org-level scope.
   *
   * Use this method to:
   *
   * - Remove unused groups
   * - Clean up after team reorganization
   *
   * ### Examples
   *
   * - Delete a group:
   *
   *   Permanently removes a group.
   *
   *   ```yaml
   *   groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   *
   * ### Authorization
   *
   * Requires `org:admin` role on the organization.
   *
   * @example
   * ```ts
   * const group = await client.groups.delete({
   *   groupId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   * });
   * ```
   */
  delete(body: GroupDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.GroupService/DeleteGroup', { body, ...options });
  }
}

export type GroupsGroupsPage = GroupsPage<Group>;

export interface Group {
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

  description?: string;

  /**
   * direct_share indicates that this group is used for direct user sharing on
   * resources. These groups are hidden from regular group listings.
   */
  directShare?: boolean;

  /**
   * member_count is the total number of members in this group
   */
  memberCount?: number;

  name?: string;

  organizationId?: string;

  /**
   * system_managed indicates that this group is created by the system automatically
   */
  systemManaged?: boolean;

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

export interface GroupCreateResponse {
  group?: Group;
}

export interface GroupRetrieveResponse {
  group?: Group;
}

export interface GroupUpdateResponse {
  group?: Group;
}

/**
 * Empty response
 */
export type GroupDeleteResponse = unknown;

export interface GroupCreateParams {
  description?: string;

  name?: string;

  organizationId?: string;
}

export interface GroupRetrieveParams {
  groupId?: string;
}

export interface GroupUpdateParams {
  description?: string;

  groupId?: string;

  name?: string;
}

export interface GroupListParams extends GroupsPageParams {
  /**
   * Body param: filter contains options for filtering the list of groups.
   */
  filter?: GroupListParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing groups
   */
  pagination?: GroupListParams.Pagination;
}

export namespace GroupListParams {
  /**
   * filter contains options for filtering the list of groups.
   */
  export interface Filter {
    /**
     * search performs case-insensitive search across group name, description, and ID
     */
    search?: string;
  }

  /**
   * pagination contains the pagination options for listing groups
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

export interface GroupDeleteParams {
  groupId?: string;
}

Groups.Memberships = Memberships;
Groups.RoleAssignments = RoleAssignments;
Groups.Shares = Shares;

export declare namespace Groups {
  export {
    type Group as Group,
    type GroupCreateResponse as GroupCreateResponse,
    type GroupRetrieveResponse as GroupRetrieveResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupsGroupsPage as GroupsGroupsPage,
    type GroupCreateParams as GroupCreateParams,
    type GroupRetrieveParams as GroupRetrieveParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
  };

  export {
    Memberships as Memberships,
    type GroupMembership as GroupMembership,
    type MembershipCreateResponse as MembershipCreateResponse,
    type MembershipRetrieveResponse as MembershipRetrieveResponse,
    type MembershipDeleteResponse as MembershipDeleteResponse,
    type GroupMembershipsMembersPage as GroupMembershipsMembersPage,
    type MembershipCreateParams as MembershipCreateParams,
    type MembershipRetrieveParams as MembershipRetrieveParams,
    type MembershipListParams as MembershipListParams,
    type MembershipDeleteParams as MembershipDeleteParams,
  };

  export {
    RoleAssignments as RoleAssignments,
    type RoleAssignment as RoleAssignment,
    type RoleAssignmentCreateResponse as RoleAssignmentCreateResponse,
    type RoleAssignmentDeleteResponse as RoleAssignmentDeleteResponse,
    type RoleAssignmentsAssignmentsPage as RoleAssignmentsAssignmentsPage,
    type RoleAssignmentCreateParams as RoleAssignmentCreateParams,
    type RoleAssignmentListParams as RoleAssignmentListParams,
    type RoleAssignmentDeleteParams as RoleAssignmentDeleteParams,
  };

  export {
    Shares as Shares,
    type ShareCreateResponse as ShareCreateResponse,
    type ShareDeleteResponse as ShareDeleteResponse,
    type ShareCreateParams as ShareCreateParams,
    type ShareDeleteParams as ShareDeleteParams,
  };
}
