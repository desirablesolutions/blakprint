import { html as HyperscriptTaggedMarkupReact } from "htm/react";
import { defineUtility } from "./utils";

export function defineHypertextTransformer(
  type: "react" | "preact" | "html"
) {
  return defineUtility<unknown, Function,any>(
    HyperscriptTaggedMarkupReact
  );
}

