export declare const API_KEY_ENV_VAR = "ONA_API_KEY";
export declare const LEGACY_API_KEY_ENV_VAR = "GITPOD_API_KEY";
export declare const BASE_URL_ENV_VAR = "ONA_BASE_URL";
export declare const DEFAULT_BASE_URL = "https://app.ona.com/api";
export declare class SDKError extends Error {
    readonly operation: string;
    readonly cause?: unknown;
    constructor(operation: string, message: string, cause?: unknown);
}
export declare class MissingAPIKeyError extends SDKError {
    constructor();
}
export declare class AuthenticationRequiredError extends SDKError {
}
export declare class PermissionDeniedError extends SDKError {
}
export declare class NotFoundError extends SDKError {
}
export declare class RateLimitedError extends SDKError {
}
export declare class UnavailableError extends SDKError {
}
export declare class DeadlineExceededError extends SDKError {
}
export declare class ValidationError extends SDKError {
}
export declare class CapabilityUnavailableError extends SDKError {
}
export declare class EnvironmentPolicyError extends SDKError {
}
export declare class EnvironmentUnreachableError extends SDKError {
}
export declare function mapError(operation: string, error: unknown): Error;
export declare function messageOf(error: unknown): string;
