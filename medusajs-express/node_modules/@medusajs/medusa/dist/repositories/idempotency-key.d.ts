import { Repository } from "typeorm";
import { IdempotencyKey } from "../models/idempotency-key";
export declare class IdempotencyKeyRepository extends Repository<IdempotencyKey> {
}
