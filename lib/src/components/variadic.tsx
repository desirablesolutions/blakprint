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
      component?: Function;
      container: Function;
    },
  };
  presets: {
    default: {
      sx: any;
    };
  };
};

export  function defineVariadicComponent<
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
    <ContainerView className={sx}>

    </ContainerView>
  );

  return defineComponent<TypeParams, ReturnParams, MetaParams>(
    render,
    metaData
  );
}

const TesteMe = defineVariadicComponent({
  views: {
    default: {
      container: ({ children, sx }: any) => <div className={`${sx.container.base}`}>{children}</div>,
      component: ({ props, sx }: any) => {
        return <>
          <a className={`${sx.borders.base}`} href="">

          </a>
        </>;
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
