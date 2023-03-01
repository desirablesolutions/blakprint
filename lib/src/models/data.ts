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
