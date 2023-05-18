import type { ComponentProps } from "./views"

export type ImageProps<ExtensionProps = unknown> = ComponentProps<{
    src?: string,
    alt?: string,
    height?: string,
    width?: string,
    loading?: "lazy" | "eager",
    class?: string,
    className?: string
}, ExtensionProps,
    {
        variant?: "default" | "custom"
    }>

export type FaviconProps<ExtensionProps = unknown> = ComponentProps<{
    image?: ImageProps,
    url?: string,
}, ExtensionProps>

export type SocialProps<ExtensionProps = unknown> = ComponentProps<{
    url?: string,
    icon?: string,
    name?: string,
}, ExtensionProps>

export type LinkProps<ExtensionProps = unknown> = ComponentProps<{
    url?: string,
    name?: string,
}, ExtensionProps>

export type CallToActionProps<ExtensionProps = unknown> = ComponentProps<{
    url?: string,
    name?: string,
    type?: string
}, ExtensionProps>

export type SectionProps<ExtensionProps = unknown> = ComponentProps<{
    title?: string | Element | Node,
    banner?: ImageProps,
}, ExtensionProps>

