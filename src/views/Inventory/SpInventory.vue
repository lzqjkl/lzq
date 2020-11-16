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
   <el-dropdown-item>全部状态</el-dropdown-item>
    <el-dropdown-item>其他入库</el-dropdown-item>
    <el-dropdown-item>采购入库</el-dropdown-item>
    <el-dropdown-item>调拔入库</el-dropdown-item>
    <el-dropdown-item>盘盈入库</el-dropdown-item>
    <el-dropdown-item>销售退货入库</el-dropdown-item>
    <el-dropdown-item>其他出库</el-dropdown-item>
    <el-dropdown-item>采购退货出库</el-dropdown-item>
    <el-dropdown-item>调拔出库</el-dropdown-item>
    <el-dropdown-item>盘亏出库</el-dropdown-item>
    <el-dropdown-item>积分兑换出库</el-dropdown-item>
    <el-dropdown-item>销售出库</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
<el-input placeholder="请输入商品名称/编码" v-model="input" class="input-with-select">
      <el-button
        slot="append"
        icon="el-icon-search"
        type="primary"
        @click="openFullScreen2"
        v-loading.fullscreen.lock="fullscreenLoading"
      ></el-button>
</el-input>
<span class="bju">高级搜索</span>
<el-row class="daochua">
  <el-button>导出</el-button>
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
      label="商品编码"
      width="130">
    </el-table-column>
    <el-table-column
      prop="name"
      label="商品名称"
      width="210">
    </el-table-column>
    <el-table-column
      prop="province"
      label="所属门店"
      width="150">
    </el-table-column>
    <el-table-column
      prop="zpsl"
      label="库存上限"
      width="100">
    </el-table-column>
     <el-table-column
      prop="miaoshu"
      label="库存下限"
      width="100">
    </el-table-column>
    <el-table-column
      prop="paixu"
      label="预售数量"
      width="150">
    </el-table-column>
    <el-table-column
      prop="cjsj"
      label="在途数量"
      width="100">
    </el-table-column>
    <el-table-column
      prop="lkzt"
      label="库存数量"
      width="100">
    </el-table-column>
     <el-table-column
      prop="chuku"
      label="可用库存"
      width="80">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="70">
      修改
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
.daochua{
  margin-left: 1130px;
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
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '产品大神（幸福店）',
          zpsl:'---',
          miaoshu:'---',
          paixu:'0',
          cjsj:'0',
          lkzt:'100',
          chuku:'100',
        }, {
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '产品大神（幸福店）',
          zpsl:'---',
          miaoshu:'---',
          paixu:'0',
          cjsj:'0',
          lkzt:'100',
          chuku:'100',
        }, {
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '产品大神（幸福店）',
          zpsl:'---',
          miaoshu:'---',
          paixu:'0',
          cjsj:'0',
          lkzt:'100',
          chuku:'100',
        }, {
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '产品大神（幸福店）',
          zpsl:'---',
          miaoshu:'---',
          paixu:'0',
          cjsj:'0',
          lkzt:'100',
          chuku:'100',
        }, {
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '产品大神（幸福店）',
          zpsl:'---',
          miaoshu:'---',
          paixu:'0',
          cjsj:'0',
          lkzt:'100',
          chuku:'100',
        }, {
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '产品大神（幸福店）',
          zpsl:'---',
          miaoshu:'---',
          paixu:'0',
          cjsj:'0',
          lkzt:'100',
          chuku:'100',
        }, {
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '产品大神（幸福店）',
          zpsl:'---',
          miaoshu:'---',
          paixu:'0',
          cjsj:'0',
          lkzt:'100',
          chuku:'100',
        }, {
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '产品大神（幸福店）',
          zpsl:'---',
          miaoshu:'---',
          paixu:'0',
          cjsj:'0',
          lkzt:'100',
          chuku:'100',
        }, {
          date: '6210000000001',
          name: '清风抽取式面巾纸150抽X2层',
          province: '产品大神（幸福店）',
          zpsl:'---',
          miaoshu:'---',
          paixu:'0',
          cjsj:'0',
          lkzt:'100',
          chuku:'100',
        }]
      }
    }
  }
</script>