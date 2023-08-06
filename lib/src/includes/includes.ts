import type { IncludeType } from "src/typings/views";
import type { MetaDataType } from "src/typings/meta";
import { ValidClosure, define } from "src/utils/index";

/**
 * Defines an asset with optional metadata.
 *
 * @param {ReturnParams} closure - The closure to define the asset.
 * @param {unknown} meta - Optional metadata for the asset.
 * @return {AssetType<ReturnParams, ExtensionParams>} The defined asset type.
 */

export function defineInclude<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown
>(
  closure: ReturnParams | TypeParams | ValidClosure,
  meta?: MetaDataType<any>
): IncludeType<TypeParams, ReturnParams, MetaParams> {

    
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
