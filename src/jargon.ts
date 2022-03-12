import { fromArray } from './fromArray.js'
import { jargonPhrases } from './data/jargon-phrases.js'

/**
 * Returns a jargon phrase. For example, "Transform overarching barriers".
 */
export function jargonPhrase() {

  return fromArray(jargonPhrases)
}
