import { randomFromArray } from './from-array.js'

/**
 * Returns either `true` or `false` with equal probability.
 */
export function randomBoolean(): boolean {

  return randomFromArray([true, false])
}
