import type { BlackprintControllersModules, BlackprintModelsModules, BlackprintModules, BlackprintViewsModules } from "@typings/Blackprint";


export const blackprint = () => {

    const lib: BlackprintModules = {
        _root: {
            defineConfiguration: () => { }
        },

        models: {
            _root: {

            },
            configs: configs,
            data: {
                db: db,
                pages: pages
            }
        },

        controllers: {
            _root: {

            },
            utils: utils,
            hooks: hooks,
            services: services
        },

        views: {
            _root: {
            },
            components: components,
            layouts: {},
            includes: {},
        }
    }

    return lib as BlackprintModules
};

export const hooks = () => {
    return {
        defineHook: () => {

        }
    }
}

export const db = () => {
    return {
        defineViewStore: ({ layout, pages }) => {
            return {
                layout, pages, meta: {
                    version: Date.now()
                }
            };

        },
        defineDatabaseCollection: ({ meta, shape, methods }: { meta?: any, shape?: any, methods?: any }) => {
            return function (store) {
                return {
                    data: shape(store),
                    methods,
                    meta
                }
            }
        },
        defineDatabase: async (databaseConfig: any) => {

            const { init: store, params, rest } = await databaseConfig()

            const collections = Object.fromEntries(
                Object.entries(params.collections)
                    .map(([name, methods]: [string, Function]) => {
                        let test = methods(store).data
                        return [
                            name,
                            test
                        ]
                    }))


            return { collections, rest, store };
        },


        defineDatabaseMethod: ({ filters }: { filters?: Array<any> }) => {
            return function ({ store }: { store: Array<any> }) {
                return store
            }
        },
    }
}

export const components = {}

export const layouts = {}

export const includes = {}

export const styles = {}

export const libs = {}

export const utils = () => {
    return {
        defineUtility: ({ name, method }) => {
            return { name, method }
        }
    }
}

export const configs = () => {
    return {
        defineDatabaseConfiguration: ({ params, init, ...rest }) => {
            return async function () {
                return {
                    rest,
                    params,
                    init: await init(params)
                }
            }
        }
    }
}


export const pages = () => {
    return {
        createPage: ({ store, id }) => {
            return {
                id,
                version: Date.now(),
                layout: store?.layout ?? null,
                data: store[id]?.data ?? null,
                pages: store[id]?.pages ?? null
            };
        },

    }
}


export const services = () => {
    return {
        defineService: ({ methods }) => {
            return function () {
                return { methods }
            }
        }
    }
}

export const controllers = (): BlackprintControllersModules => {
    return {
        hooks: hooks,
        services: services
    } as BlackprintControllersModules
}

export const models = (): BlackprintModelsModules => {
    return {
        configs: configs,
        data: {
            db: db,
            pages: pages
        }
    } as BlackprintModelsModules
}

export const views = (): BlackprintViewsModules => {
    return {
        components: components,
        layouts: layouts,
        includes: includes,
        libs: libs,
        styles: styles
    } as BlackprintViewsModules
}
