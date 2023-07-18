import type { IncludeType } from "src/typings/views"
import type { MetaDataType } from "src/typings/meta"
import { defineView } from "src/views/views"

/**
 * Defines an include function.
 *
 * @param {ReturnParams} closure - The closure parameter of the include function.
 * @param {unknown} meta - Optional meta parameter of the include function.
 * @return {ModelType<ExtensionParams, ReturnParams>} The model type of the include function.
 */

export function defineInclude<ReturnParams = {}, ExtensionParams = {}>
    (closure: ReturnParams,
        meta?: unknown):
    IncludeType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta as any,
        type: "include",
        version: 1,
        primary: "view",
        hierachy: "secondary"
    } as const

    return defineView<ReturnParams, typeof metaData>
        (closure, metaData)
}

