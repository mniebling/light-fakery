# Utility functions

## deepOverwriteMerge

```typescript
deepOverwriteMerge<T extends object, U extends object>(
	target: T,
	overrides?: U,
): T & U
```

This method returns a new object with the properties from `overrides` deeply merged
into `target`.

If a key exists on both `overrides` and `target` then it will be merged if
both values are objects, or the `overrides` value will win if it is a
primitive or array.

Keys from `overrides` with falsy values _will_ be written into the result object.

This method is included in `light-fakery` because it helps build a concise pattern
for type-safe mock data. For example, imagine that `Employee` has 40 properties on it:

```typescript
import { deepOverwriteMerge } from 'light-fakery'

function mockEmployee(overrides?: Partial<Employee>): Employee {

	const base: Employee = {
		// ...define sane defaults for all 40 properties!
	}

	return deepOverwriteMerge(base, overrides)
}
```
The benefit of this pattern is that it allows for creating mocks with only the contextually relevant data, while still preserving the original object's type structure.

In this example `mockEmployee` is a full-fledged `Employee`:

```typescript
const newEmployee = mockEmployee({ isNew: true })
```


## times

```typescript
times<T>(n: number, iteratee: (i: number) => T): T[]
```

A convenience helper that returns an array of length `n` by invoking `iteratee` n times. The current index is passed into the iteratee function. This is often useful to build lists of fake data.

The implementation here is a simpler version of the same method from [Lodash](https://github.com/lodash/lodash/blob/main/src/times.ts). It isn't quite as bulletproof, so don't expect good behavior if you pass crazy arguments!

```typescript
import { times, randomInteger } from 'light-fakery'

const randomNumbers = times(4, () => randomInteger({ min: 0, max: 100 }))
// => [12, 65, 31, 90]

const ascendingNumbers = times(5, (i) => i)
// => [0, 1, 2, 3, 4]
```

## setSeed

```typescript
setSeed(seed: number): void
```

By default, light-fakery uses a random seed that's generated at runtime. If you want
the results of the random methods to be deterministic you can call `setSeed` with
a specific value (this is how the project's unit tests work).

```typescript
import { setSeed, randomInteger } from 'light-fakery'

setSeed(1) // after this point, the data will be deterministic
randomInteger({ min: 0, max: 10 }) // this will always return 6

setSeed(Date.now()) // if you need to stop being deterministic
```
