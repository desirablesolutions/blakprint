export function isFunction(x: unknown): x is Function {
  return typeof x === 'function';
}

export function isString(x: unknown): x is string {
  return typeof x === 'string';
}

export function isNumber(x: unknown): x is number {
  return typeof x === 'string';
}

import * as tg from 'type-guards'
const isUser = tg.isOfShape({
  name: tg.isString,
  age: tg.isNumber,
})
``
const is_a = (x: unknown) => {
  
}

const createPredicate = (x: unknown) => {
  return function(y: unknown) {
    return typeof x === typeof y
  }
}