
export function safelyReadProperties<ObjectType, Key extends keyof ObjectType>(
  obj: ObjectType,
  props: Key | Key[]
): ObjectType[Key] | undefined {
  try {
    const properties = Array.isArray(props) ? props : [props];
    let result: any = obj;
    for (const prop of properties) {
      if (result === undefined || result === null) {
        return undefined;
      }
      result = result[prop];
    }
    return result;
  } catch (error) {
    console.warn(`{Message: ${error}}`);
    return undefined;
  }
}

