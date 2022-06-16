import test from 'ava'
import { randomBoolean, setSeed } from '../dist/index.js'

test.beforeEach(t => {
  setSeed(1)
})

test('produces random booleans', t => {

  t.is(randomBoolean(), false)
  t.is(randomBoolean(), true)
  t.is(randomBoolean(), false)
  t.is(randomBoolean(), false)
})
