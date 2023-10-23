import Vue from 'vue'
import vuetify from './plugins/vuetify'
import main from "@/main.vue";

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(main)
}).$mount('#app')
