import { Definition, ValidClosure, DEFAULT_META_PARAMS_TYPES } from "./types"
import { isFunction } from "./predicates"


/**
 * Create a definition with optional metadata.
 *
 * @param {ValidClosure} closure - The closure to be stored in the definition.
 * @param {MetaParams} meta - Optional metadata for the definition.
 * @returns {Definition<TypeParams, MetaParams>} The created definition.
 */

export function define<TypeParams, MetaParams = DEFAULT_META_PARAMS_TYPES>
  (closure: ValidClosure, meta?: MetaParams):
  Definition<TypeParams, MetaParams> {

  const instance: Definition<TypeParams, MetaParams> = {
    meta: () => {
      return meta
    },
    redefine: (newClosure: ValidClosure) => {
      return newClosure || closure
    },
    closure: () => {
      return `${closure}`
    },
    value: (...args) => {
      if (isFunction(closure)) {
        return closure(...args) as TypeParams
      } else {
        return closure as TypeParams
      }
    },
    log: () => {
      console.log(`${closure}`)
    }
  }

  return instance
}



