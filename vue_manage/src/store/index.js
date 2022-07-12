import Vue from "vue";
import Vuex from 'vuex'
import Cookie from 'js-cookie'
// import router from "router";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 控制导航菜单的收缩
    isCollapse: false,  
    // 用于存储面包屑的内容
    tagList: [
      {
        path:'/home',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ],
    currentMenu: null,
    token: '',
    menu: []
  },
  mutations: {
    collapseValue(state) {
      state.isCollapse = !state.isCollapse
    },
    selectMenu(state,  val) {
      if (val.name != 'home') {
        state.currentMenu = val
        const result = state.tagList.findIndex(item => item.name == val.name)
        if (result == -1) {
          state.tagList.push(val)
        } 
      } else {
        state.currentMenu = null
      }
    },
    closeTag(state, tag) {
      state.tagList = state.tagList.filter(item => item.name != tag.name) 
    },
    setToken(state, val) {
      state.token = val
      Cookie.set('token', val)
    },
    clearToken(state) {
      state.token = ''
      Cookie.remove('token')
    },
    getToken(state) {
      state.token = Cookie.get('token') || state.token
    },
    setMenu(state, val) {
      state.menu = val
      Cookie.set('menu', JSON.stringify(val))
    },
    clearMenu(state) {
      state.menu = []
      Cookie.remove('menu')
    },
    addMenu(state, router) {
      if (!Cookie.get('menu')) {
        return
      }
      const menu = JSON.parse(Cookie.get('menu')) 
      state.menu = menu
      const menuArray = []
      state.forEach(item => {
        if (item.children) {
          item.children = item.children.map((item) => { 
            item.component = () => import(`../views/${item.url}`)
            return item 
          })
          menuArray.push(...item.children)
        } else {
          item.component = () => import(`../views/${item.url}`)
          menuArray.push(item)
        }
      });
      menuArray.forEach(item => {
        router.addRoute('Main', item)
      })
    },
  }
})