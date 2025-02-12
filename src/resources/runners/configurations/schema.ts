// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Schema extends APIResource {
  /**
   * GetRunnerConfigurationSchema retrieves the latest Runner configuration schema
   */
  retrieve(body: SchemaRetrieveParams, options?: RequestOptions): APIPromise<SchemaRetrieveResponse> {
    return this._client.post('/gitpod.v1.RunnerConfigurationService/GetRunnerConfigurationSchema', {
      body,
      ...options,
    });
  }
}

export interface RunnerConfigurationSchema {
  environmentClasses?: Array<RunnerConfigurationSchema.EnvironmentClass>;

  runnerConfig?: Array<RunnerConfigurationSchema.RunnerConfig>;

  scm?: Array<RunnerConfigurationSchema.Scm>;

  /**
   * The schema version
   */
  version?: string;
}

export namespace RunnerConfigurationSchema {
  export interface EnvironmentClass {
    id?: string;

    bool?: EnvironmentClass.Bool;

    description?: string;

    display?: EnvironmentClass.Display;

    enum?: EnvironmentClass.Enum;

    int?: EnvironmentClass.Int;

    name?: string;

    required?: boolean;

    secret?: boolean;

    string?: EnvironmentClass.String;
  }

  export namespace EnvironmentClass {
    export interface Bool {
      default?: boolean;
    }

    export interface Display {
      default?: string;
    }

    export interface Enum {
      default?: string;

      values?: Array<string>;
    }

    export interface Int {
      default?: number;

      max?: number;

      min?: number;
    }

    export interface String {
      default?: string;

      pattern?: string;
    }
  }

  export interface RunnerConfig {
    id?: string;

    bool?: RunnerConfig.Bool;

    description?: string;

    display?: RunnerConfig.Display;

    enum?: RunnerConfig.Enum;

    int?: RunnerConfig.Int;

    name?: string;

    required?: boolean;

    secret?: boolean;

    string?: RunnerConfig.String;
  }

  export namespace RunnerConfig {
    export interface Bool {
      default?: boolean;
    }

    export interface Display {
      default?: string;
    }

    export interface Enum {
      default?: string;

      values?: Array<string>;
    }

    export interface Int {
      default?: number;

      max?: number;

      min?: number;
    }

    export interface String {
      default?: string;

      pattern?: string;
    }
  }

  export interface Scm {
    defaultHosts?: Array<string>;

    name?: string;

    oauth?: Scm.OAuth;

    pat?: Scm.Pat;

    scmId?: string;
  }

  export namespace Scm {
    export interface OAuth {
      /**
       * callback_url is the URL the OAuth app will redirect to after the user has
       * authenticated.
       */
      callbackUrl?: string;
    }

    export interface Pat {
      /**
       * description is a human-readable description of the PAT.
       */
      description?: string;

      /**
       * docs_link is a link to the documentation on how to create a PAT for this SCM
       * system.
       */
      docsLink?: string;
    }
  }
}

export interface SchemaRetrieveResponse {
  schema?: RunnerConfigurationSchema;
}

export interface SchemaRetrieveParams {
  runnerId?: string;
}

export declare namespace Schema {
  export {
    type RunnerConfigurationSchema as RunnerConfigurationSchema,
    type SchemaRetrieveResponse as SchemaRetrieveResponse,
    type SchemaRetrieveParams as SchemaRetrieveParams,
  };
}
