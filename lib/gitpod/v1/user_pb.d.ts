import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Subject } from "./identity_pb";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/user.proto.
 */
export declare const file_gitpod_v1_user: GenFile;
/**
 * @generated from message gitpod.v1.GetAuthenticatedUserRequest
 */
export type GetAuthenticatedUserRequest = Message<"gitpod.v1.GetAuthenticatedUserRequest"> & {};
/**
 * Describes the message gitpod.v1.GetAuthenticatedUserRequest.
 * Use `create(GetAuthenticatedUserRequestSchema)` to create a new message.
 */
export declare const GetAuthenticatedUserRequestSchema: GenMessage<GetAuthenticatedUserRequest>;
/**
 * @generated from message gitpod.v1.GetAuthenticatedUserResponse
 */
export type GetAuthenticatedUserResponse = Message<"gitpod.v1.GetAuthenticatedUserResponse"> & {
    /**
     * @generated from field: gitpod.v1.User user = 1;
     */
    user?: User;
};
/**
 * Describes the message gitpod.v1.GetAuthenticatedUserResponse.
 * Use `create(GetAuthenticatedUserResponseSchema)` to create a new message.
 */
export declare const GetAuthenticatedUserResponseSchema: GenMessage<GetAuthenticatedUserResponse>;
/**
 * @generated from message gitpod.v1.GetUserRequest
 */
export type GetUserRequest = Message<"gitpod.v1.GetUserRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
};
/**
 * Describes the message gitpod.v1.GetUserRequest.
 * Use `create(GetUserRequestSchema)` to create a new message.
 */
export declare const GetUserRequestSchema: GenMessage<GetUserRequest>;
/**
 * @generated from message gitpod.v1.GetUserResponse
 */
export type GetUserResponse = Message<"gitpod.v1.GetUserResponse"> & {
    /**
     * @generated from field: gitpod.v1.User user = 1;
     */
    user?: User;
};
/**
 * Describes the message gitpod.v1.GetUserResponse.
 * Use `create(GetUserResponseSchema)` to create a new message.
 */
export declare const GetUserResponseSchema: GenMessage<GetUserResponse>;
/**
 * @generated from message gitpod.v1.SetSuspendedRequest
 */
export type SetSuspendedRequest = Message<"gitpod.v1.SetSuspendedRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: bool suspended = 2;
     */
    suspended: boolean;
};
/**
 * Describes the message gitpod.v1.SetSuspendedRequest.
 * Use `create(SetSuspendedRequestSchema)` to create a new message.
 */
export declare const SetSuspendedRequestSchema: GenMessage<SetSuspendedRequest>;
/**
 * @generated from message gitpod.v1.SetSuspendedResponse
 */
export type SetSuspendedResponse = Message<"gitpod.v1.SetSuspendedResponse"> & {};
/**
 * Describes the message gitpod.v1.SetSuspendedResponse.
 * Use `create(SetSuspendedResponseSchema)` to create a new message.
 */
export declare const SetSuspendedResponseSchema: GenMessage<SetSuspendedResponse>;
/**
 * @generated from message gitpod.v1.DeleteUserRequest
 */
export type DeleteUserRequest = Message<"gitpod.v1.DeleteUserRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
};
/**
 * Describes the message gitpod.v1.DeleteUserRequest.
 * Use `create(DeleteUserRequestSchema)` to create a new message.
 */
export declare const DeleteUserRequestSchema: GenMessage<DeleteUserRequest>;
/**
 * @generated from message gitpod.v1.DeleteUserResponse
 */
export type DeleteUserResponse = Message<"gitpod.v1.DeleteUserResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteUserResponse.
 * Use `create(DeleteUserResponseSchema)` to create a new message.
 */
export declare const DeleteUserResponseSchema: GenMessage<DeleteUserResponse>;
/**
 * @generated from message gitpod.v1.User
 */
export type User = Message<"gitpod.v1.User"> & {
    /**
     * id is a UUID of the user
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * organization_id is the id of the organization this account is owned by.
     *
     * +optional if not set, this account is owned by the installation.
     *
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * name is the full name of the user
     *
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * avatar_url is a link to the user avatar
     *
     * @generated from field: string avatar_url = 4;
     */
    avatarUrl: string;
    /**
     * created_at is the creation time
     *
     * @generated from field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
    /**
     * status is the status the user is in
     *
     * @generated from field: gitpod.v1.UserStatus status = 6;
     */
    status: UserStatus;
    /**
     * email is the user's email address
     *
     * @generated from field: string email = 7;
     */
    email: string;
};
/**
 * Describes the message gitpod.v1.User.
 * Use `create(UserSchema)` to create a new message.
 */
export declare const UserSchema: GenMessage<User>;
/**
 * @generated from message gitpod.v1.CreatePersonalAccessTokenRequest
 */
export type CreatePersonalAccessTokenRequest = Message<"gitpod.v1.CreatePersonalAccessTokenRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: google.protobuf.Duration valid_for = 3;
     */
    validFor?: Duration;
    /**
     * When true, the token can only be used for read operations.
     * Mutations will be denied at the data layer.
     *
     * @generated from field: bool read_only = 4;
     */
    readOnly: boolean;
};
/**
 * Describes the message gitpod.v1.CreatePersonalAccessTokenRequest.
 * Use `create(CreatePersonalAccessTokenRequestSchema)` to create a new message.
 */
export declare const CreatePersonalAccessTokenRequestSchema: GenMessage<CreatePersonalAccessTokenRequest>;
/**
 * @generated from message gitpod.v1.CreatePersonalAccessTokenResponse
 */
export type CreatePersonalAccessTokenResponse = Message<"gitpod.v1.CreatePersonalAccessTokenResponse"> & {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
};
/**
 * Describes the message gitpod.v1.CreatePersonalAccessTokenResponse.
 * Use `create(CreatePersonalAccessTokenResponseSchema)` to create a new message.
 */
export declare const CreatePersonalAccessTokenResponseSchema: GenMessage<CreatePersonalAccessTokenResponse>;
/**
 * @generated from message gitpod.v1.GetPersonalAccessTokenRequest
 */
export type GetPersonalAccessTokenRequest = Message<"gitpod.v1.GetPersonalAccessTokenRequest"> & {
    /**
     * @generated from field: string personal_access_token_id = 1;
     */
    personalAccessTokenId: string;
};
/**
 * Describes the message gitpod.v1.GetPersonalAccessTokenRequest.
 * Use `create(GetPersonalAccessTokenRequestSchema)` to create a new message.
 */
export declare const GetPersonalAccessTokenRequestSchema: GenMessage<GetPersonalAccessTokenRequest>;
/**
 * @generated from message gitpod.v1.GetPersonalAccessTokenResponse
 */
export type GetPersonalAccessTokenResponse = Message<"gitpod.v1.GetPersonalAccessTokenResponse"> & {
    /**
     * @generated from field: gitpod.v1.PersonalAccessToken pat = 1;
     */
    pat?: PersonalAccessToken;
};
/**
 * Describes the message gitpod.v1.GetPersonalAccessTokenResponse.
 * Use `create(GetPersonalAccessTokenResponseSchema)` to create a new message.
 */
export declare const GetPersonalAccessTokenResponseSchema: GenMessage<GetPersonalAccessTokenResponse>;
/**
 * @generated from message gitpod.v1.ListPersonalAccessTokensRequest
 */
export type ListPersonalAccessTokensRequest = Message<"gitpod.v1.ListPersonalAccessTokensRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListPersonalAccessTokensRequest.Filter filter = 2;
     */
    filter?: ListPersonalAccessTokensRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListPersonalAccessTokensRequest.
 * Use `create(ListPersonalAccessTokensRequestSchema)` to create a new message.
 */
export declare const ListPersonalAccessTokensRequestSchema: GenMessage<ListPersonalAccessTokensRequest>;
/**
 * @generated from message gitpod.v1.ListPersonalAccessTokensRequest.Filter
 */
export type ListPersonalAccessTokensRequest_Filter = Message<"gitpod.v1.ListPersonalAccessTokensRequest.Filter"> & {
    /**
     * creator_ids filters the response to only Environments created by specified members
     *
     * @generated from field: repeated string user_ids = 3;
     */
    userIds: string[];
};
/**
 * Describes the message gitpod.v1.ListPersonalAccessTokensRequest.Filter.
 * Use `create(ListPersonalAccessTokensRequest_FilterSchema)` to create a new message.
 */
export declare const ListPersonalAccessTokensRequest_FilterSchema: GenMessage<ListPersonalAccessTokensRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListPersonalAccessTokensResponse
 */
export type ListPersonalAccessTokensResponse = Message<"gitpod.v1.ListPersonalAccessTokensResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.PersonalAccessToken personal_access_tokens = 2;
     */
    personalAccessTokens: PersonalAccessToken[];
};
/**
 * Describes the message gitpod.v1.ListPersonalAccessTokensResponse.
 * Use `create(ListPersonalAccessTokensResponseSchema)` to create a new message.
 */
export declare const ListPersonalAccessTokensResponseSchema: GenMessage<ListPersonalAccessTokensResponse>;
/**
 * @generated from message gitpod.v1.DeletePersonalAccessTokenRequest
 */
export type DeletePersonalAccessTokenRequest = Message<"gitpod.v1.DeletePersonalAccessTokenRequest"> & {
    /**
     * @generated from field: string personal_access_token_id = 1;
     */
    personalAccessTokenId: string;
};
/**
 * Describes the message gitpod.v1.DeletePersonalAccessTokenRequest.
 * Use `create(DeletePersonalAccessTokenRequestSchema)` to create a new message.
 */
export declare const DeletePersonalAccessTokenRequestSchema: GenMessage<DeletePersonalAccessTokenRequest>;
/**
 * @generated from message gitpod.v1.DeletePersonalAccessTokenResponse
 */
export type DeletePersonalAccessTokenResponse = Message<"gitpod.v1.DeletePersonalAccessTokenResponse"> & {};
/**
 * Describes the message gitpod.v1.DeletePersonalAccessTokenResponse.
 * Use `create(DeletePersonalAccessTokenResponseSchema)` to create a new message.
 */
export declare const DeletePersonalAccessTokenResponseSchema: GenMessage<DeletePersonalAccessTokenResponse>;
/**
 * @generated from message gitpod.v1.PersonalAccessToken
 */
export type PersonalAccessToken = Message<"gitpod.v1.PersonalAccessToken"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string user_id = 2;
     */
    userId: string;
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
    /**
     * When true, the token can only be used for read operations.
     * Mutations will be denied at the data layer.
     *
     * @generated from field: bool read_only = 8;
     */
    readOnly: boolean;
};
/**
 * Describes the message gitpod.v1.PersonalAccessToken.
 * Use `create(PersonalAccessTokenSchema)` to create a new message.
 */
export declare const PersonalAccessTokenSchema: GenMessage<PersonalAccessToken>;
/**
 * @generated from message gitpod.v1.SetPreferenceRequest
 */
export type SetPreferenceRequest = Message<"gitpod.v1.SetPreferenceRequest"> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * omitting value field will cause an error due to min_len validation,
     * to unset a preference use DeletePreference instead
     *
     * @generated from field: string value = 2;
     */
    value: string;
};
/**
 * Describes the message gitpod.v1.SetPreferenceRequest.
 * Use `create(SetPreferenceRequestSchema)` to create a new message.
 */
export declare const SetPreferenceRequestSchema: GenMessage<SetPreferenceRequest>;
/**
 * @generated from message gitpod.v1.SetPreferenceResponse
 */
export type SetPreferenceResponse = Message<"gitpod.v1.SetPreferenceResponse"> & {};
/**
 * Describes the message gitpod.v1.SetPreferenceResponse.
 * Use `create(SetPreferenceResponseSchema)` to create a new message.
 */
export declare const SetPreferenceResponseSchema: GenMessage<SetPreferenceResponse>;
/**
 * @generated from message gitpod.v1.GetPreferenceRequest
 */
export type GetPreferenceRequest = Message<"gitpod.v1.GetPreferenceRequest"> & {
    /**
     * @generated from field: string user_preference_id = 1 [deprecated = true];
     * @deprecated
     */
    userPreferenceId: string;
    /**
     * an identifier for the preference to get
     *
     * @generated from oneof gitpod.v1.GetPreferenceRequest.preference
     */
    preference: {
        /**
         * @generated from field: string preference_id = 2;
         */
        value: string;
        case: "preferenceId";
    } | {
        /**
         * @generated from field: string preference_key = 3;
         */
        value: string;
        case: "preferenceKey";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.GetPreferenceRequest.
 * Use `create(GetPreferenceRequestSchema)` to create a new message.
 */
export declare const GetPreferenceRequestSchema: GenMessage<GetPreferenceRequest>;
/**
 * @generated from message gitpod.v1.GetPreferenceResponse
 */
export type GetPreferenceResponse = Message<"gitpod.v1.GetPreferenceResponse"> & {
    /**
     * @generated from field: gitpod.v1.UserPreference preference = 1;
     */
    preference?: UserPreference;
};
/**
 * Describes the message gitpod.v1.GetPreferenceResponse.
 * Use `create(GetPreferenceResponseSchema)` to create a new message.
 */
export declare const GetPreferenceResponseSchema: GenMessage<GetPreferenceResponse>;
/**
 * @generated from message gitpod.v1.ListPreferencesRequest
 */
export type ListPreferencesRequest = Message<"gitpod.v1.ListPreferencesRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
};
/**
 * Describes the message gitpod.v1.ListPreferencesRequest.
 * Use `create(ListPreferencesRequestSchema)` to create a new message.
 */
export declare const ListPreferencesRequestSchema: GenMessage<ListPreferencesRequest>;
/**
 * @generated from message gitpod.v1.ListPreferencesResponse
 */
export type ListPreferencesResponse = Message<"gitpod.v1.ListPreferencesResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.UserPreference preferences = 2;
     */
    preferences: UserPreference[];
};
/**
 * Describes the message gitpod.v1.ListPreferencesResponse.
 * Use `create(ListPreferencesResponseSchema)` to create a new message.
 */
export declare const ListPreferencesResponseSchema: GenMessage<ListPreferencesResponse>;
/**
 * @generated from message gitpod.v1.DeletePreferenceRequest
 */
export type DeletePreferenceRequest = Message<"gitpod.v1.DeletePreferenceRequest"> & {
    /**
     * @generated from field: string user_preference_id = 1;
     */
    userPreferenceId: string;
};
/**
 * Describes the message gitpod.v1.DeletePreferenceRequest.
 * Use `create(DeletePreferenceRequestSchema)` to create a new message.
 */
export declare const DeletePreferenceRequestSchema: GenMessage<DeletePreferenceRequest>;
/**
 * @generated from message gitpod.v1.DeletePreferenceResponse
 */
export type DeletePreferenceResponse = Message<"gitpod.v1.DeletePreferenceResponse"> & {};
/**
 * Describes the message gitpod.v1.DeletePreferenceResponse.
 * Use `create(DeletePreferenceResponseSchema)` to create a new message.
 */
export declare const DeletePreferenceResponseSchema: GenMessage<DeletePreferenceResponse>;
/**
 * @generated from message gitpod.v1.UserPreference
 */
export type UserPreference = Message<"gitpod.v1.UserPreference"> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * omitting value field will cause an error due to min_len validation,
     * to unset a preference use DeletePreference instead
     *
     * @generated from field: string value = 2;
     */
    value: string;
    /**
     * @generated from field: string id = 3;
     */
    id: string;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 5;
     */
    updatedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.UserPreference.
 * Use `create(UserPreferenceSchema)` to create a new message.
 */
export declare const UserPreferenceSchema: GenMessage<UserPreference>;
/**
 * @generated from message gitpod.v1.GetDotfilesConfigurationRequest
 */
export type GetDotfilesConfigurationRequest = Message<"gitpod.v1.GetDotfilesConfigurationRequest"> & {};
/**
 * Describes the message gitpod.v1.GetDotfilesConfigurationRequest.
 * Use `create(GetDotfilesConfigurationRequestSchema)` to create a new message.
 */
export declare const GetDotfilesConfigurationRequestSchema: GenMessage<GetDotfilesConfigurationRequest>;
/**
 * @generated from message gitpod.v1.GetDotfilesConfigurationResponse
 */
export type GetDotfilesConfigurationResponse = Message<"gitpod.v1.GetDotfilesConfigurationResponse"> & {
    /**
     * @generated from field: gitpod.v1.DotfilesConfiguration dotfiles_configuration = 1;
     */
    dotfilesConfiguration?: DotfilesConfiguration;
};
/**
 * Describes the message gitpod.v1.GetDotfilesConfigurationResponse.
 * Use `create(GetDotfilesConfigurationResponseSchema)` to create a new message.
 */
export declare const GetDotfilesConfigurationResponseSchema: GenMessage<GetDotfilesConfigurationResponse>;
/**
 * @generated from message gitpod.v1.SetDotfilesConfigurationRequest
 */
export type SetDotfilesConfigurationRequest = Message<"gitpod.v1.SetDotfilesConfigurationRequest"> & {
    /**
     * @generated from field: string repository = 1;
     */
    repository: string;
};
/**
 * Describes the message gitpod.v1.SetDotfilesConfigurationRequest.
 * Use `create(SetDotfilesConfigurationRequestSchema)` to create a new message.
 */
export declare const SetDotfilesConfigurationRequestSchema: GenMessage<SetDotfilesConfigurationRequest>;
/**
 * @generated from message gitpod.v1.SetDotfilesConfigurationResponse
 */
export type SetDotfilesConfigurationResponse = Message<"gitpod.v1.SetDotfilesConfigurationResponse"> & {};
/**
 * Describes the message gitpod.v1.SetDotfilesConfigurationResponse.
 * Use `create(SetDotfilesConfigurationResponseSchema)` to create a new message.
 */
export declare const SetDotfilesConfigurationResponseSchema: GenMessage<SetDotfilesConfigurationResponse>;
/**
 * @generated from message gitpod.v1.DotfilesConfiguration
 */
export type DotfilesConfiguration = Message<"gitpod.v1.DotfilesConfiguration"> & {
    /**
     * The URL of a dotfiles repository.
     *
     * @generated from field: string repository = 1;
     */
    repository: string;
};
/**
 * Describes the message gitpod.v1.DotfilesConfiguration.
 * Use `create(DotfilesConfigurationSchema)` to create a new message.
 */
export declare const DotfilesConfigurationSchema: GenMessage<DotfilesConfiguration>;
/**
 * @generated from enum gitpod.v1.UserStatus
 */
export declare enum UserStatus {
    /**
     * @generated from enum value: USER_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: USER_STATUS_ACTIVE = 1;
     */
    ACTIVE = 1,
    /**
     * @generated from enum value: USER_STATUS_SUSPENDED = 2;
     */
    SUSPENDED = 2,
    /**
     * @generated from enum value: USER_STATUS_LEFT = 3;
     */
    LEFT = 3
}
/**
 * Describes the enum gitpod.v1.UserStatus.
 */
export declare const UserStatusSchema: GenEnum<UserStatus>;
/**
 * @generated from service gitpod.v1.UserService
 */
export declare const UserService: GenService<{
    /**
     * Gets information about the currently authenticated user.
     *
     * Use this method to:
     * - Get user profile information
     * - Check authentication status
     * - Retrieve user settings
     * - Verify account details
     *
     * ### Examples
     *
     * - Get current user:
     *
     *   Retrieves details about the authenticated user.
     *
     *   ```yaml
     *   {}
     *   ```
     *
     * @generated from rpc gitpod.v1.UserService.GetAuthenticatedUser
     */
    getAuthenticatedUser: {
        methodKind: "unary";
        input: typeof GetAuthenticatedUserRequestSchema;
        output: typeof GetAuthenticatedUserResponseSchema;
    };
    /**
     * Gets basic information about a specific user by their ID.
     *
     * Use this method to:
     * - Retrieve user profile information
     * - Get user details for display purposes
     * - Fetch user metadata for administrative tasks
     *
     * ### Examples
     *
     * - Get user by ID:
     *
     *   Retrieves basic user information by user ID.
     *
     *   ```yaml
     *   userId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   ```
     *
     * @generated from rpc gitpod.v1.UserService.GetUser
     */
    getUser: {
        methodKind: "unary";
        input: typeof GetUserRequestSchema;
        output: typeof GetUserResponseSchema;
    };
    /**
     * Sets whether a user account is suspended.
     *
     * Use this method to:
     * - Suspend problematic users
     * - Reactivate suspended accounts
     * - Manage user access
     *
     * ### Examples
     *
     * - Suspend user:
     *
     *   Suspends a user account.
     *
     *   ```yaml
     *   userId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   suspended: true
     *   ```
     *
     * - Reactivate user:
     *
     *   Removes suspension from a user account.
     *
     *   ```yaml
     *   userId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   suspended: false
     *   ```
     *
     * @generated from rpc gitpod.v1.UserService.SetSuspended
     */
    setSuspended: {
        methodKind: "unary";
        input: typeof SetSuspendedRequestSchema;
        output: typeof SetSuspendedResponseSchema;
    };
    /**
     * Deletes a user. If the User comes from an organization's SSO provider, the Account will also be deleted.
     *
     * @generated from rpc gitpod.v1.UserService.DeleteUser
     */
    deleteUser: {
        methodKind: "unary";
        input: typeof DeleteUserRequestSchema;
        output: typeof DeleteUserResponseSchema;
    };
    /**
     * Creates a new personal access token for API authentication.
     *
     * Use this method to:
     * - Generate API access tokens
     * - Create service account credentials
     * - Set up automated access
     *
     * ### Examples
     *
     * - Create token:
     *
     *   Creates a new access token valid for 30 days.
     *
     *   ```yaml
     *   userId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   description: "CI/CD Pipeline Token"
     *   validFor: "2592000s"  # 30 days
     *   ```
     *
     * @generated from rpc gitpod.v1.UserService.CreatePersonalAccessToken
     */
    createPersonalAccessToken: {
        methodKind: "unary";
        input: typeof CreatePersonalAccessTokenRequestSchema;
        output: typeof CreatePersonalAccessTokenResponseSchema;
    };
    /**
     * Gets details about a specific personal access token.
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
     *   Retrieves information about a specific token.
     *
     *   ```yaml
     *   personalAccessTokenId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.UserService.GetPersonalAccessToken
     */
    getPersonalAccessToken: {
        methodKind: "unary";
        input: typeof GetPersonalAccessTokenRequestSchema;
        output: typeof GetPersonalAccessTokenResponseSchema;
    };
    /**
     * Lists personal access tokens with optional filtering.
     *
     * Use this method to:
     * - View all active tokens
     * - Audit token usage
     * - Manage token lifecycle
     *
     * ### Examples
     *
     * - List user tokens:
     *
     *   Shows all tokens for specific users.
     *
     *   ```yaml
     *   filter:
     *     userIds: ["f53d2330-3795-4c5d-a1f3-453121af9c60"]
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.UserService.ListPersonalAccessTokens
     */
    listPersonalAccessTokens: {
        methodKind: "unary";
        input: typeof ListPersonalAccessTokensRequestSchema;
        output: typeof ListPersonalAccessTokensResponseSchema;
    };
    /**
     * Deletes a personal access token.
     *
     * Use this method to:
     * - Revoke token access
     * - Remove unused tokens
     * - Rotate credentials
     *
     * ### Examples
     *
     * - Delete token:
     *
     *   Permanently revokes a token.
     *
     *   ```yaml
     *   personalAccessTokenId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.UserService.DeletePersonalAccessToken
     */
    deletePersonalAccessToken: {
        methodKind: "unary";
        input: typeof DeletePersonalAccessTokenRequestSchema;
        output: typeof DeletePersonalAccessTokenResponseSchema;
    };
    /**
     * Sets a user preference value.
     *
     * Use this method to:
     * - Store user settings
     * - Update preferences
     * - Configure user experience
     *
     * ### Examples
     *
     * - Set preference:
     *
     *   Updates a user preference setting.
     *
     *   ```yaml
     *   key: "theme"
     *   value: "dark"
     *   ```
     *
     * @generated from rpc gitpod.v1.UserService.SetPreference
     */
    setPreference: {
        methodKind: "unary";
        input: typeof SetPreferenceRequestSchema;
        output: typeof SetPreferenceResponseSchema;
    };
    /**
     * Gets a specific user preference value.
     *
     * Use this method to:
     * - Retrieve user settings
     * - Read preference values
     * - Check configurations
     *
     * ### Examples
     *
     * - Get preference:
     *
     *   Retrieves a specific preference value.
     *
     *   ```yaml
     *   preferenceId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.UserService.GetPreference
     */
    getPreference: {
        methodKind: "unary";
        input: typeof GetPreferenceRequestSchema;
        output: typeof GetPreferenceResponseSchema;
    };
    /**
     * Lists all user preferences.
     *
     * Use this method to:
     * - View all user settings
     * - Export preferences
     * - Audit configurations
     *
     * ### Examples
     *
     * - List preferences:
     *
     *   Shows all preferences with pagination.
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.UserService.ListPreferences
     */
    listPreferences: {
        methodKind: "unary";
        input: typeof ListPreferencesRequestSchema;
        output: typeof ListPreferencesResponseSchema;
    };
    /**
     * Deletes a user preference.
     *
     * Use this method to:
     * - Remove settings
     * - Reset preferences
     * - Clean up configurations
     *
     * ### Examples
     *
     * - Delete preference:
     *
     *   Removes a specific preference.
     *
     *   ```yaml
     *   userPreferenceId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.UserService.DeletePreference
     */
    deletePreference: {
        methodKind: "unary";
        input: typeof DeletePreferenceRequestSchema;
        output: typeof DeletePreferenceResponseSchema;
    };
    /**
     * Gets the dotfiles for a user.
     *
     * Use this method to:
     * - Retrieve user dotfiles
     *
     * ### Examples
     *
     * - Get dotfiles:
     *
     *   Retrieves the dotfiles for the current user.
     *
     *   ```yaml
     *   {}
     *   ```
     *
     * @generated from rpc gitpod.v1.UserService.GetDotfilesConfiguration
     */
    getDotfilesConfiguration: {
        methodKind: "unary";
        input: typeof GetDotfilesConfigurationRequestSchema;
        output: typeof GetDotfilesConfigurationResponseSchema;
    };
    /**
     * Sets the dotfiles configuration for a user.
     *
     * Use this method to:
     * - Configure user dotfiles
     * - Update dotfiles settings
     *
     * ### Examples
     *
     * - Set dotfiles configuration:
     *
     *   Sets the dotfiles configuration for the current user.
     *
     *   ```yaml
     *   {
     *     "repository": "https://github.com/gitpod-io/dotfiles",
     *   }
     *   ```
     *
     * - Remove dotfiles:
     *
     *   Removes the dotfiles for the current user.
     *
     *   ```yaml
     *   {}
     *   ```
     *
     * @generated from rpc gitpod.v1.UserService.SetDotfilesConfiguration
     */
    setDotfilesConfiguration: {
        methodKind: "unary";
        input: typeof SetDotfilesConfigurationRequestSchema;
        output: typeof SetDotfilesConfigurationResponseSchema;
    };
}>;
