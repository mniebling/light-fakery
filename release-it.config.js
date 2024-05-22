export default {
	git: {
		requireCleanWorkingDir: false,
	},
	github: {
		release: true,
		web: true, // Open a browser to edit the GitHub release (and clean up the changelog!)
	},
	hooks: {
		"before:init": [
			"npm run test",
			"npm run build",
		],
	},
	prompt: {
		src: {
			status: true,
		},
	},
}
