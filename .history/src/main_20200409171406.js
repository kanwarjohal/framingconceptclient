import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(VueAxios)

Vue.use({
  install (Vue) {
  Vue.prototype.$api = axios.create({
    baseURL: 'http://localhost:8000/api/v1/'
  })
}
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
