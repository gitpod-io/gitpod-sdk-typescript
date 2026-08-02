import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Subject } from "./identity_pb";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/environment_automation.proto.
 */
export declare const file_gitpod_v1_environment_automation: GenFile;
/**
 * @generated from message gitpod.v1.ServiceMetadata
 */
export type ServiceMetadata = Message<"gitpod.v1.ServiceMetadata"> & {
    /**
     * reference is a user-facing identifier for the service which must be unique on the environment.
     * It is used to express dependencies between services, and to identify the service in user interactions (e.g. the CLI).
     *
     * @generated from field: string reference = 1;
     */
    reference: string;
    /**
     * name is a user-facing name for the service. Unlike the reference, this field is not unique, and not referenced by the system.
     * This is a short descriptive name for the service.
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * description is a user-facing description for the service. It can be used to provide context and documentation for the service.
     *
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * created_at is the time the service was created.
     *
     * @generated from field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * creator describes the principal who created the service.
     *
     * @generated from field: gitpod.v1.Subject creator = 5;
     */
    creator?: Subject;
    /**
     * triggered_by is a list of trigger that start the service.
     *
     * @generated from field: repeated gitpod.v1.AutomationTrigger triggered_by = 6;
     */
    triggeredBy: AutomationTrigger[];
    /**
     * role specifies the intended role or purpose of the service.
     *
     * @generated from field: gitpod.v1.ServiceRole role = 7;
     */
    role: ServiceRole;
};
/**
 * Describes the message gitpod.v1.ServiceMetadata.
 * Use `create(ServiceMetadataSchema)` to create a new message.
 */
export declare const ServiceMetadataSchema: GenMessage<ServiceMetadata>;
/**
 * @generated from message gitpod.v1.ServiceSpec
 */
export type ServiceSpec = Message<"gitpod.v1.ServiceSpec"> & {
    /**
     * version of the spec. The value of this field has no semantic
     * meaning (e.g. don't interpret it as as a timestamp),
     * but it can be used to impose a partial order. If a.spec_version <
     * b.spec_version then a was the spec before b.
     *
     * @generated from field: uint64 spec_version = 1;
     */
    specVersion: bigint;
    /**
     * desired_phase is the phase the service should be in. Used to start or stop the service.
     *
     * @generated from field: gitpod.v1.ServicePhase desired_phase = 2;
     */
    desiredPhase: ServicePhase;
    /**
     * commands contains the commands to start, stop and check the readiness of the service
     *
     * @generated from field: gitpod.v1.ServiceSpec.Commands commands = 3;
     */
    commands?: ServiceSpec_Commands;
    /**
     * session should be changed to trigger a restart of the service. If a service exits it will
     * not be restarted until the session is changed.
     *
     * @generated from field: string session = 4;
     */
    session: string;
    /**
     * runs_on specifies the environment the service should run on.
     *
     * @generated from field: gitpod.v1.RunsOn runs_on = 5;
     */
    runsOn?: RunsOn;
    /**
     * env specifies environment variables for the service.
     *
     * @generated from field: repeated gitpod.v1.EnvironmentVariableItem env = 6;
     */
    env: EnvironmentVariableItem[];
    /**
     * readiness_timeout is the maximum duration a service may remain in the
     * Starting phase while readiness checks run.
     * 0s disables the timeout.
     *
     * @generated from field: google.protobuf.Duration readiness_timeout = 7;
     */
    readinessTimeout?: Duration;
};
/**
 * Describes the message gitpod.v1.ServiceSpec.
 * Use `create(ServiceSpecSchema)` to create a new message.
 */
export declare const ServiceSpecSchema: GenMessage<ServiceSpec>;
/**
 * @generated from message gitpod.v1.ServiceSpec.Commands
 */
export type ServiceSpec_Commands = Message<"gitpod.v1.ServiceSpec.Commands"> & {
    /**
     * start is the command to start and run the service.
     * If start exits, the service will transition to the following phase:
     * - Stopped: if the exit code is 0
     * - Failed: if the exit code is not 0
     * If the stop command is not set, the start command will receive a SIGTERM signal when the service is
     * requested to stop. If it does not exit within 2 minutes, it will receive a SIGKILL signal.
     *
     * @generated from field: string start = 1;
     */
    start: string;
    /**
     * ready is an optional command that is run repeatedly until it exits with a zero exit code.
     * If set, the service will first go into a Starting phase, and then into a Running phase once the ready
     * command exits with a zero exit code.
     *
     * @generated from field: string ready = 2;
     */
    ready: string;
    /**
     * stop is an optional command that runs when the service is requested to stop.
     * If set, instead of sending a SIGTERM signal to the start command, the stop command will be run.
     * Once the stop command exits, the start command will receive a SIGKILL signal.
     * If the stop command exits with a non-zero exit code, the service will transition to the Failed phase.
     * If the stop command does not exit within 2 minutes, a SIGKILL signal will be sent to both the start and
     * stop commands.
     *
     * @generated from field: string stop = 3;
     */
    stop: string;
};
/**
 * Describes the message gitpod.v1.ServiceSpec.Commands.
 * Use `create(ServiceSpec_CommandsSchema)` to create a new message.
 */
export declare const ServiceSpec_CommandsSchema: GenMessage<ServiceSpec_Commands>;
/**
 * @generated from message gitpod.v1.ServiceStatus
 */
export type ServiceStatus = Message<"gitpod.v1.ServiceStatus"> & {
    /**
     * version of the status update. Service instances themselves are
     * unversioned, but their status has different versions. The value of this
     * field has no semantic meaning (e.g. don't interpret it as as a timestamp),
     * but it can be used to impose a partial order. If a.status_version <
     * b.status_version then a was the status before b.
     *
     * @generated from field: uint64 status_version = 1;
     */
    statusVersion: bigint;
    /**
     * phase is the current phase of the service.
     *
     * @generated from field: gitpod.v1.ServicePhase phase = 2;
     */
    phase: ServicePhase;
    /**
     * failure_message summarises why the service failed to operate. If this is non-empty
     * the service has failed to operate and will likely transition to a failed state.
     *
     * @generated from field: string failure_message = 3;
     */
    failureMessage: string;
    /**
     * log_url contains the URL at which the service logs can be accessed.
     *
     * @generated from field: string log_url = 4;
     */
    logUrl: string;
    /**
     * session is the current session of the service.
     *
     * @generated from field: string session = 5;
     */
    session: string;
    /**
     * output contains the output of the service.
     * setting an output field to empty string will unset it.
     *
     * @generated from field: map<string, string> output = 6;
     */
    output: {
        [key: string]: string;
    };
};
/**
 * Describes the message gitpod.v1.ServiceStatus.
 * Use `create(ServiceStatusSchema)` to create a new message.
 */
export declare const ServiceStatusSchema: GenMessage<ServiceStatus>;
/**
 * @generated from message gitpod.v1.Service
 */
export type Service = Message<"gitpod.v1.Service"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string environment_id = 2;
     */
    environmentId: string;
    /**
     * @generated from field: gitpod.v1.ServiceMetadata metadata = 3;
     */
    metadata?: ServiceMetadata;
    /**
     * @generated from field: gitpod.v1.ServiceSpec spec = 4;
     */
    spec?: ServiceSpec;
    /**
     * @generated from field: gitpod.v1.ServiceStatus status = 5;
     */
    status?: ServiceStatus;
};
/**
 * Describes the message gitpod.v1.Service.
 * Use `create(ServiceSchema)` to create a new message.
 */
export declare const ServiceSchema: GenMessage<Service>;
/**
 * @generated from message gitpod.v1.CreateServiceRequest
 */
export type CreateServiceRequest = Message<"gitpod.v1.CreateServiceRequest"> & {
    /**
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * @generated from field: gitpod.v1.ServiceMetadata metadata = 2;
     */
    metadata?: ServiceMetadata;
    /**
     * @generated from field: gitpod.v1.ServiceSpec spec = 3;
     */
    spec?: ServiceSpec;
};
/**
 * Describes the message gitpod.v1.CreateServiceRequest.
 * Use `create(CreateServiceRequestSchema)` to create a new message.
 */
export declare const CreateServiceRequestSchema: GenMessage<CreateServiceRequest>;
/**
 * @generated from message gitpod.v1.CreateServiceResponse
 */
export type CreateServiceResponse = Message<"gitpod.v1.CreateServiceResponse"> & {
    /**
     * @generated from field: gitpod.v1.Service service = 1;
     */
    service?: Service;
};
/**
 * Describes the message gitpod.v1.CreateServiceResponse.
 * Use `create(CreateServiceResponseSchema)` to create a new message.
 */
export declare const CreateServiceResponseSchema: GenMessage<CreateServiceResponse>;
/**
 * @generated from message gitpod.v1.GetServiceRequest
 */
export type GetServiceRequest = Message<"gitpod.v1.GetServiceRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.GetServiceRequest.
 * Use `create(GetServiceRequestSchema)` to create a new message.
 */
export declare const GetServiceRequestSchema: GenMessage<GetServiceRequest>;
/**
 * @generated from message gitpod.v1.GetServiceResponse
 */
export type GetServiceResponse = Message<"gitpod.v1.GetServiceResponse"> & {
    /**
     * @generated from field: gitpod.v1.Service service = 1;
     */
    service?: Service;
};
/**
 * Describes the message gitpod.v1.GetServiceResponse.
 * Use `create(GetServiceResponseSchema)` to create a new message.
 */
export declare const GetServiceResponseSchema: GenMessage<GetServiceResponse>;
/**
 * @generated from message gitpod.v1.ListServicesRequest
 */
export type ListServicesRequest = Message<"gitpod.v1.ListServicesRequest"> & {
    /**
     * pagination contains the pagination options for listing services
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * filter contains the filter options for listing services
     *
     * @generated from field: gitpod.v1.ListServicesRequest.Filter filter = 2;
     */
    filter?: ListServicesRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListServicesRequest.
 * Use `create(ListServicesRequestSchema)` to create a new message.
 */
export declare const ListServicesRequestSchema: GenMessage<ListServicesRequest>;
/**
 * @generated from message gitpod.v1.ListServicesRequest.Filter
 */
export type ListServicesRequest_Filter = Message<"gitpod.v1.ListServicesRequest.Filter"> & {
    /**
     * environment_ids filters the response to only services of these environments
     *
     * @generated from field: repeated string environment_ids = 1;
     */
    environmentIds: string[];
    /**
     * references filters the response to only services with these references
     *
     * @generated from field: repeated string references = 2;
     */
    references: string[];
    /**
     * service_ids filters the response to only services with these IDs
     *
     * @generated from field: repeated string service_ids = 3;
     */
    serviceIds: string[];
    /**
     * roles filters the response to only services with these roles
     *
     * @generated from field: repeated gitpod.v1.ServiceRole roles = 4;
     */
    roles: ServiceRole[];
};
/**
 * Describes the message gitpod.v1.ListServicesRequest.Filter.
 * Use `create(ListServicesRequest_FilterSchema)` to create a new message.
 */
export declare const ListServicesRequest_FilterSchema: GenMessage<ListServicesRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListServicesResponse
 */
export type ListServicesResponse = Message<"gitpod.v1.ListServicesResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.Service services = 2;
     */
    services: Service[];
};
/**
 * Describes the message gitpod.v1.ListServicesResponse.
 * Use `create(ListServicesResponseSchema)` to create a new message.
 */
export declare const ListServicesResponseSchema: GenMessage<ListServicesResponse>;
/**
 * @generated from message gitpod.v1.UpdateServiceRequest
 */
export type UpdateServiceRequest = Message<"gitpod.v1.UpdateServiceRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: gitpod.v1.UpdateServiceRequest.ServiceMetadata metadata = 2;
     */
    metadata?: UpdateServiceRequest_ServiceMetadata;
    /**
     * Changing the spec of a service is a complex operation. The spec of a service
     * can only be updated if the service is in a stopped state. If the service is
     * running, it must be stopped first.
     *
     * @generated from field: gitpod.v1.UpdateServiceRequest.ServiceSpec spec = 3;
     */
    spec?: UpdateServiceRequest_ServiceSpec;
    /**
     * Service status updates are only expected from the executing environment. As a client
     * of this API you are not expected to provide this field. Updating this field requires
     * the `environmentservice:update_status` permission.
     *
     * @generated from field: gitpod.v1.UpdateServiceRequest.ServiceStatus status = 4;
     */
    status?: UpdateServiceRequest_ServiceStatus;
};
/**
 * Describes the message gitpod.v1.UpdateServiceRequest.
 * Use `create(UpdateServiceRequestSchema)` to create a new message.
 */
export declare const UpdateServiceRequestSchema: GenMessage<UpdateServiceRequest>;
/**
 * @generated from message gitpod.v1.UpdateServiceRequest.AutomationTriggerUpdate
 */
export type UpdateServiceRequest_AutomationTriggerUpdate = Message<"gitpod.v1.UpdateServiceRequest.AutomationTriggerUpdate"> & {
    /**
     * @generated from field: repeated gitpod.v1.AutomationTrigger trigger = 1;
     */
    trigger: AutomationTrigger[];
};
/**
 * Describes the message gitpod.v1.UpdateServiceRequest.AutomationTriggerUpdate.
 * Use `create(UpdateServiceRequest_AutomationTriggerUpdateSchema)` to create a new message.
 */
export declare const UpdateServiceRequest_AutomationTriggerUpdateSchema: GenMessage<UpdateServiceRequest_AutomationTriggerUpdate>;
/**
 * @generated from message gitpod.v1.UpdateServiceRequest.ServiceMetadata
 */
export type UpdateServiceRequest_ServiceMetadata = Message<"gitpod.v1.UpdateServiceRequest.ServiceMetadata"> & {
    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from field: optional string description = 2;
     */
    description?: string;
    /**
     * @generated from field: optional gitpod.v1.UpdateServiceRequest.AutomationTriggerUpdate triggered_by = 3;
     */
    triggeredBy?: UpdateServiceRequest_AutomationTriggerUpdate;
    /**
     * @generated from field: optional gitpod.v1.ServiceRole role = 4;
     */
    role?: ServiceRole;
};
/**
 * Describes the message gitpod.v1.UpdateServiceRequest.ServiceMetadata.
 * Use `create(UpdateServiceRequest_ServiceMetadataSchema)` to create a new message.
 */
export declare const UpdateServiceRequest_ServiceMetadataSchema: GenMessage<UpdateServiceRequest_ServiceMetadata>;
/**
 * @generated from message gitpod.v1.UpdateServiceRequest.ServiceSpec
 */
export type UpdateServiceRequest_ServiceSpec = Message<"gitpod.v1.UpdateServiceRequest.ServiceSpec"> & {
    /**
     * @generated from field: optional gitpod.v1.UpdateServiceRequest.ServiceSpec.Commands commands = 1;
     */
    commands?: UpdateServiceRequest_ServiceSpec_Commands;
    /**
     * @generated from field: optional gitpod.v1.RunsOn runs_on = 2;
     */
    runsOn?: RunsOn;
    /**
     * @generated from field: repeated gitpod.v1.EnvironmentVariableItem env = 3;
     */
    env: EnvironmentVariableItem[];
    /**
     * @generated from field: google.protobuf.Duration readiness_timeout = 4;
     */
    readinessTimeout?: Duration;
};
/**
 * Describes the message gitpod.v1.UpdateServiceRequest.ServiceSpec.
 * Use `create(UpdateServiceRequest_ServiceSpecSchema)` to create a new message.
 */
export declare const UpdateServiceRequest_ServiceSpecSchema: GenMessage<UpdateServiceRequest_ServiceSpec>;
/**
 * @generated from message gitpod.v1.UpdateServiceRequest.ServiceSpec.Commands
 */
export type UpdateServiceRequest_ServiceSpec_Commands = Message<"gitpod.v1.UpdateServiceRequest.ServiceSpec.Commands"> & {
    /**
     * @generated from field: optional string start = 1;
     */
    start?: string;
    /**
     * @generated from field: optional string ready = 2;
     */
    ready?: string;
    /**
     * @generated from field: optional string stop = 3;
     */
    stop?: string;
};
/**
 * Describes the message gitpod.v1.UpdateServiceRequest.ServiceSpec.Commands.
 * Use `create(UpdateServiceRequest_ServiceSpec_CommandsSchema)` to create a new message.
 */
export declare const UpdateServiceRequest_ServiceSpec_CommandsSchema: GenMessage<UpdateServiceRequest_ServiceSpec_Commands>;
/**
 * @generated from message gitpod.v1.UpdateServiceRequest.ServiceStatus
 */
export type UpdateServiceRequest_ServiceStatus = Message<"gitpod.v1.UpdateServiceRequest.ServiceStatus"> & {
    /**
     * @generated from field: optional gitpod.v1.ServicePhase phase = 1;
     */
    phase?: ServicePhase;
    /**
     * @generated from field: optional string failure_message = 2;
     */
    failureMessage?: string;
    /**
     * @generated from field: optional string log_url = 3;
     */
    logUrl?: string;
    /**
     * @generated from field: optional string session = 4;
     */
    session?: string;
    /**
     * setting an output field to empty string will unset it.
     *
     * @generated from field: map<string, string> output = 5;
     */
    output: {
        [key: string]: string;
    };
};
/**
 * Describes the message gitpod.v1.UpdateServiceRequest.ServiceStatus.
 * Use `create(UpdateServiceRequest_ServiceStatusSchema)` to create a new message.
 */
export declare const UpdateServiceRequest_ServiceStatusSchema: GenMessage<UpdateServiceRequest_ServiceStatus>;
/**
 * @generated from message gitpod.v1.UpdateServiceResponse
 */
export type UpdateServiceResponse = Message<"gitpod.v1.UpdateServiceResponse"> & {};
/**
 * Describes the message gitpod.v1.UpdateServiceResponse.
 * Use `create(UpdateServiceResponseSchema)` to create a new message.
 */
export declare const UpdateServiceResponseSchema: GenMessage<UpdateServiceResponse>;
/**
 * @generated from message gitpod.v1.DeleteServiceRequest
 */
export type DeleteServiceRequest = Message<"gitpod.v1.DeleteServiceRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: bool force = 2;
     */
    force: boolean;
};
/**
 * Describes the message gitpod.v1.DeleteServiceRequest.
 * Use `create(DeleteServiceRequestSchema)` to create a new message.
 */
export declare const DeleteServiceRequestSchema: GenMessage<DeleteServiceRequest>;
/**
 * @generated from message gitpod.v1.DeleteServiceResponse
 */
export type DeleteServiceResponse = Message<"gitpod.v1.DeleteServiceResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteServiceResponse.
 * Use `create(DeleteServiceResponseSchema)` to create a new message.
 */
export declare const DeleteServiceResponseSchema: GenMessage<DeleteServiceResponse>;
/**
 * @generated from message gitpod.v1.StartServiceRequest
 */
export type StartServiceRequest = Message<"gitpod.v1.StartServiceRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.StartServiceRequest.
 * Use `create(StartServiceRequestSchema)` to create a new message.
 */
export declare const StartServiceRequestSchema: GenMessage<StartServiceRequest>;
/**
 * @generated from message gitpod.v1.StartServiceResponse
 */
export type StartServiceResponse = Message<"gitpod.v1.StartServiceResponse"> & {};
/**
 * Describes the message gitpod.v1.StartServiceResponse.
 * Use `create(StartServiceResponseSchema)` to create a new message.
 */
export declare const StartServiceResponseSchema: GenMessage<StartServiceResponse>;
/**
 * @generated from message gitpod.v1.StopServiceRequest
 */
export type StopServiceRequest = Message<"gitpod.v1.StopServiceRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.StopServiceRequest.
 * Use `create(StopServiceRequestSchema)` to create a new message.
 */
export declare const StopServiceRequestSchema: GenMessage<StopServiceRequest>;
/**
 * @generated from message gitpod.v1.StopServiceResponse
 */
export type StopServiceResponse = Message<"gitpod.v1.StopServiceResponse"> & {};
/**
 * Describes the message gitpod.v1.StopServiceResponse.
 * Use `create(StopServiceResponseSchema)` to create a new message.
 */
export declare const StopServiceResponseSchema: GenMessage<StopServiceResponse>;
/**
 * @generated from message gitpod.v1.UpsertAutomationsFileRequest
 */
export type UpsertAutomationsFileRequest = Message<"gitpod.v1.UpsertAutomationsFileRequest"> & {
    /**
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * @generated from field: gitpod.v1.AutomationsFile automations_file = 2;
     */
    automationsFile?: AutomationsFile;
};
/**
 * Describes the message gitpod.v1.UpsertAutomationsFileRequest.
 * Use `create(UpsertAutomationsFileRequestSchema)` to create a new message.
 */
export declare const UpsertAutomationsFileRequestSchema: GenMessage<UpsertAutomationsFileRequest>;
/**
 * @generated from message gitpod.v1.UpsertAutomationsFileResponse
 */
export type UpsertAutomationsFileResponse = Message<"gitpod.v1.UpsertAutomationsFileResponse"> & {
    /**
     * @generated from field: repeated string updated_service_ids = 1;
     */
    updatedServiceIds: string[];
    /**
     * @generated from field: repeated string updated_task_ids = 2;
     */
    updatedTaskIds: string[];
};
/**
 * Describes the message gitpod.v1.UpsertAutomationsFileResponse.
 * Use `create(UpsertAutomationsFileResponseSchema)` to create a new message.
 */
export declare const UpsertAutomationsFileResponseSchema: GenMessage<UpsertAutomationsFileResponse>;
/**
 * WARN: Do not remove any field here, as it will break reading automation yaml files. We error if there are any
 * unknown fields in the yaml (to ensure the yaml is correct), but would break if we removed any fields.
 * This includes marking a field as "reserved" in the proto file, this will also break reading the yaml.
 *
 * @generated from message gitpod.v1.AutomationsFile
 */
export type AutomationsFile = Message<"gitpod.v1.AutomationsFile"> & {
    /**
     * @generated from field: map<string, gitpod.v1.AutomationsFile.Service> services = 1;
     */
    services: {
        [key: string]: AutomationsFile_Service;
    };
    /**
     * @generated from field: map<string, gitpod.v1.AutomationsFile.Task> tasks = 2;
     */
    tasks: {
        [key: string]: AutomationsFile_Task;
    };
};
/**
 * Describes the message gitpod.v1.AutomationsFile.
 * Use `create(AutomationsFileSchema)` to create a new message.
 */
export declare const AutomationsFileSchema: GenMessage<AutomationsFile>;
/**
 * @generated from message gitpod.v1.AutomationsFile.Service
 */
export type AutomationsFile_Service = Message<"gitpod.v1.AutomationsFile.Service"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: gitpod.v1.ServiceSpec.Commands commands = 3;
     */
    commands?: ServiceSpec_Commands;
    /**
     * @generated from field: repeated string triggered_by = 4;
     */
    triggeredBy: string[];
    /**
     * @generated from field: gitpod.v1.RunsOn runs_on = 10;
     */
    runsOn?: RunsOn;
    /**
     * @generated from field: string role = 11;
     */
    role: string;
    /**
     * @generated from field: google.protobuf.Duration readiness_timeout = 12;
     */
    readinessTimeout?: Duration;
};
/**
 * Describes the message gitpod.v1.AutomationsFile.Service.
 * Use `create(AutomationsFile_ServiceSchema)` to create a new message.
 */
export declare const AutomationsFile_ServiceSchema: GenMessage<AutomationsFile_Service>;
/**
 * @generated from message gitpod.v1.AutomationsFile.Task
 */
export type AutomationsFile_Task = Message<"gitpod.v1.AutomationsFile.Task"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string command = 3;
     */
    command: string;
    /**
     * @generated from field: repeated string depends_on = 4;
     */
    dependsOn: string[];
    /**
     * @generated from field: repeated string triggered_by = 5;
     */
    triggeredBy: string[];
    /**
     * @generated from field: gitpod.v1.RunsOn runs_on = 10;
     */
    runsOn?: RunsOn;
    /**
     * prebuild_requires_success controls whether a non-successful outcome of this task
     * should fail the prebuild. When true and the task is triggered by a prebuild trigger,
     * any terminal phase other than SUCCEEDED will cause the prebuild to fail.
     * Defaults to false.
     *
     * @generated from field: bool prebuild_requires_success = 11;
     */
    prebuildRequiresSuccess: boolean;
};
/**
 * Describes the message gitpod.v1.AutomationsFile.Task.
 * Use `create(AutomationsFile_TaskSchema)` to create a new message.
 */
export declare const AutomationsFile_TaskSchema: GenMessage<AutomationsFile_Task>;
/**
 * @generated from message gitpod.v1.CreateTaskRequest
 */
export type CreateTaskRequest = Message<"gitpod.v1.CreateTaskRequest"> & {
    /**
     * @generated from field: string environment_id = 1;
     */
    environmentId: string;
    /**
     * @generated from field: gitpod.v1.TaskMetadata metadata = 2;
     */
    metadata?: TaskMetadata;
    /**
     * @generated from field: gitpod.v1.TaskSpec spec = 3;
     */
    spec?: TaskSpec;
    /**
     * @generated from field: repeated string depends_on = 4;
     */
    dependsOn: string[];
};
/**
 * Describes the message gitpod.v1.CreateTaskRequest.
 * Use `create(CreateTaskRequestSchema)` to create a new message.
 */
export declare const CreateTaskRequestSchema: GenMessage<CreateTaskRequest>;
/**
 * @generated from message gitpod.v1.CreateTaskResponse
 */
export type CreateTaskResponse = Message<"gitpod.v1.CreateTaskResponse"> & {
    /**
     * @generated from field: gitpod.v1.Task task = 1;
     */
    task?: Task;
};
/**
 * Describes the message gitpod.v1.CreateTaskResponse.
 * Use `create(CreateTaskResponseSchema)` to create a new message.
 */
export declare const CreateTaskResponseSchema: GenMessage<CreateTaskResponse>;
/**
 * @generated from message gitpod.v1.GetTaskRequest
 */
export type GetTaskRequest = Message<"gitpod.v1.GetTaskRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.GetTaskRequest.
 * Use `create(GetTaskRequestSchema)` to create a new message.
 */
export declare const GetTaskRequestSchema: GenMessage<GetTaskRequest>;
/**
 * @generated from message gitpod.v1.GetTaskResponse
 */
export type GetTaskResponse = Message<"gitpod.v1.GetTaskResponse"> & {
    /**
     * @generated from field: gitpod.v1.Task task = 1;
     */
    task?: Task;
};
/**
 * Describes the message gitpod.v1.GetTaskResponse.
 * Use `create(GetTaskResponseSchema)` to create a new message.
 */
export declare const GetTaskResponseSchema: GenMessage<GetTaskResponse>;
/**
 * @generated from message gitpod.v1.ListTasksRequest
 */
export type ListTasksRequest = Message<"gitpod.v1.ListTasksRequest"> & {
    /**
     * pagination contains the pagination options for listing tasks
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * filter contains the filter options for listing tasks
     *
     * @generated from field: gitpod.v1.ListTasksRequest.Filter filter = 2;
     */
    filter?: ListTasksRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListTasksRequest.
 * Use `create(ListTasksRequestSchema)` to create a new message.
 */
export declare const ListTasksRequestSchema: GenMessage<ListTasksRequest>;
/**
 * @generated from message gitpod.v1.ListTasksRequest.Filter
 */
export type ListTasksRequest_Filter = Message<"gitpod.v1.ListTasksRequest.Filter"> & {
    /**
     * environment_ids filters the response to only tasks of these environments
     *
     * @generated from field: repeated string environment_ids = 1;
     */
    environmentIds: string[];
    /**
     * references filters the response to only services with these references
     *
     * @generated from field: repeated string references = 2;
     */
    references: string[];
    /**
     * task_ids filters the response to only tasks with these IDs
     *
     * @generated from field: repeated string task_ids = 3;
     */
    taskIds: string[];
};
/**
 * Describes the message gitpod.v1.ListTasksRequest.Filter.
 * Use `create(ListTasksRequest_FilterSchema)` to create a new message.
 */
export declare const ListTasksRequest_FilterSchema: GenMessage<ListTasksRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListTasksResponse
 */
export type ListTasksResponse = Message<"gitpod.v1.ListTasksResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.Task tasks = 2;
     */
    tasks: Task[];
};
/**
 * Describes the message gitpod.v1.ListTasksResponse.
 * Use `create(ListTasksResponseSchema)` to create a new message.
 */
export declare const ListTasksResponseSchema: GenMessage<ListTasksResponse>;
/**
 * @generated from message gitpod.v1.UpdateTaskRequest
 */
export type UpdateTaskRequest = Message<"gitpod.v1.UpdateTaskRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: gitpod.v1.UpdateTaskRequest.TaskMetadata metadata = 2;
     */
    metadata?: UpdateTaskRequest_TaskMetadata;
    /**
     * @generated from field: gitpod.v1.UpdateTaskRequest.TaskSpec spec = 3;
     */
    spec?: UpdateTaskRequest_TaskSpec;
    /**
     * dependencies specifies the IDs of the automations this task depends on.
     *
     * @generated from field: repeated string depends_on = 4;
     */
    dependsOn: string[];
};
/**
 * Describes the message gitpod.v1.UpdateTaskRequest.
 * Use `create(UpdateTaskRequestSchema)` to create a new message.
 */
export declare const UpdateTaskRequestSchema: GenMessage<UpdateTaskRequest>;
/**
 * @generated from message gitpod.v1.UpdateTaskRequest.AutomationTriggerUpdate
 */
export type UpdateTaskRequest_AutomationTriggerUpdate = Message<"gitpod.v1.UpdateTaskRequest.AutomationTriggerUpdate"> & {
    /**
     * @generated from field: repeated gitpod.v1.AutomationTrigger trigger = 1;
     */
    trigger: AutomationTrigger[];
};
/**
 * Describes the message gitpod.v1.UpdateTaskRequest.AutomationTriggerUpdate.
 * Use `create(UpdateTaskRequest_AutomationTriggerUpdateSchema)` to create a new message.
 */
export declare const UpdateTaskRequest_AutomationTriggerUpdateSchema: GenMessage<UpdateTaskRequest_AutomationTriggerUpdate>;
/**
 * @generated from message gitpod.v1.UpdateTaskRequest.TaskMetadata
 */
export type UpdateTaskRequest_TaskMetadata = Message<"gitpod.v1.UpdateTaskRequest.TaskMetadata"> & {
    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from field: optional string description = 2;
     */
    description?: string;
    /**
     * @generated from field: optional gitpod.v1.UpdateTaskRequest.AutomationTriggerUpdate triggered_by = 3;
     */
    triggeredBy?: UpdateTaskRequest_AutomationTriggerUpdate;
};
/**
 * Describes the message gitpod.v1.UpdateTaskRequest.TaskMetadata.
 * Use `create(UpdateTaskRequest_TaskMetadataSchema)` to create a new message.
 */
export declare const UpdateTaskRequest_TaskMetadataSchema: GenMessage<UpdateTaskRequest_TaskMetadata>;
/**
 * @generated from message gitpod.v1.UpdateTaskRequest.TaskSpec
 */
export type UpdateTaskRequest_TaskSpec = Message<"gitpod.v1.UpdateTaskRequest.TaskSpec"> & {
    /**
     * @generated from field: optional string command = 1;
     */
    command?: string;
    /**
     * @generated from field: optional gitpod.v1.RunsOn runs_on = 2;
     */
    runsOn?: RunsOn;
    /**
     * @generated from field: repeated gitpod.v1.EnvironmentVariableItem env = 3;
     */
    env: EnvironmentVariableItem[];
    /**
     * @generated from field: optional bool prebuild_requires_success = 4;
     */
    prebuildRequiresSuccess?: boolean;
};
/**
 * Describes the message gitpod.v1.UpdateTaskRequest.TaskSpec.
 * Use `create(UpdateTaskRequest_TaskSpecSchema)` to create a new message.
 */
export declare const UpdateTaskRequest_TaskSpecSchema: GenMessage<UpdateTaskRequest_TaskSpec>;
/**
 * @generated from message gitpod.v1.UpdateTaskResponse
 */
export type UpdateTaskResponse = Message<"gitpod.v1.UpdateTaskResponse"> & {};
/**
 * Describes the message gitpod.v1.UpdateTaskResponse.
 * Use `create(UpdateTaskResponseSchema)` to create a new message.
 */
export declare const UpdateTaskResponseSchema: GenMessage<UpdateTaskResponse>;
/**
 * @generated from message gitpod.v1.DeleteTaskRequest
 */
export type DeleteTaskRequest = Message<"gitpod.v1.DeleteTaskRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.DeleteTaskRequest.
 * Use `create(DeleteTaskRequestSchema)` to create a new message.
 */
export declare const DeleteTaskRequestSchema: GenMessage<DeleteTaskRequest>;
/**
 * @generated from message gitpod.v1.DeleteTaskResponse
 */
export type DeleteTaskResponse = Message<"gitpod.v1.DeleteTaskResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteTaskResponse.
 * Use `create(DeleteTaskResponseSchema)` to create a new message.
 */
export declare const DeleteTaskResponseSchema: GenMessage<DeleteTaskResponse>;
/**
 * @generated from message gitpod.v1.StartTaskRequest
 */
export type StartTaskRequest = Message<"gitpod.v1.StartTaskRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.StartTaskRequest.
 * Use `create(StartTaskRequestSchema)` to create a new message.
 */
export declare const StartTaskRequestSchema: GenMessage<StartTaskRequest>;
/**
 * @generated from message gitpod.v1.StartTaskResponse
 */
export type StartTaskResponse = Message<"gitpod.v1.StartTaskResponse"> & {
    /**
     * @generated from field: gitpod.v1.TaskExecution task_execution = 1;
     */
    taskExecution?: TaskExecution;
};
/**
 * Describes the message gitpod.v1.StartTaskResponse.
 * Use `create(StartTaskResponseSchema)` to create a new message.
 */
export declare const StartTaskResponseSchema: GenMessage<StartTaskResponse>;
/**
 * @generated from message gitpod.v1.ListTaskExecutionsRequest
 */
export type ListTaskExecutionsRequest = Message<"gitpod.v1.ListTaskExecutionsRequest"> & {
    /**
     * pagination contains the pagination options for listing task runs
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * filter contains the filter options for listing task runs
     *
     * @generated from field: gitpod.v1.ListTaskExecutionsRequest.Filter filter = 2;
     */
    filter?: ListTaskExecutionsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListTaskExecutionsRequest.
 * Use `create(ListTaskExecutionsRequestSchema)` to create a new message.
 */
export declare const ListTaskExecutionsRequestSchema: GenMessage<ListTaskExecutionsRequest>;
/**
 * @generated from message gitpod.v1.ListTaskExecutionsRequest.Filter
 */
export type ListTaskExecutionsRequest_Filter = Message<"gitpod.v1.ListTaskExecutionsRequest.Filter"> & {
    /**
     * task_ids filters the response to only task runs of these tasks
     *
     * @generated from field: repeated string task_ids = 1;
     */
    taskIds: string[];
    /**
     * task_references filters the response to only task runs with this reference
     *
     * @generated from field: repeated string task_references = 2;
     */
    taskReferences: string[];
    /**
     * environment_ids filters the response to only task runs of these environments
     *
     * @generated from field: repeated string environment_ids = 3;
     */
    environmentIds: string[];
    /**
     * phases filters the response to only task runs in these phases
     *
     * @generated from field: repeated gitpod.v1.TaskExecutionPhase phases = 4;
     */
    phases: TaskExecutionPhase[];
};
/**
 * Describes the message gitpod.v1.ListTaskExecutionsRequest.Filter.
 * Use `create(ListTaskExecutionsRequest_FilterSchema)` to create a new message.
 */
export declare const ListTaskExecutionsRequest_FilterSchema: GenMessage<ListTaskExecutionsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListTaskExecutionsResponse
 */
export type ListTaskExecutionsResponse = Message<"gitpod.v1.ListTaskExecutionsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.TaskExecution task_executions = 2;
     */
    taskExecutions: TaskExecution[];
};
/**
 * Describes the message gitpod.v1.ListTaskExecutionsResponse.
 * Use `create(ListTaskExecutionsResponseSchema)` to create a new message.
 */
export declare const ListTaskExecutionsResponseSchema: GenMessage<ListTaskExecutionsResponse>;
/**
 * @generated from message gitpod.v1.GetTaskExecutionRequest
 */
export type GetTaskExecutionRequest = Message<"gitpod.v1.GetTaskExecutionRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.GetTaskExecutionRequest.
 * Use `create(GetTaskExecutionRequestSchema)` to create a new message.
 */
export declare const GetTaskExecutionRequestSchema: GenMessage<GetTaskExecutionRequest>;
/**
 * @generated from message gitpod.v1.GetTaskExecutionResponse
 */
export type GetTaskExecutionResponse = Message<"gitpod.v1.GetTaskExecutionResponse"> & {
    /**
     * @generated from field: gitpod.v1.TaskExecution task_execution = 1;
     */
    taskExecution?: TaskExecution;
};
/**
 * Describes the message gitpod.v1.GetTaskExecutionResponse.
 * Use `create(GetTaskExecutionResponseSchema)` to create a new message.
 */
export declare const GetTaskExecutionResponseSchema: GenMessage<GetTaskExecutionResponse>;
/**
 * @generated from message gitpod.v1.StopTaskExecutionRequest
 */
export type StopTaskExecutionRequest = Message<"gitpod.v1.StopTaskExecutionRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.StopTaskExecutionRequest.
 * Use `create(StopTaskExecutionRequestSchema)` to create a new message.
 */
export declare const StopTaskExecutionRequestSchema: GenMessage<StopTaskExecutionRequest>;
/**
 * @generated from message gitpod.v1.StopTaskExecutionResponse
 */
export type StopTaskExecutionResponse = Message<"gitpod.v1.StopTaskExecutionResponse"> & {};
/**
 * Describes the message gitpod.v1.StopTaskExecutionResponse.
 * Use `create(StopTaskExecutionResponseSchema)` to create a new message.
 */
export declare const StopTaskExecutionResponseSchema: GenMessage<StopTaskExecutionResponse>;
/**
 * @generated from message gitpod.v1.TaskMetadata
 */
export type TaskMetadata = Message<"gitpod.v1.TaskMetadata"> & {
    /**
     * reference is a user-facing identifier for the task which must be unique on the environment.
     * It is used to express dependencies between tasks, and to identify the task in user interactions (e.g. the CLI).
     *
     * @generated from field: string reference = 1;
     */
    reference: string;
    /**
     * name is a user-facing name for the task. Unlike the reference, this field is not unique, and not referenced by the system.
     * This is a short descriptive name for the task.
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * description is a user-facing description for the task. It can be used to provide context and documentation for the task.
     *
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * created_at is the time the task was created.
     *
     * @generated from field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * creator describes the principal who created the task.
     *
     * @generated from field: gitpod.v1.Subject creator = 5;
     */
    creator?: Subject;
    /**
     * triggered_by is a list of trigger that start the task.
     *
     * @generated from field: repeated gitpod.v1.AutomationTrigger triggered_by = 6;
     */
    triggeredBy: AutomationTrigger[];
};
/**
 * Describes the message gitpod.v1.TaskMetadata.
 * Use `create(TaskMetadataSchema)` to create a new message.
 */
export declare const TaskMetadataSchema: GenMessage<TaskMetadata>;
/**
 * @generated from message gitpod.v1.TaskSpec
 */
export type TaskSpec = Message<"gitpod.v1.TaskSpec"> & {
    /**
     * command contains the command the task should execute
     *
     * @generated from field: string command = 1;
     */
    command: string;
    /**
     * runs_on specifies the environment the task should run on.
     *
     * @generated from field: gitpod.v1.RunsOn runs_on = 2;
     */
    runsOn?: RunsOn;
    /**
     * env specifies environment variables for the task.
     *
     * @generated from field: repeated gitpod.v1.EnvironmentVariableItem env = 3;
     */
    env: EnvironmentVariableItem[];
    /**
     * prebuild_requires_success controls whether a non-successful outcome of this task
     * should fail the prebuild. When true and the task is triggered by a prebuild or
     * before_snapshot trigger, any terminal phase other than SUCCEEDED (i.e. FAILED or
     * STOPPED) will cause the prebuild to fail instead of just recording a warning.
     * Defaults to false (existing behavior: task failures produce warnings only).
     *
     * @generated from field: bool prebuild_requires_success = 4;
     */
    prebuildRequiresSuccess: boolean;
};
/**
 * Describes the message gitpod.v1.TaskSpec.
 * Use `create(TaskSpecSchema)` to create a new message.
 */
export declare const TaskSpecSchema: GenMessage<TaskSpec>;
/**
 * @generated from message gitpod.v1.Task
 */
export type Task = Message<"gitpod.v1.Task"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string environment_id = 2;
     */
    environmentId: string;
    /**
     * @generated from field: gitpod.v1.TaskMetadata metadata = 3;
     */
    metadata?: TaskMetadata;
    /**
     * @generated from field: gitpod.v1.TaskSpec spec = 4;
     */
    spec?: TaskSpec;
    /**
     * dependencies specifies the IDs of the automations this task depends on.
     *
     * @generated from field: repeated string depends_on = 5;
     */
    dependsOn: string[];
};
/**
 * Describes the message gitpod.v1.Task.
 * Use `create(TaskSchema)` to create a new message.
 */
export declare const TaskSchema: GenMessage<Task>;
/**
 * @generated from message gitpod.v1.RunsOn
 */
export type RunsOn = Message<"gitpod.v1.RunsOn"> & {
    /**
     * @generated from oneof gitpod.v1.RunsOn.target
     */
    target: {
        /**
         * @generated from field: gitpod.v1.RunsOn.Docker docker = 10;
         */
        value: RunsOn_Docker;
        case: "docker";
    } | {
        /**
         * @generated from field: gitpod.v1.RunsOn.Machine machine = 30;
         */
        value: RunsOn_Machine;
        case: "machine";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.RunsOn.
 * Use `create(RunsOnSchema)` to create a new message.
 */
export declare const RunsOnSchema: GenMessage<RunsOn>;
/**
 * @generated from message gitpod.v1.RunsOn.Docker
 */
export type RunsOn_Docker = Message<"gitpod.v1.RunsOn.Docker"> & {
    /**
     * @generated from field: string image = 1;
     */
    image: string;
    /**
     * @generated from field: repeated string environment = 2;
     */
    environment: string[];
};
/**
 * Describes the message gitpod.v1.RunsOn.Docker.
 * Use `create(RunsOn_DockerSchema)` to create a new message.
 */
export declare const RunsOn_DockerSchema: GenMessage<RunsOn_Docker>;
/**
 * Machine runs the service/task directly on the VM/machine level.
 *
 * @generated from message gitpod.v1.RunsOn.Machine
 */
export type RunsOn_Machine = Message<"gitpod.v1.RunsOn.Machine"> & {};
/**
 * Describes the message gitpod.v1.RunsOn.Machine.
 * Use `create(RunsOn_MachineSchema)` to create a new message.
 */
export declare const RunsOn_MachineSchema: GenMessage<RunsOn_Machine>;
/**
 * EnvironmentVariableItem represents an environment variable that can be set
 * either from a literal value or from a secret reference.
 *
 * @generated from message gitpod.v1.EnvironmentVariableItem
 */
export type EnvironmentVariableItem = Message<"gitpod.v1.EnvironmentVariableItem"> & {
    /**
     * name is the environment variable name.
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from oneof gitpod.v1.EnvironmentVariableItem.source
     */
    source: {
        /**
         * value is a literal string value.
         *
         * @generated from field: string value = 2;
         */
        value: string;
        case: "value";
    } | {
        /**
         * value_from specifies a source for the value.
         *
         * @generated from field: gitpod.v1.EnvironmentVariableSource value_from = 3;
         */
        value: EnvironmentVariableSource;
        case: "valueFrom";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.EnvironmentVariableItem.
 * Use `create(EnvironmentVariableItemSchema)` to create a new message.
 */
export declare const EnvironmentVariableItemSchema: GenMessage<EnvironmentVariableItem>;
/**
 * EnvironmentVariableSource specifies a source for an environment variable value.
 *
 * @generated from message gitpod.v1.EnvironmentVariableSource
 */
export type EnvironmentVariableSource = Message<"gitpod.v1.EnvironmentVariableSource"> & {
    /**
     * @generated from oneof gitpod.v1.EnvironmentVariableSource.source
     */
    source: {
        /**
         * secret_ref references a secret by ID.
         *
         * @generated from field: gitpod.v1.SecretRef secret_ref = 1;
         */
        value: SecretRef;
        case: "secretRef";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.EnvironmentVariableSource.
 * Use `create(EnvironmentVariableSourceSchema)` to create a new message.
 */
export declare const EnvironmentVariableSourceSchema: GenMessage<EnvironmentVariableSource>;
/**
 * SecretRef references a secret by its ID.
 *
 * @generated from message gitpod.v1.SecretRef
 */
export type SecretRef = Message<"gitpod.v1.SecretRef"> & {
    /**
     * id is the UUID of the secret to reference.
     *
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.SecretRef.
 * Use `create(SecretRefSchema)` to create a new message.
 */
export declare const SecretRefSchema: GenMessage<SecretRef>;
/**
 * @generated from message gitpod.v1.TaskExecution
 */
export type TaskExecution = Message<"gitpod.v1.TaskExecution"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: gitpod.v1.TaskExecutionMetadata metadata = 2;
     */
    metadata?: TaskExecutionMetadata;
    /**
     * @generated from field: gitpod.v1.TaskExecutionSpec spec = 3;
     */
    spec?: TaskExecutionSpec;
    /**
     * @generated from field: gitpod.v1.TaskExecutionStatus status = 4;
     */
    status?: TaskExecutionStatus;
};
/**
 * Describes the message gitpod.v1.TaskExecution.
 * Use `create(TaskExecutionSchema)` to create a new message.
 */
export declare const TaskExecutionSchema: GenMessage<TaskExecution>;
/**
 * @generated from message gitpod.v1.TaskExecutionMetadata
 */
export type TaskExecutionMetadata = Message<"gitpod.v1.TaskExecutionMetadata"> & {
    /**
     * task_id is the ID of the main task being executed.
     *
     * @generated from field: string task_id = 1;
     */
    taskId: string;
    /**
     * environment_id is the ID of the environment in which the task run is executed.
     *
     * @generated from field: string environment_id = 2;
     */
    environmentId: string;
    /**
     * created_at is the time the task was created.
     *
     * @generated from field: google.protobuf.Timestamp created_at = 3;
     */
    createdAt?: Timestamp;
    /**
     * creator describes the principal who created/started the task run.
     *
     * @generated from field: gitpod.v1.Subject creator = 4;
     */
    creator?: Subject;
    /**
     * started_by describes the trigger that started the task execution.
     *
     * @generated from field: string started_by = 6;
     */
    startedBy: string;
    /**
     * started_at is the time the task execution actually started to run.
     *
     * @generated from field: google.protobuf.Timestamp started_at = 7;
     */
    startedAt?: Timestamp;
    /**
     * completed_at is the time the task execution was done.
     *
     * @generated from field: google.protobuf.Timestamp completed_at = 8;
     */
    completedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.TaskExecutionMetadata.
 * Use `create(TaskExecutionMetadataSchema)` to create a new message.
 */
export declare const TaskExecutionMetadataSchema: GenMessage<TaskExecutionMetadata>;
/**
 * @generated from message gitpod.v1.TaskExecutionSpec
 */
export type TaskExecutionSpec = Message<"gitpod.v1.TaskExecutionSpec"> & {
    /**
     * plan is a list of groups of steps. The steps in a group are executed concurrently, while the groups are executed sequentially.
     * The order of the groups is the order in which they are executed.
     *
     * @generated from field: repeated gitpod.v1.TaskExecutionSpec.Group plan = 1;
     */
    plan: TaskExecutionSpec_Group[];
    /**
     * desired_phase is the phase the task execution should be in. Used to stop a running task execution early.
     *
     * @generated from field: gitpod.v1.TaskExecutionPhase desired_phase = 2;
     */
    desiredPhase: TaskExecutionPhase;
};
/**
 * Describes the message gitpod.v1.TaskExecutionSpec.
 * Use `create(TaskExecutionSpecSchema)` to create a new message.
 */
export declare const TaskExecutionSpecSchema: GenMessage<TaskExecutionSpec>;
/**
 * @generated from message gitpod.v1.TaskExecutionSpec.Task
 */
export type TaskExecutionSpec_Task = Message<"gitpod.v1.TaskExecutionSpec.Task"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: gitpod.v1.TaskSpec spec = 2;
     */
    spec?: TaskSpec;
};
/**
 * Describes the message gitpod.v1.TaskExecutionSpec.Task.
 * Use `create(TaskExecutionSpec_TaskSchema)` to create a new message.
 */
export declare const TaskExecutionSpec_TaskSchema: GenMessage<TaskExecutionSpec_Task>;
/**
 * @generated from message gitpod.v1.TaskExecutionSpec.Step
 */
export type TaskExecutionSpec_Step = Message<"gitpod.v1.TaskExecutionSpec.Step"> & {
    /**
     * ID is the ID of the execution step
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: repeated string depends_on = 2;
     */
    dependsOn: string[];
    /**
     * @generated from field: string label = 3;
     */
    label: string;
    /**
     * @generated from oneof gitpod.v1.TaskExecutionSpec.Step.step
     */
    step: {
        /**
         * @generated from field: gitpod.v1.TaskExecutionSpec.Task task = 10;
         */
        value: TaskExecutionSpec_Task;
        case: "task";
    } | {
        /**
         * @generated from field: string service_id = 11;
         */
        value: string;
        case: "serviceId";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.TaskExecutionSpec.Step.
 * Use `create(TaskExecutionSpec_StepSchema)` to create a new message.
 */
export declare const TaskExecutionSpec_StepSchema: GenMessage<TaskExecutionSpec_Step>;
/**
 * @generated from message gitpod.v1.TaskExecutionSpec.Group
 */
export type TaskExecutionSpec_Group = Message<"gitpod.v1.TaskExecutionSpec.Group"> & {
    /**
     * @generated from field: repeated gitpod.v1.TaskExecutionSpec.Step steps = 1;
     */
    steps: TaskExecutionSpec_Step[];
};
/**
 * Describes the message gitpod.v1.TaskExecutionSpec.Group.
 * Use `create(TaskExecutionSpec_GroupSchema)` to create a new message.
 */
export declare const TaskExecutionSpec_GroupSchema: GenMessage<TaskExecutionSpec_Group>;
/**
 * @generated from message gitpod.v1.TaskExecutionStatus
 */
export type TaskExecutionStatus = Message<"gitpod.v1.TaskExecutionStatus"> & {
    /**
     * version of the status update. Task executions themselves are
     * unversioned, but their status has different versions. The value of this
     * field has no semantic meaning (e.g. don't interpret it as as a timestamp),
     * but it can be used to impose a partial order. If a.status_version <
     * b.status_version then a was the status before b.
     *
     * @generated from field: uint64 status_version = 1;
     */
    statusVersion: bigint;
    /**
     * the phase of a task execution represents the aggregated phase of all steps.
     *
     * @generated from field: gitpod.v1.TaskExecutionPhase phase = 2;
     */
    phase: TaskExecutionPhase;
    /**
     * failure_message summarises why the task execution failed to operate. If this is non-empty
     * the task execution has failed to operate and will likely transition to a failed state.
     *
     * @generated from field: string failure_message = 3;
     */
    failureMessage: string;
    /**
     * steps provides the status for each individual step of the task execution. If a step is missing it
     * has not yet started.
     *
     * @generated from field: repeated gitpod.v1.TaskExecutionStatus.Step steps = 4;
     */
    steps: TaskExecutionStatus_Step[];
    /**
     * log_url is the URL to the logs of the task's steps. If this is empty, the task either has no logs
     * or has not yet started.
     *
     * @generated from field: string log_url = 5;
     */
    logUrl: string;
};
/**
 * Describes the message gitpod.v1.TaskExecutionStatus.
 * Use `create(TaskExecutionStatusSchema)` to create a new message.
 */
export declare const TaskExecutionStatusSchema: GenMessage<TaskExecutionStatus>;
/**
 * @generated from message gitpod.v1.TaskExecutionStatus.Step
 */
export type TaskExecutionStatus_Step = Message<"gitpod.v1.TaskExecutionStatus.Step"> & {
    /**
     * ID is the ID of the execution step
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * phase is the current phase of the execution step
     *
     * @generated from field: gitpod.v1.TaskExecutionPhase phase = 2;
     */
    phase: TaskExecutionPhase;
    /**
     * failure_message summarises why the step failed to operate. If this is non-empty
     * the step has failed to operate and will likely transition to a failed state.
     *
     * @generated from field: string failure_message = 3;
     */
    failureMessage: string;
    /**
     * output contains the output of the task execution.
     * setting an output field to empty string will unset it.
     *
     * @generated from field: map<string, string> output = 4;
     */
    output: {
        [key: string]: string;
    };
};
/**
 * Describes the message gitpod.v1.TaskExecutionStatus.Step.
 * Use `create(TaskExecutionStatus_StepSchema)` to create a new message.
 */
export declare const TaskExecutionStatus_StepSchema: GenMessage<TaskExecutionStatus_Step>;
/**
 * An AutomationTrigger represents a trigger for an automation action.
 * The `manual` field shows a start button in the UI for manually triggering the automation.
 * The `post_machine_start` field indicates that the automation should be triggered after the machine has started, before the devcontainer is ready.
 * This is used for machine-level services like security agents that need to start early.
 * The `post_environment_start` field indicates that the automation should be triggered after the environment has started (devcontainer ready).
 * The `post_devcontainer_start` field indicates that the automation should be triggered after the dev container has started.
 * The `prebuild` field starts the automation during a prebuild of an environment. This phase does not have user secrets available.
 * The `before_snapshot` field triggers the automation after all prebuild tasks complete but before the snapshot is taken.
 * This is used for tasks that need to run last during prebuilds, such as IDE warmup.
 * Note: The before_snapshot trigger can only be used with tasks, not services.
 *
 * @generated from message gitpod.v1.AutomationTrigger
 */
export type AutomationTrigger = Message<"gitpod.v1.AutomationTrigger"> & {
    /**
     * @generated from oneof gitpod.v1.AutomationTrigger.trigger
     */
    trigger: {
        /**
         * @generated from field: bool manual = 1;
         */
        value: boolean;
        case: "manual";
    } | {
        /**
         * @generated from field: bool post_machine_start = 5;
         */
        value: boolean;
        case: "postMachineStart";
    } | {
        /**
         * @generated from field: bool post_environment_start = 10;
         */
        value: boolean;
        case: "postEnvironmentStart";
    } | {
        /**
         * @generated from field: bool post_devcontainer_start = 20;
         */
        value: boolean;
        case: "postDevcontainerStart";
    } | {
        /**
         * @generated from field: bool prebuild = 30;
         */
        value: boolean;
        case: "prebuild";
    } | {
        /**
         * @generated from field: bool before_snapshot = 40;
         */
        value: boolean;
        case: "beforeSnapshot";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.AutomationTrigger.
 * Use `create(AutomationTriggerSchema)` to create a new message.
 */
export declare const AutomationTriggerSchema: GenMessage<AutomationTrigger>;
/**
 * @generated from enum gitpod.v1.ServicePhase
 */
export declare enum ServicePhase {
    /**
     * @generated from enum value: SERVICE_PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SERVICE_PHASE_STARTING = 1;
     */
    STARTING = 1,
    /**
     * @generated from enum value: SERVICE_PHASE_RUNNING = 2;
     */
    RUNNING = 2,
    /**
     * @generated from enum value: SERVICE_PHASE_STOPPING = 3;
     */
    STOPPING = 3,
    /**
     * @generated from enum value: SERVICE_PHASE_STOPPED = 4;
     */
    STOPPED = 4,
    /**
     * @generated from enum value: SERVICE_PHASE_FAILED = 5;
     */
    FAILED = 5,
    /**
     * @generated from enum value: SERVICE_PHASE_DELETED = 6;
     */
    DELETED = 6
}
/**
 * Describes the enum gitpod.v1.ServicePhase.
 */
export declare const ServicePhaseSchema: GenEnum<ServicePhase>;
/**
 * @generated from enum gitpod.v1.ServiceRole
 */
export declare enum ServiceRole {
    /**
     * @generated from enum value: SERVICE_ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SERVICE_ROLE_DEFAULT = 1;
     */
    DEFAULT = 1,
    /**
     * @generated from enum value: SERVICE_ROLE_EDITOR = 2;
     */
    EDITOR = 2,
    /**
     * @generated from enum value: SERVICE_ROLE_AI_AGENT = 3;
     */
    AI_AGENT = 3,
    /**
     * @generated from enum value: SERVICE_ROLE_SECURITY_AGENT = 4;
     */
    SECURITY_AGENT = 4
}
/**
 * Describes the enum gitpod.v1.ServiceRole.
 */
export declare const ServiceRoleSchema: GenEnum<ServiceRole>;
/**
 * @generated from enum gitpod.v1.TaskExecutionPhase
 */
export declare enum TaskExecutionPhase {
    /**
     * @generated from enum value: TASK_EXECUTION_PHASE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: TASK_EXECUTION_PHASE_PENDING = 1;
     */
    PENDING = 1,
    /**
     * @generated from enum value: TASK_EXECUTION_PHASE_RUNNING = 2;
     */
    RUNNING = 2,
    /**
     * @generated from enum value: TASK_EXECUTION_PHASE_SUCCEEDED = 3;
     */
    SUCCEEDED = 3,
    /**
     * @generated from enum value: TASK_EXECUTION_PHASE_FAILED = 4;
     */
    FAILED = 4,
    /**
     * @generated from enum value: TASK_EXECUTION_PHASE_STOPPED = 5;
     */
    STOPPED = 5
}
/**
 * Describes the enum gitpod.v1.TaskExecutionPhase.
 */
export declare const TaskExecutionPhaseSchema: GenEnum<TaskExecutionPhase>;
/**
 * @generated from service gitpod.v1.EnvironmentAutomationService
 */
export declare const EnvironmentAutomationService: GenService<{
    /**
     * Creates a new automation service for an environment.
     *
     * Use this method to:
     * - Set up long-running services
     * - Configure service triggers
     * - Define service dependencies
     * - Specify runtime environments
     *
     * ### Examples
     *
     * - Create basic service:
     *
     *   Creates a simple service with start command.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   metadata:
     *     reference: "web-server"
     *     name: "Web Server"
     *     description: "Runs the development web server"
     *     triggeredBy:
     *       - postDevcontainerStart: true
     *   spec:
     *     commands:
     *       start: "npm run dev"
     *       ready: "curl -s http://localhost:3000"
     *   ```
     *
     * - Create Docker-based service:
     *
     *   Creates a service running in a specific container.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   metadata:
     *     reference: "redis"
     *     name: "Redis Server"
     *     description: "Redis cache service"
     *   spec:
     *     commands:
     *       start: "redis-server"
     *     runsOn:
     *       docker:
     *         image: "redis:7"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.CreateService
     */
    createService: {
        methodKind: "unary";
        input: typeof CreateServiceRequestSchema;
        output: typeof CreateServiceResponseSchema;
    };
    /**
     * Gets details about a specific automation service.
     *
     * Use this method to:
     * - Check service status
     * - View service configuration
     * - Monitor service health
     * - Retrieve service metadata
     *
     * ### Examples
     *
     * - Get service details:
     *
     *   Retrieves information about a specific service.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.GetService
     */
    getService: {
        methodKind: "unary";
        input: typeof GetServiceRequestSchema;
        output: typeof GetServiceResponseSchema;
    };
    /**
     * Lists automation services with optional filtering.
     *
     * Use this method to:
     * - View all services in an environment
     * - Filter services by reference
     * - Monitor service status
     *
     * ### Examples
     *
     * - List environment services:
     *
     *   Shows all services for an environment.
     *
     *   ```yaml
     *   filter:
     *     environmentIds: ["07e03a28-65a5-4d98-b532-8ea67b188048"]
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - Filter by reference:
     *
     *   Lists services matching specific references.
     *
     *   ```yaml
     *   filter:
     *     references: ["web-server", "database"]
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.ListServices
     */
    listServices: {
        methodKind: "unary";
        input: typeof ListServicesRequestSchema;
        output: typeof ListServicesResponseSchema;
    };
    /**
     * Updates an automation service configuration.
     *
     * Use this method to:
     * - Modify service commands
     * - Update triggers
     * - Change runtime settings
     * - Adjust dependencies
     *
     * ### Examples
     *
     * - Update commands:
     *
     *   Changes service start and ready commands.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   spec:
     *     commands:
     *       start: "npm run start:dev"
     *       ready: "curl -s http://localhost:8080"
     *   ```
     *
     * - Update triggers:
     *
     *   Modifies when the service starts.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   metadata:
     *     triggeredBy:
     *       trigger:
     *         - postDevcontainerStart: true
     *         - manual: true
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.UpdateService
     */
    updateService: {
        methodKind: "unary";
        input: typeof UpdateServiceRequestSchema;
        output: typeof UpdateServiceResponseSchema;
    };
    /**
     * Deletes an automation service. This call does not block until the service is deleted.
     * If the service is not stopped it will be stopped before deletion.
     *
     * Use this method to:
     * - Remove unused services
     * - Clean up service configurations
     * - Stop and delete services
     *
     * ### Examples
     *
     * - Delete service:
     *
     *   Removes a service after stopping it.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   force: false
     *   ```
     *
     * - Force delete:
     *
     *   Immediately removes a service.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   force: true
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.DeleteService
     */
    deleteService: {
        methodKind: "unary";
        input: typeof DeleteServiceRequestSchema;
        output: typeof DeleteServiceResponseSchema;
    };
    /**
     * Starts an automation service. This call does not block until the service is started.
     * This call will not error if the service is already running or has been started.
     *
     * Use this method to:
     * - Start stopped services
     * - Resume service operations
     * - Trigger service initialization
     *
     * ### Examples
     *
     * - Start service:
     *
     *   Starts a previously stopped service.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.StartService
     */
    startService: {
        methodKind: "unary";
        input: typeof StartServiceRequestSchema;
        output: typeof StartServiceResponseSchema;
    };
    /**
     * Stops an automation service. This call does not block until the service is stopped.
     * This call will not error if the service is already stopped or has been stopped.
     *
     * Use this method to:
     * - Pause service operations
     * - Gracefully stop services
     * - Prepare for updates
     *
     * ### Examples
     *
     * - Stop service:
     *
     *   Gracefully stops a running service.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.StopService
     */
    stopService: {
        methodKind: "unary";
        input: typeof StopServiceRequestSchema;
        output: typeof StopServiceResponseSchema;
    };
    /**
     * Upserts the automations file for the given environment.
     *
     * Use this method to:
     * - Configure environment automations
     * - Update automation settings
     * - Manage automation files
     *
     * ### Examples
     *
     * - Update automations file:
     *
     *   Updates or creates the automations configuration.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   automationsFile:
     *     services:
     *       web-server:
     *         name: "Web Server"
     *         description: "Development web server"
     *         commands:
     *           start: "npm run dev"
     *           ready: "curl -s http://localhost:3000"
     *         triggeredBy:
     *           - postDevcontainerStart
     *     tasks:
     *       build:
     *         name: "Build Project"
     *         description: "Builds the project artifacts"
     *         command: "npm run build"
     *         triggeredBy:
     *           - postEnvironmentStart
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.UpsertAutomationsFile
     */
    upsertAutomationsFile: {
        methodKind: "unary";
        input: typeof UpsertAutomationsFileRequestSchema;
        output: typeof UpsertAutomationsFileResponseSchema;
    };
    /**
     * Creates a new automation task.
     *
     * Use this method to:
     * - Define one-off or scheduled tasks
     * - Set up build or test automation
     * - Configure task dependencies
     * - Specify execution environments
     *
     * ### Examples
     *
     * - Create basic task:
     *
     *   Creates a simple build task.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   metadata:
     *     reference: "build"
     *     name: "Build Project"
     *     description: "Builds the project artifacts"
     *     triggeredBy:
     *       - postEnvironmentStart: true
     *   spec:
     *     command: "npm run build"
     *   ```
     *
     * - Create task with dependencies:
     *
     *   Creates a task that depends on other services.
     *
     *   ```yaml
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   metadata:
     *     reference: "test"
     *     name: "Run Tests"
     *     description: "Runs the test suite"
     *   spec:
     *     command: "npm test"
     *   dependsOn: ["d2c94c27-3b76-4a42-b88c-95a85e392c68"]
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.CreateTask
     */
    createTask: {
        methodKind: "unary";
        input: typeof CreateTaskRequestSchema;
        output: typeof CreateTaskResponseSchema;
    };
    /**
     * Gets details about a specific automation task.
     *
     * Use this method to:
     * - Check task configuration
     * - View task dependencies
     * - Monitor task status
     *
     * ### Examples
     *
     * - Get task details:
     *
     *   Retrieves information about a specific task.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.GetTask
     */
    getTask: {
        methodKind: "unary";
        input: typeof GetTaskRequestSchema;
        output: typeof GetTaskResponseSchema;
    };
    /**
     * Lists automation tasks with optional filtering.
     *
     * Use this method to:
     * - View all tasks in an environment
     * - Filter tasks by reference
     * - Monitor task status
     *
     * ### Examples
     *
     * - List environment tasks:
     *
     *   Shows all tasks for an environment.
     *
     *   ```yaml
     *   filter:
     *     environmentIds: ["07e03a28-65a5-4d98-b532-8ea67b188048"]
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - Filter by reference:
     *
     *   Lists tasks matching specific references.
     *
     *   ```yaml
     *   filter:
     *     references: ["build", "test"]
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.ListTasks
     */
    listTasks: {
        methodKind: "unary";
        input: typeof ListTasksRequestSchema;
        output: typeof ListTasksResponseSchema;
    };
    /**
     * Updates an automation task configuration.
     *
     * Use this method to:
     * - Modify task commands
     * - Update task triggers
     * - Change dependencies
     * - Adjust execution settings
     *
     * ### Examples
     *
     * - Update command:
     *
     *   Changes the task's command.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   spec:
     *     command: "npm run test:coverage"
     *   ```
     *
     * - Update triggers:
     *
     *   Modifies when the task runs.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   metadata:
     *     triggeredBy:
     *       trigger:
     *         - postEnvironmentStart: true
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.UpdateTask
     */
    updateTask: {
        methodKind: "unary";
        input: typeof UpdateTaskRequestSchema;
        output: typeof UpdateTaskResponseSchema;
    };
    /**
     * Deletes an automation task.
     *
     * Use this method to:
     * - Remove unused tasks
     * - Clean up task configurations
     * - Delete obsolete automations
     *
     * ### Examples
     *
     * - Delete task:
     *
     *   Removes a task and its configuration.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.DeleteTask
     */
    deleteTask: {
        methodKind: "unary";
        input: typeof DeleteTaskRequestSchema;
        output: typeof DeleteTaskResponseSchema;
    };
    /**
     * Starts a task by creating a new task execution.
     * This call does not block until the task is started; the task will be started asynchronously.
     *
     * Use this method to:
     * - Trigger task execution
     * - Run one-off tasks
     * - Start scheduled tasks immediately
     *
     * ### Examples
     *
     * - Start task:
     *
     *   Creates a new execution of a task.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.StartTask
     */
    startTask: {
        methodKind: "unary";
        input: typeof StartTaskRequestSchema;
        output: typeof StartTaskResponseSchema;
    };
    /**
     * Lists executions of automation tasks.
     *
     * Use this method to:
     * - View task execution history
     * - Monitor running tasks
     * - Track task completion status
     *
     * ### Examples
     *
     * - List all executions:
     *
     *   Shows execution history for all tasks.
     *
     *   ```yaml
     *   filter:
     *     environmentIds: ["07e03a28-65a5-4d98-b532-8ea67b188048"]
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - Filter by phase:
     *
     *   Lists executions in specific phases.
     *
     *   ```yaml
     *   filter:
     *     phases: ["TASK_EXECUTION_PHASE_RUNNING", "TASK_EXECUTION_PHASE_FAILED"]
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.ListTaskExecutions
     */
    listTaskExecutions: {
        methodKind: "unary";
        input: typeof ListTaskExecutionsRequestSchema;
        output: typeof ListTaskExecutionsResponseSchema;
    };
    /**
     * Gets details about a specific task execution.
     *
     * Use this method to:
     * - Monitor execution progress
     * - View execution logs
     * - Check execution status
     * - Debug failed executions
     *
     * ### Examples
     *
     * - Get execution details:
     *
     *   Retrieves information about a specific task execution.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.GetTaskExecution
     */
    getTaskExecution: {
        methodKind: "unary";
        input: typeof GetTaskExecutionRequestSchema;
        output: typeof GetTaskExecutionResponseSchema;
    };
    /**
     * Stops a running task execution.
     *
     * Use this method to:
     * - Cancel long-running tasks
     * - Stop failed executions
     * - Interrupt task processing
     *
     * ### Examples
     *
     * - Stop execution:
     *
     *   Stops a running task execution.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.EnvironmentAutomationService.StopTaskExecution
     */
    stopTaskExecution: {
        methodKind: "unary";
        input: typeof StopTaskExecutionRequestSchema;
        output: typeof StopTaskExecutionResponseSchema;
    };
}>;
