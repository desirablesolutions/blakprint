import { Definition, DefinitionParams } from "../utils";

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
    height?: string;
    width?: string;
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
