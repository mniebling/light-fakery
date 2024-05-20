import { expect, describe, test, beforeEach } from 'vitest'
import { randomBoolean, setSeed } from '../src/index.js'


describe('randomBoolean()', () => {

	beforeEach(() => setSeed(1))

	test('produces random booleans', () => {

		expect(randomBoolean()).toBe(false)
		expect(randomBoolean()).toBe(true)
		expect(randomBoolean()).toBe(false)
		expect(randomBoolean()).toBe(false)
	})
})
