// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Invites extends APIResource {
  /**
   * Creates an invite link for joining an organization. Any existing
   * OrganizationInvites are invalidated and can no longer be used.
   *
   * Use this method to:
   *
   * - Generate shareable invite links
   * - Manage team growth
   * - Control organization access
   *
   * ### Examples
   *
   * - Create organization invite:
   *
   *   Generates a new invite link for the organization.
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   ```
   */
  create(body: InviteCreateParams, options?: RequestOptions): APIPromise<InviteCreateResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/CreateOrganizationInvite', { body, ...options });
  }

  /**
   * GetOrganizationInvite
   */
  retrieve(body: InviteRetrieveParams, options?: RequestOptions): APIPromise<InviteRetrieveResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/GetOrganizationInvite', { body, ...options });
  }

  /**
   * Retrieves organization details and membership info based on an invite link.
   *
   * Use this method to:
   *
   * - Preview organization details before joining
   * - Validate invite link authenticity
   * - Check organization size and activity
   * - View team information before accepting
   *
   * ### Examples
   *
   * - Get invite summary:
   *
   *   Retrieves organization information from an invite.
   *
   *   ```yaml
   *   inviteId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   */
  getSummary(body: InviteGetSummaryParams, options?: RequestOptions): APIPromise<InviteGetSummaryResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/GetOrganizationInviteSummary', {
      body,
      ...options,
    });
  }
}

export interface OrganizationInvite {
  /**
   * invite_id is the unique identifier of the invite to join the organization. Use
   * JoinOrganization with this ID to join the organization.
   */
  inviteId: string;
}

export interface InviteCreateResponse {
  invite: OrganizationInvite;
}

export interface InviteRetrieveResponse {
  invite: OrganizationInvite;
}

export interface InviteGetSummaryResponse {
  organizationId: string;

  organizationMemberCount?: number;

  organizationName?: string;
}

export interface InviteCreateParams {
  organizationId: string;
}

export interface InviteRetrieveParams {
  organizationId: string;
}

export interface InviteGetSummaryParams {
  inviteId: string;
}

export declare namespace Invites {
  export {
    type OrganizationInvite as OrganizationInvite,
    type InviteCreateResponse as InviteCreateResponse,
    type InviteRetrieveResponse as InviteRetrieveResponse,
    type InviteGetSummaryResponse as InviteGetSummaryResponse,
    type InviteCreateParams as InviteCreateParams,
    type InviteRetrieveParams as InviteRetrieveParams,
    type InviteGetSummaryParams as InviteGetSummaryParams,
  };
}
