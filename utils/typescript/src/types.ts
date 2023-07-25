import type { TypeFactory } from 'interface-forge';
import {
  DEFAULT_ERROR_PARAMS_TYPES,
  DEFAULT_META_PARAMS_TYPES,
  DEFAULT_RETURN_PARAMS_TYPES,
  DEFAULT_TYPE_PARAMS_TYPES,
  ValidClosure,
  Weak
} from "./utils";

export interface Definition<TypeParams = DEFAULT_TYPE_PARAMS_TYPES,
  ReturnParams = DEFAULT_RETURN_PARAMS_TYPES,
  MetaParams = DEFAULT_META_PARAMS_TYPES> {

  closure: EffectorType<ValidClosure>,
  meta?: EffectorType<MetaParams>,
  redefine?: EffectorType<TypeParams, Definition<TypeParams, ReturnParams, MetaParams>, MetaParams>,
  value: EffectorType<TypeParams, ReturnParams, MetaParams>,
  log: EffectorType<unknown, void, MetaParams>,
  generate: EffectorType<TypeParams>

}

export type EffectorType<TypeParams = DEFAULT_TYPE_PARAMS_TYPES,
  ReturnParams = DEFAULT_RETURN_PARAMS_TYPES,
  ErrorParams = DEFAULT_ERROR_PARAMS_TYPES> = (...args: TypeParams[] | any[]) => Weak<ReturnParams | ErrorParams>


export type TypeFactoryInterface<TypeParams> = TypeFactory<TypeParams> 
