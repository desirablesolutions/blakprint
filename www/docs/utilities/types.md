---
title: "Types"
---


## Effector 
```ts
export type Effector<ReturnParams = unknown, TypeParams = unknown> = (
  ...args: TypeParams[]
) => ReturnParams;
```



```ts

export type Effector<ReturnParams = unknown, TypeParams = unknown> = (
  ...args: TypeParams[]
) => ReturnParams;

export interface Definition<
  ReturnParameters = unknown,
  TypeParameters = unknown,
  MetaParameters = unknown,
> {
  closure: TypeParameters | Effector<ReturnParameters, TypeParameters>;
  meta: Effector<Weakly<MetaParameters>>;
  version: Effector<string, unknown>;
  test: Effector<Effector<unknown, boolean>, boolean>;
  redefine: Effector<
    Definition<TypeParameters, ReturnParameters, MetaParameters>,
    Definition<TypeParameters, ReturnParameters, MetaParameters>
  >;
  value: Effector<ReturnParameters, TypeParameters>;
}

export type FutureType<ReturnTypeParameter> =
  | Promise<ReturnTypeParameter>
  | ((...args: unknown[]) => Promise<ReturnTypeParameter>);

export type PlatformPrimativeTypes =
  | string
  | number
  | String
  | Number
  | boolean
  | bigint
  | Array<any>
  | Object;

export type ValidClosure =
  | unknown
  | Promise<PlatformPrimativeTypes>
  | Object
  | number
  | string
  | boolean
  | bigint;

export type ValidCallableClosure = (...args: unknown[]) => ValidClosure;



export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

export type ArrayType<T> = T extends (infer Item)[] ? Item : T;

export type Weakly<TypeParameters> =
  | TypeParameters
  | { [Parameter in keyof TypeParameters]?: never }
  | undefined;



  const MetaDataHiearchy = [
    "primary",
    "secondary",
    "tertiary",
    "quaternary",
    "quinary",
    "senary",
    "octary",
    "nonary",
    "decenary",
    "undecenary",
    "duodecenary",
  ] as const;
  
  export type MetaDataHiearchyType = Record<
    keyof typeof MetaDataHiearchy,
    typeof MetaDataHiearchy
  >;
  
  export type MetaDataType<T=any> = T;
  
  ```