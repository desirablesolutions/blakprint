import { define } from "blakprint-utils-ts"

export type PageStoreMetaProps<T> = {
    name?: string,
    version?: number | string,
}

export type PageStoreType<DataType, T> = {
    data?: Array<DataType>,
    metaData?: PageStoreMetaProps<T>
}

export function definePage() {
    return define(() => {
        return (
            
        )
    })
}




export function definePages() {

    const instance: any = {
        data: [
            definePage(),
            definePage(),
        ]
    }

    return define(instance)
}