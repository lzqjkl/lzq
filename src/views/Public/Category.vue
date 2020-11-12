<template>
    <div>
        <p class="zhuoa">* 编码：<el-input class="chuangdia" placeholder="01" v-model="input1" :disabled="true">
</el-input></p>
<p class="zhuob">* 等级名称：<el-input class="chuangdia" v-model="input" placeholder="请输入内容"></el-input></p>
<p class="zhuob">* 会员特价：<el-radio v-model="radio" label="1">支持</el-radio>
  <el-radio v-model="radio" label="2">不支持</el-radio></p>
  <p class="zhuob">* 积分倍数：<el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></p>
  <p>* 所需经验值：<el-input class="chuangdia" v-model="input2" placeholder="请输入内容"></el-input></p>
  <router-link to="/Level">
  <p class="zhuob"><el-button type="primary" :plain="true" @click="open2">保存</el-button>
  <el-button :plain="true" @click="open4">错误</el-button></p>
  </router-link>
    </div>
</template>
<style>
.zhuob{
    margin-left: 17px;
}
.zhuoa{
    margin-left: 50px;
}
.chuangdia{
    width: 300px;
}
</style>
<script>
export default {
  data() {
    return {
      input: '钻石会员',
      input2: '钻石会员',
      input1: '',
      radio: '1',
      options: [{
          value: '选项1',
          label: '无积分'
        }, {
          value: '选项2',
          label: '1.0倍'
        }, {
          value: '选项3',
          label: '1.1倍'
        }, {
          value: '选项4',
          label: '1.2倍'
        }, {
          value: '选项5',
          label: '1.3倍'
        }, {
          value: '选项6',
          label: '1.4倍'
        }],
        value: '1.2倍'
      }
    },
     methods: {
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      }
    }
  }
</script>