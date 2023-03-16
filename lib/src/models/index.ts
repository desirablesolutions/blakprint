import { define } from "build/index"

import configs from "./configs"
import data from "./data"

const models = define(() => {
    const lib = {
        data, configs
    }

    return lib
})


export default models