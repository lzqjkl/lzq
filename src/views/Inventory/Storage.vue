<template>
    <div>
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
<el-row class="anjiana">
  <el-button>导出</el-button>
  <router-link to="/newchudan">
      <el-button type="primary">新增</el-button>
  </router-link>
      
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
      label="入库单号"
      width="170">
    </el-table-column>
    <el-table-column
      prop="name"
      label="入库门店"
      width="150">
    </el-table-column>
    <el-table-column
      prop="province"
      label="入库类型"
      width="150">
    </el-table-column>
    <el-table-column
      prop="zpsl"
      label="入库数量"
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
.anjiana{
  margin-left: 1050px;
  margin-top: -40px;
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