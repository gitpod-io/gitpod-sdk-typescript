// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Shared from './shared';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class Identity extends APIResource {
  /**
   * ExchangeToken trades an exchange token for a new access token.
   */
  exchangeToken(
    body: IdentityExchangeTokenParams,
    options?: RequestOptions,
  ): APIPromise<IdentityExchangeTokenResponse> {
    return this._client.post('/gitpod.v1.IdentityService/ExchangeToken', { body, ...options });
  }

  /**
   * GetAuthenticatedIdentity allows to retrieve the current identity.
   */
  getAuthenticatedIdentity(
    body: IdentityGetAuthenticatedIdentityParams,
    options?: RequestOptions,
  ): APIPromise<IdentityGetAuthenticatedIdentityResponse> {
    return this._client.post('/gitpod.v1.IdentityService/GetAuthenticatedIdentity', { body, ...options });
  }

  /**
   * GetIDToken returns a token that can be used to authenticate the user against the
   * other services.
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
