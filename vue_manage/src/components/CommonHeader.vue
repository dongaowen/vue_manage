<template>
  <div class="header" style="height: 100%">
    <div class="l-header">
      <el-button plain icon="el-icon-menu" size="mini" @click="handleCollapse"></el-button>
      <h3 style="color: #fff; display: inline-block; margin: 0; margin-left: 20px">首页</h3>
    </div>
    <div class="r-header">
      <el-dropdown  trigger="click" szie="mini">
        <span>
          <img :src="userImage" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-itme>个人中心</el-dropdown-itme>
          <el-dropdown-itme>退出</el-dropdown-itme>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style>
  .header {
    line-height: 60px;
    height: 60px;
    display: flex;
  }
</style>