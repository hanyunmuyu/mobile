import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home/Home'
import School from '@/page/school/School'
import Message from '@/page/message/Message'
import Explore from '@/page/explore/Explore'
import Account from '@/page/account/Account'
import User from '@/page/account/User'
import Login from '@/page/account/Login'
import Register from '@/page/account/Register'
import Search from '@/page/search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/explore',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/user',
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
    }
  ]
})
