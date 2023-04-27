

export type BlakprintParametersType<T> = {
    id?: string | symbol,
    T
}

export type ParamsType = BlakprintParametersType<{
    params?: any
}>

export type ValidClosure = Function | Promise<any> | Object | number | string | null | undefined;

export type FunctorType = {
  (...args: any[]): any;
  [key: string]: any;
  name?: string | symbol | null | undefined | Object;
};

export type Define<T, G> = {
  (...args: any[]): T & G
}