import { ValidClosure, define } from "blakprint-utils-ts"
import { ViewType } from "src/typings/views"


import { defineView } from "src/views"

export function defineLayout<ReturnParams = {}, ExtensionParams = {},>
    (closure: ReturnParams,
        meta?: any):
    ViewType<ExtensionParams, ReturnParams> {

    const metaData = {
        ...meta,
        type: "model",
        version: 1,
        hierachy: "primary"
    } as const

    return defineView<ReturnParams, typeof metaData>
        (closure, metaData)
}

