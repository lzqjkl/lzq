<template>
    <div class="marab">
    <p>
    <el-dropdown>
  <span class="el-dropdown-link">
    审核状态<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>审核状态</el-dropdown-item>
    <el-dropdown-item>待审核</el-dropdown-item>
    <el-dropdown-item>审核失败</el-dropdown-item>
    <el-dropdown-item>审核成功</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
 <el-dropdown>
  <span class="el-dropdown-link">
    出库类型<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
   <el-dropdown-item>入库类型</el-dropdown-item>
    <el-dropdown-item>采购入库</el-dropdown-item>
    <el-dropdown-item>调拔入库</el-dropdown-item>
    <el-dropdown-item>销售退货入库</el-dropdown-item>
    <el-dropdown-item>盘盈入库</el-dropdown-item>
    <el-dropdown-item>其他入库</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
<el-input placeholder="请输入出库单号" v-model="input" class="input-with-select">
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
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="出库单号"
      width="170">
    </el-table-column>
    <el-table-column
      prop="name"
      label="出库门店"
      width="150">
    </el-table-column>
    <el-table-column
      prop="province"
      label="出库类型"
      width="150">
    </el-table-column>
    <el-table-column
      prop="zpsl"
      label="出库数量"
      width="150">
    </el-table-column>
     <el-table-column
      prop="miaoshu"
      label="经办人员"
      width="100">
    </el-table-column>
    <el-table-column
      prop="paixu"
      label="制单人员"
      width="100">
    </el-table-column>
    <el-table-column
      prop="cjsj"
      label="制单日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="lkzt"
      label="审核状态"
      width="150">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="50">
       <el-tooltip placement="bottom">
  <div slot="content">详情<br/>修改<br/>审核<br/>删除</div>
  <el-button style="border: none;    padding: 0px 0px;"> ...</el-button>
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
          date: 'IO2018042810101',
          name: '产品大神（幸福店）',
          province: '其他入库',
          zpsl:'1000',
          miaoshu:'---',
          paixu:'syds',
          cjsj:'2018-04-28',
          lkzt:'审核失败',
        }, {
          date: 'IO2018042810101',
          name: '产品大神（幸福店）',
          province: '其他入库',
          zpsl:'1000',
          miaoshu:'十月大神',
          paixu:'syds',
          cjsj:'2018-04-27',
          lkzt:'审核成功',
        }, {
          date: 'IO2018042810101',
          name: '产品大神（幸福店）',
          province: '其他入库',
          zpsl: '1000',
          miaoshu:'八月大神',
          paixu:'syds',
          cjsj:'2018-04-27',
          lkzt:'待审核',
        }, {
          date: 'IO2018042810101',
          name: '产品大神（幸福店）',
          province: '其他入库',
          zpsl: '1000',
          miaoshu:'八月大神',
          paixu:'syds',
          cjsj:'2018-04-27',
          lkzt:'审核成功',
        }, {
          date: 'IO2018042810101',
          name: '产品大神（幸福店）',
          province: '其他入库',
          zpsl: '1000',
          miaoshu:'---',
          paixu:'syds',
          cjsj:'2018-04-27',
          lkzt:'审核成功',
        }, {
          date: 'IO2018042810101',
          name: '产品大神（幸福店）',
          province: '其他入库',
          zpsl: '1000',
          miaoshu:'八月大神',
          paixu:'syds',
          cjsj:'2018-04-27',
          lkzt:'审核成功',
        }, {
          date: 'IO2018042810101',
          name: '产品大神（幸福店）',
          province: '其他入库',
          zpsl: '1000',
          miaoshu:'八月大神',
          paixu:'syds',
          cjsj:'2018-04-27',
          lkzt:'审核成功',
        }, {
          date: 'IO2018042810101',
          name: '产品大神（幸福店）',
          province: '其他入库',
          zpsl: '1000',
          miaoshu:'八月大神',
          paixu:'syds',
          cjsj:'2018-04-27',
          lkzt:'审核成功',
        }, {
          date: 'IO2018042810101',
          name: '产品大神（幸福店）',
          province: '其他入库',
          zpsl: '1000',
          miaoshu:'八月大神',
          paixu:'syds',
          cjsj:'2018-04-27',
          lkzt:'待审核',
        }]
      }
    }
  }
</script>