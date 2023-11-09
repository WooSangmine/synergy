import Vue from 'vue'
import main from '@/main.vue'

import router from '@/plugins/router'
import vuetify from '@/plugins/vuetify'

import '@/plugins/axios'
import '@/plugins/moment'
import '@/plugins/vuex/storePlugins.js'
import store from "@/plugins/vuex/store";

Vue.config.productionTip = false

new Vue({
	vuetify,
	router,
	store,
	render: h=> h(main),
}).$mount('#app')
