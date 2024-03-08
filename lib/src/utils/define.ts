
import { isEffector } from "./predicates";
import { DefinitionInterface, ValidCallableClosure, ValidClosure } from "./types";


export class Definition<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = unknown,
> {
  closure: ReturnParams | ValidCallableClosure | ValidClosure;
  meta?: MetaParams;

  constructor(closure: ReturnParams | ValidCallableClosure, meta?: MetaParams) {
    this.closure = closure;
    this.meta = meta;
  }

  getMeta(): MetaParams {
    return this.meta as MetaParams;
  }

  version(): string {
    return `${Date.now()}`;
  }



  redefine(
    newClosure: TypeParams extends ValidCallableClosure ? TypeParams : ValidCallableClosure,
    newMeta?: MetaParams
  ): Definition<TypeParams, ReturnParams, MetaParams> {
    return new Definition<TypeParams, ReturnParams, MetaParams>(
      newClosure,
      newMeta
    );
  }


  test(): boolean {
    return true
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


  log(): void {
    console.warn(`[Definition]: ${this.getMeta()}
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
  closure: ReturnParams | ValidCallableClosure,
  meta?: MetaParams
): Definition<TypeParams, ReturnParams, MetaParams> {
  return new Definition<TypeParams, ReturnParams, MetaParams>(closure, meta);
};

