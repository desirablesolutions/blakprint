
export type ValidClosure = (...args: unknown[]) => unknown | Promise<unknown> | Object | number | string | boolean | bigint;

export type MethodType<ReturnType = ValidClosure, Args extends unknown[] = any[],> = (...args: Args) => ReturnType;

export interface DEFAULT_META_PARAMS_TYPES {
  version?: number | string
}
export interface Definition<TypeParams, MetaParams = DEFAULT_META_PARAMS_TYPES> {
  closure: ValidClosure,
  meta?: MethodType<MetaParams>,
  redefine?: MethodType<ValidClosure>,
  value: MethodType<TypeParams>,
  log: MethodType<void>
}


export type Weak<Type> = Type | null | undefined