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

