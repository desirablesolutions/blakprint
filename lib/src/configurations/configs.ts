import { define } from "..";


export function defineConfiguration<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown,
>(closure: ReturnParams, meta?: any) {
  return define(closure as ReturnParams, meta);
}
