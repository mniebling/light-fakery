# light-fakery

A lightweight library for generating fake data in JS/TS.

Its guiding principles are:

- Structured as a [pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
- Tree-shakable so you only bundle data you are using
- First class support for consuming the library in TypeScript
- Focused on fake data use cases that make sense in a business-y environment
- Easy to extend if you need additional data
- Zero dependencies

### Usage

```typescript
import { fromArray, integer, random } from 'light-fakery'

random()
// => 0.20554963243193924

fromArray([1, 2, 3])
// => 3

integer({ min: 0, max: 100 })
// => 63
```

### Development

`npm run build` — Compile Typescript and emit to `./dist`.

`npm test` — Run unit tests on the compiled output.

`npm run release` — Kick off an [NPM release](https://www.npmjs.com/package/light-fakery). You'll be prompted for the release details and the command will run a build before releasing. This will also attempt to perform a [GitHub release](https://github.com/release-it/release-it/blob/master/docs/github-releases.md#manual), so you will need to have appropriate permissions there to update the details.
