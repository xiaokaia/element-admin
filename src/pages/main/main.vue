<template>
  <div>
    <div class="food-list">
      <ul>
        <li v-for="(food, index) in foods" :key="index" @click="getFoodDet(index)">{{ food.name }}</li>
      </ul>
    </div>
    <food ref="fooddesc" :selectedIndex="selectedIndex"></food>
    <shopcart></shopcart>
  </div>
</template>
<script type="text/ecmascript-6">
import {mapState} from 'Vuex'
 import food from '../food/food.vue';
 import shopcart from '../shopcart/shopcart.vue';
 export default{
    data(){
      return {
        selectedIndex: -1,
      }
    },
    computed: {
      ...mapState(['foods'])
    },
    mounted() {
    },
    methods: {
      getFoodDet(id){
        this.selectedIndex = id;
        this.$refs.fooddesc.show();
      },
    },
    components:{
      food,
      shopcart
    }
 }
 </script>
 <style rel="stylesheet/scss" lang="scss" scoped>
   .food-list{
     position: relative;
     text-align:left
   }
 </style>

