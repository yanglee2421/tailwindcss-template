<template>
  <div>
    <fw-switch v-model="state.isShow"></fw-switch>
    <h1 v-height="state.isShow">这是标题</h1>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { Directive, reactive } from "vue";
const state = reactive({
  isShow: true,
});
const vTest: Directive<HTMLElement, boolean> = {
  mounted(dom, { value }, vnode) {
    if (!value) {
      dom.remove();
    }
  },
  updated(dom, { value }) {
    if (!value) {
      dom.remove();
    } else {
      console.log(dom);
    }
  },
};
</script>
<style lang="scss" scoped></style>
