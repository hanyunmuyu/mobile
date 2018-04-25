import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import School from '@/page/school/School'
import Message from '@/page/message/Message'
import Explore from '@/page/explore/Explore'
import Account from '@/page/account/Account'
import User from '@/page/account/User'
import Login from '@/page/account/Login'
import Register from '@/page/account/Register'
import Search from '@/page/search/Search'
import Detail from '@/page/detail/Detail'
import ShetuanHome from '@/page/shetuan/Home'
import UserInfo from '@/page/user/Info'
import ActivityDetail from '@/page/activity/Detail'
Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉路由地址的#
  routes: [
    {
      path: '/',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/school',
      name: 'School',
      component: School
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/auth/user',
      name: 'User',
      component: User
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/shetuan/:id',
      name: 'ShetuanHome',
      component: ShetuanHome
    },
    {
      path: '/user/info/:id',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/activity/detail',
      name: 'ActivityDetail',
      component: ActivityDetail
    }
  ]
})
