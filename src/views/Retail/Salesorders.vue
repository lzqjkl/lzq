<template>
<div>
    <div class="box1">
      <el-input placeholder="请输入商店名称/编码" v-model="input3" class="input-with-select">
      <el-button
        slot="append"
        icon="el-icon-search"
        type="primary"
        @click="openFullScreen2"
        v-loading.fullscreen.lock="fullscreenLoading"
      ></el-button>
    </el-input>
    
    </div>
    <el-row class="anla">
  <el-button>导出</el-button>

<el-dialog title="商品类别-新增/编辑" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="上级级别" :label-width="formLabelWidth">
    <el-input placeholder="所有类别" v-model="input" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="*编码" :label-width="formLabelWidth">
    <el-input placeholder="05" v-model="input" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="*名称" :label-width="formLabelWidth">
    <el-input v-model="input" placeholder="家电数码"></el-input>
    </el-form-item>
    <el-form-item label="排序" :label-width="formLabelWidth">
    <el-input v-model="input" placeholder="0"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="open">确 定</el-button>
  </div>
</el-dialog>
    </el-row>
    <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="订单号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="下单时间"
      width="170">
    </el-table-column>
    <el-table-column
      prop="province"
      label="手机会员"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="定点金额"
      width="80">
    </el-table-column>
    <el-table-column
      prop="mdmc"
      label="门店名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="zdbm"
      label="终端编码"
      width="100">
    </el-table-column>
    <el-table-column
      prop="hyry"
      label="收银人员"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zhuangtai"
      label="状态"
      width="140">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">详细</el-button>
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
.anla{
    margin-left: 1125px;
    margin-bottom: 10px;
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
          text: '',
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
          date: 'ZDXS20180428102401',
          name: '2018-04-24 10:24:01',
          province: '18888888888',
          city: '880.00',
          mdmc:'产品大神（幸福店）',
          zdbm:'001',
          hyry:'syds',
          zhuangtai:'交易完成',
        }, {
          date: 'ZDXS20180428102401',
          name: '2018-04-24 10:24:01',
          province: '---',
          city: '2880.00',
          mdmc:'产品大神（幸福店）',
          zdbm:'001',
          hyry:'syds',
          zhuangtai:'交易完成',
        }, {
          date: 'ZDXS20180428102401',
          name: '2018-04-24 10:24:01',
          province: '18888888888',
          city: '880.00',
          mdmc:'产品大神（幸福店）',
          zdbm:'001',
          hyry:'syds',
          zhuangtai:'交易完成',
        }, {
          date: 'ZDXS20180428102401',
          name: '2018-04-24 10:24:01',
          province: '---',
          city: '880.00',
          mdmc:'产品大神（幸福店）',
          zdbm:'001',
          hyry:'syds',
          zhuangtai:'交易完成',
        }, {
          date: 'ZDXS20180428102401',
          name: '2018-04-24 10:24:01',
          province: '18888888888',
          city: '880.00',
          mdmc:'产品大神（幸福店）',
          zdbm:'001',
          hyry:'syds',
          zhuangtai:'交易完成',
        }, {
          date: 'ZDXS20180428102401',
          name: '2018-04-24 10:24:01',
          province: '---',
          city: '880.00',
          mdmc:'产品大神（幸福店）',
          zdbm:'001',
          hyry:'syds',
          zhuangtai:'交易完成',
        }, {
          date: 'ZDXS20180428102401',
          name: '2018-04-24 10:24:01',
          province: '18888888888',
          city: '880.00',
          mdmc:'产品大神（幸福店）',
          zdbm:'001',
          hyry:'syds',
          zhuangtai:'交易完成',
        }, {
          date: 'ZDXS20180428102401',
          name: '2018-04-24 10:24:01',
          province: '---',
          city: '880.00',
          mdmc:'产品大神（幸福店）',
          zdbm:'001',
          hyry:'syds',
          zhuangtai:'交易完成',
        }, {
          date: 'ZDXS20180428102401',
          name: '2018-04-24 10:24:01',
          province: '18888888888',
          city: '880.00',
          mdmc:'产品大神（幸福店）',
          zdbm:'001',
          hyry:'syds',
          zhuangtai:'交易完成',
        }, {
          date: 'ZDXS20180428102401',
          name: '2018-04-24 10:24:01',
          province: '---',
          city: '880.00',
          mdmc:'产品大神（幸福店）',
          zdbm:'001',
          hyry:'syds',
          zhuangtai:'交易完成',
        }]
      }
    }
  }

</script>