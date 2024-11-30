# light-fakery

A lightweight library for generating fake data in JS/TS.

[Documentation](https://light-fakery.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/0ac3b698-e213-4aea-a073-e4401afadb3d/deploy-status)](https://app.netlify.com/sites/light-fakery/deploys)

Its guiding principles are:

- Structured as a [pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
- Tree-shakable so you only bundle data you are using
- First class support for consuming the library in TypeScript
- Focused on fake data use cases that make sense in a business-y environment
- Easy to extend if you need additional data
- Zero dependencies


### Development

`npm run build` — Compile Typescript and emit to `./dist`.

`npm test` — Run unit tests with Vitest.

`npm run docs:dev` — Run Vitepress locally to work on documentation.

`npm run release` — Kick off an [NPM release](https://www.npmjs.com/package/light-fakery). You'll be prompted for the release details and the command will run a build before releasing. This will also attempt to perform a [GitHub release](https://github.com/release-it/release-it/blob/master/docs/github-releases.md#manual), so you will need to have appropriate permissions there to update the details.
