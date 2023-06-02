import type { ComponentType } from "./views"
import type { FaviconType, SocialType, LinkType, ImageType } from "./components"


export type NavBarType<ExtensionType = unknown> = ComponentType<{
    favicon?: FaviconType
}, ExtensionType>


//generamte meta ttypes


export type FooterType<ExtensionType = unknown> = ComponentType<{
    favicon?: FaviconType,
    copyright?: string,
    navLinks?: LinkType[]
}, ExtensionType>

export type OpenGraphType = {

}

export type MenuType<ExtensionType = unknown> = ComponentType<{
    favicon?: FaviconType,

}>

export type MetaType<ExtensionType = unknown> = ComponentType<{
    title?: string,
    pageTitle?: string,
    description?: string
    author?: string,
    topic?: string,
    summary?: string,
    og?: OpenGraphType,
    email?: string,
    themeColor?: string,
    keywords?: string | string[]
}, ExtensionType>

export type ContactType<ExtensionType = unknown> = ComponentType<{
    email?: string,
    phone?: string,
    socials?: SocialType[],
    banner?: ImageType
}, ExtensionType>