import assert from 'node:assert'
import { describe, test, beforeEach } from 'node:test'
import { randomBoolean, setSeed } from '../src/index.js'

describe('randomBoolean()', () => {

	beforeEach(() => setSeed(1))

	test('produces random booleans', () => {

		assert.equal(randomBoolean(), false)
		assert.equal(randomBoolean(), true)
		assert.equal(randomBoolean(), false)
		assert.equal(randomBoolean(), false)
	})
})
