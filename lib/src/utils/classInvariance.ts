import { cva } from "class-variance-authority";
import { defineUtility } from "./utils";

export function defineClassInvariance(
) {
  return defineUtility<unknown, Function,any>(
    cva
  );
}

