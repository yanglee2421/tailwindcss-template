<script lang="ts" setup>
import { reactive, ref, unref } from "vue";
import { useResize } from "@/hook";
import { Particles } from "@/util";
import CardRegister from "./components/card-register.vue";
import CardLogin from "./components/card-login.vue";

// 粒子动画
const cvsRef = ref<HTMLCanvasElement>();
let timer: number | NodeJS.Timeout = 0;
const resizeRef = useResize((box) => {
  const canvas = unref(cvsRef);
  if (!canvas) return;
  Object.assign(canvas, box);
  let p: null | Particles = null;
  clearTimeout(timer);
  timer = setTimeout(() => {
    p = new Particles(canvas, (box.width / 1920) * 120);
    p.animate();
    p.bindEvent();
  }, 500);
  return () => {
    clearTimeout(timer);
    p?.abortAnimate();
    p?.abortEvent();
  };
});
</script>

<template>
  <div
    :ref="(e) => (resizeRef = e)"
    class="box"
  >
    <canvas :ref="(e:any) => (cvsRef = e)"></canvas>
    <card-register />
    <card-login />
  </div>
</template>

<style lang="scss" scoped>
.box {
  @extend .h-100h;
  @include bgc-img;
  position: relative;
  background-image: url("@/assets/image/bg/bg.jpg");
  display: grid;
  place-items: center;
  @media (min-width: 768px) {
    grid-template: auto/repeat(2, minmax(0, auto));
    gap: 10px;
    place-content: center;
    > *:not(canvas) {
      transform: translate(0, -5%);
    }
  }
  > canvas {
    position: absolute;
    @include position(0);
  }
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
