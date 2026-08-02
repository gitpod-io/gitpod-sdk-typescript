import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/identity.proto.
 */
export declare const file_gitpod_v1_identity: GenFile;
/**
 * @generated from message gitpod.v1.GetIDTokenRequest
 */
export type GetIDTokenRequest = Message<"gitpod.v1.GetIDTokenRequest"> & {
    /**
     * @generated from field: repeated string audience = 1;
     */
    audience: string[];
    /**
     * version is the version of the ID token.
     *
     * @generated from field: gitpod.v1.IDTokenVersion version = 2;
     */
    version: IDTokenVersion;
};
/**
 * Describes the message gitpod.v1.GetIDTokenRequest.
 * Use `create(GetIDTokenRequestSchema)` to create a new message.
 */
export declare const GetIDTokenRequestSchema: GenMessage<GetIDTokenRequest>;
/**
 * @generated from message gitpod.v1.GetIDTokenResponse
 */
export type GetIDTokenResponse = Message<"gitpod.v1.GetIDTokenResponse"> & {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
};
/**
 * Describes the message gitpod.v1.GetIDTokenResponse.
 * Use `create(GetIDTokenResponseSchema)` to create a new message.
 */
export declare const GetIDTokenResponseSchema: GenMessage<GetIDTokenResponse>;
/**
 * @generated from message gitpod.v1.Subject
 */
export type Subject = Message<"gitpod.v1.Subject"> & {
    /**
     * id is the UUID of the subject
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Principal is the principal of the subject
     *
     * @generated from field: gitpod.v1.Principal principal = 2;
     */
    principal: Principal;
};
/**
 * Describes the message gitpod.v1.Subject.
 * Use `create(SubjectSchema)` to create a new message.
 */
export declare const SubjectSchema: GenMessage<Subject>;
/**
 * @generated from message gitpod.v1.GetAuthenticatedIdentityRequest
 */
export type GetAuthenticatedIdentityRequest = Message<"gitpod.v1.GetAuthenticatedIdentityRequest"> & {};
/**
 * Describes the message gitpod.v1.GetAuthenticatedIdentityRequest.
 * Use `create(GetAuthenticatedIdentityRequestSchema)` to create a new message.
 */
export declare const GetAuthenticatedIdentityRequestSchema: GenMessage<GetAuthenticatedIdentityRequest>;
/**
 * @generated from message gitpod.v1.GetAuthenticatedIdentityResponse
 */
export type GetAuthenticatedIdentityResponse = Message<"gitpod.v1.GetAuthenticatedIdentityResponse"> & {
    /**
     * subject is the identity of the current user
     *
     * @generated from field: gitpod.v1.Subject subject = 1;
     */
    subject?: Subject;
    /**
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * @generated from field: string organization_tier = 3;
     */
    organizationTier: string;
};
/**
 * Describes the message gitpod.v1.GetAuthenticatedIdentityResponse.
 * Use `create(GetAuthenticatedIdentityResponseSchema)` to create a new message.
 */
export declare const GetAuthenticatedIdentityResponseSchema: GenMessage<GetAuthenticatedIdentityResponse>;
/**
 * @generated from message gitpod.v1.ExchangeTokenRequest
 */
export type ExchangeTokenRequest = Message<"gitpod.v1.ExchangeTokenRequest"> & {
    /**
     * exchange_token is the token to exchange
     *
     * @generated from field: string exchange_token = 1;
     */
    exchangeToken: string;
};
/**
 * Describes the message gitpod.v1.ExchangeTokenRequest.
 * Use `create(ExchangeTokenRequestSchema)` to create a new message.
 */
export declare const ExchangeTokenRequestSchema: GenMessage<ExchangeTokenRequest>;
/**
 * @generated from message gitpod.v1.ExchangeTokenResponse
 */
export type ExchangeTokenResponse = Message<"gitpod.v1.ExchangeTokenResponse"> & {
    /**
     * access_token is the new access token
     *
     * @generated from field: string access_token = 1;
     */
    accessToken: string;
};
/**
 * Describes the message gitpod.v1.ExchangeTokenResponse.
 * Use `create(ExchangeTokenResponseSchema)` to create a new message.
 */
export declare const ExchangeTokenResponseSchema: GenMessage<ExchangeTokenResponse>;
/**
 * @generated from enum gitpod.v1.IDTokenVersion
 */
export declare enum IDTokenVersion {
    /**
     * When unspecified, the ID token version is 1.
     *
     * @generated from enum value: ID_TOKEN_VERSION_UNSPECIFIED = 0;
     */
    ID_TOKEN_VERSION_UNSPECIFIED = 0,
    /**
     * @generated from enum value: ID_TOKEN_VERSION_V1 = 1;
     */
    ID_TOKEN_VERSION_V1 = 1,
    /**
     * @generated from enum value: ID_TOKEN_VERSION_V2 = 2;
     */
    ID_TOKEN_VERSION_V2 = 2
}
/**
 * Describes the enum gitpod.v1.IDTokenVersion.
 */
export declare const IDTokenVersionSchema: GenEnum<IDTokenVersion>;
/**
 * @generated from enum gitpod.v1.Principal
 */
export declare enum Principal {
    /**
     * @generated from enum value: PRINCIPAL_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PRINCIPAL_ACCOUNT = 1;
     */
    ACCOUNT = 1,
    /**
     * @generated from enum value: PRINCIPAL_USER = 2;
     */
    USER = 2,
    /**
     * @generated from enum value: PRINCIPAL_RUNNER = 3;
     */
    RUNNER = 3,
    /**
     * @generated from enum value: PRINCIPAL_ENVIRONMENT = 4;
     */
    ENVIRONMENT = 4,
    /**
     * @generated from enum value: PRINCIPAL_SERVICE_ACCOUNT = 5;
     */
    SERVICE_ACCOUNT = 5,
    /**
     * @generated from enum value: PRINCIPAL_RUNNER_MANAGER = 6;
     */
    RUNNER_MANAGER = 6
}
/**
 * Describes the enum gitpod.v1.Principal.
 */
export declare const PrincipalSchema: GenEnum<Principal>;
/**
 * @generated from service gitpod.v1.IdentityService
 */
export declare const IdentityService: GenService<{
    /**
     * Gets an ID token for authenticating with other services.
     *
     * Use this method to:
     * - Obtain authentication tokens for service-to-service calls
     * - Access protected resources
     * - Generate scoped access tokens
     *
     * ### Examples
     *
     * - Get token for single service:
     *
     *   Retrieves a token for authenticating with one service.
     *
     *   ```yaml
     *   audience:
     *     - "https://api.gitpod.io"
     *   ```
     *
     * - Get token for multiple services:
     *
     *   Retrieves a token valid for multiple services.
     *
     *   ```yaml
     *   audience:
     *     - "https://api.gitpod.io"
     *     - "https://ws.gitpod.io"
     *   ```
     *
     * @generated from rpc gitpod.v1.IdentityService.GetIDToken
     */
    getIDToken: {
        methodKind: "unary";
        input: typeof GetIDTokenRequestSchema;
        output: typeof GetIDTokenResponseSchema;
    };
    /**
     * Retrieves information about the currently authenticated identity.
     *
     * Use this method to:
     * - Get current user information
     * - Check authentication status
     * - Retrieve organization context
     * - Validate authentication principal
     *
     * ### Examples
     *
     * - Get current identity:
     *
     *   Retrieves details about the authenticated user.
     *
     *   ```yaml
     *   {}
     *   ```
     *
     * @generated from rpc gitpod.v1.IdentityService.GetAuthenticatedIdentity
     */
    getAuthenticatedIdentity: {
        methodKind: "unary";
        input: typeof GetAuthenticatedIdentityRequestSchema;
        output: typeof GetAuthenticatedIdentityResponseSchema;
    };
    /**
     * Exchanges an exchange token for a new access token.
     *
     * Use this method to:
     * - Convert exchange tokens to access tokens
     * - Obtain new access credentials
     * - Complete token exchange flows
     *
     * ### Examples
     *
     * - Exchange token:
     *
     *   Trades an exchange token for an access token.
     *
     *   ```yaml
     *   exchangeToken: "exchange-token-value"
     *   ```
     *
     * @generated from rpc gitpod.v1.IdentityService.ExchangeToken
     */
    exchangeToken: {
        methodKind: "unary";
        input: typeof ExchangeTokenRequestSchema;
        output: typeof ExchangeTokenResponseSchema;
    };
}>;
