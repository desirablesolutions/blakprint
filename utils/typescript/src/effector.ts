import { Effect, pipe } from "effect"

export const Effectorator = [
    {
        success: <TypeParams>(value: TypeParams | unknown) => { return value }
    }
]

export function Effector(module = Effectorator) {
    return module
}

export const EFFECTOR_ADAM = {
    success: Effector()[0]
} as const


export function success(value: unknown) {

    const config = {
        success: Effector()[0]
    } as const

    return config.success(value)
}

export function failure(value: unknown) {
    return Effector()?.fail(value)
}

export function sync(value: any) {
    return Effector()?.sync(value)
}

export function execute<ReturnParams>(value: any): ReturnParams {
    return Effector()?.runSync<never, ReturnParams>(value)
}

export function compose(a, b) {

    const config = {
        EFFECT_PIPE_OPERATOR: pipe
    } as const

    const result = config.EFFECT_PIPE_OPERATOR(a, b)

    return result
}