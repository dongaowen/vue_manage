<template>
  <el-menu default-active="1-4-1" background-color="#545c6d" text-color="#fff" active-text-color="#ffd04b" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <h3>通用后台管理系统</h3>
    <el-menu-item @click="clickMenu(item)" v-for="(item, index) in noChild" :key="index" :index="item.path">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu v-for="item1 in hasChild" :index="item1.icon" :key="item1.path">
      <template slot="title">
        <i :class="'el-icon-' + item1.icon"></i>
      <span slot="title">{{ item1.label }}</span>
      </template>
      <el-menu-item-group v-for="item2 in item1.children" :key="item2.path">
        <el-menu-item :index="item2.path">
          <i :class="'el-icon-' + item2.icon"></i>
          <span slot="title">{{ item2.label }}</span>
        </el-menu-item>
      </el-menu-item-group> 
    </el-submenu>
  </el-menu>
</template>

<script>
 export default {
    data() {
      return {
        menu: [
          {
            path: '/',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: 'Home/Home'
          },
          {
            path: '/mall',
            name: 'mall',
            label: '商品管理',
            icon: 'video-play',
            url: 'MallManage/MallManage'
          },
          {
            path: '/about',
            name: 'about',
            label: '用户管理',
            icon: 'about',
            url: 'UserManage/UserManage'
          },
          {
            label: '其他',
            icon: 'location',
            children: [
              {
                path: '/page1',
                name: 'page1',
                label: '页面1',
                icon: 'setting',
                url: 'Other/PageOne'
              },
              {
                path: '/page2',
                name: 'page2',
                label: '页面2',
                icon: 'setting',
                url: 'Other/PageTwo'
              }
            ]
          }
        ]
      };
    },
    computed: {
      noChild() {
        return this.menu.filter(item => !item.children)
      },
      hasChild()  {
        return this.menu.filter(item => item.children)
      },
      isCollapse() {
        console.log(this)
        return this.$store.state.isCollapse
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item) {
        if (item.name != this.$route.name) {
          this.$router.push(
            {
              name: item.name
            }
          )
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    // min-height: 400px;
    height: 100vh;
  }
  .el-menu-vertical-demo {
    height: 100%;
  }
  .el-menu {
    height: 100%;
    border: none;
    background-color: red;
    h3 {
      color: #fff;
      text-align: center;
      line-height: 48px;
    }
  }
</style>