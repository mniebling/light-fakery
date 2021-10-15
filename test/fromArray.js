import test from 'ava'
import { fromArray, setSeed } from '../dist/index.js'

test.beforeEach(t => {
  setSeed(1)
})

test('returns undefined if array is empty', t => {
  t.is(fromArray([]), undefined)
})

test('returns something from the array', t => {
  t.is(
    fromArray(['a', 'b', 'c']),
    'b'
  )
  t.is(
    fromArray(['a', 'b', 'c']),
    'a'
  )
  t.is(
    fromArray(['only']),
    'only'
  )
})
