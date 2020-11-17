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
      </li>
    </ul>

    <el-row class="anla">
      <el-button>导出</el-button>
    </el-row>
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
        <el-table-column prop="name" label="门店名称" width="200"></el-table-column>
        <el-table-column prop="province" label="商品名称" width="150"></el-table-column>
        <el-table-column prop="city" label="销售数量" width="146"></el-table-column>
        <el-table-column prop="mdmc" label="销售金额" width="100"></el-table-column>
        <el-table-column prop="zdbm" label="退款数量" width="100"></el-table-column>
        <el-table-column prop="hyry" label="退款金额" width="100"></el-table-column>
        <el-table-column prop="zhuangtai" label="数量小计" width="100"></el-table-column>
        <el-table-column prop="czsj" label="金额小计" width="150"></el-table-column>
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
          name: "",
          province: "",
          city: "1888",
          mdmc: "8888.00",
          zdbm: "12",
          hyry: "108.00",
          zhuangtai: "1900",
          czsj: "8780.00"
        },
        {
          date: "2018-04-28",
          name: "十月大神（幸福店）",
          province: "商品名称",
          city: "88",
          mdmc: "888.00",
          zdbm: "0",
          hyry: "0.00",
          zhuangtai: "88",
          czsj: "888.00"
        },
        {
          date: "2018-04-28",
          name: "十月大神（幸福店）",
          province: "商品名称",
          city: "100",
          mdmc: "799.00",
          zdbm: "1",
          hyry: "10",
          zhuangtai: "101",
          czsj: "789.00"
        },
        {
          date: "2018-04-28",
          name: "十月大神（幸福店）",
          province: "商品名称",
          city: "88",
          mdmc: "888.00",
          zdbm: "0",
          hyry: "0.00",
          zhuangtai: "88",
          czsj: "888.00"
        },
        {
          date: "2018-04-28",
          name: "十月大神（幸福店）",
          province: "商品名称",
          city: "100",
          mdmc: "799.00",
          zdbm: "1",
          hyry: "10",
          zhuangtai: "101",
          czsj: "789.00"
        },
        {
          date: "2018-04-28",
          name: "十月大神（幸福店）",
          province: "商品名称",
          city: "88",
          mdmc: "888.00",
          zdbm: "0",
          hyry: "0.00",
          zhuangtai: "88",
          czsj: "888.00"
        },
        {
          date: "2018-04-28",
          name: "十月大神（幸福店）",
          province: "商品名称",
          city: "100",
          mdmc: "799.00",
          zdbm: "1",
          hyry: "10",
          zhuangtai: "101",
          czsj: "789.00"
        },
        {
          date: "2018-04-28",
          name: "十月大神（幸福店）",
          province: "商品名称",
          city: "88",
          mdmc: "888.00",
          zdbm: "0",
          hyry: "0.00",
          zhuangtai: "88",
          czsj: "888.00"
        },
        {
          date: "2018-04-28",
          name: "十月大神（幸福店）",
          province: "商品名称",
          city: "88",
          mdmc: "888.00",
          zdbm: "0",
          hyry: "0.00",
          zhuangtai: "88",
          czsj: "888.00"
        },
        {
          date: "2018-04-28",
          name: "十月大神（幸福店）",
          province: "商品名称",
          city: "100",
          mdmc: "799.00",
          zdbm: "1",
          hyry: "10",
          zhuangtai: "101",
          czsj: "789.00"
        }
      ]
    };
  }
};
</script>