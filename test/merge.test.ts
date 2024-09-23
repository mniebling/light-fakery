import { describe, expect, test } from 'vitest'
import { deepOverwriteMerge } from '../src/index.js'

describe(`writing basic properties`, () => {

	test(`write a primitive prop that isn't on target`, () => {

		const t = {}
		const o = { a: 'override' }

		expect(deepOverwriteMerge(t, o)).toEqual({ a: 'override' })
	})

	test(`write a primitive prop that is on target`, () => {

		const t = { a: 'target' }
		const o = { a: 'override' }

		expect(deepOverwriteMerge(t, o)).toEqual({ a: 'override' })
	})

	test(`write an undefined prop that isn't on target`, () => {

		const t = {}
		const o = { a: undefined }

		expect(deepOverwriteMerge(t, o)).toEqual({ a: undefined })
	})

	test(`write an undefined prop that is on target`, () => {

		const t = { a: 'target' }
		const o = { a: undefined }

		expect(deepOverwriteMerge(t, o)).toEqual({ a: undefined })
	})

	test(`write an object prop that isn't on target`, () => {

		const t = {}
		const o = {
			a: {
				b: 'override',
			},
		}

		expect(deepOverwriteMerge(t, o)).toEqual({
			a: {
				b: 'override',
			},
		})
	})

	test(`write an object prop that is a primitive on target`, () => {

		const t = {
			a: 'target',
		}
		const o = {
			a: {
				b: 'override',
			},
		}

		expect(deepOverwriteMerge(t, o)).toEqual({
			a: {
				b: 'override',
			},
		})
	})
})

describe(`merging object properties`, () => {

	test(`adds override props to target object`, () => {

		const t = {
			a: {
				b: 'target',
			},
		}
		const o = {
			a: {
				c: 'override',
			},
		}

		expect(deepOverwriteMerge(t, o)).toEqual({
			a: {
				b: 'target',
				c: 'override',
			},
		})
	})

	test(`overrides target props if they exist`, () => {

		const t = {
			a: {
				b: 'target',
				c: 'target',
			},
		}
		const o = {
			a: {
				b: 'override',
			},
		}

		expect(deepOverwriteMerge(t, o)).toEqual({
			a: {
				b: 'override',
				c: 'target',
			},
		})
	})

	test(`supports multi-level nesting`, () => {

		const t = {
			a: {
				b: 'target',
				f: 'target',
			},
		}
		const o = {
			a: {
				b: {
					c: 'override-1',
					d: {
						e: 'override-2',
					},
				},
			},
		}

		expect(deepOverwriteMerge(t, o)).toEqual({
			a: {
				b: {
					c: 'override-1',
					d: {
						e: 'override-2',
					},
				},
				f: 'target',
			},
		})
	})

	test(`arrays should be overwritten, not merged`, () => {

		const t = {
			a: ['target'],
		}
		const o = {
			a: ['override'],
		}

		expect(deepOverwriteMerge(t, o)).toEqual({ a: ['override'] })
	})

	test(`merges undefined values onto target`, () => {

		const t = {
			a: {
				b: 'target',
				c: 'target',
			},
		}
		const o = {
			a: {
				b: undefined,
			},
		}

		expect(deepOverwriteMerge(t, o)).toEqual({
			a: {
				b: undefined,
				c: 'target',
			},
		})
	})

	test(`retains undefined values on target`, () => {

		const t = {
			a: {
				b: 'target',
				c: undefined,
			},
		}
		const o = {
			a: {
				b: 'override',
			},
		}

		expect(deepOverwriteMerge(t, o)).toEqual({
			a: {
				b: 'override',
				c: undefined,
			},
		})
	})
})

describe(`throws on non-object input`, () => {

	test(`throws when arrays are passed`, () => {

		const t1 = [1]
		const o1 = { a: 'override' }

		let call = () => deepOverwriteMerge(t1, o1)
		expect(call).toThrow(TypeError)

		const t2 = { a: 'target' }
		const o2 = [1]

		call = () => deepOverwriteMerge(t2, o2)
		expect(call).toThrow(TypeError)
	})

	test(`throws when null values are passed`, () => {

		const t1 = null
		const o1 = { a: 'override' }

		// @ts-expect-error -- testing invalid argument
		let call = () => deepOverwriteMerge(t1, o1)
		expect(call).toThrow(TypeError)

		const t2 = { a: 'target' }
		const o2 = null

		// @ts-expect-error -- testing invalid argument
		call = () => deepOverwriteMerge(t2, o2)
		expect(call).toThrow(TypeError)
	})

	test(`throws when undefined is passed for target`, () => {

		const t1 = undefined
		const o1 = { a: 'override' }

		// @ts-expect-error -- testing invalid argument
		let call = () => deepOverwriteMerge(t1, o1)
		expect(call).toThrow(TypeError)
	})

	test(`throws when primitive values are passed`, () => {

		const t1 = 1
		const o1 = { a: 'override' }

		// @ts-expect-error -- testing invalid argument
		let call = () => deepOverwriteMerge(t1, o1)
		expect(call).toThrow(TypeError)

		const t2 = { a: 'target' }
		const o2 = 'string'

		// @ts-expect-error -- testing invalid argument
		call = () => deepOverwriteMerge(t2, o2)
		expect(call).toThrow(TypeError)
	})
})

describe(`edge cases`, () => {

	test(`returns target when overrides is an empty object`, () => {

		const t = {
			a: 'target',
		}
		const o = {}

		expect(deepOverwriteMerge(t, o)).toEqual({ a: 'target' })
	})

	test(`returns target when overrides is undefined`, () => {

		const t = { a: 'target' }
		const o = undefined

		expect(deepOverwriteMerge(t, o)).toEqual(t)
	})

	test(`returns target when target and overrides are the same exact object`, () => {

		const t = {
			a: 'target',
		}

		const result = deepOverwriteMerge(t, t)

		expect(result).toEqual({ a: 'target' })
		expect(result).not.toBe(t) // it should be a new value
	})
})
