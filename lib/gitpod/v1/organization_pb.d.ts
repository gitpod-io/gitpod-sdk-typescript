import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { CodexOpenAIModel, CodexReasoningEffort, CodexServiceTier } from "./agent_pb";
import type { CountRequest, CountResponse } from "./count_pb";
import type { AdmissionLevel, KernelControlsAction, VetoFileBlockDevicesPolicy, VetoFilePathPolicy } from "./environment_pb";
import type { PaginationRequest, PaginationResponse, SortOrder } from "./pagination_pb";
import type { UserStatus } from "./user_pb";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/organization.proto.
 */
export declare const file_gitpod_v1_organization: GenFile;
/**
 * @generated from message gitpod.v1.UpdateOrganizationRequest
 */
export type UpdateOrganizationRequest = Message<"gitpod.v1.UpdateOrganizationRequest"> & {
    /**
     * organization_id is the ID of the organization to update the settings for.
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * name is the new name of the organization
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * invite_domains is the domain allowlist of the organization
     *
     * @generated from field: optional gitpod.v1.InviteDomains invite_domains = 3;
     */
    inviteDomains?: InviteDomains;
};
/**
 * Describes the message gitpod.v1.UpdateOrganizationRequest.
 * Use `create(UpdateOrganizationRequestSchema)` to create a new message.
 */
export declare const UpdateOrganizationRequestSchema: GenMessage<UpdateOrganizationRequest>;
/**
 * @generated from message gitpod.v1.UpdateOrganizationResponse
 */
export type UpdateOrganizationResponse = Message<"gitpod.v1.UpdateOrganizationResponse"> & {
    /**
     * organization is the updated organization
     *
     * @generated from field: gitpod.v1.Organization organization = 1;
     */
    organization?: Organization;
};
/**
 * Describes the message gitpod.v1.UpdateOrganizationResponse.
 * Use `create(UpdateOrganizationResponseSchema)` to create a new message.
 */
export declare const UpdateOrganizationResponseSchema: GenMessage<UpdateOrganizationResponse>;
/**
 * @generated from message gitpod.v1.CreateOrganizationRequest
 */
export type CreateOrganizationRequest = Message<"gitpod.v1.CreateOrganizationRequest"> & {
    /**
     * name is the organization name
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * join_organization decides whether the Identity issuing this request joins the org on creation
     *
     * @generated from field: bool join_organization = 2;
     */
    joinOrganization: boolean;
    /**
     * Should other Accounts with the same domain be automatically invited to the organization?
     *
     * @generated from field: bool invite_accounts_with_matching_domain = 3;
     */
    inviteAccountsWithMatchingDomain: boolean;
};
/**
 * Describes the message gitpod.v1.CreateOrganizationRequest.
 * Use `create(CreateOrganizationRequestSchema)` to create a new message.
 */
export declare const CreateOrganizationRequestSchema: GenMessage<CreateOrganizationRequest>;
/**
 * @generated from message gitpod.v1.CreateOrganizationResponse
 */
export type CreateOrganizationResponse = Message<"gitpod.v1.CreateOrganizationResponse"> & {
    /**
     * organization is the created organization
     *
     * @generated from field: gitpod.v1.Organization organization = 1;
     */
    organization?: Organization;
    /**
     * member is the member that joined the org on creation. Only set if specified "join_organization" is "true" in the request.
     *
     * @generated from field: gitpod.v1.OrganizationMember member = 2;
     */
    member?: OrganizationMember;
};
/**
 * Describes the message gitpod.v1.CreateOrganizationResponse.
 * Use `create(CreateOrganizationResponseSchema)` to create a new message.
 */
export declare const CreateOrganizationResponseSchema: GenMessage<CreateOrganizationResponse>;
/**
 * @generated from message gitpod.v1.JoinOrganizationRequest
 */
export type JoinOrganizationRequest = Message<"gitpod.v1.JoinOrganizationRequest"> & {
    /**
     * @generated from oneof gitpod.v1.JoinOrganizationRequest.join_id
     */
    joinId: {
        /**
         * organization_id is the unique identifier of the Organization to join.
         *
         * @generated from field: string organization_id = 1;
         */
        value: string;
        case: "organizationId";
    } | {
        /**
         * invite_id is the unique identifier of the invite to join the organization.
         *
         * @generated from field: string invite_id = 2;
         */
        value: string;
        case: "inviteId";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.JoinOrganizationRequest.
 * Use `create(JoinOrganizationRequestSchema)` to create a new message.
 */
export declare const JoinOrganizationRequestSchema: GenMessage<JoinOrganizationRequest>;
/**
 * @generated from message gitpod.v1.JoinOrganizationResponse
 */
export type JoinOrganizationResponse = Message<"gitpod.v1.JoinOrganizationResponse"> & {
    /**
     * member is the member that was created by joining the organization.
     *
     * @generated from field: gitpod.v1.OrganizationMember member = 1;
     */
    member?: OrganizationMember;
};
/**
 * Describes the message gitpod.v1.JoinOrganizationResponse.
 * Use `create(JoinOrganizationResponseSchema)` to create a new message.
 */
export declare const JoinOrganizationResponseSchema: GenMessage<JoinOrganizationResponse>;
/**
 * @generated from message gitpod.v1.LeaveOrganizationRequest
 */
export type LeaveOrganizationRequest = Message<"gitpod.v1.LeaveOrganizationRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
};
/**
 * Describes the message gitpod.v1.LeaveOrganizationRequest.
 * Use `create(LeaveOrganizationRequestSchema)` to create a new message.
 */
export declare const LeaveOrganizationRequestSchema: GenMessage<LeaveOrganizationRequest>;
/**
 * @generated from message gitpod.v1.LeaveOrganizationResponse
 */
export type LeaveOrganizationResponse = Message<"gitpod.v1.LeaveOrganizationResponse"> & {};
/**
 * Describes the message gitpod.v1.LeaveOrganizationResponse.
 * Use `create(LeaveOrganizationResponseSchema)` to create a new message.
 */
export declare const LeaveOrganizationResponseSchema: GenMessage<LeaveOrganizationResponse>;
/**
 * @generated from message gitpod.v1.GetOrganizationRequest
 */
export type GetOrganizationRequest = Message<"gitpod.v1.GetOrganizationRequest"> & {
    /**
     * organization_id is the unique identifier of the Organization to retreive.
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
};
/**
 * Describes the message gitpod.v1.GetOrganizationRequest.
 * Use `create(GetOrganizationRequestSchema)` to create a new message.
 */
export declare const GetOrganizationRequestSchema: GenMessage<GetOrganizationRequest>;
/**
 * @generated from message gitpod.v1.GetOrganizationResponse
 */
export type GetOrganizationResponse = Message<"gitpod.v1.GetOrganizationResponse"> & {
    /**
     * organization is the requested organization
     *
     * @generated from field: gitpod.v1.Organization organization = 1;
     */
    organization?: Organization;
};
/**
 * Describes the message gitpod.v1.GetOrganizationResponse.
 * Use `create(GetOrganizationResponseSchema)` to create a new message.
 */
export declare const GetOrganizationResponseSchema: GenMessage<GetOrganizationResponse>;
/**
 * @generated from message gitpod.v1.DeleteOrganizationRequest
 */
export type DeleteOrganizationRequest = Message<"gitpod.v1.DeleteOrganizationRequest"> & {
    /**
     * organization_id is the ID of the organization to delete
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
};
/**
 * Describes the message gitpod.v1.DeleteOrganizationRequest.
 * Use `create(DeleteOrganizationRequestSchema)` to create a new message.
 */
export declare const DeleteOrganizationRequestSchema: GenMessage<DeleteOrganizationRequest>;
/**
 * @generated from message gitpod.v1.DeleteOrganizationResponse
 */
export type DeleteOrganizationResponse = Message<"gitpod.v1.DeleteOrganizationResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteOrganizationResponse.
 * Use `create(DeleteOrganizationResponseSchema)` to create a new message.
 */
export declare const DeleteOrganizationResponseSchema: GenMessage<DeleteOrganizationResponse>;
/**
 * @generated from message gitpod.v1.ListMembersRequest
 */
export type ListMembersRequest = Message<"gitpod.v1.ListMembersRequest"> & {
    /**
     * pagination contains the pagination options for listing members
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * organization_id is the ID of the organization to list members for
     *
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * @generated from field: gitpod.v1.ListMembersRequest.Filter filter = 3;
     */
    filter?: ListMembersRequest_Filter;
    /**
     * sort specifies the order of results. When unspecified, the authenticated user is
     * returned first, followed by other members sorted by name ascending. When an explicit
     * sort is specified, results are sorted purely by the requested field without any
     * special handling for the authenticated user.
     *
     * @generated from field: gitpod.v1.ListMembersRequest.Sort sort = 4;
     */
    sort?: ListMembersRequest_Sort;
    /**
     * count controls whether the response includes a bounded total count.
     *
     * @generated from field: gitpod.v1.CountRequest count = 5;
     */
    count?: CountRequest;
};
/**
 * Describes the message gitpod.v1.ListMembersRequest.
 * Use `create(ListMembersRequestSchema)` to create a new message.
 */
export declare const ListMembersRequestSchema: GenMessage<ListMembersRequest>;
/**
 * @generated from message gitpod.v1.ListMembersRequest.Filter
 */
export type ListMembersRequest_Filter = Message<"gitpod.v1.ListMembersRequest.Filter"> & {
    /**
     * search performs case-insensitive search across member name and email
     *
     * @generated from field: string search = 1;
     */
    search: string;
    /**
     * status filters members by their user status
     *
     * @generated from field: repeated gitpod.v1.UserStatus statuses = 2;
     */
    statuses: UserStatus[];
    /**
     * roles filters members by their organization role
     *
     * @generated from field: repeated gitpod.v1.OrganizationRole roles = 3;
     */
    roles: OrganizationRole[];
    /**
     * user_ids filters the response to only members with the specified user IDs
     *
     * @generated from field: repeated string user_ids = 4;
     */
    userIds: string[];
    /**
     * exclude_group_ids excludes members who are already in any of the specified groups
     *
     * @generated from field: repeated string exclude_group_ids = 5;
     */
    excludeGroupIds: string[];
    /**
     * exclude_members_in_any_team excludes members who belong to any team in the organization
     *
     * @generated from field: bool exclude_members_in_any_team = 6;
     */
    excludeMembersInAnyTeam: boolean;
};
/**
 * Describes the message gitpod.v1.ListMembersRequest.Filter.
 * Use `create(ListMembersRequest_FilterSchema)` to create a new message.
 */
export declare const ListMembersRequest_FilterSchema: GenMessage<ListMembersRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListMembersRequest.Sort
 */
export type ListMembersRequest_Sort = Message<"gitpod.v1.ListMembersRequest.Sort"> & {
    /**
     * @generated from field: gitpod.v1.ListMembersRequest.SortField field = 1;
     */
    field: ListMembersRequest_SortField;
    /**
     * @generated from field: gitpod.v1.SortOrder order = 2;
     */
    order: SortOrder;
};
/**
 * Describes the message gitpod.v1.ListMembersRequest.Sort.
 * Use `create(ListMembersRequest_SortSchema)` to create a new message.
 */
export declare const ListMembersRequest_SortSchema: GenMessage<ListMembersRequest_Sort>;
/**
 * @generated from enum gitpod.v1.ListMembersRequest.SortField
 */
export declare enum ListMembersRequest_SortField {
    /**
     * @generated from enum value: SORT_FIELD_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Sort by member's display name
     *
     * @generated from enum value: SORT_FIELD_NAME = 1;
     */
    NAME = 1,
    /**
     * Sort by the date the member joined the organization
     *
     * @generated from enum value: SORT_FIELD_DATE_JOINED = 2;
     */
    DATE_JOINED = 2
}
/**
 * Describes the enum gitpod.v1.ListMembersRequest.SortField.
 */
export declare const ListMembersRequest_SortFieldSchema: GenEnum<ListMembersRequest_SortField>;
/**
 * @generated from message gitpod.v1.ListMembersResponse
 */
export type ListMembersResponse = Message<"gitpod.v1.ListMembersResponse"> & {
    /**
     * pagination contains the pagination options for listing members
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * members are the members of the organization
     *
     * @generated from field: repeated gitpod.v1.OrganizationMember members = 2;
     */
    members: OrganizationMember[];
    /**
     * count is the bounded total count of matching members, present only when
     * requested via CountRequest.include on the first page.
     *
     * @generated from field: gitpod.v1.CountResponse count = 3;
     */
    count?: CountResponse;
};
/**
 * Describes the message gitpod.v1.ListMembersResponse.
 * Use `create(ListMembersResponseSchema)` to create a new message.
 */
export declare const ListMembersResponseSchema: GenMessage<ListMembersResponse>;
/**
 * @generated from message gitpod.v1.SetRoleRequest
 */
export type SetRoleRequest = Message<"gitpod.v1.SetRoleRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: string user_id = 2;
     */
    userId: string;
    /**
     * @generated from field: gitpod.v1.OrganizationRole role = 3;
     */
    role: OrganizationRole;
};
/**
 * Describes the message gitpod.v1.SetRoleRequest.
 * Use `create(SetRoleRequestSchema)` to create a new message.
 */
export declare const SetRoleRequestSchema: GenMessage<SetRoleRequest>;
/**
 * @generated from message gitpod.v1.SetRoleResponse
 */
export type SetRoleResponse = Message<"gitpod.v1.SetRoleResponse"> & {};
/**
 * Describes the message gitpod.v1.SetRoleResponse.
 * Use `create(SetRoleResponseSchema)` to create a new message.
 */
export declare const SetRoleResponseSchema: GenMessage<SetRoleResponse>;
/**
 * @generated from message gitpod.v1.GetOrganizationInviteRequest
 */
export type GetOrganizationInviteRequest = Message<"gitpod.v1.GetOrganizationInviteRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
};
/**
 * Describes the message gitpod.v1.GetOrganizationInviteRequest.
 * Use `create(GetOrganizationInviteRequestSchema)` to create a new message.
 */
export declare const GetOrganizationInviteRequestSchema: GenMessage<GetOrganizationInviteRequest>;
/**
 * @generated from message gitpod.v1.GetOrganizationInviteResponse
 */
export type GetOrganizationInviteResponse = Message<"gitpod.v1.GetOrganizationInviteResponse"> & {
    /**
     * @generated from field: gitpod.v1.OrganizationInvite invite = 1;
     */
    invite?: OrganizationInvite;
};
/**
 * Describes the message gitpod.v1.GetOrganizationInviteResponse.
 * Use `create(GetOrganizationInviteResponseSchema)` to create a new message.
 */
export declare const GetOrganizationInviteResponseSchema: GenMessage<GetOrganizationInviteResponse>;
/**
 * @generated from message gitpod.v1.OrganizationInvite
 */
export type OrganizationInvite = Message<"gitpod.v1.OrganizationInvite"> & {
    /**
     * invite_id is the unique identifier of the invite to join the organization.
     * Use JoinOrganization with this ID to join the organization.
     *
     * @generated from field: string invite_id = 1;
     */
    inviteId: string;
};
/**
 * Describes the message gitpod.v1.OrganizationInvite.
 * Use `create(OrganizationInviteSchema)` to create a new message.
 */
export declare const OrganizationInviteSchema: GenMessage<OrganizationInvite>;
/**
 * @generated from message gitpod.v1.CreateOrganizationInviteRequest
 */
export type CreateOrganizationInviteRequest = Message<"gitpod.v1.CreateOrganizationInviteRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
};
/**
 * Describes the message gitpod.v1.CreateOrganizationInviteRequest.
 * Use `create(CreateOrganizationInviteRequestSchema)` to create a new message.
 */
export declare const CreateOrganizationInviteRequestSchema: GenMessage<CreateOrganizationInviteRequest>;
/**
 * @generated from message gitpod.v1.CreateOrganizationInviteResponse
 */
export type CreateOrganizationInviteResponse = Message<"gitpod.v1.CreateOrganizationInviteResponse"> & {
    /**
     * @generated from field: gitpod.v1.OrganizationInvite invite = 1;
     */
    invite?: OrganizationInvite;
};
/**
 * Describes the message gitpod.v1.CreateOrganizationInviteResponse.
 * Use `create(CreateOrganizationInviteResponseSchema)` to create a new message.
 */
export declare const CreateOrganizationInviteResponseSchema: GenMessage<CreateOrganizationInviteResponse>;
/**
 * @generated from message gitpod.v1.GetOrganizationInviteSummaryRequest
 */
export type GetOrganizationInviteSummaryRequest = Message<"gitpod.v1.GetOrganizationInviteSummaryRequest"> & {
    /**
     * @generated from field: string invite_id = 1;
     */
    inviteId: string;
};
/**
 * Describes the message gitpod.v1.GetOrganizationInviteSummaryRequest.
 * Use `create(GetOrganizationInviteSummaryRequestSchema)` to create a new message.
 */
export declare const GetOrganizationInviteSummaryRequestSchema: GenMessage<GetOrganizationInviteSummaryRequest>;
/**
 * @generated from message gitpod.v1.GetOrganizationInviteSummaryResponse
 */
export type GetOrganizationInviteSummaryResponse = Message<"gitpod.v1.GetOrganizationInviteSummaryResponse"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: string organization_name = 2;
     */
    organizationName: string;
    /**
     * @generated from field: int32 organization_member_count = 3;
     */
    organizationMemberCount: number;
};
/**
 * Describes the message gitpod.v1.GetOrganizationInviteSummaryResponse.
 * Use `create(GetOrganizationInviteSummaryResponseSchema)` to create a new message.
 */
export declare const GetOrganizationInviteSummaryResponseSchema: GenMessage<GetOrganizationInviteSummaryResponse>;
/**
 * @generated from message gitpod.v1.Organization
 */
export type Organization = Message<"gitpod.v1.Organization"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 3;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 4;
     */
    updatedAt?: Timestamp;
    /**
     * @generated from field: gitpod.v1.InviteDomains invite_domains = 5;
     */
    inviteDomains?: InviteDomains;
    /**
     * The tier of the organization - free, enterprise or core
     *
     * @generated from field: gitpod.v1.OrganizationTier tier = 6;
     */
    tier: OrganizationTier;
};
/**
 * Describes the message gitpod.v1.Organization.
 * Use `create(OrganizationSchema)` to create a new message.
 */
export declare const OrganizationSchema: GenMessage<Organization>;
/**
 * @generated from message gitpod.v1.OrganizationMember
 */
export type OrganizationMember = Message<"gitpod.v1.OrganizationMember"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: gitpod.v1.OrganizationRole role = 2;
     */
    role: OrganizationRole;
    /**
     * @generated from field: google.protobuf.Timestamp member_since = 3;
     */
    memberSince?: Timestamp;
    /**
     * @generated from field: string avatar_url = 4;
     */
    avatarUrl: string;
    /**
     * @generated from field: string full_name = 5;
     */
    fullName: string;
    /**
     * @generated from field: string email = 6;
     */
    email: string;
    /**
     * @generated from field: gitpod.v1.UserStatus status = 7;
     */
    status: UserStatus;
    /**
     * login_provider is the login provider the user uses to sign in
     *
     * @generated from field: string login_provider = 8;
     */
    loginProvider: string;
};
/**
 * Describes the message gitpod.v1.OrganizationMember.
 * Use `create(OrganizationMemberSchema)` to create a new message.
 */
export declare const OrganizationMemberSchema: GenMessage<OrganizationMember>;
/**
 * @generated from message gitpod.v1.InviteDomains
 */
export type InviteDomains = Message<"gitpod.v1.InviteDomains"> & {
    /**
     * domains is the list of domains that are allowed to join the organization
     *
     * @generated from field: repeated string domains = 1;
     */
    domains: string[];
};
/**
 * Describes the message gitpod.v1.InviteDomains.
 * Use `create(InviteDomainsSchema)` to create a new message.
 */
export declare const InviteDomainsSchema: GenMessage<InviteDomains>;
/**
 * @generated from message gitpod.v1.CreateSSOConfigurationRequest
 */
export type CreateSSOConfigurationRequest = Message<"gitpod.v1.CreateSSOConfigurationRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * client_id is the client ID of the OIDC application set on the IdP
     *
     * @generated from field: string client_id = 2;
     */
    clientId: string;
    /**
     * client_secret is the client secret of the OIDC application set on the IdP
     *
     * @generated from field: string client_secret = 3;
     */
    clientSecret: string;
    /**
     * issuer_url is the URL of the IdP issuer
     *
     * @generated from field: string issuer_url = 4;
     */
    issuerUrl: string;
    /**
     * email_domain is the domain that is allowed to sign in to the organization
     *
     * @generated from field: optional string email_domain = 5;
     */
    emailDomain?: string;
    /**
     * @generated from field: repeated string email_domains = 6;
     */
    emailDomains: string[];
    /**
     * @generated from field: string display_name = 7;
     */
    displayName: string;
    /**
     * additional_scopes are extra OIDC scopes to request from the identity provider during sign-in.
     * These are appended to the default scopes (openid, email, profile).
     *
     * @generated from field: repeated string additional_scopes = 8;
     */
    additionalScopes: string[];
    /**
     * claims_expression is an optional CEL expression evaluated against OIDC token claims during login.
     * When set, the expression must evaluate to true for the login to succeed.
     * Example: `claims.email_verified && claims.email.endsWith("@example.com")`
     *
     * @generated from field: optional string claims_expression = 9;
     */
    claimsExpression?: string;
};
/**
 * Describes the message gitpod.v1.CreateSSOConfigurationRequest.
 * Use `create(CreateSSOConfigurationRequestSchema)` to create a new message.
 */
export declare const CreateSSOConfigurationRequestSchema: GenMessage<CreateSSOConfigurationRequest>;
/**
 * @generated from message gitpod.v1.CreateSSOConfigurationResponse
 */
export type CreateSSOConfigurationResponse = Message<"gitpod.v1.CreateSSOConfigurationResponse"> & {
    /**
     * sso_configuration is the created SSO configuration
     *
     * @generated from field: gitpod.v1.SSOConfiguration sso_configuration = 1;
     */
    ssoConfiguration?: SSOConfiguration;
};
/**
 * Describes the message gitpod.v1.CreateSSOConfigurationResponse.
 * Use `create(CreateSSOConfigurationResponseSchema)` to create a new message.
 */
export declare const CreateSSOConfigurationResponseSchema: GenMessage<CreateSSOConfigurationResponse>;
/**
 * @generated from message gitpod.v1.SSOConfiguration
 */
export type SSOConfiguration = Message<"gitpod.v1.SSOConfiguration"> & {
    /**
     * id is the unique identifier of the SSO configuration
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * client_id is the client ID of the OIDC application set on the IdP
     *
     * @generated from field: string client_id = 3;
     */
    clientId: string;
    /**
     * issuer_url is the URL of the IdP issuer
     *
     * @generated from field: string issuer_url = 4;
     */
    issuerUrl: string;
    /**
     * state is the state of the SSO configuration
     *
     * @generated from field: gitpod.v1.SSOConfigurationState state = 5;
     */
    state: SSOConfigurationState;
    /**
     * claims are key/value pairs that defines a mapping of claims issued by the IdP.
     *
     * @generated from field: map<string, string> claims = 6;
     */
    claims: {
        [key: string]: string;
    };
    /**
     * @generated from field: string email_domain = 7;
     */
    emailDomain: string;
    /**
     * provider_type defines the type of the SSO configuration
     *
     * @generated from field: gitpod.v1.SSOConfiguration.ProviderType provider_type = 8;
     */
    providerType: SSOConfiguration_ProviderType;
    /**
     * @generated from field: repeated string email_domains = 9;
     */
    emailDomains: string[];
    /**
     * @generated from field: string display_name = 10;
     */
    displayName: string;
    /**
     * additional_scopes are extra OIDC scopes requested from the identity provider during sign-in.
     *
     * @generated from field: repeated string additional_scopes = 11;
     */
    additionalScopes: string[];
    /**
     * claims_expression is a CEL (Common Expression Language) expression evaluated against
     * the OIDC token claims during login. When set, the expression must evaluate to true
     * for the login to succeed. The expression has access to a `claims` variable containing
     * all token claims as a map. Example: `claims.email_verified && claims.email.endsWith("@example.com")`
     *
     * @generated from field: string claims_expression = 12;
     */
    claimsExpression: string;
};
/**
 * Describes the message gitpod.v1.SSOConfiguration.
 * Use `create(SSOConfigurationSchema)` to create a new message.
 */
export declare const SSOConfigurationSchema: GenMessage<SSOConfiguration>;
/**
 * @generated from enum gitpod.v1.SSOConfiguration.ProviderType
 */
export declare enum SSOConfiguration_ProviderType {
    /**
     * @generated from enum value: PROVIDER_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PROVIDER_TYPE_BUILTIN = 1;
     */
    BUILTIN = 1,
    /**
     * @generated from enum value: PROVIDER_TYPE_CUSTOM = 2;
     */
    CUSTOM = 2
}
/**
 * Describes the enum gitpod.v1.SSOConfiguration.ProviderType.
 */
export declare const SSOConfiguration_ProviderTypeSchema: GenEnum<SSOConfiguration_ProviderType>;
/**
 * @generated from message gitpod.v1.GetSSOConfigurationRequest
 */
export type GetSSOConfigurationRequest = Message<"gitpod.v1.GetSSOConfigurationRequest"> & {
    /**
     * sso_configuration_id is the ID of the SSO configuration to get
     *
     * @generated from field: string sso_configuration_id = 1;
     */
    ssoConfigurationId: string;
};
/**
 * Describes the message gitpod.v1.GetSSOConfigurationRequest.
 * Use `create(GetSSOConfigurationRequestSchema)` to create a new message.
 */
export declare const GetSSOConfigurationRequestSchema: GenMessage<GetSSOConfigurationRequest>;
/**
 * @generated from message gitpod.v1.GetSSOConfigurationResponse
 */
export type GetSSOConfigurationResponse = Message<"gitpod.v1.GetSSOConfigurationResponse"> & {
    /**
     * sso_configuration is the SSO configuration identified by the ID
     *
     * @generated from field: gitpod.v1.SSOConfiguration sso_configuration = 1;
     */
    ssoConfiguration?: SSOConfiguration;
};
/**
 * Describes the message gitpod.v1.GetSSOConfigurationResponse.
 * Use `create(GetSSOConfigurationResponseSchema)` to create a new message.
 */
export declare const GetSSOConfigurationResponseSchema: GenMessage<GetSSOConfigurationResponse>;
/**
 * @generated from message gitpod.v1.ListSSOConfigurationsRequest
 */
export type ListSSOConfigurationsRequest = Message<"gitpod.v1.ListSSOConfigurationsRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * organization_id is the ID of the organization to list SSO configurations for.
     *
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
};
/**
 * Describes the message gitpod.v1.ListSSOConfigurationsRequest.
 * Use `create(ListSSOConfigurationsRequestSchema)` to create a new message.
 */
export declare const ListSSOConfigurationsRequestSchema: GenMessage<ListSSOConfigurationsRequest>;
/**
 * @generated from message gitpod.v1.ListSSOConfigurationsResponse
 */
export type ListSSOConfigurationsResponse = Message<"gitpod.v1.ListSSOConfigurationsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * sso_configurations are the SSO configurations for the organization
     *
     * @generated from field: repeated gitpod.v1.SSOConfiguration sso_configurations = 2;
     */
    ssoConfigurations: SSOConfiguration[];
};
/**
 * Describes the message gitpod.v1.ListSSOConfigurationsResponse.
 * Use `create(ListSSOConfigurationsResponseSchema)` to create a new message.
 */
export declare const ListSSOConfigurationsResponseSchema: GenMessage<ListSSOConfigurationsResponse>;
/**
 * @generated from message gitpod.v1.UpdateSSOConfigurationRequest
 */
export type UpdateSSOConfigurationRequest = Message<"gitpod.v1.UpdateSSOConfigurationRequest"> & {
    /**
     * sso_configuration_id is the ID of the SSO configuration to update
     *
     * @generated from field: string sso_configuration_id = 1;
     */
    ssoConfigurationId: string;
    /**
     * client_id is the client ID of the SSO provider
     *
     * @generated from field: optional string client_id = 2;
     */
    clientId?: string;
    /**
     * client_secret is the client secret of the SSO provider
     *
     * @generated from field: optional string client_secret = 3;
     */
    clientSecret?: string;
    /**
     * issuer_url is the URL of the IdP issuer
     *
     * @generated from field: optional string issuer_url = 4;
     */
    issuerUrl?: string;
    /**
     * state is the state of the SSO configuration
     *
     * @generated from field: optional gitpod.v1.SSOConfigurationState state = 5;
     */
    state?: SSOConfigurationState;
    /**
     * claims are key/value pairs that defines a mapping of claims issued by the IdP.
     *
     * @generated from field: map<string, string> claims = 6;
     */
    claims: {
        [key: string]: string;
    };
    /**
     * @generated from field: optional string email_domain = 7;
     */
    emailDomain?: string;
    /**
     * @generated from field: repeated string email_domains = 9;
     */
    emailDomains: string[];
    /**
     * @generated from field: optional string display_name = 10;
     */
    displayName?: string;
    /**
     * additional_scopes replaces the configured OIDC scopes when present.
     * When absent (nil), scopes are left unchanged.
     * When present with an empty scopes list, all additional scopes are cleared.
     *
     * @generated from field: optional gitpod.v1.AdditionalScopesUpdate additional_scopes = 11;
     */
    additionalScopes?: AdditionalScopesUpdate;
    /**
     * claims_expression is a CEL expression evaluated against OIDC token claims during login.
     * When set, the expression must evaluate to true for the login to succeed.
     * When present with an empty string, the expression is cleared.
     *
     * @generated from field: optional string claims_expression = 12;
     */
    claimsExpression?: string;
};
/**
 * Describes the message gitpod.v1.UpdateSSOConfigurationRequest.
 * Use `create(UpdateSSOConfigurationRequestSchema)` to create a new message.
 */
export declare const UpdateSSOConfigurationRequestSchema: GenMessage<UpdateSSOConfigurationRequest>;
/**
 * AdditionalScopesUpdate wraps a list of OIDC scopes so that the update request
 * can distinguish "not changing scopes" (field absent) from "clearing all scopes"
 * (field present, empty list).
 *
 * @generated from message gitpod.v1.AdditionalScopesUpdate
 */
export type AdditionalScopesUpdate = Message<"gitpod.v1.AdditionalScopesUpdate"> & {
    /**
     * @generated from field: repeated string scopes = 1;
     */
    scopes: string[];
};
/**
 * Describes the message gitpod.v1.AdditionalScopesUpdate.
 * Use `create(AdditionalScopesUpdateSchema)` to create a new message.
 */
export declare const AdditionalScopesUpdateSchema: GenMessage<AdditionalScopesUpdate>;
/**
 * @generated from message gitpod.v1.UpdateSSOConfigurationResponse
 */
export type UpdateSSOConfigurationResponse = Message<"gitpod.v1.UpdateSSOConfigurationResponse"> & {};
/**
 * Describes the message gitpod.v1.UpdateSSOConfigurationResponse.
 * Use `create(UpdateSSOConfigurationResponseSchema)` to create a new message.
 */
export declare const UpdateSSOConfigurationResponseSchema: GenMessage<UpdateSSOConfigurationResponse>;
/**
 * @generated from message gitpod.v1.DeleteSSOConfigurationRequest
 */
export type DeleteSSOConfigurationRequest = Message<"gitpod.v1.DeleteSSOConfigurationRequest"> & {
    /**
     * @generated from field: string sso_configuration_id = 1;
     */
    ssoConfigurationId: string;
};
/**
 * Describes the message gitpod.v1.DeleteSSOConfigurationRequest.
 * Use `create(DeleteSSOConfigurationRequestSchema)` to create a new message.
 */
export declare const DeleteSSOConfigurationRequestSchema: GenMessage<DeleteSSOConfigurationRequest>;
/**
 * @generated from message gitpod.v1.DeleteSSOConfigurationResponse
 */
export type DeleteSSOConfigurationResponse = Message<"gitpod.v1.DeleteSSOConfigurationResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteSSOConfigurationResponse.
 * Use `create(DeleteSSOConfigurationResponseSchema)` to create a new message.
 */
export declare const DeleteSSOConfigurationResponseSchema: GenMessage<DeleteSSOConfigurationResponse>;
/**
 * SCIMConfiguration represents a SCIM 2.0 provisioning configuration
 *
 * @generated from message gitpod.v1.SCIMConfiguration
 */
export type SCIMConfiguration = Message<"gitpod.v1.SCIMConfiguration"> & {
    /**
     * id is the unique identifier of the SCIM configuration
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * organization_id is the ID of the organization this SCIM configuration belongs to
     *
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * name is a human-readable name for the SCIM configuration
     *
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * enabled indicates if SCIM provisioning is active
     *
     * @generated from field: bool enabled = 4;
     */
    enabled: boolean;
    /**
     * sso_configuration_id is the linked SSO configuration (optional)
     *
     * @generated from field: string sso_configuration_id = 5;
     */
    ssoConfigurationId: string;
    /**
     * created_at is when the SCIM configuration was created
     *
     * @generated from field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
    /**
     * updated_at is when the SCIM configuration was last updated
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 7;
     */
    updatedAt?: Timestamp;
    /**
     * token_expires_at is when the current SCIM token expires
     *
     * @generated from field: google.protobuf.Timestamp token_expires_at = 8;
     */
    tokenExpiresAt?: Timestamp;
    /**
     * allow_unverified_email_account_linking allows SCIM to link provisioned users to existing accounts when the identity provider does not mark the email address as verified
     *
     * @generated from field: bool allow_unverified_email_account_linking = 9;
     */
    allowUnverifiedEmailAccountLinking: boolean;
};
/**
 * Describes the message gitpod.v1.SCIMConfiguration.
 * Use `create(SCIMConfigurationSchema)` to create a new message.
 */
export declare const SCIMConfigurationSchema: GenMessage<SCIMConfiguration>;
/**
 * @generated from message gitpod.v1.CreateSCIMConfigurationRequest
 */
export type CreateSCIMConfigurationRequest = Message<"gitpod.v1.CreateSCIMConfigurationRequest"> & {
    /**
     * organization_id is the ID of the organization to create the SCIM configuration for
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * name is a human-readable name for the SCIM configuration
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * sso_configuration_id is the SSO configuration to link (required for user provisioning)
     *
     * @generated from field: string sso_configuration_id = 3;
     */
    ssoConfigurationId: string;
    /**
     * token_expires_in is the duration until the token expires.
     * Defaults to 1 year. Minimum 1 day, maximum 2 years.
     *
     * @generated from field: optional google.protobuf.Duration token_expires_in = 4;
     */
    tokenExpiresIn?: Duration;
    /**
     * allow_unverified_email_account_linking allows SCIM to link provisioned users to existing accounts when the identity provider does not mark the email address as verified
     *
     * @generated from field: optional bool allow_unverified_email_account_linking = 5;
     */
    allowUnverifiedEmailAccountLinking?: boolean;
};
/**
 * Describes the message gitpod.v1.CreateSCIMConfigurationRequest.
 * Use `create(CreateSCIMConfigurationRequestSchema)` to create a new message.
 */
export declare const CreateSCIMConfigurationRequestSchema: GenMessage<CreateSCIMConfigurationRequest>;
/**
 * @generated from message gitpod.v1.CreateSCIMConfigurationResponse
 */
export type CreateSCIMConfigurationResponse = Message<"gitpod.v1.CreateSCIMConfigurationResponse"> & {
    /**
     * scim_configuration is the created SCIM configuration
     *
     * @generated from field: gitpod.v1.SCIMConfiguration scim_configuration = 1;
     */
    scimConfiguration?: SCIMConfiguration;
    /**
     * token is the bearer token for SCIM API authentication.
     * This is only returned once during creation - store it securely.
     *
     * @generated from field: string token = 2;
     */
    token: string;
    /**
     * token_expires_at is when the token will expire
     *
     * @generated from field: google.protobuf.Timestamp token_expires_at = 3;
     */
    tokenExpiresAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.CreateSCIMConfigurationResponse.
 * Use `create(CreateSCIMConfigurationResponseSchema)` to create a new message.
 */
export declare const CreateSCIMConfigurationResponseSchema: GenMessage<CreateSCIMConfigurationResponse>;
/**
 * @generated from message gitpod.v1.GetSCIMConfigurationRequest
 */
export type GetSCIMConfigurationRequest = Message<"gitpod.v1.GetSCIMConfigurationRequest"> & {
    /**
     * scim_configuration_id is the ID of the SCIM configuration to get
     *
     * @generated from field: string scim_configuration_id = 1;
     */
    scimConfigurationId: string;
};
/**
 * Describes the message gitpod.v1.GetSCIMConfigurationRequest.
 * Use `create(GetSCIMConfigurationRequestSchema)` to create a new message.
 */
export declare const GetSCIMConfigurationRequestSchema: GenMessage<GetSCIMConfigurationRequest>;
/**
 * @generated from message gitpod.v1.GetSCIMConfigurationResponse
 */
export type GetSCIMConfigurationResponse = Message<"gitpod.v1.GetSCIMConfigurationResponse"> & {
    /**
     * scim_configuration is the SCIM configuration identified by the ID
     *
     * @generated from field: gitpod.v1.SCIMConfiguration scim_configuration = 1;
     */
    scimConfiguration?: SCIMConfiguration;
};
/**
 * Describes the message gitpod.v1.GetSCIMConfigurationResponse.
 * Use `create(GetSCIMConfigurationResponseSchema)` to create a new message.
 */
export declare const GetSCIMConfigurationResponseSchema: GenMessage<GetSCIMConfigurationResponse>;
/**
 * @generated from message gitpod.v1.ListSCIMConfigurationsRequest
 */
export type ListSCIMConfigurationsRequest = Message<"gitpod.v1.ListSCIMConfigurationsRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
};
/**
 * Describes the message gitpod.v1.ListSCIMConfigurationsRequest.
 * Use `create(ListSCIMConfigurationsRequestSchema)` to create a new message.
 */
export declare const ListSCIMConfigurationsRequestSchema: GenMessage<ListSCIMConfigurationsRequest>;
/**
 * @generated from message gitpod.v1.ListSCIMConfigurationsResponse
 */
export type ListSCIMConfigurationsResponse = Message<"gitpod.v1.ListSCIMConfigurationsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * scim_configurations are the SCIM configurations for the organization
     *
     * @generated from field: repeated gitpod.v1.SCIMConfiguration scim_configurations = 2;
     */
    scimConfigurations: SCIMConfiguration[];
};
/**
 * Describes the message gitpod.v1.ListSCIMConfigurationsResponse.
 * Use `create(ListSCIMConfigurationsResponseSchema)` to create a new message.
 */
export declare const ListSCIMConfigurationsResponseSchema: GenMessage<ListSCIMConfigurationsResponse>;
/**
 * @generated from message gitpod.v1.UpdateSCIMConfigurationRequest
 */
export type UpdateSCIMConfigurationRequest = Message<"gitpod.v1.UpdateSCIMConfigurationRequest"> & {
    /**
     * scim_configuration_id is the ID of the SCIM configuration to update
     *
     * @generated from field: string scim_configuration_id = 1;
     */
    scimConfigurationId: string;
    /**
     * name is a human-readable name for the SCIM configuration
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * enabled controls whether SCIM provisioning is active
     *
     * @generated from field: optional bool enabled = 3;
     */
    enabled?: boolean;
    /**
     * sso_configuration_id is the SSO configuration to link
     *
     * @generated from field: optional string sso_configuration_id = 4;
     */
    ssoConfigurationId?: string;
    /**
     * allow_unverified_email_account_linking allows SCIM to link provisioned users to existing accounts when the identity provider does not mark the email address as verified
     *
     * @generated from field: optional bool allow_unverified_email_account_linking = 5;
     */
    allowUnverifiedEmailAccountLinking?: boolean;
};
/**
 * Describes the message gitpod.v1.UpdateSCIMConfigurationRequest.
 * Use `create(UpdateSCIMConfigurationRequestSchema)` to create a new message.
 */
export declare const UpdateSCIMConfigurationRequestSchema: GenMessage<UpdateSCIMConfigurationRequest>;
/**
 * @generated from message gitpod.v1.UpdateSCIMConfigurationResponse
 */
export type UpdateSCIMConfigurationResponse = Message<"gitpod.v1.UpdateSCIMConfigurationResponse"> & {
    /**
     * scim_configuration is the updated SCIM configuration
     *
     * @generated from field: gitpod.v1.SCIMConfiguration scim_configuration = 1;
     */
    scimConfiguration?: SCIMConfiguration;
};
/**
 * Describes the message gitpod.v1.UpdateSCIMConfigurationResponse.
 * Use `create(UpdateSCIMConfigurationResponseSchema)` to create a new message.
 */
export declare const UpdateSCIMConfigurationResponseSchema: GenMessage<UpdateSCIMConfigurationResponse>;
/**
 * @generated from message gitpod.v1.DeleteSCIMConfigurationRequest
 */
export type DeleteSCIMConfigurationRequest = Message<"gitpod.v1.DeleteSCIMConfigurationRequest"> & {
    /**
     * scim_configuration_id is the ID of the SCIM configuration to delete
     *
     * @generated from field: string scim_configuration_id = 1;
     */
    scimConfigurationId: string;
};
/**
 * Describes the message gitpod.v1.DeleteSCIMConfigurationRequest.
 * Use `create(DeleteSCIMConfigurationRequestSchema)` to create a new message.
 */
export declare const DeleteSCIMConfigurationRequestSchema: GenMessage<DeleteSCIMConfigurationRequest>;
/**
 * @generated from message gitpod.v1.DeleteSCIMConfigurationResponse
 */
export type DeleteSCIMConfigurationResponse = Message<"gitpod.v1.DeleteSCIMConfigurationResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteSCIMConfigurationResponse.
 * Use `create(DeleteSCIMConfigurationResponseSchema)` to create a new message.
 */
export declare const DeleteSCIMConfigurationResponseSchema: GenMessage<DeleteSCIMConfigurationResponse>;
/**
 * @generated from message gitpod.v1.RegenerateSCIMTokenRequest
 */
export type RegenerateSCIMTokenRequest = Message<"gitpod.v1.RegenerateSCIMTokenRequest"> & {
    /**
     * scim_configuration_id is the ID of the SCIM configuration to regenerate token for
     *
     * @generated from field: string scim_configuration_id = 1;
     */
    scimConfigurationId: string;
    /**
     * token_expires_in is the duration until the new token expires.
     * If not specified, uses the same duration as the previous token.
     *
     * @generated from field: optional google.protobuf.Duration token_expires_in = 2;
     */
    tokenExpiresIn?: Duration;
};
/**
 * Describes the message gitpod.v1.RegenerateSCIMTokenRequest.
 * Use `create(RegenerateSCIMTokenRequestSchema)` to create a new message.
 */
export declare const RegenerateSCIMTokenRequestSchema: GenMessage<RegenerateSCIMTokenRequest>;
/**
 * @generated from message gitpod.v1.RegenerateSCIMTokenResponse
 */
export type RegenerateSCIMTokenResponse = Message<"gitpod.v1.RegenerateSCIMTokenResponse"> & {
    /**
     * token is the new bearer token for SCIM API authentication.
     * This invalidates the previous token - store it securely.
     *
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * token_expires_at is when the new token will expire
     *
     * @generated from field: google.protobuf.Timestamp token_expires_at = 2;
     */
    tokenExpiresAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.RegenerateSCIMTokenResponse.
 * Use `create(RegenerateSCIMTokenResponseSchema)` to create a new message.
 */
export declare const RegenerateSCIMTokenResponseSchema: GenMessage<RegenerateSCIMTokenResponse>;
/**
 * @generated from message gitpod.v1.DomainVerification
 */
export type DomainVerification = Message<"gitpod.v1.DomainVerification"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * @generated from field: string domain = 3;
     */
    domain: string;
    /**
     * @generated from field: gitpod.v1.DomainVerificationState state = 4;
     */
    state: DomainVerificationState;
    /**
     * @generated from field: google.protobuf.Timestamp verified_at = 5;
     */
    verifiedAt?: Timestamp;
    /**
     * @generated from field: string verification_token = 6;
     */
    verificationToken: string;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 7;
     */
    createdAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.DomainVerification.
 * Use `create(DomainVerificationSchema)` to create a new message.
 */
export declare const DomainVerificationSchema: GenMessage<DomainVerification>;
/**
 * @generated from message gitpod.v1.CreateDomainVerificationRequest
 */
export type CreateDomainVerificationRequest = Message<"gitpod.v1.CreateDomainVerificationRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: string domain = 2;
     */
    domain: string;
};
/**
 * Describes the message gitpod.v1.CreateDomainVerificationRequest.
 * Use `create(CreateDomainVerificationRequestSchema)` to create a new message.
 */
export declare const CreateDomainVerificationRequestSchema: GenMessage<CreateDomainVerificationRequest>;
/**
 * @generated from message gitpod.v1.CreateDomainVerificationResponse
 */
export type CreateDomainVerificationResponse = Message<"gitpod.v1.CreateDomainVerificationResponse"> & {
    /**
     * @generated from field: gitpod.v1.DomainVerification domain_verification = 1;
     */
    domainVerification?: DomainVerification;
};
/**
 * Describes the message gitpod.v1.CreateDomainVerificationResponse.
 * Use `create(CreateDomainVerificationResponseSchema)` to create a new message.
 */
export declare const CreateDomainVerificationResponseSchema: GenMessage<CreateDomainVerificationResponse>;
/**
 * @generated from message gitpod.v1.GetDomainVerificationRequest
 */
export type GetDomainVerificationRequest = Message<"gitpod.v1.GetDomainVerificationRequest"> & {
    /**
     * @generated from field: string domain_verification_id = 1;
     */
    domainVerificationId: string;
};
/**
 * Describes the message gitpod.v1.GetDomainVerificationRequest.
 * Use `create(GetDomainVerificationRequestSchema)` to create a new message.
 */
export declare const GetDomainVerificationRequestSchema: GenMessage<GetDomainVerificationRequest>;
/**
 * @generated from message gitpod.v1.GetDomainVerificationResponse
 */
export type GetDomainVerificationResponse = Message<"gitpod.v1.GetDomainVerificationResponse"> & {
    /**
     * @generated from field: gitpod.v1.DomainVerification domain_verification = 1;
     */
    domainVerification?: DomainVerification;
};
/**
 * Describes the message gitpod.v1.GetDomainVerificationResponse.
 * Use `create(GetDomainVerificationResponseSchema)` to create a new message.
 */
export declare const GetDomainVerificationResponseSchema: GenMessage<GetDomainVerificationResponse>;
/**
 * @generated from message gitpod.v1.ListDomainVerificationsRequest
 */
export type ListDomainVerificationsRequest = Message<"gitpod.v1.ListDomainVerificationsRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 2;
     */
    pagination?: PaginationRequest;
};
/**
 * Describes the message gitpod.v1.ListDomainVerificationsRequest.
 * Use `create(ListDomainVerificationsRequestSchema)` to create a new message.
 */
export declare const ListDomainVerificationsRequestSchema: GenMessage<ListDomainVerificationsRequest>;
/**
 * @generated from message gitpod.v1.ListDomainVerificationsResponse
 */
export type ListDomainVerificationsResponse = Message<"gitpod.v1.ListDomainVerificationsResponse"> & {
    /**
     * @generated from field: repeated gitpod.v1.DomainVerification domain_verifications = 1;
     */
    domainVerifications: DomainVerification[];
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 2;
     */
    pagination?: PaginationResponse;
};
/**
 * Describes the message gitpod.v1.ListDomainVerificationsResponse.
 * Use `create(ListDomainVerificationsResponseSchema)` to create a new message.
 */
export declare const ListDomainVerificationsResponseSchema: GenMessage<ListDomainVerificationsResponse>;
/**
 * @generated from message gitpod.v1.VerifyDomainRequest
 */
export type VerifyDomainRequest = Message<"gitpod.v1.VerifyDomainRequest"> & {
    /**
     * @generated from field: string domain_verification_id = 1;
     */
    domainVerificationId: string;
};
/**
 * Describes the message gitpod.v1.VerifyDomainRequest.
 * Use `create(VerifyDomainRequestSchema)` to create a new message.
 */
export declare const VerifyDomainRequestSchema: GenMessage<VerifyDomainRequest>;
/**
 * @generated from message gitpod.v1.VerifyDomainResponse
 */
export type VerifyDomainResponse = Message<"gitpod.v1.VerifyDomainResponse"> & {
    /**
     * @generated from field: gitpod.v1.DomainVerification domain_verification = 1;
     */
    domainVerification?: DomainVerification;
};
/**
 * Describes the message gitpod.v1.VerifyDomainResponse.
 * Use `create(VerifyDomainResponseSchema)` to create a new message.
 */
export declare const VerifyDomainResponseSchema: GenMessage<VerifyDomainResponse>;
/**
 * @generated from message gitpod.v1.DeleteDomainVerificationRequest
 */
export type DeleteDomainVerificationRequest = Message<"gitpod.v1.DeleteDomainVerificationRequest"> & {
    /**
     * @generated from field: string domain_verification_id = 1;
     */
    domainVerificationId: string;
};
/**
 * Describes the message gitpod.v1.DeleteDomainVerificationRequest.
 * Use `create(DeleteDomainVerificationRequestSchema)` to create a new message.
 */
export declare const DeleteDomainVerificationRequestSchema: GenMessage<DeleteDomainVerificationRequest>;
/**
 * @generated from message gitpod.v1.DeleteDomainVerificationResponse
 */
export type DeleteDomainVerificationResponse = Message<"gitpod.v1.DeleteDomainVerificationResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteDomainVerificationResponse.
 * Use `create(DeleteDomainVerificationResponseSchema)` to create a new message.
 */
export declare const DeleteDomainVerificationResponseSchema: GenMessage<DeleteDomainVerificationResponse>;
/**
 * OrganizationTierFailedPreconditionDetails is a precondition failure details message used when a feature requires a higher Organization tier.
 *
 * @generated from message gitpod.v1.OrganizationTierFailedPreconditionDetails
 */
export type OrganizationTierFailedPreconditionDetails = Message<"gitpod.v1.OrganizationTierFailedPreconditionDetails"> & {
    /**
     * message is the message to display to the user
     *
     * @generated from field: string message = 1;
     */
    message: string;
    /**
     * required_tier is the tier that is required to use the feature
     *
     * @generated from field: gitpod.v1.OrganizationTier required_tier = 2;
     */
    requiredTier: OrganizationTier;
};
/**
 * Describes the message gitpod.v1.OrganizationTierFailedPreconditionDetails.
 * Use `create(OrganizationTierFailedPreconditionDetailsSchema)` to create a new message.
 */
export declare const OrganizationTierFailedPreconditionDetailsSchema: GenMessage<OrganizationTierFailedPreconditionDetails>;
/**
 * @generated from message gitpod.v1.OrganizationPolicies
 */
export type OrganizationPolicies = Message<"gitpod.v1.OrganizationPolicies"> & {
    /**
     * organization_id is the ID of the organization
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * maximum_environment_timeout controls the maximum timeout allowed for environments in seconds.
     * 0 means no limit (never). Minimum duration is 30 minutes (1800 seconds).
     *
     * @generated from field: google.protobuf.Duration maximum_environment_timeout = 2;
     */
    maximumEnvironmentTimeout?: Duration;
    /**
     * members_require_projects controls whether environments can only be created from projects by non-admin users
     *
     * @generated from field: bool members_require_projects = 3;
     */
    membersRequireProjects: boolean;
    /**
     * members_create_projects controls whether members can create projects
     *
     * @generated from field: bool members_create_projects = 4;
     */
    membersCreateProjects: boolean;
    /**
     * allowed_editor_ids is the list of editor IDs that are allowed to be used in the organization
     *
     * @generated from field: repeated string allowed_editor_ids = 5;
     */
    allowedEditorIds: string[];
    /**
     * default_editor_id is the default editor ID to be used when a user doesn't specify one
     *
     * @generated from field: string default_editor_id = 6;
     */
    defaultEditorId: string;
    /**
     * allow_local_runners controls whether local runners are allowed to be used in the organization
     *
     * @generated from field: bool allow_local_runners = 7;
     */
    allowLocalRunners: boolean;
    /**
     * maximum_running_environments_per_user limits simultaneously running environments per user
     *
     * @generated from field: int64 maximum_running_environments_per_user = 8;
     */
    maximumRunningEnvironmentsPerUser: bigint;
    /**
     * maximum_environments_per_user limits total environments (running or stopped) per user
     *
     * @generated from field: int64 maximum_environments_per_user = 9;
     */
    maximumEnvironmentsPerUser: bigint;
    /**
     * default_environment_image is the default container image when none is defined in repo
     *
     * @generated from field: string default_environment_image = 10;
     */
    defaultEnvironmentImage: string;
    /**
     * port_sharing_disabled controls whether user-initiated port sharing is disabled in the organization.
     * System ports (VS Code Browser, agents) are always exempt from this policy.
     *
     * @generated from field: bool port_sharing_disabled = 11;
     */
    portSharingDisabled: boolean;
    /**
     * delete_archived_environments_after controls how long archived environments are kept before automatic deletion.
     * 0 means no automatic deletion. Maximum duration is 4 weeks (2419200 seconds).
     *
     * @generated from field: google.protobuf.Duration delete_archived_environments_after = 12;
     */
    deleteArchivedEnvironmentsAfter?: Duration;
    /**
     * agent_policy contains agent-specific policy settings
     *
     * @generated from field: gitpod.v1.AgentPolicy agent_policy = 13;
     */
    agentPolicy?: AgentPolicy;
    /**
     * maximum_environment_lifetime controls for how long environments are allowed to be reused.
     * 0 means no maximum lifetime. Maximum duration is 180 days (15552000 seconds).
     *
     * @generated from field: google.protobuf.Duration maximum_environment_lifetime = 14;
     */
    maximumEnvironmentLifetime?: Duration;
    /**
     * require_custom_domain_access controls whether users must access via custom domain
     * when one is configured. When true, access via app.gitpod.io is blocked.
     *
     * @generated from field: bool require_custom_domain_access = 15;
     */
    requireCustomDomainAccess: boolean;
    /**
     * editor_version_restrictions restricts which editor versions can be used.
     * Maps editor ID to version policy, editor_version_restrictions not set means no restrictions.
     * If empty or not set for an editor, we will use the latest version of the editor
     *
     * @generated from field: map<string, gitpod.v1.EditorVersionPolicy> editor_version_restrictions = 16;
     */
    editorVersionRestrictions: {
        [key: string]: EditorVersionPolicy;
    };
    /**
     * security_agent_policy contains security agent configuration for the organization.
     * When configured, security agents are automatically deployed to all environments.
     *
     * @generated from field: gitpod.v1.SecurityAgentPolicy security_agent_policy = 17;
     */
    securityAgentPolicy?: SecurityAgentPolicy;
    /**
     * restrict_account_creation_to_scim controls whether account creation is restricted to SCIM-provisioned users only.
     * When true and SCIM is configured for the organization, only users provisioned via SCIM can create accounts.
     *
     * @generated from field: bool restrict_account_creation_to_scim = 18;
     */
    restrictAccountCreationToScim: boolean;
    /**
     * veto_exec_policy contains the veto exec policy for environments.
     *
     * @generated from field: gitpod.v1.VetoExecPolicy veto_exec_policy = 20;
     */
    vetoExecPolicy?: VetoExecPolicy;
    /**
     * maximum_environment_lifetime_strict controls whether environments past their
     * lockdown_at timestamp are blocked from starting.
     *
     * @generated from field: bool maximum_environment_lifetime_strict = 21;
     */
    maximumEnvironmentLifetimeStrict: boolean;
    /**
     * max_port_admission_level caps the maximum admission level a user-opened
     * port may use. UNSPECIFIED means no cap (any AdmissionLevel value is
     * allowed).
     * System ports (VS Code Browser, agents) are exempt.
     * The legacy port_sharing_disabled field, when true, takes precedence and
     * blocks all user-initiated port sharing.
     *
     * @generated from field: gitpod.v1.AdmissionLevel max_port_admission_level = 22;
     */
    maxPortAdmissionLevel: AdmissionLevel;
    /**
     * web_browser_disabled controls whether users can open the built-in web browser from environment pages.
     * This does not affect VS Code Browser.
     *
     * @generated from field: bool web_browser_disabled = 24;
     */
    webBrowserDisabled: boolean;
    /**
     * disable_from_scratch controls whether non-admin users can create blank
     * environments without a Git or URL initializer.
     *
     * @generated from field: bool disable_from_scratch = 25;
     */
    disableFromScratch: boolean;
    /**
     * veto_file_policy contains veto-file policy for environments.
     *
     * @generated from field: gitpod.v1.VetoFilePolicy veto_file_policy = 26;
     */
    vetoFilePolicy?: VetoFilePolicy;
    /**
     * security_policy_id references the Veto Exec SecurityPolicy assigned to newly created environments.
     * The public GA contract accepts policies that use only SecurityPolicy.Spec.executables.
     * Assignment validates materializability and rejects unsupported executable selectors or effects.
     * If empty, new environments have no SecurityPolicy by default.
     *
     * @generated from field: string security_policy_id = 27;
     */
    securityPolicyId: string;
    /**
     * archive_environments_after controls how long stopped environments remain inactive
     * before archival. Enterprise only. Must be a whole number of days. Minimum
     * duration is 1 day (86400 seconds). Maximum duration is 30 days (2592000 seconds).
     *
     * @generated from field: google.protobuf.Duration archive_environments_after = 28;
     */
    archiveEnvironmentsAfter?: Duration;
};
/**
 * Describes the message gitpod.v1.OrganizationPolicies.
 * Use `create(OrganizationPoliciesSchema)` to create a new message.
 */
export declare const OrganizationPoliciesSchema: GenMessage<OrganizationPolicies>;
/**
 * VetoExecPolicy defines the policy for blocking or auditing executable execution in environments.
 *
 * @generated from message gitpod.v1.VetoExecPolicy
 */
export type VetoExecPolicy = Message<"gitpod.v1.VetoExecPolicy"> & {
    /**
     * enabled controls whether executable blocking is active
     *
     * @generated from field: bool enabled = 1;
     */
    enabled: boolean;
    /**
     * executables is the list of executable paths or names to block
     *
     * @generated from field: repeated string executables = 2;
     */
    executables: string[];
    /**
     * action specifies what action kernel-level controls take on policy violations
     *
     * @generated from field: gitpod.v1.KernelControlsAction action = 3;
     */
    action: KernelControlsAction;
    /**
     * Output only. Executable paths that are protected by the safelist and cannot
     * be blocked by the denylist. Populated by the server from the built-in
     * default safelist. Ignored on update requests.
     *
     * @generated from field: repeated string safelist = 4;
     */
    safelist: string[];
};
/**
 * Describes the message gitpod.v1.VetoExecPolicy.
 * Use `create(VetoExecPolicySchema)` to create a new message.
 */
export declare const VetoExecPolicySchema: GenMessage<VetoExecPolicy>;
/**
 * VetoFilePolicy defines path and block-device file controls in environments.
 *
 * @generated from message gitpod.v1.VetoFilePolicy
 */
export type VetoFilePolicy = Message<"gitpod.v1.VetoFilePolicy"> & {
    /**
     * enabled controls whether file policy materialization is active.
     *
     * @generated from field: bool enabled = 1;
     */
    enabled: boolean;
    /**
     * paths controls path-based file-content access.
     *
     * @generated from field: gitpod.v1.VetoFilePathPolicy paths = 2;
     */
    paths?: VetoFilePathPolicy;
    /**
     * block_devices controls block-device open access.
     *
     * @generated from field: gitpod.v1.VetoFileBlockDevicesPolicy block_devices = 3;
     */
    blockDevices?: VetoFileBlockDevicesPolicy;
};
/**
 * Describes the message gitpod.v1.VetoFilePolicy.
 * Use `create(VetoFilePolicySchema)` to create a new message.
 */
export declare const VetoFilePolicySchema: GenMessage<VetoFilePolicy>;
/**
 * EditorVersionPolicy defines the version policy for a specific editor
 *
 * @generated from message gitpod.v1.EditorVersionPolicy
 */
export type EditorVersionPolicy = Message<"gitpod.v1.EditorVersionPolicy"> & {
    /**
     * allowed_versions lists the versions that are allowed
     * If empty, we will use the latest version of the editor
     *
     * Examples for JetBrains: `["2025.2", "2025.1", "2024.3"]`
     *
     * @generated from field: repeated string allowed_versions = 1;
     */
    allowedVersions: string[];
};
/**
 * Describes the message gitpod.v1.EditorVersionPolicy.
 * Use `create(EditorVersionPolicySchema)` to create a new message.
 */
export declare const EditorVersionPolicySchema: GenMessage<EditorVersionPolicy>;
/**
 * CodexModelPolicy controls per-model availability for Codex.
 *
 * @generated from message gitpod.v1.CodexModelPolicy
 */
export type CodexModelPolicy = Message<"gitpod.v1.CodexModelPolicy"> & {
    /**
     * model_states maps CodexOpenAIModel enum names to explicit policy states.
     * Missing entries are treated as allowed.
     *
     * @generated from field: map<string, gitpod.v1.CodexModelPolicyState> model_states = 1;
     */
    modelStates: {
        [key: string]: CodexModelPolicyState;
    };
};
/**
 * Describes the message gitpod.v1.CodexModelPolicy.
 * Use `create(CodexModelPolicySchema)` to create a new message.
 */
export declare const CodexModelPolicySchema: GenMessage<CodexModelPolicy>;
/**
 * AgentPolicy contains agent-specific policy settings for an organization
 *
 * @generated from message gitpod.v1.AgentPolicy
 */
export type AgentPolicy = Message<"gitpod.v1.AgentPolicy"> & {
    /**
     * mcp_disabled controls whether MCP (Model Context Protocol) is disabled for agents
     *
     * @generated from field: bool mcp_disabled = 1;
     */
    mcpDisabled: boolean;
    /**
     * command_deny_list contains a list of commands that agents are not allowed to execute
     *
     * @generated from field: repeated string command_deny_list = 2;
     */
    commandDenyList: string[];
    /**
     * scm_tools_disabled controls whether SCM (Source Control Management) tools are disabled for agents
     *
     * @generated from field: bool scm_tools_disabled = 3;
     */
    scmToolsDisabled: boolean;
    /**
     * scm_tools_allowed_group_id restricts SCM tools access to members of this group.
     * Empty means no restriction (all users can use SCM tools if not disabled).
     *
     * @generated from field: string scm_tools_allowed_group_id = 4;
     */
    scmToolsAllowedGroupId: string;
    /**
     * conversation_sharing_policy controls whether agent conversations can be shared
     *
     * @generated from field: gitpod.v1.ConversationSharingPolicy conversation_sharing_policy = 5;
     */
    conversationSharingPolicy: ConversationSharingPolicy;
    /**
     * max_subagents_per_environment limits the number of non-terminal sub-agents
     * a parent can have running simultaneously in the same environment.
     * Valid range: 0-10. Zero means use the default (5).
     *
     * @generated from field: int32 max_subagents_per_environment = 6;
     */
    maxSubagentsPerEnvironment: number;
    /**
     * allowed_agent_ids contains the agent IDs users may select when the
     * codex_rollout feature flag is enabled. Empty means all agents are allowed.
     *
     * @generated from field: repeated string allowed_agent_ids = 7;
     */
    allowedAgentIds: string[];
    /**
     * Deprecated: use codex_model_policy. This legacy allowlist cannot distinguish
     * omitted from intentionally empty on update requests. Empty means all Codex
     * models are allowed.
     *
     * @generated from field: repeated gitpod.v1.CodexOpenAIModel allowed_codex_models = 8 [deprecated = true];
     * @deprecated
     */
    allowedCodexModels: CodexOpenAIModel[];
    /**
     * allowed_codex_reasoning_efforts contains the Codex reasoning efforts users
     * may select when the codex_rollout feature flag is enabled. Empty means all
     * Codex reasoning efforts are allowed.
     *
     * @generated from field: repeated gitpod.v1.CodexReasoningEffort allowed_codex_reasoning_efforts = 9;
     */
    allowedCodexReasoningEfforts: CodexReasoningEffort[];
    /**
     * allowed_codex_service_tiers contains the Codex service tiers users may
     * select when the codex_rollout feature flag is enabled. Empty means all
     * Codex service tiers are allowed.
     *
     * @generated from field: repeated gitpod.v1.CodexServiceTier allowed_codex_service_tiers = 10;
     */
    allowedCodexServiceTiers: CodexServiceTier[];
    /**
     * goal_mode_disabled controls whether Codex goal mode is disabled for the organization.
     *
     * @generated from field: bool goal_mode_disabled = 11;
     */
    goalModeDisabled: boolean;
    /**
     * codex_model_policy contains explicit per-model Codex availability states.
     * Missing policy or missing model entries mean allowed.
     *
     * @generated from field: gitpod.v1.CodexModelPolicy codex_model_policy = 12;
     */
    codexModelPolicy?: CodexModelPolicy;
};
/**
 * Describes the message gitpod.v1.AgentPolicy.
 * Use `create(AgentPolicySchema)` to create a new message.
 */
export declare const AgentPolicySchema: GenMessage<AgentPolicy>;
/**
 * SecurityAgentPolicy contains security agent configuration for an organization.
 * When enabled, security agents are automatically deployed to all environments.
 *
 * @generated from message gitpod.v1.SecurityAgentPolicy
 */
export type SecurityAgentPolicy = Message<"gitpod.v1.SecurityAgentPolicy"> & {
    /**
     * crowdstrike contains CrowdStrike Falcon configuration
     *
     * @generated from field: gitpod.v1.CrowdStrikeConfig crowdstrike = 1;
     */
    crowdstrike?: CrowdStrikeConfig;
    /**
     * custom_agents contains custom security agent definitions
     *
     * @generated from field: repeated gitpod.v1.CustomSecurityAgent custom_agents = 2;
     */
    customAgents: CustomSecurityAgent[];
};
/**
 * Describes the message gitpod.v1.SecurityAgentPolicy.
 * Use `create(SecurityAgentPolicySchema)` to create a new message.
 */
export declare const SecurityAgentPolicySchema: GenMessage<SecurityAgentPolicy>;
/**
 * CrowdStrikeConfig configures CrowdStrike Falcon sensor deployment
 *
 * @generated from message gitpod.v1.CrowdStrikeConfig
 */
export type CrowdStrikeConfig = Message<"gitpod.v1.CrowdStrikeConfig"> & {
    /**
     * enabled controls whether CrowdStrike Falcon is deployed to environments
     *
     * @generated from field: bool enabled = 1;
     */
    enabled: boolean;
    /**
     * image is the CrowdStrike Falcon sensor container image reference
     *
     * @generated from field: string image = 2;
     */
    image: string;
    /**
     * cid_secret_id references an organization secret containing the Customer ID (CID).
     *
     * @generated from field: string cid_secret_id = 3;
     */
    cidSecretId: string;
    /**
     * tags are optional tags to apply to the Falcon sensor (comma-separated)
     *
     * @generated from field: string tags = 4;
     */
    tags: string;
    /**
     * additional_options contains additional FALCONCTL_OPT_* options as key-value pairs.
     * Keys should NOT include the FALCONCTL_OPT_ prefix.
     *
     * @generated from field: map<string, string> additional_options = 5;
     */
    additionalOptions: {
        [key: string]: string;
    };
};
/**
 * Describes the message gitpod.v1.CrowdStrikeConfig.
 * Use `create(CrowdStrikeConfigSchema)` to create a new message.
 */
export declare const CrowdStrikeConfigSchema: GenMessage<CrowdStrikeConfig>;
/**
 * CustomSecurityAgent defines a custom security agent configured by an organization admin.
 *
 * @generated from message gitpod.v1.CustomSecurityAgent
 */
export type CustomSecurityAgent = Message<"gitpod.v1.CustomSecurityAgent"> & {
    /**
     * id is a unique identifier for this custom agent within the organization.
     * Server-generated at save time if empty.
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * enabled controls whether this custom agent is deployed to environments
     *
     * @generated from field: bool enabled = 2;
     */
    enabled: boolean;
    /**
     * name is the display name for this custom agent
     *
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * description is a human-readable description of what this agent does
     *
     * @generated from field: string description = 4;
     */
    description: string;
    /**
     * start_command is the shell script that starts the agent
     *
     * @generated from field: string start_command = 5;
     */
    startCommand: string;
    /**
     * env_mappings maps script placeholders to organization secret names,
     * resolved to secret values at runtime.
     *
     * @generated from field: repeated gitpod.v1.CustomAgentEnvMapping env_mappings = 6;
     */
    envMappings: CustomAgentEnvMapping[];
};
/**
 * Describes the message gitpod.v1.CustomSecurityAgent.
 * Use `create(CustomSecurityAgentSchema)` to create a new message.
 */
export declare const CustomSecurityAgentSchema: GenMessage<CustomSecurityAgent>;
/**
 * CustomAgentEnvMapping maps a script placeholder to an organization secret.
 * The backend resolves the secret name to a UUID at runtime.
 *
 * @generated from message gitpod.v1.CustomAgentEnvMapping
 */
export type CustomAgentEnvMapping = Message<"gitpod.v1.CustomAgentEnvMapping"> & {
    /**
     * name is the environment variable name used as a placeholder in the start command.
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * secret_name is the name of the organization secret whose value populates this placeholder.
     *
     * @generated from field: string secret_name = 2;
     */
    secretName: string;
};
/**
 * Describes the message gitpod.v1.CustomAgentEnvMapping.
 * Use `create(CustomAgentEnvMappingSchema)` to create a new message.
 */
export declare const CustomAgentEnvMappingSchema: GenMessage<CustomAgentEnvMapping>;
/**
 * @generated from message gitpod.v1.GetOrganizationPoliciesRequest
 */
export type GetOrganizationPoliciesRequest = Message<"gitpod.v1.GetOrganizationPoliciesRequest"> & {
    /**
     * organization_id is the ID of the organization to retrieve policies for
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
};
/**
 * Describes the message gitpod.v1.GetOrganizationPoliciesRequest.
 * Use `create(GetOrganizationPoliciesRequestSchema)` to create a new message.
 */
export declare const GetOrganizationPoliciesRequestSchema: GenMessage<GetOrganizationPoliciesRequest>;
/**
 * @generated from message gitpod.v1.GetOrganizationPoliciesResponse
 */
export type GetOrganizationPoliciesResponse = Message<"gitpod.v1.GetOrganizationPoliciesResponse"> & {
    /**
     * @generated from field: gitpod.v1.OrganizationPolicies policies = 1;
     */
    policies?: OrganizationPolicies;
};
/**
 * Describes the message gitpod.v1.GetOrganizationPoliciesResponse.
 * Use `create(GetOrganizationPoliciesResponseSchema)` to create a new message.
 */
export declare const GetOrganizationPoliciesResponseSchema: GenMessage<GetOrganizationPoliciesResponse>;
/**
 * @generated from message gitpod.v1.UpdateOrganizationPoliciesRequest
 */
export type UpdateOrganizationPoliciesRequest = Message<"gitpod.v1.UpdateOrganizationPoliciesRequest"> & {
    /**
     * organization_id is the ID of the organization to update policies for
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * maximum_environment_timeout controls the maximum timeout allowed for environments in seconds.
     * 0 means no limit (never). Minimum duration is 30 minutes (1800 seconds).
     *
     * @generated from field: optional google.protobuf.Duration maximum_environment_timeout = 2;
     */
    maximumEnvironmentTimeout?: Duration;
    /**
     * members_require_projects controls whether environments can only be created from projects by non-admin users
     *
     * @generated from field: optional bool members_require_projects = 3;
     */
    membersRequireProjects?: boolean;
    /**
     * members_create_projects controls whether members can create projects
     *
     * @generated from field: optional bool members_create_projects = 4;
     */
    membersCreateProjects?: boolean;
    /**
     * allowed_editor_ids is the list of editor IDs that are allowed to be used in the organization
     *
     * @generated from field: repeated string allowed_editor_ids = 5;
     */
    allowedEditorIds: string[];
    /**
     * default_editor_id is the default editor ID to be used when a user doesn't specify one
     *
     * @generated from field: optional string default_editor_id = 6;
     */
    defaultEditorId?: string;
    /**
     * allow_local_runners controls whether local runners are allowed to be used in the organization
     *
     * @generated from field: optional bool allow_local_runners = 7;
     */
    allowLocalRunners?: boolean;
    /**
     * maximum_running_environments_per_user limits simultaneously running environments per user
     *
     * @generated from field: optional int64 maximum_running_environments_per_user = 8;
     */
    maximumRunningEnvironmentsPerUser?: bigint;
    /**
     * maximum_environments_per_user limits total environments (running or stopped) per user
     *
     * @generated from field: optional int64 maximum_environments_per_user = 9;
     */
    maximumEnvironmentsPerUser?: bigint;
    /**
     * default_environment_image is the default container image when none is defined in repo
     *
     * @generated from field: optional string default_environment_image = 10;
     */
    defaultEnvironmentImage?: string;
    /**
     * port_sharing_disabled controls whether user-initiated port sharing is disabled in the organization.
     * System ports (VS Code Browser, agents) are always exempt from this policy.
     *
     * @generated from field: optional bool port_sharing_disabled = 11;
     */
    portSharingDisabled?: boolean;
    /**
     * delete_archived_environments_after controls how long archived environments are kept before automatic deletion.
     * 0 means no automatic deletion. Maximum duration is 4 weeks (2419200 seconds).
     *
     * @generated from field: optional google.protobuf.Duration delete_archived_environments_after = 12;
     */
    deleteArchivedEnvironmentsAfter?: Duration;
    /**
     * agent_policy contains agent-specific policy settings
     *
     * @generated from field: optional gitpod.v1.UpdateOrganizationPoliciesRequest.UpdateAgentPolicy agent_policy = 13;
     */
    agentPolicy?: UpdateOrganizationPoliciesRequest_UpdateAgentPolicy;
    /**
     * maximum_environment_lifetime controls for how long environments are allowed to be reused.
     * 0 means no maximum lifetime. Maximum duration is 180 days (15552000 seconds).
     *
     * @generated from field: optional google.protobuf.Duration maximum_environment_lifetime = 14;
     */
    maximumEnvironmentLifetime?: Duration;
    /**
     * require_custom_domain_access controls whether users must access via custom domain
     * when one is configured. When true, access via app.gitpod.io is blocked.
     *
     * @generated from field: optional bool require_custom_domain_access = 15;
     */
    requireCustomDomainAccess?: boolean;
    /**
     * editor_version_restrictions restricts which editor versions can be used.
     * Maps editor ID to version policy with allowed major versions.
     *
     * @generated from field: map<string, gitpod.v1.EditorVersionPolicy> editor_version_restrictions = 16;
     */
    editorVersionRestrictions: {
        [key: string]: EditorVersionPolicy;
    };
    /**
     * security_agent_policy contains security agent configuration updates
     *
     * @generated from field: optional gitpod.v1.UpdateOrganizationPoliciesRequest.UpdateSecurityAgentPolicy security_agent_policy = 17;
     */
    securityAgentPolicy?: UpdateOrganizationPoliciesRequest_UpdateSecurityAgentPolicy;
    /**
     * restrict_account_creation_to_scim controls whether account creation is restricted to SCIM-provisioned users only.
     * When true and SCIM is configured for the organization, only users provisioned via SCIM can create accounts.
     *
     * @generated from field: optional bool restrict_account_creation_to_scim = 18;
     */
    restrictAccountCreationToScim?: boolean;
    /**
     * veto_exec_policy contains the veto exec policy for environments.
     *
     * @generated from field: optional gitpod.v1.VetoExecPolicy veto_exec_policy = 20;
     */
    vetoExecPolicy?: VetoExecPolicy;
    /**
     * maximum_environment_lifetime_strict controls whether environments past their
     * lockdown_at timestamp are blocked from starting.
     *
     * @generated from field: optional bool maximum_environment_lifetime_strict = 21;
     */
    maximumEnvironmentLifetimeStrict?: boolean;
    /**
     * max_port_admission_level caps the maximum admission level a user-opened
     * port may use. UNSPECIFIED means no cap (any AdmissionLevel value is
     * allowed).
     * System ports (VS Code Browser, agents) are exempt.
     * The legacy port_sharing_disabled field, when true, takes precedence and
     * blocks all user-initiated port sharing.
     *
     * @generated from field: optional gitpod.v1.AdmissionLevel max_port_admission_level = 22;
     */
    maxPortAdmissionLevel?: AdmissionLevel;
    /**
     * web_browser_disabled controls whether users can open the built-in web browser from environment pages.
     * This does not affect VS Code Browser.
     *
     * @generated from field: optional bool web_browser_disabled = 24;
     */
    webBrowserDisabled?: boolean;
    /**
     * disable_from_scratch controls whether non-admin users can create blank
     * environments without a Git or URL initializer.
     *
     * @generated from field: optional bool disable_from_scratch = 25;
     */
    disableFromScratch?: boolean;
    /**
     * veto_file_policy contains veto-file policy updates.
     *
     * @generated from field: optional gitpod.v1.VetoFilePolicy veto_file_policy = 26;
     */
    vetoFilePolicy?: VetoFilePolicy;
    /**
     * security_policy_id assigns a Veto Exec SecurityPolicy to newly created environments.
     * The public GA contract accepts policies that use only SecurityPolicy.Spec.executables.
     * Assignment validates materializability and rejects unsupported executable selectors or effects.
     * Set this field to an empty string to clear the default assignment.
     *
     * @generated from field: optional string security_policy_id = 27;
     */
    securityPolicyId?: string;
    /**
     * archive_environments_after controls how long stopped environments remain inactive
     * before archival. Enterprise only. Must be a whole number of days. Minimum
     * duration is 1 day (86400 seconds). Maximum duration is 30 days (2592000 seconds).
     *
     * @generated from field: optional google.protobuf.Duration archive_environments_after = 28;
     */
    archiveEnvironmentsAfter?: Duration;
};
/**
 * Describes the message gitpod.v1.UpdateOrganizationPoliciesRequest.
 * Use `create(UpdateOrganizationPoliciesRequestSchema)` to create a new message.
 */
export declare const UpdateOrganizationPoliciesRequestSchema: GenMessage<UpdateOrganizationPoliciesRequest>;
/**
 * @generated from message gitpod.v1.UpdateOrganizationPoliciesRequest.UpdateAgentPolicy
 */
export type UpdateOrganizationPoliciesRequest_UpdateAgentPolicy = Message<"gitpod.v1.UpdateOrganizationPoliciesRequest.UpdateAgentPolicy"> & {
    /**
     * mcp_disabled controls whether MCP (Model Context Protocol) is disabled for agents
     *
     * @generated from field: optional bool mcp_disabled = 1;
     */
    mcpDisabled?: boolean;
    /**
     * command_deny_list contains a list of commands that agents are not allowed to execute
     *
     * @generated from field: repeated string command_deny_list = 2;
     */
    commandDenyList: string[];
    /**
     * scm_tools_disabled controls whether SCM (Source Control Management) tools are disabled for agents
     *
     * @generated from field: optional bool scm_tools_disabled = 3;
     */
    scmToolsDisabled?: boolean;
    /**
     * scm_tools_allowed_group_id restricts SCM tools access to members of this group.
     * Empty means no restriction (all users can use SCM tools if not disabled).
     *
     * @generated from field: optional string scm_tools_allowed_group_id = 4;
     */
    scmToolsAllowedGroupId?: string;
    /**
     * conversation_sharing_policy controls whether agent conversations can be shared
     *
     * @generated from field: optional gitpod.v1.ConversationSharingPolicy conversation_sharing_policy = 5;
     */
    conversationSharingPolicy?: ConversationSharingPolicy;
    /**
     * max_subagents_per_environment limits the number of non-terminal sub-agents
     * a parent can have running simultaneously in the same environment.
     * Valid range: 0-10. Zero means use the default (5).
     *
     * @generated from field: optional int32 max_subagents_per_environment = 6;
     */
    maxSubagentsPerEnvironment?: number;
    /**
     * allowed_agent_ids contains the agent IDs users may select when the
     * codex_rollout feature flag is enabled. Empty means all agents are allowed.
     *
     * @generated from field: repeated string allowed_agent_ids = 7;
     */
    allowedAgentIds: string[];
    /**
     * Deprecated: use codex_model_policy. This legacy allowlist cannot distinguish
     * omitted from intentionally empty on update requests. Empty means all Codex
     * models are allowed.
     *
     * @generated from field: repeated gitpod.v1.CodexOpenAIModel allowed_codex_models = 8 [deprecated = true];
     * @deprecated
     */
    allowedCodexModels: CodexOpenAIModel[];
    /**
     * allowed_codex_reasoning_efforts contains the Codex reasoning efforts users
     * may select when the codex_rollout feature flag is enabled. Empty means all
     * Codex reasoning efforts are allowed.
     *
     * @generated from field: repeated gitpod.v1.CodexReasoningEffort allowed_codex_reasoning_efforts = 9;
     */
    allowedCodexReasoningEfforts: CodexReasoningEffort[];
    /**
     * allowed_codex_service_tiers contains the Codex service tiers users may
     * select when the codex_rollout feature flag is enabled. Empty means all
     * Codex service tiers are allowed.
     *
     * @generated from field: repeated gitpod.v1.CodexServiceTier allowed_codex_service_tiers = 10;
     */
    allowedCodexServiceTiers: CodexServiceTier[];
    /**
     * goal_mode_disabled controls whether Codex goal mode is disabled for the organization.
     *
     * @generated from field: optional bool goal_mode_disabled = 11;
     */
    goalModeDisabled?: boolean;
    /**
     * codex_model_policy contains explicit per-model Codex availability states.
     * Omit to leave the current model policy unchanged. Send an empty policy to
     * clear explicit model states.
     *
     * @generated from field: gitpod.v1.CodexModelPolicy codex_model_policy = 12;
     */
    codexModelPolicy?: CodexModelPolicy;
};
/**
 * Describes the message gitpod.v1.UpdateOrganizationPoliciesRequest.UpdateAgentPolicy.
 * Use `create(UpdateOrganizationPoliciesRequest_UpdateAgentPolicySchema)` to create a new message.
 */
export declare const UpdateOrganizationPoliciesRequest_UpdateAgentPolicySchema: GenMessage<UpdateOrganizationPoliciesRequest_UpdateAgentPolicy>;
/**
 * UpdateSecurityAgentPolicy contains security agent configuration updates
 *
 * @generated from message gitpod.v1.UpdateOrganizationPoliciesRequest.UpdateSecurityAgentPolicy
 */
export type UpdateOrganizationPoliciesRequest_UpdateSecurityAgentPolicy = Message<"gitpod.v1.UpdateOrganizationPoliciesRequest.UpdateSecurityAgentPolicy"> & {
    /**
     * crowdstrike contains CrowdStrike Falcon configuration updates
     *
     * @generated from field: optional gitpod.v1.UpdateOrganizationPoliciesRequest.UpdateCrowdStrikeConfig crowdstrike = 1;
     */
    crowdstrike?: UpdateOrganizationPoliciesRequest_UpdateCrowdStrikeConfig;
    /**
     * custom_agents contains custom security agent definitions.
     * Callers must read-then-write the full list.
     *
     * @generated from field: repeated gitpod.v1.CustomSecurityAgent custom_agents = 2;
     */
    customAgents: CustomSecurityAgent[];
};
/**
 * Describes the message gitpod.v1.UpdateOrganizationPoliciesRequest.UpdateSecurityAgentPolicy.
 * Use `create(UpdateOrganizationPoliciesRequest_UpdateSecurityAgentPolicySchema)` to create a new message.
 */
export declare const UpdateOrganizationPoliciesRequest_UpdateSecurityAgentPolicySchema: GenMessage<UpdateOrganizationPoliciesRequest_UpdateSecurityAgentPolicy>;
/**
 * UpdateCrowdStrikeConfig contains CrowdStrike Falcon configuration updates
 *
 * @generated from message gitpod.v1.UpdateOrganizationPoliciesRequest.UpdateCrowdStrikeConfig
 */
export type UpdateOrganizationPoliciesRequest_UpdateCrowdStrikeConfig = Message<"gitpod.v1.UpdateOrganizationPoliciesRequest.UpdateCrowdStrikeConfig"> & {
    /**
     * enabled controls whether CrowdStrike Falcon is deployed to environments
     *
     * @generated from field: optional bool enabled = 1;
     */
    enabled?: boolean;
    /**
     * image is the CrowdStrike Falcon sensor container image reference
     *
     * @generated from field: optional string image = 2;
     */
    image?: string;
    /**
     * cid_secret_id references an organization secret containing the Customer ID (CID)
     *
     * @generated from field: optional string cid_secret_id = 3;
     */
    cidSecretId?: string;
    /**
     * tags are optional tags to apply to the Falcon sensor
     *
     * @generated from field: optional string tags = 4;
     */
    tags?: string;
    /**
     * additional_options contains additional FALCONCTL_OPT_* options as key-value pairs
     *
     * @generated from field: map<string, string> additional_options = 5;
     */
    additionalOptions: {
        [key: string]: string;
    };
};
/**
 * Describes the message gitpod.v1.UpdateOrganizationPoliciesRequest.UpdateCrowdStrikeConfig.
 * Use `create(UpdateOrganizationPoliciesRequest_UpdateCrowdStrikeConfigSchema)` to create a new message.
 */
export declare const UpdateOrganizationPoliciesRequest_UpdateCrowdStrikeConfigSchema: GenMessage<UpdateOrganizationPoliciesRequest_UpdateCrowdStrikeConfig>;
/**
 * @generated from message gitpod.v1.UpdateOrganizationPoliciesResponse
 */
export type UpdateOrganizationPoliciesResponse = Message<"gitpod.v1.UpdateOrganizationPoliciesResponse"> & {};
/**
 * Describes the message gitpod.v1.UpdateOrganizationPoliciesResponse.
 * Use `create(UpdateOrganizationPoliciesResponseSchema)` to create a new message.
 */
export declare const UpdateOrganizationPoliciesResponseSchema: GenMessage<UpdateOrganizationPoliciesResponse>;
/**
 * PolicyEnforcedFailedPreconditionDetails is a precondition failure details message used when a feature is limited by the organization's policy.
 *
 * @generated from message gitpod.v1.PolicyEnforcedFailedPreconditionDetails
 */
export type PolicyEnforcedFailedPreconditionDetails = Message<"gitpod.v1.PolicyEnforcedFailedPreconditionDetails"> & {
    /**
     * message is the message to display to the user
     *
     * @generated from field: string message = 1;
     */
    message: string;
    /**
     * policy_name is the name of the policy that is enforced
     *
     * @generated from field: string policy_name = 2;
     */
    policyName: string;
    /**
     * details contains policy-specific structured data for richer error messages.
     *
     * @generated from oneof gitpod.v1.PolicyEnforcedFailedPreconditionDetails.details
     */
    details: {
        /**
         * @generated from field: gitpod.v1.EnvironmentMaxLifetimeExceededDetails max_lifetime_exceeded = 3;
         */
        value: EnvironmentMaxLifetimeExceededDetails;
        case: "maxLifetimeExceeded";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.PolicyEnforcedFailedPreconditionDetails.
 * Use `create(PolicyEnforcedFailedPreconditionDetailsSchema)` to create a new message.
 */
export declare const PolicyEnforcedFailedPreconditionDetailsSchema: GenMessage<PolicyEnforcedFailedPreconditionDetails>;
/**
 * EnvironmentMaxLifetimeExceededDetails contains details about why an environment
 * was rejected due to the maximum lifetime policy.
 *
 * @generated from message gitpod.v1.EnvironmentMaxLifetimeExceededDetails
 */
export type EnvironmentMaxLifetimeExceededDetails = Message<"gitpod.v1.EnvironmentMaxLifetimeExceededDetails"> & {
    /**
     * expired_at is the timestamp when the environment's lifetime expired (its lockdown_at value).
     *
     * @generated from field: google.protobuf.Timestamp expired_at = 1;
     */
    expiredAt?: Timestamp;
    /**
     * policy_value is the configured maximum environment lifetime duration.
     *
     * @generated from field: google.protobuf.Duration policy_value = 2;
     */
    policyValue?: Duration;
};
/**
 * Describes the message gitpod.v1.EnvironmentMaxLifetimeExceededDetails.
 * Use `create(EnvironmentMaxLifetimeExceededDetailsSchema)` to create a new message.
 */
export declare const EnvironmentMaxLifetimeExceededDetailsSchema: GenMessage<EnvironmentMaxLifetimeExceededDetails>;
/**
 * @generated from message gitpod.v1.AnnouncementBanner
 */
export type AnnouncementBanner = Message<"gitpod.v1.AnnouncementBanner"> & {
    /**
     * organization_id is the ID of the organization
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * message is the banner message displayed to users. Supports basic Markdown.
     *
     * @generated from field: string message = 2;
     */
    message: string;
    /**
     * enabled controls whether the banner is displayed
     *
     * @generated from field: bool enabled = 3;
     */
    enabled: boolean;
};
/**
 * Describes the message gitpod.v1.AnnouncementBanner.
 * Use `create(AnnouncementBannerSchema)` to create a new message.
 */
export declare const AnnouncementBannerSchema: GenMessage<AnnouncementBanner>;
/**
 * @generated from message gitpod.v1.GetAnnouncementBannerRequest
 */
export type GetAnnouncementBannerRequest = Message<"gitpod.v1.GetAnnouncementBannerRequest"> & {
    /**
     * organization_id is the ID of the organization
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
};
/**
 * Describes the message gitpod.v1.GetAnnouncementBannerRequest.
 * Use `create(GetAnnouncementBannerRequestSchema)` to create a new message.
 */
export declare const GetAnnouncementBannerRequestSchema: GenMessage<GetAnnouncementBannerRequest>;
/**
 * @generated from message gitpod.v1.GetAnnouncementBannerResponse
 */
export type GetAnnouncementBannerResponse = Message<"gitpod.v1.GetAnnouncementBannerResponse"> & {
    /**
     * banner is the announcement banner configuration
     *
     * @generated from field: gitpod.v1.AnnouncementBanner banner = 1;
     */
    banner?: AnnouncementBanner;
};
/**
 * Describes the message gitpod.v1.GetAnnouncementBannerResponse.
 * Use `create(GetAnnouncementBannerResponseSchema)` to create a new message.
 */
export declare const GetAnnouncementBannerResponseSchema: GenMessage<GetAnnouncementBannerResponse>;
/**
 * @generated from message gitpod.v1.UpdateAnnouncementBannerRequest
 */
export type UpdateAnnouncementBannerRequest = Message<"gitpod.v1.UpdateAnnouncementBannerRequest"> & {
    /**
     * organization_id is the ID of the organization
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * message is the banner message. Supports basic Markdown. Maximum 1000 characters.
     *
     * @generated from field: optional string message = 2;
     */
    message?: string;
    /**
     * enabled controls whether the banner is displayed
     *
     * @generated from field: optional bool enabled = 3;
     */
    enabled?: boolean;
};
/**
 * Describes the message gitpod.v1.UpdateAnnouncementBannerRequest.
 * Use `create(UpdateAnnouncementBannerRequestSchema)` to create a new message.
 */
export declare const UpdateAnnouncementBannerRequestSchema: GenMessage<UpdateAnnouncementBannerRequest>;
/**
 * @generated from message gitpod.v1.UpdateAnnouncementBannerResponse
 */
export type UpdateAnnouncementBannerResponse = Message<"gitpod.v1.UpdateAnnouncementBannerResponse"> & {
    /**
     * banner is the updated announcement banner configuration
     *
     * @generated from field: gitpod.v1.AnnouncementBanner banner = 1;
     */
    banner?: AnnouncementBanner;
};
/**
 * Describes the message gitpod.v1.UpdateAnnouncementBannerResponse.
 * Use `create(UpdateAnnouncementBannerResponseSchema)` to create a new message.
 */
export declare const UpdateAnnouncementBannerResponseSchema: GenMessage<UpdateAnnouncementBannerResponse>;
/**
 * @generated from message gitpod.v1.TermsOfServiceVersion
 */
export type TermsOfServiceVersion = Message<"gitpod.v1.TermsOfServiceVersion"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: int32 version = 2;
     */
    version: number;
    /**
     * @generated from field: string markdown = 3;
     */
    markdown: string;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: string created_by_user_id = 5;
     */
    createdByUserId: string;
};
/**
 * Describes the message gitpod.v1.TermsOfServiceVersion.
 * Use `create(TermsOfServiceVersionSchema)` to create a new message.
 */
export declare const TermsOfServiceVersionSchema: GenMessage<TermsOfServiceVersion>;
/**
 * @generated from message gitpod.v1.TermsOfServiceAcceptance
 */
export type TermsOfServiceAcceptance = Message<"gitpod.v1.TermsOfServiceAcceptance"> & {
    /**
     * @generated from field: string version_id = 1;
     */
    versionId: string;
    /**
     * @generated from field: int32 version = 2;
     */
    version: number;
    /**
     * @generated from field: google.protobuf.Timestamp accepted_at = 3;
     */
    acceptedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.TermsOfServiceAcceptance.
 * Use `create(TermsOfServiceAcceptanceSchema)` to create a new message.
 */
export declare const TermsOfServiceAcceptanceSchema: GenMessage<TermsOfServiceAcceptance>;
/**
 * @generated from message gitpod.v1.TermsOfService
 */
export type TermsOfService = Message<"gitpod.v1.TermsOfService"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: bool enabled = 2;
     */
    enabled: boolean;
    /**
     * current_version is the active Terms of Service version, if one has been published.
     *
     * @generated from field: gitpod.v1.TermsOfServiceVersion current_version = 3;
     */
    currentVersion?: TermsOfServiceVersion;
    /**
     * current_user_acceptance is the caller's acceptance of the current version, if any.
     *
     * @generated from field: gitpod.v1.TermsOfServiceAcceptance current_user_acceptance = 4;
     */
    currentUserAcceptance?: TermsOfServiceAcceptance;
};
/**
 * Describes the message gitpod.v1.TermsOfService.
 * Use `create(TermsOfServiceSchema)` to create a new message.
 */
export declare const TermsOfServiceSchema: GenMessage<TermsOfService>;
/**
 * @generated from message gitpod.v1.GetTermsOfServiceRequest
 */
export type GetTermsOfServiceRequest = Message<"gitpod.v1.GetTermsOfServiceRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
};
/**
 * Describes the message gitpod.v1.GetTermsOfServiceRequest.
 * Use `create(GetTermsOfServiceRequestSchema)` to create a new message.
 */
export declare const GetTermsOfServiceRequestSchema: GenMessage<GetTermsOfServiceRequest>;
/**
 * @generated from message gitpod.v1.GetTermsOfServiceResponse
 */
export type GetTermsOfServiceResponse = Message<"gitpod.v1.GetTermsOfServiceResponse"> & {
    /**
     * @generated from field: gitpod.v1.TermsOfService terms_of_service = 1;
     */
    termsOfService?: TermsOfService;
};
/**
 * Describes the message gitpod.v1.GetTermsOfServiceResponse.
 * Use `create(GetTermsOfServiceResponseSchema)` to create a new message.
 */
export declare const GetTermsOfServiceResponseSchema: GenMessage<GetTermsOfServiceResponse>;
/**
 * @generated from message gitpod.v1.UpdateTermsOfServiceRequest
 */
export type UpdateTermsOfServiceRequest = Message<"gitpod.v1.UpdateTermsOfServiceRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * markdown publishes a new version when changed.
     *
     * @generated from field: optional string markdown = 2;
     */
    markdown?: string;
    /**
     * @generated from field: optional bool enabled = 3;
     */
    enabled?: boolean;
};
/**
 * Describes the message gitpod.v1.UpdateTermsOfServiceRequest.
 * Use `create(UpdateTermsOfServiceRequestSchema)` to create a new message.
 */
export declare const UpdateTermsOfServiceRequestSchema: GenMessage<UpdateTermsOfServiceRequest>;
/**
 * @generated from message gitpod.v1.UpdateTermsOfServiceResponse
 */
export type UpdateTermsOfServiceResponse = Message<"gitpod.v1.UpdateTermsOfServiceResponse"> & {
    /**
     * @generated from field: gitpod.v1.TermsOfService terms_of_service = 1;
     */
    termsOfService?: TermsOfService;
};
/**
 * Describes the message gitpod.v1.UpdateTermsOfServiceResponse.
 * Use `create(UpdateTermsOfServiceResponseSchema)` to create a new message.
 */
export declare const UpdateTermsOfServiceResponseSchema: GenMessage<UpdateTermsOfServiceResponse>;
/**
 * @generated from message gitpod.v1.AcceptTermsOfServiceRequest
 */
export type AcceptTermsOfServiceRequest = Message<"gitpod.v1.AcceptTermsOfServiceRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * version_id is the exact version the user accepted.
     *
     * @generated from field: string version_id = 2;
     */
    versionId: string;
};
/**
 * Describes the message gitpod.v1.AcceptTermsOfServiceRequest.
 * Use `create(AcceptTermsOfServiceRequestSchema)` to create a new message.
 */
export declare const AcceptTermsOfServiceRequestSchema: GenMessage<AcceptTermsOfServiceRequest>;
/**
 * @generated from message gitpod.v1.AcceptTermsOfServiceResponse
 */
export type AcceptTermsOfServiceResponse = Message<"gitpod.v1.AcceptTermsOfServiceResponse"> & {
    /**
     * @generated from field: gitpod.v1.TermsOfServiceAcceptance acceptance = 1;
     */
    acceptance?: TermsOfServiceAcceptance;
};
/**
 * Describes the message gitpod.v1.AcceptTermsOfServiceResponse.
 * Use `create(AcceptTermsOfServiceResponseSchema)` to create a new message.
 */
export declare const AcceptTermsOfServiceResponseSchema: GenMessage<AcceptTermsOfServiceResponse>;
/**
 * @generated from message gitpod.v1.MemberTermsOfServiceAcceptance
 */
export type MemberTermsOfServiceAcceptance = Message<"gitpod.v1.MemberTermsOfServiceAcceptance"> & {
    /**
     * @generated from field: gitpod.v1.OrganizationMember member = 1;
     */
    member?: OrganizationMember;
    /**
     * @generated from field: gitpod.v1.TermsOfServiceAcceptanceStatus status = 2;
     */
    status: TermsOfServiceAcceptanceStatus;
    /**
     * accepted_version and accepted_at describe the member's most recent
     * acceptance. Both are unset when the member has never accepted any version.
     *
     * @generated from field: optional int32 accepted_version = 3;
     */
    acceptedVersion?: number;
    /**
     * @generated from field: google.protobuf.Timestamp accepted_at = 4;
     */
    acceptedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.MemberTermsOfServiceAcceptance.
 * Use `create(MemberTermsOfServiceAcceptanceSchema)` to create a new message.
 */
export declare const MemberTermsOfServiceAcceptanceSchema: GenMessage<MemberTermsOfServiceAcceptance>;
/**
 * @generated from message gitpod.v1.ListTermsOfServiceVersionsRequest
 */
export type ListTermsOfServiceVersionsRequest = Message<"gitpod.v1.ListTermsOfServiceVersionsRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
};
/**
 * Describes the message gitpod.v1.ListTermsOfServiceVersionsRequest.
 * Use `create(ListTermsOfServiceVersionsRequestSchema)` to create a new message.
 */
export declare const ListTermsOfServiceVersionsRequestSchema: GenMessage<ListTermsOfServiceVersionsRequest>;
/**
 * @generated from message gitpod.v1.ListTermsOfServiceVersionsResponse
 */
export type ListTermsOfServiceVersionsResponse = Message<"gitpod.v1.ListTermsOfServiceVersionsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.TermsOfServiceVersion versions = 2;
     */
    versions: TermsOfServiceVersion[];
};
/**
 * Describes the message gitpod.v1.ListTermsOfServiceVersionsResponse.
 * Use `create(ListTermsOfServiceVersionsResponseSchema)` to create a new message.
 */
export declare const ListTermsOfServiceVersionsResponseSchema: GenMessage<ListTermsOfServiceVersionsResponse>;
/**
 * @generated from message gitpod.v1.TermsOfServiceAcceptanceFilter
 */
export type TermsOfServiceAcceptanceFilter = Message<"gitpod.v1.TermsOfServiceAcceptanceFilter"> & {
    /**
     * @generated from field: repeated gitpod.v1.TermsOfServiceAcceptanceStatus statuses = 1;
     */
    statuses: TermsOfServiceAcceptanceStatus[];
    /**
     * search performs case-insensitive search across member name and email
     *
     * @generated from field: string search = 2;
     */
    search: string;
};
/**
 * Describes the message gitpod.v1.TermsOfServiceAcceptanceFilter.
 * Use `create(TermsOfServiceAcceptanceFilterSchema)` to create a new message.
 */
export declare const TermsOfServiceAcceptanceFilterSchema: GenMessage<TermsOfServiceAcceptanceFilter>;
/**
 * @generated from message gitpod.v1.ListTermsOfServiceAcceptancesRequest
 */
export type ListTermsOfServiceAcceptancesRequest = Message<"gitpod.v1.ListTermsOfServiceAcceptancesRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * version is the Terms of Service version to evaluate acceptance against.
     * Required to keep the result set bounded to a single version.
     *
     * @generated from field: int32 version = 3;
     */
    version: number;
    /**
     * @generated from field: gitpod.v1.TermsOfServiceAcceptanceFilter filter = 4;
     */
    filter?: TermsOfServiceAcceptanceFilter;
};
/**
 * Describes the message gitpod.v1.ListTermsOfServiceAcceptancesRequest.
 * Use `create(ListTermsOfServiceAcceptancesRequestSchema)` to create a new message.
 */
export declare const ListTermsOfServiceAcceptancesRequestSchema: GenMessage<ListTermsOfServiceAcceptancesRequest>;
/**
 * @generated from message gitpod.v1.ListTermsOfServiceAcceptancesResponse
 */
export type ListTermsOfServiceAcceptancesResponse = Message<"gitpod.v1.ListTermsOfServiceAcceptancesResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.MemberTermsOfServiceAcceptance acceptances = 2;
     */
    acceptances: MemberTermsOfServiceAcceptance[];
};
/**
 * Describes the message gitpod.v1.ListTermsOfServiceAcceptancesResponse.
 * Use `create(ListTermsOfServiceAcceptancesResponseSchema)` to create a new message.
 */
export declare const ListTermsOfServiceAcceptancesResponseSchema: GenMessage<ListTermsOfServiceAcceptancesResponse>;
/**
 * @generated from message gitpod.v1.GetTermsOfServiceAcceptancesExportRequest
 */
export type GetTermsOfServiceAcceptancesExportRequest = Message<"gitpod.v1.GetTermsOfServiceAcceptancesExportRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * version is the Terms of Service version to export acceptance against.
     * Required to keep the export bounded to a single version.
     *
     * @generated from field: int32 version = 2;
     */
    version: number;
    /**
     * @generated from field: gitpod.v1.TermsOfServiceAcceptanceFilter filter = 3;
     */
    filter?: TermsOfServiceAcceptanceFilter;
};
/**
 * Describes the message gitpod.v1.GetTermsOfServiceAcceptancesExportRequest.
 * Use `create(GetTermsOfServiceAcceptancesExportRequestSchema)` to create a new message.
 */
export declare const GetTermsOfServiceAcceptancesExportRequestSchema: GenMessage<GetTermsOfServiceAcceptancesExportRequest>;
/**
 * @generated from message gitpod.v1.GetTermsOfServiceAcceptancesExportResponse
 */
export type GetTermsOfServiceAcceptancesExportResponse = Message<"gitpod.v1.GetTermsOfServiceAcceptancesExportResponse"> & {
    /**
     * Signed download URL for the CSV export. Short-lived (5 minutes).
     *
     * @generated from field: string download_url = 1;
     */
    downloadUrl: string;
};
/**
 * Describes the message gitpod.v1.GetTermsOfServiceAcceptancesExportResponse.
 * Use `create(GetTermsOfServiceAcceptancesExportResponseSchema)` to create a new message.
 */
export declare const GetTermsOfServiceAcceptancesExportResponseSchema: GenMessage<GetTermsOfServiceAcceptancesExportResponse>;
/**
 * @generated from message gitpod.v1.SetStripeCustomerIDRequest
 */
export type SetStripeCustomerIDRequest = Message<"gitpod.v1.SetStripeCustomerIDRequest"> & {
    /**
     * organization_id is the ID of the organization to update
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * stripe_customer_id is the Stripe customer ID to associate with the organization
     *
     * @generated from field: string stripe_customer_id = 2;
     */
    stripeCustomerId: string;
};
/**
 * Describes the message gitpod.v1.SetStripeCustomerIDRequest.
 * Use `create(SetStripeCustomerIDRequestSchema)` to create a new message.
 */
export declare const SetStripeCustomerIDRequestSchema: GenMessage<SetStripeCustomerIDRequest>;
/**
 * @generated from message gitpod.v1.SetStripeCustomerIDResponse
 */
export type SetStripeCustomerIDResponse = Message<"gitpod.v1.SetStripeCustomerIDResponse"> & {};
/**
 * Describes the message gitpod.v1.SetStripeCustomerIDResponse.
 * Use `create(SetStripeCustomerIDResponseSchema)` to create a new message.
 */
export declare const SetStripeCustomerIDResponseSchema: GenMessage<SetStripeCustomerIDResponse>;
/**
 * CustomDomain represents a custom domain configuration for an organization
 *
 * @generated from message gitpod.v1.CustomDomain
 */
export type CustomDomain = Message<"gitpod.v1.CustomDomain"> & {
    /**
     * id is the unique identifier of the custom domain
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * organization_id is the ID of the organization this custom domain belongs to
     *
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * domain_name is the custom domain name
     *
     * @generated from field: string domain_name = 3;
     */
    domainName: string;
    /**
     * provider is the cloud provider for this custom domain
     *
     * @generated from field: gitpod.v1.CustomDomainProvider provider = 4;
     */
    provider: CustomDomainProvider;
    /**
     * aws_account_id is the AWS account ID (deprecated: use cloud_account_id)
     *
     * @generated from field: string aws_account_id = 5 [deprecated = true];
     * @deprecated
     */
    awsAccountId: string;
    /**
     * created_at is when the custom domain was created
     *
     * @generated from field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
    /**
     * updated_at is when the custom domain was last updated
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 7;
     */
    updatedAt?: Timestamp;
    /**
     * cloud_account_id is the unified cloud account identifier (AWS Account ID or GCP Project ID)
     *
     * @generated from field: string cloud_account_id = 8;
     */
    cloudAccountId: string;
};
/**
 * Describes the message gitpod.v1.CustomDomain.
 * Use `create(CustomDomainSchema)` to create a new message.
 */
export declare const CustomDomainSchema: GenMessage<CustomDomain>;
/**
 * CreateCustomDomainRequest is the request message for creating a custom domain
 *
 * @generated from message gitpod.v1.CreateCustomDomainRequest
 */
export type CreateCustomDomainRequest = Message<"gitpod.v1.CreateCustomDomainRequest"> & {
    /**
     * organization_id is the ID of the organization to create the custom domain for
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * domain_name is the custom domain name
     *
     * @generated from field: string domain_name = 2;
     */
    domainName: string;
    /**
     * provider is the cloud provider for this custom domain
     *
     * @generated from field: gitpod.v1.CustomDomainProvider provider = 3;
     */
    provider: CustomDomainProvider;
    /**
     * aws_account_id is the AWS account ID (deprecated: use cloud_account_id)
     *
     * @generated from field: optional string aws_account_id = 4 [deprecated = true];
     * @deprecated
     */
    awsAccountId?: string;
    /**
     * cloud_account_id is the unified cloud account identifier (AWS Account ID or GCP Project ID)
     *
     * @generated from field: optional string cloud_account_id = 5;
     */
    cloudAccountId?: string;
};
/**
 * Describes the message gitpod.v1.CreateCustomDomainRequest.
 * Use `create(CreateCustomDomainRequestSchema)` to create a new message.
 */
export declare const CreateCustomDomainRequestSchema: GenMessage<CreateCustomDomainRequest>;
/**
 * CreateCustomDomainResponse is the response message for creating a custom domain
 *
 * @generated from message gitpod.v1.CreateCustomDomainResponse
 */
export type CreateCustomDomainResponse = Message<"gitpod.v1.CreateCustomDomainResponse"> & {
    /**
     * custom_domain is the created custom domain
     *
     * @generated from field: gitpod.v1.CustomDomain custom_domain = 1;
     */
    customDomain?: CustomDomain;
};
/**
 * Describes the message gitpod.v1.CreateCustomDomainResponse.
 * Use `create(CreateCustomDomainResponseSchema)` to create a new message.
 */
export declare const CreateCustomDomainResponseSchema: GenMessage<CreateCustomDomainResponse>;
/**
 * GetCustomDomainRequest is the request message for getting a custom domain
 *
 * @generated from message gitpod.v1.GetCustomDomainRequest
 */
export type GetCustomDomainRequest = Message<"gitpod.v1.GetCustomDomainRequest"> & {
    /**
     * organization_id is the ID of the organization to retrieve custom domain for
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
};
/**
 * Describes the message gitpod.v1.GetCustomDomainRequest.
 * Use `create(GetCustomDomainRequestSchema)` to create a new message.
 */
export declare const GetCustomDomainRequestSchema: GenMessage<GetCustomDomainRequest>;
/**
 * @generated from message gitpod.v1.GetCustomDomainResponse
 */
export type GetCustomDomainResponse = Message<"gitpod.v1.GetCustomDomainResponse"> & {
    /**
     * @generated from field: gitpod.v1.CustomDomain custom_domain = 1;
     */
    customDomain?: CustomDomain;
};
/**
 * Describes the message gitpod.v1.GetCustomDomainResponse.
 * Use `create(GetCustomDomainResponseSchema)` to create a new message.
 */
export declare const GetCustomDomainResponseSchema: GenMessage<GetCustomDomainResponse>;
/**
 * UpdateCustomDomainRequest is the request message for updating a custom domain
 *
 * @generated from message gitpod.v1.UpdateCustomDomainRequest
 */
export type UpdateCustomDomainRequest = Message<"gitpod.v1.UpdateCustomDomainRequest"> & {
    /**
     * organization_id is the ID of the organization to update custom domain for
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * domain_name is the custom domain name
     *
     * @generated from field: string domain_name = 2;
     */
    domainName: string;
    /**
     * aws_account_id is the AWS account ID (deprecated: use cloud_account_id)
     *
     * @generated from field: optional string aws_account_id = 3 [deprecated = true];
     * @deprecated
     */
    awsAccountId?: string;
    /**
     * cloud_account_id is the unified cloud account identifier (AWS Account ID or GCP Project ID)
     *
     * @generated from field: optional string cloud_account_id = 4;
     */
    cloudAccountId?: string;
    /**
     * provider is the cloud provider for this custom domain
     *
     * @generated from field: optional gitpod.v1.CustomDomainProvider provider = 5;
     */
    provider?: CustomDomainProvider;
};
/**
 * Describes the message gitpod.v1.UpdateCustomDomainRequest.
 * Use `create(UpdateCustomDomainRequestSchema)` to create a new message.
 */
export declare const UpdateCustomDomainRequestSchema: GenMessage<UpdateCustomDomainRequest>;
/**
 * UpdateCustomDomainResponse is the response message for updating a custom domain
 *
 * @generated from message gitpod.v1.UpdateCustomDomainResponse
 */
export type UpdateCustomDomainResponse = Message<"gitpod.v1.UpdateCustomDomainResponse"> & {
    /**
     * custom_domain is the updated custom domain
     *
     * @generated from field: gitpod.v1.CustomDomain custom_domain = 1;
     */
    customDomain?: CustomDomain;
};
/**
 * Describes the message gitpod.v1.UpdateCustomDomainResponse.
 * Use `create(UpdateCustomDomainResponseSchema)` to create a new message.
 */
export declare const UpdateCustomDomainResponseSchema: GenMessage<UpdateCustomDomainResponse>;
/**
 * DeleteCustomDomainRequest is the request message for deleting a custom domain
 *
 * @generated from message gitpod.v1.DeleteCustomDomainRequest
 */
export type DeleteCustomDomainRequest = Message<"gitpod.v1.DeleteCustomDomainRequest"> & {
    /**
     * organization_id is the ID of the organization to delete custom domain for
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
};
/**
 * Describes the message gitpod.v1.DeleteCustomDomainRequest.
 * Use `create(DeleteCustomDomainRequestSchema)` to create a new message.
 */
export declare const DeleteCustomDomainRequestSchema: GenMessage<DeleteCustomDomainRequest>;
/**
 * DeleteCustomDomainResponse is the response message for deleting a custom domain
 *
 * @generated from message gitpod.v1.DeleteCustomDomainResponse
 */
export type DeleteCustomDomainResponse = Message<"gitpod.v1.DeleteCustomDomainResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteCustomDomainResponse.
 * Use `create(DeleteCustomDomainResponseSchema)` to create a new message.
 */
export declare const DeleteCustomDomainResponseSchema: GenMessage<DeleteCustomDomainResponse>;
/**
 * GetOIDCConfigRequest is the request message for retrieving OIDC token configuration.
 *
 * @generated from message gitpod.v1.GetOIDCConfigRequest
 */
export type GetOIDCConfigRequest = Message<"gitpod.v1.GetOIDCConfigRequest"> & {
    /**
     * organization_id is the ID of the organization.
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
};
/**
 * Describes the message gitpod.v1.GetOIDCConfigRequest.
 * Use `create(GetOIDCConfigRequestSchema)` to create a new message.
 */
export declare const GetOIDCConfigRequestSchema: GenMessage<GetOIDCConfigRequest>;
/**
 * GetOIDCConfigResponse is the response message for retrieving OIDC token configuration.
 *
 * @generated from message gitpod.v1.GetOIDCConfigResponse
 */
export type GetOIDCConfigResponse = Message<"gitpod.v1.GetOIDCConfigResponse"> & {
    /**
     * oidc_config is the current OIDC token configuration.
     *
     * @generated from field: gitpod.v1.OIDCConfig oidc_config = 1;
     */
    oidcConfig?: OIDCConfig;
};
/**
 * Describes the message gitpod.v1.GetOIDCConfigResponse.
 * Use `create(GetOIDCConfigResponseSchema)` to create a new message.
 */
export declare const GetOIDCConfigResponseSchema: GenMessage<GetOIDCConfigResponse>;
/**
 * UpdateOIDCConfigRequest is the request message for updating OIDC token configuration.
 *
 * @generated from message gitpod.v1.UpdateOIDCConfigRequest
 */
export type UpdateOIDCConfigRequest = Message<"gitpod.v1.UpdateOIDCConfigRequest"> & {
    /**
     * organization_id is the ID of the organization.
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * oidc_config is the desired OIDC token configuration.
     *
     * @generated from field: gitpod.v1.OIDCConfig oidc_config = 2;
     */
    oidcConfig?: OIDCConfig;
};
/**
 * Describes the message gitpod.v1.UpdateOIDCConfigRequest.
 * Use `create(UpdateOIDCConfigRequestSchema)` to create a new message.
 */
export declare const UpdateOIDCConfigRequestSchema: GenMessage<UpdateOIDCConfigRequest>;
/**
 * UpdateOIDCConfigResponse is the response message for updating OIDC token configuration.
 *
 * @generated from message gitpod.v1.UpdateOIDCConfigResponse
 */
export type UpdateOIDCConfigResponse = Message<"gitpod.v1.UpdateOIDCConfigResponse"> & {
    /**
     * oidc_config is the updated OIDC token configuration.
     *
     * @generated from field: gitpod.v1.OIDCConfig oidc_config = 1;
     */
    oidcConfig?: OIDCConfig;
};
/**
 * Describes the message gitpod.v1.UpdateOIDCConfigResponse.
 * Use `create(UpdateOIDCConfigResponseSchema)` to create a new message.
 */
export declare const UpdateOIDCConfigResponseSchema: GenMessage<UpdateOIDCConfigResponse>;
/**
 * OIDCConfig represents the OIDC token configuration for an organization.
 * The version oneof determines which token version is active.
 *
 * @generated from message gitpod.v1.OIDCConfig
 */
export type OIDCConfig = Message<"gitpod.v1.OIDCConfig"> & {
    /**
     * @generated from oneof gitpod.v1.OIDCConfig.version
     */
    version: {
        /**
         * v2 selects V2 OIDC tokens.
         *
         * @generated from field: gitpod.v1.OIDCConfigV2 v2 = 1;
         */
        value: OIDCConfigV2;
        case: "v2";
    } | {
        /**
         * v3 selects V3 OIDC tokens with richer claims and optional sub claim customization (the default for new organizations).
         *
         * @generated from field: gitpod.v1.OIDCConfigV3 v3 = 2;
         */
        value: OIDCConfigV3;
        case: "v3";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.OIDCConfig.
 * Use `create(OIDCConfigSchema)` to create a new message.
 */
export declare const OIDCConfigSchema: GenMessage<OIDCConfig>;
/**
 * OIDCConfigV2 configures V2 OIDC tokens. No additional parameters.
 *
 * @generated from message gitpod.v1.OIDCConfigV2
 */
export type OIDCConfigV2 = Message<"gitpod.v1.OIDCConfigV2"> & {};
/**
 * Describes the message gitpod.v1.OIDCConfigV2.
 * Use `create(OIDCConfigV2Schema)` to create a new message.
 */
export declare const OIDCConfigV2Schema: GenMessage<OIDCConfigV2>;
/**
 * OIDCConfigV3 configures V3 OIDC tokens with optional sub claim customization.
 *
 * @generated from message gitpod.v1.OIDCConfigV3
 */
export type OIDCConfigV3 = Message<"gitpod.v1.OIDCConfigV3"> & {
    /**
     * extra_sub_fields are additional property keys to include in the sub claim.
     * Valid keys include: account_id, user_id, organization_id, project_id, runner_id,
     * environment_id, creator_id, creator_principal, creator_email, creator_name,
     * creator_idp, email, name, idp, runner_name, service_account_id, and
     * dot-notation keys like creator_idp_claims.groups or idp_claims.department.
     *
     * @generated from field: repeated string extra_sub_fields = 1;
     */
    extraSubFields: string[];
};
/**
 * Describes the message gitpod.v1.OIDCConfigV3.
 * Use `create(OIDCConfigV3Schema)` to create a new message.
 */
export declare const OIDCConfigV3Schema: GenMessage<OIDCConfigV3>;
/**
 * @generated from enum gitpod.v1.OrganizationTier
 */
export declare enum OrganizationTier {
    /**
     * @generated from enum value: ORGANIZATION_TIER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: ORGANIZATION_TIER_FREE = 1;
     */
    FREE = 1,
    /**
     * @generated from enum value: ORGANIZATION_TIER_ENTERPRISE = 2;
     */
    ENTERPRISE = 2,
    /**
     * @generated from enum value: ORGANIZATION_TIER_CORE = 3;
     */
    CORE = 3,
    /**
     * @generated from enum value: ORGANIZATION_TIER_FREE_ONA = 4;
     */
    FREE_ONA = 4
}
/**
 * Describes the enum gitpod.v1.OrganizationTier.
 */
export declare const OrganizationTierSchema: GenEnum<OrganizationTier>;
/**
 * @generated from enum gitpod.v1.OrganizationRole
 */
export declare enum OrganizationRole {
    /**
     * @generated from enum value: ORGANIZATION_ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: ORGANIZATION_ROLE_ADMIN = 1;
     */
    ADMIN = 1,
    /**
     * @generated from enum value: ORGANIZATION_ROLE_MEMBER = 2;
     */
    MEMBER = 2
}
/**
 * Describes the enum gitpod.v1.OrganizationRole.
 */
export declare const OrganizationRoleSchema: GenEnum<OrganizationRole>;
/**
 * @generated from enum gitpod.v1.SSOConfigurationState
 */
export declare enum SSOConfigurationState {
    /**
     * @generated from enum value: SSO_CONFIGURATION_STATE_UNSPECIFIED = 0;
     */
    SSO_CONFIGURATION_STATE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: SSO_CONFIGURATION_STATE_INACTIVE = 1;
     */
    SSO_CONFIGURATION_STATE_INACTIVE = 1,
    /**
     * @generated from enum value: SSO_CONFIGURATION_STATE_ACTIVE = 2;
     */
    SSO_CONFIGURATION_STATE_ACTIVE = 2
}
/**
 * Describes the enum gitpod.v1.SSOConfigurationState.
 */
export declare const SSOConfigurationStateSchema: GenEnum<SSOConfigurationState>;
/**
 * @generated from enum gitpod.v1.DomainVerificationState
 */
export declare enum DomainVerificationState {
    /**
     * @generated from enum value: DOMAIN_VERIFICATION_STATE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: DOMAIN_VERIFICATION_STATE_PENDING = 1;
     */
    PENDING = 1,
    /**
     * @generated from enum value: DOMAIN_VERIFICATION_STATE_VERIFIED = 2;
     */
    VERIFIED = 2
}
/**
 * Describes the enum gitpod.v1.DomainVerificationState.
 */
export declare const DomainVerificationStateSchema: GenEnum<DomainVerificationState>;
/**
 * ConversationSharingPolicy controls how agent conversations can be shared.
 *
 * @generated from enum gitpod.v1.ConversationSharingPolicy
 */
export declare enum ConversationSharingPolicy {
    /**
     * @generated from enum value: CONVERSATION_SHARING_POLICY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CONVERSATION_SHARING_POLICY_DISABLED = 1;
     */
    DISABLED = 1,
    /**
     * @generated from enum value: CONVERSATION_SHARING_POLICY_ORGANIZATION = 2;
     */
    ORGANIZATION = 2
}
/**
 * Describes the enum gitpod.v1.ConversationSharingPolicy.
 */
export declare const ConversationSharingPolicySchema: GenEnum<ConversationSharingPolicy>;
/**
 * CodexModelPolicyState describes an explicit per-model Codex availability override.
 *
 * @generated from enum gitpod.v1.CodexModelPolicyState
 */
export declare enum CodexModelPolicyState {
    /**
     * Unspecified is treated as allowed.
     *
     * @generated from enum value: CODEX_MODEL_POLICY_STATE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Explicitly allowed. Equivalent to omitting the model from the policy.
     *
     * @generated from enum value: CODEX_MODEL_POLICY_STATE_ALLOWED = 1;
     */
    ALLOWED = 1,
    /**
     * Explicitly disabled.
     *
     * @generated from enum value: CODEX_MODEL_POLICY_STATE_DISABLED = 2;
     */
    DISABLED = 2
}
/**
 * Describes the enum gitpod.v1.CodexModelPolicyState.
 */
export declare const CodexModelPolicyStateSchema: GenEnum<CodexModelPolicyState>;
/**
 * @generated from enum gitpod.v1.TermsOfServiceAcceptanceStatus
 */
export declare enum TermsOfServiceAcceptanceStatus {
    /**
     * @generated from enum value: TERMS_OF_SERVICE_ACCEPTANCE_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: TERMS_OF_SERVICE_ACCEPTANCE_STATUS_ACCEPTED = 1;
     */
    ACCEPTED = 1,
    /**
     * @generated from enum value: TERMS_OF_SERVICE_ACCEPTANCE_STATUS_PENDING = 2;
     */
    PENDING = 2
}
/**
 * Describes the enum gitpod.v1.TermsOfServiceAcceptanceStatus.
 */
export declare const TermsOfServiceAcceptanceStatusSchema: GenEnum<TermsOfServiceAcceptanceStatus>;
/**
 * CustomDomainProvider represents the cloud provider for custom domain configuration
 *
 * @generated from enum gitpod.v1.CustomDomainProvider
 */
export declare enum CustomDomainProvider {
    /**
     * @generated from enum value: CUSTOM_DOMAIN_PROVIDER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CUSTOM_DOMAIN_PROVIDER_AWS = 1;
     */
    AWS = 1,
    /**
     * @generated from enum value: CUSTOM_DOMAIN_PROVIDER_GCP = 2;
     */
    GCP = 2
}
/**
 * Describes the enum gitpod.v1.CustomDomainProvider.
 */
export declare const CustomDomainProviderSchema: GenEnum<CustomDomainProvider>;
/**
 * @generated from service gitpod.v1.OrganizationService
 */
export declare const OrganizationService: GenService<{
    /**
     * Creates a new organization with the specified name and settings.
     *
     * Use this method to:
     * - Create a new organization for team collaboration
     * - Set up automatic domain-based invites for team members
     * - Join the organization immediately upon creation
     *
     * ### Examples
     *
     * - Create a basic organization:
     *
     *   Creates an organization with just a name.
     *
     *   ```yaml
     *   name: "Acme Corp Engineering"
     *   joinOrganization: true
     *   ```
     *
     * - Create with domain-based invites:
     *
     *   Creates an organization that automatically invites users with matching email domains.
     *
     *   ```yaml
     *   name: "Acme Corp"
     *   joinOrganization: true
     *   inviteAccountsWithMatchingDomain: true
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.CreateOrganization
     */
    createOrganization: {
        methodKind: "unary";
        input: typeof CreateOrganizationRequestSchema;
        output: typeof CreateOrganizationResponseSchema;
    };
    /**
     * Allows users to join an organization through direct ID, invite link, or domain-based auto-join.
     *
     * Use this method to:
     * - Join an organization via direct ID or invite
     * - Join automatically based on email domain
     * - Accept organization invitations
     *
     * ### Examples
     *
     * - Join via organization ID:
     *
     *   Joins an organization directly when you have the ID.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * - Join via invite:
     *
     *   Accepts an organization invitation link.
     *
     *   ```yaml
     *   inviteId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.JoinOrganization
     */
    joinOrganization: {
        methodKind: "unary";
        input: typeof JoinOrganizationRequestSchema;
        output: typeof JoinOrganizationResponseSchema;
    };
    /**
     * Gets details about a specific organization.
     *
     * Use this method to:
     * - Retrieve organization settings and configuration
     * - Check organization membership status
     * - View domain verification settings
     *
     * ### Examples
     *
     * - Get organization details:
     *
     *   Retrieves information about a specific organization.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.GetOrganization
     */
    getOrganization: {
        methodKind: "unary";
        input: typeof GetOrganizationRequestSchema;
        output: typeof GetOrganizationResponseSchema;
    };
    /**
     * Updates an organization's settings including name, invite domains, and member policies.
     *
     * Use this method to:
     * - Modify organization display name
     * - Configure email domain restrictions
     * - Update organization-wide settings
     * - Manage member access policies
     *
     * ### Examples
     *
     * - Update basic settings:
     *
     *   Changes organization name and invite domains.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   name: "New Company Name"
     *   inviteDomains:
     *     domains:
     *       - "company.com"
     *       - "subsidiary.com"
     *   ```
     *
     * - Remove domain restrictions:
     *
     *   Clears all domain-based invite restrictions.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   inviteDomains:
     *     domains: []
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.UpdateOrganization
     */
    updateOrganization: {
        methodKind: "unary";
        input: typeof UpdateOrganizationRequestSchema;
        output: typeof UpdateOrganizationResponseSchema;
    };
    /**
     * Permanently deletes an organization.
     *
     * Use this method to:
     * - Remove unused organizations
     * - Clean up test organizations
     * - Complete organization migration
     *
     * ### Examples
     *
     * - Delete organization:
     *
     *   Permanently removes an organization and all its data.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.DeleteOrganization
     */
    deleteOrganization: {
        methodKind: "unary";
        input: typeof DeleteOrganizationRequestSchema;
        output: typeof DeleteOrganizationResponseSchema;
    };
    /**
     * Lists and filters organization members with optional pagination.
     *
     * Use this method to:
     * - View all organization members
     * - Monitor member activity
     * - Manage team membership
     *
     * ### Examples
     *
     * - List active members:
     *
     *   Retrieves active members with pagination.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - List with pagination:
     *
     *   Retrieves next page of members.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   pagination:
     *     pageSize: 50
     *     token: "next-page-token-from-previous-response"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.ListMembers
     */
    listMembers: {
        methodKind: "unary";
        input: typeof ListMembersRequestSchema;
        output: typeof ListMembersResponseSchema;
    };
    /**
     * Manages organization membership and roles by setting a user's role within the organization.
     *
     * Use this method to:
     * - Promote members to admin role
     * - Change member permissions
     * - Demote admins to regular members
     *
     * ### Examples
     *
     * - Promote to admin:
     *
     *   Makes a user an organization administrator.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   userId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   role: ORGANIZATION_ROLE_ADMIN
     *   ```
     *
     * - Change to member:
     *
     *   Changes a user's role to regular member.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   userId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   role: ORGANIZATION_ROLE_MEMBER
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.SetRole
     */
    setRole: {
        methodKind: "unary";
        input: typeof SetRoleRequestSchema;
        output: typeof SetRoleResponseSchema;
    };
    /**
     * Creates an invite link for joining an organization.
     * Any existing OrganizationInvites are invalidated and can no longer be used.
     *
     * Use this method to:
     * - Generate shareable invite links
     * - Manage team growth
     * - Control organization access
     *
     * ### Examples
     *
     * - Create organization invite:
     *
     *   Generates a new invite link for the organization.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.CreateOrganizationInvite
     */
    createOrganizationInvite: {
        methodKind: "unary";
        input: typeof CreateOrganizationInviteRequestSchema;
        output: typeof CreateOrganizationInviteResponseSchema;
    };
    /**
     * @generated from rpc gitpod.v1.OrganizationService.GetOrganizationInvite
     */
    getOrganizationInvite: {
        methodKind: "unary";
        input: typeof GetOrganizationInviteRequestSchema;
        output: typeof GetOrganizationInviteResponseSchema;
    };
    /**
     * Retrieves organization details and membership info based on an invite link.
     *
     * Use this method to:
     * - Preview organization details before joining
     * - Validate invite link authenticity
     * - Check organization size and activity
     * - View team information before accepting
     *
     * ### Examples
     *
     * - Get invite summary:
     *
     *   Retrieves organization information from an invite.
     *
     *   ```yaml
     *   inviteId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.GetOrganizationInviteSummary
     */
    getOrganizationInviteSummary: {
        methodKind: "unary";
        input: typeof GetOrganizationInviteSummaryRequestSchema;
        output: typeof GetOrganizationInviteSummaryResponseSchema;
    };
    /**
     * Removes a user from an organization while preserving organization data.
     *
     * Use this method to:
     * - Remove yourself from an organization
     * - Clean up inactive memberships
     * - Transfer project ownership before leaving
     * - Manage team transitions
     *
     * ### Examples
     *
     * - Leave organization:
     *
     *   Removes user from organization membership.
     *
     *   ```yaml
     *   userId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   ```
     *
     * Note: Ensure all projects and resources are transferred before leaving.
     *
     * @generated from rpc gitpod.v1.OrganizationService.LeaveOrganization
     */
    leaveOrganization: {
        methodKind: "unary";
        input: typeof LeaveOrganizationRequestSchema;
        output: typeof LeaveOrganizationResponseSchema;
    };
    /**
     * Creates or updates SSO configuration for organizational authentication.
     *
     * Use this method to:
     * - Configure OIDC-based SSO providers
     * - Set up built-in providers (Google, GitHub, etc.)
     * - Define custom identity providers
     * - Manage authentication policies
     *
     * ### Examples
     *
     * - Configure built-in Google SSO:
     *
     *   Sets up SSO using Google Workspace.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   clientId: "012345678-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com"
     *   clientSecret: "GOCSPX-abcdefghijklmnopqrstuvwxyz123456"
     *   issuerUrl: "https://accounts.google.com"
     *   emailDomain: "acme-corp.com"
     *   ```
     *
     * - Configure custom OIDC provider:
     *
     *   Sets up SSO with a custom identity provider.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   clientId: "acme-corp-gitpod"
     *   clientSecret: "secret-token-value"
     *   issuerUrl: "https://sso.acme-corp.com"
     *   emailDomain: "acme-corp.com"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.CreateSSOConfiguration
     */
    createSSOConfiguration: {
        methodKind: "unary";
        input: typeof CreateSSOConfigurationRequestSchema;
        output: typeof CreateSSOConfigurationResponseSchema;
    };
    /**
     * Retrieves a specific SSO configuration.
     *
     * Use this method to:
     * - View SSO provider details
     * - Check configuration status
     * - Verify SSO settings
     *
     * ### Examples
     *
     * - Get SSO configuration:
     *
     *   Retrieves details of a specific SSO configuration.
     *
     *   ```yaml
     *   ssoConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.GetSSOConfiguration
     */
    getSSOConfiguration: {
        methodKind: "unary";
        input: typeof GetSSOConfigurationRequestSchema;
        output: typeof GetSSOConfigurationResponseSchema;
    };
    /**
     * Lists and filters SSO configurations for an organization.
     *
     * Use this method to:
     * - View all SSO providers
     * - Monitor authentication status
     * - Audit security settings
     * - Manage provider configurations
     *
     * ### Examples
     *
     * - List active configurations:
     *
     *   Shows all active SSO providers.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - List by provider type:
     *
     *   Shows custom SSO configurations.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   pagination:
     *     pageSize: 20
     *     token: "next-page-token-from-previous-response"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.ListSSOConfigurations
     */
    listSSOConfigurations: {
        methodKind: "unary";
        input: typeof ListSSOConfigurationsRequestSchema;
        output: typeof ListSSOConfigurationsResponseSchema;
    };
    /**
     * Removes an SSO configuration from an organization.
     *
     * Use this method to:
     * - Disable SSO authentication
     * - Remove outdated providers
     * - Clean up unused configurations
     *
     * ### Examples
     *
     * - Delete SSO configuration:
     *
     *   Removes a specific SSO configuration.
     *
     *   ```yaml
     *   ssoConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.DeleteSSOConfiguration
     */
    deleteSSOConfiguration: {
        methodKind: "unary";
        input: typeof DeleteSSOConfigurationRequestSchema;
        output: typeof DeleteSSOConfigurationResponseSchema;
    };
    /**
     * Updates SSO provider settings and authentication rules.
     *
     * Use this method to:
     * - Rotate client credentials
     * - Update provider endpoints
     * - Modify claim mappings
     * - Change authentication policies
     * - Toggle SSO enforcement
     *
     * ### Examples
     *
     * - Update credentials:
     *
     *   Rotates client ID and secret.
     *
     *   ```yaml
     *   ssoConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   clientId: "new-client-id"
     *   clientSecret: "new-client-secret"
     *   ```
     *
     * - Update provider status:
     *
     *   Activates or deactivates SSO provider.
     *
     *   ```yaml
     *   ssoConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   state: SSO_CONFIGURATION_STATE_ACTIVE
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.UpdateSSOConfiguration
     */
    updateSSOConfiguration: {
        methodKind: "unary";
        input: typeof UpdateSSOConfigurationRequestSchema;
        output: typeof UpdateSSOConfigurationResponseSchema;
    };
    /**
     * Creates a new SCIM configuration for automated user provisioning.
     *
     * Use this method to:
     * - Set up SCIM 2.0 provisioning from an identity provider
     * - Generate a bearer token for SCIM API authentication
     * - Link SCIM provisioning to an existing SSO configuration
     *
     * ### Examples
     *
     * - Create basic SCIM configuration:
     *
     *   Creates a SCIM configuration linked to an SSO provider with default 1 year token expiration.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ssoConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * - Create SCIM configuration with custom token expiration:
     *
     *   Creates a SCIM configuration with a 90-day token expiration.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ssoConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   tokenExpiresIn: "7776000s"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.CreateSCIMConfiguration
     */
    createSCIMConfiguration: {
        methodKind: "unary";
        input: typeof CreateSCIMConfigurationRequestSchema;
        output: typeof CreateSCIMConfigurationResponseSchema;
    };
    /**
     * Retrieves a specific SCIM configuration.
     *
     * Use this method to:
     * - View SCIM configuration details
     * - Check if SCIM is enabled
     * - Verify SSO linkage
     *
     * ### Examples
     *
     * - Get SCIM configuration:
     *
     *   Retrieves details of a specific SCIM configuration.
     *
     *   ```yaml
     *   scimConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.GetSCIMConfiguration
     */
    getSCIMConfiguration: {
        methodKind: "unary";
        input: typeof GetSCIMConfigurationRequestSchema;
        output: typeof GetSCIMConfigurationResponseSchema;
    };
    /**
     * Lists SCIM configurations for an organization.
     *
     * Use this method to:
     * - View all SCIM configurations
     * - Monitor provisioning status
     * - Audit SCIM settings
     *
     * ### Examples
     *
     * - List SCIM configurations:
     *
     *   Shows all SCIM configurations for an organization.
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.ListSCIMConfigurations
     */
    listSCIMConfigurations: {
        methodKind: "unary";
        input: typeof ListSCIMConfigurationsRequestSchema;
        output: typeof ListSCIMConfigurationsResponseSchema;
    };
    /**
     * Updates a SCIM configuration.
     *
     * Use this method to:
     * - Enable or disable SCIM provisioning
     * - Link or unlink SSO configuration
     * - Update configuration name
     *
     * ### Examples
     *
     * - Disable SCIM:
     *
     *   Disables SCIM provisioning.
     *
     *   ```yaml
     *   scimConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   enabled: false
     *   ```
     *
     * - Link to SSO:
     *
     *   Links SCIM configuration to an SSO provider.
     *
     *   ```yaml
     *   scimConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ssoConfigurationId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.UpdateSCIMConfiguration
     */
    updateSCIMConfiguration: {
        methodKind: "unary";
        input: typeof UpdateSCIMConfigurationRequestSchema;
        output: typeof UpdateSCIMConfigurationResponseSchema;
    };
    /**
     * Removes a SCIM configuration from an organization.
     *
     * Use this method to:
     * - Disable SCIM provisioning completely
     * - Remove unused configurations
     * - Clean up after migration
     *
     * ### Examples
     *
     * - Delete SCIM configuration:
     *
     *   Removes a specific SCIM configuration.
     *
     *   ```yaml
     *   scimConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.DeleteSCIMConfiguration
     */
    deleteSCIMConfiguration: {
        methodKind: "unary";
        input: typeof DeleteSCIMConfigurationRequestSchema;
        output: typeof DeleteSCIMConfigurationResponseSchema;
    };
    /**
     * Regenerates the bearer token for a SCIM configuration.
     *
     * Use this method to:
     * - Rotate SCIM credentials
     * - Recover from token compromise
     * - Update IdP configuration
     *
     * ### Examples
     *
     * - Regenerate token:
     *
     *   Creates a new bearer token with the same expiration duration as the previous token.
     *
     *   ```yaml
     *   scimConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * - Regenerate token with new expiration:
     *
     *   Creates a new bearer token with a custom 180-day expiration.
     *
     *   ```yaml
     *   scimConfigurationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   tokenExpiresIn: "15552000s"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.RegenerateSCIMToken
     */
    regenerateSCIMToken: {
        methodKind: "unary";
        input: typeof RegenerateSCIMTokenRequestSchema;
        output: typeof RegenerateSCIMTokenResponseSchema;
    };
    /**
     * Initiates domain verification process to enable organization features.
     *
     * Use this method to:
     * - Start domain ownership verification
     * - Enable automatic team joining
     * - Set up SSO restrictions
     * - Configure email-based policies
     *
     * ### Examples
     *
     * - Verify primary domain:
     *
     *   Starts verification for main company domain.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   domain: "acme-corp.com"
     *   ```
     *
     * - Verify subsidiary domain:
     *
     *   Adds verification for additional company domain.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   domain: "acme-subsidiary.com"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.CreateDomainVerification
     */
    createDomainVerification: {
        methodKind: "unary";
        input: typeof CreateDomainVerificationRequestSchema;
        output: typeof CreateDomainVerificationResponseSchema;
    };
    /**
     * Retrieves the status of a domain verification request.
     *
     * Use this method to:
     * - Check verification progress
     * - View verification requirements
     * - Monitor domain status
     *
     * ### Examples
     *
     * - Get verification status:
     *
     *   Checks the current state of a domain verification.
     *
     *   ```yaml
     *   domainVerificationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.GetDomainVerification
     */
    getDomainVerification: {
        methodKind: "unary";
        input: typeof GetDomainVerificationRequestSchema;
        output: typeof GetDomainVerificationResponseSchema;
    };
    /**
     * Lists and monitors domain verification status across an organization.
     *
     * Use this method to:
     * - Track verification progress
     * - View all verified domains
     * - Monitor pending verifications
     * - Audit domain settings
     *
     * ### Examples
     *
     * - List all verifications:
     *
     *   Shows all domain verifications regardless of status.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - List with pagination:
     *
     *   Retrieves next page of verifications.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   pagination:
     *     pageSize: 20
     *     token: "next-page-token-from-previous-response"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.ListDomainVerifications
     */
    listDomainVerifications: {
        methodKind: "unary";
        input: typeof ListDomainVerificationsRequestSchema;
        output: typeof ListDomainVerificationsResponseSchema;
    };
    /**
     * Verifies domain ownership for an organization.
     *
     * Use this method to:
     * - Complete domain verification process
     * - Enable domain-based features
     * - Validate DNS configuration
     *
     * ### Examples
     *
     * - Verify domain ownership:
     *
     *   Verifies ownership after DNS records are configured.
     *
     *   ```yaml
     *   domainVerificationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.VerifyDomain
     */
    verifyDomain: {
        methodKind: "unary";
        input: typeof VerifyDomainRequestSchema;
        output: typeof VerifyDomainResponseSchema;
    };
    /**
     * Removes a domain verification request.
     *
     * Use this method to:
     * - Cancel pending verifications
     * - Remove verified domains
     * - Clean up unused domain records
     *
     * ### Examples
     *
     * - Delete verification:
     *
     *   Removes a domain verification request.
     *
     *   ```yaml
     *   domainVerificationId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.DeleteDomainVerification
     */
    deleteDomainVerification: {
        methodKind: "unary";
        input: typeof DeleteDomainVerificationRequestSchema;
        output: typeof DeleteDomainVerificationResponseSchema;
    };
    /**
     * Gets organization policy settings by organization ID.
     *
     * Use this method to:
     * - Retrieve current policy settings for an organization
     * - View resource limits and restrictions
     * - Check allowed editors and other configurations
     *
     * ### Examples
     *
     * - Get organization policies:
     *
     *   Retrieves policy settings for a specific organization.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.GetOrganizationPolicies
     */
    getOrganizationPolicies: {
        methodKind: "unary";
        input: typeof GetOrganizationPoliciesRequestSchema;
        output: typeof GetOrganizationPoliciesResponseSchema;
    };
    /**
     * Updates organization policy settings.
     *
     * Use this method to:
     * - Configure editor restrictions
     * - Set environment resource limits
     * - Define project creation permissions
     * - Customize default configurations
     *
     * ### Examples
     *
     * - Update editor policies:
     *
     *   Restricts available editors and sets a default.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   allowedEditorIds:
     *     - "vscode"
     *     - "jetbrains"
     *   defaultEditorId: "vscode"
     *   ```
     *
     * - Set environment limits:
     *
     *   Configures limits for environment usage.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   maximumEnvironmentTimeout: "3600s"
     *   maximumRunningEnvironmentsPerUser: "5"
     *   maximumEnvironmentsPerUser: "20"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.UpdateOrganizationPolicies
     */
    updateOrganizationPolicies: {
        methodKind: "unary";
        input: typeof UpdateOrganizationPoliciesRequestSchema;
        output: typeof UpdateOrganizationPoliciesResponseSchema;
    };
    /**
     * Retrieves the OIDC token configuration for an organization.
     *
     * Use this method to:
     * - Check which OIDC token version is active (V2 or V3)
     * - View extra sub claim fields (V3 only)
     *
     * ### Examples
     *
     * - Get OIDC config:
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.GetOIDCConfig
     */
    getOIDCConfig: {
        methodKind: "unary";
        input: typeof GetOIDCConfigRequestSchema;
        output: typeof GetOIDCConfigResponseSchema;
    };
    /**
     * Updates the OIDC token configuration for an organization.
     *
     * Use this method to:
     * - Switch between OIDC token versions (V2 or V3)
     * - Configure extra sub claim fields (V3 only)
     *
     * ### Examples
     *
     * - Enable V3 tokens with extra sub fields:
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   oidcConfig:
     *     v3:
     *       extraSubFields:
     *         - "environment_id"
     *         - "creator_email"
     *   ```
     *
     * - Switch back to V2 tokens:
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   oidcConfig:
     *     v2: {}
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.UpdateOIDCConfig
     */
    updateOIDCConfig: {
        methodKind: "unary";
        input: typeof UpdateOIDCConfigRequestSchema;
        output: typeof UpdateOIDCConfigResponseSchema;
    };
    /**
     * Retrieves the announcement banner configuration for an organization.
     *
     * Use this method to fetch the current announcement banner settings.
     * All organization members can read the banner configuration.
     *
     * ### Examples
     *
     * - Get announcement banner:
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.GetAnnouncementBanner
     */
    getAnnouncementBanner: {
        methodKind: "unary";
        input: typeof GetAnnouncementBannerRequestSchema;
        output: typeof GetAnnouncementBannerResponseSchema;
    };
    /**
     * Updates the announcement banner configuration for an organization.
     *
     * Use this method to configure the announcement banner displayed to all users.
     * Only organization admins can update the banner. Requires Enterprise tier.
     *
     * ### Examples
     *
     * - Enable announcement banner:
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   message: "Scheduled maintenance on Saturday 10pm-2am UTC"
     *   enabled: true
     *   ```
     *
     * - Disable announcement banner:
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   enabled: false
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.UpdateAnnouncementBanner
     */
    updateAnnouncementBanner: {
        methodKind: "unary";
        input: typeof UpdateAnnouncementBannerRequestSchema;
        output: typeof UpdateAnnouncementBannerResponseSchema;
    };
    /**
     * Gets the Terms of Service for an organization.
     *
     * @generated from rpc gitpod.v1.OrganizationService.GetTermsOfService
     */
    getTermsOfService: {
        methodKind: "unary";
        input: typeof GetTermsOfServiceRequestSchema;
        output: typeof GetTermsOfServiceResponseSchema;
    };
    /**
     * Updates the Terms of Service for an organization.
     *
     * @generated from rpc gitpod.v1.OrganizationService.UpdateTermsOfService
     */
    updateTermsOfService: {
        methodKind: "unary";
        input: typeof UpdateTermsOfServiceRequestSchema;
        output: typeof UpdateTermsOfServiceResponseSchema;
    };
    /**
     * Records acceptance of a Terms of Service version for the caller.
     *
     * @generated from rpc gitpod.v1.OrganizationService.AcceptTermsOfService
     */
    acceptTermsOfService: {
        methodKind: "unary";
        input: typeof AcceptTermsOfServiceRequestSchema;
        output: typeof AcceptTermsOfServiceResponseSchema;
    };
    /**
     * Lists Terms of Service versions for an organization.
     *
     * Use this method to:
     * - Show immutable Terms of Service history
     * - Inspect previously published versions
     *
     * ### Examples
     *
     * - List versions:
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.ListTermsOfServiceVersions
     */
    listTermsOfServiceVersions: {
        methodKind: "unary";
        input: typeof ListTermsOfServiceVersionsRequestSchema;
        output: typeof ListTermsOfServiceVersionsResponseSchema;
    };
    /**
     * Lists per-member acceptance of a Terms of Service version.
     *
     * Use this method to:
     * - See which members have accepted a given version
     * - Find members still pending acceptance for a given version
     *
     * ### Examples
     *
     * - List acceptances for version 2:
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   version: 2
     *   pagination:
     *     pageSize: 50
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.ListTermsOfServiceAcceptances
     */
    listTermsOfServiceAcceptances: {
        methodKind: "unary";
        input: typeof ListTermsOfServiceAcceptancesRequestSchema;
        output: typeof ListTermsOfServiceAcceptancesResponseSchema;
    };
    /**
     * Returns a signed download URL for a CSV export of per-member acceptance of a Terms of Service version.
     *
     * @generated from rpc gitpod.v1.OrganizationService.GetTermsOfServiceAcceptancesExport
     */
    getTermsOfServiceAcceptancesExport: {
        methodKind: "unary";
        input: typeof GetTermsOfServiceAcceptancesExportRequestSchema;
        output: typeof GetTermsOfServiceAcceptancesExportResponseSchema;
    };
    /**
     * Sets the Stripe customer ID for an organization's billing configuration.
     *
     * Use this method to associate an existing Stripe customer with an organization
     * during enterprise customer onboarding.
     *
     * ### Examples
     *
     * Deprecated: Use BillingService.SetupEnterpriseBilling instead.
     * This method is no longer functional and will return an Unimplemented error.
     *
     * - Set Stripe customer ID:
     *
     *   Associates a Stripe customer with an organization.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   stripeCustomerId: "cus_ABC123"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.SetStripeCustomerID
     * @deprecated
     */
    setStripeCustomerID: {
        methodKind: "unary";
        input: typeof SetStripeCustomerIDRequestSchema;
        output: typeof SetStripeCustomerIDResponseSchema;
    };
    /**
     * Creates a custom domain configuration for an organization.
     *
     * Use this method to configure custom domains for organization workspaces
     *
     * ### Examples
     *
     * - Configure AWS custom domain:
     *
     *   Sets up a custom domain with AWS provider.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   domainName: "workspaces.acme-corp.com"
     *   provider: CUSTOM_DOMAIN_PROVIDER_AWS
     *   awsAccountId: "123456789012"
     *   ```
     *
     *
     * @generated from rpc gitpod.v1.OrganizationService.CreateCustomDomain
     */
    createCustomDomain: {
        methodKind: "unary";
        input: typeof CreateCustomDomainRequestSchema;
        output: typeof CreateCustomDomainResponseSchema;
    };
    /**
     * Retrieves a specific custom domain configuration.
     *
     * Use this method to view custom domain details
     *
     * ### Examples
     *
     * - Get custom domain configuration:
     *
     *   Retrieves details of a specific custom domain.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.GetCustomDomain
     */
    getCustomDomain: {
        methodKind: "unary";
        input: typeof GetCustomDomainRequestSchema;
        output: typeof GetCustomDomainResponseSchema;
    };
    /**
     * Updates custom domain configuration settings.
     *
     * Use this method to:
     * - Update cloud provider settings
     * - Change AWS account ID
     * - Modify domain configuration
     *
     * ### Examples
     *
     * - Update AWS account ID:
     *
     *   Changes the AWS account ID for the custom domain.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   domainName: "workspaces.acme-corp.com"
     *   awsAccountId: "987654321098"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.UpdateCustomDomain
     */
    updateCustomDomain: {
        methodKind: "unary";
        input: typeof UpdateCustomDomainRequestSchema;
        output: typeof UpdateCustomDomainResponseSchema;
    };
    /**
     * Removes a custom domain configuration from an organization.
     *
     * Use this method to:
     * - Disable custom domain functionality
     * - Remove outdated configurations
     * - Clean up unused domains
     *
     * ### Examples
     *
     * - Delete custom domain configuration:
     *
     *   Removes a specific custom domain configuration.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.OrganizationService.DeleteCustomDomain
     */
    deleteCustomDomain: {
        methodKind: "unary";
        input: typeof DeleteCustomDomainRequestSchema;
        output: typeof DeleteCustomDomainResponseSchema;
    };
}>;
