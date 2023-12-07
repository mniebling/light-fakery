# People functions

## randomPerson

```typescript
randomPerson(): FakePerson
```

There's one generator function for all the attributes of a person. They're grouped together in this way to support use cases like a contact card (with a name and email that match).

The names are randomly generated so it's likely some real people can be matched here. Please don't send real emails to these addresses!

```typescript
import { randomPerson } from 'light-fakery'

randomPerson()
// => {
//   firstName: 'Ivan',
//   lastName: 'Barros',
//   fullName: 'Ivan Barros',
//   emailAddress: 'ivan.barros@gmail.com',
// }
```
