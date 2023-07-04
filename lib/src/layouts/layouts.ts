import { define, MethodType } from "blakprint-utils-ts"


const defineLayoutMeta = {
    type: "layout",
    version: 1
}

export const defineAsync = define<MethodType<Promise<any>>, typeof defineLayoutMeta>(async (layout: number) => {
    return { layout }
}, defineLayoutMeta)


const callMe = defineAsync