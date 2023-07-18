import { ServiceType } from "src/typings/models"
import { MetaDataType } from "src/typings/meta"
import { defineController } from "src/controllers/controllers"


/**
 * Defines a service function that returns a ServiceType object.
 *
 * @param {ReturnParams} closure - The closure parameter.
 * @param {unknown} meta - Optional meta parameter.
 * @return {ServiceType<ExtensionParams, ReturnParams>} The ServiceType object.
 */


export function defineService<ReturnParams = {}, ExtensionParams = {}>
    (closure: ReturnParams,
        meta?: unknown):
    ServiceType<ExtensionParams, ReturnParams> {

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

