import { ComponentType } from "../typings";
import { defineComponent } from "./components";



export function defineVariadicComponent<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown
>({
  views,
  presets
}: any): ComponentType<
  TypeParams,
  ReturnParams,
  MetaParams
> {
  const metaData = {
    type: "variadicComponent",
    version: Math.round(Date.now() / 1000000) + 1,
    primary: "view",
    hierachy: "tertiary",
  } as const;

  return  defineComponent<TypeParams, ReturnParams, MetaParams>(
    variants,
    metaData
  );
}

