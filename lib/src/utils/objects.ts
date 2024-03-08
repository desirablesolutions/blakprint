import { safely } from "./safely"



export function safelyReadProperties<
  ObjectType,
  PropertyType extends keyof ObjectType
>(obj: ObjectType, prop: PropertyType): ObjectType[PropertyType] | undefined {

  return safely<ObjectType[PropertyType] | undefined, any>(() => {
    try {
      return obj[prop];
    } catch (Error) {
      console.warn(`{Message: ${Error}}`);
      return undefined;
    }
  });
}

