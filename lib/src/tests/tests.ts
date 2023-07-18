import { ValidClosure, define } from "blakprint-utils-ts"
import type { TestType } from "src/typings/models"
import type { MetaDataType } from "src/typings/meta"


/**
 * Define a test with optional metadata.
 *
 * @param {ReturnParams} closure - The closure to define the test.
 * @param {any} meta - Optional metadata for the test.
 * @return {TestType<ExtensionParams, ReturnParams>} The defined test.
 */


export function defineTest<ReturnParams = {}, ExtensionParams = {},>
    (closure: ReturnParams,
        meta?: any):
    TestType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta,
        type: "test",
        version: 1,
        primary: "model",
        hierachy: "secondary"
    } as const

    return define<ExtensionParams, ReturnParams, typeof metaData>
        (closure as ValidClosure, metaData)
}

