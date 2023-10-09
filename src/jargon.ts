import { randomFromArray } from './from-array.js'
import { jargonAdjectives } from './data/jargon-adjectives.js'
import { jargonDocuments } from './data/jargon-documents.js'
import { jargonPhrases } from './data/jargon-phrases.js'

/**
 * Returns a random jargon adjective. For example, "Decentralized".
 */
 export function randomJargonAdjective(): string {

  return randomFromArray(jargonAdjectives)
}

/**
 * Returns a random jargon document title. For example, "Theoretical Aspects of Strategic Planning and Performance".
 */
 export function randomJargonDocumentTitle(): string {

  return randomFromArray(jargonDocuments)
}

/**
 * Returns a random jargon phrase. For example, "Transform overarching barriers".
 */
export function randomJargonPhrase(): string {

  return randomFromArray(jargonPhrases)
}
