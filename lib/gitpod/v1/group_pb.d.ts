import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { ResourceType } from "./event_pb";
import type { Principal, Subject } from "./identity_pb";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/group.proto.
 */
export declare const file_gitpod_v1_group: GenFile;
/**
 * @generated from message gitpod.v1.ListGroupsRequest
 */
export type ListGroupsRequest = Message<"gitpod.v1.ListGroupsRequest"> & {
    /**
     * pagination contains the pagination options for listing groups
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * filter contains options for filtering the list of groups.
     *
     * @generated from field: gitpod.v1.ListGroupsRequest.Filter filter = 2;
     */
    filter?: ListGroupsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListGroupsRequest.
 * Use `create(ListGroupsRequestSchema)` to create a new message.
 */
export declare const ListGroupsRequestSchema: GenMessage<ListGroupsRequest>;
/**
 * @generated from message gitpod.v1.ListGroupsRequest.Filter
 */
export type ListGroupsRequest_Filter = Message<"gitpod.v1.ListGroupsRequest.Filter"> & {
    /**
     * search performs case-insensitive search across group name, description, and ID
     *
     * @generated from field: string search = 1;
     */
    search: string;
    /**
     * group_ids filters the response to only groups with the specified IDs
     *
     * @generated from field: repeated string group_ids = 2;
     */
    groupIds: string[];
    /**
     * system_managed filters groups by their system_managed flag.
     * When set, only groups matching this value are returned.
     *
     * @generated from field: optional bool system_managed = 3;
     */
    systemManaged?: boolean;
    /**
     * direct_share filters groups by their direct_share flag.
     * When set, only groups matching this value are returned.
     *
     * @generated from field: optional bool direct_share = 4;
     */
    directShare?: boolean;
    /**
     * exclude_assigned_to_resource excludes groups that already have a role
     * assignment on the specified resource. Used by share dialogs to hide
     * groups that are already granted access.
     *
     * @generated from field: gitpod.v1.ListGroupsRequest.Filter.ExcludeAssignedToResource exclude_assigned_to_resource = 5;
     */
    excludeAssignedToResource?: ListGroupsRequest_Filter_ExcludeAssignedToResource;
};
/**
 * Describes the message gitpod.v1.ListGroupsRequest.Filter.
 * Use `create(ListGroupsRequest_FilterSchema)` to create a new message.
 */
export declare const ListGroupsRequest_FilterSchema: GenMessage<ListGroupsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListGroupsRequest.Filter.ExcludeAssignedToResource
 */
export type ListGroupsRequest_Filter_ExcludeAssignedToResource = Message<"gitpod.v1.ListGroupsRequest.Filter.ExcludeAssignedToResource"> & {
    /**
     * @generated from field: gitpod.v1.ResourceType resource_type = 1;
     */
    resourceType: ResourceType;
    /**
     * @generated from field: string resource_id = 2;
     */
    resourceId: string;
};
/**
 * Describes the message gitpod.v1.ListGroupsRequest.Filter.ExcludeAssignedToResource.
 * Use `create(ListGroupsRequest_Filter_ExcludeAssignedToResourceSchema)` to create a new message.
 */
export declare const ListGroupsRequest_Filter_ExcludeAssignedToResourceSchema: GenMessage<ListGroupsRequest_Filter_ExcludeAssignedToResource>;
/**
 * @generated from message gitpod.v1.ListGroupsResponse
 */
export type ListGroupsResponse = Message<"gitpod.v1.ListGroupsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.Group groups = 2;
     */
    groups: Group[];
};
/**
 * Describes the message gitpod.v1.ListGroupsResponse.
 * Use `create(ListGroupsResponseSchema)` to create a new message.
 */
export declare const ListGroupsResponseSchema: GenMessage<ListGroupsResponse>;
/**
 * @generated from message gitpod.v1.Group
 */
export type Group = Message<"gitpod.v1.Group"> & {
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
     * system_managed indicates that this group is created by the system automatically
     *
     * @generated from field: bool system_managed = 4;
     */
    systemManaged: boolean;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 6;
     */
    updatedAt?: Timestamp;
    /**
     * @generated from field: string description = 7;
     */
    description: string;
    /**
     * member_count is the total number of members in this group
     *
     * @generated from field: int32 member_count = 8;
     */
    memberCount: number;
    /**
     * direct_share indicates that this group is used for direct user sharing on resources.
     * These groups are hidden from regular group listings.
     *
     * @generated from field: bool direct_share = 9;
     */
    directShare: boolean;
};
/**
 * Describes the message gitpod.v1.Group.
 * Use `create(GroupSchema)` to create a new message.
 */
export declare const GroupSchema: GenMessage<Group>;
/**
 * GroupMembership represents a subject's membership in a group
 *
 * @generated from message gitpod.v1.GroupMembership
 */
export type GroupMembership = Message<"gitpod.v1.GroupMembership"> & {
    /**
     * Unique identifier for the group membership
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Subject (user, runner, environment, service account, etc.)
     *
     * @generated from field: gitpod.v1.Subject subject = 2;
     */
    subject?: Subject;
    /**
     * Group identifier
     *
     * @generated from field: string group_id = 3;
     */
    groupId: string;
    /**
     * Subject's display name
     *
     * @generated from field: string name = 4;
     */
    name: string;
    /**
     * Subject's avatar URL
     *
     * @generated from field: string avatar_url = 5;
     */
    avatarUrl: string;
};
/**
 * Describes the message gitpod.v1.GroupMembership.
 * Use `create(GroupMembershipSchema)` to create a new message.
 */
export declare const GroupMembershipSchema: GenMessage<GroupMembership>;
/**
 * RoleAssignment represents a role assigned to a group on a specific resource
 *
 * @generated from message gitpod.v1.RoleAssignment
 */
export type RoleAssignment = Message<"gitpod.v1.RoleAssignment"> & {
    /**
     * Unique identifier for the role assignment
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Group identifier
     *
     * @generated from field: string group_id = 2;
     */
    groupId: string;
    /**
     * Organization identifier
     *
     * @generated from field: string organization_id = 3;
     */
    organizationId: string;
    /**
     * Resource identifier
     *
     * @generated from field: string resource_id = 4;
     */
    resourceId: string;
    /**
     * Type of resource (runner, project, environment, etc.)
     *
     * @generated from field: gitpod.v1.ResourceType resource_type = 5;
     */
    resourceType: ResourceType;
    /**
     * Role assigned to the group on this resource
     *
     * @generated from field: gitpod.v1.ResourceRole resource_role = 6;
     */
    resourceRole: ResourceRole;
    /**
     * The org-level role that created this assignment, if any.
     * RESOURCE_ROLE_UNSPECIFIED means this is a direct share (manually created).
     * Non-zero (e.g., ORG_PROJECTS_ADMIN, ORG_RUNNERS_ADMIN) means this
     * assignment was derived from an org-level role.
     *
     * @generated from field: optional gitpod.v1.ResourceRole derived_from_org_role = 7;
     */
    derivedFromOrgRole?: ResourceRole;
};
/**
 * Describes the message gitpod.v1.RoleAssignment.
 * Use `create(RoleAssignmentSchema)` to create a new message.
 */
export declare const RoleAssignmentSchema: GenMessage<RoleAssignment>;
/**
 * CreateGroup messages
 *
 * @generated from message gitpod.v1.CreateGroupRequest
 */
export type CreateGroupRequest = Message<"gitpod.v1.CreateGroupRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
};
/**
 * Describes the message gitpod.v1.CreateGroupRequest.
 * Use `create(CreateGroupRequestSchema)` to create a new message.
 */
export declare const CreateGroupRequestSchema: GenMessage<CreateGroupRequest>;
/**
 * @generated from message gitpod.v1.CreateGroupResponse
 */
export type CreateGroupResponse = Message<"gitpod.v1.CreateGroupResponse"> & {
    /**
     * @generated from field: gitpod.v1.Group group = 1;
     */
    group?: Group;
};
/**
 * Describes the message gitpod.v1.CreateGroupResponse.
 * Use `create(CreateGroupResponseSchema)` to create a new message.
 */
export declare const CreateGroupResponseSchema: GenMessage<CreateGroupResponse>;
/**
 * GetGroup messages
 *
 * @generated from message gitpod.v1.GetGroupRequest
 */
export type GetGroupRequest = Message<"gitpod.v1.GetGroupRequest"> & {
    /**
     * Deprecated: use the group oneof instead.
     *
     * @generated from field: string group_id = 1 [deprecated = true];
     * @deprecated
     */
    groupId: string;
    /**
     * An identifier for the group to get.
     *
     * @generated from oneof gitpod.v1.GetGroupRequest.group
     */
    group: {
        /**
         * id looks up the group by its unique ID.
         *
         * @generated from field: string id = 2;
         */
        value: string;
        case: "id";
    } | {
        /**
         * name looks up the group by its name within the caller's organization.
         *
         * @generated from field: string name = 3;
         */
        value: string;
        case: "name";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.GetGroupRequest.
 * Use `create(GetGroupRequestSchema)` to create a new message.
 */
export declare const GetGroupRequestSchema: GenMessage<GetGroupRequest>;
/**
 * @generated from message gitpod.v1.GetGroupResponse
 */
export type GetGroupResponse = Message<"gitpod.v1.GetGroupResponse"> & {
    /**
     * @generated from field: gitpod.v1.Group group = 1;
     */
    group?: Group;
};
/**
 * Describes the message gitpod.v1.GetGroupResponse.
 * Use `create(GetGroupResponseSchema)` to create a new message.
 */
export declare const GetGroupResponseSchema: GenMessage<GetGroupResponse>;
/**
 * UpdateGroup messages
 *
 * @generated from message gitpod.v1.UpdateGroupRequest
 */
export type UpdateGroupRequest = Message<"gitpod.v1.UpdateGroupRequest"> & {
    /**
     * @generated from field: string group_id = 1;
     */
    groupId: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
};
/**
 * Describes the message gitpod.v1.UpdateGroupRequest.
 * Use `create(UpdateGroupRequestSchema)` to create a new message.
 */
export declare const UpdateGroupRequestSchema: GenMessage<UpdateGroupRequest>;
/**
 * @generated from message gitpod.v1.UpdateGroupResponse
 */
export type UpdateGroupResponse = Message<"gitpod.v1.UpdateGroupResponse"> & {
    /**
     * @generated from field: gitpod.v1.Group group = 1;
     */
    group?: Group;
};
/**
 * Describes the message gitpod.v1.UpdateGroupResponse.
 * Use `create(UpdateGroupResponseSchema)` to create a new message.
 */
export declare const UpdateGroupResponseSchema: GenMessage<UpdateGroupResponse>;
/**
 * DeleteGroup messages
 *
 * @generated from message gitpod.v1.DeleteGroupRequest
 */
export type DeleteGroupRequest = Message<"gitpod.v1.DeleteGroupRequest"> & {
    /**
     * @generated from field: string group_id = 1;
     */
    groupId: string;
};
/**
 * Describes the message gitpod.v1.DeleteGroupRequest.
 * Use `create(DeleteGroupRequestSchema)` to create a new message.
 */
export declare const DeleteGroupRequestSchema: GenMessage<DeleteGroupRequest>;
/**
 * Empty response
 *
 * @generated from message gitpod.v1.DeleteGroupResponse
 */
export type DeleteGroupResponse = Message<"gitpod.v1.DeleteGroupResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteGroupResponse.
 * Use `create(DeleteGroupResponseSchema)` to create a new message.
 */
export declare const DeleteGroupResponseSchema: GenMessage<DeleteGroupResponse>;
/**
 * CreateMembership messages
 *
 * @generated from message gitpod.v1.CreateMembershipRequest
 */
export type CreateMembershipRequest = Message<"gitpod.v1.CreateMembershipRequest"> & {
    /**
     * @generated from field: string group_id = 1;
     */
    groupId: string;
    /**
     * Subject to add to the group
     *
     * @generated from field: gitpod.v1.Subject subject = 2;
     */
    subject?: Subject;
};
/**
 * Describes the message gitpod.v1.CreateMembershipRequest.
 * Use `create(CreateMembershipRequestSchema)` to create a new message.
 */
export declare const CreateMembershipRequestSchema: GenMessage<CreateMembershipRequest>;
/**
 * @generated from message gitpod.v1.CreateMembershipResponse
 */
export type CreateMembershipResponse = Message<"gitpod.v1.CreateMembershipResponse"> & {
    /**
     * @generated from field: gitpod.v1.GroupMembership member = 1;
     */
    member?: GroupMembership;
};
/**
 * Describes the message gitpod.v1.CreateMembershipResponse.
 * Use `create(CreateMembershipResponseSchema)` to create a new message.
 */
export declare const CreateMembershipResponseSchema: GenMessage<CreateMembershipResponse>;
/**
 * DeleteMembership messages
 *
 * @generated from message gitpod.v1.DeleteMembershipRequest
 */
export type DeleteMembershipRequest = Message<"gitpod.v1.DeleteMembershipRequest"> & {
    /**
     * The membership to delete
     *
     * @generated from field: string membership_id = 1;
     */
    membershipId: string;
};
/**
 * Describes the message gitpod.v1.DeleteMembershipRequest.
 * Use `create(DeleteMembershipRequestSchema)` to create a new message.
 */
export declare const DeleteMembershipRequestSchema: GenMessage<DeleteMembershipRequest>;
/**
 * Empty response
 *
 * @generated from message gitpod.v1.DeleteMembershipResponse
 */
export type DeleteMembershipResponse = Message<"gitpod.v1.DeleteMembershipResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteMembershipResponse.
 * Use `create(DeleteMembershipResponseSchema)` to create a new message.
 */
export declare const DeleteMembershipResponseSchema: GenMessage<DeleteMembershipResponse>;
/**
 * GetMembership messages
 *
 * @generated from message gitpod.v1.GetMembershipRequest
 */
export type GetMembershipRequest = Message<"gitpod.v1.GetMembershipRequest"> & {
    /**
     * @generated from field: string group_id = 1;
     */
    groupId: string;
    /**
     * Subject to check membership for
     *
     * @generated from field: gitpod.v1.Subject subject = 2;
     */
    subject?: Subject;
};
/**
 * Describes the message gitpod.v1.GetMembershipRequest.
 * Use `create(GetMembershipRequestSchema)` to create a new message.
 */
export declare const GetMembershipRequestSchema: GenMessage<GetMembershipRequest>;
/**
 * @generated from message gitpod.v1.GetMembershipResponse
 */
export type GetMembershipResponse = Message<"gitpod.v1.GetMembershipResponse"> & {
    /**
     * The membership if found, nil if subject is not a member
     *
     * @generated from field: gitpod.v1.GroupMembership member = 1;
     */
    member?: GroupMembership;
};
/**
 * Describes the message gitpod.v1.GetMembershipResponse.
 * Use `create(GetMembershipResponseSchema)` to create a new message.
 */
export declare const GetMembershipResponseSchema: GenMessage<GetMembershipResponse>;
/**
 * ListMemberships messages
 *
 * @generated from message gitpod.v1.ListMembershipsRequest
 */
export type ListMembershipsRequest = Message<"gitpod.v1.ListMembershipsRequest"> & {
    /**
     * pagination contains the pagination options for listing memberships
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: string group_id = 2;
     */
    groupId: string;
    /**
     * filter contains options for filtering the list of memberships.
     *
     * @generated from field: gitpod.v1.ListMembershipsRequest.Filter filter = 3;
     */
    filter?: ListMembershipsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListMembershipsRequest.
 * Use `create(ListMembershipsRequestSchema)` to create a new message.
 */
export declare const ListMembershipsRequestSchema: GenMessage<ListMembershipsRequest>;
/**
 * @generated from message gitpod.v1.ListMembershipsRequest.Filter
 */
export type ListMembershipsRequest_Filter = Message<"gitpod.v1.ListMembershipsRequest.Filter"> & {
    /**
     * search performs case-insensitive search across member name, email, ID,
     * and service account name and description
     *
     * @generated from field: string search = 1;
     */
    search: string;
};
/**
 * Describes the message gitpod.v1.ListMembershipsRequest.Filter.
 * Use `create(ListMembershipsRequest_FilterSchema)` to create a new message.
 */
export declare const ListMembershipsRequest_FilterSchema: GenMessage<ListMembershipsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListMembershipsResponse
 */
export type ListMembershipsResponse = Message<"gitpod.v1.ListMembershipsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.GroupMembership members = 2;
     */
    members: GroupMembership[];
};
/**
 * Describes the message gitpod.v1.ListMembershipsResponse.
 * Use `create(ListMembershipsResponseSchema)` to create a new message.
 */
export declare const ListMembershipsResponseSchema: GenMessage<ListMembershipsResponse>;
/**
 * CreateRoleAssignment messages
 *
 * @generated from message gitpod.v1.CreateRoleAssignmentRequest
 */
export type CreateRoleAssignmentRequest = Message<"gitpod.v1.CreateRoleAssignmentRequest"> & {
    /**
     * @generated from field: string group_id = 1;
     */
    groupId: string;
    /**
     * @generated from field: gitpod.v1.ResourceType resource_type = 2;
     */
    resourceType: ResourceType;
    /**
     * @generated from field: string resource_id = 3;
     */
    resourceId: string;
    /**
     * @generated from field: gitpod.v1.ResourceRole resource_role = 4;
     */
    resourceRole: ResourceRole;
};
/**
 * Describes the message gitpod.v1.CreateRoleAssignmentRequest.
 * Use `create(CreateRoleAssignmentRequestSchema)` to create a new message.
 */
export declare const CreateRoleAssignmentRequestSchema: GenMessage<CreateRoleAssignmentRequest>;
/**
 * @generated from message gitpod.v1.CreateRoleAssignmentResponse
 */
export type CreateRoleAssignmentResponse = Message<"gitpod.v1.CreateRoleAssignmentResponse"> & {
    /**
     * @generated from field: gitpod.v1.RoleAssignment assignment = 1;
     */
    assignment?: RoleAssignment;
};
/**
 * Describes the message gitpod.v1.CreateRoleAssignmentResponse.
 * Use `create(CreateRoleAssignmentResponseSchema)` to create a new message.
 */
export declare const CreateRoleAssignmentResponseSchema: GenMessage<CreateRoleAssignmentResponse>;
/**
 * ListRoleAssignments messages
 *
 * @generated from message gitpod.v1.ListRoleAssignmentsRequest
 */
export type ListRoleAssignmentsRequest = Message<"gitpod.v1.ListRoleAssignmentsRequest"> & {
    /**
     * Pagination parameters
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * Filter parameters
     *
     * @generated from field: gitpod.v1.ListRoleAssignmentsRequest.Filter filter = 2;
     */
    filter?: ListRoleAssignmentsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListRoleAssignmentsRequest.
 * Use `create(ListRoleAssignmentsRequestSchema)` to create a new message.
 */
export declare const ListRoleAssignmentsRequestSchema: GenMessage<ListRoleAssignmentsRequest>;
/**
 * @generated from message gitpod.v1.ListRoleAssignmentsRequest.Filter
 */
export type ListRoleAssignmentsRequest_Filter = Message<"gitpod.v1.ListRoleAssignmentsRequest.Filter"> & {
    /**
     * resource_types filters the response to only role assignments for these resource types
     *
     * @generated from field: repeated gitpod.v1.ResourceType resource_types = 1;
     */
    resourceTypes: ResourceType[];
    /**
     * resource_roles filters the response to only role assignments with these specific roles
     *
     * @generated from field: repeated gitpod.v1.ResourceRole resource_roles = 2;
     */
    resourceRoles: ResourceRole[];
    /**
     * group_id filters the response to only role assignments for this specific group
     * Empty string is allowed and means no filtering by group
     *
     * @generated from field: string group_id = 3;
     */
    groupId: string;
    /**
     * user_id filters the response to only role assignments for groups that this user is a member of
     * Empty string is allowed and means no filtering by user
     *
     * @generated from field: string user_id = 4;
     */
    userId: string;
    /**
     * Filters by a single resource. Non-admin callers with :grant permission
     * on the resource can see role assignments from groups they don't belong to.
     * Mutually exclusive with resource_ids.
     *
     * @generated from field: string resource_id = 5;
     */
    resourceId: string;
    /**
     * Filters by multiple resources in a single request. Non-admin callers with
     * :grant permission on a resource can see all role assignments for that
     * resource, even from groups they don't belong to. The :grant check is
     * applied per-resource within the batch.
     * Mutually exclusive with resource_id.
     *
     * @generated from field: repeated string resource_ids = 6;
     */
    resourceIds: string[];
};
/**
 * Describes the message gitpod.v1.ListRoleAssignmentsRequest.Filter.
 * Use `create(ListRoleAssignmentsRequest_FilterSchema)` to create a new message.
 */
export declare const ListRoleAssignmentsRequest_FilterSchema: GenMessage<ListRoleAssignmentsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListRoleAssignmentsResponse
 */
export type ListRoleAssignmentsResponse = Message<"gitpod.v1.ListRoleAssignmentsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.RoleAssignment assignments = 2;
     */
    assignments: RoleAssignment[];
};
/**
 * Describes the message gitpod.v1.ListRoleAssignmentsResponse.
 * Use `create(ListRoleAssignmentsResponseSchema)` to create a new message.
 */
export declare const ListRoleAssignmentsResponseSchema: GenMessage<ListRoleAssignmentsResponse>;
/**
 * DeleteRoleAssignment messages
 *
 * @generated from message gitpod.v1.DeleteRoleAssignmentRequest
 */
export type DeleteRoleAssignmentRequest = Message<"gitpod.v1.DeleteRoleAssignmentRequest"> & {
    /**
     * @generated from field: string assignment_id = 1;
     */
    assignmentId: string;
};
/**
 * Describes the message gitpod.v1.DeleteRoleAssignmentRequest.
 * Use `create(DeleteRoleAssignmentRequestSchema)` to create a new message.
 */
export declare const DeleteRoleAssignmentRequestSchema: GenMessage<DeleteRoleAssignmentRequest>;
/**
 * Empty response
 *
 * @generated from message gitpod.v1.DeleteRoleAssignmentResponse
 */
export type DeleteRoleAssignmentResponse = Message<"gitpod.v1.DeleteRoleAssignmentResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteRoleAssignmentResponse.
 * Use `create(DeleteRoleAssignmentResponseSchema)` to create a new message.
 */
export declare const DeleteRoleAssignmentResponseSchema: GenMessage<DeleteRoleAssignmentResponse>;
/**
 * ShareResourceWithPrincipal messages
 *
 * @generated from message gitpod.v1.ShareResourceWithPrincipalRequest
 */
export type ShareResourceWithPrincipalRequest = Message<"gitpod.v1.ShareResourceWithPrincipalRequest"> & {
    /**
     * Type of resource to share (runner, project, etc.)
     *
     * @generated from field: gitpod.v1.ResourceType resource_type = 1;
     */
    resourceType: ResourceType;
    /**
     * ID of the resource to share
     *
     * @generated from field: string resource_id = 2;
     */
    resourceId: string;
    /**
     * Type of principal to share with (user or service account)
     *
     * @generated from field: gitpod.v1.Principal principal = 3;
     */
    principal: Principal;
    /**
     * ID of the principal (user or service account) to share with
     *
     * @generated from field: string principal_id = 4;
     */
    principalId: string;
    /**
     * Role to grant the principal on the resource
     *
     * @generated from field: gitpod.v1.ResourceRole role = 5;
     */
    role: ResourceRole;
};
/**
 * Describes the message gitpod.v1.ShareResourceWithPrincipalRequest.
 * Use `create(ShareResourceWithPrincipalRequestSchema)` to create a new message.
 */
export declare const ShareResourceWithPrincipalRequestSchema: GenMessage<ShareResourceWithPrincipalRequest>;
/**
 * Empty response on success
 *
 * @generated from message gitpod.v1.ShareResourceWithPrincipalResponse
 */
export type ShareResourceWithPrincipalResponse = Message<"gitpod.v1.ShareResourceWithPrincipalResponse"> & {};
/**
 * Describes the message gitpod.v1.ShareResourceWithPrincipalResponse.
 * Use `create(ShareResourceWithPrincipalResponseSchema)` to create a new message.
 */
export declare const ShareResourceWithPrincipalResponseSchema: GenMessage<ShareResourceWithPrincipalResponse>;
/**
 * UnshareResourceWithPrincipal messages
 *
 * @generated from message gitpod.v1.UnshareResourceWithPrincipalRequest
 */
export type UnshareResourceWithPrincipalRequest = Message<"gitpod.v1.UnshareResourceWithPrincipalRequest"> & {
    /**
     * Type of resource to unshare
     *
     * @generated from field: gitpod.v1.ResourceType resource_type = 1;
     */
    resourceType: ResourceType;
    /**
     * ID of the resource to unshare
     *
     * @generated from field: string resource_id = 2;
     */
    resourceId: string;
    /**
     * Type of principal to remove access from (user or service account)
     *
     * @generated from field: gitpod.v1.Principal principal = 3;
     */
    principal: Principal;
    /**
     * ID of the principal (user or service account) to remove access from
     *
     * @generated from field: string principal_id = 4;
     */
    principalId: string;
};
/**
 * Describes the message gitpod.v1.UnshareResourceWithPrincipalRequest.
 * Use `create(UnshareResourceWithPrincipalRequestSchema)` to create a new message.
 */
export declare const UnshareResourceWithPrincipalRequestSchema: GenMessage<UnshareResourceWithPrincipalRequest>;
/**
 * Empty response on success
 *
 * @generated from message gitpod.v1.UnshareResourceWithPrincipalResponse
 */
export type UnshareResourceWithPrincipalResponse = Message<"gitpod.v1.UnshareResourceWithPrincipalResponse"> & {};
/**
 * Describes the message gitpod.v1.UnshareResourceWithPrincipalResponse.
 * Use `create(UnshareResourceWithPrincipalResponseSchema)` to create a new message.
 */
export declare const UnshareResourceWithPrincipalResponseSchema: GenMessage<UnshareResourceWithPrincipalResponse>;
/**
 * ResourceRole represents roles that can be assigned to groups on resources
 * These map directly to the roles defined in backend/db/rule/rbac/role/role.go
 *
 * @generated from enum gitpod.v1.ResourceRole
 */
export declare enum ResourceRole {
    /**
     * @generated from enum value: RESOURCE_ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Organization roles
     *
     * @generated from enum value: RESOURCE_ROLE_ORG_ADMIN = 1;
     */
    ORG_ADMIN = 1,
    /**
     * @generated from enum value: RESOURCE_ROLE_ORG_MEMBER = 2;
     */
    ORG_MEMBER = 2,
    /**
     * @generated from enum value: RESOURCE_ROLE_ORG_RUNNERS_ADMIN = 50;
     */
    ORG_RUNNERS_ADMIN = 50,
    /**
     * @generated from enum value: RESOURCE_ROLE_ORG_PROJECTS_ADMIN = 51;
     */
    ORG_PROJECTS_ADMIN = 51,
    /**
     * @generated from enum value: RESOURCE_ROLE_ORG_AUTOMATIONS_ADMIN = 52;
     */
    ORG_AUTOMATIONS_ADMIN = 52,
    /**
     * @generated from enum value: RESOURCE_ROLE_ORG_GROUPS_ADMIN = 53;
     */
    ORG_GROUPS_ADMIN = 53,
    /**
     * @generated from enum value: RESOURCE_ROLE_ORG_ENVIRONMENTS_READER = 66;
     */
    ORG_ENVIRONMENTS_READER = 66,
    /**
     * @generated from enum value: RESOURCE_ROLE_ORG_AUDIT_LOG_READER = 64;
     */
    ORG_AUDIT_LOG_READER = 64,
    /**
     * @generated from enum value: RESOURCE_ROLE_ORG_BILLING_VIEWER = 67;
     */
    ORG_BILLING_VIEWER = 67,
    /**
     * @generated from enum value: RESOURCE_ROLE_ORG_INSIGHTS_VIEWER = 68;
     */
    ORG_INSIGHTS_VIEWER = 68,
    /**
     * @generated from enum value: RESOURCE_ROLE_ORG_SECURITY_ADMIN = 69;
     */
    ORG_SECURITY_ADMIN = 69,
    /**
     * Group roles
     *
     * @generated from enum value: RESOURCE_ROLE_GROUP_ADMIN = 3;
     */
    GROUP_ADMIN = 3,
    /**
     * @generated from enum value: RESOURCE_ROLE_GROUP_VIEWER = 4;
     */
    GROUP_VIEWER = 4,
    /**
     * User roles
     *
     * @generated from enum value: RESOURCE_ROLE_USER_IDENTITY = 5;
     */
    USER_IDENTITY = 5,
    /**
     * @generated from enum value: RESOURCE_ROLE_USER_VIEWER = 6;
     */
    USER_VIEWER = 6,
    /**
     * @generated from enum value: RESOURCE_ROLE_USER_ADMIN = 7;
     */
    USER_ADMIN = 7,
    /**
     * Environment roles
     *
     * @generated from enum value: RESOURCE_ROLE_ENVIRONMENT_IDENTITY = 8;
     */
    ENVIRONMENT_IDENTITY = 8,
    /**
     * @generated from enum value: RESOURCE_ROLE_ENVIRONMENT_ADMIN = 9;
     */
    ENVIRONMENT_ADMIN = 9,
    /**
     * @generated from enum value: RESOURCE_ROLE_ENVIRONMENT_USER = 10;
     */
    ENVIRONMENT_USER = 10,
    /**
     * @generated from enum value: RESOURCE_ROLE_ENVIRONMENT_VIEWER = 11;
     */
    ENVIRONMENT_VIEWER = 11,
    /**
     * @generated from enum value: RESOURCE_ROLE_ENVIRONMENT_RUNNER = 12;
     */
    ENVIRONMENT_RUNNER = 12,
    /**
     * Runner roles
     *
     * @generated from enum value: RESOURCE_ROLE_RUNNER_IDENTITY = 13;
     */
    RUNNER_IDENTITY = 13,
    /**
     * @generated from enum value: RESOURCE_ROLE_RUNNER_ADMIN = 14;
     */
    RUNNER_ADMIN = 14,
    /**
     * @generated from enum value: RESOURCE_ROLE_RUNNER_LOCAL_ADMIN = 15;
     */
    RUNNER_LOCAL_ADMIN = 15,
    /**
     * @generated from enum value: RESOURCE_ROLE_RUNNER_MANAGED_ADMIN = 16;
     */
    RUNNER_MANAGED_ADMIN = 16,
    /**
     * @generated from enum value: RESOURCE_ROLE_RUNNER_USER = 17;
     */
    RUNNER_USER = 17,
    /**
     * @generated from enum value: RESOURCE_ROLE_RUNNER_CONFIGURATION_READER = 18;
     */
    RUNNER_CONFIGURATION_READER = 18,
    /**
     * Host authentication token roles
     *
     * @generated from enum value: RESOURCE_ROLE_HOST_AUTHENTICATION_TOKEN_ADMIN = 19;
     */
    HOST_AUTHENTICATION_TOKEN_ADMIN = 19,
    /**
     * @generated from enum value: RESOURCE_ROLE_HOST_AUTHENTICATION_TOKEN_UPDATER = 20;
     */
    HOST_AUTHENTICATION_TOKEN_UPDATER = 20,
    /**
     * Project roles
     *
     * @generated from enum value: RESOURCE_ROLE_PROJECT_ADMIN = 21;
     */
    PROJECT_ADMIN = 21,
    /**
     * @generated from enum value: RESOURCE_ROLE_PROJECT_USER = 22;
     */
    PROJECT_USER = 22,
    /**
     * @generated from enum value: RESOURCE_ROLE_PROJECT_EDITOR = 23;
     */
    PROJECT_EDITOR = 23,
    /**
     * Environment service roles
     *
     * @generated from enum value: RESOURCE_ROLE_ENVIRONMENT_SERVICE_ADMIN = 24;
     */
    ENVIRONMENT_SERVICE_ADMIN = 24,
    /**
     * @generated from enum value: RESOURCE_ROLE_ENVIRONMENT_SERVICE_VIEWER = 25;
     */
    ENVIRONMENT_SERVICE_VIEWER = 25,
    /**
     * @generated from enum value: RESOURCE_ROLE_ENVIRONMENT_SERVICE_USER = 26;
     */
    ENVIRONMENT_SERVICE_USER = 26,
    /**
     * @generated from enum value: RESOURCE_ROLE_ENVIRONMENT_SERVICE_ENV = 27;
     */
    ENVIRONMENT_SERVICE_ENV = 27,
    /**
     * Environment task roles
     *
     * @generated from enum value: RESOURCE_ROLE_ENVIRONMENT_TASK_ADMIN = 28;
     */
    ENVIRONMENT_TASK_ADMIN = 28,
    /**
     * @generated from enum value: RESOURCE_ROLE_ENVIRONMENT_TASK_VIEWER = 29;
     */
    ENVIRONMENT_TASK_VIEWER = 29,
    /**
     * @generated from enum value: RESOURCE_ROLE_ENVIRONMENT_TASK_USER = 30;
     */
    ENVIRONMENT_TASK_USER = 30,
    /**
     * @generated from enum value: RESOURCE_ROLE_ENVIRONMENT_TASK_ENV = 31;
     */
    ENVIRONMENT_TASK_ENV = 31,
    /**
     * Service account roles
     *
     * @generated from enum value: RESOURCE_ROLE_SERVICE_ACCOUNT_IDENTITY = 32;
     */
    SERVICE_ACCOUNT_IDENTITY = 32,
    /**
     * @generated from enum value: RESOURCE_ROLE_SERVICE_ACCOUNT_ADMIN = 33;
     */
    SERVICE_ACCOUNT_ADMIN = 33,
    /**
     * @generated from enum value: RESOURCE_ROLE_AGENT_EXECUTION_USER = 35;
     */
    AGENT_EXECUTION_USER = 35,
    /**
     * @generated from enum value: RESOURCE_ROLE_AGENT_EXECUTION_ADMIN = 36;
     */
    AGENT_EXECUTION_ADMIN = 36,
    /**
     * @generated from enum value: RESOURCE_ROLE_AGENT_EXECUTION_RUNNER = 37;
     */
    AGENT_EXECUTION_RUNNER = 37,
    /**
     * @generated from enum value: RESOURCE_ROLE_AGENT_EXECUTION_OUTPUTS_REPORTER = 46;
     */
    AGENT_EXECUTION_OUTPUTS_REPORTER = 46,
    /**
     * @generated from enum value: RESOURCE_ROLE_AGENT_EXECUTION_VIEWER = 65;
     */
    AGENT_EXECUTION_VIEWER = 65,
    /**
     * Agent roles
     *
     * @generated from enum value: RESOURCE_ROLE_AGENT_ADMIN = 38;
     */
    AGENT_ADMIN = 38,
    /**
     * @generated from enum value: RESOURCE_ROLE_AGENT_VIEWER = 39;
     */
    AGENT_VIEWER = 39,
    /**
     * @generated from enum value: RESOURCE_ROLE_AGENT_EXECUTOR = 40;
     */
    AGENT_EXECUTOR = 40,
    /**
     * Workflow roles
     *
     * @generated from enum value: RESOURCE_ROLE_WORKFLOW_ADMIN = 41;
     */
    WORKFLOW_ADMIN = 41,
    /**
     * @generated from enum value: RESOURCE_ROLE_WORKFLOW_USER = 42;
     */
    WORKFLOW_USER = 42,
    /**
     * @generated from enum value: RESOURCE_ROLE_WORKFLOW_VIEWER = 43;
     */
    WORKFLOW_VIEWER = 43,
    /**
     * @generated from enum value: RESOURCE_ROLE_WORKFLOW_EXECUTOR = 47;
     */
    WORKFLOW_EXECUTOR = 47,
    /**
     * Snapshot roles
     *
     * @generated from enum value: RESOURCE_ROLE_SNAPSHOT_ADMIN = 44;
     */
    SNAPSHOT_ADMIN = 44,
    /**
     * @generated from enum value: RESOURCE_ROLE_SNAPSHOT_RUNNER = 45;
     */
    SNAPSHOT_RUNNER = 45,
    /**
     * Webhook roles
     *
     * @generated from enum value: RESOURCE_ROLE_WEBHOOK_ADMIN = 48;
     */
    WEBHOOK_ADMIN = 48,
    /**
     * @generated from enum value: RESOURCE_ROLE_WEBHOOK_VIEWER = 49;
     */
    WEBHOOK_VIEWER = 49,
    /**
     * @generated from enum value: RESOURCE_ROLE_WARMPOOL_RUNNER = 54;
     */
    WARMPOOL_RUNNER = 54,
    /**
     * @generated from enum value: RESOURCE_ROLE_WARMPOOL_ADMIN = 55;
     */
    WARMPOOL_ADMIN = 55,
    /**
     * @generated from enum value: RESOURCE_ROLE_WARMPOOL_VIEWER = 56;
     */
    WARMPOOL_VIEWER = 56,
    /**
     * Session roles
     *
     * @generated from enum value: RESOURCE_ROLE_SESSION_ADMIN = 60;
     */
    SESSION_ADMIN = 60,
    /**
     * @generated from enum value: RESOURCE_ROLE_SESSION_USER = 61;
     */
    SESSION_USER = 61,
    /**
     * @generated from enum value: RESOURCE_ROLE_TEAM_ADMIN = 62;
     */
    TEAM_ADMIN = 62,
    /**
     * @generated from enum value: RESOURCE_ROLE_TEAM_VIEWER = 63;
     */
    TEAM_VIEWER = 63,
    /**
     * @generated from enum value: RESOURCE_ROLE_SECURITY_POLICY_ADMIN = 70;
     */
    SECURITY_POLICY_ADMIN = 70,
    /**
     * @generated from enum value: RESOURCE_ROLE_SECURITY_POLICY_VIEWER = 71;
     */
    SECURITY_POLICY_VIEWER = 71
}
/**
 * Describes the enum gitpod.v1.ResourceRole.
 */
export declare const ResourceRoleSchema: GenEnum<ResourceRole>;
/**
 * @generated from service gitpod.v1.GroupService
 */
export declare const GroupService: GenService<{
    /**
     * Creates a new group within an organization.
     *
     * Use this method to:
     * - Create teams for access control
     * - Organize users by department or function
     * - Set up role-based access groups
     *
     * ### Examples
     *
     * - Create a basic group:
     *
     *   Creates a group with name and description.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   name: "Backend Team"
     *   description: "Backend engineering team"
     *   ```
     *
     * ### Authorization
     *
     * Requires `org:admin` role on the organization.
     *
     * @generated from rpc gitpod.v1.GroupService.CreateGroup
     */
    createGroup: {
        methodKind: "unary";
        input: typeof CreateGroupRequestSchema;
        output: typeof CreateGroupResponseSchema;
    };
    /**
     * Gets information about a specific group by ID or name.
     *
     * Use this method to:
     * - Retrieve group details and metadata
     * - Check group configuration
     * - View member count
     *
     * ### Examples
     *
     * - Get group by ID:
     *
     *   Retrieves information about a specific group by its unique ID.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * ### Authorization
     *
     * All organization members can view group information (transparency model).
     *
     * @generated from rpc gitpod.v1.GroupService.GetGroup
     */
    getGroup: {
        methodKind: "unary";
        input: typeof GetGroupRequestSchema;
        output: typeof GetGroupResponseSchema;
    };
    /**
     * Lists groups with optional pagination.
     *
     * Use this method to:
     * - View all groups in an organization
     * - Check group memberships
     * - Monitor group configurations
     * - Audit group access
     *
     * ### Examples
     *
     * - List all groups:
     *
     *   Shows all groups with pagination.
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - List with custom page size:
     *
     *   Shows groups with specified page size.
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 50
     *     token: "next-page-token-from-previous-response"
     *   ```
     *
     * ### Authorization
     *
     * All organization members can list groups (transparency model).
     *
     * @generated from rpc gitpod.v1.GroupService.ListGroups
     */
    listGroups: {
        methodKind: "unary";
        input: typeof ListGroupsRequestSchema;
        output: typeof ListGroupsResponseSchema;
    };
    /**
     * Updates group information.
     *
     * Use this method to:
     * - Rename a group
     * - Update group description
     *
     * ### Examples
     *
     * - Update group name:
     *
     *   Changes the name of an existing group.
     *
     *   ```yaml
     *   groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   name: "Platform Team"
     *   description: "Platform engineering team"
     *   ```
     *
     * ### Authorization
     *
     * Requires `org:admin` permission on the organization or `group:admin` permission on the specific group.
     *
     * @generated from rpc gitpod.v1.GroupService.UpdateGroup
     */
    updateGroup: {
        methodKind: "unary";
        input: typeof UpdateGroupRequestSchema;
        output: typeof UpdateGroupResponseSchema;
    };
    /**
     * Deletes a group and removes all its resource assignments.
     *
     * When a group is deleted, all resource assignments revert to org-level scope.
     *
     * Use this method to:
     * - Remove unused groups
     * - Clean up after team reorganization
     *
     * ### Examples
     *
     * - Delete a group:
     *
     *   Permanently removes a group.
     *
     *   ```yaml
     *   groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * ### Authorization
     *
     * Requires `org:admin` role on the organization.
     *
     * @generated from rpc gitpod.v1.GroupService.DeleteGroup
     */
    deleteGroup: {
        methodKind: "unary";
        input: typeof DeleteGroupRequestSchema;
        output: typeof DeleteGroupResponseSchema;
    };
    /**
     * Creates a membership for a user in a group.
     *
     * Use this method to:
     * - Add users to groups
     * - Grant group-based permissions to users
     *
     * ### Examples
     *
     * - Add a user to a group:
     *
     *   Creates a membership for a user in a group.
     *
     *   ```yaml
     *   groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   subject:
     *     id: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *     principal: PRINCIPAL_USER
     *   ```
     *
     * ### Authorization
     *
     * Requires `org:admin` permission on the organization or `group:admin` permission on the specific group.
     *
     * @generated from rpc gitpod.v1.GroupService.CreateMembership
     */
    createMembership: {
        methodKind: "unary";
        input: typeof CreateMembershipRequestSchema;
        output: typeof CreateMembershipResponseSchema;
    };
    /**
     * Deletes a membership for a user in a group.
     *
     * Use this method to:
     * - Remove users from groups
     * - Revoke group-based permissions
     *
     * ### Examples
     *
     * - Remove a user from a group:
     *
     *   Deletes a membership by its ID.
     *
     *   ```yaml
     *   membershipId: "a1b2c3d4-5678-90ab-cdef-1234567890ab"
     *   ```
     *
     * ### Authorization
     *
     * Requires `org:admin` permission on the organization or `group:admin` permission on the specific group.
     *
     * @generated from rpc gitpod.v1.GroupService.DeleteMembership
     */
    deleteMembership: {
        methodKind: "unary";
        input: typeof DeleteMembershipRequestSchema;
        output: typeof DeleteMembershipResponseSchema;
    };
    /**
     * Gets a specific membership by group ID and subject.
     *
     * Use this method to:
     * - Check if a user or service account is a member of a group
     * - Verify group membership for access control
     *
     * ### Examples
     *
     * - Check user membership:
     *
     *   Checks if a user is a member of a specific group.
     *
     *   ```yaml
     *   groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   subject:
     *     id: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *     principal: PRINCIPAL_USER
     *   ```
     *
     * ### Authorization
     *
     * All organization members can check group membership (transparency model).
     *
     * @generated from rpc gitpod.v1.GroupService.GetMembership
     */
    getMembership: {
        methodKind: "unary";
        input: typeof GetMembershipRequestSchema;
        output: typeof GetMembershipResponseSchema;
    };
    /**
     * Lists all memberships of a group.
     *
     * Use this method to:
     * - View all members of a group
     * - Audit group membership
     *
     * ### Examples
     *
     * - List group members:
     *
     *   Shows all members of a specific group.
     *
     *   ```yaml
     *   groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * ### Authorization
     *
     * All organization members can view group membership (transparency model).
     *
     * @generated from rpc gitpod.v1.GroupService.ListMemberships
     */
    listMemberships: {
        methodKind: "unary";
        input: typeof ListMembershipsRequestSchema;
        output: typeof ListMembershipsResponseSchema;
    };
    /**
     * Creates a role assignment for a group on a resource.
     *
     * Use this method to:
     * - Assign specific roles to groups on runners, projects, or environments
     * - Grant group-based access to resources
     *
     * ### Examples
     *
     * - Assign admin role on a runner:
     *
     *   Grants the group admin access to a runner.
     *
     *   ```yaml
     *   groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   resourceType: RESOURCE_TYPE_RUNNER
     *   resourceId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   resourceRole: RESOURCE_ROLE_RUNNER_ADMIN
     *   ```
     *
     * - Assign user role on a project:
     *
     *   Grants the group user access to a project.
     *
     *   ```yaml
     *   groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   resourceType: RESOURCE_TYPE_PROJECT
     *   resourceId: "a1b2c3d4-5678-90ab-cdef-1234567890ab"
     *   resourceRole: RESOURCE_ROLE_PROJECT_USER
     *   ```
     *
     * ### Authorization
     *
     * Requires admin role on the specific resource.
     *
     * @generated from rpc gitpod.v1.GroupService.CreateRoleAssignment
     */
    createRoleAssignment: {
        methodKind: "unary";
        input: typeof CreateRoleAssignmentRequestSchema;
        output: typeof CreateRoleAssignmentResponseSchema;
    };
    /**
     * Lists role assignments for a group or resource.
     *
     * Use this method to:
     * - View all role assignments for a group
     * - Audit resource access
     * - Check which groups have access to resources
     *
     * ### Examples
     *
     * - List role assignments for a group:
     *
     *   Shows all role assignments for a specific group.
     *
     *   ```yaml
     *   filter:
     *     groupId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - List role assignments by resource type:
     *
     *   Shows all role assignments for runners.
     *
     *   ```yaml
     *   filter:
     *     resourceTypes:
     *       - RESOURCE_TYPE_RUNNER
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * ### Authorization
     *
     * All organization members can view role assignments (transparency model).
     *
     * @generated from rpc gitpod.v1.GroupService.ListRoleAssignments
     */
    listRoleAssignments: {
        methodKind: "unary";
        input: typeof ListRoleAssignmentsRequestSchema;
        output: typeof ListRoleAssignmentsResponseSchema;
    };
    /**
     * Deletes a role assignment.
     *
     * Use this method to:
     * - Remove group access to resources
     * - Revoke role-based permissions
     *
     * ### Examples
     *
     * - Delete a role assignment:
     *
     *   Removes a role assignment by its ID.
     *
     *   ```yaml
     *   assignmentId: "a1b2c3d4-5678-90ab-cdef-1234567890ab"
     *   ```
     *
     * ### Authorization
     *
     * Requires admin role on the specific resource.
     *
     * @generated from rpc gitpod.v1.GroupService.DeleteRoleAssignment
     */
    deleteRoleAssignment: {
        methodKind: "unary";
        input: typeof DeleteRoleAssignmentRequestSchema;
        output: typeof DeleteRoleAssignmentResponseSchema;
    };
    /**
     * Shares a resource directly with a principal (user or service account).
     *
     * Use this method to:
     * - Grant a user or service account direct access to a runner, project, or other resource
     * - Share resources without creating and managing groups manually
     *
     * ### Examples
     *
     * - Share a runner with a user:
     *
     *   Grants admin access to a runner for a specific user.
     *
     *   ```yaml
     *   resourceType: RESOURCE_TYPE_RUNNER
     *   resourceId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   principal: PRINCIPAL_USER
     *   principalId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   role: RESOURCE_ROLE_RUNNER_ADMIN
     *   ```
     *
     * - Share a runner with a service account:
     *
     *   Grants user access to a runner for a service account.
     *
     *   ```yaml
     *   resourceType: RESOURCE_TYPE_RUNNER
     *   resourceId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   principal: PRINCIPAL_SERVICE_ACCOUNT
     *   principalId: "a1b2c3d4-5678-90ab-cdef-1234567890ab"
     *   role: RESOURCE_ROLE_RUNNER_USER
     *   ```
     *
     * ### Authorization
     *
     * Requires admin role on the specific resource.
     *
     * @generated from rpc gitpod.v1.GroupService.ShareResourceWithPrincipal
     */
    shareResourceWithPrincipal: {
        methodKind: "unary";
        input: typeof ShareResourceWithPrincipalRequestSchema;
        output: typeof ShareResourceWithPrincipalResponseSchema;
    };
    /**
     * Removes direct access for a principal (user or service account) from a resource.
     *
     * Use this method to:
     * - Revoke a principal's direct access to a resource
     * - Remove sharing without affecting group-based access
     *
     * ### Examples
     *
     * - Remove user access from a runner:
     *
     *   Revokes a user's direct access to a runner.
     *
     *   ```yaml
     *   resourceType: RESOURCE_TYPE_RUNNER
     *   resourceId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   principal: PRINCIPAL_USER
     *   principalId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   ```
     *
     * ### Authorization
     *
     * Requires admin role on the specific resource.
     *
     * @generated from rpc gitpod.v1.GroupService.UnshareResourceWithPrincipal
     */
    unshareResourceWithPrincipal: {
        methodKind: "unary";
        input: typeof UnshareResourceWithPrincipalRequestSchema;
        output: typeof UnshareResourceWithPrincipalResponseSchema;
    };
}>;
