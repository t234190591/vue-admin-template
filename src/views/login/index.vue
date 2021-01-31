<template>
  <login-container>
    <el-form
      class="login-form-pd"
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
    >
      <el-form-item prop="user">
        <el-input
          class="login-input"
          prefix-icon="el-icon-user"
          @keyup.enter.native="handleLogin('loginForm')"
          v-model="loginForm.user"
          placeholder="用户名"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          class="login-input"
          type="password"
          prefix-icon="el-icon-lock"
          @keyup.enter.native="handleLogin('loginForm')"
          v-model="loginForm.password"
          placeholder="密码"
        />
      </el-form-item>
      <el-row class="right">
        <el-link type="danger">忘记密码？</el-link>
      </el-row>
      <el-row class="row-margin center">
        <el-button
          type="primary"
          @click="handleLogin('loginForm')"
          class="width-50"
        >
          登 录
        </el-button>
      </el-row>
      <el-row class="row-margin center">
        <el-button
          type="primary"
          @click="handleRegister()"
          class="width-50"
        >
          注 册
        </el-button>
      </el-row>
    </el-form>
  </login-container>
</template>

<script>
import LoginContainer from '@components/login-container'
import Cookie from 'js-cookie'

export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        user: '',
        password: ''
      },
      rules: {
        user: [
          { required: true, message: '请出入用户名' },
          { min: 5, message: '长度不少于5个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请出入密码' },
          { min: 5, message: '长度不少于6个字符', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    handleLogin(form) {
      this.$refs[form].validate(async ret => {
        if (ret) {
          let res = await this.$axios({
            url: '/user/login',
            method: 'post',
            data: {
              username: this.loginForm.user,
              password: this.loginForm.password
            }
          });

          if (res.code == 0) {
            Cookie.set('hasLogin', true)
            this.$nextTick(() => {
              this.$router.push('/');
            });
          }
        }
      });
    },

    handleRegister() {
      this.$nextTick(() => {
        this.$router.push('/register');
      });
    }
  },
  components: { LoginContainer }
}
</script>

<style lang="scss" scoped>
  .right {
    text-align: right;
  }
</style>