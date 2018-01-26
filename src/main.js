// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Vuetify from 'vuetify'


Vue.use(VueAxios, axios)
Vue.use(Vuetify)

Vue.axios.defaults.baseURL = 'http://localhost:8000'

Vue.config.productionTip = false
Vue.router = router

/* eslint-disable no-new */

Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  rolesVar: 'type'
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
