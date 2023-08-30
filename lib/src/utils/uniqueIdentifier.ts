import { defineUtility } from "./utils";

export function UniqueIdentifierPreset(offset?: number): number {
  return (
    Math.floor(Math.random() * Math.round(Date.now() as number)) + (offset || 1)
  );
}

export function defineUniqueIdentifier(closure?: any, meta?: any) {
  return defineUtility(UniqueIdentifierPreset, meta);
}
