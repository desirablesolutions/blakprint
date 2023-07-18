import { ValidClosure, define } from "blakprint-utils-ts"
import { defineController } from "src/controllers"
import { ModelType } from "src/typings/models"


export function defineHook<ReturnParams = {}, ExtensionParams = {},>
    (closure: ReturnParams,
        meta?: any):
    ModelType<ExtensionParams, ReturnParams> {

    const metaData = {
        ...meta,
        type: "model",
        version: 1,
        hierachy: "primary"
    } as const

    return defineController<ReturnParams, typeof metaData>
        (closure as ValidClosure, metaData)
}

