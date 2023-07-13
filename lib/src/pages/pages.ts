import { define } from "blakprint-utils-ts"

export type PageStoreMetaProps<T> = {
    name?: string,
    version?: number | string,
}

export type PageStoreType<DataType, T> = {
    data?: Array<DataType>,
    metaData?: PageStoreMetaProps<T>
}

export const definePages = <T, Meta>(factory: () => T | T) => {
    return define<PageStoreType<T, Meta>, PageStoreMetaProps<Meta>>((() => {
        return factory
    }));
}




