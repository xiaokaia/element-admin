<template>
  <div class="main-wrapper">
    <div class="navbar-wrapper">
      <Navbar></Navbar>
    </div>
    <div class="main">
      <div class="menu">
        <Slidebar :routes="routes"></Slidebar>
      </div>
      <div class="content-container">
        <el-col class="breadcrumb-container">
          <Breadcrumb></Breadcrumb>
        </el-col>
        <el-col class="content-wrapper">
          <transition>
            <router-view></router-view>
          </transition>
        </el-col>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
 import Navbar from './Navbar';
 import Breadcrumb  from './Breadcrumb';
 import Slidebar  from './Slidebar';
 import store from '@/store'
 export default{
    data(){
      return {

      }
    },
    computed: {
      routes() {
        return store.getters.routers
      }
    },
    mounted() {
    },
    methods: {

    },
    components:{
      Navbar,
      Breadcrumb,
      Slidebar
    }
 }
 </script>
 <style rel="stylesheet/scss" lang="scss" scoped>
   @import "src/styles/mixin.scss";
   .main-wrapper{
     position: absolute;
     width: 100%;
     top:0;
     bottom:0;
     .main{
       position: absolute;
       overflow-y: auto;
       width:100%;
       bottom: 0px;
       top:50px;
       .menu{
         width: 200px;
         height: 100%;
         position: fixed;
         top: 50px;
         left: 0;
         z-index: 1001;
         overflow-y: auto;
         background-color: rgb(84, 92, 100);
       }
      .content-container{
        background: #fff;
        position: absolute;
        left: 200px;
        right:0;
        color: #1f2d3d;
        .breadcrumb-container{
          background: #fafafa;
          border-bottom: 1px solid #dddddd;
          height: 40px;
          line-height: 40px;
          padding-left: 10px;
        }
        .content-wrapper{
          padding: 15px 15px;
        }
      }
     }
   }
 </style>

