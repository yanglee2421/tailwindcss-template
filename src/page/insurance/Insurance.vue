<template>
  <layout-mobile
    title="保险"
    footer-text="滇ICP备2022005213号-1"
    footer-link="https://beian.miit.gov.cn/#/home"
  >
    <el-card header="服务车类型：">
      <p>渣土车</p>
      <p>牵引车</p>
      <p>自卸车</p>
      <p>特种车辆</p>
    </el-card>
    <el-card header="支持险种：">
      <p>中国人民保险</p>
      <p>中国人寿保险</p>
      <p>中国太平洋保险</p>
    </el-card>
    <a
      href="tel:13888997401"
      class="call-btn"
    >
      <el-button
        type="success"
        size="large"
        >电话联系</el-button
      >
    </a>
  </layout-mobile>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.el-card {
  margin-top: 10px;
  p + p {
    margin-top: 10px;
  }
}
.call-btn {
  position: fixed;
  bottom: 15vh;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
</style>
