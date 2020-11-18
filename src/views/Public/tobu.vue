<template>
  <div id="app">
    <div class="toubu">
      <img src="../../img/2.png" alt="">
      <span>内容管理</span>
      <span>系统设置</span>
    </div>
    <div class="dinwei">
    <i class="el-icon-user-solid"><span>admin</span></i>
    <el-divider direction="vertical"></el-divider>
    <el-badge :value="12" class="item">
    <i class="el-icon-message-solid"></i>
    </el-badge>
    <el-divider direction="vertical"></el-divider>
    <i  class="el-icon-menu"></i>
    <el-divider direction="vertical"></el-divider>
    <i  class="el-icon-s-home"></i>
    <el-divider direction="vertical"></el-divider>
    <i  class="el-icon-switch-button"></i>
  </div>
  </div>
</template>
<style>

  #app{
    z-index: 99;
    padding: 0px;
    background: #0066ff;
    width: 1422px;
    position:fixed;
    top:0px;
  }
  #app div{
    display: flex;
    align-items:center;
  }
  .toubu{
    display: flex;
    align-items:center;
  }
  .toubu img{
    padding-right: 40px;
  }
  .toubu span{
    color: white;
    padding: 5px;
  }
 .dinwei {
    position: absolute;
    top: 13px;
    left: 1100px;
    color: white;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.dinwei i{
  font-size: 20px;
}
.dinwei i:nth-of-type(1){
  font-size: 28px;
}
.dinwei span{
  font-size: 16px;
}
</style>