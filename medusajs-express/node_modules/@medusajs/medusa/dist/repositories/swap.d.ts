import { FindManyOptions, Repository } from "typeorm";
import { Swap } from "../models/swap";
export declare class SwapRepository extends Repository<Swap> {
    findWithRelations(relations?: Array<keyof Swap>, optionsWithoutRelations?: Omit<FindManyOptions<Swap>, "relations">): Promise<Swap[]>;
    findOneWithRelations(relations?: Array<keyof Swap>, optionsWithoutRelations?: Omit<FindManyOptions<Swap>, "relations">): Promise<Swap>;
}
