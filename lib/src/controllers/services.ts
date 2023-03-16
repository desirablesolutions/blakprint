import { define } from "build/index"

export const defineServices = define(() => {

})

export const defineService = define(() => {

})

const services = define(() => {

    const lib = {
        methods: {
            defineService: define(() => {

                return function (init) {
                    return {
                        init
                    }
                }
            }, { type: "library" })
        }
    }

    return lib

})

export default services