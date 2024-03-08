import type { MetaDataType, PageType } from "../typings";
import { ValidClosure, define } from "../utils";


export function definePage<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown
>(
  closure: ReturnParams | TypeParams | ValidClosure,
  meta?: MetaDataType<any>
): PageType<TypeParams, ReturnParams, MetaParams> {


  const metaData: MetaParams = {
    ...(meta as any),
    type: "page",
    version: Math.round(Date.now() as number / 100000),
    primary: "model",
    secondary: "data",
    hierachy: "tertiary",
  } as const;

  return define<TypeParams, ReturnParams, MetaParams>(
    closure as ValidClosure,
    metaData
  );
}

