import { define } from "..";


export function defineComponent<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown,
>(closure: ReturnParams, meta?: any) {
  return define(closure as ReturnParams, meta);
}
