import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		snackbar: {},
		alertbar: {},
	},

	mutations: {
		snackbar(state, payload) {
			state.snackbar = payload
		},
		alertbar(state, payload) {
			state.alertbar = payload
		},
	},

	actions: {
		snackbar(context, payload) {
			return new Promise((resolve, reject) => {
				context.commit('snackbar', payload)
				let interval = setInterval(() => {
					let promise = context.state.snackbar.promise
					if ('resolve' == promise) {
						resolve(context.state.snackbar)
						clearInterval(interval)
					} else if ('reject' == promise) {
						reject(context.state.snackbar)
						clearInterval(interval)
					}
				}, 500)
			})
		},
		alertbar(context, payload) {
			return new Promise((resolve, reject) => {
				context.commit('alertbar', payload)
				let interval = setInterval(() => {
					let promise = context.state.alertbar.promise
					if ('resolve' == promise) {
						resolve(context.state.alertbar)
						clearInterval(interval)
					} else if ('reject' == promise) {
						reject(context.state.alertbar)
						clearInterval(interval)
					}
				}, 500)
			})
		},
	},
	
	modules: {},
})
