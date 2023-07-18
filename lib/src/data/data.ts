import type { DataType } from "src/typings/models"
import type { MetaDataType } from "src/typings/meta"
import { defineModel } from "src/models/models"

export function defineData<ReturnParams = {}, ExtensionParams = {}, MetaParams = {}>
    (closure: ReturnParams,
        meta?: unknown):
    DataType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta as any,
        type: "data",
        version: 1,
        hierachy: "primary"
    } as const

    return defineModel<ReturnParams, typeof metaData>
        (closure, metaData)
}

