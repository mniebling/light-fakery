import test from 'ava'
import { randomFromArray, setSeed } from '../dist/index.js'

test.beforeEach(t => {
  setSeed(1)
})

test('throws if array is empty', t => {
  t.throws(
    () => randomFromArray([]),
    { message: `Argument to randomFromArray must have length > 0` },
  )
})

test('returns something from the array', t => {
  t.is(
    randomFromArray(['a', 'b', 'c']),
    'b'
  )
  t.is(
    randomFromArray(['a', 'b', 'c']),
    'a'
  )
  t.is(
    randomFromArray(['only']),
    'only'
  )
})
