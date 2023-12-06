# Jargon

The library includes fake data that's appropriate for various "business" purposes.
For now, there are adjectives, phrases and document titles.

## randomJargonAdjective

```typescript
import { randomJargonAdjective } from 'light-fakery'

randomJargonAdjective()
// => 'Decentralized'
```

## randomJargonDocumentTitle

These are real articles (sometimes with shortened titles) from the [Open Journal of Business and Management](https://www.scirp.org/journal/ojbm/).

```typescript
import { randomJargonDocumentTitle } from 'light-fakery'

randomJargonDocumentTitle()
// => 'Conceptual Framework on Resource Availability'
```

## randomJargonPhrase

Sourced from https://www.techsoup.org/jargon-generator.

```typescript
import { randomJargonPhrase } from 'light-fakery'

randomJargonPhrase()
// => 'Integrate an outcomes-driven strategic alliance'
```
