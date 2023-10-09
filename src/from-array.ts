import { randomInteger } from './integer.js'

/**
 * Returns a random element from an array.
 *
 * Throws if the array is empty.
 */
 export function randomFromArray<T>(array: T[]): T {

  if (array.length === 0) throw new Error(`Argument to randomFromArray must have length > 0`)

  return array[randomInteger({ min: 0, max: array.length - 1 })]
}
