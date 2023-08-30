import type { TypeFactory } from "interface-forge";

export interface Definition<
  TypeParams = DEFAULT_TYPE_PARAMS_TYPES,
  ReturnParams = DEFAULT_RETURN_PARAMS_TYPES,
  MetaParams = DEFAULT_META_PARAMS_TYPES
> {
  closure: EffectorType<TypeParams | ValidClosure, string>;
  meta: EffectorType<Weak<MetaParams>>;
  version: EffectorType<null, string>;
  redefine: EffectorType<any, Definition<TypeParams, ReturnParams, MetaParams>>;
  value: EffectorType<TypeParams, ReturnParams>;
  generate: EffectorType<any, TypeParams | EffectorType<any, TypeParams>>;
  log: EffectorType<MetaParams, void>;
}

export type EffectorType<
  TypeParams = DEFAULT_TYPE_PARAMS_TYPES,
  ReturnParams = DEFAULT_RETURN_PARAMS_TYPES
> = (...args: TypeParams[]) => ReturnParams;

export type EffectorInterface<TypeParams = unknown> = {
  readonly success: EffectorType<TypeParams, unknown>;
  readonly failure: EffectorType<any, any>;
  readonly sync: EffectorType<any, any>;
  readonly execute: EffectorType<any, any>;
  readonly compose: EffectorType<any, any>;
};

export type FutureType<ReturnType> = Promise<ReturnType>;

export type TypeFactoryInterface<TypeParams> = TypeFactory<TypeParams>;

export type PrimativeTypes =
  | string
  | number
  | String
  | Number
  | boolean
  | bigint
  | Array<any>
  | Object;

export type ValidClosure = (
  ...args: unknown[]
) =>
  | unknown
  | Promise<PrimativeTypes>
  | Object
  | number
  | string
  | boolean
  | bigint;

export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

export type ArrayType<T> = T extends (infer Item)[] ? Item : T;

export type Weak<Type> = Type | null | undefined;

export type DEFAULT_ERROR_PARAMS_TYPES =
  | string
  | number
  | { error: number | string };

export type DEFAULT_META_PARAMS_TYPES = DEFAULT_ERROR_PARAMS_TYPES | any;

export type DEFAULT_RETURN_PARAMS_TYPES = any;

export type DEFAULT_TYPE_PARAMS_TYPES =
  | {
      version?: number | string;
    }
  | any;

export type DefinitionParams<DefinitionType> = ReturnType<
  DefinitionType extends Definition ? DefinitionType["value"] : DefinitionType
>;

export type DefinitionType<DefinitionType> = ReturnType<
  DefinitionType extends Definition ? DefinitionType["closure"] : DefinitionType
>;

export type DefinitionPresetsType = {
  [name: symbol | string]: any;
} & {
  default: any;
};
