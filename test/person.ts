import assert from 'node:assert'
import { beforeEach, describe, test } from 'node:test'
import { randomPerson, setSeed } from '../src'

describe('randomPerson()', () => {

	beforeEach(() => setSeed(1))

	test('returns matching names and emails', () => {

		const fake = randomPerson()

		assert.equal(fake.firstName, 'Ivan')
		assert.equal(fake.lastName, 'Barros')
		assert.equal(fake.fullName, 'Ivan Barros')
		assert.equal(fake.emailAddress, 'ivan.barros@gmail.com')

		const fake2 = randomPerson()

		assert.equal(fake2.firstName, 'Brandon')
		assert.equal(fake2.lastName, 'Stark')
		assert.equal(fake2.fullName, 'Brandon Stark')
		assert.equal(fake2.emailAddress, 'brandon.stark@msn.com')
	})
})
