"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentUnreachableError = exports.EnvironmentPolicyError = exports.CapabilityUnavailableError = exports.ValidationError = exports.DeadlineExceededError = exports.UnavailableError = exports.RateLimitedError = exports.NotFoundError = exports.PermissionDeniedError = exports.AuthenticationRequiredError = exports.MissingAPIKeyError = exports.SDKError = exports.DEFAULT_BASE_URL = exports.BASE_URL_ENV_VAR = exports.LEGACY_API_KEY_ENV_VAR = exports.API_KEY_ENV_VAR = void 0;
exports.mapError = mapError;
exports.messageOf = messageOf;
const connect_1 = require("@connectrpc/connect");
exports.API_KEY_ENV_VAR = "ONA_API_KEY";
exports.LEGACY_API_KEY_ENV_VAR = "GITPOD_API_KEY";
exports.BASE_URL_ENV_VAR = "ONA_BASE_URL";
exports.DEFAULT_BASE_URL = "https://app.ona.com/api";
class SDKError extends Error {
    constructor(operation, message, cause) {
        super(operation ? `${operation}: ${message}` : message);
        this.name = new.target.name;
        this.operation = operation;
        this.cause = cause;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.SDKError = SDKError;
class MissingAPIKeyError extends SDKError {
    constructor() {
        super("sdk.new_from_env", `${exports.API_KEY_ENV_VAR} or ${exports.LEGACY_API_KEY_ENV_VAR} is required`);
    }
}
exports.MissingAPIKeyError = MissingAPIKeyError;
class AuthenticationRequiredError extends SDKError {
}
exports.AuthenticationRequiredError = AuthenticationRequiredError;
class PermissionDeniedError extends SDKError {
}
exports.PermissionDeniedError = PermissionDeniedError;
class NotFoundError extends SDKError {
}
exports.NotFoundError = NotFoundError;
class RateLimitedError extends SDKError {
}
exports.RateLimitedError = RateLimitedError;
class UnavailableError extends SDKError {
}
exports.UnavailableError = UnavailableError;
class DeadlineExceededError extends SDKError {
}
exports.DeadlineExceededError = DeadlineExceededError;
class ValidationError extends SDKError {
}
exports.ValidationError = ValidationError;
class CapabilityUnavailableError extends SDKError {
}
exports.CapabilityUnavailableError = CapabilityUnavailableError;
class EnvironmentPolicyError extends SDKError {
}
exports.EnvironmentPolicyError = EnvironmentPolicyError;
class EnvironmentUnreachableError extends SDKError {
}
exports.EnvironmentUnreachableError = EnvironmentUnreachableError;
function mapError(operation, error) {
    if (error instanceof SDKError) {
        return error;
    }
    if (isAbortError(error)) {
        return new DeadlineExceededError(operation, messageOf(error), error);
    }
    if (error instanceof connect_1.ConnectError) {
        switch (error.code) {
            case connect_1.Code.Unauthenticated:
                return new AuthenticationRequiredError(operation, error.rawMessage || error.message, error);
            case connect_1.Code.PermissionDenied:
                return new PermissionDeniedError(operation, error.rawMessage || error.message, error);
            case connect_1.Code.NotFound:
                return new NotFoundError(operation, error.rawMessage || error.message, error);
            case connect_1.Code.ResourceExhausted:
                return new RateLimitedError(operation, error.rawMessage || error.message, error);
            case connect_1.Code.Unavailable:
                return new UnavailableError(operation, error.rawMessage || error.message, error);
            case connect_1.Code.DeadlineExceeded:
                return new DeadlineExceededError(operation, error.rawMessage || error.message, error);
            case connect_1.Code.InvalidArgument:
                return new ValidationError(operation, error.rawMessage || error.message, error);
            case connect_1.Code.FailedPrecondition: {
                const message = (error.rawMessage || error.message).toLowerCase();
                if (message.includes("capabil") || message.includes("unsupported")) {
                    return new CapabilityUnavailableError(operation, error.rawMessage || error.message, error);
                }
                return new EnvironmentPolicyError(operation, error.rawMessage || error.message, error);
            }
            case connect_1.Code.Unimplemented:
                return new CapabilityUnavailableError(operation, error.rawMessage || error.message, error);
            default:
                return new SDKError(operation, error.rawMessage || error.message, error);
        }
    }
    return new SDKError(operation, messageOf(error), error);
}
function messageOf(error) {
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
