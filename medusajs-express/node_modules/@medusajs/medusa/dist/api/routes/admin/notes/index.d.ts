import { Note } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
import "reflect-metadata";
declare const _default: (app: any) => any;
export default _default;
export declare type AdminNotesRes = {
    note: Note;
};
export declare type AdminNotesDeleteRes = DeleteResponse;
export declare type AdminNotesListRes = PaginatedResponse & {
    notes: Note[];
};
export * from "./create-note";
export * from "./delete-note";
export * from "./get-note";
export * from "./list-notes";
export * from "./update-note";
