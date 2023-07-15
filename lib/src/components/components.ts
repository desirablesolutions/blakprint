import { define } from "blakprint-utils-ts"


export const defineComponent = define(
    (view: any) => {

    const instance = {
        render: view
    }

    return instance 
})

