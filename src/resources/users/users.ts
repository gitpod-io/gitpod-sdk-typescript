// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import * as PatsAPI from './pats';
import {
  PatDeleteParams,
  PatDeleteResponse,
  PatGetParams,
  PatGetResponse,
  PatListParams,
  Pats,
  PersonalAccessToken,
  PersonalAccessTokensPersonalAccessTokensPage,
} from './pats';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Users extends APIResource {
  pats: PatsAPI.Pats = new PatsAPI.Pats(this._client);

  /**
   * Gets information about the currently authenticated user.
   *
   * Use this method to:
   *
   * - Get user profile information
   * - Check authentication status
   * - Retrieve user settings
   * - Verify account details
   *
   * ### Examples
   *
   * - Get current user:
   *
   *   Retrieves details about the authenticated user.
   *
   *   ```yaml
   *   {}
   *   ```
   */
  getAuthenticatedUser(
    body: UserGetAuthenticatedUserParams,
    options?: RequestOptions,
  ): APIPromise<UserGetAuthenticatedUserResponse> {
    return this._client.post('/gitpod.v1.UserService/GetAuthenticatedUser', { body, ...options });
  }

  /**
   * Sets whether a user account is suspended.
   *
   * Use this method to:
   *
   * - Suspend problematic users
   * - Reactivate suspended accounts
   * - Manage user access
   *
   * ### Examples
   *
   * - Suspend user:
   *
   *   Suspends a user account.
   *
   *   ```yaml
   *   userId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *   suspended: true
   *   ```
   *
   * - Reactivate user:
   *
   *   Removes suspension from a user account.
   *
   *   ```yaml
   *   userId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *   suspended: false
   *   ```
   */
  setSuspended(body: UserSetSuspendedParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.UserService/SetSuspended', { body, ...options });
  }
}

export interface User {
  /**
   * id is a UUID of the user
   */
  id: string;

  /**
   * avatar_url is a link to the user avatar
   */
  avatarUrl?: string;

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
   * name is the full name of the user
   */
  name?: string;

  /**
   * organization_id is the id of the organization this account is owned by.
   *
   * +optional if not set, this account is owned by the installation.
   */
  organizationId?: string;

  /**
   * status is the status the user is in
   */
  status?: Shared.UserStatus;
}

export interface UserGetAuthenticatedUserResponse {
  user: User;
}

export type UserSetSuspendedResponse = unknown;

export interface UserGetAuthenticatedUserParams {
  empty?: boolean;
}

export interface UserSetSuspendedParams {
  suspended?: boolean;

  userId?: string;
}

Users.Pats = Pats;

export declare namespace Users {
  export {
    type User as User,
    type UserGetAuthenticatedUserResponse as UserGetAuthenticatedUserResponse,
    type UserSetSuspendedResponse as UserSetSuspendedResponse,
    type UserGetAuthenticatedUserParams as UserGetAuthenticatedUserParams,
    type UserSetSuspendedParams as UserSetSuspendedParams,
  };

  export {
    Pats as Pats,
    type PersonalAccessToken as PersonalAccessToken,
    type PatDeleteResponse as PatDeleteResponse,
    type PatGetResponse as PatGetResponse,
    type PersonalAccessTokensPersonalAccessTokensPage as PersonalAccessTokensPersonalAccessTokensPage,
    type PatListParams as PatListParams,
    type PatDeleteParams as PatDeleteParams,
    type PatGetParams as PatGetParams,
  };
}
