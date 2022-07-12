<template>
  <div class="login-container">   
    <el-form
      :model="form"
      status-icon
      :rules="rules"
      label-width="100px"
      class="form"
    >
    <h3 class="login-title">登录界面</h3>
      <el-form-item
        label="用户名"
        label-width="80px"
        prop="username"
        class="username"
      >
        <el-input
          type="input"
          v-model="form.username"
          auto-complete="off"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        label-width="80px"
        prop="passward"
        class="passward"
      >
        <el-input
          type="passward"
          v-model="form.passward"
          auto-complete="off"
          placeholder="请输入密码"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-submit" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
        passward: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {
            min: 3,
            message: '用户名长度不能小于3位',
            trigger: "blur"
          }
        ],
        passward: [
          {
            required: true,
            message: '请输入密码',
            trigger: "blur"
          }
        ]
      }
    }
  },
  methods: {
    login() {
      const token = Math.random()
      this.$store.commit('setToken', token)
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style lang="less" scoped>
  .login-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .form {
      width: 350px;
      border: 1px solid #eaeaea;
      border-radius: 15px;
      box-shadow: 0 0 25px #cac6c6;
      background-color: #fff;
      padding: 35px 35px  15px  35px;
    }
  }
  .login-title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .login-submit {
    margin: 10px auto 0px auto ;
  }
</style>