import assert from 'node:assert'
import { beforeEach, describe, test } from 'node:test'
import { randomDate, setSeed, times } from '../src/index.js'


function isValidDate(input: unknown): input is Date {

	if (!input) return false // invalid
	if (!(input instanceof Date)) return false // not a Date
	if (isNaN(input.getTime())) return false // not a valid date

	return true
}

function dateIsNotInFuture(date: Date): boolean {

	const now = new Date()
	return date.getTime() < now.getTime()
}

/**
 * I think property testing would be a better approach here.
 */
describe('randomDate()', () => {

	beforeEach(() => setSeed(1))

	test('produces a valid date', () => {

		const date = randomDate({
			from: new Date('January 1, 2022'),
			to: new Date('December 31, 2022'),
		})

		assert.ok(isValidDate(date), 'is valid')
		assert.deepStrictEqual(date, new Date('2022-08-17T12:07:04.602Z'), 'matches expected')
	})

	test('produces random dates', () => {

		const dates = times(100, () => randomDate({
			from: new Date('January 1, 2022'),
			to: new Date(),
		}))

		assert.ok(dates.every(dateIsNotInFuture))
	})

	test(`throws if "from" and "to" aren't provided`, () => {

		assert.throws(
			// @ts-expect-error - neither provided
			() => randomDate(),
			{ message: 'from and to values must be provided' },
		)
		assert.throws(
			// @ts-expect-error - to not provided
			() => randomDate({ from: new Date() }),
			{ message: 'from and to values must be provided' },
		)
		assert.throws(
			// @ts-expect-error - from not provided
			() => randomDate({ to: new Date() }),
			{ message: 'from and to values must be provided' },
		)
	})
})
