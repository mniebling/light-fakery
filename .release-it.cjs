// This needs to be a `cjs` file because cosmiconfig, which is used by release-it,
// can't currently handle a `js` config file when `type: "module"` is specified in package.json.
module.exports = {
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
