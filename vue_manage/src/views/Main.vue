<template>
  <div class="container">
    <el-container>
      <el-aside width="auto" class="aside">
        <common-aside></common-aside>
      </el-aside>
        <el-container class="right-container" style="height: 100%">
        <el-header class="el-header">
          <common-header></common-header>
        </el-header>
        <el-main  class="el-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue';
export default {
  name: 'Main',
  components: {
    CommonAside,
    CommonHeader
  }
}
</script>

<style lang="less" scoped>
  .container {
    height: 100%;
    .aside {
      // position: fixed;
      height: 100%;
      top: 0;
      bottom: 0;
    }
    .right-container {
      min-height: 100%;
    }
  }
  .el-header {
    background-color: #333;
    margin: 0;
  }

</style>