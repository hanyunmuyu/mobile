import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  count: 1,
  loading: false,
  footerActive: 'explore',
  token: localStorage.getItem('token'),
  isShowFooter: true,
  userInfo: {user_name: localStorage.getItem('user_name'), avatar: localStorage.getItem('avatar')}
}
const mutations = {
  add (state) {
    state.count += 1
  },
  reduce (state) {
    state.count -= 1
  },
  logout (state) {
    localStorage.clear()
    state.userInfo = {}
    state.token = null
  },
  login (state, userInfo) {
    state.userInfo = userInfo
    state.token = userInfo.token
  }
}
const getters = {
  footerActive: (state) => {
    return state.footerActive
  },
  token: (state) => {
    return state.token
  },
  isShowFooter: (state) => {
    return state.isShowFooter
  },
  userInfo: (state) => {
    return state.userInfo
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations
})
