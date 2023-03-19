import { define } from "build/define"


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