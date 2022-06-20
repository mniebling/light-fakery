import test from 'ava'
import { randomJargonAdjective, setSeed } from '../dist/index.js'

test.beforeEach(t => {
  setSeed(1)
})

test('returns a jargon adjective', t => {

  t.is(randomJargonAdjective(), 'Open-source')
  t.is(randomJargonAdjective(), 'Advanced')
})
