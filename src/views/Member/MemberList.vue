<template>
    <div class="marab">
    <p>
<el-input placeholder="请输入商品名称/编号" v-model="input" class="input-with-select">
      <el-button
        slot="append"
        icon="el-icon-search"
        type="primary"
        @click="openFullScreen2"
        v-loading.fullscreen.lock="fullscreenLoading"
      ></el-button>
</el-input>
<span class="bju">高级搜索</span>
<el-row class="anjiana">
  <el-button>导出</el-button>
      <el-button type="primary">新增</el-button>
    </el-row>
</p>
  <template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange" border>
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="会员账号"
      width="140">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="发卡门店"
      width="150">
    </el-table-column>
    <el-table-column
      prop="address"
      label="手机号码"
      width="150">
    </el-table-column>
    <el-table-column
      prop="leibie"
      label="可用积分"
      width="120">
    </el-table-column>
    <el-table-column
      prop="lingshojia"
      label="储值账户余额"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zuidisj"
      label="累计消费金额"
      width="120">
    </el-table-column>
    <el-table-column
      prop="shiczdj"
      label="累计消费次数"
      width="120">
    </el-table-column>
    <el-table-column
      prop="cbckj"
      label="最后消费日期"
      width="160">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="50">
      <el-tooltip placement="bottom">
  <div slot="content">详情<br/>启用/禁用<br/>设置登录密码<br/>设置支付密码</div>
  <el-button style="border: none;padding: 0px 0px;"> ...</el-button>
</el-tooltip>
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
.marab{
  margin-left: 220px;
  margin-top: 65px;
}
.el-card__body {
    width: 100px;
}
.el-card {
    width: 1188px;
}
.anjiana{
  margin-left: 1050px;
  margin-top: -50px;
}
.input-with-select{
  margin: 5px;
}
.el-dropdown-link{
  margin: 5px;
}
.bju{
  margin: 5px;
}
.input-with-select{
  width: 300px;
}
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-col-20 {
    width: 83.33333%;
    position: absolute;
    z-index: 999;
}
</style>
<script>
export default {
     methods: {
       handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      },
       handleClick(row) {
        console.log(row);
      }
    },
      data() {
      return {
        drawer: false,
        direction: 'ttb',
          input: '',
          fullscreenLoading: false,
          tableData: [{
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          leibie:'88',
          lingshojia:'0.00',
          zuidisj:'88.00',
          shiczdj:'4',
          cbckj:'2018-04-28',
        }, {
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          leibie:'88',
          lingshojia:'0.00',
          zuidisj:'88.00',
          shiczdj:'4',
          cbckj:'2018-04-28',
        }, {
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          leibie:'88',
          lingshojia:'0.00',
          zuidisj:'88.00',
          shiczdj:'4',
          cbckj:'2018-04-28',
        }, {
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          leibie:'88',
          lingshojia:'0.00',
          zuidisj:'88.00',
          shiczdj:'4',
          cbckj:'2018-04-28',
        }, {
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          leibie:'88',
          lingshojia:'0.00',
          zuidisj:'88.00',
          shiczdj:'4',
          cbckj:'2018-04-28',
        }, {
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          leibie:'88',
          lingshojia:'0.00',
          zuidisj:'88.00',
          shiczdj:'4',
          cbckj:'2018-04-28',
        }, {
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          leibie:'88',
          lingshojia:'0.00',
          zuidisj:'88.00',
          shiczdj:'4',
          cbckj:'2018-04-28',
        }, {
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          leibie:'88',
          lingshojia:'0.00',
          zuidisj:'88.00',
          shiczdj:'4',
          cbckj:'2018-04-28',
        }, {
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          leibie:'88',
          lingshojia:'0.00',
          zuidisj:'88.00',
          shiczdj:'4',
          cbckj:'2018-04-28',
        }, {
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          leibie:'88',
          lingshojia:'0.00',
          zuidisj:'88.00',
          shiczdj:'4',
          cbckj:'2018-04-28',
        }],
        multipleSelection: []
      }
    }
  }
</script>