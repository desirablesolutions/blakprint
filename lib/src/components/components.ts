import { define } from "..";

export function defineComponent<
  ReturnParameters = any,
  TypeParameters = any,
  MetaParameters = unknown,
>(closure: ReturnParameters, meta?: MetaParameters) {
  return define<ReturnParameters, TypeParameters, MetaParameters>(
    closure,
    meta
  );
}



