// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { EditorsPage, type EditorsPageParams, PagePromise } from '../pagination';
import { RequestOptions } from '../internal/request-options';

export class Editors extends APIResource {
  /**
   * GetEditor returns the editor with the given ID
   */
  retrieve(body: EditorRetrieveParams, options?: RequestOptions): APIPromise<EditorRetrieveResponse> {
    return this._client.post('/gitpod.v1.EditorService/GetEditor', { body, ...options });
  }

  /**
   * ListEditors lists all editors available to the caller
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
   * ResolveEditorURL resolves the editor's URL for an environment
   */
  resolveURL(body: EditorResolveURLParams, options?: RequestOptions): APIPromise<EditorResolveURLResponse> {
    return this._client.post('/gitpod.v1.EditorService/ResolveEditorURL', { body, ...options });
  }
}

export type EditorsEditorsPage = EditorsPage<Editor>;

export interface Editor {
  id?: string;

  alias?: string;

  iconUrl?: string;

  installationInstructions?: string;

  name?: string;

  shortDescription?: string;

  urlTemplate?: string;
}

export interface EditorRetrieveResponse {
  /**
   * editor contains the editor
   */
  editor?: Editor;
}

export interface EditorResolveURLResponse {
  /**
   * url is the resolved editor URL
   */
  url?: string;
}

export interface EditorRetrieveParams {
  /**
   * id is the ID of the editor to get
   */
  id?: string;
}

export interface EditorListParams extends EditorsPageParams {
  /**
   * Body param: pagination contains the pagination options for listing environments
   */
  pagination?: EditorListParams.Pagination;
}

export namespace EditorListParams {
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
  editorId?: string;

  /**
   * environmentId is the ID of the environment to resolve the URL for
   */
  environmentId?: string;

  /**
   * organizationId is the ID of the organization to resolve the URL for
   */
  organizationId?: string;
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
