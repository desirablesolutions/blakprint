import { define } from "build/index"

export const defineComponent = define(() => {
    return function () {
        return null
    }
})

const components = define(() => {

    const lib = {
        methods: {
            defineComponent: define(() => {
                
            })
        },
    }
    
    return lib
})

export default components