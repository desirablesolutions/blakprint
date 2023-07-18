import { defineController } from "src/controllers/controllers"
import type { ControllerType } from "src/typings/controllers"
import type { MetaDataType } from "src/typings/meta"


/**
 * Defines a hook with customizable return and extension parameters.
 *
 * @param {ReturnParams} closure - The closure for the hook.
 * @param {unknown} meta - Optional metadata for the hook.
 * @return {ControllerType<ExtensionParams, ReturnParams>} The controller type for the hook.
 */


export function defineHook<ReturnParams = {}, ExtensionParams = {},>
    (closure: ReturnParams,
        meta?: unknown):
    ControllerType<ExtensionParams, ReturnParams> {

    const metaData: MetaDataType<typeof meta> = {
        ...meta as any,
        type: "hook",
        version: 1,
        primary: "controller",
        hierachy: "secondary"
    } as const

    return defineController<ReturnParams, typeof metaData>
        (closure, metaData)
}

