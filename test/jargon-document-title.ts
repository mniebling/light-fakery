import assert from 'node:assert'
import { beforeEach, describe, test } from 'node:test'
import { randomJargonDocumentTitle, setSeed } from '../src/index.js'

describe('randomJargonDocumentTitle()', () => {

	beforeEach(() => setSeed(1))

	test('returns a jargon document title', () => {

		assert.equal(randomJargonDocumentTitle(), 'Quality Perception of Gen Z Consumer on Banking Services')
		assert.equal(randomJargonDocumentTitle(), 'A Case Against CSR Initiatives')
	})
})
