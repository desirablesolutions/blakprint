import { TypeFactory } from 'interface-forge';

/**
 * Create a new instance of a TypeParams object based on the provided blueprint.
 *
 * @param {any} blakprint - The blueprint used to create the TypeParams object.
 * @return {TypeParams} The newly created TypeParams object.
 */

export function Factory<TypeParams>(blakprint: any): TypeParams {
    return new TypeFactory<TypeParams>(blakprint) as TypeParams
}