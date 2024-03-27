import { define } from "..";

export function definePages<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown,
>(closure: ReturnParams, meta?: any) {
  return define(closure as ReturnParams, meta);
}
