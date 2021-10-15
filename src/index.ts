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


// By default, create a randomly seeded generator
let _random = mulberry32(Date.now())


/**
 * A method to update the random generator with a fixed seed.
 *
 * This can be used for situations where deterministic random data is needed
 * (for example, in unit tests).
 */
export function setSeed(seed: number): void {

  _random = mulberry32(seed)
}

/**
 * Returns a random integer between `min` and `max`.
 *
 * Note that the result is inclusive of both `min` and `max`.
 */
export function integer(options: { min: number, max: number }): number {

  if (options.min > options.max) throw new Error(`The min value must be less than or equal to the max`)

  const min = Math.ceil(options.min)
  const max = Math.floor(options.max)

  return Math.floor(_random() * (max - min + 1) + min)
}
