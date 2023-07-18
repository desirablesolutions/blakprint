import { ValidClosure, define } from "blakprint-utils-ts"
import type { ControllerType } from "src/typings/controllers"
import type { MetaDataType } from "src/typings/meta"


/**
 * Defines a controller function.
 *
 * @param {ReturnParams} closure - The closure parameter for the controller function.
 * @param {any} meta - Optional metadata parameter.
 * @return {ModelType<ExtensionParams, ReturnParams>} The model type object.
 */


export function defineController<ReturnParams = {}, ExtensionParams = {},>
    (closure: ReturnParams,
        meta?: any):
    ControllerType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta,
        type: "controller",
        version: 1,
        hierachy: "primary"
    } as const

    return define<ExtensionParams, ReturnParams, typeof metaData>
        (closure as ValidClosure, metaData)
}

