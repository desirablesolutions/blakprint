import { defineUtility } from "./utils";
import { isFunction } from "./predicates";


export type SafePropertiesProps = {
  props?: any;
  defaults: any;
};

export const preset = <TypeParams = any>({
  props,
  defaults,
}: SafePropertiesProps): TypeParams => {
   return !props && !isFunction(defaults) ? defaults : !props ? defaults() : { ...defaults(), ...props };
}

export function defineSafeProperties(closure: any, meta: any) {
  return defineUtility(!closure ? preset : closure, meta);
}
