<template>
  <div
    class="scrollbar"
    v-scroll
  >
    <div
      v-show="state.showX"
      class="thumb-x"
      :class="[{ 'thumb-focus': state.focusX }]"
    ></div>
    <div
      v-show="state.showY"
      class="thumb-y"
      :class="[{ 'thumb-focus': state.focusY }]"
    ></div>
    <section class="client">
      <slot></slot>
    </section>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import type { Directive } from "vue";
import { reactive } from "vue";
const state = reactive({
  showX: false,
  focusX: false,
  showY: false,
  focusY: false,
});
const vScroll: Directive<HTMLElement> = {
  mounted(dom) {
    /**
     * 可视区
     * 横滑块
     * 纵滑块
     */
    const client = dom.querySelector<HTMLElement>(":scope>.client")!;
    const thumbX = dom.querySelector<HTMLElement>(":scope>.thumb-x")!;
    const thumbY = dom.querySelector<HTMLElement>(":scope>.thumb-y")!;
    /**
     * 移入组件时
     * 计算滑块的宽高
     * 计算是否展示滑块
     */
    dom.addEventListener("mouseover", () => {
      const { clientWidth, clientHeight, scrollWidth, scrollHeight } = client;
      thumbX.style.width = `${Math.floor(clientWidth ** 2 / scrollWidth)}px`;
      thumbY.style.height = `${Math.floor(clientHeight ** 2 / scrollHeight)}px`;
      scrollWidth > clientWidth && (state.showX = true);
      scrollHeight > clientHeight && (state.showY = true);
    });
    /**
     * 移出组件时
     * 若不需要，则隐藏滑块
     */
    dom.addEventListener("mouseout", () => {
      state.focusX || (state.showX = false);
      state.focusY || (state.showY = false);
    });
    /**
     * 鼠标选中滑块时
     * 聚焦滑块
     */
    thumbX.addEventListener("mousedown", (event) => {
      state.focusX = true;
      const { offsetX } = event;
      const controller = new AbortController();
      const signal = controller.signal;
      document.addEventListener(
        "mousemove",
        (event) => {
          event.preventDefault();
          const { clientX } = event;
          const { left } = dom.getBoundingClientRect();
          const x = clientX - offsetX - left;
          const { clientWidth, scrollWidth } = client;
          const maxX = clientWidth - thumbX.offsetWidth;
          const translate = Math.floor(x < 0 ? 0 : x > maxX ? maxX : x);
          thumbX.style.transform = `translateX(${translate}px)`;
          client.scrollLeft = Math.floor(
            (translate * scrollWidth) / clientWidth
          );
        },
        { signal }
      );
      /**
       * 鼠标放弃滑块时
       * 滑块失焦
       */
      document.addEventListener("mouseup", () => {
        controller.abort();
        state.showX = false;
        state.focusX = false;
      });
    });
    /**
     * 鼠标按下时
     * 聚焦滑块
     */
    thumbY.addEventListener("mousedown", (event) => {
      state.focusY = true;
      const { offsetY } = event;
      const controller = new AbortController();
      const signal = controller.signal;
      document.addEventListener(
        "mousemove",
        (event) => {
          event.preventDefault();
          const { clientY } = event;
          const { top } = dom.getBoundingClientRect();
          const y = clientY - offsetY - top;
          const { clientHeight, scrollHeight } = client;
          const maxY = clientHeight - thumbY.offsetHeight;
          const translate = Math.floor(y < 0 ? 0 : y > maxY ? maxY : y);
          thumbY.style.transform = `translateY(${translate}px)`;
          client.scrollTop = Math.floor(
            (translate * scrollHeight) / clientHeight
          );
        },
        { signal }
      );
      document.addEventListener("mouseup", () => {
        controller.abort();
        state.showY = false;
        state.focusY = false;
      });
    });
  },
};
</script>
<style lang="scss" scoped>
.scrollbar {
  position: relative;
  height: 100%;
  overflow: hidden;
}
@mixin thumb {
  position: absolute;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  will-change: transform;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
}
.thumb-focus {
  background-color: rgba(0, 0, 0, 0.4) !important;
}
.thumb-x {
  @include thumb;
  @include position(auto, auto, 0, 0);
  height: 8px;
}
.thumb-y {
  @include thumb;
  @include position(0, 0, auto, auto);
  width: 8px;
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
