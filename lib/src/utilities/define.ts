import type { Definition, ValidClosure, ValidCallableClosure } from "./types";
import { isFunction } from "./predicates";

export function define<
  ReturnParameters = unknown,
  TypeParameters = unknown,
  MetaParameters = unknown,
>(
  closure: ValidClosure | ValidCallableClosure,
  meta?: MetaParameters
): Definition<ReturnParameters, TypeParameters, MetaParameters> {


  const definition: Definition<
    ReturnParameters,
    TypeParameters,
    MetaParameters
  > = Object.create(null) satisfies Definition<
    ReturnParameters,
    TypeParameters,
    MetaParameters
  > as Definition<ReturnParameters, TypeParameters, MetaParameters>;

  definition.redefine = function () {
    return define(closure, meta);
  };

  definition.meta = function () {
    return meta;
  };

  definition.version = function (): string {
    return `${Date.now()}`;
  };

  definition.value = function <ReturnParameters, TypeParameters = unknown>(
    ...args: TypeParameters[]
  ): ReturnParameters {
    switch (true) {
      case !isFunction(closure):
        return closure as ReturnParameters;
      default:
        try {
          const result = closure(...args) as ReturnParameters;
          return result satisfies  ReturnParameters;
        } catch (ErrorReponse) {
          return ErrorReponse as ReturnParameters;
        }
    }
  };

  return definition as Definition<
    ReturnParameters,
    TypeParameters,
    MetaParameters
  >;
}
