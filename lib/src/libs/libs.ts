import { define } from "..";

export function defineLibrary<
  TypeParameters = unknown,
  ReturnParameters = unknown,
  MetaParameters = unknown,
>(closure: ReturnParameters, meta?: MetaParameters) {
  return define<TypeParameters, ReturnParameters, MetaParameters>(
    closure as ReturnParameters,
    meta
  );
}
