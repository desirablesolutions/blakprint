import { ComponentType, ParametricComponentProps } from "../typings";
import { ValidClosure } from "../utils";
import { defineComponent } from "./components";

/**
 * Defines an parametric component with optional metadata.
 *
 * @param {ReturnParams} closure - The closure to define the asset.
 * @param {unknown} meta - Optional metadata for the asset.
 * @return {ComponentType<ReturnParams, ExtensionParams>} The defined asset type.
 */



export function generateClassNames(sx: any): string {
  const mapper = (sx: any) => ({
    bgColor: ParametricComponentColorLevels,
  });

  const data = mapper(sx);

  return `${data}`;
}

export const createParametricComponentPresets = <
  PresetType extends ParametricComponentProps["presets"]
>(
  data: PresetType
) => data;

export const createParametricComponentViews = <
  ViewType extends ParametricComponentProps["views"]
>(
  data: ViewType
) => data;

export function defineParametricComponent<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown
>({
  presets,
  views,
}: ParametricComponentProps<TypeParams>): ComponentType<
  TypeParams,
  ReturnParams,
  MetaParams
> {
  const metaData = {
    type: "parametricComponent",
    version: Math.round(Date.now() / 1000000) + 1,
    primary: "view",
    hierachy: "tertiary",
  } as const;

  function renderDefaults() {
    const { renderer, sx } = presets.default;

    const { container, component } = views.default;

    const Component = (...args: TypeParams[]) => {
      return renderer.render`${container({
        children: component(...args),
        sx: sx,
      })}`;
    };

    return Component;
  }

  return  defineComponent<TypeParams, ReturnParams, MetaParams>(
    renderDefaults() as ValidClosure,
    metaData
  );
}

