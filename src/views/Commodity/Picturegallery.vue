<template>
<div class="mard">
   <div class="box1">
      <el-input placeholder="请输入相册名称" v-model="input3" class="input-with-select">
      <el-button
        slot="append"
        icon="el-icon-search"
        type="primary"
        @click="openFullScreen2"
        v-loading.fullscreen.lock="fullscreenLoading"
      ></el-button>
    </el-input>
    </div>
    <el-row class="anl">
  <el-button>导出</el-button>
  <el-button type="primary">新增</el-button>

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
      label="相册名称"
      width="200">
    </el-table-column>
    <el-table-column
      prop="province"
      label="封面"
      width="100">
    </el-table-column>
    <el-table-column
      prop="zpsl"
      label="照片数量"
      width="85">
    </el-table-column>
     <el-table-column
      prop="miaoshu"
      label="描述"
      width="200">
    </el-table-column>
    <el-table-column
      prop="paixu"
      label="排序"
      width="85">
    </el-table-column>
    <el-table-column
      prop="cjsj"
      label="创建时间"
      width="220">
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
.mard{
  margin-left: 220px;
  margin-top: 65px;
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
          date: '1000001',
          name: '家居家纺图片',
          province: '照片',
          zpsl:'100',
          miaoshu:'暂无相册描述信息',
          paixu:'100',
          cjsj:'2018-04-08 16:28:28',
        }, {
          date: '1000001',
          name: '家居家纺图片',
          province: '照片',
          zpsl:'100',
          miaoshu:'暂无相册描述信息',
          paixu:'100',
          cjsj:'2018-04-08 16:28:28',
        }, {
          date: '1000001',
          name: '家居家纺图片',
          province: '照片',
          zpsl:'100',
          miaoshu:'暂无相册描述信息',
          paixu:'100',
          cjsj:'2018-04-08 16:28:28',
        }, {
          date: '1000001',
          name: '家居家纺图片',
          province: '照片',
          zpsl:'100',
          miaoshu:'暂无相册描述信息',
          paixu:'100',
          cjsj:'2018-04-08 16:28:28',
        }, {
          date: '1000001',
          name: '家居家纺图片',
          province: '照片',
          zpsl:'100',
          miaoshu:'暂无相册描述信息',
          paixu:'100',
          cjsj:'2018-04-08 16:28:28',
        }, {
          date: '1000001',
          name: '家居家纺图片',
          province: '照片',
          zpsl:'100',
          miaoshu:'暂无相册描述信息',
          paixu:'100',
          cjsj:'2018-04-08 16:28:28',
        }, {
          date: '1000001',
          name: '家居家纺图片',
          province: '照片',
          zpsl:'100',
          miaoshu:'暂无相册描述信息',
          paixu:'100',
          cjsj:'2018-04-08 16:28:28',
        }]
      }
    }
  }

</script>