import type { Add } from 'meta-types'
import type { And, Or, Xor } from 'meta-types'

export type MetaDataHiearchyType = "primary" | "secondary" | "tertiary" | "quaternary" | "quinary" | "senary" | "octary" | "nonary" | "decenary" | "undecenary" | "duodecenary"

export type MetaDataType<MetaTypeParams> = {
    hierachy: MetaDataHiearchyType,
    type: string | number,
    meta?: MetaTypeParams
}
