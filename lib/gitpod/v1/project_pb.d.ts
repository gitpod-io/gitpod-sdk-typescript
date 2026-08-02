import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { CountRequest, CountResponse } from "./count_pb";
import type { EnvironmentInitializer } from "./environment_pb";
import type { Subject } from "./identity_pb";
import type { PaginationRequest, PaginationResponse, Sort } from "./pagination_pb";
import type { RunnerKind } from "./runner_configuration_pb";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/project.proto.
 */
export declare const file_gitpod_v1_project: GenFile;
/**
 * @generated from message gitpod.v1.CreateProjectRequest
 */
export type CreateProjectRequest = Message<"gitpod.v1.CreateProjectRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * initializer is the content initializer
     *
     * @generated from field: gitpod.v1.EnvironmentInitializer initializer = 2;
     */
    initializer?: EnvironmentInitializer;
    /**
     * devcontainer_file_path is the path to the devcontainer file relative to the repo root
     *
     * @generated from field: string devcontainer_file_path = 4;
     */
    devcontainerFilePath: string;
    /**
     * automations_file_path is the path to the automations file relative to the repo root
     *
     * @generated from field: string automations_file_path = 5;
     */
    automationsFilePath: string;
    /**
     * technical_description is a detailed technical description of the project
     * This field is not returned by default in GetProject or ListProjects responses
     *
     * 8KB max
     *
     * @generated from field: string technical_description = 6;
     */
    technicalDescription: string;
    /**
     * prebuild_configuration defines how prebuilds are created for this project.
     * If not set, prebuilds are disabled for the project.
     *
     * @generated from field: gitpod.v1.ProjectPrebuildConfiguration prebuild_configuration = 7;
     */
    prebuildConfiguration?: ProjectPrebuildConfiguration;
};
/**
 * Describes the message gitpod.v1.CreateProjectRequest.
 * Use `create(CreateProjectRequestSchema)` to create a new message.
 */
export declare const CreateProjectRequestSchema: GenMessage<CreateProjectRequest>;
/**
 * @generated from message gitpod.v1.CreateProjectResponse
 */
export type CreateProjectResponse = Message<"gitpod.v1.CreateProjectResponse"> & {
    /**
     * @generated from field: gitpod.v1.Project project = 1;
     */
    project?: Project;
};
/**
 * Describes the message gitpod.v1.CreateProjectResponse.
 * Use `create(CreateProjectResponseSchema)` to create a new message.
 */
export declare const CreateProjectResponseSchema: GenMessage<CreateProjectResponse>;
/**
 * @generated from message gitpod.v1.CreateProjectsRequest
 */
export type CreateProjectsRequest = Message<"gitpod.v1.CreateProjectsRequest"> & {
    /**
     * @generated from field: repeated gitpod.v1.CreateProjectRequest projects = 1;
     */
    projects: CreateProjectRequest[];
};
/**
 * Describes the message gitpod.v1.CreateProjectsRequest.
 * Use `create(CreateProjectsRequestSchema)` to create a new message.
 */
export declare const CreateProjectsRequestSchema: GenMessage<CreateProjectsRequest>;
/**
 * @generated from message gitpod.v1.CreateProjectsResponse
 */
export type CreateProjectsResponse = Message<"gitpod.v1.CreateProjectsResponse"> & {
    /**
     * created_projects contains the successfully created projects
     *
     * @generated from field: repeated gitpod.v1.Project created_projects = 1;
     */
    createdProjects: Project[];
    /**
     * failed_projects contains details about projects that failed to create
     *
     * @generated from field: repeated gitpod.v1.CreateProjectsResponse.Failure failed_projects = 2;
     */
    failedProjects: CreateProjectsResponse_Failure[];
};
/**
 * Describes the message gitpod.v1.CreateProjectsResponse.
 * Use `create(CreateProjectsResponseSchema)` to create a new message.
 */
export declare const CreateProjectsResponseSchema: GenMessage<CreateProjectsResponse>;
/**
 * @generated from message gitpod.v1.CreateProjectsResponse.Failure
 */
export type CreateProjectsResponse_Failure = Message<"gitpod.v1.CreateProjectsResponse.Failure"> & {
    /**
     * index is the position in the request array (0-based)
     *
     * @generated from field: int32 index = 1;
     */
    index: number;
    /**
     * name is the project name that failed
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * error describes why the project creation failed
     *
     * @generated from field: string error = 3;
     */
    error: string;
};
/**
 * Describes the message gitpod.v1.CreateProjectsResponse.Failure.
 * Use `create(CreateProjectsResponse_FailureSchema)` to create a new message.
 */
export declare const CreateProjectsResponse_FailureSchema: GenMessage<CreateProjectsResponse_Failure>;
/**
 * @generated from message gitpod.v1.UpdateProjectsRequest
 */
export type UpdateProjectsRequest = Message<"gitpod.v1.UpdateProjectsRequest"> & {
    /**
     * @generated from field: repeated gitpod.v1.UpdateProjectRequest projects = 1;
     */
    projects: UpdateProjectRequest[];
};
/**
 * Describes the message gitpod.v1.UpdateProjectsRequest.
 * Use `create(UpdateProjectsRequestSchema)` to create a new message.
 */
export declare const UpdateProjectsRequestSchema: GenMessage<UpdateProjectsRequest>;
/**
 * @generated from message gitpod.v1.UpdateProjectsResponse
 */
export type UpdateProjectsResponse = Message<"gitpod.v1.UpdateProjectsResponse"> & {
    /**
     * updated_projects contains the successfully updated projects
     *
     * @generated from field: repeated gitpod.v1.Project updated_projects = 1;
     */
    updatedProjects: Project[];
    /**
     * failed_projects contains details about projects that failed to update
     *
     * @generated from field: repeated gitpod.v1.UpdateProjectsResponse.Failure failed_projects = 2;
     */
    failedProjects: UpdateProjectsResponse_Failure[];
};
/**
 * Describes the message gitpod.v1.UpdateProjectsResponse.
 * Use `create(UpdateProjectsResponseSchema)` to create a new message.
 */
export declare const UpdateProjectsResponseSchema: GenMessage<UpdateProjectsResponse>;
/**
 * @generated from message gitpod.v1.UpdateProjectsResponse.Failure
 */
export type UpdateProjectsResponse_Failure = Message<"gitpod.v1.UpdateProjectsResponse.Failure"> & {
    /**
     * index is the position in the request array (0-based)
     *
     * @generated from field: int32 index = 1;
     */
    index: number;
    /**
     * project_id is the project ID that failed
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * error describes why the project update failed
     *
     * @generated from field: string error = 3;
     */
    error: string;
};
/**
 * Describes the message gitpod.v1.UpdateProjectsResponse.Failure.
 * Use `create(UpdateProjectsResponse_FailureSchema)` to create a new message.
 */
export declare const UpdateProjectsResponse_FailureSchema: GenMessage<UpdateProjectsResponse_Failure>;
/**
 * @generated from message gitpod.v1.DeleteProjectsRequest
 */
export type DeleteProjectsRequest = Message<"gitpod.v1.DeleteProjectsRequest"> & {
    /**
     * @generated from field: repeated string project_ids = 1;
     */
    projectIds: string[];
};
/**
 * Describes the message gitpod.v1.DeleteProjectsRequest.
 * Use `create(DeleteProjectsRequestSchema)` to create a new message.
 */
export declare const DeleteProjectsRequestSchema: GenMessage<DeleteProjectsRequest>;
/**
 * @generated from message gitpod.v1.DeleteProjectsResponse
 */
export type DeleteProjectsResponse = Message<"gitpod.v1.DeleteProjectsResponse"> & {
    /**
     * deleted_project_ids contains the IDs of successfully deleted projects
     *
     * @generated from field: repeated string deleted_project_ids = 1;
     */
    deletedProjectIds: string[];
    /**
     * failed_projects contains details about projects that failed to delete
     *
     * @generated from field: repeated gitpod.v1.DeleteProjectsResponse.Failure failed_projects = 2;
     */
    failedProjects: DeleteProjectsResponse_Failure[];
};
/**
 * Describes the message gitpod.v1.DeleteProjectsResponse.
 * Use `create(DeleteProjectsResponseSchema)` to create a new message.
 */
export declare const DeleteProjectsResponseSchema: GenMessage<DeleteProjectsResponse>;
/**
 * @generated from message gitpod.v1.DeleteProjectsResponse.Failure
 */
export type DeleteProjectsResponse_Failure = Message<"gitpod.v1.DeleteProjectsResponse.Failure"> & {
    /**
     * index is the position in the request array (0-based)
     *
     * @generated from field: int32 index = 1;
     */
    index: number;
    /**
     * project_id is the project ID that failed
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
    /**
     * error describes why the project deletion failed
     *
     * @generated from field: string error = 3;
     */
    error: string;
};
/**
 * Describes the message gitpod.v1.DeleteProjectsResponse.Failure.
 * Use `create(DeleteProjectsResponse_FailureSchema)` to create a new message.
 */
export declare const DeleteProjectsResponse_FailureSchema: GenMessage<DeleteProjectsResponse_Failure>;
/**
 * @generated from message gitpod.v1.CreateProjectFromEnvironmentRequest
 */
export type CreateProjectFromEnvironmentRequest = Message<"gitpod.v1.CreateProjectFromEnvironmentRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * environment_id specifies the environment identifier
     *
     * @generated from field: string environment_id = 2;
     */
    environmentId: string;
};
/**
 * Describes the message gitpod.v1.CreateProjectFromEnvironmentRequest.
 * Use `create(CreateProjectFromEnvironmentRequestSchema)` to create a new message.
 */
export declare const CreateProjectFromEnvironmentRequestSchema: GenMessage<CreateProjectFromEnvironmentRequest>;
/**
 * @generated from message gitpod.v1.CreateProjectFromEnvironmentResponse
 */
export type CreateProjectFromEnvironmentResponse = Message<"gitpod.v1.CreateProjectFromEnvironmentResponse"> & {
    /**
     * @generated from field: gitpod.v1.Project project = 1;
     */
    project?: Project;
};
/**
 * Describes the message gitpod.v1.CreateProjectFromEnvironmentResponse.
 * Use `create(CreateProjectFromEnvironmentResponseSchema)` to create a new message.
 */
export declare const CreateProjectFromEnvironmentResponseSchema: GenMessage<CreateProjectFromEnvironmentResponse>;
/**
 * @generated from message gitpod.v1.GetProjectRequest
 */
export type GetProjectRequest = Message<"gitpod.v1.GetProjectRequest"> & {
    /**
     * project_id specifies the project identifier
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
};
/**
 * Describes the message gitpod.v1.GetProjectRequest.
 * Use `create(GetProjectRequestSchema)` to create a new message.
 */
export declare const GetProjectRequestSchema: GenMessage<GetProjectRequest>;
/**
 * @generated from message gitpod.v1.GetProjectResponse
 */
export type GetProjectResponse = Message<"gitpod.v1.GetProjectResponse"> & {
    /**
     * @generated from field: gitpod.v1.Project project = 1;
     */
    project?: Project;
};
/**
 * Describes the message gitpod.v1.GetProjectResponse.
 * Use `create(GetProjectResponseSchema)` to create a new message.
 */
export declare const GetProjectResponseSchema: GenMessage<GetProjectResponse>;
/**
 * @generated from message gitpod.v1.UpdateProjectRequest
 */
export type UpdateProjectRequest = Message<"gitpod.v1.UpdateProjectRequest"> & {
    /**
     * project_id specifies the project identifier
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
    /**
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * initializer is the content initializer
     *
     * @generated from field: optional gitpod.v1.EnvironmentInitializer initializer = 4;
     */
    initializer?: EnvironmentInitializer;
    /**
     * devcontainer_file_path is the path to the devcontainer file relative to the repo root
     *
     * @generated from field: optional string devcontainer_file_path = 5;
     */
    devcontainerFilePath?: string;
    /**
     * automations_file_path is the path to the automations file relative to the repo root
     *
     * @generated from field: optional string automations_file_path = 6;
     */
    automationsFilePath?: string;
    /**
     * technical_description is a detailed technical description of the project
     * This field is not returned by default in GetProject or ListProjects responses
     *
     * 8KB max
     *
     * @generated from field: optional string technical_description = 7;
     */
    technicalDescription?: string;
    /**
     * prebuild_configuration defines how prebuilds are created for this project.
     * If not provided, the existing prebuild configuration is not modified.
     * To disable prebuilds, set enabled to false.
     *
     * @generated from field: optional gitpod.v1.ProjectPrebuildConfiguration prebuild_configuration = 8;
     */
    prebuildConfiguration?: ProjectPrebuildConfiguration;
    /**
     * recommended_editors specifies the editors recommended for this project.
     * If not provided, the existing recommended editors are not modified.
     * To clear all recommended editors, set to an empty RecommendedEditors message.
     *
     * @generated from field: optional gitpod.v1.RecommendedEditors recommended_editors = 9;
     */
    recommendedEditors?: RecommendedEditors;
};
/**
 * Describes the message gitpod.v1.UpdateProjectRequest.
 * Use `create(UpdateProjectRequestSchema)` to create a new message.
 */
export declare const UpdateProjectRequestSchema: GenMessage<UpdateProjectRequest>;
/**
 * @generated from message gitpod.v1.UpdateProjectResponse
 */
export type UpdateProjectResponse = Message<"gitpod.v1.UpdateProjectResponse"> & {
    /**
     * @generated from field: gitpod.v1.Project project = 1;
     */
    project?: Project;
};
/**
 * Describes the message gitpod.v1.UpdateProjectResponse.
 * Use `create(UpdateProjectResponseSchema)` to create a new message.
 */
export declare const UpdateProjectResponseSchema: GenMessage<UpdateProjectResponse>;
/**
 * @generated from message gitpod.v1.ListProjectsRequest
 */
export type ListProjectsRequest = Message<"gitpod.v1.ListProjectsRequest"> & {
    /**
     * pagination contains the pagination options for listing organizations
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListProjectsRequest.Filter filter = 2;
     */
    filter?: ListProjectsRequest_Filter;
    /**
     * sort specifies the order of results. Defaults to popularity descending.
     *
     * Supported fields:
     *   - "id": Sort by project ID (UUID v7, effectively creation order).
     *     Produces a stable, deterministic result set suitable for consistent pagination.
     *   - "popularity": Sort by popularity — a precomputed score based on recent
     *     environment creation activity. Updated periodically by a background job.
     *
     * @generated from field: gitpod.v1.Sort sort = 3;
     */
    sort?: Sort;
    /**
     * count controls whether the response includes a bounded total count.
     *
     * @generated from field: gitpod.v1.CountRequest count = 4;
     */
    count?: CountRequest;
};
/**
 * Describes the message gitpod.v1.ListProjectsRequest.
 * Use `create(ListProjectsRequestSchema)` to create a new message.
 */
export declare const ListProjectsRequestSchema: GenMessage<ListProjectsRequest>;
/**
 * @generated from message gitpod.v1.ListProjectsRequest.Filter
 */
export type ListProjectsRequest_Filter = Message<"gitpod.v1.ListProjectsRequest.Filter"> & {
    /**
     * project_ids filters the response to only projects with these IDs
     *
     * @generated from field: repeated string project_ids = 1;
     */
    projectIds: string[];
    /**
     * search performs case-insensitive search across project name, project ID, and repository name
     *
     * @generated from field: string search = 2;
     */
    search: string;
    /**
     * runner_ids filters the response to only projects that use environment classes from these runners
     *
     * @generated from field: repeated string runner_ids = 3;
     */
    runnerIds: string[];
    /**
     * runner_kinds filters the response to only projects that use environment classes from runners of these kinds
     *
     * @generated from field: repeated gitpod.v1.RunnerKind runner_kinds = 4;
     */
    runnerKinds: RunnerKind[];
    /**
     * spec_remote_uris filters the response to only projects whose initializer spec remote URI matches any of the provided URIs (exact match)
     *
     * @generated from field: repeated string spec_remote_uris = 5;
     */
    specRemoteUris: string[];
    /**
     * creator_ids filters the response to only projects whose creator ID matches any of the provided IDs
     *
     * @generated from field: repeated string creator_ids = 6;
     */
    creatorIds: string[];
};
/**
 * Describes the message gitpod.v1.ListProjectsRequest.Filter.
 * Use `create(ListProjectsRequest_FilterSchema)` to create a new message.
 */
export declare const ListProjectsRequest_FilterSchema: GenMessage<ListProjectsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListProjectsResponse
 */
export type ListProjectsResponse = Message<"gitpod.v1.ListProjectsResponse"> & {
    /**
     * pagination contains the pagination options for listing organizations
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.Project projects = 2;
     */
    projects: Project[];
    /**
     * count is the bounded total count of matching projects, present only when
     * requested via CountRequest.include on the first page.
     *
     * @generated from field: gitpod.v1.CountResponse count = 3;
     */
    count?: CountResponse;
};
/**
 * Describes the message gitpod.v1.ListProjectsResponse.
 * Use `create(ListProjectsResponseSchema)` to create a new message.
 */
export declare const ListProjectsResponseSchema: GenMessage<ListProjectsResponse>;
/**
 * @generated from message gitpod.v1.DeleteProjectRequest
 */
export type DeleteProjectRequest = Message<"gitpod.v1.DeleteProjectRequest"> & {
    /**
     * project_id specifies the project identifier
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
};
/**
 * Describes the message gitpod.v1.DeleteProjectRequest.
 * Use `create(DeleteProjectRequestSchema)` to create a new message.
 */
export declare const DeleteProjectRequestSchema: GenMessage<DeleteProjectRequest>;
/**
 * @generated from message gitpod.v1.DeleteProjectResponse
 */
export type DeleteProjectResponse = Message<"gitpod.v1.DeleteProjectResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteProjectResponse.
 * Use `create(DeleteProjectResponseSchema)` to create a new message.
 */
export declare const DeleteProjectResponseSchema: GenMessage<DeleteProjectResponse>;
/**
 * ListProjectPoliciesRequest lists policies for a project.
 *
 * @generated from message gitpod.v1.ListProjectPoliciesRequest
 */
export type ListProjectPoliciesRequest = Message<"gitpod.v1.ListProjectPoliciesRequest"> & {
    /**
     * pagination contains the pagination options for listing project policies
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * project_id specifies the project identifier
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
};
/**
 * Describes the message gitpod.v1.ListProjectPoliciesRequest.
 * Use `create(ListProjectPoliciesRequestSchema)` to create a new message.
 */
export declare const ListProjectPoliciesRequestSchema: GenMessage<ListProjectPoliciesRequest>;
/**
 * @generated from message gitpod.v1.ListProjectPoliciesResponse
 */
export type ListProjectPoliciesResponse = Message<"gitpod.v1.ListProjectPoliciesResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.ProjectPolicy policies = 2;
     */
    policies: ProjectPolicy[];
};
/**
 * Describes the message gitpod.v1.ListProjectPoliciesResponse.
 * Use `create(ListProjectPoliciesResponseSchema)` to create a new message.
 */
export declare const ListProjectPoliciesResponseSchema: GenMessage<ListProjectPoliciesResponse>;
/**
 * CreateProjectPolicyRequest creates a Project Policy.
 *
 * @generated from message gitpod.v1.CreateProjectPolicyRequest
 */
export type CreateProjectPolicyRequest = Message<"gitpod.v1.CreateProjectPolicyRequest"> & {
    /**
     * project_id specifies the project identifier
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
    /**
     * group_id specifies the group_id identifier
     *
     * @generated from field: string group_id = 2;
     */
    groupId: string;
    /**
     * @generated from field: gitpod.v1.ProjectRole role = 3;
     */
    role: ProjectRole;
};
/**
 * Describes the message gitpod.v1.CreateProjectPolicyRequest.
 * Use `create(CreateProjectPolicyRequestSchema)` to create a new message.
 */
export declare const CreateProjectPolicyRequestSchema: GenMessage<CreateProjectPolicyRequest>;
/**
 * @generated from message gitpod.v1.CreateProjectPolicyResponse
 */
export type CreateProjectPolicyResponse = Message<"gitpod.v1.CreateProjectPolicyResponse"> & {
    /**
     * @generated from field: gitpod.v1.ProjectPolicy policy = 1;
     */
    policy?: ProjectPolicy;
};
/**
 * Describes the message gitpod.v1.CreateProjectPolicyResponse.
 * Use `create(CreateProjectPolicyResponseSchema)` to create a new message.
 */
export declare const CreateProjectPolicyResponseSchema: GenMessage<CreateProjectPolicyResponse>;
/**
 * UpdateProjectPolicyRequest updates a Project Policy.
 *
 * @generated from message gitpod.v1.UpdateProjectPolicyRequest
 */
export type UpdateProjectPolicyRequest = Message<"gitpod.v1.UpdateProjectPolicyRequest"> & {
    /**
     * project_id specifies the project identifier
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
    /**
     * group_id specifies the group_id identifier
     *
     * @generated from field: string group_id = 2;
     */
    groupId: string;
    /**
     * @generated from field: gitpod.v1.ProjectRole role = 3;
     */
    role: ProjectRole;
};
/**
 * Describes the message gitpod.v1.UpdateProjectPolicyRequest.
 * Use `create(UpdateProjectPolicyRequestSchema)` to create a new message.
 */
export declare const UpdateProjectPolicyRequestSchema: GenMessage<UpdateProjectPolicyRequest>;
/**
 * @generated from message gitpod.v1.UpdateProjectPolicyResponse
 */
export type UpdateProjectPolicyResponse = Message<"gitpod.v1.UpdateProjectPolicyResponse"> & {
    /**
     * @generated from field: gitpod.v1.ProjectPolicy policy = 1;
     */
    policy?: ProjectPolicy;
};
/**
 * Describes the message gitpod.v1.UpdateProjectPolicyResponse.
 * Use `create(UpdateProjectPolicyResponseSchema)` to create a new message.
 */
export declare const UpdateProjectPolicyResponseSchema: GenMessage<UpdateProjectPolicyResponse>;
/**
 * DeleteProjectPolicyRequest deletes a Project Policy.
 *
 * @generated from message gitpod.v1.DeleteProjectPolicyRequest
 */
export type DeleteProjectPolicyRequest = Message<"gitpod.v1.DeleteProjectPolicyRequest"> & {
    /**
     * project_id specifies the project identifier
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
    /**
     * group_id specifies the group_id identifier
     *
     * @generated from field: string group_id = 2;
     */
    groupId: string;
};
/**
 * Describes the message gitpod.v1.DeleteProjectPolicyRequest.
 * Use `create(DeleteProjectPolicyRequestSchema)` to create a new message.
 */
export declare const DeleteProjectPolicyRequestSchema: GenMessage<DeleteProjectPolicyRequest>;
/**
 * @generated from message gitpod.v1.DeleteProjectPolicyResponse
 */
export type DeleteProjectPolicyResponse = Message<"gitpod.v1.DeleteProjectPolicyResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteProjectPolicyResponse.
 * Use `create(DeleteProjectPolicyResponseSchema)` to create a new message.
 */
export declare const DeleteProjectPolicyResponseSchema: GenMessage<DeleteProjectPolicyResponse>;
/**
 * ListProjectEnvironmentClassesRequest lists environment classes of a project.
 *
 * @generated from message gitpod.v1.ListProjectEnvironmentClassesRequest
 */
export type ListProjectEnvironmentClassesRequest = Message<"gitpod.v1.ListProjectEnvironmentClassesRequest"> & {
    /**
     * pagination contains the pagination options for listing project policies
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * project_id specifies the project identifier
     *
     * @generated from field: string project_id = 2;
     */
    projectId: string;
};
/**
 * Describes the message gitpod.v1.ListProjectEnvironmentClassesRequest.
 * Use `create(ListProjectEnvironmentClassesRequestSchema)` to create a new message.
 */
export declare const ListProjectEnvironmentClassesRequestSchema: GenMessage<ListProjectEnvironmentClassesRequest>;
/**
 * @generated from message gitpod.v1.ListProjectEnvironmentClassesResponse
 */
export type ListProjectEnvironmentClassesResponse = Message<"gitpod.v1.ListProjectEnvironmentClassesResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.ProjectEnvironmentClass project_environment_classes = 2;
     */
    projectEnvironmentClasses: ProjectEnvironmentClass[];
};
/**
 * Describes the message gitpod.v1.ListProjectEnvironmentClassesResponse.
 * Use `create(ListProjectEnvironmentClassesResponseSchema)` to create a new message.
 */
export declare const ListProjectEnvironmentClassesResponseSchema: GenMessage<ListProjectEnvironmentClassesResponse>;
/**
 * UpdateProjectEnvironmentClassesRequest updates all project environment classes of a project.
 *
 * @generated from message gitpod.v1.UpdateProjectEnvironmentClassesRequest
 */
export type UpdateProjectEnvironmentClassesRequest = Message<"gitpod.v1.UpdateProjectEnvironmentClassesRequest"> & {
    /**
     * project_id specifies the project identifier
     *
     * @generated from field: string project_id = 1;
     */
    projectId: string;
    /**
     * @generated from field: repeated gitpod.v1.ProjectEnvironmentClass project_environment_classes = 2;
     */
    projectEnvironmentClasses: ProjectEnvironmentClass[];
};
/**
 * Describes the message gitpod.v1.UpdateProjectEnvironmentClassesRequest.
 * Use `create(UpdateProjectEnvironmentClassesRequestSchema)` to create a new message.
 */
export declare const UpdateProjectEnvironmentClassesRequestSchema: GenMessage<UpdateProjectEnvironmentClassesRequest>;
/**
 * @generated from message gitpod.v1.UpdateProjectEnvironmentClassesResponse
 */
export type UpdateProjectEnvironmentClassesResponse = Message<"gitpod.v1.UpdateProjectEnvironmentClassesResponse"> & {};
/**
 * Describes the message gitpod.v1.UpdateProjectEnvironmentClassesResponse.
 * Use `create(UpdateProjectEnvironmentClassesResponseSchema)` to create a new message.
 */
export declare const UpdateProjectEnvironmentClassesResponseSchema: GenMessage<UpdateProjectEnvironmentClassesResponse>;
/**
 * @generated from message gitpod.v1.Project
 */
export type Project = Message<"gitpod.v1.Project"> & {
    /**
     * id is the unique identifier for the project
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: gitpod.v1.ProjectMetadata metadata = 2;
     */
    metadata?: ProjectMetadata;
    /**
     * initializer is the content initializer
     *
     * @generated from field: gitpod.v1.EnvironmentInitializer initializer = 3;
     */
    initializer?: EnvironmentInitializer;
    /**
     * Use `environment_classes` instead.
     *
     * @generated from field: gitpod.v1.ProjectEnvironmentClass environment_class = 4 [deprecated = true];
     * @deprecated
     */
    environmentClass?: ProjectEnvironmentClass;
    /**
     * devcontainer_file_path is the path to the devcontainer file relative to the repo root
     *
     * @generated from field: string devcontainer_file_path = 5;
     */
    devcontainerFilePath: string;
    /**
     * environment_classes is the list of environment classes for the project
     *
     * @generated from field: repeated gitpod.v1.ProjectEnvironmentClass environment_classes = 11;
     */
    environmentClasses: ProjectEnvironmentClass[];
    /**
     * @generated from field: gitpod.v1.Project.UsedBy used_by = 6;
     */
    usedBy?: Project_UsedBy;
    /**
     * automations_file_path is the path to the automations file relative to the repo root
     *
     * @generated from field: string automations_file_path = 7;
     */
    automationsFilePath: string;
    /**
     * technical_description is a detailed technical description of the project
     * This field is not returned by default in GetProject or ListProjects responses
     *
     * @generated from field: string technical_description = 8;
     */
    technicalDescription: string;
    /**
     * prebuild_configuration defines how prebuilds are created for this project.
     *
     * @generated from field: gitpod.v1.ProjectPrebuildConfiguration prebuild_configuration = 9;
     */
    prebuildConfiguration?: ProjectPrebuildConfiguration;
    /**
     * desired_phase is the desired phase of the project
     * When set to DELETED, the project is pending deletion
     *
     * @generated from field: gitpod.v1.ProjectPhase desired_phase = 10;
     */
    desiredPhase: ProjectPhase;
    /**
     * recommended_editors specifies the editors recommended for this project.
     *
     * @generated from field: gitpod.v1.RecommendedEditors recommended_editors = 12;
     */
    recommendedEditors?: RecommendedEditors;
};
/**
 * Describes the message gitpod.v1.Project.
 * Use `create(ProjectSchema)` to create a new message.
 */
export declare const ProjectSchema: GenMessage<Project>;
/**
 * @generated from message gitpod.v1.Project.UsedBy
 */
export type Project_UsedBy = Message<"gitpod.v1.Project.UsedBy"> & {
    /**
     * Subjects are the 10 most recent subjects who have used the project to create an environment
     *
     * @generated from field: repeated gitpod.v1.Subject subjects = 4;
     */
    subjects: Subject[];
    /**
     * Total number of unique subjects who have used the project
     *
     * @generated from field: int32 total_subjects = 3;
     */
    totalSubjects: number;
};
/**
 * Describes the message gitpod.v1.Project.UsedBy.
 * Use `create(Project_UsedBySchema)` to create a new message.
 */
export declare const Project_UsedBySchema: GenMessage<Project_UsedBy>;
/**
 * RecommendedEditors contains the map of recommended editors and their versions.
 *
 * @generated from message gitpod.v1.RecommendedEditors
 */
export type RecommendedEditors = Message<"gitpod.v1.RecommendedEditors"> & {
    /**
     * editors maps editor aliases to their recommended versions.
     * Key is the editor alias (e.g., "intellij", "goland", "vscode").
     * Value contains the list of recommended versions for that editor.
     * If versions list is empty, all available versions are recommended.
     * Example: {"intellij": {versions: ["2025.1", "2024.3"]}, "goland": {}}
     *
     * @generated from field: map<string, gitpod.v1.EditorVersions> editors = 1;
     */
    editors: {
        [key: string]: EditorVersions;
    };
};
/**
 * Describes the message gitpod.v1.RecommendedEditors.
 * Use `create(RecommendedEditorsSchema)` to create a new message.
 */
export declare const RecommendedEditorsSchema: GenMessage<RecommendedEditors>;
/**
 * EditorVersions contains the recommended versions for an editor.
 *
 * @generated from message gitpod.v1.EditorVersions
 */
export type EditorVersions = Message<"gitpod.v1.EditorVersions"> & {
    /**
     * versions is the list of recommended versions for this editor.
     * If empty, all available versions are recommended.
     * Examples for JetBrains: ["2025.1", "2024.3"]
     *
     * @generated from field: repeated string versions = 1;
     */
    versions: string[];
};
/**
 * Describes the message gitpod.v1.EditorVersions.
 * Use `create(EditorVersionsSchema)` to create a new message.
 */
export declare const EditorVersionsSchema: GenMessage<EditorVersions>;
/**
 * @generated from message gitpod.v1.ProjectEnvironmentClass
 */
export type ProjectEnvironmentClass = Message<"gitpod.v1.ProjectEnvironmentClass"> & {
    /**
     * @generated from oneof gitpod.v1.ProjectEnvironmentClass.environment_class
     */
    environmentClass: {
        /**
         * Use a local runner for the user
         *
         * @generated from field: bool local_runner = 1;
         */
        value: boolean;
        case: "localRunner";
    } | {
        /**
         * Use a fixed environment class on a given Runner. This cannot be a local runner's environment class.
         *
         * @generated from field: string environment_class_id = 2;
         */
        value: string;
        case: "environmentClassId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * order is the priority of this entry
     *
     * @generated from field: int32 order = 3;
     */
    order: number;
};
/**
 * Describes the message gitpod.v1.ProjectEnvironmentClass.
 * Use `create(ProjectEnvironmentClassSchema)` to create a new message.
 */
export declare const ProjectEnvironmentClassSchema: GenMessage<ProjectEnvironmentClass>;
/**
 * @generated from message gitpod.v1.ProjectMetadata
 */
export type ProjectMetadata = Message<"gitpod.v1.ProjectMetadata"> & {
    /**
     * organization_id is the ID of the organization that contains the environment
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * name is the human readable name of the project
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * creator is the identity of the project creator
     *
     * @generated from field: gitpod.v1.Subject creator = 3;
     */
    creator?: Subject;
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
 * Describes the message gitpod.v1.ProjectMetadata.
 * Use `create(ProjectMetadataSchema)` to create a new message.
 */
export declare const ProjectMetadataSchema: GenMessage<ProjectMetadata>;
/**
 * @generated from message gitpod.v1.ProjectPolicy
 */
export type ProjectPolicy = Message<"gitpod.v1.ProjectPolicy"> & {
    /**
     * @generated from field: string group_id = 1;
     */
    groupId: string;
    /**
     * role is the role assigned to the group
     *
     * @generated from field: gitpod.v1.ProjectRole role = 2;
     */
    role: ProjectRole;
};
/**
 * Describes the message gitpod.v1.ProjectPolicy.
 * Use `create(ProjectPolicySchema)` to create a new message.
 */
export declare const ProjectPolicySchema: GenMessage<ProjectPolicy>;
/**
 * ProjectPrebuildConfiguration defines how prebuilds are created for a project.
 * Prebuilds create environment snapshots that enable faster environment startup times.
 *
 * @generated from message gitpod.v1.ProjectPrebuildConfiguration
 */
export type ProjectPrebuildConfiguration = Message<"gitpod.v1.ProjectPrebuildConfiguration"> & {
    /**
     * enabled controls whether prebuilds are created for this project.
     * When disabled, no automatic prebuilds will be triggered.
     *
     * @generated from field: bool enabled = 1;
     */
    enabled: boolean;
    /**
     * environment_class_ids specifies which environment classes should have prebuilds created.
     * If empty, no prebuilds are created.
     *
     * @generated from field: repeated string environment_class_ids = 2;
     */
    environmentClassIds: string[];
    /**
     * timeout is the maximum duration allowed for a prebuild to complete.
     * If not specified, defaults to 1 hour.
     * Must be between 5 minutes and 2 hours.
     *
     * @generated from field: google.protobuf.Duration timeout = 3;
     */
    timeout?: Duration;
    /**
     * trigger defines when prebuilds should be created.
     *
     * @generated from field: gitpod.v1.PrebuildTrigger trigger = 4;
     */
    trigger?: PrebuildTrigger;
    /**
     * executor specifies who runs prebuilds for this project.
     * The executor's SCM credentials are used to clone the repository.
     * If not set, defaults to the project creator.
     *
     * @generated from field: gitpod.v1.Subject executor = 5;
     */
    executor?: Subject;
    /**
     * enable_jetbrains_warmup controls whether JetBrains IDE warmup runs during prebuilds.
     *
     * @generated from field: bool enable_jetbrains_warmup = 6;
     */
    enableJetbrainsWarmup: boolean;
};
/**
 * Describes the message gitpod.v1.ProjectPrebuildConfiguration.
 * Use `create(ProjectPrebuildConfigurationSchema)` to create a new message.
 */
export declare const ProjectPrebuildConfigurationSchema: GenMessage<ProjectPrebuildConfiguration>;
/**
 * PrebuildTrigger defines when prebuilds should be created for a project.
 *
 * @generated from message gitpod.v1.PrebuildTrigger
 */
export type PrebuildTrigger = Message<"gitpod.v1.PrebuildTrigger"> & {
    /**
     * @generated from oneof gitpod.v1.PrebuildTrigger.trigger
     */
    trigger: {
        /**
         * daily_schedule triggers a prebuild once per day at the specified hour (UTC).
         * The actual start time may vary slightly to distribute system load.
         *
         * @generated from field: gitpod.v1.PrebuildTrigger.DailySchedule daily_schedule = 1;
         */
        value: PrebuildTrigger_DailySchedule;
        case: "dailySchedule";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.PrebuildTrigger.
 * Use `create(PrebuildTriggerSchema)` to create a new message.
 */
export declare const PrebuildTriggerSchema: GenMessage<PrebuildTrigger>;
/**
 * DailySchedule triggers prebuilds once per day at a specified hour.
 *
 * @generated from message gitpod.v1.PrebuildTrigger.DailySchedule
 */
export type PrebuildTrigger_DailySchedule = Message<"gitpod.v1.PrebuildTrigger.DailySchedule"> & {
    /**
     * hour_utc is the hour of day (0-23) in UTC when the prebuild should start.
     * The actual start time may be adjusted by a few minutes to balance system load.
     *
     * @generated from field: int32 hour_utc = 1;
     */
    hourUtc: number;
};
/**
 * Describes the message gitpod.v1.PrebuildTrigger.DailySchedule.
 * Use `create(PrebuildTrigger_DailyScheduleSchema)` to create a new message.
 */
export declare const PrebuildTrigger_DailyScheduleSchema: GenMessage<PrebuildTrigger_DailySchedule>;
/**
 * @generated from enum gitpod.v1.ProjectPhase
 */
export declare enum ProjectPhase {
    /**
     * @generated from enum value: PROJECT_PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The project is active and can be used
     *
     * @generated from enum value: PROJECT_PHASE_ACTIVE = 1;
     */
    ACTIVE = 1,
    /**
     * The project is marked for deletion and prebuilds are being cleaned up
     *
     * @generated from enum value: PROJECT_PHASE_DELETED = 2;
     */
    DELETED = 2
}
/**
 * Describes the enum gitpod.v1.ProjectPhase.
 */
export declare const ProjectPhaseSchema: GenEnum<ProjectPhase>;
/**
 * @generated from enum gitpod.v1.ProjectRole
 */
export declare enum ProjectRole {
    /**
     * @generated from enum value: PROJECT_ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PROJECT_ROLE_ADMIN = 1;
     */
    ADMIN = 1,
    /**
     * @generated from enum value: PROJECT_ROLE_USER = 2;
     */
    USER = 2,
    /**
     * @generated from enum value: PROJECT_ROLE_EDITOR = 3;
     */
    EDITOR = 3
}
/**
 * Describes the enum gitpod.v1.ProjectRole.
 */
export declare const ProjectRoleSchema: GenEnum<ProjectRole>;
/**
 * @generated from service gitpod.v1.ProjectService
 */
export declare const ProjectService: GenService<{
    /**
     * Creates a new project with specified configuration.
     *
     * Use this method to:
     * - Set up development projects
     * - Configure project environments
     * - Define project settings
     * - Initialize project content
     *
     * ### Examples
     *
     * - Create basic project:
     *
     *   Creates a project with minimal configuration.
     *
     *   ```yaml
     *   name: "Web Application"
     *   initializer:
     *     specs:
     *       - git:
     *           remoteUri: "https://github.com/org/repo"
     *   ```
     *
     * - Create project with devcontainer:
     *
     *   Creates a project with custom development container.
     *
     *   ```yaml
     *   name: "Backend Service"
     *   initializer:
     *     specs:
     *       - git:
     *           remoteUri: "https://github.com/org/backend"
     *   devcontainerFilePath: ".devcontainer/devcontainer.json"
     *   automationsFilePath: ".gitpod/automations.yaml"
     *   ```
     *
     * @generated from rpc gitpod.v1.ProjectService.CreateProject
     */
    createProject: {
        methodKind: "unary";
        input: typeof CreateProjectRequestSchema;
        output: typeof CreateProjectResponseSchema;
    };
    /**
     * Creates multiple projects in a single request.
     *
     * Use this method to:
     * - Onboard multiple repositories at once
     * - Import a batch of projects during initial setup
     *
     * Returns successfully created projects and details about any failures.
     * Each project in the request is processed independently — partial success
     * is possible.
     *
     * ### Examples
     *
     * - Create multiple projects:
     *
     *   Creates several projects in one request.
     *
     *   ```yaml
     *   projects:
     *     - name: "Frontend"
     *       initializer:
     *         specs:
     *           - git:
     *               remoteUri: "https://github.com/org/frontend"
     *     - name: "Backend"
     *       initializer:
     *         specs:
     *           - git:
     *               remoteUri: "https://github.com/org/backend"
     *   ```
     *
     * @generated from rpc gitpod.v1.ProjectService.CreateProjects
     */
    createProjects: {
        methodKind: "unary";
        input: typeof CreateProjectsRequestSchema;
        output: typeof CreateProjectsResponseSchema;
    };
    /**
     * Updates multiple projects in a single request.
     *
     * Use this method to:
     * - Modify settings across multiple projects at once
     * - Apply configuration changes in batch
     *
     * Returns successfully updated projects and details about any failures.
     * Each project in the request is processed independently — partial success
     * is possible.
     *
     * ### Examples
     *
     * - Update multiple projects:
     *
     *   Updates several projects in one request.
     *
     *   ```yaml
     *   projects:
     *     - projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *       name: "Updated Frontend"
     *     - projectId: "c1f23g7d-5d78-430e-b5b7-e0949c6eb158"
     *       name: "Updated Backend"
     *   ```
     *
     * @generated from rpc gitpod.v1.ProjectService.UpdateProjects
     */
    updateProjects: {
        methodKind: "unary";
        input: typeof UpdateProjectsRequestSchema;
        output: typeof UpdateProjectsResponseSchema;
    };
    /**
     * Deletes multiple projects in a single request.
     *
     * Use this method to:
     * - Remove multiple unused projects at once
     * - Clean up projects in batch
     *
     * Returns successfully deleted project IDs and details about any failures.
     * Each project in the request is processed independently — partial success
     * is possible.
     *
     * ### Examples
     *
     * - Delete multiple projects:
     *
     *   Permanently removes several projects in one request.
     *
     *   ```yaml
     *   projectIds:
     *     - "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *     - "c1f23g7d-5d78-430e-b5b7-e0949c6eb158"
     *   ```
     *
     * @generated from rpc gitpod.v1.ProjectService.DeleteProjects
     */
    deleteProjects: {
        methodKind: "unary";
        input: typeof DeleteProjectsRequestSchema;
        output: typeof DeleteProjectsResponseSchema;
    };
    /**
     * Creates a new project using an existing environment as a template.
     *
     * Use this method to:
     * - Clone environment configurations
     * - Create projects from templates
     * - Share environment setups
     *
     * ### Examples
     *
     * - Create from environment:
     *
     *   Creates a project based on existing environment.
     *
     *   ```yaml
     *   name: "Frontend Project"
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   ```
     *
     * @generated from rpc gitpod.v1.ProjectService.CreateProjectFromEnvironment
     */
    createProjectFromEnvironment: {
        methodKind: "unary";
        input: typeof CreateProjectFromEnvironmentRequestSchema;
        output: typeof CreateProjectFromEnvironmentResponseSchema;
    };
    /**
     * Gets details about a specific project.
     *
     * Use this method to:
     * - View project configuration
     * - Check project status
     * - Get project metadata
     *
     * ### Examples
     *
     * - Get project details:
     *
     *   Retrieves information about a specific project.
     *
     *   ```yaml
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.ProjectService.GetProject
     */
    getProject: {
        methodKind: "unary";
        input: typeof GetProjectRequestSchema;
        output: typeof GetProjectResponseSchema;
    };
    /**
     * Updates a project's configuration.
     *
     * Use this method to:
     * - Modify project settings
     * - Update environment class
     * - Change project name
     * - Configure initializers
     * - Configure prebuild settings
     *
     * ### Examples
     *
     * - Update project name:
     *
     *   Changes the project's display name.
     *
     *   ```yaml
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   name: "New Project Name"
     *   ```
     *
     * - Enable prebuilds with daily schedule:
     *
     *   Configures prebuilds to run daily at 2 AM UTC.
     *
     *   ```yaml
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   prebuildConfiguration:
     *     enabled: true
     *     environmentClassIds:
     *       - "b0e12f6c-4c67-429d-a4a6-d9838b5da041"
     *     timeout: "3600s"
     *     trigger:
     *       dailySchedule:
     *         hourUtc: 2
     *   ```
     *
     * @generated from rpc gitpod.v1.ProjectService.UpdateProject
     */
    updateProject: {
        methodKind: "unary";
        input: typeof UpdateProjectRequestSchema;
        output: typeof UpdateProjectResponseSchema;
    };
    /**
     * Lists projects with optional filtering.
     *
     * Use this method to:
     * - View all accessible projects
     * - Browse project configurations
     * - Monitor project status
     *
     * ### Examples
     *
     * - List projects:
     *
     *   Shows all projects with pagination.
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.ProjectService.ListProjects
     */
    listProjects: {
        methodKind: "unary";
        input: typeof ListProjectsRequestSchema;
        output: typeof ListProjectsResponseSchema;
    };
    /**
     * Deletes a project permanently.
     *
     * Use this method to:
     * - Remove unused projects
     * - Clean up test projects
     * - Delete obsolete configurations
     *
     * ### Examples
     *
     * - Delete project:
     *
     *   Permanently removes a project.
     *
     *   ```yaml
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.ProjectService.DeleteProject
     */
    deleteProject: {
        methodKind: "unary";
        input: typeof DeleteProjectRequestSchema;
        output: typeof DeleteProjectResponseSchema;
    };
    /**
     * Lists policies for a project.
     *
     * Use this method to:
     * - View access controls
     * - Check policy configurations
     * - Audit permissions
     *
     * ### Examples
     *
     * - List policies:
     *
     *   Shows all policies for a project.
     *
     *   ```yaml
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.ProjectService.ListProjectPolicies
     */
    listProjectPolicies: {
        methodKind: "unary";
        input: typeof ListProjectPoliciesRequestSchema;
        output: typeof ListProjectPoliciesResponseSchema;
    };
    /**
     * Creates a new policy for a project.
     *
     * Use this method to:
     * - Set up access controls
     * - Define group permissions
     * - Configure role-based access
     *
     * ### Examples
     *
     * - Create admin policy:
     *
     *   Grants admin access to a group.
     *
     *   ```yaml
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   groupId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   role: PROJECT_ROLE_ADMIN
     *   ```
     *
     * @generated from rpc gitpod.v1.ProjectService.CreateProjectPolicy
     */
    createProjectPolicy: {
        methodKind: "unary";
        input: typeof CreateProjectPolicyRequestSchema;
        output: typeof CreateProjectPolicyResponseSchema;
    };
    /**
     * Deletes a project policy.
     *
     * Use this method to:
     * - Remove access controls
     * - Revoke permissions
     * - Clean up policies
     *
     * ### Examples
     *
     * - Delete policy:
     *
     *   Removes a group's access policy.
     *
     *   ```yaml
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   groupId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   ```
     *
     * @generated from rpc gitpod.v1.ProjectService.DeleteProjectPolicy
     */
    deleteProjectPolicy: {
        methodKind: "unary";
        input: typeof DeleteProjectPolicyRequestSchema;
        output: typeof DeleteProjectPolicyResponseSchema;
    };
    /**
     * Updates an existing project policy.
     *
     * Use this method to:
     * - Modify access levels
     * - Change group roles
     * - Update permissions
     *
     * ### Examples
     *
     * - Update policy role:
     *
     *   Changes a group's access level.
     *
     *   ```yaml
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   groupId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   role: PROJECT_ROLE_EDITOR
     *   ```
     *
     * @generated from rpc gitpod.v1.ProjectService.UpdateProjectPolicy
     */
    updateProjectPolicy: {
        methodKind: "unary";
        input: typeof UpdateProjectPolicyRequestSchema;
        output: typeof UpdateProjectPolicyResponseSchema;
    };
    /**
     * Lists environment classes of a project.
     *
     * Use this method to:
     * - View all environment classes of a project
     *
     * ### Examples
     *
     * - List project environment classes:
     *
     *   Shows all environment classes of a project.
     *
     *   ```yaml
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.ProjectService.ListProjectEnvironmentClasses
     */
    listProjectEnvironmentClasses: {
        methodKind: "unary";
        input: typeof ListProjectEnvironmentClassesRequestSchema;
        output: typeof ListProjectEnvironmentClassesResponseSchema;
    };
    /**
     * Updates all environment classes of a project.
     *
     * Use this method to:
     * - Modify all environment classea of a project
     *
     * ### Examples
     *
     * - Update project environment classes:
     *
     *   Updates all environment classes for a project.
     *
     *   ```yaml
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   projectEnvironmentClasses:
     *     - environmentClassId: "b0e12f6c-4c67-429d-a4a6-d9838b5da041"
     *       order: 0
     *     - localRunner: true
     *       order: 1
     *   ```
     *
     * @generated from rpc gitpod.v1.ProjectService.UpdateProjectEnvironmentClasses
     */
    updateProjectEnvironmentClasses: {
        methodKind: "unary";
        input: typeof UpdateProjectEnvironmentClassesRequestSchema;
        output: typeof UpdateProjectEnvironmentClassesResponseSchema;
    };
}>;
