<script lang="ts" setup>
// Utils Imports
import { Particles } from "./Particle";
import { useObserverResize } from "@/hooks/dom";

// Vue Imports
import * as Vue from "vue";

const canRef = Vue.ref<HTMLCanvasElement>();
const boxRef = Vue.ref<HTMLDivElement>();
const sizeRef = useObserverResize(boxRef);

Vue.watch(
  [sizeRef, canRef],
  ([size, canvas], prevArgs, onCleanup) => {
    if (!size) return prevArgs;
    if (!canvas) return;

    const [box] = size.contentBoxSize;

    Object.assign(canvas, {
      width: box.inlineSize,
      height: box.blockSize,
    });

    const p = new Particles(canvas, (box.inlineSize / 1920) * 120, 110);
    p.animate();

    onCleanup(() => {
      p.abortAnimate();
    });
  },
  {
    immediate: true,
    flush: "post",
  }
);

defineOptions({ inheritAttrs: true });
</script>

<template>
  <div
    ref="boxRef"
    :class="['relative', 'h-full', 'particle-box']"
  >
    <canvas
      ref="canRef"
      :class="['absolute', 'inset-0']"
    ></canvas>
  </div>
</template>

<style lang="scss" scoped>
.particle-box {
  background-image: linear-gradient(
    rgba(193, 35, 35, 0.71),
    rgba(32, 39, 216, 0.71)
  );
}
</style>
