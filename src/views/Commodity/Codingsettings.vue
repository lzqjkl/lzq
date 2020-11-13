<template>
<div class="da">
    <p class="bmgz4">编码规则：前缀+顺序号</p>
    <p class="bmgz2">* 编码位数：<el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></p>  
    <p>
     <p @click="Click1"> <span class="bmgz">编码前缀：</span><el-radio class="zuoe" v-model="radio" label="1">自定义</el-radio>  
        <el-input v-show="message" class="sda" v-model="input" placeholder="请输入内容"></el-input></p>
  <p @click="Click"><el-radio class="zuoe1" v-model="radio" label="2">使用类别前两位(勾选此处时，建档前要先选类别)</el-radio></p>
  <p class="anjiane"><el-button :plain="true" type="primary" @click="open2">保存</el-button></p>
    </div>
</template>
<style>
.anjiane{
  margin-left: 120px;
}
.da{
    margin-top: 80px;
}
.bmgz3{
    margin-left: 20px;
    margin-top: -10px;
}
.bmgz2{
    margin-left: 28px;
}
.bmgz4{
    margin-left: 40px;
}
.bmgz{
    margin-left: 40px;
}
.zuoe1{
    margin-left: 130px;
}
.zuoe{
    margin-left: 10px;
    margin-top: 20px;
}
.sda{
    width: 240px;
}
</style>
<script>
  export default{
    data() {
       
      return {
          input: '620',
          radio: '1',
        options: [{
          value: '选项1',
          label: '8'
        }, {
          value: '选项2',
          label: '9'
        }, {
          value: '选项3',
          label: '10'
        }, {
          value: '选项4',
          label: '11'
        }, {
          value: '选项5',
          label: '12'
        }, {
          value: '选项6',
          label: '13'
        }],
        value: '13',
          message:true
      }
      
    },
    methods: {
        Click:function(){
            this.message=false;
        },
         Click1:function(){
            this.message=true;
        },
        open2() {
        this.$message({
          message: '保存成功',
          type: 'success'
        });
      },
    }
  }
</script>