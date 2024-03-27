import { define } from "..";

export function defineStyle<
  TypeParameters = unknown,
  ReturnParameters = unknown,
  MetaParameters = unknown,
>(closure: ReturnParameters, meta?: MetaParameters) {
  return define<TypeParameters, ReturnParameters, MetaParameters>(
    closure as ReturnParameters,
    meta
  );
}
