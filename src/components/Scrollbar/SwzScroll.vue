<template>
  <div
    class="scrollbar"
    v-scroll
  >
    <div
      draggable="false"
      class="thumb-x"
    ></div>
    <div
      draggable="false"
      class="thumb-y"
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
const vScroll: Directive<HTMLElement> = {
  mounted(dom) {
    const { top, left } = dom.getBoundingClientRect();
    const client = dom.querySelector<HTMLElement>(":scope>.client")!;
    const { clientWidth, clientHeight, scrollWidth, scrollHeight } = client;
    /**
     * 横向滚动条
     */
    const thumbX = dom.querySelector<HTMLElement>(":scope>.thumb-x")!;
    thumbX.style.width = `${Math.floor(clientWidth ** 2 / scrollWidth)}px`;
    thumbX.addEventListener("mousedown", (event) => {
      thumbX.classList.add("thumb-focus");
      const { offsetX } = event;
      const controller = new AbortController();
      const signal = controller.signal;
      document.addEventListener(
        "mousemove",
        (event) => {
          event.preventDefault();
          const { clientX } = event;
          const x = clientX - offsetX - left;
          const maxX = clientWidth - thumbX.offsetWidth;
          const translate = Math.floor(x < 0 ? 0 : x > maxX ? maxX : x);
          thumbX.style.transform = `translateX(${translate}px)`;
          client.scrollLeft = Math.floor(
            (translate * scrollWidth) / clientWidth
          );
        },
        { signal }
      );
      document.addEventListener("mouseup", () => {
        controller.abort();
        thumbX.classList.remove("thumb-focus");
      });
    });
    /**
     * 纵向滚动条
     */
    const thumbY = dom.querySelector<HTMLElement>(":scope>.thumb-y")!;
    thumbY.style.height = `${Math.floor(clientHeight ** 2 / scrollHeight)}px`;
    thumbY.addEventListener("mousedown", (event) => {
      thumbY.classList.add("thumb-focus");
      const { offsetY } = event;
      const controller = new AbortController();
      const signal = controller.signal;
      document.addEventListener(
        "mousemove",
        (event) => {
          event.preventDefault();
          const { clientY } = event;
          const y = clientY - offsetY - top;
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
        thumbY.classList.remove("thumb-focus");
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
  width: 30px;
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
