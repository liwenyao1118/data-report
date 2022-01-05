import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/elementui.js'
import '@/assets/base.css'
import '@/assets/echarts.css'
import * as Echarts from 'echarts'
// Vue.prototype.$echarts = Echarts
// 引入vue-echarts
import vueEcharts from 'vue-echarts'
// 全局注册组件
Vue.component('vue-echarts', vueEcharts)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
