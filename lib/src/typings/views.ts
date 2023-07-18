import { Definition } from "blakprint-utils-ts";

export type Colors = 'red' | 'blue' | 'yellow' | 'green' | 'black' | 'white';

export type BaseOneLevels = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type BaseTwoLevels = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

export type BaseThreeLevels = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type ViewType<ExtensionParams = {}, ReturnParams = Element | React.ReactElement, MetaParams = {}> =
    Definition<ExtensionParams, ReturnParams, MetaParams>

export type ComponentType<PropTypes, ExtensionProps = {}> = ViewType<PropTypes, ExtensionProps>
export type LayoutType<PropTypes, ExtensionProps = {}> = ViewType<PropTypes, ExtensionProps>
export type IncludeType<PropTypes, ExtensionProps = {}> = ViewType<PropTypes, ExtensionProps>

export type LayoutProps<ChildrenType> = ViewType<{
    children?: ChildrenType
}>


export type ImageType<ExtensionProps = {}> = ComponentType<{
    src?: string,
    alt?: string,
    height?: string,
    width?: string,
    loading?: "lazy" | "eager",
    class?: string,
    className?: string
}, ExtensionProps>


