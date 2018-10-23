import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isAdmin: false
}

const mutations = {
  login (state) {
    state.isAdmin = true
  },
  logout (state) {
    state.isAdmin = false
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions: {

  }
})
