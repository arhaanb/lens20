import DefaultLayout from '~/layouts/Default.vue'
import './skeleton.css'
import './global.css'

export default function (Vue, { router, head, isClient }) {
	head.meta.push({
		name: 'keywords',
		content: "MINET, Lens, MIS, Mother's, Mothers, Mother, International, School, Photography, X, 2020, MINETX"
	})

	head.meta.push({
		name: 'theme-color',
		content: "#6699ee"
	})

	head.meta.push({
		name: 'og:image',
		content: 'https://minet.co/lens/lens.png'
	})

	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout)
}
