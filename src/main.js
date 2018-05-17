// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'muse-ui/dist/muse-ui.css'
import 'reset.css'

FastClick.attach(document.body)
Vue.use(MuseUI)
// 懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/images/dog.gif',
  loading: '../static/images/dog.gif',
  attempt: 2,
  listenEvents: [ 'scroll' ]
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
