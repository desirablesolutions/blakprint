import type { HookType } from "src/typings/controllers";
import type { MetaDataType } from "src/typings/meta";
import { ValidClosure, define } from "src/utils/index";

/**
 * Defines an asset with optional metadata.
 *
 * @param {ReturnParams} closure - The closure to define the asset.
 * @param {unknown} meta - Optional metadata for the asset.
 * @return {AssetType<ReturnParams, ExtensionParams>} The defined asset type.
 */

export function defineHook<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown
>(
  closure: ReturnParams | TypeParams | ValidClosure,
  meta?: MetaDataType<any>
): HookType<TypeParams, ReturnParams, MetaParams> {

    
  const metaData: MetaParams = {
    ...(meta as any),
    type: "hook",
    version: 1,
    primary: "controller",
    hierachy: "secondary",
  } as const;

  return define<TypeParams, ReturnParams, MetaParams>(
    closure as ValidClosure,
    metaData
  );
}
