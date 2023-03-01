/* eslint-disable prettier/prettier */

export interface IBlackprintConfiguration {
    version?: string;
    name?: string;
    type?: string;
    author?: string;
    views?: any;
    models?: any;
    controllers?: any;
}

export type BlackprintModule = {}

export interface IBlackprintService {
    methods?: {};
}

export interface IBlackprintViewStore {
    layout?: any;
    meta?: any;
    pages?: any;
}

export interface IBlackrpintUtility { }

export interface IBlackprintAPIRoute {
    get?: Function;
    post?: Function;
}

export interface IBlackprintLibrary {
    plugins?: any
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

export type BlackprintViewsModules = BlackprintModule & AbstractRootIndexedObject & {
    layouts?: any;
    libs?: any;
    styles?: any;
    components?: any;
    includes?: any;
}

export type BlackprintModelsModules = BlackprintModule & AbstractRootIndexedObject & {
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


export type BlackprintModules = AbstractRootIndexedObject & {
    views?: BlackprintViewsModules
    controllers?: BlackprintControllersModules,
    models?: BlackprintModelsModules
}