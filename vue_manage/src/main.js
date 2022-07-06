import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '../router/index.js'
import store from './store'
console.log(store)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  
  render: h => h(App),
  store
}).$mount('#app')
