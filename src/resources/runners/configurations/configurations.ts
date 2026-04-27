// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as EnvironmentClassesAPI from './environment-classes';
import {
  EnvironmentClassCreateParams,
  EnvironmentClassCreateResponse,
  EnvironmentClassListParams,
  EnvironmentClassRetrieveParams,
  EnvironmentClassRetrieveResponse,
  EnvironmentClassUpdateParams,
  EnvironmentClassUpdateResponse,
  EnvironmentClasses,
} from './environment-classes';
import * as HostAuthenticationTokensAPI from './host-authentication-tokens';
import {
  HostAuthenticationToken,
  HostAuthenticationTokenCreateParams,
  HostAuthenticationTokenCreateResponse,
  HostAuthenticationTokenDeleteParams,
  HostAuthenticationTokenDeleteResponse,
  HostAuthenticationTokenListParams,
  HostAuthenticationTokenRetrieveParams,
  HostAuthenticationTokenRetrieveResponse,
  HostAuthenticationTokenSource,
  HostAuthenticationTokenUpdateParams,
  HostAuthenticationTokenUpdateResponse,
  HostAuthenticationTokens,
  HostAuthenticationTokensTokensPage,
} from './host-authentication-tokens';
import * as SchemaAPI from './schema';
import { RunnerConfigurationSchema, Schema, SchemaRetrieveParams, SchemaRetrieveResponse } from './schema';
import * as ScmIntegrationsAPI from './scm-integrations';
import {
  ScmIntegration as ScmIntegrationsAPIScmIntegration,
  ScmIntegrationCreateParams,
  ScmIntegrationCreateResponse,
  ScmIntegrationDeleteParams,
  ScmIntegrationDeleteResponse,
  ScmIntegrationListParams,
  ScmIntegrationOAuthConfig,
  ScmIntegrationRetrieveParams,
  ScmIntegrationRetrieveResponse,
  ScmIntegrationUpdateParams,
  ScmIntegrationUpdateResponse,
  ScmIntegrations,
  ScmIntegrationsIntegrationsPage,
} from './scm-integrations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Configurations extends APIResource {
  environmentClasses: EnvironmentClassesAPI.EnvironmentClasses = new EnvironmentClassesAPI.EnvironmentClasses(
    this._client,
  );
  hostAuthenticationTokens: HostAuthenticationTokensAPI.HostAuthenticationTokens =
    new HostAuthenticationTokensAPI.HostAuthenticationTokens(this._client);
  schema: SchemaAPI.Schema = new SchemaAPI.Schema(this._client);
  scmIntegrations: ScmIntegrationsAPI.ScmIntegrations = new ScmIntegrationsAPI.ScmIntegrations(this._client);

  /**
   * Validates a runner configuration.
   *
   * Use this method to:
   *
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
   * @example
   * ```ts
   * const response =
   *   await client.runners.configurations.validate({
   *     runnerId: 'd2c94c27-3b76-4a42-b88c-95a85e392c68',
   *     scmIntegration: {
   *       host: 'github.com',
   *       id: 'integration-id',
   *       oauthClientId: 'client_id',
   *       oauthPlaintextClientSecret: 'client_secret',
   *       scmId: 'github',
   *     },
   *   });
   * ```
   */
  validate(
    body: ConfigurationValidateParams,
    options?: RequestOptions,
  ): APIPromise<ConfigurationValidateResponse> {
    return this._client.post('/gitpod.v1.RunnerConfigurationService/ValidateRunnerConfiguration', {
      body,
      ...options,
    });
  }
}

export interface EnvironmentClassValidationResult {
  configurationErrors?: Array<FieldValidationError>;

  descriptionError?: string | null;

  displayNameError?: string | null;

  valid?: boolean;
}

export interface FieldValidationError {
  error?: string;

  key?: string;
}

export interface ScmIntegrationValidationResult {
  hostError?: string | null;

  oauthError?: string | null;

  patError?: string | null;

  scmIdError?: string | null;

  valid?: boolean;
}

export interface ConfigurationValidateResponse {
  environmentClass?: EnvironmentClassValidationResult;

  scmIntegration?: ScmIntegrationValidationResult;
}

export interface ConfigurationValidateParams {
  environmentClass?: Shared.EnvironmentClass;

  runnerId?: string;

  scmIntegration?: ConfigurationValidateParams.ScmIntegration;
}

export namespace ConfigurationValidateParams {
  export interface ScmIntegration {
    /**
     * id is the unique identifier of the SCM integration
     */
    id?: string;

    host?: string;

    /**
     * issuer_url can be set to override the authentication provider URL, if it doesn't
     * match the SCM host.
     */
    issuerUrl?: string | null;

    /**
     * oauth_client_id is the OAuth app's client ID, if OAuth is configured. If
     * configured, oauth_client_secret must also be set.
     */
    oauthClientId?: string | null;

    /**
     * oauth_encrypted_client_secret is the OAuth app's client secret encrypted with
     * the runner's public key, if OAuth is configured. This can be used to e.g.
     * validate an already encrypted client secret of an existing SCM integration.
     */
    oauthEncryptedClientSecret?: string;

    /**
     * oauth_plaintext_client_secret is the OAuth app's client secret in clear text, if
     * OAuth is configured. This can be set to validate any new client secret before it
     * is encrypted and stored. This value will not be stored and get encrypted with
     * the runner's public key before passing it to the runner.
     */
    oauthPlaintextClientSecret?: string;

    pat?: boolean;

    /**
     * scm_id references the scm_id in the runner's configuration schema that this
     * integration is for
     */
    scmId?: string;

    /**
     * virtual_directory is the virtual directory path for Azure DevOps Server (e.g.,
     * "/tfs"). This field is only used for Azure DevOps Server SCM integrations and
     * should be empty for other SCM types. Azure DevOps Server APIs work without
     * collection when PAT scope is 'All accessible organizations'.
     */
    virtualDirectory?: string | null;
  }
}

Configurations.EnvironmentClasses = EnvironmentClasses;
Configurations.HostAuthenticationTokens = HostAuthenticationTokens;
Configurations.Schema = Schema;
Configurations.ScmIntegrations = ScmIntegrations;

export declare namespace Configurations {
  export {
    type EnvironmentClassValidationResult as EnvironmentClassValidationResult,
    type FieldValidationError as FieldValidationError,
    type ScmIntegrationValidationResult as ScmIntegrationValidationResult,
    type ConfigurationValidateResponse as ConfigurationValidateResponse,
    type ConfigurationValidateParams as ConfigurationValidateParams,
  };

  export {
    EnvironmentClasses as EnvironmentClasses,
    type EnvironmentClassCreateResponse as EnvironmentClassCreateResponse,
    type EnvironmentClassRetrieveResponse as EnvironmentClassRetrieveResponse,
    type EnvironmentClassUpdateResponse as EnvironmentClassUpdateResponse,
    type EnvironmentClassCreateParams as EnvironmentClassCreateParams,
    type EnvironmentClassRetrieveParams as EnvironmentClassRetrieveParams,
    type EnvironmentClassUpdateParams as EnvironmentClassUpdateParams,
    type EnvironmentClassListParams as EnvironmentClassListParams,
  };

  export {
    HostAuthenticationTokens as HostAuthenticationTokens,
    type HostAuthenticationToken as HostAuthenticationToken,
    type HostAuthenticationTokenSource as HostAuthenticationTokenSource,
    type HostAuthenticationTokenCreateResponse as HostAuthenticationTokenCreateResponse,
    type HostAuthenticationTokenRetrieveResponse as HostAuthenticationTokenRetrieveResponse,
    type HostAuthenticationTokenUpdateResponse as HostAuthenticationTokenUpdateResponse,
    type HostAuthenticationTokenDeleteResponse as HostAuthenticationTokenDeleteResponse,
    type HostAuthenticationTokensTokensPage as HostAuthenticationTokensTokensPage,
    type HostAuthenticationTokenCreateParams as HostAuthenticationTokenCreateParams,
    type HostAuthenticationTokenRetrieveParams as HostAuthenticationTokenRetrieveParams,
    type HostAuthenticationTokenUpdateParams as HostAuthenticationTokenUpdateParams,
    type HostAuthenticationTokenListParams as HostAuthenticationTokenListParams,
    type HostAuthenticationTokenDeleteParams as HostAuthenticationTokenDeleteParams,
  };

  export {
    Schema as Schema,
    type RunnerConfigurationSchema as RunnerConfigurationSchema,
    type SchemaRetrieveResponse as SchemaRetrieveResponse,
    type SchemaRetrieveParams as SchemaRetrieveParams,
  };

  export {
    ScmIntegrations as ScmIntegrations,
    type ScmIntegrationsAPIScmIntegration as ScmIntegration,
    type ScmIntegrationOAuthConfig as ScmIntegrationOAuthConfig,
    type ScmIntegrationCreateResponse as ScmIntegrationCreateResponse,
    type ScmIntegrationRetrieveResponse as ScmIntegrationRetrieveResponse,
    type ScmIntegrationUpdateResponse as ScmIntegrationUpdateResponse,
    type ScmIntegrationDeleteResponse as ScmIntegrationDeleteResponse,
    type ScmIntegrationsIntegrationsPage as ScmIntegrationsIntegrationsPage,
    type ScmIntegrationCreateParams as ScmIntegrationCreateParams,
    type ScmIntegrationRetrieveParams as ScmIntegrationRetrieveParams,
    type ScmIntegrationUpdateParams as ScmIntegrationUpdateParams,
    type ScmIntegrationListParams as ScmIntegrationListParams,
    type ScmIntegrationDeleteParams as ScmIntegrationDeleteParams,
  };
}
