// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import App from './App'
import Vuex from 'vuex'
Vue.use(Vuex)

import vuexI18n from 'vuex-i18n'

/**
 * you can add your module here
 */
let store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})

Vue.use(vuexI18n.plugin, store)

// plugins
// import { DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin } from 'vux'
// Vue.use(DevicePlugin)
// Vue.use(ToastPlugin)
// Vue.use(AlertPlugin)
// Vue.use(ConfirmPlugin)

const FastClick = require('fastclick')
FastClick.attach(document.body)

// The following line will be replaced with component list by vux-loader
const routes = [
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

