import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  count: 1,
  loading: false,
  footerActive: 'home',
  token: null
}
const mutations = {
  add (state) {
    state.count += 1
  },
  reduce (state) {
    state.count -= 1
  }
}
const getters = {
  footerActive: (state) => {
    return state.footerActive
  },
  token: () => {
    return localStorage.getItem('token')
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations
})
