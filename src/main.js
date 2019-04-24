import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { vsIcon, vsRow, vsCol, vsPopup, vsNavbar } from 'vuesax'
import VueFullPage from 'vue-fullpage.js'

import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'
import '@/assets/styles/global.scss'

Vue.use(VueFullPage)
Vue.use(vsIcon)
Vue.use(vsRow)
Vue.use(vsNavbar)
Vue.use(vsCol)
Vue.use(vsPopup)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
