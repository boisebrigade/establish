import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isAdmin: true,
  isUser: true,
  categories: null,
  resources: null
}

const mutations = {
  login (state) {
    state.isUser = true
  },
  logout (state) {
    state.isUser = false
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions: {}
})
