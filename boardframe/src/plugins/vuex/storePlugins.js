import Vue from 'vue'
import store from '@/plugins/vuex/store'

const storePlugins = {
	install: (Vue, { store }) => {
		if (!store) {
			throw new Error('Please provide vuex store.')
		}

		Vue.prototype.$snackbar = {
			commit(options) {
				store.commit('snackbar', options)
			},
			dispatch(options) {
				return store.dispatch('snackbar', options)
			},
			open(message) {
				return store.dispatch('snackbar', { message })
			},
		}

		Vue.prototype.$alertbar = {
			commit(options) {
				store.commit('alertbar', options)
			},
			dispatch(options) {
				return store.dispatch('alertbar', options)
			},
			confirm(message) {
				return store.dispatch('alertbar', { message, buttons: 2 })
			},
			alert(message) {
				return store.dispatch('alertbar', { message, buttons: 1 })
			},
		}
	},
}

Vue.use(storePlugins, { store })

export default storePlugins
