<script lang="ts" setup>
import * as Vue from "vue";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import PerfectScrollbar from "perfect-scrollbar";

const ps = Vue.ref<HTMLDivElement | null>(null);

Vue.watchPostEffect((onClearup) => {
  const psEl = Vue.unref(ps);

  if (!(psEl instanceof HTMLElement)) {
    return;
  }

  const psb = new PerfectScrollbar(psEl);
});
</script>

<template>
  <div
    ref="ps"
    class="relative h-full overflow-hidden"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped></style>
