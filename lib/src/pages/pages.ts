import { define } from "..";

export type PagesDefinition = {
  default: {};
};

export function definePages<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown,
>(closure: ReturnParams, meta?: any) {
  return define<TypeParams, ReturnParams, MetaParams>(
    closure as ReturnParams,
    meta
  );
}


export function definePage<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown,
>(closure: ReturnParams, meta?: any) {
  return define<TypeParams, ReturnParams, MetaParams>(
    closure as ReturnParams,
    meta
  );
}
