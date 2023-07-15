export type Colors = 'red' | 'blue' | 'yellow' | 'green' | 'black' | 'white';

export type BaseOneLevels = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type BaseThreeLevels = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type PaddingLevel = BaseOneLevels

export type ColorLevel = BaseThreeLevels

export type ViewType<PropTypes> = {}

export type ViewCreatorType<PropTypes, MetaTypes> = (props: PropTypes) => ViewType<PropTypes>

export type ComponentType<PropTypes, ExtensionProps = undefined, MetaTypes = unknown> = PropTypes & (ExtensionProps | PropTypes) & {
    meta?: MetaTypes;
};

export type LayoutProps<ChildrenType> = {
    children?: ChildrenType
}

