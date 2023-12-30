<script lang="ts" setup>
// Hooks Imports
import { useObserverResize } from "@/hooks/dom";

// Utils Imports
import { Snow } from "./Snow";

// Vue Imports
import * as Vue from "vue";

// DOM Ref
const boxRef = Vue.ref<HTMLDivElement>();
const cvsRef = Vue.ref<HTMLCanvasElement>();
const sizeRef = useObserverResize(boxRef);

Vue.watch(
  [sizeRef, cvsRef],
  ([size, cvs], prevArgs, onCleanup) => {
    if (!size) return prevArgs;
    if (!cvs) return;

    const [box] = size.contentBoxSize;

    Object.assign(cvs, {
      width: box.inlineSize,
      height: box.blockSize,
    });
    const snow = new Snow(cvs, (box.inlineSize / 1920) * 200);
    snow.animation();

    onCleanup(() => {
      snow.abortAnimation();
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
    :class="[
      'relative',
      'h-full',
      'p-0',
      'border-0',
      'm-0',
      'bg-cover',
      'bg-fixed',
      'snow-warpper',
    ]"
  >
    <canvas
      ref="cvsRef"
      :class="['absolute', 'inset-0']"
    ></canvas>
    <div
      :class="[
        'relative',
        'z-10',
        'flex',
        'h-full',
        'justify-center',
        'items-center',
      ]"
    >
      <div :class="['mt-96']">
        <router-link :to="{ name: 'home' }">
          <el-button
            size="large"
            type="primary"
            >Take me home</el-button
          >
        </router-link>
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
