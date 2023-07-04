
export type ValidClosure = (...args: unknown[]) => unknown | Promise<unknown> | Object | number | string;

export type MethodType<ReturnType = unknown> = (...args: unknown[]) => ReturnType | Promise<ReturnType>;

export type Definition<TypeParams, MetaParams = unknown> = {
  readonly value: MethodType<TypeParams>
  readonly meta?: MethodType<MetaParams>,
  closure: MethodType<ValidClosure>
};

