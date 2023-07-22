import { Effect, pipe } from "effect"

export function Effector(module = Effect) {
    return module
}

export function success(value: unknown) {

    const config = {
        success: Effector().succeed
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