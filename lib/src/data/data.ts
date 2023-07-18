import { ValidClosure, define } from "blakprint-utils-ts"
import { ModelType } from "src/typings/models"

import { defineModel } from "src/models"

export function defineData<ReturnParams = {}, ExtensionParams = {}, MetaParams = {}>
    (closure: ReturnParams,
        meta?: any):
    ModelType<ExtensionParams, ReturnParams> {

    const metaData = {
        ...meta,
        type: "model",
        version: 1,
        hierachy: "primary"
    } as const

    return defineModel<ReturnParams, typeof metaData>
        (closure, metaData)
}

