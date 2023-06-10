export type NodeType<ParamsType> = {
    id: string,
    params: ParamsType,
    edges: NodeType<ParamsType>[],
    children: NodeType<ParamsType>[],
}
export type DefineType = Partial<{
    assets: {},
    controllers: {},
    models: {},
    configs: {},
    views: {},
    components: {},
    layouts: {},
    data: {},
    db: {},
    includes: {}
}>

export type defineInstanceType = {
    meta?: any,
    configs?: any,
    data?: DefineType[]
}

export const myProject: defineInstanceType = {
    meta: {
        name: "Blakprint",
        version: "1.0.0",
    },
    configs: {
        compiler: {}
    },
    data: [
        {
            components: [
                {
                    closure: () => null,
                    meta: {},
                    props: {},
                    params: {}
                }
            ]
        }
    ]
}