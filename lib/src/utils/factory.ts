import type { TypeFactory } from 'interface-forge';

/**
 * Create a new instance of a TypeParams object based on the provided blueprint.
 *
 * @param {any} blakprint - The blueprint used to create the TypeParams object.
 * @return {TypeParams} The newly created TypeParams object.
 */


export type FactoryInterface<TypeParams> = TypeFactory<TypeParams> | TypeFactory<Array<TypeParams>>

export function Factory<TypeParams>(factory: typeof TypeFactory<TypeParams>, blakprint: any): FactoryInterface<TypeParams> {
    try {
        return new factory(blakprint) as FactoryInterface<TypeParams>
    } catch (e) {
        return e as FactoryInterface<TypeParams>
    }
}

