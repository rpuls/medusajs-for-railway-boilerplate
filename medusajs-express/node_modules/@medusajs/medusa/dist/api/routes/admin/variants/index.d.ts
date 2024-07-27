import { PaginatedResponse } from "../../../../types/common";
import { ProductVariant } from "../../../../models/product-variant";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminVariantRelations: string[];
export declare const defaultAdminVariantFields: (keyof ProductVariant)[];
export declare const allowedAdminVariantFields: string[];
export declare const allowedAdminVariantRelations: (keyof ProductVariant)[];
export declare type AdminVariantsListRes = PaginatedResponse & {
    variants: ProductVariant[];
};
export * from "./list-variants";
