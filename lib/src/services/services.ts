import { ModelType } from "src/typings/models"
import { MetaDataType } from "src/typings/meta"
import { defineController } from "src/controllers"


export function defineService<ReturnParams = {}, ExtensionParams = {}>
    (closure: ReturnParams,
        meta?: unknown):
    ModelType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta as any,
        type: "service",
        version: 1,
        primary: "controller",
        hierachy: "secondary"
    } as const

    return defineController<ReturnParams, typeof metaData>
        (closure, metaData)
}

