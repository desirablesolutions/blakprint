import type { MetaDataType } from "src/typings/meta"
import type { LayoutType } from "src/typings/views"
import { defineView } from "src/views"

/**
 * Defines a layout.
 *
 * @param {TypeParams} closure - The closure parameter.
 * @param {any} meta - Optional metadata.
 * @return {ViewType<TypeParams>} The defined view.
 */

export function defineLayout<TypeParams = {}>
    (closure: ReturnParams,
        meta?: any):
    LayoutType<TypeParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta,
        type: "layouts",
        version: 1,
        primary: "views",
        hierachy: "secondary"
    } as const

    return defineView<ReturnParams, typeof metaData>
        (closure, metaData)
}

