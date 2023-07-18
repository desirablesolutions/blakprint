
import { ComponentType } from "src/typings/views"
import { defineView } from "src/views"
import { MetaDataType } from "src/typings/meta"


/**
 * Define a component.
 *
 * @template ReturnParams - The type of the return parameters.
 * @template ExtensionParams - The type of the extension parameters.
 * @param {ReturnParams} closure - The closure parameter.
 * @param {unknown} meta - Optional meta data.
 * @return {ComponentType<ReturnParams, ExtensionParams>} The component type.
 */

export function defineComponent<ReturnParams = {}, ExtensionParams = {}>
    (closure: ReturnParams,
        meta?: unknown):
    ComponentType<ReturnParams, ExtensionParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta as any,
        type: "component",
        version: 1,
        primary: "view",
        hierachy: "secondary"
    } as const

    return defineView<ReturnParams, typeof metaData>
        (closure, metaData)
}

