import { Definition } from "blakprint-utils-ts";

export type Colors = 'red' | 'blue' | 'yellow' | 'green' | 'black' | 'white';

export type BaseOneLevels = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type BaseTwoLevels = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

export type BaseThreeLevels = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type ViewType<TypeParams = unknown, ReturnParams = unknown> =
    ReturnParams extends unknown ?
    (TypeParams) : ReturnParams

export type ComponentType<TypeParams, ReturnParams = unknown> = ViewType<TypeParams, ReturnParams>

export type IncludeType<TypeParams, ReturnParams = unknown> = ComponentType<TypeParams, ReturnParams>

export type LayoutType<TypeParams, ReturnParams> = ComponentType<TypeParams, ReturnParams>

export type StylesType<TypeParams, ReturnParams> = ComponentType<TypeParams, ReturnParams>

export type ImageType<TypeParams, ReturnParams = unknown> = ComponentType<{
    src?: string,
    alt?: string,
    height?: string,
    width?: string,
    loading?: "lazy" | "eager",
    class?: string,
    className?: string
} & TypeParams, ReturnParams>


//components
export type HeroType<TypeParams = {}, ReturnParams = unknown> = ComponentType<TypeParams, ReturnParams>

export type StatsGridType<TypeParams = {}, ReturnParams = unknown> = ComponentType<TypeParams, ReturnParams>

export type CloudType<TypeParams = {}, ReturnParams = unknown> = ComponentType<TypeParams, ReturnParams>

export type MasonryType<TypeParams = {}, ReturnParams = unknown> = ComponentType<TypeParams, ReturnParams>

export type SectionType<TypeParams = {}, ReturnParams = unknown> = ComponentType<TypeParams, ReturnParams>

export type ContactSectionType<TypeParams = {}, ReturnParams = unknown> = SectionType<TypeParams, ReturnParams>

export type SummarySection<TypeParams = {}, ReturnParams = unknown> = SectionType<TypeParams, ReturnParams>

export type TagCloudType<TypeParams = {}, ReturnParams = unknown> = CloudType<TypeParams, ReturnParams>
export type LinkType<TypeParams = {}, ReturnParams = unknown> = ComponentType<TypeParams & {
    [href: string]: string,

}, ReturnParams>

export type FaviconType<TypeParams = {}, ReturnParams = unknown> = ComponentType<TypeParams & {
    [href: string]: string,

}, ReturnParams>

export type CallToActionType<TypeParams = {}, ReturnParams = unknown> = ComponentType<TypeParams & { action?: TypeParams }, ReturnParams>


export type StylizerType<TypeParams = {}, ReturnParams = unknown> = ComponentType<TypeParams & {
    [href: string]: string,

}, ReturnParams>

//includes
export type FooterType<TypeParams = {}, ReturnParams = unknown> = IncludeType<TypeParams, ReturnParams>

export type NavBarType<TypeParams = {}, ReturnParams = unknown> = ComponentType<TypeParams & {
    links?: LinkType<TypeParams>[],
    favicon?: FaviconType,
    sx?: StylizerType<{
        container?: any
    }>
}, ReturnParams>

export type Header<TypeParams = {}, ReturnParams = unknown> = ComponentType<TypeParams, ReturnParams>

export type ContainerType<TypeParams = {}, ReturnParams = unknown> = ComponentType<TypeParams, ReturnParams>