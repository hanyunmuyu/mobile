// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import MuseUI from 'muse-ui'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'muse-ui/dist/muse-ui.css'
import 'animate.css'
import api from './api'
import 'reset.css'
FastClick.attach(document.body)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios = axios
Vue.prototype.$api = api

Vue.use(MuseUI)

Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/images/dog.gif',
  loading: '../static/images/dog.gif',
  attempt: 1
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
