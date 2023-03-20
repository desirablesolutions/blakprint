import { define } from "build/define"


export interface BlackprintModule { }
export interface BlackprintLayoutModule extends BlackprintModule {
    (): { meta, methods }
}

const layouts = define<BlackprintLayoutModule>(() => {

    const lib = {

        meta: {},
        methods: {
            defineLayout: define<any>(() => {

            })
        }
    }

    return lib
})

export default layouts