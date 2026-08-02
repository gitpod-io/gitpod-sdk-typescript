import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/pagination.proto.
 */
export declare const file_gitpod_v1_pagination: GenFile;
/**
 * @generated from message gitpod.v1.PaginationRequest
 */
export type PaginationRequest = Message<"gitpod.v1.PaginationRequest"> & {
    /**
     * Page size is the maximum number of results to retrieve per page.
     * Defaults to 25. Maximum 100.
     *
     * @generated from field: int32 page_size = 1;
     */
    pageSize: number;
    /**
     * Token for the next set of results that was returned as next_token of a
     * PaginationResponse
     *
     * @generated from field: string token = 2;
     */
    token: string;
};
/**
 * Describes the message gitpod.v1.PaginationRequest.
 * Use `create(PaginationRequestSchema)` to create a new message.
 */
export declare const PaginationRequestSchema: GenMessage<PaginationRequest>;
/**
 * @generated from message gitpod.v1.PaginationResponse
 */
export type PaginationResponse = Message<"gitpod.v1.PaginationResponse"> & {
    /**
     * Token passed for retrieving the next set of results. Empty if there are no
     * more results
     *
     * @generated from field: string next_token = 1;
     */
    nextToken: string;
};
/**
 * Describes the message gitpod.v1.PaginationResponse.
 * Use `create(PaginationResponseSchema)` to create a new message.
 */
export declare const PaginationResponseSchema: GenMessage<PaginationResponse>;
/**
 * @generated from message gitpod.v1.Sort
 */
export type Sort = Message<"gitpod.v1.Sort"> & {
    /**
     * Field name to sort by, in camelCase.
     *
     * @generated from field: string field = 1;
     */
    field: string;
    /**
     * @generated from field: gitpod.v1.SortOrder order = 2;
     */
    order: SortOrder;
};
/**
 * Describes the message gitpod.v1.Sort.
 * Use `create(SortSchema)` to create a new message.
 */
export declare const SortSchema: GenMessage<Sort>;
/**
 * Do not use this in user facing APIs unless you have a good reason for that
 *
 * @generated from message gitpod.v1.BigPaginationRequest
 */
export type BigPaginationRequest = Message<"gitpod.v1.BigPaginationRequest"> & {
    /**
     * Page size is the maximum number of results to retrieve per page.
     * Defaults to 25. Maximum 10000.
     *
     * @generated from field: int32 page_size = 1;
     */
    pageSize: number;
    /**
     * Token for the next set of results that was returned as next_token of a
     * PaginationResponse
     *
     * @generated from field: string token = 2;
     */
    token: string;
};
/**
 * Describes the message gitpod.v1.BigPaginationRequest.
 * Use `create(BigPaginationRequestSchema)` to create a new message.
 */
export declare const BigPaginationRequestSchema: GenMessage<BigPaginationRequest>;
/**
 * @generated from enum gitpod.v1.SortOrder
 */
export declare enum SortOrder {
    /**
     * @generated from enum value: SORT_ORDER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SORT_ORDER_ASC = 1;
     */
    ASC = 1,
    /**
     * @generated from enum value: SORT_ORDER_DESC = 2;
     */
    DESC = 2
}
/**
 * Describes the enum gitpod.v1.SortOrder.
 */
export declare const SortOrderSchema: GenEnum<SortOrder>;
