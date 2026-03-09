import type { Config } from 'release-it'

export default {
	git: {
		requireCleanWorkingDir: false,
	},
	github: {
		release: true,
		web: true, // Open a browser to edit the GitHub release (and clean up the changelog!)
	},
	hooks: {
		'before:init': [
			'npm run lint',
			'npm run test',
			'npm run build',
		],
	},
} satisfies Config
