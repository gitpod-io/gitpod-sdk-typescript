import type { GenExtension, GenFile } from "@bufbuild/protobuf/codegenv2";
import type { Document, Operation, Schema } from "./openapiv3_pb";
import type { FieldOptions, FileOptions, MessageOptions, MethodOptions } from "@bufbuild/protobuf/wkt";
/**
 * Describes the file gnostic/openapi/v3/annotations.proto.
 */
export declare const file_gnostic_openapi_v3_annotations: GenFile;
/**
 * @generated from extension: gnostic.openapi.v3.Document document = 1143;
 */
export declare const document: GenExtension<FileOptions, Document>;
/**
 * @generated from extension: gnostic.openapi.v3.Operation operation = 1143;
 */
export declare const operation: GenExtension<MethodOptions, Operation>;
/**
 * @generated from extension: gnostic.openapi.v3.Schema schema = 1143;
 */
export declare const schema: GenExtension<MessageOptions, Schema>;
/**
 * @generated from extension: gnostic.openapi.v3.Schema property = 1143;
 */
export declare const property: GenExtension<FieldOptions, Schema>;
