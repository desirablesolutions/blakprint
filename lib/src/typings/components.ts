import type { ComponentType } from "./views"

export type ImageType<ExtensionType = unknown> = ComponentType<{
    src?: string,
    alt?: string,
    height?: string,
    width?: string,
    loading?: "lazy" | "eager",
    class?: string,
    className?: string
}, ExtensionType,
    {
        variant?: "default" | "custom"
    }>

export type FaviconType<ExtensionType = unknown> = ComponentType<{
    image?: ImageType,
    url?: string,
}, ExtensionType>

export type SocialType<ExtensionType = unknown> = ComponentType<{
    url?: string,
    icon?: string,
    name?: string,
}, ExtensionType>

export type LinkType<ExtensionType = unknown> = ComponentType<{
    url?: string,
    name?: string,
}, ExtensionType>

export type CallToActionType<ExtensionType = unknown> = ComponentType<{
    url?: string,
    name?: string,
    type?: string
}, ExtensionType>

export type SectionType<ExtensionType = unknown> = ComponentType<{
    title?: string | Element | Node,
    banner?: ImageType,
}, ExtensionType>

