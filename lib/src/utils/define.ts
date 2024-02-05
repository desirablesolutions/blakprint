import { withTypeFactory } from "./dependencies";
import { isEffector } from "./predicates";
import { IDefinition, ValidClosure } from "./types";

/**
 * Create a definition with optional metadata.
 *
 * @param {ValidClosure} closure - The closure to be stored in the definition.
 * @param {MetaParams} meta - Optional metadata for the definition.
 * @returns {Definition<TypeParams, ReturnParams,  MetaParams>} The created definition.
 */

export class Definition<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown,
> {
  closure: ReturnParams | ValidClosure;
  meta?: MetaParams;

  constructor(closure: ReturnParams | ValidClosure, meta?: MetaParams) {
    this.closure = closure;
    this.meta = meta;
  }

  getMeta(): MetaParams {
    return this.meta as MetaParams;
  }

  version(): string {
    return `${Date.now()}`;
  }

  generate(instance: TypeParams): TypeParams {
    const generator = withTypeFactory<TypeParams>(
      (): TypeParams => ({ ...instance })
    );
    return generator.buildSync();
  }

  redefine(
    newClosure: TypeParams extends ValidClosure ? TypeParams : ValidClosure,
    newMeta?: MetaParams
  ): Definition<TypeParams, ReturnParams, MetaParams> {
    return new Definition<TypeParams, ReturnParams, MetaParams>(
      newClosure,
      newMeta
    );
  }

  getClosure(): string {
    return `${this.closure}` as string;
  }

  value(...args: TypeParams[]): ReturnParams {
    if (!isEffector(this.closure)) {
      return this.closure as ReturnParams;
    } else {
      try {
        const result = this.closure(...args) as ReturnParams;
        return result;
      } catch (ErrorReponse) {
        return ErrorReponse as ReturnParams;
      }
    }
  }

  compose(
    definitions: Definition<TypeParams, ReturnParams, MetaParams>[]
  ): IDefinition {
    return define((...args: TypeParams[]) => {
      return definitions.reduce((acc, def) => {
        const result = def.value(...acc);
        return Array.isArray(result) ? result : [result];
      }, args);
    });
  }

  log(): void {
    console.log(`[Definition]: ${this.getMeta()}
                 [Closure]: ${this.getClosure()}
                 [Value]: ${this.value()}
                 [Version]: ${this.version()}`);
  }
}

export const define = function <
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown,
>(
  closure: ReturnParams | ValidClosure,
  meta?: MetaParams
): Definition<TypeParams, ReturnParams, MetaParams> {
  return new Definition<TypeParams, ReturnParams, MetaParams>(closure, meta);
};

