import { ComponentType } from "../typings";
import { defineComponent } from "./components";
import * as React from "react";


/**
 * Generates a variadic component by defining its type parameters, return parameters, and meta parameters.
 *
 * @param {any} views - The views for the component.
 * @param {any} presets - The presets for the component.
 * @return {ComponentType<TypeParams, ReturnParams, MetaParams>} - The generated variadic component.
 */

export type variadicComponent = {
  views: {
    default: {
      component: Function;
      container: Function;
    };
  };
  presets: {
    default: {
      sx: any;
    };
  };
};

export default function defineVariadicComponent<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = Error
>({
  views,
  presets,
}: variadicComponent): ComponentType<TypeParams, ReturnParams, MetaParams> {
  const metaData = {
    type: "variadicComponent",
    version: Math.round(Date.now() / 1000000) + 1,
    primary: "view",
    hierachy: "tertiary",
  } as const;

  const ContainerView = views.default.container;
  const ComponentView = views.default.component;

  const { sx } = presets.default;

  const render = (...args: any[]) => (
    <ContainerView sx={sx}>
      <ComponentView {...args} />
    </ContainerView>
  );

  return defineComponent<TypeParams, ReturnParams, MetaParams>(
    render,
    metaData
  );
}

const test = defineVariadicComponent({
  views: {
    default: {
      container: ({ children }: any) => <div>{children}</div>,
      component: ({ props }: any) => {
        return <></>;
      },
    },
  },
  presets: {
    default: {
      sx: {
        borders: {
          base: {
            color: "red",
          },
        },
      },
    },
  },
});
