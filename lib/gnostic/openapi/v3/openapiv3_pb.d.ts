import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Any as Any$1 } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gnostic/openapi/v3/openapiv3.proto.
 */
export declare const file_gnostic_openapi_v3_openapiv3: GenFile;
/**
 * @generated from message gnostic.openapi.v3.AdditionalPropertiesItem
 */
export type AdditionalPropertiesItem = Message<"gnostic.openapi.v3.AdditionalPropertiesItem"> & {
    /**
     * @generated from oneof gnostic.openapi.v3.AdditionalPropertiesItem.oneof
     */
    oneof: {
        /**
         * @generated from field: gnostic.openapi.v3.SchemaOrReference schema_or_reference = 1;
         */
        value: SchemaOrReference;
        case: "schemaOrReference";
    } | {
        /**
         * @generated from field: bool boolean = 2;
         */
        value: boolean;
        case: "boolean";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gnostic.openapi.v3.AdditionalPropertiesItem.
 * Use `create(AdditionalPropertiesItemSchema)` to create a new message.
 */
export declare const AdditionalPropertiesItemSchema: GenMessage<AdditionalPropertiesItem>;
/**
 * @generated from message gnostic.openapi.v3.Any
 */
export type Any = Message<"gnostic.openapi.v3.Any"> & {
    /**
     * @generated from field: google.protobuf.Any value = 1;
     */
    value?: Any$1;
    /**
     * @generated from field: string yaml = 2;
     */
    yaml: string;
};
/**
 * Describes the message gnostic.openapi.v3.Any.
 * Use `create(AnySchema)` to create a new message.
 */
export declare const AnySchema: GenMessage<Any>;
/**
 * @generated from message gnostic.openapi.v3.AnyOrExpression
 */
export type AnyOrExpression = Message<"gnostic.openapi.v3.AnyOrExpression"> & {
    /**
     * @generated from oneof gnostic.openapi.v3.AnyOrExpression.oneof
     */
    oneof: {
        /**
         * @generated from field: gnostic.openapi.v3.Any any = 1;
         */
        value: Any;
        case: "any";
    } | {
        /**
         * @generated from field: gnostic.openapi.v3.Expression expression = 2;
         */
        value: Expression;
        case: "expression";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gnostic.openapi.v3.AnyOrExpression.
 * Use `create(AnyOrExpressionSchema)` to create a new message.
 */
export declare const AnyOrExpressionSchema: GenMessage<AnyOrExpression>;
/**
 * A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the callback object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.
 *
 * @generated from message gnostic.openapi.v3.Callback
 */
export type Callback = Message<"gnostic.openapi.v3.Callback"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedPathItem path = 1;
     */
    path: NamedPathItem[];
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 2;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Callback.
 * Use `create(CallbackSchema)` to create a new message.
 */
export declare const CallbackSchema: GenMessage<Callback>;
/**
 * @generated from message gnostic.openapi.v3.CallbackOrReference
 */
export type CallbackOrReference = Message<"gnostic.openapi.v3.CallbackOrReference"> & {
    /**
     * @generated from oneof gnostic.openapi.v3.CallbackOrReference.oneof
     */
    oneof: {
        /**
         * @generated from field: gnostic.openapi.v3.Callback callback = 1;
         */
        value: Callback;
        case: "callback";
    } | {
        /**
         * @generated from field: gnostic.openapi.v3.Reference reference = 2;
         */
        value: Reference;
        case: "reference";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gnostic.openapi.v3.CallbackOrReference.
 * Use `create(CallbackOrReferenceSchema)` to create a new message.
 */
export declare const CallbackOrReferenceSchema: GenMessage<CallbackOrReference>;
/**
 * @generated from message gnostic.openapi.v3.CallbacksOrReferences
 */
export type CallbacksOrReferences = Message<"gnostic.openapi.v3.CallbacksOrReferences"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedCallbackOrReference additional_properties = 1;
     */
    additionalProperties: NamedCallbackOrReference[];
};
/**
 * Describes the message gnostic.openapi.v3.CallbacksOrReferences.
 * Use `create(CallbacksOrReferencesSchema)` to create a new message.
 */
export declare const CallbacksOrReferencesSchema: GenMessage<CallbacksOrReferences>;
/**
 * Holds a set of reusable objects for different aspects of the OAS. All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.
 *
 * @generated from message gnostic.openapi.v3.Components
 */
export type Components = Message<"gnostic.openapi.v3.Components"> & {
    /**
     * @generated from field: gnostic.openapi.v3.SchemasOrReferences schemas = 1;
     */
    schemas?: SchemasOrReferences;
    /**
     * @generated from field: gnostic.openapi.v3.ResponsesOrReferences responses = 2;
     */
    responses?: ResponsesOrReferences;
    /**
     * @generated from field: gnostic.openapi.v3.ParametersOrReferences parameters = 3;
     */
    parameters?: ParametersOrReferences;
    /**
     * @generated from field: gnostic.openapi.v3.ExamplesOrReferences examples = 4;
     */
    examples?: ExamplesOrReferences;
    /**
     * @generated from field: gnostic.openapi.v3.RequestBodiesOrReferences request_bodies = 5;
     */
    requestBodies?: RequestBodiesOrReferences;
    /**
     * @generated from field: gnostic.openapi.v3.HeadersOrReferences headers = 6;
     */
    headers?: HeadersOrReferences;
    /**
     * @generated from field: gnostic.openapi.v3.SecuritySchemesOrReferences security_schemes = 7;
     */
    securitySchemes?: SecuritySchemesOrReferences;
    /**
     * @generated from field: gnostic.openapi.v3.LinksOrReferences links = 8;
     */
    links?: LinksOrReferences;
    /**
     * @generated from field: gnostic.openapi.v3.CallbacksOrReferences callbacks = 9;
     */
    callbacks?: CallbacksOrReferences;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 10;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Components.
 * Use `create(ComponentsSchema)` to create a new message.
 */
export declare const ComponentsSchema: GenMessage<Components>;
/**
 * Contact information for the exposed API.
 *
 * @generated from message gnostic.openapi.v3.Contact
 */
export type Contact = Message<"gnostic.openapi.v3.Contact"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string url = 2;
     */
    url: string;
    /**
     * @generated from field: string email = 3;
     */
    email: string;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 4;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Contact.
 * Use `create(ContactSchema)` to create a new message.
 */
export declare const ContactSchema: GenMessage<Contact>;
/**
 * @generated from message gnostic.openapi.v3.DefaultType
 */
export type DefaultType = Message<"gnostic.openapi.v3.DefaultType"> & {
    /**
     * @generated from oneof gnostic.openapi.v3.DefaultType.oneof
     */
    oneof: {
        /**
         * @generated from field: double number = 1;
         */
        value: number;
        case: "number";
    } | {
        /**
         * @generated from field: bool boolean = 2;
         */
        value: boolean;
        case: "boolean";
    } | {
        /**
         * @generated from field: string string = 3;
         */
        value: string;
        case: "string";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gnostic.openapi.v3.DefaultType.
 * Use `create(DefaultTypeSchema)` to create a new message.
 */
export declare const DefaultTypeSchema: GenMessage<DefaultType>;
/**
 * When request bodies or response payloads may be one of a number of different schemas, a `discriminator` object can be used to aid in serialization, deserialization, and validation.  The discriminator is a specific object in a schema which is used to inform the consumer of the specification of an alternative schema based on the value associated with it.  When using the discriminator, _inline_ schemas will not be considered.
 *
 * @generated from message gnostic.openapi.v3.Discriminator
 */
export type Discriminator = Message<"gnostic.openapi.v3.Discriminator"> & {
    /**
     * @generated from field: string property_name = 1;
     */
    propertyName: string;
    /**
     * @generated from field: gnostic.openapi.v3.Strings mapping = 2;
     */
    mapping?: Strings;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 3;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Discriminator.
 * Use `create(DiscriminatorSchema)` to create a new message.
 */
export declare const DiscriminatorSchema: GenMessage<Discriminator>;
/**
 * @generated from message gnostic.openapi.v3.Document
 */
export type Document = Message<"gnostic.openapi.v3.Document"> & {
    /**
     * @generated from field: string openapi = 1;
     */
    openapi: string;
    /**
     * @generated from field: gnostic.openapi.v3.Info info = 2;
     */
    info?: Info;
    /**
     * @generated from field: repeated gnostic.openapi.v3.Server servers = 3;
     */
    servers: Server[];
    /**
     * @generated from field: gnostic.openapi.v3.Paths paths = 4;
     */
    paths?: Paths;
    /**
     * @generated from field: gnostic.openapi.v3.Components components = 5;
     */
    components?: Components;
    /**
     * @generated from field: repeated gnostic.openapi.v3.SecurityRequirement security = 6;
     */
    security: SecurityRequirement[];
    /**
     * @generated from field: repeated gnostic.openapi.v3.Tag tags = 7;
     */
    tags: Tag[];
    /**
     * @generated from field: gnostic.openapi.v3.ExternalDocs external_docs = 8;
     */
    externalDocs?: ExternalDocs;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 9;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Document.
 * Use `create(DocumentSchema)` to create a new message.
 */
export declare const DocumentSchema: GenMessage<Document>;
/**
 * A single encoding definition applied to a single schema property.
 *
 * @generated from message gnostic.openapi.v3.Encoding
 */
export type Encoding = Message<"gnostic.openapi.v3.Encoding"> & {
    /**
     * @generated from field: string content_type = 1;
     */
    contentType: string;
    /**
     * @generated from field: gnostic.openapi.v3.HeadersOrReferences headers = 2;
     */
    headers?: HeadersOrReferences;
    /**
     * @generated from field: string style = 3;
     */
    style: string;
    /**
     * @generated from field: bool explode = 4;
     */
    explode: boolean;
    /**
     * @generated from field: bool allow_reserved = 5;
     */
    allowReserved: boolean;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 6;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Encoding.
 * Use `create(EncodingSchema)` to create a new message.
 */
export declare const EncodingSchema: GenMessage<Encoding>;
/**
 * @generated from message gnostic.openapi.v3.Encodings
 */
export type Encodings = Message<"gnostic.openapi.v3.Encodings"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedEncoding additional_properties = 1;
     */
    additionalProperties: NamedEncoding[];
};
/**
 * Describes the message gnostic.openapi.v3.Encodings.
 * Use `create(EncodingsSchema)` to create a new message.
 */
export declare const EncodingsSchema: GenMessage<Encodings>;
/**
 * @generated from message gnostic.openapi.v3.Example
 */
export type Example = Message<"gnostic.openapi.v3.Example"> & {
    /**
     * @generated from field: string summary = 1;
     */
    summary: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: gnostic.openapi.v3.Any value = 3;
     */
    value?: Any;
    /**
     * @generated from field: string external_value = 4;
     */
    externalValue: string;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 5;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Example.
 * Use `create(ExampleSchema)` to create a new message.
 */
export declare const ExampleSchema: GenMessage<Example>;
/**
 * @generated from message gnostic.openapi.v3.ExampleOrReference
 */
export type ExampleOrReference = Message<"gnostic.openapi.v3.ExampleOrReference"> & {
    /**
     * @generated from oneof gnostic.openapi.v3.ExampleOrReference.oneof
     */
    oneof: {
        /**
         * @generated from field: gnostic.openapi.v3.Example example = 1;
         */
        value: Example;
        case: "example";
    } | {
        /**
         * @generated from field: gnostic.openapi.v3.Reference reference = 2;
         */
        value: Reference;
        case: "reference";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gnostic.openapi.v3.ExampleOrReference.
 * Use `create(ExampleOrReferenceSchema)` to create a new message.
 */
export declare const ExampleOrReferenceSchema: GenMessage<ExampleOrReference>;
/**
 * @generated from message gnostic.openapi.v3.ExamplesOrReferences
 */
export type ExamplesOrReferences = Message<"gnostic.openapi.v3.ExamplesOrReferences"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedExampleOrReference additional_properties = 1;
     */
    additionalProperties: NamedExampleOrReference[];
};
/**
 * Describes the message gnostic.openapi.v3.ExamplesOrReferences.
 * Use `create(ExamplesOrReferencesSchema)` to create a new message.
 */
export declare const ExamplesOrReferencesSchema: GenMessage<ExamplesOrReferences>;
/**
 * @generated from message gnostic.openapi.v3.Expression
 */
export type Expression = Message<"gnostic.openapi.v3.Expression"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny additional_properties = 1;
     */
    additionalProperties: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Expression.
 * Use `create(ExpressionSchema)` to create a new message.
 */
export declare const ExpressionSchema: GenMessage<Expression>;
/**
 * Allows referencing an external resource for extended documentation.
 *
 * @generated from message gnostic.openapi.v3.ExternalDocs
 */
export type ExternalDocs = Message<"gnostic.openapi.v3.ExternalDocs"> & {
    /**
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * @generated from field: string url = 2;
     */
    url: string;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 3;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.ExternalDocs.
 * Use `create(ExternalDocsSchema)` to create a new message.
 */
export declare const ExternalDocsSchema: GenMessage<ExternalDocs>;
/**
 * The Header Object follows the structure of the Parameter Object with the following changes:  1. `name` MUST NOT be specified, it is given in the corresponding `headers` map. 1. `in` MUST NOT be specified, it is implicitly in `header`. 1. All traits that are affected by the location MUST be applicable to a location of `header` (for example, `style`).
 *
 * @generated from message gnostic.openapi.v3.Header
 */
export type Header = Message<"gnostic.openapi.v3.Header"> & {
    /**
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * @generated from field: bool required = 2;
     */
    required: boolean;
    /**
     * @generated from field: bool deprecated = 3;
     */
    deprecated: boolean;
    /**
     * @generated from field: bool allow_empty_value = 4;
     */
    allowEmptyValue: boolean;
    /**
     * @generated from field: string style = 5;
     */
    style: string;
    /**
     * @generated from field: bool explode = 6;
     */
    explode: boolean;
    /**
     * @generated from field: bool allow_reserved = 7;
     */
    allowReserved: boolean;
    /**
     * @generated from field: gnostic.openapi.v3.SchemaOrReference schema = 8;
     */
    schema?: SchemaOrReference;
    /**
     * @generated from field: gnostic.openapi.v3.Any example = 9;
     */
    example?: Any;
    /**
     * @generated from field: gnostic.openapi.v3.ExamplesOrReferences examples = 10;
     */
    examples?: ExamplesOrReferences;
    /**
     * @generated from field: gnostic.openapi.v3.MediaTypes content = 11;
     */
    content?: MediaTypes;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 12;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Header.
 * Use `create(HeaderSchema)` to create a new message.
 */
export declare const HeaderSchema: GenMessage<Header>;
/**
 * @generated from message gnostic.openapi.v3.HeaderOrReference
 */
export type HeaderOrReference = Message<"gnostic.openapi.v3.HeaderOrReference"> & {
    /**
     * @generated from oneof gnostic.openapi.v3.HeaderOrReference.oneof
     */
    oneof: {
        /**
         * @generated from field: gnostic.openapi.v3.Header header = 1;
         */
        value: Header;
        case: "header";
    } | {
        /**
         * @generated from field: gnostic.openapi.v3.Reference reference = 2;
         */
        value: Reference;
        case: "reference";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gnostic.openapi.v3.HeaderOrReference.
 * Use `create(HeaderOrReferenceSchema)` to create a new message.
 */
export declare const HeaderOrReferenceSchema: GenMessage<HeaderOrReference>;
/**
 * @generated from message gnostic.openapi.v3.HeadersOrReferences
 */
export type HeadersOrReferences = Message<"gnostic.openapi.v3.HeadersOrReferences"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedHeaderOrReference additional_properties = 1;
     */
    additionalProperties: NamedHeaderOrReference[];
};
/**
 * Describes the message gnostic.openapi.v3.HeadersOrReferences.
 * Use `create(HeadersOrReferencesSchema)` to create a new message.
 */
export declare const HeadersOrReferencesSchema: GenMessage<HeadersOrReferences>;
/**
 * The object provides metadata about the API. The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.
 *
 * @generated from message gnostic.openapi.v3.Info
 */
export type Info = Message<"gnostic.openapi.v3.Info"> & {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string terms_of_service = 3;
     */
    termsOfService: string;
    /**
     * @generated from field: gnostic.openapi.v3.Contact contact = 4;
     */
    contact?: Contact;
    /**
     * @generated from field: gnostic.openapi.v3.License license = 5;
     */
    license?: License;
    /**
     * @generated from field: string version = 6;
     */
    version: string;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 7;
     */
    specificationExtension: NamedAny[];
    /**
     * @generated from field: string summary = 8;
     */
    summary: string;
};
/**
 * Describes the message gnostic.openapi.v3.Info.
 * Use `create(InfoSchema)` to create a new message.
 */
export declare const InfoSchema: GenMessage<Info>;
/**
 * @generated from message gnostic.openapi.v3.ItemsItem
 */
export type ItemsItem = Message<"gnostic.openapi.v3.ItemsItem"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.SchemaOrReference schema_or_reference = 1;
     */
    schemaOrReference: SchemaOrReference[];
};
/**
 * Describes the message gnostic.openapi.v3.ItemsItem.
 * Use `create(ItemsItemSchema)` to create a new message.
 */
export declare const ItemsItemSchema: GenMessage<ItemsItem>;
/**
 * License information for the exposed API.
 *
 * @generated from message gnostic.openapi.v3.License
 */
export type License = Message<"gnostic.openapi.v3.License"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string url = 2;
     */
    url: string;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 3;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.License.
 * Use `create(LicenseSchema)` to create a new message.
 */
export declare const LicenseSchema: GenMessage<License>;
/**
 * The `Link object` represents a possible design-time link for a response. The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.  Unlike _dynamic_ links (i.e. links provided **in** the response payload), the OAS linking mechanism does not require link information in the runtime response.  For computing links, and providing instructions to execute them, a runtime expression is used for accessing values in an operation and using them as parameters while invoking the linked operation.
 *
 * @generated from message gnostic.openapi.v3.Link
 */
export type Link = Message<"gnostic.openapi.v3.Link"> & {
    /**
     * @generated from field: string operation_ref = 1;
     */
    operationRef: string;
    /**
     * @generated from field: string operation_id = 2;
     */
    operationId: string;
    /**
     * @generated from field: gnostic.openapi.v3.AnyOrExpression parameters = 3;
     */
    parameters?: AnyOrExpression;
    /**
     * @generated from field: gnostic.openapi.v3.AnyOrExpression request_body = 4;
     */
    requestBody?: AnyOrExpression;
    /**
     * @generated from field: string description = 5;
     */
    description: string;
    /**
     * @generated from field: gnostic.openapi.v3.Server server = 6;
     */
    server?: Server;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 7;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Link.
 * Use `create(LinkSchema)` to create a new message.
 */
export declare const LinkSchema: GenMessage<Link>;
/**
 * @generated from message gnostic.openapi.v3.LinkOrReference
 */
export type LinkOrReference = Message<"gnostic.openapi.v3.LinkOrReference"> & {
    /**
     * @generated from oneof gnostic.openapi.v3.LinkOrReference.oneof
     */
    oneof: {
        /**
         * @generated from field: gnostic.openapi.v3.Link link = 1;
         */
        value: Link;
        case: "link";
    } | {
        /**
         * @generated from field: gnostic.openapi.v3.Reference reference = 2;
         */
        value: Reference;
        case: "reference";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gnostic.openapi.v3.LinkOrReference.
 * Use `create(LinkOrReferenceSchema)` to create a new message.
 */
export declare const LinkOrReferenceSchema: GenMessage<LinkOrReference>;
/**
 * @generated from message gnostic.openapi.v3.LinksOrReferences
 */
export type LinksOrReferences = Message<"gnostic.openapi.v3.LinksOrReferences"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedLinkOrReference additional_properties = 1;
     */
    additionalProperties: NamedLinkOrReference[];
};
/**
 * Describes the message gnostic.openapi.v3.LinksOrReferences.
 * Use `create(LinksOrReferencesSchema)` to create a new message.
 */
export declare const LinksOrReferencesSchema: GenMessage<LinksOrReferences>;
/**
 * Each Media Type Object provides schema and examples for the media type identified by its key.
 *
 * @generated from message gnostic.openapi.v3.MediaType
 */
export type MediaType = Message<"gnostic.openapi.v3.MediaType"> & {
    /**
     * @generated from field: gnostic.openapi.v3.SchemaOrReference schema = 1;
     */
    schema?: SchemaOrReference;
    /**
     * @generated from field: gnostic.openapi.v3.Any example = 2;
     */
    example?: Any;
    /**
     * @generated from field: gnostic.openapi.v3.ExamplesOrReferences examples = 3;
     */
    examples?: ExamplesOrReferences;
    /**
     * @generated from field: gnostic.openapi.v3.Encodings encoding = 4;
     */
    encoding?: Encodings;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 5;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.MediaType.
 * Use `create(MediaTypeSchema)` to create a new message.
 */
export declare const MediaTypeSchema: GenMessage<MediaType>;
/**
 * @generated from message gnostic.openapi.v3.MediaTypes
 */
export type MediaTypes = Message<"gnostic.openapi.v3.MediaTypes"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedMediaType additional_properties = 1;
     */
    additionalProperties: NamedMediaType[];
};
/**
 * Describes the message gnostic.openapi.v3.MediaTypes.
 * Use `create(MediaTypesSchema)` to create a new message.
 */
export declare const MediaTypesSchema: GenMessage<MediaTypes>;
/**
 * Automatically-generated message used to represent maps of Any as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedAny
 */
export type NamedAny = Message<"gnostic.openapi.v3.NamedAny"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: gnostic.openapi.v3.Any value = 2;
     */
    value?: Any;
};
/**
 * Describes the message gnostic.openapi.v3.NamedAny.
 * Use `create(NamedAnySchema)` to create a new message.
 */
export declare const NamedAnySchema: GenMessage<NamedAny>;
/**
 * Automatically-generated message used to represent maps of CallbackOrReference as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedCallbackOrReference
 */
export type NamedCallbackOrReference = Message<"gnostic.openapi.v3.NamedCallbackOrReference"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: gnostic.openapi.v3.CallbackOrReference value = 2;
     */
    value?: CallbackOrReference;
};
/**
 * Describes the message gnostic.openapi.v3.NamedCallbackOrReference.
 * Use `create(NamedCallbackOrReferenceSchema)` to create a new message.
 */
export declare const NamedCallbackOrReferenceSchema: GenMessage<NamedCallbackOrReference>;
/**
 * Automatically-generated message used to represent maps of Encoding as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedEncoding
 */
export type NamedEncoding = Message<"gnostic.openapi.v3.NamedEncoding"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: gnostic.openapi.v3.Encoding value = 2;
     */
    value?: Encoding;
};
/**
 * Describes the message gnostic.openapi.v3.NamedEncoding.
 * Use `create(NamedEncodingSchema)` to create a new message.
 */
export declare const NamedEncodingSchema: GenMessage<NamedEncoding>;
/**
 * Automatically-generated message used to represent maps of ExampleOrReference as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedExampleOrReference
 */
export type NamedExampleOrReference = Message<"gnostic.openapi.v3.NamedExampleOrReference"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: gnostic.openapi.v3.ExampleOrReference value = 2;
     */
    value?: ExampleOrReference;
};
/**
 * Describes the message gnostic.openapi.v3.NamedExampleOrReference.
 * Use `create(NamedExampleOrReferenceSchema)` to create a new message.
 */
export declare const NamedExampleOrReferenceSchema: GenMessage<NamedExampleOrReference>;
/**
 * Automatically-generated message used to represent maps of HeaderOrReference as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedHeaderOrReference
 */
export type NamedHeaderOrReference = Message<"gnostic.openapi.v3.NamedHeaderOrReference"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: gnostic.openapi.v3.HeaderOrReference value = 2;
     */
    value?: HeaderOrReference;
};
/**
 * Describes the message gnostic.openapi.v3.NamedHeaderOrReference.
 * Use `create(NamedHeaderOrReferenceSchema)` to create a new message.
 */
export declare const NamedHeaderOrReferenceSchema: GenMessage<NamedHeaderOrReference>;
/**
 * Automatically-generated message used to represent maps of LinkOrReference as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedLinkOrReference
 */
export type NamedLinkOrReference = Message<"gnostic.openapi.v3.NamedLinkOrReference"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: gnostic.openapi.v3.LinkOrReference value = 2;
     */
    value?: LinkOrReference;
};
/**
 * Describes the message gnostic.openapi.v3.NamedLinkOrReference.
 * Use `create(NamedLinkOrReferenceSchema)` to create a new message.
 */
export declare const NamedLinkOrReferenceSchema: GenMessage<NamedLinkOrReference>;
/**
 * Automatically-generated message used to represent maps of MediaType as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedMediaType
 */
export type NamedMediaType = Message<"gnostic.openapi.v3.NamedMediaType"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: gnostic.openapi.v3.MediaType value = 2;
     */
    value?: MediaType;
};
/**
 * Describes the message gnostic.openapi.v3.NamedMediaType.
 * Use `create(NamedMediaTypeSchema)` to create a new message.
 */
export declare const NamedMediaTypeSchema: GenMessage<NamedMediaType>;
/**
 * Automatically-generated message used to represent maps of ParameterOrReference as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedParameterOrReference
 */
export type NamedParameterOrReference = Message<"gnostic.openapi.v3.NamedParameterOrReference"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: gnostic.openapi.v3.ParameterOrReference value = 2;
     */
    value?: ParameterOrReference;
};
/**
 * Describes the message gnostic.openapi.v3.NamedParameterOrReference.
 * Use `create(NamedParameterOrReferenceSchema)` to create a new message.
 */
export declare const NamedParameterOrReferenceSchema: GenMessage<NamedParameterOrReference>;
/**
 * Automatically-generated message used to represent maps of PathItem as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedPathItem
 */
export type NamedPathItem = Message<"gnostic.openapi.v3.NamedPathItem"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: gnostic.openapi.v3.PathItem value = 2;
     */
    value?: PathItem;
};
/**
 * Describes the message gnostic.openapi.v3.NamedPathItem.
 * Use `create(NamedPathItemSchema)` to create a new message.
 */
export declare const NamedPathItemSchema: GenMessage<NamedPathItem>;
/**
 * Automatically-generated message used to represent maps of RequestBodyOrReference as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedRequestBodyOrReference
 */
export type NamedRequestBodyOrReference = Message<"gnostic.openapi.v3.NamedRequestBodyOrReference"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: gnostic.openapi.v3.RequestBodyOrReference value = 2;
     */
    value?: RequestBodyOrReference;
};
/**
 * Describes the message gnostic.openapi.v3.NamedRequestBodyOrReference.
 * Use `create(NamedRequestBodyOrReferenceSchema)` to create a new message.
 */
export declare const NamedRequestBodyOrReferenceSchema: GenMessage<NamedRequestBodyOrReference>;
/**
 * Automatically-generated message used to represent maps of ResponseOrReference as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedResponseOrReference
 */
export type NamedResponseOrReference = Message<"gnostic.openapi.v3.NamedResponseOrReference"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: gnostic.openapi.v3.ResponseOrReference value = 2;
     */
    value?: ResponseOrReference;
};
/**
 * Describes the message gnostic.openapi.v3.NamedResponseOrReference.
 * Use `create(NamedResponseOrReferenceSchema)` to create a new message.
 */
export declare const NamedResponseOrReferenceSchema: GenMessage<NamedResponseOrReference>;
/**
 * Automatically-generated message used to represent maps of SchemaOrReference as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedSchemaOrReference
 */
export type NamedSchemaOrReference = Message<"gnostic.openapi.v3.NamedSchemaOrReference"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: gnostic.openapi.v3.SchemaOrReference value = 2;
     */
    value?: SchemaOrReference;
};
/**
 * Describes the message gnostic.openapi.v3.NamedSchemaOrReference.
 * Use `create(NamedSchemaOrReferenceSchema)` to create a new message.
 */
export declare const NamedSchemaOrReferenceSchema: GenMessage<NamedSchemaOrReference>;
/**
 * Automatically-generated message used to represent maps of SecuritySchemeOrReference as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedSecuritySchemeOrReference
 */
export type NamedSecuritySchemeOrReference = Message<"gnostic.openapi.v3.NamedSecuritySchemeOrReference"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: gnostic.openapi.v3.SecuritySchemeOrReference value = 2;
     */
    value?: SecuritySchemeOrReference;
};
/**
 * Describes the message gnostic.openapi.v3.NamedSecuritySchemeOrReference.
 * Use `create(NamedSecuritySchemeOrReferenceSchema)` to create a new message.
 */
export declare const NamedSecuritySchemeOrReferenceSchema: GenMessage<NamedSecuritySchemeOrReference>;
/**
 * Automatically-generated message used to represent maps of ServerVariable as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedServerVariable
 */
export type NamedServerVariable = Message<"gnostic.openapi.v3.NamedServerVariable"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: gnostic.openapi.v3.ServerVariable value = 2;
     */
    value?: ServerVariable;
};
/**
 * Describes the message gnostic.openapi.v3.NamedServerVariable.
 * Use `create(NamedServerVariableSchema)` to create a new message.
 */
export declare const NamedServerVariableSchema: GenMessage<NamedServerVariable>;
/**
 * Automatically-generated message used to represent maps of string as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedString
 */
export type NamedString = Message<"gnostic.openapi.v3.NamedString"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: string value = 2;
     */
    value: string;
};
/**
 * Describes the message gnostic.openapi.v3.NamedString.
 * Use `create(NamedStringSchema)` to create a new message.
 */
export declare const NamedStringSchema: GenMessage<NamedString>;
/**
 * Automatically-generated message used to represent maps of StringArray as ordered (name,value) pairs.
 *
 * @generated from message gnostic.openapi.v3.NamedStringArray
 */
export type NamedStringArray = Message<"gnostic.openapi.v3.NamedStringArray"> & {
    /**
     * Map key
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Mapped value
     *
     * @generated from field: gnostic.openapi.v3.StringArray value = 2;
     */
    value?: StringArray;
};
/**
 * Describes the message gnostic.openapi.v3.NamedStringArray.
 * Use `create(NamedStringArraySchema)` to create a new message.
 */
export declare const NamedStringArraySchema: GenMessage<NamedStringArray>;
/**
 * Configuration details for a supported OAuth Flow
 *
 * @generated from message gnostic.openapi.v3.OauthFlow
 */
export type OauthFlow = Message<"gnostic.openapi.v3.OauthFlow"> & {
    /**
     * @generated from field: string authorization_url = 1;
     */
    authorizationUrl: string;
    /**
     * @generated from field: string token_url = 2;
     */
    tokenUrl: string;
    /**
     * @generated from field: string refresh_url = 3;
     */
    refreshUrl: string;
    /**
     * @generated from field: gnostic.openapi.v3.Strings scopes = 4;
     */
    scopes?: Strings;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 5;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.OauthFlow.
 * Use `create(OauthFlowSchema)` to create a new message.
 */
export declare const OauthFlowSchema: GenMessage<OauthFlow>;
/**
 * Allows configuration of the supported OAuth Flows.
 *
 * @generated from message gnostic.openapi.v3.OauthFlows
 */
export type OauthFlows = Message<"gnostic.openapi.v3.OauthFlows"> & {
    /**
     * @generated from field: gnostic.openapi.v3.OauthFlow implicit = 1;
     */
    implicit?: OauthFlow;
    /**
     * @generated from field: gnostic.openapi.v3.OauthFlow password = 2;
     */
    password?: OauthFlow;
    /**
     * @generated from field: gnostic.openapi.v3.OauthFlow client_credentials = 3;
     */
    clientCredentials?: OauthFlow;
    /**
     * @generated from field: gnostic.openapi.v3.OauthFlow authorization_code = 4;
     */
    authorizationCode?: OauthFlow;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 5;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.OauthFlows.
 * Use `create(OauthFlowsSchema)` to create a new message.
 */
export declare const OauthFlowsSchema: GenMessage<OauthFlows>;
/**
 * @generated from message gnostic.openapi.v3.Object
 */
export type Object$ = Message<"gnostic.openapi.v3.Object"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny additional_properties = 1;
     */
    additionalProperties: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Object.
 * Use `create(ObjectSchema)` to create a new message.
 */
export declare const ObjectSchema: GenMessage<Object$>;
/**
 * Describes a single API operation on a path.
 *
 * @generated from message gnostic.openapi.v3.Operation
 */
export type Operation = Message<"gnostic.openapi.v3.Operation"> & {
    /**
     * @generated from field: repeated string tags = 1;
     */
    tags: string[];
    /**
     * @generated from field: string summary = 2;
     */
    summary: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: gnostic.openapi.v3.ExternalDocs external_docs = 4;
     */
    externalDocs?: ExternalDocs;
    /**
     * @generated from field: string operation_id = 5;
     */
    operationId: string;
    /**
     * @generated from field: repeated gnostic.openapi.v3.ParameterOrReference parameters = 6;
     */
    parameters: ParameterOrReference[];
    /**
     * @generated from field: gnostic.openapi.v3.RequestBodyOrReference request_body = 7;
     */
    requestBody?: RequestBodyOrReference;
    /**
     * @generated from field: gnostic.openapi.v3.Responses responses = 8;
     */
    responses?: Responses;
    /**
     * @generated from field: gnostic.openapi.v3.CallbacksOrReferences callbacks = 9;
     */
    callbacks?: CallbacksOrReferences;
    /**
     * @generated from field: bool deprecated = 10;
     */
    deprecated: boolean;
    /**
     * @generated from field: repeated gnostic.openapi.v3.SecurityRequirement security = 11;
     */
    security: SecurityRequirement[];
    /**
     * @generated from field: repeated gnostic.openapi.v3.Server servers = 12;
     */
    servers: Server[];
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 13;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Operation.
 * Use `create(OperationSchema)` to create a new message.
 */
export declare const OperationSchema: GenMessage<Operation>;
/**
 * Describes a single operation parameter.  A unique parameter is defined by a combination of a name and location.
 *
 * @generated from message gnostic.openapi.v3.Parameter
 */
export type Parameter = Message<"gnostic.openapi.v3.Parameter"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string in = 2;
     */
    in: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: bool required = 4;
     */
    required: boolean;
    /**
     * @generated from field: bool deprecated = 5;
     */
    deprecated: boolean;
    /**
     * @generated from field: bool allow_empty_value = 6;
     */
    allowEmptyValue: boolean;
    /**
     * @generated from field: string style = 7;
     */
    style: string;
    /**
     * @generated from field: bool explode = 8;
     */
    explode: boolean;
    /**
     * @generated from field: bool allow_reserved = 9;
     */
    allowReserved: boolean;
    /**
     * @generated from field: gnostic.openapi.v3.SchemaOrReference schema = 10;
     */
    schema?: SchemaOrReference;
    /**
     * @generated from field: gnostic.openapi.v3.Any example = 11;
     */
    example?: Any;
    /**
     * @generated from field: gnostic.openapi.v3.ExamplesOrReferences examples = 12;
     */
    examples?: ExamplesOrReferences;
    /**
     * @generated from field: gnostic.openapi.v3.MediaTypes content = 13;
     */
    content?: MediaTypes;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 14;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Parameter.
 * Use `create(ParameterSchema)` to create a new message.
 */
export declare const ParameterSchema: GenMessage<Parameter>;
/**
 * @generated from message gnostic.openapi.v3.ParameterOrReference
 */
export type ParameterOrReference = Message<"gnostic.openapi.v3.ParameterOrReference"> & {
    /**
     * @generated from oneof gnostic.openapi.v3.ParameterOrReference.oneof
     */
    oneof: {
        /**
         * @generated from field: gnostic.openapi.v3.Parameter parameter = 1;
         */
        value: Parameter;
        case: "parameter";
    } | {
        /**
         * @generated from field: gnostic.openapi.v3.Reference reference = 2;
         */
        value: Reference;
        case: "reference";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gnostic.openapi.v3.ParameterOrReference.
 * Use `create(ParameterOrReferenceSchema)` to create a new message.
 */
export declare const ParameterOrReferenceSchema: GenMessage<ParameterOrReference>;
/**
 * @generated from message gnostic.openapi.v3.ParametersOrReferences
 */
export type ParametersOrReferences = Message<"gnostic.openapi.v3.ParametersOrReferences"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedParameterOrReference additional_properties = 1;
     */
    additionalProperties: NamedParameterOrReference[];
};
/**
 * Describes the message gnostic.openapi.v3.ParametersOrReferences.
 * Use `create(ParametersOrReferencesSchema)` to create a new message.
 */
export declare const ParametersOrReferencesSchema: GenMessage<ParametersOrReferences>;
/**
 * Describes the operations available on a single path. A Path Item MAY be empty, due to ACL constraints. The path itself is still exposed to the documentation viewer but they will not know which operations and parameters are available.
 *
 * @generated from message gnostic.openapi.v3.PathItem
 */
export type PathItem = Message<"gnostic.openapi.v3.PathItem"> & {
    /**
     * @generated from field: string _ref = 1;
     */
    Ref: string;
    /**
     * @generated from field: string summary = 2;
     */
    summary: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: gnostic.openapi.v3.Operation get = 4;
     */
    get?: Operation;
    /**
     * @generated from field: gnostic.openapi.v3.Operation put = 5;
     */
    put?: Operation;
    /**
     * @generated from field: gnostic.openapi.v3.Operation post = 6;
     */
    post?: Operation;
    /**
     * @generated from field: gnostic.openapi.v3.Operation delete = 7;
     */
    delete?: Operation;
    /**
     * @generated from field: gnostic.openapi.v3.Operation options = 8;
     */
    options?: Operation;
    /**
     * @generated from field: gnostic.openapi.v3.Operation head = 9;
     */
    head?: Operation;
    /**
     * @generated from field: gnostic.openapi.v3.Operation patch = 10;
     */
    patch?: Operation;
    /**
     * @generated from field: gnostic.openapi.v3.Operation trace = 11;
     */
    trace?: Operation;
    /**
     * @generated from field: repeated gnostic.openapi.v3.Server servers = 12;
     */
    servers: Server[];
    /**
     * @generated from field: repeated gnostic.openapi.v3.ParameterOrReference parameters = 13;
     */
    parameters: ParameterOrReference[];
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 14;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.PathItem.
 * Use `create(PathItemSchema)` to create a new message.
 */
export declare const PathItemSchema: GenMessage<PathItem>;
/**
 * Holds the relative paths to the individual endpoints and their operations. The path is appended to the URL from the `Server Object` in order to construct the full URL.  The Paths MAY be empty, due to ACL constraints.
 *
 * @generated from message gnostic.openapi.v3.Paths
 */
export type Paths = Message<"gnostic.openapi.v3.Paths"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedPathItem path = 1;
     */
    path: NamedPathItem[];
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 2;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Paths.
 * Use `create(PathsSchema)` to create a new message.
 */
export declare const PathsSchema: GenMessage<Paths>;
/**
 * @generated from message gnostic.openapi.v3.Properties
 */
export type Properties = Message<"gnostic.openapi.v3.Properties"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedSchemaOrReference additional_properties = 1;
     */
    additionalProperties: NamedSchemaOrReference[];
};
/**
 * Describes the message gnostic.openapi.v3.Properties.
 * Use `create(PropertiesSchema)` to create a new message.
 */
export declare const PropertiesSchema: GenMessage<Properties>;
/**
 * A simple object to allow referencing other components in the specification, internally and externally.  The Reference Object is defined by JSON Reference and follows the same structure, behavior and rules.   For this specification, reference resolution is accomplished as defined by the JSON Reference specification and not by the JSON Schema specification.
 *
 * @generated from message gnostic.openapi.v3.Reference
 */
export type Reference = Message<"gnostic.openapi.v3.Reference"> & {
    /**
     * @generated from field: string _ref = 1;
     */
    Ref: string;
    /**
     * @generated from field: string summary = 2;
     */
    summary: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
};
/**
 * Describes the message gnostic.openapi.v3.Reference.
 * Use `create(ReferenceSchema)` to create a new message.
 */
export declare const ReferenceSchema: GenMessage<Reference>;
/**
 * @generated from message gnostic.openapi.v3.RequestBodiesOrReferences
 */
export type RequestBodiesOrReferences = Message<"gnostic.openapi.v3.RequestBodiesOrReferences"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedRequestBodyOrReference additional_properties = 1;
     */
    additionalProperties: NamedRequestBodyOrReference[];
};
/**
 * Describes the message gnostic.openapi.v3.RequestBodiesOrReferences.
 * Use `create(RequestBodiesOrReferencesSchema)` to create a new message.
 */
export declare const RequestBodiesOrReferencesSchema: GenMessage<RequestBodiesOrReferences>;
/**
 * Describes a single request body.
 *
 * @generated from message gnostic.openapi.v3.RequestBody
 */
export type RequestBody = Message<"gnostic.openapi.v3.RequestBody"> & {
    /**
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * @generated from field: gnostic.openapi.v3.MediaTypes content = 2;
     */
    content?: MediaTypes;
    /**
     * @generated from field: bool required = 3;
     */
    required: boolean;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 4;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.RequestBody.
 * Use `create(RequestBodySchema)` to create a new message.
 */
export declare const RequestBodySchema: GenMessage<RequestBody>;
/**
 * @generated from message gnostic.openapi.v3.RequestBodyOrReference
 */
export type RequestBodyOrReference = Message<"gnostic.openapi.v3.RequestBodyOrReference"> & {
    /**
     * @generated from oneof gnostic.openapi.v3.RequestBodyOrReference.oneof
     */
    oneof: {
        /**
         * @generated from field: gnostic.openapi.v3.RequestBody request_body = 1;
         */
        value: RequestBody;
        case: "requestBody";
    } | {
        /**
         * @generated from field: gnostic.openapi.v3.Reference reference = 2;
         */
        value: Reference;
        case: "reference";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gnostic.openapi.v3.RequestBodyOrReference.
 * Use `create(RequestBodyOrReferenceSchema)` to create a new message.
 */
export declare const RequestBodyOrReferenceSchema: GenMessage<RequestBodyOrReference>;
/**
 * Describes a single response from an API Operation, including design-time, static  `links` to operations based on the response.
 *
 * @generated from message gnostic.openapi.v3.Response
 */
export type Response = Message<"gnostic.openapi.v3.Response"> & {
    /**
     * @generated from field: string description = 1;
     */
    description: string;
    /**
     * @generated from field: gnostic.openapi.v3.HeadersOrReferences headers = 2;
     */
    headers?: HeadersOrReferences;
    /**
     * @generated from field: gnostic.openapi.v3.MediaTypes content = 3;
     */
    content?: MediaTypes;
    /**
     * @generated from field: gnostic.openapi.v3.LinksOrReferences links = 4;
     */
    links?: LinksOrReferences;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 5;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Response.
 * Use `create(ResponseSchema)` to create a new message.
 */
export declare const ResponseSchema: GenMessage<Response>;
/**
 * @generated from message gnostic.openapi.v3.ResponseOrReference
 */
export type ResponseOrReference = Message<"gnostic.openapi.v3.ResponseOrReference"> & {
    /**
     * @generated from oneof gnostic.openapi.v3.ResponseOrReference.oneof
     */
    oneof: {
        /**
         * @generated from field: gnostic.openapi.v3.Response response = 1;
         */
        value: Response;
        case: "response";
    } | {
        /**
         * @generated from field: gnostic.openapi.v3.Reference reference = 2;
         */
        value: Reference;
        case: "reference";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gnostic.openapi.v3.ResponseOrReference.
 * Use `create(ResponseOrReferenceSchema)` to create a new message.
 */
export declare const ResponseOrReferenceSchema: GenMessage<ResponseOrReference>;
/**
 * A container for the expected responses of an operation. The container maps a HTTP response code to the expected response.  The documentation is not necessarily expected to cover all possible HTTP response codes because they may not be known in advance. However, documentation is expected to cover a successful operation response and any known errors.  The `default` MAY be used as a default response object for all HTTP codes  that are not covered individually by the specification.  The `Responses Object` MUST contain at least one response code, and it  SHOULD be the response for a successful operation call.
 *
 * @generated from message gnostic.openapi.v3.Responses
 */
export type Responses = Message<"gnostic.openapi.v3.Responses"> & {
    /**
     * @generated from field: gnostic.openapi.v3.ResponseOrReference default = 1;
     */
    default?: ResponseOrReference;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedResponseOrReference response_or_reference = 2;
     */
    responseOrReference: NamedResponseOrReference[];
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 3;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Responses.
 * Use `create(ResponsesSchema)` to create a new message.
 */
export declare const ResponsesSchema: GenMessage<Responses>;
/**
 * @generated from message gnostic.openapi.v3.ResponsesOrReferences
 */
export type ResponsesOrReferences = Message<"gnostic.openapi.v3.ResponsesOrReferences"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedResponseOrReference additional_properties = 1;
     */
    additionalProperties: NamedResponseOrReference[];
};
/**
 * Describes the message gnostic.openapi.v3.ResponsesOrReferences.
 * Use `create(ResponsesOrReferencesSchema)` to create a new message.
 */
export declare const ResponsesOrReferencesSchema: GenMessage<ResponsesOrReferences>;
/**
 * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is an extended subset of the JSON Schema Specification Wright Draft 00.  For more information about the properties, see JSON Schema Core and JSON Schema Validation. Unless stated otherwise, the property definitions follow the JSON Schema.
 *
 * @generated from message gnostic.openapi.v3.Schema
 */
export type Schema = Message<"gnostic.openapi.v3.Schema"> & {
    /**
     * @generated from field: bool nullable = 1;
     */
    nullable: boolean;
    /**
     * @generated from field: gnostic.openapi.v3.Discriminator discriminator = 2;
     */
    discriminator?: Discriminator;
    /**
     * @generated from field: bool read_only = 3;
     */
    readOnly: boolean;
    /**
     * @generated from field: bool write_only = 4;
     */
    writeOnly: boolean;
    /**
     * @generated from field: gnostic.openapi.v3.Xml xml = 5;
     */
    xml?: Xml;
    /**
     * @generated from field: gnostic.openapi.v3.ExternalDocs external_docs = 6;
     */
    externalDocs?: ExternalDocs;
    /**
     * @generated from field: gnostic.openapi.v3.Any example = 7;
     */
    example?: Any;
    /**
     * @generated from field: bool deprecated = 8;
     */
    deprecated: boolean;
    /**
     * @generated from field: string title = 9;
     */
    title: string;
    /**
     * @generated from field: double multiple_of = 10;
     */
    multipleOf: number;
    /**
     * @generated from field: double maximum = 11;
     */
    maximum: number;
    /**
     * @generated from field: bool exclusive_maximum = 12;
     */
    exclusiveMaximum: boolean;
    /**
     * @generated from field: double minimum = 13;
     */
    minimum: number;
    /**
     * @generated from field: bool exclusive_minimum = 14;
     */
    exclusiveMinimum: boolean;
    /**
     * @generated from field: int64 max_length = 15;
     */
    maxLength: bigint;
    /**
     * @generated from field: int64 min_length = 16;
     */
    minLength: bigint;
    /**
     * @generated from field: string pattern = 17;
     */
    pattern: string;
    /**
     * @generated from field: int64 max_items = 18;
     */
    maxItems: bigint;
    /**
     * @generated from field: int64 min_items = 19;
     */
    minItems: bigint;
    /**
     * @generated from field: bool unique_items = 20;
     */
    uniqueItems: boolean;
    /**
     * @generated from field: int64 max_properties = 21;
     */
    maxProperties: bigint;
    /**
     * @generated from field: int64 min_properties = 22;
     */
    minProperties: bigint;
    /**
     * @generated from field: repeated string required = 23;
     */
    required: string[];
    /**
     * @generated from field: repeated gnostic.openapi.v3.Any enum = 24;
     */
    enum: Any[];
    /**
     * @generated from field: string type = 25;
     */
    type: string;
    /**
     * @generated from field: repeated gnostic.openapi.v3.SchemaOrReference all_of = 26;
     */
    allOf: SchemaOrReference[];
    /**
     * @generated from field: repeated gnostic.openapi.v3.SchemaOrReference one_of = 27;
     */
    oneOf: SchemaOrReference[];
    /**
     * @generated from field: repeated gnostic.openapi.v3.SchemaOrReference any_of = 28;
     */
    anyOf: SchemaOrReference[];
    /**
     * @generated from field: gnostic.openapi.v3.Schema not = 29;
     */
    not?: Schema;
    /**
     * @generated from field: gnostic.openapi.v3.ItemsItem items = 30;
     */
    items?: ItemsItem;
    /**
     * @generated from field: gnostic.openapi.v3.Properties properties = 31;
     */
    properties?: Properties;
    /**
     * @generated from field: gnostic.openapi.v3.AdditionalPropertiesItem additional_properties = 32;
     */
    additionalProperties?: AdditionalPropertiesItem;
    /**
     * @generated from field: gnostic.openapi.v3.DefaultType default = 33;
     */
    default?: DefaultType;
    /**
     * @generated from field: string description = 34;
     */
    description: string;
    /**
     * @generated from field: string format = 35;
     */
    format: string;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 36;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Schema.
 * Use `create(SchemaSchema)` to create a new message.
 */
export declare const SchemaSchema: GenMessage<Schema>;
/**
 * @generated from message gnostic.openapi.v3.SchemaOrReference
 */
export type SchemaOrReference = Message<"gnostic.openapi.v3.SchemaOrReference"> & {
    /**
     * @generated from oneof gnostic.openapi.v3.SchemaOrReference.oneof
     */
    oneof: {
        /**
         * @generated from field: gnostic.openapi.v3.Schema schema = 1;
         */
        value: Schema;
        case: "schema";
    } | {
        /**
         * @generated from field: gnostic.openapi.v3.Reference reference = 2;
         */
        value: Reference;
        case: "reference";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gnostic.openapi.v3.SchemaOrReference.
 * Use `create(SchemaOrReferenceSchema)` to create a new message.
 */
export declare const SchemaOrReferenceSchema: GenMessage<SchemaOrReference>;
/**
 * @generated from message gnostic.openapi.v3.SchemasOrReferences
 */
export type SchemasOrReferences = Message<"gnostic.openapi.v3.SchemasOrReferences"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedSchemaOrReference additional_properties = 1;
     */
    additionalProperties: NamedSchemaOrReference[];
};
/**
 * Describes the message gnostic.openapi.v3.SchemasOrReferences.
 * Use `create(SchemasOrReferencesSchema)` to create a new message.
 */
export declare const SchemasOrReferencesSchema: GenMessage<SchemasOrReferences>;
/**
 * Lists the required security schemes to execute this operation. The name used for each property MUST correspond to a security scheme declared in the Security Schemes under the Components Object.  Security Requirement Objects that contain multiple schemes require that all schemes MUST be satisfied for a request to be authorized. This enables support for scenarios where multiple query parameters or HTTP headers are required to convey security information.  When a list of Security Requirement Objects is defined on the OpenAPI Object or Operation Object, only one of the Security Requirement Objects in the list needs to be satisfied to authorize the request.
 *
 * @generated from message gnostic.openapi.v3.SecurityRequirement
 */
export type SecurityRequirement = Message<"gnostic.openapi.v3.SecurityRequirement"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedStringArray additional_properties = 1;
     */
    additionalProperties: NamedStringArray[];
};
/**
 * Describes the message gnostic.openapi.v3.SecurityRequirement.
 * Use `create(SecurityRequirementSchema)` to create a new message.
 */
export declare const SecurityRequirementSchema: GenMessage<SecurityRequirement>;
/**
 * Defines a security scheme that can be used by the operations. Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), mutual TLS (use of a client certificate), OAuth2's common flows (implicit, password, application and access code) as defined in RFC6749, and OpenID Connect.   Please note that currently (2019) the implicit flow is about to be deprecated OAuth 2.0 Security Best Current Practice. Recommended for most use case is Authorization Code Grant flow with PKCE.
 *
 * @generated from message gnostic.openapi.v3.SecurityScheme
 */
export type SecurityScheme = Message<"gnostic.openapi.v3.SecurityScheme"> & {
    /**
     * @generated from field: string type = 1;
     */
    type: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: string in = 4;
     */
    in: string;
    /**
     * @generated from field: string scheme = 5;
     */
    scheme: string;
    /**
     * @generated from field: string bearer_format = 6;
     */
    bearerFormat: string;
    /**
     * @generated from field: gnostic.openapi.v3.OauthFlows flows = 7;
     */
    flows?: OauthFlows;
    /**
     * @generated from field: string open_id_connect_url = 8;
     */
    openIdConnectUrl: string;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 9;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.SecurityScheme.
 * Use `create(SecuritySchemeSchema)` to create a new message.
 */
export declare const SecuritySchemeSchema: GenMessage<SecurityScheme>;
/**
 * @generated from message gnostic.openapi.v3.SecuritySchemeOrReference
 */
export type SecuritySchemeOrReference = Message<"gnostic.openapi.v3.SecuritySchemeOrReference"> & {
    /**
     * @generated from oneof gnostic.openapi.v3.SecuritySchemeOrReference.oneof
     */
    oneof: {
        /**
         * @generated from field: gnostic.openapi.v3.SecurityScheme security_scheme = 1;
         */
        value: SecurityScheme;
        case: "securityScheme";
    } | {
        /**
         * @generated from field: gnostic.openapi.v3.Reference reference = 2;
         */
        value: Reference;
        case: "reference";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gnostic.openapi.v3.SecuritySchemeOrReference.
 * Use `create(SecuritySchemeOrReferenceSchema)` to create a new message.
 */
export declare const SecuritySchemeOrReferenceSchema: GenMessage<SecuritySchemeOrReference>;
/**
 * @generated from message gnostic.openapi.v3.SecuritySchemesOrReferences
 */
export type SecuritySchemesOrReferences = Message<"gnostic.openapi.v3.SecuritySchemesOrReferences"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedSecuritySchemeOrReference additional_properties = 1;
     */
    additionalProperties: NamedSecuritySchemeOrReference[];
};
/**
 * Describes the message gnostic.openapi.v3.SecuritySchemesOrReferences.
 * Use `create(SecuritySchemesOrReferencesSchema)` to create a new message.
 */
export declare const SecuritySchemesOrReferencesSchema: GenMessage<SecuritySchemesOrReferences>;
/**
 * An object representing a Server.
 *
 * @generated from message gnostic.openapi.v3.Server
 */
export type Server = Message<"gnostic.openapi.v3.Server"> & {
    /**
     * @generated from field: string url = 1;
     */
    url: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: gnostic.openapi.v3.ServerVariables variables = 3;
     */
    variables?: ServerVariables;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 4;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Server.
 * Use `create(ServerSchema)` to create a new message.
 */
export declare const ServerSchema: GenMessage<Server>;
/**
 * An object representing a Server Variable for server URL template substitution.
 *
 * @generated from message gnostic.openapi.v3.ServerVariable
 */
export type ServerVariable = Message<"gnostic.openapi.v3.ServerVariable"> & {
    /**
     * @generated from field: repeated string enum = 1;
     */
    enum: string[];
    /**
     * @generated from field: string default = 2;
     */
    default: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 4;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.ServerVariable.
 * Use `create(ServerVariableSchema)` to create a new message.
 */
export declare const ServerVariableSchema: GenMessage<ServerVariable>;
/**
 * @generated from message gnostic.openapi.v3.ServerVariables
 */
export type ServerVariables = Message<"gnostic.openapi.v3.ServerVariables"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedServerVariable additional_properties = 1;
     */
    additionalProperties: NamedServerVariable[];
};
/**
 * Describes the message gnostic.openapi.v3.ServerVariables.
 * Use `create(ServerVariablesSchema)` to create a new message.
 */
export declare const ServerVariablesSchema: GenMessage<ServerVariables>;
/**
 * Any property starting with x- is valid.
 *
 * @generated from message gnostic.openapi.v3.SpecificationExtension
 */
export type SpecificationExtension = Message<"gnostic.openapi.v3.SpecificationExtension"> & {
    /**
     * @generated from oneof gnostic.openapi.v3.SpecificationExtension.oneof
     */
    oneof: {
        /**
         * @generated from field: double number = 1;
         */
        value: number;
        case: "number";
    } | {
        /**
         * @generated from field: bool boolean = 2;
         */
        value: boolean;
        case: "boolean";
    } | {
        /**
         * @generated from field: string string = 3;
         */
        value: string;
        case: "string";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gnostic.openapi.v3.SpecificationExtension.
 * Use `create(SpecificationExtensionSchema)` to create a new message.
 */
export declare const SpecificationExtensionSchema: GenMessage<SpecificationExtension>;
/**
 * @generated from message gnostic.openapi.v3.StringArray
 */
export type StringArray = Message<"gnostic.openapi.v3.StringArray"> & {
    /**
     * @generated from field: repeated string value = 1;
     */
    value: string[];
};
/**
 * Describes the message gnostic.openapi.v3.StringArray.
 * Use `create(StringArraySchema)` to create a new message.
 */
export declare const StringArraySchema: GenMessage<StringArray>;
/**
 * @generated from message gnostic.openapi.v3.Strings
 */
export type Strings = Message<"gnostic.openapi.v3.Strings"> & {
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedString additional_properties = 1;
     */
    additionalProperties: NamedString[];
};
/**
 * Describes the message gnostic.openapi.v3.Strings.
 * Use `create(StringsSchema)` to create a new message.
 */
export declare const StringsSchema: GenMessage<Strings>;
/**
 * Adds metadata to a single tag that is used by the Operation Object. It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.
 *
 * @generated from message gnostic.openapi.v3.Tag
 */
export type Tag = Message<"gnostic.openapi.v3.Tag"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: gnostic.openapi.v3.ExternalDocs external_docs = 3;
     */
    externalDocs?: ExternalDocs;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 4;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Tag.
 * Use `create(TagSchema)` to create a new message.
 */
export declare const TagSchema: GenMessage<Tag>;
/**
 * A metadata object that allows for more fine-tuned XML model definitions.  When using arrays, XML element names are *not* inferred (for singular/plural forms) and the `name` property SHOULD be used to add that information. See examples for expected behavior.
 *
 * @generated from message gnostic.openapi.v3.Xml
 */
export type Xml = Message<"gnostic.openapi.v3.Xml"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string namespace = 2;
     */
    namespace: string;
    /**
     * @generated from field: string prefix = 3;
     */
    prefix: string;
    /**
     * @generated from field: bool attribute = 4;
     */
    attribute: boolean;
    /**
     * @generated from field: bool wrapped = 5;
     */
    wrapped: boolean;
    /**
     * @generated from field: repeated gnostic.openapi.v3.NamedAny specification_extension = 6;
     */
    specificationExtension: NamedAny[];
};
/**
 * Describes the message gnostic.openapi.v3.Xml.
 * Use `create(XmlSchema)` to create a new message.
 */
export declare const XmlSchema: GenMessage<Xml>;
