<template>
  <div
    v-scroll
    class="swz-scroll"
  >
    <div
      v-show="thumbSta.showX"
      v-thumb-x
      class="thumb-x"
      :class="[
        { 'thumb-focus': thumbSta.focusX },
        { 'thumb-trans': thumbSta.transX },
      ]"
      :style="{
        height: `${contentSta.clientWidth * xRate}px`,
        transform: `translateX(${translateX}px)`,
      }"
    ></div>
    <div
      v-show="thumbSta.showY"
      v-thumb-y
      class="thumb-y"
      :class="[
        { 'thumb-focus': thumbSta.focusY },
        { 'thumb-trans': thumbSta.transX },
      ]"
      :style="{
        height: `${contentSta.clientHeight * yRate}px`,
        transform: `translateY(${translateY}px)`,
      }"
    ></div>
    <div
      :scrollLeft="translateX / xRate"
      :scrollTop="translateY / yRate"
      class="scroll-content"
    >
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
import { computed, Directive, reactive } from "vue";
const contentSta = reactive({
  left: 0,
  top: 0,
  clientWidth: 0,
  clientHeight: 0,
  scrollWidth: 0,
  scrollHeight: 0,
});
const thumbSta = reactive({
  showX: false,
  showY: false,
  focusX: false,
  focusY: false,
  translateX: 0,
  translateY: 0,
  transX: false,
  transY: false,
});
const translateX = computed({
  get() {
    return thumbSta.translateX;
  },
  set(value) {
    const max = contentSta.clientWidth * (1 - xRate.value);
    thumbSta.translateY = value < 0 ? 0 : value > max ? max : value;
  },
});
const translateY = computed({
  get() {
    return thumbSta.translateY;
  },
  set(value) {
    const max = contentSta.clientHeight * (1 - yRate.value);
    thumbSta.translateY = value < 0 ? 0 : value > max ? max : value;
  },
});
let i = Date.now();
const xRate = computed(() => contentSta.clientWidth / contentSta.scrollWidth);
const yRate = computed(() => contentSta.clientHeight / contentSta.scrollHeight);
const vScroll: Directive<HTMLElement> = {
  mounted(rootDom) {
    rootDom.addEventListener("mouseover", () => {
      /**
       * 获取content的大小
       * 将content的大小存入contentSta
       * 根据content的大小决定是否显示thumb
       */
      const content = rootDom.querySelector(".scroll-content")!;
      const { clientWidth, clientHeight, scrollWidth, scrollHeight } = content;
      const obj = { clientWidth, clientHeight, scrollWidth, scrollHeight };
      Object.assign(contentSta, obj);
      scrollWidth > clientWidth && (thumbSta.showX = true);
      scrollHeight > clientHeight && (thumbSta.showY = true);
      /**
       * 获取content的定位
       * 将content的定位存入contentSta
       */
      const { left, top } = content.getBoundingClientRect();
      Object.assign(contentSta, { left, top });
    });
    /**
     * 若thumb没有被focus，则在鼠标离开rootDom时隐藏thumb
     */
    rootDom.addEventListener("mouseout", () => {
      thumbSta.focusX || (thumbSta.showX = false);
      thumbSta.focusY || (thumbSta.showY = false);
    });
    /**
     * 滚轮事件
     */
    rootDom.addEventListener("wheel", (event) => {
      const { deltaY } = event;
      const j = Date.now();
      console.dir(j - i);
      i = j;
      if (deltaY > 0) {
        translateY.value += 30;
      } else {
        translateY.value -= 30;
      }
    });
  },
};
const vThumbX: Directive<HTMLElement> = {
  mounted(thumbX) {
    thumbX.addEventListener("mousedown", (event) => {
      const { button, offsetX } = event;
      if (button === 0) {
        thumbSta.focusX = true;
        const controller = new AbortController();
        const signal = controller.signal;
        document.addEventListener(
          "mousemove",
          (event) => {
            const { clientX } = event;
            translateX.value = clientX - offsetX - contentSta.left;
          },
          { signal }
        );
        document.addEventListener("mouseup", (event) => {
          const { button } = event;
          if (button === 0) {
            controller.abort();
            thumbSta.showX = false;
            thumbSta.focusX = false;
          }
        });
      }
    });
  },
};
const vThumbY: Directive<HTMLElement> = {
  mounted(thumbY) {
    thumbY.addEventListener("mousedown", (event) => {
      const { button, offsetY } = event;
      if (button === 0) {
        thumbSta.focusY = true;
        const controller = new AbortController();
        const signal = controller.signal;
        document.addEventListener(
          "mousemove",
          (event) => {
            event.preventDefault();
            const { clientY } = event;
            translateY.value = clientY - offsetY - contentSta.top;
          },
          { signal }
        );
        document.addEventListener("mouseup", (event) => {
          const { button } = event;
          console.log(button);
          if (button === 0) {
            thumbSta.showY = false;
            thumbSta.focusY = false;
            controller.abort();
          }
        });
      }
    });
  },
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
  @media (any-pointer: fine) {
    overflow: hidden;
  }
  @media (any-pointer: coarse) {
    overflow: auto;
    overflow: overlay;
  }
}
.thumb-trans {
  transition: transform linear 0.1s;
}
.thumb-focus {
  background-color: rgba(#000, 0.4) !important;
}
@mixin thumb {
  position: absolute;
  border-radius: 4px;
  background-color: rgba(#000, 0.2);
  cursor: pointer;
  will-change: transform;
  &:hover {
    background-color: rgba(#000, 0.3);
  }
  @media (any-pointer: coarse) {
    display: none !important;
  }
}
.thumb-x {
  @include thumb();
  @include position(auto, auto, 0, 0);
  width: 30px;
  height: 8px;
}
.thumb-y {
  @include thumb();
  @include position(0, 0, auto, auto);
  width: 8px;
  height: 30px;
}
</style>
