import { define } from "build/define"

import components from "components"
import includes from "includes"
import layouts from "layouts"
import styles from "styles"

import { BlackprintViewsModule } from "types"

const views = define<BlackprintViewsModule, any>(() => {

    const lib = {
        components,
        includes,
        layouts,
        styles
    }

    return lib
})

export default views 