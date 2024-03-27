import { define } from "..";

export function defineData<
  ReturnParameters = any,
  TypeParameters = any,
  MetaParameters = unknown,
>(closure: ReturnParameters, meta?: MetaParameters) {
  return define<ReturnParameters, TypeParameters, MetaParameters>(
    closure,
    meta
  );
}



