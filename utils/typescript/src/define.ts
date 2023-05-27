import { GlobalRegistry } from './registry';
import { isFunction } from "./predicates"
import type { Definition, ValidClosure, FunctorType } from "./types"

/**
 * Returns a higher-order method that acts as an evaluator for a closure.
 * @template ClosureType - The type of the closure to evaluate.
 * @template MetaTypes - The type of the metadata object to attach to the evaluator.
 * @param {ValidClosure} [closure] - The closure to evaluate, if any.
 * @param {object} [meta] - The metadata object to attach to the evaluator.
 * @returns {Define<ClosureType, MetaTypes>} A function that evaluates the closure and returns its result.
 */

const define = function <ClosureType, MetaTypes>(closure?: ValidClosure, meta?: MetaTypes): Definition<ClosureType, MetaTypes> {

  const instance: Definition<ClosureType, MetaTypes> = function (args: any): FunctorType {
    const Evaluator: FunctorType = function (...args: any[]) {
      if (isFunction(closure)) {
        return closure(...args) as ClosureType;
      } else {
        return closure as ClosureType;
      }
    };

    for (let i in args) {
      Evaluator[i] = args[i];
    }

    return Evaluator;
  }({
    ...meta as MetaTypes
  });

  GlobalRegistry.add({
    instance,
    meta
  });

  return instance;
};



export default define