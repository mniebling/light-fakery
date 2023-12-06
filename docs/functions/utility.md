# Utility functions

## setSeed

By default, light-fakery uses a random seed that's generated at runtime. If you want
the results of the random methods to be deterministic you can call `setSeed` with
a specific value (this is how the project's unit tests work).

```typescript
import { setSeed, randomInteger } from 'light-fakery'

setSeed(1) // after this point, the data will be deterministic
randomInteger({ min: 0, max: 10 }) // this will always return 6

setSeed(Date.now()) // if you need to stop being deterministic
```
