<template>
  <div>
    <el-container style="height: 100%">
      <el-aside width="auto">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
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
  .el-header {
    background-color: #333;
    margin: 0;

  }
  .el-main {
    // padding: 0;
  }
</style>