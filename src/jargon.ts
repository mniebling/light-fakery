import { fromArray } from './fromArray.js'
import { jargonDocuments } from './data/jargon-documents.js'
import { jargonPhrases } from './data/jargon-phrases.js'

/**
 * Returns a jargon document title. For example, "Theoretical Aspects of Strategic Planning and Performance".
 */
 export function jargonDocumentTitle(): string {

  const title = fromArray(jargonDocuments)
  if (!title) throw new Error(`fromArray returned undefined, which should not happen when fetching from 'jargonDocuments'`)

  return title
}

/**
 * Returns a jargon phrase. For example, "Transform overarching barriers".
 */
export function jargonPhrase(): string {

  const phrase = fromArray(jargonPhrases)
  if (!phrase) throw new Error(`fromArray returned undefined, which should not happen when fetching from 'jargonDocuments'`)

  return phrase
}
