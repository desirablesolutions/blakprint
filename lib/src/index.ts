import views from "views/index"
import models from "models/index"
import controllers from "controllers/index"
import build from "build/index"
import components from "components/index"
import tests from "tests/index"
import plugins from "plugins/index"
import layouts from "layouts/index"
import hooks from "hooks/index"
import utils from "utils/index"
import styles from "styles/index"
import db from "db/index"
import configs from "configs/index"
import includes from "includes/index"
import types from "types/index"

export interface BlackprintOptions {
    module?: "views" | "models" | "controllers" | "*";
}

export type BlackprintModule<T> = T | any

const blakprint = (opts: BlackprintOptions): BlackprintModule<any> => {

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

    return lib[opts?.module]
}

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


