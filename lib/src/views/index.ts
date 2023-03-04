import { define } from "build/index"

import components from "./components"
import includes from "./includes"
import layouts from "./layouts"
import styles from "./styles"

const views = define(() => {

    const lib = {
        components,
        includes,
        layouts,
        styles
    }

    return lib
})

export default views 