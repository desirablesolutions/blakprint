import { defineUtility } from "./utils";
import { isEffector } from "./predicates";

export type SafePropertiesProps<TypeParams> = {
  props?: Partial<TypeParams>;
  defaults: (...args: any[]) => TypeParams;
};

export const SafePropertiesPreset = <TypeParams = any>({
  props,
  defaults,
}: SafePropertiesProps<TypeParams>): TypeParams => {
  return !props && !isEffector(defaults)
    ? defaults
    : !props
    ? defaults()
    : ({ ...defaults(), ...props } as TypeParams);
};

export function defineSafeProperties<TypeParams=any, ReturnParams=any, MetaParams=unknown>(
  closure?: any,
  meta?: any
) {
  return defineUtility<TypeParams, ReturnParams, MetaParams>(
    !closure ? SafePropertiesPreset : closure,
    meta
  );
}
