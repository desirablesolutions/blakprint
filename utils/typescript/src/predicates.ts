/**
 * Determines whether the given value is a function.
 * @param x - The value to check.
 * @returns True if the value is a function, false otherwise.
 */

export function isFunction(x: unknown): x is Function {
  return typeof x === 'function';
}

