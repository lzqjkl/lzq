<template>
  <div id="app12">
    <el-row>
      <el-col :span="7" :offset="15" >
        <div class="grid-content bg-purple-dark">
          <p class="title">花生米超市后台系统</p>
          <div class="input_list">
            <div>
              <el-input placeholder="请输入账号" v-model="username" clearable ref="input">
                <i slot="prefix" class="el-icon-user"></i>
              </el-input>
              <el-alert title="账号不能为空" type="error" :closable="false" show-icon v-show="usernameF"></el-alert>
              <el-alert
                title="请输入正确的账号"
                type="error"
                :closable="false"
                show-icon
                v-show="usernameF1"
              ></el-alert>
            </div>
            <div>
              <el-input type="password" placeholder="请输入密码" v-model="pwd" clearable  ref="input1">
                <i slot="prefix" class="el-icon-lock"></i>
              </el-input>
              <el-alert title="密码不能为空" type="error" :closable="false" show-icon v-show="usernameP"></el-alert>
              <el-alert
                title="请输入正确的密码"
                type="error"
                :closable="false"
                show-icon
                v-show="usernameP1"
              ></el-alert>
            </div>
            <div>
              <el-input placeholder="请输入验证码" v-model="num" clearable class="yzm"  ref="input2">
                <i slot="prefix" class="el-icon-document"></i>
              </el-input>
              <el-alert
                title="图形验证码不能为空"
                type="error"
                :closable="false"
                show-icon
                v-show="usernameY"
              ></el-alert>
              <el-alert
                title="请输入正确的图形验证码"
                type="error"
                :closable="false"
                show-icon
                v-show="usernameY1"
              ></el-alert>
              <img
                class="yzms"
                src="../img/1-1.png"
                width="102"
                height="44"
                alt
              />
            </div>
          </div>
          <el-button type="primary" @click="denglu()">登录</el-button>
          <router-link to="/Product classification"> <el-link :underline="false" type="warning" class="xy">免校验直接登录</el-link></router-link>
         
          <p></p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      pwd: "",
      num1: "",
      usernameF: false,
      usernameY: false,
      usernameP: false,
      usernameF1: false,
      usernameY1: false,
      usernameP1: false,
    };
  },

computed: {
    num: {
      get: function () {
        return this.num1;
      },
      set: function (val) {
        this.num1 = val.toUpperCase();
      },
    },
  },
  methods: {
    denglu() {
      if (this.username == "") {
        this.usernameF = true;
        this.usernameF1 = false;
        this.$nextTick(() => {
          this.$refs.input.focus();
        });
      } else if (this.pwd == "") {
        this.usernameP1 = false;
        this.usernameP = true;
        this.$nextTick(() => {
          this.$refs.input1.focus();
        });
      } else if (this.num1 == "") {
        this.usernameY1 = false;
        this.usernameY = true;
        this.$nextTick(() => {
          this.$refs.input2.focus();
        });
      }
      if (this.username != "admin") {
        this.usernameF1 = true;
        this.usernameF = false;
        this.$nextTick(() => {
          this.$refs.input.focus();
        });
      } else if (this.pwd != "123456") {
        this.usernameP1 = false;
        this.usernameP = true;
        this.$nextTick(() => {
          this.$refs.inpu1t.focus();
        });
      } else if (this.num1 != "PAN5") {
        this.usernameF1 = false;
        this.usernameF = true;
        this.$nextTick(() => {
          this.$refs.input2.focus();
        });
      } else {
        this.usernameF1 = false;
        this.usernameF = false;
        this.usernameP1 = false;
        this.usernameP = false;
        this.usernameY = false;
        this.usernameY1 = false;
         this.$message({
          message: '登录成功 ',
          type: 'success'
        });
        this.$router.push({
            path:"/main"
        })
      }
    },
  },
};
</script>
<style scoped>
#app12 {
  background: url("../img/beijing.png");
  width: 100%;
  height: 725px;
  background-repeat: no-repeat;
}
.logo {
  margin: 50px 0 0 78px;
}
.el-link {
  margin: 14px 0 0 254px;
}
.el-button {
  margin: 15px 0 0 50px;
  width: 302px;
  background: repeating-linear-gradient(
    to right,
    rgb(27, 30, 207)
  ) !important;
  border: 0;
}
.el-button:hover {
  background: repeating-linear-gradient(
    to right,
    rgba(0, 225, 255, 0.7)
  ) !important;
}
.el-alert--error {
  position: absolute;
  width: 269px;
  margin: -27px 0 0 -47px;
  background: transparent !important;
  color: red !important  ;
}
.yzms {
  position: absolute;
  top: 478px;
  right: 190px;
  height: 36px;
}
.el-col {
  background: rgba(255, 255, 255, 0.8);
  height: 400px;
  margin-top: 225px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.title {
  margin: 20px 0;
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
  color: blue;
  text-align: center;
}
.el-input {
  width: 300px;
  height: 60px;
  margin: 18px 0 0 -37px;
}
.yzm {
  width: 170px !important;
}
i {
  font-size: 20px;
  margin-top: 10px;
}
.input_list {
  margin: 0 0 0 86px;
}

.el-col[data-v-10d9df09]{
  margin-top: 130px;
}
.xy{
  color: blue;
}
</style>

