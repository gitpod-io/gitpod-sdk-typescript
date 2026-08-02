import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Subject } from "./identity_pb";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/service_account.proto.
 */
export declare const file_gitpod_v1_service_account: GenFile;
/**
 * @generated from message gitpod.v1.CreateServiceAccountRequest
 */
export type CreateServiceAccountRequest = Message<"gitpod.v1.CreateServiceAccountRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * valid_until specifies when this service account expires.
     * Note: In the current design, the service account itself has an expiry.
     * All authentication using this service account will fail after this time.
     *
     * @generated from field: google.protobuf.Timestamp valid_until = 3;
     */
    validUntil?: Timestamp;
};
/**
 * Describes the message gitpod.v1.CreateServiceAccountRequest.
 * Use `create(CreateServiceAccountRequestSchema)` to create a new message.
 */
export declare const CreateServiceAccountRequestSchema: GenMessage<CreateServiceAccountRequest>;
/**
 * @generated from message gitpod.v1.CreateServiceAccountResponse
 */
export type CreateServiceAccountResponse = Message<"gitpod.v1.CreateServiceAccountResponse"> & {
    /**
     * @generated from field: gitpod.v1.ServiceAccount service_account = 1;
     */
    serviceAccount?: ServiceAccount;
};
/**
 * Describes the message gitpod.v1.CreateServiceAccountResponse.
 * Use `create(CreateServiceAccountResponseSchema)` to create a new message.
 */
export declare const CreateServiceAccountResponseSchema: GenMessage<CreateServiceAccountResponse>;
/**
 * @generated from message gitpod.v1.ListServiceAccountsRequest
 */
export type ListServiceAccountsRequest = Message<"gitpod.v1.ListServiceAccountsRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * filter contains options for filtering the list of service accounts.
     *
     * @generated from field: gitpod.v1.ListServiceAccountsRequest.Filter filter = 2;
     */
    filter?: ListServiceAccountsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListServiceAccountsRequest.
 * Use `create(ListServiceAccountsRequestSchema)` to create a new message.
 */
export declare const ListServiceAccountsRequestSchema: GenMessage<ListServiceAccountsRequest>;
/**
 * @generated from message gitpod.v1.ListServiceAccountsRequest.Filter
 */
export type ListServiceAccountsRequest_Filter = Message<"gitpod.v1.ListServiceAccountsRequest.Filter"> & {
    /**
     * include_suspended includes suspended (soft-deleted) service accounts in the response.
     * By default, suspended service accounts are excluded.
     *
     * @generated from field: bool include_suspended = 1;
     */
    includeSuspended: boolean;
    /**
     * service_account_ids filters the response to only service accounts with the specified IDs
     *
     * @generated from field: repeated string service_account_ids = 2;
     */
    serviceAccountIds: string[];
    /**
     * search performs case-insensitive search across service account name, description, and ID
     *
     * @generated from field: string search = 3;
     */
    search: string;
};
/**
 * Describes the message gitpod.v1.ListServiceAccountsRequest.Filter.
 * Use `create(ListServiceAccountsRequest_FilterSchema)` to create a new message.
 */
export declare const ListServiceAccountsRequest_FilterSchema: GenMessage<ListServiceAccountsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListServiceAccountsResponse
 */
export type ListServiceAccountsResponse = Message<"gitpod.v1.ListServiceAccountsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.ServiceAccount service_accounts = 2;
     */
    serviceAccounts: ServiceAccount[];
};
/**
 * Describes the message gitpod.v1.ListServiceAccountsResponse.
 * Use `create(ListServiceAccountsResponseSchema)` to create a new message.
 */
export declare const ListServiceAccountsResponseSchema: GenMessage<ListServiceAccountsResponse>;
/**
 * @generated from message gitpod.v1.GetServiceAccountRequest
 */
export type GetServiceAccountRequest = Message<"gitpod.v1.GetServiceAccountRequest"> & {
    /**
     * @generated from field: string service_account_id = 1;
     */
    serviceAccountId: string;
};
/**
 * Describes the message gitpod.v1.GetServiceAccountRequest.
 * Use `create(GetServiceAccountRequestSchema)` to create a new message.
 */
export declare const GetServiceAccountRequestSchema: GenMessage<GetServiceAccountRequest>;
/**
 * @generated from message gitpod.v1.GetServiceAccountResponse
 */
export type GetServiceAccountResponse = Message<"gitpod.v1.GetServiceAccountResponse"> & {
    /**
     * @generated from field: gitpod.v1.ServiceAccount service_account = 1;
     */
    serviceAccount?: ServiceAccount;
};
/**
 * Describes the message gitpod.v1.GetServiceAccountResponse.
 * Use `create(GetServiceAccountResponseSchema)` to create a new message.
 */
export declare const GetServiceAccountResponseSchema: GenMessage<GetServiceAccountResponse>;
/**
 * @generated from message gitpod.v1.UpdateServiceAccountRequest
 */
export type UpdateServiceAccountRequest = Message<"gitpod.v1.UpdateServiceAccountRequest"> & {
    /**
     * @generated from field: string service_account_id = 1;
     */
    serviceAccountId: string;
    /**
     * Optional fields for update
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * Note: valid_until is immutable and cannot be updated
     *
     * @generated from field: optional string description = 3;
     */
    description?: string;
};
/**
 * Describes the message gitpod.v1.UpdateServiceAccountRequest.
 * Use `create(UpdateServiceAccountRequestSchema)` to create a new message.
 */
export declare const UpdateServiceAccountRequestSchema: GenMessage<UpdateServiceAccountRequest>;
/**
 * @generated from message gitpod.v1.UpdateServiceAccountResponse
 */
export type UpdateServiceAccountResponse = Message<"gitpod.v1.UpdateServiceAccountResponse"> & {
    /**
     * @generated from field: gitpod.v1.ServiceAccount service_account = 1;
     */
    serviceAccount?: ServiceAccount;
};
/**
 * Describes the message gitpod.v1.UpdateServiceAccountResponse.
 * Use `create(UpdateServiceAccountResponseSchema)` to create a new message.
 */
export declare const UpdateServiceAccountResponseSchema: GenMessage<UpdateServiceAccountResponse>;
/**
 * @generated from message gitpod.v1.DeleteServiceAccountRequest
 */
export type DeleteServiceAccountRequest = Message<"gitpod.v1.DeleteServiceAccountRequest"> & {
    /**
     * @generated from field: string service_account_id = 1;
     */
    serviceAccountId: string;
};
/**
 * Describes the message gitpod.v1.DeleteServiceAccountRequest.
 * Use `create(DeleteServiceAccountRequestSchema)` to create a new message.
 */
export declare const DeleteServiceAccountRequestSchema: GenMessage<DeleteServiceAccountRequest>;
/**
 * @generated from message gitpod.v1.DeleteServiceAccountResponse
 */
export type DeleteServiceAccountResponse = Message<"gitpod.v1.DeleteServiceAccountResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteServiceAccountResponse.
 * Use `create(DeleteServiceAccountResponseSchema)` to create a new message.
 */
export declare const DeleteServiceAccountResponseSchema: GenMessage<DeleteServiceAccountResponse>;
/**
 * @generated from message gitpod.v1.CreateServiceAccountAccessTokenRequest
 */
export type CreateServiceAccountAccessTokenRequest = Message<"gitpod.v1.CreateServiceAccountAccessTokenRequest"> & {
    /**
     * @generated from field: string service_account_id = 1;
     */
    serviceAccountId: string;
};
/**
 * Describes the message gitpod.v1.CreateServiceAccountAccessTokenRequest.
 * Use `create(CreateServiceAccountAccessTokenRequestSchema)` to create a new message.
 */
export declare const CreateServiceAccountAccessTokenRequestSchema: GenMessage<CreateServiceAccountAccessTokenRequest>;
/**
 * @generated from message gitpod.v1.CreateServiceAccountAccessTokenResponse
 */
export type CreateServiceAccountAccessTokenResponse = Message<"gitpod.v1.CreateServiceAccountAccessTokenResponse"> & {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
};
/**
 * Describes the message gitpod.v1.CreateServiceAccountAccessTokenResponse.
 * Use `create(CreateServiceAccountAccessTokenResponseSchema)` to create a new message.
 */
export declare const CreateServiceAccountAccessTokenResponseSchema: GenMessage<CreateServiceAccountAccessTokenResponse>;
/**
 * @generated from message gitpod.v1.ServiceAccount
 */
export type ServiceAccount = Message<"gitpod.v1.ServiceAccount"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: string description = 4;
     */
    description: string;
    /**
     * @generated from field: gitpod.v1.Subject creator = 5;
     */
    creator?: Subject;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp valid_until = 7;
     */
    validUntil?: Timestamp;
    /**
     * suspended indicates whether the service account has been deleted (soft-delete).
     * Suspended service accounts cannot be used for authentication.
     *
     * @generated from field: bool suspended = 8;
     */
    suspended: boolean;
    /**
     * system_managed indicates whether this is a system-managed service account.
     * System-managed service accounts cannot be modified or deleted by users.
     *
     * @generated from field: bool system_managed = 9;
     */
    systemManaged: boolean;
};
/**
 * Describes the message gitpod.v1.ServiceAccount.
 * Use `create(ServiceAccountSchema)` to create a new message.
 */
export declare const ServiceAccountSchema: GenMessage<ServiceAccount>;
/**
 * ServiceAccountToken represents metadata about a service account token.
 * The actual token value is only returned once during creation.
 *
 * @generated from message gitpod.v1.ServiceAccountToken
 */
export type ServiceAccountToken = Message<"gitpod.v1.ServiceAccountToken"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string service_account_id = 2;
     */
    serviceAccountId: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: gitpod.v1.Subject creator = 4;
     */
    creator?: Subject;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp expires_at = 6;
     */
    expiresAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp last_used = 7;
     */
    lastUsed?: Timestamp;
};
/**
 * Describes the message gitpod.v1.ServiceAccountToken.
 * Use `create(ServiceAccountTokenSchema)` to create a new message.
 */
export declare const ServiceAccountTokenSchema: GenMessage<ServiceAccountToken>;
/**
 * @generated from message gitpod.v1.CreateServiceAccountTokenRequest
 */
export type CreateServiceAccountTokenRequest = Message<"gitpod.v1.CreateServiceAccountTokenRequest"> & {
    /**
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * valid_for specifies how long the token should be valid.
     * A large value (e.g. reaching year 2099) represents "no expiry".
     * The actual expiry is always capped to the service account's own expiry.
     *
     * @generated from field: google.protobuf.Duration valid_for = 2;
     */
    validFor?: Duration;
};
/**
 * Describes the message gitpod.v1.CreateServiceAccountTokenRequest.
 * Use `create(CreateServiceAccountTokenRequestSchema)` to create a new message.
 */
export declare const CreateServiceAccountTokenRequestSchema: GenMessage<CreateServiceAccountTokenRequest>;
/**
 * @generated from message gitpod.v1.CreateServiceAccountTokenResponse
 */
export type CreateServiceAccountTokenResponse = Message<"gitpod.v1.CreateServiceAccountTokenResponse"> & {
    /**
     * token is the actual JWT token value. This is only returned once during creation.
     *
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * service_account_token contains the token metadata.
     *
     * @generated from field: gitpod.v1.ServiceAccountToken service_account_token = 2;
     */
    serviceAccountToken?: ServiceAccountToken;
};
/**
 * Describes the message gitpod.v1.CreateServiceAccountTokenResponse.
 * Use `create(CreateServiceAccountTokenResponseSchema)` to create a new message.
 */
export declare const CreateServiceAccountTokenResponseSchema: GenMessage<CreateServiceAccountTokenResponse>;
/**
 * @generated from message gitpod.v1.ListServiceAccountTokensRequest
 */
export type ListServiceAccountTokensRequest = Message<"gitpod.v1.ListServiceAccountTokensRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
};
/**
 * Describes the message gitpod.v1.ListServiceAccountTokensRequest.
 * Use `create(ListServiceAccountTokensRequestSchema)` to create a new message.
 */
export declare const ListServiceAccountTokensRequestSchema: GenMessage<ListServiceAccountTokensRequest>;
/**
 * @generated from message gitpod.v1.ListServiceAccountTokensResponse
 */
export type ListServiceAccountTokensResponse = Message<"gitpod.v1.ListServiceAccountTokensResponse"> & {
    /**
     * @generated from field: repeated gitpod.v1.ServiceAccountToken tokens = 1;
     */
    tokens: ServiceAccountToken[];
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 2;
     */
    pagination?: PaginationResponse;
};
/**
 * Describes the message gitpod.v1.ListServiceAccountTokensResponse.
 * Use `create(ListServiceAccountTokensResponseSchema)` to create a new message.
 */
export declare const ListServiceAccountTokensResponseSchema: GenMessage<ListServiceAccountTokensResponse>;
/**
 * @generated from message gitpod.v1.GetServiceAccountTokenRequest
 */
export type GetServiceAccountTokenRequest = Message<"gitpod.v1.GetServiceAccountTokenRequest"> & {
    /**
     * @generated from field: string service_account_token_id = 1;
     */
    serviceAccountTokenId: string;
};
/**
 * Describes the message gitpod.v1.GetServiceAccountTokenRequest.
 * Use `create(GetServiceAccountTokenRequestSchema)` to create a new message.
 */
export declare const GetServiceAccountTokenRequestSchema: GenMessage<GetServiceAccountTokenRequest>;
/**
 * @generated from message gitpod.v1.GetServiceAccountTokenResponse
 */
export type GetServiceAccountTokenResponse = Message<"gitpod.v1.GetServiceAccountTokenResponse"> & {
    /**
     * @generated from field: gitpod.v1.ServiceAccountToken token = 1;
     */
    token?: ServiceAccountToken;
};
/**
 * Describes the message gitpod.v1.GetServiceAccountTokenResponse.
 * Use `create(GetServiceAccountTokenResponseSchema)` to create a new message.
 */
export declare const GetServiceAccountTokenResponseSchema: GenMessage<GetServiceAccountTokenResponse>;
/**
 * @generated from message gitpod.v1.DeleteServiceAccountTokenRequest
 */
export type DeleteServiceAccountTokenRequest = Message<"gitpod.v1.DeleteServiceAccountTokenRequest"> & {
    /**
     * @generated from field: string service_account_token_id = 1;
     */
    serviceAccountTokenId: string;
};
/**
 * Describes the message gitpod.v1.DeleteServiceAccountTokenRequest.
 * Use `create(DeleteServiceAccountTokenRequestSchema)` to create a new message.
 */
export declare const DeleteServiceAccountTokenRequestSchema: GenMessage<DeleteServiceAccountTokenRequest>;
/**
 * @generated from message gitpod.v1.DeleteServiceAccountTokenResponse
 */
export type DeleteServiceAccountTokenResponse = Message<"gitpod.v1.DeleteServiceAccountTokenResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteServiceAccountTokenResponse.
 * Use `create(DeleteServiceAccountTokenResponseSchema)` to create a new message.
 */
export declare const DeleteServiceAccountTokenResponseSchema: GenMessage<DeleteServiceAccountTokenResponse>;
/**
 * @generated from service gitpod.v1.ServiceAccountService
 */
export declare const ServiceAccountService: GenService<{
    /**
     * Creates a new service account in an organization.
     *
     * Use this method to:
     * - Create service accounts for automation
     * - Set up CI/CD credentials
     * - Configure programmatic access
     *
     * ### Examples
     *
     * - Create service account:
     *
     *   Creates a service account for automation.
     *
     *   ```yaml
     *   name: "ci-pipeline"
     *   description: "CI/CD Pipeline"
     *   validUntil: "2025-12-31T23:59:59Z"
     *   ```
     *
     * @generated from rpc gitpod.v1.ServiceAccountService.CreateServiceAccount
     */
    createServiceAccount: {
        methodKind: "unary";
        input: typeof CreateServiceAccountRequestSchema;
        output: typeof CreateServiceAccountResponseSchema;
    };
    /**
     * Lists service accounts in an organization.
     *
     * Use this method to:
     * - View all service accounts
     * - Audit service account usage
     * - Manage service account lifecycle
     *
     * ### Examples
     *
     * - List service accounts:
     *
     *   Shows all service accounts in an organization.
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.ServiceAccountService.ListServiceAccounts
     */
    listServiceAccounts: {
        methodKind: "unary";
        input: typeof ListServiceAccountsRequestSchema;
        output: typeof ListServiceAccountsResponseSchema;
    };
    /**
     * Gets details about a specific service account.
     *
     * Use this method to:
     * - View service account details
     * - Check service account status
     * - Retrieve service account metadata
     *
     * ### Examples
     *
     * - Get service account:
     *
     *   Retrieves details about a specific service account.
     *
     *   ```yaml
     *   serviceAccountId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.ServiceAccountService.GetServiceAccount
     */
    getServiceAccount: {
        methodKind: "unary";
        input: typeof GetServiceAccountRequestSchema;
        output: typeof GetServiceAccountResponseSchema;
    };
    /**
     * Updates a service account.
     *
     * Use this method to:
     * - Update service account name or description
     *
     * ### Examples
     *
     * - Update name and description:
     *
     *   Updates the service account name and description.
     *
     *   ```yaml
     *   serviceAccountId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   name: "updated-ci-pipeline"
     *   description: "Updated CI/CD Pipeline"
     *   ```
     *
     * @generated from rpc gitpod.v1.ServiceAccountService.UpdateServiceAccount
     */
    updateServiceAccount: {
        methodKind: "unary";
        input: typeof UpdateServiceAccountRequestSchema;
        output: typeof UpdateServiceAccountResponseSchema;
    };
    /**
     * Deletes a service account.
     *
     * Use this method to:
     * - Remove unused service accounts
     * - Revoke service account access
     * - Clean up expired accounts
     *
     * ### Examples
     *
     * - Delete service account:
     *
     *   Permanently removes a service account.
     *
     *   ```yaml
     *   serviceAccountId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.ServiceAccountService.DeleteServiceAccount
     */
    deleteServiceAccount: {
        methodKind: "unary";
        input: typeof DeleteServiceAccountRequestSchema;
        output: typeof DeleteServiceAccountResponseSchema;
    };
    /**
     * Creates a short-lived access token for configuring a service account.
     *
     * The token expires after 30 minutes and can be used as a Bearer token
     * in the Authorization header to perform operations on behalf of the
     * service account, such as configuring OAuth.
     *
     * ### Examples
     *
     * - Create access token:
     *
     *   ```yaml
     *   serviceAccountId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.ServiceAccountService.CreateServiceAccountAccessToken
     */
    createServiceAccountAccessToken: {
        methodKind: "unary";
        input: typeof CreateServiceAccountAccessTokenRequestSchema;
        output: typeof CreateServiceAccountAccessTokenResponseSchema;
    };
    /**
     * Creates a long-lived token for a service account.
     *
     * Use this method to:
     * - Create tokens for CI/CD pipelines
     * - Set up automation credentials
     * - Generate API access tokens
     *
     * The token is returned only once and cannot be retrieved later.
     * Token validity is capped to the service account's expiry.
     *
     * Requires impersonation: First obtain a short-lived access token via
     * CreateServiceAccountAccessToken, then use it to call this method.
     * The service account ID is derived from the caller's identity.
     *
     * ### Examples
     *
     * - Create token with 90-day validity:
     *
     *   ```yaml
     *   description: "GitHub Actions"
     *   validFor: "7776000s"
     *   ```
     *
     * @generated from rpc gitpod.v1.ServiceAccountService.CreateServiceAccountToken
     */
    createServiceAccountToken: {
        methodKind: "unary";
        input: typeof CreateServiceAccountTokenRequestSchema;
        output: typeof CreateServiceAccountTokenResponseSchema;
    };
    /**
     * Lists tokens for a service account.
     *
     * Use this method to:
     * - View all tokens for a service account
     * - Audit token usage
     * - Identify tokens to revoke
     *
     * Requires impersonation: First obtain a short-lived access token via
     * CreateServiceAccountAccessToken, then use it to call this method.
     * The service account ID is derived from the caller's identity.
     *
     * ### Examples
     *
     * - List tokens:
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.ServiceAccountService.ListServiceAccountTokens
     */
    listServiceAccountTokens: {
        methodKind: "unary";
        input: typeof ListServiceAccountTokensRequestSchema;
        output: typeof ListServiceAccountTokensResponseSchema;
    };
    /**
     * Gets details about a specific service account token.
     *
     * Use this method to:
     * - View token metadata
     * - Check token expiration
     * - Monitor token usage
     *
     * ### Examples
     *
     * - Get token details:
     *
     *   ```yaml
     *   serviceAccountTokenId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.ServiceAccountService.GetServiceAccountToken
     */
    getServiceAccountToken: {
        methodKind: "unary";
        input: typeof GetServiceAccountTokenRequestSchema;
        output: typeof GetServiceAccountTokenResponseSchema;
    };
    /**
     * Deletes a service account token.
     *
     * Use this method to:
     * - Revoke token access
     * - Remove compromised tokens
     * - Rotate credentials
     *
     * ### Examples
     *
     * - Delete token:
     *
     *   ```yaml
     *   serviceAccountTokenId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.ServiceAccountService.DeleteServiceAccountToken
     */
    deleteServiceAccountToken: {
        methodKind: "unary";
        input: typeof DeleteServiceAccountTokenRequestSchema;
        output: typeof DeleteServiceAccountTokenResponseSchema;
    };
}>;
