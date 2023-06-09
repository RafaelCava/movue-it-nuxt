export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'movue-it-nuxt',
		htmlAttrs: {
			lang: 'pt-br',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{ href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;800&display=swap', rel: 'stylesheet' },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/css/global.css',
		'~/assets/css/components.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		['cookie-universal-nuxt', { alias: 'cookiz' }],
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},

	tailwindcss: {
		viewer: false,
	},
};
