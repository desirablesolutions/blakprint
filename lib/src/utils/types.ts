import type { TypeFactory } from 'interface-forge';

export interface Definition<TypeParams = DEFAULT_TYPE_PARAMS_TYPES,
  ReturnParams = DEFAULT_RETURN_PARAMS_TYPES,
  MetaParams = DEFAULT_META_PARAMS_TYPES> {

  closure: EffectorType<ValidClosure>,
  meta?: EffectorType<Weak<MetaParams>>,
  redefine?: EffectorType<any,Definition<TypeParams, ReturnParams, MetaParams>, Error>,
  value: EffectorType<TypeParams, ReturnParams, MetaParams>,
  log: EffectorType<unknown, void, MetaParams>,

}

export type EffectorType<TypeParams = DEFAULT_TYPE_PARAMS_TYPES,
  ReturnParams = DEFAULT_RETURN_PARAMS_TYPES,
  ErrorParams = DEFAULT_ERROR_PARAMS_TYPES> = (...args: TypeParams[] | any[]) => ReturnParams | ErrorParams


export type TypeFactoryInterface<TypeParams> = TypeFactory<TypeParams> 


export type PrimativeTypes = string | number | String | Number | boolean | bigint | Array<any> | Object

export type ValidClosure = (...args: unknown[]) => unknown | Promise<PrimativeTypes> | Object | number | string | boolean | bigint;

export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

export type ArrayType<T> = T extends (infer Item)[] ? Item : T

export type Weak<Type> = Type | null | undefined

export type DEFAULT_ERROR_PARAMS_TYPES = string | number | { error: number | string }

export type DEFAULT_META_PARAMS_TYPES = DEFAULT_ERROR_PARAMS_TYPES | any

export type DEFAULT_RETURN_PARAMS_TYPES = any

export type DEFAULT_TYPE_PARAMS_TYPES = {
  version?: number | string
} | any

export type DefinitionParams<DefinitionType> = ReturnType<DefinitionType extends Definition ? DefinitionType["value"] : DefinitionType>
export type DefinitionType<DefinitionType> = ReturnType<DefinitionType extends Definition ? DefinitionType["value"] : DefinitionType>
