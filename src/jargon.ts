import { fromArray } from './fromArray.js'
import { jargonDocuments } from './data/jargon-documents.js'
import { jargonPhrases } from './data/jargon-phrases.js'

/**
 * Returns a jargon document title. For example, "Theoretical Aspects of Strategic Planning and Performance".
 */
 export function jargonDocumentTitle() {

  return fromArray(jargonDocuments)
}

/**
 * Returns a jargon phrase. For example, "Transform overarching barriers".
 */
export function jargonPhrase() {

  return fromArray(jargonPhrases)
}
