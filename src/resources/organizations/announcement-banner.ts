// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class AnnouncementBannerResource extends APIResource {
  /**
   * Updates the announcement banner configuration for an organization.
   *
   * Use this method to configure the announcement banner displayed to all users.
   * Only organization admins can update the banner. Requires Enterprise tier.
   *
   * ### Examples
   *
   * - Enable announcement banner:
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   message: "Scheduled maintenance on Saturday 10pm-2am UTC"
   *   enabled: true
   *   ```
   *
   * - Disable announcement banner:
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   enabled: false
   *   ```
   *
   * @example
   * ```ts
   * const announcementBanner =
   *   await client.organizations.announcementBanner.update({
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   });
   * ```
   */
  update(
    body: AnnouncementBannerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AnnouncementBannerUpdateResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/UpdateAnnouncementBanner', { body, ...options });
  }

  /**
   * Retrieves the announcement banner configuration for an organization.
   *
   * Use this method to fetch the current announcement banner settings. All
   * organization members can read the banner configuration.
   *
   * ### Examples
   *
   * - Get announcement banner:
   *
   *   ```yaml
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   ```
   *
   * @example
   * ```ts
   * const announcementBanner =
   *   await client.organizations.announcementBanner.get({
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   });
   * ```
   */
  get(
    body: AnnouncementBannerGetParams,
    options?: RequestOptions,
  ): APIPromise<AnnouncementBannerGetResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/GetAnnouncementBanner', { body, ...options });
  }
}

export interface AnnouncementBanner {
  /**
   * organization_id is the ID of the organization
   */
  organizationId: string;

  /**
   * enabled controls whether the banner is displayed
   */
  enabled?: boolean;

  /**
   * message is the banner message displayed to users. Supports basic Markdown.
   */
  message?: string;
}

export interface AnnouncementBannerUpdateResponse {
  /**
   * banner is the updated announcement banner configuration
   */
  banner: AnnouncementBanner;
}

export interface AnnouncementBannerGetResponse {
  /**
   * banner is the announcement banner configuration
   */
  banner: AnnouncementBanner;
}

export interface AnnouncementBannerUpdateParams {
  /**
   * organization_id is the ID of the organization
   */
  organizationId: string;

  /**
   * enabled controls whether the banner is displayed
   */
  enabled?: boolean | null;

  /**
   * message is the banner message. Supports basic Markdown. Maximum 1000 characters.
   */
  message?: string | null;
}

export interface AnnouncementBannerGetParams {
  /**
   * organization_id is the ID of the organization
   */
  organizationId: string;
}

export declare namespace AnnouncementBannerResource {
  export {
    type AnnouncementBanner as AnnouncementBanner,
    type AnnouncementBannerUpdateResponse as AnnouncementBannerUpdateResponse,
    type AnnouncementBannerGetResponse as AnnouncementBannerGetResponse,
    type AnnouncementBannerUpdateParams as AnnouncementBannerUpdateParams,
    type AnnouncementBannerGetParams as AnnouncementBannerGetParams,
  };
}
