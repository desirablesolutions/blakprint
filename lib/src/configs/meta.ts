
import { defineConfiguration } from "./configs";

export function defineMetaConfiguration() {
  return defineConfiguration((closure, meta) => {
    return { closure, meta }
  });
}
