// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';
import {
  EnvironmentClassesPage,
  GatewaysPage,
  ProjectEnvironmentClassesPage,
  TaskExecutionsPage,
  TasksPage,
} from '../core/pagination';

/**
 * An AutomationTrigger represents a trigger for an automation action. The `manual`
 * field shows a start button in the UI for manually triggering the automation. The
 * `post_machine_start` field indicates that the automation should be triggered
 * after the machine has started, before the devcontainer is ready. This is used
 * for machine-level services like security agents that need to start early. The
 * `post_environment_start` field indicates that the automation should be triggered
 * after the environment has started (devcontainer ready). The
 * `post_devcontainer_start` field indicates that the automation should be
 * triggered after the dev container has started. The `prebuild` field starts the
 * automation during a prebuild of an environment. This phase does not have user
 * secrets available. Note: The prebuild trigger can only be used with tasks, not
 * services.
 */
export interface AutomationTrigger {
  manual?: boolean;

  postDevcontainerStart?: boolean;

  postEnvironmentStart?: boolean;

  postMachineStart?: boolean;

  prebuild?: boolean;
}

export interface EnvironmentClass {
  /**
   * id is the unique identifier of the environment class
   */
  id: string;

  /**
   * runner_id is the unique identifier of the runner the environment class belongs
   * to
   */
  runnerId: string;

  /**
   * configuration describes the configuration of the environment class
   */
  configuration?: Array<FieldValue>;

  /**
   * description is a human readable description of the environment class
   */
  description?: string;

  /**
   * display_name is the human readable name of the environment class
   */
  displayName?: string;

  /**
   * enabled indicates whether the environment class can be used to create new
   * environments.
   */
  enabled?: boolean;
}

/**
 * EnvironmentVariableItem represents an environment variable that can be set
 * either from a literal value or from a secret reference.
 */
export interface EnvironmentVariableItem {
  /**
   * name is the environment variable name.
   */
  name?: string;

  /**
   * value is a literal string value.
   */
  value?: string;

  /**
   * value_from specifies a source for the value.
   */
  valueFrom?: EnvironmentVariableSource;
}

/**
 * EnvironmentVariableSource specifies a source for an environment variable value.
 */
export interface EnvironmentVariableSource {
  /**
   * secret_ref references a secret by ID.
   */
  secretRef: SecretRef;
}

/**
 * The status code, which should be an enum value of
 * [google.rpc.Code][google.rpc.Code].
 */
export type ErrorCode =
  | 'canceled'
  | 'unknown'
  | 'invalid_argument'
  | 'deadline_exceeded'
  | 'not_found'
  | 'already_exists'
  | 'permission_denied'
  | 'resource_exhausted'
  | 'failed_precondition'
  | 'aborted'
  | 'out_of_range'
  | 'unimplemented'
  | 'internal'
  | 'unavailable'
  | 'data_loss'
  | 'unauthenticated';

export interface FieldValue {
  key?: string;

  value?: string;
}

/**
 * Gateway represents a system gateway that provides access to services
 */
export interface Gateway {
  /**
   * name is the human-readable name of the gateway. name is unique across all
   * gateways.
   */
  name: string;

  /**
   * url of the gateway
   */
  url: string;

  /**
   * region is the geographical region where the gateway is located
   */
  region?: string;
}

export type OrganizationRole =
  | 'ORGANIZATION_ROLE_UNSPECIFIED'
  | 'ORGANIZATION_ROLE_ADMIN'
  | 'ORGANIZATION_ROLE_MEMBER';

export type Principal =
  | 'PRINCIPAL_UNSPECIFIED'
  | 'PRINCIPAL_ACCOUNT'
  | 'PRINCIPAL_USER'
  | 'PRINCIPAL_RUNNER'
  | 'PRINCIPAL_ENVIRONMENT'
  | 'PRINCIPAL_SERVICE_ACCOUNT'
  | 'PRINCIPAL_RUNNER_MANAGER'
  | 'PRINCIPAL_AGENT_EXECUTION';

export interface ProjectEnvironmentClass {
  /**
   * Use a fixed environment class on a given Runner. This cannot be a local runner's
   * environment class.
   */
  environmentClassId?: string;

  /**
   * Use a local runner for the user
   */
  localRunner?: boolean;

  /**
   * order is the priority of this entry
   */
  order?: number;
}

export type ResourceType =
  | 'RESOURCE_TYPE_UNSPECIFIED'
  | 'RESOURCE_TYPE_ENVIRONMENT'
  | 'RESOURCE_TYPE_RUNNER'
  | 'RESOURCE_TYPE_PROJECT'
  | 'RESOURCE_TYPE_TASK'
  | 'RESOURCE_TYPE_TASK_EXECUTION'
  | 'RESOURCE_TYPE_SERVICE'
  | 'RESOURCE_TYPE_ORGANIZATION'
  | 'RESOURCE_TYPE_USER'
  | 'RESOURCE_TYPE_ENVIRONMENT_CLASS'
  | 'RESOURCE_TYPE_RUNNER_SCM_INTEGRATION'
  | 'RESOURCE_TYPE_HOST_AUTHENTICATION_TOKEN'
  | 'RESOURCE_TYPE_GROUP'
  | 'RESOURCE_TYPE_PERSONAL_ACCESS_TOKEN'
  | 'RESOURCE_TYPE_USER_PREFERENCE'
  | 'RESOURCE_TYPE_SERVICE_ACCOUNT'
  | 'RESOURCE_TYPE_SECRET'
  | 'RESOURCE_TYPE_SSO_CONFIG'
  | 'RESOURCE_TYPE_DOMAIN_VERIFICATION'
  | 'RESOURCE_TYPE_AGENT_EXECUTION'
  | 'RESOURCE_TYPE_RUNNER_LLM_INTEGRATION'
  | 'RESOURCE_TYPE_AGENT'
  | 'RESOURCE_TYPE_ENVIRONMENT_SESSION'
  | 'RESOURCE_TYPE_USER_SECRET'
  | 'RESOURCE_TYPE_ORGANIZATION_POLICY'
  | 'RESOURCE_TYPE_ORGANIZATION_SECRET'
  | 'RESOURCE_TYPE_PROJECT_ENVIRONMENT_CLASS'
  | 'RESOURCE_TYPE_BILLING'
  | 'RESOURCE_TYPE_PROMPT'
  | 'RESOURCE_TYPE_COUPON'
  | 'RESOURCE_TYPE_COUPON_REDEMPTION'
  | 'RESOURCE_TYPE_ACCOUNT'
  | 'RESOURCE_TYPE_INTEGRATION'
  | 'RESOURCE_TYPE_WORKFLOW'
  | 'RESOURCE_TYPE_WORKFLOW_EXECUTION'
  | 'RESOURCE_TYPE_WORKFLOW_EXECUTION_ACTION'
  | 'RESOURCE_TYPE_SNAPSHOT'
  | 'RESOURCE_TYPE_PREBUILD'
  | 'RESOURCE_TYPE_ORGANIZATION_LLM_INTEGRATION'
  | 'RESOURCE_TYPE_CUSTOM_DOMAIN'
  | 'RESOURCE_TYPE_ROLE_ASSIGNMENT_CHANGED'
  | 'RESOURCE_TYPE_GROUP_MEMBERSHIP_CHANGED'
  | 'RESOURCE_TYPE_WEBHOOK'
  | 'RESOURCE_TYPE_SCIM_CONFIGURATION';

export interface RunsOn {
  docker?: RunsOn.Docker;

  /**
   * Machine runs the service/task directly on the VM/machine level.
   */
  machine?: unknown;
}

export namespace RunsOn {
  export interface Docker {
    environment?: Array<string>;

    image?: string;
  }
}

/**
 * SecretRef references a secret by its ID.
 */
export interface SecretRef {
  /**
   * id is the UUID of the secret to reference.
   */
  id?: string;
}

/**
 * Current state of the pull request
 */
export type State = 'STATE_UNSPECIFIED' | 'STATE_OPEN' | 'STATE_CLOSED' | 'STATE_MERGED';

export interface Subject {
  /**
   * id is the UUID of the subject
   */
  id?: string;

  /**
   * Principal is the principal of the subject
   */
  principal?: Principal;
}

export interface Task {
  id: string;

  /**
   * dependencies specifies the IDs of the automations this task depends on.
   */
  dependsOn?: Array<string>;

  environmentId?: string;

  metadata?: TaskMetadata;

  spec?: TaskSpec;
}

export interface TaskExecution {
  id: string;

  metadata?: TaskExecutionMetadata;

  spec?: TaskExecutionSpec;

  status?: TaskExecutionStatus;
}

export interface TaskExecutionMetadata {
  /**
   * completed_at is the time the task execution was done.
   */
  completedAt?: string;

  /**
   * created_at is the time the task was created.
   */
  createdAt?: string;

  /**
   * creator describes the principal who created/started the task run.
   */
  creator?: Subject;

  /**
   * environment_id is the ID of the environment in which the task run is executed.
   */
  environmentId?: string;

  /**
   * started_at is the time the task execution actually started to run.
   */
  startedAt?: string;

  /**
   * started_by describes the trigger that started the task execution.
   */
  startedBy?: string;

  /**
   * task_id is the ID of the main task being executed.
   */
  taskId?: string;
}

export type TaskExecutionPhase =
  | 'TASK_EXECUTION_PHASE_UNSPECIFIED'
  | 'TASK_EXECUTION_PHASE_PENDING'
  | 'TASK_EXECUTION_PHASE_RUNNING'
  | 'TASK_EXECUTION_PHASE_SUCCEEDED'
  | 'TASK_EXECUTION_PHASE_FAILED'
  | 'TASK_EXECUTION_PHASE_STOPPED';

export interface TaskExecutionSpec {
  /**
   * desired_phase is the phase the task execution should be in. Used to stop a
   * running task execution early.
   */
  desiredPhase?: TaskExecutionPhase;

  /**
   * plan is a list of groups of steps. The steps in a group are executed
   * concurrently, while the groups are executed sequentially. The order of the
   * groups is the order in which they are executed.
   */
  plan?: Array<TaskExecutionSpec.Plan>;
}

export namespace TaskExecutionSpec {
  export interface Plan {
    steps?: Array<Plan.Step>;
  }

  export namespace Plan {
    export interface Step {
      /**
       * ID is the ID of the execution step
       */
      id?: string;

      dependsOn?: Array<string>;

      label?: string;

      serviceId?: string;

      task?: Step.Task;
    }

    export namespace Step {
      export interface Task {
        id?: string;

        spec?: Shared.TaskSpec;
      }
    }
  }
}

export interface TaskExecutionStatus {
  /**
   * failure_message summarises why the task execution failed to operate. If this is
   * non-empty the task execution has failed to operate and will likely transition to
   * a failed state.
   */
  failureMessage?: string;

  /**
   * log_url is the URL to the logs of the task's steps. If this is empty, the task
   * either has no logs or has not yet started.
   */
  logUrl?: string;

  /**
   * the phase of a task execution represents the aggregated phase of all steps.
   */
  phase?: TaskExecutionPhase;

  /**
   * version of the status update. Task executions themselves are unversioned, but
   * their status has different versions. The value of this field has no semantic
   * meaning (e.g. don't interpret it as as a timestamp), but it can be used to
   * impose a partial order. If a.status_version < b.status_version then a was the
   * status before b.
   */
  statusVersion?: string;

  /**
   * steps provides the status for each individual step of the task execution. If a
   * step is missing it has not yet started.
   */
  steps?: Array<TaskExecutionStatus.Step>;
}

export namespace TaskExecutionStatus {
  export interface Step {
    /**
     * ID is the ID of the execution step
     */
    id?: string;

    /**
     * failure_message summarises why the step failed to operate. If this is non-empty
     * the step has failed to operate and will likely transition to a failed state.
     */
    failureMessage?: string;

    /**
     * output contains the output of the task execution. setting an output field to
     * empty string will unset it.
     */
    output?: { [key: string]: string };

    /**
     * phase is the current phase of the execution step
     */
    phase?: Shared.TaskExecutionPhase;
  }
}

export interface TaskMetadata {
  /**
   * created_at is the time the task was created.
   */
  createdAt?: string;

  /**
   * creator describes the principal who created the task.
   */
  creator?: Subject;

  /**
   * description is a user-facing description for the task. It can be used to provide
   * context and documentation for the task.
   */
  description?: string;

  /**
   * name is a user-facing name for the task. Unlike the reference, this field is not
   * unique, and not referenced by the system. This is a short descriptive name for
   * the task.
   */
  name?: string;

  /**
   * reference is a user-facing identifier for the task which must be unique on the
   * environment. It is used to express dependencies between tasks, and to identify
   * the task in user interactions (e.g. the CLI).
   */
  reference?: string;

  /**
   * triggered_by is a list of trigger that start the task.
   */
  triggeredBy?: Array<AutomationTrigger>;
}

export interface TaskSpec {
  /**
   * command contains the command the task should execute
   */
  command?: string;

  /**
   * env specifies environment variables for the task.
   */
  env?: Array<EnvironmentVariableItem>;

  /**
   * runs_on specifies the environment the task should run on.
   */
  runsOn?: RunsOn;
}

export type UserStatus =
  | 'USER_STATUS_UNSPECIFIED'
  | 'USER_STATUS_ACTIVE'
  | 'USER_STATUS_SUSPENDED'
  | 'USER_STATUS_LEFT';

export type TasksTasksPage = TasksPage<Task>;

export type TaskExecutionsTaskExecutionsPage = TaskExecutionsPage<TaskExecution>;

export type EnvironmentClassesEnvironmentClassesPage = EnvironmentClassesPage<EnvironmentClass>;

export type GatewaysGatewaysPage = GatewaysPage<Gateway>;

export type ProjectEnvironmentClassesProjectEnvironmentClassesPage =
  ProjectEnvironmentClassesPage<ProjectEnvironmentClass>;
