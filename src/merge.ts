/**
 * Returns a new object with the properties from `overrides` deeply merged
 * into `target`.
 *
 * If a key exists on both `overrides` and `target` then it will be merged if
 * both values are objects, or the `overrides` value will win if it is a
 * primitive or array.
 *
 * Keys with falsy values are preserved in the resulting object.
 */
export function deepOverwriteMerge<T extends object, U extends object>(
	target: T,
	overrides?: U,
): T & U {

	if (!isPlainObject(target)) throw new TypeError(`Target must be a plain object.`)

	// The annotation below is necessary because TypeScript's type system is structural,
	// meaning it doesn't take runtime information into account. In other words, at
	// compile time it can't use the information from us assigning props from `overrides`
	// onto `target` in its type definitions.
	//
	// We give it the hint that output is going to be `T & U` to work around this.
	const output = { ...target } as T & U
	if (overrides === undefined) return output

	if (!isPlainObject(overrides)) throw new TypeError(`Overrides must be undefined or a plain object.`)

	// If we get here, we have objects for both target and overrides and we can
	// start actually iterating through the properties and merging them.
	for (const key of Object.keys(overrides)) {

		if (isPlainObject(output[key]) && isPlainObject(overrides[key])) {
			output[key] = deepOverwriteMerge(output[key], overrides[key])
		}
		else {
			output[key] = overrides[key]
		}
	}

	return output
}

// We're not bothered to have this function narrow the type because the merge
// function already expresses the constraint `extends object` on its type arguments.
// All we need here is a runtime check for our error handling and recursion.
function isPlainObject(x: unknown): boolean {

	if (typeof x !== 'object') return false

	// Sadly, typeof null is 'object'.
	if (x === null) return false

	// Arrays have typeof === 'object' too, but we don't want to merge them.
	if (Array.isArray(x)) return false

	return true
}
