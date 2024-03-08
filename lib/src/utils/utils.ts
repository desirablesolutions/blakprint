import type { UtilityType } from "../typings";
import { ValidClosure, define } from "../utils";

export function defineUtility<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown
>(
  closure: ReturnParams | TypeParams | ValidClosure,
  meta?:any
): UtilityType<TypeParams, ReturnParams, MetaParams> {


  const metaData: MetaParams = {
    ...(meta as any),
    type: "utility",
    version: 1,
    primary: "model",
    hierachy: "primary",
  } satisfies MetaParams;

  return define<TypeParams, ReturnParams, MetaParams>(
    closure as ReturnParams,
    metaData
  );
}
