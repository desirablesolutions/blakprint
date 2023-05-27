/**
 * Invoke the given function with the provided arguments in a try-catch block.
 * If the function throws an error, log it and return a new Error object.
 * @param fn The function to invoke.
 * @param args The arguments to pass to the function.
 * @returns The return value of the function if it succeeds, or a new Error object if it throws an error.
 */

import type { Result, RegistryEntry } from "./types"

export const Ok = <T>(data: T): Result<T, never> => {
    return { ok: true, value: data };
};

export const Err = <E>(error?: E): Result<never, E> => {
    return { ok: false, error };
};

export const safe_invoke = (fn: (...args: any[]) => any, ...args: any[]) => {
    try {
        console.warn(`${fn} w/ ${args}`)
        return fn(...args);
    } catch (e) {
        console.error(e)
        return e instanceof Error ? e : new Error(e);
    }
};


export const RANDOM_SEED: number = Math.floor(Math.random() * 100 * Date.now() as number);

export const generate_random_string = (seed: number = RANDOM_SEED) => {
    return Math.random().toString(seed).substring(2, 15) + Math.random().toString(seed).substring(2, 15)
}


export function printRegistry(registry: RegistryEntry<unknown>[]) {
    registry.forEach((entry, i) => {
        console.log(`Entry ${i}:`);
        console.log(JSON.stringify(entry.meta, null, 2));
    });
}