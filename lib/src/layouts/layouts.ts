import { define, MethodType } from "blakprint-utils-ts"
import { LayoutProps } from "src/typings"

const defineLayoutMeta = {
    type: "layout",
    version: 1
} as const



export const defineLayout = define<MethodType<LayoutProps<React.ReactNode>>, typeof defineLayoutMeta>((children: unknown) => {
    return children
}, defineLayoutMeta)


