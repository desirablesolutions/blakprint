const db = () => {
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

export default db