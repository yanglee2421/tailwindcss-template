<template>
  <div ref="root"></div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { ref, reactive, watchPostEffect, onMounted } from "vue";

const state = reactive<any>({
  ref: null,
});
const root = ref();
watchPostEffect(() => {
  // console.log(state.ref);
  console.log(root.value);
});
onMounted(() => {
  console.log(root.value);
});
</script>
<style lang="scss" scoped></style>
