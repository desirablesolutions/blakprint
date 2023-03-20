import { define } from "build/define"

export interface BlakprintLayoutModule extends BlakprintModule {

}
const components = define<BlakprintLayoutModule>(() => {
    const lib = {
        defineReactComponent: define<(() => {
            return function (props) {
                return props.children
            }
        })
    }

    return lib
})

export default components