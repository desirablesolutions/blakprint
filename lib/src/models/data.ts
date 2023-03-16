import { define } from "build/index"

import db from "./db"
import pages from "./pages"


const data = define(() => {
    const libs = {
        __methods: {
            ...pages.methods,
            ...db.methods
        },
        pages,
        db
    }

    return libs
})

export default data