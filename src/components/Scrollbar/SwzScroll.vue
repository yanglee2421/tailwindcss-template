<template>
  <div
    class="scrollbar"
    v-scroll
  >
    <aside class="thumb-x"></aside>
    <aside class="thumb-y"></aside>
    <div class="client">
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
import type { Directive } from "vue";
const vScroll: Directive<HTMLElement> = {
  mounted(dom) {
    const { clientWidth, clientHeight } = dom;
    const thumbX = dom.querySelector<HTMLElement>(":scope>.thumb-x")!;
    const thumbY = dom.querySelector<HTMLElement>(":scope>.thumb-y")!;
  },
};
</script>
<style lang="scss" scoped>
.scrollbar {
  position: relative;
  height: 100%;
  overflow: hidden;
  &:hover {
    .thumb-x,
    .thumb-y {
      display: block;
    }
  }
}
@mixin thumb {
  position: absolute;
  display: none;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
}
.thumb-x {
  @include thumb;
  @include position(auto, auto, 0, 0);
  width: 30px;
  height: 8px;
}
.thumb-y {
  @include thumb;
  @include position(0, 0, auto, auto);
  width: 8px;
  height: 30px;
}
.client {
  height: 100%;
  @media (any-hover: hover) {
    overflow: hidden;
  }
  @media (any-hover: none) {
    overflow: auto;
    overflow: overlay;
  }
}
</style>
