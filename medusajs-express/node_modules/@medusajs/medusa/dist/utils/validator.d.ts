import { ClassConstructor } from "class-transformer";
import { ValidatorOptions } from "class-validator";
export declare function validator<T, V>(typedClass: ClassConstructor<T>, plain: V, config?: ValidatorOptions): Promise<T>;
