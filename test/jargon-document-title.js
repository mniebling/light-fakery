import test from 'ava'
import { jargonDocumentTitle, setSeed } from '../dist/index.js'

test.beforeEach(t => {
  setSeed(1)
})

test('returns a jargon document title', t => {

  t.is(jargonDocumentTitle(), 'Quality Perception of Gen Z Consumer on Banking Services')
  t.is(jargonDocumentTitle(), 'A Case Against CSR Initiatives')
})
