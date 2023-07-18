import { ModelType } from "src/typings/models"
import { defineData } from "src/data"
import { MetaDataType } from "src/typings/meta"


export function definePages<ReturnParams = {}, ExtensionParams = {},>
    (closure: ReturnParams,
        meta?: any):
    ModelType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta,
        type: "model",
        version: 1,
        hierachy: "primary"
    } as const

    return defineData<ReturnParams, typeof metaData>
        (closure, metaData)
}

