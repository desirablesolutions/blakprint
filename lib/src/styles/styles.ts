import { ValidClosure, define } from "blakprint-utils-ts"
import { ModelType } from "src/typings/models"
import { MetaDataType } from "src/typings/meta"


export function defineStyles<ReturnParams = {}, ExtensionParams = {},>
    (closure: ReturnParams,
        meta?: any):
    ModelType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta,
        type: "controller",
        version: 1,
        hierachy: "primary"
    } as const

    return define<ExtensionParams, ReturnParams, typeof metaData>
        (closure as ValidClosure, metaData)
}

