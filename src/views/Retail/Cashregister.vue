<template>
  <div class="mark">
    <ul class="cc">
      <li>
        <el-dropdown>
          <span class="ABC">
            按日汇总
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>按日汇总</el-dropdown-item>
            <el-dropdown-item>按月汇总</el-dropdown-item>
            <el-dropdown-item>按年汇总</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li>
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
      </li>
    </ul>

    <el-row class="anla">
      <el-button>导出</el-button>
    </el-row>
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="日期" width="100"></el-table-column>
        <el-table-column prop="name" label="支付宝笔数" width="100"></el-table-column>
        <el-table-column prop="province" label="支付宝金额" width="150"></el-table-column>
        <el-table-column prop="city" label="微信笔数" width="100"></el-table-column>
        <el-table-column prop="mdmc" label="微信金额" width="100"></el-table-column>
        <el-table-column prop="zdbm" label="银行卡笔数" width="100"></el-table-column>
        <el-table-column prop="hyry" label="银行卡金额" width="100"></el-table-column>
        <el-table-column prop="zhuangtai" label="现金笔数" width="100"></el-table-column>
        <el-table-column prop="czsj" label="现金金额" width="145"></el-table-column>
        <el-table-column prop="mlbs" label="抹零笔数" width="100"></el-table-column>
        <el-table-column prop="mlje" label="抹零金额" width="100"></el-table-column>
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
.anla {
  margin-left: 1125px;
  margin-bottom: 10px;
}
.block {
  margin-left: 300px;
}
.box1 {
  margin-bottom: -40px;
  width: 300px;
}
.cc li{
  float: left;
  list-style: none;
  margin-right: 10px;
}
.cc li:nth-child(1){
  padding-top: 10px;
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
      tableData: [
        {
          date: "汇总",
          name: "122",
          province: "13232.00",
          city: "89",
          mdmc: "8888.00",
          zdbm: "12",
          hyry: "1028.00",
          zhuangtai: "13",
          czsj: "228.00",
          mlbs:"13",
          mlje:"0.16",
        },
        {
          date: "2018-04-28",
          name: "10",
          province: "888.00",
          city: "8",
          mdmc: "688.00",
          zdbm: "2",
          hyry: "68.00",
          zhuangtai: "3",
          czsj: "58.00",
          mlbs:"3",
          mlje:"0.05",
        },
        {
          date: "2018-04-27",
          name: "10",
          province: "888.00",
          city: "8",
          mdmc: "688.00",
          zdbm: "2",
          hyry: "68.00",
          zhuangtai: "3",
          czsj: "58.00",
          mlbs:"3",
          mlje:"0.05",
        },
        {
          date: "2018-04-27",
          name: "10",
          province: "888.00",
          city: "8",
          mdmc: "688.00",
          zdbm: "2",
          hyry: "68.00",
          zhuangtai: "3",
          czsj: "58.00",
          mlbs:"3",
          mlje:"0.05",
        },
        {
          date: "2018-04-27",
          name: "10",
          province: "888.00",
          city: "8",
          mdmc: "688.00",
          zdbm: "2",
          hyry: "68.00",
          zhuangtai: "3",
          czsj: "58.00",
          mlbs:"3",
          mlje:"0.05",
        },
        {
          date: "2018-04-27",
          name: "10",
          province: "888.00",
          city: "8",
          mdmc: "688.00",
          zdbm: "2",
          hyry: "68.00",
          zhuangtai: "3",
          czsj: "58.00",
          mlbs:"3",
          mlje:"0.05",
        },
        {
          date: "2018-04-27",
          name: "10",
          province: "888.00",
          city: "8",
          mdmc: "688.00",
          zdbm: "2",
          hyry: "68.00",
          zhuangtai: "3",
          czsj: "58.00",
          mlbs:"3",
          mlje:"0.05",
        },
        {
          date: "2018-04-27",
          name: "10",
          province: "888.00",
          city: "8",
          mdmc: "688.00",
          zdbm: "2",
          hyry: "68.00",
          zhuangtai: "3",
          czsj: "58.00",
          mlbs:"3",
          mlje:"0.05",
        },
        {
          date: "2018-04-27",
          name: "10",
          province: "888.00",
          city: "8",
          mdmc: "688.00",
          zdbm: "2",
          hyry: "68.00",
          zhuangtai: "3",
          czsj: "58.00",
          mlbs:"3",
          mlje:"0.05",
        },
        {
          date: "2018-04-27",
          name: "10",
          province: "888.00",
          city: "8",
          mdmc: "688.00",
          zdbm: "2",
          hyry: "68.00",
          zhuangtai: "3",
          czsj: "58.00",
          mlbs:"3",
          mlje:"0.05",
        }
      ]
    };
  }
};
</script>