import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { OrganizationRole, OrganizationTier } from "./organization_pb";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/account.proto.
 */
export declare const file_gitpod_v1_account: GenFile;
/**
 * @generated from message gitpod.v1.GetAccountRequest
 */
export type GetAccountRequest = Message<"gitpod.v1.GetAccountRequest"> & {};
/**
 * Describes the message gitpod.v1.GetAccountRequest.
 * Use `create(GetAccountRequestSchema)` to create a new message.
 */
export declare const GetAccountRequestSchema: GenMessage<GetAccountRequest>;
/**
 * @generated from message gitpod.v1.GetAccountResponse
 */
export type GetAccountResponse = Message<"gitpod.v1.GetAccountResponse"> & {
    /**
     * @generated from field: gitpod.v1.Account account = 1;
     */
    account?: Account;
};
/**
 * Describes the message gitpod.v1.GetAccountResponse.
 * Use `create(GetAccountResponseSchema)` to create a new message.
 */
export declare const GetAccountResponseSchema: GenMessage<GetAccountResponse>;
/**
 * @generated from message gitpod.v1.DeleteAccountRequest
 */
export type DeleteAccountRequest = Message<"gitpod.v1.DeleteAccountRequest"> & {
    /**
     * @generated from field: string account_id = 1;
     */
    accountId: string;
    /**
     * reason is an optional field for the reason for account deletion
     *
     * @generated from field: optional string reason = 2;
     */
    reason?: string;
};
/**
 * Describes the message gitpod.v1.DeleteAccountRequest.
 * Use `create(DeleteAccountRequestSchema)` to create a new message.
 */
export declare const DeleteAccountRequestSchema: GenMessage<DeleteAccountRequest>;
/**
 * @generated from message gitpod.v1.DeleteAccountResponse
 */
export type DeleteAccountResponse = Message<"gitpod.v1.DeleteAccountResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteAccountResponse.
 * Use `create(DeleteAccountResponseSchema)` to create a new message.
 */
export declare const DeleteAccountResponseSchema: GenMessage<DeleteAccountResponse>;
/**
 * @generated from message gitpod.v1.Account
 */
export type Account = Message<"gitpod.v1.Account"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string avatar_url = 3;
     */
    avatarUrl: string;
    /**
     * @generated from field: string email = 4;
     */
    email: string;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 6;
     */
    updatedAt?: Timestamp;
    /**
     * @generated from field: repeated gitpod.v1.AccountMembership memberships = 7;
     */
    memberships: AccountMembership[];
    /**
     * joinables is deprecated. Use ListJoinableOrganizations instead.
     *
     * @generated from field: repeated gitpod.v1.JoinableOrganization joinables = 8 [deprecated = true];
     * @deprecated
     */
    joinables: JoinableOrganization[];
    /**
     * public_email_provider is true if the email for the Account matches a known public email provider
     *
     * @generated from field: bool public_email_provider = 9;
     */
    publicEmailProvider: boolean;
    /**
     * organization_id is the ID of the organization the account is owned by if it's created through custom SSO
     *
     * @generated from field: optional string organization_id = 10;
     */
    organizationId?: string;
};
/**
 * Describes the message gitpod.v1.Account.
 * Use `create(AccountSchema)` to create a new message.
 */
export declare const AccountSchema: GenMessage<Account>;
/**
 * @generated from message gitpod.v1.AccountMembership
 */
export type AccountMembership = Message<"gitpod.v1.AccountMembership"> & {
    /**
     * user_id is the ID the user has in the organization
     *
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * user_role is the role the user has in the organization
     *
     * @generated from field: gitpod.v1.OrganizationRole user_role = 2;
     */
    userRole: OrganizationRole;
    /**
     * organization_id is the id of the organization the user is a member of
     *
     * @generated from field: string organization_id = 3;
     */
    organizationId: string;
    /**
     * organization_name is the name of the organization the user is a member of
     *
     * @generated from field: string organization_name = 4;
     */
    organizationName: string;
    /**
     * organization_member_count is the member count of the organization the user is a member of
     *
     * @generated from field: int32 organization_member_count = 5;
     */
    organizationMemberCount: number;
    /**
     * organization_tier is the tier of the organization (Free, Core, Enterprise)
     *
     * @generated from field: gitpod.v1.OrganizationTier organization_tier = 6;
     */
    organizationTier: OrganizationTier;
};
/**
 * Describes the message gitpod.v1.AccountMembership.
 * Use `create(AccountMembershipSchema)` to create a new message.
 */
export declare const AccountMembershipSchema: GenMessage<AccountMembership>;
/**
 * @generated from message gitpod.v1.JoinableOrganization
 */
export type JoinableOrganization = Message<"gitpod.v1.JoinableOrganization"> & {
    /**
     * organization_id is the id of the organization the user can join
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * organization_name is the name of the organization the user can join
     *
     * @generated from field: string organization_name = 2;
     */
    organizationName: string;
    /**
     * organization_member_count is the member count of the organization the user can join
     *
     * @generated from field: int32 organization_member_count = 3;
     */
    organizationMemberCount: number;
};
/**
 * Describes the message gitpod.v1.JoinableOrganization.
 * Use `create(JoinableOrganizationSchema)` to create a new message.
 */
export declare const JoinableOrganizationSchema: GenMessage<JoinableOrganization>;
/**
 * @generated from message gitpod.v1.GetSSOLoginURLRequest
 */
export type GetSSOLoginURLRequest = Message<"gitpod.v1.GetSSOLoginURLRequest"> & {
    /**
     * email is the email the user wants to login with
     *
     * @generated from field: string email = 1;
     */
    email: string;
    /**
     * return_to is the URL the user will be redirected to after login
     *
     * @generated from field: optional string return_to = 2;
     */
    returnTo?: string;
};
/**
 * Describes the message gitpod.v1.GetSSOLoginURLRequest.
 * Use `create(GetSSOLoginURLRequestSchema)` to create a new message.
 */
export declare const GetSSOLoginURLRequestSchema: GenMessage<GetSSOLoginURLRequest>;
/**
 * @generated from message gitpod.v1.GetSSOLoginURLResponse
 */
export type GetSSOLoginURLResponse = Message<"gitpod.v1.GetSSOLoginURLResponse"> & {
    /**
     * login_url is the URL to redirect the user to for SSO login
     *
     * @generated from field: string login_url = 1;
     */
    loginUrl: string;
};
/**
 * Describes the message gitpod.v1.GetSSOLoginURLResponse.
 * Use `create(GetSSOLoginURLResponseSchema)` to create a new message.
 */
export declare const GetSSOLoginURLResponseSchema: GenMessage<GetSSOLoginURLResponse>;
/**
 * @generated from message gitpod.v1.ListSSOLoginsRequest
 */
export type ListSSOLoginsRequest = Message<"gitpod.v1.ListSSOLoginsRequest"> & {
    /**
     * email is the email the user wants to login with
     *
     * @generated from field: string email = 1;
     */
    email: string;
    /**
     * return_to is the URL the user will be redirected to after login
     *
     * @generated from field: optional string return_to = 2;
     */
    returnTo?: string;
    /**
     * pagination contains the pagination options for listing SSO logins
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 3;
     */
    pagination?: PaginationRequest;
};
/**
 * Describes the message gitpod.v1.ListSSOLoginsRequest.
 * Use `create(ListSSOLoginsRequestSchema)` to create a new message.
 */
export declare const ListSSOLoginsRequestSchema: GenMessage<ListSSOLoginsRequest>;
/**
 * @generated from message gitpod.v1.ListSSOLoginsResponse
 */
export type ListSSOLoginsResponse = Message<"gitpod.v1.ListSSOLoginsResponse"> & {
    /**
     * @generated from field: repeated gitpod.v1.ListSSOLoginsResponse.Login logins = 1;
     */
    logins: ListSSOLoginsResponse_Login[];
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 2;
     */
    pagination?: PaginationResponse;
};
/**
 * Describes the message gitpod.v1.ListSSOLoginsResponse.
 * Use `create(ListSSOLoginsResponseSchema)` to create a new message.
 */
export declare const ListSSOLoginsResponseSchema: GenMessage<ListSSOLoginsResponse>;
/**
 * @generated from message gitpod.v1.ListSSOLoginsResponse.Login
 */
export type ListSSOLoginsResponse_Login = Message<"gitpod.v1.ListSSOLoginsResponse.Login"> & {
    /**
     * provider is the provider used by this login method, e.g. "github", "google", "custom"
     *
     * @generated from field: string display_name = 1;
     */
    displayName: string;
    /**
     * login_url is the URL to redirect the user to for SSO login
     *
     * @generated from field: string login_url = 2;
     */
    loginUrl: string;
};
/**
 * Describes the message gitpod.v1.ListSSOLoginsResponse.Login.
 * Use `create(ListSSOLoginsResponse_LoginSchema)` to create a new message.
 */
export declare const ListSSOLoginsResponse_LoginSchema: GenMessage<ListSSOLoginsResponse_Login>;
/**
 * @generated from message gitpod.v1.ListLoginProvidersRequest
 */
export type ListLoginProvidersRequest = Message<"gitpod.v1.ListLoginProvidersRequest"> & {
    /**
     * pagination contains the pagination options for listing login methods
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * filter contains the filter options for listing login methods
     *
     * @generated from field: gitpod.v1.ListLoginProvidersRequest.Filter filter = 2;
     */
    filter?: ListLoginProvidersRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListLoginProvidersRequest.
 * Use `create(ListLoginProvidersRequestSchema)` to create a new message.
 */
export declare const ListLoginProvidersRequestSchema: GenMessage<ListLoginProvidersRequest>;
/**
 * @generated from message gitpod.v1.ListLoginProvidersRequest.Filter
 */
export type ListLoginProvidersRequest_Filter = Message<"gitpod.v1.ListLoginProvidersRequest.Filter"> & {
    /**
     * invite_id is the ID of the invite URL the user wants to login with
     *
     * @generated from field: optional string invite_id = 1;
     */
    inviteId?: string;
    /**
     * email is the email address to filter SSO providers by
     *
     * @generated from field: optional string email = 2;
     */
    email?: string;
};
/**
 * Describes the message gitpod.v1.ListLoginProvidersRequest.Filter.
 * Use `create(ListLoginProvidersRequest_FilterSchema)` to create a new message.
 */
export declare const ListLoginProvidersRequest_FilterSchema: GenMessage<ListLoginProvidersRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListLoginProvidersResponse
 */
export type ListLoginProvidersResponse = Message<"gitpod.v1.ListLoginProvidersResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.LoginProvider login_providers = 2;
     */
    loginProviders: LoginProvider[];
    /**
     * allow_custom indicates whether custom SSO is allowed for this domain
     *
     * @generated from field: bool allow_custom = 3;
     */
    allowCustom: boolean;
};
/**
 * Describes the message gitpod.v1.ListLoginProvidersResponse.
 * Use `create(ListLoginProvidersResponseSchema)` to create a new message.
 */
export declare const ListLoginProvidersResponseSchema: GenMessage<ListLoginProvidersResponse>;
/**
 * @generated from message gitpod.v1.LoginProvider
 */
export type LoginProvider = Message<"gitpod.v1.LoginProvider"> & {
    /**
     * login_url is the URL to redirect the browser agent to for login, when provider is "custom"
     *
     * @generated from field: string login_url = 1;
     */
    loginUrl: string;
    /**
     * provider is the provider used by this login method, e.g. "github", "google", "custom"
     *
     * @generated from field: string provider = 2;
     */
    provider: string;
};
/**
 * Describes the message gitpod.v1.LoginProvider.
 * Use `create(LoginProviderSchema)` to create a new message.
 */
export declare const LoginProviderSchema: GenMessage<LoginProvider>;
/**
 * @generated from message gitpod.v1.ListJoinableOrganizationsRequest
 */
export type ListJoinableOrganizationsRequest = Message<"gitpod.v1.ListJoinableOrganizationsRequest"> & {
    /**
     * pagination contains the pagination options for listing joinable organizations
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
};
/**
 * Describes the message gitpod.v1.ListJoinableOrganizationsRequest.
 * Use `create(ListJoinableOrganizationsRequestSchema)` to create a new message.
 */
export declare const ListJoinableOrganizationsRequestSchema: GenMessage<ListJoinableOrganizationsRequest>;
/**
 * @generated from message gitpod.v1.ListJoinableOrganizationsResponse
 */
export type ListJoinableOrganizationsResponse = Message<"gitpod.v1.ListJoinableOrganizationsResponse"> & {
    /**
     * @generated from field: repeated gitpod.v1.JoinableOrganization joinable_organizations = 1;
     */
    joinableOrganizations: JoinableOrganization[];
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 2;
     */
    pagination?: PaginationResponse;
};
/**
 * Describes the message gitpod.v1.ListJoinableOrganizationsResponse.
 * Use `create(ListJoinableOrganizationsResponseSchema)` to create a new message.
 */
export declare const ListJoinableOrganizationsResponseSchema: GenMessage<ListJoinableOrganizationsResponse>;
/**
 * @generated from message gitpod.v1.BlockAccountRequest
 */
export type BlockAccountRequest = Message<"gitpod.v1.BlockAccountRequest"> & {
    /**
     * account_id is the UUID of the account to block
     *
     * @generated from field: string account_id = 1;
     */
    accountId: string;
    /**
     * reason is the reason for blocking the account (required for audit trail)
     *
     * @generated from field: string reason = 2;
     */
    reason: string;
};
/**
 * Describes the message gitpod.v1.BlockAccountRequest.
 * Use `create(BlockAccountRequestSchema)` to create a new message.
 */
export declare const BlockAccountRequestSchema: GenMessage<BlockAccountRequest>;
/**
 * @generated from message gitpod.v1.BlockAccountResponse
 */
export type BlockAccountResponse = Message<"gitpod.v1.BlockAccountResponse"> & {
    /**
     * environments_stopped is the number of environments that were stopped
     *
     * @generated from field: int32 environments_stopped = 1;
     */
    environmentsStopped: number;
    /**
     * subscriptions_cancelled is the number of subscriptions that were cancelled
     *
     * @generated from field: int32 subscriptions_cancelled = 2;
     */
    subscriptionsCancelled: number;
};
/**
 * Describes the message gitpod.v1.BlockAccountResponse.
 * Use `create(BlockAccountResponseSchema)` to create a new message.
 */
export declare const BlockAccountResponseSchema: GenMessage<BlockAccountResponse>;
/**
 * @generated from message gitpod.v1.UnblockAccountRequest
 */
export type UnblockAccountRequest = Message<"gitpod.v1.UnblockAccountRequest"> & {
    /**
     * account_id is the UUID of the account to unblock
     *
     * @generated from field: string account_id = 1;
     */
    accountId: string;
};
/**
 * Describes the message gitpod.v1.UnblockAccountRequest.
 * Use `create(UnblockAccountRequestSchema)` to create a new message.
 */
export declare const UnblockAccountRequestSchema: GenMessage<UnblockAccountRequest>;
/**
 * @generated from message gitpod.v1.UnblockAccountResponse
 */
export type UnblockAccountResponse = Message<"gitpod.v1.UnblockAccountResponse"> & {};
/**
 * Describes the message gitpod.v1.UnblockAccountResponse.
 * Use `create(UnblockAccountResponseSchema)` to create a new message.
 */
export declare const UnblockAccountResponseSchema: GenMessage<UnblockAccountResponse>;
/**
 * @generated from service gitpod.v1.AccountService
 */
export declare const AccountService: GenService<{
    /**
     * Gets information about the currently authenticated account.
     *
     * Use this method to:
     * - Retrieve account profile information
     * - Check organization memberships
     * - View account settings
     * - Get joinable organizations
     *
     * ### Examples
     *
     * - Get account details:
     *
     *   Retrieves information about the authenticated account.
     *
     *   ```yaml
     *   {}
     *   ```
     *
     * @generated from rpc gitpod.v1.AccountService.GetAccount
     */
    getAccount: {
        methodKind: "unary";
        input: typeof GetAccountRequestSchema;
        output: typeof GetAccountResponseSchema;
    };
    /**
     * Deletes an account permanently.
     *
     * Use this method to:
     * - Remove unused accounts
     * - Clean up test accounts
     * - Complete account deletion requests
     *
     * The account must not be an active member of any organization.
     *
     * ### Examples
     *
     * - Delete account:
     *
     *   Permanently removes an account.
     *
     *   ```yaml
     *   accountId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   ```
     *
     * @generated from rpc gitpod.v1.AccountService.DeleteAccount
     */
    deleteAccount: {
        methodKind: "unary";
        input: typeof DeleteAccountRequestSchema;
        output: typeof DeleteAccountResponseSchema;
    };
    /**
     * Gets the SSO login URL for a specific email domain.
     *
     * Use this method to:
     * - Initiate SSO authentication
     * - Get organization-specific login URLs
     * - Handle SSO redirects
     *
     * ### Examples
     *
     * - Get login URL:
     *
     *   Retrieves SSO URL for email domain.
     *
     *   ```yaml
     *   email: "user@company.com"
     *   ```
     *
     * - Get URL with return path:
     *
     *   Gets SSO URL with specific return location.
     *
     *   ```yaml
     *   email: "user@company.com"
     *   returnTo: "https://gitpod.io/workspaces"
     *   ```
     *
     * @generated from rpc gitpod.v1.AccountService.GetSSOLoginURL
     */
    getSSOLoginURL: {
        methodKind: "unary";
        input: typeof GetSSOLoginURLRequestSchema;
        output: typeof GetSSOLoginURLResponseSchema;
    };
    /**
     * @generated from rpc gitpod.v1.AccountService.ListSSOLogins
     */
    listSSOLogins: {
        methodKind: "unary";
        input: typeof ListSSOLoginsRequestSchema;
        output: typeof ListSSOLoginsResponseSchema;
    };
    /**
     * Lists available login providers with optional filtering.
     *
     * Use this method to:
     * - View supported authentication methods
     * - Get provider-specific login URLs
     * - Filter providers by invite
     *
     * ### Examples
     *
     * - List all providers:
     *
     *   Shows all available login providers.
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - List for specific invite:
     *
     *   Shows providers available for an invite.
     *
     *   ```yaml
     *   filter:
     *     inviteId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.AccountService.ListLoginProviders
     */
    listLoginProviders: {
        methodKind: "unary";
        input: typeof ListLoginProvidersRequestSchema;
        output: typeof ListLoginProvidersResponseSchema;
    };
    /**
     * Lists organizations that the currently authenticated account can join.
     *
     * Use this method to:
     * - Discover organizations associated with the account's email domain.
     * - Allow users to join existing organizations.
     * - Display potential organizations during onboarding.
     *
     * ### Examples
     *
     * - List joinable organizations:
     *
     *   Retrieves a list of organizations the account can join.
     *
     *   ```yaml
     *   {}
     *   ```
     *
     * @generated from rpc gitpod.v1.AccountService.ListJoinableOrganizations
     */
    listJoinableOrganizations: {
        methodKind: "unary";
        input: typeof ListJoinableOrganizationsRequestSchema;
        output: typeof ListJoinableOrganizationsResponseSchema;
    };
    /**
     * Blocks an account, preventing all API access.
     *
     * Use this method to:
     * - Revoke access for policy violations
     * - Handle abuse cases
     * - Enforce compliance requirements
     *
     * When an account is blocked:
     * - All API requests return 403 PERMISSION_DENIED
     * - All running environments are stopped
     * - All active subscriptions are cancelled
     *
     * Requires the `block_account` permission.
     *
     * ### Examples
     *
     * - Block account for policy violation:
     *
     *   ```yaml
     *   accountId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   reason: "Terms of Service violation - spam"
     *   ```
     *
     * @generated from rpc gitpod.v1.AccountService.BlockAccount
     */
    blockAccount: {
        methodKind: "unary";
        input: typeof BlockAccountRequestSchema;
        output: typeof BlockAccountResponseSchema;
    };
    /**
     * Unblocks a previously blocked account, restoring API access.
     *
     * Use this method to:
     * - Restore access after resolving policy violations
     * - Reinstate accounts after review
     *
     * Note: Unblocking does NOT restore:
     * - Stopped environments (must be restarted manually)
     * - Cancelled subscriptions (must be re-subscribed)
     * - Deleted resources
     *
     * Requires the `block_account` permission.
     *
     * ### Examples
     *
     * - Unblock account:
     *
     *   ```yaml
     *   accountId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   ```
     *
     * @generated from rpc gitpod.v1.AccountService.UnblockAccount
     */
    unblockAccount: {
        methodKind: "unary";
        input: typeof UnblockAccountRequestSchema;
        output: typeof UnblockAccountResponseSchema;
    };
}>;
