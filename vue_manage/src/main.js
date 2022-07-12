import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '../router/index.js'
import store from './store/index.js'
import axios from 'axios'
import * as echarts from 'echarts'

Vue.prototype.$http = axios
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.token
  if (!token && to.name !== 'login') {
    next({name: 'login'})
  } else {
    next()
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
