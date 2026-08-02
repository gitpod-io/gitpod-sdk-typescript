import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/integration.proto.
 */
export declare const file_gitpod_v1_integration: GenFile;
/**
 * IntegrationDefinition defines a service that can be integrated with
 * (e.g. Linear, GitHub, etc.)
 *
 * @generated from message gitpod.v1.IntegrationDefinition
 */
export type IntegrationDefinition = Message<"gitpod.v1.IntegrationDefinition"> & {
    /**
     * id is the unique identifier for this integration definition
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * name is the human-readable name for this integration type
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * description provides a human-readable description of the integration
     *
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * icon_url is the URL for this integration's icon
     *
     * @generated from field: string icon_url = 4;
     */
    iconUrl: string;
    /**
     * capabilities defines what this integration can do
     *
     * @generated from field: gitpod.v1.IntegrationCapabilities capabilities = 5;
     */
    capabilities?: IntegrationCapabilities;
    /**
     * auth defines the authentication requirements for this integration
     *
     * @generated from field: gitpod.v1.IntegrationAuthentication auth = 6;
     */
    auth?: IntegrationAuthentication;
    /**
     * host is the hostname for this integration (e.g., "linear.app")
     *
     * @generated from field: string host = 7;
     */
    host: string;
    /**
     * experimental indicates if this integration is experimental and requires feature flag
     *
     * @generated from field: bool experimental = 8;
     */
    experimental: boolean;
    /**
     * categories classifies this integration for filtering and display
     *
     * @generated from field: repeated gitpod.v1.IntegrationCategory categories = 9;
     */
    categories: IntegrationCategory[];
};
/**
 * Describes the message gitpod.v1.IntegrationDefinition.
 * Use `create(IntegrationDefinitionSchema)` to create a new message.
 */
export declare const IntegrationDefinitionSchema: GenMessage<IntegrationDefinition>;
/**
 * IntegrationCapabilities defines what an integration can do
 *
 * @generated from message gitpod.v1.IntegrationCapabilities
 */
export type IntegrationCapabilities = Message<"gitpod.v1.IntegrationCapabilities"> & {
    /**
     * mcp configuration for Model Context Protocol support
     *
     * @generated from field: gitpod.v1.IntegrationMCPCapability mcp = 1;
     */
    mcp?: IntegrationMCPCapability;
    /**
     * context_parsing configuration for context parsing support
     *
     * @generated from field: gitpod.v1.IntegrationContextParsingCapability context_parsing = 2;
     */
    contextParsing?: IntegrationContextParsingCapability;
    /**
     * source_code_access configuration for source code access support
     *
     * @generated from field: gitpod.v1.IntegrationSourceCodeAccessCapability source_code_access = 3;
     */
    sourceCodeAccess?: IntegrationSourceCodeAccessCapability;
    /**
     * login configuration for login/authentication support
     *
     * @generated from field: gitpod.v1.IntegrationLoginCapability login = 4;
     */
    login?: IntegrationLoginCapability;
    /**
     * agent_client configuration for agent client functionality support
     *
     * @generated from field: gitpod.v1.IntegrationAgentClientCapability agent_client = 5;
     */
    agentClient?: IntegrationAgentClientCapability;
    /**
     * scm_pr_events indicates the integration can act as a source of PR events
     * for automation triggers (e.g., pull_request opened/updated webhooks).
     *
     * @generated from field: gitpod.v1.IntegrationScmPrEventsCapability scm_pr_events = 6;
     */
    scmPrEvents?: IntegrationScmPrEventsCapability;
};
/**
 * Describes the message gitpod.v1.IntegrationCapabilities.
 * Use `create(IntegrationCapabilitiesSchema)` to create a new message.
 */
export declare const IntegrationCapabilitiesSchema: GenMessage<IntegrationCapabilities>;
/**
 * IntegrationMCPCapability defines Model Context Protocol capability
 *
 * @generated from message gitpod.v1.IntegrationMCPCapability
 */
export type IntegrationMCPCapability = Message<"gitpod.v1.IntegrationMCPCapability"> & {
    /**
     * url is the remote server URL for the MCP server
     *
     * @generated from field: string url = 1;
     */
    url: string;
};
/**
 * Describes the message gitpod.v1.IntegrationMCPCapability.
 * Use `create(IntegrationMCPCapabilitySchema)` to create a new message.
 */
export declare const IntegrationMCPCapabilitySchema: GenMessage<IntegrationMCPCapability>;
/**
 * IntegrationContextParsingCapability defines context parsing capability
 *
 * Additional context parsing configuration can be added here
 *
 * @generated from message gitpod.v1.IntegrationContextParsingCapability
 */
export type IntegrationContextParsingCapability = Message<"gitpod.v1.IntegrationContextParsingCapability"> & {};
/**
 * Describes the message gitpod.v1.IntegrationContextParsingCapability.
 * Use `create(IntegrationContextParsingCapabilitySchema)` to create a new message.
 */
export declare const IntegrationContextParsingCapabilitySchema: GenMessage<IntegrationContextParsingCapability>;
/**
 * IntegrationSourceCodeAccessCapability defines source code access capability
 *
 * Additional source code access configuration can be added here
 *
 * @generated from message gitpod.v1.IntegrationSourceCodeAccessCapability
 */
export type IntegrationSourceCodeAccessCapability = Message<"gitpod.v1.IntegrationSourceCodeAccessCapability"> & {};
/**
 * Describes the message gitpod.v1.IntegrationSourceCodeAccessCapability.
 * Use `create(IntegrationSourceCodeAccessCapabilitySchema)` to create a new message.
 */
export declare const IntegrationSourceCodeAccessCapabilitySchema: GenMessage<IntegrationSourceCodeAccessCapability>;
/**
 * IntegrationLoginCapability defines login/authentication capability
 *
 * Additional login configuration can be added here
 *
 * @generated from message gitpod.v1.IntegrationLoginCapability
 */
export type IntegrationLoginCapability = Message<"gitpod.v1.IntegrationLoginCapability"> & {};
/**
 * Describes the message gitpod.v1.IntegrationLoginCapability.
 * Use `create(IntegrationLoginCapabilitySchema)` to create a new message.
 */
export declare const IntegrationLoginCapabilitySchema: GenMessage<IntegrationLoginCapability>;
/**
 * IntegrationAgentClientCapability indicates the integration supports agent client functionality.
 * Used by integrations that receive external events and create agent sessions.
 * IntegrationAgentClientCapability indicates the integration supports agent client functionality.
 * Secrets (webhook signing secret, API key) are stored in IntegrationProprietaryAppConfig
 * within the encrypted auth column.
 *
 * @generated from message gitpod.v1.IntegrationAgentClientCapability
 */
export type IntegrationAgentClientCapability = Message<"gitpod.v1.IntegrationAgentClientCapability"> & {
    /**
     * severity_threshold controls the minimum incident severity that triggers
     * an agent session. Values: "SEV1", "SEV2", "SEV3", or empty (all).
     *
     * @generated from field: string severity_threshold = 2;
     */
    severityThreshold: string;
    /**
     * default_project_id is the Ona project to use when no project can be
     * resolved from the incident context. Optional.
     *
     * @generated from field: string default_project_id = 3;
     */
    defaultProjectId: string;
};
/**
 * Describes the message gitpod.v1.IntegrationAgentClientCapability.
 * Use `create(IntegrationAgentClientCapabilitySchema)` to create a new message.
 */
export declare const IntegrationAgentClientCapabilitySchema: GenMessage<IntegrationAgentClientCapability>;
/**
 * IntegrationScmPrEventsCapability indicates the integration can deliver
 * pull request webhook events (opened, updated, etc.) for automation triggers.
 *
 * Empty - presence of this capability indicates PR event support
 *
 * @generated from message gitpod.v1.IntegrationScmPrEventsCapability
 */
export type IntegrationScmPrEventsCapability = Message<"gitpod.v1.IntegrationScmPrEventsCapability"> & {};
/**
 * Describes the message gitpod.v1.IntegrationScmPrEventsCapability.
 * Use `create(IntegrationScmPrEventsCapabilitySchema)` to create a new message.
 */
export declare const IntegrationScmPrEventsCapabilitySchema: GenMessage<IntegrationScmPrEventsCapability>;
/**
 * IntegrationAuthentication defines authentication requirements and options
 *
 * @generated from message gitpod.v1.IntegrationAuthentication
 */
export type IntegrationAuthentication = Message<"gitpod.v1.IntegrationAuthentication"> & {
    /**
     * requires_auth indicates if authentication is required for this integration
     *
     * @generated from field: bool requires_auth = 1;
     */
    requiresAuth: boolean;
    /**
     * api_key configuration if API key authentication is supported
     *
     * @generated from field: gitpod.v1.IntegrationAPIKeyConfig api_key = 2;
     */
    apiKey?: IntegrationAPIKeyConfig;
    /**
     * oauth configuration if OAuth authentication is supported
     *
     * @generated from field: gitpod.v1.IntegrationOAuthConfig oauth = 3;
     */
    oauth?: IntegrationOAuthConfig;
    /**
     * proprietary configuration if supported
     *
     * @generated from field: gitpod.v1.IntegrationProprietaryAppConfig proprietary_app = 4;
     */
    proprietaryApp?: IntegrationProprietaryAppConfig;
};
/**
 * Describes the message gitpod.v1.IntegrationAuthentication.
 * Use `create(IntegrationAuthenticationSchema)` to create a new message.
 */
export declare const IntegrationAuthenticationSchema: GenMessage<IntegrationAuthentication>;
/**
 * IntegrationAPIKeyConfig defines API key authentication configuration
 *
 * Additional API key configuration can be added here
 *
 * @generated from message gitpod.v1.IntegrationAPIKeyConfig
 */
export type IntegrationAPIKeyConfig = Message<"gitpod.v1.IntegrationAPIKeyConfig"> & {};
/**
 * Describes the message gitpod.v1.IntegrationAPIKeyConfig.
 * Use `create(IntegrationAPIKeyConfigSchema)` to create a new message.
 */
export declare const IntegrationAPIKeyConfigSchema: GenMessage<IntegrationAPIKeyConfig>;
/**
 * IntegrationOAuthConfig defines OAuth-specific configuration
 *
 * @generated from message gitpod.v1.IntegrationOAuthConfig
 */
export type IntegrationOAuthConfig = Message<"gitpod.v1.IntegrationOAuthConfig"> & {
    /**
     * auth_url is the OAuth authorization endpoint URL
     *
     * @generated from field: string auth_url = 1;
     */
    authUrl: string;
    /**
     * token_url is the OAuth token endpoint URL
     *
     * @generated from field: string token_url = 2;
     */
    tokenUrl: string;
    /**
     * scopes are the OAuth scopes to request
     *
     * @generated from field: repeated string scopes = 3;
     */
    scopes: string[];
    /**
     * client_id is the OAuth client ID (optional if dynamic_registration is enabled)
     *
     * @generated from field: string client_id = 4;
     */
    clientId: string;
    /**
     * client_secret is the OAuth client secret (optional for public clients)
     *
     * @generated from field: string client_secret = 5;
     */
    clientSecret: string;
    /**
     * redirect_url is the OAuth callback/redirect URL
     *
     * @generated from field: string redirect_url = 6;
     */
    redirectUrl: string;
    /**
     * dynamic_registration enables RFC 7591 OAuth 2.0 Dynamic Client Registration.
     * When enabled, client credentials are obtained automatically from the authorization
     * server's registration endpoint (discovered via RFC 8414 metadata).
     * When disabled (default), client_id and client_secret must be pre-configured.
     *
     * @generated from field: bool dynamic_registration = 7;
     */
    dynamicRegistration: boolean;
    /**
     * auth_params are additional query parameters to include in the OAuth
     * authorization URL. Use comma-separated values for multi-value params
     * (e.g., "search:read,chat:write" for Slack's user_scope).
     *
     * @generated from field: map<string, string> auth_params = 8;
     */
    authParams: {
        [key: string]: string;
    };
};
/**
 * Describes the message gitpod.v1.IntegrationOAuthConfig.
 * Use `create(IntegrationOAuthConfigSchema)` to create a new message.
 */
export declare const IntegrationOAuthConfigSchema: GenMessage<IntegrationOAuthConfig>;
/**
 * IntegrationProprietaryAppConfig defines proprietary application integration configuration.
 * Used for app installations that interact with Ona (e.g., GitHub Apps, Linear agent apps).
 *
 * @generated from message gitpod.v1.IntegrationProprietaryAppConfig
 */
export type IntegrationProprietaryAppConfig = Message<"gitpod.v1.IntegrationProprietaryAppConfig"> & {
    /**
     * client_id is the app client ID
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * client_secret is the app client secret
     *
     * @generated from field: string client_secret = 2;
     */
    clientSecret: string;
    /**
     * webhook_secret is the secret used to verify webhook signatures from the app provider
     *
     * @generated from field: string webhook_secret = 3;
     */
    webhookSecret: string;
    /**
     * auth_params are additional OAuth authorization parameters to include in the auth URL.
     * Example: {"actor": "app"} for Linear agent installations.
     *
     * @generated from field: map<string, string> auth_params = 4;
     */
    authParams: {
        [key: string]: string;
    };
    /**
     * app_scopes are OAuth scopes to request when using app installation flows.
     * If not set, falls back to the standard OAuth scopes.
     *
     * @generated from field: repeated string app_scopes = 5;
     */
    appScopes: string[];
    /**
     * token_url is the OAuth token exchange endpoint for app installation flows.
     * If not set, falls back to the standard oauth.token_url.
     * Slack requires a different token endpoint for app-level vs user-level flows.
     *
     * @generated from field: string token_url = 6;
     */
    tokenUrl: string;
    /**
     * app_id is the application identifier assigned by the provider (e.g., GitHub App ID).
     * Used to authenticate as the application itself.
     *
     * @generated from field: string app_id = 7;
     */
    appId: string;
    /**
     * private_key is the PEM-encoded private key used to sign JWTs for app authentication.
     * This is sensitive and will be censored in API responses.
     *
     * @generated from field: string private_key = 8;
     */
    privateKey: string;
    /**
     * app_slug is the URL-friendly identifier assigned by the provider (e.g., GitHub App slug).
     * Used to construct installation URLs like https://github.com/apps/{app_slug}/installations/new.
     *
     * @generated from field: string app_slug = 9;
     */
    appSlug: string;
    /**
     * api_key is the provider API key used to post updates back to the external
     * service. Stored encrypted, censored in API responses.
     *
     * @generated from field: string api_key = 10;
     */
    apiKey: string;
};
/**
 * Describes the message gitpod.v1.IntegrationProprietaryAppConfig.
 * Use `create(IntegrationProprietaryAppConfigSchema)` to create a new message.
 */
export declare const IntegrationProprietaryAppConfigSchema: GenMessage<IntegrationProprietaryAppConfig>;
/**
 * Integration represents an instantiated integration within an organization
 *
 * @generated from message gitpod.v1.Integration
 */
export type Integration = Message<"gitpod.v1.Integration"> & {
    /**
     * id is the unique identifier for this integration instance
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * organization_id is the organization this integration belongs to
     *
     * @generated from field: string organization_id = 2;
     */
    organizationId: string;
    /**
     * integration_definition_id references the integration definition ID.
     * Empty for custom integrations that don't have a backing definition.
     *
     * @generated from field: string integration_definition_id = 3;
     */
    integrationDefinitionId: string;
    /**
     * enabled indicates if this integration is currently enabled
     *
     * @generated from field: bool enabled = 4;
     */
    enabled: boolean;
    /**
     * capabilities defines which capabilities are enabled for this integration
     *
     * @generated from field: gitpod.v1.IntegrationCapabilities capabilities = 5;
     */
    capabilities?: IntegrationCapabilities;
    /**
     * runner_id - if set, restricts integration to specific runner
     *
     * @generated from field: string runner_id = 6;
     */
    runnerId: string;
    /**
     * auth defines which authentication methods are enabled for this integration
     *
     * @generated from field: gitpod.v1.IntegrationAuthentication auth = 7;
     */
    auth?: IntegrationAuthentication;
    /**
     * host is the hostname for this integration (e.g., "linear.app") - optional, inherits from definition
     *
     * @generated from field: string host = 8;
     */
    host: string;
    /**
     * name is the display name. For definition-backed integrations, resolved from the definition.
     *
     * @generated from field: string name = 9;
     */
    name: string;
    /**
     * description of the integration. For definition-backed integrations, resolved from the definition.
     *
     * @generated from field: string description = 10;
     */
    description: string;
    /**
     * icon_url is the URL for this integration's icon. Resolved from the definition for definition-backed integrations.
     *
     * @generated from field: string icon_url = 11;
     */
    iconUrl: string;
    /**
     * categories classifies this integration for filtering and display.
     * For definition-backed integrations, inherits from the definition unless overridden.
     *
     * @generated from field: repeated gitpod.v1.IntegrationCategory categories = 12;
     */
    categories: IntegrationCategory[];
    /**
     * external_installation identifies the provider-side app installation, when known.
     *
     * @generated from field: optional gitpod.v1.IntegrationExternalInstallation external_installation = 13;
     */
    externalInstallation?: IntegrationExternalInstallation;
};
/**
 * Describes the message gitpod.v1.Integration.
 * Use `create(IntegrationSchema)` to create a new message.
 */
export declare const IntegrationSchema: GenMessage<Integration>;
/**
 * @generated from message gitpod.v1.IntegrationExternalInstallation
 */
export type IntegrationExternalInstallation = Message<"gitpod.v1.IntegrationExternalInstallation"> & {
    /**
     * id is the provider-assigned installation ID.
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * account_name is the provider account or organization login associated with the installation.
     *
     * @generated from field: string account_name = 2;
     */
    accountName: string;
    /**
     * account_type is the provider account kind, when known.
     *
     * @generated from field: string account_type = 3;
     */
    accountType: string;
};
/**
 * Describes the message gitpod.v1.IntegrationExternalInstallation.
 * Use `create(IntegrationExternalInstallationSchema)` to create a new message.
 */
export declare const IntegrationExternalInstallationSchema: GenMessage<IntegrationExternalInstallation>;
/**
 * @generated from message gitpod.v1.ListIntegrationDefinitionsRequest
 */
export type ListIntegrationDefinitionsRequest = Message<"gitpod.v1.ListIntegrationDefinitionsRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
};
/**
 * Describes the message gitpod.v1.ListIntegrationDefinitionsRequest.
 * Use `create(ListIntegrationDefinitionsRequestSchema)` to create a new message.
 */
export declare const ListIntegrationDefinitionsRequestSchema: GenMessage<ListIntegrationDefinitionsRequest>;
/**
 * @generated from message gitpod.v1.ListIntegrationDefinitionsResponse
 */
export type ListIntegrationDefinitionsResponse = Message<"gitpod.v1.ListIntegrationDefinitionsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.IntegrationDefinition definitions = 2;
     */
    definitions: IntegrationDefinition[];
};
/**
 * Describes the message gitpod.v1.ListIntegrationDefinitionsResponse.
 * Use `create(ListIntegrationDefinitionsResponseSchema)` to create a new message.
 */
export declare const ListIntegrationDefinitionsResponseSchema: GenMessage<ListIntegrationDefinitionsResponse>;
/**
 * @generated from message gitpod.v1.CreateIntegrationRequest
 */
export type CreateIntegrationRequest = Message<"gitpod.v1.CreateIntegrationRequest"> & {
    /**
     * integration_definition_id references the integration definition ID.
     * Optional for custom integrations — when empty, name and host are required.
     *
     * @generated from field: string integration_definition_id = 1;
     */
    integrationDefinitionId: string;
    /**
     * runner_id is optional and immutable - if provided, restricts integration to specific runner
     *
     * @generated from field: string runner_id = 2;
     */
    runnerId: string;
    /**
     * enabled indicates if this integration is enabled
     *
     * @generated from field: bool enabled = 3;
     */
    enabled: boolean;
    /**
     * capabilities defines which capabilities are enabled for this integration
     *
     * @generated from field: gitpod.v1.IntegrationCapabilities capabilities = 4;
     */
    capabilities?: IntegrationCapabilities;
    /**
     * auth defines which authentication methods are enabled for this integration
     *
     * @generated from field: gitpod.v1.IntegrationAuthentication auth = 5;
     */
    auth?: IntegrationAuthentication;
    /**
     * host is the hostname for this integration (e.g., "linear.app") - optional, derived from MCP URL for custom integrations
     *
     * @generated from field: string host = 6;
     */
    host: string;
    /**
     * name is the display name for custom integrations. Required when integration_definition_id is empty.
     *
     * @generated from field: string name = 7;
     */
    name: string;
    /**
     * description is the description for custom integrations.
     *
     * @generated from field: string description = 8;
     */
    description: string;
    /**
     * categories classifies this integration for filtering and display
     *
     * @generated from field: repeated gitpod.v1.IntegrationCategory categories = 9;
     */
    categories: IntegrationCategory[];
};
/**
 * Describes the message gitpod.v1.CreateIntegrationRequest.
 * Use `create(CreateIntegrationRequestSchema)` to create a new message.
 */
export declare const CreateIntegrationRequestSchema: GenMessage<CreateIntegrationRequest>;
/**
 * @generated from message gitpod.v1.CreateIntegrationResponse
 */
export type CreateIntegrationResponse = Message<"gitpod.v1.CreateIntegrationResponse"> & {
    /**
     * @generated from field: gitpod.v1.Integration integration = 1;
     */
    integration?: Integration;
};
/**
 * Describes the message gitpod.v1.CreateIntegrationResponse.
 * Use `create(CreateIntegrationResponseSchema)` to create a new message.
 */
export declare const CreateIntegrationResponseSchema: GenMessage<CreateIntegrationResponse>;
/**
 * @generated from message gitpod.v1.GetIntegrationRequest
 */
export type GetIntegrationRequest = Message<"gitpod.v1.GetIntegrationRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.GetIntegrationRequest.
 * Use `create(GetIntegrationRequestSchema)` to create a new message.
 */
export declare const GetIntegrationRequestSchema: GenMessage<GetIntegrationRequest>;
/**
 * @generated from message gitpod.v1.GetIntegrationResponse
 */
export type GetIntegrationResponse = Message<"gitpod.v1.GetIntegrationResponse"> & {
    /**
     * @generated from field: gitpod.v1.Integration integration = 1;
     */
    integration?: Integration;
};
/**
 * Describes the message gitpod.v1.GetIntegrationResponse.
 * Use `create(GetIntegrationResponseSchema)` to create a new message.
 */
export declare const GetIntegrationResponseSchema: GenMessage<GetIntegrationResponse>;
/**
 * @generated from message gitpod.v1.UpdateIntegrationRequest
 */
export type UpdateIntegrationRequest = Message<"gitpod.v1.UpdateIntegrationRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * enabled indicates if this integration is enabled
     *
     * @generated from field: optional bool enabled = 2;
     */
    enabled?: boolean;
    /**
     * capabilities defines which capabilities are enabled for this integration
     *
     * @generated from field: optional gitpod.v1.IntegrationCapabilities capabilities = 3;
     */
    capabilities?: IntegrationCapabilities;
    /**
     * auth defines which authentication methods are enabled for this integration
     *
     * @generated from field: optional gitpod.v1.IntegrationAuthentication auth = 4;
     */
    auth?: IntegrationAuthentication;
    /**
     * host is the hostname for this integration (e.g., "linear.app") - optional, inherits from definition
     *
     * @generated from field: optional string host = 5;
     */
    host?: string;
    /**
     * name is the display name. Only updatable for custom integrations.
     *
     * @generated from field: optional string name = 6;
     */
    name?: string;
    /**
     * description is the description. Only updatable for custom integrations.
     *
     * @generated from field: optional string description = 7;
     */
    description?: string;
    /**
     * categories classifies this integration for filtering and display
     *
     * @generated from field: repeated gitpod.v1.IntegrationCategory categories = 8;
     */
    categories: IntegrationCategory[];
};
/**
 * Describes the message gitpod.v1.UpdateIntegrationRequest.
 * Use `create(UpdateIntegrationRequestSchema)` to create a new message.
 */
export declare const UpdateIntegrationRequestSchema: GenMessage<UpdateIntegrationRequest>;
/**
 * @generated from message gitpod.v1.UpdateIntegrationResponse
 */
export type UpdateIntegrationResponse = Message<"gitpod.v1.UpdateIntegrationResponse"> & {
    /**
     * @generated from field: gitpod.v1.Integration integration = 1;
     */
    integration?: Integration;
};
/**
 * Describes the message gitpod.v1.UpdateIntegrationResponse.
 * Use `create(UpdateIntegrationResponseSchema)` to create a new message.
 */
export declare const UpdateIntegrationResponseSchema: GenMessage<UpdateIntegrationResponse>;
/**
 * @generated from message gitpod.v1.DeleteIntegrationRequest
 */
export type DeleteIntegrationRequest = Message<"gitpod.v1.DeleteIntegrationRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.DeleteIntegrationRequest.
 * Use `create(DeleteIntegrationRequestSchema)` to create a new message.
 */
export declare const DeleteIntegrationRequestSchema: GenMessage<DeleteIntegrationRequest>;
/**
 * @generated from message gitpod.v1.DeleteIntegrationResponse
 */
export type DeleteIntegrationResponse = Message<"gitpod.v1.DeleteIntegrationResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteIntegrationResponse.
 * Use `create(DeleteIntegrationResponseSchema)` to create a new message.
 */
export declare const DeleteIntegrationResponseSchema: GenMessage<DeleteIntegrationResponse>;
/**
 * @generated from message gitpod.v1.ListIntegrationsRequest
 */
export type ListIntegrationsRequest = Message<"gitpod.v1.ListIntegrationsRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
};
/**
 * Describes the message gitpod.v1.ListIntegrationsRequest.
 * Use `create(ListIntegrationsRequestSchema)` to create a new message.
 */
export declare const ListIntegrationsRequestSchema: GenMessage<ListIntegrationsRequest>;
/**
 * @generated from message gitpod.v1.ListIntegrationsResponse
 */
export type ListIntegrationsResponse = Message<"gitpod.v1.ListIntegrationsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.Integration integrations = 2;
     */
    integrations: Integration[];
};
/**
 * Describes the message gitpod.v1.ListIntegrationsResponse.
 * Use `create(ListIntegrationsResponseSchema)` to create a new message.
 */
export declare const ListIntegrationsResponseSchema: GenMessage<ListIntegrationsResponse>;
/**
 * @generated from message gitpod.v1.GetIntegrationDefinitionRequest
 */
export type GetIntegrationDefinitionRequest = Message<"gitpod.v1.GetIntegrationDefinitionRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.GetIntegrationDefinitionRequest.
 * Use `create(GetIntegrationDefinitionRequestSchema)` to create a new message.
 */
export declare const GetIntegrationDefinitionRequestSchema: GenMessage<GetIntegrationDefinitionRequest>;
/**
 * @generated from message gitpod.v1.GetIntegrationDefinitionResponse
 */
export type GetIntegrationDefinitionResponse = Message<"gitpod.v1.GetIntegrationDefinitionResponse"> & {
    /**
     * @generated from field: gitpod.v1.IntegrationDefinition definition = 1;
     */
    definition?: IntegrationDefinition;
};
/**
 * Describes the message gitpod.v1.GetIntegrationDefinitionResponse.
 * Use `create(GetIntegrationDefinitionResponseSchema)` to create a new message.
 */
export declare const GetIntegrationDefinitionResponseSchema: GenMessage<GetIntegrationDefinitionResponse>;
/**
 * @generated from message gitpod.v1.ValidateIntegrationRequest
 */
export type ValidateIntegrationRequest = Message<"gitpod.v1.ValidateIntegrationRequest"> & {
    /**
     * @generated from field: string integration_id = 1;
     */
    integrationId: string;
};
/**
 * Describes the message gitpod.v1.ValidateIntegrationRequest.
 * Use `create(ValidateIntegrationRequestSchema)` to create a new message.
 */
export declare const ValidateIntegrationRequestSchema: GenMessage<ValidateIntegrationRequest>;
/**
 * @generated from message gitpod.v1.ValidateIntegrationResponse
 */
export type ValidateIntegrationResponse = Message<"gitpod.v1.ValidateIntegrationResponse"> & {
    /**
     * valid is true when all checks pass (convenience field).
     *
     * @generated from field: bool valid = 1;
     */
    valid: boolean;
    /**
     * checks contains the result of every check performed.
     * Passing checks have empty message and action_hint.
     *
     * @generated from field: repeated gitpod.v1.ValidationCheck checks = 2;
     */
    checks: ValidationCheck[];
};
/**
 * Describes the message gitpod.v1.ValidateIntegrationResponse.
 * Use `create(ValidateIntegrationResponseSchema)` to create a new message.
 */
export declare const ValidateIntegrationResponseSchema: GenMessage<ValidateIntegrationResponse>;
/**
 * @generated from message gitpod.v1.ValidationCheck
 */
export type ValidationCheck = Message<"gitpod.v1.ValidationCheck"> & {
    /**
     * Which check this result is for.
     *
     * @generated from field: gitpod.v1.ValidationCheck.Check check = 1;
     */
    check: ValidationCheck_Check;
    /**
     * Human-readable description of the problem. Empty when the check passes.
     *
     * @generated from field: string message = 2;
     */
    message: string;
    /**
     * Machine-readable hint the frontend uses to resolve the issue (e.g. "app_installation_oauth").
     * Empty when the check passes or no automated fix is available.
     *
     * @generated from field: string action_hint = 3;
     */
    actionHint: string;
    /**
     * URL to documentation explaining this check failure and resolution steps.
     * Empty when the check passes or no docs exist for this check.
     *
     * @generated from field: string documentation_url = 4;
     */
    documentationUrl: string;
};
/**
 * Describes the message gitpod.v1.ValidationCheck.
 * Use `create(ValidationCheckSchema)` to create a new message.
 */
export declare const ValidationCheckSchema: GenMessage<ValidationCheck>;
/**
 * @generated from enum gitpod.v1.ValidationCheck.Check
 */
export declare enum ValidationCheck_Check {
    /**
     * @generated from enum value: CHECK_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CHECK_APP_TOKEN = 1;
     */
    APP_TOKEN = 1,
    /**
     * @generated from enum value: CHECK_APP_INSTALLATION = 2;
     */
    APP_INSTALLATION = 2
}
/**
 * Describes the enum gitpod.v1.ValidationCheck.Check.
 */
export declare const ValidationCheck_CheckSchema: GenEnum<ValidationCheck_Check>;
/**
 * IntegrationCategory classifies integrations for filtering and display.
 *
 * @generated from enum gitpod.v1.IntegrationCategory
 */
export declare enum IntegrationCategory {
    /**
     * @generated from enum value: INTEGRATION_CATEGORY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: INTEGRATION_CATEGORY_SOURCE_CONTROL = 1;
     */
    SOURCE_CONTROL = 1,
    /**
     * @generated from enum value: INTEGRATION_CATEGORY_COMMUNICATION = 2;
     */
    COMMUNICATION = 2,
    /**
     * @generated from enum value: INTEGRATION_CATEGORY_PROJECT_MANAGEMENT = 3;
     */
    PROJECT_MANAGEMENT = 3,
    /**
     * @generated from enum value: INTEGRATION_CATEGORY_OBSERVABILITY = 4;
     */
    OBSERVABILITY = 4,
    /**
     * @generated from enum value: INTEGRATION_CATEGORY_DATA_ANALYTICS = 5;
     */
    DATA_ANALYTICS = 5,
    /**
     * @generated from enum value: INTEGRATION_CATEGORY_KNOWLEDGE = 6;
     */
    KNOWLEDGE = 6,
    /**
     * @generated from enum value: INTEGRATION_CATEGORY_MCP = 7;
     */
    MCP = 7,
    /**
     * @generated from enum value: INTEGRATION_CATEGORY_AUTOMATION_TRIGGERS = 8;
     */
    AUTOMATION_TRIGGERS = 8,
    /**
     * @generated from enum value: INTEGRATION_CATEGORY_AI = 9;
     */
    AI = 9
}
/**
 * Describes the enum gitpod.v1.IntegrationCategory.
 */
export declare const IntegrationCategorySchema: GenEnum<IntegrationCategory>;
/**
 * @generated from service gitpod.v1.IntegrationService
 */
export declare const IntegrationService: GenService<{
    /**
     * Lists available integration definitions.
     *
     * Use this method to:
     * - View all available integrations
     * - Check integration capabilities
     * - Discover supported services
     *
     *
     * @generated from rpc gitpod.v1.IntegrationService.ListIntegrationDefinitions
     */
    listIntegrationDefinitions: {
        methodKind: "unary";
        input: typeof ListIntegrationDefinitionsRequestSchema;
        output: typeof ListIntegrationDefinitionsResponseSchema;
    };
    /**
     * Gets details about a specific integration definition.
     *
     * Use this method to:
     * - View integration definition configuration
     * - Check supported capabilities
     * - Verify authentication requirements
     *
     *
     * @generated from rpc gitpod.v1.IntegrationService.GetIntegrationDefinition
     */
    getIntegrationDefinition: {
        methodKind: "unary";
        input: typeof GetIntegrationDefinitionRequestSchema;
        output: typeof GetIntegrationDefinitionResponseSchema;
    };
    /**
     * Creates a new integration instance within an organization.
     *
     * Use this method to:
     * - Instantiate an integration for an organization
     * - Configure integration-specific settings
     * - Enable integration capabilities
     *
     *
     * @generated from rpc gitpod.v1.IntegrationService.CreateIntegration
     */
    createIntegration: {
        methodKind: "unary";
        input: typeof CreateIntegrationRequestSchema;
        output: typeof CreateIntegrationResponseSchema;
    };
    /**
     * Gets details about a specific integration instance.
     *
     * Use this method to:
     * - View integration configuration
     * - Check integration status
     * - Verify enabled capabilities
     *
     *
     * @generated from rpc gitpod.v1.IntegrationService.GetIntegration
     */
    getIntegration: {
        methodKind: "unary";
        input: typeof GetIntegrationRequestSchema;
        output: typeof GetIntegrationResponseSchema;
    };
    /**
     * Updates an existing integration instance.
     *
     * Use this method to:
     * - Modify integration settings
     * - Enable/disable capabilities
     * - Change integration status
     *
     *
     * @generated from rpc gitpod.v1.IntegrationService.UpdateIntegration
     */
    updateIntegration: {
        methodKind: "unary";
        input: typeof UpdateIntegrationRequestSchema;
        output: typeof UpdateIntegrationResponseSchema;
    };
    /**
     * Deletes an integration instance.
     *
     * Use this method to:
     * - Remove unused integrations
     * - Clean up configurations
     * - Revoke integration access
     *
     *
     * @generated from rpc gitpod.v1.IntegrationService.DeleteIntegration
     */
    deleteIntegration: {
        methodKind: "unary";
        input: typeof DeleteIntegrationRequestSchema;
        output: typeof DeleteIntegrationResponseSchema;
    };
    /**
     * Lists integration instances for the organization.
     *
     * Use this method to:
     * - View all integrations for an organization
     * - Monitor integration configurations
     *
     *
     * @generated from rpc gitpod.v1.IntegrationService.ListIntegrations
     */
    listIntegrations: {
        methodKind: "unary";
        input: typeof ListIntegrationsRequestSchema;
        output: typeof ListIntegrationsResponseSchema;
    };
    /**
     * Validates an integration's configuration and connectivity.
     *
     * Runs a set of checks (e.g. app token validity) and returns results for each.
     * All checks are always returned; failing checks include a message and an optional action_hint.
     *
     *
     * @generated from rpc gitpod.v1.IntegrationService.ValidateIntegration
     */
    validateIntegration: {
        methodKind: "unary";
        input: typeof ValidateIntegrationRequestSchema;
        output: typeof ValidateIntegrationResponseSchema;
    };
}>;
