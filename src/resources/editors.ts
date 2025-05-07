// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { EditorsPage, type EditorsPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Editors extends APIResource {
  /**
   * Gets details about a specific editor.
   *
   * Use this method to:
   *
   * - View editor information
   * - Get editor configuration
   *
   * ### Examples
   *
   * - Get editor details:
   *
   *   Retrieves information about a specific editor.
   *
   *   ```yaml
   *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   ```
   */
  retrieve(body: EditorRetrieveParams, options?: RequestOptions): APIPromise<EditorRetrieveResponse> {
    return this._client.post('/gitpod.v1.EditorService/GetEditor', { body, ...options });
  }

  /**
   * Lists all available code editors, optionally filtered to those allowed in an
   * organization.
   *
   * Use this method to:
   *
   * - View supported editors
   * - Get editor capabilities
   * - Browse editor options
   * - Check editor availability
   *
   * ### Examples
   *
   * - List editors:
   *
   *   Shows all available editors with pagination.
   *
   *   ```yaml
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * - List editors available to the organization:
   *
   *   Shows all available editors that are allowed by the policies enforced in the
   *   organization with pagination.
   *
   *   ```yaml
   *   pagination:
   *     pageSize: 20
   *   filter:
   *     allowedByPolicy: true
   *   ```
   */
  list(params: EditorListParams, options?: RequestOptions): PagePromise<EditorsEditorsPage, Editor> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList('/gitpod.v1.EditorService/ListEditors', EditorsPage<Editor>, {
      query: { token, pageSize },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Resolves the URL for accessing an editor in a specific environment.
   *
   * Use this method to:
   *
   * - Get editor access URLs
   * - Launch editors for environments
   * - Set up editor connections
   * - Configure editor access
   *
   * ### Examples
   *
   * - Resolve editor URL:
   *
   *   Gets the URL for accessing an editor in an environment.
   *
   *   ```yaml
   *   editorId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
   *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
   *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   ```
   */
  resolveURL(body: EditorResolveURLParams, options?: RequestOptions): APIPromise<EditorResolveURLResponse> {
    return this._client.post('/gitpod.v1.EditorService/ResolveEditorURL', { body, ...options });
  }
}

export type EditorsEditorsPage = EditorsPage<Editor>;

export interface Editor {
  id: string;

  installationInstructions: string;

  name: string;

  urlTemplate: string;

  alias?: string;

  iconUrl?: string;

  shortDescription?: string;
}

export interface EditorRetrieveResponse {
  /**
   * editor contains the editor
   */
  editor: Editor;
}

export interface EditorResolveURLResponse {
  /**
   * url is the resolved editor URL
   */
  url: string;
}

export interface EditorRetrieveParams {
  /**
   * id is the ID of the editor to get
   */
  id: string;
}

export interface EditorListParams extends EditorsPageParams {
  /**
   * Body param: filter contains the filter options for listing editors
   */
  filter?: EditorListParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing environments
   */
  pagination?: EditorListParams.Pagination;
}

export namespace EditorListParams {
  /**
   * filter contains the filter options for listing editors
   */
  export interface Filter {
    /**
     * allowed_by_policy filters the response to only editors that are allowed by the
     * policies enforced in the organization
     */
    allowedByPolicy?: boolean;
  }

  /**
   * pagination contains the pagination options for listing environments
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

export interface EditorResolveURLParams {
  /**
   * editorId is the ID of the editor to resolve the URL for
   */
  editorId: string;

  /**
   * environmentId is the ID of the environment to resolve the URL for
   */
  environmentId: string;

  /**
   * organizationId is the ID of the organization to resolve the URL for
   */
  organizationId: string;
}

export declare namespace Editors {
  export {
    type Editor as Editor,
    type EditorRetrieveResponse as EditorRetrieveResponse,
    type EditorResolveURLResponse as EditorResolveURLResponse,
    type EditorsEditorsPage as EditorsEditorsPage,
    type EditorRetrieveParams as EditorRetrieveParams,
    type EditorListParams as EditorListParams,
    type EditorResolveURLParams as EditorResolveURLParams,
  };
}
