// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
import {
  type Logger,
  type LogLevel as LogLevelClient,
  parseLogLevel,
  loggerFor,
  formatRequestDetails,
} from './internal/utils/log';
export type { Logger, LogLevel as LogLevelClient } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Pagination from './core/pagination';
import {
  AbstractPage,
  type AgentExecutionsPageParams,
  AgentExecutionsPageResponse,
  type AssignmentsPageParams,
  AssignmentsPageResponse,
  type DomainVerificationsPageParams,
  DomainVerificationsPageResponse,
  type EditorsPageParams,
  EditorsPageResponse,
  type EntriesPageParams,
  EntriesPageResponse,
  type EnvironmentClassesPageParams,
  EnvironmentClassesPageResponse,
  type EnvironmentsPageParams,
  EnvironmentsPageResponse,
  type GatewaysPageParams,
  GatewaysPageResponse,
  type GroupsPageParams,
  GroupsPageResponse,
  type IntegrationsPageParams,
  IntegrationsPageResponse,
  type JoinableOrganizationsPageParams,
  JoinableOrganizationsPageResponse,
  type LoginProvidersPageParams,
  LoginProvidersPageResponse,
  type LoginsPageParams,
  LoginsPageResponse,
  type MembersPageParams,
  MembersPageResponse,
  type PersonalAccessTokensPageParams,
  PersonalAccessTokensPageResponse,
  type PoliciesPageParams,
  PoliciesPageResponse,
  type PrebuildsPageParams,
  PrebuildsPageResponse,
  type ProjectEnvironmentClassesPageParams,
  ProjectEnvironmentClassesPageResponse,
  type ProjectsPageParams,
  ProjectsPageResponse,
  type PromptsPageParams,
  PromptsPageResponse,
  type RecordsPageParams,
  RecordsPageResponse,
  type RepositoriesPageParams,
  RepositoriesPageResponse,
  type RunnersPageParams,
  RunnersPageResponse,
  type SSOConfigurationsPageParams,
  SSOConfigurationsPageResponse,
  type ScimConfigurationsPageParams,
  ScimConfigurationsPageResponse,
  type SecretsPageParams,
  SecretsPageResponse,
  type ServicesPageParams,
  ServicesPageResponse,
  type TaskExecutionsPageParams,
  TaskExecutionsPageResponse,
  type TasksPageParams,
  TasksPageResponse,
  type TokensPageParams,
  TokensPageResponse,
} from './core/pagination';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  Account,
  AccountDeleteParams,
  AccountDeleteResponse,
  AccountGetSSOLoginURLParams,
  AccountGetSSOLoginURLResponse,
  AccountListJoinableOrganizationsParams,
  AccountListLoginProvidersParams,
  AccountListSSOLoginsParams,
  AccountListSSOLoginsResponse,
  AccountListSSOLoginsResponsesLoginsPage,
  AccountMembership,
  AccountRetrieveParams,
  AccountRetrieveResponse,
  Accounts,
  JoinableOrganization,
  JoinableOrganizationsJoinableOrganizationsPage,
  LoginProvider,
  LoginProvidersLoginProvidersPage,
} from './resources/accounts';
import {
  AgentCodeContext,
  AgentCreateExecutionConversationTokenParams,
  AgentCreateExecutionConversationTokenResponse,
  AgentCreatePromptParams,
  AgentCreatePromptResponse,
  AgentDeleteExecutionParams,
  AgentDeleteExecutionResponse,
  AgentDeletePromptParams,
  AgentDeletePromptResponse,
  AgentExecution,
  AgentExecutionsAgentExecutionsPage,
  AgentListExecutionsParams,
  AgentListPromptsParams,
  AgentMode,
  AgentRetrieveExecutionParams,
  AgentRetrieveExecutionResponse,
  AgentRetrievePromptParams,
  AgentRetrievePromptResponse,
  AgentSendToExecutionParams,
  AgentSendToExecutionResponse,
  AgentStartExecutionParams,
  AgentStartExecutionResponse,
  AgentStopExecutionParams,
  AgentStopExecutionResponse,
  AgentUpdatePromptParams,
  AgentUpdatePromptResponse,
  Agents,
  Prompt,
  PromptMetadata,
  PromptSpec,
  PromptsPromptsPage,
  UserInputBlock,
} from './resources/agents';
import {
  Editor,
  EditorListParams,
  EditorResolveURLParams,
  EditorResolveURLResponse,
  EditorRetrieveParams,
  EditorRetrieveResponse,
  EditorVersion,
  Editors,
  EditorsEditorsPage,
} from './resources/editors';
import {
  Breadcrumb,
  ErrorEvent,
  ErrorLevel,
  ErrorReportErrorsParams,
  ErrorReportErrorsResponse,
  Errors as ErrorsAPIErrors,
  ExceptionInfo,
  ExceptionMechanism,
  RequestInfo as ErrorRequestInfo,
  StackFrame,
} from './resources/errors';
import {
  EventListParams,
  EventListResponse,
  EventListResponsesEntriesPage,
  EventWatchParams,
  EventWatchResponse,
  Events,
  ResourceOperation,
} from './resources/events';
import { GatewayListParams, Gateways } from './resources/gateways';
import {
  IDTokenVersion,
  Identity,
  IdentityExchangeTokenParams,
  IdentityExchangeTokenResponse,
  IdentityGetAuthenticatedIdentityParams,
  IdentityGetAuthenticatedIdentityResponse,
  IdentityGetIDTokenParams,
  IdentityGetIDTokenResponse,
} from './resources/identity';
import {
  Prebuild,
  PrebuildCancelParams,
  PrebuildCancelResponse,
  PrebuildCreateLogsTokenParams,
  PrebuildCreateLogsTokenResponse,
  PrebuildCreateParams,
  PrebuildCreateResponse,
  PrebuildDeleteParams,
  PrebuildDeleteResponse,
  PrebuildListParams,
  PrebuildMetadata,
  PrebuildPhase,
  PrebuildRetrieveParams,
  PrebuildRetrieveResponse,
  PrebuildSpec,
  PrebuildStatus,
  PrebuildTrigger,
  Prebuilds,
  PrebuildsPrebuildsPage,
} from './resources/prebuilds';
import {
  Secret,
  SecretCreateParams,
  SecretCreateResponse,
  SecretDeleteParams,
  SecretDeleteResponse,
  SecretGetValueParams,
  SecretGetValueResponse,
  SecretListParams,
  SecretScope,
  SecretUpdateValueParams,
  SecretUpdateValueResponse,
  Secrets,
  SecretsSecretsPage,
} from './resources/secrets';
import {
  EnvironmentUsageRecord,
  EnvironmentUsageRecordsRecordsPage,
  Usage,
  UsageListEnvironmentRuntimeRecordsParams,
} from './resources/usage';
import {
  AdmissionLevel,
  Environment,
  EnvironmentActivitySignal,
  EnvironmentCreateEnvironmentTokenParams,
  EnvironmentCreateEnvironmentTokenResponse,
  EnvironmentCreateFromProjectParams,
  EnvironmentCreateFromProjectResponse,
  EnvironmentCreateLogsTokenParams,
  EnvironmentCreateLogsTokenResponse,
  EnvironmentCreateParams,
  EnvironmentCreateResponse,
  EnvironmentDeleteParams,
  EnvironmentDeleteResponse,
  EnvironmentListParams,
  EnvironmentMarkActiveParams,
  EnvironmentMarkActiveResponse,
  EnvironmentMetadata,
  EnvironmentPhase,
  EnvironmentRetrieveParams,
  EnvironmentRetrieveResponse,
  EnvironmentRole,
  EnvironmentSpec,
  EnvironmentStartParams,
  EnvironmentStartResponse,
  EnvironmentStatus,
  EnvironmentStopParams,
  EnvironmentStopResponse,
  EnvironmentUnarchiveParams,
  EnvironmentUnarchiveResponse,
  EnvironmentUpdateParams,
  EnvironmentUpdateResponse,
  Environments,
  EnvironmentsEnvironmentsPage,
  KernelControlsConfig,
  Veto,
} from './resources/environments/environments';
import {
  Group,
  GroupCreateParams,
  GroupCreateResponse,
  GroupDeleteParams,
  GroupDeleteResponse,
  GroupListParams,
  GroupRetrieveParams,
  GroupRetrieveResponse,
  GroupUpdateParams,
  GroupUpdateResponse,
  Groups,
  GroupsGroupsPage,
} from './resources/groups/groups';
import {
  InviteDomains,
  Organization,
  OrganizationCreateParams,
  OrganizationCreateResponse,
  OrganizationDeleteParams,
  OrganizationDeleteResponse,
  OrganizationJoinParams,
  OrganizationJoinResponse,
  OrganizationLeaveParams,
  OrganizationLeaveResponse,
  OrganizationListMembersParams,
  OrganizationMember,
  OrganizationMembersMembersPage,
  OrganizationRetrieveParams,
  OrganizationRetrieveResponse,
  OrganizationSetRoleParams,
  OrganizationSetRoleResponse,
  OrganizationUpdateParams,
  OrganizationUpdateResponse,
  Organizations,
} from './resources/organizations/organizations';
import {
  EnvironmentInitializer,
  Project,
  ProjectCreateFromEnvironmentParams,
  ProjectCreateFromEnvironmentResponse,
  ProjectCreateParams,
  ProjectCreateResponse,
  ProjectDeleteParams,
  ProjectDeleteResponse,
  ProjectListParams,
  ProjectMetadata,
  ProjectPhase,
  ProjectPrebuildConfiguration,
  ProjectRetrieveParams,
  ProjectRetrieveResponse,
  ProjectUpdateParams,
  ProjectUpdateResponse,
  Projects,
  ProjectsProjectsPage,
  RecommendedEditors,
} from './resources/projects/projects';
import {
  GatewayInfo,
  LogLevel,
  MetricsConfiguration,
  Runner,
  RunnerCapability,
  RunnerCheckAuthenticationForHostParams,
  RunnerCheckAuthenticationForHostResponse,
  RunnerCheckRepositoryAccessParams,
  RunnerCheckRepositoryAccessResponse,
  RunnerConfiguration,
  RunnerCreateLogsTokenParams,
  RunnerCreateLogsTokenResponse,
  RunnerCreateParams,
  RunnerCreateResponse,
  RunnerCreateRunnerTokenParams,
  RunnerCreateRunnerTokenResponse,
  RunnerDeleteParams,
  RunnerDeleteResponse,
  RunnerKind,
  RunnerListParams,
  RunnerListScmOrganizationsParams,
  RunnerListScmOrganizationsResponse,
  RunnerParseContextURLParams,
  RunnerParseContextURLResponse,
  RunnerPhase,
  RunnerProvider,
  RunnerReleaseChannel,
  RunnerRetrieveParams,
  RunnerRetrieveResponse,
  RunnerSearchRepositoriesParams,
  RunnerSearchRepositoriesResponse,
  RunnerSpec,
  RunnerStatus,
  RunnerUpdateParams,
  RunnerUpdateResponse,
  RunnerVariant,
  Runners,
  RunnersRunnersPage,
  SearchMode,
} from './resources/runners/runners';
import {
  User,
  UserDeleteUserParams,
  UserDeleteUserResponse,
  UserGetAuthenticatedUserParams,
  UserGetAuthenticatedUserResponse,
  UserGetUserParams,
  UserGetUserResponse,
  UserSetSuspendedParams,
  UserSetSuspendedResponse,
  Users,
} from './resources/users/users';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Defaults to process.env['GITPOD_API_KEY'].
   */
  bearerToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['GITPOD_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['GITPOD_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevelClient | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Gitpod API.
 */
export class Gitpod {
  bearerToken: string;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logLevel: LogLevelClient | undefined;
  logger: Logger;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Gitpod API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['GITPOD_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['GITPOD_BASE_URL'] ?? https://app.gitpod.io/api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('GITPOD_BASE_URL'),
    bearerToken = readEnv('GITPOD_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.GitpodError(
        "The GITPOD_API_KEY environment variable is missing or empty; either provide it, or instantiate the Gitpod client with an bearerToken option, like new Gitpod({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL: baseURL || `https://app.gitpod.io/api`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? Gitpod.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('GITPOD_LOG'), "process.env['GITPOD_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.bearerToken = bearerToken;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      bearerToken: this.bearerToken,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://app.gitpod.io/api';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([{ Authorization: `Bearer ${this.bearerToken}` }]);
  }

  /**
   * Basic re-implementation of `qs.stringify` for primitive types.
   */
  protected stringifyQuery(query: Record<string, unknown>): string {
    return Object.entries(query)
      .filter(([_, value]) => typeof value !== 'undefined')
      .map(([key, value]) => {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
        if (value === null) {
          return `${encodeURIComponent(key)}=`;
        }
        throw new Errors.GitpodError(
          `Cannot stringify type ${typeof value}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`,
        );
      })
      .join('&');
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  getAPIList<Item, PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>>(
    path: string,
    Page: new (...args: any[]) => PageClass,
    opts?: PromiseOrValue<RequestOptions>,
  ): Pagination.PagePromise<PageClass, Item> {
    return this.requestAPIList(
      Page,
      opts && 'then' in opts ?
        opts.then((opts) => ({ method: 'get', path, ...opts }))
      : { method: 'get', path, ...opts },
    );
  }

  requestAPIList<
    Item = unknown,
    PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>,
  >(
    Page: new (...args: ConstructorParameters<typeof Pagination.AbstractPage>) => PageClass,
    options: PromiseOrValue<FinalRequestOptions>,
  ): Pagination.PagePromise<PageClass, Item> {
    const request = this.makeRequest(options, null, undefined);
    return new Pagination.PagePromise<PageClass, Item>(this as any as Gitpod, request, Page);
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    const abort = this._makeAbort(controller);
    if (signal) signal.addEventListener('abort', abort, { once: true });

    const timeout = setTimeout(abort, ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private _makeAbort(controller: AbortController) {
    // note: we can't just inline this method inside `fetchWithTimeout()` because then the closure
    //       would capture all request options, and cause a memory leak.
    return () => controller.abort();
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static Gitpod = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static GitpodError = Errors.GitpodError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  accounts: API.Accounts = new API.Accounts(this);
  agents: API.Agents = new API.Agents(this);
  editors: API.Editors = new API.Editors(this);
  environments: API.Environments = new API.Environments(this);
  errors: API.Errors = new API.Errors(this);
  events: API.Events = new API.Events(this);
  gateways: API.Gateways = new API.Gateways(this);
  groups: API.Groups = new API.Groups(this);
  identity: API.Identity = new API.Identity(this);
  organizations: API.Organizations = new API.Organizations(this);
  prebuilds: API.Prebuilds = new API.Prebuilds(this);
  projects: API.Projects = new API.Projects(this);
  runners: API.Runners = new API.Runners(this);
  secrets: API.Secrets = new API.Secrets(this);
  usage: API.Usage = new API.Usage(this);
  users: API.Users = new API.Users(this);
}

Gitpod.Accounts = Accounts;
Gitpod.Agents = Agents;
Gitpod.Editors = Editors;
Gitpod.Environments = Environments;
Gitpod.Errors = ErrorsAPIErrors;
Gitpod.Events = Events;
Gitpod.Gateways = Gateways;
Gitpod.Groups = Groups;
Gitpod.Identity = Identity;
Gitpod.Organizations = Organizations;
Gitpod.Prebuilds = Prebuilds;
Gitpod.Projects = Projects;
Gitpod.Runners = Runners;
Gitpod.Secrets = Secrets;
Gitpod.Usage = Usage;
Gitpod.Users = Users;

export declare namespace Gitpod {
  export type RequestOptions = Opts.RequestOptions;

  export import AgentExecutionsPage = Pagination.AgentExecutionsPage;
  export {
    type AgentExecutionsPageParams as AgentExecutionsPageParams,
    type AgentExecutionsPageResponse as AgentExecutionsPageResponse,
  };

  export import AssignmentsPage = Pagination.AssignmentsPage;
  export {
    type AssignmentsPageParams as AssignmentsPageParams,
    type AssignmentsPageResponse as AssignmentsPageResponse,
  };

  export import DomainVerificationsPage = Pagination.DomainVerificationsPage;
  export {
    type DomainVerificationsPageParams as DomainVerificationsPageParams,
    type DomainVerificationsPageResponse as DomainVerificationsPageResponse,
  };

  export import EditorsPage = Pagination.EditorsPage;
  export { type EditorsPageParams as EditorsPageParams, type EditorsPageResponse as EditorsPageResponse };

  export import EntriesPage = Pagination.EntriesPage;
  export { type EntriesPageParams as EntriesPageParams, type EntriesPageResponse as EntriesPageResponse };

  export import EnvironmentClassesPage = Pagination.EnvironmentClassesPage;
  export {
    type EnvironmentClassesPageParams as EnvironmentClassesPageParams,
    type EnvironmentClassesPageResponse as EnvironmentClassesPageResponse,
  };

  export import EnvironmentsPage = Pagination.EnvironmentsPage;
  export {
    type EnvironmentsPageParams as EnvironmentsPageParams,
    type EnvironmentsPageResponse as EnvironmentsPageResponse,
  };

  export import GatewaysPage = Pagination.GatewaysPage;
  export { type GatewaysPageParams as GatewaysPageParams, type GatewaysPageResponse as GatewaysPageResponse };

  export import GroupsPage = Pagination.GroupsPage;
  export { type GroupsPageParams as GroupsPageParams, type GroupsPageResponse as GroupsPageResponse };

  export import IntegrationsPage = Pagination.IntegrationsPage;
  export {
    type IntegrationsPageParams as IntegrationsPageParams,
    type IntegrationsPageResponse as IntegrationsPageResponse,
  };

  export import JoinableOrganizationsPage = Pagination.JoinableOrganizationsPage;
  export {
    type JoinableOrganizationsPageParams as JoinableOrganizationsPageParams,
    type JoinableOrganizationsPageResponse as JoinableOrganizationsPageResponse,
  };

  export import LoginProvidersPage = Pagination.LoginProvidersPage;
  export {
    type LoginProvidersPageParams as LoginProvidersPageParams,
    type LoginProvidersPageResponse as LoginProvidersPageResponse,
  };

  export import LoginsPage = Pagination.LoginsPage;
  export { type LoginsPageParams as LoginsPageParams, type LoginsPageResponse as LoginsPageResponse };

  export import MembersPage = Pagination.MembersPage;
  export { type MembersPageParams as MembersPageParams, type MembersPageResponse as MembersPageResponse };

  export import PersonalAccessTokensPage = Pagination.PersonalAccessTokensPage;
  export {
    type PersonalAccessTokensPageParams as PersonalAccessTokensPageParams,
    type PersonalAccessTokensPageResponse as PersonalAccessTokensPageResponse,
  };

  export import PoliciesPage = Pagination.PoliciesPage;
  export { type PoliciesPageParams as PoliciesPageParams, type PoliciesPageResponse as PoliciesPageResponse };

  export import PrebuildsPage = Pagination.PrebuildsPage;
  export {
    type PrebuildsPageParams as PrebuildsPageParams,
    type PrebuildsPageResponse as PrebuildsPageResponse,
  };

  export import ProjectEnvironmentClassesPage = Pagination.ProjectEnvironmentClassesPage;
  export {
    type ProjectEnvironmentClassesPageParams as ProjectEnvironmentClassesPageParams,
    type ProjectEnvironmentClassesPageResponse as ProjectEnvironmentClassesPageResponse,
  };

  export import ProjectsPage = Pagination.ProjectsPage;
  export { type ProjectsPageParams as ProjectsPageParams, type ProjectsPageResponse as ProjectsPageResponse };

  export import PromptsPage = Pagination.PromptsPage;
  export { type PromptsPageParams as PromptsPageParams, type PromptsPageResponse as PromptsPageResponse };

  export import RecordsPage = Pagination.RecordsPage;
  export { type RecordsPageParams as RecordsPageParams, type RecordsPageResponse as RecordsPageResponse };

  export import RepositoriesPage = Pagination.RepositoriesPage;
  export {
    type RepositoriesPageParams as RepositoriesPageParams,
    type RepositoriesPageResponse as RepositoriesPageResponse,
  };

  export import RunnersPage = Pagination.RunnersPage;
  export { type RunnersPageParams as RunnersPageParams, type RunnersPageResponse as RunnersPageResponse };

  export import ScimConfigurationsPage = Pagination.ScimConfigurationsPage;
  export {
    type ScimConfigurationsPageParams as ScimConfigurationsPageParams,
    type ScimConfigurationsPageResponse as ScimConfigurationsPageResponse,
  };

  export import SecretsPage = Pagination.SecretsPage;
  export { type SecretsPageParams as SecretsPageParams, type SecretsPageResponse as SecretsPageResponse };

  export import ServicesPage = Pagination.ServicesPage;
  export { type ServicesPageParams as ServicesPageParams, type ServicesPageResponse as ServicesPageResponse };

  export import SSOConfigurationsPage = Pagination.SSOConfigurationsPage;
  export {
    type SSOConfigurationsPageParams as SSOConfigurationsPageParams,
    type SSOConfigurationsPageResponse as SSOConfigurationsPageResponse,
  };

  export import TaskExecutionsPage = Pagination.TaskExecutionsPage;
  export {
    type TaskExecutionsPageParams as TaskExecutionsPageParams,
    type TaskExecutionsPageResponse as TaskExecutionsPageResponse,
  };

  export import TasksPage = Pagination.TasksPage;
  export { type TasksPageParams as TasksPageParams, type TasksPageResponse as TasksPageResponse };

  export import TokensPage = Pagination.TokensPage;
  export { type TokensPageParams as TokensPageParams, type TokensPageResponse as TokensPageResponse };

  export {
    Accounts as Accounts,
    type Account as Account,
    type AccountMembership as AccountMembership,
    type JoinableOrganization as JoinableOrganization,
    type LoginProvider as LoginProvider,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountDeleteResponse as AccountDeleteResponse,
    type AccountGetSSOLoginURLResponse as AccountGetSSOLoginURLResponse,
    type AccountListSSOLoginsResponse as AccountListSSOLoginsResponse,
    type JoinableOrganizationsJoinableOrganizationsPage as JoinableOrganizationsJoinableOrganizationsPage,
    type LoginProvidersLoginProvidersPage as LoginProvidersLoginProvidersPage,
    type AccountListSSOLoginsResponsesLoginsPage as AccountListSSOLoginsResponsesLoginsPage,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountDeleteParams as AccountDeleteParams,
    type AccountGetSSOLoginURLParams as AccountGetSSOLoginURLParams,
    type AccountListJoinableOrganizationsParams as AccountListJoinableOrganizationsParams,
    type AccountListLoginProvidersParams as AccountListLoginProvidersParams,
    type AccountListSSOLoginsParams as AccountListSSOLoginsParams,
  };

  export {
    Agents as Agents,
    type AgentCodeContext as AgentCodeContext,
    type AgentExecution as AgentExecution,
    type AgentMode as AgentMode,
    type Prompt as Prompt,
    type PromptMetadata as PromptMetadata,
    type PromptSpec as PromptSpec,
    type UserInputBlock as UserInputBlock,
    type AgentCreateExecutionConversationTokenResponse as AgentCreateExecutionConversationTokenResponse,
    type AgentCreatePromptResponse as AgentCreatePromptResponse,
    type AgentDeleteExecutionResponse as AgentDeleteExecutionResponse,
    type AgentDeletePromptResponse as AgentDeletePromptResponse,
    type AgentRetrieveExecutionResponse as AgentRetrieveExecutionResponse,
    type AgentRetrievePromptResponse as AgentRetrievePromptResponse,
    type AgentSendToExecutionResponse as AgentSendToExecutionResponse,
    type AgentStartExecutionResponse as AgentStartExecutionResponse,
    type AgentStopExecutionResponse as AgentStopExecutionResponse,
    type AgentUpdatePromptResponse as AgentUpdatePromptResponse,
    type AgentExecutionsAgentExecutionsPage as AgentExecutionsAgentExecutionsPage,
    type PromptsPromptsPage as PromptsPromptsPage,
    type AgentCreateExecutionConversationTokenParams as AgentCreateExecutionConversationTokenParams,
    type AgentCreatePromptParams as AgentCreatePromptParams,
    type AgentDeleteExecutionParams as AgentDeleteExecutionParams,
    type AgentDeletePromptParams as AgentDeletePromptParams,
    type AgentListExecutionsParams as AgentListExecutionsParams,
    type AgentListPromptsParams as AgentListPromptsParams,
    type AgentRetrieveExecutionParams as AgentRetrieveExecutionParams,
    type AgentRetrievePromptParams as AgentRetrievePromptParams,
    type AgentSendToExecutionParams as AgentSendToExecutionParams,
    type AgentStartExecutionParams as AgentStartExecutionParams,
    type AgentStopExecutionParams as AgentStopExecutionParams,
    type AgentUpdatePromptParams as AgentUpdatePromptParams,
  };

  export {
    Editors as Editors,
    type Editor as Editor,
    type EditorVersion as EditorVersion,
    type EditorRetrieveResponse as EditorRetrieveResponse,
    type EditorResolveURLResponse as EditorResolveURLResponse,
    type EditorsEditorsPage as EditorsEditorsPage,
    type EditorRetrieveParams as EditorRetrieveParams,
    type EditorListParams as EditorListParams,
    type EditorResolveURLParams as EditorResolveURLParams,
  };

  export {
    Environments as Environments,
    type AdmissionLevel as AdmissionLevel,
    type Environment as Environment,
    type EnvironmentActivitySignal as EnvironmentActivitySignal,
    type EnvironmentMetadata as EnvironmentMetadata,
    type EnvironmentPhase as EnvironmentPhase,
    type EnvironmentRole as EnvironmentRole,
    type EnvironmentSpec as EnvironmentSpec,
    type EnvironmentStatus as EnvironmentStatus,
    type KernelControlsConfig as KernelControlsConfig,
    type Veto as Veto,
    type EnvironmentCreateResponse as EnvironmentCreateResponse,
    type EnvironmentRetrieveResponse as EnvironmentRetrieveResponse,
    type EnvironmentUpdateResponse as EnvironmentUpdateResponse,
    type EnvironmentDeleteResponse as EnvironmentDeleteResponse,
    type EnvironmentCreateEnvironmentTokenResponse as EnvironmentCreateEnvironmentTokenResponse,
    type EnvironmentCreateFromProjectResponse as EnvironmentCreateFromProjectResponse,
    type EnvironmentCreateLogsTokenResponse as EnvironmentCreateLogsTokenResponse,
    type EnvironmentMarkActiveResponse as EnvironmentMarkActiveResponse,
    type EnvironmentStartResponse as EnvironmentStartResponse,
    type EnvironmentStopResponse as EnvironmentStopResponse,
    type EnvironmentUnarchiveResponse as EnvironmentUnarchiveResponse,
    type EnvironmentsEnvironmentsPage as EnvironmentsEnvironmentsPage,
    type EnvironmentCreateParams as EnvironmentCreateParams,
    type EnvironmentRetrieveParams as EnvironmentRetrieveParams,
    type EnvironmentUpdateParams as EnvironmentUpdateParams,
    type EnvironmentListParams as EnvironmentListParams,
    type EnvironmentDeleteParams as EnvironmentDeleteParams,
    type EnvironmentCreateEnvironmentTokenParams as EnvironmentCreateEnvironmentTokenParams,
    type EnvironmentCreateFromProjectParams as EnvironmentCreateFromProjectParams,
    type EnvironmentCreateLogsTokenParams as EnvironmentCreateLogsTokenParams,
    type EnvironmentMarkActiveParams as EnvironmentMarkActiveParams,
    type EnvironmentStartParams as EnvironmentStartParams,
    type EnvironmentStopParams as EnvironmentStopParams,
    type EnvironmentUnarchiveParams as EnvironmentUnarchiveParams,
  };

  export {
    ErrorsAPIErrors as Errors,
    type Breadcrumb as Breadcrumb,
    type ErrorEvent as ErrorEvent,
    type ErrorLevel as ErrorLevel,
    type ExceptionInfo as ExceptionInfo,
    type ExceptionMechanism as ExceptionMechanism,
    type ErrorRequestInfo as RequestInfo,
    type StackFrame as StackFrame,
    type ErrorReportErrorsResponse as ErrorReportErrorsResponse,
    type ErrorReportErrorsParams as ErrorReportErrorsParams,
  };

  export {
    Events as Events,
    type ResourceOperation as ResourceOperation,
    type EventListResponse as EventListResponse,
    type EventWatchResponse as EventWatchResponse,
    type EventListResponsesEntriesPage as EventListResponsesEntriesPage,
    type EventListParams as EventListParams,
    type EventWatchParams as EventWatchParams,
  };

  export { Gateways as Gateways, type GatewayListParams as GatewayListParams };

  export {
    Groups as Groups,
    type Group as Group,
    type GroupCreateResponse as GroupCreateResponse,
    type GroupRetrieveResponse as GroupRetrieveResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupsGroupsPage as GroupsGroupsPage,
    type GroupCreateParams as GroupCreateParams,
    type GroupRetrieveParams as GroupRetrieveParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
  };

  export {
    Identity as Identity,
    type IDTokenVersion as IDTokenVersion,
    type IdentityExchangeTokenResponse as IdentityExchangeTokenResponse,
    type IdentityGetAuthenticatedIdentityResponse as IdentityGetAuthenticatedIdentityResponse,
    type IdentityGetIDTokenResponse as IdentityGetIDTokenResponse,
    type IdentityExchangeTokenParams as IdentityExchangeTokenParams,
    type IdentityGetAuthenticatedIdentityParams as IdentityGetAuthenticatedIdentityParams,
    type IdentityGetIDTokenParams as IdentityGetIDTokenParams,
  };

  export {
    Organizations as Organizations,
    type InviteDomains as InviteDomains,
    type Organization as Organization,
    type OrganizationMember as OrganizationMember,
    type OrganizationCreateResponse as OrganizationCreateResponse,
    type OrganizationRetrieveResponse as OrganizationRetrieveResponse,
    type OrganizationUpdateResponse as OrganizationUpdateResponse,
    type OrganizationDeleteResponse as OrganizationDeleteResponse,
    type OrganizationJoinResponse as OrganizationJoinResponse,
    type OrganizationLeaveResponse as OrganizationLeaveResponse,
    type OrganizationSetRoleResponse as OrganizationSetRoleResponse,
    type OrganizationMembersMembersPage as OrganizationMembersMembersPage,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationRetrieveParams as OrganizationRetrieveParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationDeleteParams as OrganizationDeleteParams,
    type OrganizationJoinParams as OrganizationJoinParams,
    type OrganizationLeaveParams as OrganizationLeaveParams,
    type OrganizationListMembersParams as OrganizationListMembersParams,
    type OrganizationSetRoleParams as OrganizationSetRoleParams,
  };

  export {
    Prebuilds as Prebuilds,
    type Prebuild as Prebuild,
    type PrebuildMetadata as PrebuildMetadata,
    type PrebuildPhase as PrebuildPhase,
    type PrebuildSpec as PrebuildSpec,
    type PrebuildStatus as PrebuildStatus,
    type PrebuildTrigger as PrebuildTrigger,
    type PrebuildCreateResponse as PrebuildCreateResponse,
    type PrebuildRetrieveResponse as PrebuildRetrieveResponse,
    type PrebuildDeleteResponse as PrebuildDeleteResponse,
    type PrebuildCancelResponse as PrebuildCancelResponse,
    type PrebuildCreateLogsTokenResponse as PrebuildCreateLogsTokenResponse,
    type PrebuildsPrebuildsPage as PrebuildsPrebuildsPage,
    type PrebuildCreateParams as PrebuildCreateParams,
    type PrebuildRetrieveParams as PrebuildRetrieveParams,
    type PrebuildListParams as PrebuildListParams,
    type PrebuildDeleteParams as PrebuildDeleteParams,
    type PrebuildCancelParams as PrebuildCancelParams,
    type PrebuildCreateLogsTokenParams as PrebuildCreateLogsTokenParams,
  };

  export {
    Projects as Projects,
    type EnvironmentInitializer as EnvironmentInitializer,
    type Project as Project,
    type ProjectMetadata as ProjectMetadata,
    type ProjectPhase as ProjectPhase,
    type ProjectPrebuildConfiguration as ProjectPrebuildConfiguration,
    type RecommendedEditors as RecommendedEditors,
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectUpdateResponse as ProjectUpdateResponse,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectCreateFromEnvironmentResponse as ProjectCreateFromEnvironmentResponse,
    type ProjectsProjectsPage as ProjectsProjectsPage,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectRetrieveParams as ProjectRetrieveParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectCreateFromEnvironmentParams as ProjectCreateFromEnvironmentParams,
  };

  export {
    Runners as Runners,
    type GatewayInfo as GatewayInfo,
    type LogLevel as LogLevel,
    type MetricsConfiguration as MetricsConfiguration,
    type Runner as Runner,
    type RunnerCapability as RunnerCapability,
    type RunnerConfiguration as RunnerConfiguration,
    type RunnerKind as RunnerKind,
    type RunnerPhase as RunnerPhase,
    type RunnerProvider as RunnerProvider,
    type RunnerReleaseChannel as RunnerReleaseChannel,
    type RunnerSpec as RunnerSpec,
    type RunnerStatus as RunnerStatus,
    type RunnerVariant as RunnerVariant,
    type SearchMode as SearchMode,
    type RunnerCreateResponse as RunnerCreateResponse,
    type RunnerRetrieveResponse as RunnerRetrieveResponse,
    type RunnerUpdateResponse as RunnerUpdateResponse,
    type RunnerDeleteResponse as RunnerDeleteResponse,
    type RunnerCheckAuthenticationForHostResponse as RunnerCheckAuthenticationForHostResponse,
    type RunnerCheckRepositoryAccessResponse as RunnerCheckRepositoryAccessResponse,
    type RunnerCreateLogsTokenResponse as RunnerCreateLogsTokenResponse,
    type RunnerCreateRunnerTokenResponse as RunnerCreateRunnerTokenResponse,
    type RunnerListScmOrganizationsResponse as RunnerListScmOrganizationsResponse,
    type RunnerParseContextURLResponse as RunnerParseContextURLResponse,
    type RunnerSearchRepositoriesResponse as RunnerSearchRepositoriesResponse,
    type RunnersRunnersPage as RunnersRunnersPage,
    type RunnerCreateParams as RunnerCreateParams,
    type RunnerRetrieveParams as RunnerRetrieveParams,
    type RunnerUpdateParams as RunnerUpdateParams,
    type RunnerListParams as RunnerListParams,
    type RunnerDeleteParams as RunnerDeleteParams,
    type RunnerCheckAuthenticationForHostParams as RunnerCheckAuthenticationForHostParams,
    type RunnerCheckRepositoryAccessParams as RunnerCheckRepositoryAccessParams,
    type RunnerCreateLogsTokenParams as RunnerCreateLogsTokenParams,
    type RunnerCreateRunnerTokenParams as RunnerCreateRunnerTokenParams,
    type RunnerListScmOrganizationsParams as RunnerListScmOrganizationsParams,
    type RunnerParseContextURLParams as RunnerParseContextURLParams,
    type RunnerSearchRepositoriesParams as RunnerSearchRepositoriesParams,
  };

  export {
    Secrets as Secrets,
    type Secret as Secret,
    type SecretScope as SecretScope,
    type SecretCreateResponse as SecretCreateResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretGetValueResponse as SecretGetValueResponse,
    type SecretUpdateValueResponse as SecretUpdateValueResponse,
    type SecretsSecretsPage as SecretsSecretsPage,
    type SecretCreateParams as SecretCreateParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretGetValueParams as SecretGetValueParams,
    type SecretUpdateValueParams as SecretUpdateValueParams,
  };

  export {
    Usage as Usage,
    type EnvironmentUsageRecord as EnvironmentUsageRecord,
    type EnvironmentUsageRecordsRecordsPage as EnvironmentUsageRecordsRecordsPage,
    type UsageListEnvironmentRuntimeRecordsParams as UsageListEnvironmentRuntimeRecordsParams,
  };

  export {
    Users as Users,
    type User as User,
    type UserDeleteUserResponse as UserDeleteUserResponse,
    type UserGetAuthenticatedUserResponse as UserGetAuthenticatedUserResponse,
    type UserGetUserResponse as UserGetUserResponse,
    type UserSetSuspendedResponse as UserSetSuspendedResponse,
    type UserDeleteUserParams as UserDeleteUserParams,
    type UserGetAuthenticatedUserParams as UserGetAuthenticatedUserParams,
    type UserGetUserParams as UserGetUserParams,
    type UserSetSuspendedParams as UserSetSuspendedParams,
  };

  export type AutomationTrigger = API.AutomationTrigger;
  export type EnvironmentClass = API.EnvironmentClass;
  export type EnvironmentVariableItem = API.EnvironmentVariableItem;
  export type EnvironmentVariableSource = API.EnvironmentVariableSource;
  export type ErrorCode = API.ErrorCode;
  export type FieldValue = API.FieldValue;
  export type Gateway = API.Gateway;
  export type OrganizationRole = API.OrganizationRole;
  export type OrganizationTier = API.OrganizationTier;
  export type Principal = API.Principal;
  export type ProjectEnvironmentClass = API.ProjectEnvironmentClass;
  export type ResourceRole = API.ResourceRole;
  export type ResourceType = API.ResourceType;
  export type RunsOn = API.RunsOn;
  export type SecretRef = API.SecretRef;
  export type State = API.State;
  export type Subject = API.Subject;
  export type Task = API.Task;
  export type TaskExecution = API.TaskExecution;
  export type TaskExecutionMetadata = API.TaskExecutionMetadata;
  export type TaskExecutionPhase = API.TaskExecutionPhase;
  export type TaskExecutionSpec = API.TaskExecutionSpec;
  export type TaskExecutionStatus = API.TaskExecutionStatus;
  export type TaskMetadata = API.TaskMetadata;
  export type TaskSpec = API.TaskSpec;
  export type UserStatus = API.UserStatus;
}
