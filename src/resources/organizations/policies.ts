// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Policies extends APIResource {
  /**
   * Gets organization policy settings by organization ID.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const policy = await client.organizations.policies.retrieve(
   *   {
   *     organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   },
   * );
   * ```
   */
  retrieve(body: PolicyRetrieveParams, options?: RequestOptions): APIPromise<PolicyRetrieveResponse> {
    return this._client.post('/gitpod.v1.OrganizationService/GetOrganizationPolicies', { body, ...options });
  }

  /**
   * Updates organization policy settings.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const policy = await client.organizations.policies.update({
   *   organizationId: 'b0e12f6c-4c67-429d-a4a6-d9838b5da047',
   *   maximumEnvironmentsPerUser: '20',
   *   maximumEnvironmentTimeout: '3600s',
   *   maximumRunningEnvironmentsPerUser: '5',
   * });
   * ```
   */
  update(body: PolicyUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/gitpod.v1.OrganizationService/UpdateOrganizationPolicies', {
      body,
      ...options,
    });
  }
}

/**
 * AgentPolicy contains agent-specific policy settings for an organization
 */
export interface AgentPolicy {
  /**
   * command_deny_list contains a list of commands that agents are not allowed to
   * execute
   */
  commandDenyList: Array<string>;

  /**
   * mcp_disabled controls whether MCP (Model Context Protocol) is disabled for
   * agents
   */
  mcpDisabled: boolean;

  /**
   * scm_tools_disabled controls whether SCM (Source Control Management) tools are
   * disabled for agents
   */
  scmToolsDisabled: boolean;

  /**
   * scm_tools_allowed_group_id restricts SCM tools access to members of this group.
   * Empty means no restriction (all users can use SCM tools if not disabled).
   */
  scmToolsAllowedGroupId?: string;
}

/**
 * CrowdStrikeConfig configures CrowdStrike Falcon sensor deployment
 */
export interface CrowdStrikeConfig {
  /**
   * additional*options contains additional FALCONCTL_OPT*\* options as key-value
   * pairs. Keys should NOT include the FALCONCTL*OPT* prefix.
   */
  additionalOptions?: { [key: string]: string };

  /**
   * cid_secret_id references an organization secret containing the Customer ID
   * (CID).
   */
  cidSecretId?: string;

  /**
   * enabled controls whether CrowdStrike Falcon is deployed to environments
   */
  enabled?: boolean;

  /**
   * image is the CrowdStrike Falcon sensor container image reference
   */
  image?: string;

  /**
   * tags are optional tags to apply to the Falcon sensor (comma-separated)
   */
  tags?: string;
}

/**
 * ExecutableDenyList contains executables that are blocked from execution in
 * environments.
 */
export interface ExecutableDenyList {
  /**
   * action specifies what action kernel-level controls take on policy violations
   */
  action?: KernelControlsAction;

  /**
   * enabled controls whether executable blocking is active
   */
  enabled?: boolean;

  /**
   * executables is the list of executable paths or names to block
   */
  executables?: Array<string>;
}

/**
 * KernelControlsAction defines how a kernel-level policy violation is handled.
 */
export type KernelControlsAction =
  | 'KERNEL_CONTROLS_ACTION_UNSPECIFIED'
  | 'KERNEL_CONTROLS_ACTION_BLOCK'
  | 'KERNEL_CONTROLS_ACTION_AUDIT';

export interface OrganizationPolicies {
  /**
   * agent_policy contains agent-specific policy settings
   */
  agentPolicy: AgentPolicy;

  /**
   * allowed_editor_ids is the list of editor IDs that are allowed to be used in the
   * organization
   */
  allowedEditorIds: Array<string>;

  /**
   * allow_local_runners controls whether local runners are allowed to be used in the
   * organization
   */
  allowLocalRunners: boolean;

  /**
   * default_editor_id is the default editor ID to be used when a user doesn't
   * specify one
   */
  defaultEditorId: string;

  /**
   * default_environment_image is the default container image when none is defined in
   * repo
   */
  defaultEnvironmentImage: string;

  /**
   * maximum_environments_per_user limits total environments (running or stopped) per
   * user
   */
  maximumEnvironmentsPerUser: string;

  /**
   * maximum_running_environments_per_user limits simultaneously running environments
   * per user
   */
  maximumRunningEnvironmentsPerUser: string;

  /**
   * members_create_projects controls whether members can create projects
   */
  membersCreateProjects: boolean;

  /**
   * members_require_projects controls whether environments can only be created from
   * projects by non-admin users
   */
  membersRequireProjects: boolean;

  /**
   * organization_id is the ID of the organization
   */
  organizationId: string;

  /**
   * port_sharing_disabled controls whether user-initiated port sharing is disabled
   * in the organization. System ports (VS Code Browser, agents) are always exempt
   * from this policy.
   */
  portSharingDisabled: boolean;

  /**
   * require_custom_domain_access controls whether users must access via custom
   * domain when one is configured. When true, access via app.gitpod.io is blocked.
   */
  requireCustomDomainAccess: boolean;

  /**
   * restrict_account_creation_to_scim controls whether account creation is
   * restricted to SCIM-provisioned users only. When true and SCIM is configured for
   * the organization, only users provisioned via SCIM can create accounts.
   */
  restrictAccountCreationToScim: boolean;

  /**
   * delete_archived_environments_after controls how long archived environments are
   * kept before automatic deletion. 0 means no automatic deletion. Maximum duration
   * is 4 weeks (2419200 seconds).
   */
  deleteArchivedEnvironmentsAfter?: string;

  /**
   * editor_version_restrictions restricts which editor versions can be used. Maps
   * editor ID to version policy, editor_version_restrictions not set means no
   * restrictions. If empty or not set for an editor, we will use the latest version
   * of the editor
   */
  editorVersionRestrictions?: { [key: string]: OrganizationPolicies.EditorVersionRestrictions };

  /**
   * executable_deny_list contains executables that are blocked from execution in
   * environments.
   */
  executableDenyList?: ExecutableDenyList;

  /**
   * maximum_environment_lifetime controls for how long environments are allowed to
   * be reused. 0 means no maximum lifetime. Maximum duration is 180 days (15552000
   * seconds).
   */
  maximumEnvironmentLifetime?: string;

  /**
   * maximum_environment_timeout controls the maximum timeout allowed for
   * environments in seconds. 0 means no limit (never). Minimum duration is 30
   * minutes (1800 seconds).
   */
  maximumEnvironmentTimeout?: string;

  /**
   * security_agent_policy contains security agent configuration for the
   * organization. When configured, security agents are automatically deployed to all
   * environments.
   */
  securityAgentPolicy?: SecurityAgentPolicy;
}

export namespace OrganizationPolicies {
  /**
   * EditorVersionPolicy defines the version policy for a specific editor
   */
  export interface EditorVersionRestrictions {
    /**
     * allowed_versions lists the versions that are allowed If empty, we will use the
     * latest version of the editor
     *
     * Examples for JetBrains: `["2025.2", "2025.1", "2024.3"]`
     */
    allowedVersions?: Array<string>;
  }
}

/**
 * SecurityAgentPolicy contains security agent configuration for an organization.
 * When enabled, security agents are automatically deployed to all environments.
 */
export interface SecurityAgentPolicy {
  /**
   * crowdstrike contains CrowdStrike Falcon configuration
   */
  crowdstrike?: CrowdStrikeConfig;
}

export interface PolicyRetrieveResponse {
  policies: OrganizationPolicies;
}

export type PolicyUpdateResponse = unknown;

export interface PolicyRetrieveParams {
  /**
   * organization_id is the ID of the organization to retrieve policies for
   */
  organizationId: string;
}

export interface PolicyUpdateParams {
  /**
   * organization_id is the ID of the organization to update policies for
   */
  organizationId: string;

  /**
   * agent_policy contains agent-specific policy settings
   */
  agentPolicy?: PolicyUpdateParams.AgentPolicy | null;

  /**
   * allowed_editor_ids is the list of editor IDs that are allowed to be used in the
   * organization
   */
  allowedEditorIds?: Array<string>;

  /**
   * allow_local_runners controls whether local runners are allowed to be used in the
   * organization
   */
  allowLocalRunners?: boolean | null;

  /**
   * default_editor_id is the default editor ID to be used when a user doesn't
   * specify one
   */
  defaultEditorId?: string | null;

  /**
   * default_environment_image is the default container image when none is defined in
   * repo
   */
  defaultEnvironmentImage?: string | null;

  /**
   * delete_archived_environments_after controls how long archived environments are
   * kept before automatic deletion. 0 means no automatic deletion. Maximum duration
   * is 4 weeks (2419200 seconds).
   */
  deleteArchivedEnvironmentsAfter?: string | null;

  /**
   * editor_version_restrictions restricts which editor versions can be used. Maps
   * editor ID to version policy with allowed major versions.
   */
  editorVersionRestrictions?: { [key: string]: PolicyUpdateParams.EditorVersionRestrictions };

  /**
   * executable_deny_list contains executables that are blocked from execution in
   * environments.
   */
  executableDenyList?: ExecutableDenyList | null;

  /**
   * maximum_environment_lifetime controls for how long environments are allowed to
   * be reused. 0 means no maximum lifetime. Maximum duration is 180 days (15552000
   * seconds).
   */
  maximumEnvironmentLifetime?: string | null;

  /**
   * maximum_environments_per_user limits total environments (running or stopped) per
   * user
   */
  maximumEnvironmentsPerUser?: string | null;

  /**
   * maximum_environment_timeout controls the maximum timeout allowed for
   * environments in seconds. 0 means no limit (never). Minimum duration is 30
   * minutes (1800 seconds).
   */
  maximumEnvironmentTimeout?: string | null;

  /**
   * maximum_running_environments_per_user limits simultaneously running environments
   * per user
   */
  maximumRunningEnvironmentsPerUser?: string | null;

  /**
   * members_create_projects controls whether members can create projects
   */
  membersCreateProjects?: boolean | null;

  /**
   * members_require_projects controls whether environments can only be created from
   * projects by non-admin users
   */
  membersRequireProjects?: boolean | null;

  /**
   * port_sharing_disabled controls whether user-initiated port sharing is disabled
   * in the organization. System ports (VS Code Browser, agents) are always exempt
   * from this policy.
   */
  portSharingDisabled?: boolean | null;

  /**
   * require_custom_domain_access controls whether users must access via custom
   * domain when one is configured. When true, access via app.gitpod.io is blocked.
   */
  requireCustomDomainAccess?: boolean | null;

  /**
   * restrict_account_creation_to_scim controls whether account creation is
   * restricted to SCIM-provisioned users only. When true and SCIM is configured for
   * the organization, only users provisioned via SCIM can create accounts.
   */
  restrictAccountCreationToScim?: boolean | null;

  /**
   * security_agent_policy contains security agent configuration updates
   */
  securityAgentPolicy?: PolicyUpdateParams.SecurityAgentPolicy | null;
}

export namespace PolicyUpdateParams {
  /**
   * agent_policy contains agent-specific policy settings
   */
  export interface AgentPolicy {
    /**
     * command_deny_list contains a list of commands that agents are not allowed to
     * execute
     */
    commandDenyList?: Array<string>;

    /**
     * mcp_disabled controls whether MCP (Model Context Protocol) is disabled for
     * agents
     */
    mcpDisabled?: boolean | null;

    /**
     * scm_tools_allowed_group_id restricts SCM tools access to members of this group.
     * Empty means no restriction (all users can use SCM tools if not disabled).
     */
    scmToolsAllowedGroupId?: string | null;

    /**
     * scm_tools_disabled controls whether SCM (Source Control Management) tools are
     * disabled for agents
     */
    scmToolsDisabled?: boolean | null;
  }

  /**
   * EditorVersionPolicy defines the version policy for a specific editor
   */
  export interface EditorVersionRestrictions {
    /**
     * allowed_versions lists the versions that are allowed If empty, we will use the
     * latest version of the editor
     *
     * Examples for JetBrains: `["2025.2", "2025.1", "2024.3"]`
     */
    allowedVersions?: Array<string>;
  }

  /**
   * security_agent_policy contains security agent configuration updates
   */
  export interface SecurityAgentPolicy {
    /**
     * crowdstrike contains CrowdStrike Falcon configuration updates
     */
    crowdstrike?: SecurityAgentPolicy.Crowdstrike | null;
  }

  export namespace SecurityAgentPolicy {
    /**
     * crowdstrike contains CrowdStrike Falcon configuration updates
     */
    export interface Crowdstrike {
      /**
       * additional*options contains additional FALCONCTL_OPT*\* options as key-value
       * pairs
       */
      additionalOptions?: { [key: string]: string };

      /**
       * cid_secret_id references an organization secret containing the Customer ID (CID)
       */
      cidSecretId?: string | null;

      /**
       * enabled controls whether CrowdStrike Falcon is deployed to environments
       */
      enabled?: boolean | null;

      /**
       * image is the CrowdStrike Falcon sensor container image reference
       */
      image?: string | null;

      /**
       * tags are optional tags to apply to the Falcon sensor
       */
      tags?: string | null;
    }
  }
}

export declare namespace Policies {
  export {
    type AgentPolicy as AgentPolicy,
    type CrowdStrikeConfig as CrowdStrikeConfig,
    type ExecutableDenyList as ExecutableDenyList,
    type KernelControlsAction as KernelControlsAction,
    type OrganizationPolicies as OrganizationPolicies,
    type SecurityAgentPolicy as SecurityAgentPolicy,
    type PolicyRetrieveResponse as PolicyRetrieveResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyRetrieveParams as PolicyRetrieveParams,
    type PolicyUpdateParams as PolicyUpdateParams,
  };
}
