// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Invites extends APIResource {
  /**
   * CreateOrganizationInvite creates an invite for the organization. Any existing
   * OrganizationInvites are invalidated and can no longer be used.
   */
  create(body: InviteCreateParams, options?: RequestOptions): APIPromise<InviteCreateResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/CreateOrganizationInvite', { body, ...options });
  }

  /**
   * GetOrganizationInvite retrieves invite for the organization. If no invite
   * exists, a new one is created.
   */
  retrieve(body: InviteRetrieveParams, options?: RequestOptions): APIPromise<InviteRetrieveResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/GetOrganizationInvite', { body, ...options });
  }

  /**
   * GetOrganizationInviteSummary retrieves a summary of the organization based on an
   * Invite ID. Used to discover which organization an invite is for.
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
