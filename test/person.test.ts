import { beforeEach, describe, expect, test } from 'vitest'
import { randomPerson, setSeed } from '../src/index.js'


describe('randomPerson()', () => {

	beforeEach(() => setSeed(1))

	test('returns matching names and emails', () => {

		const fake = randomPerson()

		expect(fake.firstName).toBe('Ivan')
		expect(fake.lastName).toBe('Barros')
		expect(fake.fullName).toBe('Ivan Barros')
		expect(fake.emailAddress).toBe('ivan.barros@gmail.com')

		const fake2 = randomPerson()

		expect(fake2.firstName).toBe('Brandon')
		expect(fake2.lastName).toBe('Stark')
		expect(fake2.fullName).toBe('Brandon Stark')
		expect(fake2.emailAddress).toBe('brandon.stark@msn.com')
	})
})
