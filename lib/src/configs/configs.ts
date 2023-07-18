import { ValidClosure, define } from "blakprint-utils-ts"
import { ModelType } from "src/typings/models"


export function defineConfig<ReturnParams = {}, ExtensionParams = {},>
    (closure: ReturnParams,
        meta?: any):
    ModelType<ExtensionParams, ReturnParams> {

    const metaData = {
        ...meta,
        type: "model",
        version: 1,
        hierachy: "primary"
    } as const

    return define<ExtensionParams, ReturnParams, typeof metaData>
        (closure as ValidClosure, metaData)
}

