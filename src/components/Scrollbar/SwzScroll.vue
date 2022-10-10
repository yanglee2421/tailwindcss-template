<template>
  <div
    class="swz-scroll"
    v-scroll
  >
    <div
      v-show="state.showX"
      class="thumb-x"
      :class="{ 'thumb-focus': state.focusX }"
    ></div>
    <div
      v-show="state.showY"
      class="thumb-y"
      :class="{ 'thumb-focus': state.focusY }"
    ></div>
    <div class="scroll-content">
      <slot></slot>
    </div>
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
  showX: false,
  showY: false,
  focusX: false,
  focusY: false,
  translateX: 0,
  translateY: 0,
});
const vScroll: Directive<HTMLElement> = {
  mounted(dom) {},
};
</script>
<style lang="scss" scoped>
.swz-scroll {
  height: 100%;
  overflow: hidden;
}
.thumb-focus {
  background-color: rgba(#000, 0.4);
}
.thumb-x {
  height: 8px;
}
</style>
