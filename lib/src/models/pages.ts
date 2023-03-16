import { define } from "build/index"


const pages = define(() => {
    const lib = {
        methods: {
            defineViewStore: define(({ layout, pages, meta }) => {
                  return {
                    meta: {
                        ...meta,
                        version: Date.now()
                    },
                    layout,
                    pages
                  }
            },
                { type: "method" })
        }

    }
    return lib
})

export default pages