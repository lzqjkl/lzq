<template>
<div class="marja">
    <div class="box1">
      <el-input placeholder="请输入供应商名称/编码" v-model="input3" class="input-with-select">
      <el-button
        slot="append"
        icon="el-icon-search"
        type="primary"
        @click="openFullScreen2"
        v-loading.fullscreen.lock="fullscreenLoading"
      ></el-button>
    </el-input>
    </div>
    <el-row class="anjian">
  <el-button class="daochua">导出</el-button>
  <a @click="open">
      <el-button type="primary">新增</el-button>
      </a>
    </el-row>
    <template class="a">
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="编码"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="供应商名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="province"
      label="联系人"
      width="100">
    </el-table-column>
    <el-table-column
      prop="zpsl"
      label="联系电话"
      width="150">
    </el-table-column>
     <el-table-column
      prop="miaoshu"
      label="所属区域"
      width="200">
    </el-table-column>
    <el-table-column
      prop="paixu"
      label="详细地址"
      width="220">
    </el-table-column>
    <el-table-column
      prop="cjsj"
      label="状态"
      width="100">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template  width="70">
        <el-button type="text" size="small">查看</el-button>
        <el-button  type="text" size="small">修改</el-button>
        <el-button type="text" size="small">删除</el-button>
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
.marja{
  margin-left: 220px;
  margin-top: 65px;
}
.anjian{
    margin-left: 1050px;
    margin-bottom: 15px;
}
.daochua{
  margin-right: 10px;
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
        this.$router.push({ path: '/Newsuppliers'})
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
          date: '001',
          name: '产品大神供应商',
          province: '十月大神',
          zpsl:'18888888888',
          miaoshu:'广东省/广州市/天河区',
          paixu:'幸福村幸福街18号',
          cjsj:'正常',
        }, {
          date: '001',
          name: '产品大神供应商',
          province: '十月大神',
          zpsl:'18888888888',
          miaoshu:'广东省/广州市/天河区',
          paixu:'幸福村幸福街18号',
          cjsj:'正常',
        }, {
          date: '001',
          name: '产品大神供应商',
          province: '十月大神',
          zpsl:'18888888888',
          miaoshu:'广东省/广州市/天河区',
          paixu:'幸福村幸福街18号',
          cjsj:'正常',
        }, {
          date: '001',
          name: '产品大神供应商',
          province: '十月大神',
          zpsl:'18888888888',
          miaoshu:'广东省/广州市/天河区',
          paixu:'幸福村幸福街18号',
          cjsj:'正常',
        }, {
          date: '001',
          name: '产品大神供应商',
          province: '十月大神',
          zpsl:'18888888888',
          miaoshu:'广东省/广州市/天河区',
          paixu:'幸福村幸福街18号',
          cjsj:'正常',
        }, {
          date: '001',
          name: '产品大神供应商',
          province: '十月大神',
          zpsl:'18888888888',
          miaoshu:'广东省/广州市/天河区',
          paixu:'幸福村幸福街18号',
          cjsj:'正常',
        }, {
          date: '001',
          name: '产品大神供应商',
          province: '十月大神',
          zpsl:'18888888888',
          miaoshu:'广东省/广州市/天河区',
          paixu:'幸福村幸福街18号',
          cjsj:'正常',
        }]
      }
    }
  }

</script>