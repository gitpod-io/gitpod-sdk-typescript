// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
import { APIPromise } from '../../core/api-promise';
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
   * created_at is the creation time
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
