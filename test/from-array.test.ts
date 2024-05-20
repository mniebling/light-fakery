import { beforeEach, describe, expect, test } from 'vitest'
import { randomFromArray, setSeed } from '../src/index.js'


describe('randomFromArray()', () => {

	beforeEach(() => setSeed(1))

	test('throws if array is empty', () => {

		const call = () => randomFromArray([])

		expect(call).toThrowError(`Argument to randomFromArray must have length > 0`)
	})

	test('returns something from the array', () => {

		expect(randomFromArray(['a', 'b', 'c'])).toBe('b')
		expect(randomFromArray(['a', 'b', 'c'])).toBe('a')
		expect(randomFromArray(['only'])).toBe('only')
	})
})
