# Principles

`light-fakery` is a lightweight library for generating fake data in JS/TS.

Its guiding principles are:

- Structured as a [pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
- Tree-shakable so you only bundle data you are using
- First class support for consuming the library in TypeScript
- Focused on fake data use cases that make sense in a business-y environment
- Easy to extend if you need additional data
- Zero dependencies

It uses the [Mulberry32](https://github.com/bryc/code/blob/master/jshash/PRNGs.md#mulberry32) algorithm to generate random numbers.
