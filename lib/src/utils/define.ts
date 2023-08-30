import { withTypeFactory } from "./dependencies";
import { isEffector } from "./predicates";
import { Definition, ValidClosure } from "./types";

/**
 * Create a definition with optional metadata.
 *
 * @param {ValidClosure} closure - The closure to be stored in the definition.
 * @param {MetaParams} meta - Optional metadata for the definition.
 * @returns {Definition<TypeParams, ReturnParams,  MetaParams>} The created definition.
 */

export function define<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown
>(
  closure: ReturnParams | ValidClosure,
  meta?: MetaParams
): Definition<TypeParams, ReturnParams, MetaParams> {
  const instance: Definition<TypeParams, ReturnParams, MetaParams> = {
    meta: (): MetaParams | undefined => {
      return meta;
    },
    version: (): string => {
      return `${Date.now()}`;
    },
    generate: (instance: TypeParams): TypeParams => {
      const generator = withTypeFactory<TypeParams>(
        (): TypeParams => ({ ...instance })
      );
      return generator.buildSync();
    },
    redefine: (
      newClosure: TypeParams extends ValidClosure ? TypeParams : ValidClosure,
      newMeta?: MetaParams
    ) => {
      return define<TypeParams, ReturnParams, MetaParams>(newClosure, newMeta);
    },
    closure: (): string => {
      return `${closure}` as string;
    },
    value: (...args: TypeParams[]): ReturnParams => {
      if (!isEffector(closure)) {
        return closure as ReturnParams;
      } else {
        try {
          const result = closure(...args) as ReturnParams;
          return result;
        } catch (ErrorReponse) {
          return ErrorReponse as ReturnParams;
        }
      }
    },
    log: (): void => {
      console.log(`[Definition]: ${instance.meta()}
                   [Closure]: ${instance.closure()}
                   [Value]: ${instance.value()}
                   [Version]: ${instance.version()}`);
    },
  } as const;

  return instance;
}
