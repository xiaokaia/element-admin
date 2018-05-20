<template>
  <div class="login-wrapper">
    <el-form class="card-box login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <i class="fa fa-user user-icon"></i>
        <el-input  type="text" v-model="loginForm.username" autoComplete="on" placeholder="账号/手机号" />
      </el-form-item>

      <el-form-item prop="password">
        <i class="fa fa-lock user-icon"></i>
        <el-input  :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
          placeholder="密码" />
        <span class='show-pwd' @click='showPwd'></span>
      </el-form-item>
      <el-button type="primary" style="width:100%;margin-top:20px;" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
 import { isvalidPhone } from 'utils/validate'
 import { asyncRouterMap } from '../../router' 
 export default{
    data(){
      return {
        loginForm:{
          username:'admin',
          password:'admin',
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur' }],
          password: [{ required: true, trigger: 'blur' }]
        },
        pwdType: 'password',
        loading: false,
        showDialog: false
      }
    },
    computed: {

    },
    mounted() {
      
    },
    methods: {
      showPwd() {
        if(this.pwdType === 'password'){
          this.pwdType = ''
        }else {
          this.pwdType = 'password'
        }
      },
      handleLogin(){
        let _this = this;
        this.$refs.loginForm.validate(valid => {
          if(valid) {
            /*_this.loading = true;
            setTimeout(()=>{
              _this.loading = false;
              this.$store.commit('SET_TOKEN', 'kai');
              sessionStorage.setItem('menus',JSON.stringify(asyncRouterMap));
              this.$router.options.routes = asyncRouterMap;
              this.$router.addRoutes(asyncRouterMap);
              _this.$router.push({ path: '/' });
            },1000)*/
            this.$store.dispatch('Login', this.loginForm).then(() => {
              this.loading = false
              // alert('登录成功')
              localStorage.setItem('ms_username', this.loginForm.username)
              this.$router.push('/about')
            }).catch(() => {
              this.loading = false
            })
          }else{
            return false;
          }
        })
      }
    },
    components:{
     
    }
 }
 </script>
 <style rel="stylesheet/scss" lang="scss" scoped>
   @import "src/styles/mixin.scss";
   .login-wrapper {
     @include relative;
     height: 100vh;
     background-color: #2d3a4b;
     .login-form{
        position: absolute;
        left: 0;
        right: 0;
        width: 400px;
        padding: 35px 35px 15px 35px;
        margin: 120px auto;
        .title{
          font-size: 26px;
          font-weight: 400;
          color: #eee;
          margin: 0px auto 40px auto;
          text-align: center;
          font-weight: bold;
        }
        .user-icon{
          position: absolute;
          font-size: 18px;
          color:#5a5e66;
          z-index: 99;
          left: 10px;
          top:10px;
        }
     }
   }
 </style>

