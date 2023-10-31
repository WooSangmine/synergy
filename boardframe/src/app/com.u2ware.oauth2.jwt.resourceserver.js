import Vue from 'vue'

const baseUrl = process.env.VUE_APP_RESOURCES

export default {
	powers: {
		create() {},
		read(headers) {
			return Vue.axios({
				headers,
				url: `${baseUrl}/powers`,
				method: 'GET',
			})
		},
		update() {},
		delete() {},
		search() {},
	},
}
