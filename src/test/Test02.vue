<template>
  <div>
    <el-cascader
      v-model="state.value"
      :options="opt"
      :props="{ multiple: true, checkStrictly: true, emitPath: false }"
      collapse-tags
    >
    </el-cascader>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive, watch } from "vue";
const state = reactive({
  value: "",
});
watch(
  () => state.value,
  (value) => {
    console.log(value);
  }
);

const opt = reactive([
  {
    label: "1",
    value: "1",
    children: [
      {
        label: "1-1",
        value: "1-1",
        children: [
          { label: "1-1-1", value: "1-1-1" },
          { label: "1-1-2", value: "1-1-2" },
        ],
      },
      {
        label: "1-2",
        value: "1-2",
        children: [
          { label: "1-2-1", value: "1-2-1" },
          { label: "1-2-2", value: "1-2-2" },
        ],
      },
    ],
  },
  {
    label: "2",
    value: "2",
    children: [
      {
        label: "2-1",
        value: "2-1",
        children: [
          { label: "2-1-1", value: "2-1-1" },
          { label: "2-1-2", value: "2-1-2" },
        ],
      },
    ],
  },
]);
</script>
<style lang="scss" scoped></style>
