import { DefaultNamingStrategy } from "typeorm";
export declare class ShortenedNamingStrategy extends DefaultNamingStrategy {
    eagerJoinRelationAlias(alias: string, propertyPath: string): string;
}
