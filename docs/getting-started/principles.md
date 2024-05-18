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

> [!NOTE]
> I'm aware that Mulberry32 [isn't state of the art](https://gist.github.com/tommyettinger/46a874533244883189143505d203312c?permalink_comment_id=4365431#gistcomment-4365431). I might try to swap it out in a major bump at some point in the future, but on the other hand I think it's probably fine for the use case here.
