import { define } from "build/define"
import build from "build/index"
import components from "components/index"
import configs from "configs/index"
import controllers from "controllers/index"
import db from "db/index"
import hooks from "hooks/index"
import includes from "includes/index"
import layouts from "layouts/index"
import models from "models/index"
import plugins from "plugins/index"
import styles from "styles/index"
import tests from "tests/index"
import type { BlackprintModule, BlackprintModuleNames } from "types"
import types from "types/index"
import utils from "utils/index"
import views from "views/index"



const blakprint2 = define(() => {})

const blakprint = define<any, any>((module: BlackprintModuleNames) => {
    const lib = {
        views,
        models,
        controllers,
        build,
        components,
        configs,
        db,
        hooks,
        tests,
        includes,
        layouts,
        plugins,
        styles,
        types,
        utils,
    }

    return lib[module as string | symbol] ?? null
})
   
})



export {
    views,
    models,
    controllers,
    build,
    components,
    configs,
    db,
    hooks,
    tests,
    includes,
    layouts,
    plugins,
    styles,
    types,
    utils,
}

export default blakprint


