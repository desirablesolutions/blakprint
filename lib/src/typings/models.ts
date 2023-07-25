import { Definition } from "blakprint-utils-ts"

export type ModelType<TypeParams = any, ReturnParams = any, MetaParams = any> =
    Definition<TypeParams, ReturnParams, MetaParams>

export type DataType<T, R, M> = ModelType<T, R, M>

export type DatabaseType<T, R, M> = DataType<T, R, M>

export type ConfigType<T, R, M> = ModelType<T, R, M>

export type BuildType<T, R, M> = ModelType<T, R, M>

export type PageType<T, R, M> = ModelType<T, R, M>

export type RouteType<T, R, M> = ModelType<T, R, M>

export type TestType<T, R, M> = ModelType<T, R, M>

export type AssetType<T, R, M> = ModelType<T, R, M>
