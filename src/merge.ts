/**
 * Returns a new object with the properties from `overrides` deeply merged
 * into `target`.
 *
 * In theory this method could merge any objects together, but it's designed for
 * the common fake data use case of overwriting select properties on a defaulted
 * base object. When `target` is `T` and `overrides` are constrained to `DeepPartial<T>`
 * then the compiler can easily be convinced that the merged output is of type `T`.
 *
 * If a key exists on both `overrides` and `target` then it will be merged if
 * both values are objects, or the `overrides` value will win if it is a
 * primitive or array.
 *
 * Keys with falsy values are preserved in the resulting object.
 *
 * This method doesn't support number or Symbol keys.
 */
export function deepOverwriteMerge<T extends Record<string, any>>(
	target: T,
	overrides?: DeepPartial<T>,
): T {

	if (!isPlainObject(target)) throw new TypeError(`Target must be a plain object.`)

	const output = { ...target }

	// It's ok for overrides to be undefined, that makes for a smooth DX in some cases.
	if (overrides === undefined) return output
	if (!isPlainObject(overrides)) throw new TypeError(`Overrides must be undefined or a plain object.`)

	// If we get here, we have objects for both target and overrides and we can
	// start actually iterating through the properties and merging them.
	// Note that Object.keys returns `string[]`, but we are confident that we can
	// use its results to index T even though TypeScript isn't.
	for (const key of Object.keys(overrides)) {

		if (isPlainObject(output[key]) && isPlainObject(overrides[key])) {
			output[key as keyof T] = deepOverwriteMerge(output[key], overrides[key])
		}

		else {
			output[key as keyof T] = overrides[key]
		}
	}

	return output
}

// We're not bothered to have this function narrow the type because the merge
// function already expresses the constraint `extends Record<...>` on its type arguments.
// All we need here is a runtime check for our error handling and recursion.
function isPlainObject(x: unknown): boolean {

	if (typeof x !== 'object') return false

	// Sadly, typeof null is 'object'.
	if (x === null) return false

	// Arrays have typeof === 'object' too, but we don't want to merge them.
	if (Array.isArray(x)) return false

	return true
}

/**
 * A partial type that also applies to child properties.
 * See: https://stackoverflow.com/questions/61132262/typescript-deep-partial
 */
export type DeepPartial<T> = T extends object
	? { [P in keyof T]?: DeepPartial<T[P]> }
	: T
