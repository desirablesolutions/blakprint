export interface IBlackprintConfiguration {
    version?: string;
    name?: string;
    type?: string;
    author?: string;
    views?: any;
    models?: any;
    plugins?: any;
    controllers?: any;
}

export interface IBlackprintService {
    methods?: {};
}

export interface IBlackprintViewStore {
    layout?: any;
    meta?: any;
    pages?: any;
}

export type ClosureModeProps = "debug" | "default"
export interface IBlackprintBootstrapModules {
    define?: Function
}
export interface IBlackprintModule {
    
}

export interface IBlackrpintUtility { }

export interface IBlackprintAPIRoute {
    get?: Function;
    post?: Function;
}

export interface IBlackprintCoreLibrary {
    _meta?: any;
    controllers?: any;
    models?: any;
    views?: any;
    tests?: any;
    plugins?: any;
    utils?: any;
}


export interface IBlackprintDatabaseConfiguration {
    init?: Promise<Function> & Function;
    params?: {
        collections?: any;
    };
}


export type AbstractRootIndexedObject = {
    _root?: any
}

export type BlackprintViewsModules = IBlackprintModule & AbstractRootIndexedObject & {
    layouts?: any;
    libs?: any;
    styles?: any;
    components?: any;
    includes?: any;
}

export type BlackprintModelsModules = IBlackprintModule & AbstractRootIndexedObject & {
    configs?: any;
    data?: {
        db?: any,
        pages?: any
    }
    typings?: any
}


export type BlackprintControllersModules = AbstractRootIndexedObject & {
    hooks?: any;
    services?: any;
    utils?: any;
}

