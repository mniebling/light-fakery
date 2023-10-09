import assert from 'node:assert'
import { beforeEach, describe, test } from 'node:test'
import { randomJargonAdjective, setSeed } from '../src/index.js'

describe('randomJargonAdjective()', () => {

	beforeEach(() => setSeed(1))

	test('returns a jargon adjective', () => {

		assert.equal(randomJargonAdjective(), 'Open-source')
		assert.equal(randomJargonAdjective(), 'Advanced')
	})
})
