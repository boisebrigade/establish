import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto'
import responsive from 'vue-responsive'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(VueScrollTo)
Vue.use(responsive)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
