<template>
  <div class="mark">
        <div class="box1">
          <el-input placeholder="2018-01-01 ~ 2018-04-04" v-model="input3" class="input-with-select">
            <el-button
              slot="append"
              icon="el-icon-search"
              type="primary"
              @click="openFullScreen2"
              v-loading.fullscreen.lock="fullscreenLoading"
            ></el-button>
          </el-input>
        </div>

    <el-row class="anlaaa">
      <el-button>导出</el-button>
      <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
    </el-row>
    <template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="会员卡号"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="发卡门店"
      width="120">
    </el-table-column>
    <el-table-column
      name="address"
      label="手机号码"
      width="120">
    </el-table-column>
    <el-table-column
      name="keyongjf"
      label="可用积分"
      width="120">
    </el-table-column>
    <el-table-column
      name="chuzhizhyy"
      label="储值账户余额"
      width="120">
    </el-table-column>
    <el-table-column
      name="jlxfje"
      label="累计消费金额"
      width="120">
    </el-table-column>
    <el-table-column
      name="jlsfcs"
      label="累计消费次数"
      width="120">
    </el-table-column>
    <el-table-column
      name="zhxfrq"
      label="最后消费日期"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="50">
      <el-tooltip placement="bottom">
  <div slot="content">详情<br/>启用/禁用<br/>设置登录密码<br/>设置支付密码</div>
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
          :total="400"
        ></el-pagination>
      </div>
    </template>
  </div>
</template>

<style>
.ABC{
  position: relative;
  margin-left: -40px;
}
.mark {
  margin-left: 220px;
  margin-top: 65px;
}
.anlaaa {
  margin-left: 1050px;
  margin-bottom: 10px;
}
.block {
  margin-left: 300px;
}
.box1 {
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
        text: "",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
    open() {
      this.$alert("操作成功", "提示", {
        confirmButtonText: "确定",
        callback: action => {}
      });
    },
    handleClick(row) {
      console.log(row);
    }
  },
  data() {
    return {
      fullscreenLoading: false,
      input: "",
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      tableData: [{
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          keyongjf:'88',
          chuzhizhyy:'0.00',
          jlxfje:'88.00',
          jlsfcs:'4',
          zhxfrq:'2018-04-28',
        }, {
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          keyongjf:'88',
          chuzhizhyy:'0.00',
          jlxfje:'88.00',
          jlsfcs:'4',
          zhxfrq:'2018-04-28',
        }, {
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          keyongjf:'88',
          chuzhizhyy:'0.00',
          jlxfje:'88.00',
          jlsfcs:'4',
          zhxfrq:'2018-04-28',
        }, {
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          keyongjf:'88',
          chuzhizhyy:'0.00',
          jlxfje:'88.00',
          jlsfcs:'4',
          zhxfrq:'2018-04-28',
        }, {
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          keyongjf:'88',
          chuzhizhyy:'0.00',
          jlxfje:'88.00',
          jlsfcs:'4',
          zhxfrq:'2018-04-28',
        }, {
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          keyongjf:'88',
          chuzhizhyy:'0.00',
          jlxfje:'88.00',
          jlsfcs:'4',
          zhxfrq:'2018-04-28',
        }, {
          date: '8888 8888 8888',
          name: '产品大神（幸福店）',
          address: '18888888888',
          keyongjf:'88',
          chuzhizhyy:'0.00',
          jlxfje:'88.00',
          jlsfcs:'4',
          zhxfrq:'2018-04-28',
        }],
        multipleSelection: []
    };
  }
};
</script>