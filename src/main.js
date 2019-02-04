import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
/*
import "@/assets/css/reset.css"
import "@/assets/css/plugins.css"
import "@/assets/css/style.css"
import "@/assets/scss/styles.scss"

import jq from "@/assets/js/jquery.min.js"
import plugins from "@/assets/js/plugins.js"
import core from "@/assets/js/core.js"
import scripts from "@/assets/js/scripts.js"

Vue.use(jq)
Vue.use(plugins)
Vue.use(core)
Vue.use(scripts)*/

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
