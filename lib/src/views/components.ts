import { define } from "build/index"

export const defineComponent = define(() => {
    return function () {
        return null
    }
})

const components = define(() => {

    const lib = {
        defineComponent,
    }
    
    return lib
})

export default components