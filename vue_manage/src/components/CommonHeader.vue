<template>
  <div class="header">
    <div class="l-header">
      <el-button plain icon="el-icon-menu" size="mini" @click="handleCollapse"></el-button>
      <h3 style="color: #fff; display: inline-block; margin: 0; margin-left: 20px">首页</h3>
    </div>
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

<style lang="less" scoped>
  .header {
    line-height: 60px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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