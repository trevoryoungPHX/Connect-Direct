// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import {Tabs, Tab} from 'vue-tabs-component';

Vue.use(VueAxios, axios)
Vue.use(Tabs);

Vue.axios.defaults.baseURL = 'http://localhost:8000'

Vue.config.productionTip = false
Vue.router = router

/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
