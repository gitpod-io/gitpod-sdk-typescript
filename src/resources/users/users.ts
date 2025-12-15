// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as DotfilesAPI from './dotfiles';
import {
  DotfileGetParams,
  DotfileGetResponse,
  DotfileSetParams,
  DotfileSetResponse,
  Dotfiles,
  DotfilesConfiguration,
} from './dotfiles';
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
  dotfiles: DotfilesAPI.Dotfiles = new DotfilesAPI.Dotfiles(this._client);
  pats: PatsAPI.Pats = new PatsAPI.Pats(this._client);

  /**
   * Deletes a user. If the User comes from an organization's SSO provider, the
   * Account will also be deleted.
   *
   * @example
   * ```ts
   * const response = await client.users.deleteUser();
   * ```
   */
  deleteUser(body: UserDeleteUserParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.UserService/DeleteUser', { body, ...options });
  }

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
   *
   * @example
   * ```ts
   * const response = await client.users.getAuthenticatedUser();
   * ```
   */
  getAuthenticatedUser(
    body: UserGetAuthenticatedUserParams,
    options?: RequestOptions,
  ): APIPromise<UserGetAuthenticatedUserResponse> {
    return this._client.post('/gitpod.v1.UserService/GetAuthenticatedUser', { body, ...options });
  }

  /**
   * Gets basic information about a specific user by their ID.
   *
   * Use this method to:
   *
   * - Retrieve user profile information
   * - Get user details for display purposes
   * - Fetch user metadata for administrative tasks
   *
   * ### Examples
   *
   * - Get user by ID:
   *
   *   Retrieves basic user information by user ID.
   *
   *   ```yaml
   *   userId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.users.getUser({
   *   userId: 'f53d2330-3795-4c5d-a1f3-453121af9c60',
   * });
   * ```
   */
  getUser(body: UserGetUserParams, options?: RequestOptions): APIPromise<UserGetUserResponse> {
    return this._client.post('/gitpod.v1.UserService/GetUser', { body, ...options });
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
   *
   * @example
   * ```ts
   * const response = await client.users.setSuspended({
   *   userId: 'f53d2330-3795-4c5d-a1f3-453121af9c60',
   * });
   * ```
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
   * email is the user's email address
   */
  email?: string;

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

export type UserDeleteUserResponse = unknown;

export interface UserGetAuthenticatedUserResponse {
  user: User;
}

export interface UserGetUserResponse {
  user: User;
}

export type UserSetSuspendedResponse = unknown;

export interface UserDeleteUserParams {
  userId?: string;
}

export interface UserGetAuthenticatedUserParams {
  empty?: boolean;
}

export interface UserGetUserParams {
  userId?: string;
}

export interface UserSetSuspendedParams {
  suspended?: boolean;

  userId?: string;
}

Users.Dotfiles = Dotfiles;
Users.Pats = Pats;

export declare namespace Users {
  export {
    type User as User,
    type UserDeleteUserResponse as UserDeleteUserResponse,
    type UserGetAuthenticatedUserResponse as UserGetAuthenticatedUserResponse,
    type UserGetUserResponse as UserGetUserResponse,
    type UserSetSuspendedResponse as UserSetSuspendedResponse,
    type UserDeleteUserParams as UserDeleteUserParams,
    type UserGetAuthenticatedUserParams as UserGetAuthenticatedUserParams,
    type UserGetUserParams as UserGetUserParams,
    type UserSetSuspendedParams as UserSetSuspendedParams,
  };

  export {
    Dotfiles as Dotfiles,
    type DotfilesConfiguration as DotfilesConfiguration,
    type DotfileGetResponse as DotfileGetResponse,
    type DotfileSetResponse as DotfileSetResponse,
    type DotfileGetParams as DotfileGetParams,
    type DotfileSetParams as DotfileSetParams,
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
