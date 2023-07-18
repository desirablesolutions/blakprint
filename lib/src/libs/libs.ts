import { ValidClosure, define } from "blakprint-utils-ts"
import { ModelType } from "src/typings/models"


export function defineLibrary<ReturnParams = {}, ExtensionParams = {},>
    (closure: ReturnParams,
        meta?: any):
    ModelType<ExtensionParams, ReturnParams> {

    const metaData = {
        ...meta,
        type: "library",
        version: 1,
        hierachy: "primary"
    } as const

    return define<ExtensionParams, ReturnParams, typeof metaData>
        (closure as ValidClosure, metaData)
}
