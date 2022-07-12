<template>
  <div class="container">
    <el-container>
      <!-- 侧边导航栏 -->
      <el-aside width="auto" class="aside">
        <common-aside></common-aside>
      </el-aside>
        <el-container class="right-container" style="height: 100%">
          <!-- 头部 -->
        <el-header class="el-header">
          <common-header></common-header>
        </el-header>
        <!-- tag -->
        <common-tag></common-tag>
        <!-- 主要部分 -->
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
import CommonTag from '../components/CommonTag.vue'
export default {
  name: 'Main',
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
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