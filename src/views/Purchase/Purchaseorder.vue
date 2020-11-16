<template>
    <div class="marh">
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
    入库状态<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>入库状态</el-dropdown-item>
    <el-dropdown-item>已作废</el-dropdown-item>
    <el-dropdown-item>待入库</el-dropdown-item>
    <el-dropdown-item>部分入库</el-dropdown-item>
    <el-dropdown-item>已入库</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
<el-input placeholder="请输入供应商名称/编码" v-model="input" class="input-with-select">
      <el-button
        slot="append"
        icon="el-icon-search"
        type="primary"
        @click="openFullScreen2"
        v-loading.fullscreen.lock="fullscreenLoading"
      ></el-button>
</el-input>
<span class="bju">高级搜索</span>
<el-row class="anna">
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
      label="采购编号"
      width="170">
    </el-table-column>
    <el-table-column
      prop="name"
      label="供应商"
      width="150">
    </el-table-column>
    <el-table-column
      prop="province"
      label="采购金额"
      width="100">
    </el-table-column>
    <el-table-column
      prop="zpsl"
      label="采购人员"
      width="120">
    </el-table-column>
     <el-table-column
      prop="miaoshu"
      label="制单人员"
      width="100">
    </el-table-column>
    <el-table-column
      prop="paixu"
      label="制单日期"
      width="220">
    </el-table-column>
    <el-table-column
      prop="cjsj"
      label="审核状态"
      width="150">
    </el-table-column>
    <el-table-column
      prop="lkzt"
      label="入库状态"
      width="130">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="50">
      <template  width="70">
        <el-button type="text" size="small">查看</el-button>
      </template>
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
.marh{
  margin-left: 220px;
  margin-top: 65px;
}
.anna{
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
          input: '',
          fullscreenLoading: false,
          tableData: [{
          date: 'CG2018042810101',
          name: '产品大神供应商',
          province: '10000.00',
          zpsl:'---',
          miaoshu:'syds',
          paixu:'2018-04-28',
          cjsj:'待审核',
          lkzt:'待入库',
        }, {
          date: 'CG2018042810101',
          name: '产品大神供应商',
          province: '10000.00',
          zpsl:'十月大神',
          miaoshu:'syds',
          paixu:'2018-04-28',
          cjsj:'审核失败',
          lkzt:'待入库',
        }, {
          date: 'CG2018042810101',
          name: '产品大神供应商',
          province: '10000.00',
          zpsl: '八月大神',
          miaoshu:'syds',
          paixu:'2018-04-28',
          cjsj:'审核成功',
          lkzt:'待入库',
        }, {
          date: 'CG2018042810101',
          name: '产品大神供应商',
          province: '10000.00',
          zpsl: '八月大神',
          miaoshu:'syds',
          paixu:'2018-04-28',
          cjsj:'审核成功',
          lkzt:'已作废',
        }, {
          date: 'CG2018042810101',
          name: '产品大神供应商',
          province: '10000.00',
          zpsl: '八月大神',
          miaoshu:'syds',
          paixu:'2018-04-28',
          cjsj:'审核成功',
          lkzt:'已作废',
        }, {
          date: 'CG2018042810101',
          name: '产品大神供应商',
          province: '10000.00',
          zpsl: '八月大神',
          miaoshu:'syds',
          paixu:'2018-04-28',
          cjsj:'审核成功',
          lkzt:'已作废',
        }, {
          date: 'CG2018042810101',
          name: '产品大神供应商',
          province: '10000.00',
          zpsl: '八月大神',
          miaoshu:'syds',
          paixu:'2018-04-28',
          cjsj:'审核成功',
          lkzt:'已作废',
        }, {
          date: 'CG2018042810101',
          name: '产品大神供应商',
          province: '10000.00',
          zpsl: '八月大神',
          miaoshu:'syds',
          paixu:'2018-04-28',
          cjsj:'审核成功',
          lkzt:'已作废',
        }, {
          date: 'CG2018042810101',
          name: '产品大神供应商',
          province: '10000.00',
          zpsl: '八月大神',
          miaoshu:'syds',
          paixu:'2018-04-28',
          cjsj:'审核成功',
          lkzt:'已作废',
        }]
      }
    }
  }
</script>