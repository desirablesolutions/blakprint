import { UtilityType } from "src/typings/controllers"
import { defineController } from "src/controllers"
import { MetaDataType } from "src/typings/meta"


/**
 * Defines a utility function.
 *
 * @param {ReturnParams} closure - The closure parameter.
 * @param {unknown} meta - Optional meta parameter.
 * @return {UtilityType<ExtensionParams, ReturnParams>} The utility type.
 */


export function defineUtility<ReturnParams = {}, ExtensionParams = {},>
    (closure: ReturnParams,
        meta?: unknown):
    UtilityType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta as any,
        version: 1,
        type: "utility",
        primary: "controller",
        hierachy: "secondary"
    } as const

    return defineController<ReturnParams, typeof metaData>
        (closure, metaData)
}

