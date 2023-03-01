const configs = () => {
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

export default configs

