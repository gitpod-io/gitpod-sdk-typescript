// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { GatewaysGatewaysPage } from './shared';
import { GatewaysPage, type GatewaysPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Gateways extends APIResource {
  /**
   * ListGateways
   */
  list(
    params: GatewayListParams,
    options?: RequestOptions,
  ): PagePromise<GatewaysGatewaysPage, Shared.Gateway> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList('/gitpod.v1.GatewayService/ListGateways', GatewaysPage<Shared.Gateway>, {
      query: { token, pageSize },
      body,
      method: 'post',
      ...options,
    });
  }
}

export interface GatewayListParams extends GatewaysPageParams {
  /**
   * Body param: pagination contains the pagination options for listing gateways
   */
  pagination?: GatewayListParams.Pagination;
}

export namespace GatewayListParams {
  /**
   * pagination contains the pagination options for listing gateways
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

export declare namespace Gateways {
  export { type GatewayListParams as GatewayListParams };
}

export { type GatewaysGatewaysPage };
