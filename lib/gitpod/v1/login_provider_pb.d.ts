import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file gitpod/v1/login_provider.proto.
 */
export declare const file_gitpod_v1_login_provider: GenFile;
/**
 * LoginProviderKind identifies the provider used to authenticate an account.
 *
 * @generated from enum gitpod.v1.LoginProviderKind
 */
export declare enum LoginProviderKind {
    /**
     * @generated from enum value: LOGIN_PROVIDER_KIND_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: LOGIN_PROVIDER_KIND_SSO = 1;
     */
    SSO = 1,
    /**
     * @generated from enum value: LOGIN_PROVIDER_KIND_GITHUB = 2;
     */
    GITHUB = 2,
    /**
     * @generated from enum value: LOGIN_PROVIDER_KIND_GOOGLE = 3;
     */
    GOOGLE = 3,
    /**
     * @generated from enum value: LOGIN_PROVIDER_KIND_MAGICLINK = 4;
     */
    MAGICLINK = 4
}
/**
 * Describes the enum gitpod.v1.LoginProviderKind.
 */
export declare const LoginProviderKindSchema: GenEnum<LoginProviderKind>;
