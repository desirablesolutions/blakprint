import type { UtilityType } from "src/typings/controllers";
import type { MetaDataType } from "src/typings/meta";
import { ValidClosure, define } from "blakprint-utils-ts";

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
  meta?: MetaDataType<any>
): UtilityType<TypeParams, ReturnParams, MetaParams> {


  const metaData: MetaParams = {
    ...(meta as any),
    type: "asset",
    version: 1,
    primary: "model",
    secondary: "data",
    hierachy: "tertiary",
  } as const;

  return define<TypeParams, ReturnParams, MetaParams>(
    closure as ValidClosure,
    metaData
  );
}
