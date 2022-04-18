import test from 'ava'
import { randomFromArray, setSeed } from '../dist/index.js'

test.beforeEach(t => {
  setSeed(1)
})

test('returns undefined if array is empty', t => {
  t.is(randomFromArray([]), undefined)
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
