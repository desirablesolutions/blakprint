import { define } from "..";


export type DatabaseParameters = {
   name: string,
}

export function defineDatabase<
  ReturnParameters = unknown,
  TypeParameters = DatabaseParameters,
  MetaParameters = unknown,
>(closure: ReturnParameters, meta?: MetaParameters) {
  return define<ReturnParameters, TypeParameters, MetaParameters>(
    closure,
    meta
  );
}



