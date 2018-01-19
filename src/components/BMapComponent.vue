<template>
  <div id="allmap" v-bind:style="mapStyle"></div>
</template>
<script type="text/ecmascript-6">
 export default{
    props:{
      // 地图在该视图上的高度
      mapHeight:{
        type:Number,
        default:500
      },
      // 经度
      longitude:{
        type:Number,
        default:116.404
      },
      // 纬度
      latitude:{
        type:Number,
        default:39.915
      },
      description:{
        type:String,
        default:'天安门'
      }
    },
    data(){
      return {
        mapStyle:{
          width:'100%',
          height:this.mapHeight +'px'
        },
        location:{
          lang:116.404,
          lat:39.915
        },
        opts:{
          width :250,
          height:75,
          title :"地址：",
        },
        point:Object,
        marker:Object,
        currentAddress:'',
      }
    },
    computed: {

    },
    mounted() {
      let _this = this;
      let map = new BMap.Map("allmap");//初始化地图
      this.point = new BMap.Point(this.location.lang,this.location.lat);//根据经纬度设置一个点
      let marker = new BMap.Marker(this.point);
      map.addOverlay(marker);//添加标注点
      map.centerAndZoom(this.point,15);//根据地点设置初始化地图
      map.addEventListener("click",function(e){
        _this.showInfo(e,map);
      });
      map.enableScrollWheelZoom(true);
    },
    methods: {
      /**
       *adds : 省市区
       */
      getArearAddress(add,adds){
        if(add != this.currentAddress){//避免监听重复执行
          let _this = this;
          let map = new BMap.Map("allmap");
          let newadd = add;
          if(adds != '' && adds!= undefined){
            newadd = adds.concat(add);
          }
          this.getLocalInfo(add,map,newadd);//查询地址详情
          map.centerAndZoom(newadd,15);
          map.addEventListener("click",function(e){
            _this.showInfo(e,map);
          });
        }
      },
      showInfo(e,maps){
        //获取地名
        this.isClick = true;//点击地图
        let _this = this;
        let gc = new BMap.Geocoder();
        gc.getLocation(e.point, function(rs){
          _this.currentAddress = rs.address;
          _this.$emit('getLocationInfo', e.point.lng,e.point.lat,rs.address);//回传
        })
        //新增标注点
        let marker = new BMap.Marker(e.point);
        maps.clearOverlays();//清除所有标注点
        maps.addOverlay(marker);//添加新标注点
      },
      getLocalInfo(add,maps,newadd){
        let _this = this;
        let localSearch = new BMap.LocalSearch(newadd,{
          renderOptions:{
              map: maps,
              //panel: "results",//结果容器id
              autoViewport: true,   //自动结果标注
              selectFirstResult: true, //指定到第一个目标
              enableRouteSearchBox: true,
              enableRouteInfo:true
          },
          pageCapacity: 1
        });
        localSearch.setSearchCompleteCallback(function (searchResult) {//回调
          if(searchResult.wr.length){
            let gc = new BMap.Geocoder();
            _this.currentAddress = searchResult.keyword;
            _this.$emit('getLocationInfo', searchResult.wr[0].point.lng,searchResult.wr[0].point.lat);//回传
          }
    　　});
        localSearch.search(newadd);
      }
    },
    components:{

    }
 }
 </script>
