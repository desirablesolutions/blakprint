import { DefinitionParams, DefinitionType, ImageType, PageType } from "blakprint";

export type PageProps = DefinitionParams<PageType<any, React.ElementType, any>>;


export type LinkProps = {
    url?: string,
    name?: string
}

export type ImageProps = {
    height?: string,
    src?: string,
    alt?: string,
    width?: string,
    lazy?: "loading" | "eager" | "auto",
}

export type CallToActionProps = {
    url?: string,
    name?: string
}

export type FaviconProps = {
    image: ImageProps
}
export type NavBarProps = {
    links?: LinkProps[],
    favicon?: FaviconProps,
    cta?: CallToActionProps
}