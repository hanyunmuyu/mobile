import Vue from 'vue'
import Router from 'vue-router'
const Explore = resolve => require(['../page/explore/Explore'], resolve)
const ClubActivityDetail = resolve => require(['../page/club/activity/Detail'], resolve)
const SchoolActivityDetail = resolve => require(['../page/activity/school/Detail'], resolve)
const ClassActivityDetail = resolve => require(['../page/activity/class/Detail'], resolve)
const UserActivityDetail = resolve => require(['../page/activity/user/Detail'], resolve)
const UserInfo = resolve => require(['../page/user/Info'], resolve)
const Class = resolve => require(['../page/class/index'], resolve)
const Club = resolve => require(['../page/club/index'], resolve)
const SchoolIndex = resolve => require(['../page/school/index'], resolve)
const Detail = resolve => require(['../page/detail/Detail'], resolve)
const Search = resolve => require(['../page/search/Search'], resolve)
const Register = resolve => require(['../page/account/Register'], resolve)
const Login = resolve => require(['../page/account/Login'], resolve)
const User = resolve => require(['../page/account/User'], resolve)
const Account = resolve => require(['../page/account/Account'], resolve)
const Message = resolve => require(['../page/message/Message'], resolve)
const School = resolve => require(['../page/school/School'], resolve)
const Home = resolve => require(['../page/home/Home'], resolve)

Vue.use(Router)

export default new Router({
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
      path: '/school/:id',
      name: 'SchoolIndex',
      component: SchoolIndex
    },
    {
      path: '/club/:id',
      name: 'Club',
      component: Club
    },
    {
      path: '/class/:id',
      name: 'Class',
      component: Class
    },
    {
      path: '/user/info/:id',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/club/activity/detail/:id',
      name: 'ClubActivityDetail',
      component: ClubActivityDetail
    },
    {
      path: '/activity/school/detail/:id',
      name: 'SchoolActivityDetail',
      component: SchoolActivityDetail
    },
    {
      path: '/activity/class/detail/:id',
      name: 'ClassActivityDetail',
      component: ClassActivityDetail
    },
    {
      path: '/activity/user/detail/:id',
      name: 'UserActivityDetail',
      component: UserActivityDetail
    }
  ]
})
