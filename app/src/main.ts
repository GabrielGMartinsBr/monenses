import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import '@/base/filters/base-filters'
import '@/base/validations'

import router from '@/router'
import App from '@/App.vue'

import './styles/styles.scss'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
