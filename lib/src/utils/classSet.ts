import { defineUtility } from ".";
import { twMerge } from 'tailwind-merge'


export function preset() {
    return twMerge
}

export type ClassMergeUtilityType = {
    resolver: any,
    methods?: any,
}

export function defineClassSet<TypeParams>(resolver?: Function) {
    return defineUtility<TypeParams>((() => {
        return !resolver ? preset() : resolver
    }))
}