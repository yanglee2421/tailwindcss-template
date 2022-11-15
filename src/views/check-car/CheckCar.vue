<template>
  <layout-mobile
    title="检车地点"
    footer-text="滇ICP备2022005213号-1"
    footer-link="https://beian.miit.gov.cn/#/Integrated/index"
  >
    <card-item-vue
      v-for="(item, index) in 20"
      :key="index"
    ></card-item-vue>
  </layout-mobile>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import CardItemVue from "./component/CardItem.vue";
</script>
<style lang="scss" scoped>
.el-card {
  margin-top: 10px;
}
</style>
