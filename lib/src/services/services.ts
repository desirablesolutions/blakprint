import { MethodType, define } from "blakprint-utils-ts"
import { ServiceType } from "src/typings"


export type ServiceTypeProps = {
    name?: string,
    version?: string | number,
    methods?: MethodType,
    store?: any
}


export function defineService(params: ServiceTypeProps) {

    const { name, version, methods } = params

    return define(methods)
}