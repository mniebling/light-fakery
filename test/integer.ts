import assert from 'node:assert'
import { beforeEach, describe, test } from 'node:test'
import { randomInteger, setSeed } from '../src/index.js'

describe('randomInteger()', () => {

	beforeEach(() => setSeed(1))

	test('produces integers within range', () => {

		assert.equal(randomInteger({ min: 0, max: 10 }), 6)
		assert.equal(randomInteger({ min: 0, max: 10 }), 0)
		assert.equal(randomInteger({ min: 0, max: 10 }), 5)
		assert.equal(randomInteger({ min: 0, max: 10 }), 10)
		assert.equal(randomInteger({ min: 0, max: 10 }), 10)
	})

	test('throws if min or max not provided', () => {

		assert.throws(
			// @ts-expect-error - invalid type, missing max
			() => randomInteger({ min: 2 }),
			{ message: `Min and max values must be provided` },
		)
		assert.throws(
			// @ts-expect-error - invalid type, missing min
			() => randomInteger({ max: 2 }),
			{ message: `Min and max values must be provided` },
		)
		assert.throws(
			// @ts-expect-error - invalid type, missing both min & max
			() => randomInteger(),
			{ message: `Min and max values must be provided` },
		)
	})

	test('throws if min > max', () => {

		assert.throws(
			() => randomInteger({ min: 2, max: 1 }),
			{ message: `The min value must be less than or equal to the max` },
		)
	})

	test('returns the value if min = max', () => {

		assert.equal(randomInteger({ min: 1, max: 1 }), 1)
	})
})
