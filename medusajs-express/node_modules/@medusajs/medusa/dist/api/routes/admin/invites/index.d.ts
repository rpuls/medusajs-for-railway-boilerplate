import { Invite } from "../../../../models/invite";
import { DeleteResponse } from "../../../../types/common";
import "reflect-metadata";
export declare const unauthenticatedInviteRoutes: (app: any) => void;
declare const _default: (app: any) => any;
export default _default;
export declare type AdminInviteDeleteRes = DeleteResponse;
export declare type AdminListInvitesRes = {
    invites: Invite[];
};
export * from "./accept-invite";
export * from "./create-invite";
export * from "./delete-invite";
export * from "./list-invites";
export * from "./resend-invite";
