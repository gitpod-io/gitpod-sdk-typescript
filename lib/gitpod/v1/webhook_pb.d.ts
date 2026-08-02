import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Subject } from "./identity_pb";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Workflow } from "./workflow_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/webhook.proto.
 */
export declare const file_gitpod_v1_webhook: GenFile;
/**
 * WebhookRepositoryScope represents a repository in the webhook's scope.
 * Contains SCM repository information needed to generate execution contexts.
 * The clone URL can be derived as https://{host}/{owner}/{name}.git
 *
 * @generated from message gitpod.v1.WebhookRepositoryScope
 */
export type WebhookRepositoryScope = Message<"gitpod.v1.WebhookRepositoryScope"> & {
    /**
     * host is the SCM host (e.g., "github.com", "gitlab.com")
     *
     * @generated from field: string host = 2;
     */
    host: string;
    /**
     * owner is the repository owner or organization (e.g., "gitpod-io")
     *
     * @generated from field: string owner = 3;
     */
    owner: string;
    /**
     * name is the repository name (e.g., "gitpod")
     *
     * @generated from field: string name = 4;
     */
    name: string;
};
/**
 * Describes the message gitpod.v1.WebhookRepositoryScope.
 * Use `create(WebhookRepositoryScopeSchema)` to create a new message.
 */
export declare const WebhookRepositoryScopeSchema: GenMessage<WebhookRepositoryScope>;
/**
 * WebhookOrganizationScope represents an SCM organization in the webhook's scope.
 *
 * @generated from message gitpod.v1.WebhookOrganizationScope
 */
export type WebhookOrganizationScope = Message<"gitpod.v1.WebhookOrganizationScope"> & {
    /**
     * host is the SCM host (e.g., "github.com", "gitlab.com")
     *
     * @generated from field: string host = 1;
     */
    host: string;
    /**
     * name is the organization or group name (e.g., "gitpod-io")
     *
     * @generated from field: string name = 2;
     */
    name: string;
};
/**
 * Describes the message gitpod.v1.WebhookOrganizationScope.
 * Use `create(WebhookOrganizationScopeSchema)` to create a new message.
 */
export declare const WebhookOrganizationScopeSchema: GenMessage<WebhookOrganizationScope>;
/**
 * Webhook represents a webhook endpoint for receiving SCM events.
 *
 * @generated from message gitpod.v1.Webhook
 */
export type Webhook = Message<"gitpod.v1.Webhook"> & {
    /**
     * id is the unique identifier of the webhook
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * metadata contains organizational and ownership information
     *
     * @generated from field: gitpod.v1.Webhook.Metadata metadata = 2;
     */
    metadata?: Webhook_Metadata;
    /**
     * spec contains the webhook configuration
     *
     * @generated from field: gitpod.v1.Webhook.Spec spec = 3;
     */
    spec?: Webhook_Spec;
    /**
     * url is the generated webhook endpoint URL
     * Format: https://{domain}/webhooks/{id}
     * Read-only, computed from id
     *
     * @generated from field: string url = 4;
     */
    url: string;
    /**
     * bound_workflow_count is the number of workflows bound to this webhook
     * Read-only, computed from workflow_webhook_bindings
     *
     * @generated from field: int32 bound_workflow_count = 5;
     */
    boundWorkflowCount: number;
    /**
     * last_triggered_at is when the webhook was last triggered by an incoming event
     * Read-only, updated automatically when the webhook receives an event
     *
     * @generated from field: google.protobuf.Timestamp last_triggered_at = 6;
     */
    lastTriggeredAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.Webhook.
 * Use `create(WebhookSchema)` to create a new message.
 */
export declare const WebhookSchema: GenMessage<Webhook>;
/**
 * Metadata contains organizational and ownership information.
 *
 * @generated from message gitpod.v1.Webhook.Metadata
 */
export type Webhook_Metadata = Message<"gitpod.v1.Webhook.Metadata"> & {
    /**
     * organization_id is the ID of the organization that owns this webhook
     *
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * name is the display name of the webhook
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * description is an optional description of the webhook's purpose
     *
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * creator is the identity of who created the webhook
     *
     * @generated from field: gitpod.v1.Subject creator = 4;
     */
    creator?: Subject;
    /**
     * created_at is when the webhook was created
     *
     * @generated from field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
    /**
     * updated_at is when the webhook was last updated
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 6;
     */
    updatedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.Webhook.Metadata.
 * Use `create(Webhook_MetadataSchema)` to create a new message.
 */
export declare const Webhook_MetadataSchema: GenMessage<Webhook_Metadata>;
/**
 * Spec contains the webhook configuration.
 *
 * @generated from message gitpod.v1.Webhook.Spec
 */
export type Webhook_Spec = Message<"gitpod.v1.Webhook.Spec"> & {
    /**
     * type determines the scope level of the webhook
     *
     * @generated from field: gitpod.v1.WebhookType type = 1;
     */
    type: WebhookType;
    /**
     * Deprecated: Use scopes instead. Kept for backward compatibility.
     * scope is the target of the webhook:
     * - For REPOSITORY type: "owner/repo" (e.g., "gitpod-io/gitpod")
     * - For ORGANIZATION type: "owner" (e.g., "gitpod-io")
     *
     * @generated from field: string scope = 2 [deprecated = true];
     * @deprecated
     */
    scope: string;
    /**
     * provider is the Git provider (github, gitlab)
     *
     * @generated from field: gitpod.v1.WebhookProvider provider = 3;
     */
    provider: WebhookProvider;
    /**
     * scopes is the list of repository scopes for this webhook.
     * For REPOSITORY type: each entry represents a specific repository.
     * When scopes is non-empty, it takes precedence over the deprecated scope field.
     *
     * @generated from field: repeated gitpod.v1.WebhookRepositoryScope scopes = 4;
     */
    scopes: WebhookRepositoryScope[];
    /**
     * organization_scope is the SCM organization scope for this webhook.
     * For ORGANIZATION type: identifies the organization and its SCM host.
     * When set, takes precedence over the deprecated scope field.
     *
     * @generated from field: gitpod.v1.WebhookOrganizationScope organization_scope = 5;
     */
    organizationScope?: WebhookOrganizationScope;
};
/**
 * Describes the message gitpod.v1.Webhook.Spec.
 * Use `create(Webhook_SpecSchema)` to create a new message.
 */
export declare const Webhook_SpecSchema: GenMessage<Webhook_Spec>;
/**
 * CreateWebhookRequest creates a new webhook.
 *
 * @generated from message gitpod.v1.CreateWebhookRequest
 */
export type CreateWebhookRequest = Message<"gitpod.v1.CreateWebhookRequest"> & {
    /**
     * name is the display name of the webhook
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * description is an optional description of the webhook's purpose
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * type determines the scope level of the webhook
     *
     * @generated from field: gitpod.v1.WebhookType type = 3;
     */
    type: WebhookType;
    /**
     * Deprecated: Use scopes instead.
     * scope is the target of the webhook:
     * - For REPOSITORY type: "owner/repo" (e.g., "gitpod-io/gitpod")
     * - For ORGANIZATION type: "owner" (e.g., "gitpod-io")
     * - Empty string is allowed for webhooks that don't require scope filtering
     *
     * @generated from field: string scope = 4 [deprecated = true];
     * @deprecated
     */
    scope: string;
    /**
     * provider is the Git provider
     *
     * @generated from field: gitpod.v1.WebhookProvider provider = 5;
     */
    provider: WebhookProvider;
    /**
     * scopes is the list of repository scopes for this webhook.
     * For REPOSITORY type: each entry represents a specific repository with full SCM data.
     * When provided, takes precedence over the deprecated scope field.
     *
     * @generated from field: repeated gitpod.v1.WebhookRepositoryScope scopes = 6;
     */
    scopes: WebhookRepositoryScope[];
    /**
     * organization_scope is the SCM organization scope for this webhook.
     * For ORGANIZATION type: identifies the organization and its SCM host.
     * When provided, takes precedence over the deprecated scope field.
     *
     * @generated from field: gitpod.v1.WebhookOrganizationScope organization_scope = 7;
     */
    organizationScope?: WebhookOrganizationScope;
};
/**
 * Describes the message gitpod.v1.CreateWebhookRequest.
 * Use `create(CreateWebhookRequestSchema)` to create a new message.
 */
export declare const CreateWebhookRequestSchema: GenMessage<CreateWebhookRequest>;
/**
 * @generated from message gitpod.v1.CreateWebhookResponse
 */
export type CreateWebhookResponse = Message<"gitpod.v1.CreateWebhookResponse"> & {
    /**
     * @generated from field: gitpod.v1.Webhook webhook = 1;
     */
    webhook?: Webhook;
};
/**
 * Describes the message gitpod.v1.CreateWebhookResponse.
 * Use `create(CreateWebhookResponseSchema)` to create a new message.
 */
export declare const CreateWebhookResponseSchema: GenMessage<CreateWebhookResponse>;
/**
 * GetWebhookRequest gets details about a specific webhook.
 *
 * @generated from message gitpod.v1.GetWebhookRequest
 */
export type GetWebhookRequest = Message<"gitpod.v1.GetWebhookRequest"> & {
    /**
     * @generated from field: string webhook_id = 1;
     */
    webhookId: string;
};
/**
 * Describes the message gitpod.v1.GetWebhookRequest.
 * Use `create(GetWebhookRequestSchema)` to create a new message.
 */
export declare const GetWebhookRequestSchema: GenMessage<GetWebhookRequest>;
/**
 * @generated from message gitpod.v1.GetWebhookResponse
 */
export type GetWebhookResponse = Message<"gitpod.v1.GetWebhookResponse"> & {
    /**
     * @generated from field: gitpod.v1.Webhook webhook = 1;
     */
    webhook?: Webhook;
};
/**
 * Describes the message gitpod.v1.GetWebhookResponse.
 * Use `create(GetWebhookResponseSchema)` to create a new message.
 */
export declare const GetWebhookResponseSchema: GenMessage<GetWebhookResponse>;
/**
 * ListWebhooksRequest lists webhooks with optional filtering.
 *
 * @generated from message gitpod.v1.ListWebhooksRequest
 */
export type ListWebhooksRequest = Message<"gitpod.v1.ListWebhooksRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListWebhooksRequest.Filter filter = 2;
     */
    filter?: ListWebhooksRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListWebhooksRequest.
 * Use `create(ListWebhooksRequestSchema)` to create a new message.
 */
export declare const ListWebhooksRequestSchema: GenMessage<ListWebhooksRequest>;
/**
 * @generated from message gitpod.v1.ListWebhooksRequest.Filter
 */
export type ListWebhooksRequest_Filter = Message<"gitpod.v1.ListWebhooksRequest.Filter"> & {
    /**
     * webhook_ids filters by specific webhook IDs
     *
     * @generated from field: repeated string webhook_ids = 1;
     */
    webhookIds: string[];
    /**
     * types filters by webhook type
     *
     * @generated from field: repeated gitpod.v1.WebhookType types = 2;
     */
    types: WebhookType[];
    /**
     * providers filters by webhook provider
     *
     * @generated from field: repeated gitpod.v1.WebhookProvider providers = 3;
     */
    providers: WebhookProvider[];
};
/**
 * Describes the message gitpod.v1.ListWebhooksRequest.Filter.
 * Use `create(ListWebhooksRequest_FilterSchema)` to create a new message.
 */
export declare const ListWebhooksRequest_FilterSchema: GenMessage<ListWebhooksRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListWebhooksResponse
 */
export type ListWebhooksResponse = Message<"gitpod.v1.ListWebhooksResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.Webhook webhooks = 2;
     */
    webhooks: Webhook[];
};
/**
 * Describes the message gitpod.v1.ListWebhooksResponse.
 * Use `create(ListWebhooksResponseSchema)` to create a new message.
 */
export declare const ListWebhooksResponseSchema: GenMessage<ListWebhooksResponse>;
/**
 * UpdateWebhookRequest updates a webhook's configuration.
 *
 * @generated from message gitpod.v1.UpdateWebhookRequest
 */
export type UpdateWebhookRequest = Message<"gitpod.v1.UpdateWebhookRequest"> & {
    /**
     * @generated from field: string webhook_id = 1;
     */
    webhookId: string;
    /**
     * name is the display name of the webhook
     *
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * description is an optional description of the webhook's purpose
     *
     * @generated from field: optional string description = 3;
     */
    description?: string;
    /**
     * Deprecated: Use scopes instead.
     * scope is the target of the webhook:
     * - For REPOSITORY type: "owner/repo" (e.g., "gitpod-io/gitpod")
     * - For ORGANIZATION type: "owner" (e.g., "gitpod-io")
     * Note: The webhook type and provider cannot be changed after creation.
     *
     * @generated from field: optional string scope = 4 [deprecated = true];
     * @deprecated
     */
    scope?: string;
    /**
     * scopes replaces the webhook's repository scopes.
     * For REPOSITORY type: each entry represents a specific repository with full SCM data.
     * When provided, takes precedence over the deprecated scope field.
     * Note: The webhook type and provider cannot be changed after creation.
     *
     * @generated from field: repeated gitpod.v1.WebhookRepositoryScope scopes = 5;
     */
    scopes: WebhookRepositoryScope[];
    /**
     * organization_scope replaces the webhook's organization scope.
     * For ORGANIZATION type: identifies the organization and its SCM host.
     * When provided, takes precedence over the deprecated scope field.
     * Note: The webhook type and provider cannot be changed after creation.
     *
     * @generated from field: gitpod.v1.WebhookOrganizationScope organization_scope = 6;
     */
    organizationScope?: WebhookOrganizationScope;
};
/**
 * Describes the message gitpod.v1.UpdateWebhookRequest.
 * Use `create(UpdateWebhookRequestSchema)` to create a new message.
 */
export declare const UpdateWebhookRequestSchema: GenMessage<UpdateWebhookRequest>;
/**
 * @generated from message gitpod.v1.UpdateWebhookResponse
 */
export type UpdateWebhookResponse = Message<"gitpod.v1.UpdateWebhookResponse"> & {
    /**
     * @generated from field: gitpod.v1.Webhook webhook = 1;
     */
    webhook?: Webhook;
};
/**
 * Describes the message gitpod.v1.UpdateWebhookResponse.
 * Use `create(UpdateWebhookResponseSchema)` to create a new message.
 */
export declare const UpdateWebhookResponseSchema: GenMessage<UpdateWebhookResponse>;
/**
 * DeleteWebhookRequest deletes a webhook permanently.
 *
 * @generated from message gitpod.v1.DeleteWebhookRequest
 */
export type DeleteWebhookRequest = Message<"gitpod.v1.DeleteWebhookRequest"> & {
    /**
     * @generated from field: string webhook_id = 1;
     */
    webhookId: string;
};
/**
 * Describes the message gitpod.v1.DeleteWebhookRequest.
 * Use `create(DeleteWebhookRequestSchema)` to create a new message.
 */
export declare const DeleteWebhookRequestSchema: GenMessage<DeleteWebhookRequest>;
/**
 * @generated from message gitpod.v1.DeleteWebhookResponse
 */
export type DeleteWebhookResponse = Message<"gitpod.v1.DeleteWebhookResponse"> & {
    /**
     * IDs of workflows that had their triggers converted to manual type
     * because they referenced the deleted webhook.
     *
     * @generated from field: repeated string affected_workflow_ids = 1;
     */
    affectedWorkflowIds: string[];
};
/**
 * Describes the message gitpod.v1.DeleteWebhookResponse.
 * Use `create(DeleteWebhookResponseSchema)` to create a new message.
 */
export declare const DeleteWebhookResponseSchema: GenMessage<DeleteWebhookResponse>;
/**
 * GetWebhookSecretRequest retrieves the webhook secret.
 *
 * @generated from message gitpod.v1.GetWebhookSecretRequest
 */
export type GetWebhookSecretRequest = Message<"gitpod.v1.GetWebhookSecretRequest"> & {
    /**
     * @generated from field: string webhook_id = 1;
     */
    webhookId: string;
};
/**
 * Describes the message gitpod.v1.GetWebhookSecretRequest.
 * Use `create(GetWebhookSecretRequestSchema)` to create a new message.
 */
export declare const GetWebhookSecretRequestSchema: GenMessage<GetWebhookSecretRequest>;
/**
 * @generated from message gitpod.v1.GetWebhookSecretResponse
 */
export type GetWebhookSecretResponse = Message<"gitpod.v1.GetWebhookSecretResponse"> & {
    /**
     * The decrypted webhook secret
     *
     * @generated from field: string secret = 1;
     */
    secret: string;
};
/**
 * Describes the message gitpod.v1.GetWebhookSecretResponse.
 * Use `create(GetWebhookSecretResponseSchema)` to create a new message.
 */
export declare const GetWebhookSecretResponseSchema: GenMessage<GetWebhookSecretResponse>;
/**
 * RotateWebhookSecretRequest rotates the webhook secret.
 *
 * @generated from message gitpod.v1.RotateWebhookSecretRequest
 */
export type RotateWebhookSecretRequest = Message<"gitpod.v1.RotateWebhookSecretRequest"> & {
    /**
     * @generated from field: string webhook_id = 1;
     */
    webhookId: string;
};
/**
 * Describes the message gitpod.v1.RotateWebhookSecretRequest.
 * Use `create(RotateWebhookSecretRequestSchema)` to create a new message.
 */
export declare const RotateWebhookSecretRequestSchema: GenMessage<RotateWebhookSecretRequest>;
/**
 * @generated from message gitpod.v1.RotateWebhookSecretResponse
 */
export type RotateWebhookSecretResponse = Message<"gitpod.v1.RotateWebhookSecretResponse"> & {
    /**
     * The new webhook secret (decrypted)
     *
     * @generated from field: string secret = 1;
     */
    secret: string;
};
/**
 * Describes the message gitpod.v1.RotateWebhookSecretResponse.
 * Use `create(RotateWebhookSecretResponseSchema)` to create a new message.
 */
export declare const RotateWebhookSecretResponseSchema: GenMessage<RotateWebhookSecretResponse>;
/**
 * ListWebhookWorkflowsRequest lists workflows bound to a webhook.
 *
 * @generated from message gitpod.v1.ListWebhookWorkflowsRequest
 */
export type ListWebhookWorkflowsRequest = Message<"gitpod.v1.ListWebhookWorkflowsRequest"> & {
    /**
     * @generated from field: string webhook_id = 1;
     */
    webhookId: string;
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 2;
     */
    pagination?: PaginationRequest;
};
/**
 * Describes the message gitpod.v1.ListWebhookWorkflowsRequest.
 * Use `create(ListWebhookWorkflowsRequestSchema)` to create a new message.
 */
export declare const ListWebhookWorkflowsRequestSchema: GenMessage<ListWebhookWorkflowsRequest>;
/**
 * @generated from message gitpod.v1.ListWebhookWorkflowsResponse
 */
export type ListWebhookWorkflowsResponse = Message<"gitpod.v1.ListWebhookWorkflowsResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.Workflow workflows = 2;
     */
    workflows: Workflow[];
};
/**
 * Describes the message gitpod.v1.ListWebhookWorkflowsResponse.
 * Use `create(ListWebhookWorkflowsResponseSchema)` to create a new message.
 */
export declare const ListWebhookWorkflowsResponseSchema: GenMessage<ListWebhookWorkflowsResponse>;
/**
 * WebhookType determines the scope level of the webhook.
 *
 * @generated from enum gitpod.v1.WebhookType
 */
export declare enum WebhookType {
    /**
     * @generated from enum value: WEBHOOK_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Scoped to a specific repository (e.g., "owner/repo")
     *
     * @generated from enum value: WEBHOOK_TYPE_SCM_REPOSITORY = 1;
     */
    SCM_REPOSITORY = 1,
    /**
     * Scoped to an organization (e.g., "owner" - all repos)
     *
     * @generated from enum value: WEBHOOK_TYPE_SCM_ORGANIZATION = 2;
     */
    SCM_ORGANIZATION = 2
}
/**
 * Describes the enum gitpod.v1.WebhookType.
 */
export declare const WebhookTypeSchema: GenEnum<WebhookType>;
/**
 * WebhookProvider identifies the Git provider.
 *
 * @generated from enum gitpod.v1.WebhookProvider
 */
export declare enum WebhookProvider {
    /**
     * @generated from enum value: WEBHOOK_PROVIDER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: WEBHOOK_PROVIDER_GITHUB = 1;
     */
    GITHUB = 1,
    /**
     * @generated from enum value: WEBHOOK_PROVIDER_GITLAB = 2;
     */
    GITLAB = 2,
    /**
     * WEBHOOK_PROVIDER_BITBUCKET is the bitbucket cloud provider.
     *
     * @generated from enum value: WEBHOOK_PROVIDER_BITBUCKET = 3;
     */
    BITBUCKET = 3
}
/**
 * Describes the enum gitpod.v1.WebhookProvider.
 */
export declare const WebhookProviderSchema: GenEnum<WebhookProvider>;
/**
 * @generated from service gitpod.v1.WebhookService
 */
export declare const WebhookService: GenService<{
    /**
     * Creates a new webhook for receiving SCM events.
     *
     * Use this method to:
     * - Set up webhooks for repository or organization events
     * - Configure webhook scopes and provider
     *
     * ### Examples
     *
     * - Create repository webhook with multiple scopes:
     *
     *   Creates a webhook scoped to specific repositories.
     *
     *   ```yaml
     *   name: "My Repo Webhook"
     *   type: WEBHOOK_TYPE_SCM_REPOSITORY
     *   scopes:
     *     - host: "github.com"
     *       owner: "gitpod-io"
     *       name: "gitpod"
     *     - host: "github.com"
     *       owner: "gitpod-io"
     *       name: "gitpod-next"
     *   provider: WEBHOOK_PROVIDER_GITHUB
     *   ```
     *
     * - Create organization webhook:
     *
     *   Creates a webhook scoped to all repositories in an organization.
     *
     *   ```yaml
     *   name: "Org Webhook"
     *   type: WEBHOOK_TYPE_SCM_ORGANIZATION
     *   organizationScope:
     *     host: "github.com"
     *     name: "gitpod-io"
     *   provider: WEBHOOK_PROVIDER_GITHUB
     *   ```
     *
     * @generated from rpc gitpod.v1.WebhookService.CreateWebhook
     */
    createWebhook: {
        methodKind: "unary";
        input: typeof CreateWebhookRequestSchema;
        output: typeof CreateWebhookResponseSchema;
    };
    /**
     * Gets details about a specific webhook.
     *
     * Use this method to:
     * - View webhook configuration
     * - Check webhook URL
     * - See bound workflow count
     *
     * ### Examples
     *
     * - Get webhook details:
     *
     *   Retrieves information about a specific webhook.
     *
     *   ```yaml
     *   webhookId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.WebhookService.GetWebhook
     */
    getWebhook: {
        methodKind: "unary";
        input: typeof GetWebhookRequestSchema;
        output: typeof GetWebhookResponseSchema;
    };
    /**
     * Lists webhooks with optional filtering.
     *
     * Use this method to:
     * - View all webhooks in an organization
     * - Filter webhooks by type or provider
     *
     * ### Examples
     *
     * - List all webhooks:
     *
     *   Shows all webhooks with pagination.
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.WebhookService.ListWebhooks
     */
    listWebhooks: {
        methodKind: "unary";
        input: typeof ListWebhooksRequestSchema;
        output: typeof ListWebhooksResponseSchema;
    };
    /**
     * Updates a webhook's configuration.
     *
     * Use this method to:
     * - Change webhook name or description
     * - Change webhook scopes (the target repositories or organization)
     *
     * Note: The webhook type and provider cannot be changed after creation.
     *
     * ### Examples
     *
     * - Update webhook name:
     *
     *   Changes the webhook's display name.
     *
     *   ```yaml
     *   webhookId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   name: "Updated Webhook Name"
     *   ```
     *
     * - Update webhook scopes:
     *
     *   Changes the webhook's target repositories.
     *
     *   ```yaml
     *   webhookId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   scopes:
     *     - host: "github.com"
     *       owner: "gitpod-io"
     *       name: "new-repo"
     *   ```
     *
     * @generated from rpc gitpod.v1.WebhookService.UpdateWebhook
     */
    updateWebhook: {
        methodKind: "unary";
        input: typeof UpdateWebhookRequestSchema;
        output: typeof UpdateWebhookResponseSchema;
    };
    /**
     * Deletes a webhook permanently.
     *
     * Use this method to:
     * - Remove unused webhooks
     * - Clean up webhook configurations
     *
     * ### Examples
     *
     * - Delete webhook:
     *
     *   Permanently removes a webhook.
     *
     *   ```yaml
     *   webhookId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.WebhookService.DeleteWebhook
     */
    deleteWebhook: {
        methodKind: "unary";
        input: typeof DeleteWebhookRequestSchema;
        output: typeof DeleteWebhookResponseSchema;
    };
    /**
     * Gets the webhook secret for signature validation.
     *
     * This operation is audited for security purposes.
     *
     * Use this method to:
     * - Retrieve webhook secret for SCM configuration
     * - Verify webhook signatures
     *
     * ### Examples
     *
     * - Get webhook secret:
     *
     *   Retrieves the webhook secret.
     *
     *   ```yaml
     *   webhookId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.WebhookService.GetWebhookSecret
     */
    getWebhookSecret: {
        methodKind: "unary";
        input: typeof GetWebhookSecretRequestSchema;
        output: typeof GetWebhookSecretResponseSchema;
    };
    /**
     * Rotates the webhook secret.
     *
     * Use this method to:
     * - Generate a new webhook secret
     * - Invalidate the old webhook secret
     *
     * ### Examples
     *
     * - Rotate webhook secret:
     *
     *   Generates a new webhook secret.
     *
     *   ```yaml
     *   webhookId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.WebhookService.RotateWebhookSecret
     */
    rotateWebhookSecret: {
        methodKind: "unary";
        input: typeof RotateWebhookSecretRequestSchema;
        output: typeof RotateWebhookSecretResponseSchema;
    };
    /**
     * Lists workflows bound to a webhook.
     *
     * Use this method to:
     * - View all workflows triggered by a webhook
     * - Check workflow bindings
     *
     * ### Examples
     *
     * - List webhook workflows:
     *
     *   Shows all workflows bound to a webhook.
     *
     *   ```yaml
     *   webhookId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.WebhookService.ListWebhookWorkflows
     */
    listWebhookWorkflows: {
        methodKind: "unary";
        input: typeof ListWebhookWorkflowsRequestSchema;
        output: typeof ListWebhookWorkflowsResponseSchema;
    };
}>;
