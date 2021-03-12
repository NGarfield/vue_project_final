import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
import 'popper.js';
import 'bootstrap';
// import axios from 'axios'
// import VueAxios from 'vue-axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
