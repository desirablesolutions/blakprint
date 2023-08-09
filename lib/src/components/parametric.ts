import type { ComponentType, MetaDataType } from "../typings";
import { ValidClosure, define } from "../utils";
import { defineComponent } from "./components";

/**
 * Defines an parametric component with optional metadata.
 *
 * @param {ReturnParams} closure - The closure to define the asset.
 * @param {unknown} meta - Optional metadata for the asset.
 * @return {AssetType<ReturnParams, ExtensionParams>} The defined asset type.
 */


export const DEFAULT_RENDERS = {
    
}
export function defineParametricComponent<
    TypeParams = any,
    ReturnParams = any,
    MetaParams = unknown
>(
    {
        templates,
        presets,
        renderer
    }: any
): ComponentType<TypeParams, ReturnParams, MetaParams> {


    const metaData = {

        type: "component",
        version: Math.round(Date.now() / 1000000) + 1,
        primary: "view",
        hierachy: "secondary",
    } as const;



    return defineComponent<TypeParams, ReturnParams, MetaParams>(
        templates as ValidClosure,
    );
}
