import { Invite } from "../models/invite";
export declare type ListInvite = Omit<Invite, "beforeInsert"> & {
    token: string;
};
