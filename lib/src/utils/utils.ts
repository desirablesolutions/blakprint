import { define, Definition, ValidClosure } from "blakprint-utils-ts"

export type UtilityType<TypeParams, ReturnParams, MetaParams = {}> = Definition<TypeParams, ReturnParams, MetaParams>

export function defineUtility<TypeParams, ReturnParams>(closure: ValidClosure): UtilityType<TypeParams, ReturnParams> {
    return define<TypeParams, ReturnParams>(closure)
}