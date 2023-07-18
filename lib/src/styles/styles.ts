import { ModelType } from "src/typings/models"
import { MetaDataType } from "src/typings/meta"
import { defineView } from "src/views"

/**
 * Define a test with optional metadata.
 *
 * @param {ReturnParams} closure - The closure to define the test.
 * @param {any} meta - Optional metadata for the test.
 * @return {TestType<ExtensionParams, ReturnParams>} The defined test.
 */

export function defineStyles<ReturnParams = {}, ExtensionParams = {}>
    (closure: ReturnParams,
        meta?: unknown):
    ModelType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta as any,
        type: "styles",
        version: 1,
        primary: "views",
        hierachy: "secondary"
    } as const

    return defineView<ReturnParams, typeof metaData>
        (closure, metaData)
}

