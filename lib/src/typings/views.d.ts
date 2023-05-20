
import type { MetaProps } from "./includes"

export type JSXViewType<PropTypes, MetaTypes> = JSX.Element & {
    props: PropTypes;
    meta?: MetaTypes;
}

export type ViewCreatorType<PropTypes, MetaTypes> = (props: PropTypes) => ViewType<PropTypes, MetaTypes>


export type ComponentProps<PropTypes, ExtensionProps = undefined, MetaTypes = unknown> = PropTypes & (ExtensionProps | PropTypes) & {
    meta?: MetaTypes;
};

export type LayoutProps<ChildrenType> = {
    children: ChildrenType
}

export type JSXLayoutProps = LayoutProps<React.ReactNode>