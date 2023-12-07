import assert from 'node:assert'
import { describe, test } from 'node:test'
import { times } from '../src/index.js'


describe('times()', () => {

	test('creates an array with specified length', () => {

		const result = times(10, () => 'item')
    assert.equal(result.length, 10)
	})

  test('returns an empty array if n = 0', () => {

    const result = times(0, () => 'item')
    assert.deepEqual(result, [])
  })

  test('throws a RangeError if n < 0', () => {

    assert.throws(() => {
      times(-1, () => 'item')
    }, RangeError)
  })

  test('passes the index into the iteratee', () => {

    const result = times(6, (i) => i)
    assert.deepEqual(result, [0, 1, 2, 3, 4, 5])
  })

  test('can create sparse arrays', () => {

    const result = times(3, (i) => i === 0 ? 'item' : undefined)
    assert.deepEqual(result, ['item', undefined, undefined])
  })
})
