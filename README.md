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

#### Core methods

```typescript
import { fromArray, integer, random } from 'light-fakery'

random()
// => 0.20554963243193924

integer({ min: 0, max: 100 })
// => 63

fromArray([1, 2, 3])
// => 3
```

#### People

A person's properties are grouped together to make it easy to generate e.g., a contact card with a name and email that match.

```typescript
import { person } from 'light-fakery'

person()
// => {
//   firstName: 'Ivan',
//   lastName: 'Barros',
//   fullName: 'Ivan Barros',
//   emailAddress: 'ivan.barros@gmail.com',
// }

```

#### Jargon

The library plans to include fake data that's appropriate for various "business" purposes.
For now, just phrases are supported.

```typescript
import { jargonPhrase } from 'light-fakery'

jargonPhrase()
// => 'Integrate an outcomes-driven strategic alliance'
```

#### Deterministic data

By default, light-fakery uses a random seed that's generated at runtime. If you want
the results of the random methods to be deterministic you can call `setSeed` with
a specific value (this is how the project's unit tests work).

```typescript
import { setSeed, integer } from 'light-fakery'

setSeed(1) // after this point, the data will be deterministic
integer({ min: 0, max: 10 }) // this will always return 6

setSeed(Date.now()) // if you need to stop being deterministic
```


### Development

`npm run build` — Compile Typescript and emit to `./dist`.

`npm test` — Run unit tests on the compiled output.

`npm run release` — Kick off an [NPM release](https://www.npmjs.com/package/light-fakery). You'll be prompted for the release details and the command will run a build before releasing. This will also attempt to perform a [GitHub release](https://github.com/release-it/release-it/blob/master/docs/github-releases.md#manual), so you will need to have appropriate permissions there to update the details.
