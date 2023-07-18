import { ModelType } from "src/typings/models"
import { MetaDataType } from "src/typings/meta"
import { defineView } from "src/views/views"



export function defineInclude<ReturnParams = {}, ExtensionParams = {}>
    (closure: ReturnParams,
        meta?: unknown):
    ModelType<ExtensionParams, ReturnParams> {

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

