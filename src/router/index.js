import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home/Home'
import School from '@/page/school/School'
import Message from '@/page/message/Message'
import Explore from '@/page/explore/Explore'
import Account from '@/page/account/Account'
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
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
