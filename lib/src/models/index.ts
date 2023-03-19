import { define } from "build/define"

import configs from "./configs"
import data from "./data"

const models = define(() => {
    const lib = {
        data, configs
    }

    return lib
})


export default models