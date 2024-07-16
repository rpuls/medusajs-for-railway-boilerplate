import { PaginatedResponse } from "./../../../../types/common";
import { ProductVariant } from "../../../../";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultStoreVariantRelations: string[];
export declare type StoreVariantsRes = {
    variant: ProductVariant;
};
export declare type StoreVariantsListRes = PaginatedResponse & {
    variants: ProductVariant[];
};
export * from "./list-variants";
export * from "./get-variant";
