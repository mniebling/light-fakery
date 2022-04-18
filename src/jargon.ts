import { randomFromArray } from './fromArray.js'
import { jargonDocuments } from './data/jargon-documents.js'
import { jargonPhrases } from './data/jargon-phrases.js'

/**
 * Returns a random jargon document title. For example, "Theoretical Aspects of Strategic Planning and Performance".
 */
 export function randomJargonDocumentTitle(): string {

  const title = randomFromArray(jargonDocuments)
  if (!title) throw new Error(`fromArray returned undefined, which should not happen when fetching from 'jargonDocuments'`)

  return title
}

/**
 * Returns a random jargon phrase. For example, "Transform overarching barriers".
 */
export function randomJargonPhrase(): string {

  const phrase = randomFromArray(jargonPhrases)
  if (!phrase) throw new Error(`fromArray returned undefined, which should not happen when fetching from 'jargonDocuments'`)

  return phrase
}
