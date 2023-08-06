import type { DataType } from "@typings/models";
import type { MetaDataType } from "@typings/meta";
import { ValidClosure, define } from "src/utils/index";

/**
 * Defines an asset with optional metadata.
 *
 * @param {ReturnParams} closure - The closure to define the asset.
 * @param {unknown} meta - Optional metadata for the asset.
 * @return {AssetType<ReturnParams, ExtensionParams>} The defined asset type.
 */

export function defineData<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown
>(
  closure: ReturnParams | TypeParams | ValidClosure,
  meta?: MetaDataType<any>
): DataType<TypeParams, ReturnParams, MetaParams> {


  const metaData: MetaParams = {
    ...(meta as any),
    type: "data",
    version: Math.round(Date.now() as number / 10000) + 1,
    hierachy: "primary",
  } as const;

  return define<TypeParams, ReturnParams, MetaParams>(
    closure as ValidClosure,
    metaData
  );
}
