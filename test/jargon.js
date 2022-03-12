import test from 'ava'
import { jargonPhrase, setSeed } from '../dist/index.js'

test.beforeEach(t => {
  setSeed(1)
})

test('returns a jargon phrase', t => {

  t.is(jargonPhrase(), 'Integrate an outcomes-driven strategic alliance')
  t.is(jargonPhrase(), 'Adjust your planned-giving developer story')
})
