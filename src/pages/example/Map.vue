<template>
  <div>
    <el-form ref="form"  label-width="160px">
      <el-form-item label="地址：">
        <v-distpicker @selected="onSelected" @province="getProvince" @city="getCity" @area="getArea"  :province="agentParam.province" :city="agentParam.city" :area="agentParam.region"></v-distpicker>
      </el-form-item>
      <el-form-item label="详细地址：">
        <el-input v-model.trim="agentParam.add" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="经纬度：">
        <el-input v-model.lazy="agentParam.longitude" style="width:200px;margin-right:10px;" disabled />
        <el-input v-model.lazy="agentParam.latitude"  style="width:200px;" disabled />
      </el-form-item>
    </el-form>
    <BMapComponent ref="bmap" @getLocationInfo="getLocationInfo"></BMapComponent>
  </div>
</template>
<script type="text/ecmascript-6">
 import BMapComponent from 'components/BMapComponent';
 export default{
    data(){
      return {
        agentParam: {
          province:'山西省',
          city:'大同市',
          region: '矿区',
          add:'',
          longitude:'',
          latitude:''
        }
      }
    },
    computed: {

    },
    watch:{
      agentParam:{
        handler: function (obj){
          if(obj.add){
            let adds = this.agentParam.province + this.agentParam.city + this.agentParam.region;
            this.$refs.bmap.getArearAddress(obj.add,adds);
          }
        },
        deep: true
      },
    },
    mounted() {
    },
    methods: {
      onSelected(data) {
        this.agentParam.province = data.province.value;
        this.agentParam.city = data.city.value;
        this.agentParam.region = data.area.value;
      },
      getProvince(data){
        this.agentParam.province = data.value;
        this.$refs.bmap.getArearAddress(data.value);
      },
      getCity(data){
        this.agentParam.city = data.value;
        this.$refs.bmap.getArearAddress(data.value);
      },
      getArea(data){
        this.agentParam.region = data.value;
        this.$refs.bmap.getArearAddress(data.value);
      },
      getLocationInfo(lng,lat,address){
        this.agentParam.longitude = lng;
        this.agentParam.latitude = lat;
        if(address != '' && address != undefined){
          this.shopInfo.address = address;
        }
      }
    },
    components:{
      BMapComponent
    }
 }
 </script>
 <style rel="stylesheet/scss" lang="scss" scoped>
 </style>

