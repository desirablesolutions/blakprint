import type { EffectorType, Weak, EffectorInterface } from "./types"


export function self<TypeParams=unknown>(identity: TypeParams): TypeParams {
    return identity
}

export const EffectorPreset = {
    success: self,
    failure: self,
    sync: self,
    execute: self,
    compose: self
} as const


export function Effector<TypeParams = unknown>(module = EffectorPreset): EffectorInterface<TypeParams> {
    return module
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