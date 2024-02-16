import { randomInteger } from './integer.js'


/**
 * Returns a random JavaScript Date between the specified endpoints.
 */
export function randomDate(options: { from: Date, to: Date }): Date {

  if (!options || typeof options.from === 'undefined' || typeof options.to === 'undefined') throw new Error(`from and to values must be provided`)

  const start = options.from.getTime()
  const end = options.to.getTime()

  const randomMsInRange = randomInteger({ min: start, max: end })

  return new Date(randomMsInRange)
}
