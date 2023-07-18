
import { DatabaseType } from "src/typings/models"
import { MetaDataType } from "src/typings/meta"
import { defineData } from "src/data/data"

export function defineDatabase<ReturnParams = {}, ExtensionParams = {}>
    (closure: ReturnParams,
        meta?: unknown):
    DatabaseType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta as any,
        type: "database",
        version: 1,
        primary: "models",
        secondary: "data",
        hierachy: "tertiary"
    } as const

    return defineData<ReturnParams, typeof metaData>
        (closure, metaData)
}

