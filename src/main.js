import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/elementui.js'
import '@/assets/base.css'
import * as Echarts from 'echarts'

Vue.prototype.$echarts = Echarts
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
