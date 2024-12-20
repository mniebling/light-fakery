/**
 * Returns a random number generator.
 *
 * See: https://github.com/bryc/code/blob/master/jshash/PRNGs.md#mulberry32
 */
function mulberry32(seed: number) {

  return function() {
    seed |= 0
    seed = seed + 0x6D2B79F5 | 0
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

/**
 * This is light-fakery's internal random number generator (PRNG).
 *
 * It returns numbers between 0 and 1, and by default initializes with a seed
 * based on the current time. To create a deterministic generator, call the
 * `setSeed` function; after that point, all light-fakery functions will use
 * the custom seed.
 */
export let random = mulberry32(Date.now())

/**
 * A method to update the random generator with a fixed seed.
 *
 * This can be used for situations where deterministic random data is needed
 * (for example, in unit tests).
 */
export function setSeed(seed: number): void {

  random = mulberry32(seed)
}

export { deepOverwriteMerge, type DeepPartial } from './merge.js'
export { randomBoolean } from './boolean.js'
export { randomDate } from './date.js'
export { randomFromArray } from './from-array.js'
export { randomInteger } from './integer.js'
export { randomJargonAdjective, randomJargonDocumentTitle, randomJargonPhrase } from './jargon.js'
export { randomPerson } from './person.js'
export { times } from './times.js'
