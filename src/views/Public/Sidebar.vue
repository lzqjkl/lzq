<template>
<div class="sidebar">
  <el-row>
    <el-row class="tac">
      <el-col :span="8">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1" class="el-submenu__title1">
            <template slot="title">
              <i class="el-icon-takeaway-box"></i>
              <span>商品</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><router-link to="/Product classification" tag="div" >• 商品类别</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/Merchandise brand" tag="div" >• 商品品牌</router-link></el-menu-item>
              <el-menu-item index="1-3"><router-link to="/Commodity units" tag="div" >• 商品单位</router-link></el-menu-item>
              <el-menu-item index="1-4"><router-link to="/Codingsettings" tag="div" >• 商品编码设置</router-link></el-menu-item>
              <el-menu-item index="1-5">• 商品档案</el-menu-item>
              <el-menu-item index="1-6"><router-link to="/Picturegallery" tag="div" >• 图片库管理</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
            <el-submenu index="2" class="el-submenu__title1">
            <template slot="title">
              <i class="el-icon-shopping-cart-2"></i>
              <span>采购</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1"><router-link to="/Suppliermanagement" tag="div" >• 供应商管理</router-link></el-menu-item>
              <el-menu-item index="2-2"><router-link to="/Purchaseorder" tag="div" >• 采购单</router-link></el-menu-item>
              <el-menu-item index="2-3"><router-link to="/Returnorder" tag="div" >• 采购退货单</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3" class="el-submenu__title1">
            <template slot="title">
              <i class="el-icon-date"></i>
              <span>库存</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1"><router-link to="/Storage" tag="div" >• 商品入库</router-link></el-menu-item>
              <el-menu-item index="3-2">• 库存调拔</el-menu-item>
              <el-menu-item index="3-3">• 商品出库</el-menu-item>
              <el-menu-item index="3-4">• 库存盘点</el-menu-item>
              <el-menu-item index="3-5">• 商品库存</el-menu-item>
              <el-menu-item index="3-6">• 商品库存明细</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4" class="el-submenu__title1">
            <template slot="title">
              <i class="el-icon-present"></i>
              <span>促销</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">• 订单促销</el-menu-item>
              <el-menu-item index="4-2">• 商品促销</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5" class="el-submenu__title1">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>零售</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1"><router-link to="/Salesorders" tag="div" >• 终端销售单</router-link></el-menu-item>
              <el-menu-item index="5-2">• 终端退货单</el-menu-item>
              <el-menu-item index="5-3">• 商城销售单</el-menu-item>
              <el-menu-item index="5-4">• 终端销售交易明细</el-menu-item>
              <el-menu-item index="5-5">• 终端财务收银明细</el-menu-item>
              <el-menu-item index="5-6">• 终端销售交易汇总</el-menu-item>
              <el-menu-item index="5-7">• 终端财务收银汇总</el-menu-item>
              <el-menu-item index="5-8">• 终端财务退款汇总</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6" class="el-submenu__title1">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>会员</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1"><router-link to="/Level" tag="div" >• 会员类别</router-link></el-menu-item>
              <el-menu-item index="6-2">• 会员列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style  scoped>
.el-submenu__title1{
    width: 200px;
    z-index: 12;
}
.tac{
  width: 200px;
  overflow-y:scroll;
}
</style>