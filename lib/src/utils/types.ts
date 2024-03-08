export interface DefinitionInterface<
  TypeParams = DEFAULT_TYPE_PARAMS_TYPES,
  ReturnParams = DEFAULT_RETURN_PARAMS_TYPES,
  MetaParams = DEFAULT_META_PARAMS_TYPES,
> {
  closure: EffectorType<TypeParams | ValidCallableClosure, string>;
  meta: EffectorType<Weak<MetaParams>>;
  version: EffectorType<null, string>;
  test: EffectorType<null, boolean>;
  redefine: EffectorType<
    any,
    DefinitionInterface<TypeParams, ReturnParams, MetaParams>
  >;
  value: EffectorType<TypeParams, ReturnParams>;
  log: EffectorType<MetaParams, void>;
}

export type EffectorType<
  TypeParams = DEFAULT_TYPE_PARAMS_TYPES,
  ReturnParams = DEFAULT_RETURN_PARAMS_TYPES,
> = (...args: TypeParams[]) => ReturnParams;

export type FutureType<ReturnType> = Promise<ReturnType>;

export type PlatformPrimativeTypes =
  | string
  | number
  | String
  | Number
  | boolean
  | bigint
  | Array<any>
  | Object;

export type ValidCallableClosure = (
  ...args: unknown[]
) =>
  | unknown
  | Promise<PlatformPrimativeTypes>
  | Object
  | number
  | string
  | boolean
  | bigint;


 
export type ValidClosure = | unknown
| Promise<PlatformPrimativeTypes>
| Object
| number
| string
| boolean
| bigint; 
  

export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

export type ArrayType<T> = T extends (infer Item)[] ? Item : T;

export type Weak<TypeParameters> =
  | TypeParameters
  | { [Parameter in keyof TypeParameters]?: never }
  | undefined;

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
  DefinitionType extends DefinitionInterface
    ? DefinitionType["value"]
    : DefinitionType
>;
