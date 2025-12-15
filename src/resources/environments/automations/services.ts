// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ServicesAPI from './services';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, ServicesPage, type ServicesPageParams } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';

export class Services extends APIResource {
  /**
   * Creates a new automation service for an environment.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const service =
   *   await client.environments.automations.services.create({
   *     environmentId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   *     metadata: {
   *       description: 'Runs the development web server',
   *       name: 'Web Server',
   *       reference: 'web-server',
   *       triggeredBy: [{ postDevcontainerStart: true }],
   *     },
   *     spec: {
   *       commands: {
   *         ready: 'curl -s http://localhost:3000',
   *         start: 'npm run dev',
   *       },
   *     },
   *   });
   * ```
   */
  create(body: ServiceCreateParams, options?: RequestOptions): APIPromise<ServiceCreateResponse> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/CreateService', { body, ...options });
  }

  /**
   * Gets details about a specific automation service.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const service =
   *   await client.environments.automations.services.retrieve({
   *     id: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   });
   * ```
   */
  retrieve(body: ServiceRetrieveParams, options?: RequestOptions): APIPromise<ServiceRetrieveResponse> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/GetService', { body, ...options });
  }

  /**
   * Updates an automation service configuration.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const service =
   *   await client.environments.automations.services.update({
   *     id: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *     spec: {
   *       commands: {
   *         ready: 'curl -s http://localhost:8080',
   *         start: 'npm run start:dev',
   *       },
   *     },
   *   });
   * ```
   */
  update(body: ServiceUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/UpdateService', { body, ...options });
  }

  /**
   * Lists automation services with optional filtering.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const service of client.environments.automations.services.list(
   *   {
   *     filter: { references: ['web-server', 'database'] },
   *     pagination: { pageSize: 20 },
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(params: ServiceListParams, options?: RequestOptions): PagePromise<ServicesServicesPage, Service> {
    const { token, pageSize, ...body } = params;
    return this._client.getAPIList(
      '/gitpod.v1.EnvironmentAutomationService/ListServices',
      ServicesPage<Service>,
      { query: { token, pageSize }, body, method: 'post', ...options },
    );
  }

  /**
   * Deletes an automation service. This call does not block until the service is
   * deleted. If the service is not stopped it will be stopped before deletion.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const service =
   *   await client.environments.automations.services.delete({
   *     id: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   });
   * ```
   */
  delete(body: ServiceDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/DeleteService', { body, ...options });
  }

  /**
   * Starts an automation service. This call does not block until the service is
   * started. This call will not error if the service is already running or has been
   * started.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const response =
   *   await client.environments.automations.services.start({
   *     id: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   });
   * ```
   */
  start(body: ServiceStartParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/StartService', { body, ...options });
  }

  /**
   * Stops an automation service. This call does not block until the service is
   * stopped. This call will not error if the service is already stopped or has been
   * stopped.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const response =
   *   await client.environments.automations.services.stop({
   *     id: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *   });
   * ```
   */
  stop(body: ServiceStopParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/StopService', { body, ...options });
  }
}

export type ServicesServicesPage = ServicesPage<Service>;

export interface Service {
  id: string;

  environmentId?: string;

  metadata?: ServiceMetadata;

  spec?: ServiceSpec;

  status?: ServiceStatus;
}

export interface ServiceMetadata {
  /**
   * created_at is the time the service was created.
   */
  createdAt?: string;

  /**
   * creator describes the principal who created the service.
   */
  creator?: Shared.Subject;

  /**
   * description is a user-facing description for the service. It can be used to
   * provide context and documentation for the service.
   */
  description?: string;

  /**
   * name is a user-facing name for the service. Unlike the reference, this field is
   * not unique, and not referenced by the system. This is a short descriptive name
   * for the service.
   */
  name?: string;

  /**
   * reference is a user-facing identifier for the service which must be unique on
   * the environment. It is used to express dependencies between services, and to
   * identify the service in user interactions (e.g. the CLI).
   */
  reference?: string;

  /**
   * role specifies the intended role or purpose of the service.
   */
  role?: ServiceRole;

  /**
   * triggered_by is a list of trigger that start the service.
   */
  triggeredBy?: Array<Shared.AutomationTrigger>;
}

export type ServicePhase =
  | 'SERVICE_PHASE_UNSPECIFIED'
  | 'SERVICE_PHASE_STARTING'
  | 'SERVICE_PHASE_RUNNING'
  | 'SERVICE_PHASE_STOPPING'
  | 'SERVICE_PHASE_STOPPED'
  | 'SERVICE_PHASE_FAILED'
  | 'SERVICE_PHASE_DELETED';

export type ServiceRole =
  | 'SERVICE_ROLE_UNSPECIFIED'
  | 'SERVICE_ROLE_DEFAULT'
  | 'SERVICE_ROLE_EDITOR'
  | 'SERVICE_ROLE_AI_AGENT'
  | 'SERVICE_ROLE_SECURITY_AGENT';

export interface ServiceSpec {
  /**
   * commands contains the commands to start, stop and check the readiness of the
   * service
   */
  commands?: ServiceSpec.Commands;

  /**
   * desired_phase is the phase the service should be in. Used to start or stop the
   * service.
   */
  desiredPhase?: ServicePhase;

  /**
   * env specifies environment variables for the service.
   */
  env?: Array<Shared.EnvironmentVariableItem>;

  /**
   * runs_on specifies the environment the service should run on.
   */
  runsOn?: Shared.RunsOn;

  /**
   * session should be changed to trigger a restart of the service. If a service
   * exits it will not be restarted until the session is changed.
   */
  session?: string;

  /**
   * version of the spec. The value of this field has no semantic meaning (e.g. don't
   * interpret it as as a timestamp), but it can be used to impose a partial order.
   * If a.spec_version < b.spec_version then a was the spec before b.
   */
  specVersion?: string;
}

export namespace ServiceSpec {
  /**
   * commands contains the commands to start, stop and check the readiness of the
   * service
   */
  export interface Commands {
    /**
     * ready is an optional command that is run repeatedly until it exits with a zero
     * exit code. If set, the service will first go into a Starting phase, and then
     * into a Running phase once the ready command exits with a zero exit code.
     */
    ready?: string;

    /**
     * start is the command to start and run the service. If start exits, the service
     * will transition to the following phase:
     *
     * - Stopped: if the exit code is 0
     * - Failed: if the exit code is not 0 If the stop command is not set, the start
     *   command will receive a SIGTERM signal when the service is requested to stop.
     *   If it does not exit within 2 minutes, it will receive a SIGKILL signal.
     */
    start?: string;

    /**
     * stop is an optional command that runs when the service is requested to stop. If
     * set, instead of sending a SIGTERM signal to the start command, the stop command
     * will be run. Once the stop command exits, the start command will receive a
     * SIGKILL signal. If the stop command exits with a non-zero exit code, the service
     * will transition to the Failed phase. If the stop command does not exit within 2
     * minutes, a SIGKILL signal will be sent to both the start and stop commands.
     */
    stop?: string;
  }
}

export interface ServiceStatus {
  /**
   * failure_message summarises why the service failed to operate. If this is
   * non-empty the service has failed to operate and will likely transition to a
   * failed state.
   */
  failureMessage?: string;

  /**
   * log_url contains the URL at which the service logs can be accessed.
   */
  logUrl?: string;

  /**
   * output contains the output of the service. setting an output field to empty
   * string will unset it.
   */
  output?: { [key: string]: string };

  /**
   * phase is the current phase of the service.
   */
  phase?: ServicePhase;

  /**
   * session is the current session of the service.
   */
  session?: string;

  /**
   * version of the status update. Service instances themselves are unversioned, but
   * their status has different versions. The value of this field has no semantic
   * meaning (e.g. don't interpret it as as a timestamp), but it can be used to
   * impose a partial order. If a.status_version < b.status_version then a was the
   * status before b.
   */
  statusVersion?: string;
}

export interface ServiceCreateResponse {
  service: Service;
}

export interface ServiceRetrieveResponse {
  service: Service;
}

export type ServiceUpdateResponse = unknown;

export type ServiceDeleteResponse = unknown;

export type ServiceStartResponse = unknown;

export type ServiceStopResponse = unknown;

export interface ServiceCreateParams {
  environmentId?: string;

  metadata?: ServiceMetadata;

  spec?: ServiceSpec;
}

export interface ServiceRetrieveParams {
  id?: string;
}

export interface ServiceUpdateParams {
  id?: string;

  metadata?: ServiceUpdateParams.Metadata;

  /**
   * Changing the spec of a service is a complex operation. The spec of a service can
   * only be updated if the service is in a stopped state. If the service is running,
   * it must be stopped first.
   */
  spec?: ServiceUpdateParams.Spec;

  /**
   * Service status updates are only expected from the executing environment. As a
   * client of this API you are not expected to provide this field. Updating this
   * field requires the `environmentservice:update_status` permission.
   */
  status?: ServiceUpdateParams.Status;
}

export namespace ServiceUpdateParams {
  export interface Metadata {
    description?: string | null;

    name?: string | null;

    role?: ServicesAPI.ServiceRole | null;

    triggeredBy?: Metadata.TriggeredBy | null;
  }

  export namespace Metadata {
    export interface TriggeredBy {
      trigger?: Array<Shared.AutomationTrigger>;
    }
  }

  /**
   * Changing the spec of a service is a complex operation. The spec of a service can
   * only be updated if the service is in a stopped state. If the service is running,
   * it must be stopped first.
   */
  export interface Spec {
    commands?: Spec.Commands | null;

    env?: Array<Shared.EnvironmentVariableItem>;

    runsOn?: Shared.RunsOn | null;
  }

  export namespace Spec {
    export interface Commands {
      ready?: string | null;

      start?: string | null;

      stop?: string | null;
    }
  }

  /**
   * Service status updates are only expected from the executing environment. As a
   * client of this API you are not expected to provide this field. Updating this
   * field requires the `environmentservice:update_status` permission.
   */
  export interface Status {
    failureMessage?: string | null;

    logUrl?: string | null;

    /**
     * setting an output field to empty string will unset it.
     */
    output?: { [key: string]: string };

    phase?: ServicesAPI.ServicePhase | null;

    session?: string | null;
  }
}

export interface ServiceListParams extends ServicesPageParams {
  /**
   * Body param: filter contains the filter options for listing services
   */
  filter?: ServiceListParams.Filter;

  /**
   * Body param: pagination contains the pagination options for listing services
   */
  pagination?: ServiceListParams.Pagination;
}

export namespace ServiceListParams {
  /**
   * filter contains the filter options for listing services
   */
  export interface Filter {
    /**
     * environment_ids filters the response to only services of these environments
     */
    environmentIds?: Array<string>;

    /**
     * references filters the response to only services with these references
     */
    references?: Array<string>;

    /**
     * roles filters the response to only services with these roles
     */
    roles?: Array<ServicesAPI.ServiceRole>;

    /**
     * service_ids filters the response to only services with these IDs
     */
    serviceIds?: Array<string>;
  }

  /**
   * pagination contains the pagination options for listing services
   */
  export interface Pagination {
    /**
     * Token for the next set of results that was returned as next_token of a
     * PaginationResponse
     */
    token?: string;

    /**
     * Page size is the maximum number of results to retrieve per page. Defaults to 25.
     * Maximum 100.
     */
    pageSize?: number;
  }
}

export interface ServiceDeleteParams {
  id?: string;

  force?: boolean;
}

export interface ServiceStartParams {
  id?: string;
}

export interface ServiceStopParams {
  id?: string;
}

export declare namespace Services {
  export {
    type Service as Service,
    type ServiceMetadata as ServiceMetadata,
    type ServicePhase as ServicePhase,
    type ServiceRole as ServiceRole,
    type ServiceSpec as ServiceSpec,
    type ServiceStatus as ServiceStatus,
    type ServiceCreateResponse as ServiceCreateResponse,
    type ServiceRetrieveResponse as ServiceRetrieveResponse,
    type ServiceUpdateResponse as ServiceUpdateResponse,
    type ServiceDeleteResponse as ServiceDeleteResponse,
    type ServiceStartResponse as ServiceStartResponse,
    type ServiceStopResponse as ServiceStopResponse,
    type ServicesServicesPage as ServicesServicesPage,
    type ServiceCreateParams as ServiceCreateParams,
    type ServiceRetrieveParams as ServiceRetrieveParams,
    type ServiceUpdateParams as ServiceUpdateParams,
    type ServiceListParams as ServiceListParams,
    type ServiceDeleteParams as ServiceDeleteParams,
    type ServiceStartParams as ServiceStartParams,
    type ServiceStopParams as ServiceStopParams,
  };
}
