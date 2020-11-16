<template>
    <div class="marg">
        <div>
            <p>基本信息</p>
            <hr/>
            <p>* 供应商名称：<el-input class="biank" v-model="input2" placeholder="请选择"></el-input></p>
            <p class="jli">* 编码：<el-input class="biank" placeholder="002" v-model="input3" :disabled="true"></el-input></p>
            <p class="jli2">* 所属区域：<template>
    <el-select class="changdi" v-model="value" placeholder="请选择">
    <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
   <el-select class="changdi2" v-model="value" placeholder="请选择">
    <el-option  v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
  <el-select class="changdi" v-model="value" placeholder="请选择">
    <el-option  v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
</template>
</p>
<p class="jli2">* 详细地址：<el-input class="biank" v-model="input" placeholder="幸福村幸福街18号"></el-input></p>
<br/>
<p>财务信息</p>
<hr/>
<p class="you"> 开户名称：<el-input class="biank" v-model="input4" placeholder=""></el-input></p>
<p class="you"> 开户银行：<el-input class="biank" v-model="input5" placeholder=""></el-input></p>
<p class="you"> 银行账号：<el-input class="biank" v-model="input6" placeholder=""></el-input></p>
<br/>
<p>联系人信息</p>
<hr/>
<p class="you2">* 姓名：<el-input class="biank" v-model="input7" placeholder=""></el-input>
    <template>
  <el-radio v-model="radio" label="1">男</el-radio>
  <el-radio v-model="radio" label="2">女</el-radio>
</template></p>
<p class="you3">职务：<el-input class="biank" v-model="input8" placeholder=""></el-input></p>
<p class="you2">* 手机：<el-input class="biank" v-model="input9" placeholder=""></el-input></p>
<p class="you3">电话：<el-input class="biank" v-model="input10" placeholder=""></el-input></p>
<p class="you3">邮箱：<el-input class="biank" v-model="input11" placeholder=""></el-input></p>
<br/>
<p>其他信息</p>
<hr/>
<p class="you3"><span class="bz">备注：</span><el-input class="duox" type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder=""
  v-model="textarea2">
</el-input></p>
<p class="you2">* 状态：  <template>
  <el-radio v-model="radio2" label="1">正常</el-radio>
  <el-radio v-model="radio2" label="2">关闭</el-radio>
</template></p>
<template>
  <router-link to="/suppliermanagement">
  <el-button class="anl2" :plain="true" type="primary" @click="open2">保存</el-button>
  <el-button :plain="true" @click="open4">取消</el-button>
  </router-link>
</template>
        </div>
    </div>
</template>
<style>
.marg{
  margin-left: 220px;
  margin-top: 65px;
}
.anl2{
    margin-left: 100px;
}
.bz{
    float: left;
    margin-top: -1px;
}
.duox{
    width: 260px;
}
.you3{
    margin-left: 56px;
}
.you2{
    margin-left: 45px;
}
.you{
    margin-left: 25px;
}
.changdi2{
    width: 100px;
    margin:5px;
}
.changdi{
    width: 100px;
}
.jli{
    margin-left: 47px;
}
.jli2{
    margin-left: 15px;
}
.biank{
    width: 300px;
}
</style>
<script>
export default {
    data() {
    return {
      textarea2: '',
      input: '',
      input2:'',
      input3:'',
      input4:'',
      input5:'',
      input6:'',
      input7:'',
      input8:'',
      input9:'',
      input10:'',
      input11:'',
       radio: '1',
       radio2: '1',
       options: [{
          value: '选项1',
          label: '广东省'
        }, {
          value: '选项2',
          label: '湖南省'
        }, {
          value: '选项3',
          label: '四川省'
        }, {
          value: '选项4',
          label: '湖北省'
        }],
         options2: [{
          value: '选项1',
          label: '广州市'
        }, {
          value: '选项2',
          label: '北江市'
        }, {
          value: '选项3',
          label: '西江市'
        }, {
          value: '选项4',
          label: '南路市'
        }],
        options3: [{
          value: '选项1',
          label: '天河区'
        }, {
          value: '选项2',
          label: '花都区'
        }, {
          value: '选项3',
          label: '从化区'
        }, {
          value: '选项4',
          label: '黄埔区'
        }],
        value: '',
        value2: '',
        value3: '',
      }
    },
     methods: {
      open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，保存成功',
          type: 'success'
        });
      },
      open3() {
        this.$message({
          message: '新增失败',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('增加失败');
      }
    }
  }
</script>