export type ResultCase<ValueType = unknown, ErrorType = unknown> =
    { ok: true, value: ValueType } |
    { ok: false, error: ErrorType };

export type Result<TruthyCaseType, ErrorCaseType = unknown> =
    ResultCase<TruthyCaseType, ErrorCaseType>;

export interface RegistryEntry<TypeParams = unknown> {
    instance: Definition<TypeParams>,
    meta?: TypeParams,
}

export type ValidClosure = Function | Promise<any> | Object | number | string ;

export type Definition<TypeParams> = {
    (...args: unknown[]): TypeParams
}