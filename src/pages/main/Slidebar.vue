<template>
  <aside>
    <el-menu :default-active="path"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"  class="el-menu-vertical-demo"  @open="handleopen" @close="handleclose" @select="handleselect" theme="dark" unique-opened router>
      <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
        <el-submenu  :index="index+''" :data="index+''"  v-if="!item.leaf"><!--多级-->
          <template slot="title" ><i :class="item.iconCls"></i>{{item.name}}</template>
          <el-menu-item v-for="(child,childindex) in item.children" :data="child.path"  :index="child.path" v-if="!child.hidden&&!child.children">{{child.name}}</el-menu-item>
          <el-submenu :index="index+'-'+thirdindex+''"  :data="index+'-'+thirdindex+''" v-if="child.children&&child.children.length>0&&!child.hidden" v-for="(child,thirdindex) in item.children">
            <template slot="title">{{ child.name }}</template>
            <el-menu-item :index="fourth.path" :data="index+'-'+thirdindex+''" v-for="fourth in child.children" v-if="!fourth.hidden">{{ fourth.name }}</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2" v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i class="el-icon-menu"></i>{{ item.name }}</el-menu-item> <!--只有一级-->
        <!--<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>-->
      </template>
    </el-menu>
  </aside>
</template>
<script type="text/ecmascript-6">
 export default{
    data(){
      return {
       path: this.$route.path,
      }
    },
    computed: {
      
    },
    mounted() {
    },
    methods: {
      handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function(a, b) {
      },
    },
    components:{
      
    }
 }
 </script>
 <style rel="stylesheet/scss" lang="scss" scoped>
 </style>

