export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

export type ArrayType<T> = T extends (infer Item)[] ? Item : T;

export type Weakly<TypeParameters> =
  | TypeParameters
  | { [Parameter in keyof TypeParameters]?: never }
  | undefined;
