import Vue from 'vue'
import App from './App.vue'
// import BootstrapVue from 'bootstrap-vue'
import Router from './router'
import Menu from './components/Menu'
import Logi from './components/Logi'
// Vue.use(BootstrapVue)

Vue.component('v-menu', Menu)
Vue.component('v-login', Logi)

new Vue({
  el: '#app',
  Router,
  render: h => h(App)
})
