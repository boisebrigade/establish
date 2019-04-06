import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isAdmin: true,
  isUser: true,
  entries:[],
  categories: [],
  resources: [],
  counties:[],
  selectedCategories: ["Health"],
  selectedCounty: "Ada"
}

// const actions = {
//   categories(context, exercise){
//     console.log('selecting exercise action, ' + exercise.name)
//     context.commit('selectExercise', exercise);
//   },
//   resources (context, exercise){
//     console.log('selecting exercise action, ' + exercise.name)
//     context.commit('selectExercise', exercise);
//   },
//   counties (context, exercise){
//     console.log('selecting exercise action, ' + exercise.name)
//     context.commit('selectExercise', exercise);
//   },
// },

// const mutations = {
//   login (state) {
//     state.isUser = true
//   },
//   logout (state) {
//     state.isUser = false
//   }
  // categories (state, ) {
  //   state.categories = false
  // }
  // resources (state, ) {
  //   state.categories = false
  // }
  // counties (state, ) {
  //   state.categories = false
  // }

export default new Vuex.Store({
  state
})
