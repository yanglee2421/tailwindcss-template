<template>
  <layout-mobile
    v-infinite-scroll="load"
    :infinite-scroll-disabled="disabled"
    title="饭店/会所"
    footer-text="滇ICP备2022005213号-1"
    footer-link="https://beian.miit.gov.cn/#/Integrated/index"
  >
    <card-item-vue
      v-for="(item, index) in num"
      :key="index"
    ></card-item-vue>
    <p>加载中。。。</p>
  </layout-mobile>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import CardItemVue from "./component/CardItem.vue";
import request from "@/api/request";
import { ref } from "vue";
const num = ref(5);
const disabled = ref(false);
const load = () => {
  disabled.value = true;
  setTimeout(() => {
    disabled.value = false;
    num.value += 3;
  }, 1000);
};
</script>
<style lang="scss" scoped></style>
