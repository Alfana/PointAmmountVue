import Vue from 'vue'
import Index from './view/Index'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(Index)
}).$mount('#app')
