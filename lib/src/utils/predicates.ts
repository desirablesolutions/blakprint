import { isBoolean as TypeGuardsIsBoolean, isFunction as TypeGuardsIsFunction, isNull as TypeGuardsIsNull } from "type-guards";
import { EffectorType } from "./types";

export function isEffector(x: unknown): x is Function {
  return TypeGuardsIsFunction(x);
}

export function isBoolean(x: unknown): x is boolean {
  return TypeGuardsIsBoolean(x);
}

export function isNull(x: unknown): x is null {
  return TypeGuardsIsNull(x);
}
