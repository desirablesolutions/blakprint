import {
  ValidClosure,
  DEFAULT_ERROR_PARAMS_TYPES,
  DEFAULT_RETURN_PARAMS_TYPES,
  DEFAULT_META_PARAMS_TYPES,
  DEFAULT_TYPE_PARAMS_TYPES
} from "./utils"

export interface Definition<TypeParams = DEFAULT_TYPE_PARAMS_TYPES,
  ReturnParams = DEFAULT_RETURN_PARAMS_TYPES,
  MetaParams = DEFAULT_META_PARAMS_TYPES> {

  closure: ValidClosure,
  meta?: Effector<MetaParams>,
  redefine?: Effector<Definition<ValidClosure, unknown>>,
  value: Effector<TypeParams, ReturnParams>,
  log: Effector<void>,
  generate: Effector<TypeParams>

}

export type Effector<TypeParams = DEFAULT_TYPE_PARAMS_TYPES,
  ReturnParams = DEFAULT_RETURN_PARAMS_TYPES,
  MetaParams = DEFAULT_META_PARAMS_TYPES,
  ErrorParams = DEFAULT_ERROR_PARAMS_TYPES> = {
    meta?: MetaParams,
    (...args: TypeParams[] | any[]): ReturnParams | ErrorParams
  }


