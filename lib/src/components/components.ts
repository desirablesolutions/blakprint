import type { ComponentType, MetaDataType } from "../typings";
import { ValidClosure, define } from "../utils";

/**
 * Defines an asset with optional metadata.
 *
 * @param {ReturnParams} closure - The closure to define the asset.
 * @param {unknown} meta - Optional metadata for the asset.
 * @return {AssetType<ReturnParams, ExtensionParams>} The defined asset type.
 */

export function defineComponent<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown
>(
  closure: ReturnParams | TypeParams | ValidClosure,
  meta?: MetaDataType<any>
): ComponentType<TypeParams, ReturnParams, MetaParams> {

    
  const metaData: MetaParams = {
    ...(meta as any),
    type: "component",
    version: Math.round(Date.now() / 1000000) + 1,
    primary: "view",
    hierachy: "secondary",
  } as const;

  

  return define<TypeParams, ReturnParams, MetaParams>(
    closure as ValidClosure,
    metaData
  );
}
