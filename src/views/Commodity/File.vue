<template>
    <div class="marab">
    <p>
    <el-dropdown>
  <span class="el-dropdown-link">
    全部状态<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>全部状态</el-dropdown-item>
    <el-dropdown-item>上架</el-dropdown-item>
    <el-dropdown-item>下架</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
 <el-dropdown>
  <span class="el-dropdown-link">
    全部类别<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>烟酒糖茶</el-dropdown-item>
    <el-dropdown-item>烟</el-dropdown-item>
    <el-dropdown-item>酒水</el-dropdown-item>
    <el-dropdown-item>饮料</el-dropdown-item>
    <el-dropdown-item>糖果</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
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
    @selection-change="handleSelectionChange">
    <el-table-column
      fixed
      prop="date"
      label="编码"
      width="130">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="220">
    </el-table-column>
    <el-table-column
      prop="province"
      label="单位"
      width="50">
    </el-table-column>
    <el-table-column
      prop="zpsl"
      label="类别"
      width="100">
    </el-table-column>
     <el-table-column
      prop="miaoshu"
      label="零售价"
      width="100">
    </el-table-column>
    <el-table-column
      prop="paixu"
      label="最低销售价"
      width="100">
    </el-table-column>
    <el-table-column
      prop="cjsj"
      label="市场指导价"
      width="150">
    </el-table-column>
    <el-table-column
      prop="lkzt"
      label="成本参考价"
      width="150">
    </el-table-column>
    <el-table-column
      prop="zhuangtai"
      label="状态"
      width="150">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="50">
     <el-tooltip placement="bottom">
  <div slot="content">详情<br/>修改<br/>上架/下架<br/>删除</div>
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
         toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
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
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '包',
          zpsl:'生活用品',
          miaoshu:'8.00',
          paixu:'5.00',
          cjsj:'18.00',
          lkzt:'3.00',
          zhuangtai:'上架',
        }, {
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '包',
          zpsl:'生活用品',
          miaoshu:'8.00',
          paixu:'5.00',
          cjsj:'18.00',
          lkzt:'3.00',
          zhuangtai:'上架',
        }, {
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '包',
          zpsl:'生活用品',
          miaoshu:'8.00',
          paixu:'5.00',
          cjsj:'18.00',
          lkzt:'3.00',
          zhuangtai:'上架',
        }, {
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '包',
          zpsl:'生活用品',
          miaoshu:'8.00',
          paixu:'5.00',
          cjsj:'18.00',
          lkzt:'3.00',
          zhuangtai:'上架',
        }, {
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '包',
          zpsl:'生活用品',
          miaoshu:'8.00',
          paixu:'5.00',
          cjsj:'18.00',
          lkzt:'3.00',
          zhuangtai:'上架',
        }, {
         date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '包',
          zpsl:'生活用品',
          miaoshu:'8.00',
          paixu:'5.00',
          cjsj:'18.00',
          lkzt:'3.00',
          zhuangtai:'上架',
        }, {
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '包',
          zpsl:'生活用品',
          miaoshu:'8.00',
          paixu:'5.00',
          cjsj:'18.00',
          lkzt:'3.00',
          zhuangtai:'上架',
        }, {
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '包',
          zpsl:'生活用品',
          miaoshu:'8.00',
          paixu:'5.00',
          cjsj:'18.00',
          lkzt:'3.00',
          zhuangtai:'上架',
        }, {
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '包',
          zpsl:'生活用品',
          miaoshu:'8.00',
          paixu:'5.00',
          cjsj:'18.00',
          lkzt:'3.00',
          zhuangtai:'上架',
        }]
      }
    }
  }
</script>