import { beforeEach, expect, describe, test } from 'vitest'
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

// I think property testing would be a better approach here.
describe('randomDate()', () => {

	beforeEach(() => setSeed(1))

	test('produces a valid date', () => {

		const date = randomDate({
			from: new Date('January 1, 2023'),
			to: new Date('December 31, 2023'),
		})

		expect(isValidDate(date), 'it exists').toBe(true)
		expect(date, 'it matches').toEqual(new Date('2023-08-17T12:07:04.602Z'))
	})

	test('produces random dates', () => {

		const dates = times(100, () => randomDate({
			from: new Date('January 1, 2023'),
			to: new Date(),
		}))

		expect(dates.every(dateIsNotInFuture)).toBe(true)
	})

	test(`throws if "from" and "to" aren't provided`, () => {

		// @ts-expect-error - neither provided
		const blankCall = () => randomDate()
		expect(blankCall).toThrowError('Both "from" and "to" values must be provided')

		// @ts-expect-error - "to" not provided
		const noToCall = () => randomDate({ from: new Date() })
		expect(noToCall).toThrowError('Both "from" and "to" values must be provided')

		// @ts-expect-error - "from" not provided
		const noFromCall = () => randomDate({ to: new Date() })
		expect(noFromCall).toThrowError('Both "from" and "to" values must be provided')
	})

	test(`throws if "from" is after "to"`, () => {

		const call = () => randomDate({
			from: new Date('January 10, 2024'),
			to: new Date('January 1, 2024'),
		})

		expect(call).toThrowError('The "from" date must be before or equal to the "to" date')
	})
})
