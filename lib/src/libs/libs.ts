import { ValidClosure, define } from "blakprint-utils-ts"
import type { LibraryType } from "src/typings/library"
import type { MetaDataType } from "src/typings/meta"


/**
 * Defines a library and returns a model of a specified type.
 *
 * @param {ReturnParams} closure - The closure that defines the library.
 * @param {any} meta - Optional metadata for the library.
 * @return {ModelType<ExtensionParams, ReturnParams>} The model of the specified type.
 */

export function defineLibrary<ReturnParams = {}, ExtensionParams = {}>
    (closure: ReturnParams,
        meta?: any):
    LibraryType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta,
        type: "library",
        version: 1,
        hierachy: "primary"
    } as const

    return define<ExtensionParams, ReturnParams, typeof metaData>
        (closure as ValidClosure, metaData)
}

