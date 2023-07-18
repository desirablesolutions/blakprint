import type { DataType } from "src/typings/models"
import type { MetaDataType } from "src/typings/meta"
import { defineModel } from "src/models/models"


/**
 * Defines the data for the given closure and meta information.
 *
 * @param {ReturnParams} closure - The closure used to define the data.
 * @param {unknown} meta - Optional meta information.
 * @return {DataType<ExtensionParams, ReturnParams>} The defined data.
 */


export function defineData<ReturnParams = {}, ExtensionParams = {}>
    (closure: ReturnParams,
        meta?: unknown):
    DataType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta as any,
        type: "data",
        version: 1,
        primary: "model",
        hierachy: "secondary"
    } as const

    return defineModel<ReturnParams, typeof metaData>
        (closure, metaData)
}

