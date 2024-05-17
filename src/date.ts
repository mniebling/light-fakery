import { randomInteger } from './integer.js'


/**
 * Returns a random JavaScript Date between the specified endpoints.
 */
export function randomDate(options: { from: Date, to: Date }): Date {

  if (!options || typeof options.from === 'undefined' || typeof options.to === 'undefined') {
    throw new Error(`Both "from" and "to" values must be provided`)
  }

  if (options.from.getTime() > options.to.getTime()) {
    throw new Error(`The "from" date must be before or equal to the "to" date`)
  }

  const start = options.from.getTime()
  const end = options.to.getTime()

  const randomMsInRange = randomInteger({ min: start, max: end })

  return new Date(randomMsInRange)
}
