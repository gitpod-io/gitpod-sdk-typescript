import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { AdmissionLevel } from "./environment_pb";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/security.proto.
 */
export declare const file_gitpod_v1_security: GenFile;
/**
 * @generated from message gitpod.v1.CreateSecurityPolicyRequest
 */
export type CreateSecurityPolicyRequest = Message<"gitpod.v1.CreateSecurityPolicyRequest"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: gitpod.v1.SecurityPolicy.Metadata metadata = 2;
     */
    metadata?: SecurityPolicy_Metadata;
    /**
     * @generated from field: gitpod.v1.SecurityPolicy.Spec spec = 3;
     */
    spec?: SecurityPolicy_Spec;
};
/**
 * Describes the message gitpod.v1.CreateSecurityPolicyRequest.
 * Use `create(CreateSecurityPolicyRequestSchema)` to create a new message.
 */
export declare const CreateSecurityPolicyRequestSchema: GenMessage<CreateSecurityPolicyRequest>;
/**
 * @generated from message gitpod.v1.CreateSecurityPolicyResponse
 */
export type CreateSecurityPolicyResponse = Message<"gitpod.v1.CreateSecurityPolicyResponse"> & {
    /**
     * @generated from field: gitpod.v1.SecurityPolicy security_policy = 1;
     */
    securityPolicy?: SecurityPolicy;
};
/**
 * Describes the message gitpod.v1.CreateSecurityPolicyResponse.
 * Use `create(CreateSecurityPolicyResponseSchema)` to create a new message.
 */
export declare const CreateSecurityPolicyResponseSchema: GenMessage<CreateSecurityPolicyResponse>;
/**
 * @generated from message gitpod.v1.GetSecurityPolicyRequest
 */
export type GetSecurityPolicyRequest = Message<"gitpod.v1.GetSecurityPolicyRequest"> & {
    /**
     * @generated from field: string security_policy_id = 1;
     */
    securityPolicyId: string;
};
/**
 * Describes the message gitpod.v1.GetSecurityPolicyRequest.
 * Use `create(GetSecurityPolicyRequestSchema)` to create a new message.
 */
export declare const GetSecurityPolicyRequestSchema: GenMessage<GetSecurityPolicyRequest>;
/**
 * @generated from message gitpod.v1.GetSecurityPolicyResponse
 */
export type GetSecurityPolicyResponse = Message<"gitpod.v1.GetSecurityPolicyResponse"> & {
    /**
     * @generated from field: gitpod.v1.SecurityPolicy security_policy = 1;
     */
    securityPolicy?: SecurityPolicy;
};
/**
 * Describes the message gitpod.v1.GetSecurityPolicyResponse.
 * Use `create(GetSecurityPolicyResponseSchema)` to create a new message.
 */
export declare const GetSecurityPolicyResponseSchema: GenMessage<GetSecurityPolicyResponse>;
/**
 * @generated from message gitpod.v1.ListSecurityPoliciesRequest
 */
export type ListSecurityPoliciesRequest = Message<"gitpod.v1.ListSecurityPoliciesRequest"> & {
    /**
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * @generated from field: gitpod.v1.ListSecurityPoliciesRequest.Filter filter = 2;
     */
    filter?: ListSecurityPoliciesRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListSecurityPoliciesRequest.
 * Use `create(ListSecurityPoliciesRequestSchema)` to create a new message.
 */
export declare const ListSecurityPoliciesRequestSchema: GenMessage<ListSecurityPoliciesRequest>;
/**
 * @generated from message gitpod.v1.ListSecurityPoliciesRequest.Filter
 */
export type ListSecurityPoliciesRequest_Filter = Message<"gitpod.v1.ListSecurityPoliciesRequest.Filter"> & {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: repeated string security_policy_ids = 2;
     */
    securityPolicyIds: string[];
    /**
     * @generated from field: string search = 3;
     */
    search: string;
};
/**
 * Describes the message gitpod.v1.ListSecurityPoliciesRequest.Filter.
 * Use `create(ListSecurityPoliciesRequest_FilterSchema)` to create a new message.
 */
export declare const ListSecurityPoliciesRequest_FilterSchema: GenMessage<ListSecurityPoliciesRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListSecurityPoliciesResponse
 */
export type ListSecurityPoliciesResponse = Message<"gitpod.v1.ListSecurityPoliciesResponse"> & {
    /**
     * @generated from field: gitpod.v1.PaginationResponse pagination = 1;
     */
    pagination?: PaginationResponse;
    /**
     * @generated from field: repeated gitpod.v1.SecurityPolicy security_policies = 2;
     */
    securityPolicies: SecurityPolicy[];
};
/**
 * Describes the message gitpod.v1.ListSecurityPoliciesResponse.
 * Use `create(ListSecurityPoliciesResponseSchema)` to create a new message.
 */
export declare const ListSecurityPoliciesResponseSchema: GenMessage<ListSecurityPoliciesResponse>;
/**
 * @generated from message gitpod.v1.UpdateSecurityPolicyRequest
 */
export type UpdateSecurityPolicyRequest = Message<"gitpod.v1.UpdateSecurityPolicyRequest"> & {
    /**
     * @generated from field: string security_policy_id = 1;
     */
    securityPolicyId: string;
    /**
     * @generated from field: gitpod.v1.SecurityPolicy.Metadata metadata = 2;
     */
    metadata?: SecurityPolicy_Metadata;
    /**
     * @generated from field: gitpod.v1.SecurityPolicy.Spec spec = 3;
     */
    spec?: SecurityPolicy_Spec;
};
/**
 * Describes the message gitpod.v1.UpdateSecurityPolicyRequest.
 * Use `create(UpdateSecurityPolicyRequestSchema)` to create a new message.
 */
export declare const UpdateSecurityPolicyRequestSchema: GenMessage<UpdateSecurityPolicyRequest>;
/**
 * @generated from message gitpod.v1.UpdateSecurityPolicyResponse
 */
export type UpdateSecurityPolicyResponse = Message<"gitpod.v1.UpdateSecurityPolicyResponse"> & {
    /**
     * @generated from field: gitpod.v1.SecurityPolicy security_policy = 1;
     */
    securityPolicy?: SecurityPolicy;
};
/**
 * Describes the message gitpod.v1.UpdateSecurityPolicyResponse.
 * Use `create(UpdateSecurityPolicyResponseSchema)` to create a new message.
 */
export declare const UpdateSecurityPolicyResponseSchema: GenMessage<UpdateSecurityPolicyResponse>;
/**
 * @generated from message gitpod.v1.DeleteSecurityPolicyRequest
 */
export type DeleteSecurityPolicyRequest = Message<"gitpod.v1.DeleteSecurityPolicyRequest"> & {
    /**
     * @generated from field: string security_policy_id = 1;
     */
    securityPolicyId: string;
};
/**
 * Describes the message gitpod.v1.DeleteSecurityPolicyRequest.
 * Use `create(DeleteSecurityPolicyRequestSchema)` to create a new message.
 */
export declare const DeleteSecurityPolicyRequestSchema: GenMessage<DeleteSecurityPolicyRequest>;
/**
 * @generated from message gitpod.v1.DeleteSecurityPolicyResponse
 */
export type DeleteSecurityPolicyResponse = Message<"gitpod.v1.DeleteSecurityPolicyResponse"> & {};
/**
 * Describes the message gitpod.v1.DeleteSecurityPolicyResponse.
 * Use `create(DeleteSecurityPolicyResponseSchema)` to create a new message.
 */
export declare const DeleteSecurityPolicyResponseSchema: GenMessage<DeleteSecurityPolicyResponse>;
/**
 * @generated from message gitpod.v1.SecurityPolicy
 */
export type SecurityPolicy = Message<"gitpod.v1.SecurityPolicy"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: gitpod.v1.SecurityPolicy.Metadata metadata = 2;
     */
    metadata?: SecurityPolicy_Metadata;
    /**
     * @generated from field: gitpod.v1.SecurityPolicy.Spec spec = 3;
     */
    spec?: SecurityPolicy_Spec;
    /**
     * @generated from field: string organization_id = 4;
     */
    organizationId: string;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 6;
     */
    updatedAt?: Timestamp;
};
/**
 * Describes the message gitpod.v1.SecurityPolicy.
 * Use `create(SecurityPolicySchema)` to create a new message.
 */
export declare const SecurityPolicySchema: GenMessage<SecurityPolicy>;
/**
 * @generated from message gitpod.v1.SecurityPolicy.Metadata
 */
export type SecurityPolicy_Metadata = Message<"gitpod.v1.SecurityPolicy.Metadata"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
};
/**
 * Describes the message gitpod.v1.SecurityPolicy.Metadata.
 * Use `create(SecurityPolicy_MetadataSchema)` to create a new message.
 */
export declare const SecurityPolicy_MetadataSchema: GenMessage<SecurityPolicy_Metadata>;
/**
 * Mandate/deploy security agents, e.g. CrowdStrike.
 * Mandate credential security/proxy use.
 * These can be modeled later as explicit fields if needed.
 *
 * @generated from message gitpod.v1.SecurityPolicy.Spec
 */
export type SecurityPolicy_Spec = Message<"gitpod.v1.SecurityPolicy.Spec"> & {
    /**
     * @generated from field: gitpod.v1.SecurityPolicy.Spec.PortPolicy ports = 1;
     */
    ports?: SecurityPolicy_Spec_PortPolicy;
    /**
     * executables is the public Veto Exec GA policy surface.
     *
     * @generated from field: gitpod.v1.SecurityPolicy.Spec.ExecutablePolicy executables = 2;
     */
    executables?: SecurityPolicy_Spec_ExecutablePolicy;
};
/**
 * Describes the message gitpod.v1.SecurityPolicy.Spec.
 * Use `create(SecurityPolicy_SpecSchema)` to create a new message.
 */
export declare const SecurityPolicy_SpecSchema: GenMessage<SecurityPolicy_Spec>;
/**
 * @generated from message gitpod.v1.SecurityPolicy.Spec.PortPolicy
 */
export type SecurityPolicy_Spec_PortPolicy = Message<"gitpod.v1.SecurityPolicy.Spec.PortPolicy"> & {
    /**
     * max_admission_level caps the maximum admission level for user-opened
     * ports in environments assigned this security policy. UNSPECIFIED
     * applies no additional cap.
     *
     * @generated from field: gitpod.v1.AdmissionLevel max_admission_level = 3;
     */
    maxAdmissionLevel: AdmissionLevel;
};
/**
 * Describes the message gitpod.v1.SecurityPolicy.Spec.PortPolicy.
 * Use `create(SecurityPolicy_Spec_PortPolicySchema)` to create a new message.
 */
export declare const SecurityPolicy_Spec_PortPolicySchema: GenMessage<SecurityPolicy_Spec_PortPolicy>;
/**
 * @generated from message gitpod.v1.SecurityPolicy.Spec.ExecutablePolicy
 */
export type SecurityPolicy_Spec_ExecutablePolicy = Message<"gitpod.v1.SecurityPolicy.Spec.ExecutablePolicy"> & {
    /**
     * default_effect controls executables that do not match a rule.
     * For Veto Exec, omit this field or set it to EFFECT_ALLOW.
     * EFFECT_UNSPECIFIED is normalized to EFFECT_ALLOW.
     *
     * @generated from field: gitpod.v1.SecurityPolicy.Effect default_effect = 1;
     */
    defaultEffect: SecurityPolicy_Effect;
    /**
     * rules contains executable-specific audit or block decisions.
     *
     * @generated from field: repeated gitpod.v1.SecurityPolicy.Spec.ExecutablePolicy.Rule rules = 2;
     */
    rules: SecurityPolicy_Spec_ExecutablePolicy_Rule[];
};
/**
 * Describes the message gitpod.v1.SecurityPolicy.Spec.ExecutablePolicy.
 * Use `create(SecurityPolicy_Spec_ExecutablePolicySchema)` to create a new message.
 */
export declare const SecurityPolicy_Spec_ExecutablePolicySchema: GenMessage<SecurityPolicy_Spec_ExecutablePolicy>;
/**
 * @generated from message gitpod.v1.SecurityPolicy.Spec.ExecutablePolicy.Rule
 */
export type SecurityPolicy_Spec_ExecutablePolicy_Rule = Message<"gitpod.v1.SecurityPolicy.Spec.ExecutablePolicy.Rule"> & {
    /**
     * path is either an absolute executable path, such as /usr/bin/curl,
     * or a bare executable name, such as npx. Bare names are expanded by
     * runtime discovery. Surrounding whitespace is ignored. Empty or
     * whitespace-only selectors and relative paths with directory
     * separators are invalid.
     * Enforcement uses executable content hashes, so different paths with
     * identical content share one runtime decision and block wins conflicts.
     *
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * effect must be EFFECT_AUDIT or EFFECT_BLOCK. EFFECT_ALLOW is not
     * supported on an executable rule.
     *
     * @generated from field: gitpod.v1.SecurityPolicy.Effect effect = 4;
     */
    effect: SecurityPolicy_Effect;
};
/**
 * Describes the message gitpod.v1.SecurityPolicy.Spec.ExecutablePolicy.Rule.
 * Use `create(SecurityPolicy_Spec_ExecutablePolicy_RuleSchema)` to create a new message.
 */
export declare const SecurityPolicy_Spec_ExecutablePolicy_RuleSchema: GenMessage<SecurityPolicy_Spec_ExecutablePolicy_Rule>;
/**
 * @generated from enum gitpod.v1.SecurityPolicy.Effect
 */
export declare enum SecurityPolicy_Effect {
    /**
     * @generated from enum value: EFFECT_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: EFFECT_ALLOW = 1;
     */
    ALLOW = 1,
    /**
     * @generated from enum value: EFFECT_BLOCK = 2;
     */
    BLOCK = 2,
    /**
     * @generated from enum value: EFFECT_AUDIT = 3;
     */
    AUDIT = 3
}
/**
 * Describes the enum gitpod.v1.SecurityPolicy.Effect.
 */
export declare const SecurityPolicy_EffectSchema: GenEnum<SecurityPolicy_Effect>;
/**
 * @generated from service gitpod.v1.SecurityService
 */
export declare const SecurityService: GenService<{
    /**
     * Creates a new security policy.
     *
     * Use this method to:
     * - Define environment access controls
     * - Configure audited or blocked operations
     * - Manage organization security posture
     *
     * ### Examples
     *
     * - Create security policy:
     *
     *   Creates an audit-first Veto Exec policy with one audited bare name and
     *   one blocked absolute path. Creation stores an inactive definition;
     *   assigning it as the organization default validates materializability.
     *
     *   ```yaml
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   metadata:
     *     name: "Veto Exec audit-first"
     *   spec:
     *     executables:
     *       defaultEffect: EFFECT_ALLOW
     *       rules:
     *         - path: "npx"
     *           effect: EFFECT_AUDIT
     *         - path: "/usr/bin/curl"
     *           effect: EFFECT_BLOCK
     *   ```
     *
     * @generated from rpc gitpod.v1.SecurityService.CreateSecurityPolicy
     */
    createSecurityPolicy: {
        methodKind: "unary";
        input: typeof CreateSecurityPolicyRequestSchema;
        output: typeof CreateSecurityPolicyResponseSchema;
    };
    /**
     * Gets details about a specific security policy.
     *
     * Use this method to:
     * - View security policy configuration
     * - Inspect enforcement rules
     *
     * ### Examples
     *
     * - Get security policy:
     *
     *   Retrieves a security policy by ID.
     *
     *   ```yaml
     *   securityPolicyId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.SecurityService.GetSecurityPolicy
     */
    getSecurityPolicy: {
        methodKind: "unary";
        input: typeof GetSecurityPolicyRequestSchema;
        output: typeof GetSecurityPolicyResponseSchema;
    };
    /**
     * Lists security policies.
     *
     * Use this method to:
     * - View all security policies in an organization
     * - Audit configured security controls
     *
     * ### Examples
     *
     * - List organization policies:
     *
     *   Shows security policies with pagination.
     *
     *   ```yaml
     *   filter:
     *     organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * @generated from rpc gitpod.v1.SecurityService.ListSecurityPolicies
     */
    listSecurityPolicies: {
        methodKind: "unary";
        input: typeof ListSecurityPoliciesRequestSchema;
        output: typeof ListSecurityPoliciesResponseSchema;
    };
    /**
     * Updates a security policy.
     *
     * Use this method to:
     * - Rename a security policy
     * - Change enforcement rules
     * - Update auditing behavior
     *
     * ### Examples
     *
     * - Update security policy:
     *
     *   Promotes one executable rule from audit to block while leaving unmatched
     *   executables allowed. Updating an assigned policy validates
     *   materializability; updating an unassigned policy only stores its spec.
     *
     *   ```yaml
     *   securityPolicyId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   spec:
     *     executables:
     *       defaultEffect: EFFECT_ALLOW
     *       rules:
     *         - path: "npx"
     *           effect: EFFECT_BLOCK
     *         - path: "/usr/bin/curl"
     *           effect: EFFECT_BLOCK
     *   ```
     *
     * @generated from rpc gitpod.v1.SecurityService.UpdateSecurityPolicy
     */
    updateSecurityPolicy: {
        methodKind: "unary";
        input: typeof UpdateSecurityPolicyRequestSchema;
        output: typeof UpdateSecurityPolicyResponseSchema;
    };
    /**
     * Deletes a security policy.
     *
     * Use this method to:
     * - Remove obsolete security policies
     * - Clean up unused policy definitions
     *
     * ### Examples
     *
     * - Delete security policy:
     *
     *   Permanently removes a security policy.
     *
     *   ```yaml
     *   securityPolicyId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.SecurityService.DeleteSecurityPolicy
     */
    deleteSecurityPolicy: {
        methodKind: "unary";
        input: typeof DeleteSecurityPolicyRequestSchema;
        output: typeof DeleteSecurityPolicyResponseSchema;
    };
}>;
