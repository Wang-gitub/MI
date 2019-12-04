import Vue from 'vue'

import App from './App.vue'
import router from './router'
import Rem from './common/rem'

import Vant from 'vant'
import "vant/lib/index.css"
import "./assets/resetVui.css"
Vue.use(Vant)

Vue.prototype.rems=Rem
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
