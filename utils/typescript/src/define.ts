import { Definition, } from "./types"
import { isFunction } from "./predicates"
import { ValidClosure, DEFAULT_RETURN_PARAMS_TYPES, DEFAULT_TYPE_PARAMS_TYPES, DEFAULT_META_PARAMS_TYPES, DEFAULT_ERROR_PARAMS_TYPES } from "./utils"
import { success, execute, failure } from "./effector"
import { Factory } from "./factory";

/**
 * Create a definition with optional metadata.
 *
 * @param {ValidClosure} closure - The closure to be stored in the definition.
 * @param {MetaParams} meta - Optional metadata for the definition.
 * @returns {Definition<TypeParams, ReturnParams,  MetaParams>} The created definition.
 */


export function define<TypeParams = DEFAULT_TYPE_PARAMS_TYPES,
  ReturnParams = DEFAULT_RETURN_PARAMS_TYPES,
  MetaParams = DEFAULT_META_PARAMS_TYPES>
  (closure: ValidClosure, meta?: MetaParams):
  Definition<TypeParams, ReturnParams, MetaParams> {

  const instance: Definition<TypeParams, ReturnParams, MetaParams> = {
    meta: (): MetaParams => {
      return meta
    },
    redefine: (newClosure: TypeParams extends ValidClosure ? TypeParams : ValidClosure, newMeta?: MetaParams) => {
      return define(newClosure, newMeta)
    },
    closure: (): string => {
      return `${closure}`
    },
    value: (...args: any[]): ReturnParams => {

      if (isFunction(closure)) {

        const result = success(closure(...args)) as ReturnParams

        return execute(result) 
      } else {
        return closure as ReturnParams
      }
    },
    generate: () => {
      return Factory<TypeParams>(() => { })
    },
    log: () => {
      return 0
      console.log(`Meta: ${meta}, Closure:${closure}`)
    }
  }

  return instance
}

