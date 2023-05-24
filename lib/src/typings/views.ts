
import type { MetaProps } from "./includes"
import * as React from "react"

export type Colors = 'red' | 'blue' | 'yellow' | 'green' | 'black' | 'white';

export type BaseOneLevels = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type BaseThreeLevels = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type PaddingLevel = BaseOneLevels

export type ColorLevel = BaseThreeLevels

export type JSXViewType<PropTypes, MetaTypes> = JSX.Element & {
    props: PropTypes;
    meta?: MetaTypes;
}

export type ViewType<A, B> = { A, B }

export type ViewCreatorType<PropTypes, MetaTypes> = (props: PropTypes) => ViewType<PropTypes, MetaTypes>


export type ComponentProps<PropTypes, ExtensionProps = undefined, MetaTypes = unknown> = PropTypes & (ExtensionProps | PropTypes) & {
    meta?: MetaTypes;
};

export type LayoutProps<ChildrenType> = {
    children: ChildrenType
}

export type JSXLayoutProps = LayoutProps<React.ReactNode>