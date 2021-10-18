import { _random } from './index.js'

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
