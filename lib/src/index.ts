import type { IBlackprintCoreLibrary } from "types/Blackprint"

import { define } from "build/index"
import controllers from "controllers/index"
import models from "models/index"
import plugins from "plugins/index"
import tests from "tests/index"
import utils from "utils/index"
import views from "views/index"

export const blackprint: IBlackprintCoreLibrary = define(() => {

    const lib = {
        _meta: {
            version: Date.now(),
        },
        controllers,
        views,
        models,
        tests,
        utils,
        plugins
    }

    return lib as IBlackprintCoreLibrary
})



export { views, utils, tests, plugins, models, controllers, define, IBlackprintCoreLibrary }
