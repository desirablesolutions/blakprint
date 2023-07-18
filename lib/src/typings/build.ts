import { Definition } from "blakprint-utils-ts"

export type BuildType<ExtensionParams = {}, ReturnParams = {}, MetaParams = {}> =
    Definition<ExtensionParams, ReturnParams, MetaParams>
