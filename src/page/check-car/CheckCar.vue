<template>
  <layout-mobile
    title="检车地点"
    footer-text="滇ICP备2022005213号-1"
    footer-link="https://beian.miit.gov.cn/#/home"
  >
    <card-item-vue
      v-for="(item, index) in store.couter"
      :key="index"
    ></card-item-vue>
    <p>{{ store.gett }}</p>
    <el-link @click="add()">加加</el-link>
  </layout-mobile>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import CardItemVue from "./component/CardItem.vue";
import usePinia from "@/hook/usePinia";
const store = usePinia();
const add = () => {
  store.couter++;
};
</script>
<style lang="scss" scoped>
.el-card {
  margin-top: 10px;
}
</style>
