import { TypeFactory } from "interface-forge";
import { Effector } from "./effector";
import { isFunction } from "./predicates";
import {
  DEFAULT_META_PARAMS_TYPES,
  DEFAULT_RETURN_PARAMS_TYPES,
  DEFAULT_TYPE_PARAMS_TYPES, Definition, ValidClosure
} from "./types";



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
    meta: (): MetaParams | undefined => {
      return meta;
    },
    redefine: (
      newClosure: TypeParams extends ValidClosure ? TypeParams : ValidClosure,
      newMeta?: MetaParams
    ) => {
      return define<TypeParams, ReturnParams, MetaParams>(newClosure, newMeta);
    },
    closure: (): TypeParams => {
      return `${closure}` as TypeParams;
    },
    value: (...args: any[]): ReturnParams  => {
      if (isFunction(closure)) {
        const result = closure(...args) as ReturnParams;
        return result;
      } else {
        return closure as ReturnParams;
      }
    },

    log: (): void => {
      console.log(`${closure}: ${meta}: `)
    },
  } 

  return instance;
}

export function withEffectIO<TypeParams = unknown>() {
  return Effector()
}

export function withTypeFactory(params: any) {
  return new TypeFactory(params)
}


