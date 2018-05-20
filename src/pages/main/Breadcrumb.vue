<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index">
        <span v-if="index == $route.matched.length-1" class="no-redirect">{{ item.name }}</span>
        <router-link v-else :to="item.redirect||item.path">{{ item.name }}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
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
     
    },
    components:{
      
    }
 }
 </script>
 <style rel="stylesheet/scss" lang="scss" scoped>
 .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
 </style>

