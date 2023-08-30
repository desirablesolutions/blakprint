import { clsx } from "clsx";
import { defineUtility } from "./utils";
import { DefinitionPresetsType } from "./types";

export const ClassSerializerPresetTypesPresets: DefinitionPresetsType = {
  default: clsx,
} as const;

export type ClassSerializerPresetTypes = typeof ClassSerializerPresetTypesPresets;


export function defineClassSerializer<
  TypeParams = any,
  ReturnParams = any,
  MetaParams = any
>(preset?: keyof ClassSerializerPresetTypes) {

  const serializerInjection = !preset
    ? ClassSerializerPresetTypesPresets.default
    : ClassSerializerPresetTypesPresets[preset as keyof ClassSerializerPresetTypes];

  return defineUtility<TypeParams, ReturnParams, MetaParams>(
    serializerInjection as ReturnParams
  );
}
