
import { AssetType } from "src/typings/models"
import { defineData } from "src/data/data"
import { MetaDataType } from "src/typings/meta"

/**
 * Defines an asset with optional metadata.
 *
 * @param {ReturnParams} closure - The closure to define the asset.
 * @param {unknown} meta - Optional metadata for the asset.
 * @return {AssetType<ReturnParams, ExtensionParams>} The defined asset type.
 */


export function defineAsset<ReturnParams = {}, ExtensionParams = {}>
    (closure: ReturnParams,
        meta?: unknown):
    AssetType<ReturnParams, ExtensionParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta as any,
        type: "asset",
        version: 1,
        primary: "model",
        secondary: "data",
        hierachy: "tertiary"
    } as const

    return defineData<ReturnParams, ExtensionParams, typeof metaData>
        (closure, metaData)
}

