import { defineUtility } from "./utilities";
import { isFunction } from "./predicates"

export default function defineSafely() {
  return defineUtility(
    <ReturnType, ClosureType>(
      closure: ClosureType | ((...args: unknown[]) => ClosureType)
    ): ReturnType | undefined => {
      function* executeClosure(
        closure: () => ClosureType
      ): Generator<ReturnType, ClosureType, unknown> {
        try {
          yield;
          return closure();
        } catch (error) {
          console.error("Error executing closure:", error);
          return undefined;
        }
      }

      switch (true) {
        case isFunction(closure): {
          const generator = executeClosure(closure);
          try {
            generator.next();
            const result = generator.next();
            return result.value as ReturnType;
          } catch (error) {
            console.error("Error executing closure", error);
          }
        }
        default:
          return closure as unknown as ReturnType;
      }
    }
  );
}
