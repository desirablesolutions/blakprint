import { define } from "..";

export function defineInclude<
  TypeParams = unknown,
  ReturnParams = unknown,
  MetaParams = unknown,
>(closure: ReturnParams, meta?: any) {
  return define<TypeParams, ReturnParams, MetaParams>(
    closure as ReturnParams,
    meta
  );
}
