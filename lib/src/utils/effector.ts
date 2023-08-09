import type { EffectorType, Weak } from "./types"

export type EffectorInterface<TypeParams = unknown> = {
    readonly success: EffectorType<TypeParams, unknown>,
    readonly failure: EffectorType<any, any>,
    readonly sync: EffectorType<any, any>,
    readonly execute: EffectorType<any, any>,
    readonly compose: EffectorType<any, any>,
}

export function SELF<TypeParams=unknown>(identity: TypeParams): TypeParams {
    return identity
}

const DEFAULT_EFFECTOR_INTERFACE_DEFINITION = {
    success: SELF,
    failure: SELF,
    sync: SELF,
    execute: SELF,
    compose: SELF
} as const


export function Effector<TypeParams = unknown>(module = DEFAULT_EFFECTOR_INTERFACE_DEFINITION):
    EffectorInterface {
    return module as EffectorInterface<TypeParams>
}

export function success<TypeParams>(value: Weak<TypeParams>) {
    return Effector().success(value)
}

export function failure(value: unknown) {
    return Effector()?.failure(value)
}

export function sync(value: any) {
    return Effector()?.sync(value)
}

export function execute<ReturnParams>(value: any): ReturnParams {
    return Effector().execute(value)
}

export function compose(a: any, b: any):any {

    return [a, b]
}