<template>
  <div class="header">
    <!-- 控制导航菜单收缩的图标 -->
    <div class="l-header">
      
        <el-button plain icon="el-icon-menu" size="mini" @click="handleCollapse"></el-button>
      <!-- <h3 style="color: #fff; display: inline-block; margin: 0; margin-left: 20px">首页</h3> -->
      <!-- 面包屑 -->
      <div style="display: inline-block; margin-left: 10px">
        <el-breadcrumb separator="/" class="breadcrumb" style="float: left">
        <el-breadcrumb-item v-for="item in tagList" :key="item.name" :to="{path: item.path}">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
      </div>
      
    </div>
    <!-- 用户头像和下拉菜单 -->
    <div class="r-header">
      <el-dropdown class="dropdown" trigger="click" size="mini">
        <span >
          <img class="img" :src="userImage" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'CommonHeader',
  data() {
    return {
      userImage: require('../assets/zhizhu.png')
    }
  },
  methods: {
    handleCollapse() {
      this.$store.commit('collapseValue')
    }
  },
  computed: {
    ...mapState(['tagList'])
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
  .header {
    line-height: 60px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /deep/ .el-breadcrumb__inner {
        color: aliceblue;
      }
      /deep/ .el-breadcrumb__inner is-link {
        color: red;
      }
    
  }

      

  .r-header {
    box-sizing: content-box;
    display: flex;
    align-items: center;
    height: 60px;
    width: 40px;

  }
  .img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .dropdown {
    height: 40px;
  }
</style>