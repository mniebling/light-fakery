import { beforeEach, describe, expect, test } from 'vitest'
import { randomJargonAdjective, randomJargonDocumentTitle, randomJargonPhrase, setSeed } from '../src/index.js'


describe('randomJargonAdjective()', () => {

	beforeEach(() => setSeed(1))

	test('returns a jargon adjective', () => {

		expect(randomJargonAdjective()).toBe('Open-source')
		expect(randomJargonAdjective()).toBe('Advanced')
	})
})


describe('randomJargonDocumentTitle()', () => {

	beforeEach(() => setSeed(1))

	test('returns a jargon document title', () => {

		expect(randomJargonDocumentTitle()).toBe('Quality Perception of Gen Z Consumer on Banking Services')
		expect(randomJargonDocumentTitle()).toBe('A Case Against CSR Initiatives')
	})
})



describe('randomJargonPhrase()', () => {

	beforeEach(() => setSeed(1))

	test('returns a jargon phrase', () => {

		expect(randomJargonPhrase()).toBe('Integrate an outcomes-driven strategic alliance')
		expect(randomJargonPhrase()).toBe('Adjust your planned-giving developer story')
	})
})
