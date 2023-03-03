import { define } from "build/index"

export interface IBlackprintConfigsLibrary {
    defineDatabaseConfiguration: Function
}


const configs: IBlackprintConfigsLibrary = define(() => {

    const lib: IBlackprintConfigsLibrary = {
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
    return lib as IBlackprintConfigsLibrary
})


export default configs



