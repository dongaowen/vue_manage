<template>
  <div class="message">
    <div class="message-header">
      <el-button @click="addUser">+新增</el-button>
      <common-form 
        :formLabel="formLabel"
        :form="searchForm"
        :inline="true"
      >
        <el-button type="primary" @click="getList">搜索</el-button>
      </common-form>
    </div>
    <el-dialog 
      :title="operateType == 'add' ? '新增用户' : '更新用户'"
      :visible.sync="isShow">
      <common-form
        :formLabel="operateFormLabel"
        :form="operateForm"
        :inline="true"
        ref="form"
      >
      </common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @editUser="editUser"
      @delUser="delUser"
      @gitList="gitList"
    ></common-table>
  </div>
</template>

<script>
import CommonForm from '../components/CommonForm.vue'
import CommonTable from '../components/CommonTable.vue';
import { getList } from '../api/about'
export default {
  name: 'about',
  components: {
    CommonForm,
    CommonTable
  },
  data() {
    return {
      isShow: false,
      operateType: 'add',
      operateFormLabel: [
        {
          type: 'date',
          label: '日期',
          model: 'date',
        }
      ],
      operateForm: {
        date: ''
      },
      formLabel: [
        {
          type: 'input',
          label: '',
          model: 'keyword'
        }
      ],
      searchForm: {
        keyword: ''
      },
      tableData: [

      ],
      tableLabel: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'sex',
          label: '性别'
        }
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      }
    }
  },
  methods: {
    addUser() {
      this.isShow = true
      this.operateType = 'add'
    },
    confirm() {
      if (this.operateType = 'add') {
        this.$http.post('', {})
          .then(res => {
            console.log(res);
            thsi.isShow = false
            this.getList()
          })
      } else { 
        this.$http.post()
          .then((res) => {
            console.log(res);
            this.isShow == false
            this.getList()
          })
      }
    },
    editUser(row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = row
    },
    delUser(id) {
      this.$confirm('此操作将永久删除该文件，是否继续？', "提示", {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const { id } = row.id
        this.$http.get('/user', {
          params: { id }
        }).then((res) => {
          this.$message({
            type: 'success',
            massage: '删除成功'
          })
        })

      })
    },
    getList(name = '') {
      this.config.loading = true
      getList({
        page: this.config.page,
        name
      }).then((res) => {
        this.tableData= res.list.map((item) => {
          item.sexBabel = item.sex == 0 ? '女' : '男'
          return item
        })
        this.config.total = res.count
        this.config.loading = false
      })
    }
  },

}
</script>

<style lang="less" scoped>
  .message-header {
    display: flex;
    justify-content: space-between;
  }
</style>