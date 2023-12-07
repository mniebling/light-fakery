# Core functions

## random

```typescript
random(): number
```

This is light-fakery's internal random number generator ([PRNG](https://en.wikipedia.org/wiki/Pseudorandom_number_generator)), although it's exposed in case you want to generate raw random numbers.

It returns numbers between 0 and 1, and by default initializes with a seed based on the current time. To create a deterministic generator, call the [setSeed](/functions/utility#setSeed) function; after that point, all light-fakery functions will use the custom seed.


```typescript
import { random } from 'light-fakery'

random()
// => 0.20554963243193924
```

## randomBoolean

```typescript
randomBoolean(): boolean
```

A convenience method that returns either `true` or `false` with equal probability.

```typescript
import { randomBoolean } from 'light-fakery'

randomBoolean()
// => true
```

## randomInteger

```typescript
randomInteger(options: { min: number, max: number }): number
```

Returns a random integer between `min` and `max`.

Both `min` and `max` are required, and the result is inclusive of the endpoints.

```typescript
import { randomInteger } from 'light-fakery'

randomInteger({ min: 0, max: 100 })
// => 63
```

## randomFromArray

```typescript
randomFromArray<T>(array: T[]): T
```

Returns a random element from an array. The array can't be empty.


```typescript
import { randomFromArray } from 'light-fakery'

randomFromArray([1, 2, 3])
// => 3
```
