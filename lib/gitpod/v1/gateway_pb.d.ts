import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { PaginationRequest, PaginationResponse } from "./pagination_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gitpod/v1/gateway.proto.
 */
export declare const file_gitpod_v1_gateway: GenFile;
/**
 * @generated from message gitpod.v1.ListGatewaysRequest
 */
export type ListGatewaysRequest = Message<"gitpod.v1.ListGatewaysRequest"> & {
    /**
     * pagination contains the pagination options for listing gateways
     *
     * @generated from field: gitpod.v1.PaginationRequest pagination = 1;
     */
    pagination?: PaginationRequest;
};
/**
 * Describes the message gitpod.v1.ListGatewaysRequest.
 * Use `create(ListGatewaysRequestSchema)` to create a new message.
 */
export declare const ListGatewaysRequestSchema: GenMessage<ListGatewaysRequest>;
/**
 * @generated from message gitpod.v1.ListGatewaysResponse
 */
export type ListGatewaysResponse = Message<"gitpod.v1.ListGatewaysResponse"> & {
    /**
     * gateways contains the list of gateways
     *
     * @generated from field: repeated gitpod.v1.Gateway gateways = 1;
     */
    gateways: Gateway[];
    /**
     * pagination contains the pagination response
     *
     * @generated from field: gitpod.v1.PaginationResponse pagination = 2;
     */
    pagination?: PaginationResponse;
};
/**
 * Describes the message gitpod.v1.ListGatewaysResponse.
 * Use `create(ListGatewaysResponseSchema)` to create a new message.
 */
export declare const ListGatewaysResponseSchema: GenMessage<ListGatewaysResponse>;
/**
 * Gateway represents a system gateway that provides access to services
 *
 * @generated from message gitpod.v1.Gateway
 */
export type Gateway = Message<"gitpod.v1.Gateway"> & {
    /**
     * name is the human-readable name of the gateway. name is unique across all gateways.
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * url of the gateway
     *
     * @generated from field: string url = 2;
     */
    url: string;
    /**
     * region is the geographical region where the gateway is located
     *
     * @generated from field: string region = 3;
     */
    region: string;
};
/**
 * Describes the message gitpod.v1.Gateway.
 * Use `create(GatewaySchema)` to create a new message.
 */
export declare const GatewaySchema: GenMessage<Gateway>;
/**
 * @generated from service gitpod.v1.GatewayService
 */
export declare const GatewayService: GenService<{
    /**
     * @generated from rpc gitpod.v1.GatewayService.ListGateways
     */
    listGateways: {
        methodKind: "unary";
        input: typeof ListGatewaysRequestSchema;
        output: typeof ListGatewaysResponseSchema;
    };
}>;
