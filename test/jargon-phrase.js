import test from 'ava'
import { randomJargonPhrase, setSeed } from '../dist/index.js'

test.beforeEach(t => {
  setSeed(1)
})

test('returns a jargon phrase', t => {

  t.is(randomJargonPhrase(), 'Integrate an outcomes-driven strategic alliance')
  t.is(randomJargonPhrase(), 'Adjust your planned-giving developer story')
})
