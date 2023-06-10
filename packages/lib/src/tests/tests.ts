import { define } from "blakprint-utils-ts"

export type TestType<Params> = {
    name: string,
    params: Params
}

export const defineTests = define<TestType, unknown>(() => {

})