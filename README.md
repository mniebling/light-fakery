# light-fakery

A lightweight library for generating fake data in JS/TS.

Guiding principles:

- Structured as a pure ES module
- Tree-shakable so you only bundle data you are using
- First class support for consuming the library in TypeScript
- Focused on fake data use cases that make sense in a business-y environment
- Easy to extend if you need additional data

### Usage

```typescript
import { integer } from 'light-fakery'

integer({ min: 0, max: 100 }) // => 63
```

### Development

`npm run build` — compile Typescript and emit to `./dist`

`npm test` — run unit tests on compiled output
