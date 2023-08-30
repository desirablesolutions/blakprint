import { Definition } from "../utils";

export type ViewType<TypeParams, ReturnParams, MetaParams> = Definition<
  TypeParams,
  ReturnParams,
  MetaParams
>;

export type LayoutType<TypeParams, ReturnParams, MetaParams> = Definition<
  TypeParams,
  ReturnParams,
  MetaParams
>;

export type IncludeType<TypeParams, ReturnParams, MetaParams> = Definition<
  TypeParams,
  ReturnParams,
  MetaParams
>;

export type ComponentType<
  TypeParams = unknown,
  ReturnParams = unknown,
  MetaParams = unknown
> = ViewType<TypeParams, ReturnParams, MetaParams>;

export type ContainerType<
  TypeParams = unknown,
  ReturnParams = unknown,
  MetaParams = unknown
> = ViewType<TypeParams, ReturnParams, MetaParams>;

export type ParametricComponentRendererType = {
  name: string;
  render: (...args: any[]) => any;
};

export type ParametricComponentClassSets = {
  padding: {
    vertical: "py-";
  };
};

export type ParametricComponentClassSetType<PaddingLevelTypes> = Record<
  keyof PaddingLevelTypes,
  string
>;

export type ParametricComponentPaddingLevels =
  | {
      vertical:
        | "py-0"
        | "py-1"
        | "py-2"
        | "py-3"
        | "py-4"
        | "py-5"
        | "py-6"
        | "py-7"
        | "py-8"
        | "py-9"
        | "py-10";
      horizontal:
        | "px-0"
        | "px-1"
        | "px-2"
        | "px-3"
        | "px-4"
        | "px-5"
        | "px-6"
        | "px-7"
        | "px-8"
        | "px-9"
        | "px-10";
    }
  | "p-0"
  | "p-1"
  | "p-2"
  | "p-3"
  | "p-4"
  | "p-5"
  | "p-6"
  | "p-7"
  | "p-8"
  | "p-9"
  | "p-10";

export type ParametricComponentMarginLevels =
  | {
      vertical:
        | "py-0"
        | "py-1"
        | "py-2"
        | "py-3"
        | "py-4"
        | "py-5"
        | "py-6"
        | "py-7"
        | "py-8"
        | "py-9"
        | "py-10";
      horizontal:
        | "px-0"
        | "px-1"
        | "px-2"
        | "px-3"
        | "px-4"
        | "px-5"
        | "px-6"
        | "px-7"
        | "px-8"
        | "px-9"
        | "px-10";
    }
  | "p-0"
  | "p-1"
  | "p-2"
  | "p-3"
  | "p-4"
  | "p-5"
  | "p-6"
  | "p-7"
  | "p-8"
  | "p-9"
  | "p-10";

export type ParametricComponentBackgroundColorLevels =
  | {
      vertical:
        | "py-0"
        | "py-1"
        | "py-2"
        | "py-3"
        | "py-4"
        | "py-5"
        | "py-6"
        | "py-7"
        | "py-8"
        | "py-9"
        | "py-10";
      horizontal:
        | "px-0"
        | "px-1"
        | "px-2"
        | "px-3"
        | "px-4"
        | "px-5"
        | "px-6"
        | "px-7"
        | "px-8"
        | "px-9"
        | "px-10";
    }
  | "p-0"
  | "p-1"
  | "p-2"
  | "p-3"
  | "p-4"
  | "p-5"
  | "p-6"
  | "p-7"
  | "p-8"
  | "p-9"
  | "p-10";

export type ParametricComponentColorLevels =
  | {
      vertical:
        | "py-0"
        | "py-1"
        | "py-2"
        | "py-3"
        | "py-4"
        | "py-5"
        | "py-6"
        | "py-7"
        | "py-8"
        | "py-9"
        | "py-10";
      horizontal:
        | "px-0"
        | "px-1"
        | "px-2"
        | "px-3"
        | "px-4"
        | "px-5"
        | "px-6"
        | "px-7"
        | "px-8"
        | "px-9"
        | "px-10";
    }
  | "p-0"
  | "p-1"
  | "p-2"
  | "p-3"
  | "p-4"
  | "p-5"
  | "p-6"
  | "p-7"
  | "p-8"
  | "p-9"
  | "p-10";

export type ParametricComponentFontSizeLevels =
  | {
      vertical:
        | "py-0"
        | "py-1"
        | "py-2"
        | "py-3"
        | "py-4"
        | "py-5"
        | "py-6"
        | "py-7"
        | "py-8"
        | "py-9"
        | "py-10";
      horizontal:
        | "px-0"
        | "px-1"
        | "px-2"
        | "px-3"
        | "px-4"
        | "px-5"
        | "px-6"
        | "px-7"
        | "px-8"
        | "px-9"
        | "px-10";
    }
  | "p-0"
  | "p-1"
  | "p-2"
  | "p-3"
  | "p-4"
  | "p-5"
  | "p-6"
  | "p-7"
  | "p-8"
  | "p-9"
  | "p-10";

export type ParametricComponentTailwindClassSetProps = Partial<{
  padding: ParametricComponentPaddingLevels;
  margin: ParametricComponentMarginLevels;
  bgColor: ParametricComponentBackgroundColorLevels;
  color: ParametricComponentColorLevels;
  fontSize: ParametricComponentFontSizeLevels;
  fontWeight: {};
  fontFamily: {};
  textAlign: {};
  textDecoration: {};
  cursor: {};
  width: {};
  height: {};
  borderRadius: {};
  border: {};
  boxShadow: {};
  opacity: {};
}>;

export type ParametricComponentStylizerProps = {
  container: Partial<ParametricComponentTailwindClassSetProps>;
  component: Partial<ParametricComponentTailwindClassSetProps>;
};

export type ParametricComponentProps<TypeProps = any> = {
  views: {
    [identifier: symbol | string]: {
      component: (...args: TypeProps[] | any[]) => any;
      container: ({ children, sx }: any) => any;
      props?: TypeProps;
    };
  };

  presets: {
    [identifier: symbol | string]: {
      sx: ParametricComponentStylizerProps;
      renderer: ParametricComponentRendererType;
    };
  };
};
