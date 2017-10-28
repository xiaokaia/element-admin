<template>
  <div>
    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
      <el-tab-pane
        :key="item.name"
        v-for="(item,index) in editableTabs"
        :label="item.title"
        :name="item.name"
      >
        <el-form  ref="item.shareProfitConfigDet" class="base-form" :model="item.shareProfitConfigDet" label-width="160px" style="width: 100%">
            <el-row style="margin-top: 10px">
              <el-form-item label="字段1" style="width: 400px;" prop="monthSerialTotalCount">
                <el-input v-model.number="item.shareProfitConfigDet.monthSerialTotalCount" type="number" onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" placeholder=">=0"></el-input>
              </el-form-item>
              <el-form-item label="字段2" style="width: 400px;" prop="monthSpClause">
                <el-input v-model.number="item.shareProfitConfigDet.monthSpClause" type="number" onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" placeholder=">=0"></el-input>
              </el-form-item>
            </el-row>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <el-button type="primary" style="width: 120px;float: left"  @click="saveInfo">保存</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      editableTabsValue: '1',
      tabIndex: 1,
      editableTabs: [{
        title: '阶梯1',
        name: '1',
        shareProfitConfigDet: {
          monthSerialTotalCount: '',//月流水次数
          monthSpClause: '',//月分润条件 AND:并 OR：或
          creditCardRate: '',//货记卡费率
          debitCardTopAmount: '',//借记卡封顶金额
          debitCardTradeTopAmount: '',//借记卡封顶交易额
          debitCardTradeTopRate: '',//借记卡封顶交易额率
          rateList: [
            {
              paymentSceneCode: 4,//pos扫码
              paymentTypeCode: 2,
              rate: 0,
              rateId: '',
              ruleId: '',
            },
            {
              paymentSceneCode: 4,
              paymentTypeCode: 1,
              rate: 0,
              rateId: '',
              ruleId: '',
            },
            {
              paymentSceneCode: 5,//h5在线支付
              paymentTypeCode: 2,
              rate: 0,
              rateId: '',
              ruleId: '',
            },
            {
              paymentSceneCode: 5,
              paymentTypeCode: 1,
              rate: 0,
              rateId: '',
              ruleId: '',
            },
            {
              paymentSceneCode: 11,//app支付
              paymentTypeCode: 2,
              rate: 0,
              rateId: '',
              ruleId: '',
            },
            {
              paymentSceneCode: 11,
              paymentTypeCode: 1,
              rate: 0,
              rateId: '',
              ruleId: '',
            }
          ],
          index: '',//后台必传字段，序号。默认0
          shareType: '' //关联外部shareType
        }
      }],
    }
  },
  methods:{
    saveInfo(){

    },
    handleTabsEdit(targetName, action) {//增减table
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: '阶梯' + newTabName,
            name: newTabName,
            shareProfitConfigDet: {
              monthSerialTotalAmount: '',//月流水总额
              monthSerialTotalCount: '',//月流水次数
              monthSpClause: '',//月分润条件 AND:并 OR：或
              creditCardRate: '',//货记卡费率
              debitCardTopAmount: '',//借记卡封顶金额
              debitCardTradeTopAmount: '',//借记卡封顶交易额
              debitCardTradeTopRate: '',//借记卡封顶交易额率
              rateList: [
                {
                  paymentSceneCode: 4,//pos扫码
                  paymentTypeCode: 2,
                  rate: 0,
                  rateId: '',
                  ruleId: '',
                },
                {
                  paymentSceneCode: 4,
                  paymentTypeCode: 1,
                  rate: 0,
                  rateId: '',
                  ruleId: '',
                },
                {
                  paymentSceneCode: 5,//h5在线支付
                  paymentTypeCode: 2,
                  rate: 0,
                  rateId: '',
                  ruleId: '',
                },
                {
                  paymentSceneCode: 5,
                  paymentTypeCode: 1,
                  rate: 0,
                  rateId: '',
                  ruleId: '',
                },
                {
                  paymentSceneCode: 11,//app支付
                  paymentTypeCode: 2,
                  rate: 0,
                  rateId: '',
                  ruleId: '',
                },
                {
                  paymentSceneCode: 11,
                  paymentTypeCode: 1,
                  rate: 0,
                  rateId: '',
                  ruleId: '',
                }
              ],
              shareType: '' //关联外部shareType
            }
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          if(this.tabIndex === 1){
            this.$message.warning('必须存在一个阶梯模板');
            return false;
          }else{
            //删除数据
            this.editableTabs.splice(this.tabIndex,1);
          }
          let tabs = this.editableTabs;
          this.editableTabs.splice(this.tabIndex,1);
          this.tabIndex--;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
          }
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }

      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
