<template>
  <div class="tags">
    <el-tag 
      v-for="(item, index) in tagList" 
      :key="item.name" size="mini" 
      :closable="item.name !== 'home'" 
      :effect="$route.name == item.name ? 'dark': 'plain'"
      @click="handleClick(item)"
      @close="handleClose(item, index)"
      >{{ item.label }}</el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CommonTag',
  computed: {
    ...mapState(['tagList'])
  },
  methods: {
    ...mapMutations(['closeTag']),
    handleClick(item) {
      this.$router.push({
        name: item.name
      })
    },
    handleClose(tag, index) {
      const length = this.tagList.length - 1
      this.closeTag(tag)
      if (tag.name !== this.$route.name) {
        return
      }
      if (index == length) {
        this.$router.push(this.tagList[index - 1])
      } else {
        this.$router.push(this.tagList[index])
      }
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
  .tags {
    padding: 20px;
    .el-tag {
      margin-right: 20px;
    }
  }
</style>