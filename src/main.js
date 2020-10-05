import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/skeleton.css'
import '~/assets/css/global.css'

export default function (Vue, { router, head, isClient }) {
	head.meta.push({
		name: 'keywords',
		content: "MINET, Lens, MIS, Mother's, Mothers, Mother, International, School"
	})

	head.meta.push({
		name: 'theme-color',
		content: "#6699ee"
	})

	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout)
}