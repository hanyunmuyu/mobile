import Vue from 'vue'
import Router from 'vue-router'

const Explore = resolve => require(['../pages/explore/Explore'], resolve)
const School = resolve => require(['../pages/school/School'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Explore',
      meta: {
        keepAlive: true // 要缓存
      },
      component: Explore
    },
    {
      path: '/school',
      name: 'School',
      meta: {
        keepAlive: true // 要缓存
      },
      component: School
    }
  ]
})
