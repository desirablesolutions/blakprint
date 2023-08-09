import { defineUtility } from "../utils";
import { twMerge } from 'tailwind-merge'


export function defaultParams() {
    return { tailwind: twMerge }
}

export type ClassMergeUtilityType = {
    resolver: any,
    methods?: any,
}

export default function defineClassMerge<TypeParams>(resolver: Function) {
    return defineUtility<TypeParams>((() => {
        return !resolver ? twMerge : resolver
    }))
}