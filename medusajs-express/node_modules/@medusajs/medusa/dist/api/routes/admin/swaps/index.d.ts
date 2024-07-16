import { Swap } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminSwapRelations: string[];
export declare const defaultAdminSwapFields: string[];
export declare type AdminSwapsListRes = PaginatedResponse & {
    swaps: Swap[];
};
export declare type AdminSwapsRes = {
    swap: Swap;
};
export * from "./get-swap";
export * from "./list-swaps";
