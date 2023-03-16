import { define } from "build/index"


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