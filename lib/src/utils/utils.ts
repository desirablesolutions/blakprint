import type { UtilityType } from "../typings";
import { ValidClosure, define } from "../utils";

/**
 * Defines an asset with optional metadata.
 *
 * @param {ReturnParams | TypeParams} closure - The closure to define the asset.
 * @param {MetaParams} meta - Optional metadata for the asset.
 * @return {UtilityType<TypeParams, ReturnParams, ExtensionParams>} The defined asset type.
 */

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
  } as const;

  return define<TypeParams, ReturnParams, MetaParams>(
    closure as ValidClosure,
    metaData
  );
}
