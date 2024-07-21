<script lang="ts" setup>
import * as Vue from "vue";
import { RouterLink } from "vue-router";
import { Snow } from "@/libs/Snow";

const boxRef = Vue.ref<HTMLDivElement>();
const cvsRef = Vue.ref<HTMLCanvasElement>();

Vue.watchPostEffect((onCleanup) => {
  const boxEl = Vue.unref(boxRef);
  const cvs = Vue.unref(cvsRef);

  if (!(cvs instanceof HTMLElement)) {
    return;
  }

  if (!(boxEl instanceof HTMLElement)) {
    return;
  }

  let snow: null | Snow = null;
  const observer = new ResizeObserver(([{ contentBoxSize }]) => {
    const [box] = contentBoxSize;

    Object.assign(cvs, {
      width: box.inlineSize,
      height: box.blockSize,
    });
    snow = new Snow(cvs, (box.inlineSize / 1920) * 200);
    snow.animation();
  });

  observer.observe(boxEl);

  onCleanup(() => {
    observer.disconnect();
    snow?.abortAnimation();
  });
});
</script>

<template>
  <div
    ref="boxRef"
    class="snow-warpper relative m-0 h-full border-0 bg-cover bg-fixed p-0"
  >
    <canvas
      ref="cvsRef"
      class="absolute inset-0"
    ></canvas>
    <div class="relative z-10 flex h-full items-center justify-center">
      <div class="mt-96">
        <RouterLink :to="{ name: 'home' }"> Take me home </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.snow-warpper {
  background-image: url("@/assets/image/bg/snow.jpg");
  background-position: top center;
}
</style>
