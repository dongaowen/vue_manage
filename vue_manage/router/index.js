import Vue from "vue";
import VueRouter from 'vue-router'
import Main from '../src/views/Main';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../src/views/home')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../src/views/about')
      }
    ]
  },

]

export default new VueRouter({
  mode: 'history',
  routes
})