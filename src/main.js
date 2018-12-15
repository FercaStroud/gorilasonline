import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store'

import 'vue-loaders/dist/vue-loaders.css';
import * as VueLoaders from 'vue-loaders';
import VueResource from 'vue-resource';
import VueMouseParallax from 'vue-mouse-parallax'
import VueParticles from 'vue-particles'
import VueFullPage from 'vue-fullpage.js'

import "@/assets/scss/styles.scss"

Vue.config.productionTip = false

Vue.use(VueFullPage);
Vue.use(VueParticles);
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(VueLoaders);
Vue.use(VueMouseParallax)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
