import test from 'ava'
import { randomJargonDocumentTitle, setSeed } from '../dist/index.js'

test.beforeEach(t => {
  setSeed(1)
})

test('returns a jargon document title', t => {

  t.is(randomJargonDocumentTitle(), 'Quality Perception of Gen Z Consumer on Banking Services')
  t.is(randomJargonDocumentTitle(), 'A Case Against CSR Initiatives')
})
