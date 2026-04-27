// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Dotfiles extends APIResource {
  /**
   * Gets the dotfiles for a user.
   *
   * Use this method to:
   *
   * - Retrieve user dotfiles
   *
   * ### Examples
   *
   * - Get dotfiles:
   *
   *   Retrieves the dotfiles for the current user.
   *
   *   ```yaml
   *   {}
   *   ```
   *
   * @example
   * ```ts
   * const dotfile = await client.users.dotfiles.get();
   * ```
   */
  get(body: DotfileGetParams, options?: RequestOptions): APIPromise<DotfileGetResponse> {
    return this._client.post('/gitpod.v1.UserService/GetDotfilesConfiguration', { body, ...options });
  }

  /**
   * Sets the dotfiles configuration for a user.
   *
   * Use this method to:
   *
   * - Configure user dotfiles
   * - Update dotfiles settings
   *
   * ### Examples
   *
   * - Set dotfiles configuration:
   *
   *   Sets the dotfiles configuration for the current user.
   *
   *   ```yaml
   *   { "repository": "https://github.com/gitpod-io/dotfiles" }
   *   ```
   *
   * - Remove dotfiles:
   *
   *   Removes the dotfiles for the current user.
   *
   *   ```yaml
   *   {}
   *   ```
   *
   * @example
   * ```ts
   * const response = await client.users.dotfiles.set();
   * ```
   */
  set(body: DotfileSetParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.UserService/SetDotfilesConfiguration', { body, ...options });
  }
}

export interface DotfilesConfiguration {
  /**
   * The URL of a dotfiles repository.
   */
  repository?: string;
}

export interface DotfileGetResponse {
  dotfilesConfiguration: DotfilesConfiguration;
}

export type DotfileSetResponse = unknown;

export interface DotfileGetParams {
  empty?: boolean;
}

export interface DotfileSetParams {
  repository?: string;
}

export declare namespace Dotfiles {
  export {
    type DotfilesConfiguration as DotfilesConfiguration,
    type DotfileGetResponse as DotfileGetResponse,
    type DotfileSetResponse as DotfileSetResponse,
    type DotfileGetParams as DotfileGetParams,
    type DotfileSetParams as DotfileSetParams,
  };
}
