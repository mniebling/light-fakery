import assert from 'node:assert'
import { beforeEach, describe, test } from 'node:test'
import { randomJargonPhrase, setSeed } from '../src/index.js'

describe('randomJargonPhrase()', () => {

	beforeEach(() => setSeed(1))

	test('returns a jargon phrase', () => {

		assert.equal(randomJargonPhrase(), 'Integrate an outcomes-driven strategic alliance')
		assert.equal(randomJargonPhrase(), 'Adjust your planned-giving developer story')
	})
})
