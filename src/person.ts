import { randomFromArray } from './from-array.js'
import { domains } from './data/domains.js'
import { names } from './data/names.js'

export interface FakePerson {
  emailAddress: string
  firstName: string
  fullName: string
  lastName: string
}

/**
 * Returns a random person object, containing:
 *
 * - `fullName`: A first name followed by a surname (all the fake names are from surname-last cultures)
 * - `firstName`: A first name
 * - `lastName`: A surname
 * - `emailAddress`: The full name and a random email domain (this may produce emails that actually exist!)
 *
 * The properties are grouped together to make it easy to generate e.g., a contact
 * card with a name and email that match.
 */
export function randomPerson(): FakePerson {

  const name = randomFromArray(names)
  const domain = randomFromArray(domains)
  if (!name || !domain) throw new Error(`randomFromArray returned undefined, which should not happen when fetching from 'names' or 'domains'`)

  return {
    emailAddress: `${name[0]}.${name[1]}@${domain}`.toLowerCase(),
    firstName: name[0],
    fullName: `${name[0]} ${name[1]}`,
    lastName: name[1],
  }
}
