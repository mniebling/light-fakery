import { integer } from './integer.js'

/**
 * Returns a random element from an array.
 *
 * Returns undefined if the array is empty.
 */
 export function fromArray<T>(array: T[]): T | undefined {

  if (array.length === 0) return undefined

  return array[integer({ min: 0, max: array.length - 1 })]
}
