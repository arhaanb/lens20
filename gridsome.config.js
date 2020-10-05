module.exports = {
	siteName: 'MINET Lens',
	siteDescription: "MINET Lens is The Mother's International School's photography department.",
	siteUrl: 'https://minet.co/lens',
	titleTemplate: '%s | MINET Lens',
	pathPrefix: 'lens',
	icon: {
		favicon: {
			src: './src/assets/img/favicon.svg',
			sizes: [16, 32, 96]
		},
		touchicon: {
			src: './src/assets/img/favicon.svg',
			sizes: [76, 152, 120, 167],
			precomposed: true
		}
	},
	css: {
		loaderOptions: {
			scss: {
			}
		}
	},
	devServer: {
		host: '0.0.0.0',
		port: 8080
	}
}
