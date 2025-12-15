// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { GitpodError } from './error';
import { FinalRequestOptions } from '../internal/request-options';
import { defaultParseResponse } from '../internal/parse';
import { type Gitpod } from '../client';
import { APIPromise } from './api-promise';
import { type APIResponseProps } from '../internal/parse';
import { maybeObj } from '../internal/utils/values';

export type PageRequestOptions = Pick<FinalRequestOptions, 'query' | 'headers' | 'body' | 'path' | 'method'>;

export abstract class AbstractPage<Item> implements AsyncIterable<Item> {
  #client: Gitpod;
  protected options: FinalRequestOptions;

  protected response: Response;
  protected body: unknown;

  constructor(client: Gitpod, response: Response, body: unknown, options: FinalRequestOptions) {
    this.#client = client;
    this.options = options;
    this.response = response;
    this.body = body;
  }

  abstract nextPageRequestOptions(): PageRequestOptions | null;

  abstract getPaginatedItems(): Item[];

  hasNextPage(): boolean {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageRequestOptions() != null;
  }

  async getNextPage(): Promise<this> {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions) {
      throw new GitpodError(
        'No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.',
      );
    }

    return await this.#client.requestAPIList(this.constructor as any, nextOptions);
  }

  async *iterPages(): AsyncGenerator<this> {
    let page: this = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
}

/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
export class PagePromise<
    PageClass extends AbstractPage<Item>,
    Item = ReturnType<PageClass['getPaginatedItems']>[number],
  >
  extends APIPromise<PageClass>
  implements AsyncIterable<Item>
{
  constructor(
    client: Gitpod,
    request: Promise<APIResponseProps>,
    Page: new (...args: ConstructorParameters<typeof AbstractPage>) => PageClass,
  ) {
    super(
      client,
      request,
      async (client, props) =>
        new Page(client, props.response, await defaultParseResponse(client, props), props.options),
    );
  }

  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
}

export interface AgentExecutionsPageResponse<Item> {
  agentExecutions: Array<Item>;

  pagination: AgentExecutionsPageResponse.Pagination;
}

export namespace AgentExecutionsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface AgentExecutionsPageParams {
  pageSize?: number;

  token?: string;
}

export class AgentExecutionsPage<Item>
  extends AbstractPage<Item>
  implements AgentExecutionsPageResponse<Item>
{
  agentExecutions: Array<Item>;

  pagination: AgentExecutionsPageResponse.Pagination;

  constructor(
    client: Gitpod,
    response: Response,
    body: AgentExecutionsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.agentExecutions = body.agentExecutions || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.agentExecutions ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface AssignmentsPageResponse<Item> {
  assignments: Array<Item>;

  pagination: AssignmentsPageResponse.Pagination;
}

export namespace AssignmentsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface AssignmentsPageParams {
  pageSize?: number;

  token?: string;
}

export class AssignmentsPage<Item> extends AbstractPage<Item> implements AssignmentsPageResponse<Item> {
  assignments: Array<Item>;

  pagination: AssignmentsPageResponse.Pagination;

  constructor(
    client: Gitpod,
    response: Response,
    body: AssignmentsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.assignments = body.assignments || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.assignments ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface DomainVerificationsPageResponse<Item> {
  domainVerifications: Array<Item>;

  pagination: DomainVerificationsPageResponse.Pagination;
}

export namespace DomainVerificationsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface DomainVerificationsPageParams {
  pageSize?: number;

  token?: string;
}

export class DomainVerificationsPage<Item>
  extends AbstractPage<Item>
  implements DomainVerificationsPageResponse<Item>
{
  domainVerifications: Array<Item>;

  pagination: DomainVerificationsPageResponse.Pagination;

  constructor(
    client: Gitpod,
    response: Response,
    body: DomainVerificationsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.domainVerifications = body.domainVerifications || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.domainVerifications ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface EditorsPageResponse<Item> {
  editors: Array<Item>;

  pagination: EditorsPageResponse.Pagination;
}

export namespace EditorsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface EditorsPageParams {
  pageSize?: number;

  token?: string;
}

export class EditorsPage<Item> extends AbstractPage<Item> implements EditorsPageResponse<Item> {
  editors: Array<Item>;

  pagination: EditorsPageResponse.Pagination;

  constructor(
    client: Gitpod,
    response: Response,
    body: EditorsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.editors = body.editors || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.editors ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface EntriesPageResponse<Item> {
  entries: Array<Item>;

  pagination: EntriesPageResponse.Pagination;
}

export namespace EntriesPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface EntriesPageParams {
  pageSize?: number;

  token?: string;
}

export class EntriesPage<Item> extends AbstractPage<Item> implements EntriesPageResponse<Item> {
  entries: Array<Item>;

  pagination: EntriesPageResponse.Pagination;

  constructor(
    client: Gitpod,
    response: Response,
    body: EntriesPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.entries = body.entries || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.entries ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface EnvironmentClassesPageResponse<Item> {
  environmentClasses: Array<Item>;

  pagination: EnvironmentClassesPageResponse.Pagination;
}

export namespace EnvironmentClassesPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface EnvironmentClassesPageParams {
  pageSize?: number;

  token?: string;
}

export class EnvironmentClassesPage<Item>
  extends AbstractPage<Item>
  implements EnvironmentClassesPageResponse<Item>
{
  environmentClasses: Array<Item>;

  pagination: EnvironmentClassesPageResponse.Pagination;

  constructor(
    client: Gitpod,
    response: Response,
    body: EnvironmentClassesPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.environmentClasses = body.environmentClasses || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.environmentClasses ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface EnvironmentsPageResponse<Item> {
  environments: Array<Item>;

  pagination: EnvironmentsPageResponse.Pagination;
}

export namespace EnvironmentsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface EnvironmentsPageParams {
  pageSize?: number;

  token?: string;
}

export class EnvironmentsPage<Item> extends AbstractPage<Item> implements EnvironmentsPageResponse<Item> {
  environments: Array<Item>;

  pagination: EnvironmentsPageResponse.Pagination;

  constructor(
    client: Gitpod,
    response: Response,
    body: EnvironmentsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.environments = body.environments || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.environments ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface GatewaysPageResponse<Item> {
  gateways: Array<Item>;

  pagination: GatewaysPageResponse.Pagination;
}

export namespace GatewaysPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface GatewaysPageParams {
  pageSize?: number;

  token?: string;
}

export class GatewaysPage<Item> extends AbstractPage<Item> implements GatewaysPageResponse<Item> {
  gateways: Array<Item>;

  pagination: GatewaysPageResponse.Pagination;

  constructor(
    client: Gitpod,
    response: Response,
    body: GatewaysPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.gateways = body.gateways || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.gateways ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface GroupsPageResponse<Item> {
  groups: Array<Item>;

  pagination: GroupsPageResponse.Pagination;
}

export namespace GroupsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface GroupsPageParams {
  pageSize?: number;

  token?: string;
}

export class GroupsPage<Item> extends AbstractPage<Item> implements GroupsPageResponse<Item> {
  groups: Array<Item>;

  pagination: GroupsPageResponse.Pagination;

  constructor(
    client: Gitpod,
    response: Response,
    body: GroupsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.groups = body.groups || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.groups ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface IntegrationsPageResponse<Item> {
  integrations: Array<Item>;

  pagination: IntegrationsPageResponse.Pagination;
}

export namespace IntegrationsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface IntegrationsPageParams {
  pageSize?: number;

  token?: string;
}

export class IntegrationsPage<Item> extends AbstractPage<Item> implements IntegrationsPageResponse<Item> {
  integrations: Array<Item>;

  pagination: IntegrationsPageResponse.Pagination;

  constructor(
    client: Gitpod,
    response: Response,
    body: IntegrationsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.integrations = body.integrations || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.integrations ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface JoinableOrganizationsPageResponse<Item> {
  joinableOrganizations: Array<Item>;

  pagination: JoinableOrganizationsPageResponse.Pagination;
}

export namespace JoinableOrganizationsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface JoinableOrganizationsPageParams {
  pageSize?: number;

  token?: string;
}

export class JoinableOrganizationsPage<Item>
  extends AbstractPage<Item>
  implements JoinableOrganizationsPageResponse<Item>
{
  joinableOrganizations: Array<Item>;

  pagination: JoinableOrganizationsPageResponse.Pagination;

  constructor(
    client: Gitpod,
    response: Response,
    body: JoinableOrganizationsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.joinableOrganizations = body.joinableOrganizations || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.joinableOrganizations ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface LoginProvidersPageResponse<Item> {
  loginProviders: Array<Item>;

  pagination: LoginProvidersPageResponse.Pagination;
}

export namespace LoginProvidersPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface LoginProvidersPageParams {
  pageSize?: number;

  token?: string;
}

export class LoginProvidersPage<Item> extends AbstractPage<Item> implements LoginProvidersPageResponse<Item> {
  loginProviders: Array<Item>;

  pagination: LoginProvidersPageResponse.Pagination;

  constructor(
    client: Gitpod,
    response: Response,
    body: LoginProvidersPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.loginProviders = body.loginProviders || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.loginProviders ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface LoginsPageResponse<Item> {
  logins: Array<Item>;

  pagination: LoginsPageResponse.Pagination;
}

export namespace LoginsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface LoginsPageParams {
  pageSize?: number;

  token?: string;
}

export class LoginsPage<Item> extends AbstractPage<Item> implements LoginsPageResponse<Item> {
  logins: Array<Item>;

  pagination: LoginsPageResponse.Pagination;

  constructor(
    client: Gitpod,
    response: Response,
    body: LoginsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.logins = body.logins || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.logins ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface MembersPageResponse<Item> {
  members: Array<Item>;

  pagination: MembersPageResponse.Pagination;
}

export namespace MembersPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface MembersPageParams {
  pageSize?: number;

  token?: string;
}

export class MembersPage<Item> extends AbstractPage<Item> implements MembersPageResponse<Item> {
  members: Array<Item>;

  pagination: MembersPageResponse.Pagination;

  constructor(
    client: Gitpod,
    response: Response,
    body: MembersPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.members = body.members || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.members ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface PersonalAccessTokensPageResponse<Item> {
  pagination: PersonalAccessTokensPageResponse.Pagination;

  personalAccessTokens: Array<Item>;
}

export namespace PersonalAccessTokensPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface PersonalAccessTokensPageParams {
  pageSize?: number;

  token?: string;
}

export class PersonalAccessTokensPage<Item>
  extends AbstractPage<Item>
  implements PersonalAccessTokensPageResponse<Item>
{
  pagination: PersonalAccessTokensPageResponse.Pagination;

  personalAccessTokens: Array<Item>;

  constructor(
    client: Gitpod,
    response: Response,
    body: PersonalAccessTokensPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pagination = body.pagination || {};
    this.personalAccessTokens = body.personalAccessTokens || [];
  }

  getPaginatedItems(): Item[] {
    return this.personalAccessTokens ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface PoliciesPageResponse<Item> {
  pagination: PoliciesPageResponse.Pagination;

  policies: Array<Item>;
}

export namespace PoliciesPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface PoliciesPageParams {
  pageSize?: number;

  token?: string;
}

export class PoliciesPage<Item> extends AbstractPage<Item> implements PoliciesPageResponse<Item> {
  pagination: PoliciesPageResponse.Pagination;

  policies: Array<Item>;

  constructor(
    client: Gitpod,
    response: Response,
    body: PoliciesPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pagination = body.pagination || {};
    this.policies = body.policies || [];
  }

  getPaginatedItems(): Item[] {
    return this.policies ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface PrebuildsPageResponse<Item> {
  pagination: PrebuildsPageResponse.Pagination;

  prebuilds: Array<Item>;
}

export namespace PrebuildsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface PrebuildsPageParams {
  pageSize?: number;

  token?: string;
}

export class PrebuildsPage<Item> extends AbstractPage<Item> implements PrebuildsPageResponse<Item> {
  pagination: PrebuildsPageResponse.Pagination;

  prebuilds: Array<Item>;

  constructor(
    client: Gitpod,
    response: Response,
    body: PrebuildsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pagination = body.pagination || {};
    this.prebuilds = body.prebuilds || [];
  }

  getPaginatedItems(): Item[] {
    return this.prebuilds ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface ProjectEnvironmentClassesPageResponse<Item> {
  pagination: ProjectEnvironmentClassesPageResponse.Pagination;

  projectEnvironmentClasses: Array<Item>;
}

export namespace ProjectEnvironmentClassesPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface ProjectEnvironmentClassesPageParams {
  pageSize?: number;

  token?: string;
}

export class ProjectEnvironmentClassesPage<Item>
  extends AbstractPage<Item>
  implements ProjectEnvironmentClassesPageResponse<Item>
{
  pagination: ProjectEnvironmentClassesPageResponse.Pagination;

  projectEnvironmentClasses: Array<Item>;

  constructor(
    client: Gitpod,
    response: Response,
    body: ProjectEnvironmentClassesPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pagination = body.pagination || {};
    this.projectEnvironmentClasses = body.projectEnvironmentClasses || [];
  }

  getPaginatedItems(): Item[] {
    return this.projectEnvironmentClasses ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface ProjectsPageResponse<Item> {
  pagination: ProjectsPageResponse.Pagination;

  projects: Array<Item>;
}

export namespace ProjectsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface ProjectsPageParams {
  pageSize?: number;

  token?: string;
}

export class ProjectsPage<Item> extends AbstractPage<Item> implements ProjectsPageResponse<Item> {
  pagination: ProjectsPageResponse.Pagination;

  projects: Array<Item>;

  constructor(
    client: Gitpod,
    response: Response,
    body: ProjectsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pagination = body.pagination || {};
    this.projects = body.projects || [];
  }

  getPaginatedItems(): Item[] {
    return this.projects ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface PromptsPageResponse<Item> {
  pagination: PromptsPageResponse.Pagination;

  prompts: Array<Item>;
}

export namespace PromptsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface PromptsPageParams {
  pageSize?: number;

  token?: string;
}

export class PromptsPage<Item> extends AbstractPage<Item> implements PromptsPageResponse<Item> {
  pagination: PromptsPageResponse.Pagination;

  prompts: Array<Item>;

  constructor(
    client: Gitpod,
    response: Response,
    body: PromptsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pagination = body.pagination || {};
    this.prompts = body.prompts || [];
  }

  getPaginatedItems(): Item[] {
    return this.prompts ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface RecordsPageResponse<Item> {
  pagination: RecordsPageResponse.Pagination;

  records: Array<Item>;
}

export namespace RecordsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface RecordsPageParams {
  pageSize?: number;

  token?: string;
}

export class RecordsPage<Item> extends AbstractPage<Item> implements RecordsPageResponse<Item> {
  pagination: RecordsPageResponse.Pagination;

  records: Array<Item>;

  constructor(
    client: Gitpod,
    response: Response,
    body: RecordsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pagination = body.pagination || {};
    this.records = body.records || [];
  }

  getPaginatedItems(): Item[] {
    return this.records ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface RepositoriesPageResponse<Item> {
  pagination: RepositoriesPageResponse.Pagination;

  repositories: Array<Item>;
}

export namespace RepositoriesPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface RepositoriesPageParams {
  pageSize?: number;

  token?: string;
}

export class RepositoriesPage<Item> extends AbstractPage<Item> implements RepositoriesPageResponse<Item> {
  pagination: RepositoriesPageResponse.Pagination;

  repositories: Array<Item>;

  constructor(
    client: Gitpod,
    response: Response,
    body: RepositoriesPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pagination = body.pagination || {};
    this.repositories = body.repositories || [];
  }

  getPaginatedItems(): Item[] {
    return this.repositories ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface RunnersPageResponse<Item> {
  pagination: RunnersPageResponse.Pagination;

  runners: Array<Item>;
}

export namespace RunnersPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface RunnersPageParams {
  pageSize?: number;

  token?: string;
}

export class RunnersPage<Item> extends AbstractPage<Item> implements RunnersPageResponse<Item> {
  pagination: RunnersPageResponse.Pagination;

  runners: Array<Item>;

  constructor(
    client: Gitpod,
    response: Response,
    body: RunnersPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pagination = body.pagination || {};
    this.runners = body.runners || [];
  }

  getPaginatedItems(): Item[] {
    return this.runners ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface SecretsPageResponse<Item> {
  pagination: SecretsPageResponse.Pagination;

  secrets: Array<Item>;
}

export namespace SecretsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface SecretsPageParams {
  pageSize?: number;

  token?: string;
}

export class SecretsPage<Item> extends AbstractPage<Item> implements SecretsPageResponse<Item> {
  pagination: SecretsPageResponse.Pagination;

  secrets: Array<Item>;

  constructor(
    client: Gitpod,
    response: Response,
    body: SecretsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pagination = body.pagination || {};
    this.secrets = body.secrets || [];
  }

  getPaginatedItems(): Item[] {
    return this.secrets ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface ServicesPageResponse<Item> {
  pagination: ServicesPageResponse.Pagination;

  services: Array<Item>;
}

export namespace ServicesPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface ServicesPageParams {
  pageSize?: number;

  token?: string;
}

export class ServicesPage<Item> extends AbstractPage<Item> implements ServicesPageResponse<Item> {
  pagination: ServicesPageResponse.Pagination;

  services: Array<Item>;

  constructor(
    client: Gitpod,
    response: Response,
    body: ServicesPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pagination = body.pagination || {};
    this.services = body.services || [];
  }

  getPaginatedItems(): Item[] {
    return this.services ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface SSOConfigurationsPageResponse<Item> {
  pagination: SSOConfigurationsPageResponse.Pagination;

  ssoConfigurations: Array<Item>;
}

export namespace SSOConfigurationsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface SSOConfigurationsPageParams {
  pageSize?: number;

  token?: string;
}

export class SSOConfigurationsPage<Item>
  extends AbstractPage<Item>
  implements SSOConfigurationsPageResponse<Item>
{
  pagination: SSOConfigurationsPageResponse.Pagination;

  ssoConfigurations: Array<Item>;

  constructor(
    client: Gitpod,
    response: Response,
    body: SSOConfigurationsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pagination = body.pagination || {};
    this.ssoConfigurations = body.ssoConfigurations || [];
  }

  getPaginatedItems(): Item[] {
    return this.ssoConfigurations ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface TaskExecutionsPageResponse<Item> {
  pagination: TaskExecutionsPageResponse.Pagination;

  taskExecutions: Array<Item>;
}

export namespace TaskExecutionsPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface TaskExecutionsPageParams {
  pageSize?: number;

  token?: string;
}

export class TaskExecutionsPage<Item> extends AbstractPage<Item> implements TaskExecutionsPageResponse<Item> {
  pagination: TaskExecutionsPageResponse.Pagination;

  taskExecutions: Array<Item>;

  constructor(
    client: Gitpod,
    response: Response,
    body: TaskExecutionsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pagination = body.pagination || {};
    this.taskExecutions = body.taskExecutions || [];
  }

  getPaginatedItems(): Item[] {
    return this.taskExecutions ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface TasksPageResponse<Item> {
  pagination: TasksPageResponse.Pagination;

  tasks: Array<Item>;
}

export namespace TasksPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface TasksPageParams {
  pageSize?: number;

  token?: string;
}

export class TasksPage<Item> extends AbstractPage<Item> implements TasksPageResponse<Item> {
  pagination: TasksPageResponse.Pagination;

  tasks: Array<Item>;

  constructor(
    client: Gitpod,
    response: Response,
    body: TasksPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pagination = body.pagination || {};
    this.tasks = body.tasks || [];
  }

  getPaginatedItems(): Item[] {
    return this.tasks ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}

export interface TokensPageResponse<Item> {
  pagination: TokensPageResponse.Pagination;

  tokens: Array<Item>;
}

export namespace TokensPageResponse {
  export interface Pagination {
    nextToken?: string;
  }
}

export interface TokensPageParams {
  pageSize?: number;

  token?: string;
}

export class TokensPage<Item> extends AbstractPage<Item> implements TokensPageResponse<Item> {
  pagination: TokensPageResponse.Pagination;

  tokens: Array<Item>;

  constructor(
    client: Gitpod,
    response: Response,
    body: TokensPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.pagination = body.pagination || {};
    this.tokens = body.tokens || [];
  }

  getPaginatedItems(): Item[] {
    return this.tokens ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.pagination?.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        token: cursor,
      },
    };
  }
}
