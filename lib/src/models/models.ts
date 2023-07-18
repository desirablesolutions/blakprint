import { ValidClosure, define } from "blakprint-utils-ts"
import { ModelType } from "src/typings/models"
import type { MetaDataType } from "src/typings/meta"


/**
 * Defines a model with the given closure and metadata.
 *
 * @param {ReturnParams} closure - The closure for the model.
 * @param {unknown} meta - Optional metadata for the model.
 * @return {ModelType<ExtensionParams, ReturnParams>} The defined model.
 */


export function defineModel<ReturnParams = {}, ExtensionParams = {}>
    (closure: ReturnParams,
        meta?: unknown):
    ModelType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta as any,
        type: "model",
        version: 1,
        hierachy: "primary"
    } as const

    return define<ExtensionParams, ReturnParams, typeof metaData>
        (closure as ValidClosure, metaData)
}

