<template>
<div>
    <div class="box1">
      <el-input placeholder="请输入品牌名称/编码" v-model="input3" class="input-with-select">
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
  <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>

<el-dialog title="商品品牌-新增/编辑" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="*编码" :label-width="formLabelWidth">
    <el-input placeholder="00010" v-model="input" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="*名称" :label-width="formLabelWidth">
    <el-input v-model="input" placeholder="盐津铺子"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="open">保 存</el-button>
  </div>
</el-dialog>
    </el-row>
    <template class="a">
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="序号"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="编码"
      width="450">
    </el-table-column>
    <el-table-column
      prop="province"
      label="品牌名称"
      width="450">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="190">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
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
          date: '1',
          name: '000000',
          province: '无品牌',
        }, {
          date: '2',
          name: '000001',
          province: '中华香烟',
        }, {
          date: '3',
          name: '000002',
          province: '徐福记',
        }, {
          date: '4',
          name: '000003',
          province: '娃哈哈',
        }, {
          date: '5',
          name: '000004',
          province: '欧莱雅',
        },{
          date: '6',
          name: '000005',
          province: '维达',
        },{
          date: '7',
          name: '000006',
          province: '苏泊尔',
        }]
      }
    }
  }

</script>