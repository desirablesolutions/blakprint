import { html as HyperscriptTaggedMarkupPreact } from "htm/preact";
import htm from 'htm';

import { html as HyperscriptTaggedMarkupReact } from "htm/react";
import { defineUtility } from "./utils";


export function defaultClosures() {
  return {
    react: HyperscriptTaggedMarkupReact,
    preact: HyperscriptTaggedMarkupPreact,
  };
}

export default function defineHypertextTransformer() {
  return defineUtility(defaultClosures());
}
