import { Definition, ValidClosure, DEFAULT_META_PARAMS_TYPES } from "./types"
import { isFunction } from "./predicates"

/**
 * Create a definition with optional metadata.
 *
 * @param {ValidClosure} closure - The closure to be stored in the definition.
 * @param {MetaParams} meta - Optional metadata for the definition.
 * @returns {Definition<TypeParams, ReturnParams,  MetaParams>} The created definition.
 */

export function define<TypeParams, ReturnParams, MetaParams = DEFAULT_META_PARAMS_TYPES>
  (closure: ValidClosure, meta?: MetaParams):
  Definition<TypeParams, MetaParams> {

  const instance: Definition<TypeParams, MetaParams> = {
    meta: (): MetaParams => {
      return meta
    },
    redefine: (newClosure: ValidClosure, meta?: MetaParams) => {
      return define(newClosure, meta)
    },
    closure: (): string => {
      return `${closure}`
    },
    value: (...args: unknown[]): ReturnParams | TypeParams => {
      if (isFunction(closure)) {
        return closure(...args) as ReturnParams
      } else {
        return closure as TypeParams
      }
    },
    log: (): void => {
      console.log(`Meta: ${meta}, Closure:${closure}`)
    }
  }

  return instance
}



