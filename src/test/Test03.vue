<template>
  <div
    class="scrollbar"
    v-scroll
  >
    <div class="scrollbar-x"></div>
    <div class="scrollbar-y"></div>
    <div class="scrollbar__body"></div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { Directive, onMounted, reactive } from "vue";
interface _scrollSta {
  x: number;
  y: number;
}
const scrollSta = reactive<_scrollSta>({
  x: 0,
  y: 0,
});
const vScroll: Directive<HTMLElement> = {
  mounted(dom) {
    const { top, left } = dom.getBoundingClientRect();
    const thumbX = dom.querySelector(":scope > .scrollbar-x")!;
    const thumbY = dom.querySelector<HTMLElement>(":scope > .scrollbar-y")!;
    thumbY.addEventListener("mousedown", () => {
      thumbY.addEventListener("mousemove", (event) => {
        event.preventDefault();
        const { clientY, offsetY } = event as MouseEvent;
        thumbY.style.transform = `translateY(${clientY - top - offsetY}px)`;
      });
    });
  },
};
window.addEventListener("mousemove", () => {
  console.log(111111);
});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.scrollbar {
  position: relative;
  width: 500px;
  height: 300px;
  overflow: hidden;
  border: 1px red solid;
  @mixin scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  .scrollbar-x {
    position: absolute;
    @include position(auto, auto, 0, 0);
    @include scrollbar-thumb;
    width: 30px;
    height: 8px;
  }
  .scrollbar-y {
    position: absolute;
    @include position(0, 0, auto, auto);
    @include scrollbar-thumb;
    width: 8px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .scrollbar__body {
    height: 1000px;
  }
}
</style>
