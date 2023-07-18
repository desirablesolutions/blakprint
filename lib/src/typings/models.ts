import { Definition } from "blakprint-utils-ts"

export type ModelType<ExtensionParams = {}, ReturnParams = {}, MetaParams = {}> =
    Definition<ExtensionParams, ReturnParams, MetaParams>

export type DataType<T, R> = ModelType<T, R>

export type DatabaseType<T, R> = DataType<T,R>


export type AssetType<T,R> = ModelType<T,R>