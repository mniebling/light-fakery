import test from 'ava'
import { randomInteger, setSeed } from '../dist/index.js'

test.beforeEach(t => {
  setSeed(1)
})

test('produces integers within range', t => {
  t.is(randomInteger({ min: 0, max: 10 }), 6)
  t.is(randomInteger({ min: 0, max: 10 }), 0)
  t.is(randomInteger({ min: 0, max: 10 }), 5)
  t.is(randomInteger({ min: 0, max: 10 }), 10)
  t.is(randomInteger({ min: 0, max: 10 }), 10)
})

test('throws if min or max not provided', t => {
  t.throws(
    () => randomInteger({ min: 2 }),
    { message: `Min and max values must be provided` },
  )
  t.throws(
    () => randomInteger({ max: 2 }),
    { message: `Min and max values must be provided` },
  )
  t.throws(
    () => randomInteger(),
    { message: `Min and max values must be provided` },
  )
})

test('throws if min > max', t => {
  t.throws(
    () => randomInteger({ min: 2, max: 1 }),
    { message: `The min value must be less than or equal to the max` },
  )
})

test('returns the value if min = max', t => {
  t.is(randomInteger({ min: 1, max: 1 }), 1)
})
