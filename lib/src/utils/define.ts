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

  const instance: Definition<TypeParams, ReturnParams, MetaParams> =
    Object.create(null);

  instance.meta = function (): MetaParams {
    return meta as MetaParams;
  };

  instance.version = function () {
    return `${Date.now()}`;
  };

  instance.generate = function (instance: TypeParams): TypeParams {
    const generator = withTypeFactory<TypeParams>(
      (): TypeParams => ({ ...instance })
    );
    return generator.buildSync();
  };

  instance.redefine = function (
    newClosure: TypeParams extends ValidClosure ? TypeParams : ValidClosure,
    newMeta?: MetaParams
  ): Definition<TypeParams, ReturnParams, MetaParams> {
    return define<TypeParams, ReturnParams, MetaParams>(newClosure, newMeta);
  };

  instance.closure = function () {
    return `${closure}` as string;
  };

  instance.value = function (...args: TypeParams[]): ReturnParams {
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
  };

  instance.pipe = function (
    definitions: Definition<TypeParams, ReturnParams, MetaParams>[]
  ): Definition<TypeParams, ReturnParams, MetaParams> {
    return define((...args: TypeParams[]) => {
      return definitions.reduce((acc, def) => {
        const result = def.value(...acc);
        return Array.isArray(result) ? result : [result];
      }, args);
    });
  };

  instance.log = function (): void {
    console.log(`[Definition]: ${this.meta()}
                 [Closure]: ${this.closure()}
                 [Value]: ${this.value()}
                 [Version]: ${this.version()}`);
  };

  return instance;
}
