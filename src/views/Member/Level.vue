<template>
<div class="lebe">
    <div class="box1">
      <el-input placeholder="请输入类别名称/编码" v-model="input3" class="input-with-select">
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="openFullScreen2"
        v-loading.fullscreen.lock="fullscreenLoading"
      ></el-button>
    </el-input>
    </div>
    <el-row class="anlb">
        <router-link to="/Category">
  <el-button class="zuoq" type="primary" @click="dialogFormVisible = true">新增</el-button>
  </router-link>
    </el-row>
    <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="编码"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="等级名称"
      width="220">
    </el-table-column>
    <el-table-column
      prop="province"
      label="所需经验值"
      width="219">
    </el-table-column>
    <el-table-column
      prop="city"
      label="会员特价"
      width="219">
    </el-table-column>
    <el-table-column
      prop="jfbs"
      label="积分倍数"
      width="219">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button type="text" size="small">修改</el-button>
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
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
.zuoq{
  margin-left: 1100px;
}
.block{
    margin-left: 300px;
}
.box1{
    margin-bottom: -40px;
    width: 300px;
}
.lebe{
  float:right;
  margin-left: 220px;
  margin-top: 65px;
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
          date: '01',
          name: '注册会员',
          province: '0',
          city: '不支持',
          jfbs:'1.0',
        }, {
          date: '02',
          name: '白银会员',
          province: '500',
          city: '支持',
          jfbs:'1.2',
        }, {
          date: '03',
          name: '黄金会员',
          province: '2000',
          city: '支持',
          jfbs:'1.5',
        }, {
          date: '04',
          name: '钻石会员',
          province: '10000',
          city: '支持',
          jfbs:'2.0',
        }],
      }
    }
  }

</script>