import { randomFromArray } from './fromArray.js'

/**
 * Returns either `true` or `false` with equal probability.
 */
export function randomBoolean(): boolean {

  // randomFromArray returns undefined if the argument is an empty array.
  // Since we know this argument is not empty, we cast it to get around the TS compiler.
  return !!randomFromArray([true, false])
}
