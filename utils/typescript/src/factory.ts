import { TypeFactory } from 'interface-forge';


export function Factory<TypeParams>(f) {
    return new TypeFactory<TypeParams>(f)
}