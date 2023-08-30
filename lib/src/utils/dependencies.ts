import { TypeFactory } from "interface-forge";
import { Effect } from "effect";

export function withEffect() {
  return Effect;
}

export function withTypeFactory<TypeParams = unknown>(
  generator: (...args: any[]) => TypeParams
): TypeFactory<TypeParams> {
  return new TypeFactory<TypeParams>(generator);
}
