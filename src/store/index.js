import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  count: 1,
  loading: false,
  footerActive: 'explore',
  token: localStorage.getItem('token'),
  isShowFooter: true
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
    state.token = null
  }
}
const getters = {
  footerActive: (state) => {
    return state.footerActive
  },
  token: () => {
    return localStorage.getItem('token')
  },
  isShowFooter: (state) => {
    return state.isShowFooter
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations
})
