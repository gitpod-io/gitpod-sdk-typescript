import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Subject } from "./identity_pb";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/secret.proto.
 */
export declare const file_gitpod_v1_secret: GenFile;
/**
 * @generated from message gitpod.v1.CreateSecretRequest
 */
export type CreateSecretRequest = Message<"gitpod.v1.CreateSecretRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * project_id is the ProjectID this Secret belongs to
     * Deprecated: use scope instead
     *
     * @generated from field: string project_id = 2 [deprecated = true];
     * @deprecated
     */
    projectId: string;
    /**
     * value is the plaintext value of the secret. When set, source must be unset or verbatim.
     *
     * @generated from field: string value = 3;
     */
    value: string;
    /**
     * source is the source of the secret, possibly verbatim value
     *
     * @generated from field: gitpod.v1.Secret.Source source = 13;
     */
    source?: Secret_Source;
    /**
     * mount specifies how the secret should be mounted in Environments
     *
     * @generated from oneof gitpod.v1.CreateSecretRequest.mount
     */
    mount: {
        /**
         * absolute path to the file where the secret is mounted
         *
         * @generated from field: string file_path = 7;
         */
        value: string;
        case: "filePath";
    } | {
        /**
         * secret will be created as an Environment Variable with the same name as the secret
         *
         * @generated from field: bool environment_variable = 8;
         */
        value: boolean;
        case: "environmentVariable";
    } | {
        /**
         * secret will be mounted as a docker config in the environment VM, mount will have the docker registry host
         *
         * @generated from field: string container_registry_basic_auth_host = 9;
         */
        value: string;
        case: "containerRegistryBasicAuthHost";
    } | {
        /**
         * api_only indicates the secret is only available via API/CLI.
         * These secrets are NOT automatically injected into services or devcontainers.
         * Useful for secrets that should only be consumed programmatically (e.g., by security agents).
         *
         * @generated from field: bool api_only = 11;
         */
        value: boolean;
        case: "apiOnly";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * credential_proxy configures transparent credential injection when
     * environments materialize this secret. When set, the credential proxy
     * intercepts HTTPS traffic to the target hosts and replaces the dummy
     * mounted value with the real value in the specified HTTP header. The real
     * secret value is never exposed in the environment.
     * This field is orthogonal to mount — a secret can be both mounted and
     * proxied at the same time.
     *
     * @generated from field: gitpod.v1.Secret.CredentialProxy credential_proxy = 12;
     */
    credentialProxy?: Secret_CredentialProxy;
    /**
     * scope is the scope of the secret
     *
     * @generated from field: gitpod.v1.SecretScope scope = 10;
     */
    scope?: SecretScope;
};
/**
 * Describes the message gitpod.v1.CreateSecretRequest.
 * Use `create(CreateSecretRequestSchema)` to create a new message.
 */
export declare const CreateSecretRequestSchema: GenMessage<CreateSecretRequest>;
/**
 * @generated from message gitpod.v1.CreateSecretResponse
 */
export type CreateSecretResponse = Message<"gitpod.v1.CreateSecretResponse"> & {
    /**
     * @generated from field: gitpod.v1.Secret secret = 1;
     */
    secret?: Secret;
};
/**
 * Describes the message gitpod.v1.CreateSecretResponse.
 * Use `create(CreateSecretResponseSchema)` to create a new message.
 */
export declare const CreateSecretResponseSchema: GenMessage<CreateSecretResponse>;
/**
 * @generated from message gitpod.v1.UpdateSecretValueRequest
 */
export type UpdateSecretValueRequest = Message<"gitpod.v1.UpdateSecretValueRequest"> & {
    /**
     * @generated from field: string secret_id = 1;
     */
    secretId: string;
    /**
     * value is the plaintext value of the secret
     *
     * @generated from field: string value = 2;
     */
    value: string;
};
/**
 * Describes the message gitpod.v1.UpdateSecretValueRequest.
 * Use `create(UpdateSecretValueRequestSchema)` to create a new message.
 */
export declare const UpdateSecretValueRequestSchema: GenMessage<UpdateSecretValueRequest>;
/**
 * @generated from message gitpod.v1.UpdateSecretValueResponse
 */
export type UpdateSecretValueResponse = Message<"gitpod.v1.UpdateSecretValueResponse"> & {};
/**
 * Describes the message gitpod.v1.UpdateSecretValueResponse.
 * Use `create(UpdateSecretValueResponseSchema)` to create a new message.
 */
export declare const UpdateSecretValueResponseSchema: GenMessage<UpdateSecretValueResponse>;
/**
 * @generated from message gitpod.v1.ListSecretsRequest
 */
export type ListSecretsRequest = Message<"gitpod.v1.ListSecretsRequest"> & {
    /**
     * pagination contains the pagination options for listing environments
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListSecretsRequest.Filter filter = 2;
     */
    filter?: ListSecretsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListSecretsRequest.
 * Use `create(ListSecretsRequestSchema)` to create a new message.
 */
export declare const ListSecretsRequestSchema: GenMessage<ListSecretsRequest>;
/**
 * @generated from message gitpod.v1.ListSecretsRequest.Filter
 */
export type ListSecretsRequest_Filter = Message<"gitpod.v1.ListSecretsRequest.Filter"> & {
    /**
     * project_ids filters the response to only Secrets used by these Project IDs
     * Deprecated: use scope instead. Values in project_ids will be ignored.
     *
     * @generated from field: repeated string project_ids = 1 [deprecated = true];
     * @deprecated
     */
    projectIds: string[];
    /**
     * scope is the scope of the secrets to list
     *
     * @generated from field: gitpod.v1.SecretScope scope = 2;
     */
    scope?: SecretScope;
};
/**
 * Describes the message gitpod.v1.ListSecretsRequest.Filter.
 * Use `create(ListSecretsRequest_FilterSchema)` to create a new message.
 */
export declare const ListSecretsRequest_FilterSchema: GenMessage<ListSecretsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListSecretsResponse
 */
export type ListSecretsResponse = Message<"gitpod.v1.ListSecretsResponse"> & {
    /**
     * pagination contains the pagination options for listing secrets
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.Secret secrets = 2;
     */
    secrets: Secret[];
};
/**
 * Describes the message gitpod.v1.ListSecretsResponse.
 * Use `create(ListSecretsResponseSchema)` to create a new message.
 */
export declare const ListSecretsResponseSchema: GenMessage<ListSecretsResponse>;
/**
 * @generated from message gitpod.v1.DeleteSecretRequest
 */
export type DeleteSecretRequest = Message<"gitpod.v1.DeleteSecretRequest"> & {
    /**
     * @generated from field: string secret_id = 1;
     */
    secretId: string;
};
/**
 * Describes the message gitpod.v1.DeleteSecretRequest.
 * Use `create(DeleteSecretRequestSchema)` to create a new message.
 */
export declare const DeleteSecretRequestSchema: GenMessage<DeleteSecretRequest>;
/**
 * @generated from message gitpod.v1.DeleteSecretResponse
 */
export type DeleteSecretResponse = Message<"gitpod.v1.DeleteSecretResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteSecretResponse.
 * Use `create(DeleteSecretResponseSchema)` to create a new message.
 */
export declare const DeleteSecretResponseSchema: GenMessage<DeleteSecretResponse>;
/**
 * @generated from message gitpod.v1.GetSecretValueRequest
 */
export type GetSecretValueRequest = Message<"gitpod.v1.GetSecretValueRequest"> & {
    /**
     * @generated from field: string secret_id = 1;
     */
    secretId: string;
};
/**
 * Describes the message gitpod.v1.GetSecretValueRequest.
 * Use `create(GetSecretValueRequestSchema)` to create a new message.
 */
export declare const GetSecretValueRequestSchema: GenMessage<GetSecretValueRequest>;
/**
 * @generated from message gitpod.v1.GetSecretValueResponse
 */
export type GetSecretValueResponse = Message<"gitpod.v1.GetSecretValueResponse"> & {
    /**
     * @generated from field: string value = 1;
     */
    value: string;
};
/**
 * Describes the message gitpod.v1.GetSecretValueResponse.
 * Use `create(GetSecretValueResponseSchema)` to create a new message.
 */
export declare const GetSecretValueResponseSchema: GenMessage<GetSecretValueResponse>;
/**
 * @generated from message gitpod.v1.SecretScope
 */
export type SecretScope = Message<"gitpod.v1.SecretScope"> & {
    /**
     * @generated from oneof gitpod.v1.SecretScope.scope
     */
    scope: {
        /**
         * project_id is the Project ID this Secret belongs to
         *
         * @generated from field: string project_id = 1;
         */
        value: string;
        case: "projectId";
    } | {
        /**
         * user_id is the User ID this Secret belongs to
         *
         * @generated from field: string user_id = 2;
         */
        value: string;
        case: "userId";
    } | {
        /**
         * organization_id is the Organization ID this Secret belongs to
         *
         * @generated from field: string organization_id = 3;
         */
        value: string;
        case: "organizationId";
    } | {
        /**
         * service_account_id is the Service Account ID this Secret belongs to
         *
         * @generated from field: string service_account_id = 4;
         */
        value: string;
        case: "serviceAccountId";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.SecretScope.
 * Use `create(SecretScopeSchema)` to create a new message.
 */
export declare const SecretScopeSchema: GenMessage<SecretScope>;
/**
 * @generated from message gitpod.v1.Secret
 */
export type Secret = Message<"gitpod.v1.Secret"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * Name of the secret for humans.
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * The Project ID this Secret belongs to
     * Deprecated: use scope instead
     *
     * @generated from field: string project_id = 3 [deprecated = true];
     * @deprecated
     */
    projectId: string;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 5;
     */
    updatedAt?: Timestamp;
    /**
     * creator is the identity of the creator of the secret
     *
     * @generated from field: gitpod.v1.Subject creator = 6;
     */
    creator?: Subject;
    /**
     * @generated from oneof gitpod.v1.Secret.mount
     */
    mount: {
        /**
         * absolute path to the file where the secret is mounted
         *
         * @generated from field: string file_path = 7;
         */
        value: string;
        case: "filePath";
    } | {
        /**
         * secret will be created as an Environment Variable with the same name as the secret
         *
         * @generated from field: bool environment_variable = 8;
         */
        value: boolean;
        case: "environmentVariable";
    } | {
        /**
         * secret will be mounted as a registry secret
         *
         * @generated from field: string container_registry_basic_auth_host = 9;
         */
        value: string;
        case: "containerRegistryBasicAuthHost";
    } | {
        /**
         * api_only indicates the secret is only available via API/CLI
         *
         * @generated from field: bool api_only = 11;
         */
        value: boolean;
        case: "apiOnly";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: gitpod.v1.SecretScope scope = 10;
     */
    scope?: SecretScope;
    /**
     * credential_proxy configures transparent credential injection via the
     * credential proxy. When set, the credential proxy intercepts HTTPS
     * traffic to the target hosts and replaces the dummy mounted value with
     * the real value in the specified HTTP header. The real secret value is
     * never exposed in the environment.
     * This field is orthogonal to mount — a secret can be both mounted and
     * proxied at the same time.
     *
     * @generated from field: gitpod.v1.Secret.CredentialProxy credential_proxy = 12;
     */
    credentialProxy?: Secret_CredentialProxy;
    /**
     * Source of the secret
     *
     * @generated from field: gitpod.v1.Secret.Source source = 13;
     */
    source?: Secret_Source;
};
/**
 * Describes the message gitpod.v1.Secret.
 * Use `create(SecretSchema)` to create a new message.
 */
export declare const SecretSchema: GenMessage<Secret>;
/**
 * CredentialProxy describes how the credential proxy should inject this
 * secret into outgoing HTTPS requests.
 *
 * @generated from message gitpod.v1.Secret.CredentialProxy
 */
export type Secret_CredentialProxy = Message<"gitpod.v1.Secret.CredentialProxy"> & {
    /**
     * target_hosts lists the hostnames to intercept (for example
     * "github.com" or "*.github.com"). Wildcards are subdomain-only and
     * do not match the apex domain.
     *
     * @generated from field: repeated string target_hosts = 1;
     */
    targetHosts: string[];
    /**
     * header is the HTTP header name to inject (e.g. "Authorization").
     *
     * @generated from field: string header = 2;
     */
    header: string;
};
/**
 * Describes the message gitpod.v1.Secret.CredentialProxy.
 * Use `create(Secret_CredentialProxySchema)` to create a new message.
 */
export declare const Secret_CredentialProxySchema: GenMessage<Secret_CredentialProxy>;
/**
 * Source defines
 *
 * @generated from message gitpod.v1.Secret.Source
 */
export type Secret_Source = Message<"gitpod.v1.Secret.Source"> & {
    /**
     * @generated from oneof gitpod.v1.Secret.Source.value
     */
    value: {
        /**
         * @generated from field: bool verbatim = 1;
         */
        value: boolean;
        case: "verbatim";
    } | {
        /**
         * @generated from field: gitpod.v1.Secret.Source.OidcJFrog oidc_jfrog = 2;
         */
        value: Secret_Source_OidcJFrog;
        case: "oidcJfrog";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.Secret.Source.
 * Use `create(Secret_SourceSchema)` to create a new message.
 */
export declare const Secret_SourceSchema: GenMessage<Secret_Source>;
/**
 * @generated from message gitpod.v1.Secret.Source.OidcJFrog
 */
export type Secret_Source_OidcJFrog = Message<"gitpod.v1.Secret.Source.OidcJFrog"> & {
    /**
     * @generated from field: string host = 1;
     */
    host: string;
    /**
     * @generated from field: string provider_name = 2;
     */
    providerName: string;
};
/**
 * Describes the message gitpod.v1.Secret.Source.OidcJFrog.
 * Use `create(Secret_Source_OidcJFrogSchema)` to create a new message.
 */
export declare const Secret_Source_OidcJFrogSchema: GenMessage<Secret_Source_OidcJFrog>;
/**
 * @generated from service gitpod.v1.SecretService
 */
export declare const SecretService: GenService<{
    /**
     * Creates a new secret for a project.
     *
     * Use this method to:
     * - Store sensitive configuration values
     * - Set up environment variables
     * - Configure registry authentication
     * - Add file-based secrets
     *
     * ### Examples
     *
     * - Create environment variable:
     *
     *   Creates a secret that will be available as an environment variable.
     *
     *   ```yaml
     *   name: "DATABASE_URL"
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   value: "postgresql://user:pass@localhost:5432/db"
     *   environmentVariable: true
     *   ```
     *
     * - Create file secret:
     *
     *   Creates a secret that will be mounted as a file.
     *
     *   ```yaml
     *   name: "SSH_KEY"
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   value: "-----BEGIN RSA PRIVATE KEY-----\n..."
     *   filePath: "/home/gitpod/.ssh/id_rsa"
     *   ```
     *
     * - Create registry auth:
     *
     *   Creates credentials for private container registry.
     *
     *   ```yaml
     *   name: "DOCKER_AUTH"
     *   projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   value: "username:password"
     *   containerRegistryBasicAuthHost: "https://registry.example.com"
     *   ```
     *
     * @generated from rpc gitpod.v1.SecretService.CreateSecret
     */
    createSecret: {
        methodKind: "unary";
        input: typeof CreateSecretRequestSchema;
        output: typeof CreateSecretResponseSchema;
    };
    /**
     * Updates the value of an existing secret.
     *
     * Use this method to:
     * - Rotate secret values
     * - Update credentials
     *
     * ### Examples
     *
     * - Update secret value:
     *
     *   Changes the value of an existing secret.
     *
     *   ```yaml
     *   secretId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   value: "new-secret-value"
     *   ```
     *
     * @generated from rpc gitpod.v1.SecretService.UpdateSecretValue
     */
    updateSecretValue: {
        methodKind: "unary";
        input: typeof UpdateSecretValueRequestSchema;
        output: typeof UpdateSecretValueResponseSchema;
    };
    /**
     * Lists secrets
     *
     * Use this method to:
     * - View all project secrets
     * - View all user secrets
     *
     * ### Examples
     *
     * - List project secrets:
     *
     *   Shows all secrets for a project.
     *
     *   ```yaml
     *   filter:
     *     scope:
     *       projectId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - List user secrets:
     *
     *   Shows all secrets for a user.
     *
     *   ```yaml
     *   filter:
     *     scope:
     *       userId: "123e4567-e89b-12d3-a456-426614174000"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.SecretService.ListSecrets
     */
    listSecrets: {
        methodKind: "unary";
        input: typeof ListSecretsRequestSchema;
        output: typeof ListSecretsResponseSchema;
    };
    /**
     * Deletes a secret permanently.
     *
     * Use this method to:
     * - Remove unused secrets
     * - Clean up old credentials
     *
     * ### Examples
     *
     * - Delete secret:
     *
     *   Permanently removes a secret.
     *
     *   ```yaml
     *   secretId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.SecretService.DeleteSecret
     */
    deleteSecret: {
        methodKind: "unary";
        input: typeof DeleteSecretRequestSchema;
        output: typeof DeleteSecretResponseSchema;
    };
    /**
     * Gets the value of a secret. Only available to environments that are authorized to access the secret.
     *
     * Use this method to:
     * - Retrieve secret values
     * - Access credentials
     *
     * ### Examples
     *
     * - Get secret value:
     *
     *   Retrieves the value of a specific secret.
     *
     *   ```yaml
     *   secretId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.SecretService.GetSecretValue
     */
    getSecretValue: {
        methodKind: "unary";
        input: typeof GetSecretValueRequestSchema;
        output: typeof GetSecretValueResponseSchema;
    };
}>;
