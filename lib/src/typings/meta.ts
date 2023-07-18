
export type MetaDataHiearchyType = "primary" | "secondary" | "tertiary" | "quaternary" | "quinary" | "senary" | "octary" | "nonary" | "decenary" | "undecenary" | "duodecenary"

export type MetaDataType<MetaTypeParams> = {
    hierachy: MetaDataHiearchyType,
    type: string | number,
    meta?: MetaTypeParams
}
