import { defineUtility } from "./utilities";
import { isFunction, isAsynchronousFunction } from "./predicates";



export function defineSafely<ReturnType, ClosureType>() {
 
   const { meta, closure } = {

    closure: {
      validators: {},
      main: {}
    },
    meta: {
      error: {
        messages: {
          failedExecution: (sender: string): string =>
            `Error executing closure: ${sender ? sender : null}`,
        },
      },
    },
  } as const;


  return defineUtility(
    <ReturnType, ClosureType>(
      closure:
        | ClosureType
        | ((...args: unknown[]) => ClosureType)
        | ((...args: unknown[]) => Promise<ClosureType>)
    ): ReturnType | undefined | Promise<ReturnType> => {
      function* executeClosure(
        closure: () => ClosureType
      ): Generator<ReturnType | undefined, ClosureType | undefined, unknown> {
        try {
          yield;
          return closure();
        } catch (error) {
          console.error(meta.error.messages.failedExecution(error as string));
          return undefined;
        }
      }

      async function executeAsyncClosure(
        closure: () => Promise<ClosureType>
      ): Promise<ReturnType > {
        try {
          return (await closure()) as ReturnType;
        } catch (error) {
          console.error(meta.error.messages.failedExecution(error as string));
          return undefined as ReturnType;
        }
      }

  
      switch (true) {
        case isFunction(closure) && !isAsynchronousFunction(closure): {
          const generator = executeClosure(() => closure() as ClosureType);
          try {
            generator.next();
            const result = generator.next();
            return result.value as ReturnType;
          } catch (error) {
            console.error("Error executing closure", error);
          }
        }
        case isAsynchronousFunction(closure): {
          return executeAsyncClosure(
            async () => (await closure()) as ClosureType
          );
        }
        default:
          return closure as unknown as ReturnType;
      }
    }
  );
}
