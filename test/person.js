import test from 'ava'
import { randomPerson, setSeed } from '../dist/index.js'

test.beforeEach(t => {
  setSeed(1)
})

test('returns matching names and emails', t => {

  const fake = randomPerson()

  t.is(fake.firstName, 'Ivan')
  t.is(fake.lastName, 'Barros')
  t.is(fake.fullName, 'Ivan Barros')
  t.is(fake.emailAddress, 'ivan.barros@gmail.com')

  const fake2 = randomPerson()

  t.is(fake2.firstName, 'Brandon')
  t.is(fake2.lastName, 'Stark')
  t.is(fake2.fullName, 'Brandon Stark')
  t.is(fake2.emailAddress, 'brandon.stark@msn.com')
})
