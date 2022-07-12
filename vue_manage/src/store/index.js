import Vue from "vue";
import Vuex from 'vuex'
import Cookie from 'js-cookie'
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
    token: ''
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
    }
  }
})