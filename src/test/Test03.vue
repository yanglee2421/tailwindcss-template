<template>
  <div>
    <div
      :ref="(ref) => (scrollSta.box = ref)"
      class="scrollbar"
    >
      <div
        :ref="(ref) => (scrollSta.x = ref)"
        class="scrollbar-x"
      ></div>
      <div
        :ref="(ref) => (scrollSta.y = ref)"
        @click="moveXFn"
        @mousemove="moveFn"
        class="scrollbar-y"
      ></div>
      <div
        :ref="(ref) => (scrollSta.body = ref)"
        class="scrollbar__body"
      ></div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
const scrollSta = reactive<Record<string, any>>({
  box: null,
  x: null,
  y: null,
  body: null,
});
const moveXFn = (event: MouseEvent) => {
  console.log(event);
};
const h = ref(0);
const moveFn = (event: MouseEvent) => {
  event.preventDefault();
  const { clientY, offsetY, movementY } = event;
  console.log(offsetY);
  const dom = event.currentTarget as HTMLElement;
  h.value += movementY;
  dom.style.transform = `translateY(${h.value}px)`;
};
onMounted(() => {
  const scrollWidth = scrollSta.box.scrollWidth;
  const scrollHeight = scrollSta.box.scrollHeight;
  const clientWidth = scrollSta.box.clientWidth;
  const clientHeight = scrollSta.box.clientHeight;
  scrollSta.y.style.height =
    scrollHeight > clientHeight ? clientHeight ** 2 / scrollHeight + "px" : 0;
  scrollSta.x.style.width =
    scrollWidth > clientWidth ? clientWidth ** 2 / scrollWidth + "px" : 0;
});
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
    width: 100px;
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
