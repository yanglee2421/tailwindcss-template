<script lang="ts" setup>
import { watch, reactive } from "vue";
const state = reactive({ count: 0, prev: 0, three: 0 });
watch(
  () => state.count,
  () => {
    state.prev += 1;
    console.log("count");
  }
);
watch(state, () => {
  console.log("state", state);
});
</script>

<template>
  <div class="p-1">
    <p>{{ state.count }}</p>
    <el-link
      @click="
        Object.assign(state, { count: state.count + 1 });
        Object.assign(state, { count: state.count + 1 });
      "
      type="primary"
      >link</el-link
    >
  </div>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
