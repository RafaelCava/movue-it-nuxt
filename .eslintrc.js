module.exports = {
	root: true,
	env: {
		browser: true,
		'jest/globals': true,
		node: true,
	},
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended'],
	plugins: ['jest'],
	rules: {
		'no-tabs': 'off',
		'no-new': 'off',
		semi: ['error', 'always'],
		'comma-dangle': ['error', 'always-multiline'],
		'import/first': 'off',
		'import/order': 'off',
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'vue/html-indent': ['error', 'tab'],
		'vue/order-in-components': 'off',
	},
};
