import { User } from "../../../..";
import { DeleteResponse } from "../../../../types/common";
export declare const unauthenticatedUserRoutes: (app: any) => void;
declare const _default: (app: any) => any;
export default _default;
export declare type AdminUserRes = {
    user: Omit<User, "password_hash">;
};
export declare type AdminUsersListRes = {
    users: Omit<User, "password_hash">[];
};
export declare type AdminDeleteUserRes = DeleteResponse;
export * from "./reset-password";
export * from "./reset-password-token";
export * from "./create-user";
export * from "./delete-user";
export * from "./get-user";
export * from "./list-users";
export * from "./update-user";
