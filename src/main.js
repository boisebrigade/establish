import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import responsive from 'vue-responsive'
Vue.use(responsive)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import firebase from 'firebase/app'
import VueFire from 'vuefire'
import 'firebase/firestore'
Vue.use(VueFire)

firebase.initializeApp({
  projectId: 'establish-rescuemanual',
  databaseURL: 'https://establish-rescuemanual.firebaseio.com',
  apiKey: "AIzaSyCyN6-yuvZ8zM2B6nyu6uM9LyKpDv6xFZM",
  projectId: "establish-rescuemanual",
  storageBucket: "establish-rescuemanual.appspot.com",
  messagingSenderId: "770231305115"
})

export const db = firebase.firestore()

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
