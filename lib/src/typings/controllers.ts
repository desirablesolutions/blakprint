import { Definition } from "../utilities"

export type ControllerType<ExtensionParams = {}, ReturnParams = {}, MetaParams = {}> =
    Definition<ExtensionParams, ReturnParams, MetaParams>

export type UtilityType<ExtensionParams = {}, ReturnParams = {}, MetaParams = {}> =
    ControllerType<ExtensionParams, ReturnParams, MetaParams>

export type ServiceType<ExtensionParams = {}, ReturnParams = {}, MetaParams = {}> =
    ControllerType<ExtensionParams, ReturnParams, MetaParams>

export type HookType<ExtensionParams = {}, ReturnParams = {}, MetaParams = {}> =
    ControllerType<ExtensionParams, ReturnParams, MetaParams>