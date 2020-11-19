<template class="main1">
  <div class="main">
    <div class="eheader">
      <Eheader title="新增订单促销"></Eheader>
    </div>
    <div class="content">
      <h3>促销配置</h3>
      <p class="fgx"></p>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="促销编码:">
          <el-input
            v-model="form.name"
            class="el-input__inner1"
            :disabled="true"
            placeholder="CX2018042801"
          ></el-input>
        </el-form-item>
        <el-form-item label="促销门店:">
          <el-select
            v-model="form.region"
            placeholder="产品大神(幸福店)"
            class="el-select"
            :disabled="true"
          ></el-select>
        </el-form-item>
      </el-form>
      <div class="block">
        促销日期:
        <span class="demonstration"></span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          class="data"
        ></el-date-picker>

        <p class="data1">
          促销时间:
          <el-time-select
            class="startTime1"
            placeholder="起始时间"
            v-model="startTime"
            :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
          ></el-time-select>---
          <el-time-select
            class="startTime1"
            placeholder="结束时间"
            v-model="endTime"
            :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }"
          ></el-time-select>
        </p>
        <p class="cxzq1">
          促销周期:
          <el-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
            class="cxzq"
          >
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll1"
              @change="handleCheckAllChange"
            >全选</el-checkbox>
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </p>
        <p>
          促销规则：
          <el-radio-group v-model="radio">
            <ul class="radio4">
              <li>
                <p @click="radio1">
                  <el-radio :label="3">满减</el-radio>
                </p>
              </li>
              <li>
                <p @click="radio2">
                  <el-radio :label="6">折扣</el-radio>
                </p>
              </li>
              <li>
                <p @click="radio3">
                  <el-radio :label="9">赠送</el-radio>
                </p>
              </li>
            </ul>
          </el-radio-group>
         <p class="manddan">
             满订单<el-input class="clashurk" v-model="input" placeholder=""></el-input>
             ,立减<el-input class="clashurk" v-model="input2" placeholder=""></el-input>元
             <el-button>删除</el-button><br/><br/>
             满订单<el-input class="clashurk" v-model="input3" placeholder=""></el-input>
             ,立减<el-input class="clashurk" v-model="input4" placeholder=""></el-input>元
             <el-button>添加</el-button>
         </p>
         <el-form ref="form" :model="form" label-width="80px" class="srk">
        <el-form-item label="经办人员:">
          <el-input
            v-model="form.name"
            class="el-input__inner2"
          ></el-input>
        </el-form-item>
        <el-form-item label="备注:">
          <el-input
            v-model="form.name1"
            class="el-input__inner2"
          ></el-input>
        </el-form-item>
         </el-form>
         <div class="cxsp">
           <h3>促销商品</h3>
      <p class="fgx"></p>
         </div>
          <el-table :data="tableData" border style="width: 100%" class="table">
          <el-table-column fixed prop="date" label="日期" width="120"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="province" label="省份" width="120"></el-table-column>
          <el-table-column prop="city" label="市区" width="120"></el-table-column>
          <el-table-column prop="address" label="地址" width="200"></el-table-column>
          <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template>
              <el-button type="text" size="small" @click="open">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
         <div>
          <ul class="zdxx">
              <li>制单人:syds</li>
              <li>制单时间：2018-04-27 12:12:12</li>
              <li>审核人:____________</li>
              <li>审核时间：_________</li>
          </ul>
      </div>
      </div>
      <el-row class="btn">
        <el-button type="primary" @click="fh">
          保存
        </el-button>
        <el-button plain @click="fh">
          取消
        </el-button>
      </el-row>
    </div>
  </div>
</template>
<script>
const cityOptions = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
import echartss from "../Public/echartss.vue";
export default {
  components: {
    echartss
  },
  data() {
    return {
      radio: "1",
      input:'100',
      input2:'10',
      input3:'',
      input4:'',
      checkboxGroup1: ["上海"],
      checkboxGroup2: ["上海"],
      checkboxGroup3: ["上海"],
      checkboxGroup4: ["上海"],
      cities: cityOptions,
      dialogImageUrl: "",
      dialogVisible: false,
      startTime: "",
      endTime: "",
      checkAll: false,
      checkAll1: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      cxgztp1: true,
      cxgztp2: false,
      cxgztp3: false,
      radio: 3,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        }
      ],
      form: {
        name: "",
        region: ""
      }
    };
  },
  methods: {
    fh(){
      this.$router.go(-1);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    radio1() {
      this.cxgztp1 = true;
      this.cxgztp2 = false;
      this.cxgztp3 = false;
    },
    radio2() {
      this.cxgztp1 = false;
      this.cxgztp2 = true;
      this.cxgztp3 = false;
    },
    radio3() {
      this.cxgztp1 = false;
      this.cxgztp2 = false;
      this.cxgztp3 = true;
    },
      open(){
          this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      }
  }
};
</script>
<style  scoped>
.clashurk{
    width: 80px;
}
.srk[data-v-387d29ae] {
    margin: 100px 0px;
    margin-top: 20px;
}
.main {
  background: #ffffff;
  width: 1070px;
  height: 1100px;
  margin: 115px 240px;
  position: absolute;
}
.main1 {
  position: absolute;
  width: 950px;
  height: 550px;
  margin: 0px 80px;
}
.content {
  width: 90%;
  height: 1200px;
  margin: 20px auto;
}
.manddan{
    margin-left: 40px;
}
.fgx {
  width: 960px;
  height: 1px;
  background: rgb(235, 222, 222);
  margin: 15px 0px;
}
.el-select {
  width: 300px;
}
.block {
    margin-left: 0px;
}
.startTime1{
    margin-left: 5px;
}
.main[data-v-387d29ae] {
    background: #ffffff;
    width: 1089px;
    height: 1107px;
    margin: 47px 240px;
    position: absolute;
}
.data[data-v-387d29ae] {
    width: 300px;
    margin: 0px 6px;
}
.cxzq1[data-v-387d29ae] {
    margin: 27px 0px;
}
.el-radio-group {
    font-size: 0;
    margin-left: -53px;
}
.data1[data-v-387d29ae] {
    margin: 15px 0px;
}
.el-input__inner1 {
  width: 300px;
}
.btn {
  margin: 60px 10px;
}
.data {
  width: 300px;
  margin: 0px 10px;
}
.data1 {
  margin: 10px 9px;
}
.startTime1 {
  width: 136px;
}
.cxzq {
  margin: -18px 84px;
}
.cxdx {
  margin: 40px 0px;
}
.cxzq1 {
  margin: 20px 0px;
}
.cxgztp {
  position: absolute;
  margin: 40px -260px;
  width: 400px;
  height: 100px;
}
.radio4 li {
  list-style-type: none;
  float: left;
  padding: 10px;
}
.srk{
  margin: 120px 0px;
}
.el-input__inner2{
  width: 300px;
}
.cxsp{
  position: absolute;
  margin: -90px 0px;
}
.zdxx{
    margin: 10px 40px;
}
.zdxx li{
    list-style-type:none;
    float: left;
    padding-left: 40px;
}
</style>