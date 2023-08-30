import { expect, test } from 'vitest'
import { define } from "../src/utils"


export function buildTests() {
    test('Defines an arbituary definition type and returns its value', () => {
        expect(define<any, number,Error>(0).value()).toBe(0)

        
      })
    
      test('Defines an arbituary definition type and returns its value', () => {
        expect(define<any, number,Error>(0).value()).toBe(0)
      })
    
      test('Defines an arbituary definition type and returns its value', () => {
        expect(define<any, number,Error>(0).value()).toBe(0)
      })
    
      test('Defines an arbituary definition type and returns its value', () => {
        expect(define<any, number,Error>(0).value()).toBe(0)
      })
    
      test('Defines an arbituary definition type and returns its value', () => {
        expect(define<any, number,Error>(typeof 0).value()).toBe(typeof 2)
      })
}


buildTests()