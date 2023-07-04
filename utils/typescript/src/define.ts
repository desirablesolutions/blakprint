import { Definition, ValidClosure } from "./types"

export function define<TypeParams, MetaParams = unknown>(closure: TypeParams, meta?: MetaParams): Definition<TypeParams, MetaParams> {

  const instance: Definition<TypeParams, MetaParams> = {
    meta: (...args: unknown[]): MetaParams => {
      return meta as MetaParams
    },
    closure: (...args: unknown[]) => {
      return closure as ValidClosure
    },
    value: (...args: unknown[]): TypeParams => {
      return closure as TypeParams
    }
  }

  return instance
}

