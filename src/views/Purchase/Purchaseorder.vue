<template>
    <div>
    <p>
    <el-dropdown>
  <span class="el-dropdown-link">
    审核状态<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>审核状态</el-dropdown-item>
    <el-dropdown-item>待审核</el-dropdown-item>
    <el-dropdown-item>审核失败</el-dropdown-item>
    <el-dropdown-item>审核成功</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
 <el-dropdown>
  <span class="el-dropdown-link">
    入库状态<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>入库状态</el-dropdown-item>
    <el-dropdown-item>已作废</el-dropdown-item>
    <el-dropdown-item>待入库</el-dropdown-item>
    <el-dropdown-item>部分入库</el-dropdown-item>
    <el-dropdown-item>已入库</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
<el-input placeholder="请输入供应商名称/编码" v-model="input" class="input-with-select">
      <el-button
        slot="append"
        icon="el-icon-search"
        type="primary"
        @click="openFullScreen2"
        v-loading.fullscreen.lock="fullscreenLoading"
      ></el-button>
</el-input>
</p>
    </div>
</template>
<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
<script>
export default {
     methods: {
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      },
      data() {
      return {
          input: '',
          fullscreenLoading: false,
      }
     }
    }
}
</script>