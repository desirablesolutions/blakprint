import { TypeFactory } from "interface-forge";
import { Factory, FactoryInterface } from "./factory";
import { isFunction } from "./predicates";
import { Definition, EffectorType } from "./types";
import {
  DEFAULT_META_PARAMS_TYPES,
  DEFAULT_RETURN_PARAMS_TYPES,
  DEFAULT_TYPE_PARAMS_TYPES,
  ValidClosure
} from "./utils";



/**
 * Create a definition with optional metadata.
 *
 * @param {ValidClosure} closure - The closure to be stored in the definition.
 * @param {MetaParams} meta - Optional metadata for the definition.
 * @returns {Definition<TypeParams, ReturnParams,  MetaParams>} The created definition.
 */

export function define<
  TypeParams = DEFAULT_TYPE_PARAMS_TYPES,
  ReturnParams = DEFAULT_RETURN_PARAMS_TYPES,
  MetaParams = DEFAULT_META_PARAMS_TYPES
>(
  closure: ValidClosure,
  meta?: MetaParams
): Definition<TypeParams, ReturnParams, MetaParams> {


  const instance: Definition<TypeParams, ReturnParams, MetaParams> = {
    meta: (): MetaParams => {
      return meta ?? null;
    },
    redefine: (
      newClosure: TypeParams extends ValidClosure ? TypeParams : ValidClosure,
      newMeta?: MetaParams
    ) => {
      return define(newClosure, newMeta);
    },
    closure: (): string => {
      return `${closure}`;
    },
    value: (...args: any[]): ReturnParams => {
      if (isFunction(closure)) {
        const result = closure(...args) as ReturnParams;

        return result;
      } else {
        return closure as ReturnParams;
      }
    },
    generate: (blakprint?: EffectorType<TypeParams> | TypeParams): FactoryInterface<TypeParams> => {
      if (!isFunction(blakprint)) {
        return Factory<TypeParams>(TypeFactory, blakprint);
      } else {
        return Factory<TypeParams>(TypeFactory, blakprint());
      }
    },
    log: (): void => {
      console.log(`${closure}::${meta} `)
    },
  } as const

  return instance;
}

//[to-do]: implement useEffect hook for adding third party parameters.
export function useEffect<TypeParams = unknown>() {
  return null
}



