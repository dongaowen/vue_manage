<template>
  <div>
    <el-form ref="form" label-width="100px" :model="form1" :inline="inline1">
      <el-form-item 
        v-for="(item, index) in formLabel1"
        :key="index"
        :label="item.label"
      >
        <el-input
          v-if="item.type == 'input'"
          :placeholder="'请输入' + item.label"
          v-model="form1[item.model]"
        ></el-input>
        <el-switch v-if="item.type == 'switch'" v-model="form1[item.model]"></el-switch>
        <!-- <el-date-picker 
          v-if="item.type == 'date'"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
          v-model="form1[item.model]"
          ></el-date-picker> -->
          <el-select v-if="item.type == 'select'" placeholder="请选择" v-model="form1[item.model]">
            <el-option
              v-for="opt in opts"
              :key="opt.value"
              :label="opt.label"
              :value="opt.value"
            ></el-option>
          </el-select>
      </el-form-item>
      <slot></slot>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CommonForm',
  props: {
    formLabel: Array,
    form: Object,
    inline: Boolean
  },
  data() {
    return {
      formLabel1: [],
      form1: {},
      inline1: true
    }
  },
  methods: {
    initData() {
      this.formLabel1 = this.formLabel
      this.form1 = this.form
      this.inline1 = this.inline
    }
  },
  mounted() {
    this.initData()
  },
}
</script>

<style>

</style>