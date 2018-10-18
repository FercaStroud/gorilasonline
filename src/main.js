// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store'

import 'vue-loaders/dist/vue-loaders.css';
import * as VueLoaders from 'vue-loaders';
import VueResource from 'vue-resource';

Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(VueLoaders);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, store,
  components: { App },
  template: '<App/>',
})
