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
        path: 'home',
        name: 'home',
        component: () => import('../src/views/Home')

      },{
        path: 'mall',
        name: 'mall',
        component: () => import('../src/views/mall')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../src/views/about')
      },
      {
        path: 'page1',
        name: 'page1',
        component: () => import('../src/views/pageOne')
      },
      {
        path: 'page2',
        name: 'page2',
        component: () => import('../src/views/pageTwo')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../src/views/login')
  }

]

export default new VueRouter({
  mode: 'history',
  routes
})

