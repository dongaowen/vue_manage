<template>
  <div class="common-table">
    <el-table
      :data="data"
      v-loading="config.loading"
    >
      <el-table-column
        v-for="item in label"
        :key="item.prop"
        show-overflow-tooltip
        :label="item.label"
        :width="item.width ? item.width : 125"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button  button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
        
      </el-table-column>
    </el-table>
    <el-pagination
      class="pager"
      layout="prev, pager, next"
      :total="config.total"
      :current-page.sync="config.page"
      @current-change="changePage"
      :page-size="20"
    >

    </el-pagination>
  </div>
</template>

<script>
import { Row } from 'element-ui'
export default {
  name: 'CommonTable',
  props: {
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    tableLabel: {
      type: Array,
      default: () => {
        return []
      }
    },
    config: {
      type: Array,
      default: () => ({})
    }
  },
  data() {
    return {
      data: [],
      label: [],
      config: {
        total: 100,
        page: 20
      }
    }
  },
  watch: {
    tableData: {
      handler() {
        this.initData()
      },
      immediate: true
    },
    tableLabel: {
      handler() {
        this.initData()
      }
    }
  },
  methods: {
    initData() {
      console.log(this.tableData, this.tableLabel);
      this.data = this.tableData
      this.label = this.tableLabel
    },
    handleEdit(row) {
      this.emit('editUser', row)
    },
    handleDelete(row) {
      this.emit('delUser', row)
    },
    changePage(page) {
      this.emit('getList', page)
    }
  }
}
</script>

<style lang="less">
  .common-table {
    height: calc(100% - 64px);
    background-color: #fff;
    position: relative;
    .pager {
      position: absolute;
      right: 20px;
      bottom: 0;
    }
  }
</style>