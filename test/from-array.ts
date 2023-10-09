import assert from 'node:assert'
import { beforeEach, describe, test } from 'node:test'
import { randomFromArray, setSeed } from '../src/index.js'

describe('randomFromArray()', () => {

	beforeEach(() => setSeed(1))

	test('throws if array is empty', () => {

		assert.throws(
			() => randomFromArray([]),
			{ message: `Argument to randomFromArray must have length > 0` },
		)
	})

	test('returns something from the array', () => {

		assert.equal(
			randomFromArray(['a', 'b', 'c']),
			'b'
		)
		assert.equal(
			randomFromArray(['a', 'b', 'c']),
			'a'
		)
		assert.equal(
			randomFromArray(['only']),
			'only'
		)
	})
})
