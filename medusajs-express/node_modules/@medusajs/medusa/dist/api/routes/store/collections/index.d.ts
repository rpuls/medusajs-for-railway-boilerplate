import { PaginatedResponse } from "./../../../../types/common";
import { ProductCollection } from "../../../../";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultStoreCollectionFields: string[];
export declare const defaultStoreCollectionRelations: string[];
export declare type StoreCollectionsListRes = PaginatedResponse & {
    collections: ProductCollection[];
};
export declare type StoreCollectionsRes = {
    collection: ProductCollection;
};
export * from "./get-collection";
export * from "./list-collections";
