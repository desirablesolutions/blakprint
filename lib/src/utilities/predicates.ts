export function isFunction<ClosureType>(
  closure: ClosureType | ((...args: unknown[]) => ClosureType)
): closure is (...args: unknown[]) => ClosureType {
  return typeof closure === "function";
}

export function isAsynchronousFunction<ClosureType = any>(
  x: unknown
): x is (...args: unknown[]) => Promise<ClosureType> {
  return x && (x.constructor.name === "AsyncFunction" || x instanceof Promise);
}
