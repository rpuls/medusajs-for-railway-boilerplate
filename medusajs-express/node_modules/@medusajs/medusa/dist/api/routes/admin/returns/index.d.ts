import "reflect-metadata";
import { Order, Return } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare type AdminReturnsCancelRes = {
    order: Order;
};
export declare type AdminReturnsListRes = PaginatedResponse & {
    returns: Return[];
};
export declare type AdminReturnsRes = {
    return: Return;
};
export * from "./list-returns";
export * from "./receive-return";
