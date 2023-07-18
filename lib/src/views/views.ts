import { ValidClosure, define } from "blakprint-utils-ts"
import { ViewType } from "src/typings/views"
import { MetaDataType } from "src/typings/meta"


/**
 * Defines a view with optional metadata.
 *
 * @param {ReturnParams} closure - The closure for the view.
 * @param {unknown} meta - Optional metadata for the view.
 * @return {ViewType<ExtensionParams, ReturnParams>} The defined view.
 */


export function defineView<ReturnParams = {}, ExtensionParams = {}>
    (closure: ReturnParams,
        meta?: unknown):
    ViewType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta as any,
        type: "view",
        version: 1,
        hierachy: "primary"
    } as const

    return define<ReturnParams, ExtensionParams, typeof metaData>
        (closure as ValidClosure, metaData)
}

