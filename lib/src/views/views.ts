import type { MetaDataType, ViewType } from "../typings";
import { ValidClosure, define } from "../utils";

/**
 * Defines an asset with optional metadata.
 *
 * @param {ReturnParams} closure - The closure to define the asset.
 * @param {unknown} meta - Optional metadata for the asset.
 * @return {AssetType<ReturnParams, ExtensionParams>} The defined asset type.
 */

export function defineView<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown
>(
  closure: ReturnParams | TypeParams | ValidClosure,
  meta?: MetaDataType<any>
): ViewType<TypeParams, ReturnParams, MetaParams> {
  const metaData: MetaParams = {
    ...(meta as any),
    type: "asset",
    version: 1,
    primary: "view",
    hierachy: "primary",
  } as const;

  return define<TypeParams, ReturnParams, MetaParams>(
    closure as ValidClosure,
    metaData
  );
}
