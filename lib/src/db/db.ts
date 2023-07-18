
import { DatabaseType } from "src/typings/models"

import { defineData } from "src/data"

export function defineDatabase<ReturnParams = {}, ExtensionParams = {},>
    (closure: ReturnParams,
        meta?: any):
        DatabaseType<ExtensionParams, ReturnParams> {

    const metaData = {
        ...meta,
        type: "model",
        version: 1,
        hierachy: "primary"
    } as const

    return defineData<ReturnParams, typeof metaData>
        (closure, metaData)
}

