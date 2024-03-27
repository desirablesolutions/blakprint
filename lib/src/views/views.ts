import { define } from "..";

export function defineView<
  TypeParameters = unknown,
  ReturnParameters = unknown,
  MetaParameters = unknown,
>(closure: ReturnParameters, meta?: MetaParameters) {
  return define<TypeParameters, ReturnParameters, MetaParameters>(
    closure as ReturnParameters,
    meta
  );
}
