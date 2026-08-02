import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Subject } from "./identity_pb";
import type { LLMIntegrationPhase, SupportedModel } from "./model_pb";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/runner_configuration.proto.
 */
export declare const file_gitpod_v1_runner_configuration: GenFile;
/**
 * @generated from message gitpod.v1.CreateHostAuthenticationTokenRequest
 */
export type CreateHostAuthenticationTokenRequest = Message<"gitpod.v1.CreateHostAuthenticationTokenRequest"> & {
    /**
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * Deprecated: Use principal_id and principal_type instead
     *
     * @generated from field: string user_id = 2 [deprecated = true];
     * @deprecated
     */
    userId: string;
    /**
     * @generated from field: string host = 3;
     */
    host: string;
    /**
     * stored encrypted, retrieved via GetHostAuthenticationTokenValue
     *
     * @generated from field: string token = 4;
     */
    token: string;
    /**
     * @generated from field: gitpod.v1.HostAuthenticationTokenSource source = 5;
     */
    source: HostAuthenticationTokenSource;
    /**
     * @generated from field: google.protobuf.Timestamp expires_at = 6;
     */
    expiresAt?: Timestamp;
    /**
     * stored encrypted, retrieved via GetHostAuthenticationTokenValue
     *
     * @generated from field: string refresh_token = 7;
     */
    refreshToken: string;
    /**
     * @generated from field: string integration_id = 8;
     */
    integrationId: string;
    /**
     * Maximum 100 scopes allowed (101 for validation purposes)
     *
     * @generated from field: repeated string scopes = 9;
     */
    scopes: string[];
    /**
     * Subject identifies the principal (user or service account) for the token
     *
     * @generated from field: gitpod.v1.Subject subject = 10;
     */
    subject?: Subject;
};
/**
 * Describes the message gitpod.v1.CreateHostAuthenticationTokenRequest.
 * Use `create(CreateHostAuthenticationTokenRequestSchema)` to create a new message.
 */
export declare const CreateHostAuthenticationTokenRequestSchema: GenMessage<CreateHostAuthenticationTokenRequest>;
/**
 * @generated from message gitpod.v1.CreateHostAuthenticationTokenResponse
 */
export type CreateHostAuthenticationTokenResponse = Message<"gitpod.v1.CreateHostAuthenticationTokenResponse"> & {
    /**
     * @generated from field: gitpod.v1.HostAuthenticationToken token = 1;
     */
    token?: HostAuthenticationToken;
};
/**
 * Describes the message gitpod.v1.CreateHostAuthenticationTokenResponse.
 * Use `create(CreateHostAuthenticationTokenResponseSchema)` to create a new message.
 */
export declare const CreateHostAuthenticationTokenResponseSchema: GenMessage<CreateHostAuthenticationTokenResponse>;
/**
 * @generated from message gitpod.v1.HostAuthenticationToken
 */
export type HostAuthenticationToken = Message<"gitpod.v1.HostAuthenticationToken"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string runner_id = 2;
     */
    runnerId: string;
    /**
     * Deprecated: Use principal_id and principal_type instead
     *
     * principal (user)
     *
     * @generated from field: string user_id = 3 [deprecated = true];
     * @deprecated
     */
    userId: string;
    /**
     * @generated from field: string host = 4;
     */
    host: string;
    /**
     * auth_type
     *
     * @generated from field: gitpod.v1.HostAuthenticationTokenSource source = 5;
     */
    source: HostAuthenticationTokenSource;
    /**
     * @generated from field: google.protobuf.Timestamp expires_at = 6;
     */
    expiresAt?: Timestamp;
    /**
     * links to integration instance
     *
     * @generated from field: string integration_id = 7;
     */
    integrationId: string;
    /**
     * token permissions
     *
     * @generated from field: repeated string scopes = 8;
     */
    scopes: string[];
    /**
     * Subject identifies the principal (user or service account) for the token
     *
     * Note: actual token and refresh_token values are retrieved via GetHostAuthenticationTokenValue API
     *
     * @generated from field: gitpod.v1.Subject subject = 9;
     */
    subject?: Subject;
};
/**
 * Describes the message gitpod.v1.HostAuthenticationToken.
 * Use `create(HostAuthenticationTokenSchema)` to create a new message.
 */
export declare const HostAuthenticationTokenSchema: GenMessage<HostAuthenticationToken>;
/**
 * @generated from message gitpod.v1.GetHostAuthenticationTokenRequest
 */
export type GetHostAuthenticationTokenRequest = Message<"gitpod.v1.GetHostAuthenticationTokenRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.GetHostAuthenticationTokenRequest.
 * Use `create(GetHostAuthenticationTokenRequestSchema)` to create a new message.
 */
export declare const GetHostAuthenticationTokenRequestSchema: GenMessage<GetHostAuthenticationTokenRequest>;
/**
 * @generated from message gitpod.v1.GetHostAuthenticationTokenResponse
 */
export type GetHostAuthenticationTokenResponse = Message<"gitpod.v1.GetHostAuthenticationTokenResponse"> & {
    /**
     * @generated from field: gitpod.v1.HostAuthenticationToken token = 1;
     */
    token?: HostAuthenticationToken;
};
/**
 * Describes the message gitpod.v1.GetHostAuthenticationTokenResponse.
 * Use `create(GetHostAuthenticationTokenResponseSchema)` to create a new message.
 */
export declare const GetHostAuthenticationTokenResponseSchema: GenMessage<GetHostAuthenticationTokenResponse>;
/**
 * @generated from message gitpod.v1.ListHostAuthenticationTokensRequest
 */
export type ListHostAuthenticationTokensRequest = Message<"gitpod.v1.ListHostAuthenticationTokensRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListHostAuthenticationTokensRequest.Filter filter = 2;
     */
    filter?: ListHostAuthenticationTokensRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListHostAuthenticationTokensRequest.
 * Use `create(ListHostAuthenticationTokensRequestSchema)` to create a new message.
 */
export declare const ListHostAuthenticationTokensRequestSchema: GenMessage<ListHostAuthenticationTokensRequest>;
/**
 * @generated from message gitpod.v1.ListHostAuthenticationTokensRequest.Filter
 */
export type ListHostAuthenticationTokensRequest_Filter = Message<"gitpod.v1.ListHostAuthenticationTokensRequest.Filter"> & {
    /**
     * @generated from field: optional string runner_id = 1;
     */
    runnerId?: string;
    /**
     * Deprecated: Use principal_id instead
     *
     * @generated from field: optional string user_id = 2 [deprecated = true];
     * @deprecated
     */
    userId?: string;
    /**
     * Filter by subject (user or service account)
     *
     * @generated from field: optional string subject_id = 3;
     */
    subjectId?: string;
};
/**
 * Describes the message gitpod.v1.ListHostAuthenticationTokensRequest.Filter.
 * Use `create(ListHostAuthenticationTokensRequest_FilterSchema)` to create a new message.
 */
export declare const ListHostAuthenticationTokensRequest_FilterSchema: GenMessage<ListHostAuthenticationTokensRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListHostAuthenticationTokensResponse
 */
export type ListHostAuthenticationTokensResponse = Message<"gitpod.v1.ListHostAuthenticationTokensResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.HostAuthenticationToken tokens = 2;
     */
    tokens: HostAuthenticationToken[];
};
/**
 * Describes the message gitpod.v1.ListHostAuthenticationTokensResponse.
 * Use `create(ListHostAuthenticationTokensResponseSchema)` to create a new message.
 */
export declare const ListHostAuthenticationTokensResponseSchema: GenMessage<ListHostAuthenticationTokensResponse>;
/**
 * @generated from message gitpod.v1.UpdateHostAuthenticationTokenRequest
 */
export type UpdateHostAuthenticationTokenRequest = Message<"gitpod.v1.UpdateHostAuthenticationTokenRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: optional string token = 5;
     */
    token?: string;
    /**
     * @generated from field: optional google.protobuf.Timestamp expires_at = 6;
     */
    expiresAt?: Timestamp;
    /**
     * @generated from field: optional string refresh_token = 7;
     */
    refreshToken?: string;
    /**
     * @generated from field: repeated string scopes = 8;
     */
    scopes: string[];
};
/**
 * Describes the message gitpod.v1.UpdateHostAuthenticationTokenRequest.
 * Use `create(UpdateHostAuthenticationTokenRequestSchema)` to create a new message.
 */
export declare const UpdateHostAuthenticationTokenRequestSchema: GenMessage<UpdateHostAuthenticationTokenRequest>;
/**
 * @generated from message gitpod.v1.UpdateHostAuthenticationTokenResponse
 */
export type UpdateHostAuthenticationTokenResponse = Message<"gitpod.v1.UpdateHostAuthenticationTokenResponse"> & {};
/**
 * Describes the message gitpod.v1.UpdateHostAuthenticationTokenResponse.
 * Use `create(UpdateHostAuthenticationTokenResponseSchema)` to create a new message.
 */
export declare const UpdateHostAuthenticationTokenResponseSchema: GenMessage<UpdateHostAuthenticationTokenResponse>;
/**
 * @generated from message gitpod.v1.DeleteHostAuthenticationTokenRequest
 */
export type DeleteHostAuthenticationTokenRequest = Message<"gitpod.v1.DeleteHostAuthenticationTokenRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.DeleteHostAuthenticationTokenRequest.
 * Use `create(DeleteHostAuthenticationTokenRequestSchema)` to create a new message.
 */
export declare const DeleteHostAuthenticationTokenRequestSchema: GenMessage<DeleteHostAuthenticationTokenRequest>;
/**
 * @generated from message gitpod.v1.DeleteHostAuthenticationTokenResponse
 */
export type DeleteHostAuthenticationTokenResponse = Message<"gitpod.v1.DeleteHostAuthenticationTokenResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteHostAuthenticationTokenResponse.
 * Use `create(DeleteHostAuthenticationTokenResponseSchema)` to create a new message.
 */
export declare const DeleteHostAuthenticationTokenResponseSchema: GenMessage<DeleteHostAuthenticationTokenResponse>;
/**
 * @generated from message gitpod.v1.FieldValue
 */
export type FieldValue = Message<"gitpod.v1.FieldValue"> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: string value = 2;
     */
    value: string;
};
/**
 * Describes the message gitpod.v1.FieldValue.
 * Use `create(FieldValueSchema)` to create a new message.
 */
export declare const FieldValueSchema: GenMessage<FieldValue>;
/**
 * @generated from message gitpod.v1.FieldValueUpdate
 */
export type FieldValueUpdate = Message<"gitpod.v1.FieldValueUpdate"> & {
    /**
     * key is the field key to update. If the field does not exist, it will be created.
     *
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * value is the new value for the field. If value is empty, the field will be removed.
     *
     * @generated from field: optional string value = 2;
     */
    value?: string;
};
/**
 * Describes the message gitpod.v1.FieldValueUpdate.
 * Use `create(FieldValueUpdateSchema)` to create a new message.
 */
export declare const FieldValueUpdateSchema: GenMessage<FieldValueUpdate>;
/**
 * @generated from message gitpod.v1.GetRunnerConfigurationSchemaRequest
 */
export type GetRunnerConfigurationSchemaRequest = Message<"gitpod.v1.GetRunnerConfigurationSchemaRequest"> & {
    /**
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
};
/**
 * Describes the message gitpod.v1.GetRunnerConfigurationSchemaRequest.
 * Use `create(GetRunnerConfigurationSchemaRequestSchema)` to create a new message.
 */
export declare const GetRunnerConfigurationSchemaRequestSchema: GenMessage<GetRunnerConfigurationSchemaRequest>;
/**
 * @generated from message gitpod.v1.GetRunnerConfigurationSchemaResponse
 */
export type GetRunnerConfigurationSchemaResponse = Message<"gitpod.v1.GetRunnerConfigurationSchemaResponse"> & {
    /**
     * @generated from field: gitpod.v1.RunnerConfigurationSchema schema = 1;
     */
    schema?: RunnerConfigurationSchema;
};
/**
 * Describes the message gitpod.v1.GetRunnerConfigurationSchemaResponse.
 * Use `create(GetRunnerConfigurationSchemaResponseSchema)` to create a new message.
 */
export declare const GetRunnerConfigurationSchemaResponseSchema: GenMessage<GetRunnerConfigurationSchemaResponse>;
/**
 * @generated from message gitpod.v1.CreateSCMIntegrationRequest
 */
export type CreateSCMIntegrationRequest = Message<"gitpod.v1.CreateSCMIntegrationRequest"> & {
    /**
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * scm_id references the scm_id in the runner's configuration schema that this integration is for
     *
     * @generated from field: string scm_id = 2;
     */
    scmId: string;
    /**
     * @generated from field: string host = 3;
     */
    host: string;
    /**
     * oauth_client_id is the OAuth app's client ID, if OAuth is configured.
     * If configured, oauth_plaintext_client_secret must also be set.
     *
     * @generated from field: optional string oauth_client_id = 4;
     */
    oauthClientId?: string;
    /**
     * oauth_plaintext_client_secret is the OAuth app's client secret in clear text.
     * This will first be encrypted with the runner's public key before being stored.
     *
     * @generated from field: optional string oauth_plaintext_client_secret = 5;
     */
    oauthPlaintextClientSecret?: string;
    /**
     * @generated from field: bool pat = 6;
     */
    pat: boolean;
    /**
     * issuer_url can be set to override the authentication provider URL, if it doesn't match the SCM host.
     *
     * @generated from field: optional string issuer_url = 7;
     */
    issuerUrl?: string;
    /**
     * virtual_directory is the virtual directory path for Azure DevOps Server (e.g., "/tfs").
     * This field is only used for Azure DevOps Server SCM integrations and should be empty for other SCM types.
     * Azure DevOps Server APIs work without collection when PAT scope is 'All accessible organizations'.
     *
     * @generated from field: optional string virtual_directory = 8;
     */
    virtualDirectory?: string;
};
/**
 * Describes the message gitpod.v1.CreateSCMIntegrationRequest.
 * Use `create(CreateSCMIntegrationRequestSchema)` to create a new message.
 */
export declare const CreateSCMIntegrationRequestSchema: GenMessage<CreateSCMIntegrationRequest>;
/**
 * @generated from message gitpod.v1.CreateSCMIntegrationResponse
 */
export type CreateSCMIntegrationResponse = Message<"gitpod.v1.CreateSCMIntegrationResponse"> & {
    /**
     * id is a uniquely generated identifier for the SCM integration
     *
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.CreateSCMIntegrationResponse.
 * Use `create(CreateSCMIntegrationResponseSchema)` to create a new message.
 */
export declare const CreateSCMIntegrationResponseSchema: GenMessage<CreateSCMIntegrationResponse>;
/**
 * @generated from message gitpod.v1.SCMIntegrationOAuthConfig
 */
export type SCMIntegrationOAuthConfig = Message<"gitpod.v1.SCMIntegrationOAuthConfig"> & {
    /**
     * client_id is the OAuth app's client ID in clear text.
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * encrypted_client_secret is the OAuth app's secret encrypted with the runner's public key.
     *
     * @generated from field: bytes encrypted_client_secret = 2;
     */
    encryptedClientSecret: Uint8Array;
    /**
     * issuer_url is used to override the authentication provider URL, if it doesn't match the SCM host.
     *
     * +optional if not set, this account is owned by the installation.
     *
     * @generated from field: string issuer_url = 3;
     */
    issuerUrl: string;
};
/**
 * Describes the message gitpod.v1.SCMIntegrationOAuthConfig.
 * Use `create(SCMIntegrationOAuthConfigSchema)` to create a new message.
 */
export declare const SCMIntegrationOAuthConfigSchema: GenMessage<SCMIntegrationOAuthConfig>;
/**
 * @generated from message gitpod.v1.SCMIntegration
 */
export type SCMIntegration = Message<"gitpod.v1.SCMIntegration"> & {
    /**
     *  id is the unique identifier of the SCM integration
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * scm_id references the scm_id in the runner's configuration schema that this integration is for
     *
     * @generated from field: string scm_id = 2;
     */
    scmId: string;
    /**
     * @generated from field: string host = 3;
     */
    host: string;
    /**
     * @generated from field: optional gitpod.v1.SCMIntegrationOAuthConfig oauth = 4;
     */
    oauth?: SCMIntegrationOAuthConfig;
    /**
     * @generated from field: bool pat = 5;
     */
    pat: boolean;
    /**
     * @generated from field: string runner_id = 6;
     */
    runnerId: string;
    /**
     * virtual_directory is the virtual directory path for Azure DevOps Server (e.g., "/tfs").
     * This field is only used for Azure DevOps Server SCM integrations and should be empty for other SCM types.
     * Azure DevOps Server APIs work without collection when PAT scope is 'All accessible organizations'.
     *
     * @generated from field: optional string virtual_directory = 7;
     */
    virtualDirectory?: string;
};
/**
 * Describes the message gitpod.v1.SCMIntegration.
 * Use `create(SCMIntegrationSchema)` to create a new message.
 */
export declare const SCMIntegrationSchema: GenMessage<SCMIntegration>;
/**
 * @generated from message gitpod.v1.GetSCMIntegrationRequest
 */
export type GetSCMIntegrationRequest = Message<"gitpod.v1.GetSCMIntegrationRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.GetSCMIntegrationRequest.
 * Use `create(GetSCMIntegrationRequestSchema)` to create a new message.
 */
export declare const GetSCMIntegrationRequestSchema: GenMessage<GetSCMIntegrationRequest>;
/**
 * @generated from message gitpod.v1.GetSCMIntegrationResponse
 */
export type GetSCMIntegrationResponse = Message<"gitpod.v1.GetSCMIntegrationResponse"> & {
    /**
     * @generated from field: gitpod.v1.SCMIntegration integration = 1;
     */
    integration?: SCMIntegration;
};
/**
 * Describes the message gitpod.v1.GetSCMIntegrationResponse.
 * Use `create(GetSCMIntegrationResponseSchema)` to create a new message.
 */
export declare const GetSCMIntegrationResponseSchema: GenMessage<GetSCMIntegrationResponse>;
/**
 * @generated from message gitpod.v1.ListSCMIntegrationsRequest
 */
export type ListSCMIntegrationsRequest = Message<"gitpod.v1.ListSCMIntegrationsRequest"> & {
    /**
     * pagination contains the pagination options for listing scm integrations
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListSCMIntegrationsRequest.Filter filter = 2;
     */
    filter?: ListSCMIntegrationsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListSCMIntegrationsRequest.
 * Use `create(ListSCMIntegrationsRequestSchema)` to create a new message.
 */
export declare const ListSCMIntegrationsRequestSchema: GenMessage<ListSCMIntegrationsRequest>;
/**
 * @generated from message gitpod.v1.ListSCMIntegrationsRequest.Filter
 */
export type ListSCMIntegrationsRequest_Filter = Message<"gitpod.v1.ListSCMIntegrationsRequest.Filter"> & {
    /**
     * runner_ids filters the response to only SCM integrations of these Runner IDs
     *
     * @generated from field: repeated string runner_ids = 1;
     */
    runnerIds: string[];
};
/**
 * Describes the message gitpod.v1.ListSCMIntegrationsRequest.Filter.
 * Use `create(ListSCMIntegrationsRequest_FilterSchema)` to create a new message.
 */
export declare const ListSCMIntegrationsRequest_FilterSchema: GenMessage<ListSCMIntegrationsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListSCMIntegrationsResponse
 */
export type ListSCMIntegrationsResponse = Message<"gitpod.v1.ListSCMIntegrationsResponse"> & {
    /**
     * pagination contains the pagination options for listing scm integrations
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.SCMIntegration integrations = 2;
     */
    integrations: SCMIntegration[];
};
/**
 * Describes the message gitpod.v1.ListSCMIntegrationsResponse.
 * Use `create(ListSCMIntegrationsResponseSchema)` to create a new message.
 */
export declare const ListSCMIntegrationsResponseSchema: GenMessage<ListSCMIntegrationsResponse>;
/**
 * @generated from message gitpod.v1.UpdateSCMIntegrationRequest
 */
export type UpdateSCMIntegrationRequest = Message<"gitpod.v1.UpdateSCMIntegrationRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * oauth_client_id can be set to update the OAuth app's client ID.
     * If an empty string is set, the OAuth configuration will be removed (regardless
     * of whether a client secret is set), and any existing Host Authentication Tokens for the
     * SCM integration's runner and host that were created using the OAuth app will be deleted.
     * This might lead to users being unable to access their repositories until they re-authenticate.
     *
     * @generated from field: optional string oauth_client_id = 2;
     */
    oauthClientId?: string;
    /**
     * oauth_plaintext_client_secret can be set to update the OAuth app's client secret.
     * The cleartext secret will be encrypted with the runner's public key before being stored.
     *
     * @generated from field: optional string oauth_plaintext_client_secret = 3;
     */
    oauthPlaintextClientSecret?: string;
    /**
     * pat can be set to enable or disable Personal Access Tokens support.
     * When disabling PATs, any existing Host Authentication Tokens for the SCM integration's
     * runner and host that were created using a PAT will be deleted. This might lead to users
     * being unable to access their repositories until they re-authenticate.
     *
     * @generated from field: optional bool pat = 4;
     */
    pat?: boolean;
    /**
     * issuer_url can be set to override the authentication provider URL, if it doesn't match the SCM host.
     *
     * @generated from field: optional string issuer_url = 5;
     */
    issuerUrl?: string;
    /**
     * virtual_directory is the virtual directory path for Azure DevOps Server (e.g., "/tfs").
     * This field is only used for Azure DevOps Server SCM integrations and should be empty for other SCM types.
     * Azure DevOps Server APIs work without collection when PAT scope is 'All accessible organizations'.
     *
     * @generated from field: optional string virtual_directory = 6;
     */
    virtualDirectory?: string;
};
/**
 * Describes the message gitpod.v1.UpdateSCMIntegrationRequest.
 * Use `create(UpdateSCMIntegrationRequestSchema)` to create a new message.
 */
export declare const UpdateSCMIntegrationRequestSchema: GenMessage<UpdateSCMIntegrationRequest>;
/**
 * @generated from message gitpod.v1.UpdateSCMIntegrationResponse
 */
export type UpdateSCMIntegrationResponse = Message<"gitpod.v1.UpdateSCMIntegrationResponse"> & {};
/**
 * Describes the message gitpod.v1.UpdateSCMIntegrationResponse.
 * Use `create(UpdateSCMIntegrationResponseSchema)` to create a new message.
 */
export declare const UpdateSCMIntegrationResponseSchema: GenMessage<UpdateSCMIntegrationResponse>;
/**
 * @generated from message gitpod.v1.DeleteSCMIntegrationRequest
 */
export type DeleteSCMIntegrationRequest = Message<"gitpod.v1.DeleteSCMIntegrationRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.DeleteSCMIntegrationRequest.
 * Use `create(DeleteSCMIntegrationRequestSchema)` to create a new message.
 */
export declare const DeleteSCMIntegrationRequestSchema: GenMessage<DeleteSCMIntegrationRequest>;
/**
 * @generated from message gitpod.v1.DeleteSCMIntegrationResponse
 */
export type DeleteSCMIntegrationResponse = Message<"gitpod.v1.DeleteSCMIntegrationResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteSCMIntegrationResponse.
 * Use `create(DeleteSCMIntegrationResponseSchema)` to create a new message.
 */
export declare const DeleteSCMIntegrationResponseSchema: GenMessage<DeleteSCMIntegrationResponse>;
/**
 * @generated from message gitpod.v1.EnvironmentClass
 */
export type EnvironmentClass = Message<"gitpod.v1.EnvironmentClass"> & {
    /**
     * id is the unique identifier of the environment class
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * display_name is the human readable name of the environment class
     *
     * @generated from field: string display_name = 2;
     */
    displayName: string;
    /**
     * description is a human readable description of the environment class
     *
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * configuration describes the configuration of the environment class
     *
     * @generated from field: repeated gitpod.v1.FieldValue configuration = 4;
     */
    configuration: FieldValue[];
    /**
     * runner_id is the unique identifier of the runner the environment class belongs to
     *
     * @generated from field: string runner_id = 5;
     */
    runnerId: string;
    /**
     * enabled indicates whether the environment class can be used to create
     * new environments.
     *
     * @generated from field: bool enabled = 6;
     */
    enabled: boolean;
};
/**
 * Describes the message gitpod.v1.EnvironmentClass.
 * Use `create(EnvironmentClassSchema)` to create a new message.
 */
export declare const EnvironmentClassSchema: GenMessage<EnvironmentClass>;
/**
 * @generated from message gitpod.v1.CreateEnvironmentClassRequest
 */
export type CreateEnvironmentClassRequest = Message<"gitpod.v1.CreateEnvironmentClassRequest"> & {
    /**
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * @generated from field: string display_name = 2;
     */
    displayName: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: repeated gitpod.v1.FieldValue configuration = 4;
     */
    configuration: FieldValue[];
};
/**
 * Describes the message gitpod.v1.CreateEnvironmentClassRequest.
 * Use `create(CreateEnvironmentClassRequestSchema)` to create a new message.
 */
export declare const CreateEnvironmentClassRequestSchema: GenMessage<CreateEnvironmentClassRequest>;
/**
 * @generated from message gitpod.v1.CreateEnvironmentClassResponse
 */
export type CreateEnvironmentClassResponse = Message<"gitpod.v1.CreateEnvironmentClassResponse"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.CreateEnvironmentClassResponse.
 * Use `create(CreateEnvironmentClassResponseSchema)` to create a new message.
 */
export declare const CreateEnvironmentClassResponseSchema: GenMessage<CreateEnvironmentClassResponse>;
/**
 * @generated from message gitpod.v1.GetEnvironmentClassRequest
 */
export type GetEnvironmentClassRequest = Message<"gitpod.v1.GetEnvironmentClassRequest"> & {
    /**
     * @generated from field: string environment_class_id = 2;
     */
    environmentClassId: string;
};
/**
 * Describes the message gitpod.v1.GetEnvironmentClassRequest.
 * Use `create(GetEnvironmentClassRequestSchema)` to create a new message.
 */
export declare const GetEnvironmentClassRequestSchema: GenMessage<GetEnvironmentClassRequest>;
/**
 * @generated from message gitpod.v1.GetEnvironmentClassResponse
 */
export type GetEnvironmentClassResponse = Message<"gitpod.v1.GetEnvironmentClassResponse"> & {
    /**
     * @generated from field: gitpod.v1.EnvironmentClass environment_class = 1;
     */
    environmentClass?: EnvironmentClass;
};
/**
 * Describes the message gitpod.v1.GetEnvironmentClassResponse.
 * Use `create(GetEnvironmentClassResponseSchema)` to create a new message.
 */
export declare const GetEnvironmentClassResponseSchema: GenMessage<GetEnvironmentClassResponse>;
/**
 * @generated from message gitpod.v1.ListEnvironmentClassesRequest
 */
export type ListEnvironmentClassesRequest = Message<"gitpod.v1.ListEnvironmentClassesRequest"> & {
    /**
     * pagination contains the pagination options for listing environment classes
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListEnvironmentClassesRequest.Filter filter = 2;
     */
    filter?: ListEnvironmentClassesRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListEnvironmentClassesRequest.
 * Use `create(ListEnvironmentClassesRequestSchema)` to create a new message.
 */
export declare const ListEnvironmentClassesRequestSchema: GenMessage<ListEnvironmentClassesRequest>;
/**
 * @generated from message gitpod.v1.ListEnvironmentClassesRequest.Filter
 */
export type ListEnvironmentClassesRequest_Filter = Message<"gitpod.v1.ListEnvironmentClassesRequest.Filter"> & {
    /**
     * runner_ids filters the response to only EnvironmentClasses of these Runner IDs
     *
     * @generated from field: repeated string runner_ids = 1;
     */
    runnerIds: string[];
    /**
     * enabled filters the response to only enabled or disabled environment classes.
     * If not set, all environment classes are returned.
     *
     * @generated from field: optional bool enabled = 2;
     */
    enabled?: boolean;
    /**
     * can_create_environments filters the response to only environment classes that can be used to create new environments
     * by the caller. Unlike enabled, which indicates general availability, this ensures the caller only sees environment classes
     * they are allowed to use.
     *
     * @generated from field: optional bool can_create_environments = 3;
     */
    canCreateEnvironments?: boolean;
    /**
     * runner_kind filters the response to only environment classes from runners of these kinds.
     *
     * @generated from field: repeated gitpod.v1.RunnerKind runner_kinds = 4;
     */
    runnerKinds: RunnerKind[];
    /**
     * runner_providers filters the response to only environment classes from runners of these providers.
     *
     * @generated from field: repeated gitpod.v1.RunnerProvider runner_providers = 5;
     */
    runnerProviders: RunnerProvider[];
};
/**
 * Describes the message gitpod.v1.ListEnvironmentClassesRequest.Filter.
 * Use `create(ListEnvironmentClassesRequest_FilterSchema)` to create a new message.
 */
export declare const ListEnvironmentClassesRequest_FilterSchema: GenMessage<ListEnvironmentClassesRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListEnvironmentClassesResponse
 */
export type ListEnvironmentClassesResponse = Message<"gitpod.v1.ListEnvironmentClassesResponse"> & {
    /**
     * pagination contains the pagination options for listing environment classes
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.EnvironmentClass environment_classes = 2;
     */
    environmentClasses: EnvironmentClass[];
};
/**
 * Describes the message gitpod.v1.ListEnvironmentClassesResponse.
 * Use `create(ListEnvironmentClassesResponseSchema)` to create a new message.
 */
export declare const ListEnvironmentClassesResponseSchema: GenMessage<ListEnvironmentClassesResponse>;
/**
 * @generated from message gitpod.v1.UpdateEnvironmentClassRequest
 */
export type UpdateEnvironmentClassRequest = Message<"gitpod.v1.UpdateEnvironmentClassRequest"> & {
    /**
     * @generated from field: string environment_class_id = 1;
     */
    environmentClassId: string;
    /**
     * @generated from field: optional string display_name = 2;
     */
    displayName?: string;
    /**
     * @generated from field: optional string description = 3;
     */
    description?: string;
    /**
     * @generated from field: optional bool enabled = 4;
     */
    enabled?: boolean;
};
/**
 * Describes the message gitpod.v1.UpdateEnvironmentClassRequest.
 * Use `create(UpdateEnvironmentClassRequestSchema)` to create a new message.
 */
export declare const UpdateEnvironmentClassRequestSchema: GenMessage<UpdateEnvironmentClassRequest>;
/**
 * @generated from message gitpod.v1.UpdateEnvironmentClassResponse
 */
export type UpdateEnvironmentClassResponse = Message<"gitpod.v1.UpdateEnvironmentClassResponse"> & {};
/**
 * Describes the message gitpod.v1.UpdateEnvironmentClassResponse.
 * Use `create(UpdateEnvironmentClassResponseSchema)` to create a new message.
 */
export declare const UpdateEnvironmentClassResponseSchema: GenMessage<UpdateEnvironmentClassResponse>;
/**
 * @generated from message gitpod.v1.ValidateRunnerConfigurationRequest
 */
export type ValidateRunnerConfigurationRequest = Message<"gitpod.v1.ValidateRunnerConfigurationRequest"> & {
    /**
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * @generated from oneof gitpod.v1.ValidateRunnerConfigurationRequest.config
     */
    config: {
        /**
         * @generated from field: gitpod.v1.EnvironmentClass environment_class = 2;
         */
        value: EnvironmentClass;
        case: "environmentClass";
    } | {
        /**
         * @generated from field: gitpod.v1.ValidateRunnerConfigurationRequest.ValidateSCMIntegration scm_integration = 3;
         */
        value: ValidateRunnerConfigurationRequest_ValidateSCMIntegration;
        case: "scmIntegration";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.ValidateRunnerConfigurationRequest.
 * Use `create(ValidateRunnerConfigurationRequestSchema)` to create a new message.
 */
export declare const ValidateRunnerConfigurationRequestSchema: GenMessage<ValidateRunnerConfigurationRequest>;
/**
 * @generated from message gitpod.v1.ValidateRunnerConfigurationRequest.ValidateSCMIntegration
 */
export type ValidateRunnerConfigurationRequest_ValidateSCMIntegration = Message<"gitpod.v1.ValidateRunnerConfigurationRequest.ValidateSCMIntegration"> & {
    /**
     * id is the unique identifier of the SCM integration
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * scm_id references the scm_id in the runner's configuration schema that this integration is for
     *
     * @generated from field: string scm_id = 2;
     */
    scmId: string;
    /**
     * @generated from field: string host = 3;
     */
    host: string;
    /**
     * oauth_client_id is the OAuth app's client ID, if OAuth is configured.
     * If configured, oauth_client_secret must also be set.
     *
     * @generated from field: optional string oauth_client_id = 4;
     */
    oauthClientId?: string;
    /**
     * @generated from oneof gitpod.v1.ValidateRunnerConfigurationRequest.ValidateSCMIntegration.oauth_client_secret
     */
    oauthClientSecret: {
        /**
         * oauth_plaintext_client_secret is the OAuth app's client secret in clear text, if OAuth is configured.
         * This can be set to validate any new client secret before it is encrypted and stored. This value will
         * not be stored and get encrypted with the runner's public key before passing it to the runner.
         *
         * @generated from field: string oauth_plaintext_client_secret = 5;
         */
        value: string;
        case: "oauthPlaintextClientSecret";
    } | {
        /**
         * oauth_encrypted_client_secret is the OAuth app's client secret encrypted with the runner's public key,
         * if OAuth is configured.
         * This can be used to e.g. validate an already encrypted client secret of an existing SCM integration.
         *
         * @generated from field: bytes oauth_encrypted_client_secret = 6;
         */
        value: Uint8Array;
        case: "oauthEncryptedClientSecret";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: bool pat = 7;
     */
    pat: boolean;
    /**
     * issuer_url can be set to override the authentication provider URL, if it doesn't match the SCM host.
     *
     * @generated from field: optional string issuer_url = 8;
     */
    issuerUrl?: string;
    /**
     * virtual_directory is the virtual directory path for Azure DevOps Server (e.g., "/tfs").
     * This field is only used for Azure DevOps Server SCM integrations and should be empty for other SCM types.
     * Azure DevOps Server APIs work without collection when PAT scope is 'All accessible organizations'.
     *
     * @generated from field: optional string virtual_directory = 9;
     */
    virtualDirectory?: string;
};
/**
 * Describes the message gitpod.v1.ValidateRunnerConfigurationRequest.ValidateSCMIntegration.
 * Use `create(ValidateRunnerConfigurationRequest_ValidateSCMIntegrationSchema)` to create a new message.
 */
export declare const ValidateRunnerConfigurationRequest_ValidateSCMIntegrationSchema: GenMessage<ValidateRunnerConfigurationRequest_ValidateSCMIntegration>;
/**
 * @generated from message gitpod.v1.FieldValidationError
 */
export type FieldValidationError = Message<"gitpod.v1.FieldValidationError"> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: string error = 2;
     */
    error: string;
};
/**
 * Describes the message gitpod.v1.FieldValidationError.
 * Use `create(FieldValidationErrorSchema)` to create a new message.
 */
export declare const FieldValidationErrorSchema: GenMessage<FieldValidationError>;
/**
 * @generated from message gitpod.v1.EnvironmentClassValidationResult
 */
export type EnvironmentClassValidationResult = Message<"gitpod.v1.EnvironmentClassValidationResult"> & {
    /**
     * @generated from field: bool valid = 1;
     */
    valid: boolean;
    /**
     * @generated from field: optional string display_name_error = 2;
     */
    displayNameError?: string;
    /**
     * @generated from field: optional string description_error = 3;
     */
    descriptionError?: string;
    /**
     * @generated from field: repeated gitpod.v1.FieldValidationError configuration_errors = 4;
     */
    configurationErrors: FieldValidationError[];
};
/**
 * Describes the message gitpod.v1.EnvironmentClassValidationResult.
 * Use `create(EnvironmentClassValidationResultSchema)` to create a new message.
 */
export declare const EnvironmentClassValidationResultSchema: GenMessage<EnvironmentClassValidationResult>;
/**
 * @generated from message gitpod.v1.SCMIntegrationValidationResult
 */
export type SCMIntegrationValidationResult = Message<"gitpod.v1.SCMIntegrationValidationResult"> & {
    /**
     * @generated from field: bool valid = 1;
     */
    valid: boolean;
    /**
     * @generated from field: optional string scm_id_error = 2;
     */
    scmIdError?: string;
    /**
     * @generated from field: optional string host_error = 3;
     */
    hostError?: string;
    /**
     * @generated from field: optional string oauth_error = 4;
     */
    oauthError?: string;
    /**
     * @generated from field: optional string pat_error = 5;
     */
    patError?: string;
};
/**
 * Describes the message gitpod.v1.SCMIntegrationValidationResult.
 * Use `create(SCMIntegrationValidationResultSchema)` to create a new message.
 */
export declare const SCMIntegrationValidationResultSchema: GenMessage<SCMIntegrationValidationResult>;
/**
 * @generated from message gitpod.v1.ValidateRunnerConfigurationResponse
 */
export type ValidateRunnerConfigurationResponse = Message<"gitpod.v1.ValidateRunnerConfigurationResponse"> & {
    /**
     * @generated from oneof gitpod.v1.ValidateRunnerConfigurationResponse.result
     */
    result: {
        /**
         * @generated from field: gitpod.v1.EnvironmentClassValidationResult environment_class = 1;
         */
        value: EnvironmentClassValidationResult;
        case: "environmentClass";
    } | {
        /**
         * @generated from field: gitpod.v1.SCMIntegrationValidationResult scm_integration = 2;
         */
        value: SCMIntegrationValidationResult;
        case: "scmIntegration";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.ValidateRunnerConfigurationResponse.
 * Use `create(ValidateRunnerConfigurationResponseSchema)` to create a new message.
 */
export declare const ValidateRunnerConfigurationResponseSchema: GenMessage<ValidateRunnerConfigurationResponse>;
/**
 * @generated from message gitpod.v1.RunnerConfigurationSchema
 */
export type RunnerConfigurationSchema = Message<"gitpod.v1.RunnerConfigurationSchema"> & {
    /**
     * The schema version
     *
     * @generated from field: string version = 1;
     */
    version: string;
    /**
     * @generated from field: repeated gitpod.v1.RunnerConfigurationSchema.Field runner_config = 2;
     */
    runnerConfig: RunnerConfigurationSchema_Field[];
    /**
     * @generated from field: repeated gitpod.v1.RunnerConfigurationSchema.Field environment_classes = 3;
     */
    environmentClasses: RunnerConfigurationSchema_Field[];
    /**
     * @generated from field: repeated gitpod.v1.RunnerConfigurationSchema.SCMConfigSchema scm = 4;
     */
    scm: RunnerConfigurationSchema_SCMConfigSchema[];
};
/**
 * Describes the message gitpod.v1.RunnerConfigurationSchema.
 * Use `create(RunnerConfigurationSchemaSchema)` to create a new message.
 */
export declare const RunnerConfigurationSchemaSchema: GenMessage<RunnerConfigurationSchema>;
/**
 * @generated from message gitpod.v1.RunnerConfigurationSchema.StringField
 */
export type RunnerConfigurationSchema_StringField = Message<"gitpod.v1.RunnerConfigurationSchema.StringField"> & {
    /**
     * @generated from field: string default = 1;
     */
    default: string;
    /**
     * @generated from field: string pattern = 2;
     */
    pattern: string;
};
/**
 * Describes the message gitpod.v1.RunnerConfigurationSchema.StringField.
 * Use `create(RunnerConfigurationSchema_StringFieldSchema)` to create a new message.
 */
export declare const RunnerConfigurationSchema_StringFieldSchema: GenMessage<RunnerConfigurationSchema_StringField>;
/**
 * @generated from message gitpod.v1.RunnerConfigurationSchema.BoolField
 */
export type RunnerConfigurationSchema_BoolField = Message<"gitpod.v1.RunnerConfigurationSchema.BoolField"> & {
    /**
     * @generated from field: bool default = 1;
     */
    default: boolean;
};
/**
 * Describes the message gitpod.v1.RunnerConfigurationSchema.BoolField.
 * Use `create(RunnerConfigurationSchema_BoolFieldSchema)` to create a new message.
 */
export declare const RunnerConfigurationSchema_BoolFieldSchema: GenMessage<RunnerConfigurationSchema_BoolField>;
/**
 * @generated from message gitpod.v1.RunnerConfigurationSchema.IntField
 */
export type RunnerConfigurationSchema_IntField = Message<"gitpod.v1.RunnerConfigurationSchema.IntField"> & {
    /**
     * @generated from field: int32 default = 1;
     */
    default: number;
    /**
     * @generated from field: int32 min = 2;
     */
    min: number;
    /**
     * @generated from field: int32 max = 3;
     */
    max: number;
};
/**
 * Describes the message gitpod.v1.RunnerConfigurationSchema.IntField.
 * Use `create(RunnerConfigurationSchema_IntFieldSchema)` to create a new message.
 */
export declare const RunnerConfigurationSchema_IntFieldSchema: GenMessage<RunnerConfigurationSchema_IntField>;
/**
 * @generated from message gitpod.v1.RunnerConfigurationSchema.EnumField
 */
export type RunnerConfigurationSchema_EnumField = Message<"gitpod.v1.RunnerConfigurationSchema.EnumField"> & {
    /**
     * deprecated, will be removed, use default_value instead
     *
     * @generated from field: string default = 1 [deprecated = true];
     * @deprecated
     */
    default: string;
    /**
     * deprecated, will be removed, use possible_values instead
     *
     * @generated from field: repeated string values = 2 [deprecated = true];
     * @deprecated
     */
    values: string[];
    /**
     * @generated from field: gitpod.v1.RunnerConfigurationSchema.EnumField.Value default_value = 3;
     */
    defaultValue?: RunnerConfigurationSchema_EnumField_Value;
    /**
     * @generated from field: repeated gitpod.v1.RunnerConfigurationSchema.EnumField.Value possible_values = 4;
     */
    possibleValues: RunnerConfigurationSchema_EnumField_Value[];
};
/**
 * Describes the message gitpod.v1.RunnerConfigurationSchema.EnumField.
 * Use `create(RunnerConfigurationSchema_EnumFieldSchema)` to create a new message.
 */
export declare const RunnerConfigurationSchema_EnumFieldSchema: GenMessage<RunnerConfigurationSchema_EnumField>;
/**
 * @generated from message gitpod.v1.RunnerConfigurationSchema.EnumField.Value
 */
export type RunnerConfigurationSchema_EnumField_Value = Message<"gitpod.v1.RunnerConfigurationSchema.EnumField.Value"> & {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string subtitle = 2;
     */
    subtitle: string;
    /**
     * @generated from field: string detail = 3;
     */
    detail: string;
};
/**
 * Describes the message gitpod.v1.RunnerConfigurationSchema.EnumField.Value.
 * Use `create(RunnerConfigurationSchema_EnumField_ValueSchema)` to create a new message.
 */
export declare const RunnerConfigurationSchema_EnumField_ValueSchema: GenMessage<RunnerConfigurationSchema_EnumField_Value>;
/**
 * @generated from message gitpod.v1.RunnerConfigurationSchema.DisplayField
 */
export type RunnerConfigurationSchema_DisplayField = Message<"gitpod.v1.RunnerConfigurationSchema.DisplayField"> & {
    /**
     * @generated from field: string default = 1;
     */
    default: string;
};
/**
 * Describes the message gitpod.v1.RunnerConfigurationSchema.DisplayField.
 * Use `create(RunnerConfigurationSchema_DisplayFieldSchema)` to create a new message.
 */
export declare const RunnerConfigurationSchema_DisplayFieldSchema: GenMessage<RunnerConfigurationSchema_DisplayField>;
/**
 * @generated from message gitpod.v1.RunnerConfigurationSchema.Field
 */
export type RunnerConfigurationSchema_Field = Message<"gitpod.v1.RunnerConfigurationSchema.Field"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: bool required = 4;
     */
    required: boolean;
    /**
     * @generated from field: bool secret = 5;
     */
    secret: boolean;
    /**
     * @generated from oneof gitpod.v1.RunnerConfigurationSchema.Field.type
     */
    type: {
        /**
         * @generated from field: gitpod.v1.RunnerConfigurationSchema.StringField string = 6;
         */
        value: RunnerConfigurationSchema_StringField;
        case: "string";
    } | {
        /**
         * @generated from field: gitpod.v1.RunnerConfigurationSchema.BoolField bool = 7;
         */
        value: RunnerConfigurationSchema_BoolField;
        case: "bool";
    } | {
        /**
         * @generated from field: gitpod.v1.RunnerConfigurationSchema.IntField int = 8;
         */
        value: RunnerConfigurationSchema_IntField;
        case: "int";
    } | {
        /**
         * @generated from field: gitpod.v1.RunnerConfigurationSchema.EnumField enum = 9;
         */
        value: RunnerConfigurationSchema_EnumField;
        case: "enum";
    } | {
        /**
         * @generated from field: gitpod.v1.RunnerConfigurationSchema.DisplayField display = 10;
         */
        value: RunnerConfigurationSchema_DisplayField;
        case: "display";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gitpod.v1.RunnerConfigurationSchema.Field.
 * Use `create(RunnerConfigurationSchema_FieldSchema)` to create a new message.
 */
export declare const RunnerConfigurationSchema_FieldSchema: GenMessage<RunnerConfigurationSchema_Field>;
/**
 * @generated from message gitpod.v1.RunnerConfigurationSchema.OAuth
 */
export type RunnerConfigurationSchema_OAuth = Message<"gitpod.v1.RunnerConfigurationSchema.OAuth"> & {
    /**
     * callback_url is the URL the OAuth app will redirect to after the user has authenticated.
     *
     * @generated from field: string callback_url = 1;
     */
    callbackUrl: string;
};
/**
 * Describes the message gitpod.v1.RunnerConfigurationSchema.OAuth.
 * Use `create(RunnerConfigurationSchema_OAuthSchema)` to create a new message.
 */
export declare const RunnerConfigurationSchema_OAuthSchema: GenMessage<RunnerConfigurationSchema_OAuth>;
/**
 * @generated from message gitpod.v1.RunnerConfigurationSchema.PersonalAccessToken
 */
export type RunnerConfigurationSchema_PersonalAccessToken = Message<"gitpod.v1.RunnerConfigurationSchema.PersonalAccessToken"> & {
    /**
     * description is a human-readable description of the PAT.
     *
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * docs_link is a link to the documentation on how to create a PAT for this SCM system.
     *
     * @generated from field: string docs_link = 2;
     */
    docsLink: string;
};
/**
 * Describes the message gitpod.v1.RunnerConfigurationSchema.PersonalAccessToken.
 * Use `create(RunnerConfigurationSchema_PersonalAccessTokenSchema)` to create a new message.
 */
export declare const RunnerConfigurationSchema_PersonalAccessTokenSchema: GenMessage<RunnerConfigurationSchema_PersonalAccessToken>;
/**
 * @generated from message gitpod.v1.RunnerConfigurationSchema.SCMConfigSchema
 */
export type RunnerConfigurationSchema_SCMConfigSchema = Message<"gitpod.v1.RunnerConfigurationSchema.SCMConfigSchema"> & {
    /**
     * @generated from field: string scm_id = 1;
     */
    scmId: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: repeated string default_hosts = 3;
     */
    defaultHosts: string[];
    /**
     * @generated from field: gitpod.v1.RunnerConfigurationSchema.OAuth oauth = 4;
     */
    oauth?: RunnerConfigurationSchema_OAuth;
    /**
     * @generated from field: gitpod.v1.RunnerConfigurationSchema.PersonalAccessToken pat = 5;
     */
    pat?: RunnerConfigurationSchema_PersonalAccessToken;
};
/**
 * Describes the message gitpod.v1.RunnerConfigurationSchema.SCMConfigSchema.
 * Use `create(RunnerConfigurationSchema_SCMConfigSchemaSchema)` to create a new message.
 */
export declare const RunnerConfigurationSchema_SCMConfigSchemaSchema: GenMessage<RunnerConfigurationSchema_SCMConfigSchema>;
/**
 * LLMIntegrationRequestHeader represents a custom header to be passed to LLM requests.
 * The value field contains:
 * - Plain text values in update requests (will be encrypted server-side).
 * - Encrypted binary values on read requests (decrypt directly to get original value).
 *
 * @generated from message gitpod.v1.LLMIntegrationRequestHeader
 */
export type LLMIntegrationRequestHeader = Message<"gitpod.v1.LLMIntegrationRequestHeader"> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: bytes value = 2;
     */
    value: Uint8Array;
    /**
     * header_type controls how value is interpreted. Unspecified values are
     * treated as literals for backward compatibility.
     *
     * @generated from field: gitpod.v1.LLMIntegrationRequestHeaderType header_type = 3;
     */
    headerType: LLMIntegrationRequestHeaderType;
};
/**
 * Describes the message gitpod.v1.LLMIntegrationRequestHeader.
 * Use `create(LLMIntegrationRequestHeaderSchema)` to create a new message.
 */
export declare const LLMIntegrationRequestHeaderSchema: GenMessage<LLMIntegrationRequestHeader>;
/**
 * @generated from message gitpod.v1.LLMIntegration
 */
export type LLMIntegration = Message<"gitpod.v1.LLMIntegration"> & {
    /**
     *  id is the unique identifier of the LLM integration
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string runner_id = 2;
     */
    runnerId: string;
    /**
     * models represents the supported LLM models for this integration
     *
     * @generated from field: repeated gitpod.v1.SupportedModel models = 3;
     */
    models: SupportedModel[];
    /**
     * @generated from field: string endpoint = 4;
     */
    endpoint: string;
    /**
     * encrypted_api_key is the LLM provider's API key encrypted with the runner's public key.
     *
     * @generated from field: bytes encrypted_api_key = 5;
     */
    encryptedApiKey: Uint8Array;
    /**
     * the maximum number of tokens to generate before stopping. 0 is a model default.
     *
     * @generated from field: uint64 max_tokens = 6;
     */
    maxTokens: bigint;
    /**
     * phase represents the current status/phase of the LLM integration
     *
     * @generated from field: gitpod.v1.LLMIntegrationPhase phase = 7;
     */
    phase: LLMIntegrationPhase;
    /**
     * phase_reason provides explanation for the current phase (e.g., "insufficient funds", "user disabled")
     *
     * @generated from field: string phase_reason = 8;
     */
    phaseReason: string;
    /**
     * request_headers contains optional headers for the LLM integration.
     *
     * @generated from field: repeated gitpod.v1.LLMIntegrationRequestHeader request_headers = 9;
     */
    requestHeaders: LLMIntegrationRequestHeader[];
    /**
     * provider identifies the governance provider family for this integration.
     *
     * @generated from field: gitpod.v1.LLMProvider provider = 11;
     */
    provider: LLMProvider;
};
/**
 * Describes the message gitpod.v1.LLMIntegration.
 * Use `create(LLMIntegrationSchema)` to create a new message.
 */
export declare const LLMIntegrationSchema: GenMessage<LLMIntegration>;
/**
 * @generated from message gitpod.v1.CreateLLMIntegrationRequest
 */
export type CreateLLMIntegrationRequest = Message<"gitpod.v1.CreateLLMIntegrationRequest"> & {
    /**
     * @generated from field: string runner_id = 1;
     */
    runnerId: string;
    /**
     * models represents the LLM models this integration supports
     *
     * @generated from field: repeated gitpod.v1.SupportedModel models = 2;
     */
    models: SupportedModel[];
    /**
     * @generated from field: string endpoint = 3;
     */
    endpoint: string;
    /**
     * api_key is the LLM provider's API key.
     *
     * @generated from field: string api_key = 4;
     */
    apiKey: string;
    /**
     * max_tokens is the maximum number of tokens to generate before stopping.
     * If set to 0, the model's default will be used.
     *
     * @generated from field: uint64 max_tokens = 5;
     */
    maxTokens: bigint;
};
/**
 * Describes the message gitpod.v1.CreateLLMIntegrationRequest.
 * Use `create(CreateLLMIntegrationRequestSchema)` to create a new message.
 */
export declare const CreateLLMIntegrationRequestSchema: GenMessage<CreateLLMIntegrationRequest>;
/**
 * @generated from message gitpod.v1.CreateLLMIntegrationResponse
 */
export type CreateLLMIntegrationResponse = Message<"gitpod.v1.CreateLLMIntegrationResponse"> & {
    /**
     * id is a uniquely generated identifier for the LLM integration
     *
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.CreateLLMIntegrationResponse.
 * Use `create(CreateLLMIntegrationResponseSchema)` to create a new message.
 */
export declare const CreateLLMIntegrationResponseSchema: GenMessage<CreateLLMIntegrationResponse>;
/**
 * @generated from message gitpod.v1.GetLLMIntegrationRequest
 */
export type GetLLMIntegrationRequest = Message<"gitpod.v1.GetLLMIntegrationRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.GetLLMIntegrationRequest.
 * Use `create(GetLLMIntegrationRequestSchema)` to create a new message.
 */
export declare const GetLLMIntegrationRequestSchema: GenMessage<GetLLMIntegrationRequest>;
/**
 * @generated from message gitpod.v1.GetLLMIntegrationResponse
 */
export type GetLLMIntegrationResponse = Message<"gitpod.v1.GetLLMIntegrationResponse"> & {
    /**
     * @generated from field: gitpod.v1.LLMIntegration integration = 1;
     */
    integration?: LLMIntegration;
};
/**
 * Describes the message gitpod.v1.GetLLMIntegrationResponse.
 * Use `create(GetLLMIntegrationResponseSchema)` to create a new message.
 */
export declare const GetLLMIntegrationResponseSchema: GenMessage<GetLLMIntegrationResponse>;
/**
 * @generated from message gitpod.v1.ListLLMIntegrationsRequest
 */
export type ListLLMIntegrationsRequest = Message<"gitpod.v1.ListLLMIntegrationsRequest"> & {
    /**
     * pagination contains the pagination options for listing scm integrations
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListLLMIntegrationsRequest.Filter filter = 2;
     */
    filter?: ListLLMIntegrationsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListLLMIntegrationsRequest.
 * Use `create(ListLLMIntegrationsRequestSchema)` to create a new message.
 */
export declare const ListLLMIntegrationsRequestSchema: GenMessage<ListLLMIntegrationsRequest>;
/**
 * @generated from message gitpod.v1.ListLLMIntegrationsRequest.Filter
 */
export type ListLLMIntegrationsRequest_Filter = Message<"gitpod.v1.ListLLMIntegrationsRequest.Filter"> & {
    /**
     * runner_ids filters the response to only LLM integrations of these Runner IDs
     *
     * @generated from field: repeated string runner_ids = 1;
     */
    runnerIds: string[];
};
/**
 * Describes the message gitpod.v1.ListLLMIntegrationsRequest.Filter.
 * Use `create(ListLLMIntegrationsRequest_FilterSchema)` to create a new message.
 */
export declare const ListLLMIntegrationsRequest_FilterSchema: GenMessage<ListLLMIntegrationsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListLLMIntegrationsResponse
 */
export type ListLLMIntegrationsResponse = Message<"gitpod.v1.ListLLMIntegrationsResponse"> & {
    /**
     * pagination contains the pagination options for listing llm integrations
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.LLMIntegration integrations = 2;
     */
    integrations: LLMIntegration[];
    /**
     * Deprecated: Use ona_intelligence_providers together with
     * LLMIntegration.provider instead.
     *
     * @generated from field: bool llm_managed_by_ona = 3 [deprecated = true];
     * @deprecated
     */
    llmManagedByOna: boolean;
    /**
     * ona_intelligence_providers lists the provider families governed by Ona
     * Intelligence for the organization that owns the requested runner.
     *
     * @generated from field: repeated gitpod.v1.LLMProvider ona_intelligence_providers = 4;
     */
    onaIntelligenceProviders: LLMProvider[];
};
/**
 * Describes the message gitpod.v1.ListLLMIntegrationsResponse.
 * Use `create(ListLLMIntegrationsResponseSchema)` to create a new message.
 */
export declare const ListLLMIntegrationsResponseSchema: GenMessage<ListLLMIntegrationsResponse>;
/**
 * @generated from message gitpod.v1.UpdateLLMIntegrationRequest
 */
export type UpdateLLMIntegrationRequest = Message<"gitpod.v1.UpdateLLMIntegrationRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: optional string endpoint = 2;
     */
    endpoint?: string;
    /**
     * models can be updated to change the supported LLM models
     * Set list of supported models to the given list.
     * Empty list means no updates to the models.
     *
     * @generated from field: repeated gitpod.v1.SupportedModel models = 3;
     */
    models: SupportedModel[];
    /**
     * api_key can be set to update the LLM provider's API key.
     * The cleartext secret will be encrypted with the runner's public key before being stored.
     *
     * @generated from field: optional string api_key = 4;
     */
    apiKey?: string;
    /**
     * max_tokens can be set to update the maximum number of tokens to generate before stopping.
     *
     * @generated from field: optional uint64 max_tokens = 5;
     */
    maxTokens?: bigint;
    /**
     * phase can be set to update the status/phase of the LLM integration
     *
     * @generated from field: optional gitpod.v1.LLMIntegrationPhase phase = 6;
     */
    phase?: LLMIntegrationPhase;
    /**
     * request_headers set optional headers for the LLM integration.
     *
     * @generated from field: repeated gitpod.v1.LLMIntegrationRequestHeader request_headers = 7;
     */
    requestHeaders: LLMIntegrationRequestHeader[];
};
/**
 * Describes the message gitpod.v1.UpdateLLMIntegrationRequest.
 * Use `create(UpdateLLMIntegrationRequestSchema)` to create a new message.
 */
export declare const UpdateLLMIntegrationRequestSchema: GenMessage<UpdateLLMIntegrationRequest>;
/**
 * @generated from message gitpod.v1.UpdateLLMIntegrationResponse
 */
export type UpdateLLMIntegrationResponse = Message<"gitpod.v1.UpdateLLMIntegrationResponse"> & {};
/**
 * Describes the message gitpod.v1.UpdateLLMIntegrationResponse.
 * Use `create(UpdateLLMIntegrationResponseSchema)` to create a new message.
 */
export declare const UpdateLLMIntegrationResponseSchema: GenMessage<UpdateLLMIntegrationResponse>;
/**
 * @generated from message gitpod.v1.DeleteLLMIntegrationRequest
 */
export type DeleteLLMIntegrationRequest = Message<"gitpod.v1.DeleteLLMIntegrationRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * force skips dependency checks and deletes the integration even if it would
     * leave no enabled integration for a model in use
     *
     * @generated from field: bool force = 2;
     */
    force: boolean;
};
/**
 * Describes the message gitpod.v1.DeleteLLMIntegrationRequest.
 * Use `create(DeleteLLMIntegrationRequestSchema)` to create a new message.
 */
export declare const DeleteLLMIntegrationRequestSchema: GenMessage<DeleteLLMIntegrationRequest>;
/**
 * @generated from message gitpod.v1.DeleteLLMIntegrationResponse
 */
export type DeleteLLMIntegrationResponse = Message<"gitpod.v1.DeleteLLMIntegrationResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteLLMIntegrationResponse.
 * Use `create(DeleteLLMIntegrationResponseSchema)` to create a new message.
 */
export declare const DeleteLLMIntegrationResponseSchema: GenMessage<DeleteLLMIntegrationResponse>;
/**
 * @generated from enum gitpod.v1.HostAuthenticationTokenSource
 */
export declare enum HostAuthenticationTokenSource {
    /**
     * @generated from enum value: HOST_AUTHENTICATION_TOKEN_SOURCE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: HOST_AUTHENTICATION_TOKEN_SOURCE_OAUTH = 1;
     */
    OAUTH = 1,
    /**
     * @generated from enum value: HOST_AUTHENTICATION_TOKEN_SOURCE_PAT = 2;
     */
    PAT = 2
}
/**
 * Describes the enum gitpod.v1.HostAuthenticationTokenSource.
 */
export declare const HostAuthenticationTokenSourceSchema: GenEnum<HostAuthenticationTokenSource>;
/**
 * RunnerKind represents the kind of a runner
 *
 * @generated from enum gitpod.v1.RunnerKind
 */
export declare enum RunnerKind {
    /**
     * Default zero value. Do not set explicitly.
     *
     * @generated from enum value: RUNNER_KIND_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Deprecated: Local runners are no longer supported.
     * Use RUNNER_PROVIDER_AWS_EC2 or RUNNER_PROVIDER_GCP instead.
     *
     * @generated from enum value: RUNNER_KIND_LOCAL = 1 [deprecated = true];
     * @deprecated
     */
    LOCAL = 1,
    /**
     * The runner is a remote runner
     *
     * @generated from enum value: RUNNER_KIND_REMOTE = 2;
     */
    REMOTE = 2,
    /**
     * The runner is a system-managed runner that holds shared configuration for local runners.
     * Every organization automatically has one of these runners, and it cannot be deleted nor
     * can new runners of this kind be created.
     * Organization admins can update this runner to change the shared configuration, including:
     * - SCM Integrations. All local runners will use these integrations.
     * - DesiredPhase. Can be set to STOPPED to disable all local runners.
     * This runner cannot be used to run environments.
     *
     * @generated from enum value: RUNNER_KIND_LOCAL_CONFIGURATION = 3;
     */
    LOCAL_CONFIGURATION = 3
}
/**
 * Describes the enum gitpod.v1.RunnerKind.
 */
export declare const RunnerKindSchema: GenEnum<RunnerKind>;
/**
 * RunnerProvider identifies the specific implementation type of a runner.
 * Each provider maps to a specific kind of runner (local or remote), as
 * specified below for each provider.
 *
 * @generated from enum gitpod.v1.RunnerProvider
 */
export declare enum RunnerProvider {
    /**
     * @generated from enum value: RUNNER_PROVIDER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * AWS EC2 based runner that deploys as a CloudFormation stack
     * Kind: RUNNER_KIND_REMOTE
     *
     * @generated from enum value: RUNNER_PROVIDER_AWS_EC2 = 1;
     */
    AWS_EC2 = 1,
    /**
     * Deprecated: Is no longer supported.
     * Use RUNNER_PROVIDER_AWS_EC2 or RUNNER_PROVIDER_GCP instead.
     *
     * @generated from enum value: RUNNER_PROVIDER_LINUX_HOST = 2 [deprecated = true];
     * @deprecated
     */
    LINUX_HOST = 2,
    /**
     * Deprecated: Is no longer supported.
     * Use RUNNER_PROVIDER_AWS_EC2 or RUNNER_PROVIDER_GCP instead.
     *
     * @generated from enum value: RUNNER_PROVIDER_DESKTOP_MAC = 3 [deprecated = true];
     * @deprecated
     */
    DESKTOP_MAC = 3,
    /**
     * Internal use only. A runner managed by the Ona-operated RunnerManager.
     * Do not use when creating your own runners.
     *
     * @generated from enum value: RUNNER_PROVIDER_MANAGED = 4;
     */
    MANAGED = 4,
    /**
     * Runner for GCP platform deployed using terraform
     * Kind: RUNNER_KIND_REMOTE
     *
     * @generated from enum value: RUNNER_PROVIDER_GCP = 5;
     */
    GCP = 5,
    /**
     * Internal use only. A development runner for testing within an Ona environment.
     * Do not use when creating your own runners.
     *
     * @generated from enum value: RUNNER_PROVIDER_DEV_AGENT = 6;
     */
    DEV_AGENT = 6
}
/**
 * Describes the enum gitpod.v1.RunnerProvider.
 */
export declare const RunnerProviderSchema: GenEnum<RunnerProvider>;
/**
 * LLMIntegrationRequestHeaderType describes how an LLM integration request
 * header value is resolved.
 *
 * @generated from enum gitpod.v1.LLMIntegrationRequestHeaderType
 */
export declare enum LLMIntegrationRequestHeaderType {
    /**
     * Existing untyped headers are literal values.
     *
     * @generated from enum value: LLM_INTEGRATION_REQUEST_HEADER_TYPE_UNSPECIFIED = 0;
     */
    LLM_INTEGRATION_REQUEST_HEADER_TYPE_UNSPECIFIED = 0,
    /**
     * The configured value is sent as-is when the request does not already
     * contain the header.
     *
     * @generated from enum value: LLM_INTEGRATION_REQUEST_HEADER_TYPE_LITERAL = 1;
     */
    LLM_INTEGRATION_REQUEST_HEADER_TYPE_LITERAL = 1,
    /**
     * The configured value is a CEL expression evaluated by a supported agent.
     *
     * @generated from enum value: LLM_INTEGRATION_REQUEST_HEADER_TYPE_CEL_EXPRESSION = 2;
     */
    LLM_INTEGRATION_REQUEST_HEADER_TYPE_CEL_EXPRESSION = 2
}
/**
 * Describes the enum gitpod.v1.LLMIntegrationRequestHeaderType.
 */
export declare const LLMIntegrationRequestHeaderTypeSchema: GenEnum<LLMIntegrationRequestHeaderType>;
/**
 * @generated from enum gitpod.v1.LLMProvider
 */
export declare enum LLMProvider {
    /**
     * @generated from enum value: LLM_PROVIDER_UNSPECIFIED = 0;
     */
    LLM_PROVIDER_UNSPECIFIED = 0,
    /**
     * Anthropic models, including Claude-family models served via Anthropic,
     * Bedrock, or Vertex endpoints.
     *
     * @generated from enum value: LLM_PROVIDER_ANTHROPIC = 1;
     */
    LLM_PROVIDER_ANTHROPIC = 1,
    /**
     * OpenAI models, including OPENAI_AUTO and OpenAI-compatible endpoints.
     *
     * @generated from enum value: LLM_PROVIDER_OPENAI = 2;
     */
    LLM_PROVIDER_OPENAI = 2
}
/**
 * Describes the enum gitpod.v1.LLMProvider.
 */
export declare const LLMProviderSchema: GenEnum<LLMProvider>;
/**
 * @generated from service gitpod.v1.RunnerConfigurationService
 */
export declare const RunnerConfigurationService: GenService<{
    /**
     * Creates a new authentication token for accessing remote hosts.
     *
     * Use this method to:
     * - Set up SCM authentication
     * - Configure OAuth credentials
     * - Manage PAT tokens
     *
     * ### Examples
     *
     * - Create OAuth token:
     *
     *   Creates a new OAuth-based authentication token.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   userId: "f53d2330-3795-4c5d-a1f3-453121af9c60"
     *   host: "github.com"
     *   token: "gho_xxxxxxxxxxxx"
     *   source: HOST_AUTHENTICATION_TOKEN_SOURCE_OAUTH
     *   expiresAt: "2024-12-31T23:59:59Z"
     *   refreshToken: "ghr_xxxxxxxxxxxx"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.CreateHostAuthenticationToken
     */
    createHostAuthenticationToken: {
        methodKind: "unary";
        input: typeof CreateHostAuthenticationTokenRequestSchema;
        output: typeof CreateHostAuthenticationTokenResponseSchema;
    };
    /**
     * Gets details about a specific host authentication token.
     *
     * Use this method to:
     * - View token information
     * - Check token expiration
     * - Verify token validity
     *
     * ### Examples
     *
     * - Get token details:
     *
     *   Retrieves information about a specific token.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.GetHostAuthenticationToken
     */
    getHostAuthenticationToken: {
        methodKind: "unary";
        input: typeof GetHostAuthenticationTokenRequestSchema;
        output: typeof GetHostAuthenticationTokenResponseSchema;
    };
    /**
     * Lists host authentication tokens with optional filtering.
     *
     * Use this method to:
     * - View all tokens
     * - Filter by runner or user
     * - Monitor token status
     *
     * ### Examples
     *
     * - List all tokens:
     *
     *   Shows all tokens with pagination.
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - Filter by runner:
     *
     *   Lists tokens for a specific runner.
     *
     *   ```yaml
     *   filter:
     *     runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.ListHostAuthenticationTokens
     */
    listHostAuthenticationTokens: {
        methodKind: "unary";
        input: typeof ListHostAuthenticationTokensRequestSchema;
        output: typeof ListHostAuthenticationTokensResponseSchema;
    };
    /**
     * Updates an existing host authentication token.
     *
     * Use this method to:
     * - Refresh token values
     * - Update expiration
     * - Modify token settings
     *
     * ### Examples
     *
     * - Update token:
     *
     *   Updates token value and expiration.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   token: "gho_xxxxxxxxxxxx"
     *   expiresAt: "2024-12-31T23:59:59Z"
     *   refreshToken: "ghr_xxxxxxxxxxxx"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.UpdateHostAuthenticationToken
     */
    updateHostAuthenticationToken: {
        methodKind: "unary";
        input: typeof UpdateHostAuthenticationTokenRequestSchema;
        output: typeof UpdateHostAuthenticationTokenResponseSchema;
    };
    /**
     * Deletes a host authentication token.
     *
     * Use this method to:
     * - Remove unused tokens
     * - Revoke access
     * - Clean up expired tokens
     *
     * ### Examples
     *
     * - Delete token:
     *
     *   Permanently removes a token.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.DeleteHostAuthenticationToken
     */
    deleteHostAuthenticationToken: {
        methodKind: "unary";
        input: typeof DeleteHostAuthenticationTokenRequestSchema;
        output: typeof DeleteHostAuthenticationTokenResponseSchema;
    };
    /**
     * Gets the latest runner configuration schema.
     *
     * Use this method to:
     * - View available settings
     * - Check configuration options
     * - Validate configurations
     *
     * ### Examples
     *
     * - Get schema:
     *
     *   Retrieves configuration schema for a runner.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.GetRunnerConfigurationSchema
     */
    getRunnerConfigurationSchema: {
        methodKind: "unary";
        input: typeof GetRunnerConfigurationSchemaRequestSchema;
        output: typeof GetRunnerConfigurationSchemaResponseSchema;
    };
    /**
     * Creates a new SCM integration for a runner.
     *
     * Use this method to:
     * - Configure source control access
     * - Set up repository integrations
     * - Enable code synchronization
     *
     * ### Examples
     *
     * - Create GitHub integration:
     *
     *   Sets up GitHub SCM integration.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   scmId: "github"
     *   host: "github.com"
     *   oauthClientId: "client_id"
     *   oauthPlaintextClientSecret: "client_secret"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.CreateSCMIntegration
     */
    createSCMIntegration: {
        methodKind: "unary";
        input: typeof CreateSCMIntegrationRequestSchema;
        output: typeof CreateSCMIntegrationResponseSchema;
    };
    /**
     * Gets details about a specific SCM integration.
     *
     * Use this method to:
     * - View integration settings
     * - Check integration status
     * - Verify configuration
     *
     * ### Examples
     *
     * - Get integration details:
     *
     *   Retrieves information about a specific integration.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.GetSCMIntegration
     */
    getSCMIntegration: {
        methodKind: "unary";
        input: typeof GetSCMIntegrationRequestSchema;
        output: typeof GetSCMIntegrationResponseSchema;
    };
    /**
     * Lists SCM integrations for a runner.
     *
     * Use this method to:
     * - View all integrations
     * - Monitor integration status
     * - Check available SCMs
     *
     * ### Examples
     *
     * - List integrations:
     *
     *   Shows all SCM integrations.
     *
     *   ```yaml
     *   filter:
     *     runnerIds: ["d2c94c27-3b76-4a42-b88c-95a85e392c68"]
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.ListSCMIntegrations
     */
    listSCMIntegrations: {
        methodKind: "unary";
        input: typeof ListSCMIntegrationsRequestSchema;
        output: typeof ListSCMIntegrationsResponseSchema;
    };
    /**
     * Updates an existing SCM integration.
     *
     * Use this method to:
     * - Modify integration settings
     * - Update credentials
     * - Change configuration
     *
     * ### Examples
     *
     * - Update integration:
     *
     *   Updates OAuth credentials.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   oauthClientId: "new_client_id"
     *   oauthPlaintextClientSecret: "new_client_secret"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.UpdateSCMIntegration
     */
    updateSCMIntegration: {
        methodKind: "unary";
        input: typeof UpdateSCMIntegrationRequestSchema;
        output: typeof UpdateSCMIntegrationResponseSchema;
    };
    /**
     * Deletes an SCM integration.
     *
     * Use this method to:
     * - Remove unused integrations
     * - Clean up configurations
     * - Revoke SCM access
     *
     * ### Examples
     *
     * - Delete integration:
     *
     *   Removes an SCM integration.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.DeleteSCMIntegration
     */
    deleteSCMIntegration: {
        methodKind: "unary";
        input: typeof DeleteSCMIntegrationRequestSchema;
        output: typeof DeleteSCMIntegrationResponseSchema;
    };
    /**
     * Creates a new environment class for a runner.
     *
     * Use this method to:
     * - Define compute resources
     * - Configure environment settings
     * - Set up runtime options
     *
     * ### Examples
     *
     * - Create environment class:
     *
     *   Creates a new environment configuration.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   displayName: "Large Instance"
     *   description: "8 CPU, 16GB RAM"
     *   configuration:
     *     - key: "cpu"
     *       value: "8"
     *     - key: "memory"
     *       value: "16384"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.CreateEnvironmentClass
     */
    createEnvironmentClass: {
        methodKind: "unary";
        input: typeof CreateEnvironmentClassRequestSchema;
        output: typeof CreateEnvironmentClassResponseSchema;
    };
    /**
     * Gets details about a specific environment class.
     *
     * Use this method to:
     * - View class configuration
     * - Check resource settings
     * - Verify availability
     *
     * ### Examples
     *
     * - Get class details:
     *
     *   Retrieves information about a specific class.
     *
     *   ```yaml
     *   environmentClassId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.GetEnvironmentClass
     */
    getEnvironmentClass: {
        methodKind: "unary";
        input: typeof GetEnvironmentClassRequestSchema;
        output: typeof GetEnvironmentClassResponseSchema;
    };
    /**
     * Lists environment classes with optional filtering.
     *
     * Use this method to:
     * - View available classes
     * - Filter by capability
     * - Check enabled status
     *
     * ### Examples
     *
     * - List all classes:
     *
     *   Shows all environment classes.
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - Filter enabled classes:
     *
     *   Lists only enabled environment classes.
     *
     *   ```yaml
     *   filter:
     *     enabled: true
     *   pagination:
     *     pageSize: 20
     *   ```
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.ListEnvironmentClasses
     */
    listEnvironmentClasses: {
        methodKind: "unary";
        input: typeof ListEnvironmentClassesRequestSchema;
        output: typeof ListEnvironmentClassesResponseSchema;
    };
    /**
     * Updates an environment class.
     *
     * Use this method to:
     * - Modify class settings
     * - Update resource limits
     * - Change availability
     *
     * ### Examples
     *
     * - Update class:
     *
     *   Changes class configuration.
     *
     *   ```yaml
     *   environmentClassId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   displayName: "Updated Large Instance"
     *   description: "16 CPU, 32GB RAM"
     *   enabled: true
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.UpdateEnvironmentClass
     */
    updateEnvironmentClass: {
        methodKind: "unary";
        input: typeof UpdateEnvironmentClassRequestSchema;
        output: typeof UpdateEnvironmentClassResponseSchema;
    };
    /**
     * Validates a runner configuration.
     *
     * Use this method to:
     * - Check configuration validity
     * - Verify integration settings
     * - Validate environment classes
     *
     * ### Examples
     *
     * - Validate SCM integration:
     *
     *   Checks if an SCM integration is valid.
     *
     *   ```yaml
     *   runnerId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   scmIntegration:
     *     id: "integration-id"
     *     scmId: "github"
     *     host: "github.com"
     *     oauthClientId: "client_id"
     *     oauthPlaintextClientSecret: "client_secret"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.ValidateRunnerConfiguration
     */
    validateRunnerConfiguration: {
        methodKind: "unary";
        input: typeof ValidateRunnerConfigurationRequestSchema;
        output: typeof ValidateRunnerConfigurationResponseSchema;
    };
    /**
     * Creates a new LLM integration for a runner.
     *
     * Use this method to:
     * - Configure LLM access
     * - Set up LLM integrations
     * - Enable LLM usage
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.CreateLLMIntegration
     */
    createLLMIntegration: {
        methodKind: "unary";
        input: typeof CreateLLMIntegrationRequestSchema;
        output: typeof CreateLLMIntegrationResponseSchema;
    };
    /**
     * Gets details about a specific LLM integration.
     *
     * Use this method to:
     * - View integration settings
     * - Check integration status
     * - Verify configuration
     *
     * ### Examples
     *
     * - Get integration details:
     *
     *   Retrieves information about a specific integration.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.GetLLMIntegration
     */
    getLLMIntegration: {
        methodKind: "unary";
        input: typeof GetLLMIntegrationRequestSchema;
        output: typeof GetLLMIntegrationResponseSchema;
    };
    /**
     * Lists LLM integrations for a runner.
     *
     * Use this method to:
     * - View all integrations
     * - Monitor integration status
     * - Check available LLMs
     *
     * ### Examples
     *
     * - List integrations:
     *
     *   Shows all LLM integrations.
     *
     *   ```yaml
     *   filter:
     *     runnerIds: ["d2c94c27-3b76-4a42-b88c-95a85e392c68"]
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.ListLLMIntegrations
     */
    listLLMIntegrations: {
        methodKind: "unary";
        input: typeof ListLLMIntegrationsRequestSchema;
        output: typeof ListLLMIntegrationsResponseSchema;
    };
    /**
     * Updates an existing LLM integration.
     *
     * Use this method to:
     * - Modify integration settings
     * - Update credentials
     * - Change configuration
     *
     * ### Examples
     *
     * - Update integration:
     *
     *   Updates OAuth credentials.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   apiKey: "sk-..."
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.UpdateLLMIntegration
     */
    updateLLMIntegration: {
        methodKind: "unary";
        input: typeof UpdateLLMIntegrationRequestSchema;
        output: typeof UpdateLLMIntegrationResponseSchema;
    };
    /**
     * Deletes an LLM integration.
     *
     * Use this method to:
     * - Remove unused integrations
     * - Clean up configurations
     * - Revoke LLM access
     *
     * ### Examples
     *
     * - Delete integration:
     *
     *   Removes an LLM integration.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.RunnerConfigurationService.DeleteLLMIntegration
     */
    deleteLLMIntegration: {
        methodKind: "unary";
        input: typeof DeleteLLMIntegrationRequestSchema;
        output: typeof DeleteLLMIntegrationResponseSchema;
    };
}>;
