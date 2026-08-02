import { Code, ConnectError } from "@connectrpc/connect";
export const API_KEY_ENV_VAR = "ONA_API_KEY";
export const LEGACY_API_KEY_ENV_VAR = "GITPOD_API_KEY";
export const BASE_URL_ENV_VAR = "ONA_BASE_URL";
export const DEFAULT_BASE_URL = "https://app.ona.com/api";
export class SDKError extends Error {
    constructor(operation, message, cause) {
        super(operation ? `${operation}: ${message}` : message);
        this.name = new.target.name;
        this.operation = operation;
        this.cause = cause;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
export class MissingAPIKeyError extends SDKError {
    constructor() {
        super("sdk.new_from_env", `${API_KEY_ENV_VAR} or ${LEGACY_API_KEY_ENV_VAR} is required`);
    }
}
export class AuthenticationRequiredError extends SDKError {
}
export class PermissionDeniedError extends SDKError {
}
export class NotFoundError extends SDKError {
}
export class RateLimitedError extends SDKError {
}
export class UnavailableError extends SDKError {
}
export class DeadlineExceededError extends SDKError {
}
export class ValidationError extends SDKError {
}
export class CapabilityUnavailableError extends SDKError {
}
export class EnvironmentPolicyError extends SDKError {
}
export class EnvironmentUnreachableError extends SDKError {
}
export function mapError(operation, error) {
    if (error instanceof SDKError) {
        return error;
    }
    if (isAbortError(error)) {
        return new DeadlineExceededError(operation, messageOf(error), error);
    }
    if (error instanceof ConnectError) {
        switch (error.code) {
            case Code.Unauthenticated:
                return new AuthenticationRequiredError(operation, error.rawMessage || error.message, error);
            case Code.PermissionDenied:
                return new PermissionDeniedError(operation, error.rawMessage || error.message, error);
            case Code.NotFound:
                return new NotFoundError(operation, error.rawMessage || error.message, error);
            case Code.ResourceExhausted:
                return new RateLimitedError(operation, error.rawMessage || error.message, error);
            case Code.Unavailable:
                return new UnavailableError(operation, error.rawMessage || error.message, error);
            case Code.DeadlineExceeded:
                return new DeadlineExceededError(operation, error.rawMessage || error.message, error);
            case Code.InvalidArgument:
                return new ValidationError(operation, error.rawMessage || error.message, error);
            case Code.FailedPrecondition: {
                const message = (error.rawMessage || error.message).toLowerCase();
                if (message.includes("capabil") || message.includes("unsupported")) {
                    return new CapabilityUnavailableError(operation, error.rawMessage || error.message, error);
                }
                return new EnvironmentPolicyError(operation, error.rawMessage || error.message, error);
            }
            case Code.Unimplemented:
                return new CapabilityUnavailableError(operation, error.rawMessage || error.message, error);
            default:
                return new SDKError(operation, error.rawMessage || error.message, error);
        }
    }
    return new SDKError(operation, messageOf(error), error);
}
export function messageOf(error) {
    if (error instanceof Error) {
        return error.message;
    }
    if (typeof error === "string") {
        return error;
    }
    return String(error);
}
function isAbortError(error) {
    return error instanceof Error && (error.name === "AbortError" || error.name === "TimeoutError");
}
