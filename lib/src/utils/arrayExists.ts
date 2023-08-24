import { Weak } from "./types"

export const arrayExists = (arr: Weak<unknown[]>) => arr && arr?.length > 0;
