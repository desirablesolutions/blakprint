export interface DEFAULT_META_PARAMS_TYPES {
  version?: number | string
}

export interface DEFAULT_RETURN_PARAMS_TYPES {
  version?: number | string
}

export interface DEFAULT_TYPE_PARAMS_TYPES {
  version?: number | string
}

export type ValidClosure = (...args: unknown[]) => unknown | Promise<unknown> | Object | number | string | boolean | bigint;

export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

export type ArrayType<T> = T extends (infer Item)[] ? Item : T

export type Weak<Type> = Type | null | undefined

export type MethodType<ReturnType = ValidClosure, Args extends unknown[] = any[],> = (...args: Args) => ReturnType;
export interface Definition<TypeParams = DEFAULT_TYPE_PARAMS_TYPES,
  ReturnParams = DEFAULT_RETURN_PARAMS_TYPES,
  MetaParams = DEFAULT_META_PARAMS_TYPES> {

  closure: ValidClosure,
  meta?: MethodType<MetaParams>,
  redefine?: MethodType<Definition<ValidClosure, unknown>>,
  value: MethodType<ReturnParams | TypeParams | ReturnType<ValidClosure>>,
  log: MethodType<void>

}

