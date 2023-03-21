import { define } from "build/define"


const utils = define(() => {
    const lib = define(() => ({
        methods: {
            defineUtility: () => { }
        }
    }))

    return lib
})

export default utils