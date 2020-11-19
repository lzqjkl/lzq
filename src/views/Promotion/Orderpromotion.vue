<template>
    <div class="maraba">
    <p>
    <el-dropdown>
  <span class="el-dropdown-link">
    促销状态<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>审核状态</el-dropdown-item>
    <el-dropdown-item>待促销</el-dropdown-item>
    <el-dropdown-item>促销中</el-dropdown-item>
    <el-dropdown-item>已暂停</el-dropdown-item>
    <el-dropdown-item>已结束</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
<el-input placeholder="请输入促销编号" v-model="input" class="input-with-select">
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
  <el-button class="daochua">导出</el-button>
  <a @click="open">
      <el-button type="primary" class="daochuab">新增</el-button>
      </a>
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
      label="促销编码"
      width="170">
    </el-table-column>
    <el-table-column
      prop="name"
      label="促销门店"
      width="150">
    </el-table-column>
    <el-table-column
      prop="province"
      label="促销日期"
      width="250">
    </el-table-column>
    <el-table-column
      prop="zpsl"
      label="制单人员"
      width="150">
    </el-table-column>
     <el-table-column
      prop="miaoshu"
      label="审核日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="paixu"
      label="审核状态"
      width="120">
    </el-table-column>
    <el-table-column
      prop="cjsj"
      label="促销状态"
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
.maraba{
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
.daochua{
  margin-right: 10px;
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
      },
      open(){
        this.$router.push({ path: '/neworderpromotion'})
      }
    },
      data() {
      return {
        drawer: false,
        direction: 'ttb',
          input: '',
          fullscreenLoading: false,
          tableData: [{
          date: 'DB2018042810101',
          name: '产品大神（幸福店）',
          province: '2018-04-28 ~  2018-05-28',
          zpsl:'syds',
          miaoshu:'2018-04-28',
          paixu:'待审核',
          cjsj:'待促销',
        }, {
          date: 'DB2018042810101',
          name: '产品大神（幸福店）',
          province: '2018-04-28 ~  2018-05-28',
          zpsl:'syds',
          miaoshu:'2018-04-28',
          paixu:'待审核',
          cjsj:'待促销',
        }, {
          date: 'DB2018042810101',
          name: '产品大神（幸福店）',
          province: '2018-04-28 ~  2018-05-28',
          zpsl:'syds',
          miaoshu:'2018-04-28',
          paixu:'待审核',
          cjsj:'待促销',
        }, {
         date: 'DB2018042810101',
          name: '产品大神（幸福店）',
          province: '2018-04-28 ~  2018-05-28',
          zpsl:'syds',
          miaoshu:'2018-04-28',
          paixu:'待审核',
          cjsj:'待促销',
        }, {
          date: 'DB2018042810101',
          name: '产品大神（幸福店）',
          province: '2018-04-28 ~  2018-05-28',
          zpsl:'syds',
          miaoshu:'2018-04-28',
          paixu:'待审核',
          cjsj:'待促销',
        }, {
         date: 'DB2018042810101',
          name: '产品大神（幸福店）',
          province: '2018-04-28 ~  2018-05-28',
          zpsl:'syds',
          miaoshu:'2018-04-28',
          paixu:'待审核',
          cjsj:'待促销',
        }, {
         date: 'DB2018042810101',
          name: '产品大神（幸福店）',
          province: '2018-04-28 ~  2018-05-28',
          zpsl:'syds',
          miaoshu:'2018-04-28',
          paixu:'待审核',
          cjsj:'待促销',
        }, {
         date: 'DB2018042810101',
          name: '产品大神（幸福店）',
          province: '2018-04-28 ~  2018-05-28',
          zpsl:'syds',
          miaoshu:'2018-04-28',
          paixu:'待审核',
          cjsj:'待促销',
        }, {
          date: 'DB2018042810101',
          name: '产品大神（幸福店）',
          province: '2018-04-28 ~  2018-05-28',
          zpsl:'syds',
          miaoshu:'2018-04-28',
          paixu:'待审核',
          cjsj:'待促销',
        }]
      }
    }
  }
</script>