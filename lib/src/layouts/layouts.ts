import { define, MethodType } from "blakprint-utils-ts"


const defineLayoutMeta = {
    type: "layout",
    version: 1
}

export type LayoutProps = {
    children: React.ReactNode
}

export const defineLayout = define<MethodType<any>, typeof defineLayoutMeta>((children: unknown) => {
    return children
}, defineLayoutMeta)


const callMe = defineLayout.value({
    data: []
})