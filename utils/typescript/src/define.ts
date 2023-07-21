import { Definition, ValidClosure, DEFAULT_META_PARAMS_TYPES } from "./types"
import { isFunction } from "./predicates"
import { Effector } from "./effector"
import { TypeFactory } from 'interface-forge';
import { Factory } from "./factory";
/**
 * Create a definition with optional metadata.
 *
 * @param {ValidClosure} closure - The closure to be stored in the definition.
 * @param {MetaParams} meta - Optional metadata for the definition.
 * @returns {Definition<TypeParams, ReturnParams,  MetaParams>} The created definition.
 */

export function define<TypeParams = unknown, ReturnParams = unknown, MetaParams = DEFAULT_META_PARAMS_TYPES>
  (closure: ValidClosure | number | string | any, meta?: MetaParams):
  Definition<TypeParams, MetaParams> {

  const instance: Definition<TypeParams, ReturnParams, MetaParams> = {
    meta: (): MetaParams => {
      return Effector().succeed(meta)
    },
    redefine: (newClosure: ValidClosure, newMeta?: MetaParams) => {
      return define(newClosure, newMeta)
    },
    closure: (): string => {
      return `${closure}`
    },
    value: (...args: any[]): ReturnParams => {
      if (isFunction(closure)) {
        return closure(...args) as ReturnParams
      } else {
        return closure as ReturnParams
      }
    },
    generate: () => {
       return Factory<TypeParams>(() => {})
    },
    log: (): void => {
      console.log(`Meta: ${meta}, Closure:${closure}`)
    }
  }

  return instance
}



const myData = define<any>(0)