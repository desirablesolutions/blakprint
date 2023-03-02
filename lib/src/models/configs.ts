import { define } from "../build/index"

const configs = define(() => {
    
    const lib = {
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
    return lib
})


export default configs



