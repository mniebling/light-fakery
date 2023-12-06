import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'light-fakery',
	description: 'A lightweight JS library for generating fake data',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Documentation', link: '/getting-started/principles' }
		],

		sidebar: [
			{
				text: 'Getting Started',
				items: [
					{ text: 'Principles', link: '/getting-started/principles' },
					{ text: 'Installation', link: '/getting-started/installation' },
				],
			},
			{
				text: 'Functions',
				items: [
					{ text: 'Core', link: '/functions/core', docFooterText: 'Core functions' },
					{ text: 'People', link: '/functions/people', docFooterText: 'People functions' },
					{ text: 'Jargon', link: '/functions/jargon', docFooterText: 'Jargon functions' },
					{ text: 'Utility', link: '/functions/utility', docFooterText: 'Utility functions' },
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/mniebling/light-fakery' }
		]
	}
})
