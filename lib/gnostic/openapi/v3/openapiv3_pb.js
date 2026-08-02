"use strict";
// Copyright 2020 Google LLC. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationSchema = exports.ObjectSchema = exports.OauthFlowsSchema = exports.OauthFlowSchema = exports.NamedStringArraySchema = exports.NamedStringSchema = exports.NamedServerVariableSchema = exports.NamedSecuritySchemeOrReferenceSchema = exports.NamedSchemaOrReferenceSchema = exports.NamedResponseOrReferenceSchema = exports.NamedRequestBodyOrReferenceSchema = exports.NamedPathItemSchema = exports.NamedParameterOrReferenceSchema = exports.NamedMediaTypeSchema = exports.NamedLinkOrReferenceSchema = exports.NamedHeaderOrReferenceSchema = exports.NamedExampleOrReferenceSchema = exports.NamedEncodingSchema = exports.NamedCallbackOrReferenceSchema = exports.NamedAnySchema = exports.MediaTypesSchema = exports.MediaTypeSchema = exports.LinksOrReferencesSchema = exports.LinkOrReferenceSchema = exports.LinkSchema = exports.LicenseSchema = exports.ItemsItemSchema = exports.InfoSchema = exports.HeadersOrReferencesSchema = exports.HeaderOrReferenceSchema = exports.HeaderSchema = exports.ExternalDocsSchema = exports.ExpressionSchema = exports.ExamplesOrReferencesSchema = exports.ExampleOrReferenceSchema = exports.ExampleSchema = exports.EncodingsSchema = exports.EncodingSchema = exports.DocumentSchema = exports.DiscriminatorSchema = exports.DefaultTypeSchema = exports.ContactSchema = exports.ComponentsSchema = exports.CallbacksOrReferencesSchema = exports.CallbackOrReferenceSchema = exports.CallbackSchema = exports.AnyOrExpressionSchema = exports.AnySchema = exports.AdditionalPropertiesItemSchema = exports.file_gnostic_openapi_v3_openapiv3 = void 0;
exports.XmlSchema = exports.TagSchema = exports.StringsSchema = exports.StringArraySchema = exports.SpecificationExtensionSchema = exports.ServerVariablesSchema = exports.ServerVariableSchema = exports.ServerSchema = exports.SecuritySchemesOrReferencesSchema = exports.SecuritySchemeOrReferenceSchema = exports.SecuritySchemeSchema = exports.SecurityRequirementSchema = exports.SchemasOrReferencesSchema = exports.SchemaOrReferenceSchema = exports.SchemaSchema = exports.ResponsesOrReferencesSchema = exports.ResponsesSchema = exports.ResponseOrReferenceSchema = exports.ResponseSchema = exports.RequestBodyOrReferenceSchema = exports.RequestBodySchema = exports.RequestBodiesOrReferencesSchema = exports.ReferenceSchema = exports.PropertiesSchema = exports.PathsSchema = exports.PathItemSchema = exports.ParametersOrReferencesSchema = exports.ParameterOrReferenceSchema = exports.ParameterSchema = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const wkt_1 = require("@bufbuild/protobuf/wkt");
/**
 * Describes the file gnostic/openapi/v3/openapiv3.proto.
 */
exports.file_gnostic_openapi_v3_openapiv3 = (0, codegenv2_1.fileDesc)("CiJnbm9zdGljL29wZW5hcGkvdjMvb3BlbmFwaXYzLnByb3RvEhJnbm9zdGljLm9wZW5hcGkudjMifAoYQWRkaXRpb25hbFByb3BlcnRpZXNJdGVtEkQKE3NjaGVtYV9vcl9yZWZlcmVuY2UYASABKAsyJS5nbm9zdGljLm9wZW5hcGkudjMuU2NoZW1hT3JSZWZlcmVuY2VIABIRCgdib29sZWFuGAIgASgISABCBwoFb25lb2YiOAoDQW55EiMKBXZhbHVlGAEgASgLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIMCgR5YW1sGAIgASgJIngKD0FueU9yRXhwcmVzc2lvbhImCgNhbnkYASABKAsyFy5nbm9zdGljLm9wZW5hcGkudjMuQW55SAASNAoKZXhwcmVzc2lvbhgCIAEoCzIeLmdub3N0aWMub3BlbmFwaS52My5FeHByZXNzaW9uSABCBwoFb25lb2YiegoIQ2FsbGJhY2sSLwoEcGF0aBgBIAMoCzIhLmdub3N0aWMub3BlbmFwaS52My5OYW1lZFBhdGhJdGVtEj0KF3NwZWNpZmljYXRpb25fZXh0ZW5zaW9uGAIgAygLMhwuZ25vc3RpYy5vcGVuYXBpLnYzLk5hbWVkQW55IoQBChNDYWxsYmFja09yUmVmZXJlbmNlEjAKCGNhbGxiYWNrGAEgASgLMhwuZ25vc3RpYy5vcGVuYXBpLnYzLkNhbGxiYWNrSAASMgoJcmVmZXJlbmNlGAIgASgLMh0uZ25vc3RpYy5vcGVuYXBpLnYzLlJlZmVyZW5jZUgAQgcKBW9uZW9mImQKFUNhbGxiYWNrc09yUmVmZXJlbmNlcxJLChVhZGRpdGlvbmFsX3Byb3BlcnRpZXMYASADKAsyLC5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRDYWxsYmFja09yUmVmZXJlbmNlIv8ECgpDb21wb25lbnRzEjgKB3NjaGVtYXMYASABKAsyJy5nbm9zdGljLm9wZW5hcGkudjMuU2NoZW1hc09yUmVmZXJlbmNlcxI8CglyZXNwb25zZXMYAiABKAsyKS5nbm9zdGljLm9wZW5hcGkudjMuUmVzcG9uc2VzT3JSZWZlcmVuY2VzEj4KCnBhcmFtZXRlcnMYAyABKAsyKi5nbm9zdGljLm9wZW5hcGkudjMuUGFyYW1ldGVyc09yUmVmZXJlbmNlcxI6CghleGFtcGxlcxgEIAEoCzIoLmdub3N0aWMub3BlbmFwaS52My5FeGFtcGxlc09yUmVmZXJlbmNlcxJFCg5yZXF1ZXN0X2JvZGllcxgFIAEoCzItLmdub3N0aWMub3BlbmFwaS52My5SZXF1ZXN0Qm9kaWVzT3JSZWZlcmVuY2VzEjgKB2hlYWRlcnMYBiABKAsyJy5nbm9zdGljLm9wZW5hcGkudjMuSGVhZGVyc09yUmVmZXJlbmNlcxJJChBzZWN1cml0eV9zY2hlbWVzGAcgASgLMi8uZ25vc3RpYy5vcGVuYXBpLnYzLlNlY3VyaXR5U2NoZW1lc09yUmVmZXJlbmNlcxI0CgVsaW5rcxgIIAEoCzIlLmdub3N0aWMub3BlbmFwaS52My5MaW5rc09yUmVmZXJlbmNlcxI8CgljYWxsYmFja3MYCSABKAsyKS5nbm9zdGljLm9wZW5hcGkudjMuQ2FsbGJhY2tzT3JSZWZlcmVuY2VzEj0KF3NwZWNpZmljYXRpb25fZXh0ZW5zaW9uGAogAygLMhwuZ25vc3RpYy5vcGVuYXBpLnYzLk5hbWVkQW55InIKB0NvbnRhY3QSDAoEbmFtZRgBIAEoCRILCgN1cmwYAiABKAkSDQoFZW1haWwYAyABKAkSPQoXc3BlY2lmaWNhdGlvbl9leHRlbnNpb24YBCADKAsyHC5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRBbnkiTQoLRGVmYXVsdFR5cGUSEAoGbnVtYmVyGAEgASgBSAASEQoHYm9vbGVhbhgCIAEoCEgAEhAKBnN0cmluZxgDIAEoCUgAQgcKBW9uZW9mIpMBCg1EaXNjcmltaW5hdG9yEhUKDXByb3BlcnR5X25hbWUYASABKAkSLAoHbWFwcGluZxgCIAEoCzIbLmdub3N0aWMub3BlbmFwaS52My5TdHJpbmdzEj0KF3NwZWNpZmljYXRpb25fZXh0ZW5zaW9uGAMgAygLMhwuZ25vc3RpYy5vcGVuYXBpLnYzLk5hbWVkQW55IqgDCghEb2N1bWVudBIPCgdvcGVuYXBpGAEgASgJEiYKBGluZm8YAiABKAsyGC5nbm9zdGljLm9wZW5hcGkudjMuSW5mbxIrCgdzZXJ2ZXJzGAMgAygLMhouZ25vc3RpYy5vcGVuYXBpLnYzLlNlcnZlchIoCgVwYXRocxgEIAEoCzIZLmdub3N0aWMub3BlbmFwaS52My5QYXRocxIyCgpjb21wb25lbnRzGAUgASgLMh4uZ25vc3RpYy5vcGVuYXBpLnYzLkNvbXBvbmVudHMSOQoIc2VjdXJpdHkYBiADKAsyJy5nbm9zdGljLm9wZW5hcGkudjMuU2VjdXJpdHlSZXF1aXJlbWVudBIlCgR0YWdzGAcgAygLMhcuZ25vc3RpYy5vcGVuYXBpLnYzLlRhZxI3Cg1leHRlcm5hbF9kb2NzGAggASgLMiAuZ25vc3RpYy5vcGVuYXBpLnYzLkV4dGVybmFsRG9jcxI9ChdzcGVjaWZpY2F0aW9uX2V4dGVuc2lvbhgJIAMoCzIcLmdub3N0aWMub3BlbmFwaS52My5OYW1lZEFueSLRAQoIRW5jb2RpbmcSFAoMY29udGVudF90eXBlGAEgASgJEjgKB2hlYWRlcnMYAiABKAsyJy5nbm9zdGljLm9wZW5hcGkudjMuSGVhZGVyc09yUmVmZXJlbmNlcxINCgVzdHlsZRgDIAEoCRIPCgdleHBsb2RlGAQgASgIEhYKDmFsbG93X3Jlc2VydmVkGAUgASgIEj0KF3NwZWNpZmljYXRpb25fZXh0ZW5zaW9uGAYgAygLMhwuZ25vc3RpYy5vcGVuYXBpLnYzLk5hbWVkQW55Ik0KCUVuY29kaW5ncxJAChVhZGRpdGlvbmFsX3Byb3BlcnRpZXMYASADKAsyIS5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRFbmNvZGluZyKuAQoHRXhhbXBsZRIPCgdzdW1tYXJ5GAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJEiYKBXZhbHVlGAMgASgLMhcuZ25vc3RpYy5vcGVuYXBpLnYzLkFueRIWCg5leHRlcm5hbF92YWx1ZRgEIAEoCRI9ChdzcGVjaWZpY2F0aW9uX2V4dGVuc2lvbhgFIAMoCzIcLmdub3N0aWMub3BlbmFwaS52My5OYW1lZEFueSKBAQoSRXhhbXBsZU9yUmVmZXJlbmNlEi4KB2V4YW1wbGUYASABKAsyGy5nbm9zdGljLm9wZW5hcGkudjMuRXhhbXBsZUgAEjIKCXJlZmVyZW5jZRgCIAEoCzIdLmdub3N0aWMub3BlbmFwaS52My5SZWZlcmVuY2VIAEIHCgVvbmVvZiJiChRFeGFtcGxlc09yUmVmZXJlbmNlcxJKChVhZGRpdGlvbmFsX3Byb3BlcnRpZXMYASADKAsyKy5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRFeGFtcGxlT3JSZWZlcmVuY2UiSQoKRXhwcmVzc2lvbhI7ChVhZGRpdGlvbmFsX3Byb3BlcnRpZXMYASADKAsyHC5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRBbnkibwoMRXh0ZXJuYWxEb2NzEhMKC2Rlc2NyaXB0aW9uGAEgASgJEgsKA3VybBgCIAEoCRI9ChdzcGVjaWZpY2F0aW9uX2V4dGVuc2lvbhgDIAMoCzIcLmdub3N0aWMub3BlbmFwaS52My5OYW1lZEFueSKjAwoGSGVhZGVyEhMKC2Rlc2NyaXB0aW9uGAEgASgJEhAKCHJlcXVpcmVkGAIgASgIEhIKCmRlcHJlY2F0ZWQYAyABKAgSGQoRYWxsb3dfZW1wdHlfdmFsdWUYBCABKAgSDQoFc3R5bGUYBSABKAkSDwoHZXhwbG9kZRgGIAEoCBIWCg5hbGxvd19yZXNlcnZlZBgHIAEoCBI1CgZzY2hlbWEYCCABKAsyJS5nbm9zdGljLm9wZW5hcGkudjMuU2NoZW1hT3JSZWZlcmVuY2USKAoHZXhhbXBsZRgJIAEoCzIXLmdub3N0aWMub3BlbmFwaS52My5BbnkSOgoIZXhhbXBsZXMYCiABKAsyKC5nbm9zdGljLm9wZW5hcGkudjMuRXhhbXBsZXNPclJlZmVyZW5jZXMSLwoHY29udGVudBgLIAEoCzIeLmdub3N0aWMub3BlbmFwaS52My5NZWRpYVR5cGVzEj0KF3NwZWNpZmljYXRpb25fZXh0ZW5zaW9uGAwgAygLMhwuZ25vc3RpYy5vcGVuYXBpLnYzLk5hbWVkQW55In4KEUhlYWRlck9yUmVmZXJlbmNlEiwKBmhlYWRlchgBIAEoCzIaLmdub3N0aWMub3BlbmFwaS52My5IZWFkZXJIABIyCglyZWZlcmVuY2UYAiABKAsyHS5nbm9zdGljLm9wZW5hcGkudjMuUmVmZXJlbmNlSABCBwoFb25lb2YiYAoTSGVhZGVyc09yUmVmZXJlbmNlcxJJChVhZGRpdGlvbmFsX3Byb3BlcnRpZXMYASADKAsyKi5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRIZWFkZXJPclJlZmVyZW5jZSKBAgoESW5mbxINCgV0aXRsZRgBIAEoCRITCgtkZXNjcmlwdGlvbhgCIAEoCRIYChB0ZXJtc19vZl9zZXJ2aWNlGAMgASgJEiwKB2NvbnRhY3QYBCABKAsyGy5nbm9zdGljLm9wZW5hcGkudjMuQ29udGFjdBIsCgdsaWNlbnNlGAUgASgLMhsuZ25vc3RpYy5vcGVuYXBpLnYzLkxpY2Vuc2USDwoHdmVyc2lvbhgGIAEoCRI9ChdzcGVjaWZpY2F0aW9uX2V4dGVuc2lvbhgHIAMoCzIcLmdub3N0aWMub3BlbmFwaS52My5OYW1lZEFueRIPCgdzdW1tYXJ5GAggASgJIk8KCUl0ZW1zSXRlbRJCChNzY2hlbWFfb3JfcmVmZXJlbmNlGAEgAygLMiUuZ25vc3RpYy5vcGVuYXBpLnYzLlNjaGVtYU9yUmVmZXJlbmNlImMKB0xpY2Vuc2USDAoEbmFtZRgBIAEoCRILCgN1cmwYAiABKAkSPQoXc3BlY2lmaWNhdGlvbl9leHRlbnNpb24YAyADKAsyHC5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRBbnkipwIKBExpbmsSFQoNb3BlcmF0aW9uX3JlZhgBIAEoCRIUCgxvcGVyYXRpb25faWQYAiABKAkSNwoKcGFyYW1ldGVycxgDIAEoCzIjLmdub3N0aWMub3BlbmFwaS52My5BbnlPckV4cHJlc3Npb24SOQoMcmVxdWVzdF9ib2R5GAQgASgLMiMuZ25vc3RpYy5vcGVuYXBpLnYzLkFueU9yRXhwcmVzc2lvbhITCgtkZXNjcmlwdGlvbhgFIAEoCRIqCgZzZXJ2ZXIYBiABKAsyGi5nbm9zdGljLm9wZW5hcGkudjMuU2VydmVyEj0KF3NwZWNpZmljYXRpb25fZXh0ZW5zaW9uGAcgAygLMhwuZ25vc3RpYy5vcGVuYXBpLnYzLk5hbWVkQW55IngKD0xpbmtPclJlZmVyZW5jZRIoCgRsaW5rGAEgASgLMhguZ25vc3RpYy5vcGVuYXBpLnYzLkxpbmtIABIyCglyZWZlcmVuY2UYAiABKAsyHS5nbm9zdGljLm9wZW5hcGkudjMuUmVmZXJlbmNlSABCBwoFb25lb2YiXAoRTGlua3NPclJlZmVyZW5jZXMSRwoVYWRkaXRpb25hbF9wcm9wZXJ0aWVzGAEgAygLMiguZ25vc3RpYy5vcGVuYXBpLnYzLk5hbWVkTGlua09yUmVmZXJlbmNlIpgCCglNZWRpYVR5cGUSNQoGc2NoZW1hGAEgASgLMiUuZ25vc3RpYy5vcGVuYXBpLnYzLlNjaGVtYU9yUmVmZXJlbmNlEigKB2V4YW1wbGUYAiABKAsyFy5nbm9zdGljLm9wZW5hcGkudjMuQW55EjoKCGV4YW1wbGVzGAMgASgLMiguZ25vc3RpYy5vcGVuYXBpLnYzLkV4YW1wbGVzT3JSZWZlcmVuY2VzEi8KCGVuY29kaW5nGAQgASgLMh0uZ25vc3RpYy5vcGVuYXBpLnYzLkVuY29kaW5ncxI9ChdzcGVjaWZpY2F0aW9uX2V4dGVuc2lvbhgFIAMoCzIcLmdub3N0aWMub3BlbmFwaS52My5OYW1lZEFueSJPCgpNZWRpYVR5cGVzEkEKFWFkZGl0aW9uYWxfcHJvcGVydGllcxgBIAMoCzIiLmdub3N0aWMub3BlbmFwaS52My5OYW1lZE1lZGlhVHlwZSJACghOYW1lZEFueRIMCgRuYW1lGAEgASgJEiYKBXZhbHVlGAIgASgLMhcuZ25vc3RpYy5vcGVuYXBpLnYzLkFueSJgChhOYW1lZENhbGxiYWNrT3JSZWZlcmVuY2USDAoEbmFtZRgBIAEoCRI2CgV2YWx1ZRgCIAEoCzInLmdub3N0aWMub3BlbmFwaS52My5DYWxsYmFja09yUmVmZXJlbmNlIkoKDU5hbWVkRW5jb2RpbmcSDAoEbmFtZRgBIAEoCRIrCgV2YWx1ZRgCIAEoCzIcLmdub3N0aWMub3BlbmFwaS52My5FbmNvZGluZyJeChdOYW1lZEV4YW1wbGVPclJlZmVyZW5jZRIMCgRuYW1lGAEgASgJEjUKBXZhbHVlGAIgASgLMiYuZ25vc3RpYy5vcGVuYXBpLnYzLkV4YW1wbGVPclJlZmVyZW5jZSJcChZOYW1lZEhlYWRlck9yUmVmZXJlbmNlEgwKBG5hbWUYASABKAkSNAoFdmFsdWUYAiABKAsyJS5nbm9zdGljLm9wZW5hcGkudjMuSGVhZGVyT3JSZWZlcmVuY2UiWAoUTmFtZWRMaW5rT3JSZWZlcmVuY2USDAoEbmFtZRgBIAEoCRIyCgV2YWx1ZRgCIAEoCzIjLmdub3N0aWMub3BlbmFwaS52My5MaW5rT3JSZWZlcmVuY2UiTAoOTmFtZWRNZWRpYVR5cGUSDAoEbmFtZRgBIAEoCRIsCgV2YWx1ZRgCIAEoCzIdLmdub3N0aWMub3BlbmFwaS52My5NZWRpYVR5cGUiYgoZTmFtZWRQYXJhbWV0ZXJPclJlZmVyZW5jZRIMCgRuYW1lGAEgASgJEjcKBXZhbHVlGAIgASgLMiguZ25vc3RpYy5vcGVuYXBpLnYzLlBhcmFtZXRlck9yUmVmZXJlbmNlIkoKDU5hbWVkUGF0aEl0ZW0SDAoEbmFtZRgBIAEoCRIrCgV2YWx1ZRgCIAEoCzIcLmdub3N0aWMub3BlbmFwaS52My5QYXRoSXRlbSJmChtOYW1lZFJlcXVlc3RCb2R5T3JSZWZlcmVuY2USDAoEbmFtZRgBIAEoCRI5CgV2YWx1ZRgCIAEoCzIqLmdub3N0aWMub3BlbmFwaS52My5SZXF1ZXN0Qm9keU9yUmVmZXJlbmNlImAKGE5hbWVkUmVzcG9uc2VPclJlZmVyZW5jZRIMCgRuYW1lGAEgASgJEjYKBXZhbHVlGAIgASgLMicuZ25vc3RpYy5vcGVuYXBpLnYzLlJlc3BvbnNlT3JSZWZlcmVuY2UiXAoWTmFtZWRTY2hlbWFPclJlZmVyZW5jZRIMCgRuYW1lGAEgASgJEjQKBXZhbHVlGAIgASgLMiUuZ25vc3RpYy5vcGVuYXBpLnYzLlNjaGVtYU9yUmVmZXJlbmNlImwKHk5hbWVkU2VjdXJpdHlTY2hlbWVPclJlZmVyZW5jZRIMCgRuYW1lGAEgASgJEjwKBXZhbHVlGAIgASgLMi0uZ25vc3RpYy5vcGVuYXBpLnYzLlNlY3VyaXR5U2NoZW1lT3JSZWZlcmVuY2UiVgoTTmFtZWRTZXJ2ZXJWYXJpYWJsZRIMCgRuYW1lGAEgASgJEjEKBXZhbHVlGAIgASgLMiIuZ25vc3RpYy5vcGVuYXBpLnYzLlNlcnZlclZhcmlhYmxlIioKC05hbWVkU3RyaW5nEgwKBG5hbWUYASABKAkSDQoFdmFsdWUYAiABKAkiUAoQTmFtZWRTdHJpbmdBcnJheRIMCgRuYW1lGAEgASgJEi4KBXZhbHVlGAIgASgLMh8uZ25vc3RpYy5vcGVuYXBpLnYzLlN0cmluZ0FycmF5IroBCglPYXV0aEZsb3cSGQoRYXV0aG9yaXphdGlvbl91cmwYASABKAkSEQoJdG9rZW5fdXJsGAIgASgJEhMKC3JlZnJlc2hfdXJsGAMgASgJEisKBnNjb3BlcxgEIAEoCzIbLmdub3N0aWMub3BlbmFwaS52My5TdHJpbmdzEj0KF3NwZWNpZmljYXRpb25fZXh0ZW5zaW9uGAUgAygLMhwuZ25vc3RpYy5vcGVuYXBpLnYzLk5hbWVkQW55IqMCCgpPYXV0aEZsb3dzEi8KCGltcGxpY2l0GAEgASgLMh0uZ25vc3RpYy5vcGVuYXBpLnYzLk9hdXRoRmxvdxIvCghwYXNzd29yZBgCIAEoCzIdLmdub3N0aWMub3BlbmFwaS52My5PYXV0aEZsb3cSOQoSY2xpZW50X2NyZWRlbnRpYWxzGAMgASgLMh0uZ25vc3RpYy5vcGVuYXBpLnYzLk9hdXRoRmxvdxI5ChJhdXRob3JpemF0aW9uX2NvZGUYBCABKAsyHS5nbm9zdGljLm9wZW5hcGkudjMuT2F1dGhGbG93Ej0KF3NwZWNpZmljYXRpb25fZXh0ZW5zaW9uGAUgAygLMhwuZ25vc3RpYy5vcGVuYXBpLnYzLk5hbWVkQW55IkUKBk9iamVjdBI7ChVhZGRpdGlvbmFsX3Byb3BlcnRpZXMYASADKAsyHC5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRBbnkiuQQKCU9wZXJhdGlvbhIMCgR0YWdzGAEgAygJEg8KB3N1bW1hcnkYAiABKAkSEwoLZGVzY3JpcHRpb24YAyABKAkSNwoNZXh0ZXJuYWxfZG9jcxgEIAEoCzIgLmdub3N0aWMub3BlbmFwaS52My5FeHRlcm5hbERvY3MSFAoMb3BlcmF0aW9uX2lkGAUgASgJEjwKCnBhcmFtZXRlcnMYBiADKAsyKC5nbm9zdGljLm9wZW5hcGkudjMuUGFyYW1ldGVyT3JSZWZlcmVuY2USQAoMcmVxdWVzdF9ib2R5GAcgASgLMiouZ25vc3RpYy5vcGVuYXBpLnYzLlJlcXVlc3RCb2R5T3JSZWZlcmVuY2USMAoJcmVzcG9uc2VzGAggASgLMh0uZ25vc3RpYy5vcGVuYXBpLnYzLlJlc3BvbnNlcxI8CgljYWxsYmFja3MYCSABKAsyKS5nbm9zdGljLm9wZW5hcGkudjMuQ2FsbGJhY2tzT3JSZWZlcmVuY2VzEhIKCmRlcHJlY2F0ZWQYCiABKAgSOQoIc2VjdXJpdHkYCyADKAsyJy5nbm9zdGljLm9wZW5hcGkudjMuU2VjdXJpdHlSZXF1aXJlbWVudBIrCgdzZXJ2ZXJzGAwgAygLMhouZ25vc3RpYy5vcGVuYXBpLnYzLlNlcnZlchI9ChdzcGVjaWZpY2F0aW9uX2V4dGVuc2lvbhgNIAMoCzIcLmdub3N0aWMub3BlbmFwaS52My5OYW1lZEFueSLAAwoJUGFyYW1ldGVyEgwKBG5hbWUYASABKAkSCgoCaW4YAiABKAkSEwoLZGVzY3JpcHRpb24YAyABKAkSEAoIcmVxdWlyZWQYBCABKAgSEgoKZGVwcmVjYXRlZBgFIAEoCBIZChFhbGxvd19lbXB0eV92YWx1ZRgGIAEoCBINCgVzdHlsZRgHIAEoCRIPCgdleHBsb2RlGAggASgIEhYKDmFsbG93X3Jlc2VydmVkGAkgASgIEjUKBnNjaGVtYRgKIAEoCzIlLmdub3N0aWMub3BlbmFwaS52My5TY2hlbWFPclJlZmVyZW5jZRIoCgdleGFtcGxlGAsgASgLMhcuZ25vc3RpYy5vcGVuYXBpLnYzLkFueRI6CghleGFtcGxlcxgMIAEoCzIoLmdub3N0aWMub3BlbmFwaS52My5FeGFtcGxlc09yUmVmZXJlbmNlcxIvCgdjb250ZW50GA0gASgLMh4uZ25vc3RpYy5vcGVuYXBpLnYzLk1lZGlhVHlwZXMSPQoXc3BlY2lmaWNhdGlvbl9leHRlbnNpb24YDiADKAsyHC5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRBbnkihwEKFFBhcmFtZXRlck9yUmVmZXJlbmNlEjIKCXBhcmFtZXRlchgBIAEoCzIdLmdub3N0aWMub3BlbmFwaS52My5QYXJhbWV0ZXJIABIyCglyZWZlcmVuY2UYAiABKAsyHS5nbm9zdGljLm9wZW5hcGkudjMuUmVmZXJlbmNlSABCBwoFb25lb2YiZgoWUGFyYW1ldGVyc09yUmVmZXJlbmNlcxJMChVhZGRpdGlvbmFsX3Byb3BlcnRpZXMYASADKAsyLS5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRQYXJhbWV0ZXJPclJlZmVyZW5jZSLVBAoIUGF0aEl0ZW0SDAoEX3JlZhgBIAEoCRIPCgdzdW1tYXJ5GAIgASgJEhMKC2Rlc2NyaXB0aW9uGAMgASgJEioKA2dldBgEIAEoCzIdLmdub3N0aWMub3BlbmFwaS52My5PcGVyYXRpb24SKgoDcHV0GAUgASgLMh0uZ25vc3RpYy5vcGVuYXBpLnYzLk9wZXJhdGlvbhIrCgRwb3N0GAYgASgLMh0uZ25vc3RpYy5vcGVuYXBpLnYzLk9wZXJhdGlvbhItCgZkZWxldGUYByABKAsyHS5nbm9zdGljLm9wZW5hcGkudjMuT3BlcmF0aW9uEi4KB29wdGlvbnMYCCABKAsyHS5nbm9zdGljLm9wZW5hcGkudjMuT3BlcmF0aW9uEisKBGhlYWQYCSABKAsyHS5nbm9zdGljLm9wZW5hcGkudjMuT3BlcmF0aW9uEiwKBXBhdGNoGAogASgLMh0uZ25vc3RpYy5vcGVuYXBpLnYzLk9wZXJhdGlvbhIsCgV0cmFjZRgLIAEoCzIdLmdub3N0aWMub3BlbmFwaS52My5PcGVyYXRpb24SKwoHc2VydmVycxgMIAMoCzIaLmdub3N0aWMub3BlbmFwaS52My5TZXJ2ZXISPAoKcGFyYW1ldGVycxgNIAMoCzIoLmdub3N0aWMub3BlbmFwaS52My5QYXJhbWV0ZXJPclJlZmVyZW5jZRI9ChdzcGVjaWZpY2F0aW9uX2V4dGVuc2lvbhgOIAMoCzIcLmdub3N0aWMub3BlbmFwaS52My5OYW1lZEFueSJ3CgVQYXRocxIvCgRwYXRoGAEgAygLMiEuZ25vc3RpYy5vcGVuYXBpLnYzLk5hbWVkUGF0aEl0ZW0SPQoXc3BlY2lmaWNhdGlvbl9leHRlbnNpb24YAiADKAsyHC5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRBbnkiVwoKUHJvcGVydGllcxJJChVhZGRpdGlvbmFsX3Byb3BlcnRpZXMYASADKAsyKi5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRTY2hlbWFPclJlZmVyZW5jZSI/CglSZWZlcmVuY2USDAoEX3JlZhgBIAEoCRIPCgdzdW1tYXJ5GAIgASgJEhMKC2Rlc2NyaXB0aW9uGAMgASgJImsKGVJlcXVlc3RCb2RpZXNPclJlZmVyZW5jZXMSTgoVYWRkaXRpb25hbF9wcm9wZXJ0aWVzGAEgAygLMi8uZ25vc3RpYy5vcGVuYXBpLnYzLk5hbWVkUmVxdWVzdEJvZHlPclJlZmVyZW5jZSKkAQoLUmVxdWVzdEJvZHkSEwoLZGVzY3JpcHRpb24YASABKAkSLwoHY29udGVudBgCIAEoCzIeLmdub3N0aWMub3BlbmFwaS52My5NZWRpYVR5cGVzEhAKCHJlcXVpcmVkGAMgASgIEj0KF3NwZWNpZmljYXRpb25fZXh0ZW5zaW9uGAQgAygLMhwuZ25vc3RpYy5vcGVuYXBpLnYzLk5hbWVkQW55Io4BChZSZXF1ZXN0Qm9keU9yUmVmZXJlbmNlEjcKDHJlcXVlc3RfYm9keRgBIAEoCzIfLmdub3N0aWMub3BlbmFwaS52My5SZXF1ZXN0Qm9keUgAEjIKCXJlZmVyZW5jZRgCIAEoCzIdLmdub3N0aWMub3BlbmFwaS52My5SZWZlcmVuY2VIAEIHCgVvbmVvZiL/AQoIUmVzcG9uc2USEwoLZGVzY3JpcHRpb24YASABKAkSOAoHaGVhZGVycxgCIAEoCzInLmdub3N0aWMub3BlbmFwaS52My5IZWFkZXJzT3JSZWZlcmVuY2VzEi8KB2NvbnRlbnQYAyABKAsyHi5nbm9zdGljLm9wZW5hcGkudjMuTWVkaWFUeXBlcxI0CgVsaW5rcxgEIAEoCzIlLmdub3N0aWMub3BlbmFwaS52My5MaW5rc09yUmVmZXJlbmNlcxI9ChdzcGVjaWZpY2F0aW9uX2V4dGVuc2lvbhgFIAMoCzIcLmdub3N0aWMub3BlbmFwaS52My5OYW1lZEFueSKEAQoTUmVzcG9uc2VPclJlZmVyZW5jZRIwCghyZXNwb25zZRgBIAEoCzIcLmdub3N0aWMub3BlbmFwaS52My5SZXNwb25zZUgAEjIKCXJlZmVyZW5jZRgCIAEoCzIdLmdub3N0aWMub3BlbmFwaS52My5SZWZlcmVuY2VIAEIHCgVvbmVvZiLRAQoJUmVzcG9uc2VzEjgKB2RlZmF1bHQYASABKAsyJy5nbm9zdGljLm9wZW5hcGkudjMuUmVzcG9uc2VPclJlZmVyZW5jZRJLChVyZXNwb25zZV9vcl9yZWZlcmVuY2UYAiADKAsyLC5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRSZXNwb25zZU9yUmVmZXJlbmNlEj0KF3NwZWNpZmljYXRpb25fZXh0ZW5zaW9uGAMgAygLMhwuZ25vc3RpYy5vcGVuYXBpLnYzLk5hbWVkQW55ImQKFVJlc3BvbnNlc09yUmVmZXJlbmNlcxJLChVhZGRpdGlvbmFsX3Byb3BlcnRpZXMYASADKAsyLC5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRSZXNwb25zZU9yUmVmZXJlbmNlIpMJCgZTY2hlbWESEAoIbnVsbGFibGUYASABKAgSOAoNZGlzY3JpbWluYXRvchgCIAEoCzIhLmdub3N0aWMub3BlbmFwaS52My5EaXNjcmltaW5hdG9yEhEKCXJlYWRfb25seRgDIAEoCBISCgp3cml0ZV9vbmx5GAQgASgIEiQKA3htbBgFIAEoCzIXLmdub3N0aWMub3BlbmFwaS52My5YbWwSNwoNZXh0ZXJuYWxfZG9jcxgGIAEoCzIgLmdub3N0aWMub3BlbmFwaS52My5FeHRlcm5hbERvY3MSKAoHZXhhbXBsZRgHIAEoCzIXLmdub3N0aWMub3BlbmFwaS52My5BbnkSEgoKZGVwcmVjYXRlZBgIIAEoCBINCgV0aXRsZRgJIAEoCRITCgttdWx0aXBsZV9vZhgKIAEoARIPCgdtYXhpbXVtGAsgASgBEhkKEWV4Y2x1c2l2ZV9tYXhpbXVtGAwgASgIEg8KB21pbmltdW0YDSABKAESGQoRZXhjbHVzaXZlX21pbmltdW0YDiABKAgSEgoKbWF4X2xlbmd0aBgPIAEoAxISCgptaW5fbGVuZ3RoGBAgASgDEg8KB3BhdHRlcm4YESABKAkSEQoJbWF4X2l0ZW1zGBIgASgDEhEKCW1pbl9pdGVtcxgTIAEoAxIUCgx1bmlxdWVfaXRlbXMYFCABKAgSFgoObWF4X3Byb3BlcnRpZXMYFSABKAMSFgoObWluX3Byb3BlcnRpZXMYFiABKAMSEAoIcmVxdWlyZWQYFyADKAkSJQoEZW51bRgYIAMoCzIXLmdub3N0aWMub3BlbmFwaS52My5BbnkSDAoEdHlwZRgZIAEoCRI1CgZhbGxfb2YYGiADKAsyJS5nbm9zdGljLm9wZW5hcGkudjMuU2NoZW1hT3JSZWZlcmVuY2USNQoGb25lX29mGBsgAygLMiUuZ25vc3RpYy5vcGVuYXBpLnYzLlNjaGVtYU9yUmVmZXJlbmNlEjUKBmFueV9vZhgcIAMoCzIlLmdub3N0aWMub3BlbmFwaS52My5TY2hlbWFPclJlZmVyZW5jZRInCgNub3QYHSABKAsyGi5nbm9zdGljLm9wZW5hcGkudjMuU2NoZW1hEiwKBWl0ZW1zGB4gASgLMh0uZ25vc3RpYy5vcGVuYXBpLnYzLkl0ZW1zSXRlbRIyCgpwcm9wZXJ0aWVzGB8gASgLMh4uZ25vc3RpYy5vcGVuYXBpLnYzLlByb3BlcnRpZXMSSwoVYWRkaXRpb25hbF9wcm9wZXJ0aWVzGCAgASgLMiwuZ25vc3RpYy5vcGVuYXBpLnYzLkFkZGl0aW9uYWxQcm9wZXJ0aWVzSXRlbRIwCgdkZWZhdWx0GCEgASgLMh8uZ25vc3RpYy5vcGVuYXBpLnYzLkRlZmF1bHRUeXBlEhMKC2Rlc2NyaXB0aW9uGCIgASgJEg4KBmZvcm1hdBgjIAEoCRI9ChdzcGVjaWZpY2F0aW9uX2V4dGVuc2lvbhgkIAMoCzIcLmdub3N0aWMub3BlbmFwaS52My5OYW1lZEFueSJ+ChFTY2hlbWFPclJlZmVyZW5jZRIsCgZzY2hlbWEYASABKAsyGi5nbm9zdGljLm9wZW5hcGkudjMuU2NoZW1hSAASMgoJcmVmZXJlbmNlGAIgASgLMh0uZ25vc3RpYy5vcGVuYXBpLnYzLlJlZmVyZW5jZUgAQgcKBW9uZW9mImAKE1NjaGVtYXNPclJlZmVyZW5jZXMSSQoVYWRkaXRpb25hbF9wcm9wZXJ0aWVzGAEgAygLMiouZ25vc3RpYy5vcGVuYXBpLnYzLk5hbWVkU2NoZW1hT3JSZWZlcmVuY2UiWgoTU2VjdXJpdHlSZXF1aXJlbWVudBJDChVhZGRpdGlvbmFsX3Byb3BlcnRpZXMYASADKAsyJC5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRTdHJpbmdBcnJheSL/AQoOU2VjdXJpdHlTY2hlbWUSDAoEdHlwZRgBIAEoCRITCgtkZXNjcmlwdGlvbhgCIAEoCRIMCgRuYW1lGAMgASgJEgoKAmluGAQgASgJEg4KBnNjaGVtZRgFIAEoCRIVCg1iZWFyZXJfZm9ybWF0GAYgASgJEi0KBWZsb3dzGAcgASgLMh4uZ25vc3RpYy5vcGVuYXBpLnYzLk9hdXRoRmxvd3MSGwoTb3Blbl9pZF9jb25uZWN0X3VybBgIIAEoCRI9ChdzcGVjaWZpY2F0aW9uX2V4dGVuc2lvbhgJIAMoCzIcLmdub3N0aWMub3BlbmFwaS52My5OYW1lZEFueSKXAQoZU2VjdXJpdHlTY2hlbWVPclJlZmVyZW5jZRI9Cg9zZWN1cml0eV9zY2hlbWUYASABKAsyIi5nbm9zdGljLm9wZW5hcGkudjMuU2VjdXJpdHlTY2hlbWVIABIyCglyZWZlcmVuY2UYAiABKAsyHS5nbm9zdGljLm9wZW5hcGkudjMuUmVmZXJlbmNlSABCBwoFb25lb2YicAobU2VjdXJpdHlTY2hlbWVzT3JSZWZlcmVuY2VzElEKFWFkZGl0aW9uYWxfcHJvcGVydGllcxgBIAMoCzIyLmdub3N0aWMub3BlbmFwaS52My5OYW1lZFNlY3VyaXR5U2NoZW1lT3JSZWZlcmVuY2UioQEKBlNlcnZlchILCgN1cmwYASABKAkSEwoLZGVzY3JpcHRpb24YAiABKAkSNgoJdmFyaWFibGVzGAMgASgLMiMuZ25vc3RpYy5vcGVuYXBpLnYzLlNlcnZlclZhcmlhYmxlcxI9ChdzcGVjaWZpY2F0aW9uX2V4dGVuc2lvbhgEIAMoCzIcLmdub3N0aWMub3BlbmFwaS52My5OYW1lZEFueSKDAQoOU2VydmVyVmFyaWFibGUSDAoEZW51bRgBIAMoCRIPCgdkZWZhdWx0GAIgASgJEhMKC2Rlc2NyaXB0aW9uGAMgASgJEj0KF3NwZWNpZmljYXRpb25fZXh0ZW5zaW9uGAQgAygLMhwuZ25vc3RpYy5vcGVuYXBpLnYzLk5hbWVkQW55IlkKD1NlcnZlclZhcmlhYmxlcxJGChVhZGRpdGlvbmFsX3Byb3BlcnRpZXMYASADKAsyJy5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRTZXJ2ZXJWYXJpYWJsZSJYChZTcGVjaWZpY2F0aW9uRXh0ZW5zaW9uEhAKBm51bWJlchgBIAEoAUgAEhEKB2Jvb2xlYW4YAiABKAhIABIQCgZzdHJpbmcYAyABKAlIAEIHCgVvbmVvZiIcCgtTdHJpbmdBcnJheRINCgV2YWx1ZRgBIAMoCSJJCgdTdHJpbmdzEj4KFWFkZGl0aW9uYWxfcHJvcGVydGllcxgBIAMoCzIfLmdub3N0aWMub3BlbmFwaS52My5OYW1lZFN0cmluZyKgAQoDVGFnEgwKBG5hbWUYASABKAkSEwoLZGVzY3JpcHRpb24YAiABKAkSNwoNZXh0ZXJuYWxfZG9jcxgDIAEoCzIgLmdub3N0aWMub3BlbmFwaS52My5FeHRlcm5hbERvY3MSPQoXc3BlY2lmaWNhdGlvbl9leHRlbnNpb24YBCADKAsyHC5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRBbnkimQEKA1htbBIMCgRuYW1lGAEgASgJEhEKCW5hbWVzcGFjZRgCIAEoCRIOCgZwcmVmaXgYAyABKAkSEQoJYXR0cmlidXRlGAQgASgIEg8KB3dyYXBwZWQYBSABKAgSPQoXc3BlY2lmaWNhdGlvbl9leHRlbnNpb24YBiADKAsyHC5nbm9zdGljLm9wZW5hcGkudjMuTmFtZWRBbnlCVgoOb3JnLm9wZW5hcGlfdjNCDE9wZW5BUElQcm90b1ABWi5naXRodWIuY29tL2dvb2dsZS9nbm9zdGljL29wZW5hcGl2MztvcGVuYXBpX3YzogIDT0FTYgZwcm90bzM", [wkt_1.file_google_protobuf_any]);
/**
 * Describes the message gnostic.openapi.v3.AdditionalPropertiesItem.
 * Use `create(AdditionalPropertiesItemSchema)` to create a new message.
 */
exports.AdditionalPropertiesItemSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 0);
/**
 * Describes the message gnostic.openapi.v3.Any.
 * Use `create(AnySchema)` to create a new message.
 */
exports.AnySchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 1);
/**
 * Describes the message gnostic.openapi.v3.AnyOrExpression.
 * Use `create(AnyOrExpressionSchema)` to create a new message.
 */
exports.AnyOrExpressionSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 2);
/**
 * Describes the message gnostic.openapi.v3.Callback.
 * Use `create(CallbackSchema)` to create a new message.
 */
exports.CallbackSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 3);
/**
 * Describes the message gnostic.openapi.v3.CallbackOrReference.
 * Use `create(CallbackOrReferenceSchema)` to create a new message.
 */
exports.CallbackOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 4);
/**
 * Describes the message gnostic.openapi.v3.CallbacksOrReferences.
 * Use `create(CallbacksOrReferencesSchema)` to create a new message.
 */
exports.CallbacksOrReferencesSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 5);
/**
 * Describes the message gnostic.openapi.v3.Components.
 * Use `create(ComponentsSchema)` to create a new message.
 */
exports.ComponentsSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 6);
/**
 * Describes the message gnostic.openapi.v3.Contact.
 * Use `create(ContactSchema)` to create a new message.
 */
exports.ContactSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 7);
/**
 * Describes the message gnostic.openapi.v3.DefaultType.
 * Use `create(DefaultTypeSchema)` to create a new message.
 */
exports.DefaultTypeSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 8);
/**
 * Describes the message gnostic.openapi.v3.Discriminator.
 * Use `create(DiscriminatorSchema)` to create a new message.
 */
exports.DiscriminatorSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 9);
/**
 * Describes the message gnostic.openapi.v3.Document.
 * Use `create(DocumentSchema)` to create a new message.
 */
exports.DocumentSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 10);
/**
 * Describes the message gnostic.openapi.v3.Encoding.
 * Use `create(EncodingSchema)` to create a new message.
 */
exports.EncodingSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 11);
/**
 * Describes the message gnostic.openapi.v3.Encodings.
 * Use `create(EncodingsSchema)` to create a new message.
 */
exports.EncodingsSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 12);
/**
 * Describes the message gnostic.openapi.v3.Example.
 * Use `create(ExampleSchema)` to create a new message.
 */
exports.ExampleSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 13);
/**
 * Describes the message gnostic.openapi.v3.ExampleOrReference.
 * Use `create(ExampleOrReferenceSchema)` to create a new message.
 */
exports.ExampleOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 14);
/**
 * Describes the message gnostic.openapi.v3.ExamplesOrReferences.
 * Use `create(ExamplesOrReferencesSchema)` to create a new message.
 */
exports.ExamplesOrReferencesSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 15);
/**
 * Describes the message gnostic.openapi.v3.Expression.
 * Use `create(ExpressionSchema)` to create a new message.
 */
exports.ExpressionSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 16);
/**
 * Describes the message gnostic.openapi.v3.ExternalDocs.
 * Use `create(ExternalDocsSchema)` to create a new message.
 */
exports.ExternalDocsSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 17);
/**
 * Describes the message gnostic.openapi.v3.Header.
 * Use `create(HeaderSchema)` to create a new message.
 */
exports.HeaderSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 18);
/**
 * Describes the message gnostic.openapi.v3.HeaderOrReference.
 * Use `create(HeaderOrReferenceSchema)` to create a new message.
 */
exports.HeaderOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 19);
/**
 * Describes the message gnostic.openapi.v3.HeadersOrReferences.
 * Use `create(HeadersOrReferencesSchema)` to create a new message.
 */
exports.HeadersOrReferencesSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 20);
/**
 * Describes the message gnostic.openapi.v3.Info.
 * Use `create(InfoSchema)` to create a new message.
 */
exports.InfoSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 21);
/**
 * Describes the message gnostic.openapi.v3.ItemsItem.
 * Use `create(ItemsItemSchema)` to create a new message.
 */
exports.ItemsItemSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 22);
/**
 * Describes the message gnostic.openapi.v3.License.
 * Use `create(LicenseSchema)` to create a new message.
 */
exports.LicenseSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 23);
/**
 * Describes the message gnostic.openapi.v3.Link.
 * Use `create(LinkSchema)` to create a new message.
 */
exports.LinkSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 24);
/**
 * Describes the message gnostic.openapi.v3.LinkOrReference.
 * Use `create(LinkOrReferenceSchema)` to create a new message.
 */
exports.LinkOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 25);
/**
 * Describes the message gnostic.openapi.v3.LinksOrReferences.
 * Use `create(LinksOrReferencesSchema)` to create a new message.
 */
exports.LinksOrReferencesSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 26);
/**
 * Describes the message gnostic.openapi.v3.MediaType.
 * Use `create(MediaTypeSchema)` to create a new message.
 */
exports.MediaTypeSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 27);
/**
 * Describes the message gnostic.openapi.v3.MediaTypes.
 * Use `create(MediaTypesSchema)` to create a new message.
 */
exports.MediaTypesSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 28);
/**
 * Describes the message gnostic.openapi.v3.NamedAny.
 * Use `create(NamedAnySchema)` to create a new message.
 */
exports.NamedAnySchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 29);
/**
 * Describes the message gnostic.openapi.v3.NamedCallbackOrReference.
 * Use `create(NamedCallbackOrReferenceSchema)` to create a new message.
 */
exports.NamedCallbackOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 30);
/**
 * Describes the message gnostic.openapi.v3.NamedEncoding.
 * Use `create(NamedEncodingSchema)` to create a new message.
 */
exports.NamedEncodingSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 31);
/**
 * Describes the message gnostic.openapi.v3.NamedExampleOrReference.
 * Use `create(NamedExampleOrReferenceSchema)` to create a new message.
 */
exports.NamedExampleOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 32);
/**
 * Describes the message gnostic.openapi.v3.NamedHeaderOrReference.
 * Use `create(NamedHeaderOrReferenceSchema)` to create a new message.
 */
exports.NamedHeaderOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 33);
/**
 * Describes the message gnostic.openapi.v3.NamedLinkOrReference.
 * Use `create(NamedLinkOrReferenceSchema)` to create a new message.
 */
exports.NamedLinkOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 34);
/**
 * Describes the message gnostic.openapi.v3.NamedMediaType.
 * Use `create(NamedMediaTypeSchema)` to create a new message.
 */
exports.NamedMediaTypeSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 35);
/**
 * Describes the message gnostic.openapi.v3.NamedParameterOrReference.
 * Use `create(NamedParameterOrReferenceSchema)` to create a new message.
 */
exports.NamedParameterOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 36);
/**
 * Describes the message gnostic.openapi.v3.NamedPathItem.
 * Use `create(NamedPathItemSchema)` to create a new message.
 */
exports.NamedPathItemSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 37);
/**
 * Describes the message gnostic.openapi.v3.NamedRequestBodyOrReference.
 * Use `create(NamedRequestBodyOrReferenceSchema)` to create a new message.
 */
exports.NamedRequestBodyOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 38);
/**
 * Describes the message gnostic.openapi.v3.NamedResponseOrReference.
 * Use `create(NamedResponseOrReferenceSchema)` to create a new message.
 */
exports.NamedResponseOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 39);
/**
 * Describes the message gnostic.openapi.v3.NamedSchemaOrReference.
 * Use `create(NamedSchemaOrReferenceSchema)` to create a new message.
 */
exports.NamedSchemaOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 40);
/**
 * Describes the message gnostic.openapi.v3.NamedSecuritySchemeOrReference.
 * Use `create(NamedSecuritySchemeOrReferenceSchema)` to create a new message.
 */
exports.NamedSecuritySchemeOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 41);
/**
 * Describes the message gnostic.openapi.v3.NamedServerVariable.
 * Use `create(NamedServerVariableSchema)` to create a new message.
 */
exports.NamedServerVariableSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 42);
/**
 * Describes the message gnostic.openapi.v3.NamedString.
 * Use `create(NamedStringSchema)` to create a new message.
 */
exports.NamedStringSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 43);
/**
 * Describes the message gnostic.openapi.v3.NamedStringArray.
 * Use `create(NamedStringArraySchema)` to create a new message.
 */
exports.NamedStringArraySchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 44);
/**
 * Describes the message gnostic.openapi.v3.OauthFlow.
 * Use `create(OauthFlowSchema)` to create a new message.
 */
exports.OauthFlowSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 45);
/**
 * Describes the message gnostic.openapi.v3.OauthFlows.
 * Use `create(OauthFlowsSchema)` to create a new message.
 */
exports.OauthFlowsSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 46);
/**
 * Describes the message gnostic.openapi.v3.Object.
 * Use `create(ObjectSchema)` to create a new message.
 */
exports.ObjectSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 47);
/**
 * Describes the message gnostic.openapi.v3.Operation.
 * Use `create(OperationSchema)` to create a new message.
 */
exports.OperationSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 48);
/**
 * Describes the message gnostic.openapi.v3.Parameter.
 * Use `create(ParameterSchema)` to create a new message.
 */
exports.ParameterSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 49);
/**
 * Describes the message gnostic.openapi.v3.ParameterOrReference.
 * Use `create(ParameterOrReferenceSchema)` to create a new message.
 */
exports.ParameterOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 50);
/**
 * Describes the message gnostic.openapi.v3.ParametersOrReferences.
 * Use `create(ParametersOrReferencesSchema)` to create a new message.
 */
exports.ParametersOrReferencesSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 51);
/**
 * Describes the message gnostic.openapi.v3.PathItem.
 * Use `create(PathItemSchema)` to create a new message.
 */
exports.PathItemSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 52);
/**
 * Describes the message gnostic.openapi.v3.Paths.
 * Use `create(PathsSchema)` to create a new message.
 */
exports.PathsSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 53);
/**
 * Describes the message gnostic.openapi.v3.Properties.
 * Use `create(PropertiesSchema)` to create a new message.
 */
exports.PropertiesSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 54);
/**
 * Describes the message gnostic.openapi.v3.Reference.
 * Use `create(ReferenceSchema)` to create a new message.
 */
exports.ReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 55);
/**
 * Describes the message gnostic.openapi.v3.RequestBodiesOrReferences.
 * Use `create(RequestBodiesOrReferencesSchema)` to create a new message.
 */
exports.RequestBodiesOrReferencesSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 56);
/**
 * Describes the message gnostic.openapi.v3.RequestBody.
 * Use `create(RequestBodySchema)` to create a new message.
 */
exports.RequestBodySchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 57);
/**
 * Describes the message gnostic.openapi.v3.RequestBodyOrReference.
 * Use `create(RequestBodyOrReferenceSchema)` to create a new message.
 */
exports.RequestBodyOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 58);
/**
 * Describes the message gnostic.openapi.v3.Response.
 * Use `create(ResponseSchema)` to create a new message.
 */
exports.ResponseSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 59);
/**
 * Describes the message gnostic.openapi.v3.ResponseOrReference.
 * Use `create(ResponseOrReferenceSchema)` to create a new message.
 */
exports.ResponseOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 60);
/**
 * Describes the message gnostic.openapi.v3.Responses.
 * Use `create(ResponsesSchema)` to create a new message.
 */
exports.ResponsesSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 61);
/**
 * Describes the message gnostic.openapi.v3.ResponsesOrReferences.
 * Use `create(ResponsesOrReferencesSchema)` to create a new message.
 */
exports.ResponsesOrReferencesSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 62);
/**
 * Describes the message gnostic.openapi.v3.Schema.
 * Use `create(SchemaSchema)` to create a new message.
 */
exports.SchemaSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 63);
/**
 * Describes the message gnostic.openapi.v3.SchemaOrReference.
 * Use `create(SchemaOrReferenceSchema)` to create a new message.
 */
exports.SchemaOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 64);
/**
 * Describes the message gnostic.openapi.v3.SchemasOrReferences.
 * Use `create(SchemasOrReferencesSchema)` to create a new message.
 */
exports.SchemasOrReferencesSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 65);
/**
 * Describes the message gnostic.openapi.v3.SecurityRequirement.
 * Use `create(SecurityRequirementSchema)` to create a new message.
 */
exports.SecurityRequirementSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 66);
/**
 * Describes the message gnostic.openapi.v3.SecurityScheme.
 * Use `create(SecuritySchemeSchema)` to create a new message.
 */
exports.SecuritySchemeSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 67);
/**
 * Describes the message gnostic.openapi.v3.SecuritySchemeOrReference.
 * Use `create(SecuritySchemeOrReferenceSchema)` to create a new message.
 */
exports.SecuritySchemeOrReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 68);
/**
 * Describes the message gnostic.openapi.v3.SecuritySchemesOrReferences.
 * Use `create(SecuritySchemesOrReferencesSchema)` to create a new message.
 */
exports.SecuritySchemesOrReferencesSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 69);
/**
 * Describes the message gnostic.openapi.v3.Server.
 * Use `create(ServerSchema)` to create a new message.
 */
exports.ServerSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 70);
/**
 * Describes the message gnostic.openapi.v3.ServerVariable.
 * Use `create(ServerVariableSchema)` to create a new message.
 */
exports.ServerVariableSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 71);
/**
 * Describes the message gnostic.openapi.v3.ServerVariables.
 * Use `create(ServerVariablesSchema)` to create a new message.
 */
exports.ServerVariablesSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 72);
/**
 * Describes the message gnostic.openapi.v3.SpecificationExtension.
 * Use `create(SpecificationExtensionSchema)` to create a new message.
 */
exports.SpecificationExtensionSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 73);
/**
 * Describes the message gnostic.openapi.v3.StringArray.
 * Use `create(StringArraySchema)` to create a new message.
 */
exports.StringArraySchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 74);
/**
 * Describes the message gnostic.openapi.v3.Strings.
 * Use `create(StringsSchema)` to create a new message.
 */
exports.StringsSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 75);
/**
 * Describes the message gnostic.openapi.v3.Tag.
 * Use `create(TagSchema)` to create a new message.
 */
exports.TagSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 76);
/**
 * Describes the message gnostic.openapi.v3.Xml.
 * Use `create(XmlSchema)` to create a new message.
 */
exports.XmlSchema = (0, codegenv2_1.messageDesc)(exports.file_gnostic_openapi_v3_openapiv3, 77);
