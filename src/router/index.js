import Vue from 'vue'
import Router from 'vue-router'

const Explore = resolve => require(['../pages/explore/Explore'], resolve)
const School = resolve => require(['../pages/school/School'], resolve)
const QA = resolve => require(['../pages/qa/Index'], resolve)
const AddAnswerUser = resolve => require(['../pages/qa/AddAnswerUser'], resolve)
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
    },
    {
      path: '/qa',
      name: 'QA',
      meta: {
        keepAlive: true // 要缓存
      },
      component: QA
    },
    {
      path: '/addAnswerUser',
      name: 'QA',
      meta: {
        keepAlive: true // 要缓存
      },
      component: AddAnswerUser
    }
  ]
})
