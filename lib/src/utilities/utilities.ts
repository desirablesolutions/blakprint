import { define } from "..";

export function defineUtility<
  TypeParameters = unknown,
  ReturnParameters = unknown,
  MetaParameters = unknown,
>(closure: ReturnParameters, meta?: MetaParameters) {
  return define<TypeParameters, ReturnParameters, MetaParameters>(
    closure as ReturnParameters,
    meta
  );
}
