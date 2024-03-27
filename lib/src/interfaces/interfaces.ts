import { define } from "..";

export function defineInterface<
  ReturnParameters = any,
  TypeParameters = any,
  MetaParameters = unknown,
>(closure: ReturnParameters, meta?: MetaParameters) {
  return define<ReturnParameters, TypeParameters, MetaParameters>(
    closure,
    meta
  );
}



