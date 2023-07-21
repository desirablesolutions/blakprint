export type ValidClosure = (...args: unknown[]) => unknown | Promise<unknown> | Object | number | string | boolean | bigint;

export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

export type ArrayType<T> = T extends (infer Item)[] ? Item : T

export type Weak<Type> = Type | null | undefined

export interface DEFAULT_META_PARAMS_TYPES {
    version?: number | string
  }
  
  export interface DEFAULT_RETURN_PARAMS_TYPES {
    version?: number | string
  }
  
  export interface DEFAULT_TYPE_PARAMS_TYPES {
    version?: number | string
  }
  
  export interface DEFAULT_ERROR_PARAMS_TYPES {
    version?: number | string
  }
  