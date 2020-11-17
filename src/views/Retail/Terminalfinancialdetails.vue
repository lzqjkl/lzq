<template>
<div class="mark">
    <div class="box1">
      <el-input placeholder="请输入业务单号" v-model="input3" class="input-with-select">
      <el-button
        slot="append"
        icon="el-icon-search"
        type="primary"
        @click="openFullScreen2"
        v-loading.fullscreen.lock="fullscreenLoading"
      ></el-button>
    </el-input>
    
    </div>
    <el-row class="anla">
  <el-button>导出</el-button>
    </el-row>
    <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="门店名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="终端编码"
      width="100">
    </el-table-column>
    <el-table-column
      prop="province"
      label="业务单号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="city"
      label="交易类型"
      width="80">
    </el-table-column>
    <el-table-column
      prop="mdmc"
      label="订单金额"
      width="100">
    </el-table-column>
    <el-table-column
      prop="zdbm"
      label="支付方式"
      width="100">
    </el-table-column>
    <el-table-column
      prop="hyry"
      label="支付金额"
      width="100">
    </el-table-column>
    <el-table-column
      prop="zhuangtai"
      label="收银人员"
      width="100">
    </el-table-column>
    <el-table-column
      prop="czsj"
      label="收银时间"
      width="200">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="对账状态"
      width="100">
      已对账
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>
    </div>
    
</template>

<style>
.mark{
  margin-left: 220px;
  margin-top: 65px;
}
.anla{
    margin-left: 1125px;
    margin-bottom: 10px;
}
.block{
    margin-left: 300px;
}
.box1{
    margin-bottom: -40px;
    width: 300px;
}
</style>
<script>
 export default {
    methods: {
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: '',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      },
        open() {
        this.$alert('操作成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
          }
        });
      },
      handleClick(row) {
        console.log(row);
      }
    },
    data() {
      return {
        fullscreenLoading: false,
        input: '',
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        tableData: [{
          date: '产品大神（幸福店）',
          name: '0001',
          province: 'ZDXS2018042801',
          city: '销售',
          mdmc:'88.00',
          zdbm:'支付宝',
          hyry:'8.00',
          zhuangtai:'syds',
          czsj:'2018-02-28 12:10:12',
        }, {
          date: '产品大神（幸福店）',
          name: '0001',
          province: 'ZDXS2018042801',
          city: '销售',
          mdmc:'88.00',
          zdbm:'微信',
          hyry:'80.00',
          zhuangtai:'syds',
          czsj:'2018-02-28 12:10:12',
        }, {
          date: '产品大神（幸福店）',
          name: '0001',
          province: 'ZDXS2018042801',
          city: '销售',
          mdmc:'68.01',
          zdbm:'抹零',
          hyry:'0.01',
          zhuangtai:'syds',
          czsj:'2018-02-28 12:10:12',
        }, {
          date: '产品大神（幸福店）',
          name: '0001',
          province: 'ZDXS2018042801',
          city: '销售',
          mdmc:'68.00',
          zdbm:'现金',
          hyry:'68.00',
          zhuangtai:'syds',
          czsj:'2018-02-28 12:10:12',
        }, {
          date: '产品大神（幸福店）',
          name: '0001',
          province: 'ZDXS2018042801',
          city: '销售',
          mdmc:'146.00',
          zdbm:'建设银行卡',
          hyry:'146.00',
          zhuangtai:'syds',
          czsj:'2018-02-28 12:10:12',
        }, {
          date: '产品大神（幸福店）',
          name: '0001',
          province: 'ZDXS2018042801',
          city: '销售',
          mdmc:'146.00',
          zdbm:'建设银行卡',
          hyry:'146.00',
          zhuangtai:'syds',
          czsj:'2018-02-28 12:10:12',
        }, {
          date: '产品大神（幸福店）',
          name: '0001',
          province: 'ZDXS2018042801',
          city: '销售',
          mdmc:'146.00',
          zdbm:'建设银行卡',
          hyry:'146.00',
          zhuangtai:'syds',
          czsj:'2018-02-28 12:10:12',
        }, {
          date: '产品大神（幸福店）',
          name: '0001',
          province: 'ZDXS2018042801',
          city: '销售',
          mdmc:'146.00',
          zdbm:'建设银行卡',
          hyry:'146.00',
          zhuangtai:'syds',
          czsj:'2018-02-28 12:10:12',
        }, {
          date: '产品大神（幸福店）',
          name: '0001',
          province: 'ZDXS2018042801',
          city: '销售',
          mdmc:'146.00',
          zdbm:'建设银行卡',
          hyry:'146.00',
          zhuangtai:'syds',
          czsj:'2018-02-28 12:10:12',
        }, {
          date: '产品大神（幸福店）',
          name: '0001',
          province: 'ZDXS2018042801',
          city: '销售',
          mdmc:'146.00',
          zdbm:'建设银行卡',
          hyry:'146.00',
          zhuangtai:'syds',
          czsj:'2018-02-28 12:10:12',
        }]
      }
    }
  }

</script>