export interface BlackprintModule { }

export interface BlackprintViewsModule extends BlackprintModule {

}

export interface BlackprintComponent extends BlackprintViewsModule {

}

export type BlackprintModuleNames = "views" | "models" | "controllers" | "includes" | "components" |
    "styles" | "libs" | "services" | "controllers" | "configs"
    | "db" | "build" | "utils" | "plugins" | "hooks" | "*";

export type BlakprintParametersType<T> = {
    id?: string | symbol,
    T
}

export type ParamsType = BlakprintParametersType<{
    params?: any
}>


type ValidClosure = Function | Object | number | string | null | undefined;

type FunctorType = {
  (...args: any[]): any;
  [key: string]: any;
  name?: string | symbol | null | undefined | Object;
};


export type Define<T, G> = {
  (...args: any[]): T & G
}