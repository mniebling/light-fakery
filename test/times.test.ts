import { describe, expect, test } from 'vitest'
import { times } from '../src/index.js'


describe('times()', () => {

	test('creates an array with specified length', () => {

		const result = times(10, () => 'item')

    expect(result.length).toBe(10)
    expect(result.every(value => value === 'item')).toBe(true)
	})

  test('returns an empty array if n = 0', () => {

    const result = times(0, () => 'item')

    expect(result).toEqual([])
  })

  test('throws a RangeError if n < 0', () => {

    const call = () => times(-1, () => 'item')

    expect(call).toThrow(RangeError)
  })

  test('passes the index into the iteratee', () => {

    const result = times(6, (i) => i)

    expect(result).toEqual([0, 1, 2, 3, 4, 5])
  })

  test('can create sparse arrays', () => {

    const result = times(3, (i) => i === 0 ? 'item' : undefined)

    // Make sure to use strict equal to test sparseness (https://vitest.dev/api/expect.html#tostrictequal)
    expect(result).toStrictEqual(['item', undefined, undefined])
  })
})
