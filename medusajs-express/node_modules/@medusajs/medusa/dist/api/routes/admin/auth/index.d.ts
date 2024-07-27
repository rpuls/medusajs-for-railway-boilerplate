import { User } from "../../../..";
declare const _default: (app: any) => any;
export default _default;
export declare type AdminAuthRes = {
    user: Omit<User, "password_hash">;
};
export * from "./create-session";
export * from "./delete-session";
export * from "./get-session";
