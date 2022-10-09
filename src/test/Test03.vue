<template>
  <div
    class="scrollbar"
    v-scroll
  >
    <div class="scrollbar-x"></div>
    <div class="scrollbar-y"></div>
    <div class="scrollbar__body">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero
      sequi dolorem quidem veniam sint consequatur error laborum tempore
      voluptas quibusdam placeat excepturi, id unde ea alias minus eaque quod!
      Nesciunt minus voluptatum non blanditiis consectetur, rerum et reiciendis
      dolorem tempore commodi, inventore nihil incidunt, dolor culpa asperiores
      ea a eius quas eos fugit ipsam iste sit sapiente. Ipsum, sequi! Maxime
      laboriosam, in, repellendus amet laudantium illum necessitatibus tempore
      dolore tempora accusamus cumque officia sequi, quisquam consequatur animi
      commodi cum eaque voluptate consectetur ipsum sapiente veritatis. Ipsum
      velit accusantium molestias!
    </div>
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
    const { clientWidth, clientHeight } = dom;
    const thumbX = dom.querySelector<HTMLElement>(":scope > .scrollbar-x")!;
    const { width } = thumbX.getBoundingClientRect();
    thumbX.addEventListener("mousedown", (event) => {
      const { offsetX } = event;
      const controller = new AbortController();
      const signal = controller.signal;
      document.addEventListener(
        "mousemove",
        (event) => {
          event.preventDefault();
          const { clientX } = event;
          const maxX = clientWidth - width;
          const x = clientX - left - offsetX;
          thumbX.style.transform = `translateX(${
            x < 0 ? 0 : x > maxX ? maxX : x
          }px)`;
        },
        { signal }
      );
      document.addEventListener("mouseup", () => {
        controller.abort();
      });
    });
    const thumbY = dom.querySelector<HTMLElement>(":scope > .scrollbar-y")!;
    const { height } = thumbY.getBoundingClientRect();
    thumbY.addEventListener("mousedown", (event) => {
      const { offsetY } = event;
      const controller = new AbortController();
      const signal = controller.signal;
      document.addEventListener(
        "mousemove",
        (event) => {
          event.preventDefault();
          const { clientY } = event;
          const maxY = clientHeight - height;
          const y = clientY - top - offsetY;
          thumbY.style.transform = `translateY(${
            y < 0 ? 0 : y > maxY ? maxY : y
          }px)`;
        },
        { signal }
      );
      document.addEventListener("mouseup", () => {
        controller.abort();
      });
    });
  },
};
onMounted(() => {});
</script>
<style lang="scss" scoped>
.scrollbar {
  position: relative;
  width: 500px;
  height: 300px;
  border: 1px red solid;
  @media (any-hover: hover) {
    overflow: hidden;
  }
  @media (any-hover: none) {
    overflow: auto;
    overflow: overlay;
  }
  @mixin scrollbar-thumb {
    position: absolute;
    z-index: 1000;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .scrollbar-x {
    @include position(auto, auto, 0, 0);
    @include scrollbar-thumb;
    width: 30px;
    height: 8px;
  }
  .scrollbar-y {
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
