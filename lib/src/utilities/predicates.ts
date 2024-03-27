export function isFunction<ClosureType>(
  closure: ClosureType | ((...args: unknown[]) => ClosureType)
): closure is (...args: unknown[]) => ClosureType {
  return typeof closure === "function";
}

export function isAsynchronousFunction<ClosureType = any>(
  closure: unknown
): closure is (...args: unknown[]) => Promise<ClosureType> {
  return closure as boolean && (closure?.constructor.name === "AsyncFunction" || closure instanceof Promise) as boolean;
}
