/**
 * A convenience helper that returns an array of length `n` by invoking `iteratee` n times.
 * The current index is passed into the iteratee function.
 */
export function times<T>(n: number, iteratee: (i: number) => T): T[] {

	let index = -1
	const result: T[] = Array(n)

	while (++index < n) {
		result[index] = iteratee(index)
	}

	return result
}
