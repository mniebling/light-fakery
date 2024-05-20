import { beforeEach, describe, expect, test } from 'vitest'
import { randomInteger, setSeed } from '../src/index.js'


describe('randomInteger()', () => {

	beforeEach(() => setSeed(1))

	test('produces integers within range', () => {

		expect(randomInteger({ min: 0, max: 10 })).toBe(6)
		expect(randomInteger({ min: 0, max: 10 })).toBe(0)
		expect(randomInteger({ min: 0, max: 10 })).toBe(5)
		expect(randomInteger({ min: 0, max: 10 })).toBe(10)
		expect(randomInteger({ min: 0, max: 10 })).toBe(10)
	})

	test('throws if min or max not provided', () => {

		// @ts-expect-error - invalid type, missing max
		const noMaxCall = () => randomInteger({ min: 2 })
		expect(noMaxCall).toThrowError(`Min and max values must be provided`)

		// @ts-expect-error - invalid type, missing min
		const noMinCall = () => randomInteger({ min: 2 })
		expect(noMinCall).toThrowError(`Min and max values must be provided`)

		// @ts-expect-error - invalid type, missing both min & max
		const noOptionsCall = () => randomInteger()
		expect(noOptionsCall).toThrowError(`Min and max values must be provided`)
	})

	test('throws if min > max', () => {

		const call = () => randomInteger({ min: 2, max: 1 })

		expect(call).toThrowError(`The min value must be less than or equal to the max`)
	})

	test('returns the value if min = max', () => {

		expect(randomInteger({ min: 1, max: 1 })).toBe(1)
	})
})
