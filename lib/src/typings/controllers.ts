import { Definition } from "blakprint-utils-ts"

export type ControllerType<ExtensionParams = {}, ReturnParams = {}, MetaParams = {}> =
    Definition<ExtensionParams, ReturnParams, MetaParams>

export type UtilityType<ExtensionParams = {}, ReturnParams = {}, MetaParams = {}> =
    ControllerType<ExtensionParams, ReturnParams, MetaParams>