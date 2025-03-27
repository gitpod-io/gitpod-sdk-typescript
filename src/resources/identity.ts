// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Identity extends APIResource {
  /**
   * Exchanges an exchange token for a new access token.
   *
   * Use this method to:
   *
   * - Convert exchange tokens to access tokens
   * - Obtain new access credentials
   * - Complete token exchange flows
   *
   * ### Examples
   *
   * - Exchange token:
   *
   *   Trades an exchange token for an access token.
   *
   *   ```yaml
   *   exchangeToken: "exchange-token-value"
   *   ```
   */
  exchangeToken(
    body: IdentityExchangeTokenParams,
    options?: RequestOptions,
  ): APIPromise<IdentityExchangeTokenResponse> {
    return this._client.post('/gitpod.v1.IdentityService/ExchangeToken', { body, ...options });
  }

  /**
   * Retrieves information about the currently authenticated identity.
   *
   * Use this method to:
   *
   * - Get current user information
   * - Check authentication status
   * - Retrieve organization context
   * - Validate authentication principal
   *
   * ### Examples
   *
   * - Get current identity:
   *
   *   Retrieves details about the authenticated user.
   *
   *   ```yaml
   *   {}
   *   ```
   */
  getAuthenticatedIdentity(
    body: IdentityGetAuthenticatedIdentityParams,
    options?: RequestOptions,
  ): APIPromise<IdentityGetAuthenticatedIdentityResponse> {
    return this._client.post('/gitpod.v1.IdentityService/GetAuthenticatedIdentity', { body, ...options });
  }

  /**
   * Gets an ID token for authenticating with other services.
   *
   * Use this method to:
   *
   * - Obtain authentication tokens for service-to-service calls
   * - Access protected resources
   * - Generate scoped access tokens
   *
   * ### Examples
   *
   * - Get token for single service:
   *
   *   Retrieves a token for authenticating with one service.
   *
   *   ```yaml
   *   audience:
   *     - "https://api.gitpod.io"
   *   ```
   *
   * - Get token for multiple services:
   *
   *   Retrieves a token valid for multiple services.
   *
   *   ```yaml
   *   audience:
   *     - "https://api.gitpod.io"
   *     - "https://ws.gitpod.io"
   *   ```
   */
  getIDToken(
    body: IdentityGetIDTokenParams,
    options?: RequestOptions,
  ): APIPromise<IdentityGetIDTokenResponse> {
    return this._client.post('/gitpod.v1.IdentityService/GetIDToken', { body, ...options });
  }
}

export interface IdentityExchangeTokenResponse {
  /**
   * access_token is the new access token
   */
  accessToken?: string;
}

export interface IdentityGetAuthenticatedIdentityResponse {
  organizationId?: string;

  /**
   * subject is the identity of the current user
   */
  subject?: Shared.Subject;
}

export interface IdentityGetIDTokenResponse {
  token?: string;
}

export interface IdentityExchangeTokenParams {
  /**
   * exchange_token is the token to exchange
   */
  exchangeToken?: string;
}

export interface IdentityGetAuthenticatedIdentityParams {
  empty?: boolean;
}

export interface IdentityGetIDTokenParams {
  audience?: Array<string>;
}

export declare namespace Identity {
  export {
    type IdentityExchangeTokenResponse as IdentityExchangeTokenResponse,
    type IdentityGetAuthenticatedIdentityResponse as IdentityGetAuthenticatedIdentityResponse,
    type IdentityGetIDTokenResponse as IdentityGetIDTokenResponse,
    type IdentityExchangeTokenParams as IdentityExchangeTokenParams,
    type IdentityGetAuthenticatedIdentityParams as IdentityGetAuthenticatedIdentityParams,
    type IdentityGetIDTokenParams as IdentityGetIDTokenParams,
  };
}
