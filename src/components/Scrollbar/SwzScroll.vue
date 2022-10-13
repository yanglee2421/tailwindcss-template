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
  position: relative;
  height: 100%;
  overflow: hidden;
}
.scroll-content {
  min-height: 100%;
  height: 100%;
  max-height: 100%;
}
.thumb-focus {
  background-color: rgba(#000, 0.4);
}
@mixin thumb {
  position: absolute;
  background-color: rgba(#000, 0.2);
}
.thumb-x {
  width: 30px;
  height: 8px;
}
.thumb-y {
  width: 8px;
  height: 30px;
}
</style>
