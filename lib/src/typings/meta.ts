const MetaDataHiearchy = [
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
  "quinary",
  "senary",
  "octary",
  "nonary",
  "decenary",
  "undecenary",
  "duodecenary",
] as const;

export type MetaDataHiearchyType = Record<
  keyof typeof MetaDataHiearchy,
  typeof MetaDataHiearchy
>;

export type MetaDataType<T=any> = T;
