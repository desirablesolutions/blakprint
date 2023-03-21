export interface IBlakprintConfiguration {
    version?: string;
    name?: string;
    type?: string;
    author?: string;
    views?: any;
    models?: any;
    plugins?: any;
    controllers?: any;
}


export interface BlackprintOptions {
    module?: "views" | "models" | "controllers" | "includes" | "components" | "styles" | "*";
}

export type BlackprintModule<T> = T | any


export interface IBlakprintService {
    methods?: {};
}

export interface IBlakprintViewStore {
    layout?: any;
    meta?: any;
    pages?: any;
}

export type ClosureModeProps = "debug" | "default"
export interface IBlakprintBootstrapModules {
    define?: Function
}
export interface IBlakprintModule {

}

export interface IBlackrpintUtility { }

export interface IBlakprintAPIRoute {
    get?: Function;
    post?: Function;
}

export interface IBlakprintCoreLibrary {
    (): any;
    _meta?: any;
    controllers?: any;
    models?: any;
    views?: any;
    tests?: any;
    plugins?: any;
    utils?: any;
}


export interface IBlakprintDatabaseConfiguration {
    init?: Promise<Function> & Function;
    params?: {
        collections?: any;
    };
}


export type AbstractRootIndexedObject = {
    _root?: any
}

export type BlakprintViewsModules = IBlakprintModule & AbstractRootIndexedObject & {
    layouts?: any;
    libs?: any;
    styles?: any;
    components?: any;
    includes?: any;
}

export type BlakprintModelsModules = IBlakprintModule & AbstractRootIndexedObject & {
    configs?: any;
    data?: {
        db?: any,
        pages?: any
    }
    typings?: any
}


export type BlakprintControllersModules = AbstractRootIndexedObject & {
    hooks?: any;
    services?: any;
    utils?: any;
}

