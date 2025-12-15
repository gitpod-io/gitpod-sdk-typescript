// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { ProjectEnvironmentClassesProjectEnvironmentClassesPage } from '../shared';
import { APIPromise } from '../../core/api-promise';
import {
  PagePromise,
  ProjectEnvironmentClassesPage,
  type ProjectEnvironmentClassesPageParams,
} from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class EnvironmentClases extends APIResource {
  /**
   * Updates all environment classes of a project.
   *
   * Use this method to:
   *
   * - Modify all environment classea of a project
   *
   * ### Examples
   *
   * - Update project environment classes:
   *
   *   Updates all environment classes for a project.
   *
   *   ```yaml
   *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   projectEnvironmentClasses:
   *     - environmentClassId: "b0e12f6c-4c67-429d-a4a6-d9838b5da041"
   *       order: 0
   *     - localRunner: true
   *       order: 1
   *   ```
   *
   * @example
   * ```ts
   * const environmentClase =
   *   await client.projects.environmentClases.update({
   *     projectEnvironmentClasses: [
   *       {
   *         environmentClassId:
   *           'b0e12f6c-4c67-429d-a4a6-d9838b5da041',
   *         order: 0,
   *       },
   *       { localRunner: true, order: 1 },
   *     ],
   *     projectId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   });
   * ```
   */
  update(body: EnvironmentClaseUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.ProjectService/UpdateProjectEnvironmentClasses', {
      body,
      ...options,
    });
  }

  /**
   * Lists environment classes of a project.
   *
   * Use this method to:
   *
   * - View all environment classes of a project
   *
   * ### Examples
   *
   * - List project environment classes:
   *
   *   Shows all environment classes of a project.
   *
   *   ```yaml
   *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
   *   pagination:
   *     pageSize: 20
   *   ```
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const projectEnvironmentClass of client.projects.environmentClases.list(
   *   {
   *     pagination: { pageSize: 20 },
   *     projectId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: EnvironmentClaseListParams,
    options?: RequestOptions,
  ): PagePromise<ProjectEnvironmentClassesProjectEnvironmentClassesPage, Shared.ProjectEnvironmentClass> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.ProjectService/ListProjectEnvironmentClasses',
      ProjectEnvironmentClassesPage<Shared.ProjectEnvironmentClass>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }
}

export type EnvironmentClaseUpdateResponse = unknown;

export interface EnvironmentClaseUpdateParams {
  projectEnvironmentClasses?: Array<Shared.ProjectEnvironmentClass>;

  /**
   * project_id specifies the project identifier
   */
  projectId?: string;
}

export interface EnvironmentClaseListParams extends ProjectEnvironmentClassesPageParams {
  /**
   * Body param: pagination contains the pagination options for listing project
   * policies
   */
  pagination?: EnvironmentClaseListParams.Pagination;

  /**
   * Body param: project_id specifies the project identifier
   */
  projectId?: string;
}

export namespace EnvironmentClaseListParams {
  /**
   * pagination contains the pagination options for listing project policies
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

export declare namespace EnvironmentClases {
  export {
    type EnvironmentClaseUpdateResponse as EnvironmentClaseUpdateResponse,
    type EnvironmentClaseUpdateParams as EnvironmentClaseUpdateParams,
    type EnvironmentClaseListParams as EnvironmentClaseListParams,
  };
}

export { type ProjectEnvironmentClassesProjectEnvironmentClassesPage };
