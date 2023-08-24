import { Definition, DefinitionParams, EffectorType } from "../utils";

export type Colors = "red" | "blue" | "yellow" | "green" | "black" | "white";

export type BaseOneLevels = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type BaseTwoLevels = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

export type BaseThreeLevels =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type ViewType<
  ExtensionParams = unknown,
  ReturnParams = unknown,
  MetaParams = unknown
> = Definition<ExtensionParams, ReturnParams, MetaParams>;

export type ComponentType<
  TypeParams = unknown,
  ReturnParams = unknown,
  MetaParams = unknown
> = ViewType<TypeParams, ReturnParams, MetaParams>;

export type IncludeType<
  TypeParams,
  ReturnParams = unknown,
  MetaParams = unknown
> = ComponentType<TypeParams, ReturnParams, MetaParams>;

export type LayoutType<
  TypeParams = unknown,
  ReturnParams = unknown,
  MetaParams = unknown
> = ComponentType<TypeParams, ReturnParams, MetaParams>;

export type StylesType<TypeParams, ReturnParams> = ComponentType<
  TypeParams,
  ReturnParams
>;

export type ImageType<
  TypeParams = unknown,
  ReturnParams = unknown
> = ComponentType<
  {
    src?: string;
    alt?: string;
    height?: string | number;
    width?: string | number;
    loading?: "lazy" | "eager";
    class?: string;
    className?: string;
  } & TypeParams,
  ReturnParams
>;

export type HeroType<
  TypeParams = unknown,
  ReturnParams = unknown,
  MetaParams = unknown
> = ComponentType<
  TypeParams & {
    title?: string;
    subtitle?: string;
  },
  ReturnParams,
  MetaParams
>;

export type StatsGridType<
  TypeParams = {},
  ReturnParams = unknown
> = ComponentType<TypeParams, ReturnParams>;

export type CloudType<TypeParams = {}, ReturnParams = unknown> = ComponentType<
  TypeParams,
  ReturnParams
>;

export type MasonryType<
  TypeParams = unknown,
  ReturnParams = unknown,
  MetaParams = unknown
> = ComponentType<TypeParams, ReturnParams, MetaParams>;

export type SectionType<
  TypeParams = {},
  ReturnParams = unknown
> = ComponentType<TypeParams, ReturnParams>;

export type ContactSectionType<
  TypeParams = {},
  ReturnParams = unknown
> = SectionType<TypeParams, ReturnParams>;

export type SummarySection<
  TypeParams = {},
  ReturnParams = unknown
> = SectionType<TypeParams, ReturnParams>;

export type TagCloudType<TypeParams = {}, ReturnParams = unknown> = CloudType<
  TypeParams,
  ReturnParams
>;
export type LinkType<TypeParams = {}, ReturnParams = unknown> = ComponentType<
  TypeParams & {
    [href: string]: string;
  },
  ReturnParams
>;

export type FaviconType<
  TypeParams = {},
  ReturnParams = unknown
> = ComponentType<
  TypeParams & {
    url: string;
    image: ImageType | DefinitionParams<ImageType>;
  },
  ReturnParams
>;

export type CallToActionType<
  TypeParams = {},
  ReturnParams = unknown
> = ComponentType<TypeParams & { action?: TypeParams }, ReturnParams>;

export type StylizerType<
  TypeParams = {},
  ReturnParams = unknown
> = ComponentType<
  TypeParams & {
    [href: string]: string;
  },
  ReturnParams
>;

export type FooterType<TypeParams = {}, ReturnParams = unknown> = IncludeType<
  TypeParams,
  ReturnParams
>;

export type NavBarType<TypeParams = {}, ReturnParams = unknown> = ComponentType<
  TypeParams & {
    links?: LinkType<TypeParams | any>[];
    favicon?: FaviconType;
    sx?: StylizerType<{
      container?: any;
    }>;
  },
  ReturnParams
>;

export type Header<TypeParams = {}, ReturnParams = unknown> = ComponentType<
  TypeParams,
  ReturnParams
>;

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

export type ParametricComponentPaddingLevels = {
  vertical: "py-0" | "py-1" | "py-2" | "py-3" | "py-4" | "py-5" | "py-6" | "py-7" | "py-8" | "py-9" | "py-10",
  horizontal: "px-0" | "px-1" | "px-2" | "px-3" | "px-4" | "px-5" | "px-6" | "px-7" | "px-8" | "px-9" | "px-10",
} | "p-0" | "p-1" | "p-2" | "p-3" | "p-4" | "p-5" | "p-6" | "p-7" | "p-8" | "p-9" | "p-10";

export type ParametricComponentMarginLevels = {
  vertical: "py-0" | "py-1" | "py-2" | "py-3" | "py-4" | "py-5" | "py-6" | "py-7" | "py-8" | "py-9" | "py-10",
  horizontal: "px-0" | "px-1" | "px-2" | "px-3" | "px-4" | "px-5" | "px-6" | "px-7" | "px-8" | "px-9" | "px-10",
} | "p-0" | "p-1" | "p-2" | "p-3" | "p-4" | "p-5" | "p-6" | "p-7" | "p-8" | "p-9" | "p-10";

export type ParametricComponentBackgroundColorLevels = {
  vertical: "py-0" | "py-1" | "py-2" | "py-3" | "py-4" | "py-5" | "py-6" | "py-7" | "py-8" | "py-9" | "py-10",
  horizontal: "px-0" | "px-1" | "px-2" | "px-3" | "px-4" | "px-5" | "px-6" | "px-7" | "px-8" | "px-9" | "px-10",
} | "p-0" | "p-1" | "p-2" | "p-3" | "p-4" | "p-5" | "p-6" | "p-7" | "p-8" | "p-9" | "p-10";

export type ParametricComponentColorLevels = {
  vertical: "py-0" | "py-1" | "py-2" | "py-3" | "py-4" | "py-5" | "py-6" | "py-7" | "py-8" | "py-9" | "py-10",
  horizontal: "px-0" | "px-1" | "px-2" | "px-3" | "px-4" | "px-5" | "px-6" | "px-7" | "px-8" | "px-9" | "px-10",
} | "p-0" | "p-1" | "p-2" | "p-3" | "p-4" | "p-5" | "p-6" | "p-7" | "p-8" | "p-9" | "p-10";

export type ParametricComponentFontSizeLevels = {
  vertical: "py-0" | "py-1" | "py-2" | "py-3" | "py-4" | "py-5" | "py-6" | "py-7" | "py-8" | "py-9" | "py-10",
  horizontal: "px-0" | "px-1" | "px-2" | "px-3" | "px-4" | "px-5" | "px-6" | "px-7" | "px-8" | "px-9" | "px-10",
} | "p-0" | "p-1" | "p-2" | "p-3" | "p-4" | "p-5" | "p-6" | "p-7" | "p-8" | "p-9" | "p-10";


export type ParametricComponentTailwindClassSetProps = Partial< {
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
}
