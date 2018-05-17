import Vue from 'vue'
import Router from 'vue-router'

const Explore = resolve => require(['../pages/explore/Explore'], resolve)
const Detail = resolve => require(['../pages/explore/Detail'], resolve)
const School = resolve => require(['../pages/school/School'], resolve)
const SchoolSearch = resolve => require(['../pages/school/Search'], resolve)
const SchoolDetail = resolve => require(['../pages/school/Detail'], resolve)
const QAAdd = resolve => require(['../pages/qa/Add'], resolve)
const QAIndex = resolve => require(['../pages/qa/Index'], resolve)
const AddAnswerUser = resolve => require(['../pages/qa/AddAnswerUser'], resolve)
const ClubIndex = resolve => require(['../pages/club/Index'], resolve)
const ClubCreate = resolve => require(['../pages/club/Create'], resolve)
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
      path: '/explore/detail',
      name: 'Detail',
      meta: {
        keepAlive: true // 要缓存
      },
      component: Detail
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
      path: '/school/search',
      name: 'SchoolSearch',
      meta: {
        keepAlive: true // 要缓存
      },
      component: SchoolSearch
    },
    {
      path: '/school/detail',
      name: 'SchoolDetail',
      meta: {
        keepAlive: true // 要缓存
      },
      component: SchoolDetail
    },
    {
      path: '/qa/add',
      name: 'QAAdd',
      meta: {
        keepAlive: true // 要缓存
      },
      component: QAAdd
    },
    {
      path: '/addAnswerUser',
      name: 'QA',
      meta: {
        keepAlive: true // 要缓存
      },
      component: AddAnswerUser
    },
    {
      path: '/qa/index',
      name: 'QAIndex',
      meta: {
        keepAlive: true // 要缓存
      },
      component: QAIndex
    },
    {
      path: '/club/index',
      name: 'ClubIndex',
      meta: {
        keepAlive: false // 要缓存
      },
      component: ClubIndex
    },
    {
      path: '/club/create',
      name: 'ClubCreate',
      meta: {
        keepAlive: false // 要缓存
      },
      component: ClubCreate
    }
  ]
})
