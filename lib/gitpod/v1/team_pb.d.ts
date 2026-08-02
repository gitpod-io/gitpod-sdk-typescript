import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { CountRequest, CountResponse } from "./count_pb";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/team.proto.
 */
export declare const file_gitpod_v1_team: GenFile;
/**
 * Team represents a team within an organization.
 *
 * @generated from message gitpod.v1.Team
 */
export type Team = Message<"gitpod.v1.Team"> & {
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
     * @generated from field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 5;
     */
    updatedAt?: Timestamp;
    /**
     * member_count is the total number of members in this team.
     *
     * @generated from field: int32 member_count = 6;
     */
    memberCount: number;
    /**
     * creator_id is the ID of the user who created this team.
     * May be empty for system-created or migrated teams.
     *
     * @generated from field: optional string creator_id = 7;
     */
    creatorId?: string;
};
/**
 * Describes the message gitpod.v1.Team.
 * Use `create(TeamSchema)` to create a new message.
 */
export declare const TeamSchema: GenMessage<Team>;
/**
 * TeamMember represents a user's membership in a team.
 *
 * @generated from message gitpod.v1.TeamMember
 */
export type TeamMember = Message<"gitpod.v1.TeamMember"> & {
    /**
     * Unique identifier for the team membership.
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string team_id = 2;
     */
    teamId: string;
    /**
     * @generated from field: string user_id = 3;
     */
    userId: string;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * name is the user's display name, populated at query time.
     *
     * @generated from field: string name = 5;
     */
    name: string;
    /**
     * avatar_url is the user's avatar URL, populated at query time.
     *
     * @generated from field: string avatar_url = 6;
     */
    avatarUrl: string;
};
/**
 * Describes the message gitpod.v1.TeamMember.
 * Use `create(TeamMemberSchema)` to create a new message.
 */
export declare const TeamMemberSchema: GenMessage<TeamMember>;
/**
 * @generated from message gitpod.v1.CreateTeamRequest
 */
export type CreateTeamRequest = Message<"gitpod.v1.CreateTeamRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
};
/**
 * Describes the message gitpod.v1.CreateTeamRequest.
 * Use `create(CreateTeamRequestSchema)` to create a new message.
 */
export declare const CreateTeamRequestSchema: GenMessage<CreateTeamRequest>;
/**
 * @generated from message gitpod.v1.CreateTeamResponse
 */
export type CreateTeamResponse = Message<"gitpod.v1.CreateTeamResponse"> & {
    /**
     * @generated from field: gitpod.v1.Team team = 1;
     */
    team?: Team;
};
/**
 * Describes the message gitpod.v1.CreateTeamResponse.
 * Use `create(CreateTeamResponseSchema)` to create a new message.
 */
export declare const CreateTeamResponseSchema: GenMessage<CreateTeamResponse>;
/**
 * @generated from message gitpod.v1.GetTeamRequest
 */
export type GetTeamRequest = Message<"gitpod.v1.GetTeamRequest"> & {
    /**
     * @generated from field: string team_id = 1;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.GetTeamRequest.
 * Use `create(GetTeamRequestSchema)` to create a new message.
 */
export declare const GetTeamRequestSchema: GenMessage<GetTeamRequest>;
/**
 * @generated from message gitpod.v1.GetTeamResponse
 */
export type GetTeamResponse = Message<"gitpod.v1.GetTeamResponse"> & {
    /**
     * @generated from field: gitpod.v1.Team team = 1;
     */
    team?: Team;
};
/**
 * Describes the message gitpod.v1.GetTeamResponse.
 * Use `create(GetTeamResponseSchema)` to create a new message.
 */
export declare const GetTeamResponseSchema: GenMessage<GetTeamResponse>;
/**
 * @generated from message gitpod.v1.ListTeamsRequest
 */
export type ListTeamsRequest = Message<"gitpod.v1.ListTeamsRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * filter contains options for filtering the list of teams.
     *
     * @generated from field: gitpod.v1.ListTeamsRequest.Filter filter = 2;
     */
    filter?: ListTeamsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListTeamsRequest.
 * Use `create(ListTeamsRequestSchema)` to create a new message.
 */
export declare const ListTeamsRequestSchema: GenMessage<ListTeamsRequest>;
/**
 * @generated from message gitpod.v1.ListTeamsRequest.Filter
 */
export type ListTeamsRequest_Filter = Message<"gitpod.v1.ListTeamsRequest.Filter"> & {
    /**
     * search filters teams by name (case-insensitive substring match).
     *
     * @generated from field: string search = 1;
     */
    search: string;
};
/**
 * Describes the message gitpod.v1.ListTeamsRequest.Filter.
 * Use `create(ListTeamsRequest_FilterSchema)` to create a new message.
 */
export declare const ListTeamsRequest_FilterSchema: GenMessage<ListTeamsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListTeamsResponse
 */
export type ListTeamsResponse = Message<"gitpod.v1.ListTeamsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.Team teams = 2;
     */
    teams: Team[];
};
/**
 * Describes the message gitpod.v1.ListTeamsResponse.
 * Use `create(ListTeamsResponseSchema)` to create a new message.
 */
export declare const ListTeamsResponseSchema: GenMessage<ListTeamsResponse>;
/**
 * @generated from message gitpod.v1.UpdateTeamRequest
 */
export type UpdateTeamRequest = Message<"gitpod.v1.UpdateTeamRequest"> & {
    /**
     * @generated from field: string team_id = 1;
     */
    teamId: string;
    /**
     * @generated from field: optional string name = 2;
     */
    name?: string;
};
/**
 * Describes the message gitpod.v1.UpdateTeamRequest.
 * Use `create(UpdateTeamRequestSchema)` to create a new message.
 */
export declare const UpdateTeamRequestSchema: GenMessage<UpdateTeamRequest>;
/**
 * @generated from message gitpod.v1.UpdateTeamResponse
 */
export type UpdateTeamResponse = Message<"gitpod.v1.UpdateTeamResponse"> & {
    /**
     * @generated from field: gitpod.v1.Team team = 1;
     */
    team?: Team;
};
/**
 * Describes the message gitpod.v1.UpdateTeamResponse.
 * Use `create(UpdateTeamResponseSchema)` to create a new message.
 */
export declare const UpdateTeamResponseSchema: GenMessage<UpdateTeamResponse>;
/**
 * @generated from message gitpod.v1.DeleteTeamRequest
 */
export type DeleteTeamRequest = Message<"gitpod.v1.DeleteTeamRequest"> & {
    /**
     * @generated from field: string team_id = 1;
     */
    teamId: string;
};
/**
 * Describes the message gitpod.v1.DeleteTeamRequest.
 * Use `create(DeleteTeamRequestSchema)` to create a new message.
 */
export declare const DeleteTeamRequestSchema: GenMessage<DeleteTeamRequest>;
/**
 * @generated from message gitpod.v1.DeleteTeamResponse
 */
export type DeleteTeamResponse = Message<"gitpod.v1.DeleteTeamResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteTeamResponse.
 * Use `create(DeleteTeamResponseSchema)` to create a new message.
 */
export declare const DeleteTeamResponseSchema: GenMessage<DeleteTeamResponse>;
/**
 * @generated from message gitpod.v1.AddTeamMemberRequest
 */
export type AddTeamMemberRequest = Message<"gitpod.v1.AddTeamMemberRequest"> & {
    /**
     * @generated from field: string team_id = 1;
     */
    teamId: string;
    /**
     * @generated from field: string user_id = 2;
     */
    userId: string;
};
/**
 * Describes the message gitpod.v1.AddTeamMemberRequest.
 * Use `create(AddTeamMemberRequestSchema)` to create a new message.
 */
export declare const AddTeamMemberRequestSchema: GenMessage<AddTeamMemberRequest>;
/**
 * @generated from message gitpod.v1.AddTeamMemberResponse
 */
export type AddTeamMemberResponse = Message<"gitpod.v1.AddTeamMemberResponse"> & {
    /**
     * @generated from field: gitpod.v1.TeamMember member = 1;
     */
    member?: TeamMember;
};
/**
 * Describes the message gitpod.v1.AddTeamMemberResponse.
 * Use `create(AddTeamMemberResponseSchema)` to create a new message.
 */
export declare const AddTeamMemberResponseSchema: GenMessage<AddTeamMemberResponse>;
/**
 * @generated from message gitpod.v1.RemoveTeamMemberRequest
 */
export type RemoveTeamMemberRequest = Message<"gitpod.v1.RemoveTeamMemberRequest"> & {
    /**
     * @generated from field: string team_member_id = 1;
     */
    teamMemberId: string;
};
/**
 * Describes the message gitpod.v1.RemoveTeamMemberRequest.
 * Use `create(RemoveTeamMemberRequestSchema)` to create a new message.
 */
export declare const RemoveTeamMemberRequestSchema: GenMessage<RemoveTeamMemberRequest>;
/**
 * @generated from message gitpod.v1.RemoveTeamMemberResponse
 */
export type RemoveTeamMemberResponse = Message<"gitpod.v1.RemoveTeamMemberResponse"> & {};
/**
 * Describes the message gitpod.v1.RemoveTeamMemberResponse.
 * Use `create(RemoveTeamMemberResponseSchema)` to create a new message.
 */
export declare const RemoveTeamMemberResponseSchema: GenMessage<RemoveTeamMemberResponse>;
/**
 * @generated from message gitpod.v1.ListTeamMembersRequest
 */
export type ListTeamMembersRequest = Message<"gitpod.v1.ListTeamMembersRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: string team_id = 2;
     */
    teamId: string;
    /**
     * count controls whether the response includes a bounded total count.
     *
     * @generated from field: gitpod.v1.CountRequest count = 3;
     */
    count?: CountRequest;
};
/**
 * Describes the message gitpod.v1.ListTeamMembersRequest.
 * Use `create(ListTeamMembersRequestSchema)` to create a new message.
 */
export declare const ListTeamMembersRequestSchema: GenMessage<ListTeamMembersRequest>;
/**
 * @generated from message gitpod.v1.ListTeamMembersResponse
 */
export type ListTeamMembersResponse = Message<"gitpod.v1.ListTeamMembersResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.TeamMember members = 2;
     */
    members: TeamMember[];
    /**
     * count is the bounded total count of matching team members, present only when
     * requested via CountRequest.include on the first page.
     *
     * @generated from field: gitpod.v1.CountResponse count = 3;
     */
    count?: CountResponse;
};
/**
 * Describes the message gitpod.v1.ListTeamMembersResponse.
 * Use `create(ListTeamMembersResponseSchema)` to create a new message.
 */
export declare const ListTeamMembersResponseSchema: GenMessage<ListTeamMembersResponse>;
/**
 * TeamService manages teams and team memberships within an organization.
 * A team is an organizational unit that users can belong to.
 * Each user can belong to at most one team per organization.
 *
 * @generated from service gitpod.v1.TeamService
 */
export declare const TeamService: GenService<{
    /**
     * Creates a new team within an organization.
     *
     * Use this method to:
     * - Organize users into teams
     * - Set up team-based workflows
     *
     * ### Examples
     *
     * - Create a team:
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   name: "Backend Team"
     *   ```
     *
     * ### Authorization
     *
     * Requires `team:create` permission on the organization.
     *
     * @generated from rpc gitpod.v1.TeamService.CreateTeam
     */
    createTeam: {
        methodKind: "unary";
        input: typeof CreateTeamRequestSchema;
        output: typeof CreateTeamResponseSchema;
    };
    /**
     * Gets information about a specific team.
     *
     * Use this method to:
     * - Retrieve team details and metadata
     * - View member count
     *
     * ### Examples
     *
     * - Get team details:
     *
     *   ```yaml
     *   teamId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * ### Authorization
     *
     * Requires `team:read` permission on the team.
     *
     * @generated from rpc gitpod.v1.TeamService.GetTeam
     */
    getTeam: {
        methodKind: "unary";
        input: typeof GetTeamRequestSchema;
        output: typeof GetTeamResponseSchema;
    };
    /**
     * Lists teams with optional pagination and filtering.
     *
     * Use this method to:
     * - View all teams in an organization
     * - Search for teams by name
     *
     * ### Examples
     *
     * - List all teams:
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - Search for teams by name:
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   filter:
     *     search: "backend"
     *   ```
     *
     * ### Authorization
     *
     * Results are filtered by `team:read` permission.
     *
     * @generated from rpc gitpod.v1.TeamService.ListTeams
     */
    listTeams: {
        methodKind: "unary";
        input: typeof ListTeamsRequestSchema;
        output: typeof ListTeamsResponseSchema;
    };
    /**
     * Updates a team's properties.
     *
     * Use this method to:
     * - Rename a team
     *
     * ### Examples
     *
     * - Update team name:
     *
     *   ```yaml
     *   teamId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   name: "Platform Team"
     *   ```
     *
     * ### Authorization
     *
     * Requires `team:update` permission on the team.
     *
     * @generated from rpc gitpod.v1.TeamService.UpdateTeam
     */
    updateTeam: {
        methodKind: "unary";
        input: typeof UpdateTeamRequestSchema;
        output: typeof UpdateTeamResponseSchema;
    };
    /**
     * Deletes a team and all its memberships.
     *
     * Use this method to:
     * - Remove unused teams
     * - Clean up after team reorganization
     *
     * ### Examples
     *
     * - Delete a team:
     *
     *   ```yaml
     *   teamId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * ### Authorization
     *
     * Requires `team:delete` permission on the team.
     *
     * @generated from rpc gitpod.v1.TeamService.DeleteTeam
     */
    deleteTeam: {
        methodKind: "unary";
        input: typeof DeleteTeamRequestSchema;
        output: typeof DeleteTeamResponseSchema;
    };
    /**
     * Adds a user to a team.
     *
     * Each user can belong to at most one team per organization.
     *
     * Use this method to:
     * - Assign users to teams
     *
     * ### Examples
     *
     * - Add a user to a team:
     *
     *   ```yaml
     *   teamId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   userId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   ```
     *
     * ### Authorization
     *
     * Requires `teammembership:create` permission on the team.
     *
     * @generated from rpc gitpod.v1.TeamService.AddTeamMember
     */
    addTeamMember: {
        methodKind: "unary";
        input: typeof AddTeamMemberRequestSchema;
        output: typeof AddTeamMemberResponseSchema;
    };
    /**
     * Removes a user from a team.
     *
     * Use this method to:
     * - Remove users from teams
     *
     * ### Examples
     *
     * - Remove a team member:
     *
     *   ```yaml
     *   teamMemberId: "a1b2c3d4-5678-90ab-cdef-1234567890ab"
     *   ```
     *
     * ### Authorization
     *
     * Requires `teammembership:delete` permission on the team.
     *
     * @generated from rpc gitpod.v1.TeamService.RemoveTeamMember
     */
    removeTeamMember: {
        methodKind: "unary";
        input: typeof RemoveTeamMemberRequestSchema;
        output: typeof RemoveTeamMemberResponseSchema;
    };
    /**
     * Lists members of a team with optional pagination.
     *
     * Use this method to:
     * - View all members of a team
     *
     * ### Examples
     *
     * - List team members:
     *
     *   ```yaml
     *   teamId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * ### Authorization
     *
     * Requires `teammembership:read` permission on the team.
     *
     * @generated from rpc gitpod.v1.TeamService.ListTeamMembers
     */
    listTeamMembers: {
        methodKind: "unary";
        input: typeof ListTeamMembersRequestSchema;
        output: typeof ListTeamMembersResponseSchema;
    };
}>;
