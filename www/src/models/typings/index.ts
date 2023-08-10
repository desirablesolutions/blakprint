import { DefinitionParams, PageType } from "blakprint";

import type { Metadata } from "next";

export type PageProps = DefinitionParams<PageType<any, React.ElementType, any>>;

export type NextMetaDataProps = Metadata;

export type LinkProps = {
  url?: string;
  name: string;
};

export type ImageProps = {
  height?: string;
  src?: string;
  alt?: string;
  width?: string;
  lazy?: "loading" | "eager" | "auto";
};

export type CallToActionProps = {
  url: string;
  name: string;
};

export type FaviconProps = {
  image: ImageProps;
  url: string;
};

export type BurgerProps = {
  isVisible: boolean;
};

export type NavBarProps = {
  links: LinkProps[];
  favicon: FaviconProps;
  burger: BurgerProps;
  cta: CallToActionProps;
};

export type HeroProps = {
  header: {
    title?: string;
    description?: string;
  };
  banner: {
    image: ImageProps;
  };
};
