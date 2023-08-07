import type { MetaDataType, TestType } from "../typings";
import { ValidClosure, define } from "../utils";

/**
 * Defines an asset with optional metadata.
 *
 * @param {ReturnParams} closure - The closure to define the asset.
 * @param {unknown} meta - Optional metadata for the asset.
 * @return {AssetType<ReturnParams, ExtensionParams>} The defined asset type.
 */

export function defineTest<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown
>(
  closure: ReturnParams | TypeParams | ValidClosure,
  meta?: MetaDataType<any>
): TestType<TypeParams, ReturnParams, MetaParams> {


  const metaData: MetaParams = {
    ...(meta as any),
    type: "test",
    version: Math.round(Date.now() as number / 100000) + 1,
    hierachy: "primary",
  } as const;

  return define<TypeParams, ReturnParams, MetaParams>(
    closure as ValidClosure,
    metaData
  );
}
