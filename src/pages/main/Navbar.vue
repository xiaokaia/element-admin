<template>
  <div class="navbar">
    <el-col :span="4">
      <h3 class="fl title">后台demo</h3>
    </el-col>
    <div class="fr">
      <el-col class="userinfo">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner">欢迎，13113348809&nbsp;&nbsp;&nbsp;&nbsp;<i data-v-4109359a="" class="el-icon-caret-bottom"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
			</el-col>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
 export default{
    data(){
      return {
      }
    },
    computed: {

    },
    mounted() {
    },
    methods: {
     logout(){

     }
    },
    components:{

    }
 }
 </script>
 <style rel="stylesheet/scss" lang="scss" scoped>
   .navbar{
     width:100%;
     z-index: 1000;
     position: fixed;
     height: 50px;
     line-height: 50px;
     background: rgb(84, 92, 100);
     color: #ffffff;
     padding: 0px 10px 0px 10px;
     .title{
       padding: 0;
       margin: 0;
     }
     .userinfo{
       .el-dropdown{
         color: #ffffff;
       }
     }
   }
 </style>

