import Vue from "vue";
import VueRouter from 'vue-router'
import Main from '../src/views/Main';
import home from '../src/views/home';
import about from '../src/views/about';

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