import type { LayoutType, MetaDataType } from "../typings";
import { ValidClosure, define } from "../utils";


/**
 * Defines an asset with optional metadata.
 *
 * @param {ReturnParams} closure - The closure to define the asset.
 * @param {unknown} meta - Optional metadata for the asset.
 * @return {AssetType<ReturnParams, ExtensionParams>} The defined asset type.
 */

export function defineLayout<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown
>(
  closure: ReturnParams | TypeParams | ValidClosure,
  meta?: MetaDataType<any>
): LayoutType<TypeParams, ReturnParams, MetaParams> {

    
  const metaData: MetaParams = {
    ...(meta as any),
    type: "layout",
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
