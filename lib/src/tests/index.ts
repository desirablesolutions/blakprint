import { define } from "build/index"


export const defineTest = define(() => {
    return null
})


const tests = define(() => {

    const lib = {
        defineTest
    }

    return lib
})

export default tests