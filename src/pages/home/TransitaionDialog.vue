<script lang="ts" setup>
import * as Vue from "vue";

const props = defineProps<{
  open: boolean;
}>();

const ref = Vue.ref<HTMLDialogElement>();
</script>

<template>
  <dialog
    ref="ref"
    :open="props.open"
    :class="[props.open ? 'appear' : 'vanish']"
  >
    <slot></slot>
  </dialog>
</template>

<style scoped lang="scss">
.appear {
  animation: appear 0.3s;
}
.vanish {
  animation: vanish 0.3s;
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes vanish {
  from {
    display: block;
    opacity: 1;
  }
  to {
    display: none;
    opacity: 0;
  }
}
</style>
