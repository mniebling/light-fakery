import test from 'ava'
import { integer, setSeed } from '../dist/index.js'

test.beforeEach(t => {
  setSeed(1)
})

test('produces integers within range', t => {
  t.is(integer({ min: 0, max: 10 }), 6)
  t.is(integer({ min: 0, max: 10 }), 0)
  t.is(integer({ min: 0, max: 10 }), 5)
  t.is(integer({ min: 0, max: 10 }), 10)
  t.is(integer({ min: 0, max: 10 }), 10)
})

test('throws if min > max', t => {
  t.throws(
    () => integer({ min: 2, max: 1 }),
    { message: `The min value must be less than or equal to the max` },
  )
})

test('returns the value if min = max', t => {
  t.is(integer({ min: 1, max: 1 }), 1)
})
