import Vue from 'vue'
import main from '@/main.vue'

import router from '@/plugins/router'
import vuetify from '@/plugins/vuetify'
import '@/plugins/axios'
import '@/plugins/moment'

Vue.config.productionTip = false

new Vue({
	vuetify,
	router,
	render: (h) => h(main),
}).$mount('#app')
