import { define } from "build/define";


const services = define<any, any>(() => {

    const lib = define<any, any>(() => ({
        methods: {
            defineServices: () => {

            },
            defineService: (init, methods) => {
                return {}
            }
        }
    }))

    return lib
})

export default services