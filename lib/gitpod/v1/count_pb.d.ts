import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/count.proto.
 */
export declare const file_gitpod_v1_count: GenFile;
/**
 * CountRequest controls whether the response should include a bounded
 * count of matching records.
 *
 * @generated from message gitpod.v1.CountRequest
 */
export type CountRequest = Message<"gitpod.v1.CountRequest"> & {
    /**
     * When true, the first page of results will include a CountResponse with
     * the bounded total. Subsequent pages (requests with a pagination token)
     * will not contain the count.
     *
     * @generated from field: bool include = 1;
     */
    include: boolean;
};
/**
 * Describes the message gitpod.v1.CountRequest.
 * Use `create(CountRequestSchema)` to create a new message.
 */
export declare const CountRequestSchema: GenMessage<CountRequest>;
/**
 * CountResponse represents a bounded count of matching records.
 * When the actual count exceeds the counting limit, value is capped and
 * relation is set to GREATER_THAN_OR_EQUAL.
 *
 * @generated from message gitpod.v1.CountResponse
 */
export type CountResponse = Message<"gitpod.v1.CountResponse"> & {
    /**
     * The count of matching records, capped at the server's counting limit.
     *
     * @generated from field: int32 value = 1;
     */
    value: number;
    /**
     * Indicates whether value is the exact total or a lower bound.
     *
     * @generated from field: gitpod.v1.CountResponseRelation relation = 2;
     */
    relation: CountResponseRelation;
};
/**
 * Describes the message gitpod.v1.CountResponse.
 * Use `create(CountResponseSchema)` to create a new message.
 */
export declare const CountResponseSchema: GenMessage<CountResponse>;
/**
 * @generated from enum gitpod.v1.CountResponseRelation
 */
export declare enum CountResponseRelation {
    /**
     * @generated from enum value: COUNT_RESPONSE_RELATION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The count is equal to the number of matching records.
     *
     * @generated from enum value: COUNT_RESPONSE_RELATION_EQ = 1;
     */
    EQ = 1,
    /**
     * The actual number of matching records is greater than or equal to the value.
     *
     * @generated from enum value: COUNT_RESPONSE_RELATION_GTE = 2;
     */
    GTE = 2
}
/**
 * Describes the enum gitpod.v1.CountResponseRelation.
 */
export declare const CountResponseRelationSchema: GenEnum<CountResponseRelation>;
