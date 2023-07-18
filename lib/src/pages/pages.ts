import { PageType } from "src/typings/models"
import { defineData } from "src/data/data"
import { MetaDataType } from "src/typings/meta"

/**
 * Define Pages.
 *
 * @param {ReturnParams} closure - The closure parameter.
 * @param {any} meta - The optional meta parameter.
 * @return {PageType<ExtensionParams, ReturnParams>} The return value of the function.
 */


export function definePages<ReturnParams = {}, ExtensionParams = {},>
    (closure: ReturnParams,
        meta?: any):
        PageType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta,
        type: "page",
        version: 1,
        primary: "data",
        hierachy: "secondary"
    } as const

    return defineData<ReturnParams, typeof metaData>
        (closure, metaData)
}

