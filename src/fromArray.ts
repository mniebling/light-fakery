import { randomInteger } from './integer.js'

/**
 * Returns a random element from an array.
 *
 * Returns undefined if the array is empty.
 */
 export function randomFromArray<T>(array: T[]): T | undefined {

  if (array.length === 0) return undefined

  return array[randomInteger({ min: 0, max: array.length - 1 })]
}
