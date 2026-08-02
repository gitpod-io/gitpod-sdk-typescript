import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/editor.proto.
 */
export declare const file_gitpod_v1_editor: GenFile;
/**
 * @generated from message gitpod.v1.ListEditorsRequest
 */
export type ListEditorsRequest = Message<"gitpod.v1.ListEditorsRequest"> & {
    /**
     * pagination contains the pagination options for listing environments
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
    /**
     * filter contains the filter options for listing editors
     *
     * @generated from field: gitpod.v1.ListEditorsRequest.Filter filter = 2;
     */
    filter?: ListEditorsRequest_Filter;
};
/**
 * Describes the message gitpod.v1.ListEditorsRequest.
 * Use `create(ListEditorsRequestSchema)` to create a new message.
 */
export declare const ListEditorsRequestSchema: GenMessage<ListEditorsRequest>;
/**
 * @generated from message gitpod.v1.ListEditorsRequest.Filter
 */
export type ListEditorsRequest_Filter = Message<"gitpod.v1.ListEditorsRequest.Filter"> & {
    /**
     * allowed_by_policy filters the response to only editors that are allowed by the policies enforced in the organization
     *
     * @generated from field: bool allowed_by_policy = 1;
     */
    allowedByPolicy: boolean;
};
/**
 * Describes the message gitpod.v1.ListEditorsRequest.Filter.
 * Use `create(ListEditorsRequest_FilterSchema)` to create a new message.
 */
export declare const ListEditorsRequest_FilterSchema: GenMessage<ListEditorsRequest_Filter>;
/**
 * @generated from message gitpod.v1.ListEditorsResponse
 */
export type ListEditorsResponse = Message<"gitpod.v1.ListEditorsResponse"> & {
    /**
     * editors contains the list of editors
     *
     * @generated from field: repeated gitpod.v1.Editor editors = 1;
     */
    editors: Editor[];
    /**
     * pagination contains the pagination options for listing environments
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 2;
     */
    pagination?: PaginationResponse;
};
/**
 * Describes the message gitpod.v1.ListEditorsResponse.
 * Use `create(ListEditorsResponseSchema)` to create a new message.
 */
export declare const ListEditorsResponseSchema: GenMessage<ListEditorsResponse>;
/**
 * @generated from message gitpod.v1.GetEditorRequest
 */
export type GetEditorRequest = Message<"gitpod.v1.GetEditorRequest"> & {
    /**
     * id is the ID of the editor to get
     *
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message gitpod.v1.GetEditorRequest.
 * Use `create(GetEditorRequestSchema)` to create a new message.
 */
export declare const GetEditorRequestSchema: GenMessage<GetEditorRequest>;
/**
 * @generated from message gitpod.v1.GetEditorResponse
 */
export type GetEditorResponse = Message<"gitpod.v1.GetEditorResponse"> & {
    /**
     * editor contains the editor
     *
     * @generated from field: gitpod.v1.Editor editor = 1;
     */
    editor?: Editor;
};
/**
 * Describes the message gitpod.v1.GetEditorResponse.
 * Use `create(GetEditorResponseSchema)` to create a new message.
 */
export declare const GetEditorResponseSchema: GenMessage<GetEditorResponse>;
/**
 * @generated from message gitpod.v1.ResolveEditorURLRequest
 */
export type ResolveEditorURLRequest = Message<"gitpod.v1.ResolveEditorURLRequest"> & {
    /**
     * editorId is the ID of the editor to resolve the URL for
     *
     * @generated from field: string editor_id = 1;
     */
    editorId: string;
    /**
     * environmentId is the ID of the environment to resolve the URL for
     *
     * @generated from field: string environment_id = 2;
     */
    environmentId: string;
    /**
     * organizationId is the ID of the organization to resolve the URL for
     *
     * @generated from field: string organization_id = 3;
     */
    organizationId: string;
    /**
     * version is the editor version to use
     * If not provided, the latest version will be installed
     *
     * Examples for JetBrains: 2025.2
     *
     * @generated from field: string version = 4;
     */
    version: string;
};
/**
 * Describes the message gitpod.v1.ResolveEditorURLRequest.
 * Use `create(ResolveEditorURLRequestSchema)` to create a new message.
 */
export declare const ResolveEditorURLRequestSchema: GenMessage<ResolveEditorURLRequest>;
/**
 * @generated from message gitpod.v1.ResolveEditorURLResponse
 */
export type ResolveEditorURLResponse = Message<"gitpod.v1.ResolveEditorURLResponse"> & {
    /**
     * url is the resolved editor URL
     *
     * @generated from field: string url = 1;
     */
    url: string;
};
/**
 * Describes the message gitpod.v1.ResolveEditorURLResponse.
 * Use `create(ResolveEditorURLResponseSchema)` to create a new message.
 */
export declare const ResolveEditorURLResponseSchema: GenMessage<ResolveEditorURLResponse>;
/**
 * @generated from message gitpod.v1.EditorVersion
 */
export type EditorVersion = Message<"gitpod.v1.EditorVersion"> & {
    /**
     * version is the version string of the editor
     * Examples for JetBrains: 2025.2
     *
     * @generated from field: string version = 1;
     */
    version: string;
};
/**
 * Describes the message gitpod.v1.EditorVersion.
 * Use `create(EditorVersionSchema)` to create a new message.
 */
export declare const EditorVersionSchema: GenMessage<EditorVersion>;
/**
 * @generated from message gitpod.v1.Editor
 */
export type Editor = Message<"gitpod.v1.Editor"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string short_description = 3;
     */
    shortDescription: string;
    /**
     * @generated from field: string installation_instructions = 4;
     */
    installationInstructions: string;
    /**
     * @generated from field: string icon_url = 5;
     */
    iconUrl: string;
    /**
     * @generated from field: string url_template = 6;
     */
    urlTemplate: string;
    /**
     * @generated from field: string alias = 7;
     */
    alias: string;
    /**
     * versions contains the list of available versions for this editor
     *
     * @generated from field: repeated gitpod.v1.EditorVersion versions = 8;
     */
    versions: EditorVersion[];
};
/**
 * Describes the message gitpod.v1.Editor.
 * Use `create(EditorSchema)` to create a new message.
 */
export declare const EditorSchema: GenMessage<Editor>;
/**
 * @generated from service gitpod.v1.EditorService
 */
export declare const EditorService: GenService<{
    /**
     * Lists all available code editors, optionally filtered to those allowed in an organization.
     *
     * Use this method to:
     * - View supported editors
     * - Get editor capabilities
     * - Browse editor options
     * - Check editor availability
     *
     * ### Examples
     *
     * - List editors:
     *
     *   Shows all available editors with pagination.
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   ```
     *
     * - List editors available to the organization:
     *
     *   Shows all available editors that are allowed by the policies enforced in the organization with pagination.
     *
     *   ```yaml
     *   pagination:
     *     pageSize: 20
     *   filter:
     *     allowedByPolicy: true
     *   ```
     *
     * @generated from rpc gitpod.v1.EditorService.ListEditors
     */
    listEditors: {
        methodKind: "unary";
        input: typeof ListEditorsRequestSchema;
        output: typeof ListEditorsResponseSchema;
    };
    /**
     * Gets details about a specific editor.
     *
     * Use this method to:
     * - View editor information
     * - Get editor configuration
     *
     * ### Examples
     *
     * - Get editor details:
     *
     *   Retrieves information about a specific editor.
     *
     *   ```yaml
     *   id: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   ```
     *
     * @generated from rpc gitpod.v1.EditorService.GetEditor
     */
    getEditor: {
        methodKind: "unary";
        input: typeof GetEditorRequestSchema;
        output: typeof GetEditorResponseSchema;
    };
    /**
     * Resolves the URL for accessing an editor in a specific environment.
     *
     * Use this method to:
     * - Get editor access URLs
     * - Launch editors for environments
     * - Set up editor connections
     * - Configure editor access
     *
     * ### Examples
     *
     * - Resolve editor URL:
     *
     *   Gets the URL for accessing an editor in an environment.
     *
     *   ```yaml
     *   editorId: "d2c94c27-3b76-4a42-b88c-95a85e392c68"
     *   environmentId: "07e03a28-65a5-4d98-b532-8ea67b188048"
     *   organizationId: "b0e12f6c-4c67-429d-a4a6-d9838b5da047"
     *   ```
     *
     * @generated from rpc gitpod.v1.EditorService.ResolveEditorURL
     */
    resolveEditorURL: {
        methodKind: "unary";
        input: typeof ResolveEditorURLRequestSchema;
        output: typeof ResolveEditorURLResponseSchema;
    };
}>;
