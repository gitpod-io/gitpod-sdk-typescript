// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ServicesAPI from './services';
import {
  Service,
  ServiceCreateParams,
  ServiceCreateResponse,
  ServiceDeleteParams,
  ServiceDeleteResponse,
  ServiceListParams,
  ServiceMetadata,
  ServicePhase,
  ServiceRetrieveParams,
  ServiceRetrieveResponse,
  ServiceSpec,
  ServiceStartParams,
  ServiceStartResponse,
  ServiceStatus,
  ServiceStopParams,
  ServiceStopResponse,
  ServiceUpdateParams,
  ServiceUpdateResponse,
  Services as ServicesAPIServices,
  ServicesServicesPage,
} from './services';
import * as TasksAPI from './tasks/tasks';
import {
  TaskCreateParams,
  TaskCreateResponse,
  TaskDeleteParams,
  TaskDeleteResponse,
  TaskListParams,
  TaskRetrieveParams,
  TaskRetrieveResponse,
  TaskStartParams,
  TaskStartResponse,
  TaskUpdateParams,
  TaskUpdateResponse,
  Tasks as TasksAPITasks,
} from './tasks/tasks';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Automations extends APIResource {
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);

  /**
   * Upserts the automations file for the given environment.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const response =
   *   await client.environments.automations.upsert({
   *     automationsFile: {
   *       services: {
   *         'web-server': {
   *           commands: {
   *             ready: 'curl -s http://localhost:3000',
   *             start: 'npm run dev',
   *           },
   *           description: 'Development web server',
   *           name: 'Web Server',
   *           triggeredBy: ['postDevcontainerStart'],
   *         },
   *       },
   *       tasks: {
   *         build: {
   *           command: 'npm run build',
   *           description: 'Builds the project artifacts',
   *           name: 'Build Project',
   *           triggeredBy: ['postEnvironmentStart'],
   *         },
   *       },
   *     },
   *     environmentId: '07e03a28-65a5-4d98-b532-8ea67b188048',
   *   });
   * ```
   */
  upsert(body: AutomationUpsertParams, options?: RequestOptions): APIPromise<AutomationUpsertResponse> {
    return this._client.post('/gitpod.v1.EnvironmentAutomationService/UpsertAutomationsFile', {
      body,
      ...options,
    });
  }
}

/**
 * WARN: Do not remove any field here, as it will break reading automation yaml
 * files. We error if there are any unknown fields in the yaml (to ensure the yaml
 * is correct), but would break if we removed any fields. This includes marking a
 * field as "reserved" in the proto file, this will also break reading the yaml.
 */
export interface AutomationsFile {
  services?: { [key: string]: AutomationsFile.Services };

  tasks?: { [key: string]: AutomationsFile.Tasks };
}

export namespace AutomationsFile {
  export interface Services {
    commands?: Services.Commands;

    description?: string;

    name?: string;

    runsOn?: Shared.RunsOn;

    triggeredBy?: Array<'manual' | 'postEnvironmentStart' | 'postDevcontainerStart'>;
  }

  export namespace Services {
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

  export interface Tasks {
    command?: string;

    dependsOn?: Array<string>;

    description?: string;

    name?: string;

    runsOn?: Shared.RunsOn;

    triggeredBy?: Array<'manual' | 'postEnvironmentStart' | 'postDevcontainerStart'>;
  }
}

export interface AutomationUpsertResponse {
  updatedServiceIds?: Array<string>;

  updatedTaskIds?: Array<string>;
}

export interface AutomationUpsertParams {
  /**
   * WARN: Do not remove any field here, as it will break reading automation yaml
   * files. We error if there are any unknown fields in the yaml (to ensure the yaml
   * is correct), but would break if we removed any fields. This includes marking a
   * field as "reserved" in the proto file, this will also break reading the yaml.
   */
  automationsFile?: AutomationsFile;

  environmentId?: string;
}

Automations.Services = ServicesAPIServices;
Automations.Tasks = TasksAPITasks;

export declare namespace Automations {
  export {
    type AutomationsFile as AutomationsFile,
    type AutomationUpsertResponse as AutomationUpsertResponse,
    type AutomationUpsertParams as AutomationUpsertParams,
  };

  export {
    ServicesAPIServices as Services,
    type Service as Service,
    type ServiceMetadata as ServiceMetadata,
    type ServicePhase as ServicePhase,
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

  export {
    TasksAPITasks as Tasks,
    type TaskCreateResponse as TaskCreateResponse,
    type TaskRetrieveResponse as TaskRetrieveResponse,
    type TaskUpdateResponse as TaskUpdateResponse,
    type TaskDeleteResponse as TaskDeleteResponse,
    type TaskStartResponse as TaskStartResponse,
    type TaskCreateParams as TaskCreateParams,
    type TaskRetrieveParams as TaskRetrieveParams,
    type TaskUpdateParams as TaskUpdateParams,
    type TaskListParams as TaskListParams,
    type TaskDeleteParams as TaskDeleteParams,
    type TaskStartParams as TaskStartParams,
  };
}
