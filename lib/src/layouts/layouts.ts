import { define } from "..";

export function defineLayout<
  ReturnParameters = any,
  TypeParameters = any,
  MetaParameters = unknown,
>(closure: ReturnParameters, meta?: MetaParameters) {
  return define<ReturnParameters, TypeParameters, MetaParameters>(
    closure,
    meta
  );
}



