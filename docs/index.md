---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "light-fakery"
  tagline: A lightweight JS library for generating fake data.
  actions:
    - theme: brand
      text: Documentation
      link: /getting-started/about
    - theme: alt
      text: View on GitHub
      link: https://github.com/mniebling/light-fakery
---

Write code like this:

```typescript
import { randomInteger, randomPerson, times } from 'light-fakery'

const employees = times(100, (i) => ({
	detail: randomPerson(),
	id: i + 1,
	salary: randomInteger({ min: 50, max: 200 }) * 1000,
}))
```

...to produce data like this:

```typescript
[
  {
    detail: {
      firstName: 'Ivan',
      lastName: 'Barros',
      fullName: 'Ivan Barros',
      emailAddress: 'ivan.barros@gmail.com',
    },
    id: 1,
    salary: 124000,
  },
  // ...and 99 more random employees!
]
```
