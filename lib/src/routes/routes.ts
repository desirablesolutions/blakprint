import { RouteType } from "src/typings/models"
import { defineData } from "src/data/data"
import { MetaDataType } from "src/typings/meta"


/**
 * Defines a route with optional return and extension parameters.
 *
 * @param {ReturnParams} closure - The closure to be executed when the route is accessed.
 * @param {any} [meta] - Additional metadata for the route.
 * @returns {RouteType<ExtensionParams, ReturnParams>} The defined route.
 */


export function defineRoute<ReturnParams = {}, ExtensionParams = {}>
    (closure: ReturnParams,
        meta?: any):
    RouteType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta,
        type: "route",
        version: 1,
        primary: "data",
        hierachy: "secondary"
    } as const

    return defineData<ReturnParams, typeof metaData>
        (closure, metaData)
}

