
import type { MetaProps } from "./includes"


export type ViewType<PropTypes, MetaTypes> = JSX.Element & {
    props: PropTypes;
    meta?: MetaTypes;
}

export type ICreator<PropTypes, MetaTypes> = (props: PropTypes) => PropTypes

export type ViewTypeCreator<PropTypes, MetaTypes> = (props: PropTypes) => ViewType<PropTypes, MetaTypes>

export interface JSXComponentType<PropTypes, MetaTypes = unknown> extends ViewType<PropTypes, MetaTypes> {
    props: PropTypes;
    meta?: MetaTypes
}

export type ComponentProps<PropTypes, ExtensionProps = undefined, MetaTypes = unknown> = PropTypes & (ExtensionProps | PropTypes) & {
    meta?: MetaTypes;
};

export interface LayoutProps<ExtensionProps = unknown, MetaTypes = unknown> extends ViewType<ExtensionProps, MetaTypes> {
    layout?: {
        meta?: MetaProps;
        header?: any;
        footer?: any;
    }
    dataProps?: ExtensionProps,
    meta?: MetaTypes
}