// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import { VERSION } from './version';
import * as Errors from './error';
import * as Pagination from './pagination';
import {
  AbstractPage,
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
  type GroupsPageParams,
  GroupsPageResponse,
  type IntegrationsPageParams,
  IntegrationsPageResponse,
  type LoginProvidersPageParams,
  LoginProvidersPageResponse,
  type MembersPageParams,
  MembersPageResponse,
  type OrganizationsPageParams,
  OrganizationsPageResponse,
  type PersonalAccessTokensPageParams,
  PersonalAccessTokensPageResponse,
  type PoliciesPageParams,
  PoliciesPageResponse,
  type ProjectsPageParams,
  ProjectsPageResponse,
  type RunnersPageParams,
  RunnersPageResponse,
  type SSOConfigurationsPageParams,
  SSOConfigurationsPageResponse,
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
} from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { APIPromise } from './api-promise';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import {
  Account,
  AccountDeleteParams,
  AccountDeleteResponse,
  AccountGetSSOLoginURLParams,
  AccountGetSSOLoginURLResponse,
  AccountListLoginProvidersParams,
  AccountMembership,
  AccountRetrieveParams,
  AccountRetrieveResponse,
  Accounts,
  JoinableOrganization,
  LoginProvider,
  LoginProvidersLoginProvidersPage,
} from './resources/accounts';
import {
  Editor,
  EditorListParams,
  EditorResolveURLParams,
  EditorResolveURLResponse,
  EditorRetrieveParams,
  EditorRetrieveResponse,
  Editors,
  EditorsEditorsPage,
} from './resources/editors';
import {
  EventListParams,
  EventListResponse,
  EventListResponsesEntriesPage,
  EventWatchParams,
  EventWatchResponse,
  Events,
  ResourceOperation,
  ResourceType,
} from './resources/events';
import { Group, GroupListParams, Groups, GroupsGroupsPage } from './resources/groups';
import {
  Identity,
  IdentityExchangeTokenParams,
  IdentityExchangeTokenResponse,
  IdentityGetAuthenticatedIdentityParams,
  IdentityGetAuthenticatedIdentityResponse,
  IdentityGetIDTokenParams,
  IdentityGetIDTokenResponse,
} from './resources/identity';
import {
  Secret,
  SecretCreateParams,
  SecretCreateResponse,
  SecretDeleteParams,
  SecretDeleteResponse,
  SecretGetValueParams,
  SecretGetValueResponse,
  SecretListParams,
  SecretUpdateValueParams,
  SecretUpdateValueResponse,
  Secrets,
  SecretsSecretsPage,
} from './resources/secrets';
import { readEnv } from './internal/utils/env';
import { logger } from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';
import {
  AdmissionLevel,
  Environment,
  EnvironmentActivitySignal,
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
  EnvironmentSpec,
  EnvironmentStartParams,
  EnvironmentStartResponse,
  EnvironmentStatus,
  EnvironmentStopParams,
  EnvironmentStopResponse,
  EnvironmentUpdateParams,
  EnvironmentUpdateResponse,
  Environments,
  EnvironmentsEnvironmentsPage,
} from './resources/environments/environments';
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
  OrganizationListParams,
  OrganizationMember,
  OrganizationMembersMembersPage,
  OrganizationRetrieveParams,
  OrganizationRetrieveResponse,
  OrganizationSetRoleParams,
  OrganizationSetRoleResponse,
  OrganizationUpdateParams,
  OrganizationUpdateResponse,
  Organizations,
  OrganizationsOrganizationsPage,
  Scope,
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
  ProjectEnvironmentClass,
  ProjectListParams,
  ProjectMetadata,
  ProjectRetrieveParams,
  ProjectRetrieveResponse,
  ProjectUpdateParams,
  ProjectUpdateResponse,
  Projects,
  ProjectsProjectsPage,
} from './resources/projects/projects';
import {
  Runner,
  RunnerCapability,
  RunnerCheckAuthenticationForHostParams,
  RunnerCheckAuthenticationForHostResponse,
  RunnerConfiguration,
  RunnerCreateParams,
  RunnerCreateResponse,
  RunnerCreateRunnerTokenParams,
  RunnerCreateRunnerTokenResponse,
  RunnerDeleteParams,
  RunnerDeleteResponse,
  RunnerKind,
  RunnerListParams,
  RunnerParseContextURLParams,
  RunnerParseContextURLResponse,
  RunnerPhase,
  RunnerProvider,
  RunnerReleaseChannel,
  RunnerRetrieveParams,
  RunnerRetrieveResponse,
  RunnerSpec,
  RunnerStatus,
  RunnerUpdateParams,
  RunnerUpdateResponse,
  Runners,
  RunnersRunnersPage,
} from './resources/runners/runners';
import {
  User,
  UserGetAuthenticatedUserParams,
  UserGetAuthenticatedUserResponse,
  UserSetSuspendedParams,
  UserSetSuspendedResponse,
  Users,
} from './resources/users/users';

const safeJSON = (text: string) => {
  try {
    return JSON.parse(text);
  } catch (err) {
    return undefined;
  }
};

type LogFn = (message: string, ...rest: unknown[]) => void;
export type Logger = {
  error: LogFn;
  warn: LogFn;
  info: LogFn;
  debug: LogFn;
};
export type LogLevel = 'off' | 'error' | 'warn' | 'info' | 'debug';
const isLogLevel = (key: string | undefined): key is LogLevel => {
  const levels: Record<LogLevel, true> = {
    off: true,
    error: true,
    warn: true,
    info: true,
    debug: true,
  };
  return key! in levels;
};

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
   * Defaults to process.env['GITPOD_LOG'].
   */
  logLevel?: LogLevel | undefined | null;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined | null;
}

type FinalizedRequestInit = RequestInit & { headers: Headers };

/**
 * API Client for interfacing with the Gitpod API.
 */
export class Gitpod {
  bearerToken: string;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
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
    if (options.logLevel != null) {
      this.logLevel = options.logLevel;
    } else {
      const envLevel = readEnv('GITPOD_LOG');
      if (isLogLevel(envLevel)) {
        this.logLevel = envLevel;
      }
    }
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.bearerToken = bearerToken;
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected authHeaders(opts: FinalRequestOptions): Headers | undefined {
    return new Headers({ Authorization: `Bearer ${this.bearerToken}` });
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

  buildURL(path: string, query: Record<string, unknown> | null | undefined): string {
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(this.baseURL + (this.baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  private calculateContentLength(body: unknown): string | null {
    if (typeof body === 'string') {
      if (typeof (globalThis as any).Buffer !== 'undefined') {
        return (globalThis as any).Buffer.byteLength(body, 'utf8').toString();
      }

      if (typeof (globalThis as any).TextEncoder !== 'undefined') {
        const encoder = new (globalThis as any).TextEncoder();
        const encoded = encoder.encode(body);
        return encoded.length.toString();
      }
    } else if (ArrayBuffer.isView(body)) {
      return body.byteLength.toString();
    }

    return null;
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
    return new APIPromise(this, this.makeRequest(options, remainingRetries));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = this.buildRequest(options, { retryCount: maxRetries - retriesRemaining });

    await this.prepareRequest(req, { url, options });

    logger(this).debug('request', url, options, req.headers);

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);

    if (response instanceof Error) {
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      if (retriesRemaining) {
        return this.retryRequest(options, retriesRemaining);
      }
      if (isAbortError(response)) {
        throw new Errors.APIConnectionTimeoutError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      if (/timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''))) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    if (!response.ok) {
      if (retriesRemaining && this.shouldRetry(response)) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
        logger(this).debug(`response (error; ${retryMessage})`, response.status, url, response.headers);
        return this.retryRequest(options, retriesRemaining, response.headers);
      }

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;
      const retryMessage = retriesRemaining ? `(error; no more retries left)` : `(error; not retryable)`;

      logger(this).debug(
        `response (error; ${retryMessage})`,
        response.status,
        url,
        response.headers,
        errMessage,
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    return { response, options, controller };
  }

  getAPIList<Item, PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>>(
    path: string,
    Page: new (...args: any[]) => PageClass,
    opts?: RequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    return this.requestAPIList(Page, { method: 'get', path, ...opts });
  }

  requestAPIList<
    Item = unknown,
    PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>,
  >(
    Page: new (...args: ConstructorParameters<typeof Pagination.AbstractPage>) => PageClass,
    options: FinalRequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    const request = this.makeRequest(options, null);
    return new Pagination.PagePromise<PageClass, Item>(this as any as Gitpod, request, Page);
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody = Shims.isReadableLike(options.body);

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

    return (
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      this.fetch.call(undefined, url, fetchOptions).finally(() => {
        clearTimeout(timeout);
      })
    );
  }

  private shouldRetry(response: Response): boolean {
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

    return this.makeRequest(options, retriesRemaining - 1);
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

  buildRequest(
    options: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): { req: FinalizedRequestInit; url: string; timeout: number } {
    options = { ...options };
    const { method, path, query } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = this.buildHeaders({ options, method, bodyHeaders, retryCount });

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

  private buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Headers {
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
        ...(options.timeout ? { 'X-Stainless-Timeout': String(options.timeout) } : {}),
        ...getPlatformHeaders(),
      },
      this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
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
      body instanceof Blob ||
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
  editors: API.Editors = new API.Editors(this);
  environments: API.Environments = new API.Environments(this);
  events: API.Events = new API.Events(this);
  groups: API.Groups = new API.Groups(this);
  identity: API.Identity = new API.Identity(this);
  organizations: API.Organizations = new API.Organizations(this);
  projects: API.Projects = new API.Projects(this);
  runners: API.Runners = new API.Runners(this);
  secrets: API.Secrets = new API.Secrets(this);
  users: API.Users = new API.Users(this);
}
Gitpod.Accounts = Accounts;
Gitpod.Editors = Editors;
Gitpod.Environments = Environments;
Gitpod.Events = Events;
Gitpod.Groups = Groups;
Gitpod.Identity = Identity;
Gitpod.Organizations = Organizations;
Gitpod.Projects = Projects;
Gitpod.Runners = Runners;
Gitpod.Secrets = Secrets;
Gitpod.Users = Users;
export declare namespace Gitpod {
  export type RequestOptions = Opts.RequestOptions;

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

  export import GroupsPage = Pagination.GroupsPage;
  export { type GroupsPageParams as GroupsPageParams, type GroupsPageResponse as GroupsPageResponse };

  export import IntegrationsPage = Pagination.IntegrationsPage;
  export {
    type IntegrationsPageParams as IntegrationsPageParams,
    type IntegrationsPageResponse as IntegrationsPageResponse,
  };

  export import LoginProvidersPage = Pagination.LoginProvidersPage;
  export {
    type LoginProvidersPageParams as LoginProvidersPageParams,
    type LoginProvidersPageResponse as LoginProvidersPageResponse,
  };

  export import MembersPage = Pagination.MembersPage;
  export { type MembersPageParams as MembersPageParams, type MembersPageResponse as MembersPageResponse };

  export import OrganizationsPage = Pagination.OrganizationsPage;
  export {
    type OrganizationsPageParams as OrganizationsPageParams,
    type OrganizationsPageResponse as OrganizationsPageResponse,
  };

  export import PersonalAccessTokensPage = Pagination.PersonalAccessTokensPage;
  export {
    type PersonalAccessTokensPageParams as PersonalAccessTokensPageParams,
    type PersonalAccessTokensPageResponse as PersonalAccessTokensPageResponse,
  };

  export import PoliciesPage = Pagination.PoliciesPage;
  export { type PoliciesPageParams as PoliciesPageParams, type PoliciesPageResponse as PoliciesPageResponse };

  export import ProjectsPage = Pagination.ProjectsPage;
  export { type ProjectsPageParams as ProjectsPageParams, type ProjectsPageResponse as ProjectsPageResponse };

  export import RunnersPage = Pagination.RunnersPage;
  export { type RunnersPageParams as RunnersPageParams, type RunnersPageResponse as RunnersPageResponse };

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
    type LoginProvidersLoginProvidersPage as LoginProvidersLoginProvidersPage,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountDeleteParams as AccountDeleteParams,
    type AccountGetSSOLoginURLParams as AccountGetSSOLoginURLParams,
    type AccountListLoginProvidersParams as AccountListLoginProvidersParams,
  };

  export {
    Editors as Editors,
    type Editor as Editor,
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
    type EnvironmentSpec as EnvironmentSpec,
    type EnvironmentStatus as EnvironmentStatus,
    type EnvironmentCreateResponse as EnvironmentCreateResponse,
    type EnvironmentRetrieveResponse as EnvironmentRetrieveResponse,
    type EnvironmentUpdateResponse as EnvironmentUpdateResponse,
    type EnvironmentDeleteResponse as EnvironmentDeleteResponse,
    type EnvironmentCreateFromProjectResponse as EnvironmentCreateFromProjectResponse,
    type EnvironmentCreateLogsTokenResponse as EnvironmentCreateLogsTokenResponse,
    type EnvironmentMarkActiveResponse as EnvironmentMarkActiveResponse,
    type EnvironmentStartResponse as EnvironmentStartResponse,
    type EnvironmentStopResponse as EnvironmentStopResponse,
    type EnvironmentsEnvironmentsPage as EnvironmentsEnvironmentsPage,
    type EnvironmentCreateParams as EnvironmentCreateParams,
    type EnvironmentRetrieveParams as EnvironmentRetrieveParams,
    type EnvironmentUpdateParams as EnvironmentUpdateParams,
    type EnvironmentListParams as EnvironmentListParams,
    type EnvironmentDeleteParams as EnvironmentDeleteParams,
    type EnvironmentCreateFromProjectParams as EnvironmentCreateFromProjectParams,
    type EnvironmentCreateLogsTokenParams as EnvironmentCreateLogsTokenParams,
    type EnvironmentMarkActiveParams as EnvironmentMarkActiveParams,
    type EnvironmentStartParams as EnvironmentStartParams,
    type EnvironmentStopParams as EnvironmentStopParams,
  };

  export {
    Events as Events,
    type ResourceOperation as ResourceOperation,
    type ResourceType as ResourceType,
    type EventListResponse as EventListResponse,
    type EventWatchResponse as EventWatchResponse,
    type EventListResponsesEntriesPage as EventListResponsesEntriesPage,
    type EventListParams as EventListParams,
    type EventWatchParams as EventWatchParams,
  };

  export {
    Groups as Groups,
    type Group as Group,
    type GroupsGroupsPage as GroupsGroupsPage,
    type GroupListParams as GroupListParams,
  };

  export {
    Identity as Identity,
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
    type Scope as Scope,
    type OrganizationCreateResponse as OrganizationCreateResponse,
    type OrganizationRetrieveResponse as OrganizationRetrieveResponse,
    type OrganizationUpdateResponse as OrganizationUpdateResponse,
    type OrganizationDeleteResponse as OrganizationDeleteResponse,
    type OrganizationJoinResponse as OrganizationJoinResponse,
    type OrganizationLeaveResponse as OrganizationLeaveResponse,
    type OrganizationSetRoleResponse as OrganizationSetRoleResponse,
    type OrganizationsOrganizationsPage as OrganizationsOrganizationsPage,
    type OrganizationMembersMembersPage as OrganizationMembersMembersPage,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationRetrieveParams as OrganizationRetrieveParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
    type OrganizationDeleteParams as OrganizationDeleteParams,
    type OrganizationJoinParams as OrganizationJoinParams,
    type OrganizationLeaveParams as OrganizationLeaveParams,
    type OrganizationListMembersParams as OrganizationListMembersParams,
    type OrganizationSetRoleParams as OrganizationSetRoleParams,
  };

  export {
    Projects as Projects,
    type EnvironmentInitializer as EnvironmentInitializer,
    type Project as Project,
    type ProjectEnvironmentClass as ProjectEnvironmentClass,
    type ProjectMetadata as ProjectMetadata,
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
    type Runner as Runner,
    type RunnerCapability as RunnerCapability,
    type RunnerConfiguration as RunnerConfiguration,
    type RunnerKind as RunnerKind,
    type RunnerPhase as RunnerPhase,
    type RunnerProvider as RunnerProvider,
    type RunnerReleaseChannel as RunnerReleaseChannel,
    type RunnerSpec as RunnerSpec,
    type RunnerStatus as RunnerStatus,
    type RunnerCreateResponse as RunnerCreateResponse,
    type RunnerRetrieveResponse as RunnerRetrieveResponse,
    type RunnerUpdateResponse as RunnerUpdateResponse,
    type RunnerDeleteResponse as RunnerDeleteResponse,
    type RunnerCheckAuthenticationForHostResponse as RunnerCheckAuthenticationForHostResponse,
    type RunnerCreateRunnerTokenResponse as RunnerCreateRunnerTokenResponse,
    type RunnerParseContextURLResponse as RunnerParseContextURLResponse,
    type RunnersRunnersPage as RunnersRunnersPage,
    type RunnerCreateParams as RunnerCreateParams,
    type RunnerRetrieveParams as RunnerRetrieveParams,
    type RunnerUpdateParams as RunnerUpdateParams,
    type RunnerListParams as RunnerListParams,
    type RunnerDeleteParams as RunnerDeleteParams,
    type RunnerCheckAuthenticationForHostParams as RunnerCheckAuthenticationForHostParams,
    type RunnerCreateRunnerTokenParams as RunnerCreateRunnerTokenParams,
    type RunnerParseContextURLParams as RunnerParseContextURLParams,
  };

  export {
    Secrets as Secrets,
    type Secret as Secret,
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
    Users as Users,
    type User as User,
    type UserGetAuthenticatedUserResponse as UserGetAuthenticatedUserResponse,
    type UserSetSuspendedResponse as UserSetSuspendedResponse,
    type UserGetAuthenticatedUserParams as UserGetAuthenticatedUserParams,
    type UserSetSuspendedParams as UserSetSuspendedParams,
  };

  export type AutomationTrigger = API.AutomationTrigger;
  export type EnvironmentClass = API.EnvironmentClass;
  export type FieldValue = API.FieldValue;
  export type OrganizationRole = API.OrganizationRole;
  export type Principal = API.Principal;
  export type RunsOn = API.RunsOn;
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
