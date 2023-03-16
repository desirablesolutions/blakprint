import { define } from "build/index"

import hooks from "./hooks"
import services from "./services"


const controllers = define(() => {
    const lib = {
        hooks,
        services
    }

    return lib

}, { type: "lib" })

export default controllers


