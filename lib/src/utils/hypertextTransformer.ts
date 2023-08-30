import { html as HyperscriptTaggedMarkupReact } from "htm/react";
import { default as HyperscriptTaggedHTML } from "htm";

import { defineUtility } from "./utils";

export const HypertextTransformerPresets = {
  react: HyperscriptTaggedMarkupReact,
  html: HyperscriptTaggedHTML,
} as const;

export function defineHypertextTransformer(
  type: keyof typeof HypertextTransformerPresets
) {
  return defineUtility<unknown, Function, any>(
    HypertextTransformerPresets[type]
  );
}
