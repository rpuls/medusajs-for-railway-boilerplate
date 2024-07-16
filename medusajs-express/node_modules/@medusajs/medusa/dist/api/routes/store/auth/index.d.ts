import { Customer } from "./../../../..";
declare const _default: (app: any) => any;
export default _default;
export declare type StoreAuthRes = {
    customer: Customer;
};
export declare type StoreGetAuthEmailRes = {
    exists: boolean;
};
export * from "./create-session";
export * from "./delete-session";
export * from "./exists";
export * from "./get-session";
