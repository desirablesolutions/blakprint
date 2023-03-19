import { define } from "build/define"
import hooks from "../hooks/index"
import services from "../services/index"


const controllers = define(() => {

    const lib = {
        hooks,
        services
    }

    return lib

})

export default controllers


