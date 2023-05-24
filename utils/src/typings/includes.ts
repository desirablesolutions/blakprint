import type { ComponentProps } from "./views"
import type { FaviconProps, SocialProps, LinkProps, ImageProps } from "./components"


export type NavBarProps<ExtensionProps = unknown> = ComponentProps<{
    favicon?: FaviconProps
}, ExtensionProps>


export type FooterProps<ExtensionProps = unknown> = ComponentProps<{
    favicon?: FaviconProps,
    copyright?: string,
    navLinks?: LinkProps[]
}, ExtensionProps>

export type OpenGraphProps = {

}

export type MenuProps<ExtensionProps = unknown> = ComponentProps<{
    favicon?: FaviconProps,

}>

export type MetaProps<ExtensionProps = unknown> = ComponentProps<{
    title?: string,
    pageTitle?: string,
    description?: string
    author?: string,
    topic?: string,
    summary?: string,
    og?: OpenGraphProps,
    email?: string,
    themeColor?: string,
    keywords?: string | string[]
}, ExtensionProps>

export type ContactProps<ExtensionProps = unknown> = ComponentProps<{
    email?: string,
    phone?: string,
    socials?: SocialProps[],
    banner?: ImageProps
}, ExtensionProps>