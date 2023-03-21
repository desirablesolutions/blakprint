import { define } from "build/define"

export interface BlakprintLayoutModule extends BlakprintModule {

}
const components = define<BlakprintLayoutModule, any>(() => {
    const lib = {
        defineReactComponent: define<any, any>(() => {
            return function (props) {
                return props.children
            }
        })
    }

    return lib
})

export default components