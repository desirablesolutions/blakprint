import { define } from "build/index"


const hooks = define(() => {

    const lib = define({
        methods: {
            defineHook: define(0)
        }
    },
        { type: "library" })

    return lib
})


export default hooks