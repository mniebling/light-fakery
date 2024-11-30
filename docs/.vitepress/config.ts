import { defineConfig } from 'vitepress'
import pkg from '../../package.json'


export default defineConfig({
	title: 'light-fakery',
	description: 'A lightweight JS library for generating fake data',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-nav
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Documentation', link: '/getting-started/about' },
			{ text: pkg.version, link: 'https://github.com/mniebling/light-fakery/releases' },
		],
		// https://vitepress.dev/reference/default-theme-sidebar
		sidebar: [
			{
				text: 'Getting Started',
				items: [
					{ text: 'About', link: '/getting-started/about' },
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
		// https://vitepress.dev/reference/default-theme-config#sociallinks
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/mniebling/light-fakery' }
		]
	}
})
