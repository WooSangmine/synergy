import Vue from 'vue'
import main from '@/main.vue'

import './plugins/axios'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import '@/plugins/moment'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(main)
}).$mount('#app')
