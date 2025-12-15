// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Errors extends APIResource {
  /**
   * ReportErrors allows clients to report batches of errors that will be sent to
   * error reporting systems. The structure is fully compatible with Sentry's event
   * payload format.
   *
   * Use this method to:
   *
   * - Report client-side errors and exceptions
   * - Track application crashes and panics
   * - Send error context and metadata for debugging
   *
   * ### Examples
   *
   * - Report a JavaScript error with Sentry-compatible structure: The service
   *   accepts events with comprehensive error information including stack traces,
   *   identity context, breadcrumbs, and metadata that align with Sentry's event
   *   payload format.
   */
  reportErrors(body: ErrorReportErrorsParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.ErrorsService/ReportErrors', { body, ...options });
  }
}

/**
 * Breadcrumb information (Sentry-compatible)
 */
export interface Breadcrumb {
  /**
   * Breadcrumb category
   */
  category?: string;

  /**
   * Additional breadcrumb data
   */
  data?: { [key: string]: string };

  /**
   * Breadcrumb level
   */
  level?: ErrorLevel;

  /**
   * Breadcrumb message
   */
  message?: string;

  /**
   * When the breadcrumb occurred
   */
  timestamp?: string;

  /**
   * Breadcrumb type (e.g., "navigation", "http", "user", "error")
   */
  type?: string;
}

/**
 * ErrorEvent contains comprehensive error information (Sentry-compatible)
 */
export interface ErrorEvent {
  /**
   * Breadcrumbs leading up to the error
   */
  breadcrumbs?: Array<Breadcrumb>;

  /**
   * Environment (e.g., "production", "staging", "development")
   */
  environment?: string;

  /**
   * Unique event identifier (required by Sentry)
   */
  eventId?: string;

  /**
   * Exception information (primary error data)
   */
  exceptions?: Array<ExceptionInfo>;

  /**
   * Additional arbitrary metadata
   */
  extra?: { [key: string]: string };

  /**
   * Custom fingerprint for grouping
   */
  fingerprint?: Array<string>;

  /**
   * Identity ID of the user (UUID)
   */
  identityId?: string;

  /**
   * Error severity level
   */
  level?: ErrorLevel;

  /**
   * Logger name
   */
  logger?: string;

  /**
   * Modules/dependencies information
   */
  modules?: { [key: string]: string };

  /**
   * Platform identifier (required by Sentry)
   */
  platform?: string;

  /**
   * Release version
   */
  release?: string;

  /**
   * Request information
   */
  request?: RequestInfo;

  /**
   * SDK information
   */
  sdk?: { [key: string]: string };

  /**
   * Server/host name
   */
  serverName?: string;

  /**
   * Tags for filtering and grouping
   */
  tags?: { [key: string]: string };

  /**
   * When the event occurred (required by Sentry)
   */
  timestamp?: string;

  /**
   * Transaction name (e.g., route name, function name)
   */
  transaction?: string;
}

/**
 * Error severity levels (aligned with Sentry levels)
 */
export type ErrorLevel =
  | 'ERROR_LEVEL_UNSPECIFIED'
  | 'ERROR_LEVEL_DEBUG'
  | 'ERROR_LEVEL_INFO'
  | 'ERROR_LEVEL_WARNING'
  | 'ERROR_LEVEL_ERROR'
  | 'ERROR_LEVEL_FATAL';

/**
 * Exception information (Sentry-compatible)
 */
export interface ExceptionInfo {
  /**
   * Exception mechanism
   */
  mechanism?: ExceptionMechanism;

  /**
   * Module or package where the exception type is defined
   */
  module?: string;

  /**
   * Stack trace frames
   */
  stacktrace?: Array<StackFrame>;

  /**
   * Thread ID if applicable
   */
  threadId?: string;

  /**
   * Exception type/class name
   */
  type?: string;

  /**
   * Exception message/value
   */
  value?: string;
}

/**
 * Exception mechanism information (Sentry-compatible)
 */
export interface ExceptionMechanism {
  /**
   * Additional mechanism-specific data
   */
  data?: { [key: string]: string };

  /**
   * Human-readable description of the mechanism
   */
  description?: string;

  /**
   * Whether the exception was handled by user code
   */
  handled?: boolean;

  /**
   * Whether this is a synthetic exception (created by SDK)
   */
  synthetic?: boolean;

  /**
   * Type of mechanism (e.g., "generic", "promise", "onerror")
   */
  type?: string;
}

/**
 * Request information (Sentry-compatible)
 */
export interface RequestInfo {
  /**
   * Request body (truncated if large)
   */
  data?: string;

  /**
   * Request headers
   */
  headers?: { [key: string]: string };

  /**
   * HTTP method
   */
  method?: string;

  /**
   * Query parameters
   */
  queryString?: { [key: string]: string };

  /**
   * Request URL
   */
  url?: string;
}

/**
 * Stack trace frame information (Sentry-compatible)
 */
export interface StackFrame {
  /**
   * Column number in the line
   */
  colno?: number;

  contextLine?: string;

  /**
   * File name or path
   */
  filename?: string;

  /**
   * Function name
   */
  function?: string;

  /**
   * Whether this frame is in application code (vs library/framework code)
   */
  inApp?: boolean;

  /**
   * Line number in the file
   */
  lineno?: number;

  /**
   * Module or package name
   */
  module?: string;

  postContext?: Array<string>;

  /**
   * Source code context around the error line
   */
  preContext?: Array<string>;

  /**
   * Additional frame-specific variables/locals
   */
  vars?: { [key: string]: string };
}

/**
 * ReportErrorsResponse confirms that the errors were successfully received Success
 * is indicated by HTTP 200 status code, failures by other status codes Empty
 * response - success indicated by HTTP status code
 */
export type ErrorReportErrorsResponse = unknown;

export interface ErrorReportErrorsParams {
  /**
   * Error events to be reported (batch) - now using Sentry-compatible structure
   */
  events?: Array<ErrorEvent>;
}

export declare namespace Errors {
  export {
    type Breadcrumb as Breadcrumb,
    type ErrorEvent as ErrorEvent,
    type ErrorLevel as ErrorLevel,
    type ExceptionInfo as ExceptionInfo,
    type ExceptionMechanism as ExceptionMechanism,
    type RequestInfo as RequestInfo,
    type StackFrame as StackFrame,
    type ErrorReportErrorsResponse as ErrorReportErrorsResponse,
    type ErrorReportErrorsParams as ErrorReportErrorsParams,
  };
}
