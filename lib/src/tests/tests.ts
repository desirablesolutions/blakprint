import { define } from ".";
import type { Definition } from ".";

export function defineUtility<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown,
>(closure: ReturnParams, meta?: any): Definition {
  return define(closure as ReturnParams, meta);
}
 