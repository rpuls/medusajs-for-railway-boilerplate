import { Customer, User } from "..";
export declare type AuthenticateResult = {
    success: boolean;
    user?: User;
    customer?: Customer;
    error?: string;
};
