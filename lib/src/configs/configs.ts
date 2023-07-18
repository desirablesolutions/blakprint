import { defineModel } from "src/models/models"
import type { ConfigType } from "src/typings/models"
import type { MetaDataType } from "src/typings/meta"


/**
 * Defines a configuration for the model.
 *
 * @param {ReturnParams} closure - The closure that generates the configuration.
 * @param {any} meta - Additional metadata for the configuration.
 * @return {ModelType<ExtensionParams, ReturnParams>} The configured model.
 */

export function defineConfig<ReturnParams = {}, ExtensionParams = {},>
    (closure: ReturnParams,
        meta?: unknown):
    ConfigType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta as any,
        type: "config",
        version: 1,
        hierachy: "primary"
    } as const

    return defineModel<ReturnParams, typeof metaData>
        (closure, metaData)
}

