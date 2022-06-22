<template>
  <div class="b overflow-hidde">
    <input v-model="value" class="num-no-btn" @change="fun" />
  </div>
</template>
<script setup>
import { ref, watchEffect } from "vue";
const value = ref("");
const i = ref(0);
watchEffect(() => {
  console.log(value.value);
});
const fun = () => {
  value.value = value.value.replace(/[^\d]/g, "");
};
</script>
<style lang='scss' scoped>
:deep(.el-table__body tr.current-row > td.el-table__cell) {
  --el-table-current-row-bg-color: red;
  background-color: var(--el-table-current-row-bg-color);
}
</style>